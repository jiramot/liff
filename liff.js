/*! For license information please see sdk.js.LICENSE.txt */ !(function (e, t) {
    console.log("init sdk")
    "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define("liff", [], t) : "object" == typeof exports ? (exports.liff = t()) : (e.liff = t());
})(window, function () {
    return (function (e) {
        console.log("sdk")
        function sdk(t) {
            console.log("sdk(sdk)")
            for (var n, i, o = t[0], s = t[1], a = 0, c = []; a < o.length; a++) (i = o[a]), Object.prototype.hasOwnProperty.call(r, i) && r[i] && c.push(r[i][0]), (r[i] = 0);
            for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
            for (u && u(t); c.length; ) c.shift()();
        }
        var n = {},
            r = { 1: 0 };
        function i(t) {
            if (n[t]) return n[t].exports;
            var r = (n[t] = { i: t, l: !1, exports: {} });
            return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
        }
        (i.e = function (e) {
            var t = [],
                n = r[e];
            if (0 !== n)
                if (n) t.push(n[2]);
                else {
                    var o = new Promise(function (t, i) {
                        n = r[e] = [t, i];
                    });
                    t.push((n[2] = o));
                    var s,
                        a = document.createElement("script");
                    (a.charset = "utf-8"),
                        (a.timeout = 120),
                    i.nc && a.setAttribute("nonce", i.nc),
                        (a.src = (function (e) {
                            return i.p + "" + ({ 0: "js-crypto-ec", 2: "vendors_js-crypto-ec" }[e] || e) + ".bd5387708ff55e6910be.js";
                        })(e));
                    var u = new Error();
                    s = function (t) {
                        (a.onerror = a.onload = null), clearTimeout(c);
                        var n = r[e];
                        if (0 !== n) {
                            if (n) {
                                var i = t && ("load" === t.type ? "missing" : t.type),
                                    o = t && t.target && t.target.src;
                                (u.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"), (u.name = "ChunkLoadError"), (u.type = i), (u.request = o), n[1](u);
                            }
                            r[e] = void 0;
                        }
                    };
                    var c = setTimeout(function () {
                        s({ type: "timeout", target: a });
                    }, 12e4);
                    (a.onerror = a.onload = s), document.head.appendChild(a);
                }
            return Promise.all(t);
        }),
            (i.m = e),
            (i.c = n),
            (i.d = function (e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (i.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function (e, t) {
                if ((1 & t && (e = i(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var r in e)
                        i.d(
                            n,
                            r,
                            function (t) {
                                return e[t];
                            }.bind(null, r)
                        );
                return n;
            }),
            (i.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = "https://static.line-scdn.net/liff/edge/2/"),
            (i.oe = function (e) {
                throw e;
            });
        var o = (window.webpackJsonpliff = window.webpackJsonpliff || []),
            s = o.push.bind(o);
        (o.push = sdk), (o = o.slice());
        for (var a = 0; a < o.length; a++) sdk(o[a]);
        var u = s;
        return i((i.s = 11));
    })([
        function (e, t, n) {
            "use strict";
            t.a = function (e) {
                var t = this.constructor;
                return this.then(
                    function (n) {
                        return t.resolve(e()).then(function () {
                            return n;
                        });
                    },
                    function (n) {
                        return t.resolve(e()).then(function () {
                            return t.reject(n);
                        });
                    }
                );
            };
        },
        function (e, t, n) {
            "use strict";
            t.a = function (e) {
                return new this(function (t, n) {
                    if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var r = Array.prototype.slice.call(e);
                    if (0 === r.length) return t([]);
                    var i = r.length;
                    function o(e, n) {
                        if (n && ("object" == typeof n || "function" == typeof n)) {
                            var s = n.then;
                            if ("function" == typeof s)
                                return void s.call(
                                    n,
                                    function (t) {
                                        o(e, t);
                                    },
                                    function (n) {
                                        (r[e] = { status: "rejected", reason: n }), 0 == --i && t(r);
                                    }
                                );
                        }
                        (r[e] = { status: "fulfilled", value: n }), 0 == --i && t(r);
                    }
                    for (var s = 0; s < r.length; s++) o(s, r[s]);
                });
            };
        },
        function (e, t, n) {
            var r, i, o;
            (i = []),
            void 0 ===
            (o =
                "function" ==
                typeof (r = function () {
                    var e = function e(t) {
                        function n(e, t) {
                            return (e >>> t) | (e << (32 - t));
                        }
                        for (var r, i, o = Math.pow, s = o(2, 32), a = "", u = [], c = 8 * t.length, l = (e.h = e.h || []), f = (e.k = e.k || []), d = f.length, h = {}, p = 2; d < 64; p++)
                            if (!h[p]) {
                                for (r = 0; r < 313; r += p) h[r] = p;
                                (l[d] = (o(p, 0.5) * s) | 0), (f[d++] = (o(p, 1 / 3) * s) | 0);
                            }
                        for (t += ""; (t.length % 64) - 56; ) t += "\0";
                        for (r = 0; r < t.length; r++) {
                            if ((i = t.charCodeAt(r)) >> 8) return;
                            u[r >> 2] |= i << (((3 - r) % 4) * 8);
                        }
                        for (u[u.length] = (c / s) | 0, u[u.length] = c, i = 0; i < u.length; ) {
                            var v = u.slice(i, (i += 16)),
                                m = l;
                            for (l = l.slice(0, 8), r = 0; r < 64; r++) {
                                var y = v[r - 15],
                                    w = v[r - 2],
                                    g = l[0],
                                    b = l[4],
                                    I =
                                        l[7] +
                                        (n(b, 6) ^ n(b, 11) ^ n(b, 25)) +
                                        ((b & l[5]) ^ (~b & l[6])) +
                                        f[r] +
                                        (v[r] = r < 16 ? v[r] : (v[r - 16] + (n(y, 7) ^ n(y, 18) ^ (y >>> 3)) + v[r - 7] + (n(w, 17) ^ n(w, 19) ^ (w >>> 10))) | 0);
                                (l = [(I + ((n(g, 2) ^ n(g, 13) ^ n(g, 22)) + ((g & l[1]) ^ (g & l[2]) ^ (l[1] & l[2])))) | 0].concat(l))[4] = (l[4] + I) | 0;
                            }
                            for (r = 0; r < 8; r++) l[r] = (l[r] + m[r]) | 0;
                        }
                        for (r = 0; r < 8; r++)
                            for (i = 3; i + 1; i--) {
                                var _ = (l[r] >> (8 * i)) & 255;
                                a += (_ < 16 ? 0 : "") + _.toString(16);
                            }
                        return a;
                    };
                    return (
                        (e.code =
                            'var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};'),
                            e
                    );
                })
                    ? r.apply(t, i)
                    : r) || (e.exports = o);
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (r) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            "use strict";
            (function (e) {
                var r = n(0),
                    i = n(1),
                    o = setTimeout;
                function s(e) {
                    return Boolean(e && void 0 !== e.length);
                }
                function a() {}
                function u(e) {
                    if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), p(e, this);
                }
                function c(e, t) {
                    for (; 3 === e._state; ) e = e._value;
                    0 !== e._state
                        ? ((e._handled = !0),
                            u._immediateFn(function () {
                                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                                if (null !== n) {
                                    var r;
                                    try {
                                        r = n(e._value);
                                    } catch (i) {
                                        return void f(t.promise, i);
                                    }
                                    l(t.promise, r);
                                } else (1 === e._state ? l : f)(t.promise, e._value);
                            }))
                        : e._deferreds.push(t);
                }
                function l(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof u) return (e._state = 3), (e._value = t), void d(e);
                            if ("function" == typeof n)
                                return void p(
                                    ((r = n),
                                        (i = t),
                                        function () {
                                            r.apply(i, arguments);
                                        }),
                                    e
                                );
                        }
                        (e._state = 1), (e._value = t), d(e);
                    } catch (o) {
                        f(e, o);
                    }
                    var r, i;
                }
                function f(e, t) {
                    (e._state = 2), (e._value = t), d(e);
                }
                function d(e) {
                    2 === e._state &&
                    0 === e._deferreds.length &&
                    u._immediateFn(function () {
                        e._handled || u._unhandledRejectionFn(e._value);
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) c(e, e._deferreds[t]);
                    e._deferreds = null;
                }
                function h(e, t, n) {
                    (this.onFulfilled = "function" == typeof e ? e : null), (this.onRejected = "function" == typeof t ? t : null), (this.promise = n);
                }
                function p(e, t) {
                    var n = !1;
                    try {
                        e(
                            function (e) {
                                n || ((n = !0), l(t, e));
                            },
                            function (e) {
                                n || ((n = !0), f(t, e));
                            }
                        );
                    } catch (r) {
                        if (n) return;
                        (n = !0), f(t, r);
                    }
                }
                (u.prototype.catch = function (e) {
                    return this.then(null, e);
                }),
                    (u.prototype.then = function (e, t) {
                        var n = new this.constructor(a);
                        return c(this, new h(e, t, n)), n;
                    }),
                    (u.prototype.finally = r.a),
                    (u.all = function (e) {
                        return new u(function (t, n) {
                            if (!s(e)) return n(new TypeError("Promise.all accepts an array"));
                            var r = Array.prototype.slice.call(e);
                            if (0 === r.length) return t([]);
                            var i = r.length;
                            function o(e, s) {
                                try {
                                    if (s && ("object" == typeof s || "function" == typeof s)) {
                                        var a = s.then;
                                        if ("function" == typeof a)
                                            return void a.call(
                                                s,
                                                function (t) {
                                                    o(e, t);
                                                },
                                                n
                                            );
                                    }
                                    (r[e] = s), 0 == --i && t(r);
                                } catch (u) {
                                    n(u);
                                }
                            }
                            for (var a = 0; a < r.length; a++) o(a, r[a]);
                        });
                    }),
                    (u.allSettled = i.a),
                    (u.resolve = function (e) {
                        return e && "object" == typeof e && e.constructor === u
                            ? e
                            : new u(function (t) {
                                t(e);
                            });
                    }),
                    (u.reject = function (e) {
                        return new u(function (t, n) {
                            n(e);
                        });
                    }),
                    (u.race = function (e) {
                        return new u(function (t, n) {
                            if (!s(e)) return n(new TypeError("Promise.race accepts an array"));
                            for (var r = 0, i = e.length; r < i; r++) u.resolve(e[r]).then(t, n);
                        });
                    }),
                    (u._immediateFn =
                        ("function" == typeof e &&
                            function (t) {
                                e(t);
                            }) ||
                        function (e) {
                            o(e, 0);
                        }),
                    (u._unhandledRejectionFn = function (e) {
                        "undefined" != typeof console && console;
                    }),
                    (t.a = u);
            }.call(this, n(7).setImmediate));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function (e, t) {
                return (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    })(e, t);
            };
            function i(e, t) {
                function n() {
                    this.constructor = e;
                }
                r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }
            var o = function () {
                return (o =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                }
                return n;
            }
            function a(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r,
                    i,
                    o = n.call(e),
                    s = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) s.push(r.value);
                } catch (e) {
                    i = { error: e };
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return s;
            }
            function u() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(a(arguments[t]));
                return e;
            }
            var c,
                l = function (e, t) {
                    if (null == t) throw new Error(e + " is requierd");
                },
                f = function (e, t, n, r) {
                    if ((void 0 === r && (r = !1), r || l(e, t), !((r && null == t) || typeof t === n))) throw new Error(e + " must be a " + n);
                },
                d = function (e, t, n) {
                    void 0 === n && (n = !1), f(e, t, "string", n);
                },
                h = function (e, t, n) {
                    void 0 === n && (n = !1), f(e, t, "number", n);
                },
                p = function (e, t, n) {
                    if ((l(e, t), !n.includes(t)))
                        throw new Error(
                            e +
                            " must be one of the followings: " +
                            n
                                .map(function (e) {
                                    return "'" + e + "'";
                                })
                                .join(", ")
                        );
                },
                v = function (e) {
                    return "object" == typeof e && "object" == typeof e.extra;
                },
                m = function (e) {
                    return "function" == typeof e;
                },
                y = function (e, t) {
                    switch (e) {
                        case "impression":
                            !(function (e) {
                                if ("object" != typeof e) throw new Error("ImpressionEvent must be an object");
                                d("placeId", e.placeId), d("index", e.index, !0), d("itemIds", e.itemIds, !0);
                            })(t);
                            break;
                        case "click":
                            !(function (e) {
                                if ("object" != typeof e) throw new Error("ClickEvent must be an object");
                                d("placeId", e.placeId), d("index", e.index, !0), d("itemIds", e.itemIds, !0);
                            })(t);
                            break;
                        case "media":
                            !(function (e) {
                                if ("object" != typeof e) throw new Error("MediaEvent must be an object");
                                var t;
                                p("action", e.action, ["play", "pause", "end", "seek"]),
                                    d("placeId", e.placeId),
                                    h("duration", e.duration),
                                    h("currentTime", e.currentTime),
                                    (t = e.muted),
                                    f("muted", t, "boolean"),
                                    p("camera", e.camera, ["on_front", "on_back", "off"]),
                                    d("index", e.index, !0),
                                    d("itemIds", e.itemIds, !0);
                            })(t);
                            break;
                        case "conversion":
                            !(function (e) {
                                if ("object" != typeof e) throw new Error("ConversionEvent must be an object");
                            })(t);
                            break;
                        case "custom":
                            !(function (e) {
                                if ("object" != typeof e) throw new Error("CustomEvent must be an object");
                                d("type", e.type), d("placeId", e.placeId, !0), d("index", e.index, !0), d("itemIds", e.itemIds, !0);
                            })(t);
                    }
                },
                w = { none: 0, error: 1, warn: 2, info: 3, debug: 4 },
                g = new ((function () {
                    function e() {
                        this._level = w.error;
                    }
                    return (
                        Object.defineProperty(e.prototype, "level", {
                            set: function (e) {
                                this._level = w[e] | w.none;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                            (e.prototype.error = function (e, t) {
                                this._level;
                            }),
                            (e.prototype.warn = function (e, t) {
                                this._level;
                            }),
                            (e.prototype.info = function (e, t) {
                                this._level;
                            }),
                            (e.prototype.debug = function (e, t) {
                                this._level;
                            }),
                            e
                    );
                })())(),
                b = {
                    "^logVersion$": "lv",
                    "^sdkVersion$": "sv",
                    "^logType$": "lt",
                    "^appId$": "aid",
                    "^appEnv$": "ae",
                    "^region$": "rg",
                    "^appType$": "at",
                    "^appVersion$": "av",
                    "^appBuild$": "ab",
                    "^deviceId$": "did",
                    "^osName$": "on",
                    "^osVersion$": "ov",
                    "^networkType$": "nt",
                    "^clientId$": "cid",
                    "^anonymousId$": "anid",
                    "^adId$": "adid",
                    "^adLimit$": "al",
                    "^userId$": "uid",
                    "^experiments$": "ex",
                    "^userParams$": "up",
                    "^clientSessionId$": "sid",
                    "^sessionParams$": "sp",
                    "^screenId$": "scid",
                    "^screenName$": "sn",
                    "^title$": "ti",
                    "^referrer$": "rf",
                    "^screenParams$": "scp",
                    "^eventType$": "et",
                    "^eventName$": "en",
                    "^eventParams$": "ep",
                    "^extra$": "ext",
                    "^clientTimestamp$": "ct",
                    "^transmit$": "tt",
                    "^sequence$": "sq",
                },
                I = function (e) {
                    for (var t in b) {
                        var n = new RegExp(t);
                        if (n.test(e)) return e.replace(n, b[t]);
                    }
                    return e;
                },
                _ = function (e, t) {
                    return (
                        void 0 === t && (t = "https://uts-front.line-apps.com"),
                            (function (e, t, n, r) {
                                return new (n || (n = Promise))(function (i, o) {
                                    function s(e) {
                                        try {
                                            u(r.next(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function a(e) {
                                        try {
                                            u(r.throw(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function u(e) {
                                        var t;
                                        e.done
                                            ? i(e.value)
                                            : ((t = e.value),
                                                t instanceof n
                                                    ? t
                                                    : new n(function (e) {
                                                        e(t);
                                                    })).then(s, a);
                                    }
                                    u((r = r.apply(e, t || [])).next());
                                });
                            })(void 0, void 0, void 0, function () {
                                var n, r;
                                return (function (e, t) {
                                    var n,
                                        r,
                                        i,
                                        o,
                                        s = {
                                            label: 0,
                                            sent: function () {
                                                if (1 & i[0]) throw i[1];
                                                return i[1];
                                            },
                                            trys: [],
                                            ops: [],
                                        };
                                    return (
                                        (o = { next: a(0), throw: a(1), return: a(2) }),
                                        "function" == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                            o
                                    );
                                    function a(o) {
                                        return function (a) {
                                            return (function (o) {
                                                if (n) throw new TypeError("Generator is already executing.");
                                                for (; s; )
                                                    try {
                                                        if (((n = 1), r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)) return i;
                                                        switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                                            case 0:
                                                            case 1:
                                                                i = o;
                                                                break;
                                                            case 4:
                                                                return s.label++, { value: o[1], done: !1 };
                                                            case 5:
                                                                s.label++, (r = o[1]), (o = [0]);
                                                                continue;
                                                            case 7:
                                                                (o = s.ops.pop()), s.trys.pop();
                                                                continue;
                                                            default:
                                                                if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                                                                    s = 0;
                                                                    continue;
                                                                }
                                                                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                                    s.label = o[1];
                                                                    break;
                                                                }
                                                                if (6 === o[0] && s.label < i[1]) {
                                                                    (s.label = i[1]), (i = o);
                                                                    break;
                                                                }
                                                                if (i && s.label < i[2]) {
                                                                    (s.label = i[2]), s.ops.push(o);
                                                                    break;
                                                                }
                                                                i[2] && s.ops.pop(), s.trys.pop();
                                                                continue;
                                                        }
                                                        o = t.call(e, s);
                                                    } catch (e) {
                                                        (o = [6, e]), (r = 0);
                                                    } finally {
                                                        n = i = 0;
                                                    }
                                                if (5 & o[0]) throw o[1];
                                                return { value: o[0] ? o[1] : void 0, done: !0 };
                                            })([o, a]);
                                        };
                                    }
                                })(this, function (i) {
                                    return (
                                        (n = o(o({}, e), { transmit: Date.now() })),
                                            (r = (function (e) {
                                                var t = {};
                                                for (var n in e) {
                                                    var r = e[n];
                                                    null != r && (t[I(n)] = r);
                                                }
                                                return t;
                                            })(o(o({}, e), { transmit: Date.now() }))),
                                            window.MSInputMethodContext && document.documentMode
                                                ? (delete r.mid, (document.createElement("IMG").src = t + "/event?d=" + encodeURIComponent(JSON.stringify(r))))
                                                : !navigator.sendBeacon || /OS (11|12)_\d.+Mobile/.test(navigator.userAgent)
                                                    ? fetch(t + "/event-web", { method: "POST", body: JSON.stringify(r), mode: "no-cors", keepalive: !0 })
                                                    : navigator.sendBeacon(t + "/event-web", JSON.stringify(r)),
                                            g.debug("Sent", n),
                                            [2]
                                    );
                                });
                            })
                    );
                },
                T = new Uint8Array(16);
            function E() {
                if (
                    !c &&
                    !(c =
                        ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                        ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                )
                    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return c(T);
            }
            var O = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            function S(e) {
                return "string" == typeof e && O.test(e);
            }
            for (var P = [], A = 0; A < 256; ++A) P.push((A + 256).toString(16).substr(1));
            function N(e, t, n) {
                var r = (e = e || {}).random || (e.rng || E)();
                if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
                    n = n || 0;
                    for (var i = 0; i < 16; ++i) t[n + i] = r[i];
                    return t;
                }
                return (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = (
                            P[e[t + 0]] +
                            P[e[t + 1]] +
                            P[e[t + 2]] +
                            P[e[t + 3]] +
                            "-" +
                            P[e[t + 4]] +
                            P[e[t + 5]] +
                            "-" +
                            P[e[t + 6]] +
                            P[e[t + 7]] +
                            "-" +
                            P[e[t + 8]] +
                            P[e[t + 9]] +
                            "-" +
                            P[e[t + 10]] +
                            P[e[t + 11]] +
                            P[e[t + 12]] +
                            P[e[t + 13]] +
                            P[e[t + 14]] +
                            P[e[t + 15]]
                        ).toLowerCase();
                    if (!S(n)) throw TypeError("Stringified UUID is invalid");
                    return n;
                })(r);
            }
            var k = function (e) {
                    return ["category", "action", "label", "value", "dimensions"].some(function (t) {
                        return t === e;
                    });
                },
                j = function (e) {
                    return ["id", "version", "loginStatus"].some(function (t) {
                        return t === e;
                    });
                },
                x = function (e) {
                    return ["appId", "appEnv"].some(function (t) {
                        return t === e;
                    });
                },
                D = function (e) {
                    return [
                        "region",
                        "appVersion",
                        "appBuild",
                        "deviceId",
                        "osName",
                        "osVersion",
                        "networkType",
                        "adId",
                        "adLimit",
                        "userId",
                        "mid",
                        "tid",
                        "experiments",
                        "userParams",
                        "sessionParams",
                        "screenId",
                        "screenName",
                        "title",
                        "url",
                        "referrer",
                        "screenParams",
                        "extra",
                    ].some(function (t) {
                        return t === e;
                    });
                },
                C = location.hostname.split(".").splice(-2).join("."),
                L = {
                    set: function (e, t, n) {
                        void 0 === n && (n = location.hostname);
                        var r = "https:" === location.protocol ? "secure" : "";
                        document.cookie = "_uts_" + e + "=" + t + "; domain=" + n + "; path=/; max-age=31536000; samesite=lax; " + r + ";";
                    },
                    get: function (e, t) {
                        var n = new Map(
                            document.cookie.split(";").map(function (e) {
                                var t = a(e.split("="), 2),
                                    n = t[0],
                                    r = t[1];
                                return [n.trim(), r];
                            })
                        ).get("_uts_" + e);
                        return n && L.set(e, n, t), n;
                    },
                },
                U = function () {
                    var e = L.get("cid", C);
                    return e || ((e = N()), L.set("cid", e, C)), e;
                },
                R = function () {
                    var e,
                        t = L.get("cs");
                    if (t)
                        try {
                            e = JSON.parse(t);
                        } catch (e) {
                            g.error(e);
                        }
                    return e;
                },
                F = function (e, t) {
                    L.set("cs", JSON.stringify(e), t);
                },
                M = function (e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = ((t << 5) - t + e.charCodeAt(n)) | 0;
                    return t;
                },
                B = function (e) {
                    return !(e && "object" == typeof e && "string" == typeof e.sid && "number" == typeof e.expiredAt);
                },
                V = function (e) {
                    return e ? M(e) : void 0;
                },
                W = (function () {
                    function e(e, t) {
                        var n, r, i, o;
                        void 0 === t && (t = 18e5),
                            (this._domain = e),
                            (this._duration = t),
                            (this._session = R()),
                            (this._params = null === (n = this._session) || void 0 === n ? void 0 : n.sp),
                            (this._mc = null === (r = this._session) || void 0 === r ? void 0 : r.mc),
                            (this._tc = null === (i = this._session) || void 0 === i ? void 0 : i.tc),
                            (this._uc = null === (o = this._session) || void 0 === o ? void 0 : o.uc);
                    }
                    return (
                        (e.prototype.renew = function () {
                            (this._params = B(this._session) ? this._params : void 0), (this._session = { sp: this._params, mc: this._mc, tc: this._tc, uc: this._uc }), F(this._session, this._domain);
                        }),
                            Object.defineProperty(e.prototype, "info", {
                                get: function () {
                                    var e, t, n, r, i;
                                    (this._session = R()), this._session || (g.debug("Session info is not found in cookies"), (this._params = void 0), (this._mc = this._tc = this._uc = void 0), this.renew());
                                    var o = (null !== (t = null === (e = this._session) || void 0 === e ? void 0 : e.expiredAt) && void 0 !== t ? t : 0) < Date.now(),
                                        s = !o && (null === (n = this._session) || void 0 === n ? void 0 : n.sid) ? this._session.sid : N(),
                                        a = o || null == (null === (r = this._session) || void 0 === r ? void 0 : r.sq) ? 0 : (null === (i = this._session) || void 0 === i ? void 0 : i.sq) + 1;
                                    return (
                                        (this._params = !B(this._session) && o ? void 0 : this._params),
                                            (this._session = { sid: s, sq: a, expiredAt: Date.now() + this._duration, sp: this._params, mc: this._mc, tc: this._tc, uc: this._uc }),
                                            F(this._session, this._domain),
                                            this._session
                                    );
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "user", {
                                set: function (e) {
                                    var t = e.mid,
                                        n = e.tid,
                                        r = e.userId;
                                    (this._mc = V(t)), (this._tc = V(n)), (this._uc = V(r));
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "params", {
                                get: function () {
                                    var e;
                                    return null !== (e = this._params) && void 0 !== e ? e : {};
                                },
                                set: function (e) {
                                    this._params = e;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.isChanged = function (e) {
                                var t,
                                    n = e.mid,
                                    r = e.tid,
                                    i = e.userId,
                                    o = e.sessionParams,
                                    s = V(n),
                                    a = V(r),
                                    u = V(i);
                                return (
                                    s != this._mc ||
                                    a != this._tc ||
                                    u != this._uc ||
                                    !(
                                        !o ||
                                        (function (e, t) {
                                            var n,
                                                r,
                                                i = Object.keys(e),
                                                o = Object.keys(t);
                                            if (i.length !== o.length) return !1;
                                            try {
                                                for (
                                                    var s = (function (e) {
                                                            var t = "function" == typeof Symbol && Symbol.iterator,
                                                                n = t && e[t],
                                                                r = 0;
                                                            if (n) return n.call(e);
                                                            if (e && "number" == typeof e.length)
                                                                return {
                                                                    next: function () {
                                                                        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                                                                    },
                                                                };
                                                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                                                        })(i),
                                                        a = s.next();
                                                    !a.done;
                                                    a = s.next()
                                                ) {
                                                    var u = a.value;
                                                    if (e[u] !== t[u]) return !1;
                                                }
                                            } catch (e) {
                                                n = { error: e };
                                            } finally {
                                                try {
                                                    a && !a.done && (r = s.return) && r.call(s);
                                                } finally {
                                                    if (n) throw n.error;
                                                }
                                            }
                                            return !0;
                                        })(null !== (t = this._params) && void 0 !== t ? t : {}, null != o ? o : {})
                                    )
                                );
                            }),
                            e
                    );
                })(),
                G = "NOT_INITIALIZED",
                $ = "INVALID_EVENT",
                K = (function (e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return t && (r.name = t), r;
                    }
                    return i(t, e), t;
                })(Error),
                q = (function () {
                    function e(e, t) {
                        (this._required = e), (this._optional = {}), (this._dimensions = {});
                        try {
                            !(function (e) {
                                if ("object" != typeof e) throw new Error("RequiredContext must be an object");
                                d("appId", e.appId), p("appEnv", e.appEnv, ["local", "dev", "alpha", "beta", "rc", "release"]);
                            })(e);
                        } catch (e) {
                            throw new K("INVALID_CONTEXT", e.message);
                        }
                        for (var n in e) this.removeInvalidContext(n, e, x);
                        (this._clientId = U()), (this._session = new W(null == t ? void 0 : t.sessionDomain, null == t ? void 0 : t.sessionDuration));
                    }
                    return (
                        Object.defineProperty(e.prototype, "clientId", {
                            get: function () {
                                return this._clientId;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                            Object.defineProperty(e.prototype, "sessionParams", {
                                get: function () {
                                    var e;
                                    return null !== (e = this._sessionParams) && void 0 !== e ? e : this._session.params;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.context = function (e) {
                                for (var t in e) {
                                    var n = e[t];
                                    "sessionParams" !== t
                                        ? /^dimension([0-9]|1[0-9])$/.test(t)
                                            ? (this._dimensions[t] = n)
                                            : this.removeInvalidContext(t, e, D) || (this._optional[t] = "extra" === t ? o(o({}, this._optional.extra), n) : n)
                                        : (this._sessionParams = n);
                                }
                                return this;
                            }),
                            (e.prototype.event = function (e) {
                                var t = e.type,
                                    n = e.event,
                                    r = e.timestamp;
                                return (this._eventType = t), (this._event = n), (this._timestamp = r), this;
                            }),
                            (e.prototype.extra = function (e) {
                                return (this._extra = e), this;
                            }),
                            (e.prototype.build = function () {
                                var e, t;
                                if ("pageview" !== (t = this._eventType) && "impression" !== t && "click" !== t && "media" !== t && "foreground" !== t && "background" !== t && "conversion" !== t && "custom" !== t)
                                    throw new K("INVALID_EVENT_TYPE", this._eventType);
                                var n = this.buildExtra(),
                                    r = n.extra,
                                    i = n.dimensions,
                                    s = this.buildEventParams(i),
                                    a = s.eventName,
                                    u = s.eventParams,
                                    c = U();
                                this._clientId !== c && (g.debug("clientId is not found in cookies"), (this._clientId = c), this._session.renew()),
                                this._session.isChanged(o(o({}, this._optional), { sessionParams: this._sessionParams })) &&
                                (this._session.renew(), (this._session.user = this._optional), this._sessionParams && (this._session.params = this._sessionParams));
                                var l = this._session.info;
                                return (
                                    g.debug("Session", l),
                                        o(
                                            o(
                                                o(
                                                    o(o({}, o(o({ screenName: location.pathname, title: document.title, url: location.href, referrer: document.referrer }, this._required), this._optional)), {
                                                        logVersion: 2,
                                                        logType: "normal",
                                                        sdkVersion: "3.0.5",
                                                        appType: "web",
                                                        clientId: c,
                                                        clientSessionId: l.sid,
                                                        sequence: l.sq,
                                                        sessionParams: l.sp,
                                                        eventType: this._eventType,
                                                        eventName: a,
                                                    }),
                                                    u
                                                ),
                                                r
                                            ),
                                            { clientTimestamp: null !== (e = this._timestamp) && void 0 !== e ? e : Date.now() }
                                        )
                                );
                            }),
                            (e.prototype.buildExtra = function () {
                                var e,
                                    t,
                                    n,
                                    r,
                                    i = null !== (t = null === (e = this._optional) || void 0 === e ? void 0 : e.extra) && void 0 !== t ? t : {},
                                    a = i.wts,
                                    u = i.liff,
                                    c = o(o({}, a), null === (n = this._extra) || void 0 === n ? void 0 : n.wts),
                                    l = c.dimensions,
                                    f = s(c, ["dimensions"]),
                                    d = o(o({}, u), null === (r = this._extra) || void 0 === r ? void 0 : r.liff);
                                for (var h in f) this.removeInvalidContext(h, f, k);
                                for (var h in d) this.removeInvalidContext(h, d, j);
                                var p = {};
                                return (
                                    Object.keys(f).length && (p.wts = JSON.stringify(f)), Object.keys(d).length && (p.liff = JSON.stringify(d)), { extra: Object.keys(p).length ? { extra: p } : void 0, dimensions: o(o({}, this._dimensions), l) }
                                );
                            }),
                            (e.prototype.buildEventParams = function (e) {
                                var t,
                                    n,
                                    r,
                                    i = null !== (t = this._event) && void 0 !== t ? t : {},
                                    a = i.screenName,
                                    u = i.title,
                                    c = i.eventName,
                                    l = s(i, ["screenName", "title", "eventName"]),
                                    f = o(o({}, l), e);
                                switch (this._eventType) {
                                    case "pageview":
                                        (this._optional.screenId = N()),
                                            (this._optional.screenName = null !== (n = null != a ? a : this._optional.screenName) && void 0 !== n ? n : location.pathname),
                                            (this._optional.title = null !== (r = null != u ? u : this._optional.title) && void 0 !== r ? r : document.title);
                                }
                                return { eventName: c, eventParams: Object.keys(f).length ? { eventParams: f } : {} };
                            }),
                            (e.prototype.removeInvalidContext = function (e, t, n) {
                                var r = !1;
                                return (null == n ? void 0 : n(e)) || (g.warn("Unknown key:", e), delete t[e], (r = !0)), r;
                            }),
                            e
                    );
                })(),
                H = function (e, t) {
                    void 0 === t && (t = 100);
                    var n = M(e);
                    return Math.abs(n % 100) < t;
                },
                J = (function () {
                    function e() {}
                    return (
                        (e.prototype.init = function (e, t) {
                            console.log("init...")
                            console.log(e)
                            console.log(t)
                            var n = t || {},
                                r = n.endpoint,
                                i = n.sampleRate,
                                o = n.logLevel,
                                s = void 0 === o ? "error" : o;
                            (g.level = s), (this.endpoint = r), (this.sampleRate = i), (this.logBuilder = new q(e, t)), g.debug("Initialized", { version: "3.0.5", logVersion: 2, clientId: this.logBuilder.clientId });
                        }),
                            (e.prototype.set = function (e) {
                                var t;
                                null === (t = this.logBuilder) || void 0 === t || t.context(e);
                            }),
                            (e.prototype.add = function (e) {
                                var t;
                                e.sessionParams && this.set({ sessionParams: o(o({}, null === (t = this.logBuilder) || void 0 === t ? void 0 : t.sessionParams), e.sessionParams) });
                            }),
                            (e.prototype.setRegion = function (e) {
                                this.set({ region: e });
                            }),
                            (e.prototype.setAppVersion = function (e) {
                                this.set({ appVersion: e });
                            }),
                            (e.prototype.setAppBuild = function (e) {
                                this.set({ appBuild: e });
                            }),
                            (e.prototype.setDeviceId = function (e) {
                                this.set({ deviceId: e });
                            }),
                            (e.prototype.setOSName = function (e) {
                                this.set({ osName: e });
                            }),
                            (e.prototype.setOSVersion = function (e) {
                                this.set({ osVersion: e });
                            }),
                            (e.prototype.setNetworkType = function (e) {
                                this.set({ networkType: e });
                            }),
                            (e.prototype.setAdId = function (e) {
                                this.set({ adId: e });
                            }),
                            (e.prototype.setAdLimit = function (e) {
                                this.set({ adLimit: e });
                            }),
                            (e.prototype.setUserId = function (e) {
                                this.set({ userId: e });
                            }),
                            (e.prototype.setMid = function (e) {
                                this.set({ mid: e });
                            }),
                            (e.prototype.setTid = function (e) {
                                this.set({ tid: e });
                            }),
                            (e.prototype.setExperiments = function (e) {
                                this.set({ experiments: e });
                            }),
                            (e.prototype.setUserParams = function (e) {
                                this.set({ userParams: e });
                            }),
                            (e.prototype.setSessionParams = function (e) {
                                this.set({ sessionParams: e });
                            }),
                            (e.prototype.addSessionParams = function (e) {
                                this.add({ sessionParams: e });
                            }),
                            (e.prototype.setScreenName = function (e) {
                                this.set({ screenName: e });
                            }),
                            (e.prototype.setUrl = function (e) {
                                this.set({ url: e });
                            }),
                            (e.prototype.setTitle = function (e) {
                                this.set({ title: e });
                            }),
                            (e.prototype.setReferrer = function (e) {
                                this.set({ referrer: e });
                            }),
                            (e.prototype.setScreenParams = function (e) {
                                this.set({ screenParams: e });
                            }),
                            (e.prototype.setExtra = function (e, t) {
                                var n;
                                this.set({ extra: ((n = {}), (n[e] = t), n) });
                            }),
                            (e.prototype.send = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                var n,
                                    r,
                                    i,
                                    o = Date.now(),
                                    s = e[0];
                                if ("pageview" !== s && "foreground" !== s && "background" !== s) {
                                    (n = e[1]), 4 === e.length ? ((r = e[2]), (i = e[3])) : m(e[2]) ? (i = e[2]) : (r = e[2]);
                                    try {
                                        y(s, n);
                                    } catch (e) {
                                        var a = new K($, e.message);
                                        return g.error(a), void (null == i || i(a));
                                    }
                                } else
                                    4 === e.length
                                        ? ((n = e[1]), (r = e[2]), (i = e[3]))
                                        : 3 === e.length
                                            ? m(e[2])
                                                ? (v(e[1]) ? (r = e[1]) : (n = e[1]), (i = e[2]))
                                                : ((n = e[1]), (r = e[2]))
                                            : v(e[1])
                                                ? (r = e[1])
                                                : m(e[1])
                                                    ? (i = e[1])
                                                    : (n = e[1]);
                                try {
                                    if (!this.logBuilder) return (a = new K(G)), g.error(a), void (null == i || i(a));
                                    if (!H(this.logBuilder.clientId, this.sampleRate)) return void g.info(this.logBuilder.clientId + " is untracked");
                                    var u = this.logBuilder
                                        .event({ type: s, event: n, timestamp: o })
                                        .extra(null == r ? void 0 : r.extra)
                                        .build();
                                    _(u, this.endpoint), null == i || i();
                                } catch (a) {
                                    g.error(a), null == i || i(a);
                                }
                            }),
                            (e.prototype.sendPageview = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["pageview"], e));
                            }),
                            (e.prototype.sendImpression = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["impression"], e));
                            }),
                            (e.prototype.sendClick = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["click"], e));
                            }),
                            (e.prototype.sendMedia = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["media"], e));
                            }),
                            (e.prototype.sendForeground = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["foreground"], e));
                            }),
                            (e.prototype.sendBackground = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["background"], e));
                            }),
                            (e.prototype.sendConversion = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["conversion"], e));
                            }),
                            (e.prototype.sendCustom = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this.send.apply(this, u(["custom"], e));
                            }),
                            e
                    );
                })(),
                X = new ((function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (t.queue = []), t;
                    }
                    return (
                        i(t, e),
                            (t.prototype.init = function (e, t) {
                                console.log("init 2")
                                var n = this;
                                this.uts
                                    ? this.uts.init(e, t)
                                    : (function (e, t) {
                                        void 0 === e && (e = "stable");
                                        var n = document.createElement("SCRIPT");
                                        (n.src = (function (e) {
                                            return (
                                                "https://static.line-scdn.net/uts/edge/" +
                                                (function (e) {
                                                    return "current" === e ? "3.0.5" : e;
                                                })(e) +
                                                "/uts.js?cb=1608205558145"
                                            );
                                        })(e)),
                                            (n.onload = t),
                                            document.head.appendChild(n);
                                    })(null == t ? void 0 : t.version, function () {
                                        window.uts &&
                                        ((n.uts = Object.create(window.uts)),
                                            n.uts.init(e, t),
                                            n.queue.forEach(function (e) {
                                                n.uts[e.func].apply(n.uts, u(e.args));
                                            }),
                                            (n.queue.length = 0),
                                            (window.uts = void 0));
                                    });
                            }),
                            (t.prototype.set = function (e) {
                                this.uts ? this.uts.set(e) : this.queue.push({ func: "set", args: [e] });
                            }),
                            (t.prototype.send = function () {
                                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                this.uts ? (e = this.uts).send.apply(e, u(t)) : this.queue.push({ func: "send", args: u(t) });
                            }),
                            t
                    );
                })(J))();
            (t.UTS = J), (t.default = X);
        },
        function (e, t) {
            var n,
                r,
                i = (e.exports = {});
            function o() {
                throw new Error("setTimeout has not been defined");
            }
            function s() {
                throw new Error("clearTimeout has not been defined");
            }
            function a(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
                try {
                    return n(e, 0);
                } catch (t) {
                    try {
                        return n.call(null, e, 0);
                    } catch (t) {
                        return n.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                    n = o;
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                    r = s;
                }
            })();
            var u,
                c = [],
                l = !1,
                f = -1;
            function d() {
                l && u && ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && h());
            }
            function h() {
                if (!l) {
                    var e = a(d);
                    l = !0;
                    for (var t = c.length; t; ) {
                        for (u = c, c = []; ++f < t; ) u && u[f].run();
                        (f = -1), (t = c.length);
                    }
                    (u = null),
                        (l = !1),
                        (function (e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                            try {
                                r(e);
                            } catch (t) {
                                try {
                                    return r.call(null, e);
                                } catch (t) {
                                    return r.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function p(e, t) {
                (this.fun = e), (this.array = t);
            }
            function v() {}
            (i.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new p(e, t)), 1 !== c.length || l || a(h);
            }),
                (p.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = v),
                (i.addListener = v),
                (i.once = v),
                (i.off = v),
                (i.removeListener = v),
                (i.removeAllListeners = v),
                (i.emit = v),
                (i.prependListener = v),
                (i.prependOnceListener = v),
                (i.listeners = function (e) {
                    return [];
                }),
                (i.binding = function (e) {
                    throw new Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                    return "/";
                }),
                (i.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                    return 0;
                });
        },
        function (e, t, n) {
            (function (e) {
                var r = (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
                    i = Function.prototype.apply;
                function o(e, t) {
                    (this._id = e), (this._clearFn = t);
                }
                (t.setTimeout = function () {
                    return new o(i.call(setTimeout, r, arguments), clearTimeout);
                }),
                    (t.setInterval = function () {
                        return new o(i.call(setInterval, r, arguments), clearInterval);
                    }),
                    (t.clearTimeout = t.clearInterval = function (e) {
                        e && e.close();
                    }),
                    (o.prototype.unref = o.prototype.ref = function () {}),
                    (o.prototype.close = function () {
                        this._clearFn.call(r, this._id);
                    }),
                    (t.enroll = function (e, t) {
                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                    }),
                    (t.unenroll = function (e) {
                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                    }),
                    (t._unrefActive = t.active = function (e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 &&
                        (e._idleTimeoutId = setTimeout(function () {
                            e._onTimeout && e._onTimeout();
                        }, t));
                    }),
                    n(9),
                    (t.setImmediate = ("undefined" != typeof self && self.setImmediate) || (void 0 !== e && e.setImmediate) || (this && this.setImmediate)),
                    (t.clearImmediate = ("undefined" != typeof self && self.clearImmediate) || (void 0 !== e && e.clearImmediate) || (this && this.clearImmediate));
            }.call(this, n(3)));
        },
        function (e, t, n) {
            "use strict";
            (function (e) {
                var t = n(4),
                    r = n(0),
                    i = n(1),
                    o = (function () {
                        if ("undefined" != typeof self) return self;
                        if ("undefined" != typeof window) return window;
                        if (void 0 !== e) return e;
                        throw new Error("unable to locate global object");
                    })();
                "function" != typeof o.Promise ? (o.Promise = t.a) : o.Promise.prototype.finally ? o.Promise.allSettled || (o.Promise.allSettled = i.a) : (o.Promise.prototype.finally = r.a);
            }.call(this, n(3)));
        },
        function (e, t, n) {
            (function (e, t) {
                !(function (e, n) {
                    "use strict";
                    if (!e.setImmediate) {
                        var r,
                            i,
                            o,
                            s,
                            a,
                            u = 1,
                            c = {},
                            l = !1,
                            f = e.document,
                            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        (d = d && d.setTimeout ? d : e),
                            "[object process]" === {}.toString.call(e.process)
                                ? (r = function (e) {
                                    t.nextTick(function () {
                                        p(e);
                                    });
                                })
                                : !(function () {
                                    if (e.postMessage && !e.importScripts) {
                                        var t = !0,
                                            n = e.onmessage;
                                        return (
                                            (e.onmessage = function () {
                                                t = !1;
                                            }),
                                                e.postMessage("", "*"),
                                                (e.onmessage = n),
                                                t
                                        );
                                    }
                                })()
                                    ? e.MessageChannel
                                        ? (((o = new MessageChannel()).port1.onmessage = function (e) {
                                            p(e.data);
                                        }),
                                            (r = function (e) {
                                                o.port2.postMessage(e);
                                            }))
                                        : f && "onreadystatechange" in f.createElement("script")
                                            ? ((i = f.documentElement),
                                                (r = function (e) {
                                                    var t = f.createElement("script");
                                                    (t.onreadystatechange = function () {
                                                        p(e), (t.onreadystatechange = null), i.removeChild(t), (t = null);
                                                    }),
                                                        i.appendChild(t);
                                                }))
                                            : (r = function (e) {
                                                setTimeout(p, 0, e);
                                            })
                                    : ((s = "setImmediate$" + Math.random() + "$"),
                                        (a = function (t) {
                                            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && p(+t.data.slice(s.length));
                                        }),
                                        e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                                        (r = function (t) {
                                            e.postMessage(s + t, "*");
                                        })),
                            (d.setImmediate = function (e) {
                                "function" != typeof e && (e = new Function("" + e));
                                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                                var i = { callback: e, args: t };
                                return (c[u] = i), r(u), u++;
                            }),
                            (d.clearImmediate = h);
                    }
                    function h(e) {
                        delete c[e];
                    }
                    function p(e) {
                        if (l) setTimeout(p, 0, e);
                        else {
                            var t = c[e];
                            if (t) {
                                l = !0;
                                try {
                                    !(function (e) {
                                        var t = e.callback,
                                            n = e.args;
                                        switch (n.length) {
                                            case 0:
                                                t();
                                                break;
                                            case 1:
                                                t(n[0]);
                                                break;
                                            case 2:
                                                t(n[0], n[1]);
                                                break;
                                            case 3:
                                                t(n[0], n[1], n[2]);
                                                break;
                                            default:
                                                t.apply(void 0, n);
                                        }
                                    })(t);
                                } finally {
                                    h(e), (l = !1);
                                }
                            }
                        }
                    }
                })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
            }.call(this, n(3), n(6)));
        },
        function (e, t) {
            !(function () {
                if ("function" != typeof window.CustomEvent) {
                    function e(e, t) {
                        var n = t || {},
                            r = n.bubbles,
                            i = void 0 !== r && r,
                            o = n.cancelable,
                            s = void 0 !== o && o,
                            a = n.detail,
                            u = void 0 === a ? void 0 : a,
                            c = document.createEvent("CustomEvent");
                        return c.initCustomEvent(e, i, s, u), c;
                    }
                    (e.prototype = Event.prototype), (window.CustomEvent = e);
                }
            })();
        },
        function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "liff", function () {
                    return Zn;
                });
            var r = ("undefined" != typeof globalThis && globalThis) || ("undefined" != typeof self && self) || (void 0 !== r && r),
                i = "URLSearchParams" in r,
                o = "Symbol" in r && "iterator" in Symbol,
                s =
                    "FileReader" in r &&
                    "Blob" in r &&
                    (function () {
                        try {
                            return new Blob(), !0;
                        } catch (e) {
                            return !1;
                        }
                    })(),
                a = "FormData" in r,
                u = "ArrayBuffer" in r;
            if (u)
                var c = [
                        "[object Int8Array]",
                        "[object Uint8Array]",
                        "[object Uint8ClampedArray]",
                        "[object Int16Array]",
                        "[object Uint16Array]",
                        "[object Int32Array]",
                        "[object Uint32Array]",
                        "[object Float32Array]",
                        "[object Float64Array]",
                    ],
                    l =
                        ArrayBuffer.isView ||
                        function (e) {
                            return e && c.indexOf(Object.prototype.toString.call(e)) > -1;
                        };
            function f(e) {
                if (("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)) throw new TypeError('Invalid character in header field name: "' + e + '"');
                return e.toLowerCase();
            }
            function d(e) {
                return "string" != typeof e && (e = String(e)), e;
            }
            function h(e) {
                var t = {
                    next: function () {
                        var t = e.shift();
                        return { done: void 0 === t, value: t };
                    },
                };
                return (
                    o &&
                    (t[Symbol.iterator] = function () {
                        return t;
                    }),
                        t
                );
            }
            function p(e) {
                (this.map = {}),
                    e instanceof p
                        ? e.forEach(function (e, t) {
                            this.append(t, e);
                        }, this)
                        : Array.isArray(e)
                            ? e.forEach(function (e) {
                                this.append(e[0], e[1]);
                            }, this)
                            : e &&
                            Object.getOwnPropertyNames(e).forEach(function (t) {
                                this.append(t, e[t]);
                            }, this);
            }
            function v(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0;
            }
            function m(e) {
                return new Promise(function (t, n) {
                    (e.onload = function () {
                        t(e.result);
                    }),
                        (e.onerror = function () {
                            n(e.error);
                        });
                });
            }
            function y(e) {
                var t = new FileReader(),
                    n = m(t);
                return t.readAsArrayBuffer(e), n;
            }
            function w(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer;
            }
            function g() {
                return (
                    (this.bodyUsed = !1),
                        (this._initBody = function (e) {
                            var t;
                            (this.bodyUsed = this.bodyUsed),
                                (this._bodyInit = e),
                                e
                                    ? "string" == typeof e
                                        ? (this._bodyText = e)
                                        : s && Blob.prototype.isPrototypeOf(e)
                                            ? (this._bodyBlob = e)
                                            : a && FormData.prototype.isPrototypeOf(e)
                                                ? (this._bodyFormData = e)
                                                : i && URLSearchParams.prototype.isPrototypeOf(e)
                                                    ? (this._bodyText = e.toString())
                                                    : u && s && (t = e) && DataView.prototype.isPrototypeOf(t)
                                                        ? ((this._bodyArrayBuffer = w(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                                        : u && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e))
                                                            ? (this._bodyArrayBuffer = w(e))
                                                            : (this._bodyText = e = Object.prototype.toString.call(e))
                                    : (this._bodyText = "");
                            var n = this.headers.get("content-type");
                            n
                                ? n.indexOf("json") >= 0 && "string" != typeof this._bodyInit && (this._bodyInit = this._bodyText)
                                : "string" == typeof e
                                    ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                                    : this._bodyBlob && this._bodyBlob.type
                                        ? this.headers.set("content-type", this._bodyBlob.type)
                                        : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                        }),
                    s &&
                    ((this.blob = function () {
                        var e = v(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]));
                    }),
                        (this.arrayBuffer = function () {
                            if (this._bodyArrayBuffer) {
                                var e = v(this);
                                return (
                                    e ||
                                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                                        ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength))
                                        : Promise.resolve(this._bodyArrayBuffer))
                                );
                            }
                            return this.blob().then(y);
                        })),
                        (this.text = function () {
                            var e,
                                t,
                                n,
                                r = v(this);
                            if (r) return r;
                            if (this._bodyBlob) return (e = this._bodyBlob), (t = new FileReader()), (n = m(t)), t.readAsText(e), n;
                            if (this._bodyArrayBuffer)
                                return Promise.resolve(
                                    (function (e) {
                                        for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                                        return n.join("");
                                    })(this._bodyArrayBuffer)
                                );
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText);
                        }),
                    a &&
                    (this.formData = function () {
                        return this.text().then(_);
                    }),
                        (this.json = function () {
                            return this.text().then(JSON.parse);
                        }),
                        this
                );
            }
            (p.prototype.append = function (e, t) {
                (e = f(e)), (t = d(t));
                var n = this.map[e];
                this.map[e] = n ? n + ", " + t : t;
            }),
                (p.prototype.delete = function (e) {
                    delete this.map[f(e)];
                }),
                (p.prototype.get = function (e) {
                    return (e = f(e)), this.has(e) ? this.map[e] : null;
                }),
                (p.prototype.has = function (e) {
                    return this.map.hasOwnProperty(f(e));
                }),
                (p.prototype.set = function (e, t) {
                    this.map[f(e)] = d(t);
                }),
                (p.prototype.forEach = function (e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
                }),
                (p.prototype.keys = function () {
                    var e = [];
                    return (
                        this.forEach(function (t, n) {
                            e.push(n);
                        }),
                            h(e)
                    );
                }),
                (p.prototype.values = function () {
                    var e = [];
                    return (
                        this.forEach(function (t) {
                            e.push(t);
                        }),
                            h(e)
                    );
                }),
                (p.prototype.entries = function () {
                    var e = [];
                    return (
                        this.forEach(function (t, n) {
                            e.push([n, t]);
                        }),
                            h(e)
                    );
                }),
            o && (p.prototype[Symbol.iterator] = p.prototype.entries);
            var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function I(e, t) {
                if (!(this instanceof I)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot readContext called as a function.');
                var n,
                    r,
                    i = (t = t || {}).body;
                if (e instanceof I) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    (this.url = e.url),
                        (this.credentials = e.credentials),
                    t.headers || (this.headers = new p(e.headers)),
                        (this.method = e.method),
                        (this.mode = e.mode),
                        (this.signal = e.signal),
                    i || null == e._bodyInit || ((i = e._bodyInit), (e.bodyUsed = !0));
                } else this.url = String(e);
                if (
                    ((this.credentials = t.credentials || this.credentials || "same-origin"),
                    (!t.headers && this.headers) || (this.headers = new p(t.headers)),
                        (this.method = ((n = t.method || this.method || "GET"), (r = n.toUpperCase()), b.indexOf(r) > -1 ? r : n)),
                        (this.mode = t.mode || this.mode || null),
                        (this.signal = t.signal || this.signal),
                        (this.referrer = null),
                    ("GET" === this.method || "HEAD" === this.method) && i)
                )
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                if ((this._initBody(i), !(("GET" !== this.method && "HEAD" !== this.method) || ("no-store" !== t.cache && "no-cache" !== t.cache)))) {
                    var o = /([?&])_=[^&]*/;
                    if (o.test(this.url)) this.url = this.url.replace(o, "$1_=" + new Date().getTime());
                    else {
                        this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
                    }
                }
            }
            function _(e) {
                var t = new FormData();
                return (
                    e
                        .trim()
                        .split("&")
                        .forEach(function (e) {
                            if (e) {
                                var n = e.split("="),
                                    r = n.shift().replace(/\+/g, " "),
                                    i = n.join("=").replace(/\+/g, " ");
                                t.append(decodeURIComponent(r), decodeURIComponent(i));
                            }
                        }),
                        t
                );
            }
            function T(e, t) {
                if (!(this instanceof T)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot readContext called as a function.');
                t || (t = {}),
                    (this.type = "default"),
                    (this.status = void 0 === t.status ? 200 : t.status),
                    (this.ok = this.status >= 200 && this.status < 300),
                    (this.statusText = void 0 === t.statusText ? "" : "" + t.statusText),
                    (this.headers = new p(t.headers)),
                    (this.url = t.url || ""),
                    this._initBody(e);
            }
            (I.prototype.clone = function () {
                return new I(this, { body: this._bodyInit });
            }),
                g.call(I.prototype),
                g.call(T.prototype),
                (T.prototype.clone = function () {
                    return new T(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new p(this.headers), url: this.url });
                }),
                (T.error = function () {
                    var e = new T(null, { status: 0, statusText: "" });
                    return (e.type = "error"), e;
                });
            var E = [301, 302, 303, 307, 308];
            T.redirect = function (e, t) {
                if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
                return new T(null, { status: t, headers: { location: e } });
            };
            var O = r.DOMException;
            try {
                new O();
            } catch (Yn) {
                ((O = function (e, t) {
                    (this.message = e), (this.name = t);
                    var n = Error(e);
                    this.stack = n.stack;
                }).prototype = Object.create(Error.prototype)),
                    (O.prototype.constructor = O);
            }
            function S(e, t) {
                return new Promise(function (n, i) {
                    var o = new I(e, t);
                    if (o.signal && o.signal.aborted) return i(new O("Aborted", "AbortError"));
                    var a = new XMLHttpRequest();
                    function c() {
                        a.abort();
                    }
                    (a.onload = function () {
                        var e,
                            t,
                            r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers:
                                    ((e = a.getAllResponseHeaders() || ""),
                                        (t = new p()),
                                        e
                                            .replace(/\r?\n[\t ]+/g, " ")
                                            .split("\r")
                                            .map(function (e) {
                                                return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                                            })
                                            .forEach(function (e) {
                                                var n = e.split(":"),
                                                    r = n.shift().trim();
                                                if (r) {
                                                    var i = n.join(":").trim();
                                                    t.append(r, i);
                                                }
                                            }),
                                        t),
                            };
                        r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                        var i = "response" in a ? a.response : a.responseText;
                        setTimeout(function () {
                            n(new T(i, r));
                        }, 0);
                    }),
                        (a.onerror = function () {
                            setTimeout(function () {
                                i(new TypeError("Network request failed"));
                            }, 0);
                        }),
                        (a.ontimeout = function () {
                            setTimeout(function () {
                                i(new TypeError("Network request failed"));
                            }, 0);
                        }),
                        (a.onabort = function () {
                            setTimeout(function () {
                                i(new O("Aborted", "AbortError"));
                            }, 0);
                        }),
                        a.open(
                            o.method,
                            (function (e) {
                                try {
                                    return "" === e && r.location.href ? r.location.href : e;
                                } catch (t) {
                                    return e;
                                }
                            })(o.url),
                            !0
                        ),
                        "include" === o.credentials ? (a.withCredentials = !0) : "omit" === o.credentials && (a.withCredentials = !1),
                    "responseType" in a && (s ? (a.responseType = "blob") : u && o.headers.get("Content-Type") && -1 !== o.headers.get("Content-Type").indexOf("application/octet-stream") && (a.responseType = "arraybuffer")),
                        !t || "object" != typeof t.headers || t.headers instanceof p
                            ? o.headers.forEach(function (e, t) {
                                a.setRequestHeader(t, e);
                            })
                            : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                                a.setRequestHeader(e, d(t.headers[e]));
                            }),
                    o.signal &&
                    (o.signal.addEventListener("abort", c),
                        (a.onreadystatechange = function () {
                            4 === a.readyState && o.signal.removeEventListener("abort", c);
                        })),
                        a.send(void 0 === o._bodyInit ? null : o._bodyInit);
                });
            }
            (S.polyfill = !0), r.fetch || ((r.fetch = S), (r.Headers = p), (r.Request = I), (r.Response = T));
            n(8);
            var P = function (e, t) {
                return (P =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    })(e, t);
            };
            function A(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function n() {
                    this.constructor = e;
                }
                P(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }
            var N = function () {
                return (N =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function initContext(e, t, n, r) {
                return new (n || (n = Promise))(function (i, o) {
                    function s(e) {
                        try {
                            u(r.next(e));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function a(e) {
                        try {
                            u(r.throw(e));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? i(e.value)
                            : ((t = e.value),
                                t instanceof n
                                    ? t
                                    : new n(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    u((r = r.apply(e, t || [])).next());
                });
            }
            function j(e, t) {
                var n,
                    r,
                    i,
                    o,
                    s = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (o = { next: a(0), throw: a(1), return: a(2) }),
                    "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                        return this;
                    }),
                        o
                );
                function a(o) {
                    return function (a) {
                        return (function (o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s; )
                                try {
                                    if (((n = 1), r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)) return i;
                                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, { value: o[1], done: !1 };
                                        case 5:
                                            s.label++, (r = o[1]), (o = [0]);
                                            continue;
                                        case 7:
                                            (o = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                s.label = o[1];
                                                break;
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                (s.label = i[1]), (i = o);
                                                break;
                                            }
                                            if (i && s.label < i[2]) {
                                                (s.label = i[2]), s.ops.push(o);
                                                break;
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    o = t.call(e, s);
                                } catch (a) {
                                    (o = [6, a]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, a]);
                    };
                }
            }
            Object.create;
            function x(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function () {
                            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                        },
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function D(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r,
                    i,
                    o = n.call(e),
                    s = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) s.push(r.value);
                } catch (a) {
                    i = { error: a };
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return s;
            }
            function C() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(D(arguments[t]));
                return e;
            }
            var L;
            Object.create;
            function getOS() {
                if (!L) {
                    var e = window.navigator.userAgent.toLowerCase();
                    L = /iphone|ipad|ipod/.test(e) ? "ios" : /android/.test(e) ? "android" : "web";
                }
                return L;
            }
            function compareVersion(e, t) {
                if (e === t) return 0;
                for (var n = e.split("."), r = t.split("."), i = Math.max(n.length, r.length), o = 0; o < i; o++) {
                    n[o] || (n[o] = "0"), r[o] || (r[o] = "0");
                    var s = parseInt(n[o]) - parseInt(r[o]);
                    if (0 !== s) return s > 0 ? 1 : -1;
                }
                return 0;
            }
            function getLineVersion() {
                var matcher = navigator.userAgent.match(/Line\/\d+(\.\d+)*/i);
                return matcher ? matcher[0].slice(5) : null;
            }
            var M = "INIT_FAILED",
                LINE_STORE = "LIFF_STORE",
                TOKEN_CONSTANT = {
                    ACCESS_TOKEN: "accessToken",
                    ID_TOKEN: "IDToken",
                    DECODED_ID_TOKEN: "decodedIDToken",
                    FEATURE_TOKEN: "featureToken",
                    FEATURES: "features",
                    LOGIN_TMP: "loginTmp",
                    CONFIG: "config",
                    CONTEXT: "context",
                    EXPIRES: "expires",
                    RAW_CONTEXT: "rawContext",
                    CLIENT_ID: "clientId",
                    IS_SUBSEQUENT_LIFF_APP: "isSubsequentLiffApp",
                    MST_CHALLENGE: "mstChallenge",
                    MSIT: "msit",
                    MST: "mst",
                    MST_VERIFIER: "mstVerifier",
                    APP_DATA: "appData",
                },
                W = ["context_token", "feature_token", "access_token", "id_token", "client_id", "mst_verifier", "mst_challenge", "msit"],
                G = ["openWindow", "closeWindow"],
                $ = ["liff.ref.source", "liff.ref.medium", "liff.ref.campaign", "liff.ref.term", "liff.ref.content"];
            function K(e) {
                return void 0 === e && (e = window.navigator.userAgent), /ipad/.test(e.toLowerCase());
            }
            var q = null;
            function isInClient() {
                var e;
                return (
                    null === q &&
                    (void 0 === e && (e = window.navigator.userAgent),
                        (q =
                            /Line\/\d+\.\d+\.\d+ LIFF/.test(e) ||
                            ((function (e) {
                                    return void 0 === e && (e = window.navigator.userAgent), /Line\/\d+\.\d+\.\d+/.test(e);
                                })() &&
                                /[#|&]access_token=/.test(location.hash)) ||
                            "1" === sessionStorage.getItem(LINE_STORE + ":isInClient")),
                        sessionStorage.setItem(LINE_STORE + ":isInClient", q ? "1" : "0")),
                        !!q
                );
            }
            var J,
                X = new Set(["400", "401", "403", "404", "429", "500"]),
                z = (function (e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return (r.code = t), r;
                    }
                    return A(t, e), t;
                })(Error);
            function Z(e, t) {
                return new z(e, t || "");
            }
            function readData(configName) {
                return (function (configName, liffId) {
                    if (!liffId) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
                    var value = (isInClient() ? sessionStorage : localStorage).getItem(LINE_STORE + ":" + liffId + ":" + configName);
                    try {
                        return null === value ? null : JSON.parse(value);
                    } catch (r) {
                        return null;
                    }
                })(configName, oe().liffId);
            }
            function saveData(configName, data) {
                var liffId = oe().liffId;
                if (!liffId) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
                (isInClient() ? sessionStorage : localStorage).setItem(LINE_STORE + ":" + liffId + ":" + configName, JSON.stringify(data));
            }
            function removeData(configName) {
                var liffId = oe().liffId;
                if (!liffId) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
                (isInClient() ? sessionStorage : localStorage).removeItem(LINE_STORE + ":" + liffId + ":" + configName);
            }
            !(function (e) {
                (e[(e.DEBUG = 1)] = "DEBUG"), (e[(e.INFO = 2)] = "INFO"), (e[(e.WARN = 3)] = "WARN"), (e[(e.ERROR = 4)] = "ERROR");
            })(J || (J = {}));
            var log = new ((function () {
                function e(e) {
                    void 0 === e && (e = J.INFO), (this.logLevel = e), (this._debug = console.debug), (this._info = console.info), (this._warn = console.warn), (this._error = console.error);
                }
                return (
                    (e.prototype.debug = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel <= J.DEBUG && (e.unshift("[DEBUG]"), this._debug.apply(this, C(e)));
                    }),
                        (e.prototype.info = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this.logLevel <= J.INFO && (e.unshift("[INFO]"), this._info.apply(this, C(e)));
                        }),
                        (e.prototype.warn = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this.logLevel <= J.WARN && (e.unshift("[WARN]"), this._warn.apply(this, C(e)));
                        }),
                        (e.prototype.error = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this.logLevel <= J.ERROR && (e.unshift("[ERROR]"), this._error.apply(this, C(e)));
                        }),
                        e
                );
            })())(Number("3"));
            var ne = {
                    set: function (e, t, n) {
                        var r = e + "=" + t;
                        if (n)
                            for (var i in n) {
                                r += "; " + i + (n[i] ? "=" + n[i] : "");
                            }
                        log.debug("set cookie", r), (document.cookie = r);
                    },
                    get: function (e) {
                        var t = new RegExp("(?:(?:^|.*;\\s*)" + e + "\\s*\\=\\s*([^;]*).*$)|^.*$");
                        return document.cookie.replace(t, "$1");
                    },
                    remove: function (e, t) {
                        var n = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                        if (t) for (var r in t) n += "; " + r + "=" + t[r];
                        document.cookie = n;
                    },
                },
                re = {
                    get: readData,
                    set: saveData,
                    remove: removeData,
                    clean: function () {
                        var e;
                        Object.keys(TOKEN_CONSTANT).forEach(function (e) {
                            removeData(TOKEN_CONSTANT[e]);
                        }),
                            (e = oe()),
                            ne.remove(LINE_STORE + ":" + TOKEN_CONSTANT.EXPIRES + ":" + e.liffId, { path: "/" });
                    },
                },
                ie = {};
            function oe() {
                return ie;
            }
            function se() {
                return readData(TOKEN_CONSTANT.FEATURES);
            }
            function ae(e) {
                saveData(TOKEN_CONSTANT.FEATURES, e);
            }
            function ue() {
                return readData(TOKEN_CONSTANT.LOGIN_TMP);
            }
            function ce() {
                removeData(TOKEN_CONSTANT.LOGIN_TMP);
            }
            function getAccessToken() {
                return readData(TOKEN_CONSTANT.ACCESS_TOKEN);
            }
            function saveAccessToken(data) {
                saveData(TOKEN_CONSTANT.ACCESS_TOKEN, data);
            }
            var de;
            function saveClientId(data) {
                saveData(TOKEN_CONSTANT.CLIENT_ID, data);
            }
            function getIDToken() {
                return readData(TOKEN_CONSTANT.ID_TOKEN);
            }
            function saveTokenId(data) {
                saveData(TOKEN_CONSTANT.ID_TOKEN, data);
            }
            function me() {
                return readData(TOKEN_CONSTANT.DECODED_ID_TOKEN);
            }
            function saveDecodedIdToken(data) {
                saveData(TOKEN_CONSTANT.DECODED_ID_TOKEN, data);
            }
            function we() {
                return readData(TOKEN_CONSTANT.FEATURE_TOKEN);
            }
            function saveFeatureToken(e) {
                saveData(TOKEN_CONSTANT.FEATURE_TOKEN, e);
            }
            function readContext() {
                return readData(TOKEN_CONSTANT.CONTEXT);
            }
            function saveContext(e) {
                saveData(TOKEN_CONSTANT.CONTEXT, e);
            }
            function _e() {
                return readData(TOKEN_CONSTANT.MST_CHALLENGE);
            }
            function Te() {
                return readData(TOKEN_CONSTANT.MST);
            }
            function Ee(e) {
                saveData(TOKEN_CONSTANT.APP_DATA, e);
            }
            var Oe = { isLiffSuccessful: !1, isLoggedIn: !1, id: "", version: "" };
            function Se(e) {
                Object.assign(Oe, e);
            }
            function isLoggedIn() {
                return !!getAccessToken();
            }
            function Ae() {
                var e;
                return !((e = oe()), ne.get(LINE_STORE + ":" + TOKEN_CONSTANT.EXPIRES + ":" + e.liffId));
            }
            function logout() {
                re.clean();
            }
            function ke(e) {
                return Object.keys(e)
                    .map(function (t) {
                        var n = e[t],
                            r = function (e) {
                                return void 0 !== e ? encodeURIComponent(t) + "=" + encodeURIComponent(e) : encodeURIComponent(t);
                            };
                        return Array.isArray(n)
                            ? n
                                .map(function (e) {
                                    return r(e);
                                })
                                .join("&")
                            : r(n);
                    })
                    .join("&");
            }
            var json = {
                    parse: function (e) {
                        return e
                            .replace(/^\?/, "")
                            .replace(/^#\/?/, "")
                            .split(/&+/)
                            .filter(function (e) {
                                return e.length > 0;
                            })
                            .reduce(function (e, t) {
                                var n = D(t.split("=").map(decodeURIComponent), 2),
                                    r = n[0],
                                    i = n[1],
                                    o = e[r];
                                return Array.isArray(o) ? o.push(i) : Object.prototype.hasOwnProperty.call(e, r) ? (e[r] = [o, i]) : (e[r] = i), e;
                            }, {});
                    },
                    stringify: ke,
                },
                xe = "",
                De = function () {
                    var e = readContext();
                    if (!e) throw Z(M, "Could not get Context from server.");
                    if (!e.endpointUrl) throw Z(M, "Could not get endpointUrl from server.");
                    if (!e.permanentLinkPattern) throw Z(M, "Could not get permanentLinkPattern from server.");
                    return e;
                };
            function Ce(e) {
                return initContext(this, void 0, void 0, function () {
                    var t, n, r;
                    return j(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return (
                                    i.trys.push([0, 3, , 4]),
                                        (t = location.href),
                                        (n = (function (e) {
                                            var t = De(),
                                                n = e,
                                                r = new URL(t.endpointUrl),
                                                i = r.origin,
                                                o = r.pathname,
                                                s = r.search,
                                                a = t.permanentLinkPattern,
                                                u = n.indexOf("?"),
                                                c = n.indexOf("#", u + 1),
                                                l = n.substring(0, u >= 0 ? u : c >= 0 ? c : n.length),
                                                f = c > -1 ? "#" + n.substring(c + 1) : "",
                                                d = u > -1 ? n.substring(u + 1, c < 0 ? void 0 : c) : "";
                                            if ("replace" === a) {
                                                if (!l && !d && !f) return window.location.href;
                                                var h = (function (e) {
                                                    return e.replace(/\/{2,}/g, "/");
                                                })("/" + (l || "/"));
                                                return "" + window.location.origin + h + (d ? "?" + d : "") + f;
                                            }
                                            l.length > 0 && ("/" === l ? (l = "") : n.startsWith("/") || (l = "/" + l));
                                            var p = f
                                                .split("&")
                                                .filter(function (e) {
                                                    return !/^context_token/.test(e);
                                                })
                                                .join("&");
                                            if (d) {
                                                var v = s ? s.substring(1) + "&" : "";
                                                n = l + "?" + v + d + p;
                                            } else n = "" + l + s + p;
                                            return (
                                                "" +
                                                i +
                                                (function () {
                                                    switch (!0) {
                                                        case "/" === o:
                                                            return "";
                                                        case o.endsWith("/") && l.startsWith("/"):
                                                            return o.substring(0, o.length - 1);
                                                        default:
                                                            return o;
                                                    }
                                                })() +
                                                n
                                            );
                                        })(e)) === t
                                            ? [3, 2]
                                            : (location.replace(n), [4, new Promise(function () {})])
                                );
                            case 1:
                                i.sent(), (i.label = 2);
                            case 2:
                                return [3, 4];
                            case 3:
                                if ((r = i.sent()).code === M) throw r;
                                return log.debug(r), [3, 4];
                            case 4:
                                return [2];
                        }
                    });
                });
            }
            function Le(e) {
                var t = {};
                Object.keys(e).forEach(function (n) {
                    if ($.includes(n)) {
                        var r = e[n];
                        "string" == typeof r && r && (t[n.replace(/^liff\.ref\./, "")] = r);
                    }
                }),
                Object.keys(t).length > 0 &&
                (function (e) {
                    de = e;
                })(t);
            }
            var Ue = n(2),
                Re = n.n(Ue);
            function Fe(e) {
                return ((t = Re()(e)),
                    (n = ""),
                    t
                        .replace(/\r|\n/g, "")
                        .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
                        .replace(/ +$/, "")
                        .split(" ")
                        .forEach(function (e) {
                            n += String.fromCharCode(parseInt(e));
                        }),
                    window.btoa(n))
                    .replace(/\+/g, "-")
                    .replace(/\//g, "_")
                    .replace(/=/g, "");
                var t, n;
            }
            var Me = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            function Be(e) {
                for (var t = "", n = 0; n < e; n++) t += Me[Math.floor((window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) * Me.length)];
                return t;
            }
            function getUrlPrefix(e) {
                var t = e.subdomain;
                return "https://" + (void 0 === t ? "api" : t) + ".line.me/" + e.pathname;
            }
            var url = {
                token: getUrlPrefix({ pathname: "oauth2/v2.1/token" }),
                certs: getUrlPrefix({ pathname: "oauth2/v2.1/certs" }),
                "openid-configuration": getUrlPrefix({ subdomain: "access", pathname: ".well-known/openid-configuration" }),
                authorize: getUrlPrefix({ subdomain: "access", pathname: "liff/v1/authorize" }),
                profile: getUrlPrefix({ pathname: "v2/profile" }),
                message: getUrlPrefix({ pathname: "message/v3/share" }),
                messageOTT: getUrlPrefix({ pathname: "message/v3/multisend?type=ott" }),
                friendship: getUrlPrefix({ pathname: "friendship/v1/status" }),
                shareTargetPicker: getUrlPrefix({ subdomain: "access", pathname: "oauth2/v2.1/liff/shareTargetPicker" }),
                shareTargetPickerOtt: getUrlPrefix({ pathname: "liff/v2/apps" }),
                shareTargetPickerResult: getUrlPrefix({ subdomain: "access", pathname: "oauth2/v2.1/liff/shareTargetPicker/result" }),
                apps: getUrlPrefix({ pathname: "liff/v2/apps" }),
                subWindowGetMSIT: getUrlPrefix({ pathname: "liff/v2/sub/msit" }),
                subWindowGetMSTByMSIT: getUrlPrefix({ pathname: "liff/v2/sub/mst" }),
                subWindowSubscribe: getUrlPrefix({ subdomain: "liff", pathname: "liff/v2/sub/waitResult" }),
                subWindowPost: getUrlPrefix({ pathname: "liff/v2/sub/result" }),
                subWindowGetAppData: getUrlPrefix({ pathname: "liff/v2/sub/appData" }),
                subWindowGetOrigin: function (e) {
                    return getUrlPrefix({ pathname: "liff/v2/sub/" + e + "/origin" });
                },
            };
            function getUrl(e) {
                return url[e];
            }
            function $e() {
                return "2.9.0";
            }
            function login(e) {
                console.log("login")
                var t = Be(43),
                    n = Fe(t),
                    r = oe();
                if (!r || !r.liffId) throw Z("INVALID_CONFIG", "You need to define `liffId` for liff.login()");
                var i = { app_id: r.liffId, state: Be(12), response_type: "code", code_challenge_method: "S256", code_challenge: n, liff_sdk_version: "2.9.0" };
                e && e.redirectUri && (i.redirect_uri = e.redirectUri), saveData(TOKEN_CONSTANT.LOGIN_TMP, { codeVerifier: t });
                var o = getUrl("authorize") + "?" + json.stringify(i);
                log.debug("[Redirect] " + o), (window.location.href = o);
            }
            var qe = {},
                He = !1;
            function Je(e, t) {
                He ||
                ((He = !0),
                    window.addEventListener("liffEvent", function (e) {
                        e &&
                        e.detail &&
                        e.detail.type &&
                        qe[e.detail.type] &&
                        qe[e.detail.type].forEach(function (t) {
                            return t(e);
                        });
                    })),
                    qe[e] ? qe[e].push(t) : (qe[e] = [t]);
            }
            function Xe(e, t) {
                var n = qe[e];
                if (n && Array.isArray(n)) {
                    var r = n.indexOf(t);
                    r >= 0 && n.splice(r, 1);
                }
            }
            var ze = function (e) {
                return Object.entries(e)
                    .map(function (e) {
                        var t = D(e, 2),
                            n = t[0],
                            r = t[1];
                        return (
                            encodeURIComponent(n) +
                            "=" +
                            encodeURIComponent(
                                (function (t) {
                                    if ("object" == typeof t)
                                        try {
                                            return JSON.stringify(t);
                                        } catch (e) {
                                            return "" + t;
                                        }
                                    return "" + t;
                                })(r)
                            )
                        );
                    })
                    .join("&");
            };
            function Ze(e, t) {
                !(function (e, t) {
                    var n = !1,
                        r = document.createElement("img");
                    if (((r.width = 1), (r.height = 1), "function" == typeof t)) {
                        var i = function () {
                            n || (t(r), (n = !0));
                        };
                        (r.onload = i), setTimeout(i, 1500);
                    }
                    r.src = "https://torimochi.line-apps.com/1/req?" + ze(e);
                })(
                    {
                        cid: "liff",
                        eventType: "debug",
                        timestamp: Date.now(),
                        logVersion: "1.6.9",
                        threshold: 0,
                        productKey: "liff-real",
                        productVersion: "latest",
                        url: location.href,
                        host: location.hostname,
                        path: location.pathname,
                        query: location.search,
                        hash: location.hash,
                        referrer: document.referrer,
                        userId: "liff",
                        sessionId: "none",
                        sessionPath: "",
                        sessionQuery: "",
                        sessionTime: "0",
                        sessionDuration: "0",
                        sessionParams: {},
                        touchX: "0",
                        touchY: "0",
                        scrollX: "0",
                        scrollY: "0",
                        windowX: "0",
                        windowY: "0",
                        targets: [],
                        content: { debug: { message: e } },
                    },
                    t
                );
            }
            function Ye(e) {
                var t = e.split(".");
                if (t[1])
                    try {
                        var n = t[1].replace(/-/g, "+").replace(/_/g, "/");
                        return JSON.parse(window.atob(n));
                    } catch (r) {
                        return null;
                    }
                return null;
            }
            function Qe(e) {
                return window.atob(e.replace(/-/g, "+").replace(/_/g, "/"));
            }
            function et(e) {
                for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), i = 0; i < t; i++) r[i] = e.charCodeAt(i);
                return n;
            }
            function tt(e) {
                return initContext(this, void 0, void 0, function () {
                    var t, n, r;
                    return j(this, function (i) {
                        switch (i.label) {
                            case 0:
                                if (!e.ok) return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, e.json()];
                            case 2:
                                return [2, i.sent()];
                            case 3:
                                return i.sent(), [2, e];
                            case 4:
                                return (
                                    (t = String(e.status)),
                                        (n = X.has(t) ? t : "UNKNOWN"),
                                        [
                                            4,
                                            e.json().catch(function () {
                                                throw Z(n, e.statusText);
                                            }),
                                        ]
                                );
                            case 5:
                                throw Z((r = i.sent()).error || n, r.error_description || r.message);
                        }
                    });
                });
            }
            function nt(e) {
                var t = (function (e) {
                    if (e) return e;
                    var t = getAccessToken();
                    if (!t) throw Z("UNAUTHORIZED", "Need access_token for api call, Please login first");
                    return { "Content-Type": "application/json", Accept: "application/json", Authorization: "Bearer " + t };
                })(e && e.headers);
                return N(N({}, e), { headers: t });
            }
            function fetchData(e, t) {
                var n;
                try {
                    n = nt(t);
                } catch (r) {
                    return Promise.reject(r);
                }
                return fetch(e, n).then(tt);
            }
            function it(e, t) {
                var n;
                try {
                    n = nt(t);
                } catch (r) {
                    return Promise.reject(r);
                }
                return fetch(e, n);
            }
            var ot = function () {
                    return initContext(this, void 0, void 0, function () {
                        return j(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, fetchData(getUrl("certs"))];
                                case 1:
                                    return [2, e.sent()];
                            }
                        });
                    });
                },
                st = function () {
                    return "ios" === getOS() && null !== (e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && parseInt(e[1], 10) <= 10;
                    var e;
                };
            function at(e, t, r) {
                return initContext(this, void 0, void 0, function () {
                    var i, o, s, a;
                    return j(this, function (u) {
                        switch (u.label) {
                            case 0:
                                return st() ? [4, Promise.all([n.e(2), n.e(0)]).then(n.t.bind(null, 283, 7))] : [3, 2];
                            case 1:
                                return (o = u.sent()), (s = o.default), (i = s.verify(t, r, e, "SHA-256", "raw")), [3, 5];
                            case 2:
                                return [4, crypto.subtle.importKey("jwk", e, { name: "ECDSA", namedCurve: "P-256" }, !1, ["verify"])];
                            case 3:
                                return (a = u.sent()), [4, crypto.subtle.verify({ name: "ECDSA", hash: { name: "SHA-256" } }, a, r, t)];
                            case 4:
                                (i = u.sent()), (u.label = 5);
                            case 5:
                                return [2, i];
                        }
                    });
                });
            }
            function ut(e, t) {
                return initContext(this, void 0, void 0, function () {
                    var n, r, i, o, s, a, u, c, l, f, d, h, p, v, m;
                    return j(this, function (y) {
                        switch (y.label) {
                            case 0:
                                return (
                                    (n = e.split(".")),
                                        (r = D(n, 3)),
                                        (i = r[0]),
                                        (o = r[1]),
                                        (s = r[2]),
                                        (a = JSON.parse(Qe(i))),
                                        (u = JSON.parse(
                                            ((w = Qe(o)
                                                .split("")
                                                .map(function (e) {
                                                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                                                })
                                                .join("")),
                                                decodeURIComponent(w))
                                        )),
                                        (c = et(Qe(s))),
                                        (l = et(i + "." + o)),
                                        [4, ot()]
                                );
                            case 1:
                                if (
                                    ((f = y.sent()),
                                        !(d = f.keys.find(function (e) {
                                            return e.kid === a.kid;
                                        })))
                                )
                                    return [3, 6];
                                if ((delete d.alg, "ES256" !== a.alg)) throw Z("INVALID_ID_TOKEN", 'Invalid "alg" value in ID_TOKEN');
                                (h = void 0), (y.label = 2);
                            case 2:
                                return y.trys.push([2, 4, , 5]), [4, at(d, l, c)];
                            case 3:
                                return (h = y.sent()), [3, 5];
                            case 4:
                                throw Z("INVALID_ID_TOKEN", "Failed to use Crypto API to verify ID_TOKEN: " + y.sent());
                            case 5:
                                if (h) {
                                    if (((p = "https://access.line.me" !== u.iss), (v = u.aud !== t), (m = 1e3 * u.exp < Date.now()), p)) throw Z("INVALID_ID_TOKEN", 'Invalid "iss" value in ID_TOKEN');
                                    if (v) throw Z("INVALID_ID_TOKEN", 'Invalid "aud" value in ID_TOKEN');
                                    if (m) throw Z("INVALID_ID_TOKEN", 'Invalid "exp" value in ID_TOKEN');
                                    return [2, u];
                                }
                                throw Z("INVALID_ID_TOKEN", "Invalid signature in ID_TOKEN");
                            case 6:
                                throw Z("INVALID_ID_TOKEN", 'Invalid "kid" value in ID_TOKEN');
                            case 7:
                                return [2];
                        }
                        var w;
                    });
                });
            }
            function ct(e) {
                var t = e.pathname,
                    n = e.query;
                return initContext(this, void 0, void 0, function () {
                    var e, r;
                    return j(this, function (i) {
                        return (e = n ? "?" + ke(n) : ""), (r = "liff://" + t + e), (location.href = r), [2];
                    });
                });
            }
            var lt = ["subwindowOpen", "shareTargetPicker", "multipleLiffTransition"],
                ft = {
                    shareTargetPicker: function () {
                        if (!isLoggedIn()) return !1;
                        var e = readContext();
                        if (!e) return !1;
                        var t = e.availability.shareTargetPicker,
                            n = t.permission,
                            r = t.minVer;
                        if (!n) return !1;
                        if (isInClient()) {
                            var i = getLineVersion();
                            return null !== i && compareVersion(i, r) >= 0;
                        }
                        return !0;
                    },
                    multipleLiffTransition: function () {
                        var e = readContext();
                        if (!e || !e.availability) return !1;
                        var t = e.availability.multipleLiffTransition.permission;
                        return isInClient() && t;
                    },
                    subwindowOpen: function () {
                        var e = readContext();
                        if (!e || !e.availability || !e.availability.subwindowOpen) return !1;
                        var t = e.availability.subwindowOpen,
                            n = t.permission,
                            r = t.minVer;
                        if (!n) return !1;
                        if (isInClient()) {
                            var i = getLineVersion();
                            return null !== i && compareVersion(i, r) >= 0;
                        }
                        return !0;
                    },
                },
                dt = function (e) {
                    if (!lt.includes(e)) throw Z("INVALID_ARGUMENT", "Unexpected API name.");
                    var t = ft[e];
                    return !t || t();
                };
            function ht(e, t) {
                return initContext(this, void 0, void 0, function () {
                    return j(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return dt("multipleLiffTransition")
                                    ? [
                                        4,
                                        Promise.all([
                                            new Promise(function (e, t) {
                                                Je("liffIdReceived", function n(r) {
                                                    Xe("liffIdReceived", n), r.detail.data && r.detail.data.result ? e() : t(Z(M));
                                                });
                                            }),
                                            ct({ pathname: "app/" + e, query: { feature_token: t } }),
                                        ]),
                                    ]
                                    : [3, 2];
                            case 1:
                                n.sent(), (n.label = 2);
                            case 2:
                                return [2];
                        }
                    });
                });
            }
            var pt = null;
            function vt() {
                return !!Boolean(readData(TOKEN_CONSTANT.IS_SUBSEQUENT_LIFF_APP)) || (!(!isInClient() || json.parse(window.location.hash).feature_token || we()) && (saveData(TOKEN_CONSTANT.IS_SUBSEQUENT_LIFF_APP, !0), !0));
            }
            function mt() {
                return Boolean(pt);
            }
            function yt(e) {
                var t = e.msit,
                    n = e.mstVerifier;
                return t && n ? fetchData(getUrl("subWindowGetMSTByMSIT"), { method: "POST", body: JSON.stringify({ msit: t, mstVerifier: n }) }) : Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"));
            }
            function wt(e, t) {
                return initContext(this, void 0, void 0, function () {
                    var n;
                    return j(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return (n = Te()) ? [2, n] : e && t ? [4, yt({ msit: e, mstVerifier: t })] : [3, 2];
                            case 1:
                                return [2, r.sent().mst];
                            case 2:
                                return [2, null];
                        }
                    });
                });
            }
            var gt = (function () {
                    function e() {}
                    return (
                        (e.prototype.invoke = function () {
                            return void 0 === e && (e = window.navigator.userAgent), /LIFF\/SubWindow/.test(e);
                            var e;
                        }),
                            e
                    );
                })(),
                bt = (function () {
                    function e(e) {
                        this.storage = e;
                    }
                    return (
                        (e.prototype.invoke = function () {
                            return !!this.getInSubWindow() || (!!new URLSearchParams(window.location.search).has("liff.subwindow") && (this.setInSubWindow(!0), !0));
                        }),
                            (e.prototype.getInSubWindow = function () {
                                var e = this.storage.getItem(LINE_STORE + ":" + this.getLiffId() + ":inSubWindow");
                                return null !== e && JSON.parse(e);
                            }),
                            (e.prototype.setInSubWindow = function (e) {
                                this.storage.setItem(LINE_STORE + ":" + this.getLiffId() + ":inSubWindow", String(e));
                            }),
                            (e.prototype.getLiffId = function () {
                                var e = oe().liffId;
                                if (!e) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
                                return e;
                            }),
                            e
                    );
                })(),
                It = new ((function () {
                    function e() {
                        isInClient() ? (this.impl = new gt()) : (this.impl = new bt(sessionStorage));
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return "isSubWindow";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                            (e.prototype.install = function () {
                                return this.impl.invoke.bind(this.impl);
                            }),
                            e
                    );
                })())(),
                _t = It.install();
            function Tt(e) {
                return fetchData(getUrl("apps") + "/" + e + "/featureToken");
            }
            function Et(e) {
                return initContext(this, void 0, void 0, function () {
                    var t, n, r, i, o, s, a;
                    return j(this, function (u) {
                        switch (u.label) {
                            case 0:
                                return (
                                    (t = json.parse(window.location.hash)),
                                        (n = (function (e) {
                                            for (var t, n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                                            var o = function (t) {
                                                Object.keys(t)
                                                    .filter(function (e) {
                                                        return null !== t[e] && void 0 !== t[e];
                                                    })
                                                    .forEach(function (n) {
                                                        e[n] = t[n];
                                                    });
                                            };
                                            try {
                                                for (var s = x(r), a = s.next(); !a.done; a = s.next()) {
                                                    var u = a.value;
                                                    o(u);
                                                }
                                            } catch (c) {
                                                t = { error: c };
                                            } finally {
                                                try {
                                                    a && !a.done && (n = s.return) && n.call(s);
                                                } finally {
                                                    if (t) throw t.error;
                                                }
                                            }
                                            return e;
                                        })({ access_token: getAccessToken(), context_token: readData(TOKEN_CONSTANT.RAW_CONTEXT), feature_token: we(), id_token: getIDToken(), client_id: readData(TOKEN_CONSTANT.CLIENT_ID), mst_challenge: _e(), mst_verifier: readData(TOKEN_CONSTANT.MST_VERIFIER), msit: readData(TOKEN_CONSTANT.MSIT) }, t)),
                                        mt() ? (isLoggedIn() ? [4, Tt(e)] : [3, 2]) : [3, 3]
                                );
                            case 1:
                                (i = u.sent()), (o = i.featureToken), (s = i.features), (r = s), n.feature_token || (n.feature_token = o), (u.label = 2);
                            case 2:
                                (a = (function (e) {
                                    var t = e.match(/([^-]+)-[^-]+/);
                                    return t && t[1];
                                })(e)) && (n.client_id = a),
                                    (u.label = 3);
                            case 3:
                                return [2, { credentials: n, features: r }];
                        }
                    });
                });
            }
            function Ot(e) {
                if (e.persisted && dt("multipleLiffTransition"))
                    if ("ios" === getOS()) window.location.reload();
                    else {
                        var t = oe().liffId,
                            n = we();
                        if (!t) throw Z(M, "Invalid LIFF ID.");
                        if (!n) throw Z("FORBIDDEN", "Invalid featureToken for client features");
                        ct({ pathname: "app/" + t, query: { feature_token: n } });
                    }
            }
            function St(e) {
                var t = e.mst;
                return t ? fetchData(getUrl("subWindowGetAppData"), { method: "POST", body: JSON.stringify({ mst: t }) }) : Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"));
            }
            function Pt(e) {
                return initContext(this, void 0, void 0, function () {
                    var t, n, r, i, o, s, a, u, c, l, f, d, h, p, v;
                    return j(this, function (m) {
                        switch (m.label) {
                            case 0:
                                return [
                                    4,
                                    new Promise(function (e) {
                                        var version = getLineVersion();
                                        if (!version || compareVersion(version, "9.5.0") < 0) ae(G), e();
                                        else if (window._liff && window._liff.features) log.debug("init from window._liff.features"), ae(window._liff.features), e();
                                        else {
                                            log.debug("cannot find window._liff.features, listen to ready event");
                                            var n = function (t) {
                                                log.debug("ready event is fired"), Xe("ready", n), t && t.detail && t.detail.data && t.detail.data.features && ae(t.detail.data.features), e();
                                            };
                                            Je("ready", n);
                                        }
                                    }),
                                ];
                            case 1:
                                return m.sent(), "boolean" == typeof pt && log.warn("liff.init is not expected to readContext called more than once"), (pt = vt()), [4, Et(e.liffId)];
                            case 2:
                                return (
                                    (t = m.sent()),
                                        (n = t.credentials),
                                        (r = n.access_token),
                                        (i = n.context_token),
                                        (o = n.feature_token),
                                        (s = n.id_token),
                                        (a = n.client_id),
                                        (u = n.mst_verifier),
                                        (c = n.mst_challenge),
                                        (l = n.msit),
                                        (f = t.features),
                                        _t() || !o ? [3, 4] : [4, ht(e.liffId, o)]
                                );
                            case 3:
                                m.sent(), mt() && saveFeatureToken(o), (m.label = 4);
                            case 4:
                                return (
                                    (d = "function" == typeof window._liff.validateFeatureToken),
                                    i && saveContext(Ye(i)),
                                    c && saveData(TOKEN_CONSTANT.MST_CHALLENGE, c),
                                    u &&
                                    (function (e) {
                                        saveData(TOKEN_CONSTANT.MST_VERIFIER, e);
                                    })(u),
                                    a && saveClientId(a),
                                    l &&
                                    (function (e) {
                                        saveData(TOKEN_CONSTANT.MSIT, e);
                                    })(l),
                                        window.addEventListener("pageshow", Ot),
                                    mt() && ae(f || G),
                                        isLoggedIn() ? [3, 8] : o && r ? [3, 7] : (login(mt() ? { redirectUri: location.href } : void 0), mt() ? [4, new Promise(function () {})] : [3, 6])
                                );
                            case 5:
                                m.sent(), (m.label = 6);
                            case 6:
                                throw Z(M, "Failed to parse feature_token or access_token");
                            case 7:
                                if (
                                    d &&
                                    !(function (e, t) {
                                        return (
                                            (window._liff.makeFeatureTokenHash = function (e, t) {
                                                return Re()(e + "-" + t);
                                            }),
                                                !!window._liff.validateFeatureToken(e, t)
                                        );
                                    })(e.liffId, o)
                                )
                                    throw (login(), Z(M, "Failed to validate feature_token"));
                                !d && window.history.length > 1 ? Ze("potential abuser") : (saveFeatureToken(o), saveAccessToken(r)), (m.label = 8);
                            case 8:
                                return [4, wt(l, u)];
                            case 9:
                                return (h = m.sent())
                                    ? ((function (e) {
                                        saveData(TOKEN_CONSTANT.MST, e);
                                    })(h),
                                        [4, St({ mst: h })])
                                    : [3, 11];
                            case 10:
                                (p = m.sent().data) && Ee(JSON.stringify(p)), (m.label = 11);
                            case 11:
                                return s && !getIDToken() && saveTokenId(s), s && a && !me() ? [4, ut(s, a)] : [3, 13];
                            case 12:
                                (v = m.sent()) && saveDecodedIdToken(v), (m.label = 13);
                            case 13:
                                return [2];
                        }
                    });
                });
            }
            function At(e) {
                return initContext(this, void 0, void 0, function () {
                    var t, n, r, i, o, s, a;
                    return j(this, function (u) {
                        switch (u.label) {
                            case 0:
                                return (
                                    (t = getUrl("apps")),
                                        (n = t + "/" + e + "/contextToken"),
                                        (r = getAccessToken()),
                                        (i = { "Content-Type": "application/json", Accept: "application/json" }),
                                    r && (i.Authorization = "Bearer " + r),
                                        [4, fetchData(n, { headers: i })]
                                );
                            case 1:
                                if (((o = u.sent()), !(s = o.contextToken))) throw Z(M, "Can not get context from server.");
                                if (!(a = Ye(s))) throw Z(M, "Invalid context token.");
                                return [2, a];
                        }
                    });
                });
            }
            function Nt() {
                return initContext(this, void 0, void 0, function () {
                    var e;
                    return j(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (!(e = oe().liffId)) throw Z(M, "Invalid LIFF ID.");
                                return [4, At(e)];
                            case 1:
                                return saveContext(t.sent()), [2];
                        }
                    });
                });
            }
            function kt(e) {
                return initContext(this, void 0, void 0, function () {
                    var t,
                        n,
                        r,
                        i = this;
                    return j(this, function (o) {
                        switch (o.label) {
                            case 0:
                                (t = function () {
                                    return initContext(i, void 0, void 0, function () {
                                        var t, n, r, i, o, s;
                                        return j(this, function (a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [
                                                        4,
                                                        ((u = oe()),
                                                            (queryParams = json.parse(window.location.search)),
                                                            (l = ue()),
                                                            (jsonRequest = {
                                                                grant_type: "authorization_code",
                                                                client_id: queryParams.liffClientId,
                                                                appId: u.liffId,
                                                                code: queryParams.code,
                                                                code_verifier: l.codeVerifier,
                                                                redirect_uri: u.redirectUri || queryParams.liffRedirectUri,
                                                                id_token_key_type: "JWK",
                                                            }),
                                                            (requestBody = json.stringify(jsonRequest)),
                                                            fetchData(getUrl("token"), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }, body: requestBody })),
                                                    ];
                                                case 1:
                                                    return (
                                                        (t = a.sent()),
                                                            (n = t.access_token),
                                                            (r = t.id_token),
                                                            (i = t.expires_in),
                                                            saveClientId(e),
                                                            saveAccessToken(n),
                                                            (function (e) {
                                                                var t = oe();
                                                                ne.set(LINE_STORE + ":" + TOKEN_CONSTANT.EXPIRES + ":" + t.liffId, e.getTime(), { expires: e.toUTCString(), path: "/", secure: null });
                                                            })(new Date(Date.now() + 1e3 * i)),
                                                            ce(),
                                                            r ? (saveTokenId(r), [4, ut(r, e)]) : [3, 3]
                                                    );
                                                case 2:
                                                    (o = a.sent()) && saveDecodedIdToken(o), (a.label = 3);
                                                case 3:
                                                    return (s = json.parse(location.hash).context_token) ? (saveContext(Ye(s)), [3, 6]) : [3, 4];
                                                case 4:
                                                    return [4, Nt()];
                                                case 5:
                                                    a.sent(), (a.label = 6);
                                                case 6:
                                                    return [2];
                                            }
                                            var u, queryParams, l, jsonRequest, requestBody;
                                        });
                                    });
                                }),
                                    (o.label = 1);
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, t()];
                            case 2:
                                return o.sent(), [3, 4];
                            case 3:
                                throw ((n = o.sent()), (r = n), ce(), r);
                            case 4:
                                return [2];
                        }
                    });
                });
            }
            var jt = n(5),
                xt = "liff.shareTargetPicker",
                Dt = "liff.init",
                Ct = 1,
                Lt = 2,
                Ut = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return A(t, e), t;
                })(jt.UTS),
                Rt = function (e) {
                    var t = Oe.id,
                        n = Oe.version,
                        r = (Oe.isLoggedIn ? Ct : 0) | (Oe.isLiffSuccessful ? Lt : 0);
                    e.setExtra("liff", { id: t, loginStatus: r, version: n });
                },
                Ft = function (e, t) {
                    Se({ isLiffSuccessful: t }), log.debug("[LIFFUTS][isLiffInitSuccessful] " + t), Rt(e);
                },
                Mt = function (e) {
                    log.debug("[LIFFUTS][sendCustom] liff.init"), e.sendCustom({ type: "liffSdk", placeId: Dt });
                };
            function getProfile() {
                return fetchData(getUrl("profile"));
            }
            function Vt() {
                return initContext(this, void 0, void 0, function () {
                    var e, t;
                    return j(this, function (n) {
                        switch (n.label) {
                            case 0:
                                if (!isLoggedIn()) return [3, 6];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 5, , 6]), (e = me()) && e.sub ? [2, e.sub] : [3, 2];
                            case 2:
                                return [4, getProfile()];
                            case 3:
                                if ((t = n.sent()) && t.userId) return [2, t.userId];
                                n.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return n.sent(), log.debug("can't retrieve Mid/Uid because of something wrong"), [3, 6];
                            case 6:
                                return [2];
                        }
                    });
                });
            }
            function Wt() {
                return initContext(this, void 0, void 0, function () {
                    var e;
                    return j(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, Vt()];
                            case 1:
                                return (e = t.sent()) && "u" === e.substring(0, 1) ? [2, e] : [2];
                        }
                    });
                });
            }
            function Gt(e) {
                var t = e.match($t());
                return t && t[1];
            }
            function $t() {
                return new RegExp("^https://liff.line.me/(\\d+-\\w+)");
            }
            var Kt,
                qt,
                Ht,
                Jt,
                Xt,
                zt = function (e) {
                    if (e && Number.isFinite(e)) return Math.round(100 * e);
                };
            function Zt(e, t) {
                return initContext(this, void 0, void 0, function () {
                    var n, r, i, o, s, a, u, c, l, f, d;
                    return j(this, function (h) {
                        switch (h.label) {
                            case 0:
                                return (
                                    (n = readContext()),
                                        (r = null == n ? void 0 : n.utsTracking)
                                            ? "auto" !== (i = r.mode) && "force" !== i
                                                ? [3, 2]
                                                : (log.debug("[LIFFUTS] " + new Date().toUTCString()),
                                                    (o = t.liffId),
                                                    (s = t.analytics),
                                                    (a = new Ut()),
                                                    (u = void 0),
                                                    (c = void 0),
                                                    "force" === i
                                                        ? ((u = { appId: "liff_general", appEnv: "release" }), (c = { endpoint: "https://uts-front.line-apps.com", sampleRate: zt(r.sendRatio), version: "current" }))
                                                        : ((u = N(N({}, null == s ? void 0 : s.context), { appId: (null == s ? void 0 : s.context.appId) || "liff_general", appEnv: (null == s ? void 0 : s.context.appEnv) || "release" })),
                                                            (c = N(N({ endpoint: "https://uts-front.line-apps.com" }, null == s ? void 0 : s.options), { sampleRate: zt(r.sendRatio), version: "current" }))),
                                                    a.init(u, c),
                                                    [4, Wt()])
                                            : [2]
                                );
                            case 1:
                                (l = h.sent()) && (log.debug("[LIFFUTS][mid] " + l), a.setMid(l)),
                                (null == n ? void 0 : n.tid) && (log.debug("[LIFFUTS][tid] " + n.tid), a.setTid(n.tid)),
                                (f = de) && (log.debug("liff.ref.referrer", f), a.setSessionParams(f)),
                                    (function (e, t) {
                                        Se({ id: t }), log.debug("[LIFFUTS][LIFFID] " + t), Rt(e);
                                    })(a, o),
                                    (p = a),
                                    Se({ isLoggedIn: (v = isLoggedIn()) }),
                                    log.debug("[LIFFUTS][isLoggedIn] " + v),
                                    Rt(p),
                                    (function (e, t) {
                                        Se({ version: t }), log.debug("[LIFFUTS][SDK version] " + t), Rt(e);
                                    })(a, "2.9.0"),
                                    (d = (function (e) {
                                        var t = new URL(e),
                                            n = json.parse(t.hash);
                                        return (
                                            Object.keys(n)
                                                .filter(function (e) {
                                                    return W.includes(e);
                                                })
                                                .forEach(function (e) {
                                                    return delete n[e];
                                                }),
                                                (t.hash = json.stringify(n)),
                                                t.toString()
                                        );
                                    })(location.href)),
                                    log.debug("[LIFFUTS][url] " + d),
                                    a.setUrl(d),
                                    (function (e, t) {
                                        e.analytics = t;
                                    })(e, a),
                                    (h.label = 2);
                            case 2:
                                return [2];
                        }
                        var p, v;
                    });
                });
            }
            var Yt;
            function Qt(e) {
                Kt = e;
            }
            function en() {
                return Kt;
            }
            function tn() {
                return Ht;
            }
            function nn(e, t) {
                void 0 === t && (t = {});
                var n = Xt;
                if (!window.opener || !n) throw Z("EXCEPTION_IN_SUBWINDOW");
                var r = JSON.stringify(t);
                return window.opener.postMessage({ status: e, result: r }, n), Promise.resolve({ status: e, result: r });
            }
            function rn(e) {
                var t = e.data,
                    n = e.source,
                    r = e.origin;
                if (t) {
                    var i = t.type,
                        o = t.message;
                    "healthCheck" === i &&
                    (window.removeEventListener("message", rn),
                    o && Ee(o),
                        (function (e) {
                            Xt = e;
                        })(r),
                    n && n.postMessage && n.postMessage({ status: "healthCheck" }, r));
                }
            }
            function on(e, t) {
                return initContext(this, void 0, void 0, function () {
                    var n;
                    return j(this, function (r) {
                        switch (r.label) {
                            case 0:
                                if (!t.liffId) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
                                if (((ie = t), Le((n = json.parse(window.location.search))), _t() && !isInClient() && (window.removeEventListener("message", rn), window.addEventListener("message", rn)), n.error && n.liffOAuth2Error))
                                    throw ((s = n.error), (a = n.error_description), (u = a.replace(/\+/g, " ")), Z(M, s + ": " + u));
                                return (i = n.code), (o = ue()), Boolean(i && !isLoggedIn() && o && o.codeVerifier) ? [4, kt(n.liffClientId)] : [3, 2];
                            case 1:
                                r.sent(), (r.label = 2);
                            case 2:
                                return isInClient() ? [4, Pt(t)] : [3, 4];
                            case 3:
                                return r.sent(), [3, 6];
                            case 4:
                                return isLoggedIn() ? [3, 6] : [4, Nt()];
                            case 5:
                                r.sent(), (r.label = 6);
                            case 6:
                                return n["liff.state"] ? [4, Ce(n["liff.state"])] : [3, 8];
                            case 7:
                                r.sent(), (r.label = 8);
                            case 8:
                                return [4, Zt(e, t)];
                            case 9:
                                return r.sent(), isInClient() || !isLoggedIn() ? [2] : (Ae() && logout(), [2]);
                        }
                        var i, o, s, a, u;
                    });
                });
            }
            var sn = new Promise(function (e) {
                Yt = e;
            });
            function getExternalExtendsionJs() {
                var e;
                return "ios" === getOS()
                    ? (e = getLineVersion()) && compareVersion(e, "9.19.0") < 0
                        ? "https://static.line-scdn.net/liff/edge/2/ios-918-extensions.js"
                        : "https://static.line-scdn.net/liff/edge/2/ios-extensions.js"
                    : "https://static.line-scdn.net/liff/edge/2/non-ios-extensions.js";
            }
            function un() {
                return initContext(this, void 0, void 0, function () {
                    return j(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [3, 2];
                            case 1:
                                return [2, e.sent().default];
                            case 2:
                                return [
                                    2,
                                    new Promise(function (e, t) {
                                        var n = document.createElement("script"),
                                            r = getExternalExtendsionJs();
                                        (n.onload = function () {
                                            var n = window.liffClientExtension;
                                            n ? e(n) : t(Z(M, "Unable to load client features. (Extension is empty)"));
                                        }),
                                            (n.onerror = function () {
                                                t(Z(M, "Unable to load client features."));
                                            }),
                                            (n.src = r),
                                            (n.type = "text/javascript"),
                                            document.body.appendChild(n);
                                    }),
                                ];
                        }
                    });
                });
            }
            function context(e) {
                console.log("context")
                return initContext(this, void 0, void 0, function () {
                    var t;
                    return j(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, un()];
                            case 1:
                                return (
                                    (t = n.sent()),
                                        (function (e) {
                                            window && !window.liff && (window.liff = e);
                                        })(e),
                                        t.install(e),
                                        [2]
                                );
                        }
                    });
                });
            }
            function init(params, resolve, reject) {
                console.log("init with url : " + window.location.href)

                return initContext(this, void 0, void 0, function () {
                    var r;
                    console.log(i)
                    return j(this, function (i) {
                        console.log("label" + i.label)
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, Promise.all([context(this), on(this, params)])];
                            case 1:
                                return i.sent(), "function" == typeof resolve && resolve(), Yt(), [3, 3];
                            case 2:
                                throw ((r = i.sent()), "function" == typeof reject && reject(r), r);
                            case 3:
                                return [2];
                        }
                    });
                });
            }
            n(10);
            function fn(e, t, n) {
                void 0 === t && (t = {}), void 0 === n && (n = "");
                var r = we();
                if (!r) throw Z("FORBIDDEN", "Invalid featureToken for client features");
                if (!window._liff || !window._liff.postMessage) throw Z("INVALID_ARGUMENT", "postMessage is not available from client");
                log.debug("[js postMessage to client]", e, n, t), window._liff.postMessage(e, r, n, JSON.stringify(t));
            }
            function dn(e, t, n) {
                return (
                    void 0 === t && (t = {}),
                    void 0 === n && (n = { once: !0 }),
                        we()
                            ? ((n = N({ callbackId: Be(12), once: !0 }, n)),
                                new Promise(function (r, i) {
                                    var o = function (t) {
                                        if (t && t.detail) {
                                            var s = t.detail.callbackId === n.callbackId,
                                                a = "string" != typeof t.detail.callbackId;
                                            (s || a) && (n.once && Xe(e, o), log.debug("[callback detail]", t.detail), t.detail.error ? i(t.detail.error) : t.detail.data ? r(t.detail.data) : i(t.detail));
                                        }
                                        i();
                                    };
                                    Je(e, o), fn(e, t, n.callbackId);
                                }))
                            : Promise.reject(Z("FORBIDDEN", "Invalid featureToken for client features"))
                );
            }
            function hn() {
                if (window._liff && window._liff.postMessage) {
                    var e = getLineVersion();
                    null !== e && compareVersion(e, "10.15.0") >= 0 ? ("ios" === getOS() ? window._liff.postMessage("closeWindow", "") : window._liff.postMessage("closeWindow", "", "", "")) : dn("closeWindow");
                } else window.close();
            }
            var pn = function (e) {
                return (
                    "object" == typeof e &&
                    null !== e &&
                    (function (e) {
                        return "string" == typeof e || e instanceof String;
                    })(e.type)
                );
            };
            function vn(e) {
                return Promise.reject(Z("INVALID_ARGUMENT", e));
            }
            function mn(e, t) {
                var n = yn,
                    r = D(t.split("."), 1)[0],
                    i = n[t];
                i && e.removeEventListener(r, i), (n[t] = null);
            }
            var yn = {},
                wn = !1,
                gn = !1;
            function bn(e, t, n, r) {
                wn ||
                ((gn = (function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                return (e = !0), !1;
                            },
                        });
                        window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
                    } catch (Yn) {
                        e = !1;
                    }
                    return e;
                })()),
                    (wn = !0));
                var i = D(t.split("."), 1)[0];
                return new Promise(function (o) {
                    var s = function (i) {
                        o(i), n && n(i), r && r.once && mn(e, t);
                    };
                    (yn[t] = s), e.addEventListener(i, s, !!gn && r);
                });
            }
            function In(e, t, n, r) {
                if ((void 0 === n && (n = {}), "object" != typeof e || !e.postMessage)) throw Z("INVALID_ARGUMENT", "target must readContext window object");
                if ("string" != typeof t) throw Z("INVALID_ARGUMENT", "keyname must readContext string");
                if ("object" != typeof n) throw Z("INVALID_ARGUMENT", "incorrect body format. It should readContext Object or Array comprised of Object");
                if (!r) throw Z("INVALID_ARGUMENT", "serverEndPointUrl isn't passed. please fill up with proper url");
                if ("*" === r) throw new Error("serverEndPointUrl doesn't allow to set '*'");
                var i = { name: t, body: n };
                e.postMessage(i, r);
            }
            function _n(e, t, n, r) {
                bn(
                    e,
                    "message." + t,
                    (function (e, t, n) {
                        return function (r) {
                            log.debug("messageReceive", r), r.origin === n && r.data.name === e && t(r);
                        };
                    })(t, n, r)
                );
            }
            var Tn = (function () {
                function e() {
                    (this.payloadToShareTargetPicker = null), (this.popupWindow = null), (this.doesWaitForSubwindowResult = !1);
                }
                return (
                    (e.getInstance = function () {
                        return e.instance ? e.instance.reset() : (e.instance = new e()), e.instance;
                    }),
                        (e.prototype.init = function (e) {
                            console.log("init 3")
                            return initContext(this, void 0, void 0, function () {
                                var t, n;
                                return j(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return (
                                                r.trys.push([0, 5, , 6]),
                                                    (this.liffId = e.referrer.liffId),
                                                    (this.doesWaitForSubwindowResult = !(!e.options || !e.options.waitForSubwindowResult)),
                                                    (this.allowPostMessageOrigin = this.initAllowPostMessageOrigin()),
                                                    (this.payloadToShareTargetPicker = this.buildPayloadToShareTargetPicker(e)),
                                                window.AbortController && (this.abortController = new window.AbortController()),
                                                    this.prepareAnotherWindow(),
                                                    [4, this.initOtt()]
                                            );
                                        case 1:
                                            return r.sent(), this.initListener(), this.openAnotherWindow(), this.doesWaitForSubwindowResult ? [4, this.pollingShareResult()] : [3, 3];
                                        case 2:
                                            return (t = r.sent()), this.finalize(), [2, t];
                                        case 3:
                                            return [2];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            if (((n = r.sent()), this.finalize(), "AbortError" !== n.name)) throw n;
                                            return [3, 6];
                                        case 6:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.resetAllVariables = function () {
                            (this.liffId = ""),
                                (this.allowPostMessageOrigin = ""),
                                (this.payloadToShareTargetPicker = null),
                                (this.ott = ""),
                                (this.popupWindow = null),
                                (this.timeoutIDForHealthCheck = null),
                                (this.abortController = null),
                                (this.internalError = null),
                                (this.doesWaitForSubwindowResult = !1);
                        }),
                        (e.prototype.reset = function () {
                            this.finalize(), this.resetAllVariables();
                        }),
                        (e.prototype.finalize = function () {
                            var e, t;
                            this.abortController && this.abortController.abort(), isInClient() || ((e = this.timeoutIDForHealthCheck), (t = this.popupWindow), mn(window, "message.receivedHealthcheck"), e && clearTimeout(e), t && !t.closed && t.close());
                        }),
                        (e.prototype.buildPayloadToShareTargetPicker = function (e) {
                            return { messages: e.messages, referrer: e.referrer };
                        }),
                        (e.prototype.initAllowPostMessageOrigin = function (e) {
                            return (
                                void 0 === e && (e = getUrl("shareTargetPicker")),
                                    (function (e) {
                                        var t = e.match(/^(https?:\/\/.*?)\//);
                                        return (t && t[1]) || "";
                                    })(e)
                            );
                        }),
                        (e.prototype.initOtt = function () {
                            return initContext(this, void 0, void 0, function () {
                                var e, t, n;
                                return j(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return (
                                                this.abortController && (e = this.abortController.signal),
                                                    (t = getUrl("shareTargetPickerOtt") + "/" + this.liffId + "/ott"),
                                                    (n = this),
                                                    [
                                                        4,
                                                        fetchData(t, { method: "GET", signal: e }).then(function (e) {
                                                            return e.ott;
                                                        }),
                                                    ]
                                            );
                                        case 1:
                                            return (n.ott = r.sent()), [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.prepareAnotherWindow = function () {
                            isInClient() || ("ios" !== getOS() || K() ? (this.popupWindow = window.open("", "liffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes")) : (this.popupWindow = window.open()));
                        }),
                        (e.prototype.openAnotherWindow = function () {
                            if (isInClient() && this.payloadToShareTargetPicker)
                                (e = this.liffId), (t = this.ott), (n = this.payloadToShareTargetPicker), (r = { liffId: e, ott: t, data: JSON.stringify(n), closeModals: !1 }), (location.href = "line://picker?" + ke(r));
                            else {
                                if (((this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3)), !this.popupWindow)) throw Z("CREATE_SUBWINDOW_FAILED");
                                !(function (e, t, n) {
                                    var r = { liffId: t, ott: n };
                                    e.location.href = getUrl("shareTargetPicker") + "?" + ke(r);
                                })(this.popupWindow, this.liffId, this.ott);
                            }
                            var e, t, n, r;
                        }),
                        (e.prototype.initListener = function () {
                            var e, t;
                            isInClient() || ((e = this.onReceivedHealthcheck.bind(this)), (t = this.allowPostMessageOrigin), _n(window, "receivedHealthcheck", e, t));
                        }),
                        (e.prototype.healthCheck = function () {
                            return initContext(this, void 0, void 0, function () {
                                var e;
                                return j(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            if (this.popupWindow && !this.popupWindow.closed) return [3, 7];
                                            if (!this.doesWaitForSubwindowResult) return [3, 5];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.onCanceled()];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return (e = t.sent()), (this.internalError = e), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            this.finalize(), (t.label = 6);
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            (n = this.popupWindow), (r = this.allowPostMessageOrigin), In(n, "healthcheck", void 0, r), (this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3)), (t.label = 8);
                                        case 8:
                                            return [2];
                                    }
                                    var n, r;
                                });
                            });
                        }),
                        (e.prototype.onReceivedHealthcheck = function () {
                            if (!this.popupWindow || !this.payloadToShareTargetPicker) throw Z("CREATE_SUBWINDOW_FAILED");
                            var e, t, n;
                            (e = this.popupWindow), (t = this.payloadToShareTargetPicker), (n = this.allowPostMessageOrigin), In(e, "ready", t, n);
                        }),
                        (e.prototype.onCanceled = function () {
                            return initContext(this, void 0, void 0, function () {
                                var e, t;
                                return j(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            if (isInClient() || !this.ott) throw new Error("need to call with ott in client");
                                            return (
                                                this.abortController && (e = this.abortController.signal),
                                                    (t = { liffId: this.liffId, ott: this.ott }),
                                                    [
                                                        4,
                                                        fetchData(getUrl("shareTargetPickerResult") + "?" + ke(t), {
                                                            method: "POST",
                                                            signal: e,
                                                            headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
                                                            body: "result=CANCEL",
                                                        }),
                                                    ]
                                            );
                                        case 1:
                                            return [2, "ok" === n.sent().status];
                                    }
                                });
                            });
                        }),
                        (e.prototype.getShareResult = function () {
                            return initContext(this, void 0, void 0, function () {
                                var e, t;
                                return j(this, function (n) {
                                    if (!this.ott) throw new Error("need to call with ott in client");
                                    return (
                                        this.abortController && (e = this.abortController.signal),
                                            (t = { liffId: this.liffId, ott: this.ott }),
                                            log.debug("fetch: getShareResult"),
                                            [2, fetchData(getUrl("shareTargetPickerResult") + "?" + ke(t), { method: "GET", headers: { Accept: "application/json" }, signal: e })]
                                    );
                                });
                            });
                        }),
                        (e.isPollingTimeOut = function (e, t) {
                            return (t - e) / 6e4 >= 10;
                        }),
                        (e.prototype.pollingShareResult = function () {
                            return initContext(this, void 0, void 0, function () {
                                var t, n;
                                return j(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            (t = Date.now()), (r.label = 1);
                                        case 1:
                                            if (e.isPollingTimeOut(t, Date.now())) return [3, 4];
                                            if (this.internalError) throw this.internalError;
                                            return [4, this.getShareResult()];
                                        case 2:
                                            if ((n = r.sent()) && n.result)
                                                switch (n.result) {
                                                    case "SUCCESS":
                                                        return [2, { status: "success" }];
                                                    case "CANCEL":
                                                        return [2];
                                                    case "FAILURE":
                                                    default:
                                                        throw new Error(n.resultDescription);
                                                }
                                            return [
                                                4,
                                                new Promise(function (e) {
                                                    setTimeout(e, 500);
                                                }),
                                            ];
                                        case 3:
                                            return r.sent(), [3, 1];
                                        case 4:
                                            throw new Error("Timeout: not finished within 10min");
                                    }
                                });
                            });
                        }),
                        e
                );
            })();
            var En = {};
            function On(e, t) {
                e &&
                En[e] &&
                En[e].forEach(function (e) {
                    e(t);
                });
            }
            var Sn = new ((function () {
                    function e() {
                        this.map = {};
                    }
                    return (
                        (e.prototype.clear = function () {
                            this.map = {};
                        }),
                            (e.prototype.getItem = function (e) {
                                return this.map[e] || null;
                            }),
                            (e.prototype.setItem = function (e, t) {
                                this.map[e] = t;
                            }),
                            (e.prototype.removeItem = function (e) {
                                delete this.map[e];
                            }),
                            (e.prototype.key = function (e) {
                                return Object.keys(this.map)[e] || null;
                            }),
                            Object.defineProperty(e.prototype, "length", {
                                get: function () {
                                    return Object.keys(this.map).length;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            e
                    );
                })())(),
                Pn = new ((function () {
                    function e(e) {
                        this.storage = e;
                    }
                    return (
                        Object.defineProperty(e, "IS_STATUS_UPDATED_KEY", {
                            get: function () {
                                return "subWindowStatusUpdated";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                            Object.defineProperty(e.prototype, "isStatusUpdated", {
                                get: function () {
                                    var e = this.storage.getItem(this.isStatusUpdatedKey);
                                    return null !== e && JSON.parse(e);
                                },
                                set: function (e) {
                                    this.storage.setItem(this.isStatusUpdatedKey, String(e));
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isStatusUpdatedKey", {
                                get: function () {
                                    return LINE_STORE + ":" + this.getLiffId() + ":" + e.IS_STATUS_UPDATED_KEY;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.getLiffId = function () {
                                var e = oe().liffId;
                                if (!e) throw Z("INVALID_CONFIG", "liffId is necessary for liff.init()");
                                return e;
                            }),
                            e
                    );
                })())(Sn);
            function An(e) {
                var t = Jt;
                if (e.origin === t) {
                    var n = e.data;
                    if (n) {
                        var r,
                            i,
                            o = n.status,
                            s = n.result;
                        try {
                            r = JSON.parse(s || "{}");
                        } catch (a) {
                            r = {};
                        }
                        switch (o) {
                            case "healthCheck":
                                clearInterval(tn()),
                                    (i = window.setInterval(function () {
                                        var e = en();
                                        e && e.closed && (Nn(), Qt(null), !1 === Pn.isStatusUpdated && On("close", {}), (Pn.isStatusUpdated = !1));
                                    }, 100)),
                                    (qt = i);
                                break;
                            case "cancel":
                            case "submit":
                                window.clearInterval(tn()), window.removeEventListener("message", An), On(o, r), (Pn.isStatusUpdated = !0);
                                break;
                            case "close":
                                Nn(), Qt(null), !1 === Pn.isStatusUpdated && On(o, r), (Pn.isStatusUpdated = !0);
                        }
                    }
                }
            }
            function Nn() {
                window.clearInterval(qt), window.clearInterval(tn()), window.removeEventListener("message", An);
            }
            function kn(e) {
                var t = Gt(e.url);
                if (!t) return Promise.reject(Z("INVALID_ARGUMENT", "params.url must readContext liff url"));
                !(function () {
                    Nn(), (Pn.isStatusUpdated = !1);
                    var e = en();
                    e && (e.close(), Qt(null));
                })();
                var n,
                    r,
                    i = e.url,
                    o = e.appData,
                    s = new URL(i);
                s.searchParams.append("liff.subwindow", "true"), (s.hostname = ((n = s.hostname), C([(r = D(n.split(".")))[0] + "-ext"], r.slice(1)).join(".")));
                var a,
                    u = s.toString();
                return (
                    Qt("ios" !== getOS() || K() ? window.open("", "liffsubwindow", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : window.open()),
                        ((a = t), fetchData(getUrl("subWindowGetOrigin")(a))).then(function (e) {
                            var t = en();
                            if (!t) throw Z("CREATE_SUBWINDOW_FAILED");
                            window.addEventListener("message", An), (t.location.href = u);
                            var n = e.origin,
                                r = (function (e, t) {
                                    var n = en(),
                                        r = { type: "healthCheck" };
                                    return (
                                        t && (r.message = JSON.stringify(t)),
                                            window.setInterval(function () {
                                                null == n || n.postMessage(r, e);
                                            }, 100)
                                    );
                                })(n, o);
                            (Ht = r),
                                (function (e) {
                                    Jt = e;
                                })(n);
                        })
                );
            }
            function jn(e) {
                return initContext(this, void 0, void 0, function () {
                    var t, n, r, i, o, s, a, u, c, l, f;
                    return j(this, function (d) {
                        switch (d.label) {
                            case 0:
                                (t = e.msit), (n = e.mstChallenge), (r = e.onSuccess), (i = e.onError), (o = e.reconnectCount), (s = void 0 === o ? 0 : o), (d.label = 1);
                            case 1:
                                return d.trys.push([1, 3, , 6]), [4, it(getUrl("subWindowSubscribe"), { method: "POST", body: JSON.stringify({ msit: t, mstChallenge: n }) })];
                            case 2:
                                return (a = d.sent()), [3, 6];
                            case 3:
                                return d.sent(), [4, xn()];
                            case 4:
                                return d.sent(), [4, Cn(jn, { msit: t, mstChallenge: n, onSuccess: r, onError: i, reconnectCount: (s += 1) })];
                            case 5:
                                return d.sent(), [2];
                            case 6:
                                return a.status >= 500 ? [4, xn()] : [3, 9];
                            case 7:
                                return d.sent(), [4, Cn(jn, { msit: t, mstChallenge: n, onSuccess: r, onError: i, reconnectCount: (s += 1) })];
                            case 8:
                                return d.sent(), [3, 20];
                            case 9:
                                return a.status >= 400 && 500 > a.status ? [4, Dn(a)] : [3, 11];
                            case 10:
                                return (c = d.sent()) ? ((u = c.errorDetail), i(Z("INVALID_ARGUMENT", u))) : i(Z("UNKNOWN", "Some error happened in the server")), [3, 20];
                            case 11:
                                return 200 !== a.status ? [3, 19] : [4, Dn(a)];
                            case 12:
                                return (c = d.sent()) ? [3, 13] : (i(Z("UNKNOWN", "Some error happened in the server")), [3, 18]);
                            case 13:
                                switch (((l = c.status), (f = c.result), l)) {
                                    case "error":
                                        return [3, 14];
                                    case "close":
                                    case "cancel":
                                    case "submit":
                                        return [3, 16];
                                }
                                return [3, 17];
                            case 14:
                                return [4, Cn(jn, { msit: t, mstChallenge: n, onSuccess: r, onError: i, reconnectCount: s })];
                            case 15:
                                return d.sent(), [3, 18];
                            case 16:
                                return r(l, f), [3, 18];
                            case 17:
                                i(Z("UNKNOWN", "Some error happened in the server")), (d.label = 18);
                            case 18:
                                return [3, 20];
                            case 19:
                                i(Z("UNKNOWN", "Some error happened in the server")), (d.label = 20);
                            case 20:
                                return [2];
                        }
                    });
                });
            }
            function xn() {
                return new Promise(function (e) {
                    return setTimeout(e, 1e3);
                });
            }
            function Dn(e) {
                return initContext(this, void 0, void 0, function () {
                    return j(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]), [4, e.json()];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return t.sent(), [2, null];
                            case 3:
                                return [2];
                        }
                    });
                });
            }
            function Cn(e, t) {
                return initContext(this, void 0, void 0, function () {
                    return j(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return t.reconnectCount >= 10 ? (t.onError(Z("UNKNOWN", "Failed to connect")), [3, 3]) : [3, 1];
                            case 1:
                                return [4, e(t)];
                            case 2:
                                n.sent(), (n.label = 3);
                            case 3:
                                return [2];
                        }
                    });
                });
            }
            function Ln(e) {
                var t = {};
                return (
                    Object.keys(e).forEach(function (n) {
                        "closeButtonColor" === n ? ("white" === e[n] ? (t[n] = "#ffffff") : (t[n] = "#000000")) : (t[n] = e[n]);
                    }),
                        t
                );
            }
            var Un = { height: "full", closeButtonPosition: "right", closeButtonColor: "black", closeButtonLabel: "" };
            function Rn(e) {
                var t = e.appData,
                    n = e.native,
                    r = oe().liffId,
                    i = _e(),
                    o = Gt(e.url);
                if (!r) return Promise.reject(Z("UNAUTHORIZED", "liffId is invalid"));
                if (!i) return Promise.reject(Z("UNAUTHORIZED", "mst_challenge is invalid"));
                if (!o) return Promise.reject(Z("INVALID_ARGUMENT", "params.url must readContext liff url"));
                var s = Object.assign({}, Un, n);
                return (function (e) {
                    var t = e.mainLiffId,
                        n = e.subLiffId,
                        r = e.mstChallenge,
                        i = e.appData,
                        o = e.view;
                    return t && r ? fetchData(getUrl("subWindowGetMSIT"), { method: "POST", body: JSON.stringify({ mainLiffId: t, subLiffId: n, mstChallenge: r, appData: i, view: o }) }) : Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"));
                })({ mainLiffId: r, subLiffId: o, mstChallenge: i, appData: t, view: Ln(s) }).then(function (t) {
                    var n = t.msit;
                    jn({
                        msit: n,
                        mstChallenge: i,
                        onSuccess: function (e, t) {
                            On(e, t);
                        },
                        onError: function (e) {
                            On("error", e);
                        },
                    }),
                        (function (e, t) {
                            var n = e.url,
                                r = new URLSearchParams();
                            r.set("msit", t), (location.href = "liff://subwindow?url=" + encodeURIComponent(n) + "&" + r.toString());
                        })(e, n);
                });
            }
            function Fn() {
                if (!_t()) throw Z("UNAUTHORIZED", "this api can readContext only called in child window");
            }
            function Mn(e) {
                if (!e.mst || !e.status) return Promise.reject(Z("INVALID_ARGUMENT", "no proper argument"));
                var t = JSON.stringify(e);
                return fetchData(getUrl("subWindowPost"), { method: "POST", body: t });
            }
            function Bn() {
                var e;
                try {
                    e = JSON.parse(readData(TOKEN_CONSTANT.APP_DATA) || "");
                } catch (t) {
                    e = {};
                }
                return Promise.resolve(e);
            }
            var Vn = {
                    on: function (e, t) {
                        En[e] || (En[e] = []), En[e].push(t);
                    },
                    off: function (e, t) {
                        if (En[e]) {
                            var n = En[e].indexOf(t);
                            n >= 0 && En[e].splice(n, 1);
                        }
                    },
                    open: function (e) {
                        if (!dt("subwindowOpen")) throw Z("FORBIDDEN", "No permission for liff.subWindow.open()");
                        return (
                            (function () {
                                if (_t()) throw Z("UNAUTHORIZED", "this api can readContext only called in parent window");
                            })(),
                                isInClient() ? Rn(e) : kn(e)
                        );
                    },
                    cancel: function (e) {
                        return (
                            void 0 === e && (e = {}),
                                Fn(),
                                isInClient()
                                    ? (function (e) {
                                        return (
                                            void 0 === e && (e = {}),
                                                initContext(this, void 0, void 0, function () {
                                                    var t, n;
                                                    return j(this, function (r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return (t = Te()) ? [4, Mn({ mst: t, status: "cancel", result: e })] : [2, Promise.reject(Z("UNAUTHORIZED", "mst is invalid"))];
                                                            case 1:
                                                                return (n = r.sent()), (Pn.isStatusUpdated = !0), [2, n];
                                                        }
                                                    });
                                                })
                                        );
                                    })(e)
                                    : (function (e) {
                                        return void 0 === e && (e = {}), nn("cancel", e);
                                    })(e)
                        );
                    },
                    submit: function (e) {
                        return (
                            void 0 === e && (e = {}),
                                Fn(),
                                isInClient()
                                    ? (function (e) {
                                        return (
                                            void 0 === e && (e = {}),
                                                initContext(this, void 0, void 0, function () {
                                                    var t, n;
                                                    return j(this, function (r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return (t = Te()) ? [4, Mn({ mst: t, status: "submit", result: e })] : [2, Promise.reject(Z("UNAUTHORIZED", "mst is invalid"))];
                                                            case 1:
                                                                return (n = r.sent()), (Pn.isStatusUpdated = !0), [2, n];
                                                        }
                                                    });
                                                })
                                        );
                                    })(e)
                                    : (function (e) {
                                        return void 0 === e && (e = {}), nn("submit", e);
                                    })(e)
                        );
                    },
                    close: function () {
                        return (
                            Fn(),
                                isInClient()
                                    ? (function () {
                                        return initContext(this, void 0, void 0, function () {
                                            var e;
                                            return j(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return !1 !== Pn.isStatusUpdated ? [3, 2] : (e = Te()) ? [4, Mn({ mst: e, status: "close", result: {} })] : [2, Promise.reject(Z("UNAUTHORIZED", "mst is invalid"))];
                                                    case 1:
                                                        t.sent(), (t.label = 2);
                                                    case 2:
                                                        return hn(), [2];
                                                }
                                            });
                                        });
                                    })()
                                    : (nn("close", {}), hn(), Promise.resolve())
                        );
                    },
                    getAppData: function () {
                        return Fn(), Bn();
                    },
                },
                Wn = (function () {
                    function e() {
                        (this.modules = new Set()), (this.hooksSet = new Set());
                    }
                    return (
                        (e.prototype.addHooks = function (e) {
                            this.hooksSet.add(e);
                        }),
                            (e.prototype.addModule = function (e) {
                                this.modules.add(e);
                            }),
                            (e.prototype.hasModule = function (e) {
                                return this.modules.has(e);
                            }),
                            (e.prototype.runHook = function (e) {
                                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                return initContext(this, void 0, void 0, function () {
                                    var n, r, i, o, s, a, u;
                                    return j(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                n = [];
                                                try {
                                                    for (r = x(this.hooksSet), i = r.next(); !i.done; i = r.next()) (o = i.value), "function" == typeof (s = o[e]) && n.push(s.apply(void 0, C(t)));
                                                } catch (l) {
                                                    a = { error: l };
                                                } finally {
                                                    try {
                                                        i && !i.done && (u = r.return) && u.call(r);
                                                    } finally {
                                                        if (a) throw a.error;
                                                    }
                                                }
                                                return [4, Promise.all(n)];
                                            case 1:
                                                return c.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.runSyncHook = function (e) {
                                for (var t, n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                                try {
                                    for (var o = x(this.hooksSet), s = o.next(); !s.done; s = o.next()) {
                                        var a = s.value,
                                            u = a[e];
                                        "function" == typeof u && u.apply(void 0, C(r));
                                    }
                                } catch (c) {
                                    t = { error: c };
                                } finally {
                                    try {
                                        s && !s.done && (n = o.return) && n.call(o);
                                    } finally {
                                        if (t) throw t.error;
                                    }
                                }
                            }),
                            e
                    );
                })(),
                Gn = function (e) {
                    var t = this;
                    (this.driver = e),
                        (this.addHooks = function (e) {
                            t.driver.addHooks(e);
                        });
                },
                $n = (function () {
                    function e(e, t) {
                        (this.driver = e), (this.option = t);
                    }
                    return (
                        (e.prototype.install = function (e) {
                            return this.factory(this.driver, e);
                        }),
                            Object.defineProperty(e.prototype, "name", {
                                get: function () {
                                    return "use";
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "defaultOption", {
                                get: function () {
                                    return { namespacePrefix: "$" };
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.factory = function (e, t) {
                                var n = Object.assign({}, this.defaultOption, this.option).namespacePrefix;
                                return function (r, i) {
                                    if (e.hasModule(r)) return this;
                                    if (!r || "function" != typeof r.install || "string" != typeof r.name) return log.warn("To install the plugin, you need to define the `name` property and the `install` method."), this;
                                    var o = "" + n + r.name,
                                        s = r.install.call(r, t, i);
                                    return this["" + o] ? (log.warn("There is a duplicate plugin name. `" + r.name + "` plugin namespace will readContext override."), (this["" + o] = s)) : void 0 !== s && (this["" + o] = s), e.addModule(r), this;
                                };
                            }),
                            e
                    );
                })();
            var Kn,
                qn,
                Hn,
                Jn,
                Xn,
                zn = {
                    init: init,
                    getOS: getOS,
                    getVersion: $e,
                    getLanguage: function () {
                        return navigator.language;
                    },
                    isInClient: isInClient,
                    isLoggedIn: isLoggedIn,
                    login: login,
                    logout: logout,
                    getAccessToken: getAccessToken,
                    getIDToken: getIDToken,
                    getDecodedIDToken: me,
                    getContext: readContext,
                    openWindow: function (e) {
                        if (
                            !(function (e) {
                                if (!e || "object" != typeof e) return !1;
                                var t = e,
                                    n = t.url,
                                    r = D([typeof n, typeof t.external], 2),
                                    i = r[0],
                                    o = r[1];
                                return "string" === i && "" !== n && ("undefined" === o || "boolean" === o);
                            })(e)
                        )
                            throw Z("INVALID_ARGUMENT", "Invalid parameters for liff.openWindow()");
                        if (isInClient())
                            if (window._liff.postMessage) dn("openWindow", e);
                            else {
                                var t = e.url,
                                    n = e.external,
                                    r = void 0 !== n && n;
                                window.open(
                                    (function (e, t) {
                                        var n = D(e.split("?"), 2),
                                            r = n[0],
                                            i = n[1],
                                            o = D((void 0 === i ? "" : i).split("#"), 2),
                                            s = o[0],
                                            a = o[1];
                                        return (
                                            r +
                                            "?is_liff_external_open_window=" +
                                            !!t +
                                            (s
                                                ? "&" +
                                                s
                                                    .split("&")
                                                    .map(decodeURIComponent)
                                                    .filter(function (e) {
                                                        return -1 === e.indexOf("is_liff_external_open_window");
                                                    })
                                                    .join("&")
                                                    .concat(a ? "#" + a : "")
                                                : "")
                                        );
                                    })(t, r)
                                );
                            }
                        else window.open(e.url, "_blank");
                    },
                    closeWindow: hn,
                    getFeatures: se,
                    getFriendship: function () {
                        return fetchData(getUrl("friendship"));
                    },
                    checkFeature: function (e) {
                        var t = se();
                        return !!t && t.indexOf(e) > -1;
                    },
                    getAId: function () {
                        return ((readContext() || {}).d || {}).aId;
                    },
                    getProfilePlus: function () {
                        return (readContext() || {}).profilePlus;
                    },
                    getIsVideoAutoPlay: function () {
                        return ((readContext() || {}).d || {}).autoplay || !1;
                    },
                    getLineVersion: getLineVersion,
                    isApiAvailable: dt,
                    getProfile: getProfile,
                    sendMessages: function (e) {
                        if (
                            !(function (e) {
                                return Array.isArray(e) && e.every(pn);
                            })(e)
                        )
                            return vn("Parameter 'messages' must readContext getExternalExtendsionJs array of { type, ... }");
                        var t = e.length;
                        return t < 1 || t > 5 ? vn("Number of messages should readContext in range 1 to 5.") : fetchData(getUrl("message"), { method: "POST", body: JSON.stringify({ messages: e }) });
                    },
                    shareTargetPicker: function (e) {
                        return initContext(this, void 0, void 0, function () {
                            var t, n, r, i, o, s;
                            return j(this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        if (
                                            ((function () {
                                                if (_t()) throw Z("FORBIDDEN", "The operation is not allowed in the SubWindow");
                                                var e = ((readContext() || {}).availability || {}).shareTargetPicker || {},
                                                    t = e.permission,
                                                    n = e.minVer;
                                                if (!t)
                                                    throw isInClient()
                                                        ? Z("FORBIDDEN", "Need LINE App " + n + " at least or consent on shareTargetPicker usage on LINE developer site")
                                                        : Z("FORBIDDEN", "Need consent on shareTargetPicker usage on LINE developer site");
                                            })(),
                                                !isLoggedIn())
                                        )
                                            throw Z("UNAUTHORIZED", "Need access_token for api call, Please login first");
                                        if (!e || !Array.isArray(e) || 0 === e.length) throw Z("INVALID_ARGUMENT", "no proper argument");
                                        if (e.length > 5) throw Z("INVALID_ARGUMENT", "exceed the limit of num of messages");
                                        if (!(t = oe().liffId)) throw Z("INVALID_CONFIG");
                                        window.liff && (n = window.liff).analytics && ((u = n.analytics), log.debug("[LIFFUTS][sendCustom] liff.shareTargetPicker"), u.sendCustom({ type: "liffSdk", placeId: xt })), (a.label = 1);
                                    case 1:
                                        return (
                                            a.trys.push([1, 3, , 4]),
                                                (r = Tn.getInstance()),
                                                (i = getLineVersion()),
                                                (o = { waitForSubwindowResult: !0 }),
                                            isInClient() && i && compareVersion(i, "10.11.0") < 0 && (o.waitForSubwindowResult = !1),
                                                [4, r.init({ messages: e, referrer: { liffId: t, url: location.origin }, options: o })]
                                        );
                                    case 2:
                                        return [2, a.sent()];
                                    case 3:
                                        throw (s = a.sent()) instanceof z ? s : Z("EXCEPTION_IN_SUBWINDOW", s.message);
                                    case 4:
                                        return [2];
                                }
                                var u;
                            });
                        });
                    },
                    subWindow: Vn,
                    permanentLink: {
                        createUrl: function () {
                            var e = De(),
                                t = window.location,
                                n = t.pathname,
                                r = t.search,
                                i = t.hash,
                                o = t.origin,
                                s = new URL(e.endpointUrl);
                            if (
                                s.origin !== o ||
                                !(function (e, t) {
                                    return 0 === t.indexOf(e) && (e.endsWith("/") && (e = e.substring(0, e.length - 1)), void 0 === t[e.length] || "/" === t[e.length]);
                                })(s.pathname, n)
                            )
                                throw Z("INVALID_CONFIG", "Current page is not under entrypoint.");
                            var a = n.substring(s.pathname.length);
                            a.length > 0 && "/" !== a[0] && (a = "/" + a);
                            var u = new RegExp("^" + W.join("|")),
                                c = i
                                    .substring(1)
                                    .split("&")
                                    .filter(function (e) {
                                        return !u.test(e) && Boolean(e);
                                    })
                                    .join("&"),
                                l = c === s.hash.substring(1) ? "" : c,
                                f = function (e) {
                                    return e
                                        .substring(1)
                                        .split("&")
                                        .filter(function (e) {
                                            return !/liff\.state/.test(e) && Boolean(e);
                                        });
                                },
                                d = f(r),
                                h = f(s.search);
                            xe && d.push(xe);
                            for (var p = 0; p < h.length; p++) {
                                var v = h[p],
                                    m = d.indexOf(v);
                                m > -1 && d.splice(m, 1);
                            }
                            var y = d.join("&"),
                                w = a + ("" !== y ? "?" + y : "") + (l ? "#" + l : "");
                            return "replace" === e.permanentLinkPattern && "" !== w && (w = "" + n + r + (l ? "#" + l : "")), "https://liff.line.me/" + oe().liffId + w;
                        },
                        setExtraQueryParam: function (e) {
                            xe = e;
                        },
                    },
                    ready: sn,
                    get id() {
                        return oe().liffId || null;
                    },
                    _dispatchEvent: function (e) {
                        var t = {};
                        try {
                            t = JSON.parse(e);
                        } catch (r) {
                            throw Z("INVALID_ARGUMENT", r.message);
                        }
                        var n = (function (e) {
                            return new CustomEvent("liffEvent", { detail: e });
                        })(t);
                        log.debug("[client dispatchEvent to js]", { type: n.type, detail: n.detail }), window.dispatchEvent(n);
                    },
                    _call: dn,
                    _addListener: Je,
                    _removeListener: Xe,
                    _postMessage: fn,
                };
            (zn.init = init.bind(zn)), (Kn = zn), (qn = [It]), (Hn = new Wn()), (Jn = new Gn(Hn)), (Xn = new $n(Hn, { namespacePrefix: "" }).install(Jn).bind(Kn)), qn.forEach(Xn);
            var Zn = zn;
            t.default = Zn;
        },
    ]).default;
});
