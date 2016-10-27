webpackJsonp([13, 40], [function (t, e, n) {
    "use strict";
    n(248), n(7);
    var i = n(229), r = n(87), o = n(235), s = (n(91), n(233)), u = n(123), a = n(234), c = window.decodeURIComponent(r.urlParam("redirectUrl")), f = {
        init: function () {
            o(window.location.origin + u.login.url + "?redirectUrl=" + c, function () {
                f._eventAction()
            })
        }, _getCodeLock: !1, _loginLocked: !1, _getVerifyCode: function () {
            var t = $('[node-type="mobileNumber"]').val().trim();
            if (!t)return void f._tips("请输入手机号码");
            if (!/^1\d{10}$/.test(t))return void f._tips("请输入正确的手机号码");
            if (!f._getCodeLock) {
                f._getCodeLock = !0;
                var e = s("/api/useraccount/sendVerifyCode", {mobile: t});
                e.done(function (t) {
                    0 == t.code ? (f._tips("验证码已发送"), f._timer()) : (f._tips(t.msg), f._getCodeLock = !1)
                })
            }
        }, _eventAction: function () {
            $('[node-type="getCodeAction"]').click(function () {
                f._getVerifyCode()
            }), $('[node-type="loginSubmit"]').click(function () {
                f._signin()
            })
        }, _timer: function () {
            function t() {
                0 == e ? (n.html(i), clearInterval(r), f._getCodeLock = !1) : n.html("<em>" + e + "秒后重试</em>"), e--
            }

            var e = 60, n = $('[node-type="getCodeAction"]'), i = n.text();
            t();
            var r = setInterval(function () {
                t()
            }, 1e3)
        }, _signin: function () {
            var t = $('[node-type="mobileNumber"]').val(), e = $('[node-type="verifyCode"]').val();
            if (!t)return f._tips("请输入您的手机号码"), void(f._loginLocked = !1);
            var e = $('[node-type="verifyCode"]').val();
            return e ? void(f._loginLocked || (f._loginLocked = !0, a({mobile: t, mobileCode: e}, function (t) {
                0 == t.code ? window.location.href = c || document.referrer : (f._tips(t.msg), f._loginLocked = !1)
            }, function () {
                f._tips("服务器出错!")
            }))) : (f._tips("请输入您收到的验证码"), void(f._loginLocked = !1))
        }, _tips: function (t) {
            new i({content: t, hideDelay: 3e3, type: "success", showOnce: !0})
        }
    };
    f.init()
}, , , , , , , function (t, e, n) {
    "use strict";
    function i() {
        window.wx && (o.init(), window.clearInterval(r), window.wx.ready(function () {
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

    n(8);
    var r, o = n(82), s = n(9);
    r = window.setInterval(function () {
        window.wx && window.clearInterval(r), i()
    }, 50);
    var u = function (t) {
        var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.href);
        return e ? e[1] || "" : ""
    }, a = u("channel");
    a && s.set("channel", a, {expires: 365, domain: ".shuidihuzhu.com", path: "/"});
    var c = localStorage.getItem("userId"), f = localStorage.getItem(c);
    f && (f = JSON.parse(f)), c && f && (f.userId = c, s.set(f, {
        expires: 365,
        domain: ".shuidihuzhu.com",
        path: "/"
    })), s.set({nickname: "", headImgUrl: ""}, {
        expires: -1,
        domain: ".shuidihuzhu.com",
        path: "/"
    }), window.onerror = function (t, e, n, i, r) {
        return "Script error." != t && !e || (setTimeout(function () {
                var t = {};
                if (i = i || window.event && window.event.errorCharacter || 0, t.url = e, t.line = n, t.col = i, r && r.stack)t.msg = r.stack.toString(); else if (arguments.callee) {
                    for (var o = [], s = arguments.callee.caller, u = 3; s && --u > 0 && (o.push(s.toString()), s !== s.caller);)s = s.caller;
                    o = o.join(","), t.msg = o
                }
                try {
                    t.msg = encodeURIComponent(t.msg);
                    var a = t.url.match("js/.*js").toString().replace("js/", "").replace(".js", "") + t.col, c = new Image;
                    c.src = "http://sea.shuidihuzhu.com/admin/logs/feException?msg=" + t.msg.slice(0, 200) + "&url=" + t.url + "&line=" + t.line + "&col=" + t.col + "&key=" + a
                } catch (f) {
                }
            }, 0), !0)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(9), r = r || [];
    $.trackEvent = function (t, e) {
        r.push(["_trackEvent", t, e])
    }, $.trackLog = function (t) {
        var e = {type: 1, v1: i.get("userId"), v2: "", v3: "", v4: "", v5: ""};
        $.extend(e, t);
        var n = new Image;
        n.src = "/api/log?type=" + e.type + "&v1=" + e.v1 + "&v2=" + e.v2 + "&v3=" + e.v3 + "&v4=" + e.v4 + "&v5=" + e.v5
    }, $("body").on("click", "[trackEvent]", function () {
        var t = $(this).attr("trackLabel");
        $.trackEvent(t, "点击")
    })
}, function (t, e, n) {
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var r, o = n(10), s = i(o), u = n(78), a = i(u), c = function l() {
        return l.get.apply(l, arguments)
    }, f = c.utils = {
        isArray: Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, isPlainObject: function (t) {
            return !!t && "[object Object]" === Object.prototype.toString.call(t)
        }, toArray: function (t) {
            return Array.prototype.slice.call(t)
        }, getKeys: a["default"] || function (t) {
            var e = [], n = "";
            for (n in t)t.hasOwnProperty(n) && e.push(n);
            return e
        }, encode: function (t) {
            return String(t).replace(/[,;"\\=\s%]/g, function (t) {
                return encodeURIComponent(t)
            })
        }, decode: function (t) {
            return decodeURIComponent(t)
        }, retrieve: function (t, e) {
            return null == t ? e : t
        }
    };
    c.defaults = {}, c.expiresMultiplier = 86400, c.set = function (t, e, n) {
        if (f.isPlainObject(t))for (var i in t)t.hasOwnProperty(i) && this.set(i, t[i], e); else {
            n = f.isPlainObject(n) ? n : {expires: n};
            var r = void 0 !== n.expires ? n.expires : this.defaults.expires || "", o = "undefined" == typeof r ? "undefined" : (0, s["default"])(r);
            "string" === o && "" !== r ? r = new Date(r) : "number" === o && (r = new Date(+new Date + 1e3 * this.expiresMultiplier * r)), "" !== r && "toGMTString" in r && (r = ";expires=" + r.toGMTString());
            var u = n.path || this.defaults.path;
            u = u ? ";path=" + u : "";
            var a = n.domain || this.defaults.domain;
            a = a ? ";domain=" + a : "";
            var c = n.secure || this.defaults.secure ? ";secure" : "";
            n.secure === !1 && (c = ""), document.cookie = f.encode(t) + "=" + f.encode(e) + r + u + a + c
        }
        return this
    }, c.setDefault = function (t, e, n) {
        if (f.isPlainObject(t)) {
            for (var i in t)void 0 === this.get(i) && this.set(i, t[i], e);
            return c
        }
        if (void 0 === this.get(t))return this.set.apply(this, arguments)
    }, c.remove = function (t) {
        t = f.isArray(t) ? t : f.toArray(arguments);
        for (var e = 0, n = t.length; e < n; e++)this.set(t[e], "", -1);
        return this
    }, c.removeSpecific = function (t, e) {
        if (!e)return this.remove(t);
        t = f.isArray(t) ? t : [t], e.expire = -1;
        for (var n = 0, i = t.length; n < i; n++)this.set(t[n], "", e);
        return this
    }, c.empty = function () {
        return this.remove(f.getKeys(this.all()))
    }, c.get = function (t, e) {
        var n = this.all();
        if (f.isArray(t)) {
            for (var i = {}, r = 0, o = t.length; r < o; r++) {
                var s = t[r];
                i[s] = f.retrieve(n[s], e)
            }
            return i
        }
        return f.retrieve(n[t], e)
    }, c.all = function () {
        if ("" === document.cookie)return {};
        for (var t = document.cookie.split("; "), e = {}, n = 0, i = t.length; n < i; n++) {
            var r = t[n].split("="), o = f.decode(r.shift()), s = f.decode(r.join("="));
            e[o] = s
        }
        return e
    }, c.enabled = function () {
        if (navigator.cookieEnabled)return !0;
        var t = "_" === c.set("_", "_").get("_");
        return c.remove("_"), t
    }, r = function () {
        return c
    }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)), t.exports = c
}, function (t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    e.__esModule = !0;
    var r = n(11), o = i(r), s = n(62), u = i(s), a = "function" == typeof u["default"] && "symbol" == typeof o["default"] ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : typeof t
    };
    e["default"] = "function" == typeof u["default"] && "symbol" === a(o["default"]) ? function (t) {
        return "undefined" == typeof t ? "undefined" : a(t)
    } : function (t) {
        return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : a(t)
    }
}, function (t, e, n) {
    t.exports = {"default": n(12), __esModule: !0}
}, function (t, e, n) {
    n(13), n(57), t.exports = n(61).f("iterator")
}, function (t, e, n) {
    "use strict";
    var i = n(14)(!0);
    n(17)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = i(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e, n) {
    var i = n(15), r = n(16);
    t.exports = function (t) {
        return function (e, n) {
            var o, s, u = String(r(e)), a = i(n), c = u.length;
            return a < 0 || a >= c ? t ? "" : void 0 : (o = u.charCodeAt(a), o < 55296 || o > 56319 || a + 1 === c || (s = u.charCodeAt(a + 1)) < 56320 || s > 57343 ? t ? u.charAt(a) : o : t ? u.slice(a, a + 2) : (o - 55296 << 10) + (s - 56320) + 65536)
        }
    }
}, function (t, e) {
    var n = Math.ceil, i = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t)throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    "use strict";
    var i = n(18), r = n(19), o = n(34), s = n(24), u = n(35), a = n(36), c = n(37), f = n(53), l = n(55), h = n(54)("iterator"), d = !([].keys && "next" in [].keys()), p = "@@iterator", m = "keys", v = "values", y = function () {
        return this
    };
    t.exports = function (t, e, n, g, _, w, x) {
        c(n, e, g);
        var b, k, S, O = function (t) {
            if (!d && t in T)return T[t];
            switch (t) {
                case m:
                    return function () {
                        return new n(this, t)
                    };
                case v:
                    return function () {
                        return new n(this, t)
                    }
            }
            return function () {
                return new n(this, t)
            }
        }, I = e + " Iterator", $ = _ == v, j = !1, T = t.prototype, C = T[h] || T[p] || _ && T[_], P = C || O(_), M = _ ? $ ? O("entries") : P : void 0, U = "Array" == e ? T.entries || C : C;
        if (U && (S = l(U.call(new t)), S !== Object.prototype && (f(S, I, !0), i || u(S, h) || s(S, h, y))), $ && C && C.name !== v && (j = !0, P = function () {
                return C.call(this)
            }), i && !x || !d && !j && T[h] || s(T, h, P), a[e] = P, a[I] = y, _)if (b = {
                values: $ ? P : O(v),
                keys: w ? P : O(m),
                entries: M
            }, x)for (k in b)k in T || o(T, k, b[k]); else r(r.P + r.F * (d || j), e, b);
        return b
    }
}, function (t, e) {
    t.exports = !0
}, function (t, e, n) {
    var i = n(20), r = n(21), o = n(22), s = n(24), u = "prototype", a = function (t, e, n) {
        var c, f, l, h = t & a.F, d = t & a.G, p = t & a.S, m = t & a.P, v = t & a.B, y = t & a.W, g = d ? r : r[e] || (r[e] = {}), _ = g[u], w = d ? i : p ? i[e] : (i[e] || {})[u];
        d && (n = e);
        for (c in n)f = !h && w && void 0 !== w[c], f && c in g || (l = f ? w[c] : n[c], g[c] = d && "function" != typeof w[c] ? n[c] : v && f ? o(l, i) : y && w[c] == l ? function (t) {
            var e = function (e, n, i) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                    }
                    return new t(e, n, i)
                }
                return t.apply(this, arguments)
            };
            return e[u] = t[u], e
        }(l) : m && "function" == typeof l ? o(Function.call, l) : l, m && ((g.virtual || (g.virtual = {}))[c] = l, t & a.R && _ && !_[c] && s(_, c, l)))
    };
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    var n = t.exports = {version: "2.4.0"};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var i = n(23);
    t.exports = function (t, e, n) {
        if (i(t), void 0 === e)return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return t.call(e, n, i, r)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t)throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var i = n(25), r = n(33);
    t.exports = n(29) ? function (t, e, n) {
        return i.f(t, e, r(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var i = n(26), r = n(28), o = n(32), s = Object.defineProperty;
    e.f = n(29) ? Object.defineProperty : function (t, e, n) {
        if (i(t), e = o(e, !0), i(n), r)try {
            return s(t, e, n)
        } catch (u) {
        }
        if ("get" in n || "set" in n)throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var i = n(27);
    t.exports = function (t) {
        if (!i(t))throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    t.exports = !n(29) && !n(30)(function () {
            return 7 != Object.defineProperty(n(31)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
        })
}, function (t, e, n) {
    t.exports = !n(30)(function () {
        return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, function (t, e, n) {
    var i = n(27), r = n(20).document, o = i(r) && i(r.createElement);
    t.exports = function (t) {
        return o ? r.createElement(t) : {}
    }
}, function (t, e, n) {
    var i = n(27);
    t.exports = function (t, e) {
        if (!i(t))return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t)))return r;
        if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t)))return r;
        if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t)))return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    t.exports = n(24)
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    "use strict";
    var i = n(38), r = n(33), o = n(53), s = {};
    n(24)(s, n(54)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = i(s, {next: r(1, n)}), o(t, e + " Iterator")
    }
}, function (t, e, n) {
    var i = n(26), r = n(39), o = n(51), s = n(48)("IE_PROTO"), u = function () {
    }, a = "prototype", c = function () {
        var t, e = n(31)("iframe"), i = o.length, r = "<", s = ">";
        for (e.style.display = "none", n(52).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + s + "document.F=Object" + r + "/script" + s), t.close(), c = t.F; i--;)delete c[a][o[i]];
        return c()
    };
    t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (u[a] = i(t), n = new u, u[a] = null, n[s] = t) : n = c(), void 0 === e ? n : r(n, e)
        }
}, function (t, e, n) {
    var i = n(25), r = n(26), o = n(40);
    t.exports = n(29) ? Object.defineProperties : function (t, e) {
        r(t);
        for (var n, s = o(e), u = s.length, a = 0; u > a;)i.f(t, n = s[a++], e[n]);
        return t
    }
}, function (t, e, n) {
    var i = n(41), r = n(51);
    t.exports = Object.keys || function (t) {
            return i(t, r)
        }
}, function (t, e, n) {
    var i = n(35), r = n(42), o = n(45)(!1), s = n(48)("IE_PROTO");
    t.exports = function (t, e) {
        var n, u = r(t), a = 0, c = [];
        for (n in u)n != s && i(u, n) && c.push(n);
        for (; e.length > a;)i(u, n = e[a++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function (t, e, n) {
    var i = n(43), r = n(16);
    t.exports = function (t) {
        return i(r(t))
    }
}, function (t, e, n) {
    var i = n(44);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var i = n(42), r = n(46), o = n(47);
    t.exports = function (t) {
        return function (e, n, s) {
            var u, a = i(e), c = r(a.length), f = o(s, c);
            if (t && n != n) {
                for (; c > f;)if (u = a[f++], u != u)return !0
            } else for (; c > f; f++)if ((t || f in a) && a[f] === n)return t || f || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var i = n(15), r = Math.min;
    t.exports = function (t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    var i = n(15), r = Math.max, o = Math.min;
    t.exports = function (t, e) {
        return t = i(t), t < 0 ? r(t + e, 0) : o(t, e)
    }
}, function (t, e, n) {
    var i = n(49)("keys"), r = n(50);
    t.exports = function (t) {
        return i[t] || (i[t] = r(t))
    }
}, function (t, e, n) {
    var i = n(20), r = "__core-js_shared__", o = i[r] || (i[r] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, e) {
    var n = 0, i = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    t.exports = n(20).document && document.documentElement
}, function (t, e, n) {
    var i = n(25).f, r = n(35), o = n(54)("toStringTag");
    t.exports = function (t, e, n) {
        t && !r(t = n ? t : t.prototype, o) && i(t, o, {configurable: !0, value: e})
    }
}, function (t, e, n) {
    var i = n(49)("wks"), r = n(50), o = n(20).Symbol, s = "function" == typeof o, u = t.exports = function (t) {
        return i[t] || (i[t] = s && o[t] || (s ? o : r)("Symbol." + t))
    };
    u.store = i
}, function (t, e, n) {
    var i = n(35), r = n(56), o = n(48)("IE_PROTO"), s = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
            return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
}, function (t, e, n) {
    var i = n(16);
    t.exports = function (t) {
        return Object(i(t))
    }
}, function (t, e, n) {
    n(58);
    for (var i = n(20), r = n(24), o = n(36), s = n(54)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], a = 0; a < 5; a++) {
        var c = u[a], f = i[c], l = f && f.prototype;
        l && !l[s] && r(l, s, c), o[c] = o.Array
    }
}, function (t, e, n) {
    "use strict";
    var i = n(59), r = n(60), o = n(36), s = n(42);
    t.exports = n(17)(Array, "Array", function (t, e) {
        this._t = s(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    e.f = n(54)
}, function (t, e, n) {
    t.exports = {"default": n(63), __esModule: !0}
}, function (t, e, n) {
    n(64), n(75), n(76), n(77), t.exports = n(21).Symbol
}, function (t, e, n) {
    "use strict";
    var i = n(20), r = n(35), o = n(29), s = n(19), u = n(34), a = n(65).KEY, c = n(30), f = n(49), l = n(53), h = n(50), d = n(54), p = n(61), m = n(66), v = n(67), y = n(68), g = n(71), _ = n(26), w = n(42), x = n(32), b = n(33), k = n(38), S = n(72), O = n(74), I = n(25), $ = n(40), j = O.f, T = I.f, C = S.f, P = i.Symbol, M = i.JSON, U = M && M.stringify, E = "prototype", A = d("_hidden"), F = d("toPrimitive"), L = {}.propertyIsEnumerable, N = f("symbol-registry"), z = f("symbols"), D = f("op-symbols"), R = Object[E], J = "function" == typeof P, q = i.QObject, W = !q || !q[E] || !q[E].findChild, Q = o && c(function () {
        return 7 != k(T({}, "a", {
                get: function () {
                    return T(this, "a", {value: 7}).a
                }
            })).a
    }) ? function (t, e, n) {
        var i = j(R, e);
        i && delete R[e], T(t, e, n), i && t !== R && T(R, e, i)
    } : T, B = function (t) {
        var e = z[t] = k(P[E]);
        return e._k = t, e
    }, G = J && "symbol" == typeof P.iterator ? function (t) {
        return "symbol" == typeof t
    } : function (t) {
        return t instanceof P
    }, V = function (t, e, n) {
        return t === R && V(D, e, n), _(t), e = x(e, !0), _(n), r(z, e) ? (n.enumerable ? (r(t, A) && t[A][e] && (t[A][e] = !1), n = k(n, {enumerable: b(0, !1)})) : (r(t, A) || T(t, A, b(1, {})), t[A][e] = !0), Q(t, e, n)) : T(t, e, n)
    }, H = function (t, e) {
        _(t);
        for (var n, i = y(e = w(e)), r = 0, o = i.length; o > r;)V(t, n = i[r++], e[n]);
        return t
    }, K = function (t, e) {
        return void 0 === e ? k(t) : H(k(t), e)
    }, Y = function (t) {
        var e = L.call(this, t = x(t, !0));
        return !(this === R && r(z, t) && !r(D, t)) && (!(e || !r(this, t) || !r(z, t) || r(this, A) && this[A][t]) || e)
    }, Z = function (t, e) {
        if (t = w(t), e = x(e, !0), t !== R || !r(z, e) || r(D, e)) {
            var n = j(t, e);
            return !n || !r(z, e) || r(t, A) && t[A][e] || (n.enumerable = !0), n
        }
    }, X = function (t) {
        for (var e, n = C(w(t)), i = [], o = 0; n.length > o;)r(z, e = n[o++]) || e == A || e == a || i.push(e);
        return i
    }, tt = function (t) {
        for (var e, n = t === R, i = C(n ? D : w(t)), o = [], s = 0; i.length > s;)!r(z, e = i[s++]) || n && !r(R, e) || o.push(z[e]);
        return o
    };
    J || (P = function () {
        if (this instanceof P)throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
            this === R && e.call(D, n), r(this, A) && r(this[A], t) && (this[A][t] = !1), Q(this, t, b(1, n))
        };
        return o && W && Q(R, t, {configurable: !0, set: e}), B(t)
    }, u(P[E], "toString", function () {
        return this._k
    }), O.f = Z, I.f = V, n(73).f = S.f = X, n(70).f = Y, n(69).f = tt, o && !n(18) && u(R, "propertyIsEnumerable", Y, !0), p.f = function (t) {
        return B(d(t))
    }), s(s.G + s.W + s.F * !J, {Symbol: P});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;)d(et[nt++]);
    for (var et = $(d.store), nt = 0; et.length > nt;)m(et[nt++]);
    s(s.S + s.F * !J, "Symbol", {
        "for": function (t) {
            return r(N, t += "") ? N[t] : N[t] = P(t)
        }, keyFor: function (t) {
            if (G(t))return v(N, t);
            throw TypeError(t + " is not a symbol!")
        }, useSetter: function () {
            W = !0
        }, useSimple: function () {
            W = !1
        }
    }), s(s.S + s.F * !J, "Object", {
        create: K,
        defineProperty: V,
        defineProperties: H,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: tt
    }), M && s(s.S + s.F * (!J || c(function () {
            var t = P();
            return "[null]" != U([t]) || "{}" != U({a: t}) || "{}" != U(Object(t))
        })), "JSON", {
        stringify: function (t) {
            if (void 0 !== t && !G(t)) {
                for (var e, n, i = [t], r = 1; arguments.length > r;)i.push(arguments[r++]);
                return e = i[1], "function" == typeof e && (n = e), !n && g(e) || (e = function (t, e) {
                    if (n && (e = n.call(this, t, e)), !G(e))return e
                }), i[1] = e, U.apply(M, i)
            }
        }
    }), P[E][F] || n(24)(P[E], F, P[E].valueOf), l(P, "Symbol"), l(Math, "Math", !0), l(i.JSON, "JSON", !0)
}, function (t, e, n) {
    var i = n(50)("meta"), r = n(27), o = n(35), s = n(25).f, u = 0, a = Object.isExtensible || function () {
            return !0
        }, c = !n(30)(function () {
        return a(Object.preventExtensions({}))
    }), f = function (t) {
        s(t, i, {value: {i: "O" + ++u, w: {}}})
    }, l = function (t, e) {
        if (!r(t))return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, i)) {
            if (!a(t))return "F";
            if (!e)return "E";
            f(t)
        }
        return t[i].i
    }, h = function (t, e) {
        if (!o(t, i)) {
            if (!a(t))return !0;
            if (!e)return !1;
            f(t)
        }
        return t[i].w
    }, d = function (t) {
        return c && p.NEED && a(t) && !o(t, i) && f(t), t
    }, p = t.exports = {KEY: i, NEED: !1, fastKey: l, getWeak: h, onFreeze: d}
}, function (t, e, n) {
    var i = n(20), r = n(21), o = n(18), s = n(61), u = n(25).f;
    t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || u(e, t, {value: s.f(t)})
    }
}, function (t, e, n) {
    var i = n(40), r = n(42);
    t.exports = function (t, e) {
        for (var n, o = r(t), s = i(o), u = s.length, a = 0; u > a;)if (o[n = s[a++]] === e)return n
    }
}, function (t, e, n) {
    var i = n(40), r = n(69), o = n(70);
    t.exports = function (t) {
        var e = i(t), n = r.f;
        if (n)for (var s, u = n(t), a = o.f, c = 0; u.length > c;)a.call(t, s = u[c++]) && e.push(s);
        return e
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    var i = n(44);
    t.exports = Array.isArray || function (t) {
            return "Array" == i(t)
        }
}, function (t, e, n) {
    var i = n(42), r = n(73).f, o = {}.toString, s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function (t) {
        try {
            return r(t)
        } catch (e) {
            return s.slice()
        }
    };
    t.exports.f = function (t) {
        return s && "[object Window]" == o.call(t) ? u(t) : r(i(t))
    }
}, function (t, e, n) {
    var i = n(41), r = n(51).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
            return i(t, r)
        }
}, function (t, e, n) {
    var i = n(70), r = n(33), o = n(42), s = n(32), u = n(35), a = n(28), c = Object.getOwnPropertyDescriptor;
    e.f = n(29) ? c : function (t, e) {
        if (t = o(t), e = s(e, !0), a)try {
            return c(t, e)
        } catch (n) {
        }
        if (u(t, e))return r(!i.f.call(t, e), t[e])
    }
}, function (t, e) {
}, function (t, e, n) {
    n(66)("asyncIterator")
}, function (t, e, n) {
    n(66)("observable")
}, function (t, e, n) {
    t.exports = {"default": n(79), __esModule: !0}
}, function (t, e, n) {
    n(80), t.exports = n(21).Object.keys
}, function (t, e, n) {
    var i = n(56), r = n(40);
    n(81)("keys", function () {
        return function (t) {
            return r(i(t))
        }
    })
}, function (t, e, n) {
    var i = n(19), r = n(21), o = n(30);
    t.exports = function (t, e) {
        var n = (r.Object || {})[t] || Object[t], s = {};
        s[t] = e(n), i(i.S + i.F * o(function () {
                n(1)
            }), "Object", s)
    }
}, function (t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var r = n(83), o = i(r), s = n(87), u = n(88), a = n(89), c = n(9), f = n(90), l = n(91), h = f.inviteJoinMoney, d = {
        init: function () {
            1 == u() && (this.nickname, this.headImgUrl, this.thumbUrl = "http://static-59729941.mtmssdn0.com/img/share_logo2.png", this.description = "水滴互助是腾讯、IDG资本等联合投资的抵御风险社群，已有超100万用户加入。", this.uri = window.location.href, this._setParams())
        }, _getRandomTitle: function (t, e) {
            var n = t + "邀请你加入水滴互助，最高享30万健康保障。";
            return n
        }, _isHasUserInfo: function (t) {
            var e = this, n = c.get("userId");
            c.get("token");
            n ? a(function (n) {
                n.data.nickname ? e.nickname = n.data.nickname : e.nickname = "我", e.headImgUrl = n.data.headImgUrl, t(!0)
            }) : t(!1)
        }, _getShareCode: function (t) {
            var e = this;
            e._isHasUserInfo(function (e) {
                var n = c.get("userId"), i = c.get("token");
                e ? $.ajax({
                    type: "POST",
                    url: "/api/inv/inviteCode",
                    data: {userId: n, token: i, invitationId: 1},
                    dataType: "json",
                    success: function (e) {
                        0 == e.code && t(e.data.inviteCode)
                    }
                }) : t(!1)
            })
        }, _setParams: function () {
            var t = this, e = c.get("userId");
            this._getShareCode(function (n) {
                n || e ? t._getLoginedParams(n) : t._getNotLoginParams()
            })
        }, _getLoginedParams: function (t) {
            var e;
            if (this.uri.indexOf("list/") > -1)e = {
                title: "我加入了水滴互助，一瓶水的钱在关键时刻能帮上大忙！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/inviteJoin?nickname=" + this.nickname + "&headImgUrl=" + this.headImgUrl + "&inviteCode=" + t + "&channel=",
                friendChannel: "mp_wx_activity_invite1hy",
                friendsChannel: "mp_wx_activity_invite1pyq"
            }, this._hideMenuShare(); else if (this.uri.indexOf("intro") > -1)e = {
                title: "我加入了水滴互助，还不错哦，快来加入吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            }; else if (this.uri.indexOf("inviteJoin") > -1) {
                var n = decodeURIComponent(s.urlParam("nickname"));
                e = {
                    title: this._getRandomTitle(n, h),
                    description: this.description,
                    thumbUrl: this.thumbUrl,
                    link: this.uri,
                    friendChannel: "mp_wx_activity_invite1hy",
                    friendsChannel: "mp_wx_activity_invite1pyq"
                }, this._hideMenuShare()
            } else {
                var i;
                i = {
                    title: this._getRandomTitle(this.nickname, h),
                    description: "水滴互助是腾讯、IDG资本等联合投资的抵御风险社群，已有超100万用户加入。"
                }, (0, o["default"])(i, "description", this.description), (0, o["default"])(i, "thumbUrl", this.thumbUrl), (0, o["default"])(i, "link", "https://www.shuidihuzhu.com/sd/inviteJoin?nickname=" + this.nickname + "&headImgUrl=" + this.headImgUrl + "&inviteCode=" + t + "&channel="), (0, o["default"])(i, "friendChannel", "mp_wx_activity_invite1hy"), (0, o["default"])(i, "friendsChannel", "mp_wx_activity_invite1pyq"), e = i, this._hideMenuShare(), this._showFrideShare()
            }
            this._registShare(e)
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
                var e = decodeURIComponent(s.urlParam("nickname"));
                t = {
                    title: this._getRandomTitle(e, h),
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
            var e = this;
            $.ajax({
                type: "POST", url: "/api/const/signature", data: {url: e.uri}, dataType: "json", success: function (n) {
                    if ($(e).trigger("shareParams", t), 0 == n.code) {
                        var i = n.data;
                        window.wx.config({
                            debug: !1,
                            appId: i.appid,
                            timestamp: i.timestamp,
                            nonceStr: i.noncestr,
                            signature: i.signature,
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
    t.exports = d
}, function (t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    e.__esModule = !0;
    var r = n(84), o = i(r);
    e["default"] = function (t, e, n) {
        return e in t ? (0, o["default"])(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function (t, e, n) {
    t.exports = {"default": n(85), __esModule: !0}
}, function (t, e, n) {
    n(86);
    var i = n(21).Object;
    t.exports = function (t, e, n) {
        return i.defineProperty(t, e, n)
    }
}, function (t, e, n) {
    var i = n(19);
    i(i.S + i.F * !n(29), "Object", {defineProperty: n(25).f})
}, function (t, e, n) {
    "use strict";
    function i(t, e, n) {
        return 0 !== t.code ? ($().inform({
            type: "error",
            title: t.msg || "操作失败",
            delay: 2e3,
            size: "large",
            cb: n
        }), !1) : void e(t.data)
    }

    function r() {
        var t = "test", e = window.sessionStorage;
        try {
            return e.setItem(t, "testValue"), e.removeItem(t), !0
        } catch (n) {
            return !1
        }
    }

    function o(t, e) {
        r() && localStorage.setItem(t, e)
    }

    function s(t) {
        return $().inform({type: "error", title: "连接服务器出错", delay: 2e3, size: "large", cb: t}), !1
    }

    function u(t, e, n, r, o, u) {
        var a = {
            url: t, type: e, dataType: "JSON", data: n, success: function (t) {
                i(t, r, o)
            }, error: function () {
                s(o)
            }
        };
        u && $.extend(a, u), $.ajax(a)
    }

    function a(t) {
        return t = "" + t, t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function c(t) {
        return t.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "")
    }

    function f(t) {
        return t < 9 && t >= 1 ? 1 : t >= 9 && t < 30 ? 2 : t < 1 ? 3 : 4
    }

    function l() {
        return p("channel") || d.get("channel")
    }

    function h(t) {
        function e(t, e) {
            var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
            return n ? n[1] || "" : ""
        }

        var n, i = l();
        return e(t, "channel") ? t : n = t.indexOf("?") > -1 ? t + "&channel=" + i : t + "?channel=" + i
    }

    var d = n(9), p = function (t) {
        var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.href);
        return e ? e[1] || "" : ""
    };
    t.exports = {
        urlParam: p,
        querySuccess: i,
        queryError: s,
        ajaxQuery: u,
        escapeHTML: a,
        functionTpl: c,
        getPlanStatus: f,
        getChannel: l,
        setChannelForUrl: h,
        setLocalStorage: o
    }
}, function (t, e) {
    "use strict";
    var n = function (t) {
        var e = t || window.navigator.userAgent;
        return e = e.toLowerCase(), "micromessenger" == e.match(/MicroMessenger/i) ? 1 : "rock/" == e.match(/rock\//i) && "android" == e.match(/Android/i) ? 3 : "rock/" == e.match(/rock\//i) && "iphone os" == e.match(/iPhone\sOS/i) ? 4 : 2
    };
    t.exports = n
}, function (t, e, n) {
    "use strict";
    var i = n(9), r = function (t, e) {
        var n = i.get("userId"), r = i.get("token");
        $.ajax({
            type: "POST",
            url: "/api/useraccount/info",
            data: {token: r, userId: n},
            dataType: "json",
            success: function (e) {
                0 == e.code && i.set({mobile: e.data.mobile}, {
                    expires: 365,
                    domain: ".shuidihuzhu.com",
                    path: "/"
                }), t && t(e)
            },
            error: function () {
                e && e()
            }
        })
    };
    t.exports = r
}, function (t, e) {
    "use strict";
    var n = {
        inviteMoney: 5, inviteJoinMoney: 5, joinMoney: 9, getPlanName: function (t) {
            var e = ["中青年抗癌计划", "少儿健康互助计划", "中老年抗癌计划", "综合意外互助计划"];
            return t ? e[t - 1] : e[0]
        }, getPlanTipsForId: function (t) {
            var e = ["胃癌、肝癌等各种癌症", "白血病、癌症等50种大病", "胃癌、肝癌等各种癌症", "意外身故、意外伤残"];
            return t ? e[t - 1] : e[0]
        }, planUrlNames: ["young", "child", "old", "accident"], getPlanUrlName: function (t) {
            return n.planUrlNames[t - 1] ? n.planUrlNames[t - 1] : n.planUrlNames[0]
        }, getInsuranceIdForplanUrlName: function (t) {
            return n.planUrlNames.indexOf(t) + 1
        }, getPayName: function () {
            return "微信"
        }, getPayType: function (t) {
            return 1 == t ? this.weixinPayFlag : 2 == t ? this.nowWeixinPayFlag : ""
        }, nowWeixinPayFlag: 22, weixinPayFlag: 10
    };
    t.exports = n
}, function (t, e, n) {
    "use strict";
    var i = n(92), r = n(9), o = function () {
        var t = r.get("userId"), e = r.get("token"), n = r.get("openId");
        return !(!t || !e) && (2 != i() ? !(!e || !n) && {userId: t, token: e, openId: n} : !!e && {
                userId: t,
                token: e
            })
    };
    t.exports = o
}, function (t, e) {
    "use strict";
    var n = function () {
        var t = window.navigator.userAgent.toLowerCase();
        return "micromessenger" == t.match(/MicroMessenger/i) ? 1 : "rock/" == t.match(/rock\//i) && "android" == t.match(/Android/i) ? 3 : "rock/" == t.match(/rock\//i) && "iphone os" == t.match(/iPhone\sOS/i) ? 4 : 2
    };
    t.exports = n
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
    "use strict";
    var n = {
        planList: {name: "险种列表", url: "/sd/list"},
        planItem: {name: "详情页", url: "/sd/list/"},
        healthInform: {name: "健康告知", url: "/sd/list/healthInform/"},
        orderUrl: {name: "提单页", url: "/pay/"},
        success: {name: "购买成功页", url: "/sd/order/success/"},
        me: {name: "我的", url: "/sd/me"},
        forFamily: {name: "为家人完善保障", url: "/sd/me/forFamily"},
        login: {name: "登录", url: "/login"},
        ensure: {name: "我的保障", url: "/sd/me/ensure"},
        ensureItem: {name: "我的保障详情", url: "/sd/me/ensure/"},
        balanceDetail: {name: "余额明细", url: "/sd/me/balanceDetail/"},
        intro: {name: "了解水滴", url: "/sd/intro"},
        question: {name: "常见问题", url: "/sd/question"},
        applyHelp: {name: "申请互助", url: "/sd/me/applyHelp/"},
        coupon: {name: "coupon", url: "/sd/me/coupon"},
        inviteFriend: {name: "邀请好友", url: "/sd/inviteFriend"},
        inviteJoin: {name: "邀请加入", url: "/sd/inviteJoin"},
        inviteQrcode: {name: "生成邀请二维码", url: "/sd/inviteFriend/inviteQrcode"},
        recharge: {name: "充值", url: "/pay/recharge"},
        convention: {name: "会员公约", url: "/sd/agreement/convention"},
        rule: {name: "计划条款", url: "/sd/agreement/rule/"},
        healthRule: {name: "健康要求", url: "/sd/agreement/healthRule/"},
        helpNotice: {name: "互助公示列表", url: "/sd/helpNotice"},
        noticeDetail: {name: "个人公示", url: "/sd/helpNotice/"},
        disabilityRule: {name: "伤残评定", url: "/sd/agreement/disabilityRule"},
        commerceShop: {
            name: "我的电商订单",
            url: "https://www.shuidihuzhu.com/site/market.html?#!/order/list?channel=myshuidi"
        },
        cancerView: {name: "查癌banner链接", url: "https://www.shuidihuzhu.com/site/market.html#!/goods/1"},
        activity: {name: "活动页", url: "/sd/inviteFriend"},
        lottery: {name: "恭喜你", url: "/sd/activity/lottery"},
        downloadApp: {name: "下载APP", url: "http://a.app.qq.com/o/simple.jsp?pkgname=com.shuidihuzhu.rock"},
        introVideo: {name: "了解水滴视频链接", url: "http://v.qq.com/x/page/c0313d2ppk0.html"}
    };
    t.exports = n
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
}, function (t, e, n) {
    "use strict";
    var i = n(220);
    t.exports = function () {
        var t = i.extend({
            _content: "",
            _width: null,
            _height: null,
            _fixed: !1,
            _id: null,
            _classes: "simpledialog",
            _showOnBuild: !0,
            _$wrapper: null,
            _$animateTime: 100,
            _$content: null,
            _$mask: null,
            _autoPosition: !0,
            init: function (t) {
                this._content = t.content, this._width = t.width, this._height = t.height, this._fixed = t.fixed || !1, this._id = t.id || "dialog" + (new Date).valueOf(), this._classes = t["class"] || "simpledialog", this._showOnBuild = null == t.show || t.show, this._$wrapper = $('<div id="' + this._id + '" class="' + this._classes + '" style="display:none;"></div>'), this._$content = $(this._content), this._$animateTime = 100, this._$mask = t.mask === !1 ? null : $('<div class="mask" style="display:none"></div>'), this._autoPosition = t.autoPosition !== !1, this._build(), this._showOnBuild && this.show(this._$animateTime)
            },
            _build: function () {
                this._updateContent();
                var t = {};
                null != this._width && (t.width = this._width + "px"), null != this._height && (t.height = this._height + "px"), this._fixed && (t.position = "fixed");
                for (var e in t) {
                    this._$wrapper.css(t);
                    break
                }
                this._$wrapper.appendTo("body"), this._$mask && this._$mask.appendTo("body")
            },
            _updateContent: function () {
                this._$wrapper.empty().append(this._$content)
            },
            getJElem: function () {
                return this._$wrapper
            },
            getJContent: function () {
                return this._$content
            },
            show: function () {
                this.trigger("show"), this._$wrapper.show(this._$animateTime), this._autoPosition && this.adjust(), this._$mask && (this._$mask.show(this._$animateTime), this._$mask.css({height: $("body").height() + 1e3})), this.trigger("showed")
            },
            hide: function () {
                var t = this;
                this.trigger("hide"), this._$wrapper.hide(t._$animateTime), this._$mask && this._$mask.hide(t._$animateTime), this.trigger("hided")
            },
            close: function () {
                var t = this;
                this.trigger("close"), this._$wrapper.fadeOut(t._$animateTime, function () {
                    t._$wrapper.remove()
                }), this._$mask && this._$mask.fadeOut(t._$animateTime, function () {
                    t._$mask.remove()
                }), this.trigger("closed")
            },
            setContent: function (t) {
                this._content = t, this._$content = $(this._content), this._updateContent()
            },
            adjust: function () {
                var t = this._$wrapper.height(), e = this._$wrapper.width(), n = $(window), i = n.height(), r = n.width(), o = (i - t) / 2 + document.body.scrollTop, s = (r - e) / 2;
                this._fixed && (o = (i - t) / 2), this._$wrapper.css({top: o + "px", left: s + "px"})
            }
        });
        return t
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(221), r = n(222), o = i.extend({
        __event: null, __initEvent: function () {
            null == this.__event && (this.__event = r)
        }, on: function (t, e) {
            return this.__initEvent(), this.__event.on(t, e)
        }, off: function (t, e) {
            return this.__initEvent(), this.__event.off(t, e)
        }, trigger: function (t, e) {
            return this.__initEvent(), this.__event.trigger.apply(this.__event, arguments)
        }, hasEvent: function (t, e) {
            return this.__initEvent(), this.__event.has(t, e)
        }
    });
    t.exports = o
}, function (t, e) {
    "use strict";
    t.exports = function () {
        function t(t, e) {
            return function () {
                var n = this._super;
                this._super = t;
                var i = e.apply(this, arguments);
                return this._super = n, i
            }
        }

        var e = !1, n = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/, i = function () {
        };
        return i.extend = function r(i) {
            function o() {
                !e && this.init && this.init.apply(this, arguments)
            }

            var s = this.prototype;
            e = !0;
            var u = new this;
            e = !1;
            for (var a in i)u[a] = "function" == typeof i[a] && "function" == typeof s[a] && n.test(i[a]) ? t(s[a], i[a]) : i[a];
            return o.prototype = u, o.constructor = o, o.extend = r, o
        }, i
    }()
}, function (t, e) {
    "use strict";
    var n = {
        _events: {}, init: function () {
            this._events = {}
        }, on: function (t, e) {
            "function" == typeof e && (this._events[t] || (this._events[t] = []), this._events[t].push(e))
        }, off: function (t, e) {
            if (this._events[t]) {
                if (1 == arguments.length)return void(this._events[t] = null);
                for (var n, i = this._events[t], r = function () {
                    for (var t = 0, n = i.length; t < n; t++)if (i[t] == e)return t;
                    return -1
                }; (n = r()) != -1;)i.splice(n, 1)
            }
        }, trigger: function (t, e) {
            if (this._events[t])for (var n = arguments.length > 1 ? Array.prototype.splice.call(arguments, 1) : [], i = this._events[t], r = 0; r < i.length; r++)i[r].apply(window, n)
        }, has: function (t, e) {
            if (!this._events[t])return !1;
            if (1 == arguments.length)return 0 != this._events[t].length;
            for (var n = this._events[t], i = 0, r = n.length; i < r; i++)if (n[i] == e)return !0;
            return !1
        }
    };
    t.exports = n
}, , , , , , , function (t, e, n) {
    "use strict";
    n(218);
    var i = n(219);
    t.exports = function () {
        var t = i.extend({
            _type: null, _hideDelay: 2e3, _animationTime: 100, init: function (t) {
                t = t || {}, this._type = t.type ? t.type : this._type, this._hideDelay = "number" == typeof t.hideDelay ? t.hideDelay : this._hideDelay, this._showOnce = "boolean" == typeof t.showOnce && t.showOnce, t = $.extend({
                    mask: !1,
                    "class": "tipdialog"
                }, t), "success" == this._type && $('[node-type="successTipsDialog"]').remove(), t.content = this._getContent(t.content), this._super(t)
            }, _getContent: function (t) {
                var e = '<div node-type="' + this._type + 'TipsDialog" class="tipdialog-content">';
                switch (this._type) {
                    case"success":
                        e += '<i class="icon-tick"></i>';
                        break;
                    case"fail":
                        e += '<i class="icon-cross"></i>'
                }
                return e += "<span>" + t + "</span></div>"
            }, show: function () {
                var t = this;
                this._super(), this._$wrapper.show(t._animationTime), this._showOnce && this.on("hided", function () {
                    t.close()
                }), 0 != this._hideDelay && setTimeout(function () {
                    t.hide(t._animationTime)
                }, this._hideDelay)
            }, hide: function () {
                var t = this;
                this.trigger("hide"), this._$wrapper.css("opacity", "0"), this._$mask && this._$mask.hide(t._animationTime), setTimeout(function () {
                    t._$wrapper.hide(t._animationTime), t.trigger("hided")
                }, this._animationTime)
            }
        });
        return t
    }()
}, , , , function (t, e) {
    "use strict";
    var n = function (t, e, n, i) {
        var r = $.extend({}, i, {url: t, data: e, type: n || "POST", dataType: "json"});
        return $.ajax(r)
    };
    t.exports = n
}, function (t, e, n) {
    "use strict";
    var i = n(92), r = n(9), o = n(87), s = function (t, e, n) {
        var s = "/api/useraccount/signIn";
        2 != i() && (s = "/api/userthird/signIn"), $.ajax({
            type: "POST",
            url: s,
            data: {
                thirdType: i(),
                channel: o.getChannel(),
                openId: r.get("openId"),
                mobile: t.mobile,
                mobileCode: t.mobileCode,
                OSType: i(),
                scope: r.get("scope"),
                thirdToken: r.get("thirdToken")
            },
            dataType: "json",
            success: function (n) {
                0 == n.code && (r.set({
                    openId: n.data.openId,
                    userId: n.data.userId,
                    token: n.data.token,
                    mobile: t.mobile
                }, {expires: 365, domain: ".shuidihuzhu.com", path: "/"}), r.set({
                    openId: "",
                    userId: "",
                    token: "",
                    mobile: ""
                }, {expires: -1, domain: "www.shuidihuzhu.com", path: "/"})), e && e(n)
            },
            error: function () {
                n && n()
            }
        })
    };
    t.exports = s
}, function (t, e, n) {
    "use strict";
    var i = n(87), r = n(88), o = n(9), s = n(91), u = n(236), a = function (t, e, n) {
        var a, c = s();
        if (c)e && e(c); else if (1 == r()) {
            if (a = i.urlParam("code"), !a)return void(window.location.href = u(t, n));
            $.ajax({
                type: "POST",
                url: "/api/userthird/getToken",
                data: {thirdCode: a, thirdType: r(), scope: o.get("scope")},
                dataType: "json",
                success: function (i) {
                    if (0 == i.code) {
                        var r = i.data;
                        r.openId && o.set("openId", r.openId, {
                            expires: 365,
                            domain: ".shuidihuzhu.com",
                            path: "/"
                        }), r.thirdToken && o.set("thirdToken", r.thirdToken, {
                            expires: 365,
                            domain: ".shuidihuzhu.com",
                            path: "/"
                        }), e && e(!1)
                    } else 10001 == i.code && t && (window.location.href = u(t, n))
                }
            })
        } else e && e(!1)
    };
    t.exports = a
}, function (t, e, n) {
    "use strict";
    var i = n(92), r = n(9), o = function (t, e) {
        if (t) {
            if (1 == i()) {
                var n = window.encodeURIComponent(t), o = e || "snsapi_base";
                return o.indexOf("userinfo") > -1 ? r.set("scope", "user_info") : r.set("scope", "base"), "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx697db034193207b0&redirect_uri=" + n + "&response_type=code&scope=" + o + "#wechat_redirect"
            }
            return t
        }
    };
    t.exports = o
}, , , , , , , , , , , , function (t, e) {
}]);