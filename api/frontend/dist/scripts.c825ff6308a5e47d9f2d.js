!(function(e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function(e, t) {
  'use strict';
  var n = [],
    i = e.document,
    o = Object.getPrototypeOf,
    r = n.slice,
    s = n.concat,
    a = n.push,
    l = n.indexOf,
    c = {},
    u = c.toString,
    d = c.hasOwnProperty,
    f = d.toString,
    p = f.call(Object),
    h = {},
    g = function(e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    m = function(e) {
      return null != e && e === e.window;
    },
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var o,
      r,
      s = (n = n || i).createElement('script');
    if (((s.text = e), t)) for (o in v) (r = t[o] || (t.getAttribute && t.getAttribute(o))) && s.setAttribute(o, r);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function b(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? c[u.call(e)] || 'object' : typeof e;
  }
  var w = '3.4.1',
    x = function(e, t) {
      return new x.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function C(e) {
    var t = !!e && 'length' in e && e.length,
      n = b(e);
    return !g(e) && !m(e) && ('array' === n || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e));
  }
  (x.fn = x.prototype = {
    jquery: w,
    constructor: x,
    length: 0,
    toArray: function() {
      return r.call(this);
    },
    get: function(e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function(e) {
      var t = x.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function(e) {
      return x.each(this, e);
    },
    map: function(e) {
      return this.pushStack(
        x.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }),
    (x.extend = x.fn.extend = function() {
      var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for (
        'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
          'object' == typeof s || g(s) || (s = {}),
          a === l && ((s = this), a--);
        a < l;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (i = e[t]),
              '__proto__' !== t &&
                s !== i &&
                (c && i && (x.isPlainObject(i) || (o = Array.isArray(i)))
                  ? ((n = s[t]),
                    (r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}),
                    (o = !1),
                    (s[t] = x.extend(c, r, i)))
                  : void 0 !== i && (s[t] = i));
      return s;
    }),
    x.extend({
      expando: 'jQuery' + (w + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== u.call(e) ||
          ((t = o(e)) && ('function' != typeof (n = d.call(t, 'constructor') && t.constructor) || f.call(n) !== p))
        );
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function(e, t) {
        y(e, { nonce: t && t.nonce });
      },
      each: function(e, t) {
        var n,
          i = 0;
        if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function(e) {
        return null == e ? '' : (e + '').replace(T, '');
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (C(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : a.call(n, e)), n;
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function(e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function(e, t, n) {
        var i,
          o,
          r = 0,
          a = [];
        if (C(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
        else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
        return s.apply([], a);
      },
      guid: 1,
      support: h
    }),
    'function' == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(e, t) {
      c['[object ' + t + ']'] = t.toLowerCase();
    });
  var S = (function(e) {
    var t,
      n,
      i,
      o,
      r,
      s,
      a,
      l,
      c,
      u,
      d,
      f,
      p,
      h,
      g,
      m,
      v,
      y,
      b,
      w = 'sizzle' + 1 * new Date(),
      x = e.document,
      T = 0,
      C = 0,
      S = le(),
      _ = le(),
      k = le(),
      E = le(),
      A = function(e, t) {
        return e === t && (d = !0), 0;
      },
      D = {}.hasOwnProperty,
      N = [],
      O = N.pop,
      j = N.push,
      I = N.push,
      L = N.slice,
      H = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      $ =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      P = '[\\x20\\t\\r\\n\\f]',
      q = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      M =
        '\\[' +
        P +
        '*(' +
        q +
        ')(?:' +
        P +
        '*([*^$|!~]?=)' +
        P +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        q +
        '))|)' +
        P +
        '*\\]',
      R =
        ':(' +
        q +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        M +
        ')*)|.*)\\)|)',
      W = new RegExp(P + '+', 'g'),
      F = new RegExp('^' + P + '+|((?:^|[^\\\\])(?:\\\\.)*)' + P + '+$', 'g'),
      B = new RegExp('^' + P + '*,' + P + '*'),
      z = new RegExp('^' + P + '*([>+~]|' + P + ')' + P + '*'),
      U = new RegExp(P + '|>'),
      X = new RegExp(R),
      V = new RegExp('^' + q + '$'),
      Y = {
        ID: new RegExp('^#(' + q + ')'),
        CLASS: new RegExp('^\\.(' + q + ')'),
        TAG: new RegExp('^(' + q + '|[*])'),
        ATTR: new RegExp('^' + M),
        PSEUDO: new RegExp('^' + R),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            P +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            P +
            '*(?:([+-]|)' +
            P +
            '*(\\d+)|))' +
            P +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + $ + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            P +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            P +
            '*((?:-\\d)?\\d*)' +
            P +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      Q = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)', 'ig'),
      ne = function(e, t, n) {
        var i = '0x' + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function(e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
          : '\\' + e;
      },
      re = function() {
        f();
      },
      se = we(
        function(e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      I.apply((N = L.call(x.childNodes)), x.childNodes);
    } catch (t) {
      I = {
        apply: N.length
          ? function(e, t) {
              j.apply(e, L.call(t));
            }
          : function(e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            }
      };
    }
    function ae(e, t, i, o) {
      var r,
        a,
        c,
        u,
        d,
        h,
        v,
        y = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (((i = i || []), 'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return i;
      if (!o && ((t ? t.ownerDocument || t : x) !== p && f(t), (t = t || p), g)) {
        if (11 !== T && (d = Z.exec(e)))
          if ((r = d[1])) {
            if (9 === T) {
              if (!(c = t.getElementById(r))) return i;
              if (c.id === r) return i.push(c), i;
            } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i;
          } else {
            if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
            if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
              return I.apply(i, t.getElementsByClassName(r)), i;
          }
        if (n.qsa && !E[e + ' '] && (!m || !m.test(e)) && (1 !== T || 'object' !== t.nodeName.toLowerCase())) {
          if (((v = e), (y = t), 1 === T && U.test(e))) {
            for (
              (u = t.getAttribute('id')) ? (u = u.replace(ie, oe)) : t.setAttribute('id', (u = w)),
                a = (h = s(e)).length;
              a--;

            )
              h[a] = '#' + u + ' ' + be(h[a]);
            (v = h.join(',')), (y = (ee.test(e) && ve(t.parentNode)) || t);
          }
          try {
            return I.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            E(e, !0);
          } finally {
            u === w && t.removeAttribute('id');
          }
        }
      }
      return l(e.replace(F, '$1'), t, i, o);
    }
    function le() {
      var e = [];
      return function t(n, o) {
        return e.push(n + ' ') > i.cacheLength && delete t[e.shift()], (t[n + ' '] = o);
      };
    }
    function ce(e) {
      return (e[w] = !0), e;
    }
    function ue(e) {
      var t = p.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var n = e.split('|'), o = n.length; o--; ) i.attrHandle[n[o]] = t;
    }
    function fe(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(e) {
      return function(t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ge(e) {
      return function(t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function me(e) {
      return ce(function(t) {
        return (
          (t = +t),
          ce(function(n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; ) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (r = ae.isXML = function(e) {
      var t = (e.ownerDocument || e).documentElement;
      return !Q.test(e.namespaceURI || (t && t.nodeName) || 'HTML');
    }),
    (f = ae.setDocument = function(e) {
      var t,
        o,
        s = e ? e.ownerDocument || e : x;
      return (
        s !== p &&
          9 === s.nodeType &&
          s.documentElement &&
          ((h = (p = s).documentElement),
          (g = !r(p)),
          x !== p &&
            (o = p.defaultView) &&
            o.top !== o &&
            (o.addEventListener
              ? o.addEventListener('unload', re, !1)
              : o.attachEvent && o.attachEvent('onunload', re)),
          (n.attributes = ue(function(e) {
            return (e.className = 'i'), !e.getAttribute('className');
          })),
          (n.getElementsByTagName = ue(function(e) {
            return e.appendChild(p.createComment('')), !e.getElementsByTagName('*').length;
          })),
          (n.getElementsByClassName = J.test(p.getElementsByClassName)),
          (n.getById = ue(function(e) {
            return (h.appendChild(e).id = w), !p.getElementsByName || !p.getElementsByName(w).length;
          })),
          n.getById
            ? ((i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                  return e.getAttribute('id') === t;
                };
              }),
              (i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                  return n && n.value === t;
                };
              }),
              (i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                  var n,
                    i,
                    o,
                    r = t.getElementById(e);
                  if (r) {
                    if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                    for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                      if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                  }
                  return [];
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function(e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function(e, t) {
                var n,
                  i = [],
                  o = 0,
                  r = t.getElementsByTagName(e);
                if ('*' === e) {
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return r;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function(e, t) {
              if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }),
          (v = []),
          (m = []),
          (n.qsa = J.test(p.querySelectorAll)) &&
            (ue(function(e) {
              (h.appendChild(e).innerHTML =
                "<a id='" +
                w +
                "'></a><select id='" +
                w +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + P + '*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length || m.push('\\[' + P + '*(?:value|' + $ + ')'),
                e.querySelectorAll('[id~=' + w + '-]').length || m.push('~='),
                e.querySelectorAll(':checked').length || m.push(':checked'),
                e.querySelectorAll('a#' + w + '+*').length || m.push('.#.+[+~]');
            }),
            ue(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = p.createElement('input');
              t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length && m.push('name' + P + '*[*^$|!~]?='),
                2 !== e.querySelectorAll(':enabled').length && m.push(':enabled', ':disabled'),
                (h.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(':disabled').length && m.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (n.matchesSelector = J.test(
            (y =
              h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)
          )) &&
            ue(function(e) {
              (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), v.push('!=', R);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (v = v.length && new RegExp(v.join('|'))),
          (t = J.test(h.compareDocumentPosition)),
          (b =
            t || J.test(h.contains)
              ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function(e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (A = t
            ? function(e, t) {
                if (e === t) return (d = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e === p || (e.ownerDocument === x && b(x, e))
                      ? -1
                      : t === p || (t.ownerDocument === x && b(x, t))
                      ? 1
                      : u
                      ? H(u, e) - H(u, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function(e, t) {
                if (e === t) return (d = !0), 0;
                var n,
                  i = 0,
                  o = e.parentNode,
                  r = t.parentNode,
                  s = [e],
                  a = [t];
                if (!o || !r) return e === p ? -1 : t === p ? 1 : o ? -1 : r ? 1 : u ? H(u, e) - H(u, t) : 0;
                if (o === r) return fe(e, t);
                for (n = e; (n = n.parentNode); ) s.unshift(n);
                for (n = t; (n = n.parentNode); ) a.unshift(n);
                for (; s[i] === a[i]; ) i++;
                return i ? fe(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0;
              })),
        p
      );
    }),
    (ae.matches = function(e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function(e, t) {
      if (
        ((e.ownerDocument || e) !== p && f(e),
        n.matchesSelector && g && !E[t + ' '] && (!v || !v.test(t)) && (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
        } catch (e) {
          E(t, !0);
        }
      return 0 < ae(t, p, null, [e]).length;
    }),
    (ae.contains = function(e, t) {
      return (e.ownerDocument || e) !== p && f(e), b(e, t);
    }),
    (ae.attr = function(e, t) {
      (e.ownerDocument || e) !== p && f(e);
      var o = i.attrHandle[t.toLowerCase()],
        r = o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
      return void 0 !== r
        ? r
        : n.attributes || !g
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (ae.escape = function(e) {
      return (e + '').replace(ie, oe);
    }),
    (ae.error = function(e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (ae.uniqueSort = function(e) {
      var t,
        i = [],
        o = 0,
        r = 0;
      if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(A), d)) {
        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
        for (; o--; ) e.splice(i[o], 1);
      }
      return (u = null), e;
    }),
    (o = ae.getText = function(e) {
      var t,
        n = '',
        i = 0,
        r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += o(t);
      return n;
    }),
    ((i = ae.selectors = {
      cacheLength: 50,
      createPseudo: ce,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function(e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          );
        },
        CHILD: function(e) {
          return (
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || ae.error(e[0]),
                (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && ae.error(e[0]),
            e
          );
        },
        PSEUDO: function(e) {
          var t,
            n = !e[6] && e[2];
          return Y.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  X.test(n) &&
                  (t = s(n, !0)) &&
                  (t = n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(te, ne).toLowerCase();
          return '*' === e
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function(e) {
          var t = S[e + ' '];
          return (
            t ||
            ((t = new RegExp('(^|' + P + ')' + e + '(' + P + '|$)')) &&
              S(e, function(e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function(e, t, n) {
          return function(i) {
            var o = ae.attr(i, e);
            return null == o
              ? '!=' === t
              : !t ||
                  ((o += ''),
                  '=' === t
                    ? o === n
                    : '!=' === t
                    ? o !== n
                    : '^=' === t
                    ? n && 0 === o.indexOf(n)
                    : '*=' === t
                    ? n && -1 < o.indexOf(n)
                    : '$=' === t
                    ? n && o.slice(-n.length) === n
                    : '~=' === t
                    ? -1 < (' ' + o.replace(W, ' ') + ' ').indexOf(n)
                    : '|=' === t && (o === n || o.slice(0, n.length + 1) === n + '-'));
          };
        },
        CHILD: function(e, t, n, i, o) {
          var r = 'nth' !== e.slice(0, 3),
            s = 'last' !== e.slice(-4),
            a = 'of-type' === t;
          return 1 === i && 0 === o
            ? function(e) {
                return !!e.parentNode;
              }
            : function(t, n, l) {
                var c,
                  u,
                  d,
                  f,
                  p,
                  h,
                  g = r !== s ? 'nextSibling' : 'previousSibling',
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;
                if (m) {
                  if (r) {
                    for (; g; ) {
                      for (f = t; (f = f[g]); ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                      h = g = 'only' === e && !h && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                    for (
                      b =
                        (p =
                          (c =
                            (u = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                            T && c[1]) && c[2],
                        f = p && m.childNodes[p];
                      (f = (++p && f && f[g]) || (b = p = 0) || h.pop());

                    )
                      if (1 === f.nodeType && ++b && f === t) {
                        u[e] = [T, p, b];
                        break;
                      }
                  } else if (
                    (y &&
                      (b = p =
                        (c = (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                          T && c[1]),
                    !1 === b)
                  )
                    for (
                      ;
                      (f = (++p && f && f[g]) || (b = p = 0) || h.pop()) &&
                      ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) ||
                        !++b ||
                        (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, b]),
                        f !== t));

                    );
                  return (b -= o) === i || (b % i == 0 && 0 <= b / i);
                }
              };
        },
        PSEUDO: function(e, t) {
          var n,
            o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error('unsupported pseudo: ' + e);
          return o[w]
            ? o(t)
            : 1 < o.length
            ? ((n = [e, e, '', t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? ce(function(e, n) {
                    for (var i, r = o(e, t), s = r.length; s--; ) e[(i = H(e, r[s]))] = !(n[i] = r[s]);
                  })
                : function(e) {
                    return o(e, 0, n);
                  })
            : o;
        }
      },
      pseudos: {
        not: ce(function(e) {
          var t = [],
            n = [],
            i = a(e.replace(F, '$1'));
          return i[w]
            ? ce(function(e, t, n, o) {
                for (var r, s = i(e, null, o, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
              })
            : function(e, o, r) {
                return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
              };
        }),
        has: ce(function(e) {
          return function(t) {
            return 0 < ae(e, t).length;
          };
        }),
        contains: ce(function(e) {
          return (
            (e = e.replace(te, ne)),
            function(t) {
              return -1 < (t.textContent || o(t)).indexOf(e);
            }
          );
        }),
        lang: ce(function(e) {
          return (
            V.test(e || '') || ae.error('unsupported lang: ' + e),
            (e = e.replace(te, ne).toLowerCase()),
            function(t) {
              var n;
              do {
                if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                  return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === h;
        },
        focus: function(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
        },
        selected: function(e) {
          return !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !i.pseudos.empty(e);
        },
        header: function(e) {
          return G.test(e.nodeName);
        },
        input: function(e) {
          return K.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && 'button' === e.type) || 'button' === t;
        },
        text: function(e) {
          var t;
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          );
        },
        first: me(function() {
          return [0];
        }),
        last: me(function(e, t) {
          return [t - 1];
        }),
        eq: me(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: me(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: me(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: me(function(e, t, n) {
          for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
          return e;
        }),
        gt: me(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        })
      }
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = pe(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function we(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && 'parentNode' === r,
        a = C++;
      return t.first
        ? function(t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function(t, n, l) {
            var c,
              u,
              d,
              f = [T, a];
            if (l) {
              for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[r]) && c[0] === T && c[1] === a) return (f[2] = c[2]);
                    if (((u[r] = f)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return 1 < e.length
        ? function(t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function Te(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
      return s;
    }
    function Ce(e, t, n, i, o, r) {
      return (
        i && !i[w] && (i = Ce(i)),
        o && !o[w] && (o = Ce(o, r)),
        ce(function(r, s, a, l) {
          var c,
            u,
            d,
            f = [],
            p = [],
            h = s.length,
            g =
              r ||
              (function(e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                return n;
              })(t || '*', a.nodeType ? [a] : a, []),
            m = !e || (!r && t) ? g : Te(g, f, e, a, l),
            v = n ? (o || (r ? e : h || i) ? [] : s) : m;
          if ((n && n(m, v, a, l), i))
            for (c = Te(v, p), i(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], u = v.length; u--; ) (d = v[u]) && c.push((m[u] = d));
                o(null, (v = []), c, l);
              }
              for (u = v.length; u--; ) (d = v[u]) && -1 < (c = o ? H(r, d) : f[u]) && (r[c] = !(s[c] = d));
            }
          } else (v = Te(v === s ? v.splice(h, v.length) : v)), o ? o(null, s, v, l) : I.apply(s, v);
        })
      );
    }
    function Se(e) {
      for (
        var t,
          n,
          o,
          r = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[' '],
          l = s ? 1 : 0,
          u = we(
            function(e) {
              return e === t;
            },
            a,
            !0
          ),
          d = we(
            function(e) {
              return -1 < H(t, e);
            },
            a,
            !0
          ),
          f = [
            function(e, n, i) {
              var o = (!s && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
              return (t = null), o;
            }
          ];
        l < r;
        l++
      )
        if ((n = i.relative[e[l].type])) f = [we(xe(f), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
            return Ce(
              1 < l && xe(f),
              1 < l && be(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(F, '$1'),
              n,
              l < o && Se(e.slice(l, o)),
              o < r && Se((e = e.slice(o))),
              o < r && be(e)
            );
          }
          f.push(n);
        }
      return xe(f);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (s = ae.tokenize = function(e, t) {
        var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = _[e + ' '];
        if (u) return t ? 0 : u.slice(0);
        for (a = e, l = [], c = i.preFilter; a; ) {
          for (s in ((n && !(o = B.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
          (n = !1),
          (o = z.exec(a)) &&
            ((n = o.shift()), r.push({ value: n, type: o[0].replace(F, ' ') }), (a = a.slice(n.length))),
          i.filter))
            !(o = Y[s].exec(a)) ||
              (c[s] && !(o = c[s](o))) ||
              ((n = o.shift()), r.push({ value: n, type: s, matches: o }), (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? ae.error(e) : _(e, l).slice(0);
      }),
      (a = ae.compile = function(e, t) {
        var n,
          o,
          r,
          a,
          l,
          u,
          d = [],
          h = [],
          m = k[e + ' '];
        if (!m) {
          for (t || (t = s(e)), n = t.length; n--; ) (m = Se(t[n]))[w] ? d.push(m) : h.push(m);
          (m = k(
            e,
            ((o = h),
            (a = 0 < (r = d).length),
            (l = 0 < o.length),
            (u = function(e, t, n, s, u) {
              var d,
                h,
                m,
                v = 0,
                y = '0',
                b = e && [],
                w = [],
                x = c,
                C = e || (l && i.find.TAG('*', u)),
                S = (T += null == x ? 1 : Math.random() || 0.1),
                _ = C.length;
              for (u && (c = t === p || t || u); y !== _ && null != (d = C[y]); y++) {
                if (l && d) {
                  for (h = 0, t || d.ownerDocument === p || (f(d), (n = !g)); (m = o[h++]); )
                    if (m(d, t || p, n)) {
                      s.push(d);
                      break;
                    }
                  u && (T = S);
                }
                a && ((d = !m && d) && v--, e && b.push(d));
              }
              if (((v += y), a && y !== v)) {
                for (h = 0; (m = r[h++]); ) m(b, w, t, n);
                if (e) {
                  if (0 < v) for (; y--; ) b[y] || w[y] || (w[y] = O.call(s));
                  w = Te(w);
                }
                I.apply(s, w), u && !e && 0 < w.length && 1 < v + r.length && ae.uniqueSort(s);
              }
              return u && ((T = S), (c = x)), b;
            }),
            a ? ce(u) : u)
          )).selector = e;
        }
        return m;
      }),
      (l = ae.select = function(e, t, n, o) {
        var r,
          l,
          c,
          u,
          d,
          f = 'function' == typeof e && e,
          p = !o && s((e = f.selector || e));
        if (((n = n || []), 1 === p.length)) {
          if (
            2 < (l = p[0] = p[0].slice(0)).length &&
            'ID' === (c = l[0]).type &&
            9 === t.nodeType &&
            g &&
            i.relative[l[1].type]
          ) {
            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
            f && (t = t.parentNode), (e = e.slice(l.shift().value.length));
          }
          for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && !i.relative[(u = (c = l[r]).type)]; )
            if (
              (d = i.find[u]) &&
              (o = d(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))
            ) {
              if ((l.splice(r, 1), !(e = o.length && be(l)))) return I.apply(n, o), n;
              break;
            }
        }
        return (f || a(e, p))(o, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
      }),
      (n.sortStable =
        w
          .split('')
          .sort(A)
          .join('') === w),
      (n.detectDuplicates = !!d),
      f(),
      (n.sortDetached = ue(function(e) {
        return 1 & e.compareDocumentPosition(p.createElement('fieldset'));
      })),
      ue(function(e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        de('type|href|height|width', function(e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function(e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        de('value', function(e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function(e) {
        return null == e.getAttribute('disabled');
      }) ||
        de($, function(e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
      ae
    );
  })(e);
  (x.find = S),
    (x.expr = S.selectors),
    (x.expr[':'] = x.expr.pseudos),
    (x.uniqueSort = x.unique = S.uniqueSort),
    (x.text = S.getText),
    (x.isXMLDoc = S.isXML),
    (x.contains = S.contains),
    (x.escapeSelector = S.escape);
  var _ = function(e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && x(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    k = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    E = x.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, t, n) {
    return g(t)
      ? x.grep(e, function(e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? x.grep(e, function(e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? x.grep(e, function(e) {
          return -1 < l.call(t, e) !== n;
        })
      : x.filter(t, e, n);
  }
  (x.filter = function(e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? x.find.matchesSelector(i, e)
          ? [i]
          : []
        : x.find.matches(
            e,
            x.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    x.fn.extend({
      find: function(e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ('string' != typeof e)
          return this.pushStack(
            x(e).filter(function() {
              for (t = 0; t < i; t++) if (x.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
        return 1 < i ? x.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function(e) {
        return !!N(this, 'string' == typeof e && E.test(e) ? x(e) : e || [], !1).length;
      }
    });
  var O,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((x.fn.init = function(e, t, n) {
    var o, r;
    if (!e) return this;
    if (((n = n || O), 'string' == typeof e)) {
      if (!(o = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!o[1] && t))
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (o[1]) {
        if (
          (x.merge(
            this,
            x.parseHTML(o[1], (t = t instanceof x ? t[0] : t) && t.nodeType ? t.ownerDocument || t : i, !0)
          ),
          D.test(o[1]) && x.isPlainObject(t))
        )
          for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        return this;
      }
      return (r = i.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this;
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(x)
      : x.makeArray(e, this);
  }).prototype = x.fn),
    (O = x(i));
  var I = /^(?:parents|prev(?:Until|All))/,
    L = { children: !0, contents: !0, next: !0, prev: !0 };
  function H(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  x.fn.extend({
    has: function(e) {
      var t = x(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
      });
    },
    closest: function(e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = 'string' != typeof e && x(e);
      if (!E.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
              r.push(n);
              break;
            }
      return this.pushStack(1 < r.length ? x.uniqueSort(r) : r);
    },
    index: function(e) {
      return e
        ? 'string' == typeof e
          ? l.call(x(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    x.each(
      {
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
          return _(e, 'parentNode');
        },
        parentsUntil: function(e, t, n) {
          return _(e, 'parentNode', n);
        },
        next: function(e) {
          return H(e, 'nextSibling');
        },
        prev: function(e) {
          return H(e, 'previousSibling');
        },
        nextAll: function(e) {
          return _(e, 'nextSibling');
        },
        prevAll: function(e) {
          return _(e, 'previousSibling');
        },
        nextUntil: function(e, t, n) {
          return _(e, 'nextSibling', n);
        },
        prevUntil: function(e, t, n) {
          return _(e, 'previousSibling', n);
        },
        siblings: function(e) {
          return k((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return k(e.firstChild);
        },
        contents: function(e) {
          return void 0 !== e.contentDocument
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e), x.merge([], e.childNodes));
        }
      },
      function(e, t) {
        x.fn[e] = function(n, i) {
          var o = x.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (i = n),
            i && 'string' == typeof i && (o = x.filter(i, o)),
            1 < this.length && (L[e] || x.uniqueSort(o), I.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var $ = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function M(e, t, n, i) {
    var o;
    try {
      e && g((o = e.promise))
        ? o
            .call(e)
            .done(t)
            .fail(n)
        : e && g((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (x.Callbacks = function(e) {
    var t;
    e =
      'string' == typeof e
        ? ((t = {}),
          x.each(e.match($) || [], function(e, n) {
            t[n] = !0;
          }),
          t)
        : x.extend({}, e);
    var n,
      i,
      o,
      r,
      s = [],
      a = [],
      l = -1,
      c = function() {
        for (r = r || e.once, o = n = !0; a.length; l = -1)
          for (i = a.shift(); ++l < s.length; )
            !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
        e.memory || (i = !1), (n = !1), r && (s = i ? [] : '');
      },
      u = {
        add: function() {
          return (
            s &&
              (i && !n && ((l = s.length - 1), a.push(i)),
              (function t(n) {
                x.each(n, function(n, i) {
                  g(i) ? (e.unique && u.has(i)) || s.push(i) : i && i.length && 'string' !== b(i) && t(i);
                });
              })(arguments),
              i && !n && c()),
            this
          );
        },
        remove: function() {
          return (
            x.each(arguments, function(e, t) {
              for (var n; -1 < (n = x.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function(e) {
          return e ? -1 < x.inArray(e, s) : 0 < s.length;
        },
        empty: function() {
          return s && (s = []), this;
        },
        disable: function() {
          return (r = a = []), (s = i = ''), this;
        },
        disabled: function() {
          return !s;
        },
        lock: function() {
          return (r = a = []), i || n || (s = i = ''), this;
        },
        locked: function() {
          return !!r;
        },
        fireWith: function(e, t) {
          return r || ((t = [e, (t = t || []).slice ? t.slice() : t]), a.push(t), n || c()), this;
        },
        fire: function() {
          return u.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!o;
        }
      };
    return u;
  }),
    x.extend({
      Deferred: function(t) {
        var n = [
            ['notify', 'progress', x.Callbacks('memory'), x.Callbacks('memory'), 2],
            ['resolve', 'done', x.Callbacks('once memory'), x.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', x.Callbacks('once memory'), x.Callbacks('once memory'), 1, 'rejected']
          ],
          i = 'pending',
          o = {
            state: function() {
              return i;
            },
            always: function() {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function(e) {
              return o.then(null, e);
            },
            pipe: function() {
              var e = arguments;
              return x
                .Deferred(function(t) {
                  x.each(n, function(n, i) {
                    var o = g(e[i[4]]) && e[i[4]];
                    r[i[1]](function() {
                      var e = o && o.apply(this, arguments);
                      e && g(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + 'With'](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function(t, i, o) {
              var r = 0;
              function s(t, n, i, o) {
                return function() {
                  var a = this,
                    l = arguments,
                    c = function() {
                      var e, c;
                      if (!(t < r)) {
                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError('Thenable self-resolution');
                        g((c = e && ('object' == typeof e || 'function' == typeof e) && e.then))
                          ? o
                            ? c.call(e, s(r, n, P, o), s(r, n, q, o))
                            : (r++, c.call(e, s(r, n, P, o), s(r, n, q, o), s(r, n, P, n.notifyWith)))
                          : (i !== P && ((a = void 0), (l = [e])), (o || n.resolveWith)(a, l));
                      }
                    },
                    u = o
                      ? c
                      : function() {
                          try {
                            c();
                          } catch (c) {
                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(c, u.stackTrace),
                              r <= t + 1 && (i !== q && ((a = void 0), (l = [c])), n.rejectWith(a, l));
                          }
                        };
                  t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u));
                };
              }
              return x
                .Deferred(function(e) {
                  n[0][3].add(s(0, e, g(o) ? o : P, e.notifyWith)),
                    n[1][3].add(s(0, e, g(t) ? t : P)),
                    n[2][3].add(s(0, e, g(i) ? i : q));
                })
                .promise();
            },
            promise: function(e) {
              return null != e ? x.extend(e, o) : o;
            }
          },
          r = {};
        return (
          x.each(n, function(e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
                s.add(
                  function() {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (r[t[0]] = function() {
                return r[t[0] + 'With'](this === r ? void 0 : this, arguments), this;
              }),
              (r[t[0] + 'With'] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = x.Deferred(),
          a = function(e) {
            return function(n) {
              (i[e] = this), (o[e] = 1 < arguments.length ? r.call(arguments) : n), --t || s.resolveWith(i, o);
            };
          };
        if (t <= 1 && (M(e, s.done(a(n)).resolve, s.reject, !t), 'pending' === s.state() || g(o[n] && o[n].then)))
          return s.then();
        for (; n--; ) M(o[n], a(n), s.reject);
        return s.promise();
      }
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (x.Deferred.exceptionHook = function(t, n) {
    e.console &&
      e.console.warn &&
      t &&
      R.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (x.readyException = function(t) {
      e.setTimeout(function() {
        throw t;
      });
    });
  var W = x.Deferred();
  function F() {
    i.removeEventListener('DOMContentLoaded', F), e.removeEventListener('load', F), x.ready();
  }
  (x.fn.ready = function(e) {
    return (
      W.then(e).catch(function(e) {
        x.readyException(e);
      }),
      this
    );
  }),
    x.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --x.readyWait : x.isReady) ||
          ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
          W.resolveWith(i, [x]);
      }
    }),
    (x.ready.then = W.then),
    'complete' === i.readyState || ('loading' !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(x.ready)
      : (i.addEventListener('DOMContentLoaded', F), e.addEventListener('load', F));
  var B = function(e, t, n, i, o, r, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ('object' === b(n)) for (a in ((o = !0), n)) B(e, t, a, n[a], !0, r, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        g(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function(e, t, n) {
                return c.call(x(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, 'ms-').replace(U, X);
  }
  var Y = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = x.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
          t
        );
      },
      set: function(e, t, n) {
        var i,
          o = this.cache(e);
        if ('string' == typeof t) o[V(t)] = n;
        else for (i in t) o[V(i)] = t[i];
        return o;
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function(e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function(e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match($) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !x.isEmptyObject(t);
      }
    });
  var K = new Q(),
    G = new Q(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType)
      if (((i = 'data-' + t.replace(Z, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(i)))) {
        try {
          n =
            'true' === (o = n) ||
            ('false' !== o && ('null' === o ? null : o === +o + '' ? +o : J.test(o) ? JSON.parse(o) : o));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  x.extend({
    hasData: function(e) {
      return G.hasData(e) || K.hasData(e);
    },
    data: function(e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function(e, t) {
      G.remove(e, t);
    },
    _data: function(e, t, n) {
      return K.access(e, t, n);
    },
    _removeData: function(e, t) {
      K.remove(e, t);
    }
  }),
    x.fn.extend({
      data: function(e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && ((o = G.get(r)), 1 === r.nodeType && !K.get(r, 'hasDataAttrs'))) {
            for (n = s.length; n--; )
              s[n] && 0 === (i = s[n].name).indexOf('data-') && ((i = V(i.slice(5))), ee(r, i, o[i]));
            K.set(r, 'hasDataAttrs', !0);
          }
          return o;
        }
        return 'object' == typeof e
          ? this.each(function() {
              G.set(this, e);
            })
          : B(
              this,
              function(t) {
                var n;
                if (r && void 0 === t) return void 0 !== (n = G.get(r, e)) ? n : void 0 !== (n = ee(r, e)) ? n : void 0;
                this.each(function() {
                  G.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function(e) {
        return this.each(function() {
          G.remove(this, e);
        });
      }
    }),
    x.extend({
      queue: function(e, t, n) {
        var i;
        if (e)
          return (
            (i = K.get(e, (t = (t || 'fx') + 'queue'))),
            n && (!i || Array.isArray(n) ? (i = K.access(e, t, x.makeArray(n))) : i.push(n)),
            i || []
          );
      },
      dequeue: function(e, t) {
        var n = x.queue(e, (t = t || 'fx')),
          i = n.length,
          o = n.shift(),
          r = x._queueHooks(e, t);
        'inprogress' === o && ((o = n.shift()), i--),
          o &&
            ('fx' === t && n.unshift('inprogress'),
            delete r.stop,
            o.call(
              e,
              function() {
                x.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function(e, t) {
        var n = t + 'queueHooks';
        return (
          K.get(e, n) ||
          K.access(e, n, {
            empty: x.Callbacks('once memory').add(function() {
              K.remove(e, [t + 'queue', n]);
            })
          })
        );
      }
    }),
    x.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? x.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && x.dequeue(this, e);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          x.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || 'fx', []);
      },
      promise: function(e, t) {
        var n,
          i = 1,
          o = x.Deferred(),
          r = this,
          s = this.length,
          a = function() {
            --i || o.resolveWith(r, [r]);
          };
        for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; s--; )
          (n = K.get(r[s], e + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t);
      }
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp('^(?:([+-])=|)(' + te + ')([a-z%]*)$', 'i'),
    ie = ['Top', 'Right', 'Bottom', 'Left'],
    oe = i.documentElement,
    re = function(e) {
      return x.contains(e.ownerDocument, e);
    },
    se = { composed: !0 };
  oe.getRootNode &&
    (re = function(e) {
      return x.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
    });
  var ae = function(e, t) {
      return (
        'none' === (e = t || e).style.display || ('' === e.style.display && re(e) && 'none' === x.css(e, 'display'))
      );
    },
    le = function(e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
      return o;
    };
  function ce(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function() {
            return i.cur();
          }
        : function() {
            return x.css(e, t, '');
          },
      l = a(),
      c = (n && n[3]) || (x.cssNumber[t] ? '' : 'px'),
      u = e.nodeType && (x.cssNumber[t] || ('px' !== c && +l)) && ne.exec(x.css(e, t));
    if (u && u[3] !== c) {
      for (c = c || u[3], u = +(l /= 2) || 1; s--; )
        x.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (u /= r);
      x.style(e, t, (u *= 2) + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  var ue = {};
  function de(e, t) {
    for (var n, i, o, r, s, a, l, c = [], u = 0, d = e.length; u < d; u++)
      (i = e[u]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n && ((c[u] = K.get(i, 'display') || null), c[u] || (i.style.display = '')),
            '' === i.style.display &&
              ae(i) &&
              (c[u] =
                ((l = s = r = void 0),
                (s = (o = i).ownerDocument),
                (l = ue[(a = o.nodeName)]) ||
                  ((r = s.body.appendChild(s.createElement(a))),
                  (l = x.css(r, 'display')),
                  r.parentNode.removeChild(r),
                  'none' === l && (l = 'block'),
                  (ue[a] = l)))))
          : 'none' !== n && ((c[u] = 'none'), K.set(i, 'display', n)));
    for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
    return e;
  }
  x.fn.extend({
    show: function() {
      return de(this, !0);
    },
    hide: function() {
      return de(this);
    },
    toggle: function(e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function() {
            ae(this) ? x(this).show() : x(this).hide();
          });
    }
  });
  var fe = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
  function me(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && A(e, t)) ? x.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++) K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
  }
  (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
  var ye,
    be,
    we = /<|&#?\w+;/;
  function xe(e, t, n, i, o) {
    for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
      if ((r = e[p]) || 0 === r)
        if ('object' === b(r)) x.merge(f, r.nodeType ? [r] : r);
        else if (we.test(r)) {
          for (
            s = s || d.appendChild(t.createElement('div')),
              a = (pe.exec(r) || ['', ''])[1].toLowerCase(),
              s.innerHTML = (l = ge[a] || ge._default)[1] + x.htmlPrefilter(r) + l[2],
              u = l[0];
            u--;

          )
            s = s.lastChild;
          x.merge(f, s.childNodes), ((s = d.firstChild).textContent = '');
        } else f.push(t.createTextNode(r));
    for (d.textContent = '', p = 0; (r = f[p++]); )
      if (i && -1 < x.inArray(r, i)) o && o.push(r);
      else if (((c = re(r)), (s = me(d.appendChild(r), 'script')), c && ve(s), n))
        for (u = 0; (r = s[u++]); ) he.test(r.type || '') && n.push(r);
    return d;
  }
  (ye = i.createDocumentFragment().appendChild(i.createElement('div'))),
    (be = i.createElement('input')).setAttribute('type', 'radio'),
    be.setAttribute('checked', 'checked'),
    be.setAttribute('name', 't'),
    ye.appendChild(be),
    (h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ye.innerHTML = '<textarea>x</textarea>'),
    (h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Se = /^([^.]*)(?:\.(.+)|)/;
  function _e() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function() {
          try {
            return i.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ae(e, t, n, i, o, r) {
    var s, a;
    if ('object' == typeof t) {
      for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t)) Ae(e, a, n, i, t[a], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o && ('string' == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = ke;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function(e) {
          return x().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = x.guid++))),
      e.each(function() {
        x.event.add(this, t, o, i, n);
      })
    );
  }
  function De(e, t, n) {
    n
      ? (K.set(e, t, !1),
        x.event.add(e, t, {
          namespace: !1,
          handler: function(e) {
            var i,
              o,
              s = K.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length) (x.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = r.call(arguments)),
                K.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : (o = {}),
                s !== o)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), o.value;
            } else
              s.length &&
                (K.set(this, t, { value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this) }),
                e.stopImmediatePropagation());
          }
        }))
      : void 0 === K.get(e, t) && x.event.add(e, t, _e);
  }
  (x.event = {
    global: {},
    add: function(e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        p,
        h,
        g,
        m = K.get(e);
      if (m)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && x.find.matchesSelector(oe, o),
            n.guid || (n.guid = x.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle = function(t) {
                return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0;
              }),
            c = (t = (t || '').match($) || ['']).length;
          c--;

        )
          (p = g = (a = Se.exec(t[c]) || [])[1]),
            (h = (a[2] || '').split('.').sort()),
            p &&
              ((d = x.event.special[p] || {}),
              (d = x.event.special[(p = (o ? d.delegateType : d.bindType) || p)] || {}),
              (u = x.extend(
                {
                  type: p,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && x.expr.match.needsContext.test(o),
                  namespace: h.join('.')
                },
                r
              )),
              (f = l[p]) ||
                (((f = l[p] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(p, s))),
              d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
              (x.event.global[p] = !0));
    },
    remove: function(e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        p,
        h,
        g,
        m = K.hasData(e) && K.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || '').match($) || ['']).length; c--; )
          if (((p = g = (a = Se.exec(t[c]) || [])[1]), (h = (a[2] || '').split('.').sort()), p)) {
            for (
              d = x.event.special[p] || {},
                f = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                a = a[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                s = r = f.length;
              r--;

            )
              (u = f[r]),
                (!o && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ('**' !== i || !u.selector)) ||
                  (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
            s &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || x.removeEvent(e, p, m.handle), delete l[p]);
          } else for (p in l) x.event.remove(e, p + t[c], n, i, !0);
        x.isEmptyObject(l) && K.remove(e, 'handle events');
      }
    },
    dispatch: function(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = x.event.fix(e),
        l = new Array(arguments.length),
        c = (K.get(this, 'events') || {})[a.type] || [],
        u = x.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (((a.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, a))) {
        for (s = x.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
            (a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r),
              (a.data = r.data),
              void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function(e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !('click' === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = t[n]).selector + ' ')] &&
                (s[o] = i.needsContext ? -1 < x(o, this).index(c) : x.find(o, this, null, [c]).length),
                s[o] && r.push(i);
            r.length && a.push({ elem: c, handlers: r });
          }
      return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
    },
    addProp: function(e, t) {
      Object.defineProperty(x.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        }
      });
    },
    fix: function(e) {
      return e[x.expando] ? e : new x.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function(e) {
          var t = this || e;
          return fe.test(t.type) && t.click && A(t, 'input') && De(t, 'click', _e), !1;
        },
        trigger: function(e) {
          var t = this || e;
          return fe.test(t.type) && t.click && A(t, 'input') && De(t, 'click'), !0;
        },
        _default: function(e) {
          var t = e.target;
          return (fe.test(t.type) && t.click && A(t, 'input') && K.get(t, 'click')) || A(t, 'a');
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (x.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (x.Event = function(e, t) {
      if (!(this instanceof x.Event)) return new x.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? _e : ke),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && x.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
      constructor: x.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = _e), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = _e), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = _e),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    x.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        }
      },
      x.event.addProp
    ),
    x.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
      x.event.special[e] = {
        setup: function() {
          return De(this, e, Ee), !1;
        },
        trigger: function() {
          return De(this, e), !0;
        },
        delegateType: t
      };
    }),
    x.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function(e, t) {
        x.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === this || x.contains(this, i))) ||
                ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
              n
            );
          }
        };
      }
    ),
    x.fn.extend({
      on: function(e, t, n, i) {
        return Ae(this, e, t, n, i);
      },
      one: function(e, t, n, i) {
        return Ae(this, e, t, n, i, 1);
      },
      off: function(e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            x(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
            this
          );
        if ('object' == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function() {
            x.event.remove(this, e, n, t);
          })
        );
      }
    });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Oe = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return (A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && x(e).children('tbody')[0]) || e;
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function $e(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
  }
  function Pe(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (K.hasData(e) && ((r = K.access(e)), (s = K.set(t, r)), (c = r.events)))
        for (o in (delete s.handle, (s.events = {}), c))
          for (n = 0, i = c[o].length; n < i; n++) x.event.add(t, o, c[o][n]);
      G.hasData(e) && ((a = G.access(e)), (l = x.extend({}, a)), G.set(t, l));
    }
  }
  function qe(e, t, n, i) {
    t = s.apply([], t);
    var o,
      r,
      a,
      l,
      c,
      u,
      d = 0,
      f = e.length,
      p = f - 1,
      m = t[0],
      v = g(m);
    if (v || (1 < f && 'string' == typeof m && !h.checkClone && je.test(m)))
      return e.each(function(o) {
        var r = e.eq(o);
        v && (t[0] = m.call(this, o, r.html())), qe(r, t, n, i);
      });
    if (
      f &&
      ((r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)
    ) {
      for (l = (a = x.map(me(o, 'script'), He)).length; d < f; d++)
        (c = o), d !== p && ((c = x.clone(c, !0, !0)), l && x.merge(a, me(c, 'script'))), n.call(e[d], c, d);
      if (l)
        for (u = a[a.length - 1].ownerDocument, x.map(a, $e), d = 0; d < l; d++)
          he.test((c = a[d]).type || '') &&
            !K.access(c, 'globalEval') &&
            x.contains(u, c) &&
            (c.src && 'module' !== (c.type || '').toLowerCase()
              ? x._evalUrl && !c.noModule && x._evalUrl(c.src, { nonce: c.nonce || c.getAttribute('nonce') })
              : y(c.textContent.replace(Ie, ''), c, u));
    }
    return e;
  }
  function Me(e, t, n) {
    for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || x.cleanData(me(i)),
        i.parentNode && (n && re(i) && ve(me(i, 'script')), i.parentNode.removeChild(i));
    return e;
  }
  x.extend({
    htmlPrefilter: function(e) {
      return e.replace(Ne, '<$1></$2>');
    },
    clone: function(e, t, n) {
      var i,
        o,
        r,
        s,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        d = re(e);
      if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || x.isXMLDoc(e)))
        for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++)
          (a = r[i]),
            'input' === (c = (l = s[i]).nodeName.toLowerCase()) && fe.test(a.type)
              ? (l.checked = a.checked)
              : ('input' !== c && 'textarea' !== c) || (l.defaultValue = a.defaultValue);
      if (t)
        if (n) for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++) Pe(r[i], s[i]);
        else Pe(e, u);
      return 0 < (s = me(u, 'script')).length && ve(s, !d && me(e, 'script')), u;
    },
    cleanData: function(e) {
      for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Y(n)) {
          if ((t = n[K.expando])) {
            if (t.events) for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
            n[K.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    }
  }),
    x.fn.extend({
      detach: function(e) {
        return Me(this, e, !0);
      },
      remove: function(e) {
        return Me(this, e);
      },
      text: function(e) {
        return B(
          this,
          function(e) {
            return void 0 === e
              ? x.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return qe(this, arguments, function(e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
        });
      },
      prepend: function() {
        return qe(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return qe(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return qe(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (x.cleanData(me(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function() {
            return x.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return B(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ('string' == typeof e && !Oe.test(e) && !ge[(pe.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = x.htmlPrefilter(e);
              try {
                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var e = [];
        return qe(
          this,
          arguments,
          function(t) {
            var n = this.parentNode;
            x.inArray(this, e) < 0 && (x.cleanData(me(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    x.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function(e, t) {
        x.fn[e] = function(e) {
          for (var n, i = [], o = x(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)), x(o[s])[t](n), a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Re = new RegExp('^(' + te + ')(?!px)[a-z%]+$', 'i'),
    We = function(t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Fe = new RegExp(ie.join('|'), 'i');
  function Be(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || We(e)) &&
        ('' !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = x.style(e, t)),
        !h.pixelBoxStyles() &&
          Re.test(s) &&
          Fe.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + '' : s
    );
  }
  function ze(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function() {
    function t() {
      if (u) {
        (c.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (u.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          oe.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (o = '1%' !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = '60%'),
          (a = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = 'absolute'),
          (s = 12 === n(u.offsetWidth / 3)),
          oe.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var o,
      r,
      s,
      a,
      l,
      c = i.createElement('div'),
      u = i.createElement('div');
    u.style &&
      ((u.style.backgroundClip = 'content-box'),
      (u.cloneNode(!0).style.backgroundClip = ''),
      (h.clearCloneStyle = 'content-box' === u.style.backgroundClip),
      x.extend(h, {
        boxSizingReliable: function() {
          return t(), r;
        },
        pixelBoxStyles: function() {
          return t(), a;
        },
        pixelPosition: function() {
          return t(), o;
        },
        reliableMarginLeft: function() {
          return t(), l;
        },
        scrollboxSize: function() {
          return t(), s;
        }
      }));
  })();
  var Ue = ['Webkit', 'Moz', 'ms'],
    Xe = i.createElement('div').style,
    Ve = {};
  function Ye(e) {
    return (
      x.cssProps[e] ||
      Ve[e] ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function(e) {
              for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Ke = /^--/,
    Ge = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Je = { letterSpacing: '0', fontWeight: '400' };
  function Ze(e, t, n) {
    var i = ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function et(e, t, n, i, o, r) {
    var s = 'width' === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; s < 4; s += 2)
      'margin' === n && (l += x.css(e, n + ie[s], !0, o)),
        i
          ? ('content' === n && (l -= x.css(e, 'padding' + ie[s], !0, o)),
            'margin' !== n && (l -= x.css(e, 'border' + ie[s] + 'Width', !0, o)))
          : ((l += x.css(e, 'padding' + ie[s], !0, o)),
            'padding' !== n
              ? (l += x.css(e, 'border' + ie[s] + 'Width', !0, o))
              : (a += x.css(e, 'border' + ie[s] + 'Width', !0, o)));
    return (
      !i &&
        0 <= r &&
        (l += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5)) || 0),
      l
    );
  }
  function tt(e, t, n) {
    var i = We(e),
      o = (!h.boxSizingReliable() || n) && 'border-box' === x.css(e, 'boxSizing', !1, i),
      r = o,
      s = Be(e, t, i),
      a = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Re.test(s)) {
      if (!n) return s;
      s = 'auto';
    }
    return (
      ((!h.boxSizingReliable() && o) || 'auto' === s || (!parseFloat(s) && 'inline' === x.css(e, 'display', !1, i))) &&
        e.getClientRects().length &&
        ((o = 'border-box' === x.css(e, 'boxSizing', !1, i)), (r = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) + et(e, t, n || (o ? 'border' : 'content'), r, i, s) + 'px'
    );
  }
  function nt(e, t, n, i, o) {
    return new nt.prototype.init(e, t, n, i, o);
  }
  x.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Be(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = V(t),
          l = Ke.test(t),
          c = e.style;
        if ((l || (t = Ye(a)), (s = x.cssHooks[t] || x.cssHooks[a]), void 0 === n))
          return s && 'get' in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        'string' == (r = typeof n) && (o = ne.exec(n)) && o[1] && ((n = ce(e, t, o)), (r = 'number')),
          null != n &&
            n == n &&
            ('number' !== r || l || (n += (o && o[3]) || (x.cssNumber[a] ? '' : 'px')),
            h.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (c[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function(e, t, n, i) {
      var o,
        r,
        s,
        a = V(t);
      return (
        Ke.test(t) || (t = Ye(a)),
        (s = x.cssHooks[t] || x.cssHooks[a]) && 'get' in s && (o = s.get(e, !0, n)),
        void 0 === o && (o = Be(e, t, i)),
        'normal' === o && t in Je && (o = Je[t]),
        '' === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
      );
    }
  }),
    x.each(['height', 'width'], function(e, t) {
      x.cssHooks[t] = {
        get: function(e, n, i) {
          if (n)
            return !Qe.test(x.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, t, i)
              : le(e, Ge, function() {
                  return tt(e, t, i);
                });
        },
        set: function(e, n, i) {
          var o,
            r = We(e),
            s = !h.scrollboxSize() && 'absolute' === r.position,
            a = (s || i) && 'border-box' === x.css(e, 'boxSizing', !1, r),
            l = i ? et(e, t, i, a, r) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - et(e, t, 'border', !1, r) - 0.5
              )),
            l && (o = ne.exec(n)) && 'px' !== (o[3] || 'px') && ((e.style[t] = n), (n = x.css(e, t))),
            Ze(0, n, l)
          );
        }
      };
    }),
    (x.cssHooks.marginLeft = ze(h.reliableMarginLeft, function(e, t) {
      if (t)
        return (
          (parseFloat(Be(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              le(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    x.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
      (x.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, o = {}, r = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
            o[e + ie[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        }
      }),
        'margin' !== e && (x.cssHooks[e + t].set = Ze);
    }),
    x.fn.extend({
      css: function(e, t) {
        return B(
          this,
          function(e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = We(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      }
    }),
    (((x.Tween = nt).prototype = {
      constructor: nt,
      init: function(e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || x.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (x.cssNumber[n] ? '' : 'px'));
      },
      cur: function() {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = x.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function(e) {
          x.fx.step[e.prop]
            ? x.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (!x.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : x.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = nt.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (x.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (x.fx = nt.prototype.init),
    (x.fx.step = {});
  var it,
    ot,
    rt,
    st,
    at = /^(?:toggle|show|hide)$/,
    lt = /queueHooks$/;
  function ct() {
    ot &&
      (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, x.fx.interval),
      x.fx.tick());
  }
  function ut() {
    return (
      e.setTimeout(function() {
        it = void 0;
      }),
      (it = Date.now())
    );
  }
  function dt(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) o['margin' + (n = ie[i])] = o['padding' + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function ft(e, t, n) {
    for (var i, o = (pt.tweeners[t] || []).concat(pt.tweeners['*']), r = 0, s = o.length; r < s; r++)
      if ((i = o[r].call(n, t, e))) return i;
  }
  function pt(e, t, n) {
    var i,
      o,
      r = 0,
      s = pt.prefilters.length,
      a = x.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (o) return !1;
        for (
          var t = it || ut(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(i);
        return (
          a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: it || ut(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i;
        },
        stop: function(t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
        }
      }),
      u = c.props;
    for (
      (function(e, t) {
        var n, i, o, r, s;
        for (n in e)
          if (
            ((o = t[(i = V(n))]),
            (r = e[n]),
            Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (s = x.cssHooks[i]) && ('expand' in s))
          )
            for (n in ((r = s.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(u, c.opts.specialEasing);
      r < s;
      r++
    )
      if ((i = pt.prefilters[r].call(c, e, u, c.opts)))
        return g(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    return (
      x.map(u, ft, c),
      g(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      x.fx.timer(x.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (x.Animation = x.extend(pt, {
    tweeners: {
      '*': [
        function(e, t) {
          var n = this.createTween(e, t);
          return ce(n.elem, e, ne.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      g(e) ? ((t = e), (e = ['*'])) : (e = e.match($));
      for (var n, i = 0, o = e.length; i < o; i++) (pt.tweeners[(n = e[i])] = pt.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function(e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d = 'width' in t || 'height' in t,
          f = this,
          p = {},
          h = e.style,
          g = e.nodeType && ae(e),
          m = K.get(e, 'fxshow');
        for (i in (n.queue ||
          (null == (s = x._queueHooks(e, 'fx')).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function() {
              s.unqueued || a();
            })),
          s.unqueued++,
          f.always(function() {
            f.always(function() {
              s.unqueued--, x.queue(e, 'fx').length || s.empty.fire();
            });
          })),
        t))
          if (at.test((o = t[i]))) {
            if ((delete t[i], (r = r || 'toggle' === o), o === (g ? 'hide' : 'show'))) {
              if ('show' !== o || !m || void 0 === m[i]) continue;
              g = !0;
            }
            p[i] = (m && m[i]) || x.style(e, i);
          }
        if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = m && m.display) && (c = K.get(e, 'display')),
            'none' === (u = x.css(e, 'display')) &&
              (c ? (u = c) : (de([e], !0), (c = e.style.display || c), (u = x.css(e, 'display')), de([e]))),
            ('inline' === u || ('inline-block' === u && null != c)) &&
              'none' === x.css(e, 'float') &&
              (l ||
                (f.done(function() {
                  h.display = c;
                }),
                null == c && (c = 'none' === (u = h.display) ? '' : u)),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            f.always(function() {
              (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          p))
            l ||
              (m ? 'hidden' in m && (g = m.hidden) : (m = K.access(e, 'fxshow', { display: c })),
              r && (m.hidden = !g),
              g && de([e], !0),
              f.done(function() {
                for (i in (g || de([e]), K.remove(e, 'fxshow'), p)) x.style(e, i, p[i]);
              })),
              (l = ft(g ? m[i] : 0, i, f)),
              i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      }
    ],
    prefilter: function(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  })),
    (x.speed = function(e, t, n) {
      var i =
        e && 'object' == typeof e
          ? x.extend({}, e)
          : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
      return (
        x.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration = i.duration in x.fx.speeds ? x.fx.speeds[i.duration] : x.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function() {
          g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
        }),
        i
      );
    }),
    x.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function(e, t, n, i) {
        var o = x.isEmptyObject(e),
          r = x.speed(t, n, i),
          s = function() {
            var t = pt(this, x.extend({}, e), r);
            (o || K.get(this, 'finish')) && t.stop(!0);
          };
        return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function() {
            var t = !0,
              o = null != e && e + 'queueHooks',
              r = x.timers,
              s = K.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || x.dequeue(this, e);
          })
        );
      },
      finish: function(e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function() {
            var t,
              n = K.get(this),
              i = n[e + 'queue'],
              o = n[e + 'queueHooks'],
              r = x.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--; )
              r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    x.each(['toggle', 'show', 'hide'], function(e, t) {
      var n = x.fn[t];
      x.fn[t] = function(e, i, o) {
        return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o);
      };
    }),
    x.each(
      {
        slideDown: dt('show'),
        slideUp: dt('hide'),
        slideToggle: dt('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function(e, t) {
        x.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (x.timers = []),
    (x.fx.tick = function() {
      var e,
        t = 0,
        n = x.timers;
      for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || x.fx.stop(), (it = void 0);
    }),
    (x.fx.timer = function(e) {
      x.timers.push(e), x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function() {
      ot || ((ot = !0), ct());
    }),
    (x.fx.stop = function() {
      ot = null;
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fn.delay = function(t, n) {
      return (
        (t = (x.fx && x.fx.speeds[t]) || t),
        this.queue((n = n || 'fx'), function(n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function() {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (rt = i.createElement('input')),
    (st = i.createElement('select').appendChild(i.createElement('option'))),
    (rt.type = 'checkbox'),
    (h.checkOn = '' !== rt.value),
    (h.optSelected = st.selected),
    ((rt = i.createElement('input')).value = 't'),
    (rt.type = 'radio'),
    (h.radioValue = 't' === rt.value);
  var ht,
    gt = x.expr.attrHandle;
  x.fn.extend({
    attr: function(e, t) {
      return B(this, x.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function(e) {
      return this.each(function() {
        x.removeAttr(this, e);
      });
    }
  }),
    x.extend({
      attr: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? x.prop(e, t, n)
            : ((1 === r && x.isXMLDoc(e)) ||
                (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void x.removeAttr(e, t)
                  : o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : o && 'get' in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = x.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!h.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n,
          i = 0,
          o = t && t.match($);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      }
    }),
    (ht = {
      set: function(e, t, n) {
        return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = gt[t] || x.find.attr;
      gt[t] = function(e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return i || ((r = gt[s]), (gt[s] = o), (o = null != n(e, t, i) ? s : null), (gt[s] = r)), o;
      };
    });
  var mt = /^(?:input|select|textarea|button)$/i,
    vt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match($) || []).join(' ');
  }
  function bt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function wt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match($)) || [];
  }
  x.fn.extend({
    prop: function(e, t) {
      return B(this, x.prop, e, t, 1 < arguments.length);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[x.propFix[e] || e];
      });
    }
  }),
    x.extend({
      prop: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && x.isXMLDoc(e)) || (o = x.propHooks[(t = x.propFix[t] || t)]),
            void 0 !== n
              ? o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && 'get' in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = x.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href) ? 0 : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    h.optSelected ||
      (x.propHooks.selected = {
        get: function(e) {
          return null;
        },
        set: function(e) {}
      }),
    x.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function() {
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.fn.extend({
      addClass: function(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (g(e))
          return this.each(function(t) {
            x(this).addClass(e.call(this, t, bt(this)));
          });
        if ((t = wt(e)).length)
          for (; (n = this[l++]); )
            if (((o = bt(n)), (i = 1 === n.nodeType && ' ' + yt(o) + ' '))) {
              for (s = 0; (r = t[s++]); ) i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ');
              o !== (a = yt(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (g(e))
          return this.each(function(t) {
            x(this).removeClass(e.call(this, t, bt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = wt(e)).length)
          for (; (n = this[l++]); )
            if (((o = bt(n)), (i = 1 === n.nodeType && ' ' + yt(o) + ' '))) {
              for (s = 0; (r = t[s++]); ) for (; -1 < i.indexOf(' ' + r + ' '); ) i = i.replace(' ' + r + ' ', ' ');
              o !== (a = yt(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : g(e)
          ? this.each(function(n) {
              x(this).toggleClass(e.call(this, n, bt(this), t), t);
            })
          : this.each(function() {
              var t, o, r, s;
              if (i)
                for (o = 0, r = x(this), s = wt(e); (t = s[o++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && 'boolean' !== n) ||
                  ((t = bt(this)) && K.set(this, '__className__', t),
                  this.setAttribute &&
                    this.setAttribute('class', t || !1 === e ? '' : K.get(this, '__className__') || ''));
            });
      },
      hasClass: function(e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (' ' + yt(bt(n)) + ' ').indexOf(t)) return !0;
        return !1;
      }
    });
  var xt = /\r/g;
  x.fn.extend({
    val: function(e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = g(e)),
          this.each(function(n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, x(this).val()) : e)
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Array.isArray(o) &&
                  (o = x.map(o, function(e) {
                    return null == e ? '' : e + '';
                  })),
              ((t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, o, 'value')) ||
                (this.value = o));
          }))
        : o
        ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(o, 'value'))
          ? n
          : 'string' == typeof (n = o.value)
          ? n.replace(xt, '')
          : null == n
          ? ''
          : n
        : void 0;
    }
  }),
    x.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = x.find.attr(e, 'value');
            return null != t ? t : yt(x.text(e));
          }
        },
        select: {
          get: function(e) {
            var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              s = 'select-one' === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
            for (i = r < 0 ? l : s ? r : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = x(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function(e, t) {
            for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--; )
              ((i = o[s]).selected = -1 < x.inArray(x.valHooks.option.get(i), r)) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          }
        }
      }
    }),
    x.each(['radio', 'checkbox'], function() {
      (x.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < x.inArray(x(e).val(), t));
        }
      }),
        h.checkOn ||
          (x.valHooks[this].get = function(e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (h.focusin = 'onfocusin' in e);
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function(e) {
      e.stopPropagation();
    };
  x.extend(x.event, {
    trigger: function(t, n, o, r) {
      var s,
        a,
        l,
        c,
        u,
        f,
        p,
        h,
        v = [o || i],
        y = d.call(t, 'type') ? t.type : t,
        b = d.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((a = h = l = o = o || i),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !Tt.test(y + x.event.triggered) &&
          (-1 < y.indexOf('.') && ((y = (b = y.split('.')).shift()), b.sort()),
          (u = y.indexOf(':') < 0 && 'on' + y),
          ((t = t[x.expando] ? t : new x.Event(y, 'object' == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join('.')),
          (t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (t.result = void 0),
          t.target || (t.target = o),
          (n = null == n ? [t] : x.makeArray(n, [t])),
          (p = x.event.special[y] || {}),
          r || !p.trigger || !1 !== p.trigger.apply(o, n)))
      ) {
        if (!r && !p.noBubble && !m(o)) {
          for (Tt.test((c = p.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (l = a);
          l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }
        for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
          (h = a),
            (t.type = 1 < s ? c : p.bindType || y),
            (f = (K.get(a, 'events') || {})[t.type] && K.get(a, 'handle')) && f.apply(a, n),
            (f = u && a[u]) && f.apply && Y(a) && ((t.result = f.apply(a, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(v.pop(), n)) ||
            !Y(o) ||
            (u &&
              g(o[y]) &&
              !m(o) &&
              ((l = o[u]) && (o[u] = null),
              (x.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, Ct),
              o[y](),
              t.isPropagationStopped() && h.removeEventListener(y, Ct),
              (x.event.triggered = void 0),
              l && (o[u] = l))),
          t.result
        );
      }
    },
    simulate: function(e, t, n) {
      var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
      x.event.trigger(i, null, t);
    }
  }),
    x.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          x.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return x.event.trigger(e, t, n, !0);
      }
    }),
    h.focusin ||
      x.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
        var n = function(e) {
          x.event.simulate(t, e.target, x.event.fix(e));
        };
        x.event.special[t] = {
          setup: function() {
            var i = this.ownerDocument || this,
              o = K.access(i, t);
            o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1);
          },
          teardown: function() {
            var i = this.ownerDocument || this,
              o = K.access(i, t) - 1;
            o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t));
          }
        };
      });
  var St = e.location,
    _t = Date.now(),
    kt = /\?/;
  x.parseXML = function(t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (t) {
      n = void 0;
    }
    return (n && !n.getElementsByTagName('parsererror').length) || x.error('Invalid XML: ' + t), n;
  };
  var Et = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Ot(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      x.each(t, function(t, o) {
        n || Et.test(e) ? i(e, o) : Ot(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, i);
      });
    else if (n || 'object' !== b(t)) i(e, t);
    else for (o in t) Ot(e + '[' + o + ']', t[o], n, i);
  }
  (x.param = function(e, t) {
    var n,
      i = [],
      o = function(e, t) {
        var n = g(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
      x.each(e, function() {
        o(this.name, this.value);
      });
    else for (n in e) Ot(n, e[n], t, o);
    return i.join('&');
  }),
    x.fn.extend({
      serialize: function() {
        return x.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = x.prop(this, 'elements');
          return e ? x.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !x(this).is(':disabled') &&
              Nt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !fe.test(e))
            );
          })
          .map(function(e, t) {
            var n = x(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? x.map(n, function(e) {
                  return { name: t.name, value: e.replace(At, '\r\n') };
                })
              : { name: t.name, value: n.replace(At, '\r\n') };
          })
          .get();
      }
    });
  var jt = /%20/g,
    It = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    $t = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    qt = {},
    Mt = {},
    Rt = '*/'.concat('*'),
    Wt = i.createElement('a');
  function Ft(e) {
    return function(t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var i,
        o = 0,
        r = t.toLowerCase().match($) || [];
      if (g(n))
        for (; (i = r[o++]); )
          '+' === i[0] ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
    };
  }
  function Bt(e, t, n, i) {
    var o = {},
      r = e === Mt;
    function s(a) {
      var l;
      return (
        (o[a] = !0),
        x.each(e[a] || [], function(e, a) {
          var c = a(t, n, i);
          return 'string' != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!o['*'] && s('*'));
  }
  function zt(e, t) {
    var n,
      i,
      o = x.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && x.extend(!0, e, i), e;
  }
  (Wt.href = St.href),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: St.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Rt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': x.parseXML },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(e, t) {
        return t ? zt(zt(e, x.ajaxSettings), t) : zt(x.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(qt),
      ajaxTransport: Ft(Mt),
      ajax: function(t, n) {
        'object' == typeof t && ((n = t), (t = void 0));
        var o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          p,
          h = x.ajaxSetup({}, (n = n || {})),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? x(g) : x.event,
          v = x.Deferred(),
          y = x.Callbacks('once memory'),
          b = h.statusCode || {},
          w = {},
          T = {},
          C = 'canceled',
          S = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; (t = Ht.exec(s)); )
                    a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                t = a[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function() {
              return u ? s : null;
            },
            setRequestHeader: function(e, t) {
              return null == u && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (w[e] = t)), this;
            },
            overrideMimeType: function(e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (u) S.always(e[S.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function(e) {
              var t = e || C;
              return o && o.abort(t), _(0, t), this;
            }
          };
        if (
          (v.promise(S),
          (h.url = ((t || h.url || St.href) + '').replace(Pt, St.protocol + '//')),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || '*').toLowerCase().match($) || ['']),
          null == h.crossDomain)
        ) {
          c = i.createElement('a');
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain = Wt.protocol + '//' + Wt.host != c.protocol + '//' + c.host);
          } catch (t) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data && h.processData && 'string' != typeof h.data && (h.data = x.param(h.data, h.traditional)),
          Bt(qt, h, n, S),
          u)
        )
          return S;
        for (f in ((d = x.event && h.global) && 0 == x.active++ && x.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !$t.test(h.type)),
        (r = h.url.replace(It, '')),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') &&
            (h.data = h.data.replace(jt, '+'))
          : ((p = h.url.slice(r.length)),
            h.data &&
              (h.processData || 'string' == typeof h.data) &&
              ((r += (kt.test(r) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache && ((r = r.replace(Lt, '$1')), (p = (kt.test(r) ? '&' : '?') + '_=' + _t++ + p)),
            (h.url = r + p)),
        h.ifModified &&
          (x.lastModified[r] && S.setRequestHeader('If-Modified-Since', x.lastModified[r]),
          x.etag[r] && S.setRequestHeader('If-None-Match', x.etag[r])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          S.setRequestHeader('Content-Type', h.contentType),
        S.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
            : h.accepts['*']
        ),
        h.headers))
          S.setRequestHeader(f, h.headers[f]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u)) return S.abort();
        if (((C = 'abort'), y.add(h.complete), S.done(h.success), S.fail(h.error), (o = Bt(Mt, h, n, S)))) {
          if (((S.readyState = 1), d && m.trigger('ajaxSend', [S, h]), u)) return S;
          h.async &&
            0 < h.timeout &&
            (l = e.setTimeout(function() {
              S.abort('timeout');
            }, h.timeout));
          try {
            (u = !1), o.send(w, _);
          } catch (t) {
            if (u) throw t;
            _(-1, t);
          }
        } else _(-1, 'No Transport');
        function _(t, n, i, a) {
          var c,
            f,
            p,
            w,
            T,
            C = n;
          u ||
            ((u = !0),
            l && e.clearTimeout(l),
            (o = void 0),
            (s = a || ''),
            (S.readyState = 0 < t ? 4 : 0),
            (c = (200 <= t && t < 300) || 304 === t),
            i &&
              (w = (function(e, t, n) {
                for (var i, o, r, s, a = e.contents, l = e.dataTypes; '*' === l[0]; )
                  l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + ' ' + l[0]]) {
                      r = o;
                      break;
                    }
                    s || (s = o);
                  }
                  r = r || s;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(h, S, i)),
            (w = (function(e, t, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (r = u.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = u.shift()))
                )
                  if ('*' === r) r = l;
                  else if ('*' !== l && l !== r) {
                    if (!(s = c[l + ' ' + r] || c['* ' + r]))
                      for (o in c)
                        if ((a = o.split(' '))[1] === r && (s = c[l + ' ' + a[0]] || c['* ' + a[0]])) {
                          !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return { state: 'parsererror', error: s ? e : 'No conversion from ' + l + ' to ' + r };
                        }
                  }
              return { state: 'success', data: t };
            })(h, w, S, c)),
            c
              ? (h.ifModified &&
                  ((T = S.getResponseHeader('Last-Modified')) && (x.lastModified[r] = T),
                  (T = S.getResponseHeader('etag')) && (x.etag[r] = T)),
                204 === t || 'HEAD' === h.type
                  ? (C = 'nocontent')
                  : 304 === t
                  ? (C = 'notmodified')
                  : ((C = w.state), (f = w.data), (c = !(p = w.error))))
              : ((p = C), (!t && C) || ((C = 'error'), t < 0 && (t = 0))),
            (S.status = t),
            (S.statusText = (n || C) + ''),
            c ? v.resolveWith(g, [f, C, S]) : v.rejectWith(g, [S, C, p]),
            S.statusCode(b),
            (b = void 0),
            d && m.trigger(c ? 'ajaxSuccess' : 'ajaxError', [S, h, c ? f : p]),
            y.fireWith(g, [S, C]),
            d && (m.trigger('ajaxComplete', [S, h]), --x.active || x.event.trigger('ajaxStop')));
        }
        return S;
      },
      getJSON: function(e, t, n) {
        return x.get(e, t, n, 'json');
      },
      getScript: function(e, t) {
        return x.get(e, void 0, t, 'script');
      }
    }),
    x.each(['get', 'post'], function(e, t) {
      x[t] = function(e, n, i, o) {
        return (
          g(n) && ((o = o || i), (i = n), (n = void 0)),
          x.ajax(x.extend({ url: e, type: t, dataType: o, data: n, success: i }, x.isPlainObject(e) && e))
        );
      };
    }),
    (x._evalUrl = function(e, t) {
      return x.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function() {} },
        dataFilter: function(e) {
          x.globalEval(e, t);
        }
      });
    }),
    x.fn.extend({
      wrapAll: function(e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = x(e, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(e) {
        return g(e)
          ? this.each(function(t) {
              x(this).wrapInner(e.call(this, t));
            })
          : this.each(function() {
              var t = x(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function(e) {
        var t = g(e);
        return this.each(function(n) {
          x(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return (
          this.parent(e)
            .not('body')
            .each(function() {
              x(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (x.expr.pseudos.hidden = function(e) {
      return !x.expr.pseudos.visible(e);
    }),
    (x.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (x.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Xt = x.ajaxSettings.xhr();
  (h.cors = !!Xt && 'withCredentials' in Xt),
    (h.ajax = Xt = !!Xt),
    x.ajaxTransport(function(t) {
      var n, i;
      if (h.cors || (Xt && !t.crossDomain))
        return {
          send: function(o, r) {
            var s,
              a = t.xhr();
            if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
            t.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'),
            o))
              a.setRequestHeader(s, o[s]);
            (n = function(e) {
              return function() {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  'abort' === e
                    ? a.abort()
                    : 'error' === e
                    ? 'number' != typeof a.status
                      ? r(0, 'error')
                      : r(a.status, a.statusText)
                    : r(
                        Ut[a.status] || a.status,
                        a.statusText,
                        'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n('error')),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function() {
                    4 === a.readyState &&
                      e.setTimeout(function() {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (o) {
              if (n) throw o;
            }
          },
          abort: function() {
            n && n();
          }
        };
    }),
    x.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    x.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function(e) {
          return x.globalEval(e), e;
        }
      }
    }),
    x.ajaxPrefilter('script', function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    x.ajaxTransport('script', function(e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function(o, r) {
            (t = x('<script>')
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function(e) {
                  t.remove(), (n = null), e && r('error' === e.type ? 404 : 200, e.type);
                })
              )),
              i.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
    });
  var Vt,
    Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var e = Yt.pop() || x.expando + '_' + _t++;
      return (this[e] = !0), e;
    }
  }),
    x.ajaxPrefilter('json jsonp', function(t, n, i) {
      var o,
        r,
        s,
        a =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              Qt.test(t.data) &&
              'data');
      if (a || 'jsonp' === t.dataTypes[0])
        return (
          (o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Qt, '$1' + o))
            : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
          (t.converters['script json'] = function() {
            return s || x.error(o + ' was not called'), s[0];
          }),
          (t.dataTypes[0] = 'json'),
          (r = e[o]),
          (e[o] = function() {
            s = arguments;
          }),
          i.always(function() {
            void 0 === r ? x(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(o)),
              s && g(r) && r(s[0]),
              (s = r = void 0);
          }),
          'script'
        );
    }),
    (h.createHTMLDocument =
      (((Vt = i.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'),
      2 === Vt.childNodes.length)),
    (x.parseHTML = function(e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((o = (t = i.implementation.createHTMLDocument('')).createElement('base')).href = i.location.href),
                t.head.appendChild(o))
              : (t = i)),
          (s = !n && []),
          (r = D.exec(e))
            ? [t.createElement(r[1])]
            : ((r = xe([e], t, s)), s && s.length && x(s).remove(), x.merge([], r.childNodes)));
      var o, r, s;
    }),
    (x.fn.load = function(e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(' ');
      return (
        -1 < a && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
        g(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (o = 'POST'),
        0 < s.length &&
          x
            .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
            .done(function(e) {
              (r = arguments),
                s.html(
                  i
                    ? x('<div>')
                        .append(x.parseHTML(e))
                        .find(i)
                    : e
                );
            })
            .always(
              n &&
                function(e, t) {
                  s.each(function() {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    x.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {
      x.fn[t] = function(e) {
        return this.on(t, e);
      };
    }),
    (x.expr.pseudos.animated = function(e) {
      return x.grep(x.timers, function(t) {
        return e === t.elem;
      }).length;
    }),
    (x.offset = {
      setOffset: function(e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = x.css(e, 'position'),
          u = x(e),
          d = {};
        'static' === c && (e.style.position = 'relative'),
          (a = u.offset()),
          (r = x.css(e, 'top')),
          (l = x.css(e, 'left')),
          ('absolute' === c || 'fixed' === c) && -1 < (r + l).indexOf('auto')
            ? ((s = (i = u.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          g(t) && (t = t.call(e, n, x.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + o),
          'using' in t ? t.using.call(e, d) : u.css(d);
      }
    }),
    x.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function(t) {
                x.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ('fixed' === x.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement;
              e && (e === n.body || e === n.documentElement) && 'static' === x.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = x(e).offset()).top += x.css(e, 'borderTopWidth', !0)),
              (o.left += x.css(e, 'borderLeftWidth', !0)));
          }
          return { top: t.top - o.top - x.css(i, 'marginTop', !0), left: t.left - o.left - x.css(i, 'marginLeft', !0) };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && 'static' === x.css(e, 'position'); ) e = e.offsetParent;
          return e || oe;
        });
      }
    }),
    x.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(e, t) {
      var n = 'pageYOffset' === t;
      x.fn[e] = function(i) {
        return B(
          this,
          function(e, i, o) {
            var r;
            if ((m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === o)) return r ? r[t] : e[i];
            r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    x.each(['top', 'left'], function(e, t) {
      x.cssHooks[t] = ze(h.pixelPosition, function(e, n) {
        if (n) return (n = Be(e, t)), Re.test(n) ? x(e).position()[t] + 'px' : n;
      });
    }),
    x.each({ Height: 'height', Width: 'width' }, function(e, t) {
      x.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(n, i) {
        x.fn[i] = function(o, r) {
          var s = arguments.length && (n || 'boolean' != typeof o),
            a = n || (!0 === o || !0 === r ? 'margin' : 'border');
          return B(
            this,
            function(t, n, o) {
              var r;
              return m(t)
                ? 0 === i.indexOf('outer')
                  ? t['inner' + e]
                  : t.document.documentElement['client' + e]
                : 9 === t.nodeType
                ? ((r = t.documentElement),
                  Math.max(
                    t.body['scroll' + e],
                    r['scroll' + e],
                    t.body['offset' + e],
                    r['offset' + e],
                    r['client' + e]
                  ))
                : void 0 === o
                ? x.css(t, n, a)
                : x.style(t, n, o, a);
            },
            t,
            s ? o : void 0,
            s
          );
        };
      });
    }),
    x.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function(e, t) {
        x.fn[t] = function(e, n) {
          return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
        };
      }
    ),
    x.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    x.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      }
    }),
    (x.proxy = function(e, t) {
      var n, i, o;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (i = r.call(arguments, 2)),
          ((o = function() {
            return e.apply(t || this, i.concat(r.call(arguments)));
          }).guid = e.guid = e.guid || x.guid++),
          o
        );
    }),
    (x.holdReady = function(e) {
      e ? x.readyWait++ : x.ready(!0);
    }),
    (x.isArray = Array.isArray),
    (x.parseJSON = JSON.parse),
    (x.nodeName = A),
    (x.isFunction = g),
    (x.isWindow = m),
    (x.camelCase = V),
    (x.type = b),
    (x.now = Date.now),
    (x.isNumeric = function(e) {
      var t = x.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function() {
        return x;
      });
  var Kt = e.jQuery,
    Gt = e.$;
  return (
    (x.noConflict = function(t) {
      return e.$ === x && (e.$ = Gt), t && e.jQuery === x && (e.jQuery = Kt), x;
    }),
    t || (e.jQuery = e.$ = x),
    x
  );
}),
  (function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function() {
    'use strict';
    function e(e) {
      return e && '[object Function]' === {}.toString.call(e);
    }
    function t(e, t) {
      if (1 !== e.nodeType) return [];
      var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function n(e) {
      return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }
    function i(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;
        case '#document':
          return e.body;
      }
      var o = t(e);
      return /(auto|scroll|overlay)/.test(o.overflow + o.overflowY + o.overflowX) ? e : i(n(e));
    }
    function o(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    function r(e) {
      return 11 === e ? V : 10 === e ? Y : V || Y;
    }
    function s(e) {
      if (!e) return document.documentElement;
      for (var n = r(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling; )
        i = (e = e.nextElementSibling).offsetParent;
      var o = i && i.nodeName;
      return o && 'BODY' !== o && 'HTML' !== o
        ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(i.nodeName) && 'static' === t(i, 'position')
          ? s(i)
          : i
        : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
    }
    function a(e) {
      return null === e.parentNode ? e : a(e.parentNode);
    }
    function l(e, t) {
      if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        o = n ? t : e,
        r = document.createRange();
      r.setStart(i, 0), r.setEnd(o, 0);
      var c = r.commonAncestorContainer;
      if ((e !== c && t !== c) || i.contains(o))
        return (function(e) {
          var t = e.nodeName;
          return 'BODY' !== t && ('HTML' === t || s(e.firstElementChild) === e);
        })(c)
          ? c
          : s(c);
      var u = a(e);
      return u.host ? l(u.host, t) : l(e, a(t).host);
    }
    function c(e) {
      var t =
          'top' === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top')
            ? 'scrollTop'
            : 'scrollLeft',
        n = e.nodeName;
      return 'BODY' === n || 'HTML' === n
        ? (e.ownerDocument.scrollingElement || e.ownerDocument.documentElement)[t]
        : e[t];
    }
    function u(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = c(t, 'top'),
        o = c(t, 'left'),
        r = n ? -1 : 1;
      return (e.top += i * r), (e.bottom += i * r), (e.left += o * r), (e.right += o * r), e;
    }
    function d(e, t) {
      var n = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == n ? 'Right' : 'Bottom';
      return parseFloat(e['border' + n + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
    }
    function f(e, t, n, i) {
      return B(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        r(10)
          ? parseInt(n['offset' + e]) +
              parseInt(i['margin' + ('Height' === e ? 'Top' : 'Left')]) +
              parseInt(i['margin' + ('Height' === e ? 'Bottom' : 'Right')])
          : 0
      );
    }
    function p(e) {
      var t = e.body,
        n = e.documentElement,
        i = r(10) && getComputedStyle(n);
      return { height: f('Height', t, n, i), width: f('Width', t, n, i) };
    }
    function h(e) {
      return J({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function g(e) {
      var n = {};
      try {
        if (r(10)) {
          n = e.getBoundingClientRect();
          var i = c(e, 'top'),
            o = c(e, 'left');
          (n.top += i), (n.left += o), (n.bottom += i), (n.right += o);
        } else n = e.getBoundingClientRect();
      } catch (t) {}
      var s = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
        a = 'HTML' === e.nodeName ? p(e.ownerDocument) : {},
        l = e.offsetWidth - (a.width || e.clientWidth || s.width),
        u = e.offsetHeight - (a.height || e.clientHeight || s.height);
      if (l || u) {
        var f = t(e);
        (l -= d(f, 'x')), (u -= d(f, 'y')), (s.width -= l), (s.height -= u);
      }
      return h(s);
    }
    function m(e, n) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        s = r(10),
        a = 'HTML' === n.nodeName,
        l = g(e),
        c = g(n),
        d = i(e),
        f = t(n),
        p = parseFloat(f.borderTopWidth, 10),
        m = parseFloat(f.borderLeftWidth, 10);
      o && a && ((c.top = B(c.top, 0)), (c.left = B(c.left, 0)));
      var v = h({ top: l.top - c.top - p, left: l.left - c.left - m, width: l.width, height: l.height });
      if (((v.marginTop = 0), (v.marginLeft = 0), !s && a)) {
        var y = parseFloat(f.marginTop, 10),
          b = parseFloat(f.marginLeft, 10);
        (v.top -= p - y),
          (v.bottom -= p - y),
          (v.left -= m - b),
          (v.right -= m - b),
          (v.marginTop = y),
          (v.marginLeft = b);
      }
      return (s && !o ? n.contains(d) : n === d && 'BODY' !== d.nodeName) && (v = u(v, n)), v;
    }
    function v(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = e.ownerDocument.documentElement,
        i = m(e, n),
        o = B(n.clientWidth, window.innerWidth || 0),
        r = B(n.clientHeight, window.innerHeight || 0),
        s = t ? 0 : c(n),
        a = t ? 0 : c(n, 'left');
      return h({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r });
    }
    function y(e) {
      var i = e.nodeName;
      if ('BODY' === i || 'HTML' === i) return !1;
      if ('fixed' === t(e, 'position')) return !0;
      var o = n(e);
      return !!o && y(o);
    }
    function b(e) {
      if (!e || !e.parentElement || r()) return document.documentElement;
      for (var n = e.parentElement; n && 'none' === t(n, 'transform'); ) n = n.parentElement;
      return n || document.documentElement;
    }
    function w(e, t, r, s) {
      var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        c = { top: 0, left: 0 },
        u = a ? b(e) : l(e, o(t));
      if ('viewport' === s) c = v(u, a);
      else {
        var d;
        'scrollParent' === s
          ? 'BODY' === (d = i(n(t))).nodeName && (d = e.ownerDocument.documentElement)
          : (d = 'window' === s ? e.ownerDocument.documentElement : s);
        var f = m(d, u, a);
        if ('HTML' !== d.nodeName || y(u)) c = f;
        else {
          var h = p(e.ownerDocument),
            g = h.height,
            w = h.width;
          (c.top += f.top - f.marginTop),
            (c.bottom = g + f.top),
            (c.left += f.left - f.marginLeft),
            (c.right = w + f.left);
        }
      }
      var x = 'number' == typeof (r = r || 0);
      return (
        (c.left += x ? r : r.left || 0),
        (c.top += x ? r : r.top || 0),
        (c.right -= x ? r : r.right || 0),
        (c.bottom -= x ? r : r.bottom || 0),
        c
      );
    }
    function x(e) {
      return e.width * e.height;
    }
    function T(e, t, n, i, o) {
      var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf('auto')) return e;
      var s = w(n, i, r, o),
        a = {
          top: { width: s.width, height: t.top - s.top },
          right: { width: s.right - t.right, height: s.height },
          bottom: { width: s.width, height: s.bottom - t.bottom },
          left: { width: t.left - s.left, height: s.height }
        },
        l = Object.keys(a)
          .map(function(e) {
            return J({ key: e }, a[e], { area: x(a[e]) });
          })
          .sort(function(e, t) {
            return t.area - e.area;
          }),
        c = l.filter(function(e) {
          return e.width >= n.clientWidth && e.height >= n.clientHeight;
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        d = e.split('-')[1];
      return u + (d ? '-' + d : '');
    }
    function C(e, t, n) {
      var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return m(n, i ? b(t) : l(t, o(n)), i);
    }
    function S(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
      return { width: e.offsetWidth + i, height: e.offsetHeight + n };
    }
    function _(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return e.replace(/left|right|bottom|top/g, function(e) {
        return t[e];
      });
    }
    function k(e, t, n) {
      n = n.split('-')[0];
      var i = S(e),
        o = { width: i.width, height: i.height },
        r = -1 !== ['right', 'left'].indexOf(n),
        s = r ? 'top' : 'left',
        a = r ? 'left' : 'top',
        l = r ? 'height' : 'width',
        c = r ? 'width' : 'height';
      return (o[s] = t[s] + t[l] / 2 - i[l] / 2), (o[a] = n === a ? t[a] - i[c] : t[_(a)]), o;
    }
    function E(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function A(t, n, i) {
      return (
        (void 0 === i
          ? t
          : t.slice(
              0,
              (function(e, t, n) {
                if (Array.prototype.findIndex)
                  return e.findIndex(function(e) {
                    return e[t] === n;
                  });
                var i = E(e, function(e) {
                  return e[t] === n;
                });
                return e.indexOf(i);
              })(t, 'name', i)
            )
        ).forEach(function(t) {
          t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          var i = t.function || t.fn;
          t.enabled &&
            e(i) &&
            ((n.offsets.popper = h(n.offsets.popper)), (n.offsets.reference = h(n.offsets.reference)), (n = i(n, t)));
        }),
        n
      );
    }
    function D() {
      if (!this.state.isDestroyed) {
        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
        (e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed)),
          (e.placement = T(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = k(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
          (e = A(this.modifiers, e)),
          this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function N(e, t) {
      return e.some(function(e) {
        return e.enabled && e.name === t;
      });
    }
    function O(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0;
        i < t.length;
        i++
      ) {
        var o = t[i],
          r = o ? '' + o + n : e;
        if (void 0 !== document.body.style[r]) return r;
      }
      return null;
    }
    function j() {
      return (
        (this.state.isDestroyed = !0),
        N(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style.left = ''),
          (this.popper.style.right = ''),
          (this.popper.style.bottom = ''),
          (this.popper.style.willChange = ''),
          (this.popper.style[O('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function I(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function L() {
      this.state.eventsEnabled ||
        (this.state = (function(e, t, n, o) {
          (n.updateBound = o), I(e).addEventListener('resize', n.updateBound, { passive: !0 });
          var r = i(e);
          return (
            (function e(t, n, o, r) {
              var s = 'BODY' === t.nodeName,
                a = s ? t.ownerDocument.defaultView : t;
              a.addEventListener(n, o, { passive: !0 }), s || e(i(a.parentNode), n, o, r), r.push(a);
            })(r, 'scroll', n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        })(this.reference, 0, this.state, this.scheduleUpdate));
    }
    function H() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = (function(e, t) {
          return (
            I(e).removeEventListener('resize', t.updateBound),
            t.scrollParents.forEach(function(e) {
              e.removeEventListener('scroll', t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
          );
        })(this.reference, this.state)));
    }
    function $(e) {
      return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function P(e, t) {
      Object.keys(t).forEach(function(n) {
        var i = '';
        -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && $(t[n]) && (i = 'px'),
          (e.style[n] = t[n] + i);
      });
    }
    function q(e, t, n) {
      var i = E(e, function(e) {
          return e.name === t;
        }),
        o =
          !!i &&
          e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order;
          });
      if (!o) {
        var r = '`' + t + '`';
        console.warn(
          '`' +
            n +
            '` modifier is required by ' +
            r +
            ' modifier in order to work, be sure to include it before ' +
            r +
            '!'
        );
      }
      return o;
    }
    function M(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = te.indexOf(e),
        i = te.slice(n + 1).concat(te.slice(0, n));
      return t ? i.reverse() : i;
    }
    var R = Math.min,
      W = Math.floor,
      F = Math.round,
      B = Math.max,
      z = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator,
      U = (function() {
        for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
          if (z && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
        return 0;
      })(),
      X =
        z && window.Promise
          ? function(e) {
              var t = !1;
              return function() {
                t ||
                  ((t = !0),
                  window.Promise.resolve().then(function() {
                    (t = !1), e();
                  }));
              };
            }
          : function(e) {
              var t = !1;
              return function() {
                t ||
                  ((t = !0),
                  setTimeout(function() {
                    (t = !1), e();
                  }, U));
              };
            },
      V = z && !(!window.MSInputMethodContext || !document.documentMode),
      Y = z && /MSIE 10/.test(navigator.userAgent),
      Q = function(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      },
      K = (function() {
        function e(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      G = function(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      },
      J =
        Object.assign ||
        function(e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        },
      Z = z && /Firefox/i.test(navigator.userAgent),
      ee = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start'
      ],
      te = ee.slice(3),
      ne = (function() {
        function t(n, i) {
          var o = this,
            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          Q(this, t),
            (this.scheduleUpdate = function() {
              return requestAnimationFrame(o.update);
            }),
            (this.update = X(this.update.bind(this))),
            (this.options = J({}, t.Defaults, r)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(J({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
              o.options.modifiers[e] = J({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function(e) {
                return J({ name: e }, o.options.modifiers[e]);
              })
              .sort(function(e, t) {
                return e.order - t.order;
              })),
            this.modifiers.forEach(function(t) {
              t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state);
            }),
            this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(), (this.state.eventsEnabled = s);
        }
        return (
          K(t, [
            {
              key: 'update',
              value: function() {
                return D.call(this);
              }
            },
            {
              key: 'destroy',
              value: function() {
                return j.call(this);
              }
            },
            {
              key: 'enableEventListeners',
              value: function() {
                return L.call(this);
              }
            },
            {
              key: 'disableEventListeners',
              value: function() {
                return H.call(this);
              }
            }
          ]),
          t
        );
      })();
    return (
      (ne.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
      (ne.placements = ee),
      (ne.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function(e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = t.split('-')[1];
              if (i) {
                var o = e.offsets,
                  r = o.reference,
                  s = o.popper,
                  a = -1 !== ['bottom', 'top'].indexOf(n),
                  l = a ? 'left' : 'top',
                  c = a ? 'width' : 'height',
                  u = { start: G({}, l, r[l]), end: G({}, l, r[l] + r[c] - s[c]) };
                e.offsets.popper = J({}, s, u[i]);
              }
              return e;
            }
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function(e, t) {
              var n,
                i = t.offset,
                o = e.offsets,
                r = o.popper,
                s = o.reference,
                a = e.placement.split('-')[0];
              return (
                (n = $(+i)
                  ? [+i, 0]
                  : (function(e, t, n, i) {
                      var o = [0, 0],
                        r = -1 !== ['right', 'left'].indexOf(i),
                        s = e.split(/(\+|\-)/).map(function(e) {
                          return e.trim();
                        }),
                        a = s.indexOf(
                          E(s, function(e) {
                            return -1 !== e.search(/,|\s/);
                          })
                        );
                      s[a] &&
                        -1 === s[a].indexOf(',') &&
                        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
                      var l = /\s*,\s*|\s+/,
                        c =
                          -1 === a
                            ? [s]
                            : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
                      return (
                        (c = c.map(function(e, i) {
                          var o = (1 === i ? !r : r) ? 'height' : 'width',
                            s = !1;
                          return e
                            .reduce(function(e, t) {
                              return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
                                ? ((e[e.length - 1] = t), (s = !0), e)
                                : s
                                ? ((e[e.length - 1] += t), (s = !1), e)
                                : e.concat(t);
                            }, [])
                            .map(function(e) {
                              return (function(e, t, n, i) {
                                var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                  r = +o[1],
                                  s = o[2];
                                if (!r) return e;
                                if (0 === s.indexOf('%')) {
                                  var a;
                                  switch (s) {
                                    case '%p':
                                      a = n;
                                      break;
                                    case '%':
                                    case '%r':
                                    default:
                                      a = i;
                                  }
                                  return (h(a)[t] / 100) * r;
                                }
                                return 'vh' === s || 'vw' === s
                                  ? (('vh' === s
                                      ? B(document.documentElement.clientHeight, window.innerHeight || 0)
                                      : B(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                      100) *
                                      r
                                  : r;
                              })(e, o, t, n);
                            });
                        })).forEach(function(e, t) {
                          e.forEach(function(n, i) {
                            $(n) && (o[t] += n * ('-' === e[i - 1] ? -1 : 1));
                          });
                        }),
                        o
                      );
                    })(i, r, s, a)),
                'left' === a
                  ? ((r.top += n[0]), (r.left -= n[1]))
                  : 'right' === a
                  ? ((r.top += n[0]), (r.left += n[1]))
                  : 'top' === a
                  ? ((r.left += n[0]), (r.top -= n[1]))
                  : 'bottom' === a && ((r.left += n[0]), (r.top += n[1])),
                (e.popper = r),
                e
              );
            },
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function(e, t) {
              var n = t.boundariesElement || s(e.instance.popper);
              e.instance.reference === n && (n = s(n));
              var i = O('transform'),
                o = e.instance.popper.style,
                r = o.top,
                a = o.left,
                l = o[i];
              (o.top = ''), (o.left = ''), (o[i] = '');
              var c = w(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
              (o.top = r), (o.left = a), (o[i] = l), (t.boundaries = c);
              var u = e.offsets.popper,
                d = {
                  primary: function(e) {
                    var n = u[e];
                    return u[e] < c[e] && !t.escapeWithReference && (n = B(u[e], c[e])), G({}, e, n);
                  },
                  secondary: function(e) {
                    var n = 'right' === e ? 'left' : 'top',
                      i = u[n];
                    return (
                      u[e] > c[e] &&
                        !t.escapeWithReference &&
                        (i = R(u[n], c[e] - ('right' === e ? u.width : u.height))),
                      G({}, n, i)
                    );
                  }
                };
              return (
                t.priority.forEach(function(e) {
                  var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                  u = J({}, u, d[t](e));
                }),
                (e.offsets.popper = u),
                e
              );
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent'
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function(e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                o = e.placement.split('-')[0],
                r = W,
                s = -1 !== ['top', 'bottom'].indexOf(o),
                a = s ? 'right' : 'bottom',
                l = s ? 'left' : 'top',
                c = s ? 'width' : 'height';
              return (
                n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
                e
              );
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function(e, n) {
              var i;
              if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
              var o = n.element;
              if ('string' == typeof o) {
                if (!(o = e.instance.popper.querySelector(o))) return e;
              } else if (!e.instance.popper.contains(o))
                return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
              var r = e.placement.split('-')[0],
                s = e.offsets,
                a = s.popper,
                l = s.reference,
                c = -1 !== ['left', 'right'].indexOf(r),
                u = c ? 'height' : 'width',
                d = c ? 'Top' : 'Left',
                f = d.toLowerCase(),
                p = c ? 'left' : 'top',
                g = c ? 'bottom' : 'right',
                m = S(o)[u];
              l[g] - m < a[f] && (e.offsets.popper[f] -= a[f] - (l[g] - m)),
                l[f] + m > a[g] && (e.offsets.popper[f] += l[f] + m - a[g]),
                (e.offsets.popper = h(e.offsets.popper));
              var v = l[f] + l[u] / 2 - m / 2,
                y = t(e.instance.popper),
                b = parseFloat(y['margin' + d], 10),
                w = parseFloat(y['border' + d + 'Width'], 10),
                x = v - e.offsets.popper[f] - b - w;
              return (
                (x = B(R(a[u] - m, x), 0)),
                (e.arrowElement = o),
                (e.offsets.arrow = (G((i = {}), f, F(x)), G(i, p, ''), i)),
                e
              );
            },
            element: '[x-arrow]'
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function(e, t) {
              if (N(e.instance.modifiers, 'inner')) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                i = e.placement.split('-')[0],
                o = _(i),
                r = e.placement.split('-')[1] || '',
                s = [];
              switch (t.behavior) {
                case 'flip':
                  s = [i, o];
                  break;
                case 'clockwise':
                  s = M(i);
                  break;
                case 'counterclockwise':
                  s = M(i, !0);
                  break;
                default:
                  s = t.behavior;
              }
              return (
                s.forEach(function(a, l) {
                  if (i !== a || s.length === l + 1) return e;
                  (i = e.placement.split('-')[0]), (o = _(i));
                  var c = e.offsets.popper,
                    u = e.offsets.reference,
                    d = W,
                    f =
                      ('left' === i && d(c.right) > d(u.left)) ||
                      ('right' === i && d(c.left) < d(u.right)) ||
                      ('top' === i && d(c.bottom) > d(u.top)) ||
                      ('bottom' === i && d(c.top) < d(u.bottom)),
                    p = d(c.left) < d(n.left),
                    h = d(c.right) > d(n.right),
                    g = d(c.top) < d(n.top),
                    m = d(c.bottom) > d(n.bottom),
                    v = ('left' === i && p) || ('right' === i && h) || ('top' === i && g) || ('bottom' === i && m),
                    y = -1 !== ['top', 'bottom'].indexOf(i),
                    b =
                      (!!t.flipVariations &&
                        ((y && 'start' === r && p) ||
                          (y && 'end' === r && h) ||
                          (!y && 'start' === r && g) ||
                          (!y && 'end' === r && m))) ||
                      (!!t.flipVariationsByContent &&
                        ((y && 'start' === r && h) ||
                          (y && 'end' === r && p) ||
                          (!y && 'start' === r && m) ||
                          (!y && 'end' === r && g)));
                  (f || v || b) &&
                    ((e.flipped = !0),
                    (f || v) && (i = s[l + 1]),
                    b &&
                      (r = (function(e) {
                        return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
                      })(r)),
                    (e.placement = i + (r ? '-' + r : '')),
                    (e.offsets.popper = J(
                      {},
                      e.offsets.popper,
                      k(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = A(e.instance.modifiers, e, 'flip')));
                }),
                e
              );
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
            flipVariations: !1,
            flipVariationsByContent: !1
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function(e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = e.offsets,
                o = i.popper,
                r = i.reference,
                s = -1 !== ['left', 'right'].indexOf(n),
                a = -1 === ['top', 'left'].indexOf(n);
              return (
                (o[s ? 'left' : 'top'] = r[n] - (a ? o[s ? 'width' : 'height'] : 0)),
                (e.placement = _(t)),
                (e.offsets.popper = h(o)),
                e
              );
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function(e) {
              if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
              var t = e.offsets.reference,
                n = E(e.instance.modifiers, function(e) {
                  return 'preventOverflow' === e.name;
                }).boundaries;
              if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
              }
              return e;
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function(e, t) {
              var n = t.x,
                i = t.y,
                o = e.offsets.popper,
                r = E(e.instance.modifiers, function(e) {
                  return 'applyStyle' === e.name;
                }).gpuAcceleration;
              void 0 !== r &&
                console.warn(
                  'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                );
              var a,
                l,
                c = void 0 === r ? t.gpuAcceleration : r,
                u = s(e.instance.popper),
                d = g(u),
                f = { position: o.position },
                p = (function(e, t) {
                  var n = e.offsets,
                    i = n.popper,
                    o = F,
                    r = function(e) {
                      return e;
                    },
                    s = o(n.reference.width),
                    a = o(i.width),
                    l = -1 !== ['left', 'right'].indexOf(e.placement),
                    c = -1 !== e.placement.indexOf('-'),
                    u = t ? (l || c || s % 2 == a % 2 ? o : W) : r,
                    d = t ? o : r;
                  return {
                    left: u(1 == s % 2 && 1 == a % 2 && !c && t ? i.left - 1 : i.left),
                    top: d(i.top),
                    bottom: d(i.bottom),
                    right: u(i.right)
                  };
                })(e, 2 > window.devicePixelRatio || !Z),
                h = 'bottom' === n ? 'top' : 'bottom',
                m = 'right' === i ? 'left' : 'right',
                v = O('transform');
              if (
                ((l =
                  'bottom' == h ? ('HTML' === u.nodeName ? -u.clientHeight + p.bottom : -d.height + p.bottom) : p.top),
                (a = 'right' == m ? ('HTML' === u.nodeName ? -u.clientWidth + p.right : -d.width + p.right) : p.left),
                c && v)
              )
                (f[v] = 'translate3d(' + a + 'px, ' + l + 'px, 0)'),
                  (f[h] = 0),
                  (f[m] = 0),
                  (f.willChange = 'transform');
              else {
                var y = 'right' == m ? -1 : 1;
                (f[h] = l * ('bottom' == h ? -1 : 1)), (f[m] = a * y), (f.willChange = h + ', ' + m);
              }
              return (
                (e.attributes = J({}, { 'x-placement': e.placement }, e.attributes)),
                (e.styles = J({}, f, e.styles)),
                (e.arrowStyles = J({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right'
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function(e) {
              return (
                P(e.instance.popper, e.styles),
                (function(e, t) {
                  Object.keys(t).forEach(function(n) {
                    !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
                  });
                })(e.instance.popper, e.attributes),
                e.arrowElement && Object.keys(e.arrowStyles).length && P(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function(e, t, n, i, o) {
              var r = C(o, t, e, n.positionFixed),
                s = T(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
              return t.setAttribute('x-placement', s), P(t, { position: n.positionFixed ? 'fixed' : 'absolute' }), n;
            },
            gpuAcceleration: void 0
          }
        }
      }),
      ne
    );
  }),
  (function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? t(exports, require('jquery'), require('popper.js'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], t)
      : t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
  })(this, function(e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function o(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function r(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          i.forEach(function(t) {
            var i, o, r;
            (r = n[(o = t)]),
              o in (i = e)
                ? Object.defineProperty(i, o, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                : (i[o] = r);
          });
      }
      return e;
    }
    (t = t && t.hasOwnProperty('default') ? t.default : t), (n = n && n.hasOwnProperty('default') ? n.default : n);
    var s = 'transitionend',
      a = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function(e) {
          for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
          return e;
        },
        getSelectorFromElement: function(e) {
          var t = e.getAttribute('data-target');
          if (!t || '#' === t) {
            var n = e.getAttribute('href');
            t = n && '#' !== n ? n.trim() : '';
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function(e) {
          if (!e) return 0;
          var n = t(e).css('transition-duration'),
            i = t(e).css('transition-delay'),
            o = parseFloat(n),
            r = parseFloat(i);
          return o || r ? ((n = n.split(',')[0]), (i = i.split(',')[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
        },
        reflow: function(e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function(e) {
          t(e).trigger(s);
        },
        supportsTransitionEnd: function() {
          return Boolean(s);
        },
        isElement: function(e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function(e, t, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var o = n[i],
                r = t[i],
                s =
                  r && a.isElement(r)
                    ? 'element'
                    : {}.toString
                        .call(r)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              if (!new RegExp(o).test(s))
                throw new Error(
                  e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".'
                );
            }
        },
        findShadowRoot: function(e) {
          if (!document.documentElement.attachShadow) return null;
          if ('function' != typeof e.getRootNode)
            return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
      };
    (t.fn.emulateTransitionEnd = function(e) {
      var n = this,
        i = !1;
      return (
        t(this).one(a.TRANSITION_END, function() {
          i = !0;
        }),
        setTimeout(function() {
          i || a.triggerTransitionEnd(n);
        }, e),
        this
      );
    }),
      (t.event.special[a.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        }
      });
    var l = 'alert',
      c = 'bs.alert',
      u = '.' + c,
      d = t.fn[l],
      f = { CLOSE: 'close' + u, CLOSED: 'closed' + u, CLICK_DATA_API: 'click' + u + '.data-api' },
      p = (function() {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
          }),
          (n.dispose = function() {
            t.removeData(this._element, c), (this._element = null);
          }),
          (n._getRootElement = function(e) {
            var n = a.getSelectorFromElement(e),
              i = !1;
            return n && (i = document.querySelector(n)), i || (i = t(e).closest('.alert')[0]), i;
          }),
          (n._triggerCloseEvent = function(e) {
            var n = t.Event(f.CLOSE);
            return t(e).trigger(n), n;
          }),
          (n._removeElement = function(e) {
            var n = this;
            if ((t(e).removeClass('show'), t(e).hasClass('fade'))) {
              var i = a.getTransitionDurationFromElement(e);
              t(e)
                .one(a.TRANSITION_END, function(t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(i);
            } else this._destroyElement(e);
          }),
          (n._destroyElement = function(e) {
            t(e)
              .detach()
              .trigger(f.CLOSED)
              .remove();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                o = i.data(c);
              o || ((o = new e(this)), i.data(c, o)), 'close' === n && o[n](this);
            });
          }),
          (e._handleDismiss = function(e) {
            return function(t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            }
          ]),
          e
        );
      })();
    t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
      (t.fn[l] = p._jQueryInterface),
      (t.fn[l].Constructor = p),
      (t.fn[l].noConflict = function() {
        return (t.fn[l] = d), p._jQueryInterface;
      });
    var h = 'button',
      g = 'bs.button',
      m = '.' + g,
      v = '.data-api',
      y = t.fn[h],
      b = 'active',
      w = '[data-toggle^="button"]',
      x = '.btn',
      T = { CLICK_DATA_API: 'click' + m + v, FOCUS_BLUR_DATA_API: 'focus' + m + v + ' blur' + m + v },
      C = (function() {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.toggle = function() {
            var e = !0,
              n = !0,
              i = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
              var o = this._element.querySelector('input:not([type="hidden"])');
              if (o) {
                if ('radio' === o.type)
                  if (o.checked && this._element.classList.contains(b)) e = !1;
                  else {
                    var r = i.querySelector('.active');
                    r && t(r).removeClass(b);
                  }
                if (e) {
                  if (
                    o.hasAttribute('disabled') ||
                    i.hasAttribute('disabled') ||
                    o.classList.contains('disabled') ||
                    i.classList.contains('disabled')
                  )
                    return;
                  (o.checked = !this._element.classList.contains(b)), t(o).trigger('change');
                }
                o.focus(), (n = !1);
              }
            }
            n && this._element.setAttribute('aria-pressed', !this._element.classList.contains(b)),
              e && t(this._element).toggleClass(b);
          }),
          (n.dispose = function() {
            t.removeData(this._element, g), (this._element = null);
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data(g);
              i || ((i = new e(this)), t(this).data(g, i)), 'toggle' === n && i[n]();
            });
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            }
          ]),
          e
        );
      })();
    t(document)
      .on(T.CLICK_DATA_API, w, function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass('btn') || (n = t(n).closest(x)), C._jQueryInterface.call(t(n), 'toggle');
      })
      .on(T.FOCUS_BLUR_DATA_API, w, function(e) {
        var n = t(e.target).closest(x)[0];
        t(n).toggleClass('focus', /^focus(in)?$/.test(e.type));
      }),
      (t.fn[h] = C._jQueryInterface),
      (t.fn[h].Constructor = C),
      (t.fn[h].noConflict = function() {
        return (t.fn[h] = y), C._jQueryInterface;
      });
    var S = 'carousel',
      _ = 'bs.carousel',
      k = '.' + _,
      E = '.data-api',
      A = t.fn[S],
      D = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0 },
      N = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean'
      },
      O = 'next',
      j = 'prev',
      I = {
        SLIDE: 'slide' + k,
        SLID: 'slid' + k,
        KEYDOWN: 'keydown' + k,
        MOUSEENTER: 'mouseenter' + k,
        MOUSELEAVE: 'mouseleave' + k,
        TOUCHSTART: 'touchstart' + k,
        TOUCHMOVE: 'touchmove' + k,
        TOUCHEND: 'touchend' + k,
        POINTERDOWN: 'pointerdown' + k,
        POINTERUP: 'pointerup' + k,
        DRAG_START: 'dragstart' + k,
        LOAD_DATA_API: 'load' + k + E,
        CLICK_DATA_API: 'click' + k + E
      },
      L = 'active',
      H = '.active.carousel-item',
      $ = '.carousel-indicators',
      P = { TOUCH: 'touch', PEN: 'pen' },
      q = (function() {
        function e(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector($)),
            (this._touchSupported = 'ontouchstart' in document.documentElement || 0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
            this._addEventListeners();
        }
        var n = e.prototype;
        return (
          (n.next = function() {
            this._isSliding || this._slide(O);
          }),
          (n.nextWhenVisible = function() {
            !document.hidden &&
              t(this._element).is(':visible') &&
              'hidden' !== t(this._element).css('visibility') &&
              this.next();
          }),
          (n.prev = function() {
            this._isSliding || this._slide(j);
          }),
          (n.pause = function(e) {
            e || (this._isPaused = !0),
              this._element.querySelector('.carousel-item-next, .carousel-item-prev') &&
                (a.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (n.cycle = function(e) {
            e || (this._isPaused = !1),
              this._interval && (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                  this._config.interval
                ));
          }),
          (n.to = function(e) {
            var n = this;
            this._activeElement = this._element.querySelector(H);
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                t(this._element).one(I.SLID, function() {
                  return n.to(e);
                });
              else {
                if (i === e) return this.pause(), void this.cycle();
                this._slide(i < e ? O : j, this._items[e]);
              }
          }),
          (n.dispose = function() {
            t(this._element).off(k),
              t.removeData(this._element, _),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (n._getConfig = function(e) {
            return (e = r({}, D, e)), a.typeCheckConfig(S, e, N), e;
          }),
          (n._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              var t = e / this.touchDeltaX;
              0 < t && this.prev(), t < 0 && this.next();
            }
          }),
          (n._addEventListeners = function() {
            var e = this;
            this._config.keyboard &&
              t(this._element).on(I.KEYDOWN, function(t) {
                return e._keydown(t);
              }),
              'hover' === this._config.pause &&
                t(this._element)
                  .on(I.MOUSEENTER, function(t) {
                    return e.pause(t);
                  })
                  .on(I.MOUSELEAVE, function(t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (n._addTouchEventListeners = function() {
            var e = this;
            if (this._touchSupported) {
              var n = function(t) {
                  e._pointerEvent && P[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                i = function(t) {
                  e._pointerEvent &&
                    P[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    'hover' === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              t(this._element.querySelectorAll('.carousel-item img')).on(I.DRAG_START, function(e) {
                return e.preventDefault();
              }),
                this._pointerEvent
                  ? (t(this._element).on(I.POINTERDOWN, function(e) {
                      return n(e);
                    }),
                    t(this._element).on(I.POINTERUP, function(e) {
                      return i(e);
                    }),
                    this._element.classList.add('pointer-event'))
                  : (t(this._element).on(I.TOUCHSTART, function(e) {
                      return n(e);
                    }),
                    t(this._element).on(I.TOUCHMOVE, function(t) {
                      var n;
                      e.touchDeltaX =
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length
                          ? 0
                          : n.originalEvent.touches[0].clientX - e.touchStartX;
                    }),
                    t(this._element).on(I.TOUCHEND, function(e) {
                      return i(e);
                    }));
            }
          }),
          (n._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (n._getItemIndex = function(e) {
            return (
              (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll('.carousel-item')) : []),
              this._items.indexOf(e)
            );
          }),
          (n._getItemByDirection = function(e, t) {
            var n = e === O,
              i = e === j,
              o = this._getItemIndex(t);
            if (((i && 0 === o) || (n && o === this._items.length - 1)) && !this._config.wrap) return t;
            var r = (o + (e === j ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r];
          }),
          (n._triggerSlideEvent = function(e, n) {
            var i = this._getItemIndex(e),
              o = this._getItemIndex(this._element.querySelector(H)),
              r = t.Event(I.SLIDE, { relatedTarget: e, direction: n, from: o, to: i });
            return t(this._element).trigger(r), r;
          }),
          (n._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
              var n = [].slice.call(this._indicatorsElement.querySelectorAll('.active'));
              t(n).removeClass(L);
              var i = this._indicatorsElement.children[this._getItemIndex(e)];
              i && t(i).addClass(L);
            }
          }),
          (n._slide = function(e, n) {
            var i,
              o,
              r,
              s = this,
              l = this._element.querySelector(H),
              c = this._getItemIndex(l),
              u = n || (l && this._getItemByDirection(e, l)),
              d = this._getItemIndex(u),
              f = Boolean(this._interval);
            if (
              ((r =
                e === O
                  ? ((i = 'carousel-item-left'), (o = 'carousel-item-next'), 'left')
                  : ((i = 'carousel-item-right'), (o = 'carousel-item-prev'), 'right')),
              u && t(u).hasClass(L))
            )
              this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && l && u) {
              (this._isSliding = !0), f && this.pause(), this._setActiveIndicatorElement(u);
              var p = t.Event(I.SLID, { relatedTarget: u, direction: r, from: c, to: d });
              if (t(this._element).hasClass('slide')) {
                t(u).addClass(o), a.reflow(u), t(l).addClass(i), t(u).addClass(i);
                var h = parseInt(u.getAttribute('data-interval'), 10);
                this._config.interval = h
                  ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), h)
                  : this._config.defaultInterval || this._config.interval;
                var g = a.getTransitionDurationFromElement(l);
                t(l)
                  .one(a.TRANSITION_END, function() {
                    t(u)
                      .removeClass(i + ' ' + o)
                      .addClass(L),
                      t(l).removeClass(L + ' ' + o + ' ' + i),
                      (s._isSliding = !1),
                      setTimeout(function() {
                        return t(s._element).trigger(p);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else t(l).removeClass(L), t(u).addClass(L), (this._isSliding = !1), t(this._element).trigger(p);
              f && this.cycle();
            }
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data(_),
                o = r({}, D, t(this).data());
              'object' == typeof n && (o = r({}, o, n));
              var s = 'string' == typeof n ? n : o.slide;
              if ((i || ((i = new e(this, o)), t(this).data(_, i)), 'number' == typeof n)) i.to(n);
              else if ('string' == typeof s) {
                if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                i[s]();
              } else o.interval && o.ride && (i.pause(), i.cycle());
            });
          }),
          (e._dataApiClickHandler = function(n) {
            var i = a.getSelectorFromElement(this);
            if (i) {
              var o = t(i)[0];
              if (o && t(o).hasClass('carousel')) {
                var s = r({}, t(o).data(), t(this).data()),
                  l = this.getAttribute('data-slide-to');
                l && (s.interval = !1),
                  e._jQueryInterface.call(t(o), s),
                  l &&
                    t(o)
                      .data(_)
                      .to(l),
                  n.preventDefault();
              }
            }
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return D;
              }
            }
          ]),
          e
        );
      })();
    t(document).on(I.CLICK_DATA_API, '[data-slide], [data-slide-to]', q._dataApiClickHandler),
      t(window).on(I.LOAD_DATA_API, function() {
        for (
          var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length;
          n < i;
          n++
        ) {
          var o = t(e[n]);
          q._jQueryInterface.call(o, o.data());
        }
      }),
      (t.fn[S] = q._jQueryInterface),
      (t.fn[S].Constructor = q),
      (t.fn[S].noConflict = function() {
        return (t.fn[S] = A), q._jQueryInterface;
      });
    var M = 'collapse',
      R = 'bs.collapse',
      W = '.' + R,
      F = t.fn[M],
      B = { toggle: !0, parent: '' },
      z = { toggle: 'boolean', parent: '(string|element)' },
      U = {
        SHOW: 'show' + W,
        SHOWN: 'shown' + W,
        HIDE: 'hide' + W,
        HIDDEN: 'hidden' + W,
        CLICK_DATA_API: 'click' + W + '.data-api'
      },
      X = 'show',
      V = 'collapse',
      Y = 'collapsing',
      Q = 'collapsed',
      K = '[data-toggle="collapse"]',
      G = (function() {
        function e(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'
              )
            ));
          for (var n = [].slice.call(document.querySelectorAll(K)), i = 0, o = n.length; i < o; i++) {
            var r = n[i],
              s = a.getSelectorFromElement(r),
              l = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                return t === e;
              });
            null !== s && 0 < l.length && ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var n = e.prototype;
        return (
          (n.toggle = function() {
            t(this._element).hasClass(X) ? this.hide() : this.show();
          }),
          (n.show = function() {
            var n,
              i,
              o = this;
            if (
              !(
                this._isTransitioning ||
                t(this._element).hasClass(X) ||
                (this._parent &&
                  0 ===
                    (n = [].slice.call(this._parent.querySelectorAll('.show, .collapsing')).filter(function(e) {
                      return 'string' == typeof o._config.parent
                        ? e.getAttribute('data-parent') === o._config.parent
                        : e.classList.contains(V);
                    })).length &&
                  (n = null),
                n &&
                  (i = t(n)
                    .not(this._selector)
                    .data(R)) &&
                  i._isTransitioning)
              )
            ) {
              var r = t.Event(U.SHOW);
              if ((t(this._element).trigger(r), !r.isDefaultPrevented())) {
                n && (e._jQueryInterface.call(t(n).not(this._selector), 'hide'), i || t(n).data(R, null));
                var s = this._getDimension();
                t(this._element)
                  .removeClass(V)
                  .addClass(Y),
                  (this._element.style[s] = 0),
                  this._triggerArray.length &&
                    t(this._triggerArray)
                      .removeClass(Q)
                      .attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                var l = 'scroll' + (s[0].toUpperCase() + s.slice(1)),
                  c = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function() {
                    t(o._element)
                      .removeClass(Y)
                      .addClass(V)
                      .addClass(X),
                      (o._element.style[s] = ''),
                      o.setTransitioning(!1),
                      t(o._element).trigger(U.SHOWN);
                  })
                  .emulateTransitionEnd(c),
                  (this._element.style[s] = this._element[l] + 'px');
              }
            }
          }),
          (n.hide = function() {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(X)) {
              var n = t.Event(U.HIDE);
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                var i = this._getDimension();
                (this._element.style[i] = this._element.getBoundingClientRect()[i] + 'px'),
                  a.reflow(this._element),
                  t(this._element)
                    .addClass(Y)
                    .removeClass(V)
                    .removeClass(X);
                var o = this._triggerArray.length;
                if (0 < o)
                  for (var r = 0; r < o; r++) {
                    var s = this._triggerArray[r],
                      l = a.getSelectorFromElement(s);
                    null !== l &&
                      (t([].slice.call(document.querySelectorAll(l))).hasClass(X) ||
                        t(s)
                          .addClass(Q)
                          .attr('aria-expanded', !1));
                  }
                this.setTransitioning(!0), (this._element.style[i] = '');
                var c = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function() {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass(Y)
                        .addClass(V)
                        .trigger(U.HIDDEN);
                  })
                  .emulateTransitionEnd(c);
              }
            }
          }),
          (n.setTransitioning = function(e) {
            this._isTransitioning = e;
          }),
          (n.dispose = function() {
            t.removeData(this._element, R),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (n._getConfig = function(e) {
            return ((e = r({}, B, e)).toggle = Boolean(e.toggle)), a.typeCheckConfig(M, e, z), e;
          }),
          (n._getDimension = function() {
            return t(this._element).hasClass('width') ? 'width' : 'height';
          }),
          (n._getParent = function() {
            var n,
              i = this;
            a.isElement(this._config.parent)
              ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0]))
              : (n = document.querySelector(this._config.parent));
            var o = [].slice.call(
              n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]')
            );
            return (
              t(o).each(function(t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
              }),
              n
            );
          }),
          (n._addAriaAndCollapsedClass = function(e, n) {
            var i = t(e).hasClass(X);
            n.length &&
              t(n)
                .toggleClass(Q, !i)
                .attr('aria-expanded', i);
          }),
          (e._getTargetFromElement = function(e) {
            var t = a.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                o = i.data(R),
                s = r({}, B, i.data(), 'object' == typeof n && n ? n : {});
              if (
                (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
                o || ((o = new e(this, s)), i.data(R, o)),
                'string' == typeof n)
              ) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return B;
              }
            }
          ]),
          e
        );
      })();
    t(document).on(U.CLICK_DATA_API, K, function(e) {
      'A' === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
        i = a.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
      t(o).each(function() {
        var e = t(this),
          i = e.data(R) ? 'toggle' : n.data();
        G._jQueryInterface.call(e, i);
      });
    }),
      (t.fn[M] = G._jQueryInterface),
      (t.fn[M].Constructor = G),
      (t.fn[M].noConflict = function() {
        return (t.fn[M] = F), G._jQueryInterface;
      });
    var J = 'dropdown',
      Z = 'bs.dropdown',
      ee = '.' + Z,
      te = '.data-api',
      ne = t.fn[J],
      ie = new RegExp('38|40|27'),
      oe = {
        HIDE: 'hide' + ee,
        HIDDEN: 'hidden' + ee,
        SHOW: 'show' + ee,
        SHOWN: 'shown' + ee,
        CLICK: 'click' + ee,
        CLICK_DATA_API: 'click' + ee + te,
        KEYDOWN_DATA_API: 'keydown' + ee + te,
        KEYUP_DATA_API: 'keyup' + ee + te
      },
      re = 'disabled',
      se = 'show',
      ae = 'dropdown-menu-right',
      le = '[data-toggle="dropdown"]',
      ce = '.dropdown-menu',
      ue = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic' },
      de = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string'
      },
      fe = (function() {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var i = e.prototype;
        return (
          (i.toggle = function() {
            if (!this._element.disabled && !t(this._element).hasClass(re)) {
              var i = e._getParentFromElement(this._element),
                o = t(this._menu).hasClass(se);
              if ((e._clearMenus(), !o)) {
                var r = { relatedTarget: this._element },
                  s = t.Event(oe.SHOW, r);
                if ((t(i).trigger(s), !s.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === n)
                      throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    var l = this._element;
                    'parent' === this._config.reference
                      ? (l = i)
                      : a.isElement(this._config.reference) &&
                        ((l = this._config.reference),
                        void 0 !== this._config.reference.jquery && (l = this._config.reference[0])),
                      'scrollParent' !== this._config.boundary && t(i).addClass('position-static'),
                      (this._popper = new n(l, this._menu, this._getPopperConfig()));
                  }
                  'ontouchstart' in document.documentElement &&
                    0 === t(i).closest('.navbar-nav').length &&
                    t(document.body)
                      .children()
                      .on('mouseover', null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    t(this._menu).toggleClass(se),
                    t(i)
                      .toggleClass(se)
                      .trigger(t.Event(oe.SHOWN, r));
                }
              }
            }
          }),
          (i.show = function() {
            if (!(this._element.disabled || t(this._element).hasClass(re) || t(this._menu).hasClass(se))) {
              var n = { relatedTarget: this._element },
                i = t.Event(oe.SHOW, n),
                o = e._getParentFromElement(this._element);
              t(o).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(se),
                  t(o)
                    .toggleClass(se)
                    .trigger(t.Event(oe.SHOWN, n)));
            }
          }),
          (i.hide = function() {
            if (!this._element.disabled && !t(this._element).hasClass(re) && t(this._menu).hasClass(se)) {
              var n = { relatedTarget: this._element },
                i = t.Event(oe.HIDE, n),
                o = e._getParentFromElement(this._element);
              t(o).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(se),
                  t(o)
                    .toggleClass(se)
                    .trigger(t.Event(oe.HIDDEN, n)));
            }
          }),
          (i.dispose = function() {
            t.removeData(this._element, Z),
              t(this._element).off(ee),
              (this._element = null),
              (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (i.update = function() {
            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i._addEventListeners = function() {
            var e = this;
            t(this._element).on(oe.CLICK, function(t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (i._getConfig = function(e) {
            return (
              (e = r({}, this.constructor.Default, t(this._element).data(), e)),
              a.typeCheckConfig(J, e, this.constructor.DefaultType),
              e
            );
          }),
          (i._getMenuElement = function() {
            if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(ce));
            }
            return this._menu;
          }),
          (i._getPlacement = function() {
            var e = t(this._element.parentNode),
              n = 'bottom-start';
            return (
              e.hasClass('dropup')
                ? ((n = 'top-start'), t(this._menu).hasClass(ae) && (n = 'top-end'))
                : e.hasClass('dropright')
                ? (n = 'right-start')
                : e.hasClass('dropleft')
                ? (n = 'left-start')
                : t(this._menu).hasClass(ae) && (n = 'bottom-end'),
              n
            );
          }),
          (i._detectNavbar = function() {
            return 0 < t(this._element).closest('.navbar').length;
          }),
          (i._getOffset = function() {
            var e = this,
              t = {};
            return (
              'function' == typeof this._config.offset
                ? (t.fn = function(t) {
                    return (t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (i._getPopperConfig = function() {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary }
              }
            };
            return 'static' === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), e;
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data(Z);
              if (
                (i || ((i = new e(this, 'object' == typeof n ? n : null)), t(this).data(Z, i)), 'string' == typeof n)
              ) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          (e._clearMenus = function(n) {
            if (!n || (3 !== n.which && ('keyup' !== n.type || 9 === n.which)))
              for (var i = [].slice.call(document.querySelectorAll(le)), o = 0, r = i.length; o < r; o++) {
                var s = e._getParentFromElement(i[o]),
                  a = t(i[o]).data(Z),
                  l = { relatedTarget: i[o] };
                if ((n && 'click' === n.type && (l.clickEvent = n), a)) {
                  var c = a._menu;
                  if (
                    t(s).hasClass(se) &&
                    !(
                      n &&
                      (('click' === n.type && /input|textarea/i.test(n.target.tagName)) ||
                        ('keyup' === n.type && 9 === n.which)) &&
                      t.contains(s, n.target)
                    )
                  ) {
                    var u = t.Event(oe.HIDE, l);
                    t(s).trigger(u),
                      u.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          t(document.body)
                            .children()
                            .off('mouseover', null, t.noop),
                        i[o].setAttribute('aria-expanded', 'false'),
                        t(c).removeClass(se),
                        t(s)
                          .removeClass(se)
                          .trigger(t.Event(oe.HIDDEN, l)));
                  }
                }
              }
          }),
          (e._getParentFromElement = function(e) {
            var t,
              n = a.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function(n) {
            if (
              (/input|textarea/i.test(n.target.tagName)
                ? !(
                    32 === n.which ||
                    (27 !== n.which && ((40 !== n.which && 38 !== n.which) || t(n.target).closest(ce).length))
                  )
                : ie.test(n.which)) &&
              (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(re))
            ) {
              var i = e._getParentFromElement(this),
                o = t(i).hasClass(se);
              if (o && (!o || (27 !== n.which && 32 !== n.which))) {
                var r = [].slice.call(
                  i.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)')
                );
                if (0 !== r.length) {
                  var s = r.indexOf(n.target);
                  38 === n.which && 0 < s && s--,
                    40 === n.which && s < r.length - 1 && s++,
                    s < 0 && (s = 0),
                    r[s].focus();
                }
              } else {
                if (27 === n.which) {
                  var a = i.querySelector(le);
                  t(a).trigger('focus');
                }
                t(this).trigger('click');
              }
            }
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return ue;
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return de;
              }
            }
          ]),
          e
        );
      })();
    t(document)
      .on(oe.KEYDOWN_DATA_API, le, fe._dataApiKeydownHandler)
      .on(oe.KEYDOWN_DATA_API, ce, fe._dataApiKeydownHandler)
      .on(oe.CLICK_DATA_API + ' ' + oe.KEYUP_DATA_API, fe._clearMenus)
      .on(oe.CLICK_DATA_API, le, function(e) {
        e.preventDefault(), e.stopPropagation(), fe._jQueryInterface.call(t(this), 'toggle');
      })
      .on(oe.CLICK_DATA_API, '.dropdown form', function(e) {
        e.stopPropagation();
      }),
      (t.fn[J] = fe._jQueryInterface),
      (t.fn[J].Constructor = fe),
      (t.fn[J].noConflict = function() {
        return (t.fn[J] = ne), fe._jQueryInterface;
      });
    var pe = 'modal',
      he = 'bs.modal',
      ge = '.' + he,
      me = t.fn[pe],
      ve = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      ye = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' },
      be = {
        HIDE: 'hide' + ge,
        HIDDEN: 'hidden' + ge,
        SHOW: 'show' + ge,
        SHOWN: 'shown' + ge,
        FOCUSIN: 'focusin' + ge,
        RESIZE: 'resize' + ge,
        CLICK_DISMISS: 'click.dismiss' + ge,
        KEYDOWN_DISMISS: 'keydown.dismiss' + ge,
        MOUSEUP_DISMISS: 'mouseup.dismiss' + ge,
        MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ge,
        CLICK_DATA_API: 'click' + ge + '.data-api'
      },
      we = 'modal-open',
      xe = 'fade',
      Te = 'show',
      Ce = '.modal-dialog',
      Se = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      _e = '.sticky-top',
      ke = (function() {
        function e(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(Ce)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var n = e.prototype;
        return (
          (n.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (n.show = function(e) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
              t(this._element).hasClass(xe) && (this._isTransitioning = !0);
              var i = t.Event(be.SHOW, { relatedTarget: e });
              t(this._element).trigger(i),
                this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(this._element).on(be.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                    return n.hide(e);
                  }),
                  t(this._dialog).on(be.MOUSEDOWN_DISMISS, function() {
                    t(n._element).one(be.MOUSEUP_DISMISS, function(e) {
                      t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function() {
                    return n._showElement(e);
                  }));
            }
          }),
          (n.hide = function(e) {
            var n = this;
            if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
              var i = t.Event(be.HIDE);
              if ((t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                this._isShown = !1;
                var o = t(this._element).hasClass(xe);
                if (
                  (o && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(document).off(be.FOCUSIN),
                  t(this._element).removeClass(Te),
                  t(this._element).off(be.CLICK_DISMISS),
                  t(this._dialog).off(be.MOUSEDOWN_DISMISS),
                  o)
                ) {
                  var r = a.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(a.TRANSITION_END, function(e) {
                      return n._hideModal(e);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
              return t(e).off(ge);
            }),
              t(document).off(be.FOCUSIN),
              t.removeData(this._element, he),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (n.handleUpdate = function() {
            this._adjustDialog();
          }),
          (n._getConfig = function(e) {
            return (e = r({}, ve, e)), a.typeCheckConfig(pe, e, ye), e;
          }),
          (n._showElement = function(e) {
            var n = this,
              i = t(this._element).hasClass(xe);
            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              t(this._dialog).hasClass('modal-dialog-scrollable')
                ? (this._dialog.querySelector('.modal-body').scrollTop = 0)
                : (this._element.scrollTop = 0),
              i && a.reflow(this._element),
              t(this._element).addClass(Te),
              this._config.focus && this._enforceFocus();
            var o = t.Event(be.SHOWN, { relatedTarget: e }),
              r = function() {
                n._config.focus && n._element.focus(), (n._isTransitioning = !1), t(n._element).trigger(o);
              };
            if (i) {
              var s = a.getTransitionDurationFromElement(this._dialog);
              t(this._dialog)
                .one(a.TRANSITION_END, r)
                .emulateTransitionEnd(s);
            } else r();
          }),
          (n._enforceFocus = function() {
            var e = this;
            t(document)
              .off(be.FOCUSIN)
              .on(be.FOCUSIN, function(n) {
                document !== n.target &&
                  e._element !== n.target &&
                  0 === t(e._element).has(n.target).length &&
                  e._element.focus();
              });
          }),
          (n._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard
              ? t(this._element).on(be.KEYDOWN_DISMISS, function(t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || t(this._element).off(be.KEYDOWN_DISMISS);
          }),
          (n._setResizeEvent = function() {
            var e = this;
            this._isShown
              ? t(window).on(be.RESIZE, function(t) {
                  return e.handleUpdate(t);
                })
              : t(window).off(be.RESIZE);
          }),
          (n._hideModal = function() {
            var e = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              (this._isTransitioning = !1),
              this._showBackdrop(function() {
                t(document.body).removeClass(we),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  t(e._element).trigger(be.HIDDEN);
              });
          }),
          (n._removeBackdrop = function() {
            this._backdrop && (t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (n._showBackdrop = function(e) {
            var n = this,
              i = t(this._element).hasClass(xe) ? xe : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = 'modal-backdrop'),
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(be.CLICK_DISMISS, function(e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget && ('static' === n._config.backdrop ? n._element.focus() : n.hide());
                }),
                i && a.reflow(this._backdrop),
                t(this._backdrop).addClass(Te),
                !e)
              )
                return;
              if (!i) return void e();
              var o = a.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop)
                .one(a.TRANSITION_END, e)
                .emulateTransitionEnd(o);
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(Te);
              var r = function() {
                n._removeBackdrop(), e && e();
              };
              if (t(this._element).hasClass(xe)) {
                var s = a.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop)
                  .one(a.TRANSITION_END, r)
                  .emulateTransitionEnd(s);
              } else r();
            } else e && e();
          }),
          (n._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
          }),
          (n._resetAdjustments = function() {
            (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
          }),
          (n._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (n._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
              var n = [].slice.call(document.querySelectorAll(Se)),
                i = [].slice.call(document.querySelectorAll(_e));
              t(n).each(function(n, i) {
                var o = i.style.paddingRight,
                  r = t(i).css('padding-right');
                t(i)
                  .data('padding-right', o)
                  .css('padding-right', parseFloat(r) + e._scrollbarWidth + 'px');
              }),
                t(i).each(function(n, i) {
                  var o = i.style.marginRight,
                    r = t(i).css('margin-right');
                  t(i)
                    .data('margin-right', o)
                    .css('margin-right', parseFloat(r) - e._scrollbarWidth + 'px');
                });
              var o = document.body.style.paddingRight,
                r = t(document.body).css('padding-right');
              t(document.body)
                .data('padding-right', o)
                .css('padding-right', parseFloat(r) + this._scrollbarWidth + 'px');
            }
            t(document.body).addClass(we);
          }),
          (n._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(Se));
            t(e).each(function(e, n) {
              var i = t(n).data('padding-right');
              t(n).removeData('padding-right'), (n.style.paddingRight = i || '');
            });
            var n = [].slice.call(document.querySelectorAll('' + _e));
            t(n).each(function(e, n) {
              var i = t(n).data('margin-right');
              void 0 !== i &&
                t(n)
                  .css('margin-right', i)
                  .removeData('margin-right');
            });
            var i = t(document.body).data('padding-right');
            t(document.body).removeData('padding-right'), (document.body.style.paddingRight = i || '');
          }),
          (n._getScrollbarWidth = function() {
            var e = document.createElement('div');
            (e.className = 'modal-scrollbar-measure'), document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (e._jQueryInterface = function(n, i) {
            return this.each(function() {
              var o = t(this).data(he),
                s = r({}, ve, t(this).data(), 'object' == typeof n && n ? n : {});
              if ((o || ((o = new e(this, s)), t(this).data(he, o)), 'string' == typeof n)) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n](i);
              } else s.show && o.show(i);
            });
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return ve;
              }
            }
          ]),
          e
        );
      })();
    t(document).on(be.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
      var n,
        i = this,
        o = a.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var s = t(n).data(he) ? 'toggle' : r({}, t(n).data(), t(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || e.preventDefault();
      var l = t(n).one(be.SHOW, function(e) {
        e.isDefaultPrevented() ||
          l.one(be.HIDDEN, function() {
            t(i).is(':visible') && i.focus();
          });
      });
      ke._jQueryInterface.call(t(n), s, this);
    }),
      (t.fn[pe] = ke._jQueryInterface),
      (t.fn[pe].Constructor = ke),
      (t.fn[pe].noConflict = function() {
        return (t.fn[pe] = me), ke._jQueryInterface;
      });
    var Ee = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
      Ae = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Ne(e, t, n) {
      if (0 === e.length) return e;
      if (n && 'function' == typeof n) return n(e);
      for (
        var i = new window.DOMParser().parseFromString(e, 'text/html'),
          o = Object.keys(t),
          r = [].slice.call(i.body.querySelectorAll('*')),
          s = function(e, n) {
            var i = r[e],
              s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), 'continue';
            var a = [].slice.call(i.attributes),
              l = [].concat(t['*'] || [], t[s] || []);
            a.forEach(function(e) {
              (function(e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return -1 === Ee.indexOf(n) || Boolean(e.nodeValue.match(Ae) || e.nodeValue.match(De));
                for (
                  var i = t.filter(function(e) {
                      return e instanceof RegExp;
                    }),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                )
                  if (n.match(i[o])) return !0;
                return !1;
              })(e, l) || i.removeAttribute(e.nodeName);
            });
          },
          a = 0,
          l = r.length;
        a < l;
        a++
      )
        s(a);
      return i.body.innerHTML;
    }
    var Oe = 'tooltip',
      je = 'bs.tooltip',
      Ie = '.' + je,
      Le = t.fn[Oe],
      He = 'bs-tooltip',
      $e = new RegExp('(^|\\s)' + He + '\\S+', 'g'),
      Pe = ['sanitize', 'whiteList', 'sanitizeFn'],
      qe = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object'
      },
      Me = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
      Re = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        }
      },
      We = 'show',
      Fe = {
        HIDE: 'hide' + Ie,
        HIDDEN: 'hidden' + Ie,
        SHOW: 'show' + Ie,
        SHOWN: 'shown' + Ie,
        INSERTED: 'inserted' + Ie,
        CLICK: 'click' + Ie,
        FOCUSIN: 'focusin' + Ie,
        FOCUSOUT: 'focusout' + Ie,
        MOUSEENTER: 'mouseenter' + Ie,
        MOUSELEAVE: 'mouseleave' + Ie
      },
      Be = 'fade',
      ze = 'show',
      Ue = 'hover',
      Xe = 'focus',
      Ve = (function() {
        function e(e, t) {
          if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var i = e.prototype;
        return (
          (i.enable = function() {
            this._isEnabled = !0;
          }),
          (i.disable = function() {
            this._isEnabled = !1;
          }),
          (i.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
          }),
          (i.toggle = function(e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i ||
                  ((i = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                  t(e.currentTarget).data(n, i)),
                  (i._activeTrigger.click = !i._activeTrigger.click),
                  i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
              } else {
                if (t(this.getTipElement()).hasClass(ze)) return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (i.dispose = function() {
            clearTimeout(this._timeout),
              t.removeData(this.element, this.constructor.DATA_KEY),
              t(this.element).off(this.constructor.EVENT_KEY),
              t(this.element)
                .closest('.modal')
                .off('hide.bs.modal'),
              this.tip && t(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (i.show = function() {
            var e = this;
            if ('none' === t(this.element).css('display')) throw new Error('Please use show on visible elements');
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var o = a.findShadowRoot(this.element),
                r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !r) return;
              var s = this.getTipElement(),
                l = a.getUID(this.constructor.NAME);
              s.setAttribute('id', l),
                this.element.setAttribute('aria-describedby', l),
                this.setContent(),
                this.config.animation && t(s).addClass(Be);
              var c =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, s, this.element)
                    : this.config.placement,
                u = this._getAttachment(c);
              this.addAttachmentClass(u);
              var d = this._getContainer();
              t(s).data(this.constructor.DATA_KEY, this),
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(d),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(this.element, s, {
                  placement: u,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: '.arrow' },
                    preventOverflow: { boundariesElement: this.config.boundary }
                  },
                  onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t);
                  }
                })),
                t(s).addClass(ze),
                'ontouchstart' in document.documentElement &&
                  t(document.body)
                    .children()
                    .on('mouseover', null, t.noop);
              var f = function() {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                (e._hoverState = null),
                  t(e.element).trigger(e.constructor.Event.SHOWN),
                  'out' === n && e._leave(null, e);
              };
              if (t(this.tip).hasClass(Be)) {
                var p = a.getTransitionDurationFromElement(this.tip);
                t(this.tip)
                  .one(a.TRANSITION_END, f)
                  .emulateTransitionEnd(p);
              } else f();
            }
          }),
          (i.hide = function(e) {
            var n = this,
              i = this.getTipElement(),
              o = t.Event(this.constructor.Event.HIDE),
              r = function() {
                n._hoverState !== We && i.parentNode && i.parentNode.removeChild(i),
                  n._cleanTipClass(),
                  n.element.removeAttribute('aria-describedby'),
                  t(n.element).trigger(n.constructor.Event.HIDDEN),
                  null !== n._popper && n._popper.destroy(),
                  e && e();
              };
            if ((t(this.element).trigger(o), !o.isDefaultPrevented())) {
              if (
                (t(i).removeClass(ze),
                'ontouchstart' in document.documentElement &&
                  t(document.body)
                    .children()
                    .off('mouseover', null, t.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Xe] = !1),
                (this._activeTrigger[Ue] = !1),
                t(this.tip).hasClass(Be))
              ) {
                var s = a.getTransitionDurationFromElement(i);
                t(i)
                  .one(a.TRANSITION_END, r)
                  .emulateTransitionEnd(s);
              } else r();
              this._hoverState = '';
            }
          }),
          (i.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i.isWithContent = function() {
            return Boolean(this.getTitle());
          }),
          (i.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(He + '-' + e);
          }),
          (i.getTipElement = function() {
            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
          }),
          (i.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(t(e.querySelectorAll('.tooltip-inner')), this.getTitle()),
              t(e).removeClass(Be + ' ' + ze);
          }),
          (i.setElementContent = function(e, n) {
            'object' != typeof n || (!n.nodeType && !n.jquery)
              ? this.config.html
                ? (this.config.sanitize && (n = Ne(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n))
                : e.text(n)
              : this.config.html
              ? t(n)
                  .parent()
                  .is(e) || e.empty().append(n)
              : e.text(t(n).text());
          }),
          (i.getTitle = function() {
            var e = this.element.getAttribute('data-original-title');
            return (
              e ||
                (e = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
              e
            );
          }),
          (i._getOffset = function() {
            var e = this,
              t = {};
            return (
              'function' == typeof this.config.offset
                ? (t.fn = function(t) {
                    return (t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (i._getContainer = function() {
            return !1 === this.config.container
              ? document.body
              : a.isElement(this.config.container)
              ? t(this.config.container)
              : t(document).find(this.config.container);
          }),
          (i._getAttachment = function(e) {
            return Me[e.toUpperCase()];
          }),
          (i._setListeners = function() {
            var e = this;
            this.config.trigger.split(' ').forEach(function(n) {
              if ('click' === n)
                t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                  return e.toggle(t);
                });
              else if ('manual' !== n) {
                var i = n === Ue ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  o = n === Ue ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element)
                  .on(i, e.config.selector, function(t) {
                    return e._enter(t);
                  })
                  .on(o, e.config.selector, function(t) {
                    return e._leave(t);
                  });
              }
            }),
              t(this.element)
                .closest('.modal')
                .on('hide.bs.modal', function() {
                  e.element && e.hide();
                }),
              this.config.selector
                ? (this.config = r({}, this.config, { trigger: 'manual', selector: '' }))
                : this._fixTitle();
          }),
          (i._fixTitle = function() {
            var e = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || 'string' !== e) &&
              (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''),
              this.element.setAttribute('title', ''));
          }),
          (i._enter = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger['focusin' === e.type ? Xe : Ue] = !0),
              t(n.getTipElement()).hasClass(ze) || n._hoverState === We
                ? (n._hoverState = We)
                : (clearTimeout(n._timeout),
                  (n._hoverState = We),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function() {
                        n._hoverState === We && n.show();
                      }, n.config.delay.show))
                    : n.show());
          }),
          (i._leave = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger['focusout' === e.type ? Xe : Ue] = !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = 'out'),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function() {
                      'out' === n._hoverState && n.hide();
                    }, n.config.delay.hide))
                  : n.hide());
          }),
          (i._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (i._getConfig = function(e) {
            var n = t(this.element).data();
            return (
              Object.keys(n).forEach(function(e) {
                -1 !== Pe.indexOf(e) && delete n[e];
              }),
              'number' == typeof (e = r({}, this.constructor.Default, n, 'object' == typeof e && e ? e : {})).delay &&
                (e.delay = { show: e.delay, hide: e.delay }),
              'number' == typeof e.title && (e.title = e.title.toString()),
              'number' == typeof e.content && (e.content = e.content.toString()),
              a.typeCheckConfig(Oe, e, this.constructor.DefaultType),
              e.sanitize && (e.template = Ne(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (i._getDelegateConfig = function() {
            var e = {};
            if (this.config)
              for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e;
          }),
          (i._cleanTipClass = function() {
            var e = t(this.getTipElement()),
              n = e.attr('class').match($e);
            null !== n && n.length && e.removeClass(n.join(''));
          }),
          (i._handlePopperPlacementChange = function(e) {
            (this.tip = e.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (i._fixTransition = function() {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute('x-placement') &&
              (t(e).removeClass(Be),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = n));
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data(je),
                o = 'object' == typeof n && n;
              if (
                (i || !/dispose|hide/.test(n)) &&
                (i || ((i = new e(this, o)), t(this).data(je, i)), 'string' == typeof n)
              ) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return Re;
              }
            },
            {
              key: 'NAME',
              get: function() {
                return Oe;
              }
            },
            {
              key: 'DATA_KEY',
              get: function() {
                return je;
              }
            },
            {
              key: 'Event',
              get: function() {
                return Fe;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function() {
                return Ie;
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return qe;
              }
            }
          ]),
          e
        );
      })();
    (t.fn[Oe] = Ve._jQueryInterface),
      (t.fn[Oe].Constructor = Ve),
      (t.fn[Oe].noConflict = function() {
        return (t.fn[Oe] = Le), Ve._jQueryInterface;
      });
    var Ye = 'popover',
      Qe = 'bs.popover',
      Ke = '.' + Qe,
      Ge = t.fn[Ye],
      Je = 'bs-popover',
      Ze = new RegExp('(^|\\s)' + Je + '\\S+', 'g'),
      et = r({}, Ve.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      tt = r({}, Ve.DefaultType, { content: '(string|element|function)' }),
      nt = {
        HIDE: 'hide' + Ke,
        HIDDEN: 'hidden' + Ke,
        SHOW: 'show' + Ke,
        SHOWN: 'shown' + Ke,
        INSERTED: 'inserted' + Ke,
        CLICK: 'click' + Ke,
        FOCUSIN: 'focusin' + Ke,
        FOCUSOUT: 'focusout' + Ke,
        MOUSEENTER: 'mouseenter' + Ke,
        MOUSELEAVE: 'mouseleave' + Ke
      },
      it = (function(e) {
        var n, i;
        function r() {
          return e.apply(this, arguments) || this;
        }
        (i = e), ((n = r).prototype = Object.create(i.prototype)), ((n.prototype.constructor = n).__proto__ = i);
        var s = r.prototype;
        return (
          (s.isWithContent = function() {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(Je + '-' + e);
          }),
          (s.getTipElement = function() {
            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
          }),
          (s.setContent = function() {
            var e = t(this.getTipElement());
            this.setElementContent(e.find('.popover-header'), this.getTitle());
            var n = this._getContent();
            'function' == typeof n && (n = n.call(this.element)),
              this.setElementContent(e.find('.popover-body'), n),
              e.removeClass('fade show');
          }),
          (s._getContent = function() {
            return this.element.getAttribute('data-content') || this.config.content;
          }),
          (s._cleanTipClass = function() {
            var e = t(this.getTipElement()),
              n = e.attr('class').match(Ze);
            null !== n && 0 < n.length && e.removeClass(n.join(''));
          }),
          (r._jQueryInterface = function(e) {
            return this.each(function() {
              var n = t(this).data(Qe),
                i = 'object' == typeof e ? e : null;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new r(this, i)), t(this).data(Qe, n)), 'string' == typeof e)
              ) {
                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          o(r, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return et;
              }
            },
            {
              key: 'NAME',
              get: function() {
                return Ye;
              }
            },
            {
              key: 'DATA_KEY',
              get: function() {
                return Qe;
              }
            },
            {
              key: 'Event',
              get: function() {
                return nt;
              }
            },
            {
              key: 'EVENT_KEY',
              get: function() {
                return Ke;
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return tt;
              }
            }
          ]),
          r
        );
      })(Ve);
    (t.fn[Ye] = it._jQueryInterface),
      (t.fn[Ye].Constructor = it),
      (t.fn[Ye].noConflict = function() {
        return (t.fn[Ye] = Ge), it._jQueryInterface;
      });
    var ot = 'scrollspy',
      rt = 'bs.scrollspy',
      st = '.' + rt,
      at = t.fn[ot],
      lt = { offset: 10, method: 'auto', target: '' },
      ct = { offset: 'number', method: 'string', target: '(string|element)' },
      ut = { ACTIVATE: 'activate' + st, SCROLL: 'scroll' + st, LOAD_DATA_API: 'load' + st + '.data-api' },
      dt = 'active',
      ft = '.nav, .list-group',
      pt = '.nav-link',
      ht = '.list-group-item',
      gt = '.dropdown-item',
      mt = 'position',
      vt = (function() {
        function e(e, n) {
          var i = this;
          (this._element = e),
            (this._scrollElement = 'BODY' === e.tagName ? window : e),
            (this._config = this._getConfig(n)),
            (this._selector =
              this._config.target +
              ' ' +
              pt +
              ',' +
              this._config.target +
              ' ' +
              ht +
              ',' +
              this._config.target +
              ' ' +
              gt),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            t(this._scrollElement).on(ut.SCROLL, function(e) {
              return i._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var n = e.prototype;
        return (
          (n.refresh = function() {
            var e = this,
              n =
                'auto' === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? 'offset'
                    : mt
                  : this._config.method,
              i = n === mt ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function(e) {
                  var o,
                    r = a.getSelectorFromElement(e);
                  if ((r && (o = document.querySelector(r)), o)) {
                    var s = o.getBoundingClientRect();
                    if (s.width || s.height) return [t(o)[n]().top + i, r];
                  }
                  return null;
                })
                .filter(function(e) {
                  return e;
                })
                .sort(function(e, t) {
                  return e[0] - t[0];
                })
                .forEach(function(t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (n.dispose = function() {
            t.removeData(this._element, rt),
              t(this._scrollElement).off(st),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (n._getConfig = function(e) {
            if ('string' != typeof (e = r({}, lt, 'object' == typeof e && e ? e : {})).target) {
              var n = t(e.target).attr('id');
              n || ((n = a.getUID(ot)), t(e.target).attr('id', n)), (e.target = '#' + n);
            }
            return a.typeCheckConfig(ot, e, ct), e;
          }),
          (n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }),
          (n._getScrollHeight = function() {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            );
          }),
          (n._getOffsetHeight = function() {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (n._process = function() {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; )
                this._activeTarget !== this._targets[o] &&
                  e >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
            }
          }),
          (n._activate = function(e) {
            (this._activeTarget = e), this._clear();
            var n = this._selector.split(',').map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
              }),
              i = t([].slice.call(document.querySelectorAll(n.join(','))));
            i.hasClass('dropdown-item')
              ? (i
                  .closest('.dropdown')
                  .find('.dropdown-toggle')
                  .addClass(dt),
                i.addClass(dt))
              : (i.addClass(dt),
                i
                  .parents(ft)
                  .prev(pt + ', ' + ht)
                  .addClass(dt),
                i
                  .parents(ft)
                  .prev('.nav-item')
                  .children(pt)
                  .addClass(dt)),
              t(this._scrollElement).trigger(ut.ACTIVATE, { relatedTarget: e });
          }),
          (n._clear = function() {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function(e) {
                return e.classList.contains(dt);
              })
              .forEach(function(e) {
                return e.classList.remove(dt);
              });
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this).data(rt);
              if ((i || ((i = new e(this, 'object' == typeof n && n)), t(this).data(rt, i)), 'string' == typeof n)) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'Default',
              get: function() {
                return lt;
              }
            }
          ]),
          e
        );
      })();
    t(window).on(ut.LOAD_DATA_API, function() {
      for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--; ) {
        var i = t(e[n]);
        vt._jQueryInterface.call(i, i.data());
      }
    }),
      (t.fn[ot] = vt._jQueryInterface),
      (t.fn[ot].Constructor = vt),
      (t.fn[ot].noConflict = function() {
        return (t.fn[ot] = at), vt._jQueryInterface;
      });
    var yt = 'bs.tab',
      bt = '.' + yt,
      wt = t.fn.tab,
      xt = {
        HIDE: 'hide' + bt,
        HIDDEN: 'hidden' + bt,
        SHOW: 'show' + bt,
        SHOWN: 'shown' + bt,
        CLICK_DATA_API: 'click' + bt + '.data-api'
      },
      Tt = 'active',
      Ct = '.active',
      St = '> li > .active',
      _t = (function() {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.show = function() {
            var e = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  t(this._element).hasClass(Tt)) ||
                t(this._element).hasClass('disabled')
              )
            ) {
              var n,
                i,
                o = t(this._element).closest('.nav, .list-group')[0],
                r = a.getSelectorFromElement(this._element);
              if (o) {
                var s = 'UL' === o.nodeName || 'OL' === o.nodeName ? St : Ct;
                i = (i = t.makeArray(t(o).find(s)))[i.length - 1];
              }
              var l = t.Event(xt.HIDE, { relatedTarget: this._element }),
                c = t.Event(xt.SHOW, { relatedTarget: i });
              if (
                (i && t(i).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented())
              ) {
                r && (n = document.querySelector(r)), this._activate(this._element, o);
                var u = function() {
                  var n = t.Event(xt.HIDDEN, { relatedTarget: e._element }),
                    o = t.Event(xt.SHOWN, { relatedTarget: i });
                  t(i).trigger(n), t(e._element).trigger(o);
                };
                n ? this._activate(n, n.parentNode, u) : u();
              }
            }
          }),
          (n.dispose = function() {
            t.removeData(this._element, yt), (this._element = null);
          }),
          (n._activate = function(e, n, i) {
            var o = this,
              r = (!n || ('UL' !== n.nodeName && 'OL' !== n.nodeName) ? t(n).children(Ct) : t(n).find(St))[0],
              s = i && r && t(r).hasClass('fade'),
              l = function() {
                return o._transitionComplete(e, r, i);
              };
            if (r && s) {
              var c = a.getTransitionDurationFromElement(r);
              t(r)
                .removeClass('show')
                .one(a.TRANSITION_END, l)
                .emulateTransitionEnd(c);
            } else l();
          }),
          (n._transitionComplete = function(e, n, i) {
            if (n) {
              t(n).removeClass(Tt);
              var o = t(n.parentNode).find('> .dropdown-menu .active')[0];
              o && t(o).removeClass(Tt), 'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1);
            }
            if (
              (t(e).addClass(Tt),
              'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !0),
              a.reflow(e),
              e.classList.contains('fade') && e.classList.add('show'),
              e.parentNode && t(e.parentNode).hasClass('dropdown-menu'))
            ) {
              var r = t(e).closest('.dropdown')[0];
              if (r) {
                var s = [].slice.call(r.querySelectorAll('.dropdown-toggle'));
                t(s).addClass(Tt);
              }
              e.setAttribute('aria-expanded', !0);
            }
            i && i();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                o = i.data(yt);
              if ((o || ((o = new e(this)), i.data(yt, o)), 'string' == typeof n)) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            }
          ]),
          e
        );
      })();
    t(document).on(xt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
      e.preventDefault(), _t._jQueryInterface.call(t(this), 'show');
    }),
      (t.fn.tab = _t._jQueryInterface),
      (t.fn.tab.Constructor = _t),
      (t.fn.tab.noConflict = function() {
        return (t.fn.tab = wt), _t._jQueryInterface;
      });
    var kt = 'toast',
      Et = 'bs.toast',
      At = '.' + Et,
      Dt = t.fn[kt],
      Nt = {
        CLICK_DISMISS: 'click.dismiss' + At,
        HIDE: 'hide' + At,
        HIDDEN: 'hidden' + At,
        SHOW: 'show' + At,
        SHOWN: 'shown' + At
      },
      Ot = 'show',
      jt = 'showing',
      It = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
      Lt = { animation: !0, autohide: !0, delay: 500 },
      Ht = (function() {
        function e(e, t) {
          (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
        }
        var n = e.prototype;
        return (
          (n.show = function() {
            var e = this;
            t(this._element).trigger(Nt.SHOW), this._config.animation && this._element.classList.add('fade');
            var n = function() {
              e._element.classList.remove(jt),
                e._element.classList.add(Ot),
                t(e._element).trigger(Nt.SHOWN),
                e._config.autohide && e.hide();
            };
            if ((this._element.classList.remove('hide'), this._element.classList.add(jt), this._config.animation)) {
              var i = a.getTransitionDurationFromElement(this._element);
              t(this._element)
                .one(a.TRANSITION_END, n)
                .emulateTransitionEnd(i);
            } else n();
          }),
          (n.hide = function(e) {
            var n = this;
            this._element.classList.contains(Ot) &&
              (t(this._element).trigger(Nt.HIDE),
              e
                ? this._close()
                : (this._timeout = setTimeout(function() {
                    n._close();
                  }, this._config.delay)));
          }),
          (n.dispose = function() {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(Ot) && this._element.classList.remove(Ot),
              t(this._element).off(Nt.CLICK_DISMISS),
              t.removeData(this._element, Et),
              (this._element = null),
              (this._config = null);
          }),
          (n._getConfig = function(e) {
            return (
              (e = r({}, Lt, t(this._element).data(), 'object' == typeof e && e ? e : {})),
              a.typeCheckConfig(kt, e, this.constructor.DefaultType),
              e
            );
          }),
          (n._setListeners = function() {
            var e = this;
            t(this._element).on(Nt.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
              return e.hide(!0);
            });
          }),
          (n._close = function() {
            var e = this,
              n = function() {
                e._element.classList.add('hide'), t(e._element).trigger(Nt.HIDDEN);
              };
            if ((this._element.classList.remove(Ot), this._config.animation)) {
              var i = a.getTransitionDurationFromElement(this._element);
              t(this._element)
                .one(a.TRANSITION_END, n)
                .emulateTransitionEnd(i);
            } else n();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              var i = t(this),
                o = i.data(Et);
              if ((o || ((o = new e(this, 'object' == typeof n && n)), i.data(Et, o)), 'string' == typeof n)) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n](this);
              }
            });
          }),
          o(e, null, [
            {
              key: 'VERSION',
              get: function() {
                return '4.3.1';
              }
            },
            {
              key: 'DefaultType',
              get: function() {
                return It;
              }
            },
            {
              key: 'Default',
              get: function() {
                return Lt;
              }
            }
          ]),
          e
        );
      })();
    (t.fn[kt] = Ht._jQueryInterface),
      (t.fn[kt].Constructor = Ht),
      (t.fn[kt].noConflict = function() {
        return (t.fn[kt] = Dt), Ht._jQueryInterface;
      }),
      (function() {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = t.fn.jquery.split(' ')[0].split('.');
        if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0])
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      })(),
      (e.Util = a),
      (e.Alert = p),
      (e.Button = C),
      (e.Carousel = q),
      (e.Collapse = G),
      (e.Dropdown = fe),
      (e.Modal = ke),
      (e.Popover = it),
      (e.Scrollspy = vt),
      (e.Tab = _t),
      (e.Toast = Ht),
      (e.Tooltip = Ve),
      Object.defineProperty(e, '__esModule', { value: !0 });
  }),
  (function(e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function(e) {
              if (!e.document) throw new Error('jQuery requires a window with a document');
              return t(e);
            })
      : t(e);
  })('undefined' != typeof window ? window : this, function(e, t) {
    'use strict';
    var n = [],
      i = e.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      d = c.hasOwnProperty,
      f = d.toString,
      p = f.call(Object),
      h = {},
      g = function(e) {
        return 'function' == typeof e && 'number' != typeof e.nodeType;
      },
      m = function(e) {
        return null != e && e === e.window;
      },
      v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(e, t, n) {
      var o,
        r,
        s = (n = n || i).createElement('script');
      if (((s.text = e), t)) for (o in v) (r = t[o] || (t.getAttribute && t.getAttribute(o))) && s.setAttribute(o, r);
      n.head.appendChild(s).parentNode.removeChild(s);
    }
    function b(e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? c[u.call(e)] || 'object' : typeof e;
    }
    var w = '3.4.1',
      x = function(e, t) {
        return new x.fn.init(e, t);
      },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function C(e) {
      var t = !!e && 'length' in e && e.length,
        n = b(e);
      return !g(e) && !m(e) && ('array' === n || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e));
    }
    (x.fn = x.prototype = {
      jquery: w,
      constructor: x,
      length: 0,
      toArray: function() {
        return r.call(this);
      },
      get: function(e) {
        return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function(e) {
        var t = x.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function(e) {
        return x.each(this, e);
      },
      map: function(e) {
        return this.pushStack(
          x.map(this, function(t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function() {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice
    }),
      (x.extend = x.fn.extend = function() {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            'object' == typeof s || g(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = e[t]),
                '__proto__' !== t &&
                  s !== i &&
                  (c && i && (x.isPlainObject(i) || (o = Array.isArray(i)))
                    ? ((n = s[t]),
                      (r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}),
                      (o = !1),
                      (s[t] = x.extend(c, r, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
      x.extend({
        expando: 'jQuery' + (w + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
          var t, n;
          return !(
            !e ||
            '[object Object]' !== u.call(e) ||
            ((t = o(e)) && ('function' != typeof (n = d.call(t, 'constructor') && t.constructor) || f.call(n) !== p))
          );
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function(e, t) {
          y(e, { nonce: t && t.nonce });
        },
        each: function(e, t) {
          var n,
            i = 0;
          if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function(e) {
          return null == e ? '' : (e + '').replace(T, '');
        },
        makeArray: function(e, t) {
          var n = t || [];
          return null != e && (C(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : a.call(n, e)), n;
        },
        inArray: function(e, t, n) {
          return null == t ? -1 : l.call(t, e, n);
        },
        merge: function(e, t) {
          for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
          return (e.length = o), e;
        },
        grep: function(e, t, n) {
          for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
          return i;
        },
        map: function(e, t, n) {
          var i,
            o,
            r = 0,
            a = [];
          if (C(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
          else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
          return s.apply([], a);
        },
        guid: 1,
        support: h
      }),
      'function' == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
      x.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(e, t) {
        c['[object ' + t + ']'] = t.toLowerCase();
      });
    var S = (function(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        p,
        h,
        g,
        m,
        v,
        y,
        b,
        w = 'sizzle' + 1 * new Date(),
        x = e.document,
        T = 0,
        C = 0,
        S = le(),
        _ = le(),
        k = le(),
        E = le(),
        A = function(e, t) {
          return e === t && (d = !0), 0;
        },
        D = {}.hasOwnProperty,
        N = [],
        O = N.pop,
        j = N.push,
        I = N.push,
        L = N.slice,
        H = function(e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        $ =
          'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        P = '[\\x20\\t\\r\\n\\f]',
        q = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
        M =
          '\\[' +
          P +
          '*(' +
          q +
          ')(?:' +
          P +
          '*([*^$|!~]?=)' +
          P +
          '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
          q +
          '))|)' +
          P +
          '*\\]',
        R =
          ':(' +
          q +
          ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
          M +
          ')*)|.*)\\)|)',
        W = new RegExp(P + '+', 'g'),
        F = new RegExp('^' + P + '+|((?:^|[^\\\\])(?:\\\\.)*)' + P + '+$', 'g'),
        B = new RegExp('^' + P + '*,' + P + '*'),
        z = new RegExp('^' + P + '*([>+~]|' + P + ')' + P + '*'),
        U = new RegExp(P + '|>'),
        X = new RegExp(R),
        V = new RegExp('^' + q + '$'),
        Y = {
          ID: new RegExp('^#(' + q + ')'),
          CLASS: new RegExp('^\\.(' + q + ')'),
          TAG: new RegExp('^(' + q + '|[*])'),
          ATTR: new RegExp('^' + M),
          PSEUDO: new RegExp('^' + R),
          CHILD: new RegExp(
            '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
              P +
              '*(even|odd|(([+-]|)(\\d*)n|)' +
              P +
              '*(?:([+-]|)' +
              P +
              '*(\\d+)|))' +
              P +
              '*\\)|)',
            'i'
          ),
          bool: new RegExp('^(?:' + $ + ')$', 'i'),
          needsContext: new RegExp(
            '^' +
              P +
              '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
              P +
              '*((?:-\\d)?\\d*)' +
              P +
              '*\\)|)(?=[^-]|$)',
            'i'
          )
        },
        Q = /HTML$/i,
        K = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp('\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)', 'ig'),
        ne = function(e, t, n) {
          var i = '0x' + t - 65536;
          return i != i || n
            ? t
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        oe = function(e, t) {
          return t
            ? '\0' === e
              ? '\ufffd'
              : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
            : '\\' + e;
        },
        re = function() {
          f();
        },
        se = we(
          function(e) {
            return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
          },
          { dir: 'parentNode', next: 'legend' }
        );
      try {
        I.apply((N = L.call(x.childNodes)), x.childNodes);
      } catch (t) {
        I = {
          apply: N.length
            ? function(e, t) {
                j.apply(e, L.call(t));
              }
            : function(e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              }
        };
      }
      function ae(e, t, i, o) {
        var r,
          a,
          c,
          u,
          d,
          h,
          v,
          y = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
        if (((i = i || []), 'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return i;
        if (!o && ((t ? t.ownerDocument || t : x) !== p && f(t), (t = t || p), g)) {
          if (11 !== T && (d = Z.exec(e)))
            if ((r = d[1])) {
              if (9 === T) {
                if (!(c = t.getElementById(r))) return i;
                if (c.id === r) return i.push(c), i;
              } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i;
            } else {
              if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
              if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                return I.apply(i, t.getElementsByClassName(r)), i;
            }
          if (n.qsa && !E[e + ' '] && (!m || !m.test(e)) && (1 !== T || 'object' !== t.nodeName.toLowerCase())) {
            if (((v = e), (y = t), 1 === T && U.test(e))) {
              for (
                (u = t.getAttribute('id')) ? (u = u.replace(ie, oe)) : t.setAttribute('id', (u = w)),
                  a = (h = s(e)).length;
                a--;

              )
                h[a] = '#' + u + ' ' + be(h[a]);
              (v = h.join(',')), (y = (ee.test(e) && ve(t.parentNode)) || t);
            }
            try {
              return I.apply(i, y.querySelectorAll(v)), i;
            } catch (t) {
              E(e, !0);
            } finally {
              u === w && t.removeAttribute('id');
            }
          }
        }
        return l(e.replace(F, '$1'), t, i, o);
      }
      function le() {
        var e = [];
        return function t(n, o) {
          return e.push(n + ' ') > i.cacheLength && delete t[e.shift()], (t[n + ' '] = o);
        };
      }
      function ce(e) {
        return (e[w] = !0), e;
      }
      function ue(e) {
        var t = p.createElement('fieldset');
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function de(e, t) {
        for (var n = e.split('|'), o = n.length; o--; ) i.attrHandle[n[o]] = t;
      }
      function fe(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function pe(e) {
        return function(t) {
          return 'input' === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function he(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ('input' === n || 'button' === n) && t.type === e;
        };
      }
      function ge(e) {
        return function(t) {
          return 'form' in t
            ? t.parentNode && !1 === t.disabled
              ? 'label' in t
                ? 'label' in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
              : t.disabled === e
            : 'label' in t && t.disabled === e;
        };
      }
      function me(e) {
        return ce(function(t) {
          return (
            (t = +t),
            ce(function(n, i) {
              for (var o, r = e([], n.length, t), s = r.length; s--; ) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (t in ((n = ae.support = {}),
      (r = ae.isXML = function(e) {
        var t = (e.ownerDocument || e).documentElement;
        return !Q.test(e.namespaceURI || (t && t.nodeName) || 'HTML');
      }),
      (f = ae.setDocument = function(e) {
        var t,
          o,
          s = e ? e.ownerDocument || e : x;
        return (
          s !== p &&
            9 === s.nodeType &&
            s.documentElement &&
            ((h = (p = s).documentElement),
            (g = !r(p)),
            x !== p &&
              (o = p.defaultView) &&
              o.top !== o &&
              (o.addEventListener
                ? o.addEventListener('unload', re, !1)
                : o.attachEvent && o.attachEvent('onunload', re)),
            (n.attributes = ue(function(e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (n.getElementsByTagName = ue(function(e) {
              return e.appendChild(p.createComment('')), !e.getElementsByTagName('*').length;
            })),
            (n.getElementsByClassName = J.test(p.getElementsByClassName)),
            (n.getById = ue(function(e) {
              return (h.appendChild(e).id = w), !p.getElementsByName || !p.getElementsByName(w).length;
            })),
            n.getById
              ? ((i.filter.ID = function(e) {
                  var t = e.replace(te, ne);
                  return function(e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (i.find.ID = function(e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function(e) {
                  var t = e.replace(te, ne);
                  return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function(e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      i,
                      o,
                      r = t.getElementById(e);
                    if (r) {
                      if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                      for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                        if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function(e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function(e, t) {
                  var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                  if ('*' === e) {
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return r;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function(e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
              }),
            (v = []),
            (m = []),
            (n.qsa = J.test(p.querySelectorAll)) &&
              (ue(function(e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + P + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length || m.push('\\[' + P + '*(?:value|' + $ + ')'),
                  e.querySelectorAll('[id~=' + w + '-]').length || m.push('~='),
                  e.querySelectorAll(':checked').length || m.push(':checked'),
                  e.querySelectorAll('a#' + w + '+*').length || m.push('.#.+[+~]');
              }),
              ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && m.push('name' + P + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length && m.push(':enabled', ':disabled'),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length && m.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  m.push(',.*:');
              })),
            (n.matchesSelector = J.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ue(function(e) {
                (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), v.push('!=', R);
              }),
            (m = m.length && new RegExp(m.join('|'))),
            (v = v.length && new RegExp(v.join('|'))),
            (t = J.test(h.compareDocumentPosition)),
            (b =
              t || J.test(h.contains)
                ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function(e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (A = t
              ? function(e, t) {
                  if (e === t) return (d = !0), 0;
                  var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === p || (e.ownerDocument === x && b(x, e))
                        ? -1
                        : t === p || (t.ownerDocument === x && b(x, t))
                        ? 1
                        : u
                        ? H(u, e) - H(u, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function(e, t) {
                  if (e === t) return (d = !0), 0;
                  var n,
                    i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!o || !r) return e === p ? -1 : t === p ? 1 : o ? -1 : r ? 1 : u ? H(u, e) - H(u, t) : 0;
                  if (o === r) return fe(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i ? fe(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0;
                })),
          p
        );
      }),
      (ae.matches = function(e, t) {
        return ae(e, null, null, t);
      }),
      (ae.matchesSelector = function(e, t) {
        if (
          ((e.ownerDocument || e) !== p && f(e),
          n.matchesSelector && g && !E[t + ' '] && (!v || !v.test(t)) && (!m || !m.test(t)))
        )
          try {
            var i = y.call(e, t);
            if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
          } catch (e) {
            E(t, !0);
          }
        return 0 < ae(t, p, null, [e]).length;
      }),
      (ae.contains = function(e, t) {
        return (e.ownerDocument || e) !== p && f(e), b(e, t);
      }),
      (ae.attr = function(e, t) {
        (e.ownerDocument || e) !== p && f(e);
        var o = i.attrHandle[t.toLowerCase()],
          r = o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
        return void 0 !== r
          ? r
          : n.attributes || !g
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (ae.escape = function(e) {
        return (e + '').replace(ie, oe);
      }),
      (ae.error = function(e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (ae.uniqueSort = function(e) {
        var t,
          i = [],
          o = 0,
          r = 0;
        if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(A), d)) {
          for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
          for (; o--; ) e.splice(i[o], 1);
        }
        return (u = null), e;
      }),
      (o = ae.getText = function(e) {
        var t,
          n = '',
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += o(t);
        return n;
      }),
      ((i = ae.selectors = {
        cacheLength: 50,
        createPseudo: ce,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' }
        },
        preFilter: {
          ATTR: function(e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function(e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function(e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function() {
                  return !0;
                }
              : function(e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function(e) {
            var t = S[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + P + ')' + e + '(' + P + '|$)')) &&
                S(e, function(e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function(e, t, n) {
            return function(i) {
              var o = ae.attr(i, e);
              return null == o
                ? '!=' === t
                : !t ||
                    ((o += ''),
                    '=' === t
                      ? o === n
                      : '!=' === t
                      ? o !== n
                      : '^=' === t
                      ? n && 0 === o.indexOf(n)
                      : '*=' === t
                      ? n && -1 < o.indexOf(n)
                      : '$=' === t
                      ? n && o.slice(-n.length) === n
                      : '~=' === t
                      ? -1 < (' ' + o.replace(W, ' ') + ' ').indexOf(n)
                      : '|=' === t && (o === n || o.slice(0, n.length + 1) === n + '-'));
            };
          },
          CHILD: function(e, t, n, i, o) {
            var r = 'nth' !== e.slice(0, 3),
              s = 'last' !== e.slice(-4),
              a = 'of-type' === t;
            return 1 === i && 0 === o
              ? function(e) {
                  return !!e.parentNode;
                }
              : function(t, n, l) {
                  var c,
                    u,
                    d,
                    f,
                    p,
                    h,
                    g = r !== s ? 'nextSibling' : 'previousSibling',
                    m = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (m) {
                    if (r) {
                      for (; g; ) {
                        for (f = t; (f = f[g]); ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                        h = g = 'only' === e && !h && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                      for (
                        b =
                          (p =
                            (c =
                              (u = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                              T && c[1]) && c[2],
                          f = p && m.childNodes[p];
                        (f = (++p && f && f[g]) || (b = p = 0) || h.pop());

                      )
                        if (1 === f.nodeType && ++b && f === t) {
                          u[e] = [T, p, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = p =
                          (c =
                            (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                            T && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (f = (++p && f && f[g]) || (b = p = 0) || h.pop()) &&
                        ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) ||
                          !++b ||
                          (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, b]),
                          f !== t));

                      );
                    return (b -= o) === i || (b % i == 0 && 0 <= b / i);
                  }
                };
          },
          PSEUDO: function(e, t) {
            var n,
              o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error('unsupported pseudo: ' + e);
            return o[w]
              ? o(t)
              : 1 < o.length
              ? ((n = [e, e, '', t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function(e, n) {
                      for (var i, r = o(e, t), s = r.length; s--; ) e[(i = H(e, r[s]))] = !(n[i] = r[s]);
                    })
                  : function(e) {
                      return o(e, 0, n);
                    })
              : o;
          }
        },
        pseudos: {
          not: ce(function(e) {
            var t = [],
              n = [],
              i = a(e.replace(F, '$1'));
            return i[w]
              ? ce(function(e, t, n, o) {
                  for (var r, s = i(e, null, o, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
                })
              : function(e, o, r) {
                  return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                };
          }),
          has: ce(function(e) {
            return function(t) {
              return 0 < ae(e, t).length;
            };
          }),
          contains: ce(function(e) {
            return (
              (e = e.replace(te, ne)),
              function(t) {
                return -1 < (t.textContent || o(t)).indexOf(e);
              }
            );
          }),
          lang: ce(function(e) {
            return (
              V.test(e || '') || ae.error('unsupported lang: ' + e),
              (e = e.replace(te, ne).toLowerCase()),
              function(t) {
                var n;
                do {
                  if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function(e) {
            return e === h;
          },
          focus: function(e) {
            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
          },
          selected: function(e) {
            return !0 === e.selected;
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function(e) {
            return !i.pseudos.empty(e);
          },
          header: function(e) {
            return G.test(e.nodeName);
          },
          input: function(e) {
            return K.test(e.nodeName);
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function(e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
            );
          },
          first: me(function() {
            return [0];
          }),
          last: me(function(e, t) {
            return [t - 1];
          }),
          eq: me(function(e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: me(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: me(function(e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: me(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          })
        }
      }).pseudos.nth = i.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        i.pseudos[t] = pe(t);
      for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
      function ye() {}
      function be(e) {
        for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
        return i;
      }
      function we(e, t, n) {
        var i = t.dir,
          o = t.next,
          r = o || i,
          s = n && 'parentNode' === r,
          a = C++;
        return t.first
          ? function(t, n, o) {
              for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
              return !1;
            }
          : function(t, n, l) {
              var c,
                u,
                d,
                f = [T, a];
              if (l) {
                for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s)
                    if (
                      ((u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {})),
                      o && o === t.nodeName.toLowerCase())
                    )
                      t = t[i] || t;
                    else {
                      if ((c = u[r]) && c[0] === T && c[1] === a) return (f[2] = c[2]);
                      if (((u[r] = f)[2] = e(t, n, l))) return !0;
                    }
              return !1;
            };
      }
      function xe(e) {
        return 1 < e.length
          ? function(t, n, i) {
              for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function Te(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
          (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
        return s;
      }
      function Ce(e, t, n, i, o, r) {
        return (
          i && !i[w] && (i = Ce(i)),
          o && !o[w] && (o = Ce(o, r)),
          ce(function(r, s, a, l) {
            var c,
              u,
              d,
              f = [],
              p = [],
              h = s.length,
              g =
                r ||
                (function(e, t, n) {
                  for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                  return n;
                })(t || '*', a.nodeType ? [a] : a, []),
              m = !e || (!r && t) ? g : Te(g, f, e, a, l),
              v = n ? (o || (r ? e : h || i) ? [] : s) : m;
            if ((n && n(m, v, a, l), i))
              for (c = Te(v, p), i(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
            if (r) {
              if (o || e) {
                if (o) {
                  for (c = [], u = v.length; u--; ) (d = v[u]) && c.push((m[u] = d));
                  o(null, (v = []), c, l);
                }
                for (u = v.length; u--; ) (d = v[u]) && -1 < (c = o ? H(r, d) : f[u]) && (r[c] = !(s[c] = d));
              }
            } else (v = Te(v === s ? v.splice(h, v.length) : v)), o ? o(null, s, v, l) : I.apply(s, v);
          })
        );
      }
      function Se(e) {
        for (
          var t,
            n,
            o,
            r = e.length,
            s = i.relative[e[0].type],
            a = s || i.relative[' '],
            l = s ? 1 : 0,
            u = we(
              function(e) {
                return e === t;
              },
              a,
              !0
            ),
            d = we(
              function(e) {
                return -1 < H(t, e);
              },
              a,
              !0
            ),
            f = [
              function(e, n, i) {
                var o = (!s && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return (t = null), o;
              }
            ];
          l < r;
          l++
        )
          if ((n = i.relative[e[l].type])) f = [we(xe(f), n)];
          else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (o = ++l; o < r && !i.relative[e[o].type]; o++);
              return Ce(
                1 < l && xe(f),
                1 < l && be(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(F, '$1'),
                n,
                l < o && Se(e.slice(l, o)),
                o < r && Se((e = e.slice(o))),
                o < r && be(e)
              );
            }
            f.push(n);
          }
        return xe(f);
      }
      return (
        (ye.prototype = i.filters = i.pseudos),
        (i.setFilters = new ye()),
        (s = ae.tokenize = function(e, t) {
          var n,
            o,
            r,
            s,
            a,
            l,
            c,
            u = _[e + ' '];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a; ) {
            for (s in ((n && !(o = B.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
            (n = !1),
            (o = z.exec(a)) &&
              ((n = o.shift()), r.push({ value: n, type: o[0].replace(F, ' ') }), (a = a.slice(n.length))),
            i.filter))
              !(o = Y[s].exec(a)) ||
                (c[s] && !(o = c[s](o))) ||
                ((n = o.shift()), r.push({ value: n, type: s, matches: o }), (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? ae.error(e) : _(e, l).slice(0);
        }),
        (a = ae.compile = function(e, t) {
          var n,
            o,
            r,
            a,
            l,
            u,
            d = [],
            h = [],
            m = k[e + ' '];
          if (!m) {
            for (t || (t = s(e)), n = t.length; n--; ) (m = Se(t[n]))[w] ? d.push(m) : h.push(m);
            (m = k(
              e,
              ((o = h),
              (a = 0 < (r = d).length),
              (l = 0 < o.length),
              (u = function(e, t, n, s, u) {
                var d,
                  h,
                  m,
                  v = 0,
                  y = '0',
                  b = e && [],
                  w = [],
                  x = c,
                  C = e || (l && i.find.TAG('*', u)),
                  S = (T += null == x ? 1 : Math.random() || 0.1),
                  _ = C.length;
                for (u && (c = t === p || t || u); y !== _ && null != (d = C[y]); y++) {
                  if (l && d) {
                    for (h = 0, t || d.ownerDocument === p || (f(d), (n = !g)); (m = o[h++]); )
                      if (m(d, t || p, n)) {
                        s.push(d);
                        break;
                      }
                    u && (T = S);
                  }
                  a && ((d = !m && d) && v--, e && b.push(d));
                }
                if (((v += y), a && y !== v)) {
                  for (h = 0; (m = r[h++]); ) m(b, w, t, n);
                  if (e) {
                    if (0 < v) for (; y--; ) b[y] || w[y] || (w[y] = O.call(s));
                    w = Te(w);
                  }
                  I.apply(s, w), u && !e && 0 < w.length && 1 < v + r.length && ae.uniqueSort(s);
                }
                return u && ((T = S), (c = x)), b;
              }),
              a ? ce(u) : u)
            )).selector = e;
          }
          return m;
        }),
        (l = ae.select = function(e, t, n, o) {
          var r,
            l,
            c,
            u,
            d,
            f = 'function' == typeof e && e,
            p = !o && s((e = f.selector || e));
          if (((n = n || []), 1 === p.length)) {
            if (
              2 < (l = p[0] = p[0].slice(0)).length &&
              'ID' === (c = l[0]).type &&
              9 === t.nodeType &&
              g &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
              f && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && !i.relative[(u = (c = l[r]).type)]; )
              if (
                (d = i.find[u]) &&
                (o = d(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))
              ) {
                if ((l.splice(r, 1), !(e = o.length && be(l)))) return I.apply(n, o), n;
                break;
              }
          }
          return (f || a(e, p))(o, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
        }),
        (n.sortStable =
          w
            .split('')
            .sort(A)
            .join('') === w),
        (n.detectDuplicates = !!d),
        f(),
        (n.sortDetached = ue(function(e) {
          return 1 & e.compareDocumentPosition(p.createElement('fieldset'));
        })),
        ue(function(e) {
          return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
        }) ||
          de('type|href|height|width', function(e, t, n) {
            if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          ue(function(e) {
            return (
              (e.innerHTML = '<input/>'),
              e.firstChild.setAttribute('value', ''),
              '' === e.firstChild.getAttribute('value')
            );
          })) ||
          de('value', function(e, t, n) {
            if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        ue(function(e) {
          return null == e.getAttribute('disabled');
        }) ||
          de($, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
          }),
        ae
      );
    })(e);
    (x.find = S),
      (x.expr = S.selectors),
      (x.expr[':'] = x.expr.pseudos),
      (x.uniqueSort = x.unique = S.uniqueSort),
      (x.text = S.getText),
      (x.isXMLDoc = S.isXML),
      (x.contains = S.contains),
      (x.escapeSelector = S.escape);
    var _ = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (o && x(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      k = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      E = x.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function N(e, t, n) {
      return g(t)
        ? x.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
          })
        : t.nodeType
        ? x.grep(e, function(e) {
            return (e === t) !== n;
          })
        : 'string' != typeof t
        ? x.grep(e, function(e) {
            return -1 < l.call(t, e) !== n;
          })
        : x.filter(t, e, n);
    }
    (x.filter = function(e, t, n) {
      var i = t[0];
      return (
        n && (e = ':not(' + e + ')'),
        1 === t.length && 1 === i.nodeType
          ? x.find.matchesSelector(i, e)
            ? [i]
            : []
          : x.find.matches(
              e,
              x.grep(t, function(e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      x.fn.extend({
        find: function(e) {
          var t,
            n,
            i = this.length,
            o = this;
          if ('string' != typeof e)
            return this.pushStack(
              x(e).filter(function() {
                for (t = 0; t < i; t++) if (x.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
          return 1 < i ? x.uniqueSort(n) : n;
        },
        filter: function(e) {
          return this.pushStack(N(this, e || [], !1));
        },
        not: function(e) {
          return this.pushStack(N(this, e || [], !0));
        },
        is: function(e) {
          return !!N(this, 'string' == typeof e && E.test(e) ? x(e) : e || [], !1).length;
        }
      });
    var O,
      j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((x.fn.init = function(e, t, n) {
      var o, r;
      if (!e) return this;
      if (((n = n || O), 'string' == typeof e)) {
        if (
          !(o = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) ||
          (!o[1] && t)
        )
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (o[1]) {
          if (
            (x.merge(
              this,
              x.parseHTML(o[1], (t = t instanceof x ? t[0] : t) && t.nodeType ? t.ownerDocument || t : i, !0)
            ),
            D.test(o[1]) && x.isPlainObject(t))
          )
            for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
          return this;
        }
        return (r = i.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this;
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : g(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(x)
        : x.makeArray(e, this);
    }).prototype = x.fn),
      (O = x(i));
    var I = /^(?:parents|prev(?:Until|All))/,
      L = { children: !0, contents: !0, next: !0, prev: !0 };
    function H(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    x.fn.extend({
      has: function(e) {
        var t = x(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
        });
      },
      closest: function(e, t) {
        var n,
          i = 0,
          o = this.length,
          r = [],
          s = 'string' != typeof e && x(e);
        if (!E.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                r.push(n);
                break;
              }
        return this.pushStack(1 < r.length ? x.uniqueSort(r) : r);
      },
      index: function(e) {
        return e
          ? 'string' == typeof e
            ? l.call(x(e), this[0])
            : l.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function(e, t) {
        return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }),
      x.each(
        {
          parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function(e) {
            return _(e, 'parentNode');
          },
          parentsUntil: function(e, t, n) {
            return _(e, 'parentNode', n);
          },
          next: function(e) {
            return H(e, 'nextSibling');
          },
          prev: function(e) {
            return H(e, 'previousSibling');
          },
          nextAll: function(e) {
            return _(e, 'nextSibling');
          },
          prevAll: function(e) {
            return _(e, 'previousSibling');
          },
          nextUntil: function(e, t, n) {
            return _(e, 'nextSibling', n);
          },
          prevUntil: function(e, t, n) {
            return _(e, 'previousSibling', n);
          },
          siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e);
          },
          children: function(e) {
            return k(e.firstChild);
          },
          contents: function(e) {
            return void 0 !== e.contentDocument
              ? e.contentDocument
              : (A(e, 'template') && (e = e.content || e), x.merge([], e.childNodes));
          }
        },
        function(e, t) {
          x.fn[e] = function(n, i) {
            var o = x.map(this, t, n);
            return (
              'Until' !== e.slice(-5) && (i = n),
              i && 'string' == typeof i && (o = x.filter(i, o)),
              1 < this.length && (L[e] || x.uniqueSort(o), I.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var $ = /[^\x20\t\r\n\f]+/g;
    function P(e) {
      return e;
    }
    function q(e) {
      throw e;
    }
    function M(e, t, n, i) {
      var o;
      try {
        e && g((o = e.promise))
          ? o
              .call(e)
              .done(t)
              .fail(n)
          : e && g((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (x.Callbacks = function(e) {
      var t;
      e =
        'string' == typeof e
          ? ((t = {}),
            x.each(e.match($) || [], function(e, n) {
              t[n] = !0;
            }),
            t)
          : x.extend({}, e);
      var n,
        i,
        o,
        r,
        s = [],
        a = [],
        l = -1,
        c = function() {
          for (r = r || e.once, o = n = !0; a.length; l = -1)
            for (i = a.shift(); ++l < s.length; )
              !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
          e.memory || (i = !1), (n = !1), r && (s = i ? [] : '');
        },
        u = {
          add: function() {
            return (
              s &&
                (i && !n && ((l = s.length - 1), a.push(i)),
                (function t(n) {
                  x.each(n, function(n, i) {
                    g(i) ? (e.unique && u.has(i)) || s.push(i) : i && i.length && 'string' !== b(i) && t(i);
                  });
                })(arguments),
                i && !n && c()),
              this
            );
          },
          remove: function() {
            return (
              x.each(arguments, function(e, t) {
                for (var n; -1 < (n = x.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function(e) {
            return e ? -1 < x.inArray(e, s) : 0 < s.length;
          },
          empty: function() {
            return s && (s = []), this;
          },
          disable: function() {
            return (r = a = []), (s = i = ''), this;
          },
          disabled: function() {
            return !s;
          },
          lock: function() {
            return (r = a = []), i || n || (s = i = ''), this;
          },
          locked: function() {
            return !!r;
          },
          fireWith: function(e, t) {
            return r || ((t = [e, (t = t || []).slice ? t.slice() : t]), a.push(t), n || c()), this;
          },
          fire: function() {
            return u.fireWith(this, arguments), this;
          },
          fired: function() {
            return !!o;
          }
        };
      return u;
    }),
      x.extend({
        Deferred: function(t) {
          var n = [
              ['notify', 'progress', x.Callbacks('memory'), x.Callbacks('memory'), 2],
              ['resolve', 'done', x.Callbacks('once memory'), x.Callbacks('once memory'), 0, 'resolved'],
              ['reject', 'fail', x.Callbacks('once memory'), x.Callbacks('once memory'), 1, 'rejected']
            ],
            i = 'pending',
            o = {
              state: function() {
                return i;
              },
              always: function() {
                return r.done(arguments).fail(arguments), this;
              },
              catch: function(e) {
                return o.then(null, e);
              },
              pipe: function() {
                var e = arguments;
                return x
                  .Deferred(function(t) {
                    x.each(n, function(n, i) {
                      var o = g(e[i[4]]) && e[i[4]];
                      r[i[1]](function() {
                        var e = o && o.apply(this, arguments);
                        e && g(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[i[0] + 'With'](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              then: function(t, i, o) {
                var r = 0;
                function s(t, n, i, o) {
                  return function() {
                    var a = this,
                      l = arguments,
                      c = function() {
                        var e, c;
                        if (!(t < r)) {
                          if ((e = i.apply(a, l)) === n.promise()) throw new TypeError('Thenable self-resolution');
                          g((c = e && ('object' == typeof e || 'function' == typeof e) && e.then))
                            ? o
                              ? c.call(e, s(r, n, P, o), s(r, n, q, o))
                              : (r++, c.call(e, s(r, n, P, o), s(r, n, q, o), s(r, n, P, n.notifyWith)))
                            : (i !== P && ((a = void 0), (l = [e])), (o || n.resolveWith)(a, l));
                        }
                      },
                      u = o
                        ? c
                        : function() {
                            try {
                              c();
                            } catch (c) {
                              x.Deferred.exceptionHook && x.Deferred.exceptionHook(c, u.stackTrace),
                                r <= t + 1 && (i !== q && ((a = void 0), (l = [c])), n.rejectWith(a, l));
                            }
                          };
                    t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u));
                  };
                }
                return x
                  .Deferred(function(e) {
                    n[0][3].add(s(0, e, g(o) ? o : P, e.notifyWith)),
                      n[1][3].add(s(0, e, g(t) ? t : P)),
                      n[2][3].add(s(0, e, g(i) ? i : q));
                  })
                  .promise();
              },
              promise: function(e) {
                return null != e ? x.extend(e, o) : o;
              }
            },
            r = {};
          return (
            x.each(n, function(e, t) {
              var s = t[2],
                a = t[5];
              (o[t[1]] = s.add),
                a &&
                  s.add(
                    function() {
                      i = a;
                    },
                    n[3 - e][2].disable,
                    n[3 - e][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                s.add(t[3].fire),
                (r[t[0]] = function() {
                  return r[t[0] + 'With'](this === r ? void 0 : this, arguments), this;
                }),
                (r[t[0] + 'With'] = s.fireWith);
            }),
            o.promise(r),
            t && t.call(r, r),
            r
          );
        },
        when: function(e) {
          var t = arguments.length,
            n = t,
            i = Array(n),
            o = r.call(arguments),
            s = x.Deferred(),
            a = function(e) {
              return function(n) {
                (i[e] = this), (o[e] = 1 < arguments.length ? r.call(arguments) : n), --t || s.resolveWith(i, o);
              };
            };
          if (t <= 1 && (M(e, s.done(a(n)).resolve, s.reject, !t), 'pending' === s.state() || g(o[n] && o[n].then)))
            return s.then();
          for (; n--; ) M(o[n], a(n), s.reject);
          return s.promise();
        }
      });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (x.Deferred.exceptionHook = function(t, n) {
      e.console &&
        e.console.warn &&
        t &&
        R.test(t.name) &&
        e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
    }),
      (x.readyException = function(t) {
        e.setTimeout(function() {
          throw t;
        });
      });
    var W = x.Deferred();
    function F() {
      i.removeEventListener('DOMContentLoaded', F), e.removeEventListener('load', F), x.ready();
    }
    (x.fn.ready = function(e) {
      return (
        W.then(e).catch(function(e) {
          x.readyException(e);
        }),
        this
      );
    }),
      x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
          (!0 === e ? --x.readyWait : x.isReady) ||
            ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
            W.resolveWith(i, [x]);
        }
      }),
      (x.ready.then = W.then),
      'complete' === i.readyState || ('loading' !== i.readyState && !i.documentElement.doScroll)
        ? e.setTimeout(x.ready)
        : (i.addEventListener('DOMContentLoaded', F), e.addEventListener('load', F));
    var B = function(e, t, n, i, o, r, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ('object' === b(n)) for (a in ((o = !0), n)) B(e, t, a, n[a], !0, r, s);
        else if (
          void 0 !== i &&
          ((o = !0),
          g(i) || (s = !0),
          c &&
            (s
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function(e, t, n) {
                  return c.call(x(e), n);
                }))),
          t)
        )
          for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
      },
      z = /^-ms-/,
      U = /-([a-z])/g;
    function X(e, t) {
      return t.toUpperCase();
    }
    function V(e) {
      return e.replace(z, 'ms-').replace(U, X);
    }
    var Y = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
      this.expando = x.expando + Q.uid++;
    }
    (Q.uid = 1),
      (Q.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              Y(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
            t
          );
        },
        set: function(e, t, n) {
          var i,
            o = this.cache(e);
          if ('string' == typeof t) o[V(t)] = n;
          else for (i in t) o[V(i)] = t[i];
          return o;
        },
        get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
        },
        access: function(e, t, n) {
          return void 0 === t || (t && 'string' == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
          var n,
            i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match($) || []).length;
              for (; n--; ) delete i[t[n]];
            }
            (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !x.isEmptyObject(t);
        }
      });
    var K = new Q(),
      G = new Q(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;
    function ee(e, t, n) {
      var i, o;
      if (void 0 === n && 1 === e.nodeType)
        if (((i = 'data-' + t.replace(Z, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(i)))) {
          try {
            n =
              'true' === (o = n) ||
              ('false' !== o && ('null' === o ? null : o === +o + '' ? +o : J.test(o) ? JSON.parse(o) : o));
          } catch (e) {}
          G.set(e, t, n);
        } else n = void 0;
      return n;
    }
    x.extend({
      hasData: function(e) {
        return G.hasData(e) || K.hasData(e);
      },
      data: function(e, t, n) {
        return G.access(e, t, n);
      },
      removeData: function(e, t) {
        G.remove(e, t);
      },
      _data: function(e, t, n) {
        return K.access(e, t, n);
      },
      _removeData: function(e, t) {
        K.remove(e, t);
      }
    }),
      x.fn.extend({
        data: function(e, t) {
          var n,
            i,
            o,
            r = this[0],
            s = r && r.attributes;
          if (void 0 === e) {
            if (this.length && ((o = G.get(r)), 1 === r.nodeType && !K.get(r, 'hasDataAttrs'))) {
              for (n = s.length; n--; )
                s[n] && 0 === (i = s[n].name).indexOf('data-') && ((i = V(i.slice(5))), ee(r, i, o[i]));
              K.set(r, 'hasDataAttrs', !0);
            }
            return o;
          }
          return 'object' == typeof e
            ? this.each(function() {
                G.set(this, e);
              })
            : B(
                this,
                function(t) {
                  var n;
                  if (r && void 0 === t)
                    return void 0 !== (n = G.get(r, e)) ? n : void 0 !== (n = ee(r, e)) ? n : void 0;
                  this.each(function() {
                    G.set(this, e, t);
                  });
                },
                null,
                t,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function(e) {
          return this.each(function() {
            G.remove(this, e);
          });
        }
      }),
      x.extend({
        queue: function(e, t, n) {
          var i;
          if (e)
            return (
              (i = K.get(e, (t = (t || 'fx') + 'queue'))),
              n && (!i || Array.isArray(n) ? (i = K.access(e, t, x.makeArray(n))) : i.push(n)),
              i || []
            );
        },
        dequeue: function(e, t) {
          var n = x.queue(e, (t = t || 'fx')),
            i = n.length,
            o = n.shift(),
            r = x._queueHooks(e, t);
          'inprogress' === o && ((o = n.shift()), i--),
            o &&
              ('fx' === t && n.unshift('inprogress'),
              delete r.stop,
              o.call(
                e,
                function() {
                  x.dequeue(e, t);
                },
                r
              )),
            !i && r && r.empty.fire();
        },
        _queueHooks: function(e, t) {
          var n = t + 'queueHooks';
          return (
            K.get(e, n) ||
            K.access(e, n, {
              empty: x.Callbacks('once memory').add(function() {
                K.remove(e, [t + 'queue', n]);
              })
            })
          );
        }
      }),
      x.fn.extend({
        queue: function(e, t) {
          var n = 2;
          return (
            'string' != typeof e && ((t = e), (e = 'fx'), n--),
            arguments.length < n
              ? x.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function() {
                  var n = x.queue(this, e, t);
                  x._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && x.dequeue(this, e);
                })
          );
        },
        dequeue: function(e) {
          return this.each(function() {
            x.dequeue(this, e);
          });
        },
        clearQueue: function(e) {
          return this.queue(e || 'fx', []);
        },
        promise: function(e, t) {
          var n,
            i = 1,
            o = x.Deferred(),
            r = this,
            s = this.length,
            a = function() {
              --i || o.resolveWith(r, [r]);
            };
          for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; s--; )
            (n = K.get(r[s], e + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
          return a(), o.promise(t);
        }
      });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp('^(?:([+-])=|)(' + te + ')([a-z%]*)$', 'i'),
      ie = ['Top', 'Right', 'Bottom', 'Left'],
      oe = i.documentElement,
      re = function(e) {
        return x.contains(e.ownerDocument, e);
      },
      se = { composed: !0 };
    oe.getRootNode &&
      (re = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
      });
    var ae = function(e, t) {
        return (
          'none' === (e = t || e).style.display || ('' === e.style.display && re(e) && 'none' === x.css(e, 'display'))
        );
      },
      le = function(e, t, n, i) {
        var o,
          r,
          s = {};
        for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
        return o;
      };
    function ce(e, t, n, i) {
      var o,
        r,
        s = 20,
        a = i
          ? function() {
              return i.cur();
            }
          : function() {
              return x.css(e, t, '');
            },
        l = a(),
        c = (n && n[3]) || (x.cssNumber[t] ? '' : 'px'),
        u = e.nodeType && (x.cssNumber[t] || ('px' !== c && +l)) && ne.exec(x.css(e, t));
      if (u && u[3] !== c) {
        for (c = c || u[3], u = +(l /= 2) || 1; s--; )
          x.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (u /= r);
        x.style(e, t, (u *= 2) + c), (n = n || []);
      }
      return (
        n &&
          ((u = +u || +l || 0),
          (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = c), (i.start = u), (i.end = o))),
        o
      );
    }
    var ue = {};
    function de(e, t) {
      for (var n, i, o, r, s, a, l, c = [], u = 0, d = e.length; u < d; u++)
        (i = e[u]).style &&
          ((n = i.style.display),
          t
            ? ('none' === n && ((c[u] = K.get(i, 'display') || null), c[u] || (i.style.display = '')),
              '' === i.style.display &&
                ae(i) &&
                (c[u] =
                  ((l = s = r = void 0),
                  (s = (o = i).ownerDocument),
                  (l = ue[(a = o.nodeName)]) ||
                    ((r = s.body.appendChild(s.createElement(a))),
                    (l = x.css(r, 'display')),
                    r.parentNode.removeChild(r),
                    'none' === l && (l = 'block'),
                    (ue[a] = l)))))
            : 'none' !== n && ((c[u] = 'none'), K.set(i, 'display', n)));
      for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
      return e;
    }
    x.fn.extend({
      show: function() {
        return de(this, !0);
      },
      hide: function() {
        return de(this);
      },
      toggle: function(e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function() {
              ae(this) ? x(this).show() : x(this).hide();
            });
      }
    });
    var fe = /^(?:checkbox|radio)$/i,
      pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
        option: [1, "<select multiple='multiple'>", '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', '']
      };
    function me(e, t) {
      var n;
      return (
        (n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || '*')
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || '*')
            : []),
        void 0 === t || (t && A(e, t)) ? x.merge([e], n) : n
      );
    }
    function ve(e, t) {
      for (var n = 0, i = e.length; n < i; n++) K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
    }
    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
    var ye,
      be,
      we = /<|&#?\w+;/;
    function xe(e, t, n, i, o) {
      for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
        if ((r = e[p]) || 0 === r)
          if ('object' === b(r)) x.merge(f, r.nodeType ? [r] : r);
          else if (we.test(r)) {
            for (
              s = s || d.appendChild(t.createElement('div')),
                a = (pe.exec(r) || ['', ''])[1].toLowerCase(),
                s.innerHTML = (l = ge[a] || ge._default)[1] + x.htmlPrefilter(r) + l[2],
                u = l[0];
              u--;

            )
              s = s.lastChild;
            x.merge(f, s.childNodes), ((s = d.firstChild).textContent = '');
          } else f.push(t.createTextNode(r));
      for (d.textContent = '', p = 0; (r = f[p++]); )
        if (i && -1 < x.inArray(r, i)) o && o.push(r);
        else if (((c = re(r)), (s = me(d.appendChild(r), 'script')), c && ve(s), n))
          for (u = 0; (r = s[u++]); ) he.test(r.type || '') && n.push(r);
      return d;
    }
    (ye = i.createDocumentFragment().appendChild(i.createElement('div'))),
      (be = i.createElement('input')).setAttribute('type', 'radio'),
      be.setAttribute('checked', 'checked'),
      be.setAttribute('name', 't'),
      ye.appendChild(be),
      (h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ye.innerHTML = '<textarea>x</textarea>'),
      (h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
    var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Se = /^([^.]*)(?:\.(.+)|)/;
    function _e() {
      return !0;
    }
    function ke() {
      return !1;
    }
    function Ee(e, t) {
      return (
        (e ===
          (function() {
            try {
              return i.activeElement;
            } catch (e) {}
          })()) ==
        ('focus' === t)
      );
    }
    function Ae(e, t, n, i, o, r) {
      var s, a;
      if ('object' == typeof t) {
        for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t)) Ae(e, a, n, i, t[a], r);
        return e;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o && ('string' == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))),
        !1 === o)
      )
        o = ke;
      else if (!o) return e;
      return (
        1 === r &&
          ((s = o),
          ((o = function(e) {
            return x().off(e), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = x.guid++))),
        e.each(function() {
          x.event.add(this, t, o, i, n);
        })
      );
    }
    function De(e, t, n) {
      n
        ? (K.set(e, t, !1),
          x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
              var i,
                o,
                s = K.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                if (s.length) (x.event.special[t] || {}).delegateType && e.stopPropagation();
                else if (
                  ((s = r.call(arguments)),
                  K.set(this, t, s),
                  (i = n(this, t)),
                  this[t](),
                  s !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : (o = {}),
                  s !== o)
                )
                  return e.stopImmediatePropagation(), e.preventDefault(), o.value;
              } else
                s.length &&
                  (K.set(this, t, { value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this) }),
                  e.stopImmediatePropagation());
            }
          }))
        : void 0 === K.get(e, t) && x.event.add(e, t, _e);
    }
    (x.event = {
      global: {},
      add: function(e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          p,
          h,
          g,
          m = K.get(e);
        if (m)
          for (
            n.handler && ((n = (r = n).handler), (o = r.selector)),
              o && x.find.matchesSelector(oe, o),
              n.guid || (n.guid = x.guid++),
              (l = m.events) || (l = m.events = {}),
              (s = m.handle) ||
                (s = m.handle = function(t) {
                  return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0;
                }),
              c = (t = (t || '').match($) || ['']).length;
            c--;

          )
            (p = g = (a = Se.exec(t[c]) || [])[1]),
              (h = (a[2] || '').split('.').sort()),
              p &&
                ((d = x.event.special[p] || {}),
                (d = x.event.special[(p = (o ? d.delegateType : d.bindType) || p)] || {}),
                (u = x.extend(
                  {
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: h.join('.')
                  },
                  r
                )),
                (f = l[p]) ||
                  (((f = l[p] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(p, s))),
                d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                (x.event.global[p] = !0));
      },
      remove: function(e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          p,
          h,
          g,
          m = K.hasData(e) && K.get(e);
        if (m && (l = m.events)) {
          for (c = (t = (t || '').match($) || ['']).length; c--; )
            if (((p = g = (a = Se.exec(t[c]) || [])[1]), (h = (a[2] || '').split('.').sort()), p)) {
              for (
                d = x.event.special[p] || {},
                  f = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                  a = a[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                  s = r = f.length;
                r--;

              )
                (u = f[r]),
                  (!o && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (i && i !== u.selector && ('**' !== i || !u.selector)) ||
                    (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
              s &&
                !f.length &&
                ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || x.removeEvent(e, p, m.handle), delete l[p]);
            } else for (p in l) x.event.remove(e, p + t[c], n, i, !0);
          x.isEmptyObject(l) && K.remove(e, 'handle events');
        }
      },
      dispatch: function(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = x.event.fix(e),
          l = new Array(arguments.length),
          c = (K.get(this, 'events') || {})[a.type] || [],
          u = x.event.special[a.type] || {};
        for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (((a.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, a))) {
          for (s = x.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
            for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
              (a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace)) ||
                ((a.handleObj = r),
                (a.data = r.data),
                void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) &&
                  !1 === (a.result = i) &&
                  (a.preventDefault(), a.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function(e, t) {
        var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !('click' === e.type && 1 <= e.button))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
              for (r = [], s = {}, n = 0; n < l; n++)
                void 0 === s[(o = (i = t[n]).selector + ' ')] &&
                  (s[o] = i.needsContext ? -1 < x(o, this).index(c) : x.find(o, this, null, [c]).length),
                  s[o] && r.push(i);
              r.length && a.push({ elem: c, handlers: r });
            }
        return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
      },
      addProp: function(e, t) {
        Object.defineProperty(x.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: g(t)
            ? function() {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function() {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function(t) {
            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
          }
        });
      },
      fix: function(e) {
        return e[x.expando] ? e : new x.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function(e) {
            var t = this || e;
            return fe.test(t.type) && t.click && A(t, 'input') && De(t, 'click', _e), !1;
          },
          trigger: function(e) {
            var t = this || e;
            return fe.test(t.type) && t.click && A(t, 'input') && De(t, 'click'), !0;
          },
          _default: function(e) {
            var t = e.target;
            return (fe.test(t.type) && t.click && A(t, 'input') && K.get(t, 'click')) || A(t, 'a');
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }),
      (x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? _e : ke),
            (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && x.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[x.expando] = !0);
      }),
      (x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          (this.isDefaultPrevented = _e), e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          (this.isPropagationStopped = _e), e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = _e),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        }
      }),
      x.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && void 0 !== t && Ce.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          }
        },
        x.event.addProp
      ),
      x.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
        x.event.special[e] = {
          setup: function() {
            return De(this, e, Ee), !1;
          },
          trigger: function() {
            return De(this, e), !0;
          },
          delegateType: t
        };
      }),
      x.each(
        { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
        function(e, t) {
          x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
              var n,
                i = e.relatedTarget,
                o = e.handleObj;
              return (
                (i && (i === this || x.contains(this, i))) ||
                  ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
                n
              );
            }
          };
        }
      ),
      x.fn.extend({
        on: function(e, t, n, i) {
          return Ae(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
          return Ae(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              x(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
              this
            );
          if ('object' == typeof e) {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = ke),
            this.each(function() {
              x.event.remove(this, e, n, t);
            })
          );
        }
      });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Oe = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
      return (A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && x(e).children('tbody')[0]) || e;
    }
    function He(e) {
      return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
    }
    function $e(e) {
      return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
    }
    function Pe(e, t) {
      var n, i, o, r, s, a, l, c;
      if (1 === t.nodeType) {
        if (K.hasData(e) && ((r = K.access(e)), (s = K.set(t, r)), (c = r.events)))
          for (o in (delete s.handle, (s.events = {}), c))
            for (n = 0, i = c[o].length; n < i; n++) x.event.add(t, o, c[o][n]);
        G.hasData(e) && ((a = G.access(e)), (l = x.extend({}, a)), G.set(t, l));
      }
    }
    function qe(e, t, n, i) {
      t = s.apply([], t);
      var o,
        r,
        a,
        l,
        c,
        u,
        d = 0,
        f = e.length,
        p = f - 1,
        m = t[0],
        v = g(m);
      if (v || (1 < f && 'string' == typeof m && !h.checkClone && je.test(m)))
        return e.each(function(o) {
          var r = e.eq(o);
          v && (t[0] = m.call(this, o, r.html())), qe(r, t, n, i);
        });
      if (
        f &&
        ((r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)
      ) {
        for (l = (a = x.map(me(o, 'script'), He)).length; d < f; d++)
          (c = o), d !== p && ((c = x.clone(c, !0, !0)), l && x.merge(a, me(c, 'script'))), n.call(e[d], c, d);
        if (l)
          for (u = a[a.length - 1].ownerDocument, x.map(a, $e), d = 0; d < l; d++)
            he.test((c = a[d]).type || '') &&
              !K.access(c, 'globalEval') &&
              x.contains(u, c) &&
              (c.src && 'module' !== (c.type || '').toLowerCase()
                ? x._evalUrl && !c.noModule && x._evalUrl(c.src, { nonce: c.nonce || c.getAttribute('nonce') })
                : y(c.textContent.replace(Ie, ''), c, u));
      }
      return e;
    }
    function Me(e, t, n) {
      for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
        n || 1 !== i.nodeType || x.cleanData(me(i)),
          i.parentNode && (n && re(i) && ve(me(i, 'script')), i.parentNode.removeChild(i));
      return e;
    }
    x.extend({
      htmlPrefilter: function(e) {
        return e.replace(Ne, '<$1></$2>');
      },
      clone: function(e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          d = re(e);
        if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || x.isXMLDoc(e)))
          for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++)
            (a = r[i]),
              'input' === (c = (l = s[i]).nodeName.toLowerCase()) && fe.test(a.type)
                ? (l.checked = a.checked)
                : ('input' !== c && 'textarea' !== c) || (l.defaultValue = a.defaultValue);
        if (t)
          if (n) for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++) Pe(r[i], s[i]);
          else Pe(e, u);
        return 0 < (s = me(u, 'script')).length && ve(s, !d && me(e, 'script')), u;
      },
      cleanData: function(e) {
        for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
          if (Y(n)) {
            if ((t = n[K.expando])) {
              if (t.events) for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
              n[K.expando] = void 0;
            }
            n[G.expando] && (n[G.expando] = void 0);
          }
      }
    }),
      x.fn.extend({
        detach: function(e) {
          return Me(this, e, !0);
        },
        remove: function(e) {
          return Me(this, e);
        },
        text: function(e) {
          return B(
            this,
            function(e) {
              return void 0 === e
                ? x.text(this)
                : this.empty().each(function() {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function() {
          return qe(this, arguments, function(e) {
            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
          });
        },
        prepend: function() {
          return qe(this, arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Le(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function() {
          return qe(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function() {
          return qe(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (x.cleanData(me(e, !1)), (e.textContent = ''));
          return this;
        },
        clone: function(e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function() {
              return x.clone(this, e, t);
            })
          );
        },
        html: function(e) {
          return B(
            this,
            function(e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ('string' == typeof e && !Oe.test(e) && !ge[(pe.exec(e) || ['', ''])[1].toLowerCase()]) {
                e = x.htmlPrefilter(e);
                try {
                  for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(me(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function() {
          var e = [];
          return qe(
            this,
            arguments,
            function(t) {
              var n = this.parentNode;
              x.inArray(this, e) < 0 && (x.cleanData(me(this)), n && n.replaceChild(t, this));
            },
            e
          );
        }
      }),
      x.each(
        {
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith'
        },
        function(e, t) {
          x.fn[e] = function(e) {
            for (var n, i = [], o = x(e), r = o.length - 1, s = 0; s <= r; s++)
              (n = s === r ? this : this.clone(!0)), x(o[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var Re = new RegExp('^(' + te + ')(?!px)[a-z%]+$', 'i'),
      We = function(t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      },
      Fe = new RegExp(ie.join('|'), 'i');
    function Be(e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.style;
      return (
        (n = n || We(e)) &&
          ('' !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = x.style(e, t)),
          !h.pixelBoxStyles() &&
            Re.test(s) &&
            Fe.test(t) &&
            ((i = a.width),
            (o = a.minWidth),
            (r = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = i),
            (a.minWidth = o),
            (a.maxWidth = r))),
        void 0 !== s ? s + '' : s
      );
    }
    function ze(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }
    !(function() {
      function t() {
        if (u) {
          (c.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
            (u.style.cssText =
              'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
            oe.appendChild(c).appendChild(u);
          var t = e.getComputedStyle(u);
          (o = '1%' !== t.top),
            (l = 12 === n(t.marginLeft)),
            (u.style.right = '60%'),
            (a = 36 === n(t.right)),
            (r = 36 === n(t.width)),
            (u.style.position = 'absolute'),
            (s = 12 === n(u.offsetWidth / 3)),
            oe.removeChild(c),
            (u = null);
        }
      }
      function n(e) {
        return Math.round(parseFloat(e));
      }
      var o,
        r,
        s,
        a,
        l,
        c = i.createElement('div'),
        u = i.createElement('div');
      u.style &&
        ((u.style.backgroundClip = 'content-box'),
        (u.cloneNode(!0).style.backgroundClip = ''),
        (h.clearCloneStyle = 'content-box' === u.style.backgroundClip),
        x.extend(h, {
          boxSizingReliable: function() {
            return t(), r;
          },
          pixelBoxStyles: function() {
            return t(), a;
          },
          pixelPosition: function() {
            return t(), o;
          },
          reliableMarginLeft: function() {
            return t(), l;
          },
          scrollboxSize: function() {
            return t(), s;
          }
        }));
    })();
    var Ue = ['Webkit', 'Moz', 'ms'],
      Xe = i.createElement('div').style,
      Ve = {};
    function Ye(e) {
      return (
        x.cssProps[e] ||
        Ve[e] ||
        (e in Xe
          ? e
          : (Ve[e] =
              (function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Xe) return e;
              })(e) || e))
      );
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
      Ke = /^--/,
      Ge = { position: 'absolute', visibility: 'hidden', display: 'block' },
      Je = { letterSpacing: '0', fontWeight: '400' };
    function Ze(e, t, n) {
      var i = ne.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
    }
    function et(e, t, n, i, o, r) {
      var s = 'width' === t ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (i ? 'border' : 'content')) return 0;
      for (; s < 4; s += 2)
        'margin' === n && (l += x.css(e, n + ie[s], !0, o)),
          i
            ? ('content' === n && (l -= x.css(e, 'padding' + ie[s], !0, o)),
              'margin' !== n && (l -= x.css(e, 'border' + ie[s] + 'Width', !0, o)))
            : ((l += x.css(e, 'padding' + ie[s], !0, o)),
              'padding' !== n
                ? (l += x.css(e, 'border' + ie[s] + 'Width', !0, o))
                : (a += x.css(e, 'border' + ie[s] + 'Width', !0, o)));
      return (
        !i &&
          0 <= r &&
          (l += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5)) || 0),
        l
      );
    }
    function tt(e, t, n) {
      var i = We(e),
        o = (!h.boxSizingReliable() || n) && 'border-box' === x.css(e, 'boxSizing', !1, i),
        r = o,
        s = Be(e, t, i),
        a = 'offset' + t[0].toUpperCase() + t.slice(1);
      if (Re.test(s)) {
        if (!n) return s;
        s = 'auto';
      }
      return (
        ((!h.boxSizingReliable() && o) ||
          'auto' === s ||
          (!parseFloat(s) && 'inline' === x.css(e, 'display', !1, i))) &&
          e.getClientRects().length &&
          ((o = 'border-box' === x.css(e, 'boxSizing', !1, i)), (r = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + et(e, t, n || (o ? 'border' : 'content'), r, i, s) + 'px'
      );
    }
    function nt(e, t, n, i, o) {
      return new nt.prototype.init(e, t, n, i, o);
    }
    x.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = Be(e, 'opacity');
              return '' === n ? '1' : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            r,
            s,
            a = V(t),
            l = Ke.test(t),
            c = e.style;
          if ((l || (t = Ye(a)), (s = x.cssHooks[t] || x.cssHooks[a]), void 0 === n))
            return s && 'get' in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
          'string' == (r = typeof n) && (o = ne.exec(n)) && o[1] && ((n = ce(e, t, o)), (r = 'number')),
            null != n &&
              n == n &&
              ('number' !== r || l || (n += (o && o[3]) || (x.cssNumber[a] ? '' : 'px')),
              h.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (c[t] = 'inherit'),
              (s && 'set' in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
        }
      },
      css: function(e, t, n, i) {
        var o,
          r,
          s,
          a = V(t);
        return (
          Ke.test(t) || (t = Ye(a)),
          (s = x.cssHooks[t] || x.cssHooks[a]) && 'get' in s && (o = s.get(e, !0, n)),
          void 0 === o && (o = Be(e, t, i)),
          'normal' === o && t in Je && (o = Je[t]),
          '' === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
        );
      }
    }),
      x.each(['height', 'width'], function(e, t) {
        x.cssHooks[t] = {
          get: function(e, n, i) {
            if (n)
              return !Qe.test(x.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
                ? tt(e, t, i)
                : le(e, Ge, function() {
                    return tt(e, t, i);
                  });
          },
          set: function(e, n, i) {
            var o,
              r = We(e),
              s = !h.scrollboxSize() && 'absolute' === r.position,
              a = (s || i) && 'border-box' === x.css(e, 'boxSizing', !1, r),
              l = i ? et(e, t, i, a, r) : 0;
            return (
              a &&
                s &&
                (l -= Math.ceil(
                  e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - et(e, t, 'border', !1, r) - 0.5
                )),
              l && (o = ne.exec(n)) && 'px' !== (o[3] || 'px') && ((e.style[t] = n), (n = x.css(e, t))),
              Ze(0, n, l)
            );
          }
        };
      }),
      (x.cssHooks.marginLeft = ze(h.reliableMarginLeft, function(e, t) {
        if (t)
          return (
            (parseFloat(Be(e, 'marginLeft')) ||
              e.getBoundingClientRect().left -
                le(e, { marginLeft: 0 }, function() {
                  return e.getBoundingClientRect().left;
                })) + 'px'
          );
      })),
      x.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
        (x.cssHooks[e + t] = {
          expand: function(n) {
            for (var i = 0, o = {}, r = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
              o[e + ie[i] + t] = r[i] || r[i - 2] || r[0];
            return o;
          }
        }),
          'margin' !== e && (x.cssHooks[e + t].set = Ze);
      }),
      x.fn.extend({
        css: function(e, t) {
          return B(
            this,
            function(e, t, n) {
              var i,
                o,
                r = {},
                s = 0;
              if (Array.isArray(t)) {
                for (i = We(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i);
                return r;
              }
              return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        }
      }),
      (((x.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, i, o, r) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || x.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (x.cssNumber[n] ? '' : 'px'));
        },
        cur: function() {
          var e = nt.propHooks[this.prop];
          return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        },
        run: function(e) {
          var t,
            n = nt.propHooks[this.prop];
          return (
            (this.pos = t = this.options.duration
              ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
              : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
          );
        }
      }).init.prototype = nt.prototype),
      ((nt.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = x.css(e.elem, e.prop, '')) && 'auto' !== t
              ? t
              : 0;
          },
          set: function(e) {
            x.fx.step[e.prop]
              ? x.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType || (!x.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : x.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }),
      (x.easing = {
        linear: function(e) {
          return e;
        },
        swing: function(e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing'
      }),
      (x.fx = nt.prototype.init),
      (x.fx.step = {});
    var it,
      ot,
      rt,
      st,
      at = /^(?:toggle|show|hide)$/,
      lt = /queueHooks$/;
    function ct() {
      ot &&
        (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, x.fx.interval),
        x.fx.tick());
    }
    function ut() {
      return (
        e.setTimeout(function() {
          it = void 0;
        }),
        (it = Date.now())
      );
    }
    function dt(e, t) {
      var n,
        i = 0,
        o = { height: e };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) o['margin' + (n = ie[i])] = o['padding' + n] = e;
      return t && (o.opacity = o.width = e), o;
    }
    function ft(e, t, n) {
      for (var i, o = (pt.tweeners[t] || []).concat(pt.tweeners['*']), r = 0, s = o.length; r < s; r++)
        if ((i = o[r].call(n, t, e))) return i;
    }
    function pt(e, t, n) {
      var i,
        o,
        r = 0,
        s = pt.prefilters.length,
        a = x.Deferred().always(function() {
          delete l.elem;
        }),
        l = function() {
          if (o) return !1;
          for (
            var t = it || ut(),
              n = Math.max(0, c.startTime + c.duration - t),
              i = 1 - (n / c.duration || 0),
              r = 0,
              s = c.tweens.length;
            r < s;
            r++
          )
            c.tweens[r].run(i);
          return (
            a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
          );
        },
        c = a.promise({
          elem: e,
          props: x.extend({}, t),
          opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: it || ut(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i;
          },
          stop: function(t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) c.tweens[n].run(1);
            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
          }
        }),
        u = c.props;
      for (
        (function(e, t) {
          var n, i, o, r, s;
          for (n in e)
            if (
              ((o = t[(i = V(n))]),
              (r = e[n]),
              Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
              n !== i && ((e[i] = r), delete e[n]),
              (s = x.cssHooks[i]) && ('expand' in s))
            )
              for (n in ((r = s.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
            else t[i] = o;
        })(u, c.opts.specialEasing);
        r < s;
        r++
      )
        if ((i = pt.prefilters[r].call(c, e, u, c.opts)))
          return g(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      return (
        x.map(u, ft, c),
        g(c.opts.start) && c.opts.start.call(e, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        x.fx.timer(x.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
        c
      );
    }
    (x.Animation = x.extend(pt, {
      tweeners: {
        '*': [
          function(e, t) {
            var n = this.createTween(e, t);
            return ce(n.elem, e, ne.exec(t), n), n;
          }
        ]
      },
      tweener: function(e, t) {
        g(e) ? ((t = e), (e = ['*'])) : (e = e.match($));
        for (var n, i = 0, o = e.length; i < o; i++) (pt.tweeners[(n = e[i])] = pt.tweeners[n] || []).unshift(t);
      },
      prefilters: [
        function(e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d = 'width' in t || 'height' in t,
            f = this,
            p = {},
            h = e.style,
            g = e.nodeType && ae(e),
            m = K.get(e, 'fxshow');
          for (i in (n.queue ||
            (null == (s = x._queueHooks(e, 'fx')).unqueued &&
              ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function() {
                s.unqueued || a();
              })),
            s.unqueued++,
            f.always(function() {
              f.always(function() {
                s.unqueued--, x.queue(e, 'fx').length || s.empty.fire();
              });
            })),
          t))
            if (at.test((o = t[i]))) {
              if ((delete t[i], (r = r || 'toggle' === o), o === (g ? 'hide' : 'show'))) {
                if ('show' !== o || !m || void 0 === m[i]) continue;
                g = !0;
              }
              p[i] = (m && m[i]) || x.style(e, i);
            }
          if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
            for (i in (d &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (c = m && m.display) && (c = K.get(e, 'display')),
              'none' === (u = x.css(e, 'display')) &&
                (c ? (u = c) : (de([e], !0), (c = e.style.display || c), (u = x.css(e, 'display')), de([e]))),
              ('inline' === u || ('inline-block' === u && null != c)) &&
                'none' === x.css(e, 'float') &&
                (l ||
                  (f.done(function() {
                    h.display = c;
                  }),
                  null == c && (c = 'none' === (u = h.display) ? '' : u)),
                (h.display = 'inline-block'))),
            n.overflow &&
              ((h.overflow = 'hidden'),
              f.always(function() {
                (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
              })),
            (l = !1),
            p))
              l ||
                (m ? 'hidden' in m && (g = m.hidden) : (m = K.access(e, 'fxshow', { display: c })),
                r && (m.hidden = !g),
                g && de([e], !0),
                f.done(function() {
                  for (i in (g || de([e]), K.remove(e, 'fxshow'), p)) x.style(e, i, p[i]);
                })),
                (l = ft(g ? m[i] : 0, i, f)),
                i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
        }
      ],
      prefilter: function(e, t) {
        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
      }
    })),
      (x.speed = function(e, t, n) {
        var i =
          e && 'object' == typeof e
            ? x.extend({}, e)
            : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
        return (
          x.fx.off
            ? (i.duration = 0)
            : 'number' != typeof i.duration &&
              (i.duration = i.duration in x.fx.speeds ? x.fx.speeds[i.duration] : x.fx.speeds._default),
          (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
          (i.old = i.complete),
          (i.complete = function() {
            g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
          }),
          i
        );
      }),
      x.fn.extend({
        fadeTo: function(e, t, n, i) {
          return this.filter(ae)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function(e, t, n, i) {
          var o = x.isEmptyObject(e),
            r = x.speed(t, n, i),
            s = function() {
              var t = pt(this, x.extend({}, e), r);
              (o || K.get(this, 'finish')) && t.stop(!0);
            };
          return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
        },
        stop: function(e, t, n) {
          var i = function(e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            'string' != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || 'fx', []),
            this.each(function() {
              var t = !0,
                o = null != e && e + 'queueHooks',
                r = x.timers,
                s = K.get(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
              for (o = r.length; o--; )
                r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
              (!t && n) || x.dequeue(this, e);
            })
          );
        },
        finish: function(e) {
          return (
            !1 !== e && (e = e || 'fx'),
            this.each(function() {
              var t,
                n = K.get(this),
                i = n[e + 'queue'],
                o = n[e + 'queueHooks'],
                r = x.timers,
                s = i ? i.length : 0;
              for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--; )
                r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        }
      }),
      x.each(['toggle', 'show', 'hide'], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, i, o) {
          return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o);
        };
      }),
      x.each(
        {
          slideDown: dt('show'),
          slideUp: dt('hide'),
          slideToggle: dt('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' }
        },
        function(e, t) {
          x.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (x.timers = []),
      (x.fx.tick = function() {
        var e,
          t = 0,
          n = x.timers;
        for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), (it = void 0);
      }),
      (x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start();
      }),
      (x.fx.interval = 13),
      (x.fx.start = function() {
        ot || ((ot = !0), ct());
      }),
      (x.fx.stop = function() {
        ot = null;
      }),
      (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (x.fn.delay = function(t, n) {
        return (
          (t = (x.fx && x.fx.speeds[t]) || t),
          this.queue((n = n || 'fx'), function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
              e.clearTimeout(o);
            };
          })
        );
      }),
      (rt = i.createElement('input')),
      (st = i.createElement('select').appendChild(i.createElement('option'))),
      (rt.type = 'checkbox'),
      (h.checkOn = '' !== rt.value),
      (h.optSelected = st.selected),
      ((rt = i.createElement('input')).value = 't'),
      (rt.type = 'radio'),
      (h.radioValue = 't' === rt.value);
    var ht,
      gt = x.expr.attrHandle;
    x.fn.extend({
      attr: function(e, t) {
        return B(this, x.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function(e) {
        return this.each(function() {
          x.removeAttr(this, e);
        });
      }
    }),
      x.extend({
        attr: function(e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return void 0 === e.getAttribute
              ? x.prop(e, t, n)
              : ((1 === r && x.isXMLDoc(e)) ||
                  (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n
                  ? null === n
                    ? void x.removeAttr(e, t)
                    : o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ''), n)
                  : o && 'get' in o && null !== (i = o.get(e, t))
                  ? i
                  : null == (i = x.find.attr(e, t))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!h.radioValue && 'radio' === t && A(e, 'input')) {
                var n = e.value;
                return e.setAttribute('type', t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var n,
            i = 0,
            o = t && t.match($);
          if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
        }
      }),
      (ht = {
        set: function(e, t, n) {
          return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }),
      x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = gt[t] || x.find.attr;
        gt[t] = function(e, t, i) {
          var o,
            r,
            s = t.toLowerCase();
          return i || ((r = gt[s]), (gt[s] = o), (o = null != n(e, t, i) ? s : null), (gt[s] = r)), o;
        };
      });
    var mt = /^(?:input|select|textarea|button)$/i,
      vt = /^(?:a|area)$/i;
    function yt(e) {
      return (e.match($) || []).join(' ');
    }
    function bt(e) {
      return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function wt(e) {
      return Array.isArray(e) ? e : ('string' == typeof e && e.match($)) || [];
    }
    x.fn.extend({
      prop: function(e, t) {
        return B(this, x.prop, e, t, 1 < arguments.length);
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[x.propFix[e] || e];
        });
      }
    }),
      x.extend({
        prop: function(e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return (
              (1 === r && x.isXMLDoc(e)) || (o = x.propHooks[(t = x.propFix[t] || t)]),
              void 0 !== n
                ? o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : o && 'get' in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = x.find.attr(e, 'tabindex');
              return t ? parseInt(t, 10) : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href) ? 0 : -1;
            }
          }
        },
        propFix: { for: 'htmlFor', class: 'className' }
      }),
      h.optSelected ||
        (x.propHooks.selected = {
          get: function(e) {
            return null;
          },
          set: function(e) {}
        }),
      x.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable'
        ],
        function() {
          x.propFix[this.toLowerCase()] = this;
        }
      ),
      x.fn.extend({
        addClass: function(e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
          if (g(e))
            return this.each(function(t) {
              x(this).addClass(e.call(this, t, bt(this)));
            });
          if ((t = wt(e)).length)
            for (; (n = this[l++]); )
              if (((o = bt(n)), (i = 1 === n.nodeType && ' ' + yt(o) + ' '))) {
                for (s = 0; (r = t[s++]); ) i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ');
                o !== (a = yt(i)) && n.setAttribute('class', a);
              }
          return this;
        },
        removeClass: function(e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
          if (g(e))
            return this.each(function(t) {
              x(this).removeClass(e.call(this, t, bt(this)));
            });
          if (!arguments.length) return this.attr('class', '');
          if ((t = wt(e)).length)
            for (; (n = this[l++]); )
              if (((o = bt(n)), (i = 1 === n.nodeType && ' ' + yt(o) + ' '))) {
                for (s = 0; (r = t[s++]); ) for (; -1 < i.indexOf(' ' + r + ' '); ) i = i.replace(' ' + r + ' ', ' ');
                o !== (a = yt(i)) && n.setAttribute('class', a);
              }
          return this;
        },
        toggleClass: function(e, t) {
          var n = typeof e,
            i = 'string' === n || Array.isArray(e);
          return 'boolean' == typeof t && i
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : g(e)
            ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, bt(this), t), t);
              })
            : this.each(function() {
                var t, o, r, s;
                if (i)
                  for (o = 0, r = x(this), s = wt(e); (t = s[o++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                  (void 0 !== e && 'boolean' !== n) ||
                    ((t = bt(this)) && K.set(this, '__className__', t),
                    this.setAttribute &&
                      this.setAttribute('class', t || !1 === e ? '' : K.get(this, '__className__') || ''));
              });
        },
        hasClass: function(e) {
          var t,
            n,
            i = 0;
          for (t = ' ' + e + ' '; (n = this[i++]); )
            if (1 === n.nodeType && -1 < (' ' + yt(bt(n)) + ' ').indexOf(t)) return !0;
          return !1;
        }
      });
    var xt = /\r/g;
    x.fn.extend({
      val: function(e) {
        var t,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = g(e)),
            this.each(function(n) {
              var o;
              1 === this.nodeType &&
                (null == (o = i ? e.call(this, n, x(this).val()) : e)
                  ? (o = '')
                  : 'number' == typeof o
                  ? (o += '')
                  : Array.isArray(o) &&
                    (o = x.map(o, function(e) {
                      return null == e ? '' : e + '';
                    })),
                ((t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) &&
                  'set' in t &&
                  void 0 !== t.set(this, o, 'value')) ||
                  (this.value = o));
            }))
          : o
          ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) &&
            'get' in t &&
            void 0 !== (n = t.get(o, 'value'))
            ? n
            : 'string' == typeof (n = o.value)
            ? n.replace(xt, '')
            : null == n
            ? ''
            : n
          : void 0;
      }
    }),
      x.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = x.find.attr(e, 'value');
              return null != t ? t : yt(x.text(e));
            }
          },
          select: {
            get: function(e) {
              var t,
                n,
                i,
                o = e.options,
                r = e.selectedIndex,
                s = 'select-one' === e.type,
                a = s ? null : [],
                l = s ? r + 1 : o.length;
              for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                if (
                  ((n = o[i]).selected || i === r) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
                ) {
                  if (((t = x(n).val()), s)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function(e, t) {
              for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--; )
                ((i = o[s]).selected = -1 < x.inArray(x.valHooks.option.get(i), r)) && (n = !0);
              return n || (e.selectedIndex = -1), r;
            }
          }
        }
      }),
      x.each(['radio', 'checkbox'], function() {
        (x.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t)) return (e.checked = -1 < x.inArray(x(e).val(), t));
          }
        }),
          h.checkOn ||
            (x.valHooks[this].get = function(e) {
              return null === e.getAttribute('value') ? 'on' : e.value;
            });
      }),
      (h.focusin = 'onfocusin' in e);
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function(e) {
        e.stopPropagation();
      };
    x.extend(x.event, {
      trigger: function(t, n, o, r) {
        var s,
          a,
          l,
          c,
          u,
          f,
          p,
          h,
          v = [o || i],
          y = d.call(t, 'type') ? t.type : t,
          b = d.call(t, 'namespace') ? t.namespace.split('.') : [];
        if (
          ((a = h = l = o = o || i),
          3 !== o.nodeType &&
            8 !== o.nodeType &&
            !Tt.test(y + x.event.triggered) &&
            (-1 < y.indexOf('.') && ((y = (b = y.split('.')).shift()), b.sort()),
            (u = y.indexOf(':') < 0 && 'on' + y),
            ((t = t[x.expando] ? t : new x.Event(y, 'object' == typeof t && t)).isTrigger = r ? 2 : 3),
            (t.namespace = b.join('.')),
            (t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
            (t.result = void 0),
            t.target || (t.target = o),
            (n = null == n ? [t] : x.makeArray(n, [t])),
            (p = x.event.special[y] || {}),
            r || !p.trigger || !1 !== p.trigger.apply(o, n)))
        ) {
          if (!r && !p.noBubble && !m(o)) {
            for (Tt.test((c = p.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (l = a);
            l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
          }
          for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
            (h = a),
              (t.type = 1 < s ? c : p.bindType || y),
              (f = (K.get(a, 'events') || {})[t.type] && K.get(a, 'handle')) && f.apply(a, n),
              (f = u && a[u]) && f.apply && Y(a) && ((t.result = f.apply(a, n)), !1 === t.result && t.preventDefault());
          return (
            (t.type = y),
            r ||
              t.isDefaultPrevented() ||
              (p._default && !1 !== p._default.apply(v.pop(), n)) ||
              !Y(o) ||
              (u &&
                g(o[y]) &&
                !m(o) &&
                ((l = o[u]) && (o[u] = null),
                (x.event.triggered = y),
                t.isPropagationStopped() && h.addEventListener(y, Ct),
                o[y](),
                t.isPropagationStopped() && h.removeEventListener(y, Ct),
                (x.event.triggered = void 0),
                l && (o[u] = l))),
            t.result
          );
        }
      },
      simulate: function(e, t, n) {
        var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
        x.event.trigger(i, null, t);
      }
    }),
      x.fn.extend({
        trigger: function(e, t) {
          return this.each(function() {
            x.event.trigger(e, t, this);
          });
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return x.event.trigger(e, t, n, !0);
        }
      }),
      h.focusin ||
        x.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
          var n = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e));
          };
          x.event.special[t] = {
            setup: function() {
              var i = this.ownerDocument || this,
                o = K.access(i, t);
              o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1);
            },
            teardown: function() {
              var i = this.ownerDocument || this,
                o = K.access(i, t) - 1;
              o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t));
            }
          };
        });
    var St = e.location,
      _t = Date.now(),
      kt = /\?/;
    x.parseXML = function(t) {
      var n;
      if (!t || 'string' != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, 'text/xml');
      } catch (t) {
        n = void 0;
      }
      return (n && !n.getElementsByTagName('parsererror').length) || x.error('Invalid XML: ' + t), n;
    };
    var Et = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
    function Ot(e, t, n, i) {
      var o;
      if (Array.isArray(t))
        x.each(t, function(t, o) {
          n || Et.test(e) ? i(e, o) : Ot(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, i);
        });
      else if (n || 'object' !== b(t)) i(e, t);
      else for (o in t) Ot(e + '[' + o + ']', t[o], n, i);
    }
    (x.param = function(e, t) {
      var n,
        i = [],
        o = function(e, t) {
          var n = g(t) ? t() : t;
          i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
        };
      if (null == e) return '';
      if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
        x.each(e, function() {
          o(this.name, this.value);
        });
      else for (n in e) Ot(n, e[n], t, o);
      return i.join('&');
    }),
      x.fn.extend({
        serialize: function() {
          return x.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var e = x.prop(this, 'elements');
            return e ? x.makeArray(e) : this;
          })
            .filter(function() {
              var e = this.type;
              return (
                this.name &&
                !x(this).is(':disabled') &&
                Nt.test(this.nodeName) &&
                !Dt.test(e) &&
                (this.checked || !fe.test(e))
              );
            })
            .map(function(e, t) {
              var n = x(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? x.map(n, function(e) {
                    return { name: t.name, value: e.replace(At, '\r\n') };
                  })
                : { name: t.name, value: n.replace(At, '\r\n') };
            })
            .get();
        }
      });
    var jt = /%20/g,
      It = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      $t = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      qt = {},
      Mt = {},
      Rt = '*/'.concat('*'),
      Wt = i.createElement('a');
    function Ft(e) {
      return function(t, n) {
        'string' != typeof t && ((n = t), (t = '*'));
        var i,
          o = 0,
          r = t.toLowerCase().match($) || [];
        if (g(n))
          for (; (i = r[o++]); )
            '+' === i[0] ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      };
    }
    function Bt(e, t, n, i) {
      var o = {},
        r = e === Mt;
      function s(a) {
        var l;
        return (
          (o[a] = !0),
          x.each(e[a] || [], function(e, a) {
            var c = a(t, n, i);
            return 'string' != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      return s(t.dataTypes[0]) || (!o['*'] && s('*'));
    }
    function zt(e, t) {
      var n,
        i,
        o = x.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && x.extend(!0, e, i), e;
    }
    (Wt.href = St.href),
      x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: St.href,
          type: 'GET',
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          accepts: {
            '*': Rt,
            text: 'text/plain',
            html: 'text/html',
            xml: 'application/xml, text/xml',
            json: 'application/json, text/javascript'
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
          converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': x.parseXML },
          flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function(e, t) {
          return t ? zt(zt(e, x.ajaxSettings), t) : zt(x.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(qt),
        ajaxTransport: Ft(Mt),
        ajax: function(t, n) {
          'object' == typeof t && ((n = t), (t = void 0));
          var o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            p,
            h = x.ajaxSetup({}, (n = n || {})),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? x(g) : x.event,
            v = x.Deferred(),
            y = x.Callbacks('once memory'),
            b = h.statusCode || {},
            w = {},
            T = {},
            C = 'canceled',
            S = {
              readyState: 0,
              getResponseHeader: function(e) {
                var t;
                if (u) {
                  if (!a)
                    for (a = {}; (t = Ht.exec(s)); )
                      a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                  t = a[e.toLowerCase() + ' '];
                }
                return null == t ? null : t.join(', ');
              },
              getAllResponseHeaders: function() {
                return u ? s : null;
              },
              setRequestHeader: function(e, t) {
                return null == u && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (w[e] = t)), this;
              },
              overrideMimeType: function(e) {
                return null == u && (h.mimeType = e), this;
              },
              statusCode: function(e) {
                var t;
                if (e)
                  if (u) S.always(e[S.status]);
                  else for (t in e) b[t] = [b[t], e[t]];
                return this;
              },
              abort: function(e) {
                var t = e || C;
                return o && o.abort(t), _(0, t), this;
              }
            };
          if (
            (v.promise(S),
            (h.url = ((t || h.url || St.href) + '').replace(Pt, St.protocol + '//')),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || '*').toLowerCase().match($) || ['']),
            null == h.crossDomain)
          ) {
            c = i.createElement('a');
            try {
              (c.href = h.url),
                (c.href = c.href),
                (h.crossDomain = Wt.protocol + '//' + Wt.host != c.protocol + '//' + c.host);
            } catch (t) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data && h.processData && 'string' != typeof h.data && (h.data = x.param(h.data, h.traditional)),
            Bt(qt, h, n, S),
            u)
          )
            return S;
          for (f in ((d = x.event && h.global) && 0 == x.active++ && x.event.trigger('ajaxStart'),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !$t.test(h.type)),
          (r = h.url.replace(It, '')),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              (h.data = h.data.replace(jt, '+'))
            : ((p = h.url.slice(r.length)),
              h.data &&
                (h.processData || 'string' == typeof h.data) &&
                ((r += (kt.test(r) ? '&' : '?') + h.data), delete h.data),
              !1 === h.cache && ((r = r.replace(Lt, '$1')), (p = (kt.test(r) ? '&' : '?') + '_=' + _t++ + p)),
              (h.url = r + p)),
          h.ifModified &&
            (x.lastModified[r] && S.setRequestHeader('If-Modified-Since', x.lastModified[r]),
            x.etag[r] && S.setRequestHeader('If-None-Match', x.etag[r])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            S.setRequestHeader('Content-Type', h.contentType),
          S.setRequestHeader(
            'Accept',
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
              : h.accepts['*']
          ),
          h.headers))
            S.setRequestHeader(f, h.headers[f]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u)) return S.abort();
          if (((C = 'abort'), y.add(h.complete), S.done(h.success), S.fail(h.error), (o = Bt(Mt, h, n, S)))) {
            if (((S.readyState = 1), d && m.trigger('ajaxSend', [S, h]), u)) return S;
            h.async &&
              0 < h.timeout &&
              (l = e.setTimeout(function() {
                S.abort('timeout');
              }, h.timeout));
            try {
              (u = !1), o.send(w, _);
            } catch (t) {
              if (u) throw t;
              _(-1, t);
            }
          } else _(-1, 'No Transport');
          function _(t, n, i, a) {
            var c,
              f,
              p,
              w,
              T,
              C = n;
            u ||
              ((u = !0),
              l && e.clearTimeout(l),
              (o = void 0),
              (s = a || ''),
              (S.readyState = 0 < t ? 4 : 0),
              (c = (200 <= t && t < 300) || 304 === t),
              i &&
                (w = (function(e, t, n) {
                  for (var i, o, r, s, a = e.contents, l = e.dataTypes; '*' === l[0]; )
                    l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
                  if (i)
                    for (o in a)
                      if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break;
                      }
                  if (l[0] in n) r = l[0];
                  else {
                    for (o in n) {
                      if (!l[0] || e.converters[o + ' ' + l[0]]) {
                        r = o;
                        break;
                      }
                      s || (s = o);
                    }
                    r = r || s;
                  }
                  if (r) return r !== l[0] && l.unshift(r), n[r];
                })(h, S, i)),
              (w = (function(e, t, n, i) {
                var o,
                  r,
                  s,
                  a,
                  l,
                  c = {},
                  u = e.dataTypes.slice();
                if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                for (r = u.shift(); r; )
                  if (
                    (e.responseFields[r] && (n[e.responseFields[r]] = t),
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (l = r),
                    (r = u.shift()))
                  )
                    if ('*' === r) r = l;
                    else if ('*' !== l && l !== r) {
                      if (!(s = c[l + ' ' + r] || c['* ' + r]))
                        for (o in c)
                          if ((a = o.split(' '))[1] === r && (s = c[l + ' ' + a[0]] || c['* ' + a[0]])) {
                            !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else
                          try {
                            t = s(t);
                          } catch (e) {
                            return { state: 'parsererror', error: s ? e : 'No conversion from ' + l + ' to ' + r };
                          }
                    }
                return { state: 'success', data: t };
              })(h, w, S, c)),
              c
                ? (h.ifModified &&
                    ((T = S.getResponseHeader('Last-Modified')) && (x.lastModified[r] = T),
                    (T = S.getResponseHeader('etag')) && (x.etag[r] = T)),
                  204 === t || 'HEAD' === h.type
                    ? (C = 'nocontent')
                    : 304 === t
                    ? (C = 'notmodified')
                    : ((C = w.state), (f = w.data), (c = !(p = w.error))))
                : ((p = C), (!t && C) || ((C = 'error'), t < 0 && (t = 0))),
              (S.status = t),
              (S.statusText = (n || C) + ''),
              c ? v.resolveWith(g, [f, C, S]) : v.rejectWith(g, [S, C, p]),
              S.statusCode(b),
              (b = void 0),
              d && m.trigger(c ? 'ajaxSuccess' : 'ajaxError', [S, h, c ? f : p]),
              y.fireWith(g, [S, C]),
              d && (m.trigger('ajaxComplete', [S, h]), --x.active || x.event.trigger('ajaxStop')));
          }
          return S;
        },
        getJSON: function(e, t, n) {
          return x.get(e, t, n, 'json');
        },
        getScript: function(e, t) {
          return x.get(e, void 0, t, 'script');
        }
      }),
      x.each(['get', 'post'], function(e, t) {
        x[t] = function(e, n, i, o) {
          return (
            g(n) && ((o = o || i), (i = n), (n = void 0)),
            x.ajax(x.extend({ url: e, type: t, dataType: o, data: n, success: i }, x.isPlainObject(e) && e))
          );
        };
      }),
      (x._evalUrl = function(e, t) {
        return x.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          cache: !0,
          async: !1,
          global: !1,
          converters: { 'text script': function() {} },
          dataFilter: function(e) {
            x.globalEval(e, t);
          }
        });
      }),
      x.fn.extend({
        wrapAll: function(e) {
          var t;
          return (
            this[0] &&
              (g(e) && (e = e.call(this[0])),
              (t = x(e, this[0].ownerDocument)
                .eq(0)
                .clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function() {
                  for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function(e) {
          return g(e)
            ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t));
              })
            : this.each(function() {
                var t = x(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function(e) {
          var t = g(e);
          return this.each(function(n) {
            x(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function(e) {
          return (
            this.parent(e)
              .not('body')
              .each(function() {
                x(this).replaceWith(this.childNodes);
              }),
            this
          );
        }
      }),
      (x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e);
      }),
      (x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (x.ajaxSettings.xhr = function() {
        try {
          return new e.XMLHttpRequest();
        } catch (t) {}
      });
    var Ut = { 0: 200, 1223: 204 },
      Xt = x.ajaxSettings.xhr();
    (h.cors = !!Xt && 'withCredentials' in Xt),
      (h.ajax = Xt = !!Xt),
      x.ajaxTransport(function(t) {
        var n, i;
        if (h.cors || (Xt && !t.crossDomain))
          return {
            send: function(o, r) {
              var s,
                a = t.xhr();
              if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                for (s in t.xhrFields) a[s] = t.xhrFields[s];
              for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
              t.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'),
              o))
                a.setRequestHeader(s, o[s]);
              (n = function(e) {
                return function() {
                  n &&
                    ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                    'abort' === e
                      ? a.abort()
                      : 'error' === e
                      ? 'number' != typeof a.status
                        ? r(0, 'error')
                        : r(a.status, a.statusText)
                      : r(
                          Ut[a.status] || a.status,
                          a.statusText,
                          'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (i = a.onerror = a.ontimeout = n('error')),
                void 0 !== a.onabort
                  ? (a.onabort = i)
                  : (a.onreadystatechange = function() {
                      4 === a.readyState &&
                        e.setTimeout(function() {
                          n && i();
                        });
                    }),
                (n = n('abort'));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (o) {
                if (n) throw o;
              }
            },
            abort: function() {
              n && n();
            }
          };
      }),
      x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      x.ajaxSetup({
        accepts: {
          script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function(e) {
            return x.globalEval(e), e;
          }
        }
      }),
      x.ajaxPrefilter('script', function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
      }),
      x.ajaxTransport('script', function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
          return {
            send: function(o, r) {
              (t = x('<script>')
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (n = function(e) {
                    t.remove(), (n = null), e && r('error' === e.type ? 404 : 200, e.type);
                  })
                )),
                i.head.appendChild(t[0]);
            },
            abort: function() {
              n && n();
            }
          };
      });
    var Vt,
      Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function() {
        var e = Yt.pop() || x.expando + '_' + _t++;
        return (this[e] = !0), e;
      }
    }),
      x.ajaxPrefilter('json jsonp', function(t, n, i) {
        var o,
          r,
          s,
          a =
            !1 !== t.jsonp &&
            (Qt.test(t.url)
              ? 'url'
              : 'string' == typeof t.data &&
                0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                Qt.test(t.data) &&
                'data');
        if (a || 'jsonp' === t.dataTypes[0])
          return (
            (o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(Qt, '$1' + o))
              : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
            (t.converters['script json'] = function() {
              return s || x.error(o + ' was not called'), s[0];
            }),
            (t.dataTypes[0] = 'json'),
            (r = e[o]),
            (e[o] = function() {
              s = arguments;
            }),
            i.always(function() {
              void 0 === r ? x(e).removeProp(o) : (e[o] = r),
                t[o] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(o)),
                s && g(r) && r(s[0]),
                (s = r = void 0);
            }),
            'script'
          );
      }),
      (h.createHTMLDocument =
        (((Vt = i.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'),
        2 === Vt.childNodes.length)),
      (x.parseHTML = function(e, t, n) {
        return 'string' != typeof e
          ? []
          : ('boolean' == typeof t && ((n = t), (t = !1)),
            t ||
              (h.createHTMLDocument
                ? (((o = (t = i.implementation.createHTMLDocument('')).createElement('base')).href = i.location.href),
                  t.head.appendChild(o))
                : (t = i)),
            (s = !n && []),
            (r = D.exec(e))
              ? [t.createElement(r[1])]
              : ((r = xe([e], t, s)), s && s.length && x(s).remove(), x.merge([], r.childNodes)));
        var o, r, s;
      }),
      (x.fn.load = function(e, t, n) {
        var i,
          o,
          r,
          s = this,
          a = e.indexOf(' ');
        return (
          -1 < a && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
          g(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (o = 'POST'),
          0 < s.length &&
            x
              .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
              .done(function(e) {
                (r = arguments),
                  s.html(
                    i
                      ? x('<div>')
                          .append(x.parseHTML(e))
                          .find(i)
                      : e
                  );
              })
              .always(
                n &&
                  function(e, t) {
                    s.each(function() {
                      n.apply(this, r || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      x.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {
        x.fn[t] = function(e) {
          return this.on(t, e);
        };
      }),
      (x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, function(t) {
          return e === t.elem;
        }).length;
      }),
      (x.offset = {
        setOffset: function(e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c = x.css(e, 'position'),
            u = x(e),
            d = {};
          'static' === c && (e.style.position = 'relative'),
            (a = u.offset()),
            (r = x.css(e, 'top')),
            (l = x.css(e, 'left')),
            ('absolute' === c || 'fixed' === c) && -1 < (r + l).indexOf('auto')
              ? ((s = (i = u.position()).top), (o = i.left))
              : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
            g(t) && (t = t.call(e, n, x.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + o),
            'using' in t ? t.using.call(e, d) : u.css(d);
        }
      }),
      x.fn.extend({
        offset: function(e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function(t) {
                  x.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = this[0];
          return i
            ? i.getClientRects().length
              ? {
                  top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                  left: t.left + n.pageXOffset
                }
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function() {
          if (this[0]) {
            var e,
              t,
              n,
              i = this[0],
              o = { top: 0, left: 0 };
            if ('fixed' === x.css(i, 'position')) t = i.getBoundingClientRect();
            else {
              for (
                t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement;
                e && (e === n.body || e === n.documentElement) && 'static' === x.css(e, 'position');

              )
                e = e.parentNode;
              e &&
                e !== i &&
                1 === e.nodeType &&
                (((o = x(e).offset()).top += x.css(e, 'borderTopWidth', !0)),
                (o.left += x.css(e, 'borderLeftWidth', !0)));
            }
            return {
              top: t.top - o.top - x.css(i, 'marginTop', !0),
              left: t.left - o.left - x.css(i, 'marginLeft', !0)
            };
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (var e = this.offsetParent; e && 'static' === x.css(e, 'position'); ) e = e.offsetParent;
            return e || oe;
          });
        }
      }),
      x.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(e, t) {
        var n = 'pageYOffset' === t;
        x.fn[e] = function(i) {
          return B(
            this,
            function(e, i, o) {
              var r;
              if ((m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === o)) return r ? r[t] : e[i];
              r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o);
            },
            e,
            i,
            arguments.length
          );
        };
      }),
      x.each(['top', 'left'], function(e, t) {
        x.cssHooks[t] = ze(h.pixelPosition, function(e, n) {
          if (n) return (n = Be(e, t)), Re.test(n) ? x(e).position()[t] + 'px' : n;
        });
      }),
      x.each({ Height: 'height', Width: 'width' }, function(e, t) {
        x.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(n, i) {
          x.fn[i] = function(o, r) {
            var s = arguments.length && (n || 'boolean' != typeof o),
              a = n || (!0 === o || !0 === r ? 'margin' : 'border');
            return B(
              this,
              function(t, n, o) {
                var r;
                return m(t)
                  ? 0 === i.indexOf('outer')
                    ? t['inner' + e]
                    : t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      r['scroll' + e],
                      t.body['offset' + e],
                      r['offset' + e],
                      r['client' + e]
                    ))
                  : void 0 === o
                  ? x.css(t, n, a)
                  : x.style(t, n, o, a);
              },
              t,
              s ? o : void 0,
              s
            );
          };
        });
      }),
      x.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function(e, t) {
          x.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
          };
        }
      ),
      x.fn.extend({
        hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }),
      x.fn.extend({
        bind: function(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
          return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
        }
      }),
      (x.proxy = function(e, t) {
        var n, i, o;
        if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
          return (
            (i = r.call(arguments, 2)),
            ((o = function() {
              return e.apply(t || this, i.concat(r.call(arguments)));
            }).guid = e.guid = e.guid || x.guid++),
            o
          );
      }),
      (x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0);
      }),
      (x.isArray = Array.isArray),
      (x.parseJSON = JSON.parse),
      (x.nodeName = A),
      (x.isFunction = g),
      (x.isWindow = m),
      (x.camelCase = V),
      (x.type = b),
      (x.now = Date.now),
      (x.isNumeric = function(e) {
        var t = x.type(e);
        return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
      }),
      'function' == typeof define &&
        define.amd &&
        define('jquery', [], function() {
          return x;
        });
    var Kt = e.jQuery,
      Gt = e.$;
    return (
      (x.noConflict = function(t) {
        return e.$ === x && (e.$ = Gt), t && e.jQuery === x && (e.jQuery = Kt), x;
      }),
      t || (e.jQuery = e.$ = x),
      x
    );
  }),
  (function(e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'undefined' != typeof exports
      ? (module.exports = e(require('jquery')))
      : e(jQuery);
  })(function(e) {
    'use strict';
    var t = window.Slick || {};
    ((t = (function() {
      var t = 0;
      return function(n, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(n),
          appendDots: e(n),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function(t, n) {
            return e('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: 'window',
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: '',
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = 'hidden'),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(n)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = 'visibilitychange'),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(n).data('slick') || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden
            ? ((r.hidden = 'mozHidden'), (r.visibilityChange = 'mozvisibilitychange'))
            : void 0 !== document.webkitHidden &&
              ((r.hidden = 'webkitHidden'), (r.visibilityChange = 'webkitvisibilitychange')),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = t++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      };
    })()).prototype.activateADA = function() {
      this.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' });
    }),
      (t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ('boolean' == typeof n) (i = n), (n = null);
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(),
          'number' == typeof n
            ? 0 === n && 0 === o.$slides.length
              ? e(t).appendTo(o.$slideTrack)
              : i
              ? e(t).insertBefore(o.$slides.eq(n))
              : e(t).insertAfter(o.$slides.eq(n))
            : !0 === i
            ? e(t).prependTo(o.$slideTrack)
            : e(t).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function(t, n) {
            e(n).attr('data-slick-index', t);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
      (t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function(t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? o.$slideTrack.animate(
                !1 === o.options.vertical ? { left: t } : { top: t },
                o.options.speed,
                o.options.easing,
                n
              )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function(e) {
                    (e = Math.ceil(e)),
                      !1 === o.options.vertical
                        ? ((i[o.animType] = 'translate(' + e + 'px, 0px)'), o.$slideTrack.css(i))
                        : ((i[o.animType] = 'translate(0px,' + e + 'px)'), o.$slideTrack.css(i));
                  },
                  complete: function() {
                    n && n.call();
                  }
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              (i[o.animType] =
                !1 === o.options.vertical ? 'translate3d(' + t + 'px, 0px, 0px)' : 'translate3d(0px,' + t + 'px, 0px)'),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function() {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t;
      }),
      (t.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n &&
          'object' == typeof n &&
          n.each(function() {
            var n = e(this).slick('getSlick');
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function(e) {
        var t = this,
          n = {};
        (n[t.transitionType] =
          !1 === t.options.fade
            ? t.transformType + ' ' + t.options.speed + 'ms ' + t.options.cssEase
            : 'opacity ' + t.options.speed + 'ms ' + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
      }),
      (t.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function() {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass('slick-arrow')),
          (t.$nextArrow = e(t.options.nextArrow).addClass('slick-arrow')),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              t.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite && t.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass('slick-hidden')
                .attr({ 'aria-disabled': 'true', tabindex: '-1' }));
      }),
      (t.prototype.buildDots = function() {
        var t,
          n,
          i = this;
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass('slick-dotted'), n = e('<ul />').addClass(i.options.dotsClass), t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n.append(e('<li />').append(i.options.customPaging.call(this, i, t)));
          (i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots
              .find('li')
              .first()
              .addClass('slick-active');
        }
      }),
      (t.prototype.buildOut = function() {
        var t = this;
        (t.$slides = t.$slider.children(t.options.slide + ':not(.slick-cloned)').addClass('slick-slide')),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function(t, n) {
            e(n)
              .attr('data-slick-index', t)
              .data('originalStyling', e(n).attr('style') || '');
          }),
          t.$slider.addClass('slick-slider'),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css('opacity', 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
          e('img[data-lazy]', t.$slider)
            .not('[src]')
            .addClass('slick-loading'),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0),
          !0 === t.options.draggable && t.$list.addClass('draggable');
      }),
      (t.prototype.buildRows = function() {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (((i = document.createDocumentFragment()), (r = a.$slider.children()), a.options.rows > 1)) {
          for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
            var l = document.createElement('div');
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement('div');
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var u = e * s + (t * a.options.slidesPerRow + n);
                r.get(u) && c.appendChild(r.get(u));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({ width: 100 / a.options.slidesPerRow + '%', display: 'inline-block' });
        }
      }),
      (t.prototype.checkResponsive = function(t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (
          ('window' === s.respondTo
            ? (r = c)
            : 'slider' === s.respondTo
            ? (r = l)
            : 'min' === s.respondTo && (r = Math.min(c, l)),
          s.options.responsive && s.options.responsive.length && null !== s.options.responsive)
        ) {
          for (i in ((o = null), s.breakpoints))
            s.breakpoints.hasOwnProperty(i) &&
              (!1 === s.originalSettings.mobileFirst
                ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
                ((s.activeBreakpoint = o),
                'unslick' === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
              : ((s.activeBreakpoint = o),
                'unslick' === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === t && (s.currentSlide = s.options.initialSlide),
              s.refresh(t),
              (a = o)),
            t || !1 === a || s.$slider.trigger('breakpoint', [s, a]);
        }
      }),
      (t.prototype.changeSlide = function(t, n) {
        var i,
          o,
          r = this,
          s = e(t.currentTarget);
        switch (
          (s.is('a') && t.preventDefault(),
          s.is('li') || (s = s.closest('li')),
          (i =
            r.slideCount % r.options.slidesToScroll != 0
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
          t.data.message)
        ) {
          case 'previous':
            (o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i),
              r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;
          case 'next':
            (o = 0 === i ? r.options.slidesToScroll : i),
              r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;
          case 'index':
            var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger('focus');
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function(e) {
        var t, n;
        if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e('li', t.$dots)
            .off('click.slick', t.changeSlide)
            .off('mouseenter.slick', e.proxy(t.interrupt, t, !0))
            .off('mouseleave.slick', e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility && t.$dots.off('keydown.slick', t.keyHandler)),
          t.$slider.off('focus.slick blur.slick'),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off('click.slick', t.changeSlide),
            t.$nextArrow && t.$nextArrow.off('click.slick', t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off('keydown.slick', t.keyHandler),
              t.$nextArrow && t.$nextArrow.off('keydown.slick', t.keyHandler))),
          t.$list.off('touchstart.slick mousedown.slick', t.swipeHandler),
          t.$list.off('touchmove.slick mousemove.slick', t.swipeHandler),
          t.$list.off('touchend.slick mouseup.slick', t.swipeHandler),
          t.$list.off('touchcancel.slick mouseleave.slick', t.swipeHandler),
          t.$list.off('click.slick', t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility && t.$list.off('keydown.slick', t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .off('click.slick', t.selectHandler),
          e(window).off('orientationchange.slick.slick-' + t.instanceUid, t.orientationChange),
          e(window).off('resize.slick.slick-' + t.instanceUid, t.resize),
          e('[draggable!=true]', t.$slideTrack).off('dragstart', t.preventDefault),
          e(window).off('load.slick.slick-' + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off('mouseenter.slick', e.proxy(t.interrupt, t, !0)),
          t.$list.off('mouseleave.slick', e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function() {
        var e,
          t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr('style'), t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
      }),
      (t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e('.slick-cloned', n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function() {
                e(this).attr('style', e(this).data('originalStyling'));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass('slick-slider'),
          n.$slider.removeClass('slick-initialized'),
          n.$slider.removeClass('slick-dotted'),
          (n.unslicked = !0),
          t || n.$slider.trigger('destroy', [n]);
      }),
      (t.prototype.disableTransition = function(e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ''), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function() {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing)
          : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
      (t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function(n) {
          n.stopImmediatePropagation();
          var i = e(this);
          setTimeout(function() {
            t.options.pauseOnFocus && ((t.focussed = i.is(':focus')), t.autoPlay());
          }, 0);
        });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
      }),
      (t.prototype.getDotCount = function() {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1;
      }),
      (t.prototype.getLeft = function(e) {
        var t,
          n,
          i,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow ? (o = -1.5) : 1 === r.options.slidesToShow && (o = -2)),
                (s = n * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1),
                    (s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                  : ((r.slideOffset = (r.slideCount % r.options.slidesToScroll) * r.slideWidth * -1),
                    (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow && ((r.slideOffset = 0), (s = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 - (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0), (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s),
          !0 === r.options.variableWidth &&
            ((i =
              r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite
                ? r.$slideTrack.children('.slick-slide').eq(e)
                : r.$slideTrack.children('.slick-slide').eq(e + r.options.slidesToShow)),
            (t =
              !0 === r.options.rtl
                ? i[0]
                  ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((i =
                r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite
                  ? r.$slideTrack.children('.slick-slide').eq(e)
                  : r.$slideTrack.children('.slick-slide').eq(e + r.options.slidesToShow + 1)),
              (t =
                !0 === r.options.rtl
                  ? i[0]
                    ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e];
      }),
      (t.prototype.getNavigableIndexes = function() {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount));
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function() {
        return this;
      }),
      (t.prototype.getSlideCount = function() {
        var t,
          n,
          i = this;
        return (
          (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find('.slick-slide').each(function(o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return (t = r), !1;
              }),
              Math.abs(e(t).attr('data-slick-index') - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({ data: { message: 'index', index: parseInt(e) } }, t);
      }),
      (t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass('slick-initialized') ||
          (e(n.$slider).addClass('slick-initialized'),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots(),
          n.checkResponsive(!0),
          n.focusHandler()),
          t && n.$slider.trigger('init', [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function() {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function(e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides
          .add(t.$slideTrack.find('.slick-cloned'))
          .attr({ 'aria-hidden': 'true', tabindex: '-1' })
          .find('a, input, button, select')
          .attr({ tabindex: '-1' }),
          null !== t.$dots &&
            (t.$slides.not(t.$slideTrack.find('.slick-cloned')).each(function(n) {
              var o = i.indexOf(n);
              e(this).attr({ role: 'tabpanel', id: 'slick-slide' + t.instanceUid + n, tabindex: -1 }),
                -1 !== o && e(this).attr({ 'aria-describedby': 'slick-slide-control' + t.instanceUid + o });
            }),
            t.$dots
              .attr('role', 'tablist')
              .find('li')
              .each(function(o) {
                var r = i[o];
                e(this).attr({ role: 'presentation' }),
                  e(this)
                    .find('button')
                    .first()
                    .attr({
                      role: 'tab',
                      id: 'slick-slide-control' + t.instanceUid + o,
                      'aria-controls': 'slick-slide' + t.instanceUid + r,
                      'aria-label': o + 1 + ' of ' + n,
                      'aria-selected': null,
                      tabindex: '-1'
                    });
              })
              .eq(t.currentSlide)
              .find('button')
              .attr({ 'aria-selected': 'true', tabindex: '0' })
              .end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr('tabindex', 0);
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, e.changeSlide),
          e.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on('keydown.slick', e.keyHandler), e.$nextArrow.on('keydown.slick', e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots &&
          (e('li', t.$dots).on('click.slick', { message: 'index' }, t.changeSlide),
          !0 === t.options.accessibility && t.$dots.on('keydown.slick', t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            e('li', t.$dots)
              .on('mouseenter.slick', e.proxy(t.interrupt, t, !0))
              .on('mouseleave.slick', e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on('mouseenter.slick', e.proxy(t.interrupt, t, !0)),
          t.$list.on('mouseleave.slick', e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, t.swipeHandler),
          t.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, t.swipeHandler),
          t.$list.on('touchend.slick mouseup.slick', { action: 'end' }, t.swipeHandler),
          t.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, t.swipeHandler),
          t.$list.on('click.slick', t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility && t.$list.on('keydown.slick', t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .on('click.slick', t.selectHandler),
          e(window).on('orientationchange.slick.slick-' + t.instanceUid, e.proxy(t.orientationChange, t)),
          e(window).on('resize.slick.slick-' + t.instanceUid, e.proxy(t.resize, t)),
          e('[draggable!=true]', t.$slideTrack).on('dragstart', t.preventDefault),
          e(window).on('load.slick.slick-' + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
      }),
      (t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({ data: { message: !0 === t.options.rtl ? 'next' : 'previous' } })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({ data: { message: !0 === t.options.rtl ? 'previous' : 'next' } }));
      }),
      (t.prototype.lazyLoad = function() {
        function t(t) {
          e('img[data-lazy]', t).each(function() {
            var t = e(this),
              n = e(this).attr('data-lazy'),
              i = e(this).attr('data-srcset'),
              o = e(this).attr('data-sizes') || r.$slider.attr('data-sizes'),
              s = document.createElement('img');
            (s.onload = function() {
              t.animate({ opacity: 0 }, 100, function() {
                i && (t.attr('srcset', i), o && t.attr('sizes', o)),
                  t.attr('src', n).animate({ opacity: 1 }, 200, function() {
                    t.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                  }),
                  r.$slider.trigger('lazyLoaded', [r, t, n]);
              });
            }),
              (s.onerror = function() {
                t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                  r.$slider.trigger('lazyLoadError', [r, t, n]);
              }),
              (s.src = n);
          });
        }
        var n,
          i,
          o,
          r = this;
        if (
          (!0 === r.options.centerMode
            ? !0 === r.options.infinite
              ? (o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2)
              : ((i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))),
                (o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide),
              (o = Math.ceil(i + r.options.slidesToShow)),
              !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)),
          (n = r.$slider.find('.slick-slide').slice(i, o)),
          'anticipated' === r.options.lazyLoad)
        )
          for (var s = i - 1, a = o, l = r.$slider.find('.slick-slide'), c = 0; c < r.options.slidesToScroll; c++)
            s < 0 && (s = r.slideCount - 1), (n = (n = n.add(l.eq(s))).add(l.eq(a))), s--, a++;
        t(n),
          r.slideCount <= r.options.slidesToShow
            ? t(r.$slider.find('.slick-slide'))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? t(r.$slider.find('.slick-cloned').slice(0, r.options.slidesToShow))
            : 0 === r.currentSlide && t(r.$slider.find('.slick-cloned').slice(-1 * r.options.slidesToShow));
      }),
      (t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass('slick-loading'),
          e.initUI(),
          'progressive' === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({ data: { message: 'next' } });
      }),
      (t.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause = function() {
        this.autoPlayClear(), (this.paused = !0);
      }),
      (t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
      }),
      (t.prototype.postSlide = function(t) {
        var n = this;
        n.unslicked ||
          (n.$slider.trigger('afterChange', [n, t]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility &&
            (n.initADA(),
            n.options.focusOnChange &&
              e(n.$slides.get(n.currentSlide))
                .attr('tabindex', 0)
                .focus()));
      }),
      (t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({ data: { message: 'previous' } });
      }),
      (t.prototype.preventDefault = function(e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n,
          i,
          o,
          r,
          s,
          a = this,
          l = e('img[data-lazy]', a.$slider);
        l.length
          ? ((n = l.first()),
            (i = n.attr('data-lazy')),
            (o = n.attr('data-srcset')),
            (r = n.attr('data-sizes') || a.$slider.attr('data-sizes')),
            ((s = document.createElement('img')).onload = function() {
              o && (n.attr('srcset', o), r && n.attr('sizes', r)),
                n
                  .attr('src', i)
                  .removeAttr('data-lazy data-srcset data-sizes')
                  .removeClass('slick-loading'),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger('lazyLoaded', [a, n, i]),
                a.progressiveLazyLoad();
            }),
            (s.onerror = function() {
              t < 3
                ? setTimeout(function() {
                    a.progressiveLazyLoad(t + 1);
                  }, 500)
                : (n
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading')
                    .addClass('slick-lazyload-error'),
                  a.$slider.trigger('lazyLoadError', [a, n, i]),
                  a.progressiveLazyLoad());
            }),
            (s.src = i))
          : a.$slider.trigger('allImagesLoaded', [a]);
      }),
      (t.prototype.refresh = function(t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: 'index', index: n } }, !1);
      }),
      (t.prototype.registerBreakpoints = function() {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ('array' === e.type(r) && r.length) {
          for (t in ((o.respondTo = o.options.respondTo || 'window'), r))
            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (n = r[t].breakpoint; i >= 0; )
                o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function(e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function() {
        var t = this;
        (t.$slides = t.$slideTrack.children(t.options.slide).addClass('slick-slide')),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .on('click.slick', t.selectHandler),
          t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger('reInit', [t]);
      }),
      (t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function() {
            (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (
          ((e = 'boolean' == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e),
          i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
        )
          return !1;
        i.unload(),
          !0 === n
            ? i.$slideTrack.children().remove()
            : i.$slideTrack
                .children(this.options.slide)
                .eq(e)
                .remove(),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          (i.$slidesCache = i.$slides),
          i.reinit();
      }),
      (t.prototype.setCSS = function(e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = 'left' == i.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (n = 'top' == i.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}),
              !1 === i.cssTransitions
                ? ((o[i.animType] = 'translate(' + t + ', ' + n + ')'), i.$slideTrack.css(o))
                : ((o[i.animType] = 'translate3d(' + t + ', ' + n + ', 0px)'), i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode && e.$list.css({ padding: '0px ' + e.options.centerPadding })
          : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
            !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + ' 0px' })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children('.slick-slide').length)))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children('.slick-slide').length)
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children('.slick-slide').width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function() {
        var t,
          n = this;
        n.$slides.each(function(i, o) {
          (t = n.slideWidth * i * -1),
            !0 === n.options.rtl
              ? e(o).css({ position: 'relative', right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 })
              : e(o).css({ position: 'relative', left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
        }),
          n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css('height', t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t,
          n,
          i,
          o,
          r,
          s = this,
          a = !1;
        if (
          ('object' === e.type(arguments[0])
            ? ((i = arguments[0]), (a = arguments[1]), (r = 'multiple'))
            : 'string' === e.type(arguments[0]) &&
              ((i = arguments[0]),
              (o = arguments[1]),
              (a = arguments[2]),
              'responsive' === arguments[0] && 'array' === e.type(arguments[1])
                ? (r = 'responsive')
                : void 0 !== arguments[1] && (r = 'single')),
          'single' === r)
        )
          s.options[i] = o;
        else if ('multiple' === r)
          e.each(i, function(e, t) {
            s.options[e] = t;
          });
        else if ('responsive' === r)
          for (n in o)
            if ('array' !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
            else {
              for (t = s.options.responsive.length - 1; t >= 0; )
                s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
              s.options.responsive.push(o[n]);
            }
        a && (s.unload(), s.reinit());
      }),
      (t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
          e.$slider.trigger('setPosition', [e]);
      }),
      (t.prototype.setProps = function() {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? 'top' : 'left'),
          'top' === e.positionProp ? e.$slider.addClass('slick-vertical') : e.$slider.removeClass('slick-vertical'),
          (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ('number' == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = 'OTransform'),
            (e.transformType = '-o-transform'),
            (e.transitionType = 'OTransition'),
            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = 'MozTransform'),
            (e.transformType = '-moz-transform'),
            (e.transitionType = 'MozTransition'),
            void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = 'webkitTransform'),
            (e.transformType = '-webkit-transform'),
            (e.transitionType = 'webkitTransition'),
            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = 'msTransform'),
            (e.transformType = '-ms-transform'),
            (e.transitionType = 'msTransition'),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = 'transform'), (e.transformType = 'transform'), (e.transitionType = 'transition')),
          (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function(e) {
        var t,
          n,
          i,
          o,
          r = this;
        if (
          ((n = r.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true')),
          r.$slides.eq(e).addClass('slick-current'),
          !0 === r.options.centerMode)
        ) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (e >= t && e <= r.slideCount - 1 - t
                ? r.$slides
                    .slice(e - t + s, e + t + 1)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : n
                    .slice((i = r.options.slidesToShow + e) - t + 1 + s, i + t + 2)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false'),
              0 === e
                ? n.eq(n.length - 1 - r.options.slidesToShow).addClass('slick-center')
                : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass('slick-center')),
            r.$slides.eq(e).addClass('slick-center');
        } else
          e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass('slick-active')
                .attr('aria-hidden', 'false')
            : n.length <= r.options.slidesToShow
            ? n.addClass('slick-active').attr('aria-hidden', 'false')
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false'));
        ('ondemand' !== r.options.lazyLoad && 'anticipated' !== r.options.lazyLoad) || r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function() {
        var t,
          n,
          i,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite && !1 === o.options.fade && ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            e(o.$slides[(n = t - 1)])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', n - o.slideCount)
              .prependTo(o.$slideTrack)
              .addClass('slick-cloned');
          for (t = 0; t < i + o.slideCount; t += 1)
            e(o.$slides[(n = t)])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', n + o.slideCount)
              .appendTo(o.$slideTrack)
              .addClass('slick-cloned');
          o.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function() {
              e(this).attr('id', '');
            });
        }
      }),
      (t.prototype.interrupt = function(e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (t.prototype.selectHandler = function(t) {
        var n = this,
          i = e(t.target).is('.slick-slide') ? e(t.target) : e(t.target).parents('.slick-slide'),
          o = parseInt(i.attr('data-slick-index'));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function(e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = null,
          c = this;
        if (
          ((t = t || !1),
          !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e)))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (l = c.getLeft((i = e))),
            (s = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function() {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function() {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger('beforeChange', [c, c.currentSlide, o]),
              (r = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick('getSlick')).slideCount <= a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function() {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n
              ? c.animateSlide(l, function() {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
      }),
      (t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
          e.$slider.addClass('slick-loading');
      }),
      (t.prototype.swipeDirection = function() {
        var e,
          t,
          n = this;
        return (
          (e = Math.atan2(n.touchObject.startY - n.touchObject.curY, n.touchObject.startX - n.touchObject.curX)),
          (t = Math.round((180 * e) / Math.PI)) < 0 && (t = 360 - Math.abs(t)),
          t <= 45 && t >= 0
            ? !1 === n.options.rtl
              ? 'left'
              : 'right'
            : t <= 360 && t >= 315
            ? !1 === n.options.rtl
              ? 'left'
              : 'right'
            : t >= 135 && t <= 225
            ? !1 === n.options.rtl
              ? 'right'
              : 'left'
            : !0 === n.options.verticalSwiping
            ? t >= 35 && t <= 135
              ? 'down'
              : 'up'
            : 'vertical'
        );
      }),
      (t.prototype.swipeEnd = function(e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1), !1;
        if (((i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX))
          return !1;
        if (
          (!0 === i.touchObject.edgeHit && i.$slider.trigger('edge', [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case 'left':
            case 'down':
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case 'right':
            case 'up':
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          'vertical' != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger('swipe', [i, n]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function(e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ('ontouchend' in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf('mouse'))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case 'start':
              t.swipeStart(e);
              break;
            case 'move':
              t.swipeMove(e);
              break;
            case 'end':
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
            (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
            !a.options.verticalSwiping && !a.swiping && s > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                (n = a.swipeDirection()),
                void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), e.preventDefault()),
                (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && 'right' === n) || (a.currentSlide >= a.getDotCount() && 'left' === n)) &&
                  ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                (a.swipeLeft = !1 === a.options.vertical ? t + i * o : t + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function(e) {
        var t,
          n = this;
        if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow))
          return (n.touchObject = {}), !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
      (t.prototype.unload = function() {
        var t = this;
        e('.slick-cloned', t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
          t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
          t.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');
      }),
      (t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger('unslick', [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            0 === e.currentSlide
              ? (e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode
              ? (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
      }),
      (t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots &&
          (e.$dots
            .find('li')
            .removeClass('slick-active')
            .end(),
          e.$dots
            .find('li')
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass('slick-active'));
      }),
      (t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (e.interrupted = !!document[e.hidden]);
      }),
      (e.fn.slick = function() {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; e < s; e++)
          if (
            ('object' == typeof o || void 0 === o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
            void 0 !== n)
          )
            return n;
        return i;
      });
  });
