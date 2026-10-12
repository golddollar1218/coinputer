import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = join(root, "api", "pump", "index.html");
const labelsPath = join(root, "api", "computers", "pair-labels", "index.html");
const port = Number(process.env.PORT) || 3000;
const rpcUrl = process.env.SOLANA_RPC || "https://solana-rpc.publicnode.com";
const indexedRpcUrl = process.env.SOLANA_INDEXED_RPC || "https://api.mainnet-beta.solana.com";
const pubkeyPattern = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const signaturePattern = /^[1-9A-HJ-NP-Za-km-z]{64,128}$/;
const base58Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const splTokenProgram = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
const token2022Program = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
};

const snapshot = JSON.parse(readFileSync(catalogPath, "utf8"));
const labelSnapshot = JSON.parse(readFileSync(labelsPath, "utf8"));
if (!Array.isArray(snapshot.quotes) || snapshot.quotes.length === 0) {
  throw new Error("Pump catalog is missing quotes.");
}
if (!labelSnapshot.labels || typeof labelSnapshot.labels !== "object") {
  throw new Error("Pair labels are missing.");
}

function pairLabels() {
  return {
    ...labelSnapshot,
    observedAt: new Date().toISOString(),
  };
}

function sendJson(response, status, body) {
  const payload = JSON.stringify(body);
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(payload),
  });
  response.end(payload);
}

function readBody(request) {
  return new Promise((resolveBody, rejectBody) => {
    const chunks = [];
    let size = 0;
    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > 1_000_000) {
        rejectBody(Object.assign(new Error("Request body is too large."), { status: 413 }));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => resolveBody(Buffer.concat(chunks).toString("utf8")));
    request.on("error", rejectBody);
  });
}

async function rpc(method, params, url = rpcUrl) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error("Solana RPC is unavailable.");
  const body = await response.json();
  if (body.error) throw new Error(body.error.message || "Solana RPC request failed.");
  return body.result;
}

async function rpcIndexed(method, params) {
  try {
    return await rpc(method, params);
  } catch (error) {
    if (indexedRpcUrl === rpcUrl) throw error;
    return rpc(method, params, indexedRpcUrl);
  }
}

function catalog() {
  return {
    ...snapshot,
    observedAt: new Date().toISOString(),
  };
}

function quoteFor(mint) {
  return snapshot.quotes.find((quote) => quote.mint === mint) || null;
}

function byteLength(value) {
  return Buffer.byteLength(value, "utf8");
}

function validateLaunch(launch) {
  if (!snapshot.createEnabled) {
    return "Pump.fun launch creation is currently unavailable. Read the launch options again.";
  }
  if (!launch || typeof launch !== "object" || Array.isArray(launch)) {
    return "Launch details are missing.";
  }
  if (!pubkeyPattern.test(launch.wallet || "")) return "Connect a Solana wallet before preparing a launch.";
  if (!pubkeyPattern.test(launch.quoteMint || "")) return "Choose a quote mint in Pump.fun’s current mainnet list.";
  const quote = quoteFor(launch.quoteMint);
  if (!quote) return "Choose a quote mint in Pump.fun’s current mainnet list.";
  if (typeof launch.name !== "string" || !launch.name.trim() || byteLength(launch.name.trim()) > 32) {
    return "Give your coin a name of at most 32 UTF-8 bytes.";
  }
  if (typeof launch.symbol !== "string" || !launch.symbol.trim() || byteLength(launch.symbol.trim()) > 13) {
    return "Add a ticker of at most 13 UTF-8 bytes.";
  }
  if (typeof launch.uri !== "string" || !launch.uri.startsWith("https://") || launch.uri.length > 200) {
    return "Coin metadata must be an https:// link.";
  }
  if (typeof launch.devBuy !== "string" || !/^\d+(\.\d+)?$/.test(launch.devBuy)) {
    return "Enter a nonnegative first-buy amount, or 0 to skip it.";
  }
  if (launch.holderRewards || launch.tokenizedAgent || launch.buybackBps) {
    return "Holder rewards and tokenized-agent payments are unavailable for launches that dedicate creator fees to their computer.";
  }
  const fee = Number(launch.creatorFeeBps);
  if (!Number.isInteger(fee) || fee < 0) return "Creator fee is not a whole number of basis points.";
  if (quote.source === "quoteControl") {
    if (!snapshot.customFeesEnabled && fee !== 0) return "Custom creator fees are not enabled.";
    if (fee > snapshot.maxCreatorFeeBps) return `Creator fee cannot exceed ${snapshot.maxCreatorFeeBps} basis points.`;
  } else if (fee !== 0) {
    return "Creator fees can only be set on quote-control pairs.";
  }
  if (launch.mayhem) {
    if (!snapshot.mayhemEnabled) return "Mayhem mode is not enabled on mainnet.";
    if (quote.source === "quoteControl") return "Mayhem mode is unavailable for this custom pair.";
  }
  if (launch.lookupTable != null && launch.lookupTable !== "" && !pubkeyPattern.test(launch.lookupTable)) {
    return "The saved address table is not a Solana account.";
  }
  return "";
}

function launchOptions(response) {
  sendJson(response, 200, catalog());
}

async function confirmation(response, search) {
  const signature = search.get("signature") || "";
  const kind = search.get("kind") || "";
  const address = search.get("address") || "";
  const wallet = search.get("wallet") || "";
  const height = Number(search.get("height"));
  if (!signaturePattern.test(signature) || !["lookup", "launch"].includes(kind) || !pubkeyPattern.test(address) || !pubkeyPattern.test(wallet) || !Number.isSafeInteger(height) || height <= 0) {
    sendJson(response, 400, { error: "Confirmation check unavailable." });
    return;
  }
  let status;
  let blockHeight;
  try {
    const statuses = await rpc("getSignatureStatuses", [[signature], { searchTransactionHistory: true }]);
    status = statuses?.value?.[0] || null;
    blockHeight = await rpc("getBlockHeight", [{ commitment: "confirmed" }]);
  } catch {
    sendJson(response, 503, { error: "Confirmation check unavailable." });
    return;
  }
  if (status?.err) {
    sendJson(response, 200, { state: "failed" });
    return;
  }
  if (!status || (status.confirmationStatus !== "confirmed" && status.confirmationStatus !== "finalized")) {
    sendJson(response, 200, { state: !status && Number.isInteger(blockHeight) && blockHeight > height ? "expired" : "processed" });
    return;
  }
  let transaction;
  try {
    transaction = await rpc("getTransaction", [signature, { commitment: "confirmed", maxSupportedTransactionVersion: 0, encoding: "json" }]);
  } catch {
    sendJson(response, 503, { error: "Confirmation check unavailable." });
    return;
  }
  if (!transaction) {
    sendJson(response, 200, { state: "processed" });
    return;
  }
  const keys = transaction?.transaction?.message?.accountKeys || [];
  const accounts = keys.map((key) => (typeof key === "string" ? key : key?.pubkey)).filter(Boolean);
  const matches = accounts.includes(wallet) && accounts.includes(address);
  if (!matches) {
    sendJson(response, 200, { state: "mismatch" });
    return;
  }
  const confirmation = status.confirmationStatus === "finalized" ? "finalized" : "confirmed";
  sendJson(response, 200, { state: confirmation });
}

async function prepareOrSubmit(request, response) {
  let body;
  try {
    body = JSON.parse(await readBody(request));
  } catch (error) {
    sendJson(response, error.status || 400, { error: error.status === 413 ? error.message : "Launch request was not valid JSON." });
    return;
  }
  if (body?.action === "prepare") {
    const problem = validateLaunch(body.launch);
    sendJson(response, problem ? 400 : 503, {
      error: problem || "Launch signing is not available from this service. Launch options can still be read.",
    });
    return;
  }
  if (body?.action === "submit" || body?.action === "submit-lookup") {
    sendJson(response, 503, { error: "Signed launch submission is not available from this service." });
    return;
  }
  sendJson(response, 400, { error: "Unknown launch action." });
}

function encodeBase58(bytes) {
  let zeros = 0;
  while (zeros < bytes.length && bytes[zeros] === 0) zeros += 1;
  let value = 0n;
  for (const byte of bytes) value = (value << 8n) + BigInt(byte);
  let encoded = "";
  while (value > 0n) {
    encoded = base58Alphabet[Number(value % 58n)] + encoded;
    value /= 58n;
  }
  return "1".repeat(zeros) + encoded;
}

function mintAccount(data, owner) {
  if (data.length < 82) return null;
  const mintAuthorityOption = data.readUInt32LE(0);
  const freezeAuthorityOption = data.readUInt32LE(46);
  if (![0, 1].includes(mintAuthorityOption) || ![0, 1].includes(freezeAuthorityOption) || data[45] !== 1) return null;
  if (owner === splTokenProgram && data.length !== 82) return null;
  const authority = (option, offset) => (option === 0 ? null : encodeBase58(data.subarray(offset, offset + 32)));
  return {
    supply: data.readBigUInt64LE(36).toString(),
    decimals: data[44],
    mintAuthority: authority(mintAuthorityOption, 4),
    freezeAuthority: authority(freezeAuthorityOption, 50),
  };
}

async function recentTransactions(address) {
  const rows = await rpc("getSignaturesForAddress", [address, { limit: 8, commitment: "finalized" }]);
  if (!Array.isArray(rows)) return [];
  return rows.map((row) => ({
    signature: row.signature,
    slot: row.slot,
    blockTime: row.blockTime ?? null,
    failed: row.err != null,
    confirmationStatus: row.confirmationStatus || "finalized",
  }));
}

async function readMint(response, address) {
  if (!pubkeyPattern.test(address)) {
    sendJson(response, 400, { error: "Enter a valid Solana mint address." });
    return;
  }
  const account = await rpc("getAccountInfo", [address, { encoding: "base64", commitment: "finalized" }]);
  const value = account?.value;
  const data = value?.data?.[0] ? Buffer.from(value.data[0], "base64") : null;
  const mint = data && (value.owner === splTokenProgram || value.owner === token2022Program) ? mintAccount(data, value.owner) : null;
  if (!mint) {
    sendJson(response, 404, { error: "That address is not a mainnet token mint." });
    return;
  }
  let transactions = [];
  let activityError = null;
  try {
    transactions = await recentTransactions(address);
  } catch {
    activityError = "Recent activity is temporarily unavailable.";
  }
  sendJson(response, 200, {
    kind: "token",
    cluster: "mainnet",
    address,
    slot: account.context.slot,
    observedAt: new Date().toISOString(),
    program: value.owner,
    ...mint,
    transactions,
    activityError,
  });
}

async function tokenHoldings(wallet, mint) {
  const [accounts, mintInfo] = await Promise.all([
    rpcIndexed("getTokenAccountsByOwner", [wallet, { mint }, { encoding: "jsonParsed", commitment: "finalized" }]),
    rpc("getAccountInfo", [mint, { encoding: "base64", commitment: "finalized" }]),
  ]);
  const mintBytes = mintInfo?.value?.data?.[0] ? Buffer.from(mintInfo.value.data[0], "base64") : null;
  let decimals = mintBytes && mintBytes.length >= 45 ? mintBytes[44] : 0;
  let amount = 0n;
  const list = Array.isArray(accounts?.value) ? accounts.value : [];
  for (const item of list) {
    const tokenAmount = item?.account?.data?.parsed?.info?.tokenAmount;
    if (typeof tokenAmount?.amount === "string" && /^\d+$/.test(tokenAmount.amount)) amount += BigInt(tokenAmount.amount);
    if (Number.isInteger(tokenAmount?.decimals)) decimals = tokenAmount.decimals;
  }
  return {
    amount: amount.toString(),
    decimals,
    accounts: list.length,
    slot: accounts?.context?.slot ?? mintInfo?.context?.slot ?? 0,
  };
}

async function readWallet(response, params) {
  const address = params.get("address") || "";
  const mint = params.get("mint") || "";
  if (!pubkeyPattern.test(address)) {
    sendJson(response, 400, { error: "Enter a valid Solana wallet address." });
    return;
  }
  const balance = await rpc("getBalance", [address, { commitment: "finalized" }]);
  if (!Number.isSafeInteger(balance?.value) || balance.value < 0) {
    sendJson(response, 502, { error: "Mainnet data is temporarily unavailable. Refresh to try the connection again." });
    return;
  }
  let tokenBalance = null;
  let tokenError = null;
  if (mint) {
    if (!pubkeyPattern.test(mint)) tokenError = "Selected mint is not a valid address.";
    else {
      try {
        tokenBalance = await tokenHoldings(address, mint);
      } catch {
        tokenError = "Token holdings are temporarily unavailable.";
      }
    }
  }
  let transactions = [];
  let activityError = null;
  try {
    transactions = await recentTransactions(address);
  } catch {
    activityError = "Recent activity is temporarily unavailable.";
  }
  sendJson(response, 200, {
    kind: "wallet",
    cluster: "mainnet",
    address,
    mint: pubkeyPattern.test(mint) ? mint : null,
    observedAt: new Date().toISOString(),
    slot: balance.context.slot,
    lamports: String(balance.value),
    tokenBalance,
    tokenError,
    transactions,
    activityError,
  });
}

async function mainnetRead(response, url) {
  const kind = url.searchParams.get("kind") || "network";
  if (kind === "network") {
    const body = apiSnapshot("/api/mainnet");
    if (!body) {
      sendJson(response, 500, { error: "Mainnet data is temporarily unavailable. Refresh to try the connection again." });
      return;
    }
    sendJson(response, 200, { ...body, observedAt: new Date().toISOString() });
    return;
  }
  if (kind === "token") {
    await readMint(response, url.searchParams.get("address") || "");
    return;
  }
  if (kind === "wallet") {
    await readWallet(response, url.searchParams);
    return;
  }
  sendJson(response, 400, { error: "Mainnet data is temporarily unavailable. Refresh to try the connection again." });
}

function apiSnapshot(pathname) {
  const relative = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!relative.startsWith("api/")) return null;
  const candidates = [resolve(root, relative, "index.html"), resolve(root, `${relative}.html`), resolve(root, relative)];
  for (const file of candidates) {
    if (file !== root && !file.startsWith(root + sep)) continue;
    if (!existsSync(file) || !statSync(file).isFile()) continue;
    const text = readFileSync(file, "utf8").trim();
    if (!text.startsWith("{") && !text.startsWith("[")) continue;
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  }
  return null;
}

function serveStatic(request, response, pathname) {
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const file = resolve(root, relative);
  if (file !== root && !file.startsWith(root + sep)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  let target = file;
  if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
  if (!existsSync(target) || !statSync(target).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
    return;
  }
  response.writeHead(200, {
    "Content-Type": types[extname(target)] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(target).pipe(response);
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
  try {
    const pumpPath = url.pathname.replace(/\/+$/, "") || "/";
    const pumpCatalog = pumpPath === "/api/pump" || url.pathname === "/api/pump/index.html";
    if (pumpCatalog) {
      if (request.method === "GET" && url.pathname !== "/api/pump/index.html" && url.searchParams.has("signature")) {
        await confirmation(response, url.searchParams);
        return;
      }
      if (request.method === "GET" || request.method === "HEAD") {
        launchOptions(response);
        return;
      }
      if (request.method === "POST" && pumpPath === "/api/pump") {
        await prepareOrSubmit(request, response);
        return;
      }
      response.writeHead(405, { Allow: "GET, POST" }).end("Method not allowed");
      return;
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405).end("Method not allowed");
      return;
    }
    const pathname = decodeURIComponent(url.pathname);
    if ((pathname.replace(/\/+$/, "") || "/") === "/api/mainnet") {
      await mainnetRead(response, url);
      return;
    }
    if ((pathname.replace(/\/+$/, "") || "/") === "/api/computers") {
      sendJson(response, 200, pairLabels());
      return;
    }
    if (pathname.startsWith("/api/")) {
      const snapshotBody = apiSnapshot(pathname);
      if (snapshotBody) {
        sendJson(response, 200, snapshotBody);
        return;
      }
    }
    serveStatic(request, response, pathname);
  } catch (error) {
    if (!response.headersSent) sendJson(response, 500, { error: "The launch service is temporarily unavailable. Refresh or try reading launch options again." });
    else response.end();
  }
});

server.listen(port, () => {
  console.log(`Coinputer backend http://localhost:${port}`);
  console.log(`Launch options http://localhost:${port}/api/pump`);
});
