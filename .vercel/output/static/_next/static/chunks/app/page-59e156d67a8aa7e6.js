(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [172, 974],
  {
    3418: (e) => {
      e.exports = {
        record: "token-computer-record_record__BmoJb",
        heading: "token-computer-record_heading__iR0H6",
        subheading: "token-computer-record_subheading__NF9Ms",
        status: "token-computer-record_status__WUiJ2",
        eyebrow: "token-computer-record_eyebrow__2cinU",
        motd: "token-computer-record_motd__O68Yi",
        label: "token-computer-record_label__Mzhnv",
        specs: "token-computer-record_specs__AVQ7_",
        counters: "token-computer-record_counters__ClDvV",
        details: "token-computer-record_details__9QSoI",
        note: "token-computer-record_note__bWbNe",
        notice: "token-computer-record_notice__77vPA",
        warning: "token-computer-record_warning__vUcE7",
        services: "token-computer-record_services__qceI_",
        journal: "token-computer-record_journal__jopit",
        footer: "token-computer-record_footer__4rTdR",
      };
    },
    4218: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => e6 });
      var n = a(5155),
        s = a(1822),
        r = a(5124),
        i = a(5495),
        l = a(6079),
        o = a(2115),
        c = a(3379);
      async function d(e, t) {
        t.assertCurrent();
        let a = await t.send(e);
        if ((t.assertCurrent(), 401 !== a.status)) return a;
        (await t.authenticate(), t.assertCurrent());
        let n = await t.send(e);
        return (t.assertCurrent(), n);
      }
      var u = a(897),
        h = a(6172),
        m = a(2655);
      let p = "coinputer.pending-mainnet-launch",
        x = (e) => `${p}.${e}`,
        f = (e) => "string" == typeof e && (0, m.bA)(e);
      function g(e) {
        if ("string" != typeof e || e.length < 64 || e.length > 88) return !1;
        let t = BigInt(0);
        for (let a of e) {
          let e =
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(
              a,
            );
          if (e < 0) return !1;
          t = t * BigInt(58) + BigInt(e);
        }
        if (t === BigInt(0)) return !1;
        let a = 0;
        for (; t > BigInt(0); ) (a++, (t >>= BigInt(8)));
        return a + (e.match(/^1*/)?.[0].length || 0) === 64;
      }
      function b(e, t) {
        return (
          "string" == typeof e &&
          e.length <= t &&
          !!e.trim() &&
          !/[\u0000-\u001f\u007f]/.test(e) &&
          new TextEncoder().encode(e).length <= t
        );
      }
      function j(e) {
        if (
          !e ||
          "object" != typeof e ||
          Array.isArray(e) ||
          ("lookup" !== e.kind && "launch" !== e.kind) ||
          !f(e.wallet) ||
          !f(e.quoteMint) ||
          !g(e.signature) ||
          !Number.isSafeInteger(e.lastValidBlockHeight) ||
          e.lastValidBlockHeight <= 0 ||
          !b(e.name, 32) ||
          !b(e.symbol, 13) ||
          "string" != typeof e.mint ||
          "string" != typeof e.lookupTable ||
          ("lookup" === e.kind
            ? "" !== e.mint || !f(e.lookupTable)
            : !f(e.mint) || ("" !== e.lookupTable && !f(e.lookupTable))) ||
          (void 0 !== e.creatorRecipient && !f(e.creatorRecipient))
        )
          return null;
        let t = {
          kind: e.kind,
          mint: e.mint,
          lookupTable: e.lookupTable,
          wallet: e.wallet,
          quoteMint: e.quoteMint,
          lastValidBlockHeight: e.lastValidBlockHeight,
          signature: e.signature,
          name: e.name,
          symbol: e.symbol,
          status: "pending",
        };
        if (
          (void 0 !== e.creatorRecipient &&
            (t.creatorRecipient = e.creatorRecipient),
          void 0 !== e.transaction)
        ) {
          if (
            !(function (e, t) {
              if (
                "string" != typeof e ||
                !e.length ||
                e.length > 1644 ||
                e.length % 4 != 0 ||
                !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                  e,
                )
              )
                return !1;
              try {
                let a = atob(e);
                if (btoa(a) !== e || a.length > 1232) return !1;
                let n = Uint8Array.from(a, (e) => e.charCodeAt(0)),
                  s = 0,
                  r = (e) => {
                    if (e < 0 || s + e > n.length) throw Error();
                    let t = n.subarray(s, s + e);
                    return ((s += e), t);
                  },
                  i = () => r(1)[0],
                  l = () => {
                    let e = 0;
                    for (let t = 0; t < 3; t++) {
                      let a = i();
                      if (2 === t && 252 & a) break;
                      if (((e |= (127 & a) << (7 * t)), !(128 & a))) {
                        if (t > 0 && 0 === a) throw Error();
                        return e;
                      }
                    }
                    throw Error();
                  },
                  o = "lookup" === t.kind ? 1 : 2,
                  c = l();
                if (c !== o) return !1;
                let d = Array.from({ length: c }, () => r(64));
                if (
                  d.some((e) => e.every((e) => 0 === e)) ||
                  (0, h.encodeBase58)(d[0]) !== t.signature
                )
                  return !1;
                let u = i(),
                  m = !!(128 & u);
                if (m && 128 !== u) return !1;
                let p = m ? i() : u,
                  x = i(),
                  f = i(),
                  g = l();
                if (p !== o || x > p || g < o || g > 256 || f > g - o)
                  return !1;
                let b = Array.from({ length: g }, () =>
                  (0, h.encodeBase58)(r(32)),
                );
                if (
                  b[0] !== t.wallet ||
                  ("launch" === t.kind && b[1] !== t.mint) ||
                  ("lookup" === t.kind && !b.includes(t.lookupTable))
                )
                  return !1;
                r(32);
                let j = l();
                if (j < 1 || j > 256) return !1;
                let v = [];
                for (let e = 0; e < j; e++)
                  (v.push(i()), v.push(...r(l())), r(l()));
                let w = [],
                  y = 0;
                if (m) {
                  let e = l();
                  if (e > 256) return !1;
                  for (let t = 0; t < e; t++)
                    (w.push((0, h.encodeBase58)(r(32))),
                      (y += r(l()).length),
                      (y += r(l()).length));
                }
                if (s !== n.length || g + y > 256 || v.some((e) => e >= g + y))
                  return !1;
                return "lookup" === t.kind
                  ? 0 === w.length
                  : t.lookupTable
                    ? w.includes(t.lookupTable)
                    : 0 === w.length;
              } catch {
                return !1;
              }
            })(e.transaction, t)
          )
            return null;
          t.transaction = e.transaction;
        }
        return t;
      }
      function v(e) {
        if (!e || e.length > 8192) return null;
        try {
          return j(JSON.parse(e));
        } catch {
          return null;
        }
      }
      function w(e, t) {
        let a = JSON.stringify(t);
        return (e.setItem(x(t.wallet), a), e.getItem(x(t.wallet)) === a);
      }
      var y = a(981),
        k = a(467),
        N = a(1275),
        C = a(6005),
        E = a(4825),
        S = a(4474),
        A = a(9658),
        T = a(1337);
      function R({ className: e, ...t }) {
        return (0, n.jsx)("textarea", {
          "data-slot": "textarea",
          className: (0, T.cn)(
            "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
            e,
          ),
          ...t,
        });
      }
      var I = a(4397);
      function O({ className: e, size: t = "default", ...a }) {
        return (0, n.jsx)(I.bL, {
          "data-slot": "switch",
          "data-size": t,
          className: (0, T.cn)(
            "peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
            e,
          ),
          ...a,
          children: (0, n.jsx)(I.zi, {
            "data-slot": "switch-thumb",
            className: (0, T.cn)(
              "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground",
            ),
          }),
        });
      }
      var z = a(4350),
        L = a(9585),
        M = a(2749),
        P = a(4577);
      function $(e) {
        let [t, a] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            let t = !0,
              n = e ? URL.createObjectURL(e) : "";
            return (
              queueMicrotask(() => {
                t && a(e ? { file: e, url: n } : null);
              }),
              () => {
                ((t = !1), n && URL.revokeObjectURL(n));
              }
            );
          }, [e]),
          (t?.file === e && t?.url) || ""
        );
      }
      var U = a(6478),
        _ = a.n(U);
      let B = (e) => `${e.slice(0, 6)}…${e.slice(-6)}`;
      function F({
        prepared: e,
        artwork: t,
        pairLabel: a,
        automaticFirstStart: s = !1,
        accepted: r,
        onAccepted: i,
        busy: l,
        wallet: c,
        error: d,
        onApprove: u,
        onRefresh: h,
        onEdit: p,
      }) {
        let x = $(t),
          f = Date.parse(e.preparedAt) + 45e3,
          [g, b] = (0, o.useState)(
            () => !Number.isFinite(f) || Date.now() >= f,
          );
        (0, o.useEffect)(() => {
          let e = setTimeout(() => b(!0), Math.max(0, f - Date.now()));
          return () => clearTimeout(e);
        }, [f]);
        let j = "lookup" === e.phase,
          v = (0, m.Js)(String(e.computerFundingLamports ?? 0), 9);
        return (0, n.jsxs)(z.Cf, {
          className: "launch-review-dialog launch-manifest-dialog",
          showCloseButton: !l,
          onCloseAutoFocus: (e) => {
            (e.preventDefault(),
              document
                .getElementById("launch-review")
                ?.focus({ preventScroll: !0 }));
          },
          children: [
            (0, n.jsxs)(z.c7, {
              children: [
                (0, n.jsx)("span", {
                  className: "eyebrow",
                  children: "COINPUTER / LAUNCH MANIFEST",
                }),
                (0, n.jsx)(z.L3, {
                  children: j
                    ? "Prepare your launch account"
                    : "Review your coin launch",
                }),
                (0, n.jsx)(z.rr, {
                  children: j
                    ? "A separate, paid address-table setup is needed before this coin can launch."
                    : "Check the details and costs before approving a real Solana mainnet transaction.",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "manifest-body",
              children: [
                (0, n.jsxs)("div", {
                  className: "manifest-identity",
                  children: [
                    x
                      ? (0, n.jsx)("img", {
                          src: x,
                          alt: `${e.name} artwork`,
                          width: 88,
                          height: 88,
                        })
                      : (0, n.jsx)(E.A, { size: 32, "aria-hidden": "true" }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("h3", { children: e.name }),
                        (0, n.jsxs)("span", { children: ["$", e.symbol] }),
                        (0, n.jsx)("small", {
                          children: "Pump.fun \xb7 Solana mainnet",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("section", {
                  "aria-labelledby": "manifest-market",
                  children: [
                    (0, n.jsx)("h3", {
                      id: "manifest-market",
                      children: "Market & first buy",
                    }),
                    (0, n.jsxs)("dl", {
                      className: "review-data",
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "Trading pair" }),
                            (0, n.jsx)("dd", {
                              title: e.quoteMint,
                              children: a,
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "First-buy cap" }),
                            (0, n.jsxs)("dd", {
                              children: [e.devBuyCap, " ", a],
                            }),
                          ],
                        }),
                        !j &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("dt", {
                                children: "Expected initial tokens",
                              }),
                              (0, n.jsx)("dd", { children: e.tokensExpected }),
                            ],
                          }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "Launch mode" }),
                            (0, n.jsxs)("dd", {
                              children: [
                                e.mayhem ? "Mayhem" : "Standard",
                                e.tokenizedAgent
                                  ? ` \xb7 Agent ${e.buybackBps / 100}% buyback`
                                  : "",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    j &&
                      (0, n.jsx)("p", {
                        className: "review-note",
                        children:
                          "No first buy occurs during this setup transaction.",
                      }),
                  ],
                }),
                (e.quoteWarnings?.length || e.quoteUiMultiplier) &&
                  (0, n.jsxs)("section", {
                    "aria-labelledby": "manifest-quote",
                    children: [
                      (0, n.jsx)("h3", {
                        id: "manifest-quote",
                        children: "About this trading pair",
                      }),
                      e.quoteWarnings?.map((e) =>
                        (0, n.jsx)(
                          "p",
                          { className: "review-note", children: e },
                          e,
                        ),
                      ),
                      e.quoteUiMultiplier &&
                        (0, n.jsxs)("p", {
                          className: "review-note",
                          children: [
                            "This token uses scaled balances. Your maximum on-chain debit is ",
                            (0, n.jsxs)("b", {
                              children: [e.devBuyUnits, " base units"],
                            }),
                            "; the display multiplier at review is ",
                            e.quoteUiMultiplier,
                            ". A changed multiplier requires a fresh review.",
                          ],
                        }),
                    ],
                  }),
                e.computerFundingLamports > 0 &&
                  (0, n.jsxs)("section", {
                    "aria-labelledby": "manifest-startup",
                    children: [
                      (0, n.jsx)("h3", {
                        id: "manifest-startup",
                        children: "Initial computer funding",
                      }),
                      (0, n.jsxs)("dl", {
                        className: "review-data",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("dt", {
                                children: j
                                  ? "Due with the coin launch"
                                  : "Launch funding",
                              }),
                              (0, n.jsxs)("dd", { children: [v, " SOL"] }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("dt", {
                                children: "This coin’s computer wallet",
                              }),
                              (0, n.jsx)("dd", {
                                children: (0, n.jsxs)("a", {
                                  href: `https://solscan.io/account/${e.computerFundingRecipient}`,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: [
                                    e.computerFundingRecipient,
                                    (0, n.jsx)(N.A, {
                                      size: 12,
                                      "aria-hidden": "true",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)("p", {
                        className: "review-note",
                        children: j
                          ? "This setup transaction transfers no computer funding. The amount above is due only in the later coin-creation transaction."
                          : "Transferred to this coin’s dedicated computer wallet in the same transaction as creation. It is included in the simulated SOL debit below and is separate from Pump fees and your first buy. If creation fails, this funding transfer does not occur; Solana may still charge a network fee.",
                      }),
                      (0, n.jsx)("p", {
                        className: "review-note",
                        children: s
                          ? "This adds SOL funding. Operator-backed starter credit is allocated separately after coin-launch finalization; Coinputer requests the first start automatically. Funding limits and capacity checks can delay readiness."
                          : "This adds SOL funding. Available compute credit and storage allocation determine when the server can start; this payment does not promise immediate server access.",
                      }),
                    ],
                  }),
                (0, n.jsxs)("section", {
                  "aria-labelledby": "manifest-costs",
                  children: [
                    (0, n.jsx)("h3", {
                      id: "manifest-costs",
                      children: "Transaction costs",
                    }),
                    (0, n.jsxs)("dl", {
                      className: "review-data",
                      children: [
                        j &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("dt", {
                                children: "Refundable table rent",
                              }),
                              (0, n.jsxs)("dd", {
                                children: [
                                  (0, m.Js)(String(e.lookupRentLamports), 9),
                                  " SOL",
                                ],
                              }),
                            ],
                          }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "Network fee" }),
                            (0, n.jsxs)("dd", {
                              children: [
                                (0, m.Js)(String(e.transactionFeeLamports), 9),
                                " SOL",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "manifest-total",
                          children: [
                            (0, n.jsx)("dt", {
                              children: j
                                ? "Simulated setup debit"
                                : "Simulated SOL debit",
                            }),
                            (0, n.jsxs)("dd", {
                              children: [
                                (0, m.Js)(
                                  String(e.simulatedSolDebitLamports),
                                  9,
                                ),
                                " SOL",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("p", {
                      className: "review-note",
                      children: j
                        ? "This creates a reusable address table owned by your wallet. After confirmation, review the coin transaction and its full costs. Table rent can be reclaimed through Solana’s table lifecycle."
                        : "The simulated SOL debit includes initial computer funding, account and transaction costs; SOL pairs also include the first buy. Other pairs debit their quote asset separately, up to your cap. Expected tokens include 1% headroom inside that cap. Costs can change before confirmation.",
                    }),
                  ],
                }),
                (0, n.jsxs)("section", {
                  "aria-labelledby": "manifest-fees",
                  children: [
                    (0, n.jsx)("h3", {
                      id: "manifest-fees",
                      children: "Creator fees fund this computer",
                    }),
                    (0, n.jsxs)("dl", {
                      className: "review-data",
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "Creator fee rate" }),
                            (0, n.jsx)("dd", {
                              children: e.creatorFeeBps
                                ? `${e.creatorFeeBps / 100}%`
                                : "Pump.fun schedule",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "Computer share" }),
                            (0, n.jsx)("dd", {
                              children: "100% of the creator-fee portion",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", {
                              children: j
                                ? "Planned computer fee wallet"
                                : "Computer fee recipient",
                            }),
                            (0, n.jsx)("dd", {
                              children: (0, n.jsxs)("a", {
                                href: `https://solscan.io/account/${e.creatorRecipient}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  e.creatorRecipient,
                                  (0, n.jsx)(N.A, {
                                    size: 12,
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("p", {
                      className: "review-warning",
                      children: j
                        ? "This setup does not create a coin, buy tokens, assign creator fees on-chain or rent a server. The coin transaction requires a separate review and approval."
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              "All of the creator-fee portion accrues to the dedicated computer wallet above on Pump.fun, not to your launching wallet. Pump.fun protocol fees are separate. Your first-buy tokens go to your launching wallet. ",
                              s
                                ? "Coinputer handles the first start automatically after finalization and startup checks."
                                : "Start the server separately once compute credit is available.",
                            ],
                          }),
                    }),
                  ],
                }),
                (0, n.jsxs)("details", {
                  className: "manifest-technical",
                  children: [
                    (0, n.jsx)("summary", {
                      children: "Transaction & metadata details",
                    }),
                    (0, n.jsxs)("dl", {
                      className: "review-data",
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", {
                              children: j ? "Address table" : "Mint",
                            }),
                            (0, n.jsx)("dd", {
                              title: j ? e.lookupTable : e.mint,
                              children: B(j ? e.lookupTable : e.mint),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "Wallet / payer" }),
                            (0, n.jsx)("dd", {
                              title: e.wallet,
                              children: B(e.wallet),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", { children: "Quote mint" }),
                            (0, n.jsx)("dd", {
                              title: e.quoteMint,
                              children: B(e.quoteMint),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("dt", {
                              children: "Published metadata",
                            }),
                            (0, n.jsx)("dd", {
                              children: (0, n.jsxs)("a", {
                                href: e.uri.startsWith("ipfs://")
                                  ? `https://ipfs.io/ipfs/${e.uri.slice(7)}`
                                  : e.uri,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  "View metadata",
                                  (0, n.jsx)(N.A, { size: 12 }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "manifest-approval",
              children: [
                d &&
                  (0, n.jsx)("p", {
                    role: "alert",
                    className: `field-error ${_().reviewError}`,
                    children: d,
                  }),
                g &&
                  !l &&
                  (0, n.jsx)("p", {
                    role: "status",
                    className: "field-error",
                    children:
                      "This review expired. Refresh it for current costs. Your coin details are kept.",
                  }),
                (0, n.jsxs)("div", {
                  className: "manifest-consent",
                  children: [
                    (0, n.jsx)(O, {
                      id: "review-accept",
                      checked: r,
                      onCheckedChange: i,
                      disabled: !!l || g,
                    }),
                    (0, n.jsxs)("label", {
                      htmlFor: "review-accept",
                      children: [
                        "I reviewed the costs, token conditions and fee destination.",
                        (0, n.jsx)("small", {
                          children:
                            "Review valid for 45 seconds. Your wallet must approve.",
                        }),
                      ],
                    }),
                  ],
                }),
                l &&
                  (0, n.jsx)("p", {
                    className: _().progress,
                    role: "status",
                    children: l,
                  }),
                (0, n.jsxs)("div", {
                  className: _().reviewActions,
                  children: [
                    (0, n.jsxs)(S.$, {
                      type: "button",
                      variant: "outline",
                      disabled: !!l,
                      onClick: p,
                      children: [
                        (0, n.jsx)(L.A, { size: 15, "aria-hidden": "true" }),
                        "Back to edit",
                      ],
                    }),
                    g
                      ? (0, n.jsxs)(S.$, {
                          type: "button",
                          className: "launch-review-button",
                          disabled: !!l || e.wallet !== c,
                          onClick: h,
                          children: [
                            (0, n.jsx)(M.A, {
                              size: 15,
                              "aria-hidden": "true",
                            }),
                            l ? "Refreshing review…" : "Refresh review",
                          ],
                        })
                      : (0, n.jsxs)(S.$, {
                          type: "button",
                          className: "launch-review-button",
                          onClick: u,
                          disabled: !r || !!l || e.wallet !== c,
                          children: [
                            l
                              ? (0, n.jsx)("span", {
                                  className: "block-cursor",
                                  "aria-hidden": "true",
                                })
                              : (0, n.jsx)(P.A, {
                                  size: 15,
                                  "aria-hidden": "true",
                                }),
                            l ||
                              (j
                                ? "Approve launch setup"
                                : "Approve launch in wallet"),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var q = a(9493),
        D = a(4161),
        G = a(3246),
        W = a(5330);
      async function Y() {
        let e = crypto.getRandomValues(new Uint8Array(32)),
          t = Array.from(e, (e) => e.toString(16).padStart(2, "0")).join(""),
          a = new DataView(e.buffer).getUint32(0) || 1,
          n = () => (
            (a ^= a << 13),
            (a ^= a >>> 17),
            ((a ^= a << 5) >>> 0) / 0x100000000
          ),
          s = document.createElement("canvas");
        s.width = s.height = 768;
        let r = s.getContext("2d");
        if (!r)
          throw Error(
            "Artwork generation is unavailable in this browser. You can upload an image.",
          );
        let i = [
            ["#0a100d", "#a7f3b8", "#d7a95c"],
            ["#10110c", "#e8dfc9", "#78c98d"],
            ["#16110b", "#d7a95c", "#c8b995"],
          ],
          [l, o, c] = i[e[4] % i.length];
        ((r.fillStyle = l),
          r.fillRect(0, 0, 768, 768),
          (r.strokeStyle = o + "16"),
          (r.lineWidth = 1));
        for (let e = 32; e < 768; e += 32)
          (r.beginPath(),
            r.moveTo(e, 32),
            r.lineTo(e, 736),
            r.moveTo(32, e),
            r.lineTo(736, e),
            r.stroke());
        ((r.strokeStyle = o),
          (r.lineWidth = 2),
          r.strokeRect(32, 32, 704, 704));
        let d = 2 + (e[5] % 3);
        for (let e = 0; e < d; e++) {
          ((r.strokeStyle = e % 2 ? c + "99" : o + "70"),
            (r.lineWidth = 0 === e ? 6 : 2));
          let t = n() * Math.PI * 2;
          (r.beginPath(),
            r.arc(384, 374, 220 + 22 * e, t, t + Math.PI * (1.1 + 0.65 * n())),
            r.stroke());
        }
        for (let e = 0; e < 9; e++)
          for (let t = 0; t <= 4; t++)
            if (n() > 0.4) {
              r.fillStyle = n() > 0.8 ? c : o;
              let a = 2 + Math.floor(3 * n());
              (r.fillRect(
                240 + 32 * t + a,
                230 + 32 * e + a,
                32 - 2 * a,
                32 - 2 * a,
              ),
                r.fillRect(
                  240 + (8 - t) * 32 + a,
                  230 + 32 * e + a,
                  32 - 2 * a,
                  32 - 2 * a,
                ));
            }
        for (let t = 0; t < 256; t++)
          ((r.fillStyle = (e[Math.floor(t / 8)] >> (t % 8)) & 1 ? o : c + "25"),
            r.fillRect(128 + (t % 64) * 8, 634 + 8 * Math.floor(t / 64), 5, 5));
        ((r.fillStyle = o + "aa"),
          (r.font = "15px monospace"),
          r.fillText("COINPUTER / SIGNAL SEAL", 54, 70),
          (r.fillStyle = c),
          r.fillText(t.slice(0, 16).toUpperCase(), 54, 708),
          (r.textAlign = "right"),
          (r.fillStyle = o + "aa"),
          r.fillText("CP—01", 714, 708),
          (r.fillStyle = "#00000016"));
        for (let e = 0; e < 768; e += 4) r.fillRect(0, e, 768, 1);
        return new File(
          [
            await new Promise((e, t) =>
              s.toBlob(
                (a) => (a ? e(a) : t(Error("Could not export artwork."))),
                "image/png",
              ),
            ),
          ],
          `coinputer-${t.slice(0, 16)}.png`,
          { type: "image/png" },
        );
      }
      var V = a(7436);
      async function H(e, t, a, n, s) {
        (await (0, V.bT)(e, s), s.throwIfAborted());
        let r = new Uint8Array(await t.arrayBuffer()),
          i = "";
        for (let e = 0; e < r.length; e += 8192)
          i += String.fromCharCode(...r.subarray(e, e + 8192));
        return (0, V.Iz)(
          "uploads",
          { ...a, draftId: n, image: { data: btoa(i) } },
          s,
        );
      }
      function J({
        file: e,
        onChange: t,
        onBusyChange: a,
        disabled: s = !1,
        error: r,
      }) {
        let i = (0, o.useRef)(null),
          l = (0, o.useRef)(0),
          c = (0, o.useRef)(s),
          d = $(e),
          [u, h] = (0, o.useState)(!1),
          [m, p] = (0, o.useState)(""),
          [x, f] = (0, o.useState)([]);
        async function g(n) {
          if (c.current) return;
          let s = ++l.current;
          (h(!0), a(!0), p(""));
          try {
            let a = await n();
            s !== l.current ||
              c.current ||
              (e && f((t) => [...t, e].slice(-5)), t(a), p("Artwork ready."));
          } catch (e) {
            s !== l.current ||
              c.current ||
              p(
                e instanceof Error
                  ? e.message
                  : "Artwork could not be prepared.",
              );
          } finally {
            s === l.current && (h(!1), a(!1));
          }
        }
        async function b(e) {
          await g(async () => {
            if (
              e.size > 2097152 ||
              !["image/png", "image/jpeg", "image/webp"].includes(e.type)
            )
              throw Error("Choose a PNG, JPEG or WebP up to 2 MiB.");
            let t = !1;
            try {
              let a = await createImageBitmap(e);
              ((t =
                a.width > 0 &&
                a.height > 0 &&
                a.width <= 8192 &&
                a.height <= 8192),
                a.close());
            } catch {}
            if (!t)
              throw Error(
                "This image could not be opened. Use a PNG, JPEG or WebP up to 8192 pixels on either side.",
              );
            return e;
          });
        }
        async function j() {
          await g(Y);
        }
        return (
          (0, o.useEffect)(() => {
            ((c.current = s),
              s && (l.current++, queueMicrotask(() => h(!1)), a(!1)));
          }, [s, a]),
          (0, o.useEffect)(
            () => () => {
              (l.current++, a(!1));
            },
            [a],
          ),
          (0, o.useEffect)(() => {
            e || queueMicrotask(() => f([]));
          }, [e]),
          (0, n.jsxs)("section", {
            className: "coin-artwork",
            "aria-label": "Coin artwork",
            children: [
              (0, n.jsx)("div", {
                className: "coin-art-preview",
                children:
                  e && d
                    ? (0, n.jsx)("img", {
                        src: d,
                        alt: "Your coin artwork",
                        width: 240,
                        height: 240,
                      })
                    : (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)(D.A, { size: 32 }),
                          (0, n.jsxs)("span", {
                            children: [
                              "YOUR COIN",
                              (0, n.jsx)("br", {}),
                              "STARTS HERE",
                            ],
                          }),
                        ],
                      }),
              }),
              (0, n.jsxs)("div", {
                className: "coin-art-controls",
                id: "coin-preview-controls",
                children: [
                  (0, n.jsx)("input", {
                    ref: i,
                    className: "sr-only",
                    id: "launch-upload-image",
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp",
                    "aria-label": "Upload coin image",
                    disabled: s || u,
                    onChange: (e) => {
                      let t = e.target.files?.[0];
                      (t && b(t), (e.target.value = ""));
                    },
                  }),
                  (0, n.jsxs)("div", {
                    className: "art-buttons",
                    children: [
                      (0, n.jsxs)(S.$, {
                        id: "launch-artwork",
                        type: "button",
                        variant: "outline",
                        "aria-invalid": !!r,
                        "aria-describedby": r ? "launch-artwork-error" : void 0,
                        disabled: s || u,
                        onClick: () => i.current?.click(),
                        children: [
                          (0, n.jsx)(D.A, { size: 15 }),
                          e ? "Replace image" : "Upload image",
                        ],
                      }),
                      (0, n.jsxs)(S.$, {
                        type: "button",
                        variant: "outline",
                        disabled: s || u,
                        onClick: () => void j(),
                        children: [
                          (0, n.jsx)(G.A, { size: 15 }),
                          u
                            ? "Preparing art…"
                            : e
                              ? "Generate another"
                              : "Generate one for me",
                        ],
                      }),
                      x.length > 0 &&
                        (0, n.jsxs)(S.$, {
                          type: "button",
                          variant: "ghost",
                          disabled: s || u,
                          onClick: () => {
                            let e = x.at(-1);
                            e &&
                              (t(e),
                              f((e) => e.slice(0, -1)),
                              p("Previous artwork restored."));
                          },
                          children: [
                            (0, n.jsx)(W.A, { size: 15 }),
                            "Undo artwork change",
                          ],
                        }),
                    ],
                  }),
                  (0, n.jsx)("small", {
                    children: "PNG, JPEG or WebP \xb7 up to 2 MiB",
                  }),
                  r &&
                    (0, n.jsx)("p", {
                      id: "launch-artwork-error",
                      className: "field-error",
                      children: r,
                    }),
                  m &&
                    (0, n.jsx)("p", {
                      className: "artwork-message",
                      role: "status",
                      children: m,
                    }),
                ],
              }),
            ],
          })
        );
      }
      var K = a(5342),
        Z = a(4653);
      function X({ ...e }) {
        return (0, n.jsx)(Z.bL, { "data-slot": "popover", ...e });
      }
      function Q({ ...e }) {
        return (0, n.jsx)(Z.l9, { "data-slot": "popover-trigger", ...e });
      }
      function ee({
        className: e,
        align: t = "center",
        sideOffset: a = 4,
        ...s
      }) {
        return (0, n.jsx)(Z.ZL, {
          children: (0, n.jsx)(Z.UC, {
            "data-slot": "popover-content",
            align: t,
            sideOffset: a,
            className: (0, T.cn)(
              "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
              e,
            ),
            ...s,
          }),
        });
      }
      var et = a(5219),
        ea = a(5377);
      function en({ className: e, ...t }) {
        return (0, n.jsx)(et.uB, {
          "data-slot": "command",
          className: (0, T.cn)(
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
            e,
          ),
          ...t,
        });
      }
      function es({ className: e, ...t }) {
        return (0, n.jsxs)("div", {
          "data-slot": "command-input-wrapper",
          className: "flex h-9 items-center gap-2 border-b px-3",
          children: [
            (0, n.jsx)(ea.A, { className: "size-4 shrink-0 opacity-50" }),
            (0, n.jsx)(et.uB.Input, {
              "data-slot": "command-input",
              className: (0, T.cn)(
                "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                e,
              ),
              ...t,
            }),
          ],
        });
      }
      function er({ className: e, ...t }) {
        return (0, n.jsx)(et.uB.List, {
          "data-slot": "command-list",
          className: (0, T.cn)(
            "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
            e,
          ),
          ...t,
        });
      }
      function ei({ ...e }) {
        return (0, n.jsx)(et.uB.Empty, {
          "data-slot": "command-empty",
          className: "py-6 text-center text-sm",
          ...e,
        });
      }
      function el({ className: e, ...t }) {
        return (0, n.jsx)(et.uB.Item, {
          "data-slot": "command-item",
          className: (0, T.cn)(
            "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
            e,
          ),
          ...t,
        });
      }
      let eo = {
        So11111111111111111111111111111111111111112: {
          name: "Solana",
          symbol: "SOL",
        },
        EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
          name: "USD Coin",
          symbol: "USDC",
        },
      };
      function ec(e, t) {
        let a = eo[e] || t[e],
          n = (e, t) =>
            "string" == typeof e
              ? e
                  .replace(
                    /[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,
                    "",
                  )
                  .trim()
                  .slice(0, t)
              : "",
          s = n(a?.name, 64),
          r = n(a?.symbol, 16),
          i = e ? `${e.slice(0, 6)}…${e.slice(-6)}` : "";
        return {
          name: s || r || "Token name unavailable",
          symbol: r,
          title:
            s && r && s !== r ? `${s} (${r})` : s || r || i || "Select a pair",
          address: i,
          available: !!(s || r),
        };
      }
      function ed({
        value: e,
        options: t,
        labels: a,
        disabled: s,
        onChange: r,
        labelsLoading: i = !1,
        labelsUnavailable: l = !1,
        onReloadLabels: c,
        ...d
      }) {
        let [u, h] = (0, o.useState)(!1),
          [pq, pQ] = (0, o.useState)(null),
          [pDone, pSetDone] = (0, o.useState)(!1),
          m = ec(e, a),
          pL = t.length ? t : pq || [],
          pW = !pL.length && !pDone && !!s;
        (0, o.useEffect)(() => {
          if (t.length) return;
          let controller = new AbortController();
          return (
            fetch("/api/pump", {
              signal: AbortSignal.any([
                controller.signal,
                AbortSignal.timeout(2e4),
              ]),
              cache: "no-store",
            })
              .then((response) => response.json())
              .then((body) => {
                if (
                  !controller.signal.aborted &&
                  Array.isArray(body?.quotes) &&
                  body.quotes.length
                )
                  pQ(body.quotes);
              })
              .catch(() => {})
              .finally(() => {
                controller.signal.aborted || pSetDone(!0);
              }),
            () => controller.abort()
          );
        }, [t]);
        return (0, n.jsxs)(X, {
          open: u,
          onOpenChange: h,
          children: [
            (0, n.jsx)(Q, {
              asChild: !0,
              children: (0, n.jsxs)("button", {
                ...d,
                id: "launch-pair",
                type: "button",
                className: "pair-select",
                "aria-label": "Trading pair",
                "aria-expanded": u,
                disabled: pW,
                title: e,
                children: [
                  (0, n.jsx)("span", {
                    children: pW ? "Reading available pairs…" : m.title,
                  }),
                  (0, n.jsx)(K.A, { size: 14 }),
                ],
              }),
            }),
            (0, n.jsx)(ee, {
              className: "pair-popover",
              align: "start",
              children: (0, n.jsxs)(en, {
                filter: (e, t) => +!!e.toLowerCase().includes(t.toLowerCase()),
                children: [
                  (0, n.jsx)(es, {
                    "aria-label": "Search trading pairs",
                    placeholder: "Search name, symbol or mint…",
                  }),
                  (0, n.jsxs)(er, {
                    "aria-label": "Pump.fun supported trading pairs",
                    children: [
                      (0, n.jsx)(ei, {
                        children: "No supported pair matches.",
                      }),
                      pL.map((t) => {
                        let s = ec(t.mint, a);
                        return (0, n.jsxs)(
                          el,
                          {
                            value: `${t.mint} ${s.title}`,
                            onSelect: () => {
                              (r(t.mint), h(!1));
                            },
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)("b", { children: s.name }),
                                  s.symbol &&
                                    s.symbol !== s.name &&
                                    (0, n.jsx)("span", { children: s.symbol }),
                                  (0, n.jsx)("small", {
                                    title: t.mint,
                                    children: s.address,
                                  }),
                                ],
                              }),
                              e === t.mint &&
                                (0, n.jsx)(P.A, {
                                  size: 14,
                                  "aria-label": "Selected",
                                }),
                            ],
                          },
                          t.mint,
                        );
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "pair-source",
                    children: [
                      (0, n.jsx)("p", {
                        children:
                          "Supported pairs from Pump.fun. Names identify the token; always verify its mint.",
                      }),
                      i
                        ? (0, n.jsx)("p", {
                            role: "status",
                            children: "Reading token names…",
                          })
                        : l &&
                          (0, n.jsx)("p", {
                            role: "status",
                            children:
                              "Some token names could not be loaded. Mint addresses remain available; try again in a minute.",
                          }),
                      c &&
                        l &&
                        (0, n.jsx)("button", {
                          type: "button",
                          disabled: i,
                          onClick: c,
                          children: "Retry token names",
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function eu(e, t, a, n) {
        n.throwIfAborted();
        let s = (0, u.EF)();
        if (
          !e ||
          e !== t ||
          a?.address !== e ||
          s?.address !== e ||
          s?.revision !== a.revision
        )
          throw Error(
            "Wallet changed. Reconnect the original launch wallet to register its computer.",
          );
      }
      function eh({
        mint: e,
        signature: t,
        wallet: a,
        launcher: s,
        finalized: r,
        automaticFirstStart: i = !1,
        onOpen: l,
      }) {
        var c, d;
        let h = (0, o.useRef)(new AbortController());
        (0, o.useEffect)(
          () => ((h.current = new AbortController()), () => h.current.abort()),
          [a, s, e, t],
        );
        let [m, p] = (0, o.useState)(null),
          [x, f] = (0, o.useState)(!1),
          [g, b] = (0, o.useState)(""),
          [j, v] = (0, o.useState)(null),
          [w, y] = (0, o.useState)(!1),
          k = (0, o.useCallback)(
            async (n, r) => {
              eu(a, s, r, n);
              let i = await (0, V.Iz)(
                "launch-register",
                { mint: e, signature: t },
                n,
              );
              (eu(a, s, r, n), p(i), b(""));
            },
            [e, t, a, s],
          );
        (0, o.useEffect)(() => {
          if (!r || !a || a !== s) return;
          let e = (0, u.EF)();
          if (e?.address !== a) return;
          let t = new AbortController();
          return (
            (0, V.Iz)("session", void 0, t.signal)
              .then((n) => {
                if ((eu(a, s, e, t.signal), n.wallet === a))
                  return k(t.signal, e);
              })
              .catch(() => {
                t.signal.aborted ||
                  b(
                    "Automatic registration is awaiting verification. You can retry below; your launch receipt is retained.",
                  );
              }),
            () => t.abort()
          );
        }, [a, s, r, k]);
        let N = m?.id;
        async function C() {
          let e = h.current.signal,
            t = (0, u.EF)();
          (f(!0), b(""));
          try {
            (eu(a, s, t, e),
              await (0, V.bT)(a, e),
              eu(a, s, t, e),
              await k(e, t));
          } catch (t) {
            e.aborted ||
              b(
                t instanceof Error
                  ? t.message
                  : "Registration could not complete. The launch receipt is saved for retry.",
              );
          } finally {
            e.aborted || f(!1);
          }
        }
        if (
          ((0, o.useEffect)(() => {
            if (!N || !a || a !== s) return;
            let t = new AbortController(),
              n = !1;
            async function r() {
              if (!n && !t.signal.aborted && !document.hidden) {
                n = !0;
                try {
                  let a = await (0, V.Iz)(`machines/${N}`, void 0, t.signal);
                  if (a.machine.id !== N || a.machine.mint !== e)
                    throw Error("Computer identity changed.");
                  t.signal.aborted || (v(a.machine), y(!1));
                } catch {
                  t.signal.aborted || y(!0);
                } finally {
                  n = !1;
                }
              }
            }
            r();
            let i = setInterval(r, 1e4);
            return (
              document.addEventListener("visibilitychange", r),
              () => {
                (t.abort(),
                  clearInterval(i),
                  document.removeEventListener("visibilitychange", r));
              }
            );
          }, [N, e, a, s]),
          !a || a !== s)
        )
          return null;
        let E =
          ((c = j?.mint === e && j.id === N ? j : null),
          (d = !!m?.managedByWallet),
          c
            ? "ONLINE" === c.state && c.online && c.desktopAvailable
              ? {
                  heading: "COMPUTER READY",
                  message:
                    "Your desktop is ready. Open the computer to sign in and begin.",
                  button: "Enter computer",
                }
              : ["PROVISIONING", "WAKING"].includes(c.state) &&
                  c.capacityWaiting &&
                  Number.isFinite(Date.parse(c.capacityWaiting.deadline))
                ? {
                    heading: "WAITING FOR CAPACITY",
                    message:
                      "Startup is queued for available capacity and retries automatically. Open the computer to follow its current status.",
                    button: "View startup",
                  }
                : ["PROVISIONING", "WAKING"].includes(c.state) ||
                    ("ONLINE" === c.state && c.online)
                  ? {
                      heading: "COMPUTER PREPARING",
                      message: c.online
                        ? "The computer is online and its desktop is still preparing. Open it to follow readiness."
                        : "Coinputer is preparing the computer and connecting its desktop. You can open its status now or return when it is ready.",
                      button: "View startup",
                    }
                  : "UNPROVISIONED" === c.state && c.automaticStart?.enrolled
                    ? {
                        heading: "AUTOMATIC START QUEUED",
                        message: [
                          c.starterCredit?.enrolled
                            ? "Your computer starts automatically after launch. Preparing the desktop may take a few minutes."
                            : "Coinputer starts this computer automatically once its allocated funding covers startup.",
                          c.automaticStart.message ||
                            "Checking startup availability.",
                          "You can close this page and return to check progress.",
                        ].join(" "),
                        button: "View startup",
                      }
                    : "ERROR" === c.state
                      ? {
                          heading: "COMPUTER NEEDS ATTENTION",
                          message:
                            c.error ||
                            "Open the computer to check the reported startup issue.",
                          button: "Check computer",
                        }
                      : "SLEEPING" === c.state || "SAVING" === c.state
                        ? {
                            heading:
                              "SLEEPING" === c.state
                                ? "COMPUTER SLEEPING"
                                : "COMPUTER SAVING",
                            message:
                              "Open the computer to review its saved workspace and current power state.",
                            button: "Open computer",
                          }
                        : {
                            heading: "COMPUTER IDENTITY REGISTERED",
                            message: d
                              ? "Computer identity registered. Open it to review compute credit, set its spending limit and rent a server when funded."
                              : "wallet" === c.accessMode
                                ? "This coin already has a computer managed by another wallet. You can sign in with any wallet when it is online."
                                : "This coin already has a computer managed by another wallet. You can view it and use it as a holder when online.",
                            button: "Open computer",
                          }
            : {
                heading: "COMPUTER IDENTITY REGISTERED",
                message:
                  "Reading its current startup status. Open computer to follow its preparation.",
                button: "Open computer",
              });
        return (0, n.jsxs)("div", {
          className: "launch-computer",
          children: [
            (0, n.jsx)("b", {
              children: m
                ? E.heading
                : i
                  ? "PREPARING YOUR COMPUTER"
                  : "YOUR COIN’S NEXT CHAPTER",
            }),
            (0, n.jsx)("p", {
              children:
                g ||
                (m
                  ? E.message
                  : r
                    ? i
                      ? "Your computer starts automatically after launch. Preparing the desktop may take a few minutes. You can close this page; Coinputer continues setup in the background."
                      : "Register its permanent identity for free. Open the computer to view its balance and start its server when funded."
                    : "Waiting for mainnet finalization before registering its computer."),
            }),
            m
              ? (0, n.jsx)(S.$, {
                  variant: "outline",
                  onClick: l,
                  children: E.button,
                })
              : (0, n.jsx)(S.$, {
                  variant: "outline",
                  disabled: x || !r || !a || a !== s,
                  onClick: () => void C(),
                  children: x
                    ? "CHECKING…"
                    : i
                      ? "Check computer setup"
                      : "Register its computer",
                }),
            m &&
              w &&
              (0, n.jsx)("p", {
                role: "status",
                children:
                  "The latest computer status is unavailable. Open the computer to check again; any displayed startup state is from the last successful read.",
              }),
          ],
        });
      }
      let em = "So11111111111111111111111111111111111111112",
        ep = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        ex = (e) => `${e.slice(0, 6)}…${e.slice(-6)}`,
        ef = (0, o.createContext)({}),
        eg = {
          name: "",
          symbol: "",
          description: "",
          artwork: null,
          previewExpanded: !1,
          twitter: "",
          telegram: "",
          pair: "sol",
          customMint: "",
          devBuy: "0",
          fee: "0",
          mayhem: !1,
        },
        eb = (e, t) => Object.keys(eg).every((a) => e[a] === t[a]);
      function ej(e) {
        let t = (0, o.useSyncExternalStore)(u.sq, u.EF, u.DC),
          a = t?.address === e.wallet ? t.revision : null,
          [s, r] = (0, o.useState)({}),
          [i, l] = (0, o.useState)(null),
          c = (0, o.useCallback)((e, t) => {
            (r((a) => {
              let n = { ...a, [e]: t };
              return (e && delete n[""], n);
            }),
              l((a) =>
                a
                  ? !eb(a.draft, t) || (a.wallet && a.wallet !== e)
                    ? null
                    : e && !a.wallet
                      ? { ...a, wallet: e }
                      : a
                  : null,
              ));
          }, []),
          d = (0, o.useCallback)(() => l(null), []),
          h = i && (!i.wallet || i.wallet === e.wallet) ? i : null;
        return (0, n.jsx)(
          ev,
          {
            ...e,
            revision: a,
            initialDraft:
              h?.draft || s[e.wallet] || (e.wallet ? s[""] : void 0) || eg,
            cacheDraft: c,
            awaitingWallet: !!h,
            autoPrepare: !!(h && e.wallet),
            consumeIntent: d,
            requestWallet: (t) => {
              (l({ draft: t }), e.onConnect());
            },
          },
          `${e.wallet}:${a ?? "disconnected"}`,
        );
      }
      function ev({
        wallet: e,
        onMint: t,
        onComputer: s,
        control: l,
        revision: c,
        initialDraft: b,
        cacheDraft: T,
        awaitingWallet: I,
        autoPrepare: O,
        consumeIntent: L,
        requestWallet: M,
      }) {
        let [P, $] = (0, o.useState)({}),
          [U, _] = (0, o.useState)({ loading: !0, unavailable: !1 }),
          [B, D] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          let e = new AbortController();
          return (
            (0, i.$)("/api/computers/pair-labels", {
              signal: AbortSignal.any([e.signal, AbortSignal.timeout(2e4)]),
              cache: "no-store",
            })
              .then(async (t) => {
                if (!t.ok) throw Error("Names unavailable");
                let a = await t.json();
                e.signal.aborted ||
                  ($(a.labels || {}),
                  _({
                    loading: !1,
                    unavailable: !!(a.unavailable || a.partialFailure),
                  }));
              })
              .catch(() => {
                e.signal.aborted || _({ loading: !1, unavailable: !0 });
              }),
            () => e.abort()
          );
        }, [B]);
        let [G, W] = (0, o.useState)(null),
          [Y, K] = (0, o.useState)(""),
          [Z, X] = (0, o.useState)(!0),
          [Q, ee] = (0, o.useState)(0),
          [et, ea] = (0, o.useState)(b.name),
          [en, es] = (0, o.useState)(b.symbol),
          [er, ei] = (0, o.useState)(b.description),
          [el, eo] = (0, o.useState)(b.artwork),
          [ec, eu] = (0, o.useState)(null),
          [eg, ej] = (0, o.useState)(!1),
          [ek, eN] = (0, o.useState)(b.previewExpanded),
          [eC, eE] = (0, o.useState)(b.twitter),
          [eS, eA] = (0, o.useState)(b.telegram),
          eT = (0, o.useRef)(null),
          eR = (0, o.useRef)(""),
          eI = (0, o.useRef)(new AbortController()),
          eO = (0, o.useRef)(!1),
          ez = (0, o.useRef)(!1);
        (0, o.useEffect)(
          () => (
            (eI.current = new AbortController()),
            () => eI.current.abort()
          ),
          [e],
        );
        let [eL, eM] = (0, o.useState)(b.pair),
          [eP, e$] = (0, o.useState)(b.customMint),
          [eU, e_] = (0, o.useState)(b.devBuy),
          [eB, eF] = (0, o.useState)(b.fee),
          [eq, eD] = (0, o.useState)(b.mayhem),
          [eG, eW] = (0, o.useState)(null),
          [eY, eV] = (0, o.useState)(""),
          [eH, eJ] = (0, o.useState)(!1),
          [eK, eZ] = (0, o.useState)(null),
          [eX, eQ] = (0, o.useState)(null),
          e0 = (0, o.useRef)(null),
          e1 = (0, o.useRef)(""),
          [e2, e3] = (0, o.useState)(!1),
          [e5, e4] = (0, o.useState)({});
        function e8(t) {
          let a = (0, u.EF)();
          return !t.aborted && !!e && a?.address === e && a.revision === c;
        }
        function e6(e) {
          if ((e.throwIfAborted(), !e8(e)))
            throw Error(
              "Wallet changed. Review again with your current wallet.",
            );
        }
        (0, o.useEffect)(
          () =>
            T(e, {
              name: et,
              symbol: en,
              description: er,
              artwork: el,
              previewExpanded: ek,
              twitter: eC,
              telegram: eS,
              pair: eL,
              customMint: eP,
              devBuy: eU,
              fee: eB,
              mayhem: eq,
            }),
          [T, e, et, en, er, el, ek, eC, eS, eL, eP, eU, eB, eq],
        );
        let e9 = "sol" === eL ? em : "usdc" === eL ? ep : eP.trim(),
          e7 = e + ":" + e9,
          te = e5[e7],
          tt = G?.quotes.find((e) => e.mint === e9),
          ta = tt?.source === "quoteControl" && G?.customFeesEnabled,
          tn =
            "sol" === eL
              ? "SOL"
              : "usdc" === eL
                ? "USDC"
                : P[e9]?.symbol || (e9 ? ex(e9) : "quote asset");
        ((0, o.useEffect)(() => {
          let e = new AbortController();
          return (
            (0, i.$)("/api/pump", {
              signal: AbortSignal.any([e.signal, AbortSignal.timeout(2e4)]),
              cache: "no-store",
            })
              .then(async (t) => {
                let a = await (0, r._)(
                  t,
                  "The launch service is temporarily unavailable. Refresh or try reading launch options again.",
                );
                if (!t.ok)
                  throw Error(
                    a.error || "Pump.fun configuration is unavailable.",
                  );
                e.signal.aborted || (W(a), X(!1));
              })
              .catch((t) => {
                e.signal.aborted || (K(t.message), X(!1));
              }),
            () => e.abort()
          );
        }, [Q]),
          (0, o.useEffect)(() => {
            if (
              !eK ||
              eK.wallet !== e ||
              !["pending", "submitted", "confirmed"].includes(eK.status)
            )
              return;
            let t = new AbortController(),
              a = !1;
            async function n() {
              if (!a) {
                a = !0;
                try {
                  let e = await (0, i.$)(
                      `/api/pump?signature=${eK.signature}&height=${eK.lastValidBlockHeight}&kind=${eK.kind}&address=${"lookup" === eK.kind ? eK.lookupTable : eK.mint}&wallet=${eK.wallet}`,
                      { signal: t.signal, cache: "no-store" },
                    ),
                    a = await (0, r._)(
                      e,
                      "Confirmation could not be read. Keep your saved transaction and check again before making another launch.",
                    );
                  if (!e.ok)
                    throw Error(a.error || "Confirmation check unavailable.");
                  if (t.signal.aborted) return;
                  if (["confirmed", "finalized"].includes(a.state)) {
                    if (
                      (eZ((e) =>
                        e?.signature === eK.signature && e.status !== a.state
                          ? { ...e, status: a.state }
                          : e,
                      ),
                      K(""),
                      "lookup" === eK.kind &&
                        !e5[eK.wallet + ":" + eK.quoteMint])
                    ) {
                      let e = {
                          address: eK.lookupTable,
                          wallet: eK.wallet,
                          quoteMint: eK.quoteMint,
                        },
                        t = { ...e5, [e.wallet + ":" + e.quoteMint]: e };
                      e4(t);
                      try {
                        localStorage.setItem(
                          "coinputer.mainnet-address-tables",
                          JSON.stringify(t),
                        );
                      } catch {}
                    }
                  } else
                    "failed" === a.state
                      ? (eZ((e) =>
                          e?.signature === eK.signature
                            ? { ...e, status: "failed" }
                            : e,
                        ),
                        K(
                          "The transaction failed on-chain. No successful launch is recorded.",
                        ))
                      : "expired" === a.state
                        ? (eZ((e) =>
                            e?.signature === eK.signature
                              ? { ...e, status: "expired" }
                              : e,
                          ),
                          K(
                            "The blockhash expired without a confirmation from this RPC. Check the transaction in Explorer before preparing another attempt.",
                          ))
                        : "mismatch" === a.state &&
                          (eZ((e) =>
                            e?.signature === eK.signature
                              ? { ...e, status: "mismatch" }
                              : e,
                          ),
                          K(
                            "The stored receipt does not match this mainnet transaction. No launch is confirmed.",
                          ));
                } catch (e) {
                  t.signal.aborted ||
                    (eQ(null),
                    K(
                      e instanceof Error
                        ? e.message
                        : "Confirmation check unavailable.",
                    ));
                } finally {
                  a = !1;
                }
              }
            }
            n();
            let s = setInterval(n, 5e3);
            return () => {
              (t.abort(), clearInterval(s));
            };
          }, [eK, e5, e]));
        let ts = (function (e, t) {
            let a = {},
              n = (e) => new TextEncoder().encode(e.trim()).length;
            for (let [t, s] of (e.name.trim()
              ? n(e.name) > 32 &&
                (a["launch-name"] =
                  "Shorten the name to 32 UTF-8 bytes; some characters use more than one byte.")
              : (a["launch-name"] = "Give your coin a name."),
            e.symbol.trim()
              ? n(e.symbol) > 13 &&
                (a["launch-symbol"] = "Shorten the ticker to 13 UTF-8 bytes.")
              : (a["launch-symbol"] = "Add a ticker for your coin."),
            e.description.length > 1e3 &&
              (a["launch-description"] =
                "Keep the description within 1,000 characters."),
            [
              ["launch-twitter", e.twitter],
              ["launch-telegram", e.telegram],
            ]))
              if (s)
                try {
                  let e = new URL(s);
                  if (
                    "https:" !== e.protocol ||
                    e.username ||
                    e.password ||
                    s.length > 300
                  )
                    throw Error();
                } catch {
                  a[t] =
                    "Use a complete https:// link, or leave this optional field empty.";
                }
            if (
              (t.pairAvailable ||
                (a["launch-pair"] =
                  "Choose a pair after Pump.fun’s supported pairs have loaded."),
              !/^\d+(\.\d+)?$/.test(e.devBuy) || e.devBuy.length > 40)
            )
              a["launch-buy"] =
                "Enter a nonnegative amount, or 0 to skip your first buy.";
            else if (void 0 !== t.quoteDecimals)
              try {
                (0, q.X)(e.devBuy, t.quoteDecimals);
              } catch (e) {
                a["launch-buy"] =
                  e instanceof Error
                    ? e.message
                    : "Check the first-buy amount.";
              }
            return (
              void 0 !== t.feeMaximum &&
                (!/^\d+(\.\d{1,2})?$/.test(e.fee) ||
                  Number(e.fee) > t.feeMaximum) &&
                (a["launch-tax"] =
                  `Enter a fee from 0 to ${t.feeMaximum}%, with up to two decimal places.`),
              t.agentEnabled &&
                (!/^\d+(\.\d{1,2})?$/.test(e.buyback) ||
                  Number(e.buyback) > 100) &&
                (a["launch-buyback"] =
                  "Enter a buyback from 0 to 100%, with up to two decimal places."),
              e.hasArtwork ||
                (a["launch-artwork"] =
                  "Upload an image or generate one for your coin."),
              a
            );
          })(
            {
              name: et,
              symbol: en,
              description: er,
              twitter: eC,
              telegram: eS,
              hasArtwork: !!el,
              devBuy: eU,
              fee: eB,
              buyback: "0",
            },
            {
              pairAvailable: !!tt,
              feeMaximum: ta ? G.maxCreatorFeeBps / 100 : void 0,
              agentEnabled: !1,
              quoteDecimals: "sol" === eL ? 9 : "usdc" === eL ? 6 : void 0,
            },
          ),
          tr = eg ? ts : {};
        async function ti(t, a = eI.current.signal) {
          return d(JSON.stringify(t), {
            assertCurrent: () => e6(a),
            send: (e) =>
              (0, i.$)("/api/pump", {
                method: "POST",
                credentials: "same-origin",
                signal: a,
                headers: { "Content-Type": "application/json" },
                body: e,
              }),
            authenticate: async () => {
              if (
                (eV("Renew your wallet session…"),
                (await (0, V.bT)(e, a)).wallet !== e)
              )
                throw Error("Wallet session changed. Nothing was submitted.");
            },
          });
        }
        async function tl(t) {
          if ((t?.preventDefault(), Z || eH || eY || eO.current)) return;
          ej(!0);
          let a = Object.keys(ts)[0];
          if (a) {
            (K(""),
              "launch-artwork" === a && eN(!0),
              requestAnimationFrame(() => {
                let e = document.getElementById(a);
                for (let t = e?.parentElement; t; t = t.parentElement)
                  t instanceof HTMLDetailsElement && (t.open = !0);
                let t = e?.matches(":disabled")
                  ? e.closest(".launch-field")
                  : e;
                (t?.focus({ preventScroll: !0 }),
                  t?.scrollIntoView({
                    block: "center",
                    behavior: matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                      ? "instant"
                      : "smooth",
                  }));
              }));
            return;
          }
          if (!G?.createEnabled)
            return void K(
              "Pump.fun launch creation is currently unavailable. Read the launch options again.",
            );
          if (!e)
            return void M({
              name: et,
              symbol: en,
              description: er,
              artwork: el,
              previewExpanded: ek,
              twitter: eC,
              telegram: eS,
              pair: eL,
              customMint: eP,
              devBuy: eU,
              fee: eB,
              mayhem: eq,
            });
          if ((K(""), e3(!1), !tt || !(0, m.bA)(e9)))
            return void K(
              "Choose a quote mint in Pump.fun’s current mainnet list.",
            );
          if (!el)
            return void K(
              "Upload an image or generate one for your coin first.",
            );
          let n = eI.current.signal;
          ((eO.current = !0),
            L(),
            eQ(null),
            eV("Publishing your coin details…"));
          try {
            e6(n);
            let t = {
                name: et.trim(),
                symbol: en.trim(),
                description: er,
                twitter: eC,
                telegram: eS,
              },
              a = JSON.stringify([e, t]),
              s =
                eT.current?.key === a && eT.current.file === el
                  ? eT.current.uri
                  : "";
            if (!s) {
              eR.current ||= crypto.randomUUID();
              let r = await H(e, el, t, eR.current, n);
              (e6(n), (s = r.uri), (eT.current = { key: a, file: el, uri: s }));
            }
            (e6(n), eV("Checking your mainnet launch…"));
            let i = await ti(
                {
                  action: "prepare",
                  launch: {
                    wallet: e,
                    name: et,
                    symbol: en,
                    uri: s,
                    quoteMint: e9,
                    devBuy: eU,
                    lookupTable:
                      te?.wallet === e && te.quoteMint === e9
                        ? te.address
                        : void 0,
                    creatorFeeBps: ta ? Math.round(100 * Number(eB)) : 0,
                    mayhem: eq && "quoteControl" !== tt.source,
                    holderRewards: !1,
                    tokenizedAgent: !1,
                    buybackBps: 0,
                  },
                },
                n,
              ),
              l = await (0, r._)(
                i,
                "The launch review could not be loaded. Refresh and prepare a new review.",
              );
            if ((e6(n), !i.ok))
              throw Error(l.error || "Could not prepare launch.");
            if (
              l.wallet !== e ||
              !(0, m.bA)(l.creatorRecipient) ||
              l.holderRewards
            )
              throw Error(
                "The computer fee recipient could not be verified. Nothing was prepared for signing.",
              );
            ((e0.current = {
              name: et,
              symbol: en,
              description: er,
              artwork: el,
              previewExpanded: ek,
              twitter: eC,
              telegram: eS,
              pair: eL,
              customMint: eP,
              devBuy: eU,
              fee: eB,
              mayhem: eq,
            }),
              eu(el),
              eW(l));
          } catch (e) {
            e8(n) && K(e instanceof Error ? e.message : "Preparation failed.");
          } finally {
            ((eO.current = !1), e8(n) && eV(""));
          }
        }
        let to = (0, o.useEffectEvent)(() => void tl());
        (0, o.useEffect)(() => {
          if (!O || Z || !G || eY || eH || ez.current) return;
          let e = new AbortController();
          return (
            queueMicrotask(() => {
              e.signal.aborted || ez.current || ((ez.current = !0), to());
            }),
            () => e.abort()
          );
        }, [O, Z, G, eY, eH]);
        let tc = (0, o.useEffectEvent)(() => {
          !eX ||
            (Y ||
            !eb(eX.draft, {
              name: et,
              symbol: en,
              description: er,
              artwork: el,
              previewExpanded: ek,
              twitter: eC,
              telegram: eS,
              pair: eL,
              customMint: eP,
              devBuy: eU,
              fee: eB,
              mayhem: eq,
            })
              ? eQ(null)
              : !eY &&
                !eH &&
                eK?.kind === "lookup" &&
                eK.signature === eX.signature &&
                "finalized" === eK.status &&
                te?.address === eK.lookupTable &&
                e1.current !== eK.signature &&
                e8(eI.current.signal) &&
                ((e1.current = eK.signature), eQ(null), tl()));
        });
        async function td(t, a) {
          if ((e6(a), !t.transaction))
            throw Error(
              "This receipt has no signed transaction to retry. Follow its Explorer link.",
            );
          if (e !== t.wallet)
            throw Error("Connect the original launch wallet to retry.");
          eV("Submitting signed mainnet transaction…");
          let n = await ti(
              {
                action: "lookup" === t.kind ? "submit-lookup" : "submit",
                transaction: t.transaction,
              },
              a,
            ),
            s = await (0, r._)(
              n,
              "Submission could not be confirmed. Keep your saved transaction; check its confirmation before retrying the same transaction.",
            );
          if ((e6(a), !n.ok || s.signature !== t.signature))
            throw Error(
              s.error ||
                "Submission response could not be verified. Track the signature below before trying again.",
            );
          eZ((e) =>
            e?.signature === t.signature &&
            ["pending", "submitted"].includes(e.status)
              ? { ...e, status: "submitted" }
              : e,
          );
        }
        async function tu() {
          if (!eK || eY) return;
          let e = eI.current.signal;
          K("");
          try {
            await td(eK, e);
          } catch (t) {
            e8(e) &&
              K(
                t instanceof Error
                  ? t.message
                  : "Could not retry the signed transaction.",
              );
          } finally {
            e8(e) && eV("");
          }
        }
        async function th() {
          if (!eG || !e2 || eY || eG.wallet !== e) return;
          let t = eI.current.signal;
          if (!e8(t)) return;
          if (!(0, m.bA)(eG.creatorRecipient) || eG.holderRewards) {
            (K(
              "The computer fee recipient could not be verified. Review again before signing.",
            ),
              eW(null));
            return;
          }
          let n = Date.parse(eG.preparedAt);
          if (!Number.isFinite(n) || Date.now() - n >= 45e3) {
            (K(
              "This review expired. Refresh it for current costs before approving.",
            ),
              e3(!1));
            return;
          }
          (eV("Waiting for your wallet…"), K(""));
          try {
            let { VersionedTransaction: n } = await Promise.resolve().then(
                a.bind(a, 3596),
              ),
              { Buffer: s } = await Promise.resolve().then(
                a.t.bind(a, 9304, 19),
              );
            e6(t);
            let r = n.deserialize(s.from(eG.transaction, "base64")),
              i = s.from(r.message.serialize()),
              l = await (0, u.b6)(e, r);
            if (0 !== s.compare(i, s.from(l.message.serialize())))
              throw Error(
                "Wallet changed the transaction. Nothing was submitted.",
              );
            if (l.signatures.some((e) => e.every((e) => 0 === e)))
              throw Error(
                "The required signatures are missing. Nothing was submitted.",
              );
            let o = (0, h.encodeBase58)(l.signatures[0]),
              c = {
                creatorRecipient: eG.creatorRecipient,
                transaction: s.from(l.serialize()).toString("base64"),
                kind: eG.phase,
                mint: eG.mint,
                lookupTable: eG.lookupTable,
                wallet: eG.wallet,
                quoteMint: eG.quoteMint,
                lastValidBlockHeight: eG.lastValidBlockHeight,
                signature: o,
                name: eG.name,
                symbol: eG.symbol,
                status: "pending",
              };
            try {
              !(function (e, t) {
                let a = j(t);
                if (a)
                  try {
                    if (!w(e, a)) return !1;
                    let t = v(e.getItem(p));
                    t?.wallet === a.wallet && e.removeItem(p);
                  } catch {
                    return !1;
                  }
              })(localStorage, c);
            } catch {}
            (e6(t),
              "lookup" === c.kind &&
                e0.current &&
                eQ({ signature: c.signature, draft: e0.current }),
              eZ(c),
              eW(null),
              await td(c, t));
          } catch (e) {
            e8(t) &&
              (eQ(null),
              K(
                e instanceof Error
                  ? e.message
                  : "Wallet signing or submission failed.",
              ));
          } finally {
            e8(t) && eV("");
          }
        }
        ((0, o.useEffect)(() => {
          if (!eX) return;
          let e = new AbortController();
          return (
            queueMicrotask(() => {
              e.signal.aborted || tc();
            }),
            () => e.abort()
          );
        }, [
          eX,
          eK,
          te,
          Y,
          eY,
          eH,
          et,
          en,
          er,
          el,
          ek,
          eC,
          eS,
          eL,
          eP,
          eU,
          eB,
          eq,
        ]),
          (0, o.useEffect)(() => {
            let t = new AbortController();
            try {
              let a = localStorage.getItem("coinputer.mainnet-address-tables");
              if (a) {
                let e = JSON.parse(a),
                  n = {};
                for (let t of Object.values(e).slice(0, 100))
                  t &&
                    (0, m.bA)(t.address) &&
                    (0, m.bA)(t.wallet) &&
                    (0, m.bA)(t.quoteMint) &&
                    (n[t.wallet + ":" + t.quoteMint] = t);
                queueMicrotask(() => {
                  t.signal.aborted || e4(n);
                });
              }
              let n = (function (e, t) {
                if (!f(t)) return null;
                try {
                  let a = v(e.getItem(p));
                  if (a)
                    try {
                      let t;
                      ((t = v(e.getItem(x(a.wallet)))),
                        w(e, t?.wallet === a.wallet ? t : a) &&
                          e.removeItem(p));
                    } catch {}
                  let n = e.getItem(x(t)),
                    s = v(n);
                  if (s?.wallet === t) return s;
                  return null === n && a?.wallet === t ? a : null;
                } catch {
                  return null;
                }
              })(localStorage, e);
              n &&
                queueMicrotask(() => {
                  t.signal.aborted || eZ(n);
                });
            } catch {}
            return () => t.abort();
          }, [e]));
        let tm =
          eK?.kind === "lookup" &&
          ["confirmed", "finalized"].includes(eK.status);
        function tp() {
          eY || (eW(null), eu(null));
        }
        let tx = !!(
            eX &&
            eX.signature === eK?.signature &&
            !Y &&
            eb(eX.draft, {
              name: et,
              symbol: en,
              description: er,
              artwork: el,
              previewExpanded: ek,
              twitter: eC,
              telegram: eS,
              pair: eL,
              customMint: eP,
              devBuy: eU,
              fee: eB,
              mayhem: eq,
            })
          ),
          tf = !!(l?.automaticStartEnabled && l?.automaticStarterCreditEnabled);
        return (0, n.jsxs)("div", {
          className: "launch-layout",
          children: [
            (0, n.jsxs)("div", {
              className: "launch-form-area",
              children: [
                (0, n.jsxs)("div", {
                  className: "panel-intro init-intro",
                  children: [
                    (0, n.jsx)("span", {
                      className: "eyebrow",
                      children: "NEW MACHINE / PUMP.FUN",
                    }),
                    (0, n.jsx)("h1", { children: "YOUR COIN. ITS COMPUTER." }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Launch on Pump.fun. Creator fees fund its computer.",
                        (0, n.jsx)("span", {
                          className: "block-cursor",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  ],
                }),
                I &&
                  (0, n.jsxs)("div", {
                    className: "computer-help",
                    role: "status",
                    children: [
                      (0, n.jsx)("p", {
                        children: e
                          ? "Preparing your coin review after connection…"
                          : "Connect your wallet to continue to this coin’s review. Nothing is launched until you review and approve it.",
                      }),
                      (0, n.jsx)(S.$, {
                        variant: "outline",
                        size: "sm",
                        onClick: L,
                        children: "Cancel review",
                      }),
                    ],
                  }),
                (0, n.jsxs)("details", {
                  className: "computer-launch-note launch-availability",
                  children: [
                    (0, n.jsxs)("summary", {
                      children: [
                        (0, n.jsx)("span", {
                          className: "availability-label",
                          children: l
                            ? tf
                              ? "Automatic computer startup enabled"
                              : l.provisioningEnabled
                                ? l.fundingEnabled
                                  ? "Computer rental available"
                                  : "Computer funding awaiting setup"
                                : "Computer rental awaiting setup"
                            : "Checking computer availability…",
                        }),
                        (0, n.jsx)("span", { children: "Details" }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "100% of this coin’s creator-fee portion goes to its dedicated computer wallet. Pump.fun’s protocol fees are separate. ",
                        tf
                          ? "Your computer starts automatically after launch. Preparing the desktop may take a few minutes. Coinputer continues setup even if you close this page. Operator-backed starter credit is separate from your launch SOL deposit and creator fees; funding limits and available capacity still apply."
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                "Start its server when compute credit is available and a spending limit is set. ",
                                l?.provisioningEnabled
                                  ? "Rental is available for funded computers."
                                  : "Server rental is awaiting provider approval.",
                                " Launching creates the coin and its computer identity. Starting the server is a separate action.",
                              ],
                            }),
                      ],
                    }),
                  ],
                }),
                Z &&
                  (0, n.jsxs)("div", {
                    className: "read-loading",
                    role: "status",
                    children: [
                      (0, n.jsx)("span", {
                        className: "block-cursor",
                        "aria-hidden": "true",
                      }),
                      "Reading Pump.fun’s current mainnet launch options…",
                    ],
                  }),
                Y &&
                  !eG &&
                  (0, n.jsxs)("div", {
                    className: "read-error",
                    role: "alert",
                    children: [
                      Y,
                      !G &&
                        (0, n.jsx)(S.$, {
                          type: "button",
                          size: "sm",
                          variant: "outline",
                          disabled: Z,
                          onClick: () => {
                            (K(""), X(!0), ee((e) => e + 1));
                          },
                          children: "Retry",
                        }),
                    ],
                  }),
                !Z &&
                  G &&
                  !G.createEnabled &&
                  (0, n.jsxs)("div", {
                    className: "computer-help",
                    role: "status",
                    children: [
                      (0, n.jsx)("p", {
                        children:
                          "Pump.fun is not accepting new launches right now. Your draft is kept.",
                      }),
                      (0, n.jsx)(S.$, {
                        type: "button",
                        variant: "outline",
                        onClick: () => {
                          (K(""), X(!0), ee((e) => e + 1));
                        },
                        children: "Refresh launch availability",
                      }),
                    ],
                  }),
                eK &&
                  (0, n.jsxs)("div", {
                    className: `launch-receipt ${["confirmed", "finalized"].includes(eK.status) ? "confirmed" : ""}`,
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)(y.A, { size: 18 }),
                          (0, n.jsx)("b", {
                            children: ["confirmed", "finalized"].includes(
                              eK.status,
                            )
                              ? "lookup" === eK.kind
                                ? "Launch setup complete"
                                : "Mainnet launch confirmed"
                              : "failed" === eK.status
                                ? "Transaction failed"
                                : "expired" === eK.status
                                  ? "Blockhash expired"
                                  : "Tracking mainnet confirmation",
                          }),
                          (0, n.jsx)("span", { children: eK.status }),
                        ],
                      }),
                      (0, n.jsxs)("p", {
                        children: [eK.name, " \xb7 $", eK.symbol],
                      }),
                      "lookup" === eK.kind &&
                        ["confirmed", "finalized"].includes(eK.status) &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("p", {
                              children: tx
                                ? "Setup confirmed. Your coin review opens automatically after mainnet finalization. Your coin still needs that review and your wallet approval."
                                : "Your reusable launch setup is confirmed. Your coin has not launched yet. Continue to its coin review; nothing is sent until you approve it.",
                            }),
                            (0, n.jsxs)(S.$, {
                              type: "submit",
                              form: "coinputer-launch-form",
                              variant: "outline",
                              size: "sm",
                              disabled:
                                !!eY ||
                                eH ||
                                e !== eK.wallet ||
                                e9 !== eK.quoteMint ||
                                te?.address !== eK.lookupTable,
                              children: [
                                "Continue to coin review",
                                (0, n.jsx)(k.A, { size: 13 }),
                              ],
                            }),
                            e !== eK.wallet
                              ? (0, n.jsx)("p", {
                                  children:
                                    "Connect the wallet used for this setup to continue.",
                                })
                              : e9 !== eK.quoteMint
                                ? (0, n.jsx)("p", {
                                    children:
                                      "Select the same trading pair to reuse this setup.",
                                  })
                                : te?.address !== eK.lookupTable
                                  ? (0, n.jsx)("p", {
                                      children: "Saving your confirmed setup…",
                                    })
                                  : null,
                          ],
                        }),
                      (0, n.jsxs)("a", {
                        href: `https://solscan.io/tx/${eK.signature}`,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          "Transaction ",
                          ex(eK.signature),
                          (0, n.jsx)(N.A, { size: 12 }),
                        ],
                      }),
                      "launch" === eK.kind &&
                        ["confirmed", "finalized"].includes(eK.status) &&
                        (0, n.jsxs)(S.$, {
                          variant: "outline",
                          size: "sm",
                          onClick: () => t(eK.mint),
                          children: [
                            "Open coin",
                            (0, n.jsx)(k.A, { size: 13 }),
                          ],
                        }),
                    ],
                  }),
                eK?.transaction &&
                  ["pending", "submitted"].includes(eK.status) &&
                  (0, n.jsx)(S.$, {
                    variant: "outline",
                    disabled: !!eY || e !== eK.wallet,
                    onClick: () => void tu(),
                    children: eY || "Retry same signed transaction",
                  }),
                eK?.kind === "launch" &&
                  ["confirmed", "finalized"].includes(eK.status) &&
                  (0, n.jsx)(
                    eh,
                    {
                      mint: eK.mint,
                      signature: eK.signature,
                      wallet: e,
                      launcher: eK.wallet,
                      finalized: "finalized" === eK.status,
                      automaticFirstStart: tf,
                      onOpen: () => s(eK.mint),
                    },
                    eK.signature,
                  ),
                eK?.kind === "launch" &&
                  "finalized" === eK.status &&
                  (0, n.jsx)(S.$, {
                    variant: "outline",
                    onClick: () => {
                      (eZ(null),
                        (eT.current = null),
                        (eR.current = ""),
                        ea(""),
                        es(""),
                        ei(""),
                        eo(null),
                        eE(""),
                        eA(""),
                        eM("sol"),
                        e$(""),
                        e_("0"),
                        eF("0"),
                        eD(!1),
                        eN(!1),
                        K(""),
                        eQ(null),
                        ej(!1),
                        eu(null));
                      try {
                        !(function (e, t, a) {
                          if (f(t) && (void 0 === a || g(a)))
                            try {
                              let n = v(e.getItem(x(t))),
                                s = v(e.getItem(p)),
                                r =
                                  n?.wallet === t
                                    ? n
                                    : s?.wallet === t
                                      ? s
                                      : null;
                              if (!r || (void 0 !== a && r.signature !== a))
                                return !1;
                              if (s?.wallet === t) {
                                if (!w(e, r)) return !1;
                                e.removeItem(p);
                              }
                              e.removeItem(x(t));
                            } catch {
                              return !1;
                            }
                        })(localStorage, e, eK.signature);
                      } catch {}
                    },
                    children: "Create another coin",
                  }),
                (0, n.jsx)(ef.Provider, {
                  value: tr,
                  children: (0, n.jsx)("form", {
                    id: "coinputer-launch-form",
                    onSubmit: tl,
                    className: "launch-form single-launch",
                    noValidate: !0,
                    children: (0, n.jsxs)("fieldset", {
                      disabled:
                        !!eY ||
                        !!(
                          eK &&
                          (["pending", "submitted"].includes(eK.status) ||
                            ("launch" === eK.kind &&
                              ["confirmed", "finalized"].includes(eK.status)))
                        ),
                      children: [
                        (0, n.jsxs)("div", {
                          className: "single-launch-grid",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "launch-main-fields",
                              children: [
                                (0, n.jsxs)("section", {
                                  className: "launch-section",
                                  children: [
                                    (0, n.jsx)("h2", {
                                      children: "// COIN IDENTITY",
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "identity-row",
                                      children: [
                                        (0, n.jsx)(ew, {
                                          label: "Coin name",
                                          id: "launch-name",
                                          children: (0, n.jsx)(A.p, {
                                            id: "launch-name",
                                            value: et,
                                            onChange: (e) => ea(e.target.value),
                                            placeholder: "Name your coin",
                                            maxLength: 32,
                                            required: !0,
                                          }),
                                        }),
                                        (0, n.jsx)(ew, {
                                          label: "Ticker",
                                          id: "launch-symbol",
                                          children: (0, n.jsx)(A.p, {
                                            id: "launch-symbol",
                                            value: en,
                                            onChange: (e) => es(e.target.value),
                                            placeholder: "TICKER",
                                            maxLength: 13,
                                            required: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)(ew, {
                                      label: "Description",
                                      id: "launch-description",
                                      children: (0, n.jsx)(R, {
                                        id: "launch-description",
                                        value: er,
                                        onChange: (e) => ei(e.target.value),
                                        maxLength: 1e3,
                                        placeholder:
                                          "A coin with a computer. What will yours become?",
                                      }),
                                    }),
                                    (0, n.jsxs)("details", {
                                      className: "metadata-details",
                                      children: [
                                        (0, n.jsxs)("summary", {
                                          children: [
                                            "Social links ",
                                            (0, n.jsx)("span", {
                                              children: "OPTIONAL +",
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("div", {
                                          className: "form-two",
                                          children: [
                                            (0, n.jsx)(ew, {
                                              label: "X / Twitter",
                                              id: "launch-twitter",
                                              children: (0, n.jsx)(A.p, {
                                                id: "launch-twitter",
                                                type: "url",
                                                value: eC,
                                                onChange: (e) =>
                                                  eE(e.target.value),
                                                placeholder: "https://x.com/…",
                                              }),
                                            }),
                                            (0, n.jsx)(ew, {
                                              label: "Telegram",
                                              id: "launch-telegram",
                                              children: (0, n.jsx)(A.p, {
                                                id: "launch-telegram",
                                                type: "url",
                                                value: eS,
                                                onChange: (e) =>
                                                  eA(e.target.value),
                                                placeholder: "https://t.me/…",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("section", {
                                  className: "launch-section",
                                  children: [
                                    (0, n.jsx)("h2", {
                                      children: "// MARKET & FIRST BUY",
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "form-two",
                                      children: [
                                        (0, n.jsx)(ew, {
                                          label: "Trading pair",
                                          id: "launch-pair",
                                          note: "What people use to buy your coin.",
                                          children: (0, n.jsx)(ed, {
                                            value: e9,
                                            options: G?.quotes || [],
                                            labels: P,
                                            labelsLoading: U.loading,
                                            labelsUnavailable: U.unavailable,
                                            onReloadLabels: () => {
                                              (_({
                                                loading: !0,
                                                unavailable: !1,
                                              }),
                                                D((e) => e + 1));
                                            },
                                            disabled: !G,
                                            onChange: (e) => {
                                              (eM(
                                                e === em
                                                  ? "sol"
                                                  : e === ep
                                                    ? "usdc"
                                                    : "custom",
                                              ),
                                                e$(e),
                                                eF("0"),
                                                eD(!1));
                                            },
                                          }),
                                        }),
                                        (0, n.jsx)(ew, {
                                          label: `Your first buy (${tn})`,
                                          id: "launch-buy",
                                          note:
                                            "sol" === eL
                                              ? "Optional. Set 0 to skip."
                                              : `Paid in ${tn}, not SOL. Hold it in this wallet, or set 0 to skip.`,
                                          children: (0, n.jsx)(A.p, {
                                            id: "launch-buy",
                                            inputMode: "decimal",
                                            value: eU,
                                            onChange: (e) => {
                                              e_(e.target.value);
                                            },
                                            required: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("p", {
                                      className: "launch-consent",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          children:
                                            "Coin creation, first buy and computer funding in one transaction.",
                                        }),
                                        " Coinputer reuses existing network setup where available. An exceptional extra setup is disclosed before approval. Wallet sign-in is separate.",
                                      ],
                                    }),
                                    "custom" === eL &&
                                      tt &&
                                      (0, n.jsxs)("div", {
                                        className: "pair-detail",
                                        children: [
                                          "Pair mint",
                                          (0, n.jsxs)("a", {
                                            href: `https://solscan.io/token/${e9}`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [
                                              e9,
                                              (0, n.jsx)(N.A, { size: 12 }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ta &&
                                      (0, n.jsx)(ew, {
                                        label: "Creator trading fee (%)",
                                        id: "launch-tax",
                                        note: `Choose up to ${G.maxCreatorFeeBps / 100}%. 0 uses Pump’s standard rate. Applies to trades, not wallet transfers.`,
                                        children: (0, n.jsx)(A.p, {
                                          id: "launch-tax",
                                          type: "number",
                                          min: "0",
                                          max: G.maxCreatorFeeBps / 100,
                                          step: "0.01",
                                          value: eB,
                                          onChange: (e) => eF(e.target.value),
                                        }),
                                      }),
                                    (0, n.jsxs)("details", {
                                      className:
                                        "metadata-details advanced-launch",
                                      children: [
                                        (0, n.jsxs)("summary", {
                                          children: [
                                            "Advanced launch options ",
                                            (0, n.jsx)("span", {
                                              children: "OPTIONAL +",
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)(ey, {
                                          id: "launch-mayhem",
                                          title: "Mayhem mode",
                                          text:
                                            tt?.source === "quoteControl"
                                              ? "Unavailable for this custom pair."
                                              : "Pump’s optional Mayhem mode. Availability is read from mainnet.",
                                          checked:
                                            eq && tt?.source !== "quoteControl",
                                          disabled:
                                            !G?.mayhemEnabled ||
                                            tt?.source === "quoteControl",
                                          onChange: eD,
                                        }),
                                        (0, n.jsx)("p", {
                                          className: "computer-help",
                                          children:
                                            "Holder rewards and tokenized-agent payments are unavailable for launches that dedicate creator fees to their computer.",
                                        }),
                                        te?.wallet === e &&
                                          te.quoteMint === e9 &&
                                          (0, n.jsxs)("div", {
                                            className: "saved-table",
                                            children: [
                                              (0, n.jsxs)("span", {
                                                children: [
                                                  "Reusable launch setup \xb7 ",
                                                  ex(te.address),
                                                ],
                                              }),
                                              (0, n.jsx)("button", {
                                                type: "button",
                                                onClick: () => {
                                                  let e = { ...e5 };
                                                  (delete e[e7], e4(e));
                                                  try {
                                                    localStorage.setItem(
                                                      "coinputer.mainnet-address-tables",
                                                      JSON.stringify(e),
                                                    );
                                                  } catch {}
                                                },
                                                children: "Reset setup",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("aside", {
                              className: "launch-art-panel",
                              "data-expanded": ek,
                              "aria-label": "Live coin preview",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "preview-heading",
                                  children: [
                                    (0, n.jsx)("h2", {
                                      children: "// YOUR COIN",
                                    }),
                                    (0, n.jsx)("button", {
                                      className: "preview-toggle",
                                      type: "button",
                                      "aria-expanded": ek,
                                      "aria-controls": "coin-preview-controls",
                                      onClick: () => eN((e) => !e),
                                      children: ek
                                        ? "Hide controls"
                                        : el
                                          ? "Edit artwork"
                                          : "Add artwork",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)(J, {
                                  file: el,
                                  onChange: eo,
                                  onBusyChange: eJ,
                                  disabled: !!eY,
                                  error: tr["launch-artwork"],
                                }),
                                (0, n.jsx)("div", {
                                  className: "live-coin-name",
                                  children: (0, n.jsxs)("b", {
                                    children: [
                                      et.trim() || "Your coin",
                                      " ",
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "(",
                                          en.trim() || "TICKER",
                                          ")",
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, n.jsxs)("dl", {
                                  className: "live-coin-market",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("dt", {
                                          children: "Trading pair",
                                        }),
                                        (0, n.jsx)("dd", {
                                          title: e9,
                                          children: tn,
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("dt", {
                                          children: "First buy",
                                        }),
                                        (0, n.jsx)("dd", {
                                          children: ts["launch-buy"]
                                            ? "Enter an amount"
                                            : `${eU} ${tn}`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "coin-website-note",
                                  children: [
                                    (0, n.jsx)(C.A, {}),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("b", {
                                          children: "A home on Coinputer.",
                                        }),
                                        (0, n.jsx)("p", {
                                          children:
                                            "Your coin page becomes its website automatically.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "single-launch-footer",
                          children: [
                            eg &&
                              Object.keys(ts).length > 0 &&
                              (0, n.jsx)("p", {
                                className: "launch-validation-summary",
                                role: "alert",
                                children:
                                  "Check the highlighted fields before continuing.",
                              }),
                            (0, n.jsxs)("p", {
                              className: "launch-consent",
                              children: [
                                G &&
                                  G.computerFundingLamports > 0 &&
                                  (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsxs)("strong", {
                                        children: [
                                          (0, m.Js)(
                                            String(G.computerFundingLamports),
                                            9,
                                          ),
                                          " SOL initial computer funding",
                                        ],
                                      }),
                                      " goes to this coin’s dedicated wallet when it launches.",
                                      (0, n.jsx)("br", {}),
                                    ],
                                  }),
                                "100% of the creator-fee portion funds this computer.",
                                (0, n.jsx)("br", {}),
                                "Review publishes your image and details, then shows the exact costs and fee wallet before signing.",
                              ],
                            }),
                            (0, n.jsxs)(S.$, {
                              id: "launch-review",
                              className: "launch-review-button",
                              type: "submit",
                              disabled: !!eY || eH || Z || !G?.createEnabled,
                              "aria-busy": !!eY || Z,
                              children: [
                                eY
                                  ? (0, n.jsx)("span", {
                                      className: "block-cursor",
                                      "aria-hidden": "true",
                                    })
                                  : (0, n.jsx)(E.A, { size: 15 }),
                                eY ||
                                  (Z
                                    ? "Reading launch options…"
                                    : tm
                                      ? "Continue to coin review"
                                      : "Review & launch"),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(z.lG, {
              open: !!eG,
              onOpenChange: (e) => {
                e || tp();
              },
              children:
                eG &&
                (0, n.jsx)(
                  F,
                  {
                    automaticFirstStart: tf,
                    prepared: eG,
                    artwork: ec,
                    pairLabel:
                      eG.quoteMint === em
                        ? "SOL"
                        : eG.quoteMint === ep
                          ? "USDC"
                          : P[eG.quoteMint]?.symbol || ex(eG.quoteMint),
                    accepted: e2,
                    onAccepted: e3,
                    busy: eY,
                    wallet: e,
                    error: Y,
                    onApprove: () => void th(),
                    onRefresh: () => void tl(),
                    onEdit: tp,
                  },
                  eG.preparedAt,
                ),
            }),
          ],
        });
      }
      function ew({ label: e, id: t, note: a, children: s }) {
        let r = (0, o.useContext)(ef)[t],
          i =
            [a ? `${t}-note` : "", r ? `${t}-error` : ""]
              .filter(Boolean)
              .join(" ") || void 0,
          l = (0, o.isValidElement)(s)
            ? (0, o.cloneElement)(s, {
                "aria-invalid": !!r,
                "aria-describedby": i,
              })
            : s;
        return (0, n.jsxs)("div", {
          className: "launch-field",
          tabIndex: r ? -1 : void 0,
          children: [
            (0, n.jsx)("label", { htmlFor: t, children: e }),
            l,
            a && (0, n.jsx)("p", { id: `${t}-note`, children: a }),
            r &&
              (0, n.jsx)("p", {
                id: `${t}-error`,
                className: "field-error",
                children: r,
              }),
          ],
        });
      }
      function ey({
        id: e,
        title: t,
        text: a,
        checked: s,
        disabled: r,
        onChange: i,
      }) {
        return (0, n.jsxs)("div", {
          className: "launch-toggle",
          children: [
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("label", { htmlFor: e, children: t }),
                (0, n.jsx)("p", { children: a }),
              ],
            }),
            (0, n.jsx)(O, {
              id: e,
              checked: s,
              disabled: r,
              onCheckedChange: i,
            }),
          ],
        });
      }
      var ek = a(299),
        eN = a(2651),
        eC = a(6927),
        eE = a(7589),
        eS = a(6338),
        eA = a(2223),
        eT = a(3418),
        eR = a.n(eT);
      let eI = (e) =>
          e
            ? new Date(e).toLocaleString(void 0, {
                dateStyle: "medium",
                timeStyle: "short",
              })
            : "Not recorded",
        eO = (e) =>
          `${(e / 0x40000000).toLocaleString(void 0, { maximumFractionDigits: 1 })} GiB`;
      function ez({
        mint: e,
        machine: t,
        connected: a,
        resolving: s,
        onRetry: r,
      }) {
        let i = t?.mint === e ? t.id : null,
          [l, d] = (0, o.useState)(0),
          [u, h] = (0, o.useState)(!1),
          [m, p] = (0, o.useState)({
            id: "",
            data: null,
            error: null,
            loading: !1,
          });
        (0, o.useEffect)(() => {
          if (!i || !a) return;
          let t = new AbortController(),
            n = !1;
          async function s() {
            if (!n && !t.signal.aborted && !document.hidden) {
              ((n = !0),
                p((e) => ({
                  id: i,
                  data: e.id === i ? e.data : null,
                  error: e.id === i ? e.error : null,
                  loading: !0,
                })));
              try {
                let a = await (0, V.Iz)(
                  `machines/${i}/inspect`,
                  void 0,
                  t.signal,
                );
                if (a.machine.id !== i || a.machine.mint !== e)
                  throw Error(
                    "The computer record does not match this mint. Refresh to try again.",
                  );
                t.signal.aborted ||
                  p({ id: i, data: a, error: null, loading: !1 });
              } catch (e) {
                t.signal.aborted ||
                  p((t) => ({
                    ...t,
                    loading: !1,
                    error:
                      e instanceof Error
                        ? e.message
                        : "Computer record unavailable. Try again.",
                  }));
              } finally {
                n = !1;
              }
            }
          }
          s();
          let r = window.setInterval(s, 3e4),
            l = () => {
              document.hidden || s();
            };
          return (
            document.addEventListener("visibilitychange", l),
            () => {
              (t.abort(),
                window.clearInterval(r),
                document.removeEventListener("visibilitychange", l));
            }
          );
        }, [i, e, a, l]);
        let x = a && m.id === i ? m.data : null,
          f = !!(i && a && (m.id !== i || m.loading)),
          g = a && m.id === i ? m.error : null,
          b = x?.machine,
          j = x?.hardware,
          v = j?.specs,
          w = b?.metrics,
          y = x?.events ?? [],
          k =
            w &&
            Number.isFinite(w.storageBytes) &&
            w.storageBytes >= 0 &&
            Number.isFinite(w.storageTotalBytes) &&
            w.storageTotalBytes > 0;
        return (0, n.jsxs)("section", {
          className: eR().record,
          "aria-labelledby": "coin-computer-record",
          children: [
            (0, n.jsxs)("header", {
              className: eR().heading,
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("span", {
                      className: eR().eyebrow,
                      children: "COMPUTER RECORD",
                    }),
                    (0, n.jsxs)("h3", {
                      id: "coin-computer-record",
                      children: [
                        (0, n.jsx)(ek.A, { size: 18 }),
                        t?.mint === e ? t.name : "This coin’s computer",
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(S.$, {
                  variant: "ghost",
                  size: "sm",
                  disabled: f || (!i && s),
                  onClick: () => (i ? d((e) => e + 1) : r()),
                  "aria-label": "Refresh computer record",
                  children: [(0, n.jsx)(M.A, { size: 14 }), "Refresh"],
                }),
              ],
            }),
            a
              ? i
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      f &&
                        !x &&
                        (0, n.jsx)("p", {
                          className: eR().notice,
                          role: "status",
                          children: "READING MACHINE RECORD…",
                        }),
                      g &&
                        (0, n.jsxs)("p", {
                          className: eR().warning,
                          role: "alert",
                          children: [
                            g,
                            x && " Showing the last successful read.",
                          ],
                        }),
                      x &&
                        b &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsxs)("div", {
                              className: eR().status,
                              children: [
                                (0, n.jsxs)("span", {
                                  children: [
                                    (0, n.jsx)(c.md, {
                                      live: b.online && !g,
                                      fault: "ERROR" === b.state,
                                    }),
                                    "ONLINE" !== b.state || b.online
                                      ? b.state.replaceAll("_", " ")
                                      : "AWAITING CONNECTION",
                                  ],
                                }),
                                (0, n.jsxs)("span", {
                                  children: [
                                    b.holdersOnline,
                                    " ",
                                    1 === b.holdersOnline
                                      ? "holder"
                                      : "holders",
                                    " connected",
                                  ],
                                }),
                              ],
                            }),
                            b.motd &&
                              (0, n.jsx)("p", {
                                className: eR().motd,
                                children: b.motd,
                              }),
                            (0, n.jsx)(eA.A, { machine: b.id }),
                            v &&
                              [v.vcpus, v.memoryMiB, v.diskGB].some(
                                (e) => null != e,
                              ) &&
                              (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("h4", {
                                    className: eR().label,
                                    children: "Server specifications",
                                  }),
                                  (0, n.jsxs)("dl", {
                                    className: eR().specs,
                                    children: [
                                      null != v.vcpus &&
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsxs)("dt", {
                                              children: [
                                                (0, n.jsx)(eN.A, { size: 14 }),
                                                "CPU",
                                              ],
                                            }),
                                            (0, n.jsxs)("dd", {
                                              children: [
                                                v.vcpus,
                                                " vCPU",
                                                1 === v.vcpus ? "" : "s",
                                              ],
                                            }),
                                          ],
                                        }),
                                      null != v.memoryMiB &&
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsxs)("dt", {
                                              children: [
                                                (0, n.jsx)(eC.A, { size: 14 }),
                                                "Memory",
                                              ],
                                            }),
                                            (0, n.jsxs)("dd", {
                                              children: [
                                                (
                                                  v.memoryMiB / 1024
                                                ).toLocaleString(),
                                                " GiB",
                                              ],
                                            }),
                                          ],
                                        }),
                                      null != v.diskGB &&
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsxs)("dt", {
                                              children: [
                                                (0, n.jsx)(eE.A, { size: 14 }),
                                                "Disk",
                                              ],
                                            }),
                                            (0, n.jsxs)("dd", {
                                              children: [
                                                v.diskGB.toLocaleString(),
                                                " GB",
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            j?.status === "unavailable" &&
                              (0, n.jsx)("p", {
                                className: eR().warning,
                                children:
                                  "Hardware specifications could not be verified. The activity record is still available.",
                              }),
                            j?.status === "stale" &&
                              (0, n.jsxs)("p", {
                                className: eR().warning,
                                children: [
                                  "Provider read unavailable. These are the last verified specifications, checked ",
                                  eI(j.observedAt),
                                  ".",
                                ],
                              }),
                            v &&
                              (0, n.jsxs)("p", {
                                className: eR().note,
                                children: [
                                  "Server allocation shared by this computer’s holder sessions. ",
                                  j?.status === "verified" &&
                                    (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        "Verified ",
                                        eI(j.observedAt),
                                        ".",
                                      ],
                                    }),
                                ],
                              }),
                            (0, n.jsxs)("dl", {
                              className: eR().details,
                              children: [
                                v?.region &&
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("dt", {
                                        children: "Location",
                                      }),
                                      (0, n.jsx)("dd", { children: v.region }),
                                    ],
                                  }),
                                v?.image &&
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("dt", {
                                        children: "Base image",
                                      }),
                                      (0, n.jsx)("dd", { children: v.image }),
                                    ],
                                  }),
                                k &&
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("dt", {
                                        children: "Filesystem usage",
                                      }),
                                      (0, n.jsxs)("dd", {
                                        children: [
                                          eO(w.storageBytes),
                                          " / ",
                                          eO(w.storageTotalBytes),
                                        ],
                                      }),
                                    ],
                                  }),
                                w &&
                                  "number" == typeof w.load &&
                                  Number.isFinite(w.load) &&
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("dt", {
                                        children: "System load \xb7 1 minute",
                                      }),
                                      (0, n.jsx)("dd", {
                                        children: w.load.toFixed(2),
                                      }),
                                    ],
                                  }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("dt", {
                                      children: "Registered",
                                    }),
                                    (0, n.jsx)("dd", {
                                      children: eI(b.createdAt),
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("dt", {
                                      children: "First online",
                                    }),
                                    (0, n.jsx)("dd", {
                                      children: x.history.firstOnline
                                        ? eI(x.history.firstOnline)
                                        : "No verified boot recorded",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("dt", {
                                      children: "Last activity",
                                    }),
                                    (0, n.jsx)("dd", {
                                      children: eI(x.history.lastActivity),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("h4", {
                              className: eR().label,
                              children: "What’s been built and used",
                            }),
                            (0, n.jsxs)("dl", {
                              className: eR().counters,
                              children: [
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("dd", {
                                      children: BigInt(
                                        x.history.fileSaves,
                                      ).toLocaleString(),
                                    }),
                                    (0, n.jsx)("dt", {
                                      children: "Recorded file saves",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("dd", {
                                      children: BigInt(
                                        x.history.serviceStarts,
                                      ).toLocaleString(),
                                    }),
                                    (0, n.jsx)("dt", {
                                      children: "Service launches",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("dd", {
                                      children: BigInt(
                                        x.history.terminalSessions,
                                      ).toLocaleString(),
                                    }),
                                    (0, n.jsx)("dt", {
                                      children: "Terminal sessions opened",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("p", {
                              className: eR().note,
                              children:
                                "Actions recorded through Coinputer. File saves can include edits to the same file; work done directly on the desktop may not appear here.",
                            }),
                            (0, n.jsxs)("div", {
                              className: eR().subheading,
                              children: [
                                (0, n.jsx)("h4", {
                                  className: eR().label,
                                  children: "Hosted services",
                                }),
                                (0, n.jsxs)("span", {
                                  children: [x.services.length, " registered"],
                                }),
                              ],
                            }),
                            x.services.length
                              ? (0, n.jsx)("ul", {
                                  className: eR().services,
                                  children: x.services.map((e) =>
                                    (0, n.jsxs)(
                                      "li",
                                      {
                                        children: [
                                          (0, n.jsxs)("div", {
                                            children: [
                                              (0, n.jsx)("strong", {
                                                children: e.name,
                                              }),
                                              (0, n.jsxs)("small", {
                                                children: [
                                                  "Port ",
                                                  e.port,
                                                  " \xb7 ",
                                                  BigInt(
                                                    e.request_count,
                                                  ).toLocaleString(),
                                                  " public gateway requests",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("span", {
                                            children:
                                              b.online && !g
                                                ? e.status
                                                : `Last reported: ${e.status}`,
                                          }),
                                          e.url &&
                                            (0, n.jsxs)("a", {
                                              href: e.url,
                                              target: "_blank",
                                              rel: "noreferrer",
                                              children: [
                                                "Open app",
                                                (0, n.jsx)(N.A, { size: 12 }),
                                                (0, n.jsxs)("span", {
                                                  className: "sr-only",
                                                  children: [
                                                    ": ",
                                                    e.name,
                                                    " (opens in a new tab)",
                                                  ],
                                                }),
                                              ],
                                            }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                })
                              : (0, n.jsx)("p", {
                                  className: eR().note,
                                  children:
                                    "No services are registered on this computer.",
                                }),
                            (0, n.jsxs)("div", {
                              className: eR().subheading,
                              children: [
                                (0, n.jsxs)("h4", {
                                  className: eR().label,
                                  children: [
                                    (0, n.jsx)(eS.A, { size: 14 }),
                                    "Machine activity",
                                  ],
                                }),
                                (0, n.jsxs)("span", {
                                  children: [
                                    BigInt(
                                      x.history.eventCount,
                                    ).toLocaleString(),
                                    " recorded events",
                                  ],
                                }),
                              ],
                            }),
                            y.length
                              ? (0, n.jsx)("ol", {
                                  className: eR().journal,
                                  children: (u ? y : y.slice(0, 8)).map((e) =>
                                    (0, n.jsxs)(
                                      "li",
                                      {
                                        children: [
                                          (0, n.jsx)("time", {
                                            dateTime: e.created_at,
                                            children: eI(e.created_at),
                                          }),
                                          (0, n.jsxs)("div", {
                                            children: [
                                              (0, n.jsx)("span", {
                                                children: e.kind,
                                              }),
                                              (0, n.jsx)("p", {
                                                children: e.message,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                })
                              : (0, n.jsx)("p", {
                                  className: eR().note,
                                  children:
                                    "No machine activity has been recorded yet.",
                                }),
                            y.length > 8 &&
                              (0, n.jsx)(S.$, {
                                variant: "ghost",
                                size: "sm",
                                onClick: () => h((e) => !e),
                                "aria-expanded": u,
                                children: u
                                  ? "Show recent activity"
                                  : `Show older activity (${y.length - 8})`,
                              }),
                            (0, n.jsxs)("p", {
                              className: eR().footer,
                              children: [
                                "Latest ",
                                y.length,
                                " journal entries \xb7 ",
                                g ? "Last successful read" : "Record read",
                                " ",
                                eI(x.observedAt),
                                " \xb7 Refreshes every 30 seconds while visible",
                              ],
                            }),
                          ],
                        }),
                    ],
                  })
                : (0, n.jsx)("p", {
                    className: eR().notice,
                    role: "status",
                    children: s
                      ? "Locating this coin’s computer…"
                      : "No Coinputer computer is registered for this mint yet.",
                  })
              : (0, n.jsx)("p", {
                  className: eR().notice,
                  role: "status",
                  children: s
                    ? "Connecting to the computer directory…"
                    : "Computer records are temporarily unavailable. Token data remains available below.",
                }),
          ],
        });
      }
      var eL = a(5476),
        eM = a(9314),
        eP = a(9424),
        e$ = a(5532),
        eU = a(9005),
        e_ = a(6659),
        eB = a(3913),
        eF = a(3199),
        eq = a(3364),
        eD = a(8460),
        eG = a(5321);
      function eW({ className: e, orientation: t = "horizontal", ...a }) {
        return (0, n.jsx)(eG.bL, {
          "data-slot": "tabs",
          "data-orientation": t,
          orientation: t,
          className: (0, T.cn)(
            "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
            e,
          ),
          ...a,
        });
      }
      let eY = (0, eD.F)(
        "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
        {
          variants: {
            variant: { default: "bg-muted", line: "gap-1 bg-transparent" },
          },
          defaultVariants: { variant: "default" },
        },
      );
      function eV({ className: e, variant: t = "default", ...a }) {
        return (0, n.jsx)(eG.B8, {
          "data-slot": "tabs-list",
          "data-variant": t,
          className: (0, T.cn)(eY({ variant: t }), e),
          ...a,
        });
      }
      function eH({ className: e, ...t }) {
        return (0, n.jsx)(eG.l9, {
          "data-slot": "tabs-trigger",
          className: (0, T.cn)(
            "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
            "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",
            "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
            e,
          ),
          ...t,
        });
      }
      function eJ({ className: e, ...t }) {
        return (0, n.jsx)(eG.UC, {
          "data-slot": "tabs-content",
          className: (0, T.cn)("flex-1 outline-none", e),
          ...t,
        });
      }
      var eK = a(9885);
      function eZ({ className: e, value: t, ...a }) {
        return (0, n.jsx)(eK.bL, {
          "data-slot": "progress",
          value: t,
          className: (0, T.cn)(
            "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
            e,
          ),
          ...a,
          children: (0, n.jsx)(eK.C1, {
            "data-slot": "progress-indicator",
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: { transform: `translateX(-${100 - (t ?? 0)}%)` },
          }),
        });
      }
      function eX(e, t) {
        let [a, n] = (0, o.useState)({
          key: "",
          data: null,
          loading: !1,
          error: null,
          history: [],
        });
        return (
          (0, o.useEffect)(() => {
            if (!e) return;
            let t = new AbortController(),
              a = !1;
            async function s() {
              if (a || t.signal.aborted || document.hidden) return;
              a = !0;
              let s = performance.now(),
                l = new URLSearchParams(e),
                o = (e, t) => ({
                  id: Date.now(),
                  at: new Date().toISOString(),
                  kind: l.get("kind"),
                  address: l.get("address"),
                  ok: e,
                  slot: t,
                  ms: Math.round(performance.now() - s),
                });
              n((t) => ({
                ...t,
                key: e,
                data: t.key === e ? t.data : null,
                loading: !0,
                error: t.key === e ? t.error : null,
              }));
              try {
                let a = await (0, i.$)(`/api/mainnet?${e}`, {
                    signal: AbortSignal.any([
                      t.signal,
                      AbortSignal.timeout(2e4),
                    ]),
                    cache: "no-store",
                  }),
                  s = await (0, r._)(
                    a,
                    "Mainnet data is temporarily unavailable. Refresh to try the connection again.",
                  );
                if (!a.ok) throw Error(s.error || "Mainnet read failed.");
                if (t.signal.aborted) return;
                n((t) => ({
                  key: e,
                  data: s,
                  loading: !1,
                  error: null,
                  history: [...t.history, o(!0, s.slot)].slice(-24),
                }));
              } catch (e) {
                if (t.signal.aborted) return;
                n((t) => ({
                  ...t,
                  loading: !1,
                  error:
                    e instanceof Error
                      ? e.message
                      : "Mainnet connection failed.",
                  history: [...t.history, o(!1)].slice(-24),
                }));
              } finally {
                a = !1;
              }
            }
            s();
            let l = window.setInterval(s, 3e4),
              o = () => {
                document.hidden || s();
              };
            return (
              document.addEventListener("visibilitychange", o),
              () => {
                (t.abort(),
                  window.clearInterval(l),
                  document.removeEventListener("visibilitychange", o));
              }
            );
          }, [e, t]),
          a.key === e
            ? a
            : {
                key: e ?? "",
                data: null,
                loading: !!e,
                error: null,
                history: a.history,
              }
        );
      }
      let eQ = (e, t = 6) => `${e.slice(0, t)}…${e.slice(-t)}`;
      function e0({ value: e, kind: t = "account" }) {
        let [a, s] = (0, o.useState)(!1),
          [r, i] = (0, o.useState)(!1);
        async function l() {
          try {
            (await navigator.clipboard.writeText(e), s(!0), i(!1));
          } catch {
            i(!0);
          }
        }
        return (
          (0, o.useEffect)(() => {
            if (!a) return;
            let e = setTimeout(() => s(!1), 2e3);
            return () => clearTimeout(e);
          }, [a]),
          (0, n.jsxs)("span", {
            className: "address-row",
            children: [
              (0, n.jsxs)("a", {
                href: `https://solscan.io/${t}/${e}`,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": `View ${t} on Solscan`,
                title: e,
                children: [eQ(e), (0, n.jsx)(N.A, { size: 12 })],
              }),
              (0, n.jsx)("button", {
                onClick: l,
                "aria-label": a ? "Address copied" : "Copy address",
                title: r
                  ? "Clipboard unavailable. Copy from the explorer."
                  : a
                    ? "Copied"
                    : "Copy address",
                children: a
                  ? (0, n.jsx)(P.A, { size: 13 })
                  : (0, n.jsx)(eM.A, { size: 13 }),
              }),
            ],
          })
        );
      }
      function e1({ state: e }) {
        return e.error
          ? (0, n.jsxs)("div", {
              className: "read-error",
              role: "alert",
              children: [
                (0, n.jsx)(eP.A, { size: 16 }),
                (0, n.jsxs)("span", {
                  children: [
                    e.error,
                    e.data &&
                      " Values below are from the last successful read.",
                  ],
                }),
              ],
            })
          : e.loading && !e.data
            ? (0, n.jsxs)("div", {
                className: "read-loading",
                role: "status",
                children: [
                  (0, n.jsx)("span", {
                    className: "block-cursor",
                    "aria-hidden": "true",
                  }),
                  "READING SOLANA MAINNET…",
                ],
              })
            : null;
      }
      function e2({ data: e, stale: t = !1 }) {
        return (0, n.jsxs)("div", {
          className: `data-stamp ${t ? "stale" : ""}`,
          children: [
            (0, n.jsxs)("span", {
              children: [
                (0, n.jsx)(e$.A, { size: 12 }),
                t ? "Last successful read" : "Finalized mainnet read",
              ],
            }),
            (0, n.jsxs)("span", {
              children: [
                new Date(e.observedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }),
                " \xb7 slot ",
                e.slot.toLocaleString("en-US"),
              ],
            }),
          ],
        });
      }
      function e3({ label: e, value: t, note: a, icon: s }) {
        return (0, n.jsxs)("div", {
          className: "metric",
          children: [
            (0, n.jsxs)("div", { className: "metric-label", children: [e, s] }),
            (0, n.jsx)("div", { className: "metric-value", children: t }),
            (0, n.jsx)("div", { className: "metric-note", children: a }),
          ],
        });
      }
      function e5({ icon: e, title: t, text: a }) {
        return (0, n.jsxs)("div", {
          className: "empty-state",
          children: [
            (0, n.jsx)("span", { children: e }),
            (0, n.jsx)("h3", { children: t }),
            (0, n.jsx)("p", { children: a }),
          ],
        });
      }
      function e4({ transactions: e, error: t }) {
        return (0, n.jsxs)("section", {
          className: "transactions",
          children: [
            (0, n.jsxs)("div", {
              className: "section-title",
              children: [
                (0, n.jsxs)("h3", {
                  children: [
                    (0, n.jsx)(eS.A, { size: 16 }),
                    "Recent on-chain activity",
                  ],
                }),
                (0, n.jsx)("span", { children: "Latest 8 records" }),
              ],
            }),
            (0, n.jsx)("p", {
              className: "section-note",
              children:
                "Transaction references involving this address. These are not a creator-fee ledger.",
            }),
            t
              ? (0, n.jsx)("div", {
                  className: "read-error",
                  role: "alert",
                  children: t,
                })
              : e.length
                ? (0, n.jsx)("div", {
                    className: "transaction-list",
                    children: e.map((e) =>
                      (0, n.jsxs)(
                        "a",
                        {
                          href: `https://solscan.io/tx/${e.signature}`,
                          target: "_blank",
                          rel: "noreferrer",
                          className: "transaction",
                          children: [
                            (0, n.jsx)("span", {
                              className: `tx-icon ${e.failed ? "failed" : ""}`,
                              children: e.failed
                                ? (0, n.jsx)(eU.A, { size: 15 })
                                : (0, n.jsx)(e_.A, { size: 15 }),
                            }),
                            (0, n.jsxs)("span", {
                              className: "tx-main",
                              children: [
                                (0, n.jsx)("b", {
                                  children: eQ(e.signature, 8),
                                }),
                                (0, n.jsxs)("small", {
                                  children: [
                                    null === e.blockTime
                                      ? "Block time unavailable"
                                      : new Date(
                                          1e3 * e.blockTime,
                                        ).toLocaleString(),
                                    " \xb7 slot ",
                                    e.slot.toLocaleString("en-US"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("span", {
                              className: e.failed
                                ? "tx-status failed"
                                : "tx-status",
                              children: e.failed
                                ? "Failed"
                                : (e.confirmationStatus ??
                                  "Status unavailable"),
                            }),
                            (0, n.jsx)(N.A, { size: 13 }),
                          ],
                        },
                        e.signature,
                      ),
                    ),
                  })
                : (0, n.jsx)("div", {
                    className: "empty-inline",
                    children:
                      "No transaction records returned for this address.",
                  }),
          ],
        });
      }
      function e8({ onInspect: e, computers: t }) {
        let a = [
          {
            title: "Launch on Pump.fun",
            available: !0,
            text: "Give your coin a name, description and image. Choose a trading pair and an optional first buy, then connect your wallet and review your launch. Launch options and custom-pair creator-fee limits are read from Pump’s mainnet accounts.",
            detail:
              "Review the actual transaction and costs before signing. Creating a coin and a developer buy use your wallet’s funds. A large launch may need a separately approved address-table setup first.",
          },
          {
            title: "Find the real token",
            available: !0,
            text: "Paste a Solana mainnet mint. Coinputer verifies the chain and the mint’s token program, then reads its supply and authorities directly from mainnet.",
            detail: "",
          },
          {
            title: "Read your wallet",
            available: !0,
            text: "Connect a Solana wallet to share your public address, or inspect an address manually. SOL and selected-token holdings come from finalized mainnet reads. Connecting does not grant computer access.",
            detail:
              "Inspection does not request signatures. Launches require explicit wallet approval.",
          },
          {
            title: "Creator fees fund its computer",
            available: !!(t.connected && t.status?.fundingEnabled),
            text: "Each Coinputer launch gets its own dedicated fee wallet. The coin’s creator-fee portion accrues in its Pump creator vault and can be collected into that wallet. Pump.fun’s protocol fees remain separate.",
            detail:
              "Claimable fees, collected funds and available computer credit are separate balances. The computer’s Funding tool shows its fee recipient and recorded credit. You can also review and approve an additional SOL compute deposit.",
          },
          {
            title: "Provision the computer",
            available: !!(t.connected && t.status?.provisioningEnabled),
            text: "Every launch registers a permanent computer identity. Its manager can rent a server when funding and its spending limit cover startup. Low credit triggers a disk snapshot and sleep; funded machines can restore that disk.",
            detail:
              t.connected && t.status?.provisioningEnabled
                ? "Provisioning is enabled within the owner’s approved pilot limits."
                : "Computer rental availability is checked with the provider before starting.",
          },
          {
            title: "Let the community build",
            available: !!(t.connected && (t.summary?.online || 0) > 0),
            statusLabel:
              t.connected && !t.summary?.online
                ? "Requires a running computer"
                : void 0,
            text: "Enter a real desktop with a web browser, terminal, file manager and text editor. Each authenticated holder has a separate account and private Home, with a Shared folder for community projects.",
            detail:
              "The computer must be running before you enter. Save files before disconnecting; open desktop apps close, while supervised services keep running until the computer sleeps. Holdings and resource limits are checked by the server. Autonomous AI is not connected.",
          },
        ];
        return (0, n.jsxs)("div", {
          className: "guide",
          children: [
            (0, n.jsxs)("div", {
              className: "panel-intro",
              children: [
                (0, n.jsx)("span", {
                  className: "eyebrow",
                  children: "THE COINPUTER IDEA",
                }),
                (0, n.jsx)("h2", { children: "A coin. A budget. A computer." }),
                (0, n.jsx)("p", {
                  children:
                    "Creator fees can pay for a persistent computer that its holders can use. Here is the path from a token to a real machine.",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "fee-path",
              children: [
                (0, n.jsx)("span", { children: "Coin trades" }),
                (0, n.jsx)(k.A, { size: 14 }),
                (0, n.jsx)("span", { children: "Creator fees" }),
                (0, n.jsx)(k.A, { size: 14 }),
                (0, n.jsx)("span", { children: "Compute budget" }),
                (0, n.jsx)(k.A, { size: 14 }),
                (0, n.jsx)("span", { children: "Persistent machine" }),
              ],
            }),
            (0, n.jsxs)("section", {
              className: "computer-growth-story",
              "aria-label": "How computers grow",
              children: [
                (0, n.jsx)("span", {
                  className: "eyebrow",
                  children: "GROWTH MODEL \xb7 UPGRADES PLANNED",
                }),
                (0, n.jsx)("h3", {
                  children: "Higher market cap. More computing power.",
                }),
                (0, n.jsx)("p", {
                  children:
                    "The goal: as a coin grows, its community can graduate to stronger hardware. Creator fees support the compute budget; market cap is not a cash balance.",
                }),
                (0, n.jsx)("small", {
                  children:
                    "Market-cap upgrades are not automatic today. Larger resources need an approved, funded upgrade. Computer details always show the resources actually verified.",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "guide-steps",
              children: a.map((t, a) =>
                (0, n.jsxs)(
                  "article",
                  {
                    children: [
                      (0, n.jsxs)("span", {
                        className: "step-number",
                        children: ["0", a + 1],
                      }),
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsxs)("div", {
                            className: "step-heading",
                            children: [
                              (0, n.jsx)("h3", { children: t.title }),
                              (0, n.jsx)("span", {
                                className: `status-chip ${t.available ? "connected" : ""}`,
                                children:
                                  t.statusLabel ||
                                  (t.available ? "Available" : "Not connected"),
                              }),
                            ],
                          }),
                          (0, n.jsx)("p", { children: t.text }),
                          t.detail &&
                            (0, n.jsx)("p", {
                              className: "step-detail",
                              children: t.detail,
                            }),
                          1 === a &&
                            (0, n.jsxs)(S.$, {
                              variant: "outline",
                              size: "sm",
                              onClick: e,
                              children: [
                                "Inspect a mint",
                                (0, n.jsx)(k.A, { size: 14 }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  t.title,
                ),
              ),
            }),
            (0, n.jsxs)("div", {
              className: "guide-source",
              children: [
                (0, n.jsx)(y.A, { size: 19 }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("b", {
                      children: "Every displayed number has a source.",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Successful reads include their slot and timestamp. Failed reads show an error; cached values are marked as the last successful read. Reads refresh every 30 seconds while this page is visible, with a 20-second server cache.",
                    }),
                    (0, n.jsxs)("a", {
                      href: "https://solana.com/docs/references/clusters",
                      target: "_blank",
                      rel: "noreferrer",
                      children: [
                        "Solana mainnet documentation",
                        (0, n.jsx)(N.A, { size: 12 }),
                      ],
                    }),
                    (0, n.jsxs)("a", {
                      href: "https://github.com/pump-fun/pump-public-docs/blob/main/docs/instructions/COIN_CREATION.md",
                      target: "_blank",
                      rel: "noreferrer",
                      children: [
                        "Pump.fun coin creation",
                        (0, n.jsx)(N.A, { size: 12 }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function e6() {
        let e = (function () {
            let [e, t] = (0, o.useState)(0),
              [a, n] = (0, o.useState)(!1),
              [s, r] = (0, o.useState)(!1),
              i = (0, o.useRef)(!1),
              l = (0, o.useRef)(null);
            return (
              (0, o.useEffect)(() => {
                let e,
                  a = (a) => {
                    let s = a.detail.phase;
                    if (
                      ("start" === s && t((e) => e + 1),
                      "end" === s && t((e) => Math.max(0, e - 1)),
                      "write" === s)
                    ) {
                      (n(!0),
                        clearTimeout(e),
                        (e = setTimeout(() => n(!1), 500)));
                      let t = l.current;
                      if (i.current && t?.state === "running") {
                        let e = t.createOscillator(),
                          a = t.createGain();
                        ((e.type = "sine"),
                          (e.frequency.value = 420),
                          a.gain.setValueAtTime(0.008, t.currentTime),
                          a.gain.exponentialRampToValueAtTime(
                            1e-4,
                            t.currentTime + 0.06,
                          ),
                          e.connect(a),
                          a.connect(t.destination),
                          e.start(),
                          e.stop(t.currentTime + 0.07));
                      }
                    }
                  };
                return (
                  window.addEventListener("coinputer:io", a),
                  () => {
                    (window.removeEventListener("coinputer:io", a),
                      clearTimeout(e),
                      l.current?.close(),
                      (l.current = null));
                  }
                );
              }, []),
              {
                pending: e,
                disk: a,
                sound: s,
                toggleSound: async function () {
                  let e = !i.current;
                  if (e)
                    try {
                      ((l.current ??= new AudioContext()),
                        await l.current.resume());
                    } catch {
                      return;
                    }
                  ((i.current = e), r(e));
                },
              }
            );
          })(),
          [t, a] = (0, o.useState)(""),
          [r, i] = (0, o.useState)(""),
          [d, h] = (0, o.useState)("launch"),
          p = (0, o.useRef)({ hash: "", index: 0 }),
          x = (0, o.useRef)(!1);
        function f(e, t) {
          let n = t ?? r;
          if (e === d && n === r) return !0;
          if ((e !== d || n !== r) && !(0, s.mH)()) return !1;
          (h(e), void 0 !== t && (i(n), a(n)));
          let l = new URLSearchParams({ view: e });
          n && l.set("mint", n);
          let o = "#" + l.toString(),
            c = p.current.index + 1;
          return (
            history.pushState({ ...history.state, coinputerIndex: c }, "", o),
            (p.current = { hash: o, index: c }),
            !0
          );
        }
        function g(e) {
          0 !== e.button ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey ||
            (e.preventDefault(), f("launch"));
        }
        (0, o.useEffect)(() => {
          let e = () => {
            if (x.current) {
              x.current = !1;
              return;
            }
            let e = location.hash,
              t = Number.isSafeInteger(history.state?.coinputerIndex)
                ? history.state.coinputerIndex
                : null;
            if (p.current.hash && e !== p.current.hash && !(0, s.mH)())
              return void (null !== t && t !== p.current.index
                ? ((x.current = !0), history.go(p.current.index - t))
                : history.replaceState(
                    { ...history.state, coinputerIndex: p.current.index },
                    "",
                    p.current.hash,
                  ));
            let n = new URLSearchParams(e.slice(1)),
              r = n.get("view") || "launch",
              l = n.get("mint") || "";
            ([
              "overview",
              "launch",
              "token",
              "wallet",
              "computer",
              "files",
              "network",
              "activity",
              "treasury",
              "usage",
              "machines",
              "leaderboard",
              "guide",
            ].includes(r) && h(r),
              (0, m.bA)(l) ? (i(l), a(l)) : (i(""), a("")));
            let o = t ?? p.current.index;
            (history.replaceState(
              { ...history.state, coinputerIndex: o },
              "",
              location.href,
            ),
              (p.current = { hash: e || "#view=launch", index: o }));
          };
          return (
            queueMicrotask(e),
            window.addEventListener("popstate", e),
            () => window.removeEventListener("popstate", e)
          );
        }, []);
        let [b, j] = (0, o.useState)("vertical");
        (0, o.useEffect)(() => {
          let e = window.matchMedia("(max-width: 700px)"),
            t = () => j(e.matches ? "horizontal" : "vertical");
          return (
            queueMicrotask(t),
            e.addEventListener("change", t),
            () => e.removeEventListener("change", t)
          );
        }, []);
        let [v, w] = (0, o.useState)(0),
          [N, T] = (0, o.useState)(""),
          [R, I] = (0, o.useState)(""),
          [O, z] = (0, o.useState)(""),
          L = (0, eL.m)(),
          M = L?.address || "",
          [P, $] = (0, o.useState)(!1),
          [U, _] = (0, o.useState)(""),
          [B, F] = (0, o.useState)(!1),
          [q, D] = (0, o.useState)("--:--:--");
        (0, o.useEffect)(() => {
          let e = () =>
            D(
              new Date().toLocaleString("en-GB", {
                timeZone: "UTC",
                day: "2-digit",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: !1,
              }),
            );
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }, []);
        let G = eX("kind=network", v),
          W = r || G.data?.configuredMint || "",
          Y = (0, V.Ab)(W),
          H = Y.connected ? Y.selected : null,
          J = eX(W ? `kind=token&address=${W}` : null, v),
          K = M || O,
          Z = eX(
            K
              ? `kind=wallet&address=${K}${J.data ? `&mint=${J.data.address}` : ""}`
              : null,
            v,
          ),
          X = !!(G.data && !G.error);
        function Q(e) {
          e.preventDefault();
          let a = t.trim();
          (0, m.bA)(a)
            ? (T(""), f("token", a) && w((e) => e + 1))
            : T("Enter a valid Solana mint address.");
        }
        function ee() {
          (0, s.mH)() && (_(""), $(!0));
        }
        async function et() {
          if (!(0, s.mH)() || B) return;
          (F(!0), _(""));
          let e = await Promise.allSettled([(0, u.v_)(), (0, V.vD)()]);
          (("rejected" === e[0].status || "rejected" === e[1].status) &&
            (_(
              "rejected" === e[1].status
                ? "Disconnected locally. Server-session revocation could not be confirmed; its session expires automatically. Reconnect and disconnect again once the connection returns."
                : "Disconnected locally. Revoke this site’s connection in your wallet too.",
            ),
            f("wallet")),
            F(!1));
        }
        let en = G.data ? (G.data.slotIndex / G.data.slotsInEpoch) * 100 : null,
          es = [...G.history, ...J.history, ...Z.history];
        function er(e) {
          f("computer", e);
        }
        return (0, n.jsxs)("main", {
          className: "coin-app",
          "data-view": d,
          children: [
            (0, n.jsx)(eL.A, {
              open: P,
              onOpenChange: $,
              onConnected: () => {
                [
                  "launch",
                  "computer",
                  "files",
                  "treasury",
                  "usage",
                  "machines",
                  "leaderboard",
                ].includes(d) || f("wallet");
              },
            }),
            (0, n.jsx)("a", {
              className: "skip-link",
              href: "#workstation-screen",
              onClick: (e) => {
                e.preventDefault();
                let t = document.getElementById("workstation-screen");
                (t?.focus(), t?.scrollIntoView({ block: "start" }));
              },
              children: "Skip to workstation",
            }),
            (0, n.jsxs)("header", {
              className: "topbar",
              children: [
                (0, n.jsxs)("a", {
                  className: "brand",
                  href: "/",
                  "aria-label": "Coinputer home",
                  onClick: g,
                  children: [
                    (0, n.jsxs)("span", {
                      className: "brand-icon",
                      children: [
                        (0, n.jsx)("img", {
                          src: "/coinputer-logo-small.png",
                          alt: "",
                          width: 58,
                          height: 39,
                          decoding: "async",
                        }),
                        (0, n.jsx)("span", { children: ">_" }),
                      ],
                    }),
                    "Coinputer",
                  ],
                }),
                (0, n.jsxs)("nav", {
                  className: "top-actions",
                  "aria-label": "Quick navigation",
                  children: [
                    (0, n.jsx)(S.$, {
                      variant: "ghost",
                      size: "sm",
                      className: "guide-button",
                      "aria-current": "guide" === d ? "page" : void 0,
                      onClick: () => f("guide"),
                      children: "How it works",
                    }),
                    M
                      ? (0, n.jsxs)(S.$, {
                          variant: "outline",
                          size: "sm",
                          className: "wallet-account-button",
                          "aria-label": `Open wallet ${eQ(M, 4)}`,
                          "aria-current": "wallet" === d ? "page" : void 0,
                          onClick: () => f("wallet"),
                          disabled: B,
                          children: [(0, n.jsx)(eB.A, { size: 14 }), eQ(M, 4)],
                        })
                      : (0, n.jsxs)(S.$, {
                          size: "sm",
                          onClick: ee,
                          disabled: B,
                          children: [
                            B
                              ? (0, n.jsx)("span", {
                                  className: "block-cursor",
                                })
                              : (0, n.jsx)(eB.A, { size: 14 }),
                            "Connect wallet",
                          ],
                        }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(eW, {
              orientation: b,
              value: d,
              onValueChange: f,
              className: "workspace-tabs",
              children: (0, n.jsxs)("div", {
                className: "workstation-grid",
                children: [
                  (0, n.jsxs)("aside", {
                    className: "workspace-sidebar",
                    "aria-label": "Coinputer navigation",
                    children: [
                      (0, n.jsxs)("a", {
                        className: "brand sidebar-brand",
                        href: "/",
                        "aria-label": "Coinputer home",
                        onClick: g,
                        children: [
                          (0, n.jsxs)("span", {
                            className: "brand-icon",
                            children: [
                              (0, n.jsx)("img", {
                                src: "/coinputer-logo-small.png",
                                alt: "",
                                width: 58,
                                height: 39,
                                decoding: "async",
                              }),
                              (0, n.jsx)("span", { children: ">_" }),
                            ],
                          }),
                          "Coinputer",
                        ],
                      }),
                      (0, n.jsxs)(eV, {
                        className: "workspace-navigation",
                        "aria-label": "Main navigation",
                        children: [
                          (0, n.jsxs)(eH, {
                            value: "launch",
                            children: [(0, n.jsx)(E.A, {}), "Launch coin"],
                          }),
                          (0, n.jsxs)(eH, {
                            value: "machines",
                            children: [(0, n.jsx)(ek.A, {}), "Computers"],
                          }),
                          (0, n.jsxs)(eH, {
                            value: "token",
                            children: [(0, n.jsx)(ea.A, {}), "Inspect token"],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "sidebar-tools",
                        children: [
                          (0, n.jsx)("button", {
                            "aria-current": "guide" === d ? "page" : void 0,
                            onClick: () => f("guide"),
                            children: "How it works",
                          }),
                          (0, n.jsx)("button", {
                            "aria-current": "wallet" === d ? "page" : void 0,
                            onClick: () => f("wallet"),
                            children: "My wallet",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "workspace-center",
                    children: (0, n.jsxs)("div", {
                      className:
                        "crt-machine " +
                        (G.loading || J.loading || Z.loading
                          ? "is-reading"
                          : ""),
                      children: [
                        (0, n.jsxs)("aside", {
                          className: "monitor-note",
                          "aria-hidden": "true",
                          children: [
                            "Same coins.",
                            (0, n.jsx)("br", {}),
                            "A brighter",
                            (0, n.jsx)("br", {}),
                            "internet.",
                          ],
                        }),
                        (0, n.jsxs)("aside", {
                          className: "monitor-note note-two",
                          "aria-hidden": "true",
                          children: [
                            "Build things",
                            (0, n.jsx)("br", {}),
                            "that stay.",
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "bezel-top",
                          children: [
                            (0, n.jsx)("span", {
                              children: "COINPUTER / PERSONAL NETWORK TERMINAL",
                            }),
                            (0, n.jsx)("span", { children: "MODEL CP—01" }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "crt-recess",
                          children: (0, n.jsxs)("div", {
                            className: "crt-screen",
                            id: "workstation-screen",
                            tabIndex: -1,
                            children: [
                              (0, n.jsxs)("div", {
                                className: "window-chrome",
                                children: [
                                  (0, n.jsxs)("span", {
                                    className: "chrome-path",
                                    children: [
                                      "COINPUTER OS ",
                                      (0, n.jsx)("small", {
                                        children: "v0.91",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: "chrome-network",
                                    children: [
                                      (0, n.jsx)(c.md, {
                                        live: X,
                                        busy: G.loading || e.pending > 0,
                                        fault: !!G.error,
                                      }),
                                      "SOLANA MAINNET",
                                    ],
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: "chrome-right",
                                    children: [q, " UTC"],
                                  }),
                                ],
                              }),
                              (0, n.jsx)(c.YW, {
                                data: G.data,
                                error: G.error,
                                directoryLoading: Y.loading,
                              }),
                              (0, n.jsxs)(eJ, {
                                value: "overview",
                                "aria-label": "Welcome terminal",
                                className: "workspace-panel overview-screen",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "terminal-welcome",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "screen-label",
                                        children: X
                                          ? "CONNECTION ESTABLISHED / COINPUTER"
                                          : G.loading
                                            ? "CONNECTING / SOLANA MAINNET"
                                            : "MAINNET READ UNAVAILABLE",
                                      }),
                                      (0, n.jsxs)("h2", {
                                        children: [
                                          "Welcome to Coinputer",
                                          (0, n.jsx)("span", {
                                            className: "block-cursor",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)("p", {
                                        children:
                                          "A coin-operated computer network on Solana.",
                                      }),
                                      (0, n.jsx)("p", {
                                        className: "terminal-instruction",
                                        children:
                                          "> Paste a token mint to inspect its mainnet account.",
                                      }),
                                      (0, n.jsxs)("form", {
                                        className:
                                          "lookup-form terminal-lookup",
                                        onSubmit: Q,
                                        children: [
                                          (0, n.jsx)("label", {
                                            className: "sr-only",
                                            htmlFor: "overview-mint",
                                            children:
                                              "Solana mainnet mint address",
                                          }),
                                          (0, n.jsx)(A.p, {
                                            id: "overview-mint",
                                            value: t,
                                            onChange: (e) => {
                                              (a(e.target.value), T(""));
                                            },
                                            placeholder: "TOKEN MINT ADDRESS_",
                                            autoComplete: "off",
                                            spellCheck: !1,
                                            "aria-invalid": !!N,
                                          }),
                                          (0, n.jsx)(S.$, {
                                            type: "submit",
                                            children: "Inspect ↵",
                                          }),
                                        ],
                                      }),
                                      N &&
                                        (0, n.jsx)("p", {
                                          className: "input-error",
                                          role: "alert",
                                          children: N,
                                        }),
                                      W &&
                                        (0, n.jsxs)("div", {
                                          className: "active-mint",
                                          children: [
                                            "Selected mint",
                                            (0, n.jsx)(e0, {
                                              value: W,
                                              kind: "token",
                                            }),
                                            (0, n.jsxs)(S.$, {
                                              variant: "ghost",
                                              size: "sm",
                                              onClick: () => f("token"),
                                              children: [
                                                "Open",
                                                (0, n.jsx)(k.A, { size: 13 }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      (0, n.jsxs)("div", {
                                        className: "screen-connections",
                                        children: [
                                          (0, n.jsxs)("p", {
                                            children: [
                                              (0, n.jsx)(c.md, {
                                                live: X,
                                                busy: G.loading,
                                              }),
                                              "SOLANA ",
                                              X
                                                ? "MAINNET VERIFIED"
                                                : G.loading
                                                  ? "CONNECTING…"
                                                  : "READ UNAVAILABLE",
                                            ],
                                          }),
                                          (0, n.jsxs)("p", {
                                            children: [
                                              (0, n.jsx)(c.md, {
                                                live: Y.connected,
                                              }),
                                              "COMPUTER SERVICE: ",
                                              Y.connected
                                                ? "CONNECTED"
                                                : "NOT CONNECTED",
                                            ],
                                          }),
                                          (0, n.jsxs)("p", {
                                            children: [
                                              (0, n.jsx)(c.md, {
                                                live:
                                                  Y.connected &&
                                                  Y.status?.feeRoutingEnabled,
                                              }),
                                              "CREATOR-FEE ROUTING: ",
                                              Y.connected &&
                                              Y.status?.feeRoutingEnabled
                                                ? "WALLET SIGNING AVAILABLE"
                                                : "TREASURY NOT CONFIGURED",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)(e1, { state: G }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "terminal-quote",
                                    children: [
                                      "SAME COINS.",
                                      (0, n.jsx)("br", {}),
                                      "A MORE",
                                      (0, n.jsx)("br", {}),
                                      "INTERESTING",
                                      (0, n.jsx)("br", {}),
                                      "INTERNET.",
                                      (0, n.jsx)("span", {
                                        className: "block-cursor",
                                      }),
                                      (0, n.jsx)("small", {
                                        children: "— coinputer",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsx)(eJ, {
                                value: "launch",
                                forceMount: !0,
                                hidden: "launch" !== d,
                                className: "workspace-panel launch-panel",
                                children: (0, n.jsx)(ej, {
                                  control: Y.connected ? Y.status : null,
                                  onComputer: er,
                                  wallet: M,
                                  onConnect: () => void ee(),
                                  onMint: (e) => {
                                    f("token", e) && w((e) => e + 1);
                                  },
                                }),
                              }),
                              (0, n.jsxs)(eJ, {
                                value: "token",
                                className: "workspace-panel",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "panel-intro",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "eyebrow",
                                        children: "TOKEN ACCOUNT",
                                      }),
                                      (0, n.jsx)("h2", {
                                        children: "Inspect a token.",
                                      }),
                                      (0, n.jsx)("p", {
                                        children:
                                          "Read a coin’s computer specs, hosted services and activity alongside its Solana mainnet record.",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("form", {
                                    className: "lookup-form",
                                    onSubmit: Q,
                                    children: [
                                      (0, n.jsx)("label", {
                                        className: "sr-only",
                                        htmlFor: "token-mint",
                                        children: "Token mint address",
                                      }),
                                      (0, n.jsx)(A.p, {
                                        id: "token-mint",
                                        value: t,
                                        onChange: (e) => {
                                          (a(e.target.value), T(""));
                                        },
                                        placeholder:
                                          "Paste a Solana mainnet mint address",
                                        spellCheck: !1,
                                        autoComplete: "off",
                                        "aria-invalid": !!N,
                                      }),
                                      (0, n.jsxs)(S.$, {
                                        type: "submit",
                                        children: [
                                          (0, n.jsx)(ea.A, { size: 15 }),
                                          "Inspect",
                                        ],
                                      }),
                                    ],
                                  }),
                                  N &&
                                    (0, n.jsx)("p", {
                                      className: "input-error",
                                      role: "alert",
                                      children: N,
                                    }),
                                  W
                                    ? (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          (0, n.jsxs)("div", {
                                            className: "selection-bar",
                                            children: [
                                              (0, n.jsx)("span", {
                                                children: "Selected mint",
                                              }),
                                              (0, n.jsx)(e0, {
                                                value: W,
                                                kind: "token",
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)(e1, { state: J }),
                                          J.loading &&
                                            (0, n.jsxs)("div", {
                                              className: "inspection-log",
                                              role: "status",
                                              children: [
                                                (0, n.jsx)("p", {
                                                  children:
                                                    "> address syntax verified",
                                                }),
                                                (0, n.jsx)("p", {
                                                  children:
                                                    "> reading solana-mainnet mint account...",
                                                }),
                                                (0, n.jsxs)("p", {
                                                  children: [
                                                    "> awaiting verified response",
                                                    (0, n.jsx)("span", {
                                                      className: "block-cursor",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          J.data &&
                                            (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                (0, n.jsxs)("div", {
                                                  className:
                                                    "inspection-result",
                                                  children: [
                                                    (0, n.jsx)(c.md, {
                                                      live: !J.error,
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: J.error
                                                        ? "LAST VERIFIED MINT READ"
                                                        : "MINT ACCOUNT VERIFIED",
                                                    }),
                                                    (0, n.jsxs)("small", {
                                                      children: [
                                                        "COMPUTER: ",
                                                        H?.state.replaceAll(
                                                          "_",
                                                          " ",
                                                        ) ||
                                                          (Y.connected
                                                            ? Y.selectedMint ===
                                                              W
                                                              ? "NOT REGISTERED"
                                                              : "RESOLVING"
                                                            : "NOT CONNECTED"),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, n.jsx)("div", {
                                                  className: "computer-actions",
                                                  children: (0, n.jsxs)(S.$, {
                                                    variant: "outline",
                                                    disabled: !!J.error,
                                                    onClick: () => er(W),
                                                    children: [
                                                      (0, n.jsx)(ek.A, {
                                                        size: 15,
                                                      }),
                                                      "Open this coin’s computer",
                                                    ],
                                                  }),
                                                }),
                                                (0, n.jsx)(
                                                  ez,
                                                  {
                                                    mint: W,
                                                    machine: H,
                                                    connected: Y.connected,
                                                    resolving:
                                                      Y.loading ||
                                                      (Y.connected &&
                                                        Y.selectedMint !== W),
                                                    onRetry: Y.reload,
                                                  },
                                                  H?.id || W,
                                                ),
                                                (0, n.jsxs)("div", {
                                                  className: "token-metrics",
                                                  children: [
                                                    (0, n.jsx)(e3, {
                                                      label: "Total supply",
                                                      value: (0, m.Js)(
                                                        J.data.supply,
                                                        J.data.decimals,
                                                      ),
                                                      note: `${J.data.decimals} decimals \xb7 exact amount`,
                                                      icon: (0, n.jsx)(eF.A, {
                                                        size: 15,
                                                      }),
                                                    }),
                                                    (0, n.jsx)(e3, {
                                                      label: "Token program",
                                                      value:
                                                        J.data.program === m.U2
                                                          ? "Token-2022"
                                                          : "SPL Token",
                                                      note: "Mint account owner verified",
                                                      icon: (0, n.jsx)(y.A, {
                                                        size: 15,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                  className: "account-details",
                                                  children: [
                                                    (0, n.jsxs)("div", {
                                                      children: [
                                                        (0, n.jsx)("span", {
                                                          children:
                                                            "Mint authority",
                                                        }),
                                                        J.data.mintAuthority
                                                          ? (0, n.jsx)(e0, {
                                                              value:
                                                                J.data
                                                                  .mintAuthority,
                                                            })
                                                          : (0, n.jsx)("b", {
                                                              children: "None",
                                                            }),
                                                      ],
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                      children: [
                                                        (0, n.jsx)("span", {
                                                          children:
                                                            "Freeze authority",
                                                        }),
                                                        J.data.freezeAuthority
                                                          ? (0, n.jsx)(e0, {
                                                              value:
                                                                J.data
                                                                  .freezeAuthority,
                                                            })
                                                          : (0, n.jsx)("b", {
                                                              children: "None",
                                                            }),
                                                      ],
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                      children: [
                                                        (0, n.jsx)("span", {
                                                          children:
                                                            "Program address",
                                                        }),
                                                        (0, n.jsx)(e0, {
                                                          value: J.data.program,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, n.jsx)(e4, {
                                                  transactions:
                                                    J.data.transactions,
                                                  error: J.data.activityError,
                                                }),
                                                (0, n.jsx)(e2, {
                                                  data: J.data,
                                                  stale: !!J.error,
                                                }),
                                              ],
                                            }),
                                        ],
                                      })
                                    : (0, n.jsx)(e5, {
                                        icon: (0, n.jsx)(eF.A, { size: 30 }),
                                        title: "Choose a real mint",
                                        text: "Enter the token’s mainnet mint address. Only verified on-chain data will appear here.",
                                      }),
                                ],
                              }),
                              (0, n.jsxs)(eJ, {
                                value: "wallet",
                                "aria-label": "Wallet",
                                className: "workspace-panel",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "panel-intro",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "eyebrow",
                                        children: "YOUR ON-CHAIN ACCOUNT",
                                      }),
                                      (0, n.jsx)("h2", {
                                        children: "A public view. Your wallet.",
                                      }),
                                      (0, n.jsx)("p", {
                                        children:
                                          "Connect a Solana wallet or inspect any public address. Wallet funds remain separate from computer funding.",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "wallet-connect",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "mint-icon",
                                        children: (0, n.jsx)(eB.A, {
                                          size: 22,
                                        }),
                                      }),
                                      (0, n.jsxs)("div", {
                                        children: [
                                          (0, n.jsx)("h3", {
                                            children: M
                                              ? `${L?.name || "Wallet"} connected`
                                              : "Connect your wallet",
                                          }),
                                          (0, n.jsx)("p", {
                                            children: M
                                              ? "Public address shared. No signed session or computer permissions."
                                              : "Share your public address to read actual mainnet holdings.",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)(S.$, {
                                        variant: M ? "outline" : "default",
                                        size: "sm",
                                        onClick: M ? et : ee,
                                        disabled: B,
                                        children: [
                                          B
                                            ? (0, n.jsx)("span", {
                                                className: "block-cursor",
                                                "aria-hidden": "true",
                                              })
                                            : (0, n.jsx)(eB.A, { size: 14 }),
                                          M ? "Disconnect" : "Connect wallet",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("p", {
                                    className: "wallet-assurance",
                                    children: [
                                      (0, n.jsx)(eq.A, {
                                        size: 14,
                                        "aria-hidden": "true",
                                      }),
                                      "Your keys stay in your wallet. Signing requests appear in your wallet for approval.",
                                    ],
                                  }),
                                  !M &&
                                    (0, n.jsxs)("form", {
                                      className: "lookup-form",
                                      onSubmit: function (e) {
                                        e.preventDefault();
                                        let t = R.trim();
                                        (0, m.bA)(t)
                                          ? (_(""), z(t), w((e) => e + 1))
                                          : _(
                                              "Enter a valid Solana wallet address.",
                                            );
                                      },
                                      children: [
                                        (0, n.jsx)("label", {
                                          className: "sr-only",
                                          htmlFor: "wallet-address",
                                          children: "Public wallet address",
                                        }),
                                        (0, n.jsx)(A.p, {
                                          id: "wallet-address",
                                          value: R,
                                          onChange: (e) => {
                                            (I(e.target.value), _(""));
                                          },
                                          placeholder:
                                            "Or paste a public Solana address",
                                          spellCheck: !1,
                                          autoComplete: "off",
                                        }),
                                        (0, n.jsxs)(S.$, {
                                          type: "submit",
                                          children: [
                                            "Inspect",
                                            (0, n.jsx)(k.A, { size: 14 }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  U &&
                                    (0, n.jsx)("div", {
                                      className: "read-error",
                                      role: "alert",
                                      children: U,
                                    }),
                                  K
                                    ? (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          (0, n.jsxs)("div", {
                                            className: "selection-bar",
                                            children: [
                                              (0, n.jsx)("span", {
                                                children: M
                                                  ? "Connected wallet"
                                                  : "Inspected address \xb7 not connected",
                                              }),
                                              (0, n.jsx)(e0, { value: K }),
                                            ],
                                          }),
                                          (0, n.jsx)(e1, { state: Z }),
                                          Z.data &&
                                            (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                (0, n.jsxs)("div", {
                                                  className: "token-metrics",
                                                  children: [
                                                    (0, n.jsx)(e3, {
                                                      label:
                                                        "Wallet SOL balance",
                                                      value: `${(0, m.Js)(Z.data.lamports, 9)} SOL`,
                                                      note: "Native SOL \xb7 finalized read",
                                                      icon: (0, n.jsx)(eB.A, {
                                                        size: 15,
                                                      }),
                                                    }),
                                                    (0, n.jsx)(e3, {
                                                      label:
                                                        "Selected token holdings",
                                                      value: Z.data.tokenBalance
                                                        ? (0, m.Js)(
                                                            Z.data.tokenBalance
                                                              .amount,
                                                            Z.data.tokenBalance
                                                              .decimals,
                                                          )
                                                        : "—",
                                                      note: Z.data.tokenBalance
                                                        ? `${Z.data.tokenBalance.accounts} token accounts \xb7 exact amount`
                                                        : Z.data.tokenError
                                                          ? "Read unavailable"
                                                          : "Inspect a mint to read its holdings",
                                                      icon: (0, n.jsx)(eF.A, {
                                                        size: 15,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                Z.data.mint &&
                                                  (0, n.jsxs)("div", {
                                                    className: "selection-bar",
                                                    children: [
                                                      (0, n.jsx)("span", {
                                                        children:
                                                          "Holdings for mint",
                                                      }),
                                                      (0, n.jsx)(e0, {
                                                        value: Z.data.mint,
                                                        kind: "token",
                                                      }),
                                                    ],
                                                  }),
                                                Z.data.tokenError &&
                                                  (0, n.jsx)("div", {
                                                    className: "read-error",
                                                    role: "alert",
                                                    children: Z.data.tokenError,
                                                  }),
                                                (0, n.jsx)(e4, {
                                                  transactions:
                                                    Z.data.transactions,
                                                  error: Z.data.activityError,
                                                }),
                                                (0, n.jsx)(e2, {
                                                  data: Z.data,
                                                  stale: !!Z.error,
                                                }),
                                              ],
                                            }),
                                        ],
                                      })
                                    : (0, n.jsx)(e5, {
                                        icon: (0, n.jsx)(eB.A, { size: 30 }),
                                        title: "Your balance belongs here",
                                        text: "Choose a public address to read SOL and holdings of the selected token from mainnet.",
                                      }),
                                ],
                              }),
                              [
                                "computer",
                                "files",
                                "treasury",
                                "usage",
                                "machines",
                                "leaderboard",
                              ].map((e) =>
                                (0, n.jsx)(
                                  eJ,
                                  {
                                    value: e,
                                    "aria-label": e,
                                    className: "workspace-panel",
                                    children: (0, n.jsx)(
                                      V.Ay,
                                      {
                                        mint: W,
                                        wallet: M,
                                        mode: e,
                                        onSelect: er,
                                        directory: Y,
                                        onConnect: ee,
                                        onLaunch: () => f("launch"),
                                        onInspect: () => f("token"),
                                      },
                                      `${W}:${M}`,
                                    ),
                                  },
                                  e,
                                ),
                              ),
                              (0, n.jsxs)(eJ, {
                                value: "guide",
                                "aria-label": "How it works",
                                className: "workspace-panel",
                                children: [
                                  (0, n.jsx)(e8, {
                                    computers: Y,
                                    onInspect: () => f("token"),
                                  }),
                                  (0, n.jsxs)("details", {
                                    className: "metadata-details",
                                    children: [
                                      (0, n.jsx)("summary", {
                                        children: "Connection details",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: "computer-actions",
                                        children: [
                                          (0, n.jsx)(S.$, {
                                            variant: "outline",
                                            onClick: () => f("network"),
                                            children: "Mainnet monitor",
                                          }),
                                          (0, n.jsx)(S.$, {
                                            variant: "outline",
                                            onClick: () => f("activity"),
                                            children: "Session activity",
                                          }),
                                          (0, n.jsx)(S.$, {
                                            variant: "outline",
                                            onClick: () => f("overview"),
                                            children: "Welcome terminal",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(eJ, {
                                value: "network",
                                "aria-label": "Mainnet monitor",
                                className: "workspace-panel",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "panel-intro",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "eyebrow",
                                        children:
                                          "SOLANA / NETWORK OBSERVATORY",
                                      }),
                                      (0, n.jsx)("h2", {
                                        children:
                                          "A connection to the real chain.",
                                      }),
                                      (0, n.jsx)("p", {
                                        children:
                                          "Verified network readings. Inspect the verified chain and discover registered computers. Relationships appear only when supported by recorded machine traffic.",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)(e1, { state: G }),
                                  (0, n.jsxs)("div", {
                                    className: "network-instruments",
                                    children: [
                                      (0, n.jsx)(c.wV, {
                                        data: G.data,
                                        loading: G.loading,
                                        error: G.error,
                                        history: G.history,
                                        onRefresh: () => w((e) => e + 1),
                                      }),
                                      (0, n.jsxs)("section", {
                                        className:
                                          "power-module hardware-module",
                                        children: [
                                          (0, n.jsxs)("header", {
                                            children: [
                                              (0, n.jsxs)("span", {
                                                children: [
                                                  (0, n.jsx)(c.md, {
                                                    live: H?.online,
                                                    busy:
                                                      H?.state === "LOW_POWER",
                                                    fault: H?.state === "ERROR",
                                                  }),
                                                  "COMPUTE POWER",
                                                ],
                                              }),
                                              (0, n.jsx)("span", {
                                                children: H?.state || "STANDBY",
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("div", {
                                            className: "power-bars",
                                            "aria-hidden": "true",
                                            children: Array.from(
                                              { length: 18 },
                                              (e, t) =>
                                                (0, n.jsx)(
                                                  "i",
                                                  {
                                                    style:
                                                      H?.online &&
                                                      t <
                                                        Math.ceil(
                                                          (Number(
                                                            H.creditMicro,
                                                          ) /
                                                            Math.max(
                                                              Number(
                                                                H.budgetMicro,
                                                              ),
                                                              1,
                                                            )) *
                                                            18,
                                                        )
                                                        ? {
                                                            background:
                                                              "#8fffa7",
                                                            boxShadow:
                                                              "0 0 5px #68d98244",
                                                          }
                                                        : void 0,
                                                  },
                                                  t,
                                                ),
                                            ),
                                          }),
                                          (0, n.jsx)("p", {
                                            children: H
                                              ? null === H.runwaySeconds
                                                ? H.online
                                                  ? "COMPUTER ONLINE"
                                                  : "OPEN COMPUTER TO GET STARTED"
                                                : (
                                                    H.runwaySeconds / 3600
                                                  ).toFixed(1) +
                                                  " H CREDIT COVERS"
                                              : Y.connected
                                                ? "SELECT A COMPUTER"
                                                : "CONTROL SERVICE UNAVAILABLE",
                                          }),
                                          (0, n.jsx)("small", {
                                            children:
                                              "Creator fees are intended to pay for compute, storage, bandwidth, AI and uptime.",
                                          }),
                                          (0, n.jsx)("button", {
                                            className: "text-action",
                                            onClick: () => f("guide"),
                                            children: "HOW IT WORKS ↗",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  G.data &&
                                    (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className: "epoch-line",
                                          children: [
                                            (0, n.jsx)("span", {
                                              children: "Epoch progress",
                                            }),
                                            (0, n.jsx)(eZ, {
                                              value: en,
                                              "aria-label":
                                                "Current epoch progress",
                                            }),
                                            (0, n.jsxs)("span", {
                                              children: [en.toFixed(1), "%"],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)(e2, {
                                          data: G.data,
                                          stale: !!G.error,
                                        }),
                                      ],
                                    }),
                                  (0, n.jsx)(e5, {
                                    icon: (0, n.jsx)(C.A, { size: 28 }),
                                    title:
                                      "Machine network awaiting connection",
                                    text: "A network map will show only real requests, shared services and relationships reported by connected computers.",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(eJ, {
                                value: "activity",
                                "aria-label": "Session activity",
                                className: "workspace-panel",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "panel-intro",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "eyebrow",
                                        children: "THIS TERMINAL / UTC",
                                      }),
                                      (0, n.jsx)("h2", {
                                        children: "The system journal.",
                                      }),
                                      (0, n.jsx)("p", {
                                        children:
                                          "Successful and failed reads made in this session. Token and wallet panels also show actual on-chain transaction references.",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)(c.ap, {
                                    events: es,
                                    expanded: !0,
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: "terminal-status",
                                children: [
                                  (0, n.jsxs)("span", {
                                    children: [
                                      "> A MORE INTERESTING INTERNET ",
                                      (0, n.jsx)("i", {
                                        className: "block-cursor",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("span", {
                                    children: (0, l.Iw)(H?.metrics?.load),
                                  }),
                                  (0, n.jsxs)("span", {
                                    children: [
                                      "NET ",
                                      e.pending > 0 ? "READ / WRITE" : "IDLE",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "bezel-bottom",
                          children: [
                            (0, n.jsx)("span", {
                              className: "bezel-brand",
                              children: "Coinputer",
                            }),
                            (0, n.jsx)("span", {
                              className: "vent-slots",
                              "aria-hidden": "true",
                            }),
                            (0, n.jsxs)("div", {
                              className: "hardware-lights",
                              children: [
                                (0, n.jsxs)("span", {
                                  title: "This terminal is powered on",
                                  children: [
                                    (0, n.jsx)(c.md, { live: !0 }),
                                    "POWER",
                                  ],
                                }),
                                (0, n.jsxs)("span", {
                                  title:
                                    "Successful metadata and computer writes",
                                  children: [
                                    (0, n.jsx)("i", {
                                      className:
                                        "led disk-led " +
                                        (e.disk ? "disk-write" : ""),
                                    }),
                                    "DISK",
                                  ],
                                }),
                                (0, n.jsxs)("span", {
                                  title: "Actual requests from this terminal",
                                  children: [
                                    (0, n.jsx)(c.md, {
                                      live: X,
                                      busy: e.pending > 0,
                                    }),
                                    "NETWORK",
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("button", {
                              className: "sound-switch",
                              "aria-pressed": e.sound,
                              onClick: () => void e.toggleSound(),
                              children: ["SOUND: ", e.sound ? "ON" : "OFF"],
                            }),
                            (0, n.jsx)("button", {
                              className: "hardware-key",
                              onClick: () =>
                                f("guide" === d ? "overview" : "guide"),
                              "aria-label":
                                "guide" === d
                                  ? "Return to overview"
                                  : "Open system manual",
                              children: "?",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsxs)("footer", {
              className: "workspace-footer",
              children: [
                (0, n.jsx)("span", {
                  children: "COINPUTER / CREATOR FEES → PERSISTENT COMPUTE",
                }),
                (0, n.jsx)("a", {
                  href: "https://x.com/coinputer_x",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "X ↗",
                }),
                (0, n.jsx)("a", {
                  href: "https://t.me/coinputer_tg",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "TG ↗",
                }),
                (0, n.jsx)("a", {
                  href: "https://solscan.io",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "SOLSCAN ↗",
                }),
              ],
            }),
          ],
        });
      }
    },
    4350: (e, t, a) => {
      "use strict";
      a.d(t, {
        Cf: () => d,
        L3: () => h,
        c7: () => u,
        lG: () => l,
        rr: () => m,
      });
      var n = a(5155);
      a(2115);
      var s = a(9005),
        r = a(5939),
        i = a(1337);
      function l({ ...e }) {
        return (0, n.jsx)(r.bL, { "data-slot": "dialog", ...e });
      }
      function o({ ...e }) {
        return (0, n.jsx)(r.ZL, { "data-slot": "dialog-portal", ...e });
      }
      function c({ className: e, ...t }) {
        return (0, n.jsx)(r.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, i.cn)(
            "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
            e,
          ),
          ...t,
        });
      }
      function d({ className: e, children: t, showCloseButton: a = !0, ...l }) {
        return (0, n.jsxs)(o, {
          "data-slot": "dialog-portal",
          children: [
            (0, n.jsx)(c, {}),
            (0, n.jsxs)(r.UC, {
              "data-slot": "dialog-content",
              className: (0, i.cn)(
                "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
                e,
              ),
              ...l,
              children: [
                t,
                a &&
                  (0, n.jsxs)(r.bm, {
                    "data-slot": "dialog-close",
                    className:
                      "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      (0, n.jsx)(s.A, {}),
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function u({ className: e, ...t }) {
        return (0, n.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, i.cn)(
            "flex flex-col gap-2 text-center sm:text-left",
            e,
          ),
          ...t,
        });
      }
      function h({ className: e, ...t }) {
        return (0, n.jsx)(r.hE, {
          "data-slot": "dialog-title",
          className: (0, i.cn)("text-lg leading-none font-semibold", e),
          ...t,
        });
      }
      function m({ className: e, ...t }) {
        return (0, n.jsx)(r.VY, {
          "data-slot": "dialog-description",
          className: (0, i.cn)("text-sm text-muted-foreground", e),
          ...t,
        });
      }
      a(4474);
    },
    5124: (e, t, a) => {
      "use strict";
      async function n(e, t) {
        try {
          if (
            !e.headers
              .get("content-type")
              ?.toLowerCase()
              .includes("application/json")
          )
            throw Error();
          let t = await e.json();
          if (null === t || "object" != typeof t || Array.isArray(t))
            throw Error();
          return t;
        } catch {
          throw Error(t);
        }
      }
      a.d(t, { _: () => n });
    },
    5361: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 4218));
    },
    5476: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => h, m: () => u });
      var n = a(5155),
        s = a(2115),
        r = a(3913),
        i = a(4577),
        l = a(9751),
        o = a(897),
        c = a(4350),
        d = a(4474);
      function u() {
        return (0, s.useSyncExternalStore)(o.sq, o.EF, o.DC);
      }
      function h({ open: e, onOpenChange: t, onConnected: a }) {
        let [m, p] = (0, s.useState)([]),
          [x, f] = (0, s.useState)(""),
          [g, b] = (0, s.useState)(""),
          [j, v] = (0, s.useState)(null),
          w = u(),
          y = (0, s.useRef)(0);
        async function k(e, n) {
          let s = ++y.current;
          (f(e.name), b(""));
          try {
            let r = await (0, o.fX)(e, n);
            if (s !== y.current) return;
            if (
              !n &&
              e.accounts.filter((e) => e.chains.includes("solana:mainnet"))
                .length > 1
            )
              return void v(e);
            (v(null), a?.(r), t(!1));
          } catch (e) {
            s === y.current &&
              b(
                e instanceof Error
                  ? e.message
                  : "Wallet connection was declined.",
              );
          } finally {
            s === y.current && f("");
          }
        }
        return (
          (0, s.useEffect)(() => {
            let e = () => p((0, o.M0)()),
              t = (0, o.g6)(e);
            return (queueMicrotask(e), t);
          }, []),
          (0, n.jsx)(c.lG, {
            open: e,
            onOpenChange: (e) => {
              (e ||
                (y.current++, (x || j) && (0, o.qC)(), f(""), b(""), v(null)),
                t(e));
            },
            children: (0, n.jsxs)(c.Cf, {
              className: "wallet-picker",
              children: [
                (0, n.jsxs)("div", {
                  className: "wallet-picker-heading",
                  children: [
                    (0, n.jsx)("span", {
                      className: "screen-label",
                      children: "COINPUTER / WALLET CONNECTION",
                    }),
                    (0, n.jsx)(c.L3, {
                      children: j
                        ? "Choose your account"
                        : "Connect a Solana wallet",
                    }),
                    (0, n.jsx)(c.rr, {
                      children: j
                        ? "Select the account you want to use on Coinputer."
                        : "Choose an installed wallet. You approve every signature in your wallet.",
                    }),
                  ],
                }),
                j
                  ? (0, n.jsxs)("div", {
                      className: "wallet-picker-list",
                      children: [
                        j.accounts
                          .filter((e) => e.chains.includes("solana:mainnet"))
                          .map((e) =>
                            (0, n.jsxs)(
                              "button",
                              {
                                disabled: !!x,
                                onClick: () => void k(j, e.address),
                                children: [
                                  (0, n.jsx)(r.A, { size: 22 }),
                                  (0, n.jsxs)("span", {
                                    children: [
                                      (0, n.jsx)("b", {
                                        children: e.label || j.name,
                                      }),
                                      (0, n.jsx)("small", {
                                        className: "wallet-account-address",
                                        children: e.address,
                                      }),
                                    ],
                                  }),
                                  w?.address === e.address &&
                                    (0, n.jsx)(i.A, { size: 15 }),
                                ],
                              },
                              e.address,
                            ),
                          ),
                        (0, n.jsx)(d.$, {
                          variant: "ghost",
                          onClick: () => v(null),
                          disabled: !!x,
                          children: "Choose another wallet",
                        }),
                      ],
                    })
                  : m.length
                    ? (0, n.jsx)("div", {
                        className: "wallet-picker-list",
                        children: m.map((e, t) =>
                          (0, n.jsxs)(
                            "button",
                            {
                              disabled: !!x,
                              onClick: () => void k(e),
                              children: [
                                /^data:image\/(png|webp|gif|svg\+xml);base64,/.test(
                                  e.icon,
                                )
                                  ? (0, n.jsx)("img", {
                                      src: e.icon,
                                      alt: "",
                                      width: 32,
                                      height: 32,
                                    })
                                  : (0, n.jsx)(r.A, { size: 26 }),
                                (0, n.jsxs)("span", {
                                  children: [
                                    (0, n.jsx)("b", { children: e.name }),
                                    (0, n.jsx)("small", {
                                      children:
                                        x === e.name
                                          ? "Waiting for your approval…"
                                          : w?.name === e.name
                                            ? "Connected"
                                            : "Detected in this browser",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("span", {
                                  "aria-hidden": "true",
                                  children: "↗",
                                }),
                              ],
                            },
                            e.name + t,
                          ),
                        ),
                      })
                    : (0, n.jsxs)("div", {
                        className: "wallet-not-detected",
                        children: [
                          (0, n.jsx)(r.A, { size: 28 }),
                          (0, n.jsx)("b", {
                            children: "No Solana wallet detected",
                          }),
                          (0, n.jsx)("p", {
                            children:
                              "Use a browser with your Solana wallet installed. On mobile, open coinputer.net in your wallet’s browser.",
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsxs)("a", {
                                href: "https://phantom.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  "Phantom",
                                  (0, n.jsx)(l.A, { size: 13 }),
                                ],
                              }),
                              (0, n.jsxs)("a", {
                                href: "https://www.solflare.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  "Solflare",
                                  (0, n.jsx)(l.A, { size: 13 }),
                                ],
                              }),
                              (0, n.jsxs)("a", {
                                href: "https://backpack.app/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  "Backpack",
                                  (0, n.jsx)(l.A, { size: 13 }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)("small", {
                            children:
                              "These are wallet download links. Any compatible Solana Wallet Standard wallet is detected automatically.",
                          }),
                        ],
                      }),
                g &&
                  (0, n.jsx)("div", {
                    className: "read-error",
                    role: "alert",
                    children: g,
                  }),
                (0, n.jsx)("p", {
                  className: "wallet-picker-footnote",
                  children:
                    "Your recovery phrase and private keys stay in your wallet. Launching requires transaction signing; computer login and image uploads also require message signing.",
                }),
              ],
            }),
          })
        );
      }
    },
    6172: (e, t, a) => {
      "use strict";
      function n(e) {
        let t = BigInt(0);
        for (let a of e) t = t * BigInt(256) + BigInt(a);
        let a = "";
        for (; t > BigInt(0); )
          ((a =
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[
              Number(t % BigInt(58))
            ] + a),
            (t /= BigInt(58)));
        for (let t of e) {
          if (0 !== t) break;
          a = "1" + a;
        }
        return a;
      }
      a.d(t, { encodeBase58: () => n });
    },
    6478: (e) => {
      e.exports = {
        reviewActions: "launch-enhancements_reviewActions__NjfwO",
        reviewError: "launch-enhancements_reviewError__rvrqt",
        progress: "launch-enhancements_progress__PrGxA",
      };
    },
    9493: (e, t, a) => {
      "use strict";
      a.d(t, { X: () => i });
      var n = a(316),
        s = a(2655);
      let r = (e) => new TextEncoder().encode(e).length;
      function i(e, t) {
        if (
          !/^\d+(\.\d+)?$/.test(e) ||
          !Number.isInteger(t) ||
          t < 0 ||
          t > 255
        )
          throw Error("Invalid purchase amount.");
        let [a, n = ""] = e.split(".");
        if (n.length > t)
          throw Error(`This quote asset supports ${t} decimal places.`);
        let s = BigInt(a + n.padEnd(t, "0"));
        if (s > BigInt("18446744073709551615"))
          throw Error("Purchase amount exceeds the on-chain limit.");
        return s.toString();
      }
      n.Ik({
        wallet: n.Yj().refine(s.bA),
        name: n
          .Yj()
          .trim()
          .min(1)
          .refine(
            (e) => 32 >= r(e),
            "Coin name must be at most 32 UTF-8 bytes.",
          ),
        symbol: n
          .Yj()
          .trim()
          .min(1)
          .refine((e) => 13 >= r(e), "Ticker must be at most 13 UTF-8 bytes."),
        uri: n
          .Yj()
          .trim()
          .min(1)
          .max(200)
          .refine((e) => {
            try {
              let t = new URL(e);
              return (
                ["https:", "ipfs:"].includes(t.protocol) &&
                !t.username &&
                !t.password
              );
            } catch {
              return !1;
            }
          }, "Use a published HTTPS or IPFS metadata JSON URL."),
        quoteMint: n.Yj().refine(s.bA),
        devBuy: n
          .Yj()
          .regex(
            /^\d+(\.\d+)?$/,
            "Developer buy must be a nonnegative decimal amount.",
          )
          .max(40),
        creatorFeeBps: n.ai().int().min(0).max(1e4),
        mayhem: n.zM(),
        holderRewards: n.zM(),
        tokenizedAgent: n.zM(),
        buybackBps: n.ai().int().min(0).max(1e4),
        lookupTable: n
          .Yj()
          .refine((e) => !e || (0, s.bA)(e), "Invalid address table.")
          .optional(),
      }).strict();
    },
  },
  (e) => {
    (e.O(0, [283, 956, 477, 594, 71, 960, 289, 254, 441, 794, 358], () =>
      e((e.s = 5361)),
    ),
      (_N_E = e.O()));
  },
]);
