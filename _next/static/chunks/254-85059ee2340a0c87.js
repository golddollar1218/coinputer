(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [254],
  {
    1491: (e) => {
      e.exports = {
        address: "copy-coin-address_address__hN57M",
        copy: "copy-coin-address_copy__Nwl2Q",
        fallback: "copy-coin-address_fallback__Un_RV",
        announcement: "copy-coin-address_announcement__eKTqg",
      };
    },
    1822: (e, t, n) => {
      "use strict";
      n.d(t, { Oj: () => s, dV: () => r, mH: () => o });
      let i = new Map();
      function r(e, t, n) {
        let r = Symbol(e);
        return (
          i.set(e, { label: t, token: r, discard: n }),
          () => {
            i.get(e)?.token === r && i.delete(e);
          }
        );
      }
      let a = new Map();
      function s(e, t, n) {
        let i = Symbol(e);
        return (
          a.set(e, { label: t, token: i, disconnect: n }),
          () => {
            a.get(e)?.token === i && a.delete(e);
          }
        );
      }
      function o(e) {
        if (!i.size && !a.size) return !0;
        let t = [...i.values()].map((e) => e.label).join("\n"),
          n = (e ?? ((e) => window.confirm(e)))(
            [
              i.size
                ? `These files have unsaved changes:

${t}

Leaving discards these drafts.`
                : "",
              a.size
                ? `Leaving ends these desktop sessions:

${[...a.values()].map((e) => e.label).join("\n")}

Save your work in desktop applications first. Unsaved application changes will be lost.`
                : "",
            ]
              .filter(Boolean)
              .join("\n\n") +
              "\n\nLeave now? Choose Cancel to stay and save your work.",
          );
        if (n) {
          for (let e of i.values()) e.discard?.();
          for (let e of a.values()) e.disconnect();
        }
        return n;
      }
    },
    2223: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => d });
      var i = n(5155),
        r = n(2115),
        a = n(4474),
        s = n(2655),
        o = n(7436);
      function l(e, t) {
        return "string" == typeof e &&
          /^\d+$/.test(e) &&
          null !== t &&
          Number.isInteger(t) &&
          t >= 0 &&
          t <= 255
          ? (0, s.Js)(e, t)
          : null;
      }
      function c({ data: e, stale: t = !1 }) {
        if ("not-managed" === e.status) return null;
        let n = "verified" === e.status || "stale" === e.status,
          r = "So11111111111111111111111111111111111111112" === e.quoteMint,
          a = r ? 9 : e.decimals,
          o = n ? l(e.walletNativeLamports, 9) : null,
          d = n ? l(e.walletQuoteRaw, a) : null,
          u = n && e.claimable ? l(e.claimable.bondingCurveRaw, a) : null,
          h = n && e.claimable ? l(e.claimable.ammRaw, a) : null,
          p = e.allocations?.operatorGrant,
          m = p ? l(p.computeMicro, 6) : null,
          f = p ? l(p.reserveMicro, 6) : null,
          g = r
            ? "WSOL"
            : e.quoteMint && (0, s.bA)(e.quoteMint)
              ? `${e.quoteMint.slice(0, 5)}…${e.quoteMint.slice(-5)}`
              : "quote token";
        return (0, i.jsxs)("section", {
          className: "computer-funding-summary",
          "aria-label": "Creator fees and collected wallet balances",
          children: [
            p &&
              null !== m &&
              null !== f &&
              (0, i.jsxs)("section", {
                className: "computer-help",
                "aria-label": "Operator starter allocation",
                children: [
                  (0, i.jsx)("h3", { children: "Starter compute allocation" }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Coinputer allocated $",
                      m,
                      " in compute credit and $",
                      f,
                      " in saved-disk reserve. This is a non-repayable operator contribution; creator-fee SOL has not been converted by this allocation.",
                    ],
                  }),
                  (0, i.jsx)("small", {
                    children:
                      "These are the original allocated amounts. The remaining balance is shown under Available compute credit.",
                  }),
                ],
              }),
            (0, i.jsx)("h3", { children: "Creator fees" }),
            n
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("p", {
                      className: "computer-help",
                      children:
                        "Fees accrue in Pump’s creator vaults. Wallet deposits and available compute credit are separate balances.",
                    }),
                    !0 === e.creatorMatches &&
                      e.recipient &&
                      (0, s.bA)(e.recipient) &&
                      (0, i.jsxs)("section", {
                        className: "computer-help",
                        "aria-label": "Verified creator-fee recipient",
                        children: [
                          (0, i.jsx)("strong", {
                            children:
                              t || "stale" === e.status
                                ? "Last verified creator-fee recipient"
                                : "Creator-fee recipient verified on mainnet",
                          }),
                          (0, i.jsx)("p", {
                            children:
                              "This coin’s creator fees belong to its dedicated computer wallet.",
                          }),
                          (0, i.jsxs)("a", {
                            href: `https://solscan.io/account/${e.recipient}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              (0, i.jsx)("code", { children: e.recipient }),
                              " ↗",
                            ],
                          }),
                        ],
                      }),
                    (0, i.jsxs)("dl", {
                      className: "machine-readouts",
                      children: [
                        null !== u &&
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("small", {
                                children: "CLAIMABLE \xb7 BONDING CURVE",
                              }),
                              (0, i.jsxs)("b", {
                                children: [u, " ", r ? "SOL" : g],
                              }),
                            ],
                          }),
                        null !== h &&
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("small", {
                                children: "CLAIMABLE \xb7 AMM",
                              }),
                              (0, i.jsxs)("b", { children: [h, " ", g] }),
                            ],
                          }),
                        null !== o &&
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("small", {
                                children: "COLLECTED WALLET \xb7 NATIVE SOL",
                              }),
                              (0, i.jsxs)("b", { children: [o, " SOL"] }),
                            ],
                          }),
                        null !== d &&
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("small", {
                                children: [
                                  "COLLECTED WALLET \xb7 ",
                                  r ? "WRAPPED SOL" : "QUOTE TOKEN",
                                ],
                              }),
                              (0, i.jsxs)("b", { children: [d, " ", g] }),
                            ],
                          }),
                      ],
                    }),
                    e.quoteUiMultiplier &&
                      (0, i.jsxs)("p", {
                        className: "computer-help",
                        children: [
                          "Quote-token balances above are unscaled on-chain amounts. This token’s display multiplier is ",
                          e.quoteUiMultiplier,
                          ", so wallet apps may show a different balance. These tokens are not USD compute credit.",
                        ],
                      }),
                    (t || "stale" === e.status) &&
                      (0, i.jsx)("p", {
                        className: "read-error",
                        role: "status",
                        children:
                          "Last verified fee balances. The latest read is unavailable.",
                      }),
                    !1 === e.creatorMatches &&
                      (0, i.jsx)("p", {
                        className: "read-error",
                        role: "status",
                        children:
                          "The Pump creator differs from this computer’s fee wallet. These balances do not confirm that creator fees are routed here.",
                      }),
                    !0 !== e.creatorMatches &&
                      e.recipient &&
                      (0, s.bA)(e.recipient) &&
                      (0, i.jsxs)("small", {
                        children: [
                          "Coin fee wallet \xb7 ",
                          (0, i.jsxs)("a", {
                            href: `https://solscan.io/account/${e.recipient}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              (0, i.jsx)("code", { children: e.recipient }),
                              " ↗",
                            ],
                          }),
                        ],
                      }),
                    e.quoteMint &&
                      !r &&
                      (0, s.bA)(e.quoteMint) &&
                      (0, i.jsxs)("small", {
                        children: [
                          "Quote token \xb7 ",
                          (0, i.jsxs)("a", {
                            href: `https://solscan.io/token/${e.quoteMint}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              (0, i.jsx)("code", { children: e.quoteMint }),
                              " ↗",
                            ],
                          }),
                        ],
                      }),
                    e.observedAt &&
                      Number.isFinite(Date.parse(e.observedAt)) &&
                      (0, i.jsxs)("small", {
                        children: [
                          "Read ",
                          new Date(e.observedAt).toLocaleString(),
                        ],
                      }),
                  ],
                })
              : (0, i.jsx)("p", {
                  role: "status",
                  children: "Creator fee balances are temporarily unavailable.",
                }),
            e.notice &&
              (0, i.jsx)("p", {
                className: "computer-help",
                children: e.notice,
              }),
          ],
        });
      }
      function d({ machine: e }) {
        let [t, n] = (0, r.useState)({ machine: e, data: null, error: !1 }),
          [s, l] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          let t = new AbortController(),
            i = !1;
          async function r() {
            if (!i && !document.hidden) {
              i = !0;
              try {
                let i = await (0, o.Iz)(
                  `machines/${e}/funding-summary`,
                  void 0,
                  t.signal,
                );
                t.signal.aborted || n({ machine: e, data: i, error: !1 });
              } catch {
                t.signal.aborted ||
                  n((t) => ({
                    machine: e,
                    data: t.machine === e ? t.data : null,
                    error: !0,
                  }));
              } finally {
                i = !1;
              }
            }
          }
          r();
          let a = setInterval(r, 3e4);
          return (
            document.addEventListener("visibilitychange", r),
            () => {
              (t.abort(),
                clearInterval(a),
                document.removeEventListener("visibilitychange", r));
            }
          );
        }, [e, s]);
        let u = t.machine === e ? t : null;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            u?.data
              ? (0, i.jsx)(c, { data: u.data, stale: u.error })
              : (0, i.jsx)("p", {
                  role: "status",
                  children: u?.error
                    ? "Creator fee balances could not be read."
                    : "READING CREATOR FEES…",
                }),
            u?.error &&
              (0, i.jsx)(a.$, {
                variant: "outline",
                onClick: () => l((e) => e + 1),
                children: "Read creator fees again",
              }),
          ],
        });
      }
    },
    3312: (e) => {
      e.exports = {
        intro: "machine-directory_intro__7pZHl",
        toolbar: "machine-directory_toolbar__t_rk6",
        filters: "machine-directory_filters__AcD4G",
        search: "machine-directory_search__h1zWY",
        machine: "machine-directory_machine__3qTMc",
        state: "machine-directory_state__PTn_U",
        open: "machine-directory_open__P5ZdQ",
        context: "machine-directory_context__l_DBA",
        record: "machine-directory_record__aWunp",
        pagination: "machine-directory_pagination__jzMJ0",
        error: "machine-directory_error__v_deJ",
      };
    },
    3379: (e, t, n) => {
      "use strict";
      n.d(t, { YW: () => a, ap: () => o, md: () => r, wV: () => s });
      var i = n(5155);
      function r({ live: e = !1, busy: t = !1, fault: n = !1 }) {
        return (0, i.jsx)("i", {
          "aria-hidden": "true",
          className: `status-dot ${e ? "is-live" : ""} ${t ? "is-busy" : ""} ${n ? "is-fault" : ""}`,
        });
      }
      function a({ data: e, error: t, directoryLoading: n }) {
        let s = !e && !t;
        return s || n
          ? (0, i.jsxs)("div", {
              className: "crt-connection-status",
              role: "status",
              children: [
                (0, i.jsx)(r, { busy: !0 }),
                (0, i.jsxs)("span", {
                  children: [
                    "> ",
                    s
                      ? "Connecting to Solana mainnet"
                      : "Reading computer directory",
                    (0, i.jsx)("span", {
                      className: "block-cursor",
                      "aria-hidden": "true",
                    }),
                  ],
                }),
                (0, i.jsx)("span", {
                  className: "crt-connection-hint",
                  children: "Workspace ready to use",
                }),
              ],
            })
          : null;
      }
      function s({ data: e, loading: t, error: n, history: a, onRefresh: o }) {
        let l = a.filter((e) => e.ok).slice(-18),
          c = l.at(-1),
          d = Math.max(...l.map((e) => e.ms), 1),
          u = l
            .map(
              (e, t) =>
                `${l.length < 2 ? 0 : (204 * t) / (l.length - 1)},${45 - (e.ms / d) * 37}`,
            )
            .join(" ");
        return (0, i.jsxs)("section", {
          className: "hardware-module mainnet-monitor",
          "aria-label": "Mainnet hardware monitor",
          children: [
            (0, i.jsxs)("header", {
              children: [
                (0, i.jsxs)("span", {
                  children: [
                    (0, i.jsx)(r, { live: !!(e && !n), busy: t, fault: !!n }),
                    "MAINNET",
                  ],
                }),
                (0, i.jsx)("span", { children: "RX / TX" }),
              ],
            }),
            (0, i.jsxs)("dl", {
              children: [
                [
                  ["SLOT", e?.slot],
                  ["EPOCH", e?.epoch],
                  ["BLOCK", e?.blockHeight],
                ].map(([e, t]) =>
                  (0, i.jsxs)(
                    "div",
                    {
                      children: [
                        (0, i.jsx)("dt", { children: e }),
                        (0, i.jsx)(
                          "dd",
                          {
                            children:
                              "number" == typeof t
                                ? t.toLocaleString("en-US")
                                : "—",
                          },
                          String(t),
                        ),
                      ],
                    },
                    e,
                  ),
                ),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("dt", { children: "READ" }),
                    (0, i.jsx)("dd", {
                      children: c ? `${c.ms.toLocaleString("en-US")} ms` : "—",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "scope",
              children: [
                (0, i.jsxs)("svg", {
                  viewBox: "0 0 204 50",
                  role: "img",
                  "aria-label":
                    l.length > 1
                      ? "Measured round-trip times of successful mainnet reads in this session"
                      : "Waiting for multiple mainnet reads to plot request timings",
                  children: [
                    (0, i.jsx)("path", {
                      className: "scope-grid",
                      d: "M0 10H204M0 25H204M0 40H204M34 0V50M68 0V50M102 0V50M136 0V50M170 0V50",
                    }),
                    l.length > 1 && (0, i.jsx)("polyline", { points: u }),
                    1 === l.length &&
                      (0, i.jsx)("circle", {
                        cx: "0",
                        cy: 45 - (l[0].ms / d) * 37,
                        r: "2",
                      }),
                  ],
                }),
                (0, i.jsx)("span", {
                  children:
                    l.length < 2
                      ? "WAITING FOR READ HISTORY"
                      : "REQUEST ROUND TRIP / THIS SESSION",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "monitor-foot",
              children: [
                (0, i.jsx)("span", {
                  children: n
                    ? "LAST READ FAILED"
                    : e
                      ? "FINALIZED / VERIFIED"
                      : "CONNECTING…",
                }),
                (0, i.jsx)("button", {
                  onClick: o,
                  disabled: t,
                  "aria-label": "Refresh mainnet data",
                  children: t ? "READING_" : "READ ↵",
                }),
              ],
            }),
            e &&
              (0, i.jsxs)("small", {
                children: [
                  new Date(e.observedAt).toLocaleTimeString("en-GB", {
                    timeZone: "UTC",
                    hour12: !1,
                  }),
                  " UTC \xb7 ",
                  e.source,
                ],
              }),
          ],
        });
      }
      function o({ events: e, expanded: t = !1 }) {
        let n = [...e].sort((e, t) => t.id - e.id).slice(0, t ? 24 : 5);
        return (0, i.jsxs)("section", {
          className: `hardware-module live-journal ${t ? "expanded-journal" : ""}`,
          children: [
            (0, i.jsxs)("header", {
              children: [
                (0, i.jsxs)("span", {
                  children: [
                    (0, i.jsx)(r, { live: n.some((e) => e.ok) }),
                    t ? "SYSTEM JOURNAL" : "LIVE ACTIVITY",
                  ],
                }),
                (0, i.jsx)("span", { children: "LOCAL" }),
              ],
            }),
            (0, i.jsx)("p", {
              className: "journal-source",
              children: "Actual reads in this browser session.",
            }),
            (0, i.jsx)("div", {
              className: "journal-entries",
              "aria-live": "polite",
              "aria-relevant": "additions",
              children: n.length
                ? n.map((e) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: `journal-row ${e.ok ? "" : "journal-error"}`,
                        children: [
                          (0, i.jsx)("time", {
                            children: new Date(e.at)
                              .toLocaleTimeString("en-GB", {
                                timeZone: "UTC",
                                hour12: !1,
                              })
                              .slice(0, 5),
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("b", {
                                children: [
                                  e.kind.toUpperCase(),
                                  " / ",
                                  e.ok ? "READ OK" : "READ FAILED",
                                ],
                              }),
                              (0, i.jsx)("p", {
                                children: e.address
                                  ? `${e.address.slice(0, 5)}…${e.address.slice(-5)}`
                                  : "solana-mainnet",
                              }),
                              (0, i.jsxs)("small", {
                                children: [
                                  e.ok
                                    ? `slot ${e.slot?.toLocaleString("en-US")}`
                                    : "No data substituted",
                                  " \xb7 ",
                                  e.ms,
                                  " ms",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      `${e.kind}-${e.id}`,
                    ),
                  )
                : (0, i.jsxs)("p", {
                    className: "journal-empty",
                    children: [
                      "> awaiting first response",
                      (0, i.jsx)("span", { className: "block-cursor" }),
                    ],
                  }),
            }),
            (0, i.jsx)("footer", { children: "UTC \xb7 NO SYNTHETIC EVENTS" }),
          ],
        });
      }
    },
    6079: (e, t, n) => {
      "use strict";
      function i(e) {
        let t = e.capacityWaiting?.deadline;
        return ["PROVISIONING", "WAKING"].includes(e.state) &&
          "string" == typeof t &&
          Number.isFinite(Date.parse(t))
          ? t
          : null;
      }
      function r(e) {
        return i(e)
          ? {
              label: "Waiting for capacity",
              detail:
                "Startup will retry automatically while capacity is busy. The manager can cancel this request.",
              tone: "warning",
            }
          : "ERROR" === e.state
            ? {
                label: "Needs attention",
                detail:
                  "Open the computer to see what needs attention and the next recovery step.",
                tone: "error",
              }
            : "LOW_POWER" === e.state
              ? {
                  label: "Low credit",
                  detail: "Review funding to keep this computer running.",
                  tone: "warning",
                }
              : "ONLINE" === e.state
                ? e.online
                  ? {
                      label: "Online",
                      detail:
                        "wallet" === e.accessMode
                          ? "Open the desktop and sign in with any wallet. Your Home stays private."
                          : "Open the desktop and sign in with your holder wallet.",
                      tone: "online",
                    }
                  : {
                      label: "Connection interrupted",
                      detail:
                        "The computer has not reported a fresh connection. Open it to check its status.",
                      tone: "warning",
                    }
                : "UNPROVISIONED" === e.state
                  ? e.automaticStart?.enrolled
                    ? {
                        label: "Automatic start queued",
                        detail:
                          (e.automaticStart.message ||
                            "Your computer starts automatically after launch.") +
                          " Startup retries automatically; you can close this page.",
                        tone: "warning",
                      }
                    : {
                        label: "Not started yet",
                        detail:
                          "Its identity is registered. Open to review startup funding and start the computer.",
                        tone: "quiet",
                      }
                  : "SLEEPING" === e.state
                    ? {
                        label: "Sleeping",
                        detail: e.preserved
                          ? "Saved files are preserved. Its manager can wake the computer when funding permits."
                          : "Open the computer to check saved storage and wake-up requirements.",
                        tone: "quiet",
                      }
                    : "PROVISIONING" === e.state
                      ? {
                          label: "Starting up",
                          detail:
                            "Preparing Linux and its applications. Open the computer to follow startup.",
                          tone: "warning",
                        }
                      : "WAKING" === e.state
                        ? {
                            label: "Waking up",
                            detail:
                              "Restoring the saved workspace. Open the computer to follow its progress.",
                            tone: "warning",
                          }
                        : "SAVING" === e.state
                          ? {
                              label: "Saving workspace",
                              detail:
                                "Saving files before sleep. Desktop access returns after wake-up.",
                              tone: "warning",
                            }
                          : {
                              label: e.state.replaceAll("_", " ").toLowerCase(),
                              detail:
                                "Open the computer for its current status and available actions.",
                              tone: "quiet",
                            };
      }
      function a(e) {
        return "number" == typeof e && Number.isFinite(e) && e >= 0
          ? `LOAD ${e.toFixed(2)}`
          : "LOAD —";
      }
      n.d(t, { Iw: () => a, gl: () => r, y: () => i });
    },
    7436: (e, t, n) => {
      "use strict";
      n.d(t, {
        bT: () => e6,
        Iz: () => eX,
        Ay: () => e3,
        vD: () => e2,
        Ab: () => e5,
      });
      var i = n(5155),
        r = n(897),
        a = n(5495);
      async function s(e, t, n) {
        n();
        try {
          let i = await t();
          return (n(), i.wallet === e ? i : null);
        } catch (e) {
          if ((n(), e instanceof Error && "status" in e && 401 === e.status))
            return null;
          throw e;
        }
      }
      async function o(e, t) {
        try {
          return (await t()).wallet === e && e ? "verified" : "revoked";
        } catch (t) {
          let e =
            "object" == typeof t && null !== t && "status" in t
              ? t.status
              : null;
          return 401 === e || 403 === e ? "revoked" : "unavailable";
        }
      }
      function l(e) {
        let t = "UNPROVISIONED" !== e.state,
          n = t || BigInt(e.creditMicro) > BigInt(0);
        return {
          credit: n,
          reserve: t || BigInt(e.storageReserveMicro) > BigInt(0),
          price: null !== e.priceMicroHour,
          runway: n && null !== e.runwaySeconds,
        };
      }
      var c = n(6079),
        d = n(2655);
      let u = (e) => "$" + (0, d.Js)(e.toString(), 6),
        h = (e) =>
          "string" == typeof e && /^\d{1,20}$/.test(e) ? BigInt(e) : null,
        p = (e) => ["verified", "failed", "expired"].includes(e.status);
      function m(e) {
        return "verified" === e.status
          ? "settled" === e.settlement
            ? "Deposit verified and settled."
            : "Finalized receipt verified. USD settlement is pending; this SOL is not compute credit yet. No additional deposit is needed for this receipt."
          : "expired" === e.status || "failed" === e.status
            ? "This transaction did not complete. You can review a new deposit."
            : "Mainnet confirmation is still pending. This receipt is checked automatically; do not send a new deposit.";
      }
      let f = [
        {
          id: "browser",
          label: "Web browser",
          description: "Browse the internet on this computer",
        },
        {
          id: "terminal",
          label: "Terminal",
          description: "Run commands and development tools",
        },
        {
          id: "files",
          label: "My files",
          description: "Open your private Home folder",
        },
        {
          id: "editor",
          label: "Text editor",
          description: "Write and edit files on the desktop",
        },
        {
          id: "shared",
          label: "Shared folder",
          description: "Open the community folder",
        },
      ];
      async function g(e) {
        let t = e.readWallet(),
          n = () => {
            e.signal.throwIfAborted();
            let n = e.readWallet();
            if (
              !t ||
              t.address !== e.wallet ||
              n?.address !== e.wallet ||
              n.revision !== t.revision
            )
              throw Error("Wallet selection changed.");
          };
        if ((n(), 1 !== e.launcherVersion || !f.some((t) => t.id === e.app)))
          throw Error("Application launcher unavailable.");
        let i = await e.request({ app: e.app }, e.signal);
        if (
          (n(),
          !i ||
            "object" != typeof i ||
            !("launched" in i) ||
            !0 !== i.launched ||
            !("app" in i) ||
            i.app !== e.app ||
            !("launcherVersion" in i) ||
            1 !== i.launcherVersion)
        )
          throw Error("Invalid application launch acknowledgment.");
        return `${f.find((t) => t.id === e.app).label} launch requested. Its window opens on the desktop.`;
      }
      let v = {
        connection: {
          label: "CONNECTION INTERRUPTED",
          message: "Reconnect the computer service before opening a desktop.",
        },
        "session-check": {
          label: "SESSION CHECK UNAVAILABLE",
          message:
            "Your wallet session could not be checked. Choose Check session above or wait for the next check before starting a desktop.",
        },
        unprovisioned: {
          label: "COMPUTER NOT RENTED",
          message:
            "This computer has not been rented. Its manager can start it from Machine once compute funding and the spending limit cover startup.",
        },
        provisioning: {
          label: "COMPUTER STARTING",
          message:
            "The server is being prepared. Wait for it to come online, then enter the desktop. Check Machine for startup progress.",
        },
        waking: {
          label: "COMPUTER WAKING",
          message:
            "The computer is restoring its saved disk and starting the desktop. Wait for it to come online. Check Machine for progress.",
        },
        saving: {
          label: "COMPUTER SAVING",
          message:
            "The computer is saving its disk before sleeping. Desktop access is paused. Wait for SLEEPING; its manager can then wake it from Machine.",
        },
        sleeping: {
          label: "COMPUTER SLEEPING",
          message:
            "This computer is sleeping. Its saved files remain preserved. Its manager can review funding and wake it from the computer details.",
        },
        "machine-error": {
          label: "COMPUTER NEEDS ATTENTION",
          message:
            "The computer reported an error. Check the error shown in Machine before trying to open its desktop again.",
        },
        offline: {
          label: "COMPUTER OFFLINE",
          message:
            "The computer must be awake and connected before a desktop can open. Check its state in Machine.",
        },
        capability: {
          label: "DESKTOP NOT READY",
          message:
            "The server has not reported a ready desktop yet. Check Machine for startup progress, then try again. If this persists, its operator can inspect the desktop runtime.",
        },
        authentication: {
          label: "HOLDER SIGN-IN REQUIRED",
          message:
            "Connect your wallet and choose Sign in to computer above. The server checks that you currently hold this coin before opening your private desktop session.",
        },
      };
      function x(e) {
        return 1008 === e
          ? "Desktop access ended or expired. Check your wallet session and computer access before reconnecting."
          : 1013 === e
            ? "The desktop is busy or its connection cannot keep up. Wait briefly, then reconnect."
            : 1011 === e
              ? "The desktop could not start or lost its server connection. Check the machine and try again."
              : 1e3 === e
                ? "Desktop session ended. Reconnect to open a new session."
                : "The desktop connection was interrupted. Reconnect when the computer is available. Unsaved application changes may have been lost.";
      }
      var b = n(2115),
        w = n(4474),
        j = n(3379),
        y = n(2298),
        k = n(1185),
        S = n(6565),
        C = n(852),
        N = n(9005);
      let E = [
          "status",
          "desktop",
          "terminal",
          "files",
          "code",
          "browser",
          "services",
          "funding",
          "journal",
          "settings",
        ],
        A = {
          status: "Machine",
          desktop: "Desktop",
          terminal: "Terminal",
          files: "Files",
          code: "Code",
          browser: "App preview",
          services: "Services",
          funding: "Funding",
          journal: "Journal",
          settings: "Appearance",
        },
        T = ["desktop", "funding", "files", "code", "terminal"],
        R = E.filter((e) => !T.includes(e)),
        $ = (e, t = 0) => ({
          id: e,
          x: 16 + 22 * t,
          y: 16 + 22 * t,
          width: "desktop" === e ? 960 : 660,
          height: "desktop" === e ? 680 : 540,
          minimized: !1,
          maximized: "desktop" === e || "status" === e,
        });
      function I(e, t, n = !1) {
        let i = e.find((e) => e.id === t);
        return [
          ...e.filter((e) => e.id !== t),
          i
            ? {
                ...i,
                minimized: !1,
                ...(n && "desktop" === t ? { maximized: !0 } : {}),
              }
            : $(t, e.length % 4),
        ];
      }
      function O(e, t, n) {
        let i = Math.min(Math.max(280, e.width), t),
          r = Math.min(Math.max(220, e.height), n);
        return {
          ...e,
          x: Math.max(0, Math.min(e.x, t - i)),
          y: Math.max(0, Math.min(e.y, n - r)),
          width: i,
          height: r,
        };
      }
      function L(e, t) {
        return t?.clientWidth &&
          t.clientHeight &&
          !matchMedia("(max-width: 700px)").matches
          ? O(e, t.clientWidth, t.clientHeight)
          : e;
      }
      function M({
        identity: e,
        name: t,
        wallpaper: n,
        motd: r,
        app: a,
        onApp: s,
        children: o,
      }) {
        let [l, c] = (0, b.useState)([$(a)]),
          [d, u] = (0, b.useState)(null),
          h = (0, b.useRef)(null),
          p = (0, b.useRef)(null),
          m = l.filter((e) => !e.minimized).at(-1)?.id;
        function f(e) {
          c((t) => [
            ...t.filter((t) => t.id !== e),
            ...t.filter((t) => t.id === e),
          ]);
        }
        function g(e, t) {
          c((n) =>
            n.map((n) => (n.id === e ? L({ ...n, ...t }, p.current) : n)),
          );
        }
        function v(e) {
          (s(e),
            c((t) => I(t, e).map((t) => (t.id === e ? L(t, p.current) : t))));
        }
        function x(e) {
          return O(
            e,
            p.current?.clientWidth || 700,
            p.current?.clientHeight || 700,
          );
        }
        function w(e, t, n) {
          let i = p.current?.clientWidth || 700,
            r = p.current?.clientHeight || 700,
            a = Math.max(0, Math.min(e.x, Math.max(0, i - 320))),
            s = Math.max(0, Math.min(e.y, Math.max(0, r - 260)));
          return {
            ...e,
            x: a,
            y: s,
            width: Math.min(i - a, Math.max(320, e.width + t)),
            height: Math.min(r - s, Math.max(260, e.height + n)),
          };
        }
        function j(e, t, n = !1) {
          if (t.maximized || matchMedia("(max-width: 700px)").matches) return;
          (e.preventDefault(), f(t.id));
          let i = e.currentTarget,
            r = i.closest(".os-window");
          i.setPointerCapture(e.pointerId);
          let a = e.clientX,
            s = e.clientY,
            o = t,
            l = (e) => {
              ((o = n
                ? w(t, e.clientX - a, e.clientY - s)
                : x({ ...t, x: t.x + e.clientX - a, y: t.y + e.clientY - s })),
                Object.assign(r.style, {
                  left: `${o.x}px`,
                  top: `${o.y}px`,
                  width: `${o.width}px`,
                  height: `${o.height}px`,
                }));
            },
            c = () => {
              (i.removeEventListener("pointermove", l),
                i.removeEventListener("pointerup", c),
                i.removeEventListener("pointercancel", c),
                g(t.id, o));
            };
          (i.addEventListener("pointermove", l),
            i.addEventListener("pointerup", c),
            i.addEventListener("pointercancel", c));
        }
        function D(e, t, n = !1) {
          if (
            t.maximized ||
            matchMedia("(max-width: 700px)").matches ||
            !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
          )
            return;
          e.preventDefault();
          let i = e.shiftKey ? 64 : 16,
            r = "ArrowLeft" === e.key ? -i : "ArrowRight" === e.key ? i : 0,
            a = "ArrowUp" === e.key ? -i : "ArrowDown" === e.key ? i : 0;
          g(t.id, n ? w(t, r, a) : x({ ...t, x: t.x + r, y: t.y + a }));
        }
        return (
          (0, b.useEffect)(() => {
            let t = !0,
              n = h.current !== e,
              i = [];
            if (n)
              try {
                let t = JSON.parse(
                  localStorage.getItem(`coinputer.desktop.${e}`) || "null",
                );
                Array.isArray(t) &&
                  t.length <= E.length &&
                  (i = t
                    .filter(
                      (e, t, n) =>
                        e &&
                        E.includes(e.id) &&
                        n.findIndex((t) => t?.id === e.id) === t &&
                        [e.x, e.y, e.width, e.height].every(Number.isFinite) &&
                        e.x >= 0 &&
                        e.y >= 0 &&
                        e.width >= 280 &&
                        e.width <= 2e3 &&
                        e.height >= 220 &&
                        e.height <= 2e3,
                    )
                    .map((e) => ({
                      ...e,
                      minimized: !0 === e.minimized,
                      maximized: !0 === e.maximized,
                    })));
              } catch {}
            return (
              queueMicrotask(() => {
                t &&
                  (n
                    ? ((h.current = e),
                      c(I(i, a, !0).map((e) => L(e, p.current))),
                      u(e))
                    : c((e) =>
                        I(e, a).map((e) => (e.id === a ? L(e, p.current) : e)),
                      ));
              }),
              () => {
                t = !1;
              }
            );
          }, [e, a]),
          (0, b.useEffect)(() => {
            if (d === e)
              try {
                localStorage.setItem(
                  `coinputer.desktop.${e}`,
                  JSON.stringify(l),
                );
              } catch {}
          }, [l, e, d]),
          (0, b.useEffect)(() => {
            if (d !== e || !p.current) return;
            let t = new ResizeObserver(() => {
              matchMedia("(max-width: 700px)").matches || c((e) => e.map(x));
            });
            return (t.observe(p.current), () => t.disconnect());
          }, [d, e]),
          (0, i.jsxs)("div", {
            className: `coin-desktop surface-${n}`,
            children: [
              (0, i.jsxs)("div", {
                className: "os-menubar",
                children: [
                  (0, i.jsx)("b", { children: "COINPUTER OS" }),
                  (0, i.jsx)("span", { children: t }),
                  (0, i.jsxs)("button", {
                    onClick: () =>
                      c((e) =>
                        e.map((e, t) =>
                          x({ ...$(e.id, t % 4), minimized: e.minimized }),
                        ),
                      ),
                    title: "Arrange open windows",
                    children: [
                      (0, i.jsx)(y.A, { size: 14 }),
                      (0, i.jsx)("span", { children: "Arrange" }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("nav", {
                className: "os-dock computer-tool-dock",
                "aria-label": "Computer applications",
                children: [
                  T.map((e) =>
                    (0, i.jsxs)(
                      "button",
                      {
                        className:
                          "desktop" === e ? "computer-desktop-tool" : void 0,
                        "aria-pressed": m === e,
                        onClick: () => v(e),
                        children: [
                          (0, i.jsx)("span", {
                            "aria-hidden": "true",
                            children:
                              "desktop" === e
                                ? "▣"
                                : "terminal" === e
                                  ? ">_"
                                  : "code" === e
                                    ? "</>"
                                    : "funding" === e
                                      ? "＋"
                                      : "▤",
                          }),
                          A[e],
                          l.some((t) => t.id === e) &&
                            (0, i.jsx)("i", { "aria-label": "Open" }),
                        ],
                      },
                      e,
                    ),
                  ),
                  (0, i.jsxs)("details", {
                    className: "computer-more-tools",
                    children: [
                      (0, i.jsxs)("summary", {
                        children: [
                          "More tools",
                          m &&
                            R.some((e) => e === m) &&
                            (0, i.jsxs)("span", { children: [" \xb7 ", A[m]] }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        children: R.map((e) =>
                          (0, i.jsxs)(
                            "button",
                            {
                              "aria-pressed": m === e,
                              onClick: (t) => {
                                v(e);
                                let n = t.currentTarget.closest("details");
                                n &&
                                  ((n.open = !1),
                                  n.querySelector("summary")?.focus());
                              },
                              children: [
                                A[e],
                                l.some((t) => t.id === e) &&
                                  (0, i.jsx)("i", { "aria-label": "Open" }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "os-surface",
                ref: p,
                children: [
                  (0, i.jsxs)("div", {
                    className: "os-wallpaper",
                    "aria-hidden": "true",
                    children: [
                      (0, i.jsx)("span", { children: ">_" }),
                      (0, i.jsx)("strong", { children: t }),
                      (0, i.jsx)("p", {
                        children: r || "Every coin gets a computer.",
                      }),
                    ],
                  }),
                  l.map((e, n) =>
                    (0, i.jsxs)(
                      "section",
                      {
                        "data-app": e.id,
                        className: `os-window ${e.maximized ? "maximized" : ""} ${m === e.id ? "focused" : ""}`,
                        hidden: e.minimized,
                        style: {
                          left: e.x,
                          top: e.y,
                          width: e.width,
                          height: e.height,
                          zIndex: n + 1,
                        },
                        onPointerDownCapture: () => {
                          m !== e.id && f(e.id);
                        },
                        onFocusCapture: () => {
                          m !== e.id && f(e.id);
                        },
                        "aria-label": `${A[e.id]} window`,
                        children: [
                          (0, i.jsxs)("header", {
                            children: [
                              (0, i.jsxs)("button", {
                                className: "os-window-handle",
                                onPointerDown: (t) => j(t, e),
                                onKeyDown: (t) => D(t, e),
                                onDoubleClick: () =>
                                  g(e.id, { maximized: !e.maximized }),
                                title:
                                  "Drag to move. Use arrow keys when focused. Double-click to change window size.",
                                children: [
                                  A[e.id],
                                  (0, i.jsx)("small", { children: t }),
                                ],
                              }),
                              (0, i.jsx)("button", {
                                "aria-label": `Snap ${A[e.id]} left`,
                                title: "Snap left",
                                onClick: () =>
                                  g(e.id, {
                                    x: 0,
                                    y: 0,
                                    width: Math.max(
                                      320,
                                      (p.current?.clientWidth || 700) / 2,
                                    ),
                                    height: p.current?.clientHeight || 700,
                                    maximized: !1,
                                  }),
                                children: (0, i.jsx)(k.A, { size: 14 }),
                              }),
                              (0, i.jsx)("button", {
                                "aria-label": `Minimize ${A[e.id]}`,
                                onClick: () => g(e.id, { minimized: !0 }),
                                children: (0, i.jsx)(S.A, { size: 14 }),
                              }),
                              (0, i.jsxs)("button", {
                                className:
                                  "desktop" === e.id
                                    ? "os-window-size"
                                    : void 0,
                                "aria-label":
                                  "desktop" === e.id && e.maximized
                                    ? "Resize desktop window"
                                    : `${e.maximized ? "Restore" : "Maximize"} ${A[e.id]}`,
                                title: e.maximized
                                  ? "Use a movable, resizable window"
                                  : "Fill the computer workspace",
                                onClick: () =>
                                  g(e.id, { maximized: !e.maximized }),
                                children: [
                                  (0, i.jsx)(C.A, { size: 12 }),
                                  "desktop" === e.id &&
                                    (0, i.jsx)("span", {
                                      children: e.maximized
                                        ? "Resize window"
                                        : "Fill workspace",
                                    }),
                                ],
                              }),
                              (0, i.jsx)("button", {
                                "aria-label": `Close ${A[e.id]}`,
                                onClick: () => {
                                  var t;
                                  let n, i;
                                  return (
                                    (t = e.id),
                                    (n = () =>
                                      c((e) => e.filter((e) => e.id !== t))),
                                    (i = p.current?.querySelector(
                                      '[data-app="' + t + '"]',
                                    )),
                                    void (
                                      i?.dispatchEvent(
                                        new CustomEvent(
                                          "coinputer:before-close",
                                          {
                                            cancelable: !0,
                                            detail: { close: n },
                                          },
                                        ),
                                      ) !== !1 && n()
                                    )
                                  );
                                },
                                children: (0, i.jsx)(N.A, { size: 15 }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "os-window-content",
                            children: o(e.id, v),
                          }),
                          !e.maximized &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                "desktop" === e.id &&
                                  (0, i.jsx)("div", {
                                    className: "os-window-resize-hint",
                                    children:
                                      "Drag the corner to resize. Arrow keys also work.",
                                  }),
                                (0, i.jsx)("button", {
                                  className: "os-resize",
                                  "aria-label": `Resize ${A[e.id]} with arrow keys`,
                                  title:
                                    "Drag to resize, or use arrow keys. Hold Shift for larger steps.",
                                  onPointerDown: (t) => j(t, e, !0),
                                  onKeyDown: (t) => D(t, e, !0),
                                  children: "◢",
                                }),
                              ],
                            }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
              (0, i.jsxs)("footer", {
                className: "os-status",
                children: [
                  (0, i.jsxs)("span", {
                    children: [l.length, " applications open"],
                  }),
                  (0, i.jsx)("span", {
                    children: "Individual session \xb7 shared machine",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var D = n(1822);
      let P = new Map(),
        z = (e) => JSON.stringify([e.machine, e.wallet, e.mode]);
      function _(e, t) {
        return (
          !!e.wallet &&
          !!t.path &&
          (null !== t.saved && t.content === t.saved
            ? (P.delete(z(e)), !0)
            : (!!P.has(z(e)) || !(P.size >= 32)) &&
              !(
                new TextEncoder().encode(t.content).length +
                  new TextEncoder().encode(t.saved || "").length >
                2097152
              ) &&
              (P.set(z(e), { ...t }), !0))
        );
      }
      function U(e) {
        P.delete(z(e));
      }
      function F(e, t, n) {
        let i = Math.max(0, t),
          r = Math.min(Math.max(1, e) - 1, Math.floor(i / 22));
        return {
          text: Array.from(
            {
              length: Math.max(
                0,
                Math.min(e - r, Math.ceil(Math.max(0, n) / 22) + 2, 200),
              ),
            },
            (e, t) => String(r + t + 1),
          ).join("\n"),
          offset: 22 * r - i,
        };
      }
      function W(e) {
        let t = e.split("/");
        if (
          !["shared", "home"].includes(t[0]) ||
          t.some((e) => !e || "." === e || ".." === e) ||
          /[\x00-\x1f\x7f\\]/.test(e) ||
          e.length >= 1e3
        )
          throw Error("Use a normalized path beginning with shared/ or home/.");
        return e;
      }
      function q(e) {
        let t = W(e).split("/"),
          n = (e) => "'" + e.replaceAll("'", "'\\''") + "'";
        return "home" === t[0]
          ? '"$HOME"' + (t.length > 1 ? "/" + n(t.slice(1).join("/")) : "")
          : n("/srv/coinputer/" + e);
      }
      function V(e) {
        return (
          {
            py: "Python",
            js: "JavaScript",
            mjs: "JavaScript",
            cjs: "JavaScript",
            ts: "TypeScript",
            tsx: "TSX",
            jsx: "JSX",
            json: "JSON",
            html: "HTML",
            css: "CSS",
            sh: "Shell",
            md: "Markdown",
          }[e.split(".").at(-1)?.toLowerCase() || ""] || "Plain text"
        );
      }
      async function B(e, t) {
        if (
          "string" != typeof e ||
          "string" != typeof t ||
          !/^[a-f0-9]{64}$/.test(t)
        )
          throw Error(
            "This computer has not returned a supported file version. Reconnect after its agent is updated.",
          );
        if (
          Array.from(
            new Uint8Array(
              await crypto.subtle.digest(
                "SHA-256",
                new TextEncoder().encode(e),
              ),
            ),
            (e) => e.toString(16).padStart(2, "0"),
          ).join("") !== t
        )
          throw Error(
            "The file version does not match its contents. Read the file again before saving.",
          );
        return t;
      }
      function G({ value: e, path: t, disabled: n, onChange: r, onSave: a }) {
        let s = (0, b.useRef)(null),
          o = (0, b.useRef)(null),
          l = (0, b.useRef)(null),
          c = V(t),
          d = (0, b.useMemo)(
            () =>
              (function (e, t) {
                if ("Plain text" === t || e.length > 32768)
                  return [{ text: e, kind: "" }];
                let n = [],
                  i = 0;
                for (let t of e.matchAll(
                  /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\/\/[^\n]*|#[^\n]*|\b(?:const|let|var|function|return|if|else|for|while|class|new|import|export|from|async|await|def|print|True|False|None|true|false|null|try|catch|except|throw|raise|with|as|in)\b|\b\d+(?:\.\d+)?\b)/g,
                )) {
                  let r = t.index;
                  r > i && n.push({ text: e.slice(i, r), kind: "" });
                  let a = t[0];
                  if (
                    (n.push({
                      text: a,
                      kind:
                        a.startsWith("//") || a.startsWith("#")
                          ? "comment"
                          : /^["'`]/.test(a)
                            ? "string"
                            : /^\d/.test(a)
                              ? "number"
                              : "keyword",
                    }),
                    (i = r + a.length),
                    n.length >= 4096)
                  )
                    return [{ text: e, kind: "" }];
                }
                return (
                  i < e.length && n.push({ text: e.slice(i), kind: "" }),
                  n
                );
              })(e, c),
            [e, c],
          ),
          u = (0, b.useMemo)(
            () =>
              (function (e) {
                let t = 1;
                for (
                  let n = e.indexOf("\n");
                  -1 !== n;
                  n = e.indexOf("\n", n + 1)
                )
                  t++;
                return t;
              })(e),
            [e],
          ),
          h = (0, b.useMemo)(() => F(u, 0, 330), [u]),
          p = (0, b.useCallback)(() => {
            let e = l.current,
              t = o.current;
            if (!e || !t) return;
            let n = F(u, e.scrollTop, e.clientHeight);
            ((t.textContent = n.text),
              (t.style.transform = `translateY(${n.offset}px)`));
          }, [u]);
        return (
          (0, b.useLayoutEffect)(() => {
            p();
            let e = l.current;
            if (!e) return;
            let t = new ResizeObserver(p);
            return (t.observe(e), () => t.disconnect());
          }, [p]),
          (0, i.jsxs)("div", {
            className: "developer-editor",
            children: [
              (0, i.jsx)("div", {
                className: "editor-line-numbers",
                "aria-hidden": "true",
                children: (0, i.jsx)("div", {
                  ref: o,
                  style: { whiteSpace: "pre" },
                  children: h.text,
                }),
              }),
              (0, i.jsxs)("div", {
                className: "editor-source",
                children: [
                  (0, i.jsxs)("pre", {
                    ref: s,
                    "aria-hidden": "true",
                    children: [
                      d.map((e, t) =>
                        (0, i.jsx)(
                          "span",
                          {
                            className: e.kind ? `syntax-${e.kind}` : void 0,
                            children: e.text,
                          },
                          t,
                        ),
                      ),
                      "\n",
                    ],
                  }),
                  (0, i.jsx)("textarea", {
                    ref: l,
                    "aria-label": `${c} editor for ${t || "new file"}`,
                    value: e,
                    disabled: n,
                    maxLength: 262144,
                    onChange: (e) => r(e.target.value),
                    onKeyDown: function (t) {
                      if (
                        (t.ctrlKey || t.metaKey) &&
                        "s" === t.key.toLowerCase()
                      ) {
                        (t.preventDefault(), n || a());
                        return;
                      }
                      if ("Tab" !== t.key || t.shiftKey || n) return;
                      t.preventDefault();
                      let i = t.currentTarget,
                        s = i.selectionStart,
                        o = i.selectionEnd;
                      (r(e.slice(0, s) + "  " + e.slice(o)),
                        requestAnimationFrame(() =>
                          i.setSelectionRange(s + 2, s + 2),
                        ));
                    },
                    onScroll: (e) => {
                      (s.current &&
                        ((s.current.scrollTop = e.currentTarget.scrollTop),
                        (s.current.scrollLeft = e.currentTarget.scrollLeft)),
                        p());
                    },
                    spellCheck: !1,
                    autoCapitalize: "off",
                    autoComplete: "off",
                    autoCorrect: "off",
                    wrap: "off",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function H({ machine: e, onError: t, suggestedCommand: a }) {
        let s = (0, b.useRef)(null),
          o = (0, b.useRef)(null),
          l = (0, b.useRef)(() => {}),
          [c, d] = (0, b.useState)({
            phase: "connecting",
            message: "Opening your private terminal…",
          }),
          [u, h] = (0, b.useState)(0),
          [p, m] = (0, b.useState)(""),
          [f, g] = (0, b.useState)(""),
          v = "connected" === c.phase,
          x = "connecting" === c.phase;
        return (
          (0, b.useEffect)(() => {
            void 0 !== a && queueMicrotask(() => m(a));
          }, [a]),
          (0, b.useEffect)(() => {
            let t,
              i = !0,
              a = () => {},
              c = new AbortController(),
              u = (function (e) {
                let t,
                  n = e.readWallet(),
                  i = !1,
                  r = !1,
                  a = !1,
                  s = !1,
                  o = null,
                  l = [],
                  c = () => {
                    e.signal.throwIfAborted();
                    let t = e.readWallet();
                    if (
                      i ||
                      a ||
                      !n ||
                      t?.address !== n.address ||
                      t.revision !== n.revision
                    )
                      throw Error("Wallet changed.");
                  };
                function d() {
                  for (let e of ((s = !1), clearTimeout(t), l.splice(0))) e();
                  try {
                    o?.close();
                  } catch {}
                  o = null;
                }
                function u(t) {
                  i || a || ((a = !0), d(), e.state(t));
                }
                function h(e, t, n) {
                  (e.addEventListener(t, n),
                    l.push(() => e.removeEventListener(t, n)));
                }
                function p() {
                  i ||
                    ((i = !0), d(), e.signal.removeEventListener("abort", p));
                }
                function m(e) {
                  try {
                    if ((c(), !s || o?.readyState !== 1)) return !1;
                    return (o.send(JSON.stringify(e)), !0);
                  } catch {
                    return (
                      u({
                        phase: "error",
                        message:
                          "The terminal connection changed. Check your wallet and reconnect.",
                      }),
                      !1
                    );
                  }
                }
                return (
                  e.signal.addEventListener("abort", p, { once: !0 }),
                  {
                    start: async function () {
                      if (!r && !i) {
                        ((r = !0),
                          e.state({
                            phase: "connecting",
                            message: "Opening your private terminal…",
                          }),
                          (t = setTimeout(
                            () =>
                              u({
                                phase: "error",
                                message:
                                  "The terminal did not finish connecting. Check the computer, then reconnect.",
                              }),
                            45e3,
                          )));
                        try {
                          (c(), await e.load(), c());
                          let n = await e.ticket(e.signal);
                          c();
                          let i = (function (e) {
                            let t = new URL(e.url);
                            if (
                              "wss:" !== t.protocol ||
                              "/terminal" !== t.pathname ||
                              t.username ||
                              t.password ||
                              t.search ||
                              t.hash ||
                              !t.hostname ||
                              !/^[a-zA-Z0-9_-]{32,128}$/.test(e.ticket)
                            )
                              throw Error("Invalid terminal connection.");
                            if (
                              e.expiresAt &&
                              (!Number.isFinite(Date.parse(e.expiresAt)) ||
                                Date.parse(e.expiresAt) <= Date.now())
                            )
                              throw Error("Terminal connection expired.");
                            return {
                              url: t.toString(),
                              protocols: ["coinputer", "ticket." + e.ticket],
                            };
                          })(n);
                          ((o = e.socket(i.url, i.protocols)),
                            h(o, "close", (e) => {
                              var t;
                              return u({
                                phase: "disconnected",
                                message:
                                  ((t = e.code),
                                  1008 === t
                                    ? "Terminal access ended or expired. Check your wallet sign-in and holder access before reconnecting."
                                    : 1013 === t
                                      ? "The terminal is busy. Wait briefly, then reconnect."
                                      : "The shell disconnected. Reconnect to open a new shell. Saved files remain on the computer; use Services for work that must keep running."),
                              });
                            }),
                            h(o, "error", () =>
                              u({
                                phase: "error",
                                message:
                                  "The terminal connection failed. Check your connection and the computer, then reconnect.",
                              }),
                            ),
                            h(o, "message", (n) => {
                              try {
                                c();
                                let i = n.data;
                                if ("string" != typeof i || i.length > 12e3)
                                  throw Error("Invalid frame.");
                                let r = JSON.parse(i);
                                if (
                                  !r ||
                                  "object" != typeof r ||
                                  Array.isArray(r)
                                )
                                  throw Error("Invalid frame.");
                                if (
                                  (!0 !== r.ready ||
                                    s ||
                                    ((s = !0),
                                    clearTimeout(t),
                                    e.state({
                                      phase: "connected",
                                      message:
                                        "Your private terminal is connected.",
                                    }),
                                    e.ready()),
                                  "data" in r)
                                ) {
                                  if (
                                    "string" != typeof r.data ||
                                    r.data.length > 8192 ||
                                    !/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                                      r.data,
                                    )
                                  )
                                    throw Error("Invalid output.");
                                  e.output(
                                    Uint8Array.from(atob(r.data), (e) =>
                                      e.charCodeAt(0),
                                    ),
                                  );
                                }
                              } catch {
                                u({
                                  phase: "error",
                                  message:
                                    "The terminal connection is no longer valid. Check your wallet and reconnect.",
                                });
                              }
                            }));
                        } catch (n) {
                          let t;
                          i ||
                            e.signal.aborted ||
                            u({
                              phase: "error",
                              message:
                                401 ===
                                (t =
                                  "object" == typeof n &&
                                  null !== n &&
                                  "status" in n
                                    ? n.status
                                    : null)
                                  ? "Your wallet sign-in expired. Sign in to this computer again, then reconnect."
                                  : 403 === t
                                    ? "Terminal access was denied. Sign in with a wallet that currently holds this coin."
                                    : 429 === t
                                      ? "Too many terminal requests. Wait briefly before reconnecting."
                                      : 409 === t || 503 === t
                                        ? "The computer is not ready for a shell. Check its state in Computer details, then reconnect."
                                        : "The terminal could not connect. Check your connection and the computer, then reconnect.",
                            });
                        }
                      }
                    },
                    dispose: p,
                    disconnect(
                      e = "Your network connection is offline. Reconnect after it returns.",
                    ) {
                      u({ phase: "disconnected", message: e });
                    },
                    input(e) {
                      let t = new TextEncoder().encode(e);
                      for (let e = 0; e < t.length; e += 4096)
                        if (
                          !m({
                            data: btoa(
                              String.fromCharCode(...t.subarray(e, e + 4096)),
                            ),
                          })
                        )
                          return !1;
                      return t.length > 0;
                    },
                    resize: (e, t) =>
                      !!Number.isFinite(e) &&
                      !!Number.isFinite(t) &&
                      m({
                        resize: {
                          cols: Math.min(300, Math.max(10, Math.floor(e))),
                          rows: Math.min(120, Math.max(3, Math.floor(t))),
                        },
                      }),
                  }
                );
              })({
                readWallet: r.EF,
                signal: c.signal,
                load: async () => {
                  let [{ Terminal: e }, { FitAddon: r }] = await Promise.all([
                    n.e(888).then(n.bind(n, 8422)),
                    n.e(606).then(n.bind(n, 3606)),
                  ]);
                  if (!i || !s.current) return;
                  t = new e({
                    cursorBlink: !matchMedia("(prefers-reduced-motion: reduce)")
                      .matches,
                    fontSize: 15,
                    fontFamily: '"IBM Plex Mono", monospace',
                    scrollback: 1500,
                    screenReaderMode: !0,
                    theme: {
                      background: "#050b07",
                      foreground: "#a7f3b8",
                      cursor: "#e8dfc9",
                      selectionBackground: "#356946",
                    },
                  });
                  let o = new r();
                  (t.loadAddon(o), t.open(s.current));
                  let c = () => {
                    i &&
                      t &&
                      s.current?.clientWidth &&
                      s.current.clientHeight &&
                      (o.fit(), u.resize(t.cols, t.rows));
                  };
                  c();
                  let d = new ResizeObserver(c);
                  d.observe(s.current);
                  let h = t.onData((e) => {
                    u.input(e);
                  });
                  ((l.current = () => t?.focus()),
                    (a = () => {
                      (d.disconnect(),
                        h.dispose(),
                        t?.dispose(),
                        (l.current = () => {}));
                    }));
                },
                ticket: (t) => eX(`machines/${e}/ticket`, {}, t),
                socket: (e, t) => new WebSocket(e, t),
                state: (e) => {
                  i && d(e);
                },
                output: (e) => t?.write(e),
                ready: () => {
                  if (t) {
                    u.resize(t.cols, t.rows);
                    let e = s.current?.closest(".os-window");
                    !s.current?.closest("[hidden]") &&
                      (!e || e.classList.contains("focused")) &&
                      t.focus();
                  }
                },
              });
            o.current = u;
            let h = (0, r.sq)(() => {
                (t?.reset(),
                  u.disconnect(
                    "Wallet selection changed. Sign in with the current wallet before reconnecting.",
                  ));
              }),
              p = () => u.disconnect();
            return (
              window.addEventListener("offline", p),
              queueMicrotask(() => {
                i && u.start();
              }),
              () => {
                ((i = !1),
                  c.abort(),
                  u.dispose(),
                  h(),
                  window.removeEventListener("offline", p),
                  a(),
                  o.current === u && (o.current = null));
              }
            );
          }, [e, u]),
          (0, i.jsxs)("section", {
            className: "remote-terminal",
            children: [
              (0, i.jsxs)("header", {
                children: [
                  (0, i.jsx)(j.md, { live: v, busy: x }),
                  v
                    ? "PRIVATE TERMINAL"
                    : x
                      ? "CONNECTING TO TERMINAL"
                      : "SHELL DISCONNECTED",
                ],
              }),
              (0, i.jsxs)("div", {
                className: "computer-actions",
                children: [
                  (0, i.jsx)(w.$, {
                    variant: "outline",
                    disabled: v || x,
                    onClick: () => {
                      (d({
                        phase: "connecting",
                        message: "Opening a new private terminal…",
                      }),
                        g(""),
                        h((e) => e + 1));
                    },
                    children: x ? "Connecting…" : "Reconnect",
                  }),
                  (0, i.jsx)(w.$, {
                    variant: "outline",
                    disabled: !v,
                    onClick: () => {
                      (o.current?.input("\x03"), l.current());
                    },
                    children: "Interrupt \xb7 Ctrl+C",
                  }),
                  (0, i.jsx)(w.$, {
                    variant: "ghost",
                    disabled: !v,
                    onClick: () => l.current(),
                    children: "Focus terminal",
                  }),
                ],
              }),
              (0, i.jsx)("p", {
                className:
                  "error" === c.phase ? "inline-error" : "computer-help",
                role: "error" === c.phase ? "alert" : "status",
                children: c.message,
              }),
              void 0 !== a &&
                (0, i.jsxs)("form", {
                  className: "terminal-command",
                  onSubmit: (e) => {
                    let n;
                    (e.preventDefault(),
                      (n = ""),
                      v
                        ? !p.trim() || /[\x00-\x1f\x7f]/.test(p)
                          ? (n =
                              "Enter one command without line breaks or control characters.")
                          : new TextEncoder().encode(p + "\r").length > 4096
                            ? (n =
                                "This command exceeds the terminal input limit.")
                            : o.current?.input(p + "\r") ||
                              (n =
                                "The shell disconnected before this command could be sent. Check its output before trying again.")
                        : (n =
                            "Connect this terminal before running a command."),
                      g(n),
                      n ? t(n) : l.current());
                  },
                  children: [
                    (0, i.jsxs)("label", {
                      children: [
                        "Review command",
                        (0, i.jsx)("input", {
                          value: p,
                          onChange: (e) => {
                            (m(e.target.value), g(""));
                          },
                          maxLength: 4095,
                          spellCheck: !1,
                        }),
                      ],
                    }),
                    (0, i.jsx)(w.$, {
                      disabled: !v || !p.trim(),
                      children: "Run command",
                    }),
                    (0, i.jsx)("small", {
                      children:
                        "Sends this command to your live terminal. Review it before running.",
                    }),
                    f &&
                      (0, i.jsx)("p", {
                        className: "inline-error",
                        role: "alert",
                        children: f,
                      }),
                  ],
                }),
              (0, i.jsx)("div", {
                className: "xterm-host",
                ref: s,
                "aria-label": "Interactive terminal",
              }),
              (0, i.jsx)("small", {
                children:
                  "Private Home \xb7 community files: /srv/coinputer/shared \xb7 30-minute session limit. Minimize to keep this shell open. Closing or reconnecting ends it; use Services for persistent background work.",
              }),
            ],
          })
        );
      }
      function Y(e, t, n, i) {
        if (
          (i.throwIfAborted(),
          !t ||
            t.address !== e ||
            n?.address !== e ||
            n.revision !== t.revision)
        )
          throw Error("Wallet selection changed. Authenticate again.");
      }
      function K(e, t) {
        if (!t.name || t.name.includes("/") || t.name.includes("\\"))
          throw Error("Invalid directory entry. Refresh this directory.");
        return W(e + "/" + t.name);
      }
      function J(e) {
        let t = W(e);
        if (!t.includes("/"))
          throw Error("Choose a file or folder inside Home or Shared.");
        return t;
      }
      async function Q(e) {
        return Array.from(
          new Uint8Array(
            await crypto.subtle.digest("SHA-256", new Uint8Array(e)),
          ),
          (e) => e.toString(16).padStart(2, "0"),
        ).join("");
      }
      async function Z(e) {
        if (
          !Number.isInteger(e.size) ||
          e.size < 0 ||
          e.size > 2097152 ||
          "string" != typeof e.data ||
          e.data.length > 4 * Math.ceil(699050.6666666666) ||
          !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            e.data,
          ) ||
          !/^[a-f0-9]{64}$/.test(e.sha256)
        )
          throw Error(
            "The computer returned an invalid file. Nothing was downloaded.",
          );
        let t = Uint8Array.from(atob(e.data), (e) => e.charCodeAt(0));
        if (t.length !== e.size)
          throw Error("The downloaded file size did not match.");
        if ((await Q(t)) !== e.sha256)
          throw Error(
            "The downloaded file failed its integrity check. Nothing was downloaded.",
          );
        return t;
      }
      function X({
        machine: e,
        wallet: t,
        enabled: n,
        refreshKey: a,
        onOpen: s,
        onDirectory: o,
      }) {
        let l = (0, b.useRef)(new AbortController()),
          c = (0, b.useRef)(!1),
          d = (0, b.useRef)("shared"),
          u = (0, b.useRef)(0),
          h = (0, b.useRef)(null),
          [p, m] = (0, b.useState)("shared"),
          [f, g] = (0, b.useState)([]),
          [v, x] = (0, b.useState)(!1),
          [j, y] = (0, b.useState)(!1),
          [k, S] = (0, b.useState)(""),
          [C, N] = (0, b.useState)(""),
          [E, A] = (0, b.useState)(null),
          [T, R] = (0, b.useState)(""),
          [$, I] = (0, b.useState)(""),
          [O, L] = (0, b.useState)(null),
          [M, D] = (0, b.useState)(""),
          [P, z] = (0, b.useState)(""),
          _ = (0, b.useCallback)(
            async (t, n, i) => {
              (i(), W(t));
              let r = ++u.current,
                a = await eX(
                  `machines/${e}/files`,
                  { action: "list", path: t },
                  n,
                );
              if ((i(), r === u.current)) {
                if (!Array.isArray(a.files))
                  throw Error("The computer returned an unreadable directory.");
                (g(a.files), x(!0), m(t), (d.current = t));
              }
            },
            [e],
          );
        async function U(e) {
          if (c.current || !n) return;
          let i = (0, r.EF)(),
            a = l.current.signal,
            s = () => {
              Y(t, i, (0, r.EF)(), a);
            };
          ((c.current = !0), y(!0), S(""), N(""));
          try {
            (s(), await e(a, s), s());
          } catch (e) {
            a.aborted ||
              S(
                e instanceof Error
                  ? e.message
                  : "File operation failed. Refresh before retrying; the operation may have reached the computer.",
              );
          } finally {
            ((c.current = !1), a.aborted || y(!1));
          }
        }
        async function F(e, t) {
          try {
            await _(d.current, e, t);
          } catch {
            (t(),
              N(
                (e) =>
                  e +
                  " Directory refresh failed; refresh it before another operation.",
              ));
          }
        }
        function q(e, t) {
          (L({ kind: e, entry: t, directory: p }),
            D(""),
            z(K(p, t)),
            S(""),
            N(""));
        }
        async function V(t, n) {
          if (!O) return;
          let i = (function (e, t, n) {
              let i = K(e, t);
              if (
                !["file", "directory"].includes(t.kind || "") ||
                "string" != typeof t.version ||
                !/^([a-f0-9]{64})$/.test(t.version)
              )
                throw Error(
                  "This entry cannot be changed. Refresh the directory before trying again.",
                );
              if (n !== i)
                throw Error(
                  "Type the exact path shown to confirm this operation.",
                );
              return { path: i, expectedVersion: t.version };
            })(O.directory, O.entry, M),
            r = "rename" === O.kind ? J(P) : null;
          if (r === i.path) throw Error("Choose a different destination path.");
          (await eX(
            `machines/${e}/files`,
            { action: O.kind, ...i, ...(r ? { destination: r } : {}) },
            t,
          ),
            n(),
            L(null),
            D(""),
            N(
              "delete" === O.kind
                ? "Removed from the computer."
                : "Moved on the computer.",
            ),
            await F(t, n));
        }
        return (
          (0, b.useEffect)(() => {
            o(p);
          }, [p, o]),
          (0, b.useEffect)(() => {
            let e = new AbortController();
            l.current = e;
            let i = !0,
              a = (0, r.EF)(),
              s = () => {
                Y(t, a, (0, r.EF)(), e.signal);
              };
            queueMicrotask(() => {
              i &&
                (y(!1),
                n &&
                  (async () => {
                    try {
                      (s(), await _(d.current, e.signal, s));
                    } catch (t) {
                      i &&
                        !e.signal.aborted &&
                        S(
                          t instanceof Error
                            ? t.message
                            : "Directory unavailable.",
                        );
                    }
                  })());
            });
            let o = (0, r.sq)(() => {
              (e.abort(),
                i &&
                  (g([]),
                  x(!1),
                  A(null),
                  R(""),
                  L(null),
                  I(""),
                  m("shared"),
                  (d.current = "shared"),
                  D(""),
                  z(""),
                  N(""),
                  S(
                    "Wallet selection changed. Authenticate again before accessing files.",
                  ),
                  h.current && (h.current.value = "")));
            });
            return () => {
              ((i = !1), e.abort(), o());
            };
          }, [e, t, n, _]),
          (0, b.useEffect)(() => {
            if (!n || c.current) return;
            let e = l.current.signal,
              i = (0, r.EF)();
            _(d.current, e, () => {
              Y(t, i, (0, r.EF)(), e);
            }).catch(() => {});
          }, [a, n, t, _]),
          (0, i.jsxs)("section", {
            className: "workspace-file-manager",
            "aria-label": "Computer file manager",
            children: [
              (0, i.jsxs)("header", {
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("h3", { children: "Files on this computer" }),
                      (0, i.jsx)("p", {
                        children:
                          "Home is private to your wallet. Shared is accessible to this coin’s holders.",
                      }),
                    ],
                  }),
                  (0, i.jsx)("span", {
                    children: j
                      ? "WORKING…"
                      : n
                        ? "CONNECTED"
                        : "REMOTE ACCESS PAUSED",
                  }),
                ],
              }),
              k &&
                (0, i.jsxs)("p", {
                  className: "read-error",
                  role: "alert",
                  children: [
                    k,
                    " If a file changed, refresh and review its latest version before retrying.",
                  ],
                }),
              C &&
                (0, i.jsx)("p", {
                  className: "developer-notice",
                  role: "status",
                  children: C,
                }),
              (0, i.jsxs)("nav", {
                className: "computer-actions",
                "aria-label": "File locations",
                children: [
                  (0, i.jsx)(w.$, {
                    variant: "outline",
                    disabled: !n || j,
                    "aria-pressed": "shared" === p,
                    onClick: () => void U((e, t) => _("shared", e, t)),
                    children: "Shared",
                  }),
                  (0, i.jsx)(w.$, {
                    variant: "outline",
                    disabled: !n || j,
                    "aria-pressed": "home" === p,
                    onClick: () => void U((e, t) => _("home", e, t)),
                    children: "Home",
                  }),
                  p.includes("/") &&
                    (0, i.jsx)(w.$, {
                      variant: "outline",
                      disabled: !n || j,
                      onClick: () =>
                        void U((e, t) =>
                          _(p.slice(0, p.lastIndexOf("/")), e, t),
                        ),
                      children: "Parent folder",
                    }),
                  (0, i.jsx)(w.$, {
                    variant: "outline",
                    disabled: !n || j,
                    onClick: () => void U((e, t) => _(p, e, t)),
                    children: "Refresh files",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "file-directory-caption",
                children: [
                  (0, i.jsxs)("code", { children: [p, "/"] }),
                  v &&
                    (0, i.jsxs)("small", {
                      children: [f.length, " entries \xb7 up to 500 shown"],
                    }),
                ],
              }),
              (0, i.jsx)("ul", {
                className: "managed-file-list",
                children: f.map((t) => {
                  let r = "";
                  try {
                    r = K(p, t);
                  } catch {}
                  let a =
                      !r ||
                      "blocked" === t.kind ||
                      !!(t.kind && !["file", "directory"].includes(t.kind)),
                    o =
                      !a &&
                      !!(
                        t.kind &&
                        t.version &&
                        /^[a-f0-9]{64}$/.test(t.version)
                      );
                  return (0, i.jsxs)(
                    "li",
                    {
                      children: [
                        (0, i.jsxs)("div", {
                          className: "managed-file-name",
                          children: [
                            (0, i.jsx)("span", {
                              "aria-hidden": "true",
                              children: t.directory ? "▸" : "\xb7",
                            }),
                            (0, i.jsx)("code", { children: t.name }),
                            (0, i.jsx)("small", {
                              children: a
                                ? "Unavailable"
                                : t.directory
                                  ? "Folder"
                                  : "number" == typeof t.size
                                    ? `${t.size.toLocaleString()} bytes`
                                    : "File",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "managed-file-actions",
                          children: [
                            t.directory
                              ? (0, i.jsx)(w.$, {
                                  variant: "outline",
                                  disabled: !n || j || a,
                                  onClick: () => void U((e, t) => _(r, e, t)),
                                  children: "Open folder",
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    (0, i.jsx)(w.$, {
                                      variant: "outline",
                                      disabled: !n || j || a,
                                      onClick: () => s(r),
                                      children: "Edit text",
                                    }),
                                    (0, i.jsx)(w.$, {
                                      variant: "outline",
                                      disabled:
                                        !n ||
                                        j ||
                                        a ||
                                        "file" !== t.kind ||
                                        ("number" == typeof t.size &&
                                          t.size > 2097152),
                                      onClick: () =>
                                        void U(async (n, i) => {
                                          let a = await eX(
                                            `machines/${e}/files`,
                                            { action: "download", path: r },
                                            n,
                                          );
                                          i();
                                          let s = await Z(a);
                                          i();
                                          let o = URL.createObjectURL(
                                              new Blob([new Uint8Array(s)], {
                                                type: "application/octet-stream",
                                              }),
                                            ),
                                            l = document.createElement("a");
                                          try {
                                            ((l.href = o),
                                              (l.download = t.name),
                                              l.click(),
                                              N(
                                                "Download prepared from the computer; its file hash was verified.",
                                              ));
                                          } finally {
                                            setTimeout(
                                              () => URL.revokeObjectURL(o),
                                              1e3,
                                            );
                                          }
                                        }),
                                      children: "Download",
                                    }),
                                  ],
                                }),
                            (0, i.jsx)(w.$, {
                              variant: "outline",
                              disabled: !n || j || !o,
                              onClick: () => q("rename", t),
                              children: "Rename / move",
                            }),
                            (0, i.jsx)(w.$, {
                              variant: "outline",
                              disabled: !n || j || !o,
                              onClick: () => q("delete", t),
                              children: "Delete",
                            }),
                          ],
                        }),
                      ],
                    },
                    t.name,
                  );
                }),
              }),
              v &&
                !f.length &&
                (0, i.jsx)("p", { children: "This folder is empty." }),
              !v &&
                (0, i.jsx)("p", {
                  role: "status",
                  children: n
                    ? "READING FILES…"
                    : "Authenticate your wallet and bring the computer online to read files.",
                }),
              O &&
                (0, i.jsxs)("section", {
                  className: "developer-dirty",
                  role: "alertdialog",
                  "aria-modal": "false",
                  "aria-label":
                    "delete" === O.kind
                      ? "Confirm file deletion"
                      : "Confirm move",
                  children: [
                    (0, i.jsx)("h4", {
                      children:
                        "delete" === O.kind
                          ? "Delete this exact entry?"
                          : "Rename or move this entry",
                    }),
                    (0, i.jsx)("p", {
                      children: (0, i.jsx)("code", {
                        children: K(O.directory, O.entry),
                      }),
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "delete" === O.kind
                          ? "This permanently removes the selected file or empty folder. Nonempty folders cannot be deleted here."
                          : "The destination must not already exist. Shared is a community location. Moving keeps existing file permissions; review access on the desktop before sharing private files.",
                        " The server checks that this entry has not changed since the directory was read.",
                      ],
                    }),
                    "rename" === O.kind &&
                      (0, i.jsxs)("label", {
                        children: [
                          "Destination path",
                          (0, i.jsx)("input", {
                            value: P,
                            onChange: (e) => z(e.target.value),
                            disabled: j,
                            maxLength: 999,
                          }),
                        ],
                      }),
                    (0, i.jsxs)("label", {
                      children: [
                        "Type the full source path to confirm",
                        (0, i.jsx)("input", {
                          value: M,
                          onChange: (e) => D(e.target.value),
                          autoComplete: "off",
                          spellCheck: !1,
                          disabled: j,
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "computer-actions",
                      children: [
                        (0, i.jsx)(w.$, {
                          disabled: !n || j || M !== K(O.directory, O.entry),
                          onClick: () => void U(V),
                          children:
                            "delete" === O.kind
                              ? "Delete entry"
                              : "Confirm move",
                        }),
                        (0, i.jsx)(w.$, {
                          variant: "outline",
                          disabled: j,
                          onClick: () => L(null),
                          children: "Cancel",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, i.jsxs)("div", {
                className: "file-transfer-tools",
                children: [
                  (0, i.jsxs)("form", {
                    onSubmit: (t) => {
                      (t.preventDefault(),
                        U(async (t, n) => {
                          let i = J($);
                          (await eX(
                            `machines/${e}/files`,
                            { action: "mkdir", path: i },
                            t,
                          ),
                            n(),
                            I(""),
                            N("Folder created on the computer."),
                            await F(t, n));
                        }));
                    },
                    children: [
                      (0, i.jsx)("h4", { children: "Create a folder" }),
                      (0, i.jsxs)("label", {
                        children: [
                          "Folder path",
                          (0, i.jsx)("input", {
                            value: $,
                            onChange: (e) => I(e.target.value),
                            placeholder: `${p}/project`,
                            disabled: !n || j,
                            maxLength: 999,
                          }),
                        ],
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        disabled: !n || j || !$,
                        children: "Create folder",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("form", {
                    onSubmit: (t) => {
                      (t.preventDefault(),
                        U(async (t, n) => {
                          if (!E || E.size > 2097152)
                            throw Error("Choose a file no larger than 2 MiB.");
                          let i = J(T),
                            r = new Uint8Array(await E.arrayBuffer());
                          n();
                          let a = await Q(r);
                          n();
                          let s = await eX(
                            `machines/${e}/files`,
                            {
                              action: "upload",
                              path: i,
                              data: (function (e) {
                                if (e.length > 2097152)
                                  throw Error(
                                    "Files must be 2 MiB or smaller.",
                                  );
                                let t = "";
                                for (let n = 0; n < e.length; n += 16384)
                                  t += String.fromCharCode(
                                    ...e.subarray(n, n + 16384),
                                  );
                                return btoa(t);
                              })(r),
                              expectedSha256: null,
                            },
                            t,
                          );
                          if ((n(), !s.saved || s.sha256 !== a))
                            throw Error(
                              "Upload could not be confirmed. Refresh the directory before retrying.",
                            );
                          (A(null),
                            R(""),
                            h.current && (h.current.value = ""),
                            N("File uploaded and its stored hash verified."),
                            await F(t, n));
                        }));
                    },
                    children: [
                      (0, i.jsx)("h4", { children: "Upload from your device" }),
                      (0, i.jsxs)("label", {
                        children: [
                          "Local file \xb7 up to 2 MiB",
                          (0, i.jsx)("input", {
                            ref: h,
                            type: "file",
                            disabled: !n || j,
                            onChange: (e) =>
                              (function (e) {
                                if ((A(e), S(""), !e)) return void R("");
                                try {
                                  if (e.size > 2097152)
                                    throw Error(
                                      "Choose a file no larger than 2 MiB.",
                                    );
                                  R(K(p, { name: e.name, directory: !1 }));
                                } catch (e) {
                                  (S(
                                    e instanceof Error
                                      ? e.message
                                      : "Invalid file.",
                                  ),
                                    R(""));
                                }
                              })(e.target.files?.[0] || null),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("label", {
                        children: [
                          "Save as",
                          (0, i.jsx)("input", {
                            value: T,
                            onChange: (e) => R(e.target.value),
                            disabled: !n || j || !E,
                            placeholder: `${p}/filename`,
                            maxLength: 999,
                          }),
                        ],
                      }),
                      (0, i.jsx)(w.$, {
                        disabled: !n || j || !E || E.size > 2097152 || !T,
                        children: "Upload file",
                      }),
                      (0, i.jsx)("small", {
                        children:
                          "Creates a new file. Existing files are never overwritten. Files in Shared can be read and changed by holders.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("small", {
                children:
                  "Local transfers are limited to 2 MiB per file. Edit text supports UTF-8 files up to 256 KiB. Larger files can be handled by software inside the computer.",
              }),
            ],
          })
        );
      }
      n(2407);
      let ee = {
        connection: {
          label: "CONNECTION INTERRUPTED",
          message:
            "The computer service is unavailable. Reconnect the directory before opening or saving files.",
        },
        unprovisioned: {
          label: "COMPUTER NOT RENTED",
          message:
            "This computer has not been rented yet. Its manager can rent it from Machine once funding and provider approval are ready. Files and code become available when it is online.",
        },
        offline: {
          label: "COMPUTER OFFLINE",
          message:
            "This computer is not online. Its manager needs to wake it or restore its connection before files and code are available.",
        },
        authentication: {
          label: "HOLDER SIGN-IN REQUIRED",
          message:
            "Connect your wallet and choose Sign in to computer above. Current holders can then open files, save code and use their own terminal session.",
        },
      };
      function et({
        machine: e,
        wallet: t,
        authenticatedWallet: n,
        enabled: r,
        accessMode: a = "holders",
        unavailableReason: s = "authentication",
        mode: o,
        onService: l,
      }) {
        let c,
          d,
          u =
            "authentication" === s && "wallet" === a
              ? {
                  label: "WALLET SIGN-IN REQUIRED",
                  message:
                    "Connect any wallet and choose Sign in to computer above. Token ownership is not required. Your Home stays private; Shared is for this coin.",
                }
              : ee[s],
          h = (0, b.useRef)(null),
          p = (0, b.useRef)(new AbortController()),
          m = (0, b.useRef)(!1),
          f = (0, b.useRef)(0),
          [g, v] = (0, b.useState)("shared"),
          [x, j] = (0, b.useState)([]),
          [y, k] = (0, b.useState)(!1),
          [S, C] = (0, b.useState)(""),
          [N, E] = (0, b.useState)("shared/"),
          [A, T] = (0, b.useState)(""),
          [R, $] = (0, b.useState)(null),
          [I, O] = (0, b.useState)(null),
          [L, M] = (0, b.useState)(!1),
          [F, Y] = (0, b.useState)(""),
          [K, J] = (0, b.useState)(""),
          [Q, Z] = (0, b.useState)(null),
          [en, ei] = (0, b.useState)(!1),
          [er, ea] = (0, b.useState)(""),
          [es, eo] = (0, b.useState)(!1),
          el = !!S && (null === R || A !== R),
          ec = new TextEncoder().encode(A).length,
          ed = !!t && n === t;
        ((0, b.useEffect)(() => {
          let n = !0;
          return (
            queueMicrotask(() => {
              var i;
              n &&
                eo(
                  !!(i = { machine: e, wallet: t, mode: o }).wallet &&
                    P.has(z(i)),
                );
            }),
            () => {
              n = !1;
            }
          );
        }, [e, t, o]),
          (0, b.useEffect)(() => {
            S &&
              !_(
                { machine: e, wallet: t, mode: o },
                { path: S, content: A, saved: R, savedSha256: I },
              ) &&
              queueMicrotask(() =>
                J(
                  "Recovery memory is full. Download this draft before changing wallets or leaving this editor.",
                ),
              );
          }, [e, t, o, S, A, R, I]),
          (0, b.useEffect)(() => {
            if (el)
              return (0, D.dV)(e + ":" + t + ":" + o, S, () =>
                U({ machine: e, wallet: t, mode: o }),
              );
          }, [el, e, t, o, S]));
        let eu = (0, b.useRef)(el);
        (0, b.useEffect)(() => {
          eu.current = el;
        }, [el]);
        let eh = (0, b.useCallback)(
          async (t, n) => {
            W(t);
            let i = ++f.current,
              r = await eX(
                `machines/${e}/files`,
                { action: "list", path: t },
                n,
              );
            (n.throwIfAborted(), i === f.current && (v(t), j(r.files), k(!0)));
          },
          [e],
        );
        async function ep(e) {
          if (m.current) return;
          if (!r)
            return void Y(
              "wallet" === a
                ? "Sign in with any wallet and bring this computer online first."
                : "Authenticate as a current holder and bring this computer online first.",
            );
          ((m.current = !0), M(!0), Y(""), J(""));
          let t = p.current.signal;
          try {
            return (await e(t), !0);
          } catch (e) {
            return (
              t.aborted ||
                Y(
                  e instanceof Error
                    ? e.message
                    : "Workspace operation failed.",
                ),
              !1
            );
          } finally {
            ((m.current = !1), t.aborted || M(!1));
          }
        }
        function em(e, t) {
          es && !S
            ? Y(
                "Restore or discard the saved recovery draft before opening another file.",
              )
            : el
              ? Z({ label: e, proceed: t })
              : t();
        }
        async function ef(n, i) {
          W(n);
          let r = await eX(
              `machines/${e}/files`,
              { action: "read", path: n },
              i,
            ),
            a = await B(r.content, r.sha256);
          (i.throwIfAborted(),
            U({ machine: e, wallet: t, mode: o }),
            eo(!1),
            C(n),
            E(n),
            T(r.content),
            $(r.content),
            O(a),
            J("Read from the computer."));
        }
        function eg(e) {
          em("Open another file?", () => void ep((t) => ef(e, t)));
        }
        async function ev(n) {
          let i = W(S);
          if (i.split("/").length < 2)
            throw Error("Choose a filename inside shared/ or home/.");
          if (ec > 262144)
            throw Error("The file exceeds the 256 KiB editor limit.");
          if (null !== R && null === I)
            throw Error(
              "Read this file again before saving; its version is unavailable.",
            );
          let r = await eX(
            `machines/${e}/files`,
            { action: "write", path: i, content: A, expectedSha256: I },
            n,
          );
          if ((n.throwIfAborted(), !r.saved))
            throw Error(
              "The computer did not confirm this save. Read the file before retrying.",
            );
          let a = await B(A, r.sha256);
          (n.throwIfAborted(),
            U({ machine: e, wallet: t, mode: o }),
            $(A),
            O(a),
            J("Saved on the computer."));
          try {
            await eh(i.slice(0, i.lastIndexOf("/")), n);
          } catch {}
        }
        function ex(e) {
          (ea(e), ei(!0));
        }
        ((0, b.useEffect)(() => {
          let e = new AbortController();
          return (
            (p.current = e),
            queueMicrotask(() => {
              e.signal.aborted || M(!1);
            }),
            queueMicrotask(() => {
              r &&
                !e.signal.aborted &&
                eh("shared", e.signal).catch((t) => {
                  e.signal.aborted ||
                    Y(
                      t instanceof Error ? t.message : "Directory unavailable.",
                    );
                });
            }),
            () => e.abort()
          );
        }, [e, t, r, eh]),
          (0, b.useEffect)(() => {
            Q &&
              h.current?.querySelector('[role="alertdialog"] button')?.focus();
          }, [Q]),
          (0, b.useEffect)(() => {
            if (!el) return;
            let e = (e) => {
              (e.preventDefault(), (e.returnValue = ""));
            };
            return (
              window.addEventListener("beforeunload", e),
              () => window.removeEventListener("beforeunload", e)
            );
          }, [el]),
          (0, b.useEffect)(() => {
            let e = h.current?.closest(".os-window"),
              t = (e) => {
                if (!eu.current) return;
                let t = e.detail;
                t?.close &&
                  (e.preventDefault(),
                  Z({ label: "Close this editor?", proceed: t.close }));
              };
            return (
              e?.addEventListener("coinputer:before-close", t),
              () => e?.removeEventListener("coinputer:before-close", t)
            );
          }, []));
        let eb =
          S &&
          (d =
            "Python" === (c = V(S))
              ? "python3"
              : "JavaScript" === c
                ? "node"
                : "Shell" === c
                  ? "bash"
                  : null)
            ? d + " -- " + q(S)
            : null;
        return (0, i.jsxs)("section", {
          className: "developer-workspace",
          ref: h,
          children: [
            (0, i.jsxs)("header", {
              className: "developer-heading",
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("small", {
                      children: "code" === o ? "CODE WORKSPACE" : "FILESYSTEM",
                    }),
                    (0, i.jsx)("h3", {
                      children:
                        "code" === o
                          ? "Build on your computer."
                          : "Your files, on a real disk.",
                    }),
                  ],
                }),
                (0, i.jsx)("span", {
                  children: r ? "WALLET SESSION" : u.label,
                }),
              ],
            }),
            (0, i.jsx)("p", {
              className: "computer-help",
              children:
                "Shared files belong to the community. Home is private to this wallet’s account. The editor reads and writes the actual computer.",
            }),
            !r &&
              (0, i.jsxs)("p", {
                role: "status",
                children: [
                  u.message,
                  S && " Your current draft remains available to download.",
                  " Unsaved recovery is kept only in this tab’s memory.",
                ],
              }),
            es &&
              !S &&
              (0, i.jsxs)("section", {
                className: "developer-dirty",
                "aria-label": "Unsaved draft recovery",
                children: [
                  (0, i.jsx)("p", {
                    children:
                      "This wallet has an unsaved draft for this editor in the current browser tab. Authenticate this wallet to recover it.",
                  }),
                  (0, i.jsxs)("div", {
                    className: "computer-actions",
                    children: [
                      (0, i.jsx)(w.$, {
                        disabled: !ed || L,
                        onClick: function () {
                          if (!ed) return;
                          let i = (function (e, t) {
                            if (!e.wallet || t !== e.wallet) return null;
                            let n = P.get(z(e));
                            return n ? { ...n } : null;
                          })({ machine: e, wallet: t, mode: o }, n);
                          i &&
                            (C(i.path),
                            E(i.path),
                            T(i.content),
                            $(i.saved),
                            O(i.savedSha256),
                            eo(!1),
                            J(
                              "Unsaved draft recovered from this browser tab. Review it, then save; no file was changed automatically.",
                            ));
                        },
                        children: "Restore unsaved draft",
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        disabled: !ed || L,
                        onClick: () => {
                          (U({ machine: e, wallet: t, mode: o }), eo(!1));
                        },
                        children: "Discard recovery draft",
                      }),
                    ],
                  }),
                ],
              }),
            F &&
              (0, i.jsx)("p", {
                role: "alert",
                className: "read-error",
                children: F,
              }),
            K &&
              (0, i.jsx)("p", {
                role: "status",
                className: "developer-notice",
                children: K,
              }),
            Q &&
              (0, i.jsxs)("section", {
                className: "developer-dirty",
                role: "alertdialog",
                "aria-modal": "false",
                "aria-labelledby": `dirty-${o}`,
                children: [
                  (0, i.jsx)("h4", { id: `dirty-${o}`, children: Q.label }),
                  (0, i.jsx)("p", {
                    children: "This file has unsaved changes.",
                  }),
                  (0, i.jsxs)("div", {
                    className: "computer-actions",
                    children: [
                      (0, i.jsx)(w.$, {
                        disabled: L || !r || ec > 262144,
                        onClick: () =>
                          void (async () => {
                            (await ep(ev)) && (Z(null), Q.proceed());
                          })(),
                        children: "Save & continue",
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        disabled: L,
                        onClick: () => {
                          (U({ machine: e, wallet: t, mode: o }),
                            Z(null),
                            Q.proceed());
                        },
                        children: "Discard draft & continue",
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        disabled: L,
                        onClick: () => Z(null),
                        children: "Keep editing",
                      }),
                    ],
                  }),
                ],
              }),
            (0, i.jsx)(i.Fragment, {
              children:
                "files" === o &&
                (0, i.jsx)(X, {
                  machine: e,
                  wallet: t,
                  enabled: r,
                  refreshKey: I || "",
                  onOpen: eg,
                  onDirectory: v,
                }),
            }),
            (0, i.jsxs)("div", {
              className: `developer-layout ${"files" === o ? "files-editor-layout" : ""}`,
              children: [
                "files" !== o &&
                  (0, i.jsxs)("aside", {
                    className: "developer-files",
                    "aria-label": "File browser",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "computer-actions",
                        children: [
                          (0, i.jsx)(w.$, {
                            size: "sm",
                            variant: "outline",
                            disabled: L || !r,
                            "aria-pressed": g.startsWith("shared"),
                            onClick: () => void ep((e) => eh("shared", e)),
                            children: "Shared",
                          }),
                          (0, i.jsx)(w.$, {
                            size: "sm",
                            variant: "outline",
                            disabled: L || !r,
                            "aria-pressed": g.startsWith("home"),
                            onClick: () => void ep((e) => eh("home", e)),
                            children: "Home",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "directory-location",
                        children: [
                          (0, i.jsxs)("code", { children: [g, "/"] }),
                          (0, i.jsx)("button", {
                            "aria-label": "Refresh directory",
                            disabled: L || !r,
                            onClick: () => void ep((e) => eh(g, e)),
                            children: "↻",
                          }),
                        ],
                      }),
                      g.includes("/") &&
                        (0, i.jsx)("button", {
                          disabled: L || !r,
                          onClick: () =>
                            void ep((e) =>
                              eh(g.slice(0, g.lastIndexOf("/")), e),
                            ),
                          children: "▴ Parent directory",
                        }),
                      (0, i.jsx)("ul", {
                        children: x.map((e) =>
                          (0, i.jsx)(
                            "li",
                            {
                              children: (0, i.jsxs)("button", {
                                disabled: L || !r,
                                title: e.name,
                                onClick: () =>
                                  e.directory
                                    ? void ep((t) => eh(`${g}/${e.name}`, t))
                                    : eg(`${g}/${e.name}`),
                                children: [
                                  (0, i.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: e.directory ? "▸" : "\xb7",
                                  }),
                                  e.name,
                                ],
                              }),
                            },
                            e.name,
                          ),
                        ),
                      }),
                      y &&
                        !x.length &&
                        (0, i.jsx)("p", {
                          children: "This directory is empty.",
                        }),
                      (0, i.jsx)("small", {
                        children: "Up to 500 entries per directory.",
                      }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: "developer-document",
                  children: [
                    (0, i.jsxs)("form", {
                      className: "developer-path",
                      onSubmit: (e) => {
                        (e.preventDefault(), eg(N));
                      },
                      children: [
                        (0, i.jsxs)("label", {
                          children: [
                            "File path",
                            (0, i.jsx)("input", {
                              value: N,
                              onChange: (e) => E(e.target.value),
                              disabled: L,
                              maxLength: 999,
                              placeholder: "shared/hello.py",
                            }),
                          ],
                        }),
                        (0, i.jsx)(w.$, {
                          variant: "outline",
                          disabled: L || !r,
                          children: "Open",
                        }),
                        (0, i.jsx)(w.$, {
                          variant: "outline",
                          type: "button",
                          disabled: L || !r,
                          onClick: function () {
                            em("Start a new file?", () => {
                              try {
                                let e = W(N);
                                if (e.split("/").length < 2)
                                  throw Error(
                                    "Enter a filename such as shared/hello.py.",
                                  );
                                (C(e),
                                  T(""),
                                  $(null),
                                  O(null),
                                  Y(""),
                                  J(
                                    "New draft. Save writes it to the computer.",
                                  ));
                              } catch (e) {
                                Y(
                                  e instanceof Error
                                    ? e.message
                                    : "Invalid path.",
                                );
                              }
                            });
                          },
                          children: "New file",
                        }),
                      ],
                    }),
                    S
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsxs)("div", {
                              className: "editor-caption",
                              children: [
                                (0, i.jsxs)("span", {
                                  children: [S, el ? " •" : ""],
                                }),
                                (0, i.jsxs)("small", {
                                  children: [
                                    V(S),
                                    " \xb7 ",
                                    ec.toLocaleString(),
                                    " / 262,144 bytes",
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)(G, {
                              value: A,
                              path: S,
                              disabled: L || !r || !!Q,
                              onChange: function (n) {
                                (T(n),
                                  _(
                                    { machine: e, wallet: t, mode: o },
                                    {
                                      path: S,
                                      content: n,
                                      saved: R,
                                      savedSha256: I,
                                    },
                                  ) ||
                                    J(
                                      "Recovery memory is full. Download this draft before changing wallets or leaving this editor.",
                                    ));
                              },
                              onSave: () => void ep(ev),
                            }),
                            (0, i.jsxs)("div", {
                              className: "computer-actions",
                              children: [
                                (0, i.jsx)(w.$, {
                                  disabled: !r || L || !el || ec > 262144,
                                  onClick: () => void ep(ev),
                                  children: L ? "WORKING…" : "Save file",
                                }),
                                (0, i.jsx)(w.$, {
                                  variant: "outline",
                                  disabled: L,
                                  onClick: function () {
                                    let e = new Blob([A], {
                                        type: "text/plain;charset=utf-8",
                                      }),
                                      t = URL.createObjectURL(e),
                                      n = document.createElement("a");
                                    ((n.href = t),
                                      (n.download =
                                        S.split("/").at(-1) || "draft.txt"),
                                      n.click(),
                                      setTimeout(
                                        () => URL.revokeObjectURL(t),
                                        1e3,
                                      ));
                                  },
                                  children: "Download draft",
                                }),
                                eb &&
                                  (0, i.jsx)(w.$, {
                                    variant: "outline",
                                    disabled: !r || L || el,
                                    onClick: () => ex(eb),
                                    children: "Open run console",
                                  }),
                              ],
                            }),
                            ec > 262144 &&
                              (0, i.jsx)("p", {
                                className: "read-error",
                                children:
                                  "This draft is too large to save. Download it before shortening it.",
                              }),
                            (0, i.jsx)("small", {
                              children:
                                "Ctrl / ⌘ + S saves. Tab inserts two spaces; Shift + Tab leaves the editor. Editor saves detect intervening editor changes. Terminal programs can also change files; coordinate shared work.",
                            }),
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className: "developer-empty",
                          children: [
                            (0, i.jsx)("span", { children: "</>" }),
                            (0, i.jsx)("p", {
                              children:
                                "Open a file, or enter a path and choose New file.",
                            }),
                            (0, i.jsx)("small", {
                              children:
                                "Python, JavaScript, shell scripts, websites and plain text.",
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("details", {
              className: "developer-tools",
              children: [
                (0, i.jsx)("summary", {
                  children: "Tools, projects & running software",
                }),
                (0, i.jsx)("p", {
                  children:
                    "Check the tools installed on this exact machine. The platform does not assume every runtime is available.",
                }),
                (0, i.jsxs)("div", {
                  className: "computer-actions",
                  children: [
                    (0, i.jsx)(w.$, {
                      variant: "outline",
                      disabled: !r,
                      onClick: () =>
                        ex(
                          'for tool in python3 node npm git bash; do if command -v "$tool" >/dev/null 2>&1; then "$tool" --version 2>&1 | head -n 1; else printf "%s: not installed\\n" "$tool"; fi; done',
                        ),
                      children: "Check installed tools in terminal",
                    }),
                    (0, i.jsx)(w.$, {
                      variant: "outline",
                      disabled: !r,
                      onClick: () => ex("mkdir -p -- " + q(g + "/my-project")),
                      children: "Create a project directory",
                    }),
                    (0, i.jsx)(w.$, {
                      variant: "outline",
                      disabled: !r,
                      onClick: () =>
                        l({
                          name: "Private website",
                          command:
                            'python3 -m http.server "$PORT" --bind "$HOST" --directory ' +
                            q(g),
                          port: "3000",
                        }),
                      children: "Review a local web service",
                    }),
                  ],
                }),
                (0, i.jsx)("p", {
                  children:
                    "Commands run as your wallet’s user, without root access. Install user-level tools in Home; keep credentials out of Shared. Terminal programs stop when their session closes. Use Services for software that should keep running while the computer is awake.",
                }),
                (0, i.jsx)("p", {
                  children:
                    "The web-service action prepares a command to serve the chosen directory. Review its contents before publishing: public hosting exposes those files. Nothing starts or publishes automatically.",
                }),
              ],
            }),
            en &&
              r &&
              (0, i.jsx)("div", {
                className: "developer-console",
                children: (0, i.jsx)(
                  H,
                  { machine: e, onError: Y, suggestedCommand: er },
                  `${e}:${t}`,
                ),
              }),
          ],
        });
      }
      function en({ machine: e, wallet: t, enabled: a, onChanged: s }) {
        let [o, l] = (0, b.useState)(null),
          [c, d] = (0, b.useState)(null),
          [u, h] = (0, b.useState)(null),
          [p, m] = (0, b.useState)("100"),
          [f, g] = (0, b.useState)(!1),
          [v, x] = (0, b.useState)(""),
          [j, y] = (0, b.useState)(!1),
          k = (0, b.useRef)(new AbortController()),
          S = `coinputer.pending-fees.${e}.${t}`;
        async function C() {
          let t = await eX(`machines/${e}/fees`, {}, k.current.signal);
          (l(t), t.pending && h(t.pending));
        }
        async function N(e) {
          (g(!0), x(""));
          try {
            await e();
          } catch (e) {
            k.current.signal.aborted ||
              x(e instanceof Error ? e.message : "Fee request failed.");
          } finally {
            g(!1);
          }
        }
        async function E(t) {
          if ("setup" === t && !/^\d{1,3}(\.\d{1,2})?$/.test(p))
            throw Error("Enter a percentage with at most two decimal places.");
          (d(
            await eX(
              `machines/${e}/prepare-fees`,
              { kind: t, shareBps: Math.round(100 * Number(p)) },
              k.current.signal,
            ),
          ),
            y(!1));
        }
        async function A() {
          if (!c || !a)
            throw Error("Authenticate and review this operation again.");
          let i = k.current.signal,
            { VersionedTransaction: s } = await Promise.resolve().then(
              n.bind(n, 3596),
            ),
            { encodeBase58: o } = await n.e(172).then(n.bind(n, 6172)),
            l = s.deserialize(
              Uint8Array.from(atob(c.transaction), (e) => e.charCodeAt(0)),
            ),
            u = Array.from(l.message.serialize()).join(","),
            p = await (0, r.b6)(t, l);
          if (
            (i.throwIfAborted(),
            u !== Array.from(p.message.serialize()).join(",") ||
              p.signatures.some((e) => e.every((e) => 0 === e)))
          )
            throw Error(
              "Wallet changed the reviewed transaction or did not sign it.",
            );
          let m = {
            id: c.id,
            transaction: btoa(String.fromCharCode(...p.serialize())),
            signature: o(p.signatures[0]),
          };
          (localStorage.setItem(S, JSON.stringify(m)),
            h(m),
            d(null),
            await eX(`machines/${e}/submit-fees`, m, i),
            x("Submitted. Keep this receipt until mainnet finalizes it."));
        }
        async function T() {
          if (!u) return;
          let t = await eX(
            `machines/${e}/check-fees`,
            { id: u.id },
            k.current.signal,
          );
          (["verified", "failed", "expired"].includes(t.status) &&
            (localStorage.removeItem(S), h(null), await C(), await s()),
            x(
              "verified" === t.status
                ? "0" === t.lamports
                  ? "Finalized. No SOL reached the treasury in this distribution."
                  : "Verified on mainnet. Any received SOL awaits actual USD settlement."
                : "pending" === t.status
                  ? "Still awaiting mainnet finalization. Retry only this same transaction."
                  : `Transaction ${t.status}. You can prepare a new review.`,
            ));
        }
        return ((0, b.useEffect)(() => {
          let e = new AbortController();
          k.current = e;
          let t = null;
          try {
            t = JSON.parse(localStorage.getItem(S) || "null");
          } catch {}
          return (
            queueMicrotask(() => {
              (h(
                t &&
                  "string" == typeof t.id &&
                  "string" == typeof t.transaction &&
                  "string" == typeof t.signature
                  ? t
                  : null,
              ),
                l(null),
                d(null));
            }),
            () => e.abort()
          );
        }, [S, a]),
        o?.operatorManaged && o.treasury && o.creator === o.treasury)
          ? (0, i.jsxs)("section", {
              className: "fee-routing",
              children: [
                (0, i.jsx)("h3", {
                  children: "Creator fees fund this computer",
                }),
                (0, i.jsx)("p", {
                  children:
                    "100% of the creator-fee portion belongs to this coin’s dedicated computer wallet. Pump.fun protocol fees are separate. The fee destination is assigned during launch.",
                }),
                (0, i.jsxs)("p", {
                  children: [
                    "Computer fee recipient: ",
                    (0, i.jsxs)("a", {
                      href: `https://solscan.io/account/${o.treasury}`,
                      target: "_blank",
                      rel: "noreferrer",
                      children: [
                        (0, i.jsx)("code", { children: o.treasury }),
                        " ↗",
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(w.$, {
                  variant: "outline",
                  disabled: !a || f,
                  onClick: () => void N(C),
                  children: "Refresh on-chain fee record",
                }),
                "B6rPZT6gajho3od77LiX6Cqbjyi4tGvTn1AuMJq7F4er" === t &&
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)("a", {
                      href: "/admin",
                      children: "Open owner fee controls ↗",
                    }),
                  }),
                v && (0, i.jsx)("p", { role: "status", children: v }),
                (0, i.jsx)("small", {
                  children:
                    "Available compute credit is shown in this computer’s balance.",
                }),
              ],
            })
          : (0, i.jsxs)("section", {
              className: "fee-routing",
              children: [
                (0, i.jsx)("h3", { children: "This coin’s creator fees" }),
                (0, i.jsx)("p", {
                  children:
                    "Read the current fee authority and recipients. Dedicated computer wallets are managed by Coinputer; older launches may require a creator-approved fee split. Compute credit follows recorded settlement.",
                }),
                (0, i.jsx)(w.$, {
                  variant: "outline",
                  disabled: !a || f,
                  onClick: () => void N(C),
                  children: "Read on-chain fee routing",
                }),
                o &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)("p", {
                        children: [
                          "Compute treasury: ",
                          (0, i.jsx)("code", {
                            children: o.treasury || "Not configured",
                          }),
                        ],
                      }),
                      o.shares.map((e) =>
                        (0, i.jsxs)(
                          "p",
                          {
                            children: [
                              e.shareBps / 100,
                              "% \xb7 ",
                              (0, i.jsx)("code", { children: e.address }),
                            ],
                          },
                          e.address,
                        ),
                      ),
                      o.editable &&
                        o.authority === t &&
                        (0, i.jsxs)("label", {
                          children: [
                            "Compute share (%)",
                            (0, i.jsx)("input", {
                              inputMode: "decimal",
                              value: p,
                              onChange: (e) => m(e.target.value),
                            }),
                          ],
                        }),
                      (0, i.jsxs)("div", {
                        className: "computer-actions",
                        children: [
                          o.editable &&
                            o.authority === t &&
                            (0, i.jsx)(w.$, {
                              disabled: !a || !o.treasury || f || !!u,
                              onClick: () => void N(() => E("setup")),
                              children: "Review permanent fee split",
                            }),
                          (0, i.jsx)(w.$, {
                            variant: "outline",
                            disabled:
                              !a || !o.treasury || o.editable || f || !!u,
                            onClick: () => void N(() => E("distribute")),
                            children: "Review fee distribution",
                          }),
                        ],
                      }),
                      o.editable &&
                        o.authority !== t &&
                        (0, i.jsx)("small", {
                          children:
                            "The current on-chain fee authority must configure the split.",
                        }),
                    ],
                  }),
                c &&
                  (0, i.jsxs)("div", {
                    className: "funding-review",
                    children: [
                      (0, i.jsxs)("b", {
                        children: ["REVIEW ", c.kind.toUpperCase()],
                      }),
                      (0, i.jsx)("p", { children: c.notice }),
                      c.shares.map((e) =>
                        (0, i.jsxs)(
                          "p",
                          {
                            children: [
                              e.shareBps / 100,
                              "% → ",
                              (0, i.jsx)("code", { children: e.address }),
                            ],
                          },
                          e.address,
                        ),
                      ),
                      (0, i.jsxs)("p", {
                        children: [
                          "Estimated network fee: ",
                          c.networkFeeLamports,
                          " lamports. New accounts may also require rent.",
                        ],
                      }),
                      "setup" === c.kind &&
                        (0, i.jsxs)("label", {
                          children: [
                            (0, i.jsx)("input", {
                              type: "checkbox",
                              checked: j,
                              onChange: (e) => y(e.target.checked),
                            }),
                            "I understand this permanently locks these recipients and percentages.",
                          ],
                        }),
                      (0, i.jsx)(w.$, {
                        disabled: f || !a || ("setup" === c.kind && !j),
                        onClick: () => void N(A),
                        children: "Approve in wallet",
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        onClick: () => d(null),
                        children: "Cancel",
                      }),
                    ],
                  }),
                u &&
                  (0, i.jsxs)("div", {
                    className: "funding-review",
                    children: [
                      (0, i.jsx)("a", {
                        href: `https://solscan.io/tx/${u.signature}`,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "View saved mainnet transaction ↗",
                      }),
                      (0, i.jsxs)("div", {
                        className: "computer-actions",
                        children: [
                          (0, i.jsx)(w.$, {
                            disabled: f || !a,
                            onClick: () => void N(T),
                            children: "Check confirmation",
                          }),
                          (0, i.jsx)(w.$, {
                            variant: "outline",
                            disabled: f || !a,
                            onClick: () =>
                              void N(async () => {
                                (await eX(
                                  `machines/${e}/submit-fees`,
                                  u,
                                  k.current.signal,
                                ),
                                  x("Resent the same signed transaction."));
                              }),
                            children: "Retry same transaction",
                          }),
                        ],
                      }),
                    ],
                  }),
                v && (0, i.jsx)("p", { role: "status", children: v }),
                (0, i.jsx)("small", {
                  children:
                    "For legacy creator-owned coins, these fee-split actions require your wallet approval and currently support SOL pairs.",
                }),
              ],
            });
      }
      var ei = n(626),
        er = n(6449),
        ea = n(4225),
        es = n(5745),
        eo = n(5660),
        el = n(9713),
        ec = n(7951),
        ed = n(299);
      let eu = {
          phase: "disconnected",
          message:
            "Enter your private desktop session to open applications and continue your work.",
        },
        eh = {
          browser: ei.A,
          terminal: er.A,
          files: ea.A,
          editor: es.A,
          shared: eo.A,
        };
      function ep({
        machine: e,
        name: t,
        wallet: a,
        access: s,
        capabilities: o,
        accessMode: l = "holders",
        automaticStart: c,
        connectRequested: d,
        sessionAuthorized: u,
        entryAction: h,
        scheduledSleepAt: p,
        continuousRuntime: m = !1,
        onWorkspace: y,
        onMachine: k,
      }) {
        var S;
        let C = (0, b.useRef)(null),
          N = (0, b.useRef)(null),
          E = (0, b.useRef)(null),
          [A, T] = (0, b.useState)(eu),
          [R, $] = (0, b.useState)(0),
          [I, O] = (0, b.useState)(!0),
          [L, M] = (0, b.useState)(""),
          [P, z] = (0, b.useState)(null),
          [_, U] = (0, b.useState)(null),
          [F, W] = (0, b.useState)(!1),
          q = (0, b.useRef)(null),
          V = (0, b.useRef)(null),
          B = (0, b.useRef)(d),
          G = (0, b.useRef)(!1),
          H =
            ((S = A.phase),
            ("connection" === s || "session-check" === s) &&
            "connected" === S &&
            u
              ? null
              : s),
          Y =
            null === H && ("connecting" === A.phase || "connected" === A.phase),
          K = null === H && "connected" === A.phase,
          J = (function (e) {
            if (!e) return [];
            let t = [],
              n = (e, n, i) => {
                "number" == typeof n &&
                  Number.isFinite(n) &&
                  n > 0 &&
                  t.push({ label: e, value: i(n) });
              };
            return (
              n("Concurrent desktops", e.maxSessions, (e) => String(e)),
              n(
                "Session limit",
                e.sessionSeconds,
                (e) => `${Math.floor(e / 60)} min`,
              ),
              n(
                "Desktop memory",
                e.memoryBytes,
                (e) =>
                  `${(e / 0x40000000).toLocaleString(void 0, { maximumFractionDigits: 2 })} GiB`,
              ),
              n(
                "Shared application memory",
                e.tenantMemoryBytes,
                (e) =>
                  `${(e / 0x40000000).toLocaleString(void 0, { maximumFractionDigits: 2 })} GiB`,
              ),
              n("Desktop CPU limit", e.cpuPercent, (e) => `${e}% of one CPU`),
              Number.isSafeInteger(e.tasksMax) &&
                n("Desktop process/thread limit", e.tasksMax, String),
              Number.isSafeInteger(e.tenantTasksMax) &&
                n("Shared process/thread limit", e.tenantTasksMax, String),
              t
            );
          })(o),
          Q =
            "authentication" === H && "wallet" === l
              ? {
                  label: "WALLET SIGN-IN REQUIRED",
                  message:
                    "Connect any wallet and sign in to use this computer. Token ownership is not required. Your Home stays private; Shared is for this coin.",
                }
              : H
                ? v[H]
                : null,
          Z = (0, b.useRef)(Y);
        (0, b.useEffect)(() => {
          Z.current = Y;
        }, [Y]);
        let X = (0, b.useCallback)(() => {
          (q.current?.abort(),
            (q.current = null),
            (G.current = !1),
            U(null),
            $(0),
            E.current?.dispose(),
            (E.current = null),
            T({
              phase: "disconnected",
              message:
                "You ended this desktop session. Saved files remain on the computer.",
            }),
            z(null));
        }, []);
        function ee() {
          (z(null), V.current?.focus());
        }
        async function et(t) {
          if (!K || null !== s || o?.appLauncherVersion !== 1 || q.current)
            return;
          let n = new AbortController(),
            i = E.current;
          ((q.current = n), U(t), M(""));
          try {
            let s = await g({
              app: t,
              launcherVersion: o.appLauncherVersion,
              wallet: a,
              readWallet: r.EF,
              signal: n.signal,
              request: (t, n) => eX(`machines/${e}/desktop-app`, t, n),
            });
            n.signal.aborted || E.current !== i || M(s);
          } catch (t) {
            let e;
            n.signal.aborted ||
              E.current !== i ||
              M(
                401 ===
                  (e =
                    "object" == typeof t && null !== t && "status" in t
                      ? t.status
                      : null) || 403 === e
                  ? "Your session could not authorize this application. Check your wallet sign-in and computer access."
                  : 429 === e
                    ? "Please wait a moment before opening another application."
                    : 409 === e || 503 === e
                      ? "This desktop cannot open an application right now. Reconnect and try again; its operator may need to update the desktop runtime."
                      : "The application launch could not be confirmed. Check the desktop screen before trying again.",
              );
          } finally {
            q.current === n && ((q.current = null), U(null));
          }
        }
        async function en() {
          try {
            document.fullscreenElement === C.current
              ? await document.exitFullscreen()
              : C.current?.requestFullscreen
                ? await C.current.requestFullscreen()
                : M(
                    "Fullscreen is not supported here. Maximize this window or use your browser’s fullscreen control.",
                  );
          } catch {
            M(
              "Fullscreen was not available. You can still use this maximized desktop window.",
            );
          }
        }
        async function ei(e) {
          try {
            (document.fullscreenElement === C.current &&
              (await document.exitFullscreen()),
              e());
          } catch {
            M(
              "Exit fullscreen to use the wallet or other workspace tools. Your desktop is still open.",
            );
          }
        }
        return (
          (0, b.useEffect)(() => {
            B.current = d;
            let e = !0;
            return (
              queueMicrotask(() => {
                e && (d ? $((e) => e || 1) : E.current || G.current || $(0));
              }),
              () => {
                e = !1;
              }
            );
          }, [d]),
          (0, b.useEffect)(() => {
            if (
              null !== H ||
              !N.current ||
              0 === R ||
              (!B.current && !G.current)
            )
              return;
            G.current = !1;
            let t = new AbortController(),
              i = !0,
              s = (function (e) {
                let t = e.readWallet(),
                  n = !1,
                  i = !1,
                  r = !1,
                  a = null,
                  s = null,
                  o,
                  l,
                  c = [],
                  d = () => {
                    e.signal.throwIfAborted();
                    let i = e.readWallet();
                    if (
                      n ||
                      !t ||
                      t.address !== e.wallet ||
                      i?.address !== e.wallet ||
                      i.revision !== t.revision
                    )
                      throw Error("Wallet changed.");
                  },
                  u = (t) => {
                    n || e.state(t);
                  };
                function h() {
                  for (let e of ((r = !1), clearTimeout(o), c.splice(0))) e();
                  try {
                    (a?.blur(), a?.disconnect());
                  } catch {}
                  try {
                    s?.close();
                  } catch {}
                  ((a = null), (s = null), e.host.replaceChildren());
                }
                function p() {
                  n ||
                    ((n = !0), h(), e.signal.removeEventListener("abort", p));
                }
                function m(e, t, n) {
                  (e.addEventListener(t, n),
                    c.push(() => e.removeEventListener(t, n)));
                }
                function f(e) {
                  (h(), u({ phase: "error", message: e }));
                }
                return (
                  e.signal.addEventListener("abort", p, { once: !0 }),
                  {
                    start: async function () {
                      if (!i && !n) {
                        ((i = !0),
                          u({
                            phase: "connecting",
                            message: "Starting your private desktop...",
                          }));
                        try {
                          d();
                          let t = await e.load();
                          d();
                          let n = await e.ticket(e.signal);
                          d();
                          let i = (function (e) {
                            let t = new URL(e.url);
                            if (
                              "wss:" !== t.protocol ||
                              "/desktop" !== t.pathname ||
                              t.username ||
                              t.password ||
                              t.search ||
                              t.hash ||
                              !t.hostname ||
                              !/^[a-zA-Z0-9_-]{20,256}$/.test(e.ticket)
                            )
                              throw Error("Invalid desktop connection.");
                            if (
                              e.expiresAt &&
                              (!Number.isFinite(Date.parse(e.expiresAt)) ||
                                Date.parse(e.expiresAt) <= Date.now())
                            )
                              throw Error("Desktop connection expired.");
                            return {
                              url: t.toString(),
                              protocols: ["binary", "ticket." + e.ticket],
                            };
                          })(n);
                          ((s = e.socket(i.url, i.protocols)),
                            m(s, "close", (e) => {
                              ((l = e.code),
                                h(),
                                u({ phase: "disconnected", message: x(l) }));
                            }),
                            ((a = new t(e.host, s, {
                              shared: !1,
                            })).scaleViewport = !0),
                            (a.resizeSession = !1),
                            (a.clipViewport = !1),
                            (a.qualityLevel = 6),
                            (a.compressionLevel = 6),
                            (a.background = "#060b08"),
                            (a.focusOnClick = !0),
                            m(a, "connect", () => {
                              try {
                                (d(),
                                  (r = !0),
                                  clearTimeout(o),
                                  u({
                                    phase: "connected",
                                    message: "Your desktop is connected.",
                                  }));
                              } catch {
                                f(
                                  "Wallet changed. Authenticate the current wallet before opening another desktop.",
                                );
                              }
                            }),
                            m(a, "disconnect", () => {
                              (h(),
                                u({
                                  phase: "disconnected",
                                  message: x(l || 1006),
                                }));
                            }),
                            m(a, "credentialsrequired", () =>
                              f(
                                "The desktop requested an unexpected password. Its operator must repair the authenticated connection.",
                              ),
                            ),
                            m(a, "securityfailure", () =>
                              f(
                                "The desktop security handshake failed. Its operator must check the desktop runtime.",
                              ),
                            ),
                            (o = setTimeout(
                              () =>
                                f(
                                  "The desktop did not finish starting. Check Machine, then reconnect.",
                                ),
                              6e4,
                            )));
                        } catch (t) {
                          n ||
                            e.signal.aborted ||
                            f(
                              (function (e) {
                                let t =
                                  "object" == typeof e &&
                                  null !== e &&
                                  "status" in e
                                    ? e.status
                                    : null;
                                if (401 === t)
                                  return "Your wallet session expired. Authenticate this wallet again before reconnecting.";
                                if (403 === t)
                                  return "Desktop access was denied. Authenticate a wallet that currently holds this coin.";
                                if (409 === t) {
                                  let t = e instanceof Error ? e.message : "";
                                  return "This computer already has an active desktop session." ===
                                    t || "Desktop is already in use." === t
                                    ? "A desktop is already active on this computer. Close the other session before reconnecting."
                                    : "The computer or its desktop is not ready for a new session. Check its current state in Machine, then try again.";
                                }
                                return 429 === t
                                  ? "Too many connection requests. Wait briefly before trying again."
                                  : 503 === t
                                    ? "The computer or its desktop is unavailable. Check Machine before reconnecting."
                                    : "The desktop could not connect. Check the computer and your wallet session, then try again.";
                              })(t),
                            );
                        }
                      }
                    },
                    dispose: p,
                    blur() {
                      if (r && a)
                        for (let [e, t] of [
                          [65507, "ControlLeft"],
                          [65508, "ControlRight"],
                          [65513, "AltLeft"],
                          [65514, "AltRight"],
                          [65505, "ShiftLeft"],
                          [65506, "ShiftRight"],
                          [65515, "MetaLeft"],
                          [65516, "MetaRight"],
                        ])
                          a.sendKey(e, t, !1);
                      a?.blur();
                    },
                    focus() {
                      (d(), r && a?.focus());
                    },
                    scale(e) {
                      a && ((a.scaleViewport = e), (a.clipViewport = !1));
                    },
                  }
                );
              })({
                host: N.current,
                wallet: a,
                readWallet: r.EF,
                signal: t.signal,
                load: async () =>
                  (await n.e(887).then(n.bind(n, 7887))).default,
                ticket: (t) => eX(`machines/${e}/desktop-ticket`, {}, t),
                socket: (e, t) => new WebSocket(e, t),
                state: (e) => {
                  i &&
                    (T(e),
                    "connected" !== e.phase && M(""),
                    ("disconnected" === e.phase || "error" === e.phase) &&
                      $(0));
                },
              });
            E.current = s;
            let o = (0, r.sq)(() => {
                (s.dispose(),
                  q.current?.abort(),
                  i &&
                    ($(0),
                    T({
                      phase: "error",
                      message:
                        "Wallet selection changed. Authenticate the current wallet before reconnecting.",
                    }),
                    z(null)));
              }),
              l = () => s.blur();
            window.addEventListener("blur", l);
            let c = (e) => {
              "Escape" === e.code &&
                e.ctrlKey &&
                e.altKey &&
                N.current?.contains(document.activeElement) &&
                (e.preventDefault(),
                e.stopImmediatePropagation(),
                s.blur(),
                C.current?.querySelector("[data-release-keyboard]")?.focus(),
                M(
                  "Keyboard released. Click the desktop screen to control it again.",
                ));
            };
            document.addEventListener("keydown", c, !0);
            let d = () => {
              document.hidden && s.blur();
            };
            document.addEventListener("visibilitychange", d);
            let u = () => {
              (s.dispose(),
                i &&
                  ($(0),
                  T({
                    phase: "disconnected",
                    message:
                      "Your network connection is offline. Reconnect after your connection returns.",
                  })));
            };
            return (
              window.addEventListener("offline", u),
              queueMicrotask(() => {
                i && s.start();
              }),
              () => {
                ((i = !1),
                  t.abort(),
                  s.dispose(),
                  o(),
                  window.removeEventListener("blur", l),
                  document.removeEventListener("keydown", c, !0),
                  window.removeEventListener("offline", u),
                  document.removeEventListener("visibilitychange", d),
                  E.current === s && (E.current = null));
              }
            );
          }, [e, a, H, R]),
          (0, b.useEffect)(() => {
            E.current?.scale(I);
          }, [I, A.phase]),
          (0, b.useEffect)(() => {
            let e = () =>
              W(!!C.current && document.fullscreenElement === C.current);
            return (
              document.addEventListener("fullscreenchange", e),
              () => document.removeEventListener("fullscreenchange", e)
            );
          }, []),
          (0, b.useEffect)(
            () => () => {
              q.current?.abort();
            },
            [e, a, s, K],
          ),
          (0, b.useEffect)(() => {
            if (!Y) return;
            let n = (0, D.Oj)(e + ":" + a, t + " — desktop", X),
              i = (e) => {
                (e.preventDefault(), (e.returnValue = ""));
              };
            return (
              window.addEventListener("beforeunload", i),
              () => {
                (n(), window.removeEventListener("beforeunload", i));
              }
            );
          }, [Y, e, a, t, X]),
          (0, b.useEffect)(() => {
            let e = C.current?.closest(".os-window"),
              t = (e) => {
                if (!Z.current) return;
                let t = e.detail;
                t?.close && (e.preventDefault(), z({ after: t.close }));
              };
            return (
              e?.addEventListener("coinputer:before-close", t),
              () => e?.removeEventListener("coinputer:before-close", t)
            );
          }, []),
          (0, b.useEffect)(() => {
            P &&
              ((V.current =
                document.activeElement instanceof HTMLElement
                  ? document.activeElement
                  : null),
              C.current?.querySelector("[data-keep-working]")?.focus());
          }, [P]),
          (0, i.jsxs)("section", {
            className: "remote-desktop",
            ref: C,
            "data-connected": K,
            children: [
              (0, i.jsxs)("header", {
                className: "remote-desktop-heading",
                children: [
                  (0, i.jsxs)("span", {
                    children: [
                      (0, i.jsx)(j.md, { live: K, busy: Y && !K }),
                      H
                        ? Q?.label
                        : K
                          ? "CONNECTED"
                          : "connecting" === A.phase
                            ? "STARTING YOUR DESKTOP"
                            : "DESKTOP",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "remote-display-controls",
                    children: [
                      k &&
                        (0, i.jsx)(w.$, {
                          variant: "ghost",
                          onClick: () => void ei(k),
                          children: "Computer details",
                        }),
                      K &&
                        (0, i.jsx)(w.$, {
                          variant: "outline",
                          "aria-pressed": !I,
                          onClick: () => O((e) => !e),
                          children: I ? "Actual size" : "Fit to window",
                        }),
                      (0, i.jsxs)(w.$, {
                        variant: "outline",
                        className: "remote-fullscreen-button",
                        "aria-pressed": F,
                        onClick: () => void en(),
                        children: [
                          F
                            ? (0, i.jsx)(el.A, { size: 15 })
                            : (0, i.jsx)(ec.A, { size: 15 }),
                          " ",
                          F ? "Exit fullscreen" : "Fullscreen",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              "connection" === s &&
                K &&
                (0, i.jsx)("p", {
                  className: "remote-desktop-status",
                  role: "status",
                  children:
                    "Directory connection interrupted. Your authenticated desktop remains connected. New desktop connections are paused until the computer service reconnects.",
                }),
              "session-check" === s &&
                K &&
                (0, i.jsx)("p", {
                  className: "remote-desktop-status",
                  role: "status",
                  children:
                    "Wallet session check unavailable. This existing desktop remains connected while its server checks access. New connections are paused until the session can be verified again.",
                }),
              H
                ? (0, i.jsxs)("div", {
                    className: "remote-desktop-empty",
                    role: "status",
                    children: [
                      (0, i.jsx)(ed.A, { size: 38, "aria-hidden": "true" }),
                      (0, i.jsxs)("span", {
                        className: "eyebrow",
                        children: [t, " / DESKTOP"],
                      }),
                      (0, i.jsx)("h3", {
                        children:
                          "unprovisioned" === H && c?.enrolled
                            ? "Your computer is queued to start."
                            : "sleeping" === H
                              ? "Your computer is sleeping."
                              : "waking" === H
                                ? "Bringing your computer back."
                                : "provisioning" === H
                                  ? "Preparing your computer."
                                  : "saving" === H
                                    ? "Saving your computer."
                                    : "Your computer is right here.",
                      }),
                      (0, i.jsx)("p", {
                        children:
                          "sleeping" === H
                            ? "Your saved files and settings are preserved. The computer’s manager can review funding and wake it."
                            : "waking" === H
                              ? "Restoring the saved disk and starting the desktop. This screen will update when it is ready."
                              : "provisioning" === H
                                ? "Installing the real desktop and connecting it securely."
                                : "saving" === H
                                  ? "Preserving saved files before the computer goes to sleep."
                                  : "Open applications, browse the web, write code and explore your files.",
                      }),
                      h
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsxs)(w.$, {
                                className: "remote-primary-action",
                                disabled: h.disabled,
                                onClick: () => void ei(h.onClick),
                                children: [
                                  h.label,
                                  (0, i.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: " →",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("p", {
                                className: "remote-entry-help",
                                children: h.help,
                              }),
                              h.error &&
                                (0, i.jsx)("p", {
                                  className: "read-error",
                                  role: "alert",
                                  children: h.error,
                                }),
                            ],
                          })
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("p", { children: Q?.message }),
                              k &&
                                (0, i.jsx)(w.$, {
                                  variant: "outline",
                                  onClick: () => void ei(k),
                                  children: "View computer & next action",
                                }),
                            ],
                          }),
                      (0, i.jsxs)("div", {
                        className: "remote-folder-guide",
                        children: [
                          (0, i.jsxs)("span", {
                            children: [
                              (0, i.jsx)(ea.A, {
                                size: 15,
                                "aria-hidden": "true",
                              }),
                              (0, i.jsx)("b", { children: "Home" }),
                              " Yours only",
                            ],
                          }),
                          (0, i.jsxs)("span", {
                            children: [
                              (0, i.jsx)(eo.A, {
                                size: 15,
                                "aria-hidden": "true",
                              }),
                              (0, i.jsx)("b", { children: "Shared" }),
                              " Your community",
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      !K &&
                        (0, i.jsxs)("div", {
                          className: "remote-connecting-state",
                          children: [
                            (0, i.jsx)(ed.A, {
                              size: 32,
                              "aria-hidden": "true",
                            }),
                            (0, i.jsx)("h3", {
                              children: Y
                                ? "Opening your desktop…"
                                : "Your desktop",
                            }),
                            (0, i.jsx)("p", {
                              className: "remote-desktop-status",
                              role: "error" === A.phase ? "alert" : "status",
                              children: A.message,
                            }),
                            (0, i.jsxs)("div", {
                              className: "remote-entry-controls",
                              children: [
                                (0, i.jsx)(w.$, {
                                  disabled: Y,
                                  onClick: () => {
                                    ((G.current = !0), M(""), $((e) => e + 1));
                                  },
                                  children: Y
                                    ? "Starting your desktop…"
                                    : A === eu
                                      ? "Enter computer"
                                      : "Reconnect desktop",
                                }),
                                Y &&
                                  (0, i.jsx)(w.$, {
                                    variant: "outline",
                                    onClick: () => z({}),
                                    children: "Cancel connection",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      K &&
                        (0, i.jsx)("nav", {
                          className: "remote-app-launcher",
                          "aria-label": "Open a desktop application",
                          children: f.map((e) => {
                            let t = eh[e.id];
                            return (0, i.jsxs)(
                              w.$,
                              {
                                variant: "outline",
                                disabled:
                                  null !== s ||
                                  o?.appLauncherVersion !== 1 ||
                                  !!_,
                                title: e.description,
                                onClick: () => void et(e.id),
                                children: [
                                  (0, i.jsx)(t, {
                                    size: 18,
                                    "aria-hidden": "true",
                                  }),
                                  (0, i.jsx)("span", {
                                    children: _ === e.id ? "Opening…" : e.label,
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        }),
                      K &&
                        o?.appLauncherVersion !== 1 &&
                        (0, i.jsx)("p", {
                          className: "remote-desktop-status",
                          children:
                            "Open applications from the desktop Applications menu. These shortcuts become available after the operator updates this computer’s desktop runtime.",
                        }),
                      P &&
                        (0, i.jsxs)("section", {
                          className: "developer-dirty",
                          role: "alertdialog",
                          "aria-modal": "false",
                          "aria-labelledby": "desktop-close-title",
                          onKeyDown: (e) => {
                            "Escape" === e.key && (e.preventDefault(), ee());
                          },
                          children: [
                            (0, i.jsx)("h4", {
                              id: "desktop-close-title",
                              children: "End this desktop session?",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Save your work inside desktop applications first. Ending the session closes its graphical applications. Saved files stay on disk; unsaved changes will be lost.",
                            }),
                            (0, i.jsxs)("div", {
                              className: "computer-actions",
                              children: [
                                (0, i.jsx)(w.$, {
                                  "data-keep-working": !0,
                                  onClick: ee,
                                  children: "Keep working",
                                }),
                                (0, i.jsx)(w.$, {
                                  variant: "outline",
                                  onClick: () => {
                                    let e = P.after;
                                    (X(), e?.());
                                  },
                                  children: "End session",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
              (0, i.jsx)("div", {
                ref: N,
                className: `remote-desktop-screen ${I ? "fit-screen" : "actual-screen"}`,
                hidden: !!H || !K,
                "aria-label": "Interactive remote desktop",
              }),
              L &&
                (0, i.jsx)("p", {
                  className: "remote-desktop-status",
                  role: "status",
                  children: L,
                }),
              p &&
                Number.isFinite(Date.parse(p)) &&
                (0, i.jsxs)("p", {
                  className: "remote-sleep-notice",
                  children: [
                    m
                      ? "Automatic runtime renewal \xb7 next funding check"
                      : "Scheduled sleep",
                    " \xb7 ",
                    new Date(p).toLocaleString(),
                    ". ",
                    m
                      ? "Continues while credit and spending limits cover operation."
                      : "Save open work before then.",
                  ],
                }),
              K &&
                (0, i.jsxs)("footer", {
                  className: "remote-session-bar",
                  children: [
                    (0, i.jsx)("span", {
                      children: "Home is private \xb7 Shared is for this coin",
                    }),
                    (0, i.jsx)(w.$, {
                      "data-release-keyboard": !0,
                      "aria-keyshortcuts": "Control+Alt+Escape",
                      variant: "outline",
                      disabled: !K,
                      onClick: () => {
                        (E.current?.blur(),
                          M(
                            "Keyboard released. Click the desktop screen to control it again.",
                          ));
                      },
                      children: "Release keyboard",
                    }),
                    (0, i.jsx)(w.$, {
                      variant: "outline",
                      onClick: () => z({}),
                      children: "End session",
                    }),
                  ],
                }),
              (0, i.jsxs)("details", {
                className: "remote-desktop-limits",
                children: [
                  (0, i.jsx)("summary", {
                    children: "Keyboard, files & session limits",
                  }),
                  (0, i.jsxs)("div", {
                    className: "remote-keyboard-controls",
                    children: [
                      (0, i.jsx)(w.$, {
                        "data-focus-desktop": !0,
                        variant: "outline",
                        disabled: !K,
                        onClick: () => {
                          try {
                            (E.current?.focus(),
                              M(
                                "Keyboard controls the desktop. Press Ctrl + Alt + Escape to return to this page.",
                              ));
                          } catch {
                            M(
                              "The wallet selection changed. Check your session before reconnecting.",
                            );
                          }
                        },
                        children: "Use desktop keyboard",
                      }),
                      (0, i.jsx)("small", {
                        children: "Ctrl + Alt + Escape returns to this page.",
                      }),
                    ],
                  }),
                  J.length
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("dl", {
                            className: "remote-desktop-specs",
                            children: J.map((e) =>
                              (0, i.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, i.jsx)("dt", { children: e.label }),
                                    (0, i.jsx)("dd", { children: e.value }),
                                  ],
                                },
                                e.label,
                              ),
                            ),
                          }),
                          (0, i.jsx)("p", {
                            children:
                              "These are the limits reported by this server. Large browser tabs or builds can reach them.",
                          }),
                        ],
                      })
                    : (0, i.jsx)("p", {
                        children:
                          "The server applies session and memory limits. Its current desktop limits are not available; read the Machine record again before connecting.",
                      }),
                  (0, i.jsx)("p", {
                    children:
                      "Home and browser preferences are private to your wallet. Shared is the community folder. Save work before ending a session; files and preferences remain for your next visit.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Clipboard sharing is off. Use Code or Files to transfer text and files.",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "The desktop ",
                      o?.width && o?.height
                        ? `is ${o.width} \xd7 ${o.height} pixels`
                        : "uses the server’s fixed screen size",
                      ". Resize window and Fullscreen change your view without restarting the desktop. Fit to window scales the screen; Actual size lets you scroll at its original resolution. On phones, use landscape or fullscreen for more room; text input currently requires a physical keyboard.",
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Click the desktop screen or choose Use desktop keyboard to send keyboard input to the desktop. Release keyboard or Ctrl + Alt + Escape returns control to this page. Minimize this window to keep the session open. Closing it, leaving the computer, disconnecting your wallet, or losing the connection ends the session. Saved files stay; unsaved application changes do not. Root access is not provided.",
                  }),
                  (0, i.jsx)(w.$, {
                    variant: "outline",
                    onClick: () => void ei(y),
                    children: "Open Code workspace",
                  }),
                  (0, i.jsx)("small", {
                    children:
                      "Code, Files and Terminal also provide text-based controls outside the graphical desktop.",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var em = n(1992);
      function ef({ machine: e, services: t, enabled: n }) {
        let [r, a] = (0, b.useState)(t[0]?.id || ""),
          [s, o] = (0, b.useState)("/"),
          [l, c] = (0, b.useState)(""),
          [d, u] = (0, b.useState)(""),
          [h, p] = (0, b.useState)("preview"),
          [m, f] = (0, b.useState)(""),
          [g, v] = (0, b.useState)(!1),
          [x, j] = (0, b.useState)(""),
          y = (0, b.useRef)(new AbortController());
        async function k() {
          let t = y.current.signal;
          (v(!0), j(""));
          try {
            let n = await eX(`machines/${e}/service`, { id: r, path: s }, t);
            t.throwIfAborted();
            let i = new TextDecoder().decode(
              Uint8Array.from(atob(n.body), (e) => e.charCodeAt(0)),
            );
            if (!/^(text\/|application\/json)/i.test(n.contentType))
              throw Error(
                "This response is a binary file. Open the published application to use it.",
              );
            (c(i), f(`HTTP ${n.status} \xb7 ${n.contentType}`));
            let a = n.contentType.toLowerCase().startsWith("text/html")
              ? em.A.sanitize(i, {
                  ALLOWED_TAGS: [
                    "div",
                    "span",
                    "p",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "ul",
                    "ol",
                    "li",
                    "table",
                    "thead",
                    "tbody",
                    "tr",
                    "th",
                    "td",
                    "pre",
                    "code",
                    "b",
                    "strong",
                    "em",
                    "i",
                    "br",
                    "hr",
                    "section",
                    "article",
                    "header",
                    "footer",
                    "main",
                    "blockquote",
                    "style",
                  ],
                  ALLOWED_ATTR: [
                    "style",
                    "class",
                    "id",
                    "colspan",
                    "rowspan",
                    "title",
                  ],
                  ALLOW_DATA_ATTR: !1,
                  ALLOW_ARIA_ATTR: !1,
                })
              : `<pre>${i.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</pre>`;
            u(
              `<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src 'none'; font-src 'none'; base-uri 'none'; form-action 'none'"><meta charset="utf-8"><style>body{font:16px/1.6 system-ui;padding:20px;color:#e8dfc9;background:#0a100c;overflow-wrap:anywhere}pre{white-space:pre-wrap}</style></head><body>${a}</body></html>`,
            );
          } catch (e) {
            if (t.aborted) return;
            (c(""),
              u(""),
              f(""),
              j(e instanceof Error ? e.message : "Could not read service."));
          } finally {
            v(!1);
          }
        }
        ((0, b.useEffect)(() => {
          let e = new AbortController();
          return (
            (y.current = e),
            queueMicrotask(() => {
              (c(""), u(""), f(""), j(""), v(!1));
            }),
            () => e.abort()
          );
        }, [e, r, n]),
          (0, b.useEffect)(() => {
            r && !t.some((e) => e.id === r) && queueMicrotask(() => a(""));
          }, [t, r]));
        let S = t.find((e) => e.id === r);
        return (0, i.jsxs)("section", {
          className: "service-browser",
          children: [
            (0, i.jsxs)("form", {
              onSubmit: (e) => {
                (e.preventDefault(), k());
              },
              children: [
                (0, i.jsxs)("label", {
                  children: [
                    "Application",
                    (0, i.jsxs)("select", {
                      value: r,
                      onChange: (e) => a(e.target.value),
                      children: [
                        (0, i.jsx)("option", {
                          value: "",
                          children: "Choose a service",
                        }),
                        t.map((e) =>
                          (0, i.jsxs)(
                            "option",
                            { value: e.id, children: [e.name, " :", e.port] },
                            e.id,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("label", {
                  children: [
                    "Path",
                    (0, i.jsx)("input", {
                      value: s,
                      onChange: (e) => o(e.target.value),
                      maxLength: 2048,
                      placeholder: "/",
                    }),
                  ],
                }),
                (0, i.jsx)(w.$, {
                  disabled: !n || !r || g,
                  children: g ? "READING…" : "Open",
                }),
              ],
            }),
            x &&
              (0, i.jsx)("p", {
                role: "alert",
                className: "read-error",
                children: x,
              }),
            (0, i.jsxs)("div", {
              className: "computer-actions",
              children: [
                (0, i.jsx)(w.$, {
                  variant: "outline",
                  "aria-pressed": "preview" === h,
                  onClick: () => p("preview"),
                  children: "Preview",
                }),
                (0, i.jsx)(w.$, {
                  variant: "outline",
                  "aria-pressed": "source" === h,
                  onClick: () => p("source"),
                  children: "Source",
                }),
                S?.url &&
                  (0, i.jsx)("a", {
                    href: S.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Open published app ↗",
                  }),
              ],
            }),
            (0, i.jsx)("small", {
              children: m || "Select a running service and read a path.",
            }),
            d &&
              ("preview" === h
                ? (0, i.jsx)("iframe", {
                    className: "service-frame",
                    title: `${S?.name || "Service"} static preview`,
                    sandbox: "",
                    referrerPolicy: "no-referrer",
                    srcDoc: d,
                  })
                : (0, i.jsx)("pre", {
                    className: "service-preview",
                    children: l,
                  })),
            (0, i.jsx)("p", {
              className: "computer-help",
              children:
                "A protected, static view of this computer’s service. Scripts, navigation and forms run only at its separate published app address.",
            }),
          ],
        });
      }
      function eg({ machine: e, enabled: t, onSaved: n }) {
        let [r, a] = (0, b.useState)(e.name),
          [s, o] = (0, b.useState)(e.motd || ""),
          [l, c] = (0, b.useState)(e.wallpaper || "phosphor"),
          [d, u] = (0, b.useState)(e.appearanceRevision || 0),
          [h, p] = (0, b.useState)(String(Number(e.budgetMicro) / 1e6)),
          [m, f] = (0, b.useState)(""),
          [g, v] = (0, b.useState)(!1);
        async function x(t) {
          (v(!0), f(""));
          try {
            if ("budget" === t && !/^\d+(\.\d{1,2})?$/.test(h))
              throw Error(
                "Enter a dollar limit with at most two decimal places.",
              );
            let i = await eX(
              `machines/${e.id}/${t}`,
              "budget" === t
                ? { budgetMicro: String(Math.round(1e6 * Number(h))) }
                : { name: r, motd: s, wallpaper: l, revision: d },
            );
            (void 0 !== i.revision && u(i.revision),
              await n(),
              f(
                "budget" === t
                  ? "Spending limit saved. No server was rented."
                  : "Shared appearance saved.",
              ));
          } catch (e) {
            f(e instanceof Error ? e.message : "Settings were not saved.");
          } finally {
            v(!1);
          }
        }
        return (0, i.jsxs)("div", {
          className: "computer-form",
          children: [
            (0, i.jsx)("p", {
              children:
                "Shared machine identity. Only its manager can save these settings. Window positions are remembered on your device.",
            }),
            (0, i.jsxs)("label", {
              children: [
                "Machine name",
                (0, i.jsx)("input", {
                  value: r,
                  onChange: (e) => a(e.target.value),
                  maxLength: 32,
                }),
              ],
            }),
            (0, i.jsxs)("label", {
              children: [
                "Welcome message",
                (0, i.jsx)("textarea", {
                  value: s,
                  onChange: (e) => o(e.target.value),
                  maxLength: 500,
                  rows: 3,
                }),
              ],
            }),
            (0, i.jsxs)("label", {
              children: [
                "Desktop surface",
                (0, i.jsxs)("select", {
                  value: l,
                  onChange: (e) => c(e.target.value),
                  children: [
                    (0, i.jsx)("option", {
                      value: "phosphor",
                      children: "Phosphor \xb7 black green",
                    }),
                    (0, i.jsx)("option", {
                      value: "amber",
                      children: "Amber \xb7 warm dark",
                    }),
                    (0, i.jsx)("option", {
                      value: "ivory",
                      children: "Ivory \xb7 charcoal",
                    }),
                    (0, i.jsx)("option", {
                      value: "grid",
                      children: "Laboratory grid",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "computer-actions",
              children: [
                (0, i.jsx)(w.$, {
                  disabled: !t || g,
                  onClick: () => void x("personalization"),
                  children: "Save appearance",
                }),
                (0, i.jsx)(w.$, {
                  variant: "outline",
                  disabled: g,
                  onClick: () => {
                    (a(e.name),
                      o(e.motd || ""),
                      c(e.wallpaper || "phosphor"),
                      u(e.appearanceRevision || 0),
                      f("Loaded the latest machine settings."));
                  },
                  children: "Read latest settings",
                }),
              ],
            }),
            (0, i.jsxs)("label", {
              children: [
                "Lifetime spending limit (USD)",
                (0, i.jsx)("input", {
                  inputMode: "decimal",
                  value: h,
                  onChange: (e) => p(e.target.value),
                }),
              ],
            }),
            (0, i.jsx)(w.$, {
              variant: "outline",
              disabled:
                !t || g || !["UNPROVISIONED", "SLEEPING"].includes(e.state),
              onClick: () => void x("budget"),
              children: "Save spending limit",
            }),
            (0, i.jsx)("small", {
              children:
                "Zero keeps new rentals disabled. Change this limit while the machine is unprovisioned or sleeping; provider-wide limits still apply.",
            }),
            m && (0, i.jsx)("p", { role: "status", children: m }),
          ],
        });
      }
      function ev({ machine: e, service: t, enabled: n }) {
        let [r, a] = (0, b.useState)(""),
          [s, o] = (0, b.useState)([]),
          [l, c] = (0, b.useState)(""),
          [d, u] = (0, b.useState)(""),
          [h, p] = (0, b.useState)(!1);
        async function m(n, i = r) {
          (p(!0), u(""));
          try {
            await eX(`machines/${e}/service-domain`, {
              id: t,
              action: n,
              hostname: i,
            });
            let r = await eX(`machines/${e}/service-domain`, {
              id: t,
              action: "list",
            });
            (o(r.domains),
              c(r.target),
              "verify" === n &&
                u(
                  "DNS verified. HTTPS must be configured on the app gateway before this domain can serve visitors.",
                ));
          } catch (e) {
            u(e instanceof Error ? e.message : "Domain operation failed.");
          } finally {
            p(!1);
          }
        }
        return (0, i.jsxs)("details", {
          className: "service-domains",
          children: [
            (0, i.jsx)("summary", { children: "Custom domains" }),
            (0, i.jsx)("p", {
              children:
                "Use a subdomain you own. Verification requires both records below. Your hosting operator must also configure HTTPS.",
            }),
            (0, i.jsxs)("label", {
              children: [
                "Domain",
                (0, i.jsx)("input", {
                  value: r,
                  onChange: (e) => a(e.target.value.toLowerCase().trim()),
                  placeholder: "app.your-domain.com",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "computer-actions",
              children: [
                (0, i.jsx)(w.$, {
                  disabled: !n || h || !r,
                  onClick: () => void m("add"),
                  children: "Add domain",
                }),
                (0, i.jsx)(w.$, {
                  variant: "outline",
                  disabled: !n || h,
                  onClick: () => void m("list"),
                  children: "Read domains",
                }),
              ],
            }),
            s.map((e) =>
              (0, i.jsxs)(
                "div",
                {
                  className: "domain-record",
                  children: [
                    (0, i.jsx)("b", { children: e.hostname }),
                    (0, i.jsxs)("p", {
                      children: [
                        "TXT \xb7 _coinputer.",
                        e.hostname,
                        (0, i.jsx)("br", {}),
                        (0, i.jsxs)("code", {
                          children: ["coinputer=", e.token],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", { children: ["CNAME \xb7 ", l] }),
                    (0, i.jsx)("span", {
                      children: e.verified_at
                        ? "DNS verified"
                        : "Waiting for DNS",
                    }),
                    (0, i.jsxs)("div", {
                      className: "computer-actions",
                      children: [
                        (0, i.jsx)(w.$, {
                          variant: "outline",
                          disabled: h || !n,
                          onClick: () => void m("verify", e.hostname),
                          children: "Check DNS",
                        }),
                        (0, i.jsx)(w.$, {
                          variant: "outline",
                          disabled: h || !n,
                          onClick: () => void m("remove", e.hostname),
                          children: "Remove domain",
                        }),
                      ],
                    }),
                  ],
                },
                e.hostname,
              ),
            ),
            d && (0, i.jsx)("p", { role: "status", children: d }),
          ],
        });
      }
      var ex = n(467),
        eb = n(5377),
        ew = n(2749),
        ej = n(9658);
      function ey(e, t, n) {
        let i = new URLSearchParams({ limit: "30", filter: t });
        return (
          e.trim() && i.set("q", e.trim()),
          n && i.set("cursor", n),
          "machines?" + i.toString()
        );
      }
      function ek(e, t) {
        if (
          !e ||
          "object" != typeof e ||
          !("machines" in e) ||
          !Array.isArray(e.machines) ||
          !("page" in e) ||
          !e.page ||
          "object" != typeof e.page
        )
          throw Error(
            "The computer directory response is incomplete. Refresh to try again.",
          );
        let n = e.page;
        if (
          !("total" in n) ||
          !Number.isSafeInteger(n.total) ||
          0 > Number(n.total) ||
          !("limit" in n) ||
          !Number.isSafeInteger(n.limit) ||
          1 > Number(n.limit) ||
          Number(n.limit) > 100 ||
          e.machines.length > Number(n.limit) ||
          !("nextCursor" in n) ||
          (null !== n.nextCursor &&
            ("string" != typeof n.nextCursor ||
              !/^[A-Za-z0-9_-]{1,1200}$/.test(n.nextCursor) ||
              n.nextCursor === t))
        )
          throw Error(
            "The computer directory page could not be verified. Refresh to try again.",
          );
        if (
          e.machines.some(
            (e) =>
              !e ||
              "string" != typeof e.id ||
              "string" != typeof e.mint ||
              "string" != typeof e.name,
          ) ||
          new Set(e.machines.map((e) => e.id)).size !== e.machines.length
        )
          throw Error(
            "The computer directory contains invalid records. Refresh to try again.",
          );
        return e;
      }
      var eS = n(4577),
        eC = n(9314),
        eN = n(1491),
        eE = n.n(eN);
      function eA(e) {
        return (0, i.jsx)(eT, { ...e }, e.mint);
      }
      function eT({ mint: e, name: t, className: n }) {
        let [r, a] = (0, b.useState)("idle"),
          s = (0, b.useRef)(new AbortController()),
          o = (0, b.useRef)(null),
          l = (0, b.useRef)(!1),
          c = (0, d.bA)(e);
        async function u() {
          if (!c || l.current) return;
          let t = s.current.signal;
          ((l.current = !0), a("copying"));
          try {
            if (!navigator.clipboard?.writeText)
              throw Error("Clipboard unavailable");
            (await navigator.clipboard.writeText(e), t.aborted || a("copied"));
          } catch {
            t.aborted || a("failed");
          } finally {
            l.current = !1;
          }
        }
        return (
          (0, b.useEffect)(
            () => (
              (s.current = new AbortController()),
              () => s.current.abort()
            ),
            [],
          ),
          (0, b.useEffect)(() => {
            if (
              ("failed" === r && (o.current?.focus(), o.current?.select()),
              "copied" === r)
            ) {
              let e = setTimeout(() => a("idle"), 2500);
              return () => clearTimeout(e);
            }
          }, [r]),
          (0, i.jsxs)("div", {
            className: [eE().address, n].filter(Boolean).join(" "),
            children: [
              (0, i.jsxs)("button", {
                type: "button",
                className: eE().copy,
                onClick: () => void u(),
                disabled: !c || "copying" === r,
                "aria-label": `Copy coin address${t ? ` for ${t}` : ""}`,
                title: c ? e : "Coin address unavailable",
                children: [
                  "copied" === r
                    ? (0, i.jsx)(eS.A, { size: 14, "aria-hidden": "true" })
                    : (0, i.jsx)(eC.A, { size: 14, "aria-hidden": "true" }),
                  (0, i.jsx)("span", { children: "CA" }),
                  (0, i.jsx)("code", {
                    children: c
                      ? `${e.slice(0, 6)}…${e.slice(-6)}`
                      : "Unavailable",
                  }),
                  (0, i.jsx)("span", {
                    children:
                      "copying" === r
                        ? "Copying…"
                        : "copied" === r
                          ? "Copied"
                          : "Copy",
                  }),
                ],
              }),
              (0, i.jsx)("span", {
                className: eE().announcement,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": "true",
                children:
                  "copied" === r
                    ? "Coin address copied."
                    : "failed" === r
                      ? "Clipboard unavailable. Copy the full address below."
                      : "",
              }),
              "failed" === r &&
                (0, i.jsxs)("label", {
                  className: eE().fallback,
                  children: [
                    "Clipboard unavailable. Select and copy the full coin address",
                    (0, i.jsx)("input", {
                      ref: o,
                      readOnly: !0,
                      value: e,
                      autoComplete: "off",
                      spellCheck: !1,
                      onFocus: (e) => e.currentTarget.select(),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var eR = n(3312),
        e$ = n.n(eR);
      function eI({ machine: e, onSelect: t }) {
        let [n, r] = (0, b.useState)(""),
          a = e.image?.startsWith("https://") && e.image !== n ? e.image : "",
          s = ["phosphor", "amber", "ivory", "grid"].includes(e.wallpaper)
            ? e.wallpaper
            : "phosphor",
          o = e.lastActivity,
          u = l(e),
          h =
            o && Number.isFinite(Date.parse(o.created_at))
              ? new Date(o.created_at).toISOString()
              : null,
          p = (0, c.gl)(e);
        return (0, i.jsxs)("li", {
          className: `directory-machine-row ${e$().machine}`,
          "data-wallpaper": s,
          children: [
            (0, i.jsxs)("span", {
              className: `mini-machine ${e.online ? "host-online" : ""}`,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)("span", {
                  children: a
                    ? (0, i.jsx)("img", {
                        src: a,
                        alt: "",
                        width: 44,
                        height: 32,
                        loading: "lazy",
                        referrerPolicy: "no-referrer",
                        onError: () => r(a),
                      })
                    : e.online
                      ? ">_"
                      : "—",
                }),
                (0, i.jsx)("i", {}),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "directory-machine-identity",
              children: [
                (0, i.jsx)("h3", { children: e.name }),
                (0, i.jsxs)("span", {
                  className: `directory-machine-state ${e$().state}`,
                  "data-tone": p.tone,
                  children: [
                    (0, i.jsx)(j.md, {
                      live: e.online,
                      busy: [
                        "PROVISIONING",
                        "WAKING",
                        "SAVING",
                        "LOW_POWER",
                      ].includes(e.state),
                      fault: "ERROR" === e.state,
                    }),
                    p.label,
                  ],
                }),
                (0, i.jsx)(eA, { mint: e.mint, name: e.name }),
              ],
            }),
            (u.credit || u.runway) &&
              (0, i.jsxs)("dl", {
                className: "directory-machine-readouts",
                children: [
                  u.credit &&
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("dt", {
                          children: "Available compute credit",
                        }),
                        (0, i.jsxs)("dd", {
                          children: ["$", (0, d.Js)(e.creditMicro, 6)],
                        }),
                      ],
                    }),
                  u.runway &&
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("dt", { children: "Credit covers" }),
                        (0, i.jsx)("dd", {
                          children: (function (e) {
                            if (null === e) return "Not available";
                            if (e <= 0) return "0 minutes";
                            if (e < 60) return "Less than 1 minute";
                            let t = Math.floor(e / 60);
                            if (t < 60) return `${t}m`;
                            let n = Math.floor(t / 60);
                            return n < 24
                              ? `${n}h ${t % 60}m`
                              : `${Math.floor(n / 24)}d ${n % 24}h`;
                          })(e.runwaySeconds),
                        }),
                      ],
                    }),
                ],
              }),
            (0, i.jsxs)(w.$, {
              className: e$().open,
              variant: e.online ? "default" : "outline",
              "aria-label": `${e.online ? "Enter" : "Open"} computer ${e.name}`,
              onClick: () => t(e.mint),
              children: [
                e.online ? "Enter computer" : "Open computer",
                (0, i.jsx)(ex.A, { size: 14, "aria-hidden": "true" }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: `directory-machine-history ${e$().context}`,
              children: [
                (0, i.jsx)("p", { children: p.detail }),
                e.motd &&
                  (0, i.jsx)("p", {
                    className: "machine-motd",
                    children: e.motd,
                  }),
                o &&
                  (0, i.jsxs)("details", {
                    className: e$().record,
                    children: [
                      (0, i.jsxs)("summary", {
                        children: [
                          "Latest computer record",
                          h &&
                            (0, i.jsxs)("time", {
                              dateTime: h,
                              children: [
                                h.slice(0, 16).replace("T", " "),
                                " UTC",
                              ],
                            }),
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          (0, i.jsx)("span", { children: o.kind }),
                          o.message,
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function eO({ directory: e, onSelect: t, onLaunch: n, onInspect: r }) {
        let [a, s] = (0, b.useState)(""),
          [o, l] = (0, b.useState)("all"),
          [c, u] = (0, b.useState)(0),
          [h, p] = (0, b.useState)(null),
          m = (0, b.useRef)(null),
          f = (0, b.useRef)(!1),
          g = a.trim(),
          v = JSON.stringify([g, o]),
          x = h?.key === v ? h : null,
          j = x?.data?.machines || [],
          y = e.connected && (!x || x.loading),
          k = !!x?.loadingMore;
        (0, b.useEffect)(() => {
          let t = new AbortController();
          ((m.current = t), (f.current = !1));
          let n = setTimeout(() => {
            e.connected &&
              (p((e) => ({
                key: v,
                data: e?.key === v ? e.data : null,
                loading: !0,
                loadingMore: !1,
                error: "",
                failedMore: !1,
              })),
              eX(ey(g, o), void 0, t.signal)
                .then((e) => {
                  let n = ek(e);
                  t.signal.aborted ||
                    p({
                      key: v,
                      data: n,
                      loading: !1,
                      loadingMore: !1,
                      error: "",
                      failedMore: !1,
                    });
                })
                .catch((e) => {
                  t.signal.aborted ||
                    p((t) => ({
                      key: v,
                      data: t?.key === v ? t.data : null,
                      loading: !1,
                      loadingMore: !1,
                      failedMore: !1,
                      error:
                        e instanceof Error
                          ? e.message
                          : "The directory could not be read. Refresh to try again.",
                    }));
                }));
          }, 250 * !!g);
          return () => {
            (clearTimeout(n), t.abort(), m.current === t && (m.current = null));
          };
        }, [v, g, o, c, e.connected]);
        let S = !!(
            e.connected &&
            x?.data &&
            x.data.machines.length <= x.data.page.limit
          ),
          C = S && !y && !k;
        async function E() {
          let t = m.current,
            n = x?.data?.page.nextCursor;
          if (t && !t.signal.aborted && n && !y && !f.current && e.connected) {
            ((f.current = !0),
              p((e) =>
                e && e.key === v ? { ...e, loadingMore: !0, error: "" } : e,
              ));
            try {
              let e = ek(await eX(ey(g, o, n), void 0, t.signal), n);
              t.signal.aborted ||
                p((t) => {
                  var n, i;
                  let r, a;
                  return t && t.key === v && t.data
                    ? {
                        key: v,
                        data: {
                          ...e,
                          machines:
                            ((n = t.data.machines),
                            (i = e.machines),
                            (r = new Map(i.map((e) => [e.id, e]))),
                            (a = new Set(n.map((e) => e.id))),
                            [
                              ...n.map((e) => r.get(e.id) || e),
                              ...i.filter((e) => !a.has(e.id)),
                            ]),
                        },
                        loading: !1,
                        loadingMore: !1,
                        error: "",
                        failedMore: !1,
                      }
                    : t;
                });
            } catch (e) {
              t.signal.aborted ||
                p((t) =>
                  t && t.key === v
                    ? {
                        ...t,
                        loadingMore: !1,
                        failedMore: !0,
                        error:
                          e instanceof Error
                            ? e.message
                            : "More computers could not be read. Try again.",
                      }
                    : t,
                );
            } finally {
              m.current === t && (f.current = !1);
            }
          }
        }
        function A() {
          (u((e) => e + 1), e.reload());
        }
        (0, b.useEffect)(() => {
          if (!C) return;
          let e = setInterval(() => {
            "visible" !== document.visibilityState ||
              f.current ||
              u((e) => e + 1);
          }, 15e3);
          return () => clearInterval(e);
        }, [C, v]);
        let T = e.connected ? e.summary : null;
        return (0, i.jsxs)("section", {
          className: "machine-directory",
          "aria-labelledby": "directory-heading",
          children: [
            (0, i.jsxs)("div", {
              className: `panel-intro ${e$().intro}`,
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("span", {
                      className: "eyebrow",
                      children: "COMPUTERS / DIRECTORY",
                    }),
                    (0, i.jsx)("h2", {
                      id: "directory-heading",
                      children: "Find a computer. Step inside.",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "Each coin has its own workspace. Find yours, open it, and build something together.",
                    }),
                  ],
                }),
                (0, i.jsxs)(w.$, {
                  variant: "outline",
                  onClick: n,
                  children: [
                    "Launch a coin",
                    (0, i.jsx)(ex.A, { size: 14, "aria-hidden": "true" }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("dl", {
              className: "directory-summary",
              "aria-label": "Computer directory readings",
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("dt", { children: "Registered" }),
                    (0, i.jsx)("dd", {
                      children: T ? T.total.toLocaleString() : "—",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("dt", { children: "Online" }),
                    (0, i.jsx)("dd", {
                      children: T ? T.online.toLocaleString() : "—",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("dt", { children: "Holders connected" }),
                    (0, i.jsx)("dd", {
                      children: T ? T.holdersOnline.toLocaleString() : "—",
                    }),
                  ],
                }),
                T &&
                  BigInt(T.creditMicro) > BigInt(0) &&
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("dt", {
                        children: "Available compute credit",
                      }),
                      (0, i.jsxs)("dd", {
                        children: ["$", (0, d.Js)(T.creditMicro, 6)],
                      }),
                    ],
                  }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "directory-search",
              children: [
                (0, i.jsx)("label", {
                  htmlFor: "machine-search",
                  children: "Find your coin’s computer",
                }),
                (0, i.jsxs)("div", {
                  className: e$().search,
                  children: [
                    (0, i.jsx)(eb.A, { size: 18, "aria-hidden": "true" }),
                    (0, i.jsx)(ej.p, {
                      id: "machine-search",
                      type: "search",
                      value: a,
                      onChange: (e) => s(e.target.value),
                      placeholder:
                        "Search every computer by name or coin address",
                      maxLength: 120,
                      disabled: !e.connected,
                      autoComplete: "off",
                      spellCheck: !1,
                    }),
                    a &&
                      (0, i.jsx)("button", {
                        type: "button",
                        "aria-label": "Clear computer search",
                        onClick: () => {
                          (s(""),
                            document.getElementById("machine-search")?.focus());
                        },
                        children: (0, i.jsx)(N.A, {
                          size: 16,
                          "aria-hidden": "true",
                        }),
                      }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: e$().toolbar,
              children: [
                (0, i.jsx)("div", {
                  className: e$().filters,
                  role: "group",
                  "aria-label": "Filter computers",
                  children: [
                    ["all", "All computers"],
                    ["online", "Online"],
                    ["sleeping", "Sleeping"],
                  ].map(([t, n]) =>
                    (0, i.jsx)(
                      "button",
                      {
                        type: "button",
                        "aria-pressed": o === t,
                        disabled: !e.connected,
                        onClick: () => l(t),
                        children: n,
                      },
                      t,
                    ),
                  ),
                }),
                (0, i.jsxs)(w.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: A,
                  disabled: e.loading || y || k,
                  "aria-label": "Refresh computer directory",
                  children: [
                    (0, i.jsx)(ew.A, { size: 14, "aria-hidden": "true" }),
                    "Refresh",
                  ],
                }),
              ],
            }),
            e.connected
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("p", {
                      className: "directory-result-count",
                      role: "status",
                      children: y
                        ? g
                          ? "Searching all computers…"
                          : "Reading the computer directory…"
                        : x?.data
                          ? `${j.length.toLocaleString()} loaded \xb7 ${x.data.page.total.toLocaleString()} ${g || "all" !== o ? "matching" : "registered"} ${1 === x.data.page.total ? "computer" : "computers"}`
                          : "Directory results unavailable.",
                    }),
                    x?.error &&
                      (0, i.jsxs)("div", {
                        className: e$().error,
                        role: "alert",
                        children: [
                          (0, i.jsx)("p", { children: x.error }),
                          (0, i.jsx)(w.$, {
                            variant: "outline",
                            onClick: () => (x.failedMore ? void E() : A()),
                            disabled: y || k,
                            children: "Try again",
                          }),
                        ],
                      }),
                    j.length
                      ? (0, i.jsx)("ul", {
                          className: "directory-machine-list",
                          "aria-busy": y,
                          children: j.map((e) =>
                            (0, i.jsx)(eI, { machine: e, onSelect: t }, e.id),
                          ),
                        })
                      : !y &&
                        !x?.error &&
                        x?.data &&
                        (0, i.jsxs)("div", {
                          className: "directory-connection",
                          children: [
                            (0, i.jsx)(ed.A, {
                              size: 30,
                              "aria-hidden": "true",
                            }),
                            (0, i.jsx)("h3", {
                              children: g
                                ? "No matching computers."
                                : "online" === o
                                  ? "No computers online right now."
                                  : "sleeping" === o
                                    ? "No sleeping computers listed."
                                    : "No computers registered yet.",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                g || "all" !== o
                                  ? "Try another name or view all computers. Sleeping computers stay in the directory."
                                  : "Registered computers will appear here with their actual status and compute credit.",
                            }),
                            (g || "all" !== o) &&
                              (0, i.jsx)(w.$, {
                                variant: "outline",
                                onClick: () => {
                                  (s(""), l("all"));
                                },
                                children: "Show all computers",
                              }),
                            (0, i.jsxs)("div", {
                              className: "directory-next-actions",
                              children: [
                                (0, i.jsx)(w.$, {
                                  onClick: n,
                                  children: "Launch a coin",
                                }),
                                (0, i.jsx)(w.$, {
                                  variant: "outline",
                                  onClick: r,
                                  children: "Inspect a token",
                                }),
                              ],
                            }),
                          ],
                        }),
                    x?.data &&
                      (0, i.jsxs)("div", {
                        className: e$().pagination,
                        children: [
                          x.data.page.nextCursor &&
                            (0, i.jsx)(w.$, {
                              variant: "outline",
                              onClick: () => void E(),
                              disabled: y || k,
                              children: k
                                ? "Reading more computers…"
                                : "Load more computers",
                            }),
                          (0, i.jsx)("small", {
                            children: k
                              ? "Reading the next page."
                              : j.length
                                ? S
                                  ? "Status refreshes automatically every 15 seconds while this page is visible."
                                  : "Statuses reflect the last read. Refresh to check again."
                                : "",
                          }),
                        ],
                      }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: "directory-connection",
                  role: "status",
                  children: [
                    (0, i.jsx)(ed.A, { size: 30, "aria-hidden": "true" }),
                    (0, i.jsx)("h3", {
                      children: e.loading
                        ? "Connecting to the directory…"
                        : "The computer directory is unavailable.",
                    }),
                    (0, i.jsx)("p", {
                      children: e.loading
                        ? "Reading the computer service."
                        : "We can’t retrieve registered computers right now. Token inspection remains available; launching resumes when the computer service reconnects.",
                    }),
                    !e.loading &&
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        onClick: e.reload,
                        children: "Try again",
                      }),
                    e.error &&
                      (0, i.jsxs)("details", {
                        children: [
                          (0, i.jsx)("summary", {
                            children: "Connection details",
                          }),
                          (0, i.jsx)("p", { children: e.error }),
                        ],
                      }),
                  ],
                }),
          ],
        });
      }
      let eL = (e) => !!e && "object" == typeof e && !Array.isArray(e);
      function eM({ machine: e }) {
        let [t, n] = (0, b.useState)(!1),
          [r, a] = (0, b.useState)(null);
        (0, b.useEffect)(() => {
          if (!t) return;
          let n = new AbortController();
          return (
            eX(`machines/${encodeURIComponent(e)}/inspect`, void 0, n.signal)
              .then((t) => {
                n.signal.aborted ||
                  a({
                    machine: e,
                    data: (function (e, t) {
                      if (
                        !eL(e) ||
                        !eL(e.machine) ||
                        e.machine.id !== t ||
                        !eL(e.history)
                      )
                        throw Error(
                          "The history record does not match this computer.",
                        );
                      let n = e.history;
                      if (
                        ![
                          n.fileSaves,
                          n.terminalSessions,
                          n.serviceStarts,
                        ].every(
                          (e) => "string" == typeof e && /^\d+$/.test(e),
                        ) ||
                        (null !== n.firstOnline &&
                          ("string" != typeof n.firstOnline ||
                            !Number.isFinite(Date.parse(n.firstOnline))))
                      )
                        throw Error("Computer history could not be verified.");
                      return {
                        fileSaves: n.fileSaves,
                        terminalSessions: n.terminalSessions,
                        serviceStarts: n.serviceStarts,
                        firstOnline: n.firstOnline,
                      };
                    })(t, e),
                    error: !1,
                  });
              })
              .catch(() => {
                n.signal.aborted ||
                  a((t) => ({
                    machine: e,
                    data: t?.machine === e ? t.data : null,
                    error: !0,
                  }));
              }),
            () => n.abort()
          );
        }, [e, t]);
        let s = r?.machine === e ? r : null,
          o = s?.data;
        return (0, i.jsxs)("details", {
          className: "developer-tools",
          onToggle: (e) => n(e.currentTarget.open),
          children: [
            (0, i.jsx)("summary", { children: "Computer history" }),
            s?.error &&
              (0, i.jsxs)("p", {
                role: "alert",
                children: [
                  "Computer history could not be verified. Close and reopen this section to try again.",
                  o && " Showing the last successful history read.",
                ],
              }),
            t &&
              !o &&
              !s?.error &&
              (0, i.jsx)("p", { children: "READING COMPUTER HISTORY…" }),
            o &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("p", {
                    children:
                      "Each holder gets a separate account and terminal. Shared projects live in /srv/coinputer/shared. Your Home files are private to your wallet’s account. The operator manages the host.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The workspace supports text editing, shell commands, Git, user-level packages, scripts and supervised services. New servers include Python, Node.js and build tools; use Code → Check installed tools for the exact installed versions.",
                  }),
                  (0, i.jsxs)("div", {
                    className: "machine-readouts",
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)("small", { children: "EDITOR SAVES" }),
                          (0, i.jsx)("b", {
                            children: BigInt(o.fileSaves).toLocaleString(),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)("small", {
                            children: "TERMINAL SESSIONS",
                          }),
                          (0, i.jsx)("b", {
                            children: BigInt(
                              o.terminalSessions,
                            ).toLocaleString(),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)("small", { children: "SERVICE STARTS" }),
                          (0, i.jsx)("b", {
                            children: BigInt(o.serviceStarts).toLocaleString(),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)("small", { children: "FIRST ONLINE" }),
                          (0, i.jsx)("b", {
                            children: o.firstOnline
                              ? new Date(o.firstOnline).toLocaleString()
                              : "Not yet recorded",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("small", {
                    children:
                      "Counts come from recorded Coinputer operations; shell activity is not counted as editor saves.",
                  }),
                ],
              }),
          ],
        });
      }
      var eD = n(2223),
        eP = n(2651),
        ez = n(7796),
        e_ = n.n(ez);
      let eU = (e) => !!e && "object" == typeof e && !Array.isArray(e),
        eF = (e) =>
          "number" == typeof e && Number.isFinite(e) && e > 0 ? e : null,
        eW = (e) => (null !== eF(e) && Number.isSafeInteger(e) ? e : null),
        eq = (e) =>
          "string" == typeof e &&
          e.trim() &&
          e.length <= 120 &&
          !/[\u0000-\u001f\u007f]/.test(e)
            ? e.trim()
            : null,
        eV = (e) => e.toLocaleString(void 0, { maximumFractionDigits: 2 }),
        eB = (e) => `${eV(e / 0x40000000)} GiB`,
        eG = (e) =>
          "string" == typeof e && /^\d{1,20}$/.test(e) ? BigInt(e) : null,
        eH = (e) =>
          `$${e / BigInt(1e6)}.${(e % BigInt(1e6)).toString().padStart(6, "0").replace(/0+$/, "").padEnd(2, "0")}`;
      function eY({
        machine: e,
        connected: t,
        onFunding: n,
        onPowerControls: r,
      }) {
        let [a, s] = (0, b.useState)(0),
          [o, l] = (0, b.useState)({
            id: "",
            mint: "",
            data: null,
            loading: !1,
            failed: !1,
          }),
          c = e.id,
          d = e.mint;
        (0, b.useEffect)(() => {
          if (!t) return;
          let e = new AbortController(),
            n = !1;
          async function i() {
            if (!n && !e.signal.aborted && !document.hidden) {
              ((n = !0),
                l((e) => ({
                  id: c,
                  mint: d,
                  data: e.id === c && e.mint === d ? e.data : null,
                  loading: !0,
                  failed: !1,
                })));
              try {
                let t = (function (e, t, n) {
                  if (
                    !eU(e) ||
                    !eU(e.machine) ||
                    e.machine.id !== t ||
                    e.machine.mint !== n ||
                    !eU(e.hardware) ||
                    ![
                      "verified",
                      "stale",
                      "unavailable",
                      "not-provisioned",
                    ].includes(String(e.hardware.status))
                  )
                    throw Error(
                      "Computer hardware record could not be verified.",
                    );
                  let i = e.hardware,
                    r = i.status,
                    a =
                      ("verified" === r || "stale" === r) && eU(i.specs)
                        ? i.specs
                        : {};
                  return {
                    id: t,
                    mint: n,
                    status: r,
                    observedAt:
                      "string" == typeof i.observedAt &&
                      Number.isFinite(Date.parse(i.observedAt))
                        ? i.observedAt
                        : null,
                    specs: {
                      vcpus: eW(a.vcpus),
                      memoryMiB: eF(a.memoryMiB),
                      diskGB: eF(a.diskGB),
                      region: eq(a.region),
                      image: eq(a.image),
                    },
                  };
                })(
                  await eX(
                    `machines/${encodeURIComponent(c)}/inspect`,
                    void 0,
                    e.signal,
                  ),
                  c,
                  d,
                );
                e.signal.aborted ||
                  l({ id: c, mint: d, data: t, loading: !1, failed: !1 });
              } catch {
                e.signal.aborted ||
                  l((e) => ({
                    id: c,
                    mint: d,
                    data: e.id === c && e.mint === d ? e.data : null,
                    loading: !1,
                    failed: !0,
                  }));
              } finally {
                n = !1;
              }
            }
          }
          i();
          let r = window.setInterval(i, 3e4),
            a = () => {
              document.hidden || i();
            };
          return (
            document.addEventListener("visibilitychange", a),
            () => {
              (e.abort(),
                window.clearInterval(r),
                document.removeEventListener("visibilitychange", a));
            }
          );
        }, [c, d, t, a]);
        let u = o.id === c && o.mint === d,
          h = t && u ? o.data : null,
          p = t && u && o.failed,
          m = t && (!u || o.loading),
          f = h?.specs,
          g = [];
        (f?.vcpus &&
          g.push(["CPU", `${eV(f.vcpus)} vCPU${1 === f.vcpus ? "" : "s"}`]),
          f?.memoryMiB && g.push(["Memory", `${eV(f.memoryMiB / 1024)} GiB`]),
          f?.diskGB && g.push(["Disk", `${eV(f.diskGB)} GB`]));
        let v = e.desktopCapabilities,
          x = [],
          j = [];
        (eF(v?.cpuPercent) &&
          x.push(["CPU limit", `${eV(v.cpuPercent)}% of one CPU`]),
          eF(v?.memoryBytes) && x.push(["Memory limit", eB(v.memoryBytes)]),
          eW(v?.maxSessions) &&
            x.push(["Concurrent desktops", eV(v.maxSessions)]),
          eF(v?.sessionSeconds) &&
            x.push([
              "Session limit",
              v.sessionSeconds >= 60
                ? `${eV(v.sessionSeconds / 60)} min`
                : `${eV(v.sessionSeconds)} sec`,
            ]),
          eW(v?.width) &&
            eW(v?.height) &&
            x.push(["Display", `${eV(v.width)} \xd7 ${eV(v.height)} px`]),
          eF(v?.tenantCpuPercent) &&
            j.push([
              "Combined CPU limit",
              `${eV(v.tenantCpuPercent)}% of one CPU`,
            ]),
          eF(v?.tenantMemoryBytes) &&
            j.push(["Combined memory limit", eB(v.tenantMemoryBytes)]));
        let y = e.metrics,
          k = t
            ? (function (e) {
                if ("UNPROVISIONED" !== e.state || !e.startupQuote) return null;
                let t = e.startupQuote,
                  n = eG(e.creditMicro),
                  i = eG(e.storageReserveMicro),
                  r = eG(e.budgetMicro),
                  a = eG(t.requiredComputeMicro),
                  s = eG(t.requiredReserveMicro),
                  o = eG(t.minimumBudgetMicro),
                  l = eG(t.retailHourMicro);
                if (
                  null === n ||
                  null === i ||
                  null === r ||
                  null === a ||
                  null === s ||
                  null === o ||
                  null === l ||
                  !Number.isFinite(t.windowHours) ||
                  t.windowHours <= 0
                )
                  return null;
                let c = a > n ? a - n : BigInt(0),
                  d = s > i ? s - i : BigInt(0);
                return {
                  compute: eH(c),
                  storage: eH(d),
                  total: eH(c + d),
                  rate: eH(l),
                  minimumBudget: eH(o),
                  needsFunding: c + d > BigInt(0),
                  needsBudget: r < o,
                  hours: t.windowHours,
                };
              })(e)
            : null,
          S = "UNPROVISIONED" === e.state && e.automaticStart?.enrolled;
        y &&
          Number.isFinite(y.storageBytes) &&
          y.storageBytes >= 0 &&
          eF(y.storageTotalBytes) &&
          j.push([
            "Workspace storage",
            `${eB(y.storageBytes)} used / ${eB(y.storageTotalBytes)}`,
          ]);
        let C = (e) =>
          (0, i.jsx)("dl", {
            className: e_().readouts,
            children: e.map(([e, t]) =>
              (0, i.jsxs)(
                "div",
                {
                  children: [
                    (0, i.jsx)("dt", { children: e }),
                    (0, i.jsx)("dd", { children: t }),
                  ],
                },
                e,
              ),
            ),
          });
        return (0, i.jsxs)("section", {
          className: e_().profile,
          "aria-label": "Computer details",
          children: [
            (0, i.jsxs)("header", {
              className: e_().heading,
              children: [
                (0, i.jsxs)("h3", {
                  children: [
                    (0, i.jsx)(ed.A, { size: 18, "aria-hidden": "true" }),
                    "Computer details",
                  ],
                }),
                (0, i.jsxs)(w.$, {
                  variant: "ghost",
                  size: "sm",
                  disabled: !t || m,
                  onClick: () => s((e) => e + 1),
                  "aria-label": "Refresh computer details",
                  children: [
                    (0, i.jsx)(ew.A, { size: 13, "aria-hidden": "true" }),
                    "Refresh",
                  ],
                }),
              ],
            }),
            !t &&
              (0, i.jsx)("p", {
                className: e_().note,
                role: "status",
                children: "Reconnect to verify current computer resources.",
              }),
            m &&
              !h &&
              (0, i.jsx)("p", {
                className: e_().note,
                role: "status",
                children: "Reading this computer’s resources…",
              }),
            p &&
              (0, i.jsxs)("p", {
                className: e_().warning,
                role: "alert",
                children: [
                  "Hardware could not be verified. Try again.",
                  h && " Showing the last successful hardware read.",
                ],
              }),
            !!g.length &&
              (0, i.jsxs)("section", {
                className: e_().group,
                children: [
                  (0, i.jsxs)("h4", {
                    children: [
                      (0, i.jsx)(eP.A, { size: 14, "aria-hidden": "true" }),
                      h?.status === "stale" || p
                        ? "Last verified server allocation"
                        : "Server allocation",
                    ],
                  }),
                  C(g),
                  (0, i.jsx)("p", {
                    className: e_().note,
                    children:
                      "The whole server, shared by this coin’s holders. Your desktop has the separate limits below.",
                  }),
                  (f?.image || f?.region) &&
                    (0, i.jsx)("p", {
                      className: e_().meta,
                      children: [f.image, f.region]
                        .filter(Boolean)
                        .join(" \xb7 "),
                    }),
                  h?.observedAt &&
                    (0, i.jsxs)("p", {
                      className: e_().meta,
                      children: [
                        "stale" === h.status || p
                          ? "Last verified"
                          : "Verified",
                        " ",
                        new Date(h.observedAt).toLocaleString(),
                      ],
                    }),
                  h?.status === "stale" &&
                    (0, i.jsx)("p", {
                      className: e_().warning,
                      children:
                        "The provider could not confirm a fresh hardware reading.",
                    }),
                ],
              }),
            h?.status === "unavailable" &&
              !p &&
              (0, i.jsx)("p", {
                className: e_().note,
                children: "Server hardware is temporarily unavailable.",
              }),
            h?.status === "not-provisioned" &&
              (0, i.jsxs)("section", {
                className: e_().group,
                "aria-label": "Start this computer",
                children: [
                  (0, i.jsx)("h4", {
                    children: S
                      ? "Automatic first start"
                      : "UNPROVISIONED" === e.state
                        ? "Ready for its first start"
                        : "SLEEPING" === e.state
                          ? "Computer is sleeping"
                          : "Computer is preparing",
                  }),
                  S
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)("p", {
                            className: e_().note,
                            children: [
                              e.automaticStart?.message ||
                                "Checking funding and startup availability.",
                              " Coinputer handles the first start automatically; this page can be closed.",
                            ],
                          }),
                          k &&
                            (0, i.jsxs)("p", {
                              className: e_().note,
                              children: [
                                k.needsFunding
                                  ? "Startup is waiting for recorded compute credit and saved-disk reserve to cover its operating window."
                                  : "The required compute credit and saved-disk reserve are available.",
                                " ",
                                e.starterCredit?.enrolled
                                  ? "Starter credit is an operator contribution, separate from your SOL deposit and creator fees."
                                  : "",
                              ],
                            }),
                          (0, i.jsxs)("div", {
                            className: e_().actions,
                            children: [
                              n &&
                                (0, i.jsx)(w.$, {
                                  variant: "outline",
                                  onClick: n,
                                  children: "View funding record",
                                }),
                              r &&
                                (0, i.jsx)(w.$, {
                                  variant: "outline",
                                  onClick: r,
                                  children: "View startup details",
                                }),
                            ],
                          }),
                        ],
                      })
                    : k
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsxs)("p", {
                              className: e_().note,
                              children: [
                                k.needsFunding
                                  ? `Allocate ${k.total} more to start: ${k.compute} in compute credit and ${k.storage} in saved-disk reserve.`
                                  : "The required startup compute credit and saved-disk reserve are available.",
                                " The current rate is ",
                                k.rate,
                                " per hour, with a ",
                                k.hours,
                                "-hour starting window.",
                              ],
                            }),
                            k.needsBudget &&
                              (0, i.jsxs)("p", {
                                className: e_().note,
                                children: [
                                  "Starting the computer also approves a spending limit of ",
                                  k.minimumBudget,
                                  " if its current limit is lower. This is a cap, not an extra payment.",
                                ],
                              }),
                            (0, i.jsx)("p", {
                              className: e_().note,
                              children:
                                "A SOL deposit is recorded separately. It becomes usable compute credit only after its actual settlement is recorded.",
                            }),
                            (0, i.jsxs)("div", {
                              className: e_().actions,
                              children: [
                                n &&
                                  (0, i.jsx)(w.$, {
                                    variant: k.needsFunding
                                      ? "default"
                                      : "outline",
                                    onClick: n,
                                    children: "View funding & deposits",
                                  }),
                                r &&
                                  (0, i.jsx)(w.$, {
                                    variant: k.needsFunding
                                      ? "outline"
                                      : "default",
                                    onClick: r,
                                    children: "View computer controls",
                                  }),
                              ],
                            }),
                          ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("p", {
                              className: e_().note,
                              children:
                                "UNPROVISIONED" === e.state
                                  ? "The server has not started yet. Open funding to check its credit, then review the start requirements."
                                  : "SLEEPING" === e.state
                                    ? "Saved files are preserved. Review the wake requirements to restore the server."
                                    : "A server is not allocated yet. Check the computer’s current startup state.",
                            }),
                            (0, i.jsxs)("div", {
                              className: e_().actions,
                              children: [
                                n &&
                                  "UNPROVISIONED" === e.state &&
                                  (0, i.jsx)(w.$, {
                                    onClick: n,
                                    children: "View funding & deposits",
                                  }),
                                r &&
                                  (0, i.jsx)(w.$, {
                                    variant: "outline",
                                    onClick: r,
                                    children: "View computer controls",
                                  }),
                              ],
                            }),
                          ],
                        }),
                ],
              }),
            t &&
              !!x.length &&
              (0, i.jsxs)("section", {
                className: e_().group,
                children: [
                  (0, i.jsx)("h4", {
                    children:
                      e.online && e.desktopAvailable
                        ? "Usable desktop"
                        : "Reported desktop limits",
                  }),
                  C(x),
                  (0, i.jsxs)("p", {
                    className: e_().note,
                    children: [
                      "Limits reported by the computer. Browser tabs and applications share this desktop allowance.",
                      e.online
                        ? e.desktopAvailable
                          ? ""
                          : " Desktop access is not ready yet."
                        : " The computer is currently offline; these are its last reported limits.",
                    ],
                  }),
                ],
              }),
            t &&
              !!j.length &&
              (0, i.jsxs)("section", {
                className: e_().group,
                children: [
                  (0, i.jsx)("h4", { children: "Shared workspace allowance" }),
                  C(j),
                  (0, i.jsxs)("p", {
                    className: e_().note,
                    children: [
                      "Combined limits across holder sessions and services. Private Home folders and community files use the same workspace storage.",
                      !e.online &&
                        " These are the last reported workspace readings.",
                    ],
                  }),
                ],
              }),
            (0, i.jsxs)("aside", {
              className: e_().growth,
              children: [
                (0, i.jsx)("span", { children: "Growth model" }),
                (0, i.jsx)("h4", {
                  children: "Higher market cap. More computing power.",
                }),
                (0, i.jsx)("p", {
                  children:
                    "Market-cap upgrades are planned. This computer keeps its verified resources until an upgrade is approved and funded.",
                }),
              ],
            }),
          ],
        });
      }
      var eK = n(9148),
        eJ = n.n(eK);
      function eQ(e) {
        let t = (0, b.useRef)(null),
          n = (0, b.useRef)(null),
          r = (0, b.useRef)(null),
          a = (0, b.useRef)(null),
          s = (0, b.useRef)(null),
          o = (0, b.useRef)(null),
          l = (0, b.useRef)(null),
          c = (0, b.useRef)(null),
          u = (0, b.useRef)({ review: "", pending: "" }),
          h = (0, b.useRef)(!0),
          [, p] = (0, b.useState)(0);
        async function m(t, n) {
          if (!e.busy) {
            c.current = t;
            try {
              await n();
            } finally {
              h.current && p((e) => e + 1);
            }
          }
        }
        ((0, b.useEffect)(
          () => (
            (h.current = !0),
            () => {
              h.current = !1;
            }
          ),
          [],
        ),
          (0, b.useEffect)(() => {
            if (e.busy || !t.current) return;
            let i = t.current.closest(".os-window");
            if (
              i &&
              (i.hasAttribute("hidden") || !i.classList.contains("focused"))
            )
              return;
            let d = !!(e.review && e.review.id !== u.current.review),
              h = !!(e.pending && e.pending.id !== u.current.pending);
            if (!c.current && !d && !h) return;
            let p = null;
            (e.error
              ? (p = s.current)
              : "amount" === c.current
                ? (p = l.current)
                : ("review" === c.current || d) && e.review
                  ? (n.current?.scrollIntoView({
                      block: "start",
                      inline: "nearest",
                      behavior: "instant",
                    }),
                    (p = e.enabled ? r.current : n.current))
                  : e.notice
                    ? (p = o.current)
                    : e.pending && (p = a.current),
              p &&
                (p.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                  behavior: "instant",
                }),
                p.focus({ preventScroll: !0 }),
                (c.current = null),
                (u.current = {
                  review: e.review?.id || "",
                  pending: e.pending?.id || "",
                })));
          }));
        let f = e.busy || !!e.review || !!e.pending;
        return (0, i.jsxs)("section", {
          className: `computer-form ${eJ().flow}`,
          ref: t,
          "aria-label": "Compute deposit",
          children: [
            (0, i.jsx)("h3", { children: "Add managed compute credit" }),
            (0, i.jsx)("p", {
              className: "computer-help",
              children:
                "SOL deposits remain pending until their actual USD settlement is recorded. No exchange rate or automatic swap is assumed. You review the exact payment before approving it in your wallet.",
            }),
            (0, i.jsxs)("label", {
              children: [
                "Funding source",
                (0, i.jsxs)("select", {
                  value: e.kind,
                  disabled: f,
                  onChange: (t) => e.onKind(t.target.value),
                  children: [
                    (0, i.jsx)("option", {
                      value: "deposit",
                      children: "Wallet compute deposit",
                    }),
                    (0, i.jsx)("option", {
                      value: "creator_forward",
                      children: "Creator-signed fee forwarding",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("label", {
              children: [
                "SOL amount",
                (0, i.jsx)("input", {
                  ref: l,
                  value: e.amount,
                  disabled: f,
                  onChange: (t) => e.onAmount(t.target.value),
                  inputMode: "decimal",
                  maxLength: 40,
                }),
              ],
            }),
            (0, i.jsx)(w.$, {
              disabled: !e.enabled || f || !e.fundingEnabled,
              onClick: () => void m("review", e.onReview),
              children:
                !e.busy || e.review || e.pending
                  ? "Review deposit"
                  : "Preparing deposit…",
            }),
            e.error &&
              (0, i.jsx)("div", {
                ref: s,
                className: `read-error ${eJ().feedback}`,
                role: "alert",
                tabIndex: -1,
                children: e.error,
              }),
            e.notice &&
              (0, i.jsx)("div", {
                ref: o,
                className: `read-loading ${eJ().feedback}`,
                role: "status",
                tabIndex: -1,
                children: e.notice,
              }),
            e.review &&
              (0, i.jsxs)("div", {
                ref: n,
                className: `funding-review ${eJ().review}`,
                tabIndex: -1,
                role: "region",
                "aria-label": "Review deposit before wallet approval",
                children: [
                  (0, i.jsx)("h3", { children: "Review before signing" }),
                  (0, i.jsx)("p", { children: e.review.notice }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Exact amount: ",
                      (0, i.jsxs)("strong", {
                        children: [e.review.lamports, " lamports"],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Recipient: ",
                      (0, i.jsx)("code", { children: e.review.recipient }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: eJ().actions,
                    children: [
                      (0, i.jsx)(w.$, {
                        ref: r,
                        disabled: e.busy || !e.enabled,
                        onClick: () => void m("result", e.onApprove),
                        children: "Approve in wallet",
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        disabled: e.busy,
                        onClick: () => {
                          ((c.current = "amount"),
                            e.onCancel(),
                            p((e) => e + 1));
                        },
                        children: "Cancel",
                      }),
                    ],
                  }),
                  (0, i.jsx)("small", {
                    children:
                      "No payment is sent until you approve in your wallet.",
                  }),
                ],
              }),
            e.pending &&
              (0, i.jsxs)("div", {
                ref: a,
                className: `funding-review ${eJ().review}`,
                tabIndex: -1,
                role: "region",
                "aria-label": "Saved deposit receipt",
                children: [
                  (0, i.jsx)("h3", { children: "Deposit receipt saved" }),
                  (0, i.jsx)("p", {
                    children:
                      "Its mainnet status updates automatically while Funding is open. Check it before sending another deposit. A finalized SOL payment still requires recorded settlement before it becomes compute credit.",
                  }),
                  (0, i.jsx)("a", {
                    href: `https://solscan.io/tx/${e.pending.signature}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "View submitted transaction ↗",
                  }),
                  (0, i.jsxs)("div", {
                    className: eJ().actions,
                    children: [
                      (0, i.jsx)(w.$, {
                        disabled: e.busy || !e.enabled,
                        onClick: () => void m("result", e.onCheck),
                        children: "Check mainnet receipt",
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        disabled: e.busy || !e.enabled,
                        onClick: () => void m("result", e.onRetry),
                        children: "Retry same transaction",
                      }),
                    ],
                  }),
                ],
              }),
            e.receipts.map((e) =>
              (0, i.jsxs)(
                "div",
                {
                  className: "service-row",
                  children: [
                    (0, i.jsxs)("a", {
                      href: `https://solscan.io/tx/${e.signature}`,
                      target: "_blank",
                      rel: "noreferrer",
                      children: [
                        "launch_deposit" === e.kind
                          ? "Initial launch funding \xb7 "
                          : "",
                        (0, d.Js)(e.lamports, 9),
                        " SOL ↗",
                      ],
                    }),
                    (0, i.jsx)("span", {
                      children: e.settled ? "Settled" : "Pending settlement",
                    }),
                  ],
                },
                e.id,
              ),
            ),
          ],
        });
      }
      class eZ extends Error {
        constructor(e, t) {
          (super(e), (this.status = t));
        }
      }
      async function eX(e, t, n) {
        let i,
          r = await (0, a.$)(`/api/computers/${e}`, {
            method: void 0 === t ? "GET" : "POST",
            credentials: "same-origin",
            headers:
              void 0 === t ? void 0 : { "Content-Type": "application/json" },
            body: void 0 === t ? void 0 : JSON.stringify(t),
            cache: "no-store",
            signal: n
              ? AbortSignal.any([n, AbortSignal.timeout(3e4)])
              : AbortSignal.timeout(3e4),
          });
        try {
          i = await r.json();
        } catch {
          throw new eZ(
            "The computer service returned an unreadable response. Try reading again.",
            r.status,
          );
        }
        if (!r.ok)
          throw new eZ(i.error || "Computer request failed.", r.status);
        return i;
      }
      let e0 = Promise.resolve();
      function e1(e) {
        let t = e0.then(e, e);
        return ((e0 = t.catch(() => {})), t);
      }
      function e2() {
        return e1(() => eX("logout", {}));
      }
      function e6(e, t) {
        let n = (0, r.EF)();
        return e1(async () => {
          let i = () => {
            if (
              (t?.throwIfAborted(),
              !e ||
                !n ||
                (0, r.EF)()?.revision !== n.revision ||
                (0, r.EF)()?.address !== e)
            )
              throw Error(
                "Wallet changed. Connect your account and authenticate again.",
              );
          };
          i();
          let a = await s(e, () => eX("session", void 0, t), i);
          if (a) return a;
          if (!n?.canSignMessage)
            throw Error(
              "This wallet cannot sign login messages. Choose a Solana wallet with message signing.",
            );
          (await eX("logout", {}, t), i());
          let o = await eX("challenge", { wallet: e }, t);
          i();
          let l = await (0, r.o$)(e, new TextEncoder().encode(o.message));
          i();
          let c = await eX(
            "login",
            { id: o.id, signature: btoa(String.fromCharCode(...l)) },
            t,
          );
          return (i(), c);
        });
      }
      (0, r.sq)(() => {
        e2().catch(() => {});
      });
      let e4 = (e) => "$" + (0, d.Js)(e, 6);
      function e5(e = "") {
        let [t, n] = (0, b.useState)({
            connected: !1,
            loading: !0,
            machines: [],
            summary: null,
            selectedMint: "",
            selected: null,
            status: null,
            error: null,
          }),
          [i, r] = (0, b.useState)(0),
          a = (0, b.useCallback)(() => r((e) => e + 1), []);
        return (
          (0, b.useEffect)(() => {
            let t = new AbortController(),
              i = !1;
            async function r() {
              if (!document.hidden && !i) {
                i = !0;
                try {
                  let [i, r, a] = await Promise.all([
                    eX("machines", void 0, t.signal),
                    eX("status", void 0, t.signal),
                    e
                      ? eX(
                          `machines?mint=${encodeURIComponent(e)}`,
                          void 0,
                          t.signal,
                        )
                      : Promise.resolve({ machines: [] }),
                  ]);
                  t.signal.aborted ||
                    n({
                      connected: !0,
                      loading: !1,
                      machines: i.machines,
                      summary: i.summary || null,
                      selectedMint: e,
                      selected: a.machines.find((t) => t.mint === e) || null,
                      status: r,
                      error: null,
                    });
                } catch (e) {
                  t.signal.aborted ||
                    n((t) => ({
                      ...t,
                      loading: !1,
                      connected: !1,
                      error:
                        e instanceof Error
                          ? e.message
                          : "Directory unavailable.",
                    }));
                } finally {
                  i = !1;
                }
              }
            }
            r();
            let a = setInterval(r, 15e3);
            return (
              document.addEventListener("visibilitychange", r),
              () => {
                (t.abort(),
                  clearInterval(a),
                  document.removeEventListener("visibilitychange", r));
              }
            );
          }, [i, e]),
          {
            ...t,
            selected: t.selectedMint === e ? t.selected : null,
            reload: a,
          }
        );
      }
      function e3({
        mint: e,
        wallet: t,
        mode: a,
        onSelect: s,
        directory: d,
        onLaunch: f,
        onInspect: g,
        onConnect: v,
      }) {
        let x =
            d.selected?.mint === e
              ? d.selected
              : d.machines.find((t) => t.mint === e),
          y = (0, b.useRef)(new AbortController());
        (0, b.useEffect)(
          () => ((y.current = new AbortController()), () => y.current.abort()),
          [],
        );
        let [k, S] = (0, b.useState)(null),
          [C, N] = (0, b.useState)(""),
          [E, A] = (0, b.useState)(""),
          [T, R] = (0, b.useState)(!1),
          [$, I] = (0, b.useState)(""),
          [O, L] = (0, b.useState)(
            "files" === a
              ? "files"
              : "treasury" === a
                ? "funding"
                : "leaderboard" === a
                  ? "journal"
                  : "desktop",
          ),
          [D, P] = (0, b.useState)(!1),
          z = (0, b.useRef)({ revision: 0, authenticating: !1 }),
          [_, U] = (0, b.useState)(""),
          [F, W] = (0, b.useState)(""),
          [q, V] = (0, b.useState)("deposit"),
          [B, G] = (0, b.useState)(null),
          Y = (0, b.useRef)(new Set()),
          [K, J] = (0, b.useState)(""),
          [Q, Z] = (0, b.useState)(""),
          [X, ee] = (0, b.useState)("3000"),
          [ei, er] = (0, b.useState)(""),
          ea = k?.machine.mint === e ? k : null,
          es = x?.id,
          eo = ea ? l(ea.machine) : null,
          el = (0, b.useRef)(null),
          ec = (0, b.useRef)(!1);
        async function ed(e, n = !0, i = !1) {
          let r = (e) => {
            (N(e), i && ej({ error: e, notice: "" }));
          };
          if ((i && ej({ error: "", notice: "" }), !d.connected))
            return void r(
              "Reconnect the computer service before performing remote actions.",
            );
          if (n && (!D || $ !== t || !t))
            return void r(
              "Check your wallet session before performing remote actions.",
            );
          (R(!0), N(""), A(""));
          try {
            await e();
          } catch (e) {
            (r(e instanceof Error ? e.message : "Computer operation failed."),
              e instanceof eZ && 401 === e.status && (I(""), P(!1)));
          } finally {
            R(!1);
          }
        }
        async function eu() {
          ((z.current.authenticating = !0), z.current.revision++);
          try {
            let e = await e6(t, y.current.signal);
            (I(e.wallet), P(!0));
          } catch (e) {
            throw (
              P(!1),
              e instanceof eZ &&
                (401 === e.status || 403 === e.status) &&
                I(""),
              e
            );
          } finally {
            ((z.current.authenticating = !1), z.current.revision++);
          }
        }
        async function eh() {
          x && S(await eX(`machines/${x.id}`));
        }
        async function em() {
          if (!x || !/^\d+(\.\d{1,9})?$/.test(F))
            throw Error("Enter a SOL amount with at most 9 decimal places.");
          let [e, n = ""] = F.split("."),
            i = BigInt(e) * BigInt(1e9) + BigInt(n.padEnd(9, "0"));
          eb({
            ...(await eX(`machines/${x.id}/fund`, {
              lamports: i.toString(),
              kind: q,
            })),
            wallet: t,
            machine: x.id,
          });
        }
        ((0, b.useEffect)(() => {
          "status" === O &&
            ec.current &&
            el.current &&
            ((ec.current = !1),
            (el.current.open = !0),
            el.current.scrollIntoView({ block: "nearest" }),
            el.current.querySelector("summary")?.focus());
        }, [O]),
          (0, b.useEffect)(() => {
            if (!es) return;
            let e = new AbortController(),
              t = !1,
              n = !1;
            async function i() {
              if (!e.signal.aborted && !document.hidden) {
                if (t) {
                  n = !0;
                  return;
                }
                t = !0;
                try {
                  let t = await eX(`machines/${es}`, void 0, e.signal);
                  e.signal.aborted || (S(t), N(""));
                } catch (t) {
                  e.signal.aborted ||
                    N(
                      t instanceof Error
                        ? t.message
                        : "Computer record unavailable.",
                    );
                } finally {
                  ((t = !1), n && ((n = !1), i()));
                }
              }
            }
            i();
            let r = setInterval(i, 1e4);
            return (
              document.addEventListener("visibilitychange", i),
              window.addEventListener("focus", i),
              () => {
                (e.abort(),
                  clearInterval(r),
                  document.removeEventListener("visibilitychange", i),
                  window.removeEventListener("focus", i));
              }
            );
          }, [es]),
          (0, b.useEffect)(() => {
            if (!t || !d.connected) return;
            let e = new AbortController(),
              n = async () => {
                if (z.current.authenticating) return;
                let n = ++z.current.revision,
                  i = await o(t, () => eX("session", void 0, e.signal));
                e.signal.aborted ||
                  n !== z.current.revision ||
                  (P("verified" === i),
                  "verified" === i ? I(t) : "revoked" === i && I(""));
              };
            n();
            let i = setInterval(n, 3e4);
            return () => {
              (e.abort(), clearInterval(i));
            };
          }, [t, d.connected]),
          (0, b.useEffect)(() => {
            if (!es || !t) return;
            let e = !0;
            try {
              let n = JSON.parse(
                localStorage.getItem("coinputer.pending-compute") || "null",
              );
              n?.machine === es &&
                n.wallet === t &&
                "string" == typeof n.transaction &&
                /^[1-9A-HJ-NP-Za-km-z]{64,88}$/.test(n.signature) &&
                queueMicrotask(() => {
                  e && G(n);
                });
            } catch {}
            return (
              $ === t &&
                D &&
                eX(`machines/${es}/pending-funds`, {})
                  .then((t) => {
                    e && t.pending[0] && G(t.pending[0]);
                  })
                  .catch(() => {}),
              () => {
                e = !1;
              }
            );
          }, [es, t, $, D]));
        let [ex, eb] = (0, b.useState)(null),
          [ew, ej] = (0, b.useState)({ error: "", notice: "" });
        function ey(e) {
          (A(e), ej({ error: "", notice: e }));
        }
        async function ek(e, t, n) {
          if ((n.throwIfAborted(), p(e))) {
            let r = t.machine + ":" + t.wallet + ":" + t.id;
            if (!Y.current.has(r)) {
              Y.current.add(r);
              var i = localStorage;
              try {
                let e = JSON.parse(
                  i.getItem("coinputer.pending-compute") || "null",
                );
                e &&
                  ["id", "machine", "wallet", "signature"].every(
                    (n) => e[n] === t[n],
                  ) &&
                  i.removeItem("coinputer.pending-compute");
              } catch {}
              (G((e) =>
                e?.id === t.id &&
                e.machine === t.machine &&
                e.wallet === t.wallet
                  ? null
                  : e,
              ),
                ey(m(e)),
                d.reload());
              try {
                let e = await eX(`machines/${t.machine}`, void 0, n);
                n.aborted || S(e);
              } catch {}
            }
          } else ey(m(e));
        }
        async function eS() {
          if (!B || B.machine !== es || B.wallet !== t) return;
          let e = y.current.signal,
            n = await eX(
              `machines/${B.machine}/funding-status`,
              { id: B.id },
              e,
            );
          await ek(n, B, e);
        }
        async function eC() {
          if (!ex || !x) return;
          if (ex.wallet !== t || ex.machine !== x.id || $ !== t)
            throw Error(
              "Wallet or machine changed. Review this deposit again.",
            );
          let { VersionedTransaction: e } = await Promise.resolve().then(
              n.bind(n, 3596),
            ),
            { encodeBase58: i } = await n.e(172).then(n.bind(n, 6172)),
            a = e.deserialize(
              Uint8Array.from(atob(ex.transaction), (e) => e.charCodeAt(0)),
            ),
            s = Array.from(a.message.serialize()).join(","),
            o = await (0, r.b6)(t, a);
          if (
            (y.current.signal.throwIfAborted(),
            s !== Array.from(o.message.serialize()).join(",") ||
              o.signatures.some((e) => e.every((e) => 0 === e)))
          )
            throw Error(
              "The wallet changed the reviewed transaction or a signature is missing.",
            );
          let l = btoa(String.fromCharCode(...o.serialize())),
            c = i(o.signatures[0]),
            d = {
              id: ex.id,
              signature: c,
              machine: x.id,
              wallet: t,
              transaction: l,
            };
          (localStorage.setItem("coinputer.pending-compute", JSON.stringify(d)),
            G(d),
            eb(null),
            await eX(`machines/${d.machine}/submit-fund`, {
              id: d.id,
              transaction: l,
            }),
            ey(
              "Submitted. Checking mainnet confirmation automatically. Do not send another deposit while confirmation is pending.",
            ));
        }
        let eN = $ === t && !!t,
          eE = eN && !D,
          eT = d.connected && eN && D;
        (0, b.useEffect)(() => {
          if (
            "funding" !== O ||
            !eT ||
            !B ||
            B.machine !== es ||
            B.wallet !== t
          )
            return;
          let e = new AbortController(),
            n = (function (e) {
              let t = !1,
                n = !1,
                i,
                r = () => {
                  void 0 !== i && clearTimeout(i);
                },
                a = () => {
                  (r(),
                    n ||
                      e.signal.aborted ||
                      (i = setTimeout(() => void s(), e.intervalMs ?? 5e3)));
                };
              async function s() {
                if (!(n || e.signal.aborted) && !t) {
                  if ((r(), !e.visible())) return void a();
                  t = !0;
                  try {
                    let t = await e.read();
                    if (n || e.signal.aborted) return;
                    ((n = p(t)), await e.onStatus(t));
                  } catch (t) {
                    e.signal.aborted || e.onError(t);
                  } finally {
                    ((t = !1), a());
                  }
                }
              }
              return (
                e.signal.addEventListener("abort", r, { once: !0 }),
                s(),
                { check: s }
              );
            })({
              signal: e.signal,
              visible: () => !document.hidden,
              read: () =>
                eX(
                  `machines/${B.machine}/funding-status`,
                  { id: B.id },
                  e.signal,
                ),
              onStatus: (t) => ek(t, B, e.signal),
              onError: (e) => {
                (e instanceof eZ &&
                  (401 === e.status || 403 === e.status) &&
                  P(!1),
                  ej({
                    error:
                      "Confirmation is temporarily unavailable. Your receipt is saved; reconnect and check again before making another deposit.",
                    notice: "",
                  }));
              },
            }),
            i = () => void n.check();
          return (
            document.addEventListener("visibilitychange", i),
            () => {
              (e.abort(), document.removeEventListener("visibilitychange", i));
            }
          );
        }, [O, eT, es, t, B?.id, B?.signature]);
        let eR = ea
            ? (function (e) {
                if (!["UNPROVISIONED", "SLEEPING"].includes(e.state))
                  return null;
                let t = e.startupQuote;
                if (
                  !t ||
                  !t.priceId ||
                  !Number.isFinite(t.windowHours) ||
                  t.windowHours <= 0
                )
                  return null;
                let n = h(t.requiredComputeMicro),
                  i = h(t.requiredReserveMicro),
                  r = h(t.minimumBudgetMicro),
                  a = h(e.creditMicro),
                  s = h(e.storageReserveMicro),
                  o = h(e.budgetMicro);
                if (
                  null === n ||
                  null === i ||
                  null === r ||
                  null === a ||
                  null === s ||
                  null === o ||
                  r < n + i
                )
                  return null;
                let l = a >= n && s >= i,
                  c = e.preserved ? "Wake computer" : "Start computer",
                  d = `Requires ${u(n + i)} allocated: ${u(n)} compute and ${u(i)} saved-disk reserve. The ${t.windowHours}-hour operating window includes startup and safe shutdown; it is not guaranteed interactive desktop time.`,
                  p =
                    o < r
                      ? ` Choosing ${c} also sets this computer’s spending limit to ${u(r)}. This is a cap, not another payment.`
                      : "";
                return {
                  funded: l,
                  label: c,
                  disclosure: d + p,
                  approval: {
                    priceId: t.priceId,
                    minimumBudgetMicro: t.minimumBudgetMicro,
                  },
                };
              })(ea.machine)
            : null,
          e$ = !!ea?.receipts.some((e) => !e.settled);
        async function eI() {
          x && eR?.funded
            ? (await eX(
                `machines/${x.id}/wake`,
                { startupApproval: eR.approval },
                y.current.signal,
              ),
              await eh(),
              d.reload())
            : L("funding");
        }
        let eL = ea ? (0, c.y)(ea.machine) : null,
          eP = ea?.machine.accessMode === "wallet",
          ez = !!(
            ea?.machine.state === "UNPROVISIONED" &&
            ea.machine.automaticStart?.enrolled
          ),
          e_ = d.connected
            ? t
              ? eT
                ? ez
                  ? {
                      action: "status",
                      label: "Check startup",
                      help:
                        "Your computer starts automatically after launch. Preparing the desktop may take a few minutes. " +
                        (ea.machine.automaticStart.message ||
                          "Checking startup availability.") +
                        " You can close this page and return to check progress.",
                    }
                  : ea &&
                      ["UNPROVISIONED", "SLEEPING"].includes(ea.machine.state)
                    ? eR?.funded && d.status?.provisioningEnabled
                      ? {
                          action: "start",
                          label: eR.label,
                          help:
                            eR.disclosure +
                            " Only the registered manager can start it.",
                        }
                      : {
                          action: "funding",
                          label: "View funding",
                          help: eR?.funded
                            ? "This computer has the required allocation. Starting is temporarily unavailable; its funding remains recorded."
                            : e$
                              ? "A SOL receipt is verified but not allocated as compute credit yet. View its settlement status; do not deposit the same funding again."
                              : eR
                                ? eR.disclosure +
                                  " Allocate the required funding before starting."
                                : "Read the current funding and startup requirements before starting this computer.",
                        }
                    : !ea || (ea.machine.online && ea.machine.desktopAvailable)
                      ? {
                          action: "enter",
                          label: "Enter computer",
                          help: eP
                            ? "Open your desktop with this signed-in wallet. Your Home is private; Shared is for this coin."
                            : "Open your desktop. Holder access is checked before connecting.",
                        }
                      : {
                          action: "status",
                          label: "Check status",
                          help: eL
                            ? "Startup is waiting for available capacity and will retry automatically. Open computer details to cancel the request."
                            : "PROVISIONING" === ea.machine.state
                              ? "The server is being prepared. You can enter when its desktop is ready."
                              : "WAKING" === ea.machine.state
                                ? "The computer is restoring its saved disk. Check again when it is online."
                                : "SAVING" === ea.machine.state
                                  ? "The computer is saving its disk before sleeping. Wait for preservation to finish."
                                  : "ERROR" === ea.machine.state
                                    ? "The computer needs attention. Check its status and the message above before trying again."
                                    : ea.machine.online
                                      ? "The server is online, but its desktop is not ready yet. Code and files may still be available."
                                      : "The computer is not responding. Check its status before opening a new session.",
                        }
                : {
                    action: "authenticate",
                    label: eE ? "Check wallet session" : "Sign in to computer",
                    help: eP
                      ? "Approve a sign-in message to use this computer with any wallet. Token ownership is not required, and signing in does not send funds."
                      : "Approve a sign-in message in your wallet. Signing in does not send funds; the server checks holder access when you open an application.",
                  }
              : {
                  action: "connect",
                  label: "Connect wallet",
                  help: eP
                    ? "Connect any wallet to use this computer. Token ownership is not required. Your private files belong to your wallet."
                    : "Connect the wallet that holds this coin. Your private files belong to that wallet.",
                }
            : {
                action: "status",
                label: "Reconnect",
                help: "The status connection is interrupted. Reconnect before starting a new session.",
              };
        function eU() {
          el.current &&
            ((el.current.open = !0),
            el.current.scrollIntoView({ block: "nearest" }),
            el.current.querySelector("summary")?.focus());
        }
        return "machines" === a
          ? (0, i.jsx)(eO, {
              directory: d,
              onSelect: s,
              onLaunch: f,
              onInspect: g,
            })
          : (0, i.jsxs)("div", {
              className: `computer-workspace${ea ? " computer-selected" : ""}`,
              children: [
                (0, i.jsxs)("div", {
                  className: "panel-intro",
                  children: [
                    (0, i.jsxs)("span", {
                      className: "eyebrow",
                      children: [
                        "COINPUTER / ",
                        "treasury" === a ? "FUNDING" : a.toUpperCase(),
                      ],
                    }),
                    (0, i.jsx)("h2", {
                      children: ea?.machine.name || "Your coin’s computer.",
                    }),
                    ea &&
                      (0, i.jsx)(eA, {
                        mint: ea.machine.mint,
                        name: ea.machine.name,
                      }),
                    " ",
                    !ea &&
                      (0, i.jsx)("p", {
                        children:
                          "A real computer for this coin. Your own Home, shared projects, and applications you can use in your browser.",
                      }),
                  ],
                }),
                (d.error || C) &&
                  (0, i.jsx)("div", {
                    className: "read-error",
                    role: "alert",
                    children: C || d.error,
                  }),
                E &&
                  (0, i.jsx)("div", {
                    className: "read-loading",
                    role: "status",
                    children: E,
                  }),
                B &&
                  "funding" !== O &&
                  (0, i.jsxs)("div", {
                    className: "funding-review",
                    role: "status",
                    children: [
                      (0, i.jsx)("b", {
                        children: "A compute deposit needs confirmation.",
                      }),
                      (0, i.jsx)("p", {
                        children:
                          "Your submitted signature is saved. Check it before making another deposit.",
                      }),
                      (0, i.jsx)("a", {
                        href: `https://solscan.io/tx/${B.signature}`,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "View mainnet transaction ↗",
                      }),
                      (0, i.jsx)(w.$, {
                        onClick: () => L("funding"),
                        children: "Open deposit receipt",
                      }),
                    ],
                  }),
                B &&
                  !d.connected &&
                  (0, i.jsxs)("p", {
                    role: "status",
                    children: [
                      "Deposit ",
                      B.signature,
                      " is saved. Confirmation will resume when the service reconnects.",
                    ],
                  }),
                !d.connected &&
                  ea &&
                  (0, i.jsxs)("div", {
                    className: "read-loading",
                    role: "status",
                    children: [
                      (0, i.jsx)("p", {
                        children:
                          "Status connection interrupted. This workspace and its unsaved drafts remain open. File operations and new connections are paused; an already connected desktop can keep running.",
                      }),
                      (0, i.jsx)(w.$, {
                        variant: "outline",
                        onClick: d.reload,
                        children: "Reconnect directory",
                      }),
                    ],
                  }),
                d.connected || ea
                  ? e
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)("div", {
                            className: "computer-session",
                            children: [
                              (0, i.jsxs)("span", {
                                children: [
                                  (0, i.jsx)(j.md, { live: eT }),
                                  d.connected
                                    ? eE
                                      ? "SESSION CHECK UNAVAILABLE"
                                      : eT
                                        ? "WALLET SESSION VERIFIED"
                                        : "SIGNED WALLET SESSION REQUIRED"
                                    : "CONNECTION INTERRUPTED",
                                ],
                              }),
                              (!["status", "desktop"].includes(O) || !ea) &&
                                (0, i.jsx)(w.$, {
                                  disabled: T || !d.connected || (!t && !v),
                                  onClick: () => (t ? void ed(eu, !1) : v?.()),
                                  children: t
                                    ? eN
                                      ? "Check session"
                                      : "Sign in to computer"
                                    : "Connect wallet",
                                }),
                            ],
                          }),
                          d.connected &&
                            eE &&
                            (0, i.jsx)("p", {
                              className: "computer-help",
                              role: "status",
                              children:
                                "The wallet session check is unavailable. New connections and remote actions are paused. An already connected desktop can keep running while its server continues to check access.",
                            }),
                          x &&
                            !ea &&
                            (0, i.jsx)("p", {
                              role: "status",
                              children: "READING COMPUTER…",
                            }),
                          !x && (d.loading || d.selectedMint !== e)
                            ? (0, i.jsx)("p", {
                                role: "status",
                                children: "RESOLVING COMPUTER…",
                              })
                            : x
                              ? ea &&
                                (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: "machine-state",
                                      children: [
                                        (0, i.jsx)(j.md, {
                                          live:
                                            d.connected && ea.machine.online,
                                          busy:
                                            d.connected &&
                                            [
                                              "PROVISIONING",
                                              "WAKING",
                                              "SAVING",
                                              "LOW_POWER",
                                            ].includes(ea.machine.state),
                                          fault:
                                            d.connected &&
                                            "ERROR" === ea.machine.state,
                                        }),
                                        (0, i.jsxs)("strong", {
                                          children: [
                                            !d.connected && "LAST KNOWN: ",
                                            eL
                                              ? "WAITING FOR CAPACITY"
                                              : ez
                                                ? "AUTOMATIC START QUEUED"
                                                : "ONLINE" !==
                                                      ea.machine.state ||
                                                    ea.machine.online
                                                  ? ea.machine.state.replaceAll(
                                                      "_",
                                                      " ",
                                                    )
                                                  : "AGENT UNAVAILABLE",
                                          ],
                                        }),
                                        (0, i.jsxs)("span", {
                                          children: [
                                            ea.machine.holdersOnline,
                                            " connected ",
                                            eP ? "users" : "holders",
                                            !d.connected && " at last read",
                                          ],
                                        }),
                                        (0, i.jsx)(w.$, {
                                          variant: "outline",
                                          disabled: T || !d.connected,
                                          onClick: () => void ed(eh, !1),
                                          children: "Check status",
                                        }),
                                      ],
                                    }),
                                    eL
                                      ? (0, i.jsxs)("div", {
                                          className: "read-loading",
                                          role: "status",
                                          children: [
                                            "Waiting for available capacity. Startup retries automatically until ",
                                            new Date(eL).toLocaleTimeString(
                                              [],
                                              {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                              },
                                            ),
                                            ". The manager can cancel the request in computer details.",
                                          ],
                                        })
                                      : ea.machine.error &&
                                        (0, i.jsx)("div", {
                                          className: "read-error",
                                          children: ea.machine.error,
                                        }),
                                    (0, i.jsx)(M, {
                                      identity: `${x.id}.${t || "visitor"}`,
                                      name: ea.machine.name,
                                      wallpaper:
                                        ea.machine.wallpaper || "phosphor",
                                      motd: ea.machine.motd || "",
                                      app: O,
                                      onApp: L,
                                      children: (e, n) => {
                                        var r;
                                        return (0, i.jsxs)(i.Fragment, {
                                          children: [
                                            "status" === e &&
                                              (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                  (0, i.jsxs)("section", {
                                                    className:
                                                      "machine-workspace-entry machine-desktop-entry computer-entry",
                                                    children: [
                                                      (0, i.jsxs)("div", {
                                                        children: [
                                                          (0, i.jsx)("span", {
                                                            className:
                                                              "eyebrow",
                                                            children:
                                                              "YOUR COIN. ITS COMPUTER.",
                                                          }),
                                                          (0, i.jsx)("h3", {
                                                            children:
                                                              "Your desktop, right here.",
                                                          }),
                                                          (0, i.jsx)("p", {
                                                            children:
                                                              "Use the browser, open files and build something. Everything runs on this coin’s real computer.",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsx)("div", {
                                                        className:
                                                          "computer-actions",
                                                        children: (0, i.jsxs)(
                                                          w.$,
                                                          {
                                                            className:
                                                              "computer-enter-button",
                                                            disabled:
                                                              T ||
                                                              ("connect" ===
                                                                e_.action &&
                                                                !v),
                                                            onClick: () => {
                                                              "connect" ===
                                                              e_.action
                                                                ? v?.()
                                                                : "authenticate" ===
                                                                    e_.action
                                                                  ? ed(
                                                                      async () => {
                                                                        (await eu(),
                                                                          ea
                                                                            .machine
                                                                            .online &&
                                                                            ea
                                                                              .machine
                                                                              .desktopAvailable &&
                                                                            n(
                                                                              "desktop",
                                                                            ));
                                                                      },
                                                                      !1,
                                                                    )
                                                                  : "start" ===
                                                                      e_.action
                                                                    ? ed(eI)
                                                                    : "funding" ===
                                                                        e_.action
                                                                      ? n(
                                                                          "funding",
                                                                        )
                                                                      : "status" ===
                                                                          e_.action
                                                                        ? (d.reload(),
                                                                          d.connected &&
                                                                            ed(
                                                                              eh,
                                                                              !1,
                                                                            ))
                                                                        : n(
                                                                            "desktop",
                                                                          );
                                                            },
                                                            children: [
                                                              T
                                                                ? "Please wait…"
                                                                : e_.label,
                                                              (0, i.jsx)(
                                                                "span",
                                                                {
                                                                  "aria-hidden":
                                                                    "true",
                                                                  children:
                                                                    " ↗",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                      }),
                                                      (0, i.jsx)("p", {
                                                        className:
                                                          "computer-entry-next",
                                                        children: e_.help,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, i.jsxs)("section", {
                                                    className:
                                                      "computer-home-guide",
                                                    "aria-label":
                                                      "Where your files live",
                                                    children: [
                                                      (0, i.jsxs)("div", {
                                                        children: [
                                                          (0, i.jsx)("b", {
                                                            children:
                                                              "Home \xb7 just for you",
                                                          }),
                                                          (0, i.jsx)("p", {
                                                            children:
                                                              "Your wallet’s private files and browser profile.",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsxs)("div", {
                                                        children: [
                                                          (0, i.jsx)("b", {
                                                            children:
                                                              "Shared \xb7 for this coin",
                                                          }),
                                                          (0, i.jsx)("p", {
                                                            children: eP
                                                              ? "Projects and files that signed-in visitors can work on together."
                                                              : "Projects and files that holders can work on together.",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsx)("small", {
                                                        children:
                                                          "Save your work before leaving. Files stay on disk; open apps close when you disconnect the desktop.",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, i.jsxs)("nav", {
                                                    className:
                                                      "computer-quick-tools",
                                                    "aria-label":
                                                      "Open a workspace tool",
                                                    children: [
                                                      (0, i.jsx)(w.$, {
                                                        variant: "outline",
                                                        onClick: () =>
                                                          n("files"),
                                                        children: "Open files",
                                                      }),
                                                      (0, i.jsx)(w.$, {
                                                        variant: "outline",
                                                        onClick: () =>
                                                          n("code"),
                                                        children:
                                                          "Open Code workspace",
                                                      }),
                                                      (0, i.jsx)("small", {
                                                        children:
                                                          "These tools use the same computer and files.",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, i.jsx)(eY, {
                                                    machine: ea.machine,
                                                    connected: d.connected,
                                                    onFunding: () =>
                                                      n("funding"),
                                                    onPowerControls: eU,
                                                  }),
                                                  ea.machine.scheduledSleepAt &&
                                                    Number.isFinite(
                                                      Date.parse(
                                                        ea.machine
                                                          .scheduledSleepAt,
                                                      ),
                                                    ) &&
                                                    (0, i.jsxs)("p", {
                                                      className:
                                                        "computer-help",
                                                      children: [
                                                        (0, i.jsxs)("b", {
                                                          children: [
                                                            ea.machine
                                                              .continuousRuntime
                                                              ? "Automatic runtime renewal \xb7 next funding check"
                                                              : "Scheduled sleep",
                                                            " \xb7 ",
                                                            new Date(
                                                              ea.machine
                                                                .scheduledSleepAt,
                                                            ).toLocaleString(),
                                                          ],
                                                        }),
                                                        (0, i.jsx)("br", {}),
                                                        ea.machine
                                                          .continuousRuntime
                                                          ? "Continues while credit and spending limits cover operation."
                                                          : "The computer will save its disk and begin sleeping at this time under its current rental window. Save work in running applications beforehand. Unused compute credit remains available.",
                                                      ],
                                                    }),
                                                  (0, i.jsxs)("details", {
                                                    className:
                                                      "computer-details",
                                                    children: [
                                                      (0, i.jsxs)("summary", {
                                                        children: [
                                                          "Funding & running costs",
                                                          (0, i.jsx)("span", {
                                                            children:
                                                              "Creator fees, credit and saved-disk storage",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsxs)("div", {
                                                        className:
                                                          "computer-details-content",
                                                        children: [
                                                          (0, i.jsx)(eD.A, {
                                                            machine: x.id,
                                                          }),
                                                          eo &&
                                                            (eo.credit ||
                                                              eo.reserve ||
                                                              eo.price) &&
                                                            (0, i.jsxs)("div", {
                                                              className:
                                                                "machine-readouts",
                                                              children: [
                                                                eo.credit &&
                                                                  (0, i.jsxs)(
                                                                    "div",
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          i.jsx)(
                                                                            "small",
                                                                            {
                                                                              children:
                                                                                "AVAILABLE COMPUTE CREDIT",
                                                                            },
                                                                          ),
                                                                          (0,
                                                                          i.jsx)(
                                                                            "b",
                                                                            {
                                                                              children:
                                                                                e4(
                                                                                  ea
                                                                                    .machine
                                                                                    .creditMicro,
                                                                                ),
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                eo.price &&
                                                                  (0, i.jsxs)(
                                                                    "div",
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          i.jsx)(
                                                                            "small",
                                                                            {
                                                                              children:
                                                                                "MANAGED PRICE / HOUR",
                                                                            },
                                                                          ),
                                                                          (0,
                                                                          i.jsx)(
                                                                            "b",
                                                                            {
                                                                              children:
                                                                                e4(
                                                                                  ea
                                                                                    .machine
                                                                                    .priceMicroHour,
                                                                                ),
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                eo.runway &&
                                                                  (0, i.jsxs)(
                                                                    "div",
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          i.jsx)(
                                                                            "small",
                                                                            {
                                                                              children:
                                                                                "CREDIT COVERS",
                                                                            },
                                                                          ),
                                                                          (0,
                                                                          i.jsxs)(
                                                                            "b",
                                                                            {
                                                                              children:
                                                                                [
                                                                                  (
                                                                                    ea
                                                                                      .machine
                                                                                      .runwaySeconds /
                                                                                    3600
                                                                                  ).toFixed(
                                                                                    1,
                                                                                  ),
                                                                                  " h",
                                                                                ],
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                eo.reserve &&
                                                                  (0, i.jsxs)(
                                                                    "div",
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          i.jsx)(
                                                                            "small",
                                                                            {
                                                                              children:
                                                                                "STORAGE RESERVE",
                                                                            },
                                                                          ),
                                                                          (0,
                                                                          i.jsx)(
                                                                            "b",
                                                                            {
                                                                              children:
                                                                                e4(
                                                                                  ea
                                                                                    .machine
                                                                                    .storageReserveMicro,
                                                                                ),
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                              ],
                                                            }),
                                                          eo?.runway &&
                                                            (0, i.jsx)("p", {
                                                              className:
                                                                "computer-help",
                                                              children:
                                                                "Credit coverage divides available compute credit by the current rate. It does not promise uninterrupted uptime: rental windows, spending limits and resource availability can end a session earlier. Saved disks use a separate storage reserve.",
                                                            }),
                                                          (0, i.jsx)(w.$, {
                                                            variant: "outline",
                                                            onClick: () =>
                                                              n("funding"),
                                                            children:
                                                              "Open funding controls",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, i.jsxs)("details", {
                                                    className:
                                                      "computer-details",
                                                    ref: el,
                                                    children: [
                                                      (0, i.jsxs)("summary", {
                                                        children: [
                                                          "Manager controls",
                                                          (0, i.jsx)("span", {
                                                            children:
                                                              "Start, wake or safely sleep this computer",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsxs)("div", {
                                                        className:
                                                          "computer-details-content",
                                                        children: [
                                                          (0, i.jsx)("p", {
                                                            className:
                                                              "computer-help",
                                                            children:
                                                              "Starting or waking a server uses this computer’s available credit. Only the registered manager can change its power state.",
                                                          }),
                                                          ea.machine
                                                            .automaticStart
                                                            ?.enrolled &&
                                                            (0, i.jsxs)("p", {
                                                              className:
                                                                "computer-help",
                                                              role: "status",
                                                              children: [
                                                                (0, i.jsx)(
                                                                  "b",
                                                                  {
                                                                    children:
                                                                      "Automatic first start",
                                                                  },
                                                                ),
                                                                (0, i.jsx)(
                                                                  "br",
                                                                  {},
                                                                ),
                                                                ea.machine
                                                                  .automaticStart
                                                                  .message,
                                                                " Coinputer checks funding automatically; this page can be closed.",
                                                              ],
                                                            }),
                                                          [
                                                            "UNPROVISIONED",
                                                            "SLEEPING",
                                                          ].includes(
                                                            ea.machine.state,
                                                          ) &&
                                                            ea.machine
                                                              .startupQuote &&
                                                            (0, i.jsxs)(
                                                              "section",
                                                              {
                                                                className:
                                                                  "computer-help",
                                                                children: [
                                                                  (0, i.jsxs)(
                                                                    "p",
                                                                    {
                                                                      children:
                                                                        [
                                                                          ez
                                                                            ? "Funding, spending approval and capacity are checked automatically."
                                                                            : eR?.disclosure ||
                                                                              "Read the current startup requirements.",
                                                                          " Estimated rate: ",
                                                                          e4(
                                                                            ea
                                                                              .machine
                                                                              .startupQuote
                                                                              .retailHourMicro,
                                                                          ),
                                                                          " per hour.",
                                                                        ],
                                                                    },
                                                                  ),
                                                                  (0, i.jsx)(
                                                                    w.$,
                                                                    {
                                                                      variant:
                                                                        "outline",
                                                                      onClick:
                                                                        () =>
                                                                          n(
                                                                            "funding",
                                                                          ),
                                                                      children:
                                                                        "View computer funding",
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          (0, i.jsxs)("div", {
                                                            className:
                                                              "computer-actions",
                                                            children: [
                                                              eL &&
                                                                (0, i.jsx)(
                                                                  w.$,
                                                                  {
                                                                    variant:
                                                                      "outline",
                                                                    disabled:
                                                                      !eT || T,
                                                                    onClick:
                                                                      () =>
                                                                        void ed(
                                                                          async () => {
                                                                            (await eX(
                                                                              `machines/${x.id}/sleep`,
                                                                              {},
                                                                            ),
                                                                              A(
                                                                                "Cancellation requested. Waiting for the startup queue to confirm it.",
                                                                              ),
                                                                              await eh());
                                                                          },
                                                                        ),
                                                                    children:
                                                                      "Cancel start",
                                                                  },
                                                                ),
                                                              !ez &&
                                                                (0, i.jsx)(
                                                                  w.$,
                                                                  {
                                                                    disabled:
                                                                      !eT ||
                                                                      T ||
                                                                      ![
                                                                        "UNPROVISIONED",
                                                                        "SLEEPING",
                                                                      ].includes(
                                                                        ea
                                                                          .machine
                                                                          .state,
                                                                      ) ||
                                                                      !!(
                                                                        eR?.funded &&
                                                                        !d
                                                                          .status
                                                                          ?.provisioningEnabled
                                                                      ),
                                                                    onClick:
                                                                      () =>
                                                                        eR?.funded
                                                                          ? void ed(
                                                                              eI,
                                                                            )
                                                                          : n(
                                                                              "funding",
                                                                            ),
                                                                    children:
                                                                      eR?.funded
                                                                        ? eR.label
                                                                        : "View funding",
                                                                  },
                                                                ),
                                                              (0, i.jsx)(w.$, {
                                                                variant:
                                                                  "outline",
                                                                disabled:
                                                                  !eT ||
                                                                  T ||
                                                                  ![
                                                                    "ONLINE",
                                                                    "LOW_POWER",
                                                                  ].includes(
                                                                    ea.machine
                                                                      .state,
                                                                  ),
                                                                onClick: () =>
                                                                  void ed(
                                                                    async () => {
                                                                      (await eX(
                                                                        `machines/${x.id}/sleep`,
                                                                        {},
                                                                      ),
                                                                        await eh());
                                                                    },
                                                                  ),
                                                                children:
                                                                  "Save & sleep",
                                                              }),
                                                            ],
                                                          }),
                                                          (0, i.jsx)("small", {
                                                            className:
                                                              "computer-help",
                                                            children:
                                                              "Power controls require the registered manager. Provider approval and the owner’s pilot budget are checked before any rental.",
                                                          }),
                                                          (0, i.jsx)(eM, {
                                                            machine: x.id,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            "desktop" === e &&
                                              (0, i.jsx)(
                                                ep,
                                                {
                                                  machine: x.id,
                                                  name: ea.machine.name,
                                                  wallet: t,
                                                  capabilities:
                                                    ea.machine
                                                      .desktopCapabilities,
                                                  accessMode:
                                                    ea.machine.accessMode,
                                                  automaticStart:
                                                    ea.machine.automaticStart,
                                                  connectRequested:
                                                    "desktop" === O,
                                                  sessionAuthorized: eN,
                                                  access: (r = {
                                                    connected: d.connected,
                                                    online: ea.machine.online,
                                                    state: ea.machine.state,
                                                    desktopAvailable:
                                                      ea.machine
                                                        .desktopAvailable,
                                                    authenticated: eT,
                                                    sessionUnverified: eE,
                                                  }).connected
                                                    ? "UNPROVISIONED" ===
                                                      r.state
                                                      ? "unprovisioned"
                                                      : "PROVISIONING" ===
                                                          r.state
                                                        ? "provisioning"
                                                        : "WAKING" === r.state
                                                          ? "waking"
                                                          : "SAVING" === r.state
                                                            ? "saving"
                                                            : "SLEEPING" ===
                                                                r.state
                                                              ? "sleeping"
                                                              : "ERROR" ===
                                                                  r.state
                                                                ? "machine-error"
                                                                : r.online
                                                                  ? r.desktopAvailable
                                                                    ? r.sessionUnverified
                                                                      ? "session-check"
                                                                      : r.authenticated
                                                                        ? null
                                                                        : "authentication"
                                                                    : "capability"
                                                                  : "offline"
                                                    : "connection",
                                                  entryAction: {
                                                    label: T
                                                      ? "Please wait…"
                                                      : e_.label,
                                                    help: e_.help,
                                                    error:
                                                      C || d.error || void 0,
                                                    disabled:
                                                      T ||
                                                      ("connect" ===
                                                        e_.action &&
                                                        !v),
                                                    onClick: () => {
                                                      "connect" === e_.action
                                                        ? v?.()
                                                        : "authenticate" ===
                                                            e_.action
                                                          ? ed(eu, !1)
                                                          : "start" ===
                                                              e_.action
                                                            ? ed(eI)
                                                            : "funding" ===
                                                                e_.action
                                                              ? n("funding")
                                                              : "status" ===
                                                                  e_.action &&
                                                                (d.reload(),
                                                                d.connected &&
                                                                  ed(eh, !1));
                                                    },
                                                  },
                                                  scheduledSleepAt:
                                                    ea.machine.scheduledSleepAt,
                                                  continuousRuntime:
                                                    ea.machine
                                                      .continuousRuntime,
                                                  onWorkspace: () => n("code"),
                                                  onMachine: () => n("status"),
                                                },
                                                `${x.id}:${t}`,
                                              ),
                                            "terminal" === e &&
                                              (eT && ea.machine.online
                                                ? (0, i.jsx)(
                                                    H,
                                                    {
                                                      machine: x.id,
                                                      onError: N,
                                                    },
                                                    `${x.id}:${t}`,
                                                  )
                                                : (0, i.jsxs)("p", {
                                                    children: [
                                                      eP
                                                        ? "Sign in with any wallet to use this computer. Token ownership is not required."
                                                        : "Authenticate as a current holder of this coin.",
                                                      " The computer must be online before a terminal can open.",
                                                    ],
                                                  })),
                                            ("files" === e || "code" === e) &&
                                              (0, i.jsx)(
                                                et,
                                                {
                                                  machine: x.id,
                                                  wallet: t,
                                                  authenticatedWallet: $,
                                                  accessMode:
                                                    ea.machine.accessMode,
                                                  enabled:
                                                    eT && ea.machine.online,
                                                  unavailableReason: d.connected
                                                    ? ea.machine.online
                                                      ? "authentication"
                                                      : "UNPROVISIONED" ===
                                                          ea.machine.state
                                                        ? "unprovisioned"
                                                        : "offline"
                                                    : "connection",
                                                  mode: e,
                                                  onService: (e) => {
                                                    (J(e.name),
                                                      Z(e.command),
                                                      ee(e.port),
                                                      L("services"));
                                                  },
                                                },
                                                x.id + ":" + t + ":" + e,
                                              ),
                                            "browser" === e &&
                                              (0, i.jsx)(ef, {
                                                machine: x.id,
                                                services: ea.services,
                                                enabled:
                                                  eT && ea.machine.online,
                                              }),
                                            "settings" === e &&
                                              (0, i.jsx)(eg, {
                                                machine: ea.machine,
                                                enabled: eT,
                                                onSaved: async () => {
                                                  (await eh(), d.reload());
                                                },
                                              }),
                                            "services" === e &&
                                              (0, i.jsxs)("section", {
                                                children: [
                                                  (0, i.jsxs)("div", {
                                                    className: "computer-form",
                                                    children: [
                                                      (0, i.jsxs)("label", {
                                                        children: [
                                                          "Service name",
                                                          (0, i.jsx)("input", {
                                                            value: K,
                                                            onChange: (e) =>
                                                              J(e.target.value),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsxs)("label", {
                                                        children: [
                                                          "Start command",
                                                          (0, i.jsx)("input", {
                                                            value: Q,
                                                            onChange: (e) =>
                                                              Z(e.target.value),
                                                            placeholder:
                                                              "Your installed application command",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsxs)("label", {
                                                        children: [
                                                          "Local port",
                                                          (0, i.jsx)("input", {
                                                            value: X,
                                                            onChange: (e) =>
                                                              ee(
                                                                e.target.value,
                                                              ),
                                                            inputMode:
                                                              "numeric",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsx)(w.$, {
                                                        disabled:
                                                          !eT ||
                                                          !ea.machine.online ||
                                                          T,
                                                        onClick: () =>
                                                          void ed(async () => {
                                                            (await eX(
                                                              `machines/${x.id}/deploy`,
                                                              {
                                                                name: K,
                                                                command: Q,
                                                                port: X,
                                                              },
                                                            ),
                                                              await eh());
                                                          }),
                                                        children:
                                                          "Start supervised service",
                                                      }),
                                                    ],
                                                  }),
                                                  ea.services.map((e) =>
                                                    (0, i.jsxs)(
                                                      "article",
                                                      {
                                                        className: "os-service",
                                                        children: [
                                                          (0, i.jsxs)("b", {
                                                            children: [
                                                              e.name,
                                                              " :",
                                                              e.port,
                                                            ],
                                                          }),
                                                          (0, i.jsxs)("span", {
                                                            children: [
                                                              e.status,
                                                              " \xb7 ",
                                                              e.request_count ||
                                                                "0",
                                                              " public requests",
                                                            ],
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                            className:
                                                              "computer-actions",
                                                            children: [
                                                              (0, i.jsx)(w.$, {
                                                                variant:
                                                                  "outline",
                                                                onClick: () =>
                                                                  L("browser"),
                                                                children:
                                                                  "Preview app",
                                                              }),
                                                              [
                                                                "start",
                                                                "stop",
                                                              ].map((t) =>
                                                                (0, i.jsx)(
                                                                  w.$,
                                                                  {
                                                                    variant:
                                                                      "outline",
                                                                    disabled:
                                                                      T ||
                                                                      !eT ||
                                                                      !ea
                                                                        .machine
                                                                        .online,
                                                                    onClick:
                                                                      () =>
                                                                        void ed(
                                                                          async () => {
                                                                            (await eX(
                                                                              `machines/${x.id}/service-control`,
                                                                              {
                                                                                id: e.id,
                                                                                action:
                                                                                  t,
                                                                              },
                                                                            ),
                                                                              await eh());
                                                                          },
                                                                        ),
                                                                    children:
                                                                      "start" ===
                                                                      t
                                                                        ? "Restart"
                                                                        : "Stop",
                                                                  },
                                                                  t,
                                                                ),
                                                              ),
                                                              (0, i.jsx)(w.$, {
                                                                variant:
                                                                  "outline",
                                                                disabled:
                                                                  T ||
                                                                  !eT ||
                                                                  !ea.machine
                                                                    .online,
                                                                onClick: () =>
                                                                  er(e.id),
                                                                children:
                                                                  "Remove",
                                                              }),
                                                              (0, i.jsx)(w.$, {
                                                                variant:
                                                                  "outline",
                                                                disabled:
                                                                  T ||
                                                                  !eT ||
                                                                  (!e.public_enabled &&
                                                                    !d.status
                                                                      ?.publicAppsEnabled),
                                                                onClick: () =>
                                                                  void ed(
                                                                    async () => {
                                                                      (await eX(
                                                                        `machines/${x.id}/service-publish`,
                                                                        {
                                                                          id: e.id,
                                                                          enabled:
                                                                            !e.public_enabled,
                                                                        },
                                                                      ),
                                                                        await eh());
                                                                    },
                                                                  ),
                                                                children:
                                                                  e.public_enabled
                                                                    ? "Unpublish"
                                                                    : "Publish app",
                                                              }),
                                                            ],
                                                          }),
                                                          ei === e.id &&
                                                            (0, i.jsxs)("div", {
                                                              className:
                                                                "funding-review",
                                                              children: [
                                                                (0, i.jsx)(
                                                                  "p",
                                                                  {
                                                                    children:
                                                                      "Stop and remove this service? Its application files will remain on disk.",
                                                                  },
                                                                ),
                                                                (0, i.jsx)(
                                                                  w.$,
                                                                  {
                                                                    disabled: T,
                                                                    onClick:
                                                                      () =>
                                                                        void ed(
                                                                          async () => {
                                                                            (await eX(
                                                                              `machines/${x.id}/service-control`,
                                                                              {
                                                                                id: e.id,
                                                                                action:
                                                                                  "remove",
                                                                              },
                                                                            ),
                                                                              er(
                                                                                "",
                                                                              ),
                                                                              await eh());
                                                                          },
                                                                        ),
                                                                    children:
                                                                      "Confirm removal",
                                                                  },
                                                                ),
                                                                (0, i.jsx)(
                                                                  w.$,
                                                                  {
                                                                    variant:
                                                                      "outline",
                                                                    onClick:
                                                                      () =>
                                                                        er(""),
                                                                    children:
                                                                      "Cancel",
                                                                  },
                                                                ),
                                                              ],
                                                            }),
                                                          e.url &&
                                                            (0, i.jsx)("a", {
                                                              href: e.url,
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children:
                                                                "Open published application ↗",
                                                            }),
                                                          (0, i.jsx)(ev, {
                                                            machine: x.id,
                                                            service: e.id,
                                                            enabled:
                                                              eT &&
                                                              !!d.status
                                                                ?.publicAppsEnabled,
                                                          }),
                                                        ],
                                                      },
                                                      e.id,
                                                    ),
                                                  ),
                                                  (0, i.jsx)("p", {
                                                    className: "computer-help",
                                                    children:
                                                      "Up to four services per machine. Public apps use isolated addresses and bounded HTTP requests. Public hosting requires its own domain and HTTPS setup.",
                                                  }),
                                                ],
                                              }),
                                            "funding" === e &&
                                              (0, i.jsxs)("section", {
                                                className: "computer-form",
                                                children: [
                                                  (0, i.jsx)(
                                                    en,
                                                    {
                                                      machine: x.id,
                                                      wallet: t,
                                                      enabled:
                                                        eT &&
                                                        !!d.status
                                                          ?.feeRoutingEnabled,
                                                      onChanged: eh,
                                                    },
                                                    `fee-routing:${x.id}:${t}`,
                                                  ),
                                                  e$ &&
                                                    (0, i.jsxs)("p", {
                                                      className:
                                                        "computer-help",
                                                      role: "status",
                                                      children: [
                                                        (0, i.jsx)("b", {
                                                          children:
                                                            "SOL received \xb7 allocation pending",
                                                        }),
                                                        (0, i.jsx)("br", {}),
                                                        "Your verified SOL receipt is waiting for its actual settlement to be recorded. It is not compute credit yet. Check the receipt below; do not send the same funding again.",
                                                      ],
                                                    }),
                                                  (0, i.jsx)(
                                                    eQ,
                                                    {
                                                      amount: F,
                                                      kind: q,
                                                      review: ex,
                                                      pending: B,
                                                      receipts: ea.receipts,
                                                      busy: T,
                                                      enabled: eT,
                                                      fundingEnabled:
                                                        !!d.status
                                                          ?.fundingEnabled,
                                                      error: ew.error,
                                                      notice: ew.notice,
                                                      onAmount: W,
                                                      onKind: V,
                                                      onReview: () =>
                                                        ed(em, !0, !0),
                                                      onApprove: () =>
                                                        ed(eC, !0, !0),
                                                      onCancel: () => {
                                                        (eb(null),
                                                          ej({
                                                            error: "",
                                                            notice: "",
                                                          }));
                                                      },
                                                      onCheck: () =>
                                                        ed(eS, !0, !0),
                                                      onRetry: () =>
                                                        ed(
                                                          async () => {
                                                            B &&
                                                              (await eX(
                                                                `machines/${B.machine}/submit-fund`,
                                                                {
                                                                  id: B.id,
                                                                  transaction:
                                                                    B.transaction,
                                                                },
                                                              ),
                                                              ey(
                                                                "The same signed transaction was sent again. No second payment was created.",
                                                              ));
                                                          },
                                                          !0,
                                                          !0,
                                                        ),
                                                    },
                                                    `deposit:${x.id}:${t}`,
                                                  ),
                                                ],
                                              }),
                                            "journal" === e &&
                                              (0, i.jsxs)("section", {
                                                className: "machine-journal",
                                                children: [
                                                  (0, i.jsxs)("p", {
                                                    children: [
                                                      "FIRST REGISTERED \xb7 ",
                                                      new Date(
                                                        ea.machine.createdAt,
                                                      ).toLocaleString(),
                                                    ],
                                                  }),
                                                  ea.events.map((e) =>
                                                    (0, i.jsxs)(
                                                      "div",
                                                      {
                                                        children: [
                                                          (0, i.jsx)("time", {
                                                            children: new Date(
                                                              e.created_at,
                                                            ).toLocaleString(),
                                                          }),
                                                          (0, i.jsx)("b", {
                                                            children: e.kind,
                                                          }),
                                                          (0, i.jsx)("p", {
                                                            children: e.message,
                                                          }),
                                                        ],
                                                      },
                                                      e.id,
                                                    ),
                                                  ),
                                                ],
                                              }),
                                            "status" === e &&
                                              "usage" === a &&
                                              ea.charges.map((e, t) =>
                                                (0, i.jsxs)(
                                                  "div",
                                                  {
                                                    className: "service-row",
                                                    children: [
                                                      (0, i.jsxs)("span", {
                                                        children: [
                                                          new Date(
                                                            e.created_at,
                                                          ).toLocaleString(),
                                                          " \xb7 ",
                                                          e.account.replaceAll(
                                                            "_",
                                                            " ",
                                                          ),
                                                        ],
                                                      }),
                                                      (0, i.jsx)("b", {
                                                        children: e4(
                                                          e.amount_micro,
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  t,
                                                ),
                                              ),
                                          ],
                                        });
                                      },
                                    }),
                                  ],
                                })
                              : (0, i.jsxs)("form", {
                                  className: "computer-form",
                                  onSubmit: (t) => {
                                    (t.preventDefault(),
                                      ed(async () => {
                                        let t = await eX(
                                          "machines",
                                          { mint: e, signature: _ },
                                          y.current.signal,
                                        );
                                        (S(await eX(`machines/${t.id}`)),
                                          d.reload(),
                                          A(
                                            "Creator verified. Computer identity registered; no server rented.",
                                          ));
                                      }));
                                  },
                                  children: [
                                    (0, i.jsxs)("label", {
                                      children: [
                                        "Original Pump.fun launch transaction",
                                        (0, i.jsx)("input", {
                                          value: _,
                                          onChange: (e) => U(e.target.value),
                                          maxLength: 88,
                                          required: !0,
                                          placeholder:
                                            "Paste the finalized launch signature",
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)(w.$, {
                                      disabled: !eT || T,
                                      children:
                                        "Verify creator & register computer",
                                    }),
                                    (0, i.jsx)("small", {
                                      children:
                                        "Connect the original creator wallet. A finalized launch proves ownership; holding tokens alone cannot claim a computer.",
                                    }),
                                  ],
                                }),
                        ],
                      })
                    : (0, i.jsx)("p", {
                        children:
                          "Inspect a mainnet mint first to select its computer.",
                      })
                  : (0, i.jsxs)("div", {
                      className: "unmounted-screen",
                      children: [
                        (0, i.jsx)("span", { children: ">_" }),
                        (0, i.jsx)("p", {
                          children: d.loading
                            ? "CONNECTING TO COMPUTER DIRECTORY…"
                            : "CONTROL SERVICE UNAVAILABLE.",
                        }),
                        (0, i.jsx)(w.$, {
                          variant: "outline",
                          onClick: d.reload,
                          children: "Read directory again",
                        }),
                        (0, i.jsx)("small", {
                          children:
                            "Computer availability could not be verified. Retry the connection; mainnet inspection remains available.",
                        }),
                      ],
                    }),
              ],
            });
      }
    },
    7796: (e) => {
      e.exports = {
        profile: "computer-profile_profile__4sTWJ",
        heading: "computer-profile_heading__7ms26",
        group: "computer-profile_group__06_zX",
        actions: "computer-profile_actions___PzNL",
        readouts: "computer-profile_readouts__sNZWA",
        note: "computer-profile_note__VUEad",
        warning: "computer-profile_warning___2HVX",
        meta: "computer-profile_meta___VyLw",
        growth: "computer-profile_growth__GTCOk",
      };
    },
    9148: (e) => {
      e.exports = {
        flow: "deposit-flow_flow__OHD5B",
        review: "deposit-flow_review__bypBz",
        actions: "deposit-flow_actions__5MDaG",
        feedback: "deposit-flow_feedback__SkYz_",
      };
    },
    9658: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => a });
      var i = n(5155);
      n(2115);
      var r = n(1337);
      function a({ className: e, type: t, ...n }) {
        return (0, i.jsx)("input", {
          type: t,
          "data-slot": "input",
          className: (0, r.cn)(
            "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
            "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
            "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
            e,
          ),
          ...n,
        });
      }
    },
  },
]);
