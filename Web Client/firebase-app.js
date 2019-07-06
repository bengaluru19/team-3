! function(e, t) ***REMOVED***
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).firebase = t()
***REMOVED***(this, function() ***REMOVED***
    "use strict";
    var i = function(e, t) ***REMOVED***
        return (i = Object.setPrototypeOf || ***REMOVED***
                __proto__: []
            ***REMOVED***
            instanceof Array && function(e, t) ***REMOVED***
                e.__proto__ = t
            ***REMOVED*** || function(e, t) ***REMOVED***
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            ***REMOVED***)(e, t)
    ***REMOVED***;
    var r = function() ***REMOVED***
        return (r = Object.assign || function(e) ***REMOVED***
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        ***REMOVED***).apply(this, arguments)
    ***REMOVED***;

    function d(e, t) ***REMOVED***
        if (!(t instanceof Object)) return t;
        switch (t.constructor) ***REMOVED***
            case Date:
                return new Date(t.getTime());
            case Object:
                void 0 === e && (e = ***REMOVED******REMOVED***
                break;
            case Array:
                e = [];
                break;
            default:
                return t
        ***REMOVED***
        for (var r in t) t.hasOwnProperty(r) && (e[r] = d(e[r], t[r]));
        return e
    ***REMOVED***
    var h = function(n) ***REMOVED***
            function o(e, t) ***REMOVED***
                var r = n.call(this, t) || this;
                return r.code = e, r.name = "FirebaseError", Object.setPrototypeOf(r, o.prototype), Error.captureStackTrace && Error.captureStackTrace(r, a.prototype.create), r
            ***REMOVED***
            return function(e, t) ***REMOVED***
                function r() ***REMOVED***
                    this.constructor = e
                ***REMOVED***
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            ***REMOVED***(o, n), o
        ***REMOVED***(Error),
        a = function() ***REMOVED***
            function e(e, t, r) ***REMOVED***
                this.service = e, this.serviceName = t, this.errors = r
            ***REMOVED***
            return e.prototype.create = function(e) ***REMOVED***
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                for (var n, o = t[0] || ***REMOVED******REMOVED***, i = this.service + "/" + e, a = this.errors[e], s = a ? (n = o, a.replace(v, function(e, t) ***REMOVED***
                        var r = n[t];
                        return null != r ? r.toString() : "<" + t + "?>"
                    ***REMOVED***)) : "Error", c = this.serviceName + ": " + s + " (" + i + ").", u = new h(i, c), l = 0, p = Object.keys(o); l < p.length; l++) ***REMOVED***
                    var f = p[l];
                    "_" !== f.slice(-1) && (f in u && console.warn('Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'), u[f] = o[f])
                ***REMOVED***
                return u
            ***REMOVED***, e
        ***REMOVED***();
    var v = /\***REMOVED***\$([^***REMOVED***]+)***REMOVED***/g,
        b = function(e, t) ***REMOVED***
            return Object.prototype.hasOwnProperty.call(e, t)
        ***REMOVED***;

    function n(e, t) ***REMOVED***
        var r = new o(e, t);
        return r.subscribe.bind(r)
    ***REMOVED***
    var s, e, o = function() ***REMOVED***
        function e(e, t) ***REMOVED***
            var r = this;
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function() ***REMOVED***
                e(r)
            ***REMOVED***).catch(function(e) ***REMOVED***
                r.error(e)
            ***REMOVED***)
        ***REMOVED***
        return e.prototype.next = function(t) ***REMOVED***
            this.forEachObserver(function(e) ***REMOVED***
                e.next(t)
            ***REMOVED***)
        ***REMOVED***, e.prototype.error = function(t) ***REMOVED***
            this.forEachObserver(function(e) ***REMOVED***
                e.error(t)
          ***REMOVED*** this.close(t)
        ***REMOVED***, e.prototype.complete = function() ***REMOVED***
            this.forEachObserver(function(e) ***REMOVED***
                e.complete()
          ***REMOVED*** this.close()
        ***REMOVED***, e.prototype.subscribe = function(e, t, r) ***REMOVED***
            var n, o = this;
            if (void 0 === e && void 0 === t && void 0 === r) throw new Error("Missing Observer.");
            void 0 === (n = function(e, t) ***REMOVED***
                if ("object" != typeof e || null === e) return !1;
                for (var r = 0, n = t; r < n.length; r++) ***REMOVED***
                    var o = n[r];
                    if (o in e && "function" == typeof e[o]) return !0
                ***REMOVED***
                return !1
            ***REMOVED***(e, ["next", "error", "complete"]) ? e : ***REMOVED***
                next: e,
                error: t,
                complete: r
            ***REMOVED***).next && (n.next = c), void 0 === n.error && (n.error = c), void 0 === n.complete && (n.complete = c);
            var i = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then(function() ***REMOVED***
                try ***REMOVED***
                    o.finalError ? n.error(o.finalError) : n.complete()
                ***REMOVED*** catch (e) ***REMOVED******REMOVED***
          ***REMOVED*** this.observers.push(n), i
        ***REMOVED***, e.prototype.unsubscribeOne = function(e) ***REMOVED***
            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
        ***REMOVED***, e.prototype.forEachObserver = function(e) ***REMOVED***
            if (!this.finalized)
                for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
        ***REMOVED***, e.prototype.sendOne = function(e, t) ***REMOVED***
            var r = this;
            this.task.then(function() ***REMOVED***
                if (void 0 !== r.observers && void 0 !== r.observers[e]) try ***REMOVED***
                    t(r.observers[e])
                ***REMOVED*** catch (e) ***REMOVED***
                    "undefined" != typeof console && console.error && console.error(e)
                ***REMOVED***
            ***REMOVED***)
        ***REMOVED***, e.prototype.close = function(e) ***REMOVED***
            var t = this;
            this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function() ***REMOVED***
                t.observers = void 0, t.onNoObservers = void 0
            ***REMOVED***))
        ***REMOVED***, e
    ***REMOVED***();

    function c() ***REMOVED******REMOVED***(e = s || (s = ***REMOVED******REMOVED***))[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
    var t, u = s.INFO,
        l = function(e, t) ***REMOVED***
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
            if (!(t < e.logLevel)) ***REMOVED***
                var o = (new Date).toISOString();
                switch (t) ***REMOVED***
                    case s.DEBUG:
                    case s.VERBOSE:
                        console.log.apply(console, ["[" + o + "]  " + e.name + ":"].concat(r));
                        break;
                    case s.INFO:
                        console.info.apply(console, ["[" + o + "]  " + e.name + ":"].concat(r));
                        break;
                    case s.WARN:
                        console.warn.apply(console, ["[" + o + "]  " + e.name + ":"].concat(r));
                        break;
                    case s.ERROR:
                        console.error.apply(console, ["[" + o + "]  " + e.name + ":"].concat(r));
                        break;
                    default:
                        throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***,
        p = function() ***REMOVED***
            function e(e) ***REMOVED***
                this.name = e, this._logLevel = u, this._logHandler = l
            ***REMOVED***
            return Object.defineProperty(e.prototype, "logLevel", ***REMOVED***
                get: function() ***REMOVED***
                    return this._logLevel
                ***REMOVED***,
                set: function(e) ***REMOVED***
                    if (!(e in s)) throw new TypeError("Invalid value assigned to `logLevel`");
                    this._logLevel = e
                ***REMOVED***,
                enumerable: !0,
                configurable: !0
          ***REMOVED*** Object.defineProperty(e.prototype, "logHandler", ***REMOVED***
                get: function() ***REMOVED***
                    return this._logHandler
                ***REMOVED***,
                set: function(e) ***REMOVED***
                    if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                ***REMOVED***,
                enumerable: !0,
                configurable: !0
          ***REMOVED*** e.prototype.debug = function() ***REMOVED***
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, s.DEBUG].concat(e))
            ***REMOVED***, e.prototype.log = function() ***REMOVED***
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, s.VERBOSE].concat(e))
            ***REMOVED***, e.prototype.info = function() ***REMOVED***
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, s.INFO].concat(e))
            ***REMOVED***, e.prototype.warn = function() ***REMOVED***
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, s.WARN].concat(e))
            ***REMOVED***, e.prototype.error = function() ***REMOVED***
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, s.ERROR].concat(e))
            ***REMOVED***, e
        ***REMOVED***(),
        f = ((t = ***REMOVED******REMOVED***)["no-app"] = "No Firebase App '***REMOVED***$name***REMOVED***' has been created - call Firebase App.initializeApp()", t["bad-app-name"] = "Illegal App name: '***REMOVED***$name***REMOVED***", t["duplicate-app"] = "Firebase App named '***REMOVED***$name***REMOVED***' already exists", t["app-deleted"] = "Firebase App named '***REMOVED***$name***REMOVED***' already deleted", t["duplicate-service"] = "Firebase service named '***REMOVED***$name***REMOVED***' already registered", t["invalid-app-argument"] = "firebase.***REMOVED***$name***REMOVED***() takes either no argument or a Firebase App instance.", t),
        y = new a("app", "Firebase", f),
        g = "[DEFAULT]",
        m = [],
        E = function() ***REMOVED***
            function e(e, t, r) ***REMOVED***
                this.firebase_ = r, this.isDeleted_ = !1, this.services_ = ***REMOVED******REMOVED***, this.name_ = t.name, this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1, this.options_ = d(void 0, e), this.INTERNAL = ***REMOVED***
                    getUid: function() ***REMOVED***
                        return null
                    ***REMOVED***,
                    getToken: function() ***REMOVED***
                        return Promise.resolve(null)
                    ***REMOVED***,
                    addAuthTokenListener: function(e) ***REMOVED***
                        m.push(e), setTimeout(function() ***REMOVED***
                            return e(null)
                        ***REMOVED***, 0)
                    ***REMOVED***,
                    removeAuthTokenListener: function(t) ***REMOVED***
                        m = m.filter(function(e) ***REMOVED***
                            return e !== t
                        ***REMOVED***)
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
            return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", ***REMOVED***
                get: function() ***REMOVED***
                    return this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                ***REMOVED***,
                set: function(e) ***REMOVED***
                    this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = e
                ***REMOVED***,
                enumerable: !0,
                configurable: !0
          ***REMOVED*** Object.defineProperty(e.prototype, "name", ***REMOVED***
                get: function() ***REMOVED***
                    return this.checkDestroyed_(), this.name_
                ***REMOVED***,
                enumerable: !0,
                configurable: !0
          ***REMOVED*** Object.defineProperty(e.prototype, "options", ***REMOVED***
                get: function() ***REMOVED***
                    return this.checkDestroyed_(), this.options_
                ***REMOVED***,
                enumerable: !0,
                configurable: !0
          ***REMOVED*** e.prototype.delete = function() ***REMOVED***
                var s = this;
                return new Promise(function(e) ***REMOVED***
                    s.checkDestroyed_(), e()
                ***REMOVED***).then(function() ***REMOVED***
                    s.firebase_.INTERNAL.removeApp(s.name_);
                    for (var e = [], t = 0, r = Object.keys(s.services_); t < r.length; t++)
                        for (var n = r[t], o = 0, i = Object.keys(s.services_[n]); o < i.length; o++) ***REMOVED***
                            var a = i[o];
                            e.push(s.services_[n][a])
                        ***REMOVED***
                    return Promise.all(e.filter(function(e) ***REMOVED***
                        return "INTERNAL" in e
                    ***REMOVED***).map(function(e) ***REMOVED***
                        return e.INTERNAL.delete()
                    ***REMOVED***))
                ***REMOVED***).then(function() ***REMOVED***
                    s.isDeleted_ = !0, s.services_ = ***REMOVED******REMOVED***
                ***REMOVED***)
            ***REMOVED***, e.prototype._getService = function(e, t) ***REMOVED***
                if (void 0 === t && (t = g), this.checkDestroyed_(), this.services_[e] || (this.services_[e] = ***REMOVED******REMOVED***), !this.services_[e][t]) ***REMOVED***
                    var r = t !== g ? t : void 0,
                        n = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), r);
                    this.services_[e][t] = n
                ***REMOVED***
                return this.services_[e][t]
            ***REMOVED***, e.prototype.extendApp = function(e) ***REMOVED***
                var t = this;
                d(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener && (m.forEach(function(e) ***REMOVED***
                    t.INTERNAL.addAuthTokenListener(e)
              ***REMOVED*** m = [])
            ***REMOVED***, e.prototype.checkDestroyed_ = function() ***REMOVED***
                if (this.isDeleted_) throw y.create("app-deleted", ***REMOVED***
                    name: this.name_
                ***REMOVED***)
            ***REMOVED***, e
        ***REMOVED***();
    E.prototype.name && E.prototype.options || E.prototype.delete || console.log("dc");
    var _ = "6.2.4";
    var O = new p("@firebase/app");
    if ("object" == typeof self && self.self === self && void 0 !== self.firebase) ***REMOVED***
        O.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
        var N = self.firebase.SDK_VERSION;
        N && 0 <= N.indexOf("LITE") && O.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
    ***REMOVED***
    var w = function e() ***REMOVED***
            var t = function(a) ***REMOVED***
                var s = ***REMOVED******REMOVED***,
                    c = ***REMOVED******REMOVED***,
                    u = ***REMOVED******REMOVED***,
                    l = ***REMOVED***
                        __esModule: !0,
                        initializeApp: function(e, t) ***REMOVED***
                            if (void 0 === t && (t = ***REMOVED******REMOVED***), "object" != typeof t || null === t) ***REMOVED***
                                var r = t;
                                t = ***REMOVED***
                                    name: r
                                ***REMOVED***
                            ***REMOVED***
                            var n = t;
                            void 0 === n.name && (n.name = g);
                            var o = n.name;
                            if ("string" != typeof o || !o) throw y.create("bad-app-name", ***REMOVED***
                                name: String(o)
                            ***REMOVED***
                            if (b(s, o)) throw y.create("duplicate-app", ***REMOVED***
                                name: o
                            ***REMOVED***
                            var i = new a(e, n, l);
                            return h(s[o] = i, "create"), i
                        ***REMOVED***,
                        app: p,
                        apps: null,
                        SDK_VERSION: _,
                        INTERNAL: ***REMOVED***
                            registerService: function(r, e, t, n, o) ***REMOVED***
                                if (void 0 === o && (o = !1), c[r]) throw y.create("duplicate-service", ***REMOVED***
                                    name: r
                                ***REMOVED***

                                function i(e) ***REMOVED***
                                    if (void 0 === e && (e = p()), "function" != typeof e[r]) throw y.create("invalid-app-argument", ***REMOVED***
                                        name: r
                                    ***REMOVED***
                                    return e[r]()
                                ***REMOVED***
                                return c[r] = e, n && (u[r] = n, f().forEach(function(e) ***REMOVED***
                                    n("create", e)
                                ***REMOVED***)), void 0 !== t && d(i, t), l[r] = i, a.prototype[r] = function() ***REMOVED***
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return this._getService.bind(this, r).apply(this, o ? e : [])
                                ***REMOVED***, i
                            ***REMOVED***,
                            removeApp: function(e) ***REMOVED***
                                h(s[e], "delete"), delete s[e]
                            ***REMOVED***,
                            factories: c,
                            useAsService: i
                        ***REMOVED***
                    ***REMOVED***;

                function p(e) ***REMOVED***
                    if (!b(s, e = e || g)) throw y.create("no-app", ***REMOVED***
                        name: e
                    ***REMOVED***
                    return s[e]
                ***REMOVED***

                function f() ***REMOVED***
                    return Object.keys(s).map(function(e) ***REMOVED***
                        return s[e]
                    ***REMOVED***)
                ***REMOVED***

                function h(e, t) ***REMOVED***
                    for (var r = 0, n = Object.keys(c); r < n.length; r++) ***REMOVED***
                        var o = i(0, n[r]);
                        if (null === o) return;
                        u[o] && u[o](t, e)
                    ***REMOVED***
                ***REMOVED***

                function i(e, t) ***REMOVED***
                    return "serverAuth" === t ? null : t
                ***REMOVED***
                return l.default = l, Object.defineProperty(l, "apps", ***REMOVED***
                    get: f
              ***REMOVED*** p.App = a, l
            ***REMOVED***(E);
            return t.INTERNAL = r(***REMOVED******REMOVED***, t.INTERNAL, ***REMOVED***
                createFirebaseNamespace: e,
                extendNamespace: function(e) ***REMOVED***
                    d(t, e)
                ***REMOVED***,
                createSubscribe: n,
                ErrorFactory: a,
                deepExtend: d
          ***REMOVED*** t
        ***REMOVED***(),
        A = w.initializeApp;
    return w.initializeApp = function() ***REMOVED***
        return function() ***REMOVED***
            try ***REMOVED***
                return "[object process]" === Object.prototype.toString.call(global.process)
            ***REMOVED*** catch (e) ***REMOVED***
                return !1
            ***REMOVED***
        ***REMOVED***() && O.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\n      to false and "main" to true:\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '), A.apply(void 0, arguments)
    ***REMOVED***, w
***REMOVED***
//# sourceMappingURL=firebase-app.js.map