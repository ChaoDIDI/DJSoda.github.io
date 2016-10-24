webpackJsonp([14, 40], [function (t, n, e) {
    "use strict";
    e(249), e(7);
    var r = $(".apply-help-button");
    r.hasClass("apply-help-light") && r.attr("href", "tel:400-686-1179"), "noOrder" == applyInfo.orderId && ($(".apply-help-button").hide(), $(".apply-help-wrap").append('<a class="noOrderTips" href="tel:400-686-1179">如需申请互助，且保障已过等待期，请拨打客服电话<em>400-686-1179</em></a>'))
}, , , , , , , function (t, n, e) {
    "use strict";
    function r() {
        window.wx && (o.init(), window.clearInterval(i), window.wx.ready(function () {
            "undefined" == typeof WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", function () {
                setTimeout(function () {
                    window.WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0}, function () {
                    })
                }, 0)
            }) : setTimeout(function () {
                window.WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0}, function () {
                })
            }, 0)
        }))
    }

    e(8);
    var i, o = e(82), u = e(9);
    i = window.setInterval(function () {
        window.wx && window.clearInterval(i), r()
    }, 50);
    var a = function (t) {
        var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.href);
        return n ? n[1] || "" : ""
    }, c = a("channel");
    c && u.set("channel", c, {expires: 365, domain: ".shuidihuzhu.com", path: "/"});
    var s = localStorage.getItem("userId"), f = localStorage.getItem(s);
    f && (f = JSON.parse(f)), s && f && (f.userId = s, u.set(f, {
        expires: 365,
        domain: ".shuidihuzhu.com",
        path: "/"
    })), u.set({nickname: "", headImgUrl: ""}, {
        expires: -1,
        domain: ".shuidihuzhu.com",
        path: "/"
    }), window.onerror = function (t, n, e, r, i) {
        return "Script error." != t && !n || (setTimeout(function () {
                var t = {};
                if (r = r || window.event && window.event.errorCharacter || 0, t.url = n, t.line = e, t.col = r, i && i.stack)t.msg = i.stack.toString(); else if (arguments.callee) {
                    for (var o = [], u = arguments.callee.caller, a = 3; u && --a > 0 && (o.push(u.toString()), u !== u.caller);)u = u.caller;
                    o = o.join(","), t.msg = o
                }
                try {
                    t.msg = encodeURIComponent(t.msg);
                    var c = t.url.match("js/.*js").toString().replace("js/", "").replace(".js", "") + t.col, s = new Image;
                    s.src = "http://sea.shuidihuzhu.com/admin/logs/feException?msg=" + t.msg.slice(0, 200) + "&url=" + t.url + "&line=" + t.line + "&col=" + t.col + "&key=" + c
                } catch (f) {
                }
            }, 0), !0)
    }
}, function (t, n, e) {
    "use strict";
    var r = e(9), i = i || [];
    $.trackEvent = function (t, n) {
        i.push(["_trackEvent", t, n])
    }, $.trackLog = function (t) {
        var n = {type: 1, v1: r.get("userId"), v2: "", v3: "", v4: "", v5: ""};
        $.extend(n, t);
        var e = new Image;
        e.src = "/api/log?type=" + n.type + "&v1=" + n.v1 + "&v2=" + n.v2 + "&v3=" + n.v3 + "&v4=" + n.v4 + "&v5=" + n.v5
    }, $("body").on("click", "[trackEvent]", function () {
        var t = $(this).attr("trackLabel");
        $.trackEvent(t, "点击")
    })
}, function (t, n, e) {
    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var i, o = e(10), u = r(o), a = e(78), c = r(a), s = function l() {
        return l.get.apply(l, arguments)
    }, f = s.utils = {
        isArray: Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, isPlainObject: function (t) {
            return !!t && "[object Object]" === Object.prototype.toString.call(t)
        }, toArray: function (t) {
            return Array.prototype.slice.call(t)
        }, getKeys: c["default"] || function (t) {
            var n = [], e = "";
            for (e in t)t.hasOwnProperty(e) && n.push(e);
            return n
        }, encode: function (t) {
            return String(t).replace(/[,;"\\=\s%]/g, function (t) {
                return encodeURIComponent(t)
            })
        }, decode: function (t) {
            return decodeURIComponent(t)
        }, retrieve: function (t, n) {
            return null == t ? n : t
        }
    };
    s.defaults = {}, s.expiresMultiplier = 86400, s.set = function (t, n, e) {
        if (f.isPlainObject(t))for (var r in t)t.hasOwnProperty(r) && this.set(r, t[r], n); else {
            e = f.isPlainObject(e) ? e : {expires: e};
            var i = void 0 !== e.expires ? e.expires : this.defaults.expires || "", o = "undefined" == typeof i ? "undefined" : (0, u["default"])(i);
            "string" === o && "" !== i ? i = new Date(i) : "number" === o && (i = new Date(+new Date + 1e3 * this.expiresMultiplier * i)), "" !== i && "toGMTString" in i && (i = ";expires=" + i.toGMTString());
            var a = e.path || this.defaults.path;
            a = a ? ";path=" + a : "";
            var c = e.domain || this.defaults.domain;
            c = c ? ";domain=" + c : "";
            var s = e.secure || this.defaults.secure ? ";secure" : "";
            e.secure === !1 && (s = ""), document.cookie = f.encode(t) + "=" + f.encode(n) + i + a + c + s
        }
        return this
    }, s.setDefault = function (t, n, e) {
        if (f.isPlainObject(t)) {
            for (var r in t)void 0 === this.get(r) && this.set(r, t[r], n);
            return s
        }
        if (void 0 === this.get(t))return this.set.apply(this, arguments)
    }, s.remove = function (t) {
        t = f.isArray(t) ? t : f.toArray(arguments);
        for (var n = 0, e = t.length; n < e; n++)this.set(t[n], "", -1);
        return this
    }, s.removeSpecific = function (t, n) {
        if (!n)return this.remove(t);
        t = f.isArray(t) ? t : [t], n.expire = -1;
        for (var e = 0, r = t.length; e < r; e++)this.set(t[e], "", n);
        return this
    }, s.empty = function () {
        return this.remove(f.getKeys(this.all()))
    }, s.get = function (t, n) {
        var e = this.all();
        if (f.isArray(t)) {
            for (var r = {}, i = 0, o = t.length; i < o; i++) {
                var u = t[i];
                r[u] = f.retrieve(e[u], n)
            }
            return r
        }
        return f.retrieve(e[t], n)
    }, s.all = function () {
        if ("" === document.cookie)return {};
        for (var t = document.cookie.split("; "), n = {}, e = 0, r = t.length; e < r; e++) {
            var i = t[e].split("="), o = f.decode(i.shift()), u = f.decode(i.join("="));
            n[o] = u
        }
        return n
    }, s.enabled = function () {
        if (navigator.cookieEnabled)return !0;
        var t = "_" === s.set("_", "_").get("_");
        return s.remove("_"), t
    }, i = function () {
        return s
    }.call(n, e, n, t), !(void 0 !== i && (t.exports = i)), t.exports = s
}, function (t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    n.__esModule = !0;
    var i = e(11), o = r(i), u = e(62), a = r(u), c = "function" == typeof a["default"] && "symbol" == typeof o["default"] ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof a["default"] && t.constructor === a["default"] ? "symbol" : typeof t
    };
    n["default"] = "function" == typeof a["default"] && "symbol" === c(o["default"]) ? function (t) {
        return "undefined" == typeof t ? "undefined" : c(t)
    } : function (t) {
        return t && "function" == typeof a["default"] && t.constructor === a["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : c(t)
    }
}, function (t, n, e) {
    t.exports = {"default": e(12), __esModule: !0}
}, function (t, n, e) {
    e(13), e(57), t.exports = e(61).f("iterator")
}, function (t, n, e) {
    "use strict";
    var r = e(14)(!0);
    e(17)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, n = this._t, e = this._i;
        return e >= n.length ? {value: void 0, done: !0} : (t = r(n, e), this._i += t.length, {value: t, done: !1})
    })
}, function (t, n, e) {
    var r = e(15), i = e(16);
    t.exports = function (t) {
        return function (n, e) {
            var o, u, a = String(i(n)), c = r(e), s = a.length;
            return c < 0 || c >= s ? t ? "" : void 0 : (o = a.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === s || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : o : t ? a.slice(c, c + 2) : (o - 55296 << 10) + (u - 56320) + 65536)
        }
    }
}, function (t, n) {
    var e = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
    }
}, function (t, n) {
    t.exports = function (t) {
        if (void 0 == t)throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, n, e) {
    "use strict";
    var r = e(18), i = e(19), o = e(34), u = e(24), a = e(35), c = e(36), s = e(37), f = e(53), l = e(55), h = e(54)("iterator"), p = !([].keys && "next" in [].keys()), d = "@@iterator", v = "keys", m = "values", y = function () {
        return this
    };
    t.exports = function (t, n, e, g, w, x, b) {
        s(e, n, g);
        var _, S, k, O = function (t) {
            if (!p && t in P)return P[t];
            switch (t) {
                case v:
                    return function () {
                        return new e(this, t)
                    };
                case m:
                    return function () {
                        return new e(this, t)
                    }
            }
            return function () {
                return new e(this, t)
            }
        }, I = n + " Iterator", j = w == m, M = !1, P = t.prototype, U = P[h] || P[d] || w && P[w], C = U || O(w), E = w ? j ? O("entries") : C : void 0, T = "Array" == n ? P.entries || U : U;
        if (T && (k = l(T.call(new t)), k !== Object.prototype && (f(k, I, !0), r || a(k, h) || u(k, h, y))), j && U && U.name !== m && (M = !0, C = function () {
                return U.call(this)
            }), r && !b || !p && !M && P[h] || u(P, h, C), c[n] = C, c[I] = y, w)if (_ = {
                values: j ? C : O(m),
                keys: x ? C : O(v),
                entries: E
            }, b)for (S in _)S in P || o(P, S, _[S]); else i(i.P + i.F * (p || M), n, _);
        return _
    }
}, function (t, n) {
    t.exports = !0
}, function (t, n, e) {
    var r = e(20), i = e(21), o = e(22), u = e(24), a = "prototype", c = function (t, n, e) {
        var s, f, l, h = t & c.F, p = t & c.G, d = t & c.S, v = t & c.P, m = t & c.B, y = t & c.W, g = p ? i : i[n] || (i[n] = {}), w = g[a], x = p ? r : d ? r[n] : (r[n] || {})[a];
        p && (e = n);
        for (s in e)f = !h && x && void 0 !== x[s], f && s in g || (l = f ? x[s] : e[s], g[s] = p && "function" != typeof x[s] ? e[s] : m && f ? o(l, r) : y && x[s] == l ? function (t) {
            var n = function (n, e, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n);
                        case 2:
                            return new t(n, e)
                    }
                    return new t(n, e, r)
                }
                return t.apply(this, arguments)
            };
            return n[a] = t[a], n
        }(l) : v && "function" == typeof l ? o(Function.call, l) : l, v && ((g.virtual || (g.virtual = {}))[s] = l, t & c.R && w && !w[s] && u(w, s, l)))
    };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function (t, n) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e)
}, function (t, n) {
    var e = t.exports = {version: "2.4.0"};
    "number" == typeof __e && (__e = e)
}, function (t, n, e) {
    var r = e(23);
    t.exports = function (t, n, e) {
        if (r(t), void 0 === n)return t;
        switch (e) {
            case 1:
                return function (e) {
                    return t.call(n, e)
                };
            case 2:
                return function (e, r) {
                    return t.call(n, e, r)
                };
            case 3:
                return function (e, r, i) {
                    return t.call(n, e, r, i)
                }
        }
        return function () {
            return t.apply(n, arguments)
        }
    }
}, function (t, n) {
    t.exports = function (t) {
        if ("function" != typeof t)throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, n, e) {
    var r = e(25), i = e(33);
    t.exports = e(29) ? function (t, n, e) {
        return r.f(t, n, i(1, e))
    } : function (t, n, e) {
        return t[n] = e, t
    }
}, function (t, n, e) {
    var r = e(26), i = e(28), o = e(32), u = Object.defineProperty;
    n.f = e(29) ? Object.defineProperty : function (t, n, e) {
        if (r(t), n = o(n, !0), r(e), i)try {
            return u(t, n, e)
        } catch (a) {
        }
        if ("get" in e || "set" in e)throw TypeError("Accessors not supported!");
        return "value" in e && (t[n] = e.value), t
    }
}, function (t, n, e) {
    var r = e(27);
    t.exports = function (t) {
        if (!r(t))throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, n) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, n, e) {
    t.exports = !e(29) && !e(30)(function () {
            return 7 != Object.defineProperty(e(31)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
        })
}, function (t, n, e) {
    t.exports = !e(30)(function () {
        return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
    })
}, function (t, n) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (n) {
            return !0
        }
    }
}, function (t, n, e) {
    var r = e(27), i = e(20).document, o = r(i) && r(i.createElement);
    t.exports = function (t) {
        return o ? i.createElement(t) : {}
    }
}, function (t, n, e) {
    var r = e(27);
    t.exports = function (t, n) {
        if (!r(t))return t;
        var e, i;
        if (n && "function" == typeof(e = t.toString) && !r(i = e.call(t)))return i;
        if ("function" == typeof(e = t.valueOf) && !r(i = e.call(t)))return i;
        if (!n && "function" == typeof(e = t.toString) && !r(i = e.call(t)))return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
    }
}, function (t, n, e) {
    t.exports = e(24)
}, function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
        return e.call(t, n)
    }
}, function (t, n) {
    t.exports = {}
}, function (t, n, e) {
    "use strict";
    var r = e(38), i = e(33), o = e(53), u = {};
    e(24)(u, e(54)("iterator"), function () {
        return this
    }), t.exports = function (t, n, e) {
        t.prototype = r(u, {next: i(1, e)}), o(t, n + " Iterator")
    }
}, function (t, n, e) {
    var r = e(26), i = e(39), o = e(51), u = e(48)("IE_PROTO"), a = function () {
    }, c = "prototype", s = function () {
        var t, n = e(31)("iframe"), r = o.length, i = "<", u = ">";
        for (n.style.display = "none", e(52).appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write(i + "script" + u + "document.F=Object" + i + "/script" + u), t.close(), s = t.F; r--;)delete s[c][o[r]];
        return s()
    };
    t.exports = Object.create || function (t, n) {
            var e;
            return null !== t ? (a[c] = r(t), e = new a, a[c] = null, e[u] = t) : e = s(), void 0 === n ? e : i(e, n)
        }
}, function (t, n, e) {
    var r = e(25), i = e(26), o = e(40);
    t.exports = e(29) ? Object.defineProperties : function (t, n) {
        i(t);
        for (var e, u = o(n), a = u.length, c = 0; a > c;)r.f(t, e = u[c++], n[e]);
        return t
    }
}, function (t, n, e) {
    var r = e(41), i = e(51);
    t.exports = Object.keys || function (t) {
            return r(t, i)
        }
}, function (t, n, e) {
    var r = e(35), i = e(42), o = e(45)(!1), u = e(48)("IE_PROTO");
    t.exports = function (t, n) {
        var e, a = i(t), c = 0, s = [];
        for (e in a)e != u && r(a, e) && s.push(e);
        for (; n.length > c;)r(a, e = n[c++]) && (~o(s, e) || s.push(e));
        return s
    }
}, function (t, n, e) {
    var r = e(43), i = e(16);
    t.exports = function (t) {
        return r(i(t))
    }
}, function (t, n, e) {
    var r = e(44);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
        return e.call(t).slice(8, -1)
    }
}, function (t, n, e) {
    var r = e(42), i = e(46), o = e(47);
    t.exports = function (t) {
        return function (n, e, u) {
            var a, c = r(n), s = i(c.length), f = o(u, s);
            if (t && e != e) {
                for (; s > f;)if (a = c[f++], a != a)return !0
            } else for (; s > f; f++)if ((t || f in c) && c[f] === e)return t || f || 0;
            return !t && -1
        }
    }
}, function (t, n, e) {
    var r = e(15), i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function (t, n, e) {
    var r = e(15), i = Math.max, o = Math.min;
    t.exports = function (t, n) {
        return t = r(t), t < 0 ? i(t + n, 0) : o(t, n)
    }
}, function (t, n, e) {
    var r = e(49)("keys"), i = e(50);
    t.exports = function (t) {
        return r[t] || (r[t] = i(t))
    }
}, function (t, n, e) {
    var r = e(20), i = "__core-js_shared__", o = r[i] || (r[i] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, n) {
    var e = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
    }
}, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, n, e) {
    t.exports = e(20).document && document.documentElement
}, function (t, n, e) {
    var r = e(25).f, i = e(35), o = e(54)("toStringTag");
    t.exports = function (t, n, e) {
        t && !i(t = e ? t : t.prototype, o) && r(t, o, {configurable: !0, value: n})
    }
}, function (t, n, e) {
    var r = e(49)("wks"), i = e(50), o = e(20).Symbol, u = "function" == typeof o, a = t.exports = function (t) {
        return r[t] || (r[t] = u && o[t] || (u ? o : i)("Symbol." + t))
    };
    a.store = r
}, function (t, n, e) {
    var r = e(35), i = e(56), o = e(48)("IE_PROTO"), u = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
}, function (t, n, e) {
    var r = e(16);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, n, e) {
    e(58);
    for (var r = e(20), i = e(24), o = e(36), u = e(54)("toStringTag"), a = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var s = a[c], f = r[s], l = f && f.prototype;
        l && !l[u] && i(l, u, s), o[s] = o.Array
    }
}, function (t, n, e) {
    "use strict";
    var r = e(59), i = e(60), o = e(36), u = e(42);
    t.exports = e(17)(Array, "Array", function (t, n) {
        this._t = u(t), this._i = 0, this._k = n
    }, function () {
        var t = this._t, n = this._k, e = this._i++;
        return !t || e >= t.length ? (this._t = void 0, i(1)) : "keys" == n ? i(0, e) : "values" == n ? i(0, t[e]) : i(0, [e, t[e]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function (t, n) {
    t.exports = function () {
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return {value: n, done: !!t}
    }
}, function (t, n, e) {
    n.f = e(54)
}, function (t, n, e) {
    t.exports = {"default": e(63), __esModule: !0}
}, function (t, n, e) {
    e(64), e(75), e(76), e(77), t.exports = e(21).Symbol
}, function (t, n, e) {
    "use strict";
    var r = e(20), i = e(35), o = e(29), u = e(19), a = e(34), c = e(65).KEY, s = e(30), f = e(49), l = e(53), h = e(50), p = e(54), d = e(61), v = e(66), m = e(67), y = e(68), g = e(71), w = e(26), x = e(42), b = e(32), _ = e(33), S = e(38), k = e(72), O = e(74), I = e(25), j = e(40), M = O.f, P = I.f, U = k.f, C = r.Symbol, E = r.JSON, T = E && E.stringify, A = "prototype", F = p("_hidden"), N = p("toPrimitive"), L = {}.propertyIsEnumerable, $ = f("symbol-registry"), z = f("symbols"), J = f("op-symbols"), R = Object[A], W = "function" == typeof C, D = r.QObject, Q = !D || !D[A] || !D[A].findChild, q = o && s(function () {
        return 7 != S(P({}, "a", {
                get: function () {
                    return P(this, "a", {value: 7}).a
                }
            })).a
    }) ? function (t, n, e) {
        var r = M(R, n);
        r && delete R[n], P(t, n, e), r && t !== R && P(R, n, r)
    } : P, G = function (t) {
        var n = z[t] = S(C[A]);
        return n._k = t, n
    }, B = W && "symbol" == typeof C.iterator ? function (t) {
        return "symbol" == typeof t
    } : function (t) {
        return t instanceof C
    }, K = function (t, n, e) {
        return t === R && K(J, n, e), w(t), n = b(n, !0), w(e), i(z, n) ? (e.enumerable ? (i(t, F) && t[F][n] && (t[F][n] = !1), e = S(e, {enumerable: _(0, !1)})) : (i(t, F) || P(t, F, _(1, {})), t[F][n] = !0), q(t, n, e)) : P(t, n, e)
    }, H = function (t, n) {
        w(t);
        for (var e, r = y(n = x(n)), i = 0, o = r.length; o > i;)K(t, e = r[i++], n[e]);
        return t
    }, Y = function (t, n) {
        return void 0 === n ? S(t) : H(S(t), n)
    }, Z = function (t) {
        var n = L.call(this, t = b(t, !0));
        return !(this === R && i(z, t) && !i(J, t)) && (!(n || !i(this, t) || !i(z, t) || i(this, F) && this[F][t]) || n)
    }, V = function (t, n) {
        if (t = x(t), n = b(n, !0), t !== R || !i(z, n) || i(J, n)) {
            var e = M(t, n);
            return !e || !i(z, n) || i(t, F) && t[F][n] || (e.enumerable = !0), e
        }
    }, X = function (t) {
        for (var n, e = U(x(t)), r = [], o = 0; e.length > o;)i(z, n = e[o++]) || n == F || n == c || r.push(n);
        return r
    }, tt = function (t) {
        for (var n, e = t === R, r = U(e ? J : x(t)), o = [], u = 0; r.length > u;)!i(z, n = r[u++]) || e && !i(R, n) || o.push(z[n]);
        return o
    };
    W || (C = function () {
        if (this instanceof C)throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0), n = function (e) {
            this === R && n.call(J, e), i(this, F) && i(this[F], t) && (this[F][t] = !1), q(this, t, _(1, e))
        };
        return o && Q && q(R, t, {configurable: !0, set: n}), G(t)
    }, a(C[A], "toString", function () {
        return this._k
    }), O.f = V, I.f = K, e(73).f = k.f = X, e(70).f = Z, e(69).f = tt, o && !e(18) && a(R, "propertyIsEnumerable", Z, !0), d.f = function (t) {
        return G(p(t))
    }), u(u.G + u.W + u.F * !W, {Symbol: C});
    for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; nt.length > et;)p(nt[et++]);
    for (var nt = j(p.store), et = 0; nt.length > et;)v(nt[et++]);
    u(u.S + u.F * !W, "Symbol", {
        "for": function (t) {
            return i($, t += "") ? $[t] : $[t] = C(t)
        }, keyFor: function (t) {
            if (B(t))return m($, t);
            throw TypeError(t + " is not a symbol!")
        }, useSetter: function () {
            Q = !0
        }, useSimple: function () {
            Q = !1
        }
    }), u(u.S + u.F * !W, "Object", {
        create: Y,
        defineProperty: K,
        defineProperties: H,
        getOwnPropertyDescriptor: V,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: tt
    }), E && u(u.S + u.F * (!W || s(function () {
            var t = C();
            return "[null]" != T([t]) || "{}" != T({a: t}) || "{}" != T(Object(t))
        })), "JSON", {
        stringify: function (t) {
            if (void 0 !== t && !B(t)) {
                for (var n, e, r = [t], i = 1; arguments.length > i;)r.push(arguments[i++]);
                return n = r[1], "function" == typeof n && (e = n), !e && g(n) || (n = function (t, n) {
                    if (e && (n = e.call(this, t, n)), !B(n))return n
                }), r[1] = n, T.apply(E, r)
            }
        }
    }), C[A][N] || e(24)(C[A], N, C[A].valueOf), l(C, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
}, function (t, n, e) {
    var r = e(50)("meta"), i = e(27), o = e(35), u = e(25).f, a = 0, c = Object.isExtensible || function () {
            return !0
        }, s = !e(30)(function () {
        return c(Object.preventExtensions({}))
    }), f = function (t) {
        u(t, r, {value: {i: "O" + ++a, w: {}}})
    }, l = function (t, n) {
        if (!i(t))return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, r)) {
            if (!c(t))return "F";
            if (!n)return "E";
            f(t)
        }
        return t[r].i
    }, h = function (t, n) {
        if (!o(t, r)) {
            if (!c(t))return !0;
            if (!n)return !1;
            f(t)
        }
        return t[r].w
    }, p = function (t) {
        return s && d.NEED && c(t) && !o(t, r) && f(t), t
    }, d = t.exports = {KEY: r, NEED: !1, fastKey: l, getWeak: h, onFreeze: p}
}, function (t, n, e) {
    var r = e(20), i = e(21), o = e(18), u = e(61), a = e(25).f;
    t.exports = function (t) {
        var n = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in n || a(n, t, {value: u.f(t)})
    }
}, function (t, n, e) {
    var r = e(40), i = e(42);
    t.exports = function (t, n) {
        for (var e, o = i(t), u = r(o), a = u.length, c = 0; a > c;)if (o[e = u[c++]] === n)return e
    }
}, function (t, n, e) {
    var r = e(40), i = e(69), o = e(70);
    t.exports = function (t) {
        var n = r(t), e = i.f;
        if (e)for (var u, a = e(t), c = o.f, s = 0; a.length > s;)c.call(t, u = a[s++]) && n.push(u);
        return n
    }
}, function (t, n) {
    n.f = Object.getOwnPropertySymbols
}, function (t, n) {
    n.f = {}.propertyIsEnumerable
}, function (t, n, e) {
    var r = e(44);
    t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
}, function (t, n, e) {
    var r = e(42), i = e(73).f, o = {}.toString, u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], a = function (t) {
        try {
            return i(t)
        } catch (n) {
            return u.slice()
        }
    };
    t.exports.f = function (t) {
        return u && "[object Window]" == o.call(t) ? a(t) : i(r(t))
    }
}, function (t, n, e) {
    var r = e(41), i = e(51).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function (t) {
            return r(t, i)
        }
}, function (t, n, e) {
    var r = e(70), i = e(33), o = e(42), u = e(32), a = e(35), c = e(28), s = Object.getOwnPropertyDescriptor;
    n.f = e(29) ? s : function (t, n) {
        if (t = o(t), n = u(n, !0), c)try {
            return s(t, n)
        } catch (e) {
        }
        if (a(t, n))return i(!r.f.call(t, n), t[n])
    }
}, function (t, n) {
}, function (t, n, e) {
    e(66)("asyncIterator")
}, function (t, n, e) {
    e(66)("observable")
}, function (t, n, e) {
    t.exports = {"default": e(79), __esModule: !0}
}, function (t, n, e) {
    e(80), t.exports = e(21).Object.keys
}, function (t, n, e) {
    var r = e(56), i = e(40);
    e(81)("keys", function () {
        return function (t) {
            return i(r(t))
        }
    })
}, function (t, n, e) {
    var r = e(19), i = e(21), o = e(30);
    t.exports = function (t, n) {
        var e = (i.Object || {})[t] || Object[t], u = {};
        u[t] = n(e), r(r.S + r.F * o(function () {
                e(1)
            }), "Object", u)
    }
}, function (t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var i = e(83), o = r(i), u = e(87), a = e(88), c = e(89), s = e(9), f = e(90), l = e(91), h = f.inviteJoinMoney, p = {
        init: function () {
            1 == a() && (this.nickname, this.headImgUrl, this.thumbUrl = "http://static-59729941.mtmssdn0.com/img/share_logo2.png", this.description = "水滴互助是腾讯、IDG资本等联合投资的抵御风险社群，已有超100万用户加入。", this.uri = window.location.href, this._setParams())
        }, _getRandomTitle: function (t, n) {
            var e = t + "邀请你加入水滴互助，最高享30万健康保障。";
            return e
        }, _isHasUserInfo: function (t) {
            var n = this, e = s.get("userId");
            s.get("token");
            e ? c(function (e) {
                e.data.nickname ? n.nickname = e.data.nickname : n.nickname = "我", n.headImgUrl = e.data.headImgUrl, t(!0)
            }) : t(!1)
        }, _getShareCode: function (t) {
            var n = this;
            n._isHasUserInfo(function (n) {
                var e = s.get("userId"), r = s.get("token");
                n ? $.ajax({
                    type: "POST",
                    url: "/api/inv/inviteCode",
                    data: {userId: e, token: r, invitationId: 1},
                    dataType: "json",
                    success: function (n) {
                        0 == n.code && t(n.data.inviteCode)
                    }
                }) : t(!1)
            })
        }, _setParams: function () {
            var t = this, n = s.get("userId");
            this._getShareCode(function (e) {
                e || n ? t._getLoginedParams(e) : t._getNotLoginParams()
            })
        }, _getLoginedParams: function (t) {
            var n;
            if (this.uri.indexOf("list/") > -1)n = {
                title: "我加入了水滴互助，一瓶水的钱在关键时刻能帮上大忙！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/inviteJoin?nickname=" + this.nickname + "&headImgUrl=" + this.headImgUrl + "&inviteCode=" + t + "&channel=",
                friendChannel: "mp_wx_activity_invite1hy",
                friendsChannel: "mp_wx_activity_invite1pyq"
            }, this._hideMenuShare(); else if (this.uri.indexOf("intro") > -1)n = {
                title: "我加入了水滴互助，还不错哦，快来加入吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            }; else if (this.uri.indexOf("inviteJoin") > -1) {
                var e = decodeURIComponent(u.urlParam("nickname"));
                n = {
                    title: this._getRandomTitle(e, h),
                    description: this.description,
                    thumbUrl: this.thumbUrl,
                    link: this.uri,
                    friendChannel: "mp_wx_activity_invite1hy",
                    friendsChannel: "mp_wx_activity_invite1pyq"
                }, this._hideMenuShare()
            } else {
                var r;
                r = {
                    title: this._getRandomTitle(this.nickname, h),
                    description: "水滴互助是腾讯、IDG资本等联合投资的抵御风险社群，已有超100万用户加入。"
                }, (0, o["default"])(r, "description", this.description), (0, o["default"])(r, "thumbUrl", this.thumbUrl), (0, o["default"])(r, "link", "https://www.shuidihuzhu.com/sd/inviteJoin?nickname=" + this.nickname + "&headImgUrl=" + this.headImgUrl + "&inviteCode=" + t + "&channel="), (0, o["default"])(r, "friendChannel", "mp_wx_activity_invite1hy"), (0, o["default"])(r, "friendsChannel", "mp_wx_activity_invite1pyq"), n = r, this._hideMenuShare(), this._showFrideShare()
            }
            this._registShare(n)
        }, _getNotLoginParams: function () {
            var t;
            if (this.uri.indexOf("list/") > -1)t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: this.uri,
                friendChannel: "",
                friendsChannel: ""
            }; else if (this.uri.indexOf("intro") > -1)t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            }; else if (this.uri.indexOf("invite") > -1)t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            }, l() ? (this._hideMenuShare(), this._showFrideShare()) : (this._hideMenuShare(), this._hideFrideShare()); else if (this.uri.indexOf("inviteJoin") > -1) {
                var n = decodeURIComponent(u.urlParam("nickname"));
                t = {
                    title: this._getRandomTitle(n, h),
                    description: this.description,
                    thumbUrl: this.thumbUrl,
                    link: this.uri,
                    friendChannel: "mp_wx_activity_invite1hy",
                    friendsChannel: "mp_wx_activity_invite1pyq"
                }, this._hideMenuShare()
            } else t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            };
            this._registShare(t)
        }, _registShare: function (t) {
            var n = this;
            $.ajax({
                type: "POST", url: "/api/const/signature", data: {url: n.uri}, dataType: "json", success: function (e) {
                    if ($(n).trigger("shareParams", t), 0 == e.code) {
                        var r = e.data;
                        window.wx.config({
                            debug: !1,
                            appId: r.appid,
                            timestamp: r.timestamp,
                            nonceStr: r.noncestr,
                            signature: r.signature,
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "showMenuItems", "hideMenuItems"]
                        }), window.wx.ready(function () {
                            window.wx.onMenuShareTimeline({
                                title: t.title,
                                desc: "",
                                link: t.link + t.friendsChannel,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    t.link.indexOf("inviteJoin") > -1 && $.trackLog({
                                        type: 1,
                                        v2: window.location.pathname,
                                        v4: "1"
                                    })
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareAppMessage({
                                title: t.title,
                                desc: t.description,
                                link: t.link + t.friendChannel,
                                imgUrl: t.thumbUrl,
                                type: "link",
                                dataUrl: "",
                                success: function () {
                                    t.link.indexOf("inviteJoin") > -1 && $.trackLog({
                                        type: 1,
                                        v2: window.location.pathname,
                                        v4: "0"
                                    })
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareQQ({
                                title: t.title,
                                desc: t.description,
                                link: t.link,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    $.trackEvent("邀请好友QQ分享好友成功", "分享")
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareWeibo({
                                title: t.title,
                                desc: t.description,
                                link: t.link,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    $.trackEvent("邀请好友分享微博成功", "分享")
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareQZone({
                                title: t.title,
                                desc: t.description,
                                link: t.link,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    $.trackEvent("邀请好友分享朋友圈成功", "分享")
                                },
                                cancel: function () {
                                }
                            })
                        })
                    }
                }
            })
        }, _hideMenuShare: function () {
            window.wx.ready(function () {
                wx.hideMenuItems({menuList: ["menuItem:share:timeline"]})
            })
        }, _hideFrideShare: function () {
            window.wx.ready(function () {
                wx.hideMenuItems({menuList: ["menuItem:share:appMessage"]})
            })
        }, _showFrideShare: function () {
            window.wx.ready(function () {
                wx.showMenuItems({menuList: ["menuItem:share:appMessage"]})
            })
        }
    };
    t.exports = p
}, function (t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    n.__esModule = !0;
    var i = e(84), o = r(i);
    n["default"] = function (t, n, e) {
        return n in t ? (0, o["default"])(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e, t
    }
}, function (t, n, e) {
    t.exports = {"default": e(85), __esModule: !0}
}, function (t, n, e) {
    e(86);
    var r = e(21).Object;
    t.exports = function (t, n, e) {
        return r.defineProperty(t, n, e)
    }
}, function (t, n, e) {
    var r = e(19);
    r(r.S + r.F * !e(29), "Object", {defineProperty: e(25).f})
}, function (t, n, e) {
    "use strict";
    function r(t, n, e) {
        return 0 !== t.code ? ($().inform({
            type: "error",
            title: t.msg || "操作失败",
            delay: 2e3,
            size: "large",
            cb: e
        }), !1) : void n(t.data)
    }

    function i() {
        var t = "test", n = window.sessionStorage;
        try {
            return n.setItem(t, "testValue"), n.removeItem(t), !0
        } catch (e) {
            return !1
        }
    }

    function o(t, n) {
        i() && localStorage.setItem(t, n)
    }

    function u(t) {
        return $().inform({type: "error", title: "连接服务器出错", delay: 2e3, size: "large", cb: t}), !1
    }

    function a(t, n, e, i, o, a) {
        var c = {
            url: t, type: n, dataType: "JSON", data: e, success: function (t) {
                r(t, i, o)
            }, error: function () {
                u(o)
            }
        };
        a && $.extend(c, a), $.ajax(c)
    }

    function c(t) {
        return t = "" + t, t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function s(t) {
        return t.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "")
    }

    function f(t) {
        return t < 9 && t >= 1 ? 1 : t >= 9 && t < 30 ? 2 : t < 1 ? 3 : 4
    }

    function l() {
        return d("channel") || p.get("channel")
    }

    function h(t) {
        function n(t, n) {
            var e = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(t);
            return e ? e[1] || "" : ""
        }

        var e, r = l();
        return n(t, "channel") ? t : e = t.indexOf("?") > -1 ? t + "&channel=" + r : t + "?channel=" + r
    }

    var p = e(9), d = function (t) {
        var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.href);
        return n ? n[1] || "" : ""
    };
    t.exports = {
        urlParam: d,
        querySuccess: r,
        queryError: u,
        ajaxQuery: a,
        escapeHTML: c,
        functionTpl: s,
        getPlanStatus: f,
        getChannel: l,
        setChannelForUrl: h,
        setLocalStorage: o
    }
}, function (t, n) {
    "use strict";
    var e = function (t) {
        var n = t || window.navigator.userAgent;
        return n = n.toLowerCase(), "micromessenger" == n.match(/MicroMessenger/i) ? 1 : "rock/" == n.match(/rock\//i) && "android" == n.match(/Android/i) ? 3 : "rock/" == n.match(/rock\//i) && "iphone os" == n.match(/iPhone\sOS/i) ? 4 : 2
    };
    t.exports = e
}, function (t, n, e) {
    "use strict";
    var r = e(9), i = function (t, n) {
        var e = r.get("userId"), i = r.get("token");
        $.ajax({
            type: "POST",
            url: "/api/useraccount/info",
            data: {token: i, userId: e},
            dataType: "json",
            success: function (n) {
                0 == n.code && r.set({mobile: n.data.mobile}, {
                    expires: 365,
                    domain: ".shuidihuzhu.com",
                    path: "/"
                }), t && t(n)
            },
            error: function () {
                n && n()
            }
        })
    };
    t.exports = i
}, function (t, n) {
    "use strict";
    var e = {
        inviteMoney: 5, inviteJoinMoney: 5, joinMoney: 9, getPlanName: function (t) {
            var n = ["中青年抗癌计划", "少儿健康互助计划", "中老年抗癌计划", "综合意外互助计划"];
            return t ? n[t - 1] : n[0]
        }, getPlanTipsForId: function (t) {
            var n = ["胃癌、肝癌等各种癌症", "白血病、癌症等50种大病", "胃癌、肝癌等各种癌症", "意外身故、意外伤残"];
            return t ? n[t - 1] : n[0]
        }, planUrlNames: ["young", "child", "old", "accident"], getPlanUrlName: function (t) {
            return e.planUrlNames[t - 1] ? e.planUrlNames[t - 1] : e.planUrlNames[0]
        }, getInsuranceIdForplanUrlName: function (t) {
            return e.planUrlNames.indexOf(t) + 1
        }, getPayName: function () {
            return "微信"
        }, getPayType: function (t) {
            return 1 == t ? this.weixinPayFlag : 2 == t ? this.nowWeixinPayFlag : ""
        }, nowWeixinPayFlag: 22, weixinPayFlag: 10
    };
    t.exports = e
}, function (t, n, e) {
    "use strict";
    var r = e(92), i = e(9), o = function () {
        var t = i.get("userId"), n = i.get("token"), e = i.get("openId");
        return !(!t || !n) && (2 != r() ? !(!n || !e) && {userId: t, token: n, openId: e} : !!n && {
                userId: t,
                token: n
            })
    };
    t.exports = o
}, function (t, n) {
    "use strict";
    var e = function () {
        var t = window.navigator.userAgent.toLowerCase();
        return "micromessenger" == t.match(/MicroMessenger/i) ? 1 : "rock/" == t.match(/rock\//i) && "android" == t.match(/Android/i) ? 3 : "rock/" == t.match(/rock\//i) && "iphone os" == t.match(/iPhone\sOS/i) ? 4 : 2
    };
    t.exports = e
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, n) {
}]);