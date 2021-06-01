var n, l, u, i, t, r, o = {
}, f = [], e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function c(n2, l2) {
    for(var u2 in l2)n2[u2] = l2[u2];
    return n2;
}
function s(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function a(n2, l2, u2) {
    var i2, t2, r2, o2 = arguments, f2 = {
    };
    for(r2 in l2)r2 == "key" ? i2 = l2[r2] : r2 == "ref" ? t2 = l2[r2] : f2[r2] = l2[r2];
    if (arguments.length > 3) for(u2 = [
        u2
    ], r2 = 3; r2 < arguments.length; r2++)u2.push(o2[r2]);
    if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null) for(r2 in n2.defaultProps)f2[r2] === void 0 && (f2[r2] = n2.defaultProps[r2]);
    return v(n2, f2, i2, t2, null);
}
function v(l2, u2, i2, t2, r2) {
    var o2 = {
        type: l2,
        props: u2,
        key: i2,
        ref: t2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: r2 == null ? ++n.__v : r2
    };
    return n.vnode != null && n.vnode(o2), o2;
}
function y(n2) {
    return n2.children;
}
function p(n2, l2) {
    this.props = n2, this.context = l2;
}
function d(n2, l2) {
    if (l2 == null) return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for(var u2; l2 < n2.__k.length; l2++)if ((u2 = n2.__k[l2]) != null && u2.__e != null) return u2.__e;
    return typeof n2.type == "function" ? d(n2) : null;
}
function _(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
        for(n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
            n2.__e = n2.__c.base = u2.__e;
            break;
        }
        return _(n2);
    }
}
function k(l2) {
    (!l2.__d && (l2.__d = true) && u.push(l2) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}
function m() {
    for(var n2; m.__r = u.length;)n2 = u.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
    }), u = [], n2.some(function(n3) {
        var l2, u2, i2, t2, r2, o2;
        n3.__d && (r2 = (t2 = (l2 = n3).__v).__e, (o2 = l2.__P) && (u2 = [], (i2 = c({
        }, t2)).__v = t2.__v + 1, T(o2, t2, i2, l2.__n, o2.ownerSVGElement !== void 0, t2.__h != null ? [
            r2
        ] : null, u2, r2 == null ? d(t2) : r2, t2.__h), j(u2, t2), t2.__e != r2 && _(t2)));
    });
}
function b(n2, l2, u2, i2, t2, r2, e2, c2, s2, a2) {
    var h2, p2, _2, k2, m2, b2, w2, A2 = i2 && i2.__k || f, P2 = A2.length;
    for(u2.__k = [], h2 = 0; h2 < l2.length; h2++)if ((k2 = u2.__k[h2] = (k2 = l2[h2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(y, {
        children: k2
    }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, (_2 = A2[h2]) === null || _2 && k2.key == _2.key && k2.type === _2.type) A2[h2] = void 0;
        else for(p2 = 0; p2 < P2; p2++){
            if ((_2 = A2[p2]) && k2.key == _2.key && k2.type === _2.type) {
                A2[p2] = void 0;
                break;
            }
            _2 = null;
        }
        T(n2, k2, _2 = _2 || o, t2, r2, e2, c2, s2, a2), m2 = k2.__e, (p2 = k2.ref) && _2.ref != p2 && (w2 || (w2 = []), _2.ref && w2.push(_2.ref, null, k2), w2.push(p2, k2.__c || m2, k2)), m2 != null ? (b2 == null && (b2 = m2), typeof k2.type == "function" && k2.__k != null && k2.__k === _2.__k ? k2.__d = s2 = g(k2, s2, n2) : s2 = x(n2, k2, _2, A2, m2, s2), a2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = d(_2));
    }
    for(u2.__e = b2, h2 = P2; h2--;)A2[h2] != null && (typeof u2.type == "function" && A2[h2].__e != null && A2[h2].__e == u2.__d && (u2.__d = d(i2, h2 + 1)), L(A2[h2], A2[h2]));
    if (w2) for(h2 = 0; h2 < w2.length; h2++)I(w2[h2], w2[++h2], w2[++h2]);
}
function g(n2, l2, u2) {
    var i2, t2;
    for(i2 = 0; i2 < n2.__k.length; i2++)(t2 = n2.__k[i2]) && (t2.__ = n2, l2 = typeof t2.type == "function" ? g(t2, l2, u2) : x(u2, t2, t2, n2.__k, t2.__e, l2));
    return l2;
}
function x(n2, l2, u2, i2, t2, r2) {
    var o2, f2, e2;
    if (l2.__d !== void 0) o2 = l2.__d, l2.__d = void 0;
    else if (u2 == null || t2 != r2 || t2.parentNode == null) n: if (r2 == null || r2.parentNode !== n2) n2.appendChild(t2), o2 = null;
    else {
        for(f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)if (f2 == t2) break n;
        n2.insertBefore(t2, r2), o2 = r2;
    }
    return o2 !== void 0 ? o2 : t2.nextSibling;
}
function A(n2, l2, u2, i2, t2) {
    var r2;
    for(r2 in u2)r2 === "children" || r2 === "key" || r2 in l2 || C(n2, r2, null, u2[r2], i2);
    for(r2 in l2)t2 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u2[r2] === l2[r2] || C(n2, r2, l2[r2], u2[r2], i2);
}
function P(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || e.test(l2) ? u2 : u2 + "px";
}
function C(n2, l2, u2, i2, t2) {
    var r2;
    n: if (l2 === "style") {
        if (typeof u2 == "string") n2.style.cssText = u2;
        else {
            if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2) for(l2 in i2)u2 && l2 in u2 || P(n2.style, l2, "");
            if (u2) for(l2 in u2)i2 && u2[l2] === i2[l2] || P(n2.style, l2, u2[l2]);
        }
    } else if (l2[0] === "o" && l2[1] === "n") r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {
    }), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? H : $, r2) : n2.removeEventListener(l2, r2 ? H : $, r2);
    else if (l2 !== "dangerouslySetInnerHTML") {
        if (t2) l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "download" && l2 in n2) try {
            n2[l2] = u2 == null ? "" : u2;
            break n;
        } catch (n3) {
        }
        typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function $(l2) {
    this.l[l2.type + false](n.event ? n.event(l2) : l2);
}
function H(l2) {
    this.l[l2.type + true](n.event ? n.event(l2) : l2);
}
function T(l2, u2, i2, t2, r2, o2, f2, e2, s2) {
    var a2, v2, h2, d2, _2, k2, m2, g2, w2, x2, A2, P2 = u2.type;
    if (u2.constructor !== void 0) return null;
    i2.__h != null && (s2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [
        e2
    ]), (a2 = n.__b) && a2(u2);
    try {
        n: if (typeof P2 == "function") {
            if (g2 = u2.props, w2 = (a2 = P2.contextType) && t2[a2.__c], x2 = a2 ? w2 ? w2.props.value : a2.__ : t2, i2.__c ? m2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x2) : (u2.__c = v2 = new p(g2, x2), v2.constructor = P2, v2.render = M), w2 && w2.sub(v2), v2.props = g2, v2.state || (v2.state = {
            }), v2.context = x2, v2.__n = t2, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = c({
            }, v2.__s)), c(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), d2 = v2.props, _2 = v2.state, h2) P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
            else {
                if (P2.getDerivedStateFromProps == null && g2 !== d2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g2, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g2, v2.__s, x2) === false || u2.__v === i2.__v) {
                    v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, v2.__h.length && f2.push(v2);
                    break n;
                }
                v2.componentWillUpdate != null && v2.componentWillUpdate(g2, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
                    v2.componentDidUpdate(d2, _2, k2);
                });
            }
            v2.context = x2, v2.props = g2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t2 = c(c({
            }, t2), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (k2 = v2.getSnapshotBeforeUpdate(d2, _2)), A2 = a2 != null && a2.type === y && a2.key == null ? a2.props.children : a2, b(l2, Array.isArray(A2) ? A2 : [
                A2
            ], u2, i2, t2, r2, o2, f2, e2, s2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), m2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else o2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = z(i2.__e, u2, i2, t2, r2, o2, f2, s2);
        (a2 = n.diffed) && a2(u2);
    } catch (l3) {
        u2.__v = null, (s2 || o2 != null) && (u2.__e = e2, u2.__h = !!s2, o2[o2.indexOf(e2)] = null), n.__e(l3, u2, i2);
    }
}
function j(l2, u2) {
    n.__c && n.__c(u2, l2), l2.some(function(u3) {
        try {
            l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
                n2.call(u3);
            });
        } catch (l3) {
            n.__e(l3, u3.__v);
        }
    });
}
function z(n2, l2, u2, i2, t2, r2, e2, c2) {
    var a2, v2, h2, y2, p2 = u2.props, d2 = l2.props, _2 = l2.type, k2 = 0;
    if (_2 === "svg" && (t2 = true), r2 != null) {
        for(; k2 < r2.length; k2++)if ((a2 = r2[k2]) && (a2 === n2 || (_2 ? a2.localName == _2 : a2.nodeType == 3))) {
            n2 = a2, r2[k2] = null;
            break;
        }
    }
    if (n2 == null) {
        if (_2 === null) return document.createTextNode(d2);
        n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), r2 = null, c2 = false;
    }
    if (_2 === null) p2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
    else {
        if (r2 = r2 && f.slice.call(n2.childNodes), v2 = (p2 = u2.props || o).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !c2) {
            if (r2 != null) for(p2 = {
            }, y2 = 0; y2 < n2.attributes.length; y2++)p2[n2.attributes[y2].name] = n2.attributes[y2].value;
            (h2 || v2) && (h2 && (v2 && h2.__html == v2.__html || h2.__html === n2.innerHTML) || (n2.innerHTML = h2 && h2.__html || ""));
        }
        if (A(n2, d2, p2, t2, c2), h2) l2.__k = [];
        else if (k2 = l2.props.children, b(n2, Array.isArray(k2) ? k2 : [
            k2
        ], l2, u2, i2, t2 && _2 !== "foreignObject", r2, e2, n2.firstChild, c2), r2 != null) for(k2 = r2.length; k2--;)r2[k2] != null && s(r2[k2]);
        c2 || ("value" in d2 && (k2 = d2.value) !== void 0 && (k2 !== n2.value || _2 === "progress" && !k2) && C(n2, "value", k2, p2.value, false), "checked" in d2 && (k2 = d2.checked) !== void 0 && k2 !== n2.checked && C(n2, "checked", k2, p2.checked, false));
    }
    return n2;
}
function I(l2, u2, i2) {
    try {
        typeof l2 == "function" ? l2(u2) : l2.current = u2;
    } catch (l3) {
        n.__e(l3, i2);
    }
}
function L(l2, u2, i2) {
    var t2, r2, o2;
    if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || I(t2, null, u2)), i2 || typeof l2.type == "function" || (i2 = (r2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t2 = l2.__c) != null) {
        if (t2.componentWillUnmount) try {
            t2.componentWillUnmount();
        } catch (l3) {
            n.__e(l3, u2);
        }
        t2.base = t2.__P = null;
    }
    if (t2 = l2.__k) for(o2 = 0; o2 < t2.length; o2++)t2[o2] && L(t2[o2], u2, i2);
    r2 != null && s(r2);
}
function M(n2, l2, u2) {
    return this.constructor(n2, u2);
}
n = {
    __e: function(n2, l2) {
        for(var u2, i2, t2; l2 = l2.__;)if ((u2 = l2.__c) && !u2.__) try {
            if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2) return u2.__E = u2;
        } catch (l3) {
            n2 = l3;
        }
        throw n2;
    },
    __v: 0
}, l = function(n2) {
    return n2 != null && n2.constructor === void 0;
}, p.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({
    }, this.state), typeof n2 == "function" && (n2 = n2(c({
    }, u2), this.props)), n2 && c(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k(this));
}, p.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
}, p.prototype.render = y, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = 0;
var n1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function a1(e1) {
    typeof e1 != "string" && (e1 = String(e1));
    for(var t1 = "", r1 = 0; r1 < e1.length; r1++){
        var n2 = e1[r1];
        switch(n2){
            case "<":
                t1 += "&lt;";
                break;
            case ">":
                t1 += "&gt;";
                break;
            case '"':
                t1 += "&quot;";
                break;
            case "&":
                t1 += "&amp;";
                break;
            default:
                t1 += n2;
        }
    }
    return t1;
}
var o1 = function(e1, t1) {
    return String(e1).replace(/(\n+)/g, "$1" + (t1 || "	"));
}, i1 = function(e1, t1, r1) {
    return String(e1).length > (t1 || 40) || !r1 && String(e1).indexOf("\n") !== -1 || String(e1).indexOf("<") !== -1;
}, l1 = {
};
function s1(e1) {
    var t1 = "";
    for(var r1 in e1){
        var a2 = e1[r1];
        a2 != null && (t1 && (t1 += " "), t1 += r1[0] == "-" ? r1 : l1[r1] || (l1[r1] = r1.replace(/([A-Z])/g, "-$1").toLowerCase()), t1 += ": ", t1 += a2, typeof a2 == "number" && n1.test(r1) === false && (t1 += "px"), t1 += ";");
    }
    return t1 || void 0;
}
function f1(e1, t1) {
    for(var r1 in t1)e1[r1] = t1[r1];
    return e1;
}
function c1(e1, t1) {
    return Array.isArray(t1) ? t1.reduce(c1, e1) : t1 != null && t1 !== false && e1.push(t1), e1;
}
var u1 = {
    shallow: true
}, p1 = [], _1 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, v1 = function() {
};
h.render = h;
var d1 = function(e1, t1) {
    return h(e1, t1, u1);
}, g1 = [];
function h(n2, l2, u2) {
    var d2 = function n3(l3, u3, d3, g2, h2, m1) {
        if (l3 == null || typeof l3 == "boolean") return "";
        Array.isArray(l3) && (l3 = a(y, null, l3));
        var x1 = l3.type, y1 = l3.props, b1 = false;
        u3 = u3 || {
        };
        d3 = d3 || {
        };
        var S = d3.pretty, k1 = S && typeof S == "string" ? S : "	";
        if (typeof l3 != "object" && !x1) return a1(l3);
        if (typeof x1 == "function") {
            if (b1 = true, !d3.shallow || !g2 && d3.renderRootComponent !== false) {
                if (x1 === y) {
                    var w = "", O = [];
                    c1(O, l3.props.children);
                    for(var C1 = 0; C1 < O.length; C1++)w += (C1 > 0 && S ? "\n" : "") + n3(O[C1], u3, d3, d3.shallowHighOrder !== false, h2, m1);
                    return w;
                }
                var A1, H1 = l3.__c = {
                    __v: l3,
                    context: u3,
                    props: l3.props,
                    setState: v1,
                    forceUpdate: v1,
                    __h: []
                };
                if (n.__b && n.__b(l3), n.__r && n.__r(l3), x1.prototype && typeof x1.prototype.render == "function") {
                    var j1 = x1.contextType, F = j1 && u3[j1.__c], M1 = j1 != null ? F ? F.props.value : j1.__ : u3;
                    (H1 = l3.__c = new x1(y1, M1)).__v = l3, H1._dirty = H1.__d = true, H1.props = y1, H1.state == null && (H1.state = {
                    }), H1._nextState == null && H1.__s == null && (H1._nextState = H1.__s = H1.state), H1.context = M1, x1.getDerivedStateFromProps ? H1.state = f1(f1({
                    }, H1.state), x1.getDerivedStateFromProps(H1.props, H1.state)) : H1.componentWillMount && (H1.componentWillMount(), H1.state = H1._nextState !== H1.state ? H1._nextState : H1.__s !== H1.state ? H1.__s : H1.state), A1 = H1.render(H1.props, H1.state, H1.context);
                } else {
                    var T1 = x1.contextType, $1 = T1 && u3[T1.__c], L1 = T1 != null ? $1 ? $1.props.value : T1.__ : u3;
                    A1 = x1.call(l3.__c, y1, L1);
                }
                return H1.getChildContext && (u3 = f1(f1({
                }, u3), H1.getChildContext())), n.diffed && n.diffed(l3), n3(A1, u3, d3, d3.shallowHighOrder !== false, h2, m1);
            }
            x1 = (E = x1).displayName || E !== Function && E.name || (function(e1) {
                var t1 = (Function.prototype.toString.call(e1).match(/^\s*function\s+([^( ]+)/) || "")[1];
                if (!t1) {
                    for(var r1 = -1, n4 = p1.length; n4--;)if (p1[n4] === e1) {
                        r1 = n4;
                        break;
                    }
                    r1 < 0 && (r1 = p1.push(e1) - 1), t1 = "UnnamedComponent" + r1;
                }
                return t1;
            })(E);
        }
        var E;
        var D, N, P1 = "";
        if (y1) {
            var R = Object.keys(y1);
            d3 && d3.sortAttributes === true && R.sort();
            for(var U = 0; U < R.length; U++){
                var W = R[U], q = y1[W];
                if (W !== "children") {
                    if (!W.match(/[\s\n\\/='"\0<>]/) && (d3 && d3.allAttributes || W !== "key" && W !== "ref" && W !== "__self" && W !== "__source" && W !== "defaultValue")) {
                        if (W === "className") {
                            if (y1.class) continue;
                            W = "class";
                        } else h2 && W.match(/^xlink:?./) && (W = W.toLowerCase().replace(/^xlink:?/, "xlink:"));
                        if (W === "htmlFor") {
                            if (y1.for) continue;
                            W = "for";
                        }
                        W === "style" && q && typeof q == "object" && (q = s1(q)), W[0] === "a" && W[1] === "r" && typeof q == "boolean" && (q = String(q));
                        var z1 = d3.attributeHook && d3.attributeHook(W, q, u3, d3, b1);
                        if (z1 || z1 === "") P1 += z1;
                        else if (W === "dangerouslySetInnerHTML") N = q && q.__html;
                        else if (x1 === "textarea" && W === "value") D = q;
                        else if ((q || q === 0 || q === "") && typeof q != "function") {
                            if (!(q !== true && q !== "" || (q = W, d3 && d3.xml))) {
                                P1 += " " + W;
                                continue;
                            }
                            if (W === "value") {
                                if (x1 === "select") {
                                    m1 = q;
                                    continue;
                                }
                                x1 === "option" && m1 == q && (P1 += " selected");
                            }
                            P1 += " " + W + '="' + a1(q) + '"';
                        }
                    }
                } else D = q;
            }
        }
        if (S) {
            var I1 = P1.replace(/^\n\s*/, " ");
            I1 === P1 || ~I1.indexOf("\n") ? S && ~P1.indexOf("\n") && (P1 += "\n") : P1 = I1;
        }
        P1 = "<" + x1 + P1 + ">";
        if (String(x1).match(/[\s\n\\/='"\0<>]/)) throw new Error(x1 + " is not a valid HTML tag name in " + P1);
        var V = String(x1).match(_1) || d3.voidElements && String(x1).match(d3.voidElements);
        var Z = [];
        var B;
        if (N) S && i1(N) && (N = "\n" + k1 + o1(N, k1)), P1 += N;
        else if (D != null && c1(B = [], D).length) {
            for(var G = S && ~P1.indexOf("\n"), J = false, K = 0; K < B.length; K++){
                var Q = B[K];
                if (Q != null && Q !== false) {
                    var X = x1 === "svg" || x1 !== "foreignObject" && h2, Y = n3(Q, u3, d3, true, X, m1);
                    if (S && !G && i1(Y) && (G = true), Y) {
                        if (S) {
                            var ee = Y.length > 0 && Y[0] != "<";
                            J && ee ? Z[Z.length - 1] += Y : Z.push(Y), J = ee;
                        } else Z.push(Y);
                    }
                }
            }
            if (S && G) for(var te = Z.length; te--;)Z[te] = "\n" + k1 + o1(Z[te], k1);
        }
        if (Z.length || N) P1 += Z.join("");
        else if (d3 && d3.xml) return P1.substring(0, P1.length - 1) + " />";
        !V || B || N ? (S && ~P1.indexOf("\n") && (P1 += "\n"), P1 += "</" + x1 + ">") : P1 = P1.replace(/>$/, " />");
        return P1;
    }(n2, l2, u2);
    return n.__c && n.__c(n2, g1), d2;
}
h.shallowRender = d1;
const listAll = {
    get alert () {
        return [
            {
                type: 'primary',
                cls: 'bg-blue-500 text-white shadow'
            },
            {
                type: 'danger',
                cls: 'bg-red-500 text-white shadow'
            },
            {
                type: 'success',
                cls: 'bg-green-500 text-white shadow'
            },
            {
                type: 'warning',
                cls: 'bg-yellow-500 text-white shadow'
            },
            {
                type: 'dark',
                cls: 'bg-black text-white shadow'
            },
            {
                type: 'light',
                cls: 'bg-white text-black border border-gray-200'
            },
            {
                type: 'secondary',
                cls: 'bg-gray-200 text-black border border-gray-300'
            }, 
        ];
    }
};
const $data = {
};
$data.alert = [];
const Alert = (el, type)=>{
    ;
    const list = [
        {
            type: 'primary',
            cls: 'bg-blue-500 text-white shadow'
        },
        {
            type: 'danger',
            cls: 'bg-red-500 text-white shadow'
        },
        {
            type: 'success',
            cls: 'bg-green-500 text-white shadow'
        },
        {
            type: 'warning',
            cls: 'bg-yellow-500 text-white shadow'
        },
        {
            type: 'dark',
            cls: 'bg-black text-white shadow'
        },
        {
            type: 'light',
            cls: 'bg-white text-black border border-gray-200'
        },
        {
            type: 'secondary',
            cls: 'bg-gray-200 text-black border border-gray-300'
        }, 
    ];
    const query = document.querySelectorAll(el);
    if (query.length >= 1) {
        query.forEach((querys)=>{
            const id = 'alert-' + Math.floor(Math.random() * 100000);
            listAll.alert.forEach((lists)=>{
                if (lists.type == type) {
                    let status = false;
                    lists.cls.split(' ').forEach((cls)=>querys.classList.add(cls)
                    );
                    querys.innerHTML = h(a("div", {
                        className: "w-full flex"
                    }, a("p", {
                        className: "w-full"
                    }, querys.getAttribute('msg')), a("span", {
                        className: "cursor-pointer"
                    }, a("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }, a("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    })))));
                    querys.setAttribute('id', id);
                    $data.alert.find((d2)=>d2.id !== id ? $data.alert.push({
                            get id () {
                                return id;
                            },
                            get el () {
                                return querys;
                            },
                            get open () {
                                return status;
                            },
                            set open (value){
                                status = value;
                            }
                        }) : false
                    );
                    const event = function() {
                        function open() {
                            if (querys.getAttribute('open') == "true") {
                                status = true;
                                querys.classList.add('flex');
                            } else {
                                status = false;
                                querys.classList.add('hidden');
                            }
                        }
                        querys.querySelector('span').addEventListener('click', (e1)=>{
                            e1.preventDefault();
                            if (status = false) {
                                status = true;
                                querys.classList.add('flex');
                            } else {
                                status = false;
                                querys.classList.add('hidden');
                            }
                        });
                        open();
                    };
                    event();
                    if (querys.getAttribute('config')) {
                        const config = querys.getAttribute('config');
                        function check(attr) {
                            if (config.hasOwnProperty(attr)) {
                                return config[attr];
                            }
                            return false;
                        }
                        function p2() {
                            if (check('p') == true) {
                                querys.classList.add('p-' + check('p'));
                            }
                        }
                        p2();
                    } else {
                        querys.classList.add('p-3');
                    }
                    return true;
                }
            });
        });
        return {
            $data
        };
    }
};
const App = function(conf = {
}) {
    let data = [];
    return {
        config: conf,
        data: data,
        set alert (value){
            value.forEach((data1)=>Alert(data1.el, data1.type)
            );
        },
        get alert () {
            return $data.alert;
        }
    };
};
let myWindow = window;
myWindow.ui = App;
