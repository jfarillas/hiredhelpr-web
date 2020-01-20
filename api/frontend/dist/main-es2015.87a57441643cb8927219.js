(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(n, e, t) {
      n.exports = t('zUnb');
    },
    '0QMH': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return s;
      });
      var l = t('8Y7J'),
        r = t('rB/T');
      function s(n, e) {
        let t;
        n.hot.accept(),
          e()
            .then(n => (t = n))
            .catch(n => console.error(n)),
          n.hot.dispose(() => {
            const n = t.injector.get(l.g).components.map(n => n.location.nativeElement),
              e = Object(r.createNewHosts)(n);
            t.destroy(), e();
          });
      }
    },
    '2QA8': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = (() => ('function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random()))();
    },
    '2fFW': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      let l = !1;
      const r = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(n) {
          l = n;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return l;
        }
      };
    },
    '3UD+': function(n, e) {
      n.exports = function(n) {
        if (!n.webpackPolyfill) {
          var e = Object.create(n);
          e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            Object.defineProperty(e, 'exports', { enumerable: !0 }),
            (e.webpackPolyfill = 1);
        }
        return e;
      };
    },
    '4odN': function(n) {
      n.exports = {
        APP_NAME: 'ngX-Rocket',
        About: 'A propos',
        'Hello world !': 'Bonjour le monde !',
        Home: 'Accueil',
        'Logged in as': 'Connect\xe9 en tant que',
        Login: 'Connexion',
        Logout: 'D\xe9connexion',
        Password: 'Mot de passe',
        'Password is required': 'Mot de passe requis',
        Username: 'Identifiant',
        'Username is required': 'Identifiant requis',
        'Username or password incorrect.': 'Identifiant ou mot de passe incorrect.',
        'Remember me': 'Rester connect\xe9',
        Version: 'Version'
      };
    },
    '4pUk': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = { npm_package_version: '1.0.0' };
    },
    '5+tZ': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return u;
      });
      var l = t('ZUHj'),
        r = t('l7GE'),
        s = t('51Dv'),
        i = t('lJxs'),
        o = t('Cfvw');
      function u(n, e, t = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? l => l.pipe(u((t, l) => Object(o.a)(n(t, l)).pipe(Object(i.a)((n, r) => e(t, n, l, r))), t))
          : ('number' == typeof e && (t = e), e => e.lift(new a(n, t)));
      }
      class a {
        constructor(n, e = Number.POSITIVE_INFINITY) {
          (this.project = n), (this.concurrent = e);
        }
        call(n, e) {
          return e.subscribe(new c(n, this.project, this.concurrent));
        }
      }
      class c extends r.a {
        constructor(n, e, t = Number.POSITIVE_INFINITY) {
          super(n),
            (this.project = e),
            (this.concurrent = t),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(n) {
          this.active < this.concurrent ? this._tryNext(n) : this.buffer.push(n);
        }
        _tryNext(n) {
          let e;
          const t = this.index++;
          try {
            e = this.project(n, t);
          } catch (l) {
            return void this.destination.error(l);
          }
          this.active++, this._innerSub(e, n, t);
        }
        _innerSub(n, e, t) {
          const r = new s.a(this, void 0, void 0);
          this.destination.add(r), Object(l.a)(this, n, e, t, r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(n, e, t, l, r) {
          this.destination.next(e);
        }
        notifyComplete(n) {
          const e = this.buffer;
          this.remove(n),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
    },
    '51Dv': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var l = t('7o/Q');
      class r extends l.a {
        constructor(n, e, t) {
          super(), (this.parent = n), (this.outerValue = e), (this.outerIndex = t), (this.index = 0);
        }
        _next(n) {
          this.parent.notifyNext(this.outerValue, n, this.outerIndex, this.index++, this);
        }
        _error(n) {
          this.parent.notifyError(n, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
    },
    '7o/Q': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return a;
      });
      var l = t('n6bG'),
        r = t('gRHU'),
        s = t('quSY'),
        i = t('2QA8'),
        o = t('2fFW'),
        u = t('NJ4a');
      class a extends s.a {
        constructor(n, e, t) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = r.a;
              break;
            case 1:
              if (!n) {
                this.destination = r.a;
                break;
              }
              if ('object' == typeof n) {
                n instanceof a
                  ? ((this.syncErrorThrowable = n.syncErrorThrowable), (this.destination = n), n.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new c(this, n)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new c(this, n, e, t));
          }
        }
        [i.a]() {
          return this;
        }
        static create(n, e, t) {
          const l = new a(n, e, t);
          return (l.syncErrorThrowable = !1), l;
        }
        next(n) {
          this.isStopped || this._next(n);
        }
        error(n) {
          this.isStopped || ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(n) {
          this.destination.next(n);
        }
        _error(n) {
          this.destination.error(n), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: n } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = n),
            this
          );
        }
      }
      class c extends a {
        constructor(n, e, t, s) {
          let i;
          super(), (this._parentSubscriber = n);
          let o = this;
          Object(l.a)(e)
            ? (i = e)
            : e &&
              ((i = e.next),
              (t = e.error),
              (s = e.complete),
              e !== r.a &&
                ((o = Object.create(e)),
                Object(l.a)(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = t),
            (this._complete = s);
        }
        next(n) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            o.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, n) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, n);
          }
        }
        error(n) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: t } = o.a;
            if (this._error)
              t && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, n), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, n), this.unsubscribe());
            else if (e.syncErrorThrowable)
              t ? ((e.syncErrorValue = n), (e.syncErrorThrown = !0)) : Object(u.a)(n), this.unsubscribe();
            else {
              if ((this.unsubscribe(), t)) throw n;
              Object(u.a)(n);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: n } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              o.a.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable
                ? (this.__tryOrSetError(n, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(n, e) {
          try {
            n.call(this._context, e);
          } catch (t) {
            if ((this.unsubscribe(), o.a.useDeprecatedSynchronousErrorHandling)) throw t;
            Object(u.a)(t);
          }
        }
        __tryOrSetError(n, e, t) {
          if (!o.a.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            e.call(this._context, t);
          } catch (l) {
            return o.a.useDeprecatedSynchronousErrorHandling
              ? ((n.syncErrorValue = l), (n.syncErrorThrown = !0), !0)
              : (Object(u.a)(l), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: n } = this;
          (this._context = null), (this._parentSubscriber = null), n.unsubscribe();
        }
      }
    },
    '8Y7J': function(n, e, t) {
      'use strict';
      t.d(e, 'ib', function() {
        return Ui;
      }),
        t.d(e, 'jb', function() {
          return Fi;
        }),
        t.d(e, 'kb', function() {
          return Hi;
        }),
        t.d(e, 'lb', function() {
          return zi;
        }),
        t.d(e, 'hb', function() {
          return Rs;
        }),
        t.d(e, 'gb', function() {
          return ws;
        }),
        t.d(e, 'g', function() {
          return Mi;
        }),
        t.d(e, 'Q', function() {
          return xi;
        }),
        t.d(e, 'x', function() {
          return Ci;
        }),
        t.d(e, 'R', function() {
          return ge;
        }),
        t.d(e, 'U', function() {
          return be;
        }),
        t.d(e, 'c', function() {
          return Ns;
        }),
        t.d(e, 'B', function() {
          return Vs;
        }),
        t.d(e, 'A', function() {
          return Ls;
        }),
        t.d(e, 'b', function() {
          return Us;
        }),
        t.d(e, 'd', function() {
          return Is;
        }),
        t.d(e, 'e', function() {
          return qs;
        }),
        t.d(e, 'T', function() {
          return ji;
        }),
        t.d(e, 'L', function() {
          return bi;
        }),
        t.d(e, 'W', function() {
          return mi;
        }),
        t.d(e, 't', function() {
          return Hs;
        }),
        t.d(e, 'f', function() {
          return $i;
        }),
        t.d(e, 'm', function() {
          return As;
        }),
        t.d(e, 'l', function() {
          return de;
        }),
        t.d(e, 'F', function() {
          return Ve;
        }),
        t.d(e, 'G', function() {
          return je;
        }),
        t.d(e, 'a', function() {
          return Ot;
        }),
        t.d(e, 'O', function() {
          return Z;
        }),
        t.d(e, 'M', function() {
          return al;
        }),
        t.d(e, 'Qb', function() {
          return f;
        }),
        t.d(e, 'S', function() {
          return w;
        }),
        t.d(e, 'q', function() {
          return gt;
        }),
        t.d(e, 'Rb', function() {
          return U;
        }),
        t.d(e, 'n', function() {
          return K;
        }),
        t.d(e, 'p', function() {
          return P;
        }),
        t.d(e, 'o', function() {
          return c;
        }),
        t.d(e, 'z', function() {
          return d;
        }),
        t.d(e, 'H', function() {
          return p;
        }),
        t.d(e, 'y', function() {
          return oi;
        }),
        t.d(e, 'C', function() {
          return ol;
        }),
        t.d(e, 'D', function() {
          return sl;
        }),
        t.d(e, 'E', function() {
          return il;
        }),
        t.d(e, 'i', function() {
          return Ys;
        }),
        t.d(e, 'j', function() {
          return Yt;
        }),
        t.d(e, 'k', function() {
          return tl;
        }),
        t.d(e, 'u', function() {
          return $;
        }),
        t.d(e, 'w', function() {
          return z;
        }),
        t.d(e, 'v', function() {
          return Ki;
        }),
        t.d(e, 'I', function() {
          return Di;
        }),
        t.d(e, 'J', function() {
          return Ei;
        }),
        t.d(e, 'K', function() {
          return Sl;
        }),
        t.d(e, 'N', function() {
          return Pl;
        }),
        t.d(e, 'h', function() {
          return dt;
        }),
        t.d(e, 'r', function() {
          return wl;
        }),
        t.d(e, 's', function() {
          return Cl;
        }),
        t.d(e, 'P', function() {
          return Et;
        }),
        t.d(e, 'V', function() {
          return Li;
        }),
        t.d(e, 'vb', function() {
          return At;
        }),
        t.d(e, 'Z', function() {
          return Fs;
        }),
        t.d(e, 'X', function() {
          return pt;
        }),
        t.d(e, 'Y', function() {
          return Xt;
        }),
        t.d(e, 'cb', function() {
          return Ne;
        }),
        t.d(e, 'db', function() {
          return Fe;
        }),
        t.d(e, 'eb', function() {
          return _e;
        }),
        t.d(e, 'tb', function() {
          return M;
        }),
        t.d(e, 'yb', function() {
          return Pt;
        }),
        t.d(e, 'Jb', function() {
          return _;
        }),
        t.d(e, 'wb', function() {
          return $t;
        }),
        t.d(e, 'xb', function() {
          return zt;
        }),
        t.d(e, 'sb', function() {
          return Ss;
        }),
        t.d(e, 'rb', function() {
          return Ms;
        }),
        t.d(e, 'ab', function() {
          return Cs;
        }),
        t.d(e, 'bb', function() {
          return xs;
        }),
        t.d(e, 'Pb', function() {
          return sn;
        }),
        t.d(e, 'Nb', function() {
          return kt;
        }),
        t.d(e, 'Tb', function() {
          return Tt;
        }),
        t.d(e, 'Sb', function() {
          return It;
        }),
        t.d(e, 'Ob', function() {
          return qt;
        }),
        t.d(e, 'Ub', function() {
          return jt;
        }),
        t.d(e, 'fb', function() {
          return Bi;
        }),
        t.d(e, 'mb', function() {
          return Ir;
        }),
        t.d(e, 'nb', function() {
          return vu;
        }),
        t.d(e, 'ob', function() {
          return Wl;
        }),
        t.d(e, 'pb', function() {
          return rs;
        }),
        t.d(e, 'qb', function() {
          return Wi;
        }),
        t.d(e, 'ub', function() {
          return yr;
        }),
        t.d(e, 'zb', function() {
          return Mr;
        }),
        t.d(e, 'Ab', function() {
          return Sr;
        }),
        t.d(e, 'Bb', function() {
          return lo;
        }),
        t.d(e, 'Cb', function() {
          return $r;
        }),
        t.d(e, 'Eb', function() {
          return ss;
        }),
        t.d(e, 'Hb', function() {
          return is;
        }),
        t.d(e, 'Db', function() {
          return io;
        }),
        t.d(e, 'Fb', function() {
          return oo;
        }),
        t.d(e, 'Gb', function() {
          return so;
        }),
        t.d(e, 'Ib', function() {
          return Yi;
        }),
        t.d(e, 'Kb', function() {
          return ao;
        }),
        t.d(e, 'Lb', function() {
          return zl;
        }),
        t.d(e, 'Mb', function() {
          return po;
        });
      var l = t('XNiG'),
        r = t('quSY'),
        s = t('HDdC'),
        i = t('VRyK'),
        o = t('w1tV');
      const u = '__parameters__';
      function a(n, e, t) {
        const l = (function(n) {
          return function(...e) {
            if (n) {
              const t = n(...e);
              for (const n in t) this[n] = t[n];
            }
          };
        })(e);
        function r(...n) {
          if (this instanceof r) return l.apply(this, n), this;
          const e = new r(...n);
          return (t.annotation = e), t;
          function t(n, t, l) {
            const r = n.hasOwnProperty(u) ? n[u] : Object.defineProperty(n, u, { value: [] })[u];
            for (; r.length <= l; ) r.push(null);
            return (r[l] = r[l] || []).push(e), n;
          }
        }
        return (
          t && (r.prototype = Object.create(t.prototype)), (r.prototype.ngMetadataName = n), (r.annotationCls = r), r
        );
      }
      const c = a('Inject', n => ({ token: n })),
        d = a('Optional'),
        h = a('Self'),
        p = a('SkipSelf');
      var b = (function(n) {
        return (
          (n[(n.Default = 0)] = 'Default'),
          (n[(n.Host = 1)] = 'Host'),
          (n[(n.Self = 2)] = 'Self'),
          (n[(n.SkipSelf = 4)] = 'SkipSelf'),
          (n[(n.Optional = 8)] = 'Optional'),
          n
        );
      })({});
      function g(n) {
        for (let e in n) if (n[e] === g) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function f(n) {
        return { token: n.token, providedIn: n.providedIn || null, factory: n.factory, value: void 0 };
      }
      function m(n) {
        const e = n[v];
        return e && e.token === n ? e : null;
      }
      const v = g({ ngInjectableDef: g });
      function _(n) {
        if ('string' == typeof n) return n;
        if (n instanceof Array) return '[' + n.map(_).join(', ') + ']';
        if (null == n) return '' + n;
        if (n.overriddenName) return `${n.overriddenName}`;
        if (n.name) return `${n.name}`;
        const e = n.toString();
        if (null == e) return '' + e;
        const t = e.indexOf('\n');
        return -1 === t ? e : e.substring(0, t);
      }
      const y = g({ __forward_ref__: g });
      function w(n) {
        return (
          (n.__forward_ref__ = w),
          (n.toString = function() {
            return _(this());
          }),
          n
        );
      }
      function C(n) {
        const e = n;
        return 'function' == typeof e && e.hasOwnProperty(y) && e.__forward_ref__ === w ? e() : n;
      }
      const x = 'undefined' != typeof globalThis && globalThis,
        O = 'undefined' != typeof window && window,
        k =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        S = 'undefined' != typeof global && global,
        M = x || S || O || k;
      class P {
        constructor(n, e) {
          (this._desc = n),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ngInjectableDef = f({ token: this, providedIn: e.providedIn || 'root', factory: e.factory }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const K = new P('INJECTOR', -1),
        E = new Object(),
        A = 'ngTempTokenPath',
        D = 'ngTokenPath',
        T = /\n/gm,
        I = '\u0275',
        q = '__source',
        N = g({ provide: String, useValue: g });
      let R,
        j = void 0;
      function V(n) {
        const e = j;
        return (j = n), e;
      }
      function L(n, e = b.Default) {
        if (void 0 === j) throw new Error('inject() must be called from an injection context');
        return null === j
          ? (function(n, e, t) {
              const l = m(n);
              if (l && 'root' == l.providedIn) return void 0 === l.value ? (l.value = l.factory()) : l.value;
              if (t & b.Optional) return null;
              throw new Error(`Injector: NOT_FOUND [${_(n)}]`);
            })(n, 0, e)
          : j.get(n, e & b.Optional ? null : void 0, e);
      }
      function U(n, e = b.Default) {
        return (R || L)(n, e);
      }
      class F {
        get(n, e = E) {
          if (e === E) {
            const e = new Error(`NullInjectorError: No provider for ${_(n)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      function H(n, e, t, l = null) {
        n = n && '\n' === n.charAt(0) && n.charAt(1) == I ? n.substr(2) : n;
        let r = _(e);
        if (e instanceof Array) r = e.map(_).join(' -> ');
        else if ('object' == typeof e) {
          let n = [];
          for (let t in e)
            if (e.hasOwnProperty(t)) {
              let l = e[t];
              n.push(t + ':' + ('string' == typeof l ? JSON.stringify(l) : _(l)));
            }
          r = `{${n.join(', ')}}`;
        }
        return `${t}${l ? '(' + l + ')' : ''}[${r}]: ${n.replace(T, '\n  ')}`;
      }
      class z {}
      class $ {}
      function B(n, e, t) {
        e >= n.length ? n.push(t) : n.splice(e, 0, t);
      }
      function W(n, e) {
        return e >= n.length - 1 ? n.pop() : n.splice(e, 1)[0];
      }
      const G = (function() {
          var n = { OnPush: 0, Default: 1 };
          return (n[n.OnPush] = 'OnPush'), (n[n.Default] = 'Default'), n;
        })(),
        Z = (function() {
          var n = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (n[n.Emulated] = 'Emulated'),
            (n[n.Native] = 'Native'),
            (n[n.None] = 'None'),
            (n[n.ShadowDom] = 'ShadowDom'),
            n
          );
        })(),
        Q = {},
        J = [],
        Y = g({ ngComponentDef: g }),
        X = g({ ngDirectiveDef: g }),
        nn = g({ ngPipeDef: g });
      let en = 0;
      function tn(n) {
        return (
          (function(n) {
            return n[Y] || null;
          })(n) ||
          (function(n) {
            return n[X] || null;
          })(n)
        );
      }
      function ln(n) {
        return (function(n) {
          return n[nn] || null;
        })(n);
      }
      function rn(n, e) {
        if (null == n) return Q;
        const t = {};
        for (const l in n)
          if (n.hasOwnProperty(l)) {
            let r = n[l],
              s = r;
            Array.isArray(r) && ((s = r[1]), (r = r[0])), (t[r] = l), e && (e[r] = s);
          }
        return t;
      }
      const sn = function(n) {
          const e = n.type,
            t = e.prototype,
            l = {},
            r = {
              type: e,
              providersResolver: null,
              consts: n.consts,
              vars: n.vars,
              factory: n.factory,
              template: n.template || null,
              ngContentSelectors: n.ngContentSelectors,
              hostBindings: n.hostBindings || null,
              contentQueries: n.contentQueries || null,
              declaredInputs: l,
              inputs: null,
              outputs: null,
              exportAs: n.exportAs || null,
              onChanges: null,
              onInit: t.ngOnInit || null,
              doCheck: t.ngDoCheck || null,
              afterContentInit: t.ngAfterContentInit || null,
              afterContentChecked: t.ngAfterContentChecked || null,
              afterViewInit: t.ngAfterViewInit || null,
              afterViewChecked: t.ngAfterViewChecked || null,
              onDestroy: t.ngOnDestroy || null,
              onPush: n.changeDetection === G.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: n.selectors,
              viewQuery: n.viewQuery || null,
              features: n.features || null,
              data: n.data || {},
              encapsulation: n.encapsulation || Z.Emulated,
              id: 'c',
              styles: n.styles || J,
              _: null,
              setInput: null,
              schemas: n.schemas || null,
              tView: null
            };
          return (
            (r._ =
              '' +
              {
                toString: () => {
                  const t = n.directives,
                    s = n.features,
                    i = n.pipes;
                  (r.id += en++),
                    (r.inputs = rn(n.inputs, l)),
                    (r.outputs = rn(n.outputs)),
                    s && s.forEach(n => n(r)),
                    (r.directiveDefs = t ? () => ('function' == typeof t ? t() : t).map(tn) : null),
                    (r.pipeDefs = i ? () => ('function' == typeof i ? i() : i).map(ln) : null),
                    e.hasOwnProperty(v) || (e[v] = f({ token: e, factory: n.factory }));
                }
              }),
            r
          );
        },
        on = 0,
        un = 1,
        an = 7,
        cn = 12,
        dn = 19;
      let hn = null;
      const pn = new Map();
      let bn = null;
      const gn = 1,
        fn = 0;
      function mn(n, e) {
        return (
          (bn && n === bn) ||
            ((bn = n),
            e && (hn = pn.get(n) || null),
            (hn = hn || { classesBitMask: fn, classesIndex: gn, stylesBitMask: fn, stylesIndex: gn })),
          hn
        );
      }
      function vn(n, e) {
        return (function(n) {
          for (; Array.isArray(n); ) n = n[on];
          return n;
        })(e[n.index]);
      }
      function _n(n, e) {
        return e[un].data[n + dn];
      }
      let yn = null;
      function wn() {
        return xn;
      }
      let Cn,
        xn,
        On,
        kn = 1,
        Sn = 0,
        Mn = 0,
        Pn = -1;
      function Kn() {
        return Pn;
      }
      function En() {
        return On;
      }
      const An = (() =>
          (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(M))(),
        Dn = '--MAP--',
        Tn = 0;
      function In(n, e) {
        e === Tn
          ? n[2] > Tn &&
            (function(n) {
              Nn(n, 2 | qn(n));
            })(n)
          : (n[2] = e);
      }
      function qn(n) {
        return n[1];
      }
      function Nn(n, e) {
        n[1] = e;
      }
      function Rn(n, e) {
        return n[e + 2];
      }
      function jn(n, e) {
        return 1 & n[e + 0];
      }
      function Vn(n, e) {
        return (1 & jn(n, e)) > 0;
      }
      function Ln(n, e) {
        return n[e + 0] >> 1;
      }
      function Un(n, e, t) {
        const l = jn(n, e);
        n[e + 0] = l | (t << 1);
      }
      function Fn(n, e) {
        return n[e + 1];
      }
      function Hn(n, e, t) {
        return n[e + 3 + t];
      }
      function zn(n, e) {
        return !(!n || e !== n[2]);
      }
      function $n(n) {
        return (1 & qn(n)) > 0;
      }
      function Bn(n) {
        return (2 & qn(n)) > 0;
      }
      function Wn(n) {
        return 6 + n[4];
      }
      function Gn(n, e) {
        let t = Array.isArray(n) ? n[0] : n,
          l = Array.isArray(e) ? e[0] : e;
        return (
          t instanceof String && (t = t.toString()),
          l instanceof String && (l = l.toString()),
          (function(n, e) {
            return !(n != n && e != e) && n !== e;
          })(t, l)
        );
      }
      function Zn(n) {
        return null != n && '' !== n;
      }
      function Qn(n, e, t = ' ') {
        return n + (e.length && n.length ? t : '') + e;
      }
      function Jn(n) {
        return n.replace(/[a-z][A-Z]/g, n => n.charAt(0) + '-' + n.charAt(1)).toLowerCase();
      }
      function Yn(n) {
        return Xn(n) ? n[0] : n;
      }
      function Xn(n) {
        return Array.isArray(n) && n.length >= 6 && 'string' != typeof n[1];
      }
      function ne(n, e) {
        return n[e + 0];
      }
      function ee(n, e, t) {
        n[e + 1] = t;
      }
      function te(n, e) {
        return n[e + 1];
      }
      const le = (function() {
        var n = { Important: 1, DashCase: 2 };
        return (n[n.Important] = 'Important'), (n[n.DashCase] = 'DashCase'), n;
      })();
      function re(n) {
        return !!n.listen;
      }
      const se = 'ngDebugContext',
        ie = 'ngOriginalError',
        oe = 'ngErrorLogger';
      function ue(n) {
        return n[se];
      }
      function ae(n) {
        return n[ie];
      }
      function ce(n, ...e) {
        n.error(...e);
      }
      class de {
        constructor() {
          this._console = console;
        }
        handleError(n) {
          const e = this._findOriginalError(n),
            t = this._findContext(n),
            l = (function(n) {
              return n[oe] || ce;
            })(n);
          l(this._console, 'ERROR', n),
            e && l(this._console, 'ORIGINAL ERROR', e),
            t && l(this._console, 'ERROR CONTEXT', t);
        }
        _findContext(n) {
          return n ? (ue(n) ? ue(n) : this._findContext(ae(n))) : null;
        }
        _findOriginalError(n) {
          let e = ae(n);
          for (; e && ae(e); ) e = ae(e);
          return e;
        }
      }
      let he = !0,
        pe = !1;
      function be() {
        return (pe = !0), he;
      }
      function ge() {
        if (pe) throw new Error('Cannot enable prod mode after platform setup.');
        he = !1;
      }
      class fe {
        constructor(n) {
          if (
            ((this.defaultDoc = n),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const n = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(n),
              (this.inertBodyElement = this.inertDocument.createElement('body')),
              n.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector('svg')
              ? ((this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector('svg img') &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (n) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(n) {
          n = '<body><remove></remove>' + n + '</body>';
          try {
            n = encodeURI(n);
          } catch (l) {
            return null;
          }
          const e = new XMLHttpRequest();
          (e.responseType = 'document'), e.open('GET', 'data:text/html;charset=utf-8,' + n, !1), e.send(void 0);
          const t = e.response.body;
          return t.removeChild(t.firstChild), t;
        }
        getInertBodyElement_DOMParser(n) {
          n = '<body><remove></remove>' + n + '</body>';
          try {
            const e = new window.DOMParser().parseFromString(n, 'text/html').body;
            return e.removeChild(e.firstChild), e;
          } catch (e) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(n) {
          const e = this.inertDocument.createElement('template');
          return 'content' in e
            ? ((e.innerHTML = n), e)
            : ((this.inertBodyElement.innerHTML = n),
              this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(n) {
          const e = n.attributes;
          for (let l = e.length - 1; 0 < l; l--) {
            const t = e.item(l).name;
            ('xmlns:ns1' !== t && 0 !== t.indexOf('ns1:')) || n.removeAttribute(t);
          }
          let t = n.firstChild;
          for (; t; ) t.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(t), (t = t.nextSibling);
        }
      }
      const me = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        ve = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function _e(n) {
        return (n = String(n)).match(me) || n.match(ve)
          ? n
          : (be() && console.warn(`WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`),
            'unsafe:' + n);
      }
      function ye(n) {
        const e = {};
        for (const t of n.split(',')) e[t] = !0;
        return e;
      }
      function we(...n) {
        const e = {};
        for (const t of n) for (const n in t) t.hasOwnProperty(n) && (e[n] = !0);
        return e;
      }
      const Ce = ye('area,br,col,hr,img,wbr'),
        xe = ye('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Oe = ye('rp,rt'),
        ke = we(Oe, xe),
        Se = we(
          Ce,
          we(
            xe,
            ye(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          we(
            Oe,
            ye(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          ke
        ),
        Me = ye('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Pe = ye('srcset'),
        Ke = we(
          Me,
          Pe,
          ye(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          ye(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        Ee = ye('script,style,template');
      class Ae {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(n) {
          let e = n.firstChild,
            t = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (t = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              t && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let n = this.checkClobberedElement(e, e.nextSibling);
                if (n) {
                  e = n;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(n) {
          const e = n.nodeName.toLowerCase();
          if (!Se.hasOwnProperty(e)) return (this.sanitizedSomething = !0), !Ee.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const t = n.attributes;
          for (let r = 0; r < t.length; r++) {
            const n = t.item(r),
              e = n.name,
              s = e.toLowerCase();
            if (!Ke.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = n.value;
            Me[s] && (i = _e(i)),
              Pe[s] &&
                ((l = i),
                (i = (l = String(l))
                  .split(',')
                  .map(n => _e(n.trim()))
                  .join(', '))),
              this.buf.push(' ', e, '="', Ie(i), '"');
          }
          var l;
          return this.buf.push('>'), !0;
        }
        endElement(n) {
          const e = n.nodeName.toLowerCase();
          Se.hasOwnProperty(e) && !Ce.hasOwnProperty(e) && (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(n) {
          this.buf.push(Ie(n));
        }
        checkClobberedElement(n, e) {
          if (
            e &&
            (n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`);
          return e;
        }
      }
      const De = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Te = /([^\#-~ |!])/g;
      function Ie(n) {
        return n
          .replace(/&/g, '&amp;')
          .replace(De, function(n) {
            return '&#' + (1024 * (n.charCodeAt(0) - 55296) + (n.charCodeAt(1) - 56320) + 65536) + ';';
          })
          .replace(Te, function(n) {
            return '&#' + n.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let qe;
      function Ne(n, e) {
        let t = null;
        try {
          qe = qe || new fe(n);
          let l = e ? String(e) : '';
          t = qe.getInertBodyElement(l);
          let r = 5,
            s = l;
          do {
            if (0 === r) throw new Error('Failed to sanitize html because the input is unstable');
            r--, (l = s), (s = t.innerHTML), (t = qe.getInertBodyElement(l));
          } while (l !== s);
          const i = new Ae(),
            o = i.sanitizeChildren(Re(t) || t);
          return (
            be() &&
              i.sanitizedSomething &&
              console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'),
            o
          );
        } finally {
          if (t) {
            const n = Re(t) || t;
            for (; n.firstChild; ) n.removeChild(n.firstChild);
          }
        }
      }
      function Re(n) {
        return 'content' in n &&
          (function(n) {
            return n.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === n.nodeName;
          })(n)
          ? n.content
          : null;
      }
      const je = (function() {
        var n = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
        return (
          (n[n.NONE] = 'NONE'),
          (n[n.HTML] = 'HTML'),
          (n[n.STYLE] = 'STYLE'),
          (n[n.SCRIPT] = 'SCRIPT'),
          (n[n.URL] = 'URL'),
          (n[n.RESOURCE_URL] = 'RESOURCE_URL'),
          n
        );
      })();
      class Ve {}
      const Le = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        Ue = /^url\(([^)]+)\)$/;
      function Fe(n) {
        if (!(n = String(n).trim())) return '';
        const e = n.match(Ue);
        return (e && _e(e[1]) === e[1]) ||
          (n.match(Le) &&
            (function(n) {
              let e = !0,
                t = !0;
              for (let l = 0; l < n.length; l++) {
                const r = n.charAt(l);
                "'" === r && t ? (e = !e) : '"' === r && e && (t = !t);
              }
              return e && t;
            })(n))
          ? n
          : (be() && console.warn(`WARNING: sanitizing unsafe style value ${n} (see http://g.co/ng/security#xss).`),
            'unsafe');
      }
      const He = /([A-Z])/g;
      function ze(n) {
        try {
          return null != n ? n.toString().slice(0, 30) : n;
        } catch (e) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      const $e = 1,
        Be = 0,
        We = null,
        Ge = 1;
      let Ze = [];
      function Qe(n, e, t, l, r, s, i, o, u) {
        $n(n) ||
          (i
            ? (function(n, e, t, l, r) {
                Ze.unshift(n, e, t, l, r);
              })(n, t, l, r, u)
            : (Ze.length && Je(), Ye(n, t, l, r, u)));
        const a = o || Gn(e[r], s);
        return a && (e[r] = s), a;
      }
      function Je() {
        let n = 0;
        for (; n < Ze.length; ) Ye(Ze[n++], Ze[n++], Ze[n++], Ze[n++], Ze[n++]);
        Ze.length = 0;
      }
      function Ye(n, e, t, l, r) {
        let s = !1;
        if (t) {
          let i = !1,
            o = Wn(n);
          for (; o < n.length; ) {
            const s = Fn(n, o),
              u = Rn(n, o);
            if ((i = t <= u)) {
              t < u && Xe(n, o, t, r), nt(n, !1, o, l, e);
              break;
            }
            o += 3 + s;
          }
          i || (Xe(n, n.length, t, r), nt(n, !1, o, l, e), (s = !0));
        } else nt(n, !0, 3, l, e), (s = !0);
        return s;
      }
      function Xe(n, e, t, l) {
        n.splice(e, 0, l ? 1 : 0, Ge, t, We), Un(n, e, $e);
      }
      function nt(n, e, t, l, r) {
        const s = t + 3;
        let i = s + Fn(n, t);
        if ((e || i--, 'number' == typeof l)) {
          for (let e = s; e <= i; e++) if (n[e] === l) return;
          n.splice(i, 0, l), n[t + 1]++, Un(n, t, Ln(n, t) | (1 << r));
        } else null !== l && null == n[i] && (n[i] = l);
      }
      function et(n, e, t, l, r, s, i, o) {
        return r &&
          l &&
          ((function(n) {
            if (!$n(n)) {
              const e = Yn(n);
              e &&
                (function(n, e) {
                  for (let t = 1; t < e.length; t += 2) {
                    const l = te(e, t);
                    l && Ye(n, -1, ne(e, t), l, !1);
                  }
                })(n, e),
                (function(n) {
                  Nn(n, 1 | qn(n));
                })(n);
            }
          })(l),
          (function(n, e) {
            return n && e > fn;
          })(l, s))
          ? ((function(n, e, t, l, r, s, i) {
              const o = !0 === (u = r) ? -1 : !1 === u ? 0 : u;
              var u;
              const a = tt,
                c = (o & Ln(n, 3)) > 0 ? 1 : 0;
              let d = Wn(n);
              for (; d < n.length; ) {
                const r = Fn(n, d);
                if (o & Ln(n, d)) {
                  let o = !1;
                  const u = Rn(n, d),
                    h = r - 1,
                    p = Hn(n, d, h);
                  for (let r = 0; r < h; r++) {
                    const a = Hn(n, d, r),
                      c = l[a];
                    if (Zn(c)) {
                      s(e, t, u, i && Vn(n, d) ? i(u, c, 2) : c, a), (o = !0);
                      break;
                    }
                  }
                  if (a) {
                    const r = a(n, e, t, l, s, i, c | (o ? 4 : 2), u, p);
                    o = o || r;
                  }
                  o || s(e, t, u, p);
                }
                d += 3 + r;
              }
              a && a(n, e, t, l, s, i, c);
            })(l, n, e, t, s, i, o),
            !0)
          : r;
      }
      let tt = null;
      const lt = (n, e, t, l) => {
          const r = e.style;
          l
            ? ((l = l.toString()), n && re(n) ? n.setStyle(e, t, l, le.DashCase) : r && r.setProperty(t, l))
            : n && re(n)
            ? n.removeStyle(e, t, le.DashCase)
            : r && r.removeProperty(t);
        },
        rt = (n, e, t, l) => {
          if ('' !== t) {
            const r = e.classList;
            l ? (n && re(n) ? n.addClass(e, t) : r && r.add(t)) : n && re(n) ? n.removeClass(e, t) : r && r.remove(t);
          }
        },
        st = {},
        it = (n, e, t, l, r, s, i, o, u) => {
          let a = !1;
          if (Fn(n, 3)) {
            let c = !0;
            const d = !o;
            d && -2 & i && ((c = !1), (a = !0)),
              c &&
                (a = (function n(e, t, l, r, s, i, o, u, a, c) {
                  let d = !1;
                  if (a < Fn(e, 3)) {
                    const h = Hn(e, 3, a),
                      p = r[h];
                    let b = (function(n) {
                      return n >= at.length && at.push(1), at[n];
                    })(a);
                    for (; b < p.length; ) {
                      const g = ne(p, b),
                        f = u && g > u,
                        m = !f && g === u,
                        v = te(p, b),
                        _ = Zn(v);
                      let y = n(e, t, l, r, s, i, f ? o : ot(o, _, m), f ? u : g, a + 1, c);
                      if (f) {
                        d || (d = y);
                        break;
                      }
                      if (!y && ut(o, m)) {
                        const n = m && !_,
                          e = n ? c : v,
                          r = n ? h : null;
                        s(t, l, g, i ? i(g, e, 3) : e, r), (y = !0);
                      }
                      (d = y && m), (b += 2);
                    }
                    if (((at[a] = b), 1 === p.length || !u)) return n(e, t, l, r, s, i, o, u, a + 1, c);
                  }
                  return d;
                })(n, e, t, l, r, s, i, o || null, 0, u || null)),
              d &&
                (function() {
                  for (let n = 0; n < at.length; n++) at[n] = 1;
                })();
          }
          return a;
        };
      function ot(n, e, t) {
        let l = n;
        return e || 4 & n || !(t || 1 & n) ? ((l |= 4), (l &= -3)) : ((l |= 2), (l &= -5)), l;
      }
      function ut(n, e) {
        let t = (1 & n) > 0;
        return t ? 4 & n && e && (t = !1) : 2 & n && (t = e), t;
      }
      const at = [];
      function ct(n, e, t, l) {
        for (let r = 1; r < n.length; r += 2) {
          const s = ne(n, r);
          if (e <= s) {
            let i = !1;
            if (s === e) {
              const e = n[r];
              (!l && Zn(e)) || ((i = !0), ee(n, r, t));
            } else (i = !0), n.splice(r, 0, e, t);
            return i;
          }
        }
        return n.push(e, t), !0;
      }
      let dt = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => ht()), n;
      })();
      const ht = (...n) => {},
        pt = new P('The presence of this token marks an injector as being the root injector.'),
        bt = function(n, e, t) {
          return new wt(n, e, t);
        };
      let gt = (() => {
        class n {
          static create(n, e) {
            return Array.isArray(n) ? bt(n, e, '') : bt(n.providers, n.parent, n.name || '');
          }
        }
        return (
          (n.THROW_IF_NOT_FOUND = E),
          (n.NULL = new F()),
          (n.ngInjectableDef = f({ token: n, providedIn: 'any', factory: () => U(K) })),
          (n.__NG_ELEMENT_ID__ = -1),
          n
        );
      })();
      const ft = function(n) {
          return n;
        },
        mt = [],
        vt = ft,
        _t = function() {
          return Array.prototype.slice.call(arguments);
        },
        yt = '\u0275';
      class wt {
        constructor(n, e = gt.NULL, t = null) {
          (this.parent = e), (this.source = t);
          const l = (this._records = new Map());
          l.set(gt, { token: gt, fn: ft, deps: mt, value: this, useNew: !1 }),
            l.set(K, { token: K, fn: ft, deps: mt, value: this, useNew: !1 }),
            (function n(e, t) {
              if (t)
                if ((t = C(t)) instanceof Array) for (let l = 0; l < t.length; l++) n(e, t[l]);
                else {
                  if ('function' == typeof t) throw xt('Function/Class not supported', t);
                  if (!t || 'object' != typeof t || !t.provide) throw xt('Unexpected provider', t);
                  {
                    let n = C(t.provide);
                    const l = (function(n) {
                      const e = (function(n) {
                        let e = mt;
                        const t = n.deps;
                        if (t && t.length) {
                          e = [];
                          for (let n = 0; n < t.length; n++) {
                            let l = 6,
                              r = C(t[n]);
                            if (r instanceof Array)
                              for (let n = 0, e = r; n < e.length; n++) {
                                const t = e[n];
                                t instanceof d || t == d
                                  ? (l |= 1)
                                  : t instanceof p || t == p
                                  ? (l &= -3)
                                  : t instanceof h || t == h
                                  ? (l &= -5)
                                  : (r = t instanceof c ? t.token : C(t));
                              }
                            e.push({ token: r, options: l });
                          }
                        } else if (n.useExisting) e = [{ token: C(n.useExisting), options: 6 }];
                        else if (!(t || N in n)) throw xt("'deps' required", n);
                        return e;
                      })(n);
                      let t = ft,
                        l = mt,
                        r = !1,
                        s = C(n.provide);
                      if (N in n) l = n.useValue;
                      else if (n.useFactory) t = n.useFactory;
                      else if (n.useExisting);
                      else if (n.useClass) (r = !0), (t = C(n.useClass));
                      else {
                        if ('function' != typeof s)
                          throw xt(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            n
                          );
                        (r = !0), (t = s);
                      }
                      return { deps: e, fn: t, useNew: r, value: l };
                    })(t);
                    if (!0 === t.multi) {
                      let l = e.get(n);
                      if (l) {
                        if (l.fn !== _t) throw Ct(n);
                      } else e.set(n, (l = { token: t.provide, deps: [], useNew: !1, fn: _t, value: mt }));
                      l.deps.push({ token: (n = t), options: 6 });
                    }
                    const r = e.get(n);
                    if (r && r.fn == _t) throw Ct(n);
                    e.set(n, l);
                  }
                }
            })(l, n);
        }
        get(n, e, t = b.Default) {
          const l = this._records.get(n);
          try {
            return (function n(e, t, l, r, s, i) {
              try {
                return (function(e, t, l, r, s, i) {
                  let o;
                  if (!t || i & b.SkipSelf) i & b.Self || (o = r.get(e, s, b.Default));
                  else {
                    if ((o = t.value) == vt) throw Error(yt + 'Circular dependency');
                    if (o === mt) {
                      t.value = vt;
                      let e = void 0,
                        s = t.useNew,
                        i = t.fn,
                        u = t.deps,
                        a = mt;
                      if (u.length) {
                        a = [];
                        for (let e = 0; e < u.length; e++) {
                          const t = u[e],
                            s = t.options,
                            i = 2 & s ? l.get(t.token) : void 0;
                          a.push(
                            n(t.token, i, l, i || 4 & s ? r : gt.NULL, 1 & s ? null : gt.THROW_IF_NOT_FOUND, b.Default)
                          );
                        }
                      }
                      t.value = o = s ? new i(...a) : i.apply(e, a);
                    }
                  }
                  return o;
                })(e, t, l, r, s, i);
              } catch (o) {
                throw (o instanceof Error || (o = new Error(o)),
                (o[A] = o[A] || []).unshift(e),
                t && t.value == vt && (t.value = mt),
                o);
              }
            })(n, l, this._records, this.parent, e, t);
          } catch (r) {
            return (function(n, e, t, l) {
              const r = n[A];
              throw (e[q] && r.unshift(e[q]),
              (n.message = H('\n' + n.message, r, 'StaticInjectorError', l)),
              (n[D] = r),
              (n[A] = null),
              n);
            })(r, n, 0, this.source);
          }
        }
        toString() {
          const n = [];
          return this._records.forEach((e, t) => n.push(_(t))), `StaticInjector[${n.join(', ')}]`;
        }
      }
      function Ct(n) {
        return xt('Cannot mix multi providers and regular providers', n);
      }
      function xt(n, e) {
        return new Error(H(n, e, 'StaticInjectorError'));
      }
      const Ot = new P('AnalyzeForEntryComponents');
      function kt(n) {
        const e = wn(),
          t = e[un];
        t.firstTemplatePass &&
          ((function(n, e, t) {
            const l = n.expandoInstructions,
              r = l.length;
            r >= 2 && l[r - 2] === e.hostBindings ? (l[r - 1] = l[r - 1] + t) : l.push(e.hostBindings, t);
          })(t, yn, n),
          (function(n, e, t) {
            for (let l = 0; l < t; l++) e.push(st), n.blueprint.push(st), n.data.push(null);
          })(t, e, n));
      }
      let St = null;
      function Mt() {
        if (!St) {
          const n = M.Symbol;
          if (n && n.iterator) St = n.iterator;
          else {
            const n = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < n.length; ++e) {
              const t = n[e];
              'entries' !== t && 'size' !== t && Map.prototype[t] === Map.prototype.entries && (St = t);
            }
          }
        }
        return St;
      }
      function Pt(n, e) {
        return n === e || ('number' == typeof n && 'number' == typeof e && isNaN(n) && isNaN(e));
      }
      function Kt(n, e) {
        const t = At(n),
          l = At(e);
        if (t && l)
          return (function(n, e, t) {
            const l = n[Mt()](),
              r = e[Mt()]();
            for (;;) {
              const n = l.next(),
                e = r.next();
              if (n.done && e.done) return !0;
              if (n.done || e.done) return !1;
              if (!t(n.value, e.value)) return !1;
            }
          })(n, e, Kt);
        {
          const r = n && ('object' == typeof n || 'function' == typeof n),
            s = e && ('object' == typeof e || 'function' == typeof e);
          return !(t || !r || l || !s) || Pt(n, e);
        }
      }
      class Et {
        constructor(n) {
          this.wrapped = n;
        }
        static wrap(n) {
          return new Et(n);
        }
        static unwrap(n) {
          return Et.isWrapped(n) ? n.wrapped : n;
        }
        static isWrapped(n) {
          return n instanceof Et;
        }
      }
      function At(n) {
        return !!Dt(n) && (Array.isArray(n) || (!(n instanceof Map) && Mt() in n));
      }
      function Dt(n) {
        return null !== n && ('function' == typeof n || 'object' == typeof n);
      }
      function Tt() {
        var n, e;
        wn()[un].firstTemplatePass && ((n = Cn), (e = Vt()), In(Ut(n), e), In(Lt(n), e));
      }
      function It(n) {
        const e = Kn(),
          t = wn(),
          l = _n(e, t),
          r = Lt(l),
          s = Vt(),
          i = t[an]++;
        !s &&
          (function(n) {
            return 0 != (16 & n.flags);
          })(l) &&
          n !== st &&
          (Rt(r, t, l, i, n, !1), (n = st)),
          Nt(e, r, i, n, !1, Ht());
      }
      function qt(n) {
        !(function(n, e) {
          const t = wn(),
            l = _n(n, t),
            r = Ut(l),
            s = Vt(),
            i = t[an]++;
          !s &&
            (function(n) {
              return 0 != (8 & n.flags);
            })(l) &&
            e !== st &&
            (Rt(r, t, l, i, e, !0), (e = st)),
            Nt(n, r, i, e, !0, Ht());
        })(Kn(), n);
      }
      function Nt(n, e, t, l, r, s) {
        tt = it;
        const i = wn();
        let o = !1;
        if (l !== st) {
          const u = vn(_n(n, i), i),
            a = i[t];
          o = Gn(a, l);
          const c = (function(n, e, t) {
            const l = Array.isArray(n) ? n : [null];
            l[0] = e || null;
            for (let o = 1; o < l.length; o += 2) ee(l, o, null);
            let r,
              s = null,
              i = !1;
            if (
              ('string' == typeof e
                ? e.length && ((s = e.split(/\s+/)), (i = !0))
                : ((s = e ? Object.keys(e) : null), (r = e)),
              s)
            )
              for (let o = 0; o < s.length; o++) {
                const n = s[o];
                ct(l, t ? Jn(n) : n, !!i || r[n], !0);
              }
            return l;
          })(a, l, !r);
          r
            ? (function(n, e, t, l, r, s, i, o) {
                const u = mn(t, Bn(n)),
                  a = Be;
                (!Qe(n, e, a, null, r, s, i, o, !1) && !o) || (u.classesBitMask |= 1 << a);
              })(e, i, u, 0, t, c, s, o)
            : (function(n, e, t, l, r, s, i, o, u) {
                const a = mn(t, Bn(n)),
                  c = Be;
                (!Qe(n, e, c, null, r, s, o, u, !0) && !u) || (a.stylesBitMask |= 1 << c);
              })(e, i, u, 0, t, c, En(), s, o);
        }
        return o;
      }
      function Rt(n, e, t, l, r, s) {
        e[l] !== r &&
          ((r || $n(n)) &&
            (function(n, e, t) {
              const l = n[un];
              for (let r = 0; r < e.length; ) {
                const s = e[r++],
                  i = e[r++],
                  o = e[r++],
                  u = n[s],
                  a = l.data[s];
                a.setInput ? a.setInput(u, t, i, o) : (u[o] = t);
              }
            })(
              e,
              t.inputs[s ? 'class' : 'style'],
              (function(n, e, t) {
                let l = e;
                var r;
                return (
                  n.length > 0 &&
                    (l = t
                      ? Qn(n, ((r = e) && 'string' != typeof r && (r = Object.keys(r).join(' ')), r || ''))
                      : Qn(
                          n,
                          (function(n) {
                            let e = '';
                            if (n) {
                              const t = Object.keys(n);
                              for (let l = 0; l < t.length; l++) {
                                const r = t[l];
                                e = Qn(e, `${r}:${n[r]}`, ';');
                              }
                            }
                            return e;
                          })(e),
                          ';'
                        )),
                  l
                );
              })(
                (function(n) {
                  const e = Yn(n);
                  return (e && e[0]) || '';
                })(n),
                r,
                s
              )
            ),
          (e[l] = r));
      }
      function jt() {
        const n = Kn(),
          e = wn(),
          t = _n(n, e),
          l = (function(n, e) {
            return 3 === n.type ? e[cn] : null;
          })(t, e),
          r = vn(t, e),
          s = Vt(),
          i = En();
        (function(n, e, t, l, r, s, i) {
          const o = t ? Bn(t) : !!l && Bn(l),
            u = zn(t, s),
            a = zn(l, s);
          Ze.length && (u || a) && Je();
          const c = mn(r, o),
            d = et(n, r, e, t, u, c.classesBitMask, rt, null),
            h = et(n, r, e, l, a, c.stylesBitMask, lt, i);
          d && h
            ? ((hn = null),
              (bn = null),
              o &&
                (function(n) {
                  pn.delete(n);
                })(r))
            : o &&
              (function(n, e) {
                pn.set(n, e);
              })(r, c);
        })(l, e, Ut(t), Lt(t), r, s, i),
          (On = null);
      }
      function Vt() {
        return kn + Sn;
      }
      function Lt(n) {
        return Ft(n, !1);
      }
      function Ut(n) {
        return Ft(n, !0);
      }
      function Ft(n, e) {
        let t = e ? n.classes : n.styles;
        return Xn(t) || ((t = [t || [''], 0, Tn, 1, 0, Dn]), e ? (n.classes = t) : (n.styles = t)), t;
      }
      function Ht() {
        return Mn > 0;
      }
      function zt(n) {
        return !!n && 'function' == typeof n.then;
      }
      function $t(n) {
        return !!n && 'function' == typeof n.subscribe;
      }
      class Bt {
        constructor(n, e, t) {
          (this.previousValue = n), (this.currentValue = e), (this.firstChange = t);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class Wt {}
      class Gt {}
      function Zt(n) {
        const e = Error(`No component factory found for ${_(n)}. Did you add it to @NgModule.entryComponents?`);
        return (e[Qt] = n), e;
      }
      const Qt = 'ngComponent';
      class Jt {
        resolveComponentFactory(n) {
          throw Zt(n);
        }
      }
      let Yt = (() => {
        class n {}
        return (n.NULL = new Jt()), n;
      })();
      class Xt {
        constructor(n, e, t) {
          (this._parent = e), (this._ngModule = t), (this._factories = new Map());
          for (let l = 0; l < n.length; l++) {
            const e = n[l];
            this._factories.set(e.componentType, e);
          }
        }
        resolveComponentFactory(n) {
          let e = this._factories.get(n);
          if ((!e && this._parent && (e = this._parent.resolveComponentFactory(n)), !e)) throw Zt(n);
          return new nl(e, this._ngModule);
        }
      }
      class nl extends Gt {
        constructor(n, e) {
          super(),
            (this.factory = n),
            (this.ngModule = e),
            (this.selector = n.selector),
            (this.componentType = n.componentType),
            (this.ngContentSelectors = n.ngContentSelectors),
            (this.inputs = n.inputs),
            (this.outputs = n.outputs);
        }
        create(n, e, t, l) {
          return this.factory.create(n, e, t, l || this.ngModule);
        }
      }
      function el(...n) {}
      let tl = (() => {
        class n {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (n.__NG_ELEMENT_ID__ = () => ll(n)), n;
      })();
      const ll = el;
      class rl {}
      class sl {}
      const il = (function() {
        var n = { Important: 1, DashCase: 2 };
        return (n[n.Important] = 'Important'), (n[n.DashCase] = 'DashCase'), n;
      })();
      let ol = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => ul()), n;
      })();
      const ul = el;
      class al {
        constructor(n) {
          (this.full = n),
            (this.major = n.split('.')[0]),
            (this.minor = n.split('.')[1]),
            (this.patch = n
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const cl = new al('8.2.14');
      class dl {
        constructor() {}
        supports(n) {
          return At(n);
        }
        create(n) {
          return new pl(n);
        }
      }
      const hl = (n, e) => e;
      class pl {
        constructor(n) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = n || hl);
        }
        forEachItem(n) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) n(e);
        }
        forEachOperation(n) {
          let e = this._itHead,
            t = this._removalsHead,
            l = 0,
            r = null;
          for (; e || t; ) {
            const s = !t || (e && e.currentIndex < ml(t, l, r)) ? e : t,
              i = ml(s, l, r),
              o = s.currentIndex;
            if (s === t) l--, (t = t._nextRemoved);
            else if (((e = e._next), null == s.previousIndex)) l++;
            else {
              r || (r = []);
              const n = i - l,
                e = o - l;
              if (n != e) {
                for (let t = 0; t < n; t++) {
                  const l = t < r.length ? r[t] : (r[t] = 0),
                    s = l + t;
                  e <= s && s < n && (r[t] = l + 1);
                }
                r[s.previousIndex] = e - n;
              }
            }
            i !== o && n(s, i, o);
          }
        }
        forEachPreviousItem(n) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) n(e);
        }
        forEachAddedItem(n) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) n(e);
        }
        forEachMovedItem(n) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) n(e);
        }
        forEachRemovedItem(n) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) n(e);
        }
        forEachIdentityChange(n) {
          let e;
          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) n(e);
        }
        diff(n) {
          if ((null == n && (n = []), !At(n)))
            throw new Error(`Error trying to diff '${_(n)}'. Only arrays and iterables are allowed`);
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let e,
            t,
            l,
            r = this._itHead,
            s = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let e = 0; e < this.length; e++)
              (l = this._trackByFn(e, (t = n[e]))),
                null !== r && Pt(r.trackById, l)
                  ? (s && (r = this._verifyReinsertion(r, t, l, e)), Pt(r.item, t) || this._addIdentityChange(r, t))
                  : ((r = this._mismatch(r, t, l, e)), (s = !0)),
                (r = r._next);
          } else
            (e = 0),
              (function(n, e) {
                if (Array.isArray(n)) for (let t = 0; t < n.length; t++) e(n[t]);
                else {
                  const t = n[Mt()]();
                  let l;
                  for (; !(l = t.next()).done; ) e(l.value);
                }
              })(n, n => {
                (l = this._trackByFn(e, n)),
                  null !== r && Pt(r.trackById, l)
                    ? (s && (r = this._verifyReinsertion(r, n, l, e)), Pt(r.item, n) || this._addIdentityChange(r, n))
                    : ((r = this._mismatch(r, n, l, e)), (s = !0)),
                  (r = r._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(r), (this.collection = n), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let n, e;
            for (n = this._previousItHead = this._itHead; null !== n; n = n._next) n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded) n.previousIndex = n.currentIndex;
            for (this._additionsHead = this._additionsTail = null, n = this._movesHead; null !== n; n = e)
              (n.previousIndex = n.currentIndex), (e = n._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(n, e, t, l) {
          let r;
          return (
            null === n ? (r = this._itTail) : ((r = n._prev), this._remove(n)),
            null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(t, l))
              ? (Pt(n.item, e) || this._addIdentityChange(n, e), this._moveAfter(n, r, l))
              : null !== (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(t, null))
              ? (Pt(n.item, e) || this._addIdentityChange(n, e), this._reinsertAfter(n, r, l))
              : (n = this._addAfter(new bl(e, t), r, l)),
            n
          );
        }
        _verifyReinsertion(n, e, t, l) {
          let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(t, null);
          return (
            null !== r
              ? (n = this._reinsertAfter(r, n._prev, l))
              : n.currentIndex != l && ((n.currentIndex = l), this._addToMoves(n, l)),
            n
          );
        }
        _truncate(n) {
          for (; null !== n; ) {
            const e = n._next;
            this._addToRemovals(this._unlink(n)), (n = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(n, e, t) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const l = n._prevRemoved,
            r = n._nextRemoved;
          return (
            null === l ? (this._removalsHead = r) : (l._nextRemoved = r),
            null === r ? (this._removalsTail = l) : (r._prevRemoved = l),
            this._insertAfter(n, e, t),
            this._addToMoves(n, t),
            n
          );
        }
        _moveAfter(n, e, t) {
          return this._unlink(n), this._insertAfter(n, e, t), this._addToMoves(n, t), n;
        }
        _addAfter(n, e, t) {
          return (
            this._insertAfter(n, e, t),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = n) : (this._additionsTail._nextAdded = n)),
            n
          );
        }
        _insertAfter(n, e, t) {
          const l = null === e ? this._itHead : e._next;
          return (
            (n._next = l),
            (n._prev = e),
            null === l ? (this._itTail = n) : (l._prev = n),
            null === e ? (this._itHead = n) : (e._next = n),
            null === this._linkedRecords && (this._linkedRecords = new fl()),
            this._linkedRecords.put(n),
            (n.currentIndex = t),
            n
          );
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n));
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const e = n._prev,
            t = n._next;
          return null === e ? (this._itHead = t) : (e._next = t), null === t ? (this._itTail = e) : (t._prev = e), n;
        }
        _addToMoves(n, e) {
          return n.previousIndex === e
            ? n
            : ((this._movesTail = null === this._movesTail ? (this._movesHead = n) : (this._movesTail._nextMoved = n)),
              n);
        }
        _addToRemovals(n) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new fl()),
            this._unlinkedRecords.put(n),
            (n.currentIndex = null),
            (n._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = n), (n._prevRemoved = null))
              : ((n._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = n)),
            n
          );
        }
        _addIdentityChange(n, e) {
          return (
            (n.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = n)
                : (this._identityChangesTail._nextIdentityChange = n)),
            n
          );
        }
      }
      class bl {
        constructor(n, e) {
          (this.item = n),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class gl {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(n) {
          null === this._head
            ? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
            : ((this._tail._nextDup = n), (n._prevDup = this._tail), (n._nextDup = null), (this._tail = n));
        }
        get(n, e) {
          let t;
          for (t = this._head; null !== t; t = t._nextDup)
            if ((null === e || e <= t.currentIndex) && Pt(t.trackById, n)) return t;
          return null;
        }
        remove(n) {
          const e = n._prevDup,
            t = n._nextDup;
          return (
            null === e ? (this._head = t) : (e._nextDup = t),
            null === t ? (this._tail = e) : (t._prevDup = e),
            null === this._head
          );
        }
      }
      class fl {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const e = n.trackById;
          let t = this.map.get(e);
          t || ((t = new gl()), this.map.set(e, t)), t.add(n);
        }
        get(n, e) {
          const t = this.map.get(n);
          return t ? t.get(n, e) : null;
        }
        remove(n) {
          const e = n.trackById;
          return this.map.get(e).remove(n) && this.map.delete(e), n;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function ml(n, e, t) {
        const l = n.previousIndex;
        if (null === l) return l;
        let r = 0;
        return t && l < t.length && (r = t[l]), l + e + r;
      }
      class vl {
        constructor() {}
        supports(n) {
          return n instanceof Map || Dt(n);
        }
        create() {
          return new _l();
        }
      }
      class _l {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(n) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) n(e);
        }
        forEachPreviousItem(n) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) n(e);
        }
        forEachChangedItem(n) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) n(e);
        }
        forEachAddedItem(n) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) n(e);
        }
        forEachRemovedItem(n) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) n(e);
        }
        diff(n) {
          if (n) {
            if (!(n instanceof Map || Dt(n)))
              throw new Error(`Error trying to diff '${_(n)}'. Only maps and objects are allowed`);
          } else n = new Map();
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(n, (n, t) => {
              if (e && e.key === t) this._maybeAddToChanges(e, n), (this._appendAfter = e), (e = e._next);
              else {
                const l = this._getOrCreateRecordForKey(t, n);
                e = this._insertBeforeOrAppend(e, l);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let n = e; null !== n; n = n._nextRemoved)
              n === this._mapHead && (this._mapHead = null),
                this._records.delete(n.key),
                (n._nextRemoved = n._next),
                (n.previousValue = n.currentValue),
                (n.currentValue = null),
                (n._prev = null),
                (n._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(n, e) {
          if (n) {
            const t = n._prev;
            return (
              (e._next = n),
              (e._prev = t),
              (n._prev = e),
              t && (t._next = e),
              n === this._mapHead && (this._mapHead = e),
              (this._appendAfter = n),
              n
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = e), (e._prev = this._appendAfter)) : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(n, e) {
          if (this._records.has(n)) {
            const t = this._records.get(n);
            this._maybeAddToChanges(t, e);
            const l = t._prev,
              r = t._next;
            return l && (l._next = r), r && (r._prev = l), (t._next = null), (t._prev = null), t;
          }
          const t = new yl(n);
          return this._records.set(n, t), (t.currentValue = e), this._addToAdditions(t), t;
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (this._previousMapHead = this._mapHead, n = this._previousMapHead; null !== n; n = n._next)
              n._nextPrevious = n._next;
            for (n = this._changesHead; null !== n; n = n._nextChanged) n.previousValue = n.currentValue;
            for (n = this._additionsHead; null != n; n = n._nextAdded) n.previousValue = n.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(n, e) {
          Pt(e, n.currentValue) || ((n.previousValue = n.currentValue), (n.currentValue = e), this._addToChanges(n));
        }
        _addToAdditions(n) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = n)
            : ((this._additionsTail._nextAdded = n), (this._additionsTail = n));
        }
        _addToChanges(n) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = n)
            : ((this._changesTail._nextChanged = n), (this._changesTail = n));
        }
        _forEach(n, e) {
          n instanceof Map ? n.forEach(e) : Object.keys(n).forEach(t => e(n[t], t));
        }
      }
      class yl {
        constructor(n) {
          (this.key = n),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let wl = (() => {
          class n {
            constructor(n) {
              this.factories = n;
            }
            static create(e, t) {
              if (null != t) {
                const n = t.factories.slice();
                e = e.concat(n);
              }
              return new n(e);
            }
            static extend(e) {
              return {
                provide: n,
                useFactory: t => {
                  if (!t) throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return n.create(e, t);
                },
                deps: [[n, new p(), new d()]]
              };
            }
            find(n) {
              const e = this.factories.find(e => e.supports(n));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${n}' of type '${((t = n), t.name || typeof t)}'`
              );
              var t;
            }
          }
          return (n.ngInjectableDef = f({ token: n, providedIn: 'root', factory: () => new n([new dl()]) })), n;
        })(),
        Cl = (() => {
          class n {
            constructor(n) {
              this.factories = n;
            }
            static create(e, t) {
              if (t) {
                const n = t.factories.slice();
                e = e.concat(n);
              }
              return new n(e);
            }
            static extend(e) {
              return {
                provide: n,
                useFactory: t => {
                  if (!t) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return n.create(e, t);
                },
                deps: [[n, new p(), new d()]]
              };
            }
            find(n) {
              const e = this.factories.find(e => e.supports(n));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${n}'`);
            }
          }
          return (n.ngInjectableDef = f({ token: n, providedIn: 'root', factory: () => new n([new vl()]) })), n;
        })();
      const xl = [new vl()],
        Ol = new wl([new dl()]),
        kl = new Cl(xl);
      let Sl = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => Ml(n, tl)), n;
      })();
      const Ml = el;
      let Pl = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => Kl(n, tl)), n;
      })();
      const Kl = el;
      function El(n, e, t, l) {
        let r = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${e}'. Current value: '${t}'.`;
        return (
          l &&
            (r +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(n, e) {
            const t = new Error(n);
            return Al(t, e), t;
          })(r, n)
        );
      }
      function Al(n, e) {
        (n[se] = e), (n[oe] = e.logError.bind(e));
      }
      function Dl(n) {
        return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${n}`);
      }
      function Tl(n, e, t) {
        const l = n.state,
          r = 1792 & l;
        return r === e ? ((n.state = (-1793 & l) | t), (n.initIndex = -1), !0) : r === t;
      }
      function Il(n, e, t) {
        return (1792 & n.state) === e && n.initIndex <= t && ((n.initIndex = t + 1), !0);
      }
      function ql(n, e) {
        return n.nodes[e];
      }
      function Nl(n, e) {
        return n.nodes[e];
      }
      function Rl(n, e) {
        return n.nodes[e];
      }
      function jl(n, e) {
        return n.nodes[e];
      }
      function Vl(n, e) {
        return n.nodes[e];
      }
      const Ll = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0
        },
        Ul = () => {},
        Fl = new Map();
      function Hl(n) {
        let e = Fl.get(n);
        return e || ((e = _(n) + '_' + Fl.size), Fl.set(n, e)), e;
      }
      function zl(n, e, t, l) {
        if (Et.isWrapped(l)) {
          l = Et.unwrap(l);
          const r = n.def.nodes[e].bindingIndex + t,
            s = Et.unwrap(n.oldValues[r]);
          n.oldValues[r] = new Et(s);
        }
        return l;
      }
      const $l = '$$undefined',
        Bl = '$$empty';
      function Wl(n) {
        return { id: $l, styles: n.styles, encapsulation: n.encapsulation, data: n.data };
      }
      let Gl = 0;
      function Zl(n, e, t, l) {
        return !(!(2 & n.state) && Pt(n.oldValues[e.bindingIndex + t], l));
      }
      function Ql(n, e, t, l) {
        return !!Zl(n, e, t, l) && ((n.oldValues[e.bindingIndex + t] = l), !0);
      }
      function Jl(n, e, t, l) {
        const r = n.oldValues[e.bindingIndex + t];
        if (1 & n.state || !Kt(r, l)) {
          const s = e.bindings[t].name;
          throw El(Ll.createDebugContext(n, e.nodeIndex), `${s}: ${r}`, `${s}: ${l}`, 0 != (1 & n.state));
        }
      }
      function Yl(n) {
        let e = n;
        for (; e; ) 2 & e.def.flags && (e.state |= 8), (e = e.viewContainerParent || e.parent);
      }
      function Xl(n, e) {
        let t = n;
        for (; t && t !== e; ) (t.state |= 64), (t = t.viewContainerParent || t.parent);
      }
      function nr(n, e, t, l) {
        try {
          return Yl(33554432 & n.def.nodes[e].flags ? Nl(n, e).componentView : n), Ll.handleEvent(n, e, t, l);
        } catch (r) {
          n.root.errorHandler.handleError(r);
        }
      }
      function er(n) {
        return n.parent ? Nl(n.parent, n.parentNodeDef.nodeIndex) : null;
      }
      function tr(n) {
        return n.parent ? n.parentNodeDef.parent : null;
      }
      function lr(n, e) {
        switch (201347067 & e.flags) {
          case 1:
            return Nl(n, e.nodeIndex).renderElement;
          case 2:
            return ql(n, e.nodeIndex).renderText;
        }
      }
      function rr(n) {
        return !!n.parent && !!(32768 & n.parentNodeDef.flags);
      }
      function sr(n) {
        return !(!n.parent || 32768 & n.parentNodeDef.flags);
      }
      function ir(n) {
        return 1 << n % 32;
      }
      function or(n) {
        const e = {};
        let t = 0;
        const l = {};
        return (
          n &&
            n.forEach(([n, r]) => {
              'number' == typeof n ? ((e[n] = r), (t |= ir(n))) : (l[n] = r);
            }),
          { matchedQueries: e, references: l, matchedQueryIds: t }
        );
      }
      function ur(n, e) {
        return n.map(n => {
          let t, l;
          return (
            Array.isArray(n) ? ([l, t] = n) : ((l = 0), (t = n)),
            t &&
              ('function' == typeof t || 'object' == typeof t) &&
              e &&
              Object.defineProperty(t, q, { value: e, configurable: !0 }),
            { flags: l, token: t, tokenKey: Hl(t) }
          );
        });
      }
      function ar(n, e, t) {
        let l = t.renderParent;
        return l
          ? 0 == (1 & l.flags) ||
            0 == (33554432 & l.flags) ||
            (l.element.componentRendererType && l.element.componentRendererType.encapsulation === Z.Native)
            ? Nl(n, t.renderParent.nodeIndex).renderElement
            : void 0
          : e;
      }
      const cr = new WeakMap();
      function dr(n) {
        let e = cr.get(n);
        return e || (((e = n(() => Ul)).factory = n), cr.set(n, e)), e;
      }
      function hr(n, e, t, l, r) {
        3 === e && (t = n.renderer.parentNode(lr(n, n.def.lastRenderRootNode))),
          pr(n, e, 0, n.def.nodes.length - 1, t, l, r);
      }
      function pr(n, e, t, l, r, s, i) {
        for (let o = t; o <= l; o++) {
          const t = n.def.nodes[o];
          11 & t.flags && gr(n, t, e, r, s, i), (o += t.childCount);
        }
      }
      function br(n, e, t, l, r, s) {
        let i = n;
        for (; i && !rr(i); ) i = i.parent;
        const o = i.parent,
          u = tr(i),
          a = u.nodeIndex + u.childCount;
        for (let c = u.nodeIndex + 1; c <= a; c++) {
          const n = o.def.nodes[c];
          n.ngContentIndex === e && gr(o, n, t, l, r, s), (c += n.childCount);
        }
        if (!o.parent) {
          const i = n.root.projectableNodes[e];
          if (i) for (let e = 0; e < i.length; e++) fr(n, i[e], t, l, r, s);
        }
      }
      function gr(n, e, t, l, r, s) {
        if (8 & e.flags) br(n, e.ngContent.index, t, l, r, s);
        else {
          const i = lr(n, e);
          if (
            (3 === t && 33554432 & e.flags && 48 & e.bindingFlags
              ? (16 & e.bindingFlags && fr(n, i, t, l, r, s),
                32 & e.bindingFlags && fr(Nl(n, e.nodeIndex).componentView, i, t, l, r, s))
              : fr(n, i, t, l, r, s),
            16777216 & e.flags)
          ) {
            const i = Nl(n, e.nodeIndex).viewContainer._embeddedViews;
            for (let n = 0; n < i.length; n++) hr(i[n], t, l, r, s);
          }
          1 & e.flags && !e.element.name && pr(n, t, e.nodeIndex + 1, e.nodeIndex + e.childCount, l, r, s);
        }
      }
      function fr(n, e, t, l, r, s) {
        const i = n.renderer;
        switch (t) {
          case 1:
            i.appendChild(l, e);
            break;
          case 2:
            i.insertBefore(l, e, r);
            break;
          case 3:
            i.removeChild(l, e);
            break;
          case 0:
            s.push(e);
        }
      }
      const mr = /^:([^:]+):(.+)$/;
      function vr(n) {
        if (':' === n[0]) {
          const e = n.match(mr);
          return [e[1], e[2]];
        }
        return ['', n];
      }
      function _r(n) {
        let e = 0;
        for (let t = 0; t < n.length; t++) e |= n[t].flags;
        return e;
      }
      function yr(n, e, t, l, r, s, i, o, u, a, c, d, h, p, b, g, f, m, v, _) {
        switch (n) {
          case 1:
            return e + wr(t) + l;
          case 2:
            return e + wr(t) + l + wr(r) + s;
          case 3:
            return e + wr(t) + l + wr(r) + s + wr(i) + o;
          case 4:
            return e + wr(t) + l + wr(r) + s + wr(i) + o + wr(u) + a;
          case 5:
            return e + wr(t) + l + wr(r) + s + wr(i) + o + wr(u) + a + wr(c) + d;
          case 6:
            return e + wr(t) + l + wr(r) + s + wr(i) + o + wr(u) + a + wr(c) + d + wr(h) + p;
          case 7:
            return e + wr(t) + l + wr(r) + s + wr(i) + o + wr(u) + a + wr(c) + d + wr(h) + p + wr(b) + g;
          case 8:
            return e + wr(t) + l + wr(r) + s + wr(i) + o + wr(u) + a + wr(c) + d + wr(h) + p + wr(b) + g + wr(f) + m;
          case 9:
            return (
              e +
              wr(t) +
              l +
              wr(r) +
              s +
              wr(i) +
              o +
              wr(u) +
              a +
              wr(c) +
              d +
              wr(h) +
              p +
              wr(b) +
              g +
              wr(f) +
              m +
              wr(v) +
              _
            );
          default:
            throw new Error('Does not support more than 9 expressions');
        }
      }
      function wr(n) {
        return null != n ? n.toString() : '';
      }
      const Cr = new Object(),
        xr = Hl(gt),
        Or = Hl(K),
        kr = Hl(z);
      function Sr(n, e, t, l) {
        return (t = C(t)), { index: -1, deps: ur(l, _(e)), flags: n, token: e, value: t };
      }
      function Mr(n) {
        const e = {},
          t = [];
        let l = !1;
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          s.token === pt && !0 === s.value && (l = !0),
            1073741824 & s.flags && t.push(s.token),
            (s.index = r),
            (e[Hl(s.token)] = s);
        }
        return { factory: null, providersByKey: e, providers: n, modules: t, isRoot: l };
      }
      function Pr(n, e, t = gt.THROW_IF_NOT_FOUND) {
        const l = V(n);
        try {
          if (8 & e.flags) return e.token;
          if ((2 & e.flags && (t = null), 1 & e.flags)) return n._parent.get(e.token, t);
          const i = e.tokenKey;
          switch (i) {
            case xr:
            case Or:
            case kr:
              return n;
          }
          const o = n._def.providersByKey[i];
          let u;
          if (o) {
            let e = n._providers[o.index];
            return void 0 === e && (e = n._providers[o.index] = Kr(n, o)), e === Cr ? void 0 : e;
          }
          if (
            (u = m(e.token)) &&
            ((r = n),
            null != (s = u).providedIn &&
              ((function(n, e) {
                return n._def.modules.indexOf(e) > -1;
              })(r, s.providedIn) ||
                ('root' === s.providedIn && r._def.isRoot)))
          ) {
            const t = n._providers.length;
            return (
              (n._def.providers[t] = n._def.providersByKey[e.tokenKey] = {
                flags: 5120,
                value: u.factory,
                deps: [],
                index: t,
                token: e.token
              }),
              (n._providers[t] = Cr),
              (n._providers[t] = Kr(n, n._def.providersByKey[e.tokenKey]))
            );
          }
          return 4 & e.flags ? t : n._parent.get(e.token, t);
        } finally {
          V(l);
        }
        var r, s;
      }
      function Kr(n, e) {
        let t;
        switch (201347067 & e.flags) {
          case 512:
            t = (function(n, e, t) {
              const l = t.length;
              switch (l) {
                case 0:
                  return new e();
                case 1:
                  return new e(Pr(n, t[0]));
                case 2:
                  return new e(Pr(n, t[0]), Pr(n, t[1]));
                case 3:
                  return new e(Pr(n, t[0]), Pr(n, t[1]), Pr(n, t[2]));
                default:
                  const r = new Array(l);
                  for (let e = 0; e < l; e++) r[e] = Pr(n, t[e]);
                  return new e(...r);
              }
            })(n, e.value, e.deps);
            break;
          case 1024:
            t = (function(n, e, t) {
              const l = t.length;
              switch (l) {
                case 0:
                  return e();
                case 1:
                  return e(Pr(n, t[0]));
                case 2:
                  return e(Pr(n, t[0]), Pr(n, t[1]));
                case 3:
                  return e(Pr(n, t[0]), Pr(n, t[1]), Pr(n, t[2]));
                default:
                  const r = Array(l);
                  for (let e = 0; e < l; e++) r[e] = Pr(n, t[e]);
                  return e(...r);
              }
            })(n, e.value, e.deps);
            break;
          case 2048:
            t = Pr(n, e.deps[0]);
            break;
          case 256:
            t = e.value;
        }
        return (
          t === Cr ||
            null === t ||
            'object' != typeof t ||
            131072 & e.flags ||
            'function' != typeof t.ngOnDestroy ||
            (e.flags |= 131072),
          void 0 === t ? Cr : t
        );
      }
      function Er(n, e) {
        const t = n.viewContainer._embeddedViews;
        if (((null == e || e >= t.length) && (e = t.length - 1), e < 0)) return null;
        const l = t[e];
        return (l.viewContainerParent = null), W(t, e), Ll.dirtyParentQueries(l), Dr(l), l;
      }
      function Ar(n, e, t) {
        const l = e ? lr(e, e.def.lastRenderRootNode) : n.renderElement,
          r = t.renderer.parentNode(l),
          s = t.renderer.nextSibling(l);
        hr(t, 2, r, s, void 0);
      }
      function Dr(n) {
        hr(n, 3, null, null, void 0);
      }
      const Tr = new Object();
      function Ir(n, e, t, l, r, s) {
        return new qr(n, e, t, l, r, s);
      }
      class qr extends Gt {
        constructor(n, e, t, l, r, s) {
          super(),
            (this.selector = n),
            (this.componentType = e),
            (this._inputs = l),
            (this._outputs = r),
            (this.ngContentSelectors = s),
            (this.viewDefFactory = t);
        }
        get inputs() {
          const n = [],
            e = this._inputs;
          for (let t in e) n.push({ propName: t, templateName: e[t] });
          return n;
        }
        get outputs() {
          const n = [];
          for (let e in this._outputs) n.push({ propName: e, templateName: this._outputs[e] });
          return n;
        }
        create(n, e, t, l) {
          if (!l) throw new Error('ngModule should be provided');
          const r = dr(this.viewDefFactory),
            s = r.nodes[0].element.componentProvider.nodeIndex,
            i = Ll.createRootView(n, e || [], t, r, l, Tr),
            o = Rl(i, s).instance;
          return t && i.renderer.setAttribute(Nl(i, 0).renderElement, 'ng-version', cl.full), new Nr(i, new Lr(i), o);
        }
      }
      class Nr extends Wt {
        constructor(n, e, t) {
          super(),
            (this._view = n),
            (this._viewRef = e),
            (this._component = t),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = e),
            (this.changeDetectorRef = e),
            (this.instance = t);
        }
        get location() {
          return new tl(Nl(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new zr(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(n) {
          this._viewRef.onDestroy(n);
        }
      }
      function Rr(n, e, t) {
        return new jr(n, e, t);
      }
      class jr {
        constructor(n, e, t) {
          (this._view = n), (this._elDef = e), (this._data = t), (this._embeddedViews = []);
        }
        get element() {
          return new tl(this._data.renderElement);
        }
        get injector() {
          return new zr(this._view, this._elDef);
        }
        get parentInjector() {
          let n = this._view,
            e = this._elDef.parent;
          for (; !e && n; ) (e = tr(n)), (n = n.parent);
          return n ? new zr(n, e) : new zr(this._view, null);
        }
        clear() {
          for (let n = this._embeddedViews.length - 1; n >= 0; n--) {
            const e = Er(this._data, n);
            Ll.destroyView(e);
          }
        }
        get(n) {
          const e = this._embeddedViews[n];
          if (e) {
            const n = new Lr(e);
            return n.attachToViewContainerRef(this), n;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(n, e, t) {
          const l = n.createEmbeddedView(e || {});
          return this.insert(l, t), l;
        }
        createComponent(n, e, t, l, r) {
          const s = t || this.parentInjector;
          r || n instanceof nl || (r = s.get(z));
          const i = n.create(s, l, void 0, r);
          return this.insert(i.hostView, e), i;
        }
        insert(n, e) {
          if (n.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
          const t = n;
          return (
            (function(n, e, t, l) {
              let r = e.viewContainer._embeddedViews;
              null == t && (t = r.length),
                (l.viewContainerParent = n),
                B(r, t, l),
                (function(n, e) {
                  const t = er(e);
                  if (!t || t === n || 16 & e.state) return;
                  e.state |= 16;
                  let l = t.template._projectedViews;
                  l || (l = t.template._projectedViews = []),
                    l.push(e),
                    (function(n, e) {
                      if (4 & e.flags) return;
                      (n.nodeFlags |= 4), (e.flags |= 4);
                      let t = e.parent;
                      for (; t; ) (t.childFlags |= 4), (t = t.parent);
                    })(e.parent.def, e.parentNodeDef);
                })(e, l),
                Ll.dirtyParentQueries(l),
                Ar(e, t > 0 ? r[t - 1] : null, l);
            })(this._view, this._data, e, t._view),
            t.attachToViewContainerRef(this),
            n
          );
        }
        move(n, e) {
          if (n.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const t = this._embeddedViews.indexOf(n._view);
          return (
            (function(n, e, t) {
              const l = n.viewContainer._embeddedViews,
                r = l[e];
              W(l, e),
                null == t && (t = l.length),
                B(l, t, r),
                Ll.dirtyParentQueries(r),
                Dr(r),
                Ar(n, t > 0 ? l[t - 1] : null, r);
            })(this._data, t, e),
            n
          );
        }
        indexOf(n) {
          return this._embeddedViews.indexOf(n._view);
        }
        remove(n) {
          const e = Er(this._data, n);
          e && Ll.destroyView(e);
        }
        detach(n) {
          const e = Er(this._data, n);
          return e ? new Lr(e) : null;
        }
      }
      function Vr(n) {
        return new Lr(n);
      }
      class Lr {
        constructor(n) {
          (this._view = n), (this._viewContainerRef = null), (this._appRef = null);
        }
        get rootNodes() {
          return (function(n) {
            const e = [];
            return hr(n, 0, void 0, void 0, e), e;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          Yl(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const n = this._view.root.rendererFactory;
          n.begin && n.begin();
          try {
            Ll.checkAndUpdateView(this._view);
          } finally {
            n.end && n.end();
          }
        }
        checkNoChanges() {
          Ll.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(n) {
          this._view.disposables || (this._view.disposables = []), this._view.disposables.push(n);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
            Ll.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null), Dr(this._view), Ll.dirtyParentQueries(this._view);
        }
        attachToAppRef(n) {
          if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = n;
        }
        attachToViewContainerRef(n) {
          if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = n;
        }
      }
      function Ur(n, e) {
        return new Fr(n, e);
      }
      class Fr extends Sl {
        constructor(n, e) {
          super(), (this._parentView = n), (this._def = e);
        }
        createEmbeddedView(n) {
          return new Lr(Ll.createEmbeddedView(this._parentView, this._def, this._def.element.template, n));
        }
        get elementRef() {
          return new tl(Nl(this._parentView, this._def.nodeIndex).renderElement);
        }
      }
      function Hr(n, e) {
        return new zr(n, e);
      }
      class zr {
        constructor(n, e) {
          (this.view = n), (this.elDef = e);
        }
        get(n, e = gt.THROW_IF_NOT_FOUND) {
          return Ll.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: n, tokenKey: Hl(n) },
            e
          );
        }
      }
      function $r(n, e) {
        const t = n.def.nodes[e];
        if (1 & t.flags) {
          const e = Nl(n, t.nodeIndex);
          return t.element.template ? e.template : e.renderElement;
        }
        if (2 & t.flags) return ql(n, t.nodeIndex).renderText;
        if (20240 & t.flags) return Rl(n, t.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${e}`);
      }
      function Br(n) {
        return new Wr(n.renderer);
      }
      class Wr {
        constructor(n) {
          this.delegate = n;
        }
        selectRootElement(n) {
          return this.delegate.selectRootElement(n);
        }
        createElement(n, e) {
          const [t, l] = vr(e),
            r = this.delegate.createElement(l, t);
          return n && this.delegate.appendChild(n, r), r;
        }
        createViewRoot(n) {
          return n;
        }
        createTemplateAnchor(n) {
          const e = this.delegate.createComment('');
          return n && this.delegate.appendChild(n, e), e;
        }
        createText(n, e) {
          const t = this.delegate.createText(e);
          return n && this.delegate.appendChild(n, t), t;
        }
        projectNodes(n, e) {
          for (let t = 0; t < e.length; t++) this.delegate.appendChild(n, e[t]);
        }
        attachViewAfter(n, e) {
          const t = this.delegate.parentNode(n),
            l = this.delegate.nextSibling(n);
          for (let r = 0; r < e.length; r++) this.delegate.insertBefore(t, e[r], l);
        }
        detachView(n) {
          for (let e = 0; e < n.length; e++) {
            const t = n[e],
              l = this.delegate.parentNode(t);
            this.delegate.removeChild(l, t);
          }
        }
        destroyView(n, e) {
          for (let t = 0; t < e.length; t++) this.delegate.destroyNode(e[t]);
        }
        listen(n, e, t) {
          return this.delegate.listen(n, e, t);
        }
        listenGlobal(n, e, t) {
          return this.delegate.listen(n, e, t);
        }
        setElementProperty(n, e, t) {
          this.delegate.setProperty(n, e, t);
        }
        setElementAttribute(n, e, t) {
          const [l, r] = vr(e);
          null != t ? this.delegate.setAttribute(n, r, t, l) : this.delegate.removeAttribute(n, r, l);
        }
        setBindingDebugInfo(n, e, t) {}
        setElementClass(n, e, t) {
          t ? this.delegate.addClass(n, e) : this.delegate.removeClass(n, e);
        }
        setElementStyle(n, e, t) {
          null != t ? this.delegate.setStyle(n, e, t) : this.delegate.removeStyle(n, e);
        }
        invokeElementMethod(n, e, t) {
          n[e].apply(n, t);
        }
        setText(n, e) {
          this.delegate.setValue(n, e);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function Gr(n, e, t, l) {
        return new Zr(n, e, t, l);
      }
      class Zr {
        constructor(n, e, t, l) {
          (this._moduleType = n),
            (this._parent = e),
            (this._bootstrapComponents = t),
            (this._def = l),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(n) {
              const e = n._def,
                t = (n._providers = new Array(e.providers.length));
              for (let l = 0; l < e.providers.length; l++) {
                const r = e.providers[l];
                4096 & r.flags || (void 0 === t[l] && (t[l] = Kr(n, r)));
              }
            })(this);
        }
        get(n, e = gt.THROW_IF_NOT_FOUND, t = b.Default) {
          let l = 0;
          return (
            t & b.SkipSelf ? (l |= 1) : t & b.Self && (l |= 4), Pr(this, { token: n, tokenKey: Hl(n), flags: l }, e)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(Yt);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(`The ng module ${_(this.instance.constructor)} has already been destroyed.`);
          (this._destroyed = !0),
            (function(n, e) {
              const t = n._def,
                l = new Set();
              for (let r = 0; r < t.providers.length; r++)
                if (131072 & t.providers[r].flags) {
                  const e = n._providers[r];
                  if (e && e !== Cr) {
                    const n = e.ngOnDestroy;
                    'function' != typeof n || l.has(e) || (n.apply(e), l.add(e));
                  }
                }
            })(this),
            this._destroyListeners.forEach(n => n());
        }
        onDestroy(n) {
          this._destroyListeners.push(n);
        }
      }
      const Qr = Hl(rl),
        Jr = Hl(ol),
        Yr = Hl(tl),
        Xr = Hl(Pl),
        ns = Hl(Sl),
        es = Hl(dt),
        ts = Hl(gt),
        ls = Hl(K);
      function rs(n, e, t, l, r, s, i, o) {
        const u = [];
        if (i)
          for (let c in i) {
            const [n, e] = i[c];
            u[n] = { flags: 8, name: c, nonMinifiedName: e, ns: null, securityContext: null, suffix: null };
          }
        const a = [];
        if (o) for (let c in o) a.push({ type: 1, propName: c, target: null, eventName: o[c] });
        return os(n, (e |= 16384), t, l, r, r, s, u, a);
      }
      function ss(n, e, t) {
        return os(-1, (n |= 16), null, 0, e, e, t);
      }
      function is(n, e, t, l, r) {
        return os(-1, n, e, 0, t, l, r);
      }
      function os(n, e, t, l, r, s, i, o, u) {
        const { matchedQueries: a, references: c, matchedQueryIds: d } = or(t);
        u || (u = []), o || (o = []), (s = C(s));
        const h = ur(i, _(r));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: n,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: a,
          matchedQueryIds: d,
          references: c,
          ngContentIndex: -1,
          childCount: l,
          bindings: o,
          bindingFlags: _r(o),
          outputs: u,
          element: null,
          provider: { token: r, value: s, deps: h },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function us(n, e) {
        return hs(n, e);
      }
      function as(n, e) {
        let t = n;
        for (; t.parent && !rr(t); ) t = t.parent;
        return ps(t.parent, tr(t), !0, e.provider.value, e.provider.deps);
      }
      function cs(n, e) {
        const t = ps(n, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
        if (e.outputs.length)
          for (let l = 0; l < e.outputs.length; l++) {
            const r = e.outputs[l],
              s = t[r.propName];
            if (!$t(s)) throw new Error(`@Output ${r.propName} not initialized in '${t.constructor.name}'.`);
            {
              const t = s.subscribe(ds(n, e.parent.nodeIndex, r.eventName));
              n.disposables[e.outputIndex + l] = t.unsubscribe.bind(t);
            }
          }
        return t;
      }
      function ds(n, e, t) {
        return l => nr(n, e, t, l);
      }
      function hs(n, e) {
        const t = (8192 & e.flags) > 0,
          l = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return ps(n, e.parent, t, l.value, l.deps);
          case 1024:
            return (function(n, e, t, l, r) {
              const s = r.length;
              switch (s) {
                case 0:
                  return l();
                case 1:
                  return l(gs(n, e, t, r[0]));
                case 2:
                  return l(gs(n, e, t, r[0]), gs(n, e, t, r[1]));
                case 3:
                  return l(gs(n, e, t, r[0]), gs(n, e, t, r[1]), gs(n, e, t, r[2]));
                default:
                  const i = Array(s);
                  for (let l = 0; l < s; l++) i[l] = gs(n, e, t, r[l]);
                  return l(...i);
              }
            })(n, e.parent, t, l.value, l.deps);
          case 2048:
            return gs(n, e.parent, t, l.deps[0]);
          case 256:
            return l.value;
        }
      }
      function ps(n, e, t, l, r) {
        const s = r.length;
        switch (s) {
          case 0:
            return new l();
          case 1:
            return new l(gs(n, e, t, r[0]));
          case 2:
            return new l(gs(n, e, t, r[0]), gs(n, e, t, r[1]));
          case 3:
            return new l(gs(n, e, t, r[0]), gs(n, e, t, r[1]), gs(n, e, t, r[2]));
          default:
            const i = new Array(s);
            for (let l = 0; l < s; l++) i[l] = gs(n, e, t, r[l]);
            return new l(...i);
        }
      }
      const bs = {};
      function gs(n, e, t, l, r = gt.THROW_IF_NOT_FOUND) {
        if (8 & l.flags) return l.token;
        const s = n;
        2 & l.flags && (r = null);
        const i = l.tokenKey;
        i === es && (t = !(!e || !e.element.componentView)), e && 1 & l.flags && ((t = !1), (e = e.parent));
        let o = n;
        for (; o; ) {
          if (e)
            switch (i) {
              case Qr:
                return Br(fs(o, e, t));
              case Jr:
                return fs(o, e, t).renderer;
              case Yr:
                return new tl(Nl(o, e.nodeIndex).renderElement);
              case Xr:
                return Nl(o, e.nodeIndex).viewContainer;
              case ns:
                if (e.element.template) return Nl(o, e.nodeIndex).template;
                break;
              case es:
                return Vr(fs(o, e, t));
              case ts:
              case ls:
                return Hr(o, e);
              default:
                const n = (t ? e.element.allProviders : e.element.publicProviders)[i];
                if (n) {
                  let e = Rl(o, n.nodeIndex);
                  return e || ((e = { instance: hs(o, n) }), (o.nodes[n.nodeIndex] = e)), e.instance;
                }
            }
          (t = rr(o)), (e = tr(o)), (o = o.parent), 4 & l.flags && (o = null);
        }
        const u = s.root.injector.get(l.token, bs);
        return u !== bs || r === bs ? u : s.root.ngModule.injector.get(l.token, r);
      }
      function fs(n, e, t) {
        let l;
        if (t) l = Nl(n, e.nodeIndex).componentView;
        else for (l = n; l.parent && !rr(l); ) l = l.parent;
        return l;
      }
      function ms(n, e, t, l, r, s) {
        if (32768 & t.flags) {
          const e = Nl(n, t.parent.nodeIndex).componentView;
          2 & e.def.flags && (e.state |= 8);
        }
        if (((e.instance[t.bindings[l].name] = r), 524288 & t.flags)) {
          s = s || {};
          const e = Et.unwrap(n.oldValues[t.bindingIndex + l]);
          s[t.bindings[l].nonMinifiedName] = new Bt(e, r, 0 != (2 & n.state));
        }
        return (n.oldValues[t.bindingIndex + l] = r), s;
      }
      function vs(n, e) {
        if (!(n.def.nodeFlags & e)) return;
        const t = n.def.nodes;
        let l = 0;
        for (let r = 0; r < t.length; r++) {
          const s = t[r];
          let i = s.parent;
          for (
            !i && s.flags & e && ys(n, r, s.flags & e, l++), 0 == (s.childFlags & e) && (r += s.childCount);
            i && 1 & i.flags && r === i.nodeIndex + i.childCount;

          )
            i.directChildFlags & e && (l = _s(n, i, e, l)), (i = i.parent);
        }
      }
      function _s(n, e, t, l) {
        for (let r = e.nodeIndex + 1; r <= e.nodeIndex + e.childCount; r++) {
          const e = n.def.nodes[r];
          e.flags & t && ys(n, r, e.flags & t, l++), (r += e.childCount);
        }
        return l;
      }
      function ys(n, e, t, l) {
        const r = Rl(n, e);
        if (!r) return;
        const s = r.instance;
        s &&
          (Ll.setCurrentNode(n, e),
          1048576 & t && Il(n, 512, l) && s.ngAfterContentInit(),
          2097152 & t && s.ngAfterContentChecked(),
          4194304 & t && Il(n, 768, l) && s.ngAfterViewInit(),
          8388608 & t && s.ngAfterViewChecked(),
          131072 & t && s.ngOnDestroy());
      }
      const ws = new P('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => An }),
        Cs = {},
        xs = (function() {
          var n = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19
          };
          return (
            (n[n.LocaleId] = 'LocaleId'),
            (n[n.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (n[n.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (n[n.DaysFormat] = 'DaysFormat'),
            (n[n.DaysStandalone] = 'DaysStandalone'),
            (n[n.MonthsFormat] = 'MonthsFormat'),
            (n[n.MonthsStandalone] = 'MonthsStandalone'),
            (n[n.Eras] = 'Eras'),
            (n[n.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (n[n.WeekendRange] = 'WeekendRange'),
            (n[n.DateFormat] = 'DateFormat'),
            (n[n.TimeFormat] = 'TimeFormat'),
            (n[n.DateTimeFormat] = 'DateTimeFormat'),
            (n[n.NumberSymbols] = 'NumberSymbols'),
            (n[n.NumberFormats] = 'NumberFormats'),
            (n[n.CurrencySymbol] = 'CurrencySymbol'),
            (n[n.CurrencyName] = 'CurrencyName'),
            (n[n.Currencies] = 'Currencies'),
            (n[n.PluralCase] = 'PluralCase'),
            (n[n.ExtraData] = 'ExtraData'),
            n
          );
        })(),
        Os = void 0;
      var ks = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Os],
        [['AM', 'PM'], Os, Os],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        Os,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        Os,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Os, "{1} 'at' {0}", Os],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function(n) {
          let e = Math.floor(Math.abs(n)),
            t = n.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === t ? 1 : 5;
        }
      ];
      function Ss(n) {
        return Ms(n)[xs.PluralCase];
      }
      function Ms(n) {
        const e = n.toLowerCase().replace(/_/g, '-');
        let t = Cs[e];
        if (t) return t;
        const l = e.split('-')[0];
        if ((t = Cs[l])) return t;
        if ('en' === l) return ks;
        throw new Error(`Missing locale data for the locale "${n}".`);
      }
      const Ps = 'en-US';
      let Ks = Ps;
      function Es(n) {
        var e;
        (e = 'Expected localeId to be defined'),
          null == n &&
            (function(n) {
              throw new Error(`ASSERTION ERROR: ${n}`);
            })(e),
          'string' == typeof n && (Ks = n.toLowerCase().replace(/_/g, '-'));
      }
      class As extends l.a {
        constructor(n = !1) {
          super(), (this.__isAsync = n);
        }
        emit(n) {
          super.next(n);
        }
        subscribe(n, e, t) {
          let l,
            s = n => null,
            i = () => null;
          n && 'object' == typeof n
            ? ((l = this.__isAsync
                ? e => {
                    setTimeout(() => n.next(e));
                  }
                : e => {
                    n.next(e);
                  }),
              n.error &&
                (s = this.__isAsync
                  ? e => {
                      setTimeout(() => n.error(e));
                    }
                  : e => {
                      n.error(e);
                    }),
              n.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n.complete());
                    }
                  : () => {
                      n.complete();
                    }))
            : ((l = this.__isAsync
                ? e => {
                    setTimeout(() => n(e));
                  }
                : e => {
                    n(e);
                  }),
              e &&
                (s = this.__isAsync
                  ? n => {
                      setTimeout(() => e(n));
                    }
                  : n => {
                      e(n);
                    }),
              t &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => t());
                    }
                  : () => {
                      t();
                    }));
          const o = super.subscribe(l, s, i);
          return n instanceof r.a && n.add(o), o;
        }
      }
      function Ds() {
        return this._results[Mt()]();
      }
      class Ts {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new As()), (this.length = 0);
          const n = Mt(),
            e = Ts.prototype;
          e[n] || (e[n] = Ds);
        }
        map(n) {
          return this._results.map(n);
        }
        filter(n) {
          return this._results.filter(n);
        }
        find(n) {
          return this._results.find(n);
        }
        reduce(n, e) {
          return this._results.reduce(n, e);
        }
        forEach(n) {
          this._results.forEach(n);
        }
        some(n) {
          return this._results.some(n);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(n) {
          (this._results = (function n(e, t) {
            void 0 === t && (t = e);
            for (let l = 0; l < e.length; l++) {
              let r = e[l];
              Array.isArray(r) ? (t === e && (t = e.slice(0, l)), n(r, t)) : t !== e && t.push(r);
            }
            return t;
          })(n)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const Is = new P('Application Initializer');
      let qs = (() =>
        class {
          constructor(n) {
            (this.appInits = n),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((n, e) => {
                (this.resolve = n), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let t = 0; t < this.appInits.length; t++) {
                const e = this.appInits[t]();
                zt(e) && n.push(e);
              }
            Promise.all(n)
              .then(() => {
                e();
              })
              .catch(n => {
                this.reject(n);
              }),
              0 === n.length && e(),
              (this.initialized = !0);
          }
        })();
      const Ns = new P('AppId');
      function Rs() {
        return `${js()}${js()}${js()}`;
      }
      function js() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Vs = new P('Platform Initializer'),
        Ls = new P('Platform ID'),
        Us = new P('appBootstrapListener');
      let Fs = (() =>
        class {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        })();
      const Hs = new P('LocaleId'),
        zs = !1;
      function $s() {
        throw new Error('Runtime compiler is not loaded');
      }
      const Bs = $s,
        Ws = $s,
        Gs = $s,
        Zs = $s;
      let Qs,
        Js,
        Ys = (() =>
          class {
            constructor() {
              (this.compileModuleSync = Bs),
                (this.compileModuleAsync = Ws),
                (this.compileModuleAndAllComponentsSync = Gs),
                (this.compileModuleAndAllComponentsAsync = Zs);
            }
            clearCache() {}
            clearCacheFor(n) {}
            getModuleId(n) {}
          })();
      class Xs {}
      function ni() {
        const n = M.wtf;
        return !(!n || !(Qs = n.trace) || ((Js = Qs.events), 0));
      }
      const ei = ni();
      function ti(n, e) {
        return null;
      }
      const li = ei
          ? function(n, e = null) {
              return Js.createScope(n, e);
            }
          : (n, e) => ti,
        ri = ei
          ? function(n, e) {
              return Qs.leaveScope(n, e), e;
            }
          : (n, e) => e,
        si = (() => Promise.resolve(0))();
      function ii(n) {
        'undefined' == typeof Zone
          ? si.then(() => {
              n && n.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', n);
      }
      class oi {
        constructor({ enableLongStackTrace: n = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new As(!1)),
            (this.onMicrotaskEmpty = new As(!1)),
            (this.onStable = new As(!1)),
            (this.onError = new As(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var e;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((e = this)._inner = e._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (n, t, l, r, s, i) => {
                try {
                  return di(e), n.invokeTask(l, r, s, i);
                } finally {
                  hi(e);
                }
              },
              onInvoke: (n, t, l, r, s, i, o) => {
                try {
                  return di(e), n.invoke(l, r, s, i, o);
                } finally {
                  hi(e);
                }
              },
              onHasTask: (n, t, l, r) => {
                n.hasTask(l, r),
                  t === l &&
                    ('microTask' == r.change
                      ? ((e.hasPendingMicrotasks = r.microTask), ci(e))
                      : 'macroTask' == r.change && (e.hasPendingMacrotasks = r.macroTask));
              },
              onHandleError: (n, t, l, r) => (n.handleError(l, r), e.runOutsideAngular(() => e.onError.emit(r)), !1)
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!oi.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (oi.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(n, e, t) {
          return this._inner.run(n, e, t);
        }
        runTask(n, e, t, l) {
          const r = this._inner,
            s = r.scheduleEventTask('NgZoneEvent: ' + l, n, ai, ui, ui);
          try {
            return r.runTask(s, e, t);
          } finally {
            r.cancelTask(s);
          }
        }
        runGuarded(n, e, t) {
          return this._inner.runGuarded(n, e, t);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      function ui() {}
      const ai = {};
      function ci(n) {
        if (0 == n._nesting && !n.hasPendingMicrotasks && !n.isStable)
          try {
            n._nesting++, n.onMicrotaskEmpty.emit(null);
          } finally {
            if ((n._nesting--, !n.hasPendingMicrotasks))
              try {
                n.runOutsideAngular(() => n.onStable.emit(null));
              } finally {
                n.isStable = !0;
              }
          }
      }
      function di(n) {
        n._nesting++, n.isStable && ((n.isStable = !1), n.onUnstable.emit(null));
      }
      function hi(n) {
        n._nesting--, ci(n);
      }
      class pi {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new As()),
            (this.onMicrotaskEmpty = new As()),
            (this.onStable = new As()),
            (this.onError = new As());
        }
        run(n) {
          return n();
        }
        runGuarded(n) {
          return n();
        }
        runOutsideAngular(n) {
          return n();
        }
        runTask(n) {
          return n();
        }
      }
      let bi = (() =>
          class {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      oi.assertNotInAngularZone(),
                        ii(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                ii(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  e => !e.updateCb || !e.updateCb(n) || (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(n => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data
                  }))
                : [];
            }
            addCallback(n, e, t) {
              let l = -1;
              e &&
                e > 0 &&
                (l = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(n => n.timeoutId !== l)),
                    n(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: n, timeoutId: l, updateCb: t });
            }
            whenStable(n, e, t) {
              if (t && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(n, e, t), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, e, t) {
              return [];
            }
          })(),
        gi = (() => {
          class n {
            constructor() {
              (this._applications = new Map()), _i.addToWindow(this);
            }
            registerApplication(n, e) {
              this._applications.set(n, e);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, e = !0) {
              return _i.findTestabilityInTree(this, n, e);
            }
          }
          return (n.ctorParameters = () => []), n;
        })();
      class fi {
        addToWindow(n) {}
        findTestabilityInTree(n, e, t) {
          return null;
        }
      }
      function mi(n) {
        _i = n;
      }
      let vi,
        _i = new fi(),
        yi = function(n) {
          return n instanceof nl;
        };
      const wi = new P('AllowMultipleToken');
      class Ci {
        constructor(n, e) {
          (this.name = n), (this.token = e);
        }
      }
      function xi(n, e, t = []) {
        const l = `Platform: ${e}`,
          r = new P(l);
        return (e = []) => {
          let s = Oi();
          if (!s || s.injector.get(wi, !1))
            if (n) n(t.concat(e).concat({ provide: r, useValue: !0 }));
            else {
              const n = t.concat(e).concat({ provide: r, useValue: !0 });
              !(function(n) {
                if (vi && !vi.destroyed && !vi.injector.get(wi, !1))
                  throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
                vi = n.get(ki);
                const e = n.get(Vs, null);
                e && e.forEach(n => n());
              })(gt.create({ providers: n, name: l }));
            }
          return (function(n) {
            const e = Oi();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(n, null))
              throw new Error('A platform with a different configuration has been created. Please destroy it first.');
            return e;
          })(r);
        };
      }
      function Oi() {
        return vi && !vi.destroyed ? vi : null;
      }
      let ki = (() =>
        class {
          constructor(n) {
            (this._injector = n), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, e) {
            const t =
                'noop' === (r = e ? e.ngZone : void 0)
                  ? new pi()
                  : ('zone.js' === r ? void 0 : r) || new oi({ enableLongStackTrace: be() }),
              l = [{ provide: oi, useValue: t }];
            var r;
            return t.run(() => {
              const e = gt.create({ providers: l, parent: this.injector, name: n.moduleType.name }),
                r = n.create(e),
                s = r.injector.get(de, null);
              if (!s) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
              return (
                zs && Es(r.injector.get(Hs, Ps) || Ps),
                r.onDestroy(() => Pi(this._modules, r)),
                t.runOutsideAngular(() =>
                  t.onError.subscribe({
                    next: n => {
                      s.handleError(n);
                    }
                  })
                ),
                (function(n, e, t) {
                  try {
                    const l = t();
                    return zt(l)
                      ? l.catch(t => {
                          throw (e.runOutsideAngular(() => n.handleError(t)), t);
                        })
                      : l;
                  } catch (l) {
                    throw (e.runOutsideAngular(() => n.handleError(l)), l);
                  }
                })(s, t, () => {
                  const n = r.injector.get(qs);
                  return n.runInitializers(), n.donePromise.then(() => (this._moduleDoBootstrap(r), r));
                })
              );
            });
          }
          bootstrapModule(n, e = []) {
            const t = Si({}, e);
            return (function(n, e, t) {
              return n
                .get(Xs)
                .createCompiler([e])
                .compileModuleAsync(t);
            })(this.injector, t, n).then(n => this.bootstrapModuleFactory(n, t));
          }
          _moduleDoBootstrap(n) {
            const e = n.injector.get(Mi);
            if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(n => e.bootstrap(n));
            else {
              if (!n.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${_(
                    n.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                    'Please define one of these.'
                );
              n.instance.ngDoBootstrap(e);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach(n => n.destroy()),
              this._destroyListeners.forEach(n => n()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        })();
      function Si(n, e) {
        return Array.isArray(e) ? e.reduce(Si, n) : Object.assign({}, n, e);
      }
      let Mi = (() => {
        class n {
          constructor(n, e, t, l, r, u) {
            (this._zone = n),
              (this._console = e),
              (this._injector = t),
              (this._exceptionHandler = l),
              (this._componentFactoryResolver = r),
              (this._initStatus = u),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = be()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const a = new s.a(n => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    n.next(this._stable), n.complete();
                  });
              }),
              c = new s.a(n => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    oi.assertNotInAngularZone(),
                      ii(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), n.next(!0));
                      });
                  });
                });
                const t = this._zone.onUnstable.subscribe(() => {
                  oi.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        n.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), t.unsubscribe();
                };
              });
            this.isStable = Object(i.a)(a, c.pipe(Object(o.a)()));
          }
          bootstrap(n, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let t;
            (t = n instanceof Gt ? n : this._componentFactoryResolver.resolveComponentFactory(n)),
              this.componentTypes.push(t.componentType);
            const l = yi(t) ? null : this._injector.get(z),
              r = t.create(gt.NULL, [], e || t.selector, l);
            r.onDestroy(() => {
              this._unloadComponent(r);
            });
            const s = r.injector.get(bi, null);
            return (
              s && r.injector.get(gi).registerApplication(r.location.nativeElement, s),
              this._loadComponent(r),
              be() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              r
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            const e = n._tickScope();
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
              if (this._enforceNoNewChanges) for (let n of this._views) n.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t));
            } finally {
              (this._runningTick = !1), ri(e);
            }
          }
          attachView(n) {
            const e = n;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(n) {
            const e = n;
            Pi(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(Us, [])
                .concat(this._bootstrapListeners)
                .forEach(e => e(n));
          }
          _unloadComponent(n) {
            this.detachView(n.hostView), Pi(this.components, n);
          }
          ngOnDestroy() {
            this._views.slice().forEach(n => n.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (n._tickScope = li('ApplicationRef#tick()')), n;
      })();
      function Pi(n, e) {
        const t = n.indexOf(e);
        t > -1 && n.splice(t, 1);
      }
      class Ki {}
      class Ei {}
      const Ai = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let Di = (() =>
        class {
          constructor(n, e) {
            (this._compiler = n), (this._config = e || Ai);
          }
          load(n) {
            return !zs && this._compiler instanceof Ys ? this.loadFactory(n) : this.loadAndCompile(n);
          }
          loadAndCompile(n) {
            let [e, l] = n.split('#');
            return (
              void 0 === l && (l = 'default'),
              t('zn8P')(e)
                .then(n => n[l])
                .then(n => Ti(n, e, l))
                .then(n => this._compiler.compileModuleAsync(n))
            );
          }
          loadFactory(n) {
            let [e, l] = n.split('#'),
              r = 'NgFactory';
            return (
              void 0 === l && ((l = 'default'), (r = '')),
              t('zn8P')(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix)
                .then(n => n[l + r])
                .then(n => Ti(n, e, l))
            );
          }
        })();
      function Ti(n, e, t) {
        if (!n) throw new Error(`Cannot find '${t}' in '${e}'`);
        return n;
      }
      class Ii {
        constructor(n, e) {
          (this.name = n), (this.callback = e);
        }
      }
      class qi {
        constructor(n, e, t) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = t),
            (this.nativeNode = n),
            e && e instanceof Ni && e.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class Ni extends qi {
        constructor(n, e, t) {
          super(n, e, t),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = n);
        }
        addChild(n) {
          n && (this.childNodes.push(n), (n.parent = this));
        }
        removeChild(n) {
          const e = this.childNodes.indexOf(n);
          -1 !== e && ((n.parent = null), this.childNodes.splice(e, 1));
        }
        insertChildrenAfter(n, e) {
          const t = this.childNodes.indexOf(n);
          -1 !== t &&
            (this.childNodes.splice(t + 1, 0, ...e),
            e.forEach(e => {
              e.parent && e.parent.removeChild(e), (n.parent = this);
            }));
        }
        insertBefore(n, e) {
          const t = this.childNodes.indexOf(n);
          -1 === t
            ? this.addChild(e)
            : (e.parent && e.parent.removeChild(e), (e.parent = this), this.childNodes.splice(t, 0, e));
        }
        query(n) {
          return this.queryAll(n)[0] || null;
        }
        queryAll(n) {
          const e = [];
          return (
            (function n(e, t, l) {
              e.childNodes.forEach(e => {
                e instanceof Ni && (t(e) && l.push(e), n(e, t, l));
              });
            })(this, n, e),
            e
          );
        }
        queryAllNodes(n) {
          const e = [];
          return (
            (function n(e, t, l) {
              e instanceof Ni &&
                e.childNodes.forEach(e => {
                  t(e) && l.push(e), e instanceof Ni && n(e, t, l);
                });
            })(this, n, e),
            e
          );
        }
        get children() {
          return this.childNodes.filter(n => n instanceof Ni);
        }
        triggerEventHandler(n, e) {
          this.listeners.forEach(t => {
            t.name == n && t.callback(e);
          });
        }
      }
      const Ri = new Map(),
        ji = function(n) {
          return Ri.get(n) || null;
        };
      function Vi(n) {
        Ri.set(n.nativeNode, n);
      }
      const Li = xi(null, 'core', [
        { provide: Ls, useValue: 'unknown' },
        { provide: ki, deps: [gt] },
        { provide: gi, deps: [] },
        { provide: Fs, deps: [] }
      ]);
      function Ui() {
        return Ol;
      }
      function Fi() {
        return kl;
      }
      function Hi(n) {
        return n ? (zs && Es(n), n) : Ps;
      }
      function zi(n) {
        let e = [];
        return (
          n.onStable.subscribe(() => {
            for (; e.length; ) e.pop()();
          }),
          function(n) {
            e.push(n);
          }
        );
      }
      let $i = (() =>
        class {
          constructor(n) {}
        })();
      function Bi(n, e, t, l, r, s) {
        n |= 1;
        const { matchedQueries: i, references: o, matchedQueryIds: u } = or(e);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: n,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: i,
          matchedQueryIds: u,
          references: o,
          ngContentIndex: t,
          childCount: l,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: s ? dr(s) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: r || Ul
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Wi(n, e, t, l, r, s, i = [], o, u, a, c, d) {
        a || (a = Ul);
        const { matchedQueries: h, references: p, matchedQueryIds: b } = or(t);
        let g = null,
          f = null;
        s && ([g, f] = vr(s)), (o = o || []);
        const m = new Array(o.length);
        for (let y = 0; y < o.length; y++) {
          const [n, e, t] = o[y],
            [l, r] = vr(e);
          let s = void 0,
            i = void 0;
          switch (15 & n) {
            case 4:
              i = t;
              break;
            case 1:
            case 8:
              s = t;
          }
          m[y] = { flags: n, ns: l, name: r, nonMinifiedName: r, securityContext: s, suffix: i };
        }
        u = u || [];
        const v = new Array(u.length);
        for (let y = 0; y < u.length; y++) {
          const [n, e] = u[y];
          v[y] = { type: 0, target: n, eventName: e, propName: null };
        }
        const _ = (i = i || []).map(([n, e]) => {
          const [t, l] = vr(n);
          return [t, l, e];
        });
        return (
          (d = (function(n) {
            if (n && n.id === $l) {
              const e =
                (null != n.encapsulation && n.encapsulation !== Z.None) ||
                n.styles.length ||
                Object.keys(n.data).length;
              n.id = e ? `c${Gl++}` : Bl;
            }
            return n && n.id === Bl && (n = null), n || null;
          })(d)),
          c && (e |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: n,
            flags: (e |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: h,
            matchedQueryIds: b,
            references: p,
            ngContentIndex: l,
            childCount: r,
            bindings: m,
            bindingFlags: _r(m),
            outputs: v,
            element: {
              ns: g,
              name: f,
              attrs: _,
              template: null,
              componentProvider: null,
              componentView: c || null,
              componentRendererType: d,
              publicProviders: null,
              allProviders: null,
              handleEvent: a || Ul
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function Gi(n, e, t) {
        const l = t.element,
          r = n.root.selectorOrNode,
          s = n.renderer;
        let i;
        if (n.parent || !r) {
          i = l.name ? s.createElement(l.name, l.ns) : s.createComment('');
          const r = ar(n, e, t);
          r && s.appendChild(r, i);
        } else
          i = s.selectRootElement(
            r,
            !!l.componentRendererType && l.componentRendererType.encapsulation === Z.ShadowDom
          );
        if (l.attrs)
          for (let o = 0; o < l.attrs.length; o++) {
            const [n, e, t] = l.attrs[o];
            s.setAttribute(i, e, t, n);
          }
        return i;
      }
      function Zi(n, e, t, l) {
        for (let i = 0; i < t.outputs.length; i++) {
          const o = t.outputs[i],
            u = Qi(n, t.nodeIndex, ((s = o.eventName), (r = o.target) ? `${r}:${s}` : s));
          let a = o.target,
            c = n;
          'component' === o.target && ((a = null), (c = e));
          const d = c.renderer.listen(a || l, o.eventName, u);
          n.disposables[t.outputIndex + i] = d;
        }
        var r, s;
      }
      function Qi(n, e, t) {
        return l => nr(n, e, t, l);
      }
      function Ji(n, e, t, l) {
        if (!Ql(n, e, t, l)) return !1;
        const r = e.bindings[t],
          s = Nl(n, e.nodeIndex),
          i = s.renderElement,
          o = r.name;
        switch (15 & r.flags) {
          case 1:
            !(function(n, e, t, l, r, s) {
              const i = e.securityContext;
              let o = i ? n.root.sanitizer.sanitize(i, s) : s;
              o = null != o ? o.toString() : null;
              const u = n.renderer;
              null != s ? u.setAttribute(t, r, o, l) : u.removeAttribute(t, r, l);
            })(n, r, i, r.ns, o, l);
            break;
          case 2:
            !(function(n, e, t, l) {
              const r = n.renderer;
              l ? r.addClass(e, t) : r.removeClass(e, t);
            })(n, i, o, l);
            break;
          case 4:
            !(function(n, e, t, l, r) {
              let s = n.root.sanitizer.sanitize(je.STYLE, r);
              if (null != s) {
                s = s.toString();
                const n = e.suffix;
                null != n && (s += n);
              } else s = null;
              const i = n.renderer;
              null != s ? i.setStyle(t, l, s) : i.removeStyle(t, l);
            })(n, r, i, o, l);
            break;
          case 8:
            !(function(n, e, t, l, r) {
              const s = e.securityContext;
              let i = s ? n.root.sanitizer.sanitize(s, r) : r;
              n.renderer.setProperty(t, l, i);
            })(33554432 & e.flags && 32 & r.flags ? s.componentView : n, r, i, o, l);
        }
        return !0;
      }
      function Yi(n, e, t) {
        let l = [];
        for (let r in t) l.push({ propName: r, bindingType: t[r] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: n,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: e, filterId: ir(e), bindings: l },
          ngContent: null
        };
      }
      function Xi(n) {
        const e = n.def.nodeMatchedQueries;
        for (; n.parent && sr(n); ) {
          let t = n.parentNodeDef;
          n = n.parent;
          const l = t.nodeIndex + t.childCount;
          for (let r = 0; r <= l; r++) {
            const l = n.def.nodes[r];
            67108864 & l.flags &&
              536870912 & l.flags &&
              (l.query.filterId & e) === l.query.filterId &&
              Vl(n, r).setDirty(),
              (!(1 & l.flags && r + l.childCount < t.nodeIndex) &&
                67108864 & l.childFlags &&
                536870912 & l.childFlags) ||
                (r += l.childCount);
          }
        }
        if (134217728 & n.def.nodeFlags)
          for (let t = 0; t < n.def.nodes.length; t++) {
            const e = n.def.nodes[t];
            134217728 & e.flags && 536870912 & e.flags && Vl(n, t).setDirty(), (t += e.childCount);
          }
      }
      function no(n, e) {
        const t = Vl(n, e.nodeIndex);
        if (!t.dirty) return;
        let l,
          r = void 0;
        if (67108864 & e.flags) {
          const t = e.parent.parent;
          (r = eo(n, t.nodeIndex, t.nodeIndex + t.childCount, e.query, [])), (l = Rl(n, e.parent.nodeIndex).instance);
        } else 134217728 & e.flags && ((r = eo(n, 0, n.def.nodes.length - 1, e.query, [])), (l = n.component));
        t.reset(r);
        const s = e.query.bindings;
        let i = !1;
        for (let o = 0; o < s.length; o++) {
          const n = s[o];
          let e;
          switch (n.bindingType) {
            case 0:
              e = t.first;
              break;
            case 1:
              (e = t), (i = !0);
          }
          l[n.propName] = e;
        }
        i && t.notifyOnChanges();
      }
      function eo(n, e, t, l, r) {
        for (let s = e; s <= t; s++) {
          const e = n.def.nodes[s],
            t = e.matchedQueries[l.id];
          if (
            (null != t && r.push(to(n, e, t)),
            1 & e.flags && e.element.template && (e.element.template.nodeMatchedQueries & l.filterId) === l.filterId)
          ) {
            const t = Nl(n, s);
            if (
              ((e.childMatchedQueries & l.filterId) === l.filterId &&
                (eo(n, s + 1, s + e.childCount, l, r), (s += e.childCount)),
              16777216 & e.flags)
            ) {
              const n = t.viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) {
                const s = n[e],
                  i = er(s);
                i && i === t && eo(s, 0, s.def.nodes.length - 1, l, r);
              }
            }
            const i = t.template._projectedViews;
            if (i)
              for (let n = 0; n < i.length; n++) {
                const e = i[n];
                eo(e, 0, e.def.nodes.length - 1, l, r);
              }
          }
          (e.childMatchedQueries & l.filterId) !== l.filterId && (s += e.childCount);
        }
        return r;
      }
      function to(n, e, t) {
        if (null != t)
          switch (t) {
            case 1:
              return Nl(n, e.nodeIndex).renderElement;
            case 0:
              return new tl(Nl(n, e.nodeIndex).renderElement);
            case 2:
              return Nl(n, e.nodeIndex).template;
            case 3:
              return Nl(n, e.nodeIndex).viewContainer;
            case 4:
              return Rl(n, e.nodeIndex).instance;
          }
      }
      function lo(n, e) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: n,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: e }
        };
      }
      function ro(n, e, t) {
        const l = ar(n, e, t);
        l && br(n, t.ngContent.index, 1, l, null, void 0);
      }
      function so(n, e) {
        return uo(128, n, new Array(e + 1));
      }
      function io(n, e) {
        return uo(32, n, new Array(e));
      }
      function oo(n, e) {
        const t = Object.keys(e),
          l = t.length,
          r = new Array(l);
        for (let s = 0; s < l; s++) {
          const n = t[s];
          r[e[n]] = n;
        }
        return uo(64, n, r);
      }
      function uo(n, e, t) {
        const l = new Array(t.length);
        for (let r = 0; r < t.length; r++) {
          const n = t[r];
          l[r] = { flags: 8, name: n, ns: null, nonMinifiedName: n, securityContext: null, suffix: null };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: n,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: l,
          bindingFlags: _r(l),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function ao(n, e, t) {
        const l = new Array(t.length - 1);
        for (let r = 1; r < t.length; r++)
          l[r - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: t[r] };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: n,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: l,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: t[0] },
          query: null,
          ngContent: null
        };
      }
      function co(n, e, t) {
        let l;
        const r = n.renderer;
        l = r.createText(t.text.prefix);
        const s = ar(n, e, t);
        return s && r.appendChild(s, l), { renderText: l };
      }
      function ho(n, e) {
        return (null != n ? n.toString() : '') + e.suffix;
      }
      function po(n, e, t, l) {
        let r = 0,
          s = 0,
          i = 0,
          o = 0,
          u = 0,
          a = null,
          c = null,
          d = !1,
          h = !1,
          p = null;
        for (let b = 0; b < e.length; b++) {
          const n = e[b];
          if (
            ((n.nodeIndex = b),
            (n.parent = a),
            (n.bindingIndex = r),
            (n.outputIndex = s),
            (n.renderParent = c),
            (i |= n.flags),
            (u |= n.matchedQueryIds),
            n.element)
          ) {
            const e = n.element;
            (e.publicProviders = a ? a.element.publicProviders : Object.create(null)),
              (e.allProviders = e.publicProviders),
              (d = !1),
              (h = !1),
              n.element.template && (u |= n.element.template.nodeMatchedQueries);
          }
          if (
            (go(a, n, e.length),
            (r += n.bindings.length),
            (s += n.outputs.length),
            !c && 3 & n.flags && (p = n),
            20224 & n.flags)
          ) {
            d ||
              ((d = !0),
              (a.element.publicProviders = Object.create(a.element.publicProviders)),
              (a.element.allProviders = a.element.publicProviders));
            const e = 0 != (32768 & n.flags);
            0 == (8192 & n.flags) || e
              ? (a.element.publicProviders[Hl(n.provider.token)] = n)
              : (h || ((h = !0), (a.element.allProviders = Object.create(a.element.publicProviders))),
                (a.element.allProviders[Hl(n.provider.token)] = n)),
              e && (a.element.componentProvider = n);
          }
          if (
            (a
              ? ((a.childFlags |= n.flags),
                (a.directChildFlags |= n.flags),
                (a.childMatchedQueries |= n.matchedQueryIds),
                n.element && n.element.template && (a.childMatchedQueries |= n.element.template.nodeMatchedQueries))
              : (o |= n.flags),
            n.childCount > 0)
          )
            (a = n), bo(n) || (c = n);
          else
            for (; a && b === a.nodeIndex + a.childCount; ) {
              const n = a.parent;
              n && ((n.childFlags |= a.childFlags), (n.childMatchedQueries |= a.childMatchedQueries)),
                (c = (a = n) && bo(a) ? a.renderParent : a);
            }
        }
        return {
          factory: null,
          nodeFlags: i,
          rootNodeFlags: o,
          nodeMatchedQueries: u,
          flags: n,
          nodes: e,
          updateDirectives: t || Ul,
          updateRenderer: l || Ul,
          handleEvent: (n, t, l, r) => e[t].element.handleEvent(n, l, r),
          bindingCount: r,
          outputCount: s,
          lastRenderRootNode: p
        };
      }
      function bo(n) {
        return 0 != (1 & n.flags) && null === n.element.name;
      }
      function go(n, e, t) {
        const l = e.element && e.element.template;
        if (l) {
          if (!l.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (l.lastRenderRootNode && 16777216 & l.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${e.nodeIndex}!`
            );
        }
        if (20224 & e.flags && 0 == (1 & (n ? n.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${e.nodeIndex}!`
          );
        if (e.query) {
          if (67108864 & e.flags && (!n || 0 == (16384 & n.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${e.nodeIndex}!`
            );
          if (134217728 & e.flags && n)
            throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${e.nodeIndex}!`);
        }
        if (e.childCount) {
          const l = n ? n.nodeIndex + n.childCount : t - 1;
          if (e.nodeIndex <= l && e.nodeIndex + e.childCount > l)
            throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${e.nodeIndex}!`);
        }
      }
      function fo(n, e, t, l) {
        const r = _o(n.root, n.renderer, n, e, t);
        return yo(r, n.component, l), wo(r), r;
      }
      function mo(n, e, t) {
        const l = _o(n, n.renderer, null, null, e);
        return yo(l, t, t), wo(l), l;
      }
      function vo(n, e, t, l) {
        const r = e.element.componentRendererType;
        let s;
        return (
          (s = r ? n.root.rendererFactory.createRenderer(l, r) : n.root.renderer),
          _o(n.root, s, n, e.element.componentProvider, t)
        );
      }
      function _o(n, e, t, l, r) {
        const s = new Array(r.nodes.length),
          i = r.outputCount ? new Array(r.outputCount) : null;
        return {
          def: r,
          parent: t,
          viewContainerParent: null,
          parentNodeDef: l,
          context: null,
          component: null,
          nodes: s,
          state: 13,
          root: n,
          renderer: e,
          oldValues: new Array(r.bindingCount),
          disposables: i,
          initIndex: -1
        };
      }
      function yo(n, e, t) {
        (n.component = e), (n.context = t);
      }
      function wo(n) {
        let e;
        rr(n) && (e = Nl(n.parent, n.parentNodeDef.parent.nodeIndex).renderElement);
        const t = n.def,
          l = n.nodes;
        for (let r = 0; r < t.nodes.length; r++) {
          const s = t.nodes[r];
          let i;
          switch ((Ll.setCurrentNode(n, r), 201347067 & s.flags)) {
            case 1:
              const t = Gi(n, e, s);
              let o = void 0;
              if (33554432 & s.flags) {
                const e = dr(s.element.componentView);
                o = Ll.createComponentView(n, s, e, t);
              }
              Zi(n, o, s, t),
                (i = {
                  renderElement: t,
                  componentView: o,
                  viewContainer: null,
                  template: s.element.template ? Ur(n, s) : void 0
                }),
                16777216 & s.flags && (i.viewContainer = Rr(n, s, i));
              break;
            case 2:
              i = co(n, e, s);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (i = l[r]) || 4096 & s.flags || (i = { instance: us(n, s) });
              break;
            case 16:
              i = { instance: as(n, s) };
              break;
            case 16384:
              (i = l[r]) || (i = { instance: cs(n, s) }),
                32768 & s.flags && yo(Nl(n, s.parent.nodeIndex).componentView, i.instance, i.instance);
              break;
            case 32:
            case 64:
            case 128:
              i = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              i = new Ts();
              break;
            case 8:
              ro(n, e, s), (i = void 0);
          }
          l[r] = i;
        }
        Eo(n, Ko.CreateViewNodes), Io(n, 201326592, 268435456, 0);
      }
      function Co(n) {
        ko(n),
          Ll.updateDirectives(n, 1),
          Ao(n, Ko.CheckNoChanges),
          Ll.updateRenderer(n, 1),
          Eo(n, Ko.CheckNoChanges),
          (n.state &= -97);
      }
      function xo(n) {
        1 & n.state ? ((n.state &= -2), (n.state |= 2)) : (n.state &= -3),
          Tl(n, 0, 256),
          ko(n),
          Ll.updateDirectives(n, 0),
          Ao(n, Ko.CheckAndUpdate),
          Io(n, 67108864, 536870912, 0);
        let e = Tl(n, 256, 512);
        vs(n, 2097152 | (e ? 1048576 : 0)),
          Ll.updateRenderer(n, 0),
          Eo(n, Ko.CheckAndUpdate),
          Io(n, 134217728, 536870912, 0),
          vs(n, 8388608 | ((e = Tl(n, 512, 768)) ? 4194304 : 0)),
          2 & n.def.flags && (n.state &= -9),
          (n.state &= -97),
          Tl(n, 768, 1024);
      }
      function Oo(n, e, t, l, r, s, i, o, u, a, c, d, h) {
        return 0 === t
          ? (function(n, e, t, l, r, s, i, o, u, a, c, d) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function(n, e, t, l, r, s, i, o, u, a, c, d) {
                    const h = e.bindings.length;
                    let p = !1;
                    return (
                      h > 0 && Ji(n, e, 0, t) && (p = !0),
                      h > 1 && Ji(n, e, 1, l) && (p = !0),
                      h > 2 && Ji(n, e, 2, r) && (p = !0),
                      h > 3 && Ji(n, e, 3, s) && (p = !0),
                      h > 4 && Ji(n, e, 4, i) && (p = !0),
                      h > 5 && Ji(n, e, 5, o) && (p = !0),
                      h > 6 && Ji(n, e, 6, u) && (p = !0),
                      h > 7 && Ji(n, e, 7, a) && (p = !0),
                      h > 8 && Ji(n, e, 8, c) && (p = !0),
                      h > 9 && Ji(n, e, 9, d) && (p = !0),
                      p
                    );
                  })(n, e, t, l, r, s, i, o, u, a, c, d);
                case 2:
                  return (function(n, e, t, l, r, s, i, o, u, a, c, d) {
                    let h = !1;
                    const p = e.bindings,
                      b = p.length;
                    if (
                      (b > 0 && Ql(n, e, 0, t) && (h = !0),
                      b > 1 && Ql(n, e, 1, l) && (h = !0),
                      b > 2 && Ql(n, e, 2, r) && (h = !0),
                      b > 3 && Ql(n, e, 3, s) && (h = !0),
                      b > 4 && Ql(n, e, 4, i) && (h = !0),
                      b > 5 && Ql(n, e, 5, o) && (h = !0),
                      b > 6 && Ql(n, e, 6, u) && (h = !0),
                      b > 7 && Ql(n, e, 7, a) && (h = !0),
                      b > 8 && Ql(n, e, 8, c) && (h = !0),
                      b > 9 && Ql(n, e, 9, d) && (h = !0),
                      h)
                    ) {
                      let h = e.text.prefix;
                      b > 0 && (h += ho(t, p[0])),
                        b > 1 && (h += ho(l, p[1])),
                        b > 2 && (h += ho(r, p[2])),
                        b > 3 && (h += ho(s, p[3])),
                        b > 4 && (h += ho(i, p[4])),
                        b > 5 && (h += ho(o, p[5])),
                        b > 6 && (h += ho(u, p[6])),
                        b > 7 && (h += ho(a, p[7])),
                        b > 8 && (h += ho(c, p[8])),
                        b > 9 && (h += ho(d, p[9]));
                      const g = ql(n, e.nodeIndex).renderText;
                      n.renderer.setValue(g, h);
                    }
                    return h;
                  })(n, e, t, l, r, s, i, o, u, a, c, d);
                case 16384:
                  return (function(n, e, t, l, r, s, i, o, u, a, c, d) {
                    const h = Rl(n, e.nodeIndex),
                      p = h.instance;
                    let b = !1,
                      g = void 0;
                    const f = e.bindings.length;
                    return (
                      f > 0 && Zl(n, e, 0, t) && ((b = !0), (g = ms(n, h, e, 0, t, g))),
                      f > 1 && Zl(n, e, 1, l) && ((b = !0), (g = ms(n, h, e, 1, l, g))),
                      f > 2 && Zl(n, e, 2, r) && ((b = !0), (g = ms(n, h, e, 2, r, g))),
                      f > 3 && Zl(n, e, 3, s) && ((b = !0), (g = ms(n, h, e, 3, s, g))),
                      f > 4 && Zl(n, e, 4, i) && ((b = !0), (g = ms(n, h, e, 4, i, g))),
                      f > 5 && Zl(n, e, 5, o) && ((b = !0), (g = ms(n, h, e, 5, o, g))),
                      f > 6 && Zl(n, e, 6, u) && ((b = !0), (g = ms(n, h, e, 6, u, g))),
                      f > 7 && Zl(n, e, 7, a) && ((b = !0), (g = ms(n, h, e, 7, a, g))),
                      f > 8 && Zl(n, e, 8, c) && ((b = !0), (g = ms(n, h, e, 8, c, g))),
                      f > 9 && Zl(n, e, 9, d) && ((b = !0), (g = ms(n, h, e, 9, d, g))),
                      g && p.ngOnChanges(g),
                      65536 & e.flags && Il(n, 256, e.nodeIndex) && p.ngOnInit(),
                      262144 & e.flags && p.ngDoCheck(),
                      b
                    );
                  })(n, e, t, l, r, s, i, o, u, a, c, d);
                case 32:
                case 64:
                case 128:
                  return (function(n, e, t, l, r, s, i, o, u, a, c, d) {
                    const h = e.bindings;
                    let p = !1;
                    const b = h.length;
                    if (
                      (b > 0 && Ql(n, e, 0, t) && (p = !0),
                      b > 1 && Ql(n, e, 1, l) && (p = !0),
                      b > 2 && Ql(n, e, 2, r) && (p = !0),
                      b > 3 && Ql(n, e, 3, s) && (p = !0),
                      b > 4 && Ql(n, e, 4, i) && (p = !0),
                      b > 5 && Ql(n, e, 5, o) && (p = !0),
                      b > 6 && Ql(n, e, 6, u) && (p = !0),
                      b > 7 && Ql(n, e, 7, a) && (p = !0),
                      b > 8 && Ql(n, e, 8, c) && (p = !0),
                      b > 9 && Ql(n, e, 9, d) && (p = !0),
                      p)
                    ) {
                      const p = jl(n, e.nodeIndex);
                      let g;
                      switch (201347067 & e.flags) {
                        case 32:
                          (g = new Array(h.length)),
                            b > 0 && (g[0] = t),
                            b > 1 && (g[1] = l),
                            b > 2 && (g[2] = r),
                            b > 3 && (g[3] = s),
                            b > 4 && (g[4] = i),
                            b > 5 && (g[5] = o),
                            b > 6 && (g[6] = u),
                            b > 7 && (g[7] = a),
                            b > 8 && (g[8] = c),
                            b > 9 && (g[9] = d);
                          break;
                        case 64:
                          (g = {}),
                            b > 0 && (g[h[0].name] = t),
                            b > 1 && (g[h[1].name] = l),
                            b > 2 && (g[h[2].name] = r),
                            b > 3 && (g[h[3].name] = s),
                            b > 4 && (g[h[4].name] = i),
                            b > 5 && (g[h[5].name] = o),
                            b > 6 && (g[h[6].name] = u),
                            b > 7 && (g[h[7].name] = a),
                            b > 8 && (g[h[8].name] = c),
                            b > 9 && (g[h[9].name] = d);
                          break;
                        case 128:
                          const n = t;
                          switch (b) {
                            case 1:
                              g = n.transform(t);
                              break;
                            case 2:
                              g = n.transform(l);
                              break;
                            case 3:
                              g = n.transform(l, r);
                              break;
                            case 4:
                              g = n.transform(l, r, s);
                              break;
                            case 5:
                              g = n.transform(l, r, s, i);
                              break;
                            case 6:
                              g = n.transform(l, r, s, i, o);
                              break;
                            case 7:
                              g = n.transform(l, r, s, i, o, u);
                              break;
                            case 8:
                              g = n.transform(l, r, s, i, o, u, a);
                              break;
                            case 9:
                              g = n.transform(l, r, s, i, o, u, a, c);
                              break;
                            case 10:
                              g = n.transform(l, r, s, i, o, u, a, c, d);
                          }
                      }
                      p.value = g;
                    }
                    return p;
                  })(n, e, t, l, r, s, i, o, u, a, c, d);
                default:
                  throw 'unreachable';
              }
            })(n, e, l, r, s, i, o, u, a, c, d, h)
          : (function(n, e, t) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function(n, e, t) {
                    let l = !1;
                    for (let r = 0; r < t.length; r++) Ji(n, e, r, t[r]) && (l = !0);
                    return l;
                  })(n, e, t);
                case 2:
                  return (function(n, e, t) {
                    const l = e.bindings;
                    let r = !1;
                    for (let s = 0; s < t.length; s++) Ql(n, e, s, t[s]) && (r = !0);
                    if (r) {
                      let r = '';
                      for (let n = 0; n < t.length; n++) r += ho(t[n], l[n]);
                      r = e.text.prefix + r;
                      const s = ql(n, e.nodeIndex).renderText;
                      n.renderer.setValue(s, r);
                    }
                    return r;
                  })(n, e, t);
                case 16384:
                  return (function(n, e, t) {
                    const l = Rl(n, e.nodeIndex),
                      r = l.instance;
                    let s = !1,
                      i = void 0;
                    for (let o = 0; o < t.length; o++) Zl(n, e, o, t[o]) && ((s = !0), (i = ms(n, l, e, o, t[o], i)));
                    return (
                      i && r.ngOnChanges(i),
                      65536 & e.flags && Il(n, 256, e.nodeIndex) && r.ngOnInit(),
                      262144 & e.flags && r.ngDoCheck(),
                      s
                    );
                  })(n, e, t);
                case 32:
                case 64:
                case 128:
                  return (function(n, e, t) {
                    const l = e.bindings;
                    let r = !1;
                    for (let s = 0; s < t.length; s++) Ql(n, e, s, t[s]) && (r = !0);
                    if (r) {
                      const r = jl(n, e.nodeIndex);
                      let s;
                      switch (201347067 & e.flags) {
                        case 32:
                          s = t;
                          break;
                        case 64:
                          s = {};
                          for (let r = 0; r < t.length; r++) s[l[r].name] = t[r];
                          break;
                        case 128:
                          const n = t[0],
                            e = t.slice(1);
                          s = n.transform(...e);
                      }
                      r.value = s;
                    }
                    return r;
                  })(n, e, t);
                default:
                  throw 'unreachable';
              }
            })(n, e, l);
      }
      function ko(n) {
        const e = n.def;
        if (4 & e.nodeFlags)
          for (let t = 0; t < e.nodes.length; t++) {
            const l = e.nodes[t];
            if (4 & l.flags) {
              const e = Nl(n, t).template._projectedViews;
              if (e)
                for (let t = 0; t < e.length; t++) {
                  const l = e[t];
                  (l.state |= 32), Xl(l, n);
                }
            } else 0 == (4 & l.childFlags) && (t += l.childCount);
          }
      }
      function So(n, e, t, l, r, s, i, o, u, a, c, d, h) {
        return (
          0 === t
            ? (function(n, e, t, l, r, s, i, o, u, a, c, d) {
                const h = e.bindings.length;
                h > 0 && Jl(n, e, 0, t),
                  h > 1 && Jl(n, e, 1, l),
                  h > 2 && Jl(n, e, 2, r),
                  h > 3 && Jl(n, e, 3, s),
                  h > 4 && Jl(n, e, 4, i),
                  h > 5 && Jl(n, e, 5, o),
                  h > 6 && Jl(n, e, 6, u),
                  h > 7 && Jl(n, e, 7, a),
                  h > 8 && Jl(n, e, 8, c),
                  h > 9 && Jl(n, e, 9, d);
              })(n, e, l, r, s, i, o, u, a, c, d, h)
            : (function(n, e, t) {
                for (let l = 0; l < t.length; l++) Jl(n, e, l, t[l]);
              })(n, e, l),
          !1
        );
      }
      function Mo(n, e) {
        if (Vl(n, e.nodeIndex).dirty)
          throw El(
            Ll.createDebugContext(n, e.nodeIndex),
            `Query ${e.query.id} not dirty`,
            `Query ${e.query.id} dirty`,
            0 != (1 & n.state)
          );
      }
      function Po(n) {
        if (!(128 & n.state)) {
          if ((Ao(n, Ko.Destroy), Eo(n, Ko.Destroy), vs(n, 131072), n.disposables))
            for (let e = 0; e < n.disposables.length; e++) n.disposables[e]();
          !(function(n) {
            if (!(16 & n.state)) return;
            const e = er(n);
            if (e) {
              const t = e.template._projectedViews;
              t && (W(t, t.indexOf(n)), Ll.dirtyParentQueries(n));
            }
          })(n),
            n.renderer.destroyNode &&
              (function(n) {
                const e = n.def.nodes.length;
                for (let t = 0; t < e; t++) {
                  const e = n.def.nodes[t];
                  1 & e.flags
                    ? n.renderer.destroyNode(Nl(n, t).renderElement)
                    : 2 & e.flags
                    ? n.renderer.destroyNode(ql(n, t).renderText)
                    : (67108864 & e.flags || 134217728 & e.flags) && Vl(n, t).destroy();
                }
              })(n),
            rr(n) && n.renderer.destroy(),
            (n.state |= 128);
        }
      }
      const Ko = (function() {
        var n = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (n[n.CreateViewNodes] = 'CreateViewNodes'),
          (n[n.CheckNoChanges] = 'CheckNoChanges'),
          (n[n.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (n[n.CheckAndUpdate] = 'CheckAndUpdate'),
          (n[n.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (n[n.Destroy] = 'Destroy'),
          n
        );
      })();
      function Eo(n, e) {
        const t = n.def;
        if (33554432 & t.nodeFlags)
          for (let l = 0; l < t.nodes.length; l++) {
            const r = t.nodes[l];
            33554432 & r.flags ? Do(Nl(n, l).componentView, e) : 0 == (33554432 & r.childFlags) && (l += r.childCount);
          }
      }
      function Ao(n, e) {
        const t = n.def;
        if (16777216 & t.nodeFlags)
          for (let l = 0; l < t.nodes.length; l++) {
            const r = t.nodes[l];
            if (16777216 & r.flags) {
              const t = Nl(n, l).viewContainer._embeddedViews;
              for (let n = 0; n < t.length; n++) Do(t[n], e);
            } else 0 == (16777216 & r.childFlags) && (l += r.childCount);
          }
      }
      function Do(n, e) {
        const t = n.state;
        switch (e) {
          case Ko.CheckNoChanges:
            0 == (128 & t) && (12 == (12 & t) ? Co(n) : 64 & t && To(n, Ko.CheckNoChangesProjectedViews));
            break;
          case Ko.CheckNoChangesProjectedViews:
            0 == (128 & t) && (32 & t ? Co(n) : 64 & t && To(n, e));
            break;
          case Ko.CheckAndUpdate:
            0 == (128 & t) && (12 == (12 & t) ? xo(n) : 64 & t && To(n, Ko.CheckAndUpdateProjectedViews));
            break;
          case Ko.CheckAndUpdateProjectedViews:
            0 == (128 & t) && (32 & t ? xo(n) : 64 & t && To(n, e));
            break;
          case Ko.Destroy:
            Po(n);
            break;
          case Ko.CreateViewNodes:
            wo(n);
        }
      }
      function To(n, e) {
        Ao(n, e), Eo(n, e);
      }
      function Io(n, e, t, l) {
        if (!(n.def.nodeFlags & e && n.def.nodeFlags & t)) return;
        const r = n.def.nodes.length;
        for (let s = 0; s < r; s++) {
          const r = n.def.nodes[s];
          if (r.flags & e && r.flags & t)
            switch ((Ll.setCurrentNode(n, r.nodeIndex), l)) {
              case 0:
                no(n, r);
                break;
              case 1:
                Mo(n, r);
            }
          (r.childFlags & e && r.childFlags & t) || (s += r.childCount);
        }
      }
      let qo = !1;
      function No(n, e, t, l, r, s) {
        const i = r.injector.get(sl);
        return mo(jo(n, r, i, e, t), l, s);
      }
      function Ro(n, e, t, l, r, s) {
        const i = r.injector.get(sl),
          o = jo(n, r, new fu(i), e, t),
          u = Go(l);
        return bu(nu.create, mo, null, [o, u, s]);
      }
      function jo(n, e, t, l, r) {
        const s = e.injector.get(Ve),
          i = e.injector.get(de),
          o = t.createRenderer(null, null);
        return {
          ngModule: e,
          injector: n,
          projectableNodes: l,
          selectorOrNode: r,
          sanitizer: s,
          rendererFactory: t,
          renderer: o,
          errorHandler: i
        };
      }
      function Vo(n, e, t, l) {
        const r = Go(t);
        return bu(nu.create, fo, null, [n, e, r, l]);
      }
      function Lo(n, e, t, l) {
        return (t = zo.get(e.element.componentProvider.provider.token) || Go(t)), bu(nu.create, vo, null, [n, e, t, l]);
      }
      function Uo(n, e, t, l) {
        return Gr(
          n,
          e,
          t,
          (function(n) {
            const { hasOverrides: e, hasDeprecatedOverrides: t } = (function(n) {
              let e = !1,
                t = !1;
              return 0 === Fo.size
                ? { hasOverrides: e, hasDeprecatedOverrides: t }
                : (n.providers.forEach(n => {
                    const l = Fo.get(n.token);
                    3840 & n.flags && l && ((e = !0), (t = t || l.deprecatedBehavior));
                  }),
                  n.modules.forEach(n => {
                    Ho.forEach((l, r) => {
                      m(r).providedIn === n && ((e = !0), (t = t || l.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: e, hasDeprecatedOverrides: t });
            })(n);
            return e
              ? ((function(n) {
                  for (let e = 0; e < n.providers.length; e++) {
                    const l = n.providers[e];
                    t && (l.flags |= 4096);
                    const r = Fo.get(l.token);
                    r && ((l.flags = (-3841 & l.flags) | r.flags), (l.deps = ur(r.deps)), (l.value = r.value));
                  }
                  if (Ho.size > 0) {
                    let e = new Set(n.modules);
                    Ho.forEach((l, r) => {
                      if (e.has(m(r).providedIn)) {
                        let e = {
                          token: r,
                          flags: l.flags | (t ? 4096 : 0),
                          deps: ur(l.deps),
                          value: l.value,
                          index: n.providers.length
                        };
                        n.providers.push(e), (n.providersByKey[Hl(r)] = e);
                      }
                    });
                  }
                })((n = n.factory(() => Ul))),
                n)
              : n;
          })(l)
        );
      }
      const Fo = new Map(),
        Ho = new Map(),
        zo = new Map();
      function $o(n) {
        let e;
        Fo.set(n.token, n),
          'function' == typeof n.token && (e = m(n.token)) && 'function' == typeof e.providedIn && Ho.set(n.token, n);
      }
      function Bo(n, e) {
        const t = dr(e.viewDefFactory),
          l = dr(t.nodes[0].element.componentView);
        zo.set(n, l);
      }
      function Wo() {
        Fo.clear(), Ho.clear(), zo.clear();
      }
      function Go(n) {
        if (0 === Fo.size) return n;
        const e = (function(n) {
          const e = [];
          let t = null;
          for (let l = 0; l < n.nodes.length; l++) {
            const r = n.nodes[l];
            1 & r.flags && (t = r),
              t && 3840 & r.flags && Fo.has(r.provider.token) && (e.push(t.nodeIndex), (t = null));
          }
          return e;
        })(n);
        if (0 === e.length) return n;
        n = n.factory(() => Ul);
        for (let l = 0; l < e.length; l++) t(n, e[l]);
        return n;
        function t(n, e) {
          for (let t = e + 1; t < n.nodes.length; t++) {
            const e = n.nodes[t];
            if (1 & e.flags) return;
            if (3840 & e.flags) {
              const n = e.provider,
                t = Fo.get(n.token);
              t && ((e.flags = (-3841 & e.flags) | t.flags), (n.deps = ur(t.deps)), (n.value = t.value));
            }
          }
        }
      }
      function Zo(n, e, t, l, r, s, i, o, u, a, c, d, h) {
        const p = n.def.nodes[e];
        return Oo(n, p, t, l, r, s, i, o, u, a, c, d, h), 224 & p.flags ? jl(n, e).value : void 0;
      }
      function Qo(n, e, t, l, r, s, i, o, u, a, c, d, h) {
        const p = n.def.nodes[e];
        return So(n, p, t, l, r, s, i, o, u, a, c, d, h), 224 & p.flags ? jl(n, e).value : void 0;
      }
      function Jo(n) {
        return bu(nu.detectChanges, xo, null, [n]);
      }
      function Yo(n) {
        return bu(nu.checkNoChanges, Co, null, [n]);
      }
      function Xo(n) {
        return bu(nu.destroy, Po, null, [n]);
      }
      const nu = (function() {
        var n = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
        return (
          (n[n.create] = 'create'),
          (n[n.detectChanges] = 'detectChanges'),
          (n[n.checkNoChanges] = 'checkNoChanges'),
          (n[n.destroy] = 'destroy'),
          (n[n.handleEvent] = 'handleEvent'),
          n
        );
      })();
      let eu, tu, lu;
      function ru(n, e) {
        (tu = n), (lu = e);
      }
      function su(n, e, t, l) {
        return ru(n, e), bu(nu.handleEvent, n.def.handleEvent, null, [n, e, t, l]);
      }
      function iu(n, e) {
        if (128 & n.state) throw Dl(nu[eu]);
        return (
          ru(n, cu(n, 0)),
          n.def.updateDirectives(function(n, t, l, ...r) {
            const s = n.def.nodes[t];
            return (
              0 === e ? uu(n, s, l, r) : au(n, s, l, r),
              16384 & s.flags && ru(n, cu(n, t)),
              224 & s.flags ? jl(n, s.nodeIndex).value : void 0
            );
          }, n)
        );
      }
      function ou(n, e) {
        if (128 & n.state) throw Dl(nu[eu]);
        return (
          ru(n, du(n, 0)),
          n.def.updateRenderer(function(n, t, l, ...r) {
            const s = n.def.nodes[t];
            return (
              0 === e ? uu(n, s, l, r) : au(n, s, l, r),
              3 & s.flags && ru(n, du(n, t)),
              224 & s.flags ? jl(n, s.nodeIndex).value : void 0
            );
          }, n)
        );
      }
      function uu(n, e, t, l) {
        if (Oo(n, e, t, ...l)) {
          const i = 1 === t ? l[0] : l;
          if (16384 & e.flags) {
            const t = {};
            for (let n = 0; n < e.bindings.length; n++) {
              const l = e.bindings[n],
                o = i[n];
              8 & l.flags &&
                (t[
                  ((r = l.nonMinifiedName),
                  (s = void 0),
                  (s = r.replace(/[$@]/g, '_')),
                  `ng-reflect-${(r = s.replace(He, (...n) => '-' + n[1].toLowerCase()))}`)
                ] = ze(o));
            }
            const l = e.parent,
              o = Nl(n, l.nodeIndex).renderElement;
            if (l.element.name)
              for (let e in t) {
                const l = t[e];
                null != l ? n.renderer.setAttribute(o, e, l) : n.renderer.removeAttribute(o, e);
              }
            else n.renderer.setValue(o, `bindings=${JSON.stringify(t, null, 2)}`);
          }
        }
        var r, s;
      }
      function au(n, e, t, l) {
        So(n, e, t, ...l);
      }
      function cu(n, e) {
        for (let t = e; t < n.def.nodes.length; t++) {
          const e = n.def.nodes[t];
          if (16384 & e.flags && e.bindings && e.bindings.length) return t;
        }
        return null;
      }
      function du(n, e) {
        for (let t = e; t < n.def.nodes.length; t++) {
          const e = n.def.nodes[t];
          if (3 & e.flags && e.bindings && e.bindings.length) return t;
        }
        return null;
      }
      class hu {
        constructor(n, e) {
          (this.view = n), (this.nodeIndex = e), null == e && (this.nodeIndex = e = 0), (this.nodeDef = n.def.nodes[e]);
          let t = this.nodeDef,
            l = n;
          for (; t && 0 == (1 & t.flags); ) t = t.parent;
          if (!t) for (; !t && l; ) (t = tr(l)), (l = l.parent);
          (this.elDef = t), (this.elView = l);
        }
        get elOrCompView() {
          return Nl(this.elView, this.elDef.nodeIndex).componentView || this.view;
        }
        get injector() {
          return Hr(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const n = [];
          if (this.elDef)
            for (let e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
              const t = this.elView.def.nodes[e];
              20224 & t.flags && n.push(t.provider.token), (e += t.childCount);
            }
          return n;
        }
        get references() {
          const n = {};
          if (this.elDef) {
            pu(this.elView, this.elDef, n);
            for (let e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
              const t = this.elView.def.nodes[e];
              20224 & t.flags && pu(this.elView, t, n), (e += t.childCount);
            }
          }
          return n;
        }
        get componentRenderElement() {
          const n = (function(n) {
            for (; n && !rr(n); ) n = n.parent;
            return n.parent ? Nl(n.parent, tr(n).nodeIndex) : null;
          })(this.elOrCompView);
          return n ? n.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags ? lr(this.view, this.nodeDef) : lr(this.elView, this.elDef);
        }
        logError(n, ...e) {
          let t, l;
          2 & this.nodeDef.flags
            ? ((t = this.view.def), (l = this.nodeDef.nodeIndex))
            : ((t = this.elView.def), (l = this.elDef.nodeIndex));
          const r = (function(n, e) {
            let t = -1;
            for (let l = 0; l <= e; l++) 3 & n.nodes[l].flags && t++;
            return t;
          })(t, l);
          let s = -1;
          t.factory(() => (++s === r ? n.error.bind(n, ...e) : Ul)),
            s < r && (n.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), n.error(...e));
        }
      }
      function pu(n, e, t) {
        for (let l in e.references) t[l] = to(n, e, e.references[l]);
      }
      function bu(n, e, t, l) {
        const r = eu,
          s = tu,
          i = lu;
        try {
          eu = n;
          const o = e.apply(t, l);
          return (tu = s), (lu = i), (eu = r), o;
        } catch (o) {
          if (ue(o) || !tu) throw o;
          throw (function(n, e) {
            return n instanceof Error || (n = new Error(n.toString())), Al(n, e), n;
          })(o, gu());
        }
      }
      function gu() {
        return tu ? new hu(tu, lu) : null;
      }
      class fu {
        constructor(n) {
          this.delegate = n;
        }
        createRenderer(n, e) {
          return new mu(this.delegate.createRenderer(n, e));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
        }
      }
      class mu {
        constructor(n) {
          (this.delegate = n), (this.debugContextFactory = gu), (this.data = this.delegate.data);
        }
        createDebugContext(n) {
          return this.debugContextFactory(n);
        }
        destroyNode(n) {
          const e = ji(n);
          !(function(n) {
            Ri.delete(n.nativeNode);
          })(e),
            e instanceof qi && (e.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(n);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(n, e) {
          const t = this.delegate.createElement(n, e),
            l = this.createDebugContext(t);
          if (l) {
            const e = new Ni(t, null, l);
            (e.name = n), Vi(e);
          }
          return t;
        }
        createComment(n) {
          const e = this.delegate.createComment(n),
            t = this.createDebugContext(e);
          return t && Vi(new qi(e, null, t)), e;
        }
        createText(n) {
          const e = this.delegate.createText(n),
            t = this.createDebugContext(e);
          return t && Vi(new qi(e, null, t)), e;
        }
        appendChild(n, e) {
          const t = ji(n),
            l = ji(e);
          t && l && t instanceof Ni && t.addChild(l), this.delegate.appendChild(n, e);
        }
        insertBefore(n, e, t) {
          const l = ji(n),
            r = ji(e),
            s = ji(t);
          l && r && l instanceof Ni && l.insertBefore(s, r), this.delegate.insertBefore(n, e, t);
        }
        removeChild(n, e) {
          const t = ji(n),
            l = ji(e);
          t && l && t instanceof Ni && t.removeChild(l), this.delegate.removeChild(n, e);
        }
        selectRootElement(n, e) {
          const t = this.delegate.selectRootElement(n, e),
            l = gu();
          return l && Vi(new Ni(t, null, l)), t;
        }
        setAttribute(n, e, t, l) {
          const r = ji(n);
          r && r instanceof Ni && (r.attributes[l ? l + ':' + e : e] = t), this.delegate.setAttribute(n, e, t, l);
        }
        removeAttribute(n, e, t) {
          const l = ji(n);
          l && l instanceof Ni && (l.attributes[t ? t + ':' + e : e] = null), this.delegate.removeAttribute(n, e, t);
        }
        addClass(n, e) {
          const t = ji(n);
          t && t instanceof Ni && (t.classes[e] = !0), this.delegate.addClass(n, e);
        }
        removeClass(n, e) {
          const t = ji(n);
          t && t instanceof Ni && (t.classes[e] = !1), this.delegate.removeClass(n, e);
        }
        setStyle(n, e, t, l) {
          const r = ji(n);
          r && r instanceof Ni && (r.styles[e] = t), this.delegate.setStyle(n, e, t, l);
        }
        removeStyle(n, e, t) {
          const l = ji(n);
          l && l instanceof Ni && (l.styles[e] = null), this.delegate.removeStyle(n, e, t);
        }
        setProperty(n, e, t) {
          const l = ji(n);
          l && l instanceof Ni && (l.properties[e] = t), this.delegate.setProperty(n, e, t);
        }
        listen(n, e, t) {
          if ('string' != typeof n) {
            const l = ji(n);
            l && l.listeners.push(new Ii(e, t));
          }
          return this.delegate.listen(n, e, t);
        }
        parentNode(n) {
          return this.delegate.parentNode(n);
        }
        nextSibling(n) {
          return this.delegate.nextSibling(n);
        }
        setValue(n, e) {
          return this.delegate.setValue(n, e);
        }
      }
      function vu(n, e, t) {
        return new _u(n, e, t);
      }
      class _u extends $ {
        constructor(n, e, t) {
          super(), (this.moduleType = n), (this._bootstrapComponents = e), (this._ngModuleDefFactory = t);
        }
        create(n) {
          !(function() {
            if (qo) return;
            qo = !0;
            const n = be()
              ? {
                  setCurrentNode: ru,
                  createRootView: Ro,
                  createEmbeddedView: Vo,
                  createComponentView: Lo,
                  createNgModuleRef: Uo,
                  overrideProvider: $o,
                  overrideComponentView: Bo,
                  clearOverrides: Wo,
                  checkAndUpdateView: Jo,
                  checkNoChangesView: Yo,
                  destroyView: Xo,
                  createDebugContext: (n, e) => new hu(n, e),
                  handleEvent: su,
                  updateDirectives: iu,
                  updateRenderer: ou
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: No,
                  createEmbeddedView: fo,
                  createComponentView: vo,
                  createNgModuleRef: Gr,
                  overrideProvider: Ul,
                  overrideComponentView: Ul,
                  clearOverrides: Ul,
                  checkAndUpdateView: xo,
                  checkNoChangesView: Co,
                  destroyView: Po,
                  createDebugContext: (n, e) => new hu(n, e),
                  handleEvent: (n, e, t, l) => n.def.handleEvent(n, e, t, l),
                  updateDirectives: (n, e) => n.def.updateDirectives(0 === e ? Zo : Qo, n),
                  updateRenderer: (n, e) => n.def.updateRenderer(0 === e ? Zo : Qo, n)
                };
            (Ll.setCurrentNode = n.setCurrentNode),
              (Ll.createRootView = n.createRootView),
              (Ll.createEmbeddedView = n.createEmbeddedView),
              (Ll.createComponentView = n.createComponentView),
              (Ll.createNgModuleRef = n.createNgModuleRef),
              (Ll.overrideProvider = n.overrideProvider),
              (Ll.overrideComponentView = n.overrideComponentView),
              (Ll.clearOverrides = n.clearOverrides),
              (Ll.checkAndUpdateView = n.checkAndUpdateView),
              (Ll.checkNoChangesView = n.checkNoChangesView),
              (Ll.destroyView = n.destroyView),
              (Ll.resolveDep = gs),
              (Ll.createDebugContext = n.createDebugContext),
              (Ll.handleEvent = n.handleEvent),
              (Ll.updateDirectives = n.updateDirectives),
              (Ll.updateRenderer = n.updateRenderer),
              (Ll.dirtyParentQueries = Xi);
          })();
          const e = (function(n) {
            const e = Array.from(n.providers),
              t = Array.from(n.modules),
              l = {};
            for (const r in n.providersByKey) l[r] = n.providersByKey[r];
            return { factory: n.factory, isRoot: n.isRoot, providers: e, modules: t, providersByKey: l };
          })(dr(this._ngModuleDefFactory));
          return Ll.createNgModuleRef(this.moduleType, n || gt.NULL, this._bootstrapComponents, e);
        }
      }
    },
    '9ppp': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = (() => {
        function n() {
          return (
            Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this
          );
        }
        return (n.prototype = Object.create(Error.prototype)), n;
      })();
    },
    'A/Ql': function(n) {
      n.exports = {
        APP_NAME: 'ngX-Rocket',
        About: 'About',
        'Hello world !': 'Hello world !',
        Home: 'Home',
        'Logged in as': 'Logged in as',
        Login: 'Login',
        Logout: 'Logout',
        Password: 'Password',
        'Password is required': 'Password is required',
        Username: 'Username',
        'Username is required': 'Username is required',
        'Username or password incorrect.': 'Username or password incorrect.',
        'Remember me': 'Remember me',
        Version: 'Version'
      };
    },
    AytR: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = {
        production: !0,
        hmr: !1,
        version: t('4pUk').a.npm_package_version,
        serverUrl: 'http://18.222.162.8',
        serverPort: 8080,
        defaultLanguage: 'en-US',
        supportedLanguages: ['en-US', 'fr-FR']
      };
    },
    Cfvw: function(n, e, t) {
      'use strict';
      var l = t('HDdC'),
        r = t('SeVD'),
        s = t('quSY'),
        i = t('kJWO'),
        o = t('jZKg'),
        u = t('Lhse'),
        a = t('c2HN'),
        c = t('I55L');
      function d(n, e) {
        return e
          ? (function(n, e) {
              if (null != n) {
                if (
                  (function(n) {
                    return n && 'function' == typeof n[i.a];
                  })(n)
                )
                  return (function(n, e) {
                    return new l.a(t => {
                      const l = new s.a();
                      return (
                        l.add(
                          e.schedule(() => {
                            const r = n[i.a]();
                            l.add(
                              r.subscribe({
                                next(n) {
                                  l.add(e.schedule(() => t.next(n)));
                                },
                                error(n) {
                                  l.add(e.schedule(() => t.error(n)));
                                },
                                complete() {
                                  l.add(e.schedule(() => t.complete()));
                                }
                              })
                            );
                          })
                        ),
                        l
                      );
                    });
                  })(n, e);
                if (Object(a.a)(n))
                  return (function(n, e) {
                    return new l.a(t => {
                      const l = new s.a();
                      return (
                        l.add(
                          e.schedule(() =>
                            n.then(
                              n => {
                                l.add(
                                  e.schedule(() => {
                                    t.next(n), l.add(e.schedule(() => t.complete()));
                                  })
                                );
                              },
                              n => {
                                l.add(e.schedule(() => t.error(n)));
                              }
                            )
                          )
                        ),
                        l
                      );
                    });
                  })(n, e);
                if (Object(c.a)(n)) return Object(o.a)(n, e);
                if (
                  (function(n) {
                    return n && 'function' == typeof n[u.a];
                  })(n) ||
                  'string' == typeof n
                )
                  return (function(n, e) {
                    if (!n) throw new Error('Iterable cannot be null');
                    return new l.a(t => {
                      const l = new s.a();
                      let r;
                      return (
                        l.add(() => {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        l.add(
                          e.schedule(() => {
                            (r = n[u.a]()),
                              l.add(
                                e.schedule(function() {
                                  if (t.closed) return;
                                  let n, e;
                                  try {
                                    const t = r.next();
                                    (n = t.value), (e = t.done);
                                  } catch (l) {
                                    return void t.error(l);
                                  }
                                  e ? t.complete() : (t.next(n), this.schedule());
                                })
                              );
                          })
                        ),
                        l
                      );
                    });
                  })(n, e);
              }
              throw new TypeError(((null !== n && typeof n) || n) + ' is not observable');
            })(n, e)
          : n instanceof l.a
          ? n
          : new l.a(Object(r.a)(n));
      }
      t.d(e, 'a', function() {
        return d;
      });
    },
    DH7j: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = (() => Array.isArray || (n => n && 'number' == typeof n.length))();
    },
    HDdC: function(n, e, t) {
      'use strict';
      var l = t('7o/Q'),
        r = t('2QA8'),
        s = t('gRHU'),
        i = t('kJWO'),
        o = t('mCNh'),
        u = t('2fFW');
      t.d(e, 'a', function() {
        return a;
      });
      let a = (() => {
        class n {
          constructor(n) {
            (this._isScalar = !1), n && (this._subscribe = n);
          }
          lift(e) {
            const t = new n();
            return (t.source = this), (t.operator = e), t;
          }
          subscribe(n, e, t) {
            const { operator: i } = this,
              o = (function(n, e, t) {
                if (n) {
                  if (n instanceof l.a) return n;
                  if (n[r.a]) return n[r.a]();
                }
                return n || e || t ? new l.a(n, e, t) : new l.a(s.a);
              })(n, e, t);
            if (
              (o.add(
                i
                  ? i.call(o, this.source)
                  : this.source || (u.a.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable)
                  ? this._subscribe(o)
                  : this._trySubscribe(o)
              ),
              u.a.useDeprecatedSynchronousErrorHandling &&
                o.syncErrorThrowable &&
                ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }
          _trySubscribe(n) {
            try {
              return this._subscribe(n);
            } catch (e) {
              u.a.useDeprecatedSynchronousErrorHandling && ((n.syncErrorThrown = !0), (n.syncErrorValue = e)),
                (function(n) {
                  for (; n; ) {
                    const { closed: e, destination: t, isStopped: r } = n;
                    if (e || r) return !1;
                    n = t && t instanceof l.a ? t : null;
                  }
                  return !0;
                })(n)
                  ? n.error(e)
                  : console.warn(e);
            }
          }
          forEach(n, e) {
            return new (e = c(e))((e, t) => {
              let l;
              l = this.subscribe(
                e => {
                  try {
                    n(e);
                  } catch (r) {
                    t(r), l && l.unsubscribe();
                  }
                },
                t,
                e
              );
            });
          }
          _subscribe(n) {
            const { source: e } = this;
            return e && e.subscribe(n);
          }
          [i.a]() {
            return this;
          }
          pipe(...n) {
            return 0 === n.length ? this : Object(o.b)(n)(this);
          }
          toPromise(n) {
            return new (n = c(n))((n, e) => {
              let t;
              this.subscribe(
                n => (t = n),
                n => e(n),
                () => n(t)
              );
            });
          }
        }
        return (n.create = e => new n(e)), n;
      })();
      function c(n) {
        if ((n || (n = u.a.Promise || Promise), !n)) throw new Error('no Promise impl found');
        return n;
      }
    },
    I55L: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = n => n && 'number' == typeof n.length && 'function' != typeof n;
    },
    KqfI: function(n, e, t) {
      'use strict';
      function l() {}
      t.d(e, 'a', function() {
        return l;
      });
    },
    LbVS: function(n, e, t) {
      'use strict';
      function l(n) {
        return n;
      }
      function r() {
        var n = document.querySelectorAll('input');
        return Array.prototype.slice.call(n).map(function(n) {
          return n.value;
        });
      }
      function s(n) {
        var e = document.querySelectorAll('input');
        n &&
          e.length === n.length &&
          (n.forEach(function(n, t) {
            var l = e[t];
            (l.value = n), l.dispatchEvent(new CustomEvent('input', { detail: l.value }));
          }),
          (n.length = 0));
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.bootloader = function(n, e, t) {
          'object' == typeof n && ((e = n.before), (t = n.after), (n = n.main)), (e = e || l), (t = t || l);
          var r = document.readyState;
          switch (r) {
            case 'loading':
              document.addEventListener('DOMContentLoaded', function l() {
                document.removeEventListener('DOMContentLoaded', l), t(n(e(r)));
              });
              break;
            case 'interactive':
            case 'complete':
            default:
              t(n(e(r)));
          }
        }),
        (e.createNewHosts = function(n) {
          var e = Array.prototype.map.call(n, function(n) {
            var e = document.createElement(n.tagName),
              t = n.parentNode,
              l = e.style.display;
            return (
              (e.style.display = 'none'),
              t.insertBefore(e, n),
              function() {
                e.style.display = l;
                try {
                  t.removeChild(n);
                } catch (r) {}
              }
            );
          });
          return function() {
            e.forEach(function(n) {
              return n();
            });
          };
        }),
        (e.removeNgStyles = function() {
          var n = document.head,
            e = n.querySelectorAll('style');
          Array.prototype.slice
            .call(e)
            .filter(function(n) {
              return -1 !== n.innerText.indexOf('_ng');
            })
            .map(function(e) {
              return n.removeChild(e);
            });
        }),
        (e.getInputValues = r),
        (e.setInputValues = s),
        (e.createInputTransfer = function() {
          var n = r();
          return function() {
            return s(n);
          };
        });
    },
    Lhse: function(n, e, t) {
      'use strict';
      function l() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      t.d(e, 'a', function() {
        return r;
      });
      const r = l();
    },
    NJ4a: function(n, e, t) {
      'use strict';
      function l(n) {
        setTimeout(() => {
          throw n;
        }, 0);
      }
      t.d(e, 'a', function() {
        return l;
      });
    },
    PsNa: function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MODULE_CONFIG = {
          OnInit: 'hmrOnInit',
          OnStatus: 'hmrOnStatus',
          OnCheck: 'hmrOnCheck',
          OnDecline: 'hmrOnDecline',
          OnDestroy: 'hmrOnDestroy',
          AfterDestroy: 'hmrAfterDestroy'
        }),
        (e.hmrModule = function(n, t, l) {
          return (
            void 0 === l && (l = e.MODULE_CONFIG),
            t.hot &&
              (t.hot.accept(),
              n.instance[e.MODULE_CONFIG.OnInit] && t.hot.data && n.instance[e.MODULE_CONFIG.OnInit](t.hot.data),
              n.instance[e.MODULE_CONFIG.OnStatus] &&
                t.hot.apply(function(t) {
                  n.instance[e.MODULE_CONFIG.OnStatus](t);
                }),
              n.instance[e.MODULE_CONFIG.OnCheck] &&
                t.hot.check(function(t, l) {
                  n.instance[e.MODULE_CONFIG.OnCheck](t, l);
                }),
              n.instance[e.MODULE_CONFIG.OnDecline] &&
                t.hot.decline(function(t) {
                  n.instance[e.MODULE_CONFIG.OnDecline](t);
                }),
              t.hot.dispose(function(t) {
                n.instance[e.MODULE_CONFIG.OnDestroy] && n.instance[e.MODULE_CONFIG.OnDestroy](t),
                  n.destroy(),
                  n.instance[e.MODULE_CONFIG.AfterDestroy] && n.instance[e.MODULE_CONFIG.AfterDestroy](t);
              })),
            n
          );
        });
    },
    SVse: function(n, e, t) {
      'use strict';
      t.d(e, 'B', function() {
        return B;
      }),
        t.d(e, 's', function() {
          return I;
        }),
        t.d(e, 'l', function() {
          return G;
        }),
        t.d(e, 'm', function() {
          return W;
        }),
        t.d(e, 'd', function() {
          return p;
        }),
        t.d(e, 'q', function() {
          return b;
        }),
        t.d(e, 'u', function() {
          return m;
        }),
        t.d(e, 't', function() {
          return v;
        }),
        t.d(e, 'v', function() {
          return _;
        }),
        t.d(e, 'C', function() {
          return Z;
        }),
        t.d(e, 'b', function() {
          return un;
        }),
        t.d(e, 'i', function() {
          return X;
        }),
        t.d(e, 'j', function() {
          return en;
        }),
        t.d(e, 'k', function() {
          return ln;
        }),
        t.d(e, 'n', function() {
          return on;
        }),
        t.d(e, 'c', function() {
          return an;
        }),
        t.d(e, 'A', function() {
          return cn;
        }),
        t.d(e, 'w', function() {
          return hn;
        }),
        t.d(e, 'x', function() {
          return pn;
        }),
        t.d(e, 'r', function() {
          return bn;
        }),
        t.d(e, 'z', function() {
          return J;
        }),
        t.d(e, 'y', function() {
          return Q;
        }),
        t.d(e, 'p', function() {
          return r;
        }),
        t.d(e, 'f', function() {
          return s;
        }),
        t.d(e, 'h', function() {
          return i;
        }),
        t.d(e, 'a', function() {
          return o;
        }),
        t.d(e, 'e', function() {
          return c;
        }),
        t.d(e, 'o', function() {
          return d;
        }),
        t.d(e, 'g', function() {
          return u;
        });
      var l = t('8Y7J');
      class r {}
      const s = new l.p('Location Initialized');
      class i {}
      const o = new l.p('appBaseHref');
      let u = (() => {
        class n {
          constructor(e, t) {
            (this._subject = new l.m()), (this._urlChangeListeners = []), (this._platformStrategy = e);
            const r = this._platformStrategy.getBaseHref();
            (this._platformLocation = t),
              (this._baseHref = n.stripTrailingSlash(a(r))),
              this._platformStrategy.onPopState(n => {
                this._subject.emit({ url: this.path(!0), pop: !0, state: n.state, type: n.type });
              });
          }
          path(n = !1) {
            return this.normalize(this._platformStrategy.path(n));
          }
          getState() {
            return this._platformLocation.getState();
          }
          isCurrentPathEqualTo(e, t = '') {
            return this.path() == this.normalize(e + n.normalizeQueryParams(t));
          }
          normalize(e) {
            return n.stripTrailingSlash(
              (function(n, e) {
                return n && e.startsWith(n) ? e.substring(n.length) : e;
              })(this._baseHref, a(e))
            );
          }
          prepareExternalUrl(n) {
            return n && '/' !== n[0] && (n = '/' + n), this._platformStrategy.prepareExternalUrl(n);
          }
          go(e, t = '', l = null) {
            this._platformStrategy.pushState(l, '', e, t),
              this._notifyUrlChangeListeners(this.prepareExternalUrl(e + n.normalizeQueryParams(t)), l);
          }
          replaceState(e, t = '', l = null) {
            this._platformStrategy.replaceState(l, '', e, t),
              this._notifyUrlChangeListeners(this.prepareExternalUrl(e + n.normalizeQueryParams(t)), l);
          }
          forward() {
            this._platformStrategy.forward();
          }
          back() {
            this._platformStrategy.back();
          }
          onUrlChange(n) {
            this._urlChangeListeners.push(n),
              this.subscribe(n => {
                this._notifyUrlChangeListeners(n.url, n.state);
              });
          }
          _notifyUrlChangeListeners(n = '', e) {
            this._urlChangeListeners.forEach(t => t(n, e));
          }
          subscribe(n, e, t) {
            return this._subject.subscribe({ next: n, error: e, complete: t });
          }
          static normalizeQueryParams(n) {
            return n && '?' !== n[0] ? '?' + n : n;
          }
          static joinWithSlash(n, e) {
            if (0 == n.length) return e;
            if (0 == e.length) return n;
            let t = 0;
            return (
              n.endsWith('/') && t++,
              e.startsWith('/') && t++,
              2 == t ? n + e.substring(1) : 1 == t ? n + e : n + '/' + e
            );
          }
          static stripTrailingSlash(n) {
            const e = n.match(/#|\?|$/),
              t = (e && e.index) || n.length;
            return n.slice(0, t - ('/' === n[t - 1] ? 1 : 0)) + n.slice(t);
          }
        }
        return n;
      })();
      function a(n) {
        return n.replace(/\/index.html$/, '');
      }
      let c = (() =>
          class extends i {
            constructor(n, e) {
              super(), (this._platformLocation = n), (this._baseHref = ''), null != e && (this._baseHref = e);
            }
            onPopState(n) {
              this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(n = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(n) {
              const e = u.joinWithSlash(this._baseHref, n);
              return e.length > 0 ? '#' + e : e;
            }
            pushState(n, e, t, l) {
              let r = this.prepareExternalUrl(t + u.normalizeQueryParams(l));
              0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.pushState(n, e, r);
            }
            replaceState(n, e, t, l) {
              let r = this.prepareExternalUrl(t + u.normalizeQueryParams(l));
              0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.replaceState(n, e, r);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          })(),
        d = (() =>
          class extends i {
            constructor(n, e) {
              if (
                (super(),
                (this._platformLocation = n),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = e;
            }
            onPopState(n) {
              this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(n) {
              return u.joinWithSlash(this._baseHref, n);
            }
            path(n = !1) {
              const e = this._platformLocation.pathname + u.normalizeQueryParams(this._platformLocation.search),
                t = this._platformLocation.hash;
              return t && n ? `${e}${t}` : e;
            }
            pushState(n, e, t, l) {
              const r = this.prepareExternalUrl(t + u.normalizeQueryParams(l));
              this._platformLocation.pushState(n, e, r);
            }
            replaceState(n, e, t, l) {
              const r = this.prepareExternalUrl(t + u.normalizeQueryParams(l));
              this._platformLocation.replaceState(n, e, r);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          })();
      const h = (function() {
          var n = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (n[n.Zero] = 'Zero'),
            (n[n.One] = 'One'),
            (n[n.Two] = 'Two'),
            (n[n.Few] = 'Few'),
            (n[n.Many] = 'Many'),
            (n[n.Other] = 'Other'),
            n
          );
        })(),
        p = (function() {
          var n = { Format: 0, Standalone: 1 };
          return (n[n.Format] = 'Format'), (n[n.Standalone] = 'Standalone'), n;
        })(),
        b = (function() {
          var n = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (n[n.Narrow] = 'Narrow'),
            (n[n.Abbreviated] = 'Abbreviated'),
            (n[n.Wide] = 'Wide'),
            (n[n.Short] = 'Short'),
            n
          );
        })(),
        g = (function() {
          var n = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (n[n.Short] = 'Short'), (n[n.Medium] = 'Medium'), (n[n.Long] = 'Long'), (n[n.Full] = 'Full'), n;
        })(),
        f = (function() {
          var n = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13
          };
          return (
            (n[n.Decimal] = 'Decimal'),
            (n[n.Group] = 'Group'),
            (n[n.List] = 'List'),
            (n[n.PercentSign] = 'PercentSign'),
            (n[n.PlusSign] = 'PlusSign'),
            (n[n.MinusSign] = 'MinusSign'),
            (n[n.Exponential] = 'Exponential'),
            (n[n.SuperscriptingExponent] = 'SuperscriptingExponent'),
            (n[n.PerMille] = 'PerMille'),
            (n[n.Infinity] = 'Infinity'),
            (n[n.NaN] = 'NaN'),
            (n[n.TimeSeparator] = 'TimeSeparator'),
            (n[n.CurrencyDecimal] = 'CurrencyDecimal'),
            (n[n.CurrencyGroup] = 'CurrencyGroup'),
            n
          );
        })();
      function m(n, e, t) {
        const r = Object(l.rb)(n),
          s = S([r[l.bb.DayPeriodsFormat], r[l.bb.DayPeriodsStandalone]], e);
        return S(s, t);
      }
      function v(n, e, t) {
        const r = Object(l.rb)(n),
          s = S([r[l.bb.DaysFormat], r[l.bb.DaysStandalone]], e);
        return S(s, t);
      }
      function _(n, e, t) {
        const r = Object(l.rb)(n),
          s = S([r[l.bb.MonthsFormat], r[l.bb.MonthsStandalone]], e);
        return S(s, t);
      }
      function y(n, e) {
        return S(Object(l.rb)(n)[l.bb.DateFormat], e);
      }
      function w(n, e) {
        return S(Object(l.rb)(n)[l.bb.TimeFormat], e);
      }
      function C(n, e) {
        return S(Object(l.rb)(n)[l.bb.DateTimeFormat], e);
      }
      function x(n, e) {
        const t = Object(l.rb)(n),
          r = t[l.bb.NumberSymbols][e];
        if (void 0 === r) {
          if (e === f.CurrencyDecimal) return t[l.bb.NumberSymbols][f.Decimal];
          if (e === f.CurrencyGroup) return t[l.bb.NumberSymbols][f.Group];
        }
        return r;
      }
      const O = l.sb;
      function k(n) {
        if (!n[l.bb.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              n[l.bb.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function S(n, e) {
        for (let t = e; t > -1; t--) if (void 0 !== n[t]) return n[t];
        throw new Error('Locale data API: locale data undefined');
      }
      function M(n) {
        const [e, t] = n.split(':');
        return { hours: +e, minutes: +t };
      }
      const P = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        K = {},
        E = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        A = (function() {
          var n = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (n[n.Short] = 'Short'), (n[n.ShortGMT] = 'ShortGMT'), (n[n.Long] = 'Long'), (n[n.Extended] = 'Extended'), n
          );
        })(),
        D = (function() {
          var n = { FullYear: 0, Month: 1, Date: 2, Hours: 3, Minutes: 4, Seconds: 5, FractionalSeconds: 6, Day: 7 };
          return (
            (n[n.FullYear] = 'FullYear'),
            (n[n.Month] = 'Month'),
            (n[n.Date] = 'Date'),
            (n[n.Hours] = 'Hours'),
            (n[n.Minutes] = 'Minutes'),
            (n[n.Seconds] = 'Seconds'),
            (n[n.FractionalSeconds] = 'FractionalSeconds'),
            (n[n.Day] = 'Day'),
            n
          );
        })(),
        T = (function() {
          var n = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (n[n.DayPeriods] = 'DayPeriods'), (n[n.Days] = 'Days'), (n[n.Months] = 'Months'), (n[n.Eras] = 'Eras'), n
          );
        })();
      function I(n, e, t, r) {
        let s = (function(n) {
          if ($(n)) return n;
          if ('number' == typeof n && !isNaN(n)) return new Date(n);
          if ('string' == typeof n) {
            n = n.trim();
            const e = parseFloat(n);
            if (!isNaN(n - e)) return new Date(e);
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(n)) {
              const [e, t, l] = n.split('-').map(n => +n);
              return new Date(e, t - 1, l);
            }
            let t;
            if ((t = n.match(P)))
              return (function(n) {
                const e = new Date(0);
                let t = 0,
                  l = 0;
                const r = n[8] ? e.setUTCFullYear : e.setFullYear,
                  s = n[8] ? e.setUTCHours : e.setHours;
                n[9] && ((t = Number(n[9] + n[10])), (l = Number(n[9] + n[11]))),
                  r.call(e, Number(n[1]), Number(n[2]) - 1, Number(n[3]));
                const i = Number(n[4] || 0) - t,
                  o = Number(n[5] || 0) - l,
                  u = Number(n[6] || 0),
                  a = Math.round(1e3 * parseFloat('0.' + (n[7] || 0)));
                return s.call(e, i, o, u, a), e;
              })(t);
          }
          const e = new Date(n);
          if (!$(e)) throw new Error(`Unable to convert "${n}" into a date`);
          return e;
        })(n);
        e =
          (function n(e, t) {
            const r = (function(n) {
              return Object(l.rb)(n)[l.bb.LocaleId];
            })(e);
            if (((K[r] = K[r] || {}), K[r][t])) return K[r][t];
            let s = '';
            switch (t) {
              case 'shortDate':
                s = y(e, g.Short);
                break;
              case 'mediumDate':
                s = y(e, g.Medium);
                break;
              case 'longDate':
                s = y(e, g.Long);
                break;
              case 'fullDate':
                s = y(e, g.Full);
                break;
              case 'shortTime':
                s = w(e, g.Short);
                break;
              case 'mediumTime':
                s = w(e, g.Medium);
                break;
              case 'longTime':
                s = w(e, g.Long);
                break;
              case 'fullTime':
                s = w(e, g.Full);
                break;
              case 'short':
                const t = n(e, 'shortTime'),
                  l = n(e, 'shortDate');
                s = q(C(e, g.Short), [t, l]);
                break;
              case 'medium':
                const r = n(e, 'mediumTime'),
                  i = n(e, 'mediumDate');
                s = q(C(e, g.Medium), [r, i]);
                break;
              case 'long':
                const o = n(e, 'longTime'),
                  u = n(e, 'longDate');
                s = q(C(e, g.Long), [o, u]);
                break;
              case 'full':
                const a = n(e, 'fullTime'),
                  c = n(e, 'fullDate');
                s = q(C(e, g.Full), [a, c]);
            }
            return s && (K[r][t] = s), s;
          })(t, e) || e;
        let i,
          o = [];
        for (; e; ) {
          if (!(i = E.exec(e))) {
            o.push(e);
            break;
          }
          {
            const n = (o = o.concat(i.slice(1))).pop();
            if (!n) break;
            e = n;
          }
        }
        let u = s.getTimezoneOffset();
        r &&
          ((u = z(r, u)),
          (s = (function(n, e, t) {
            const l = n.getTimezoneOffset();
            return (function(n, e) {
              return (n = new Date(n.getTime())).setMinutes(n.getMinutes() + e), n;
            })(n, -1 * (z(e, l) - l));
          })(s, r)));
        let a = '';
        return (
          o.forEach(n => {
            const e = (function(n) {
              if (H[n]) return H[n];
              let e;
              switch (n) {
                case 'G':
                case 'GG':
                case 'GGG':
                  e = j(T.Eras, b.Abbreviated);
                  break;
                case 'GGGG':
                  e = j(T.Eras, b.Wide);
                  break;
                case 'GGGGG':
                  e = j(T.Eras, b.Narrow);
                  break;
                case 'y':
                  e = R(D.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  e = R(D.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  e = R(D.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  e = R(D.FullYear, 4, 0, !1, !0);
                  break;
                case 'M':
                case 'L':
                  e = R(D.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  e = R(D.Month, 2, 1);
                  break;
                case 'MMM':
                  e = j(T.Months, b.Abbreviated);
                  break;
                case 'MMMM':
                  e = j(T.Months, b.Wide);
                  break;
                case 'MMMMM':
                  e = j(T.Months, b.Narrow);
                  break;
                case 'LLL':
                  e = j(T.Months, b.Abbreviated, p.Standalone);
                  break;
                case 'LLLL':
                  e = j(T.Months, b.Wide, p.Standalone);
                  break;
                case 'LLLLL':
                  e = j(T.Months, b.Narrow, p.Standalone);
                  break;
                case 'w':
                  e = F(1);
                  break;
                case 'ww':
                  e = F(2);
                  break;
                case 'W':
                  e = F(1, !0);
                  break;
                case 'd':
                  e = R(D.Date, 1);
                  break;
                case 'dd':
                  e = R(D.Date, 2);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  e = j(T.Days, b.Abbreviated);
                  break;
                case 'EEEE':
                  e = j(T.Days, b.Wide);
                  break;
                case 'EEEEE':
                  e = j(T.Days, b.Narrow);
                  break;
                case 'EEEEEE':
                  e = j(T.Days, b.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  e = j(T.DayPeriods, b.Abbreviated);
                  break;
                case 'aaaa':
                  e = j(T.DayPeriods, b.Wide);
                  break;
                case 'aaaaa':
                  e = j(T.DayPeriods, b.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  e = j(T.DayPeriods, b.Abbreviated, p.Standalone, !0);
                  break;
                case 'bbbb':
                  e = j(T.DayPeriods, b.Wide, p.Standalone, !0);
                  break;
                case 'bbbbb':
                  e = j(T.DayPeriods, b.Narrow, p.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  e = j(T.DayPeriods, b.Abbreviated, p.Format, !0);
                  break;
                case 'BBBB':
                  e = j(T.DayPeriods, b.Wide, p.Format, !0);
                  break;
                case 'BBBBB':
                  e = j(T.DayPeriods, b.Narrow, p.Format, !0);
                  break;
                case 'h':
                  e = R(D.Hours, 1, -12);
                  break;
                case 'hh':
                  e = R(D.Hours, 2, -12);
                  break;
                case 'H':
                  e = R(D.Hours, 1);
                  break;
                case 'HH':
                  e = R(D.Hours, 2);
                  break;
                case 'm':
                  e = R(D.Minutes, 1);
                  break;
                case 'mm':
                  e = R(D.Minutes, 2);
                  break;
                case 's':
                  e = R(D.Seconds, 1);
                  break;
                case 'ss':
                  e = R(D.Seconds, 2);
                  break;
                case 'S':
                  e = R(D.FractionalSeconds, 1);
                  break;
                case 'SS':
                  e = R(D.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  e = R(D.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  e = V(A.Short);
                  break;
                case 'ZZZZZ':
                  e = V(A.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  e = V(A.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  e = V(A.Long);
                  break;
                default:
                  return null;
              }
              return (H[n] = e), e;
            })(n);
            a += e ? e(s, t, u) : "''" === n ? "'" : n.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          a
        );
      }
      function q(n, e) {
        return (
          e &&
            (n = n.replace(/\{([^}]+)}/g, function(n, t) {
              return null != e && t in e ? e[t] : n;
            })),
          n
        );
      }
      function N(n, e, t = '-', l, r) {
        let s = '';
        (n < 0 || (r && n <= 0)) && (r ? (n = 1 - n) : ((n = -n), (s = t)));
        let i = String(n);
        for (; i.length < e; ) i = '0' + i;
        return l && (i = i.substr(i.length - e)), s + i;
      }
      function R(n, e, t = 0, l = !1, r = !1) {
        return function(s, i) {
          let o = (function(n, e) {
            switch (n) {
              case D.FullYear:
                return e.getFullYear();
              case D.Month:
                return e.getMonth();
              case D.Date:
                return e.getDate();
              case D.Hours:
                return e.getHours();
              case D.Minutes:
                return e.getMinutes();
              case D.Seconds:
                return e.getSeconds();
              case D.FractionalSeconds:
                return e.getMilliseconds();
              case D.Day:
                return e.getDay();
              default:
                throw new Error(`Unknown DateType value "${n}".`);
            }
          })(n, s);
          if (((t > 0 || o > -t) && (o += t), n === D.Hours)) 0 === o && -12 === t && (o = 12);
          else if (n === D.FractionalSeconds) return (u = e), N(o, 3).substr(0, u);
          var u;
          const a = x(i, f.MinusSign);
          return N(o, e, a, l, r);
        };
      }
      function j(n, e, t = p.Format, r = !1) {
        return function(s, i) {
          return (function(n, e, t, r, s, i) {
            switch (t) {
              case T.Months:
                return _(e, s, r)[n.getMonth()];
              case T.Days:
                return v(e, s, r)[n.getDay()];
              case T.DayPeriods:
                const o = n.getHours(),
                  u = n.getMinutes();
                if (i) {
                  const n = (function(n) {
                      const e = Object(l.rb)(n);
                      return (
                        k(e), (e[l.bb.ExtraData][2] || []).map(n => ('string' == typeof n ? M(n) : [M(n[0]), M(n[1])]))
                      );
                    })(e),
                    t = (function(n, e, t) {
                      const r = Object(l.rb)(n);
                      k(r);
                      const s = S([r[l.bb.ExtraData][0], r[l.bb.ExtraData][1]], e) || [];
                      return S(s, t) || [];
                    })(e, s, r);
                  let i;
                  if (
                    (n.forEach((n, e) => {
                      if (Array.isArray(n)) {
                        const { hours: l, minutes: r } = n[0],
                          { hours: s, minutes: a } = n[1];
                        o >= l && u >= r && (o < s || (o === s && u < a)) && (i = t[e]);
                      } else {
                        const { hours: l, minutes: r } = n;
                        l === o && r === u && (i = t[e]);
                      }
                    }),
                    i)
                  )
                    return i;
                }
                return m(e, s, r)[o < 12 ? 0 : 1];
              case T.Eras:
                return (function(n, e) {
                  return S(Object(l.rb)(n)[l.bb.Eras], e);
                })(e, r)[n.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${t}`);
            }
          })(s, i, n, e, t, r);
        };
      }
      function V(n) {
        return function(e, t, l) {
          const r = -1 * l,
            s = x(t, f.MinusSign),
            i = r > 0 ? Math.floor(r / 60) : Math.ceil(r / 60);
          switch (n) {
            case A.Short:
              return (r >= 0 ? '+' : '') + N(i, 2, s) + N(Math.abs(r % 60), 2, s);
            case A.ShortGMT:
              return 'GMT' + (r >= 0 ? '+' : '') + N(i, 1, s);
            case A.Long:
              return 'GMT' + (r >= 0 ? '+' : '') + N(i, 2, s) + ':' + N(Math.abs(r % 60), 2, s);
            case A.Extended:
              return 0 === l ? 'Z' : (r >= 0 ? '+' : '') + N(i, 2, s) + ':' + N(Math.abs(r % 60), 2, s);
            default:
              throw new Error(`Unknown zone width "${n}"`);
          }
        };
      }
      const L = 0,
        U = 4;
      function F(n, e = !1) {
        return function(t, l) {
          let r;
          if (e) {
            const n = new Date(t.getFullYear(), t.getMonth(), 1).getDay() - 1,
              e = t.getDate();
            r = 1 + Math.floor((e + n) / 7);
          } else {
            const n = (function(n) {
                const e = new Date(n, L, 1).getDay();
                return new Date(n, 0, 1 + (e <= U ? U : U + 7) - e);
              })(t.getFullYear()),
              e =
                ((s = t), new Date(s.getFullYear(), s.getMonth(), s.getDate() + (U - s.getDay()))).getTime() -
                n.getTime();
            r = 1 + Math.round(e / 6048e5);
          }
          var s;
          return N(r, n, x(l, f.MinusSign));
        };
      }
      const H = {};
      function z(n, e) {
        n = n.replace(/:/g, '');
        const t = Date.parse('Jan 01, 1970 00:00:00 ' + n) / 6e4;
        return isNaN(t) ? e : t;
      }
      function $(n) {
        return n instanceof Date && !isNaN(n.valueOf());
      }
      const B = new l.p('UseV4Plurals');
      class W {}
      let G = (() =>
        class extends W {
          constructor(n, e) {
            super(), (this.locale = n), (this.deprecatedPluralFn = e);
          }
          getPluralCategory(n, e) {
            switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, n) : O(e || this.locale)(n)) {
              case h.Zero:
                return 'zero';
              case h.One:
                return 'one';
              case h.Two:
                return 'two';
              case h.Few:
                return 'few';
              case h.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        })();
      function Z(n, e) {
        e = encodeURIComponent(e);
        for (const t of n.split(';')) {
          const n = t.indexOf('='),
            [l, r] = -1 == n ? [t, ''] : [t.slice(0, n), t.slice(n + 1)];
          if (l.trim() === e) return decodeURIComponent(r);
        }
        return null;
      }
      class Q {}
      let J = (() =>
          class {
            constructor(n, e, t, l) {
              (this._iterableDiffers = n),
                (this._keyValueDiffers = e),
                (this._ngEl = t),
                (this._renderer = l),
                (this._initialClasses = []);
            }
            getValue() {
              return null;
            }
            setClass(n) {
              this._removeClasses(this._initialClasses),
                (this._initialClasses = 'string' == typeof n ? n.split(/\s+/) : []),
                this._applyClasses(this._initialClasses),
                this._applyClasses(this._rawClass);
            }
            setNgClass(n) {
              this._removeClasses(this._rawClass),
                this._applyClasses(this._initialClasses),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._rawClass = 'string' == typeof n ? n.split(/\s+/) : n),
                this._rawClass &&
                  (Object(l.vb)(this._rawClass)
                    ? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
                    : (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
            }
            applyChanges() {
              if (this._iterableDiffer) {
                const n = this._iterableDiffer.diff(this._rawClass);
                n && this._applyIterableChanges(n);
              } else if (this._keyValueDiffer) {
                const n = this._keyValueDiffer.diff(this._rawClass);
                n && this._applyKeyValueChanges(n);
              }
            }
            _applyKeyValueChanges(n) {
              n.forEachAddedItem(n => this._toggleClass(n.key, n.currentValue)),
                n.forEachChangedItem(n => this._toggleClass(n.key, n.currentValue)),
                n.forEachRemovedItem(n => {
                  n.previousValue && this._toggleClass(n.key, !1);
                });
            }
            _applyIterableChanges(n) {
              n.forEachAddedItem(n => {
                if ('string' != typeof n.item)
                  throw new Error(
                    `NgClass can only toggle CSS classes expressed as strings, got ${Object(l.Jb)(n.item)}`
                  );
                this._toggleClass(n.item, !0);
              }),
                n.forEachRemovedItem(n => this._toggleClass(n.item, !1));
            }
            _applyClasses(n) {
              n &&
                (Array.isArray(n) || n instanceof Set
                  ? n.forEach(n => this._toggleClass(n, !0))
                  : Object.keys(n).forEach(e => this._toggleClass(e, !!n[e])));
            }
            _removeClasses(n) {
              n &&
                (Array.isArray(n) || n instanceof Set
                  ? n.forEach(n => this._toggleClass(n, !1))
                  : Object.keys(n).forEach(n => this._toggleClass(n, !1)));
            }
            _toggleClass(n, e) {
              (n = n.trim()) &&
                n.split(/\s+/g).forEach(n => {
                  e
                    ? this._renderer.addClass(this._ngEl.nativeElement, n)
                    : this._renderer.removeClass(this._ngEl.nativeElement, n);
                });
            }
          })(),
        Y = (() => {
          class n {
            constructor(n) {
              this._delegate = n;
            }
            getValue() {
              return this._delegate.getValue();
            }
          }
          return (n.ngDirectiveDef = void 0), n;
        })(),
        X = (() =>
          class extends Y {
            constructor(n) {
              super(n);
            }
            set klass(n) {
              this._delegate.setClass(n);
            }
            set ngClass(n) {
              this._delegate.setNgClass(n);
            }
            ngDoCheck() {
              this._delegate.applyChanges();
            }
          })();
      class nn {
        constructor(n, e, t, l) {
          (this.$implicit = n), (this.ngForOf = e), (this.index = t), (this.count = l);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let en = (() =>
        class {
          constructor(n, e, t) {
            (this._viewContainer = n),
              (this._template = e),
              (this._differs = t),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(n) {
            (this._ngForOf = n), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(n) {
            Object(l.U)() &&
              null != n &&
              'function' != typeof n &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(n)}. ` +
                  'See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
              ),
              (this._trackByFn = n);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(n) {
            n && (this._template = n);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              if (!this._differ && t)
                try {
                  this._differ = this._differs.find(t).create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${t}' of type '${((n = t),
                    n.name || typeof n)}'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var n;
            if (this._differ) {
              const n = this._differ.diff(this._ngForOf);
              n && this._applyChanges(n);
            }
          }
          _applyChanges(n) {
            const e = [];
            n.forEachOperation((n, t, l) => {
              if (null == n.previousIndex) {
                const t = this._viewContainer.createEmbeddedView(
                    this._template,
                    new nn(null, this._ngForOf, -1, -1),
                    null === l ? void 0 : l
                  ),
                  r = new tn(n, t);
                e.push(r);
              } else if (null == l) this._viewContainer.remove(null === t ? void 0 : t);
              else if (null !== t) {
                const r = this._viewContainer.get(t);
                this._viewContainer.move(r, l);
                const s = new tn(n, r);
                e.push(s);
              }
            });
            for (let t = 0; t < e.length; t++) this._perViewChange(e[t].view, e[t].record);
            for (let t = 0, l = this._viewContainer.length; t < l; t++) {
              const n = this._viewContainer.get(t);
              (n.context.index = t), (n.context.count = l), (n.context.ngForOf = this._ngForOf);
            }
            n.forEachIdentityChange(n => {
              this._viewContainer.get(n.currentIndex).context.$implicit = n.item;
            });
          }
          _perViewChange(n, e) {
            n.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(n, e) {
            return !0;
          }
        })();
      class tn {
        constructor(n, e) {
          (this.record = n), (this.view = e);
        }
      }
      let ln = (() =>
        class {
          constructor(n, e) {
            (this._viewContainer = n),
              (this._context = new rn()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(n) {
            (this._context.$implicit = this._context.ngIf = n), this._updateView();
          }
          set ngIfThen(n) {
            sn('ngIfThen', n), (this._thenTemplateRef = n), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(n) {
            sn('ngIfElse', n), (this._elseTemplateRef = n), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
        })();
      class rn {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function sn(n, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(`${n} must be a TemplateRef, but received '${Object(l.Jb)(e)}'.`);
      }
      let on = (() =>
          class {
            constructor(n) {
              (this._viewContainerRef = n),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null);
            }
            ngOnChanges(n) {
              this._shouldRecreateView(n)
                ? (this._viewRef && this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef)),
                  this.ngTemplateOutlet &&
                    (this._viewRef = this._viewContainerRef.createEmbeddedView(
                      this.ngTemplateOutlet,
                      this.ngTemplateOutletContext
                    )))
                : this._viewRef &&
                  this.ngTemplateOutletContext &&
                  this._updateExistingContext(this.ngTemplateOutletContext);
            }
            _shouldRecreateView(n) {
              const e = n.ngTemplateOutletContext;
              return !!n.ngTemplateOutlet || (e && this._hasContextShapeChanged(e));
            }
            _hasContextShapeChanged(n) {
              const e = Object.keys(n.previousValue || {}),
                t = Object.keys(n.currentValue || {});
              if (e.length === t.length) {
                for (let n of t) if (-1 === e.indexOf(n)) return !0;
                return !1;
              }
              return !0;
            }
            _updateExistingContext(n) {
              for (let e of Object.keys(n)) this._viewRef.context[e] = this.ngTemplateOutletContext[e];
            }
          })(),
        un = (() => class {})();
      const an = new l.p('DocumentToken'),
        cn = 'browser',
        dn = 'server';
      function hn(n) {
        return n === cn;
      }
      function pn(n) {
        return n === dn;
      }
      let bn = (() => {
        class n {}
        return (
          (n.ngInjectableDef = Object(l.Qb)({
            token: n,
            providedIn: 'root',
            factory: () => new gn(Object(l.Rb)(an), window, Object(l.Rb)(l.l))
          })),
          n
        );
      })();
      class gn {
        constructor(n, e, t) {
          (this.document = n), (this.window = e), (this.errorHandler = t), (this.offset = () => [0, 0]);
        }
        setOffset(n) {
          this.offset = Array.isArray(n) ? () => n : n;
        }
        getScrollPosition() {
          return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
        }
        scrollToPosition(n) {
          this.supportScrollRestoration() && this.window.scrollTo(n[0], n[1]);
        }
        scrollToAnchor(n) {
          if (this.supportScrollRestoration()) {
            n =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(n)
                : n.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const e = this.document.querySelector(`#${n}`);
              if (e) return void this.scrollToElement(e);
              const t = this.document.querySelector(`[name='${n}']`);
              if (t) return void this.scrollToElement(t);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(n) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = n);
          }
        }
        scrollToElement(n) {
          const e = n.getBoundingClientRect(),
            t = e.left + this.window.pageXOffset,
            l = e.top + this.window.pageYOffset,
            r = this.offset();
          this.window.scrollTo(t - r[0], l - r[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (n) {
            return !1;
          }
        }
      }
    },
    SeVD: function(n, e, t) {
      'use strict';
      var l = t('ngJS'),
        r = t('NJ4a'),
        s = t('Lhse'),
        i = t('kJWO'),
        o = t('I55L'),
        u = t('c2HN'),
        a = t('XoHu');
      t.d(e, 'a', function() {
        return c;
      });
      const c = n => {
        if (n && 'function' == typeof n[i.a])
          return (n => e => {
            const t = n[i.a]();
            if ('function' != typeof t.subscribe)
              throw new TypeError('Provided object does not correctly implement Symbol.observable');
            return t.subscribe(e);
          })(n);
        if (Object(o.a)(n)) return Object(l.a)(n);
        if (Object(u.a)(n))
          return (n => e => (
            n
              .then(
                n => {
                  e.closed || (e.next(n), e.complete());
                },
                n => e.error(n)
              )
              .then(null, r.a),
            e
          ))(n);
        if (n && 'function' == typeof n[s.a])
          return (n => e => {
            const t = n[s.a]();
            for (;;) {
              const n = t.next();
              if (n.done) {
                e.complete();
                break;
              }
              if ((e.next(n.value), e.closed)) break;
            }
            return (
              'function' == typeof t.return &&
                e.add(() => {
                  t.return && t.return();
                }),
              e
            );
          })(n);
        {
          const e = Object(a.a)(n) ? 'an invalid object' : `'${n}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
    },
    SpAZ: function(n, e, t) {
      'use strict';
      function l(n) {
        return n;
      }
      t.d(e, 'a', function() {
        return l;
      });
    },
    Ss9G: function(n, e, t) {
      'use strict';
      var l = t('8Y7J');
      class r {}
      var s = t('SVse'),
        i = t('z+Ro'),
        o = t('yCtX'),
        u = t('jZKg');
      function a(...n) {
        let e = n[n.length - 1];
        return Object(i.a)(e) ? (n.pop(), Object(u.a)(n, e)) : Object(o.a)(n);
      }
      var c = t('Cfvw'),
        d = t('XNiG'),
        h = t('9ppp');
      class p extends d.a {
        constructor(n) {
          super(), (this._value = n);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(n) {
          const e = super._subscribe(n);
          return e && !e.closed && n.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new h.a();
          return this._value;
        }
        next(n) {
          super.next((this._value = n));
        }
      }
      var b = t('HDdC');
      const g = (() => {
        function n() {
          return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
        }
        return (n.prototype = Object.create(Error.prototype)), n;
      })();
      var f = t('DH7j'),
        m = t('l7GE'),
        v = t('ZUHj');
      const _ = {};
      class y {
        constructor(n) {
          this.resultSelector = n;
        }
        call(n, e) {
          return e.subscribe(new w(n, this.resultSelector));
        }
      }
      class w extends m.a {
        constructor(n, e) {
          super(n), (this.resultSelector = e), (this.active = 0), (this.values = []), (this.observables = []);
        }
        _next(n) {
          this.values.push(_), this.observables.push(n);
        }
        _complete() {
          const n = this.observables,
            e = n.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let t = 0; t < e; t++) {
              const e = n[t];
              this.add(Object(v.a)(this, e, e, t));
            }
          }
        }
        notifyComplete(n) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(n, e, t, l, r) {
          const s = this.values,
            i = this.toRespond ? (s[t] === _ ? --this.toRespond : this.toRespond) : 0;
          (s[t] = e), 0 === i && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
        }
        _tryResultSelector(n) {
          let e;
          try {
            e = this.resultSelector.apply(this, n);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
      }
      const C = new b.a(n => n.complete());
      function x(n) {
        return n
          ? (function(n) {
              return new b.a(e => n.schedule(() => e.complete()));
            })(n)
          : C;
      }
      function O(n) {
        return new b.a(e => {
          let t;
          try {
            t = n();
          } catch (l) {
            return void e.error(l);
          }
          return (t ? Object(c.a)(t) : x()).subscribe(e);
        });
      }
      var k = t('lJxs'),
        S = t('bHdf');
      function M() {
        return Object(S.a)(1);
      }
      var P = t('7o/Q');
      function K(n, e) {
        return function(t) {
          return t.lift(new E(n, e));
        };
      }
      class E {
        constructor(n, e) {
          (this.predicate = n), (this.thisArg = e);
        }
        call(n, e) {
          return e.subscribe(new A(n, this.predicate, this.thisArg));
        }
      }
      class A extends P.a {
        constructor(n, e, t) {
          super(n), (this.predicate = e), (this.thisArg = t), (this.count = 0);
        }
        _next(n) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, n, this.count++);
          } catch (t) {
            return void this.destination.error(t);
          }
          e && this.destination.next(n);
        }
      }
      const D = (() => {
        function n() {
          return (
            Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this
          );
        }
        return (n.prototype = Object.create(Error.prototype)), n;
      })();
      function T(n) {
        return function(e) {
          return 0 === n ? x() : e.lift(new I(n));
        };
      }
      class I {
        constructor(n) {
          if (((this.total = n), this.total < 0)) throw new D();
        }
        call(n, e) {
          return e.subscribe(new q(n, this.total));
        }
      }
      class q extends P.a {
        constructor(n, e) {
          super(n), (this.total = e), (this.ring = new Array()), (this.count = 0);
        }
        _next(n) {
          const e = this.ring,
            t = this.total,
            l = this.count++;
          e.length < t ? e.push(n) : (e[l % t] = n);
        }
        _complete() {
          const n = this.destination;
          let e = this.count;
          if (e > 0) {
            const t = this.count >= this.total ? this.total : this.count,
              l = this.ring;
            for (let r = 0; r < t; r++) {
              const r = e++ % t;
              n.next(l[r]);
            }
          }
          n.complete();
        }
      }
      function N(n = V) {
        return e => e.lift(new R(n));
      }
      class R {
        constructor(n) {
          this.errorFactory = n;
        }
        call(n, e) {
          return e.subscribe(new j(n, this.errorFactory));
        }
      }
      class j extends P.a {
        constructor(n, e) {
          super(n), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(n) {
          (this.hasValue = !0), this.destination.next(n);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (n) {
              e = n;
            }
            this.destination.error(e);
          }
        }
      }
      function V() {
        return new g();
      }
      function L(n = null) {
        return e => e.lift(new U(n));
      }
      class U {
        constructor(n) {
          this.defaultValue = n;
        }
        call(n, e) {
          return e.subscribe(new F(n, this.defaultValue));
        }
      }
      class F extends P.a {
        constructor(n, e) {
          super(n), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(n) {
          (this.isEmpty = !1), this.destination.next(n);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      var H = t('SpAZ');
      function z(n, e) {
        const t = arguments.length >= 2;
        return l => l.pipe(n ? K((e, t) => n(e, t, l)) : H.a, T(1), t ? L(e) : N(() => new g()));
      }
      var $ = t('51Dv');
      function B(n) {
        return function(e) {
          const t = new W(n),
            l = e.lift(t);
          return (t.caught = l);
        };
      }
      class W {
        constructor(n) {
          this.selector = n;
        }
        call(n, e) {
          return e.subscribe(new G(n, this.selector, this.caught));
        }
      }
      class G extends m.a {
        constructor(n, e, t) {
          super(n), (this.selector = e), (this.caught = t);
        }
        error(n) {
          if (!this.isStopped) {
            let t;
            try {
              t = this.selector(n, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const l = new $.a(this, void 0, void 0);
            this.add(l), Object(v.a)(this, t, void 0, void 0, l);
          }
        }
      }
      function Z(n) {
        return e => (0 === n ? x() : e.lift(new Q(n)));
      }
      class Q {
        constructor(n) {
          if (((this.total = n), this.total < 0)) throw new D();
        }
        call(n, e) {
          return e.subscribe(new J(n, this.total));
        }
      }
      class J extends P.a {
        constructor(n, e) {
          super(n), (this.total = e), (this.count = 0);
        }
        _next(n) {
          const e = this.total,
            t = ++this.count;
          t <= e && (this.destination.next(n), t === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Y(n, e) {
        const t = arguments.length >= 2;
        return l => l.pipe(n ? K((e, t) => n(e, t, l)) : H.a, Z(1), t ? L(e) : N(() => new g()));
      }
      var X = t('5+tZ');
      class nn {
        constructor(n, e, t) {
          (this.predicate = n), (this.thisArg = e), (this.source = t);
        }
        call(n, e) {
          return e.subscribe(new en(n, this.predicate, this.thisArg, this.source));
        }
      }
      class en extends P.a {
        constructor(n, e, t, l) {
          super(n),
            (this.predicate = e),
            (this.thisArg = t),
            (this.source = l),
            (this.index = 0),
            (this.thisArg = t || this);
        }
        notifyComplete(n) {
          this.destination.next(n), this.destination.complete();
        }
        _next(n) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, n, this.index++, this.source);
          } catch (t) {
            return void this.destination.error(t);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function tn(n, e) {
        return 'function' == typeof e
          ? t => t.pipe(tn((t, l) => Object(c.a)(n(t, l)).pipe(Object(k.a)((n, r) => e(t, n, l, r)))))
          : e => e.lift(new ln(n));
      }
      class ln {
        constructor(n) {
          this.project = n;
        }
        call(n, e) {
          return e.subscribe(new rn(n, this.project));
        }
      }
      class rn extends m.a {
        constructor(n, e) {
          super(n), (this.project = e), (this.index = 0);
        }
        _next(n) {
          let e;
          const t = this.index++;
          try {
            e = this.project(n, t);
          } catch (l) {
            return void this.destination.error(l);
          }
          this._innerSub(e, n, t);
        }
        _innerSub(n, e, t) {
          const l = this.innerSubscription;
          l && l.unsubscribe();
          const r = new $.a(this, void 0, void 0);
          this.destination.add(r), (this.innerSubscription = Object(v.a)(this, n, e, t, r));
        }
        _complete() {
          const { innerSubscription: n } = this;
          (n && !n.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(n) {
          this.destination.remove(n), (this.innerSubscription = null), this.isStopped && super._complete();
        }
        notifyNext(n, e, t, l, r) {
          this.destination.next(e);
        }
      }
      function sn(...n) {
        return M()(a(...n));
      }
      function on(n, e) {
        let t = !1;
        return (
          arguments.length >= 2 && (t = !0),
          function(l) {
            return l.lift(new un(n, e, t));
          }
        );
      }
      class un {
        constructor(n, e, t = !1) {
          (this.accumulator = n), (this.seed = e), (this.hasSeed = t);
        }
        call(n, e) {
          return e.subscribe(new an(n, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class an extends P.a {
        constructor(n, e, t, l) {
          super(n), (this.accumulator = e), (this._seed = t), (this.hasSeed = l), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(n) {
          (this.hasSeed = !0), (this._seed = n);
        }
        _next(n) {
          if (this.hasSeed) return this._tryNext(n);
          (this.seed = n), this.destination.next(n);
        }
        _tryNext(n) {
          const e = this.index++;
          let t;
          try {
            t = this.accumulator(this.seed, n, e);
          } catch (l) {
            this.destination.error(l);
          }
          (this.seed = t), this.destination.next(t);
        }
      }
      function cn(n, e) {
        return Object(X.a)(n, e, 1);
      }
      var dn = t('mCNh');
      function hn(n, e) {
        return arguments.length >= 2
          ? function(t) {
              return Object(dn.a)(on(n, e), T(1), L(e))(t);
            }
          : function(e) {
              return Object(dn.a)(
                on((e, t, l) => n(e, t, l + 1)),
                T(1)
              )(e);
            };
      }
      var pn = t('KqfI'),
        bn = t('n6bG');
      function gn(n, e, t) {
        return function(l) {
          return l.lift(new fn(n, e, t));
        };
      }
      class fn {
        constructor(n, e, t) {
          (this.nextOrObserver = n), (this.error = e), (this.complete = t);
        }
        call(n, e) {
          return e.subscribe(new mn(n, this.nextOrObserver, this.error, this.complete));
        }
      }
      class mn extends P.a {
        constructor(n, e, t, l) {
          super(n),
            (this._tapNext = pn.a),
            (this._tapError = pn.a),
            (this._tapComplete = pn.a),
            (this._tapError = t || pn.a),
            (this._tapComplete = l || pn.a),
            Object(bn.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || pn.a),
                (this._tapError = e.error || pn.a),
                (this._tapComplete = e.complete || pn.a));
        }
        _next(n) {
          try {
            this._tapNext.call(this._context, n);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(n);
        }
        _error(n) {
          try {
            this._tapError.call(this._context, n);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.error(n);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (n) {
            return void this.destination.error(n);
          }
          return this.destination.complete();
        }
      }
      var vn = t('quSY');
      class _n {
        constructor(n) {
          this.callback = n;
        }
        call(n, e) {
          return e.subscribe(new yn(n, this.callback));
        }
      }
      class yn extends P.a {
        constructor(n, e) {
          super(n), this.add(new vn.a(e));
        }
      }
      var wn = t('cUpR');
      class Cn {
        constructor(n, e) {
          (this.id = n), (this.url = e);
        }
      }
      class xn extends Cn {
        constructor(n, e, t = 'imperative', l = null) {
          super(n, e), (this.navigationTrigger = t), (this.restoredState = l);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class On extends Cn {
        constructor(n, e, t) {
          super(n, e), (this.urlAfterRedirects = t);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class kn extends Cn {
        constructor(n, e, t) {
          super(n, e), (this.reason = t);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Sn extends Cn {
        constructor(n, e, t) {
          super(n, e), (this.error = t);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Mn extends Cn {
        constructor(n, e, t, l) {
          super(n, e), (this.urlAfterRedirects = t), (this.state = l);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Pn extends Cn {
        constructor(n, e, t, l) {
          super(n, e), (this.urlAfterRedirects = t), (this.state = l);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Kn extends Cn {
        constructor(n, e, t, l, r) {
          super(n, e), (this.urlAfterRedirects = t), (this.state = l), (this.shouldActivate = r);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class En extends Cn {
        constructor(n, e, t, l) {
          super(n, e), (this.urlAfterRedirects = t), (this.state = l);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class An extends Cn {
        constructor(n, e, t, l) {
          super(n, e), (this.urlAfterRedirects = t), (this.state = l);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Dn {
        constructor(n) {
          this.route = n;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Tn {
        constructor(n) {
          this.route = n;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class In {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class qn {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Nn {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Rn {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class jn {
        constructor(n, e, t) {
          (this.routerEvent = n), (this.position = e), (this.anchor = t);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let Vn = (() => class {})();
      const Ln = 'primary';
      class Un {
        constructor(n) {
          this.params = n || {};
        }
        has(n) {
          return this.params.hasOwnProperty(n);
        }
        get(n) {
          if (this.has(n)) {
            const e = this.params[n];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(n) {
          if (this.has(n)) {
            const e = this.params[n];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Fn(n) {
        return new Un(n);
      }
      const Hn = 'ngNavigationCancelingError';
      function zn(n) {
        const e = Error('NavigationCancelingError: ' + n);
        return (e[Hn] = !0), e;
      }
      function $n(n, e, t) {
        const l = t.path.split('/');
        if (l.length > n.length) return null;
        if ('full' === t.pathMatch && (e.hasChildren() || l.length < n.length)) return null;
        const r = {};
        for (let s = 0; s < l.length; s++) {
          const e = l[s],
            t = n[s];
          if (e.startsWith(':')) r[e.substring(1)] = t;
          else if (e !== t.path) return null;
        }
        return { consumed: n.slice(0, l.length), posParams: r };
      }
      class Bn {
        constructor(n, e) {
          (this.routes = n), (this.module = e);
        }
      }
      function Wn(n, e = '') {
        for (let t = 0; t < n.length; t++) {
          const l = n[t];
          Gn(l, Zn(e, l));
        }
      }
      function Gn(n, e) {
        if (!n)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(n)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
        if (!n.component && !n.children && !n.loadChildren && n.outlet && n.outlet !== Ln)
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (n.redirectTo && n.children)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
        if (n.redirectTo && n.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
        if (n.children && n.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
        if (n.redirectTo && n.component)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
        if (n.path && n.matcher)
          throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
        if (void 0 === n.redirectTo && !n.component && !n.children && !n.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === n.path && void 0 === n.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof n.path && '/' === n.path.charAt(0))
          throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
        if ('' === n.path && void 0 !== n.redirectTo && void 0 === n.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${n.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== n.pathMatch && 'full' !== n.pathMatch && 'prefix' !== n.pathMatch)
          throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
        n.children && Wn(n.children, e);
      }
      function Zn(n, e) {
        return e ? (n || e.path ? (n && !e.path ? `${n}/` : !n && e.path ? e.path : `${n}/${e.path}`) : '') : n;
      }
      function Qn(n) {
        const e = n.children && n.children.map(Qn),
          t = e ? Object.assign({}, n, { children: e }) : Object.assign({}, n);
        return !t.component && (e || t.loadChildren) && t.outlet && t.outlet !== Ln && (t.component = Vn), t;
      }
      function Jn(n, e) {
        const t = Object.keys(n),
          l = Object.keys(e);
        if (!t || !l || t.length != l.length) return !1;
        let r;
        for (let s = 0; s < t.length; s++) if (n[(r = t[s])] !== e[r]) return !1;
        return !0;
      }
      function Yn(n) {
        return Array.prototype.concat.apply([], n);
      }
      function Xn(n) {
        return n.length > 0 ? n[n.length - 1] : null;
      }
      function ne(n, e) {
        for (const t in n) n.hasOwnProperty(t) && e(n[t], t);
      }
      function ee(n) {
        return Object(l.wb)(n) ? n : Object(l.xb)(n) ? Object(c.a)(Promise.resolve(n)) : a(n);
      }
      function te(n, e, t) {
        return t
          ? (function(n, e) {
              return Jn(n, e);
            })(n.queryParams, e.queryParams) &&
              (function n(e, t) {
                if (!ie(e.segments, t.segments)) return !1;
                if (e.numberOfChildren !== t.numberOfChildren) return !1;
                for (const l in t.children) {
                  if (!e.children[l]) return !1;
                  if (!n(e.children[l], t.children[l])) return !1;
                }
                return !0;
              })(n.root, e.root)
          : (function(n, e) {
              return Object.keys(e).length <= Object.keys(n).length && Object.keys(e).every(t => e[t] === n[t]);
            })(n.queryParams, e.queryParams) &&
              (function n(e, t) {
                return (function e(t, l, r) {
                  if (t.segments.length > r.length) return !!ie(t.segments.slice(0, r.length), r) && !l.hasChildren();
                  if (t.segments.length === r.length) {
                    if (!ie(t.segments, r)) return !1;
                    for (const e in l.children) {
                      if (!t.children[e]) return !1;
                      if (!n(t.children[e], l.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const n = r.slice(0, t.segments.length),
                      s = r.slice(t.segments.length);
                    return !!ie(t.segments, n) && !!t.children[Ln] && e(t.children[Ln], l, s);
                  }
                })(e, t, t.segments);
              })(n.root, e.root);
      }
      class le {
        constructor(n, e, t) {
          (this.root = n), (this.queryParams = e), (this.fragment = t);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Fn(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return ce.serialize(this);
        }
      }
      class re {
        constructor(n, e) {
          (this.segments = n), (this.children = e), (this.parent = null), ne(e, (n, e) => (n.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return de(this);
        }
      }
      class se {
        constructor(n, e) {
          (this.path = n), (this.parameters = e);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = Fn(this.parameters)), this._parameterMap;
        }
        toString() {
          return me(this);
        }
      }
      function ie(n, e) {
        return n.length === e.length && n.every((n, t) => n.path === e[t].path);
      }
      function oe(n, e) {
        let t = [];
        return (
          ne(n.children, (n, l) => {
            l === Ln && (t = t.concat(e(n, l)));
          }),
          ne(n.children, (n, l) => {
            l !== Ln && (t = t.concat(e(n, l)));
          }),
          t
        );
      }
      class ue {}
      class ae {
        parse(n) {
          const e = new Ce(n);
          return new le(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
        }
        serialize(n) {
          var e;
          return `${`/${(function n(e, t) {
            if (!e.hasChildren()) return de(e);
            if (t) {
              const t = e.children[Ln] ? n(e.children[Ln], !1) : '',
                l = [];
              return (
                ne(e.children, (e, t) => {
                  t !== Ln && l.push(`${t}:${n(e, !1)}`);
                }),
                l.length > 0 ? `${t}(${l.join('//')})` : t
              );
            }
            {
              const t = oe(e, (t, l) => (l === Ln ? [n(e.children[Ln], !1)] : [`${l}:${n(t, !1)}`]));
              return `${de(e)}/(${t.join('//')})`;
            }
          })(n.root, !0)}`}${(function(n) {
            const e = Object.keys(n).map(e => {
              const t = n[e];
              return Array.isArray(t) ? t.map(n => `${pe(e)}=${pe(n)}`).join('&') : `${pe(e)}=${pe(t)}`;
            });
            return e.length ? `?${e.join('&')}` : '';
          })(n.queryParams)}${'string' == typeof n.fragment ? `#${((e = n.fragment), encodeURI(e))}` : ''}`;
        }
      }
      const ce = new ae();
      function de(n) {
        return n.segments.map(n => me(n)).join('/');
      }
      function he(n) {
        return encodeURIComponent(n)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function pe(n) {
        return he(n).replace(/%3B/gi, ';');
      }
      function be(n) {
        return he(n)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function ge(n) {
        return decodeURIComponent(n);
      }
      function fe(n) {
        return ge(n.replace(/\+/g, '%20'));
      }
      function me(n) {
        return `${be(n.path)}${((e = n.parameters),
        Object.keys(e)
          .map(n => `;${be(n)}=${be(e[n])}`)
          .join(''))}`;
        var e;
      }
      const ve = /^[^\/()?;=#]+/;
      function _e(n) {
        const e = n.match(ve);
        return e ? e[0] : '';
      }
      const ye = /^[^=?&#]+/,
        we = /^[^?&#]+/;
      class Ce {
        constructor(n) {
          (this.url = n), (this.remaining = n);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new re([], {})
              : new re([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const n = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(n);
            } while (this.consumeOptional('&'));
          return n;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const n = [];
          for (
            this.peekStartsWith('(') || n.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), n.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
          let t = {};
          return (
            this.peekStartsWith('(') && (t = this.parseParens(!1)),
            (n.length > 0 || Object.keys(e).length > 0) && (t[Ln] = new re(n, e)),
            t
          );
        }
        parseSegment() {
          const n = _e(this.remaining);
          if ('' === n && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(n), new se(ge(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(';'); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const e = _e(this.remaining);
          if (!e) return;
          this.capture(e);
          let t = '';
          if (this.consumeOptional('=')) {
            const n = _e(this.remaining);
            n && this.capture((t = n));
          }
          n[ge(e)] = ge(t);
        }
        parseQueryParam(n) {
          const e = (function(n) {
            const e = n.match(ye);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let t = '';
          if (this.consumeOptional('=')) {
            const n = (function(n) {
              const e = n.match(we);
              return e ? e[0] : '';
            })(this.remaining);
            n && this.capture((t = n));
          }
          const l = fe(e),
            r = fe(t);
          if (n.hasOwnProperty(l)) {
            let e = n[l];
            Array.isArray(e) || (n[l] = e = [e]), e.push(r);
          } else n[l] = r;
        }
        parseParens(n) {
          const e = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const t = _e(this.remaining),
              l = this.remaining[t.length];
            if ('/' !== l && ')' !== l && ';' !== l) throw new Error(`Cannot parse url '${this.url}'`);
            let r = void 0;
            t.indexOf(':') > -1
              ? ((r = t.substr(0, t.indexOf(':'))), this.capture(r), this.capture(':'))
              : n && (r = Ln);
            const s = this.parseChildren();
            (e[r] = 1 === Object.keys(s).length ? s[Ln] : new re([], s)), this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(n) {
          return this.remaining.startsWith(n);
        }
        consumeOptional(n) {
          return !!this.peekStartsWith(n) && ((this.remaining = this.remaining.substring(n.length)), !0);
        }
        capture(n) {
          if (!this.consumeOptional(n)) throw new Error(`Expected "${n}".`);
        }
      }
      class xe {
        constructor(n) {
          this._root = n;
        }
        get root() {
          return this._root.value;
        }
        parent(n) {
          const e = this.pathFromRoot(n);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(n) {
          const e = Oe(n, this._root);
          return e ? e.children.map(n => n.value) : [];
        }
        firstChild(n) {
          const e = Oe(n, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(n) {
          const e = ke(n, this._root);
          return e.length < 2 ? [] : e[e.length - 2].children.map(n => n.value).filter(e => e !== n);
        }
        pathFromRoot(n) {
          return ke(n, this._root).map(n => n.value);
        }
      }
      function Oe(n, e) {
        if (n === e.value) return e;
        for (const t of e.children) {
          const e = Oe(n, t);
          if (e) return e;
        }
        return null;
      }
      function ke(n, e) {
        if (n === e.value) return [e];
        for (const t of e.children) {
          const l = ke(n, t);
          if (l.length) return l.unshift(e), l;
        }
        return [];
      }
      class Se {
        constructor(n, e) {
          (this.value = n), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Me(n) {
        const e = {};
        return n && n.children.forEach(n => (e[n.value.outlet] = n)), e;
      }
      class Pe extends xe {
        constructor(n, e) {
          super(n), (this.snapshot = e), Ie(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Ke(n, e) {
        const t = (function(n, e) {
            const t = new De([], {}, {}, '', {}, Ln, e, null, n.root, -1, {});
            return new Te('', new Se(t, []));
          })(n, e),
          l = new p([new se('', {})]),
          r = new p({}),
          s = new p({}),
          i = new p({}),
          o = new p(''),
          u = new Ee(l, r, i, o, s, Ln, e, t.root);
        return (u.snapshot = t.root), new Pe(new Se(u, []), t);
      }
      class Ee {
        constructor(n, e, t, l, r, s, i, o) {
          (this.url = n),
            (this.params = e),
            (this.queryParams = t),
            (this.fragment = l),
            (this.data = r),
            (this.outlet = s),
            (this.component = i),
            (this._futureSnapshot = o);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe(Object(k.a)(n => Fn(n)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Object(k.a)(n => Fn(n)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Ae(n, e = 'emptyOnly') {
        const t = n.pathFromRoot;
        let l = 0;
        if ('always' !== e)
          for (l = t.length - 1; l >= 1; ) {
            const n = t[l],
              e = t[l - 1];
            if (n.routeConfig && '' === n.routeConfig.path) l--;
            else {
              if (e.component) break;
              l--;
            }
          }
        return (function(n) {
          return n.reduce(
            (n, e) => ({
              params: Object.assign({}, n.params, e.params),
              data: Object.assign({}, n.data, e.data),
              resolve: Object.assign({}, n.resolve, e._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(t.slice(l));
      }
      class De {
        constructor(n, e, t, l, r, s, i, o, u, a, c) {
          (this.url = n),
            (this.params = e),
            (this.queryParams = t),
            (this.fragment = l),
            (this.data = r),
            (this.outlet = s),
            (this.component = i),
            (this.routeConfig = o),
            (this._urlSegment = u),
            (this._lastPathIndex = a),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = Fn(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Fn(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(n => n.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Te extends xe {
        constructor(n, e) {
          super(e), (this.url = n), Ie(this, e);
        }
        toString() {
          return qe(this._root);
        }
      }
      function Ie(n, e) {
        (e.value._routerState = n), e.children.forEach(e => Ie(n, e));
      }
      function qe(n) {
        const e = n.children.length > 0 ? ` { ${n.children.map(qe).join(', ')} } ` : '';
        return `${n.value}${e}`;
      }
      function Ne(n) {
        if (n.snapshot) {
          const e = n.snapshot,
            t = n._futureSnapshot;
          (n.snapshot = t),
            Jn(e.queryParams, t.queryParams) || n.queryParams.next(t.queryParams),
            e.fragment !== t.fragment && n.fragment.next(t.fragment),
            Jn(e.params, t.params) || n.params.next(t.params),
            (function(n, e) {
              if (n.length !== e.length) return !1;
              for (let t = 0; t < n.length; ++t) if (!Jn(n[t], e[t])) return !1;
              return !0;
            })(e.url, t.url) || n.url.next(t.url),
            Jn(e.data, t.data) || n.data.next(t.data);
        } else (n.snapshot = n._futureSnapshot), n.data.next(n._futureSnapshot.data);
      }
      function Re(n, e) {
        var t, l;
        return (
          Jn(n.params, e.params) &&
          ie((t = n.url), (l = e.url)) &&
          t.every((n, e) => Jn(n.parameters, l[e].parameters)) &&
          !(!n.parent != !e.parent) &&
          (!n.parent || Re(n.parent, e.parent))
        );
      }
      function je(n) {
        return 'object' == typeof n && null != n && !n.outlets && !n.segmentPath;
      }
      function Ve(n, e, t, l, r) {
        let s = {};
        return (
          l &&
            ne(l, (n, e) => {
              s[e] = Array.isArray(n) ? n.map(n => `${n}`) : `${n}`;
            }),
          new le(
            t.root === n
              ? e
              : (function n(e, t, l) {
                  const r = {};
                  return (
                    ne(e.children, (e, s) => {
                      r[s] = e === t ? l : n(e, t, l);
                    }),
                    new re(e.segments, r)
                  );
                })(t.root, n, e),
            s,
            r
          )
        );
      }
      class Le {
        constructor(n, e, t) {
          if (
            ((this.isAbsolute = n), (this.numberOfDoubleDots = e), (this.commands = t), n && t.length > 0 && je(t[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const l = t.find(n => 'object' == typeof n && null != n && n.outlets);
          if (l && l !== Xn(t)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Ue {
        constructor(n, e, t) {
          (this.segmentGroup = n), (this.processChildren = e), (this.index = t);
        }
      }
      function Fe(n) {
        return 'object' == typeof n && null != n && n.outlets ? n.outlets[Ln] : `${n}`;
      }
      function He(n, e, t) {
        if ((n || (n = new re([], {})), 0 === n.segments.length && n.hasChildren())) return ze(n, e, t);
        const l = (function(n, e, t) {
            let l = 0,
              r = e;
            const s = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; r < n.segments.length; ) {
              if (l >= t.length) return s;
              const e = n.segments[r],
                i = Fe(t[l]),
                o = l < t.length - 1 ? t[l + 1] : null;
              if (r > 0 && void 0 === i) break;
              if (i && o && 'object' == typeof o && void 0 === o.outlets) {
                if (!Ge(i, o, e)) return s;
                l += 2;
              } else {
                if (!Ge(i, {}, e)) return s;
                l++;
              }
              r++;
            }
            return { match: !0, pathIndex: r, commandIndex: l };
          })(n, e, t),
          r = t.slice(l.commandIndex);
        if (l.match && l.pathIndex < n.segments.length) {
          const e = new re(n.segments.slice(0, l.pathIndex), {});
          return (e.children[Ln] = new re(n.segments.slice(l.pathIndex), n.children)), ze(e, 0, r);
        }
        return l.match && 0 === r.length
          ? new re(n.segments, {})
          : l.match && !n.hasChildren()
          ? $e(n, e, t)
          : l.match
          ? ze(n, 0, r)
          : $e(n, e, t);
      }
      function ze(n, e, t) {
        if (0 === t.length) return new re(n.segments, {});
        {
          const l = (function(n) {
              return 'object' != typeof n[0] ? { [Ln]: n } : void 0 === n[0].outlets ? { [Ln]: n } : n[0].outlets;
            })(t),
            r = {};
          return (
            ne(l, (t, l) => {
              null !== t && (r[l] = He(n.children[l], e, t));
            }),
            ne(n.children, (n, e) => {
              void 0 === l[e] && (r[e] = n);
            }),
            new re(n.segments, r)
          );
        }
      }
      function $e(n, e, t) {
        const l = n.segments.slice(0, e);
        let r = 0;
        for (; r < t.length; ) {
          if ('object' == typeof t[r] && void 0 !== t[r].outlets) {
            const n = Be(t[r].outlets);
            return new re(l, n);
          }
          if (0 === r && je(t[0])) {
            l.push(new se(n.segments[e].path, t[0])), r++;
            continue;
          }
          const s = Fe(t[r]),
            i = r < t.length - 1 ? t[r + 1] : null;
          s && i && je(i) ? (l.push(new se(s, We(i))), (r += 2)) : (l.push(new se(s, {})), r++);
        }
        return new re(l, {});
      }
      function Be(n) {
        const e = {};
        return (
          ne(n, (n, t) => {
            null !== n && (e[t] = $e(new re([], {}), 0, n));
          }),
          e
        );
      }
      function We(n) {
        const e = {};
        return ne(n, (n, t) => (e[t] = `${n}`)), e;
      }
      function Ge(n, e, t) {
        return n == t.path && Jn(e, t.parameters);
      }
      const Ze = (n, e, t) =>
        Object(k.a)(l => (new Qe(e, l.targetRouterState, l.currentRouterState, t).activate(n), l));
      class Qe {
        constructor(n, e, t, l) {
          (this.routeReuseStrategy = n), (this.futureState = e), (this.currState = t), (this.forwardEvent = l);
        }
        activate(n) {
          const e = this.futureState._root,
            t = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, t, n), Ne(this.futureState.root), this.activateChildRoutes(e, t, n);
        }
        deactivateChildRoutes(n, e, t) {
          const l = Me(e);
          n.children.forEach(n => {
            const e = n.value.outlet;
            this.deactivateRoutes(n, l[e], t), delete l[e];
          }),
            ne(l, (n, e) => {
              this.deactivateRouteAndItsChildren(n, t);
            });
        }
        deactivateRoutes(n, e, t) {
          const l = n.value,
            r = e ? e.value : null;
          if (l === r)
            if (l.component) {
              const r = t.getContext(l.outlet);
              r && this.deactivateChildRoutes(n, e, r.children);
            } else this.deactivateChildRoutes(n, e, t);
          else r && this.deactivateRouteAndItsChildren(e, t);
        }
        deactivateRouteAndItsChildren(n, e) {
          this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, e)
            : this.deactivateRouteAndOutlet(n, e);
        }
        detachAndStoreRouteSubtree(n, e) {
          const t = e.getContext(n.value.outlet);
          if (t && t.outlet) {
            const e = t.outlet.detach(),
              l = t.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, { componentRef: e, route: n, contexts: l });
          }
        }
        deactivateRouteAndOutlet(n, e) {
          const t = e.getContext(n.value.outlet);
          if (t) {
            const l = Me(n),
              r = n.value.component ? t.children : e;
            ne(l, (n, e) => this.deactivateRouteAndItsChildren(n, r)),
              t.outlet && (t.outlet.deactivate(), t.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(n, e, t) {
          const l = Me(e);
          n.children.forEach(n => {
            this.activateRoutes(n, l[n.value.outlet], t), this.forwardEvent(new Rn(n.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new qn(n.value.snapshot));
        }
        activateRoutes(n, e, t) {
          const l = n.value,
            r = e ? e.value : null;
          if ((Ne(l), l === r))
            if (l.component) {
              const r = t.getOrCreateContext(l.outlet);
              this.activateChildRoutes(n, e, r.children);
            } else this.activateChildRoutes(n, e, t);
          else if (l.component) {
            const e = t.getOrCreateContext(l.outlet);
            if (this.routeReuseStrategy.shouldAttach(l.snapshot)) {
              const n = this.routeReuseStrategy.retrieve(l.snapshot);
              this.routeReuseStrategy.store(l.snapshot, null),
                e.children.onOutletReAttached(n.contexts),
                (e.attachRef = n.componentRef),
                (e.route = n.route.value),
                e.outlet && e.outlet.attach(n.componentRef, n.route.value),
                Je(n.route);
            } else {
              const t = (function(n) {
                  for (let e = n.parent; e; e = e.parent) {
                    const n = e.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig;
                    if (n && n.component) return null;
                  }
                  return null;
                })(l.snapshot),
                r = t ? t.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = l),
                (e.resolver = r),
                e.outlet && e.outlet.activateWith(l, r),
                this.activateChildRoutes(n, null, e.children);
            }
          } else this.activateChildRoutes(n, null, t);
        }
      }
      function Je(n) {
        Ne(n.value), n.children.forEach(Je);
      }
      function Ye(n) {
        return 'function' == typeof n;
      }
      function Xe(n) {
        return n instanceof le;
      }
      class nt {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class et {
        constructor(n) {
          this.urlTree = n;
        }
      }
      function tt(n) {
        return new b.a(e => e.error(new nt(n)));
      }
      function lt(n) {
        return new b.a(e => e.error(new et(n)));
      }
      function rt(n) {
        return new b.a(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${n}'`)));
      }
      class st {
        constructor(n, e, t, r, s) {
          (this.configLoader = e),
            (this.urlSerializer = t),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = n.get(l.w));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Ln)
            .pipe(Object(k.a)(n => this.createUrlTree(n, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              B(n => {
                if (n instanceof et) return (this.allowRedirects = !1), this.match(n.urlTree);
                if (n instanceof nt) throw this.noMatchError(n);
                throw n;
              })
            );
        }
        match(n) {
          return this.expandSegmentGroup(this.ngModule, this.config, n.root, Ln)
            .pipe(Object(k.a)(e => this.createUrlTree(e, n.queryParams, n.fragment)))
            .pipe(
              B(n => {
                if (n instanceof nt) throw this.noMatchError(n);
                throw n;
              })
            );
        }
        noMatchError(n) {
          return new Error(`Cannot match any routes. URL Segment: '${n.segmentGroup}'`);
        }
        createUrlTree(n, e, t) {
          const l = n.segments.length > 0 ? new re([], { [Ln]: n }) : n;
          return new le(l, e, t);
        }
        expandSegmentGroup(n, e, t, l) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.expandChildren(n, e, t).pipe(Object(k.a)(n => new re([], n)))
            : this.expandSegment(n, t, e, t.segments, l, !0);
        }
        expandChildren(n, e, t) {
          return (function(n, e) {
            if (0 === Object.keys(n).length) return a({});
            const t = [],
              l = [],
              r = {};
            return (
              ne(n, (n, s) => {
                const i = e(s, n).pipe(Object(k.a)(n => (r[s] = n)));
                s === Ln ? t.push(i) : l.push(i);
              }),
              a.apply(null, t.concat(l)).pipe(
                M(),
                z(),
                Object(k.a)(() => r)
              )
            );
          })(t.children, (t, l) => this.expandSegmentGroup(n, e, l, t));
        }
        expandSegment(n, e, t, l, r, s) {
          return a(...t).pipe(
            Object(k.a)(i =>
              this.expandSegmentAgainstRoute(n, e, t, i, l, r, s).pipe(
                B(n => {
                  if (n instanceof nt) return a(null);
                  throw n;
                })
              )
            ),
            M(),
            Y(n => !!n),
            B((n, t) => {
              if (n instanceof g || 'EmptyError' === n.name) {
                if (this.noLeftoversInUrl(e, l, r)) return a(new re([], {}));
                throw new nt(e);
              }
              throw n;
            })
          );
        }
        noLeftoversInUrl(n, e, t) {
          return 0 === e.length && !n.children[t];
        }
        expandSegmentAgainstRoute(n, e, t, l, r, s, i) {
          return at(l) !== s
            ? tt(e)
            : void 0 === l.redirectTo
            ? this.matchSegmentAgainstRoute(n, e, l, r)
            : i && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(n, e, t, l, r, s)
            : tt(e);
        }
        expandSegmentAgainstRouteUsingRedirect(n, e, t, l, r, s) {
          return '**' === l.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(n, t, l, s)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(n, e, t, l, r, s);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(n, e, t, l) {
          const r = this.applyRedirectCommands([], t.redirectTo, {});
          return t.redirectTo.startsWith('/')
            ? lt(r)
            : this.lineralizeSegments(t, r).pipe(
                Object(X.a)(t => {
                  const r = new re(t, {});
                  return this.expandSegment(n, r, e, t, l, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(n, e, t, l, r, s) {
          const { matched: i, consumedSegments: o, lastChild: u, positionalParamSegments: a } = it(e, l, r);
          if (!i) return tt(e);
          const c = this.applyRedirectCommands(o, l.redirectTo, a);
          return l.redirectTo.startsWith('/')
            ? lt(c)
            : this.lineralizeSegments(l, c).pipe(
                Object(X.a)(l => this.expandSegment(n, e, t, l.concat(r.slice(u)), s, !1))
              );
        }
        matchSegmentAgainstRoute(n, e, t, l) {
          if ('**' === t.path)
            return t.loadChildren
              ? this.configLoader.load(n.injector, t).pipe(Object(k.a)(n => ((t._loadedConfig = n), new re(l, {}))))
              : a(new re(l, {}));
          const { matched: r, consumedSegments: s, lastChild: i } = it(e, t, l);
          if (!r) return tt(e);
          const o = l.slice(i);
          return this.getChildConfig(n, t, l).pipe(
            Object(X.a)(n => {
              const t = n.module,
                l = n.routes,
                { segmentGroup: r, slicedSegments: i } = (function(n, e, t, l) {
                  return t.length > 0 &&
                    (function(n, e, t) {
                      return t.some(t => ut(n, e, t) && at(t) !== Ln);
                    })(n, t, l)
                    ? {
                        segmentGroup: ot(
                          new re(
                            e,
                            (function(n, e) {
                              const t = {};
                              t[Ln] = e;
                              for (const l of n) '' === l.path && at(l) !== Ln && (t[at(l)] = new re([], {}));
                              return t;
                            })(l, new re(t, n.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === t.length &&
                      (function(n, e, t) {
                        return t.some(t => ut(n, e, t));
                      })(n, t, l)
                    ? {
                        segmentGroup: ot(
                          new re(
                            n.segments,
                            (function(n, e, t, l) {
                              const r = {};
                              for (const s of t) ut(n, e, s) && !l[at(s)] && (r[at(s)] = new re([], {}));
                              return Object.assign({}, l, r);
                            })(n, t, l, n.children)
                          )
                        ),
                        slicedSegments: t
                      }
                    : { segmentGroup: n, slicedSegments: t };
                })(e, s, o, l);
              return 0 === i.length && r.hasChildren()
                ? this.expandChildren(t, l, r).pipe(Object(k.a)(n => new re(s, n)))
                : 0 === l.length && 0 === i.length
                ? a(new re(s, {}))
                : this.expandSegment(t, r, l, i, Ln, !0).pipe(
                    Object(k.a)(n => new re(s.concat(n.segments), n.children))
                  );
            })
          );
        }
        getChildConfig(n, e, t) {
          return e.children
            ? a(new Bn(e.children, n))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? a(e._loadedConfig)
              : (function(n, e, t) {
                  const l = e.canLoad;
                  return l && 0 !== l.length
                    ? Object(c.a)(l)
                        .pipe(
                          Object(k.a)(l => {
                            const r = n.get(l);
                            let s;
                            if (
                              (function(n) {
                                return n && Ye(n.canLoad);
                              })(r)
                            )
                              s = r.canLoad(e, t);
                            else {
                              if (!Ye(r)) throw new Error('Invalid CanLoad guard');
                              s = r(e, t);
                            }
                            return ee(s);
                          })
                        )
                        .pipe(M(), ((r = n => !0 === n), n => n.lift(new nn(r, void 0, n))))
                    : a(!0);
                  var r;
                })(n.injector, e, t).pipe(
                  Object(X.a)(t =>
                    t
                      ? this.configLoader.load(n.injector, e).pipe(Object(k.a)(n => ((e._loadedConfig = n), n)))
                      : (function(n) {
                          return new b.a(e =>
                            e.error(
                              zn(
                                `Cannot load children because the guard of the route "path: '${n.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : a(new Bn([], n));
        }
        lineralizeSegments(n, e) {
          let t = [],
            l = e.root;
          for (;;) {
            if (((t = t.concat(l.segments)), 0 === l.numberOfChildren)) return a(t);
            if (l.numberOfChildren > 1 || !l.children[Ln]) return rt(n.redirectTo);
            l = l.children[Ln];
          }
        }
        applyRedirectCommands(n, e, t) {
          return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), n, t);
        }
        applyRedirectCreatreUrlTree(n, e, t, l) {
          const r = this.createSegmentGroup(n, e.root, t, l);
          return new le(r, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
        }
        createQueryParams(n, e) {
          const t = {};
          return (
            ne(n, (n, l) => {
              if ('string' == typeof n && n.startsWith(':')) {
                const r = n.substring(1);
                t[l] = e[r];
              } else t[l] = n;
            }),
            t
          );
        }
        createSegmentGroup(n, e, t, l) {
          const r = this.createSegments(n, e.segments, t, l);
          let s = {};
          return (
            ne(e.children, (e, r) => {
              s[r] = this.createSegmentGroup(n, e, t, l);
            }),
            new re(r, s)
          );
        }
        createSegments(n, e, t, l) {
          return e.map(e => (e.path.startsWith(':') ? this.findPosParam(n, e, l) : this.findOrReturn(e, t)));
        }
        findPosParam(n, e, t) {
          const l = t[e.path.substring(1)];
          if (!l) throw new Error(`Cannot redirect to '${n}'. Cannot find '${e.path}'.`);
          return l;
        }
        findOrReturn(n, e) {
          let t = 0;
          for (const l of e) {
            if (l.path === n.path) return e.splice(t), l;
            t++;
          }
          return n;
        }
      }
      function it(n, e, t) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (n.hasChildren() || t.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const l = (e.matcher || $n)(t, n, e);
        return l
          ? {
              matched: !0,
              consumedSegments: l.consumed,
              lastChild: l.consumed.length,
              positionalParamSegments: l.posParams
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function ot(n) {
        if (1 === n.numberOfChildren && n.children[Ln]) {
          const e = n.children[Ln];
          return new re(n.segments.concat(e.segments), e.children);
        }
        return n;
      }
      function ut(n, e, t) {
        return (
          (!(n.hasChildren() || e.length > 0) || 'full' !== t.pathMatch) && '' === t.path && void 0 !== t.redirectTo
        );
      }
      function at(n) {
        return n.outlet || Ln;
      }
      class ct {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class dt {
        constructor(n, e) {
          (this.component = n), (this.route = e);
        }
      }
      function ht(n, e, t) {
        const l = n._root;
        return (function n(e, t, l, r, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const i = Me(t);
          return (
            e.children.forEach(e => {
              !(function(e, t, l, r, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const i = e.value,
                  o = t ? t.value : null,
                  u = l ? l.getContext(e.value.outlet) : null;
                if (o && i.routeConfig === o.routeConfig) {
                  const a = (function(n, e, t) {
                    if ('function' == typeof t) return t(n, e);
                    switch (t) {
                      case 'pathParamsChange':
                        return !ie(n.url, e.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !ie(n.url, e.url) || !Jn(n.queryParams, e.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !Re(n, e) || !Jn(n.queryParams, e.queryParams);
                      case 'paramsChange':
                      default:
                        return !Re(n, e);
                    }
                  })(o, i, i.routeConfig.runGuardsAndResolvers);
                  a ? s.canActivateChecks.push(new ct(r)) : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                    n(e, t, i.component ? (u ? u.children : null) : l, r, s),
                    a && s.canDeactivateChecks.push(new dt((u && u.outlet && u.outlet.component) || null, o));
                } else
                  o && bt(t, u, s),
                    s.canActivateChecks.push(new ct(r)),
                    n(e, null, i.component ? (u ? u.children : null) : l, r, s);
              })(e, i[e.value.outlet], l, r.concat([e.value]), s),
                delete i[e.value.outlet];
            }),
            ne(i, (n, e) => bt(n, l.getContext(e), s)),
            s
          );
        })(l, e ? e._root : null, t, [l.value]);
      }
      function pt(n, e, t) {
        const l = (function(n) {
          if (!n) return null;
          for (let e = n.parent; e; e = e.parent) {
            const n = e.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(e);
        return (l ? l.module.injector : t).get(n);
      }
      function bt(n, e, t) {
        const l = Me(n),
          r = n.value;
        ne(l, (n, l) => {
          bt(n, r.component ? (e ? e.children.getContext(l) : null) : e, t);
        }),
          t.canDeactivateChecks.push(
            new dt(r.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, r)
          );
      }
      const gt = Symbol('INITIAL_VALUE');
      function ft() {
        return tn(n =>
          (function(...n) {
            let e = null,
              t = null;
            return (
              Object(i.a)(n[n.length - 1]) && (t = n.pop()),
              'function' == typeof n[n.length - 1] && (e = n.pop()),
              1 === n.length && Object(f.a)(n[0]) && (n = n[0]),
              Object(o.a)(n, t).lift(new y(e))
            );
          })(
            ...n.map(n =>
              n.pipe(
                Z(1),
                (function(...n) {
                  const e = n[n.length - 1];
                  return Object(i.a)(e) ? (n.pop(), t => sn(n, t, e)) : e => sn(n, e);
                })(gt)
              )
            )
          ).pipe(
            on((n, e) => {
              let t = !1;
              return e.reduce((n, l, r) => {
                if (n !== gt) return n;
                if ((l === gt && (t = !0), !t)) {
                  if (!1 === l) return l;
                  if (r === e.length - 1 || Xe(l)) return l;
                }
                return n;
              }, n);
            }, gt),
            K(n => n !== gt),
            Object(k.a)(n => (Xe(n) ? n : !0 === n)),
            Z(1)
          )
        );
      }
      function mt(n, e) {
        return null !== n && e && e(new Nn(n)), a(!0);
      }
      function vt(n, e) {
        return null !== n && e && e(new In(n)), a(!0);
      }
      function _t(n, e, t) {
        const l = e.routeConfig ? e.routeConfig.canActivate : null;
        return l && 0 !== l.length
          ? a(
              l.map(l =>
                O(() => {
                  const r = pt(l, e, t);
                  let s;
                  if (
                    (function(n) {
                      return n && Ye(n.canActivate);
                    })(r)
                  )
                    s = ee(r.canActivate(e, n));
                  else {
                    if (!Ye(r)) throw new Error('Invalid CanActivate guard');
                    s = ee(r(e, n));
                  }
                  return s.pipe(Y());
                })
              )
            ).pipe(ft())
          : a(!0);
      }
      function yt(n, e, t) {
        const l = e[e.length - 1],
          r = e
            .slice(0, e.length - 1)
            .reverse()
            .map(n =>
              (function(n) {
                const e = n.routeConfig ? n.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: n, guards: e } : null;
              })(n)
            )
            .filter(n => null !== n)
            .map(e =>
              O(() =>
                a(
                  e.guards.map(r => {
                    const s = pt(r, e.node, t);
                    let i;
                    if (
                      (function(n) {
                        return n && Ye(n.canActivateChild);
                      })(s)
                    )
                      i = ee(s.canActivateChild(l, n));
                    else {
                      if (!Ye(s)) throw new Error('Invalid CanActivateChild guard');
                      i = ee(s(l, n));
                    }
                    return i.pipe(Y());
                  })
                ).pipe(ft())
              )
            );
        return a(r).pipe(ft());
      }
      class wt {}
      class Ct {
        constructor(n, e, t, l, r, s) {
          (this.rootComponentType = n),
            (this.config = e),
            (this.urlTree = t),
            (this.url = l),
            (this.paramsInheritanceStrategy = r),
            (this.relativeLinkResolution = s);
        }
        recognize() {
          try {
            const n = kt(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
              e = this.processSegmentGroup(this.config, n, Ln),
              t = new De(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                Ln,
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              l = new Se(t, e),
              r = new Te(this.url, l);
            return this.inheritParamsAndData(r._root), a(r);
          } catch (n) {
            return new b.a(e => e.error(n));
          }
        }
        inheritParamsAndData(n) {
          const e = n.value,
            t = Ae(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(t.params)),
            (e.data = Object.freeze(t.data)),
            n.children.forEach(n => this.inheritParamsAndData(n));
        }
        processSegmentGroup(n, e, t) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(n, e)
            : this.processSegment(n, e, e.segments, t);
        }
        processChildren(n, e) {
          const t = oe(e, (e, t) => this.processSegmentGroup(n, e, t));
          return (
            (function(n) {
              const e = {};
              n.forEach(n => {
                const t = e[n.value.outlet];
                if (t) {
                  const e = t.url.map(n => n.toString()).join('/'),
                    l = n.value.url.map(n => n.toString()).join('/');
                  throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${l}'.`);
                }
                e[n.value.outlet] = n.value;
              });
            })(t),
            t.sort((n, e) =>
              n.value.outlet === Ln ? -1 : e.value.outlet === Ln ? 1 : n.value.outlet.localeCompare(e.value.outlet)
            ),
            t
          );
        }
        processSegment(n, e, t, l) {
          for (const s of n)
            try {
              return this.processSegmentAgainstRoute(s, e, t, l);
            } catch (r) {
              if (!(r instanceof wt)) throw r;
            }
          if (this.noLeftoversInUrl(e, t, l)) return [];
          throw new wt();
        }
        noLeftoversInUrl(n, e, t) {
          return 0 === e.length && !n.children[t];
        }
        processSegmentAgainstRoute(n, e, t, l) {
          if (n.redirectTo) throw new wt();
          if ((n.outlet || Ln) !== l) throw new wt();
          let r,
            s = [],
            i = [];
          if ('**' === n.path) {
            const s = t.length > 0 ? Xn(t).parameters : {};
            r = new De(
              t,
              s,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Pt(n),
              l,
              n.component,
              n,
              xt(e),
              Ot(e) + t.length,
              Kt(n)
            );
          } else {
            const o = (function(n, e, t) {
              if ('' === e.path) {
                if ('full' === e.pathMatch && (n.hasChildren() || t.length > 0)) throw new wt();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const l = (e.matcher || $n)(t, n, e);
              if (!l) throw new wt();
              const r = {};
              ne(l.posParams, (n, e) => {
                r[e] = n.path;
              });
              const s = l.consumed.length > 0 ? Object.assign({}, r, l.consumed[l.consumed.length - 1].parameters) : r;
              return { consumedSegments: l.consumed, lastChild: l.consumed.length, parameters: s };
            })(e, n, t);
            (s = o.consumedSegments),
              (i = t.slice(o.lastChild)),
              (r = new De(
                s,
                o.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Pt(n),
                l,
                n.component,
                n,
                xt(e),
                Ot(e) + s.length,
                Kt(n)
              ));
          }
          const o = (function(n) {
              return n.children ? n.children : n.loadChildren ? n._loadedConfig.routes : [];
            })(n),
            { segmentGroup: u, slicedSegments: a } = kt(e, s, i, o, this.relativeLinkResolution);
          if (0 === a.length && u.hasChildren()) {
            const n = this.processChildren(o, u);
            return [new Se(r, n)];
          }
          if (0 === o.length && 0 === a.length) return [new Se(r, [])];
          const c = this.processSegment(o, u, a, Ln);
          return [new Se(r, c)];
        }
      }
      function xt(n) {
        let e = n;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function Ot(n) {
        let e = n,
          t = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; ) t += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
        return t - 1;
      }
      function kt(n, e, t, l, r) {
        if (
          t.length > 0 &&
          (function(n, e, t) {
            return t.some(t => St(n, e, t) && Mt(t) !== Ln);
          })(n, t, l)
        ) {
          const r = new re(
            e,
            (function(n, e, t, l) {
              const r = {};
              (r[Ln] = l), (l._sourceSegment = n), (l._segmentIndexShift = e.length);
              for (const s of t)
                if ('' === s.path && Mt(s) !== Ln) {
                  const t = new re([], {});
                  (t._sourceSegment = n), (t._segmentIndexShift = e.length), (r[Mt(s)] = t);
                }
              return r;
            })(n, e, l, new re(t, n.children))
          );
          return (r._sourceSegment = n), (r._segmentIndexShift = e.length), { segmentGroup: r, slicedSegments: [] };
        }
        if (
          0 === t.length &&
          (function(n, e, t) {
            return t.some(t => St(n, e, t));
          })(n, t, l)
        ) {
          const s = new re(
            n.segments,
            (function(n, e, t, l, r, s) {
              const i = {};
              for (const o of l)
                if (St(n, t, o) && !r[Mt(o)]) {
                  const t = new re([], {});
                  (t._sourceSegment = n),
                    (t._segmentIndexShift = 'legacy' === s ? n.segments.length : e.length),
                    (i[Mt(o)] = t);
                }
              return Object.assign({}, r, i);
            })(n, e, t, l, n.children, r)
          );
          return (s._sourceSegment = n), (s._segmentIndexShift = e.length), { segmentGroup: s, slicedSegments: t };
        }
        const s = new re(n.segments, n.children);
        return (s._sourceSegment = n), (s._segmentIndexShift = e.length), { segmentGroup: s, slicedSegments: t };
      }
      function St(n, e, t) {
        return (
          (!(n.hasChildren() || e.length > 0) || 'full' !== t.pathMatch) && '' === t.path && void 0 === t.redirectTo
        );
      }
      function Mt(n) {
        return n.outlet || Ln;
      }
      function Pt(n) {
        return n.data || {};
      }
      function Kt(n) {
        return n.resolve || {};
      }
      function Et(n, e, t, l) {
        const r = pt(n, e, l);
        return ee(r.resolve ? r.resolve(e, t) : r(e, t));
      }
      function At(n) {
        return function(e) {
          return e.pipe(
            tn(e => {
              const t = n(e);
              return t ? Object(c.a)(t).pipe(Object(k.a)(() => e)) : Object(c.a)([e]);
            })
          );
        };
      }
      class Dt {}
      class Tt {
        shouldDetach(n) {
          return !1;
        }
        store(n, e) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, e) {
          return n.routeConfig === e.routeConfig;
        }
      }
      const It = new l.p('ROUTES');
      class qt {
        constructor(n, e, t, l) {
          (this.loader = n), (this.compiler = e), (this.onLoadStartListener = t), (this.onLoadEndListener = l);
        }
        load(n, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              Object(k.a)(t => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const l = t.create(n);
                return new Bn(Yn(l.injector.get(It)).map(Qn), l);
              })
            )
          );
        }
        loadModuleFactory(n) {
          return 'string' == typeof n
            ? Object(c.a)(this.loader.load(n))
            : ee(n()).pipe(
                Object(X.a)(n => (n instanceof l.u ? a(n) : Object(c.a)(this.compiler.compileModuleAsync(n))))
              );
        }
      }
      class Nt {}
      class Rt {
        shouldProcessUrl(n) {
          return !0;
        }
        extract(n) {
          return n;
        }
        merge(n, e) {
          return n;
        }
      }
      function jt(n) {
        throw n;
      }
      function Vt(n, e, t) {
        return e.parse('/');
      }
      function Lt(n, e) {
        return a(null);
      }
      class Ut {
        constructor(n, e, t, r, s, i, o, u) {
          (this.rootComponentType = n),
            (this.urlSerializer = e),
            (this.rootContexts = t),
            (this.location = r),
            (this.config = u),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new d.a()),
            (this.errorHandler = jt),
            (this.malformedUriErrorHandler = Vt),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: Lt, afterPreactivation: Lt }),
            (this.urlHandlingStrategy = new Rt()),
            (this.routeReuseStrategy = new Tt()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = s.get(l.w)),
            (this.console = s.get(l.Z));
          const a = s.get(l.y);
          (this.isNgZoneEnabled = a instanceof l.y),
            this.resetConfig(u),
            (this.currentUrlTree = new le(new re([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new qt(
              i,
              o,
              n => this.triggerEvent(new Dn(n)),
              n => this.triggerEvent(new Tn(n))
            )),
            (this.routerState = Ke(this.currentUrlTree, this.rootComponentType)),
            (this.transitions = new p({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
              urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: 'imperative',
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(n) {
          const e = this.events;
          return n.pipe(
            K(n => 0 !== n.id),
            Object(k.a)(n => Object.assign({}, n, { extractedUrl: this.urlHandlingStrategy.extract(n.rawUrl) })),
            tn(n => {
              let t = !1,
                l = !1;
              return a(n).pipe(
                gn(n => {
                  this.currentNavigation = {
                    id: n.id,
                    initialUrl: n.currentRawUrl,
                    extractedUrl: n.extractedUrl,
                    trigger: n.source,
                    extras: n.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, { previousNavigation: null })
                      : null
                  };
                }),
                tn(n => {
                  const t = !this.navigated || n.extractedUrl.toString() !== this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || t) &&
                    this.urlHandlingStrategy.shouldProcessUrl(n.rawUrl)
                  )
                    return a(n).pipe(
                      tn(n => {
                        const t = this.transitions.getValue();
                        return (
                          e.next(new xn(n.id, this.serializeUrl(n.extractedUrl), n.source, n.restoredState)),
                          t !== this.transitions.getValue() ? C : [n]
                        );
                      }),
                      tn(n => Promise.resolve(n)),
                      (function(n, e, t, l) {
                        return function(r) {
                          return r.pipe(
                            tn(r =>
                              (function(n, e, t, l, r) {
                                return new st(n, e, t, l, r).apply();
                              })(n, e, t, r.extractedUrl, l).pipe(
                                Object(k.a)(n => Object.assign({}, r, { urlAfterRedirects: n }))
                              )
                            )
                          );
                        };
                      })(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config),
                      gn(n => {
                        this.currentNavigation = Object.assign({}, this.currentNavigation, {
                          finalUrl: n.urlAfterRedirects
                        });
                      }),
                      (function(n, e, t, l, r) {
                        return function(s) {
                          return s.pipe(
                            Object(X.a)(s =>
                              (function(n, e, t, l, r = 'emptyOnly', s = 'legacy') {
                                return new Ct(n, e, t, l, r, s).recognize();
                              })(n, e, s.urlAfterRedirects, t(s.urlAfterRedirects), l, r).pipe(
                                Object(k.a)(n => Object.assign({}, s, { targetSnapshot: n }))
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        n => this.serializeUrl(n),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      gn(n => {
                        'eager' === this.urlUpdateStrategy &&
                          (n.extras.skipLocationChange ||
                            this.setBrowserUrl(n.urlAfterRedirects, !!n.extras.replaceUrl, n.id, n.extras.state),
                          (this.browserUrlTree = n.urlAfterRedirects));
                      }),
                      gn(n => {
                        const t = new Mn(
                          n.id,
                          this.serializeUrl(n.extractedUrl),
                          this.serializeUrl(n.urlAfterRedirects),
                          n.targetSnapshot
                        );
                        e.next(t);
                      })
                    );
                  if (t && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                    const { id: t, extractedUrl: l, source: r, restoredState: s, extras: i } = n,
                      o = new xn(t, this.serializeUrl(l), r, s);
                    e.next(o);
                    const u = Ke(l, this.rootComponentType).snapshot;
                    return a(
                      Object.assign({}, n, {
                        targetSnapshot: u,
                        urlAfterRedirects: l,
                        extras: Object.assign({}, i, { skipLocationChange: !1, replaceUrl: !1 })
                      })
                    );
                  }
                  return (this.rawUrlTree = n.rawUrl), (this.browserUrlTree = n.urlAfterRedirects), n.resolve(null), C;
                }),
                At(n => {
                  const {
                    targetSnapshot: e,
                    id: t,
                    extractedUrl: l,
                    rawUrl: r,
                    extras: { skipLocationChange: s, replaceUrl: i }
                  } = n;
                  return this.hooks.beforePreactivation(e, {
                    navigationId: t,
                    appliedUrlTree: l,
                    rawUrlTree: r,
                    skipLocationChange: !!s,
                    replaceUrl: !!i
                  });
                }),
                gn(n => {
                  const e = new Pn(
                    n.id,
                    this.serializeUrl(n.extractedUrl),
                    this.serializeUrl(n.urlAfterRedirects),
                    n.targetSnapshot
                  );
                  this.triggerEvent(e);
                }),
                Object(k.a)(n =>
                  Object.assign({}, n, { guards: ht(n.targetSnapshot, n.currentSnapshot, this.rootContexts) })
                ),
                (function(n, e) {
                  return function(t) {
                    return t.pipe(
                      Object(X.a)(t => {
                        const {
                          targetSnapshot: l,
                          currentSnapshot: r,
                          guards: { canActivateChecks: s, canDeactivateChecks: i }
                        } = t;
                        return 0 === i.length && 0 === s.length
                          ? a(Object.assign({}, t, { guardsResult: !0 }))
                          : (function(n, e, t, l) {
                              return Object(c.a)(n).pipe(
                                Object(X.a)(n =>
                                  (function(n, e, t, l, r) {
                                    const s = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                    return s && 0 !== s.length
                                      ? a(
                                          s.map(s => {
                                            const i = pt(s, e, r);
                                            let o;
                                            if (
                                              (function(n) {
                                                return n && Ye(n.canDeactivate);
                                              })(i)
                                            )
                                              o = ee(i.canDeactivate(n, e, t, l));
                                            else {
                                              if (!Ye(i)) throw new Error('Invalid CanDeactivate guard');
                                              o = ee(i(n, e, t, l));
                                            }
                                            return o.pipe(Y());
                                          })
                                        ).pipe(ft())
                                      : a(!0);
                                  })(n.component, n.route, t, e, l)
                                ),
                                Y(n => !0 !== n, !0)
                              );
                            })(i, l, r, n).pipe(
                              Object(X.a)(t =>
                                t &&
                                (function(n) {
                                  return 'boolean' == typeof n;
                                })(t)
                                  ? (function(n, e, t, l) {
                                      return Object(c.a)(e).pipe(
                                        cn(e =>
                                          Object(c.a)([
                                            vt(e.route.parent, l),
                                            mt(e.route, l),
                                            yt(n, e.path, t),
                                            _t(n, e.route, t)
                                          ]).pipe(
                                            M(),
                                            Y(n => !0 !== n, !0)
                                          )
                                        ),
                                        Y(n => !0 !== n, !0)
                                      );
                                    })(l, s, n, e)
                                  : a(t)
                              ),
                              Object(k.a)(n => Object.assign({}, t, { guardsResult: n }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, n => this.triggerEvent(n)),
                gn(n => {
                  if (Xe(n.guardsResult)) {
                    const e = zn(`Redirecting to "${this.serializeUrl(n.guardsResult)}"`);
                    throw ((e.url = n.guardsResult), e);
                  }
                }),
                gn(n => {
                  const e = new Kn(
                    n.id,
                    this.serializeUrl(n.extractedUrl),
                    this.serializeUrl(n.urlAfterRedirects),
                    n.targetSnapshot,
                    !!n.guardsResult
                  );
                  this.triggerEvent(e);
                }),
                K(n => {
                  if (!n.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const t = new kn(n.id, this.serializeUrl(n.extractedUrl), '');
                    return e.next(t), n.resolve(!1), !1;
                  }
                  return !0;
                }),
                At(n => {
                  if (n.guards.canActivateChecks.length)
                    return a(n).pipe(
                      gn(n => {
                        const e = new En(
                          n.id,
                          this.serializeUrl(n.extractedUrl),
                          this.serializeUrl(n.urlAfterRedirects),
                          n.targetSnapshot
                        );
                        this.triggerEvent(e);
                      }),
                      (function(n, e) {
                        return function(t) {
                          return t.pipe(
                            Object(X.a)(t => {
                              const {
                                targetSnapshot: l,
                                guards: { canActivateChecks: r }
                              } = t;
                              return r.length
                                ? Object(c.a)(r).pipe(
                                    cn(t =>
                                      (function(n, e, t, l) {
                                        return (function(n, e, t, l) {
                                          const r = Object.keys(n);
                                          if (0 === r.length) return a({});
                                          if (1 === r.length) {
                                            const s = r[0];
                                            return Et(n[s], e, t, l).pipe(Object(k.a)(n => ({ [s]: n })));
                                          }
                                          const s = {};
                                          return Object(c.a)(r)
                                            .pipe(
                                              Object(X.a)(r =>
                                                Et(n[r], e, t, l).pipe(Object(k.a)(n => ((s[r] = n), n)))
                                              )
                                            )
                                            .pipe(
                                              z(),
                                              Object(k.a)(() => s)
                                            );
                                        })(n._resolve, n, e, l).pipe(
                                          Object(k.a)(
                                            e => (
                                              (n._resolvedData = e),
                                              (n.data = Object.assign({}, n.data, Ae(n, t).resolve)),
                                              null
                                            )
                                          )
                                        );
                                      })(t.route, l, n, e)
                                    ),
                                    hn((n, e) => n),
                                    Object(k.a)(n => t)
                                  )
                                : a(t);
                            })
                          );
                        };
                      })(this.paramsInheritanceStrategy, this.ngModule.injector),
                      gn(n => {
                        const e = new An(
                          n.id,
                          this.serializeUrl(n.extractedUrl),
                          this.serializeUrl(n.urlAfterRedirects),
                          n.targetSnapshot
                        );
                        this.triggerEvent(e);
                      })
                    );
                }),
                At(n => {
                  const {
                    targetSnapshot: e,
                    id: t,
                    extractedUrl: l,
                    rawUrl: r,
                    extras: { skipLocationChange: s, replaceUrl: i }
                  } = n;
                  return this.hooks.afterPreactivation(e, {
                    navigationId: t,
                    appliedUrlTree: l,
                    rawUrlTree: r,
                    skipLocationChange: !!s,
                    replaceUrl: !!i
                  });
                }),
                Object(k.a)(n => {
                  const e = (function(n, e, t) {
                    const l = (function n(e, t, l) {
                      if (l && e.shouldReuseRoute(t.value, l.value.snapshot)) {
                        const r = l.value;
                        r._futureSnapshot = t.value;
                        const s = (function(e, t, l) {
                          return t.children.map(t => {
                            for (const r of l.children)
                              if (e.shouldReuseRoute(r.value.snapshot, t.value)) return n(e, t, r);
                            return n(e, t);
                          });
                        })(e, t, l);
                        return new Se(r, s);
                      }
                      {
                        const l = e.retrieve(t.value);
                        if (l) {
                          const n = l.route;
                          return (
                            (function n(e, t) {
                              if (e.value.routeConfig !== t.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (e.children.length !== t.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              t.value._futureSnapshot = e.value;
                              for (let l = 0; l < e.children.length; ++l) n(e.children[l], t.children[l]);
                            })(t, n),
                            n
                          );
                        }
                        {
                          const l = new Ee(
                              new p((r = t.value).url),
                              new p(r.params),
                              new p(r.queryParams),
                              new p(r.fragment),
                              new p(r.data),
                              r.outlet,
                              r.component,
                              r
                            ),
                            s = t.children.map(t => n(e, t));
                          return new Se(l, s);
                        }
                      }
                      var r;
                    })(n, e._root, t ? t._root : void 0);
                    return new Pe(l, e);
                  })(this.routeReuseStrategy, n.targetSnapshot, n.currentRouterState);
                  return Object.assign({}, n, { targetRouterState: e });
                }),
                gn(n => {
                  (this.currentUrlTree = n.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n.rawUrl)),
                    (this.routerState = n.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (n.extras.skipLocationChange ||
                        this.setBrowserUrl(this.rawUrlTree, !!n.extras.replaceUrl, n.id, n.extras.state),
                      (this.browserUrlTree = n.urlAfterRedirects));
                }),
                Ze(this.rootContexts, this.routeReuseStrategy, n => this.triggerEvent(n)),
                gn({
                  next() {
                    t = !0;
                  },
                  complete() {
                    t = !0;
                  }
                }),
                (function(n) {
                  return e => e.lift(new _n(n));
                })(() => {
                  if (!t && !l) {
                    this.resetUrlToCurrentUrlTree();
                    const t = new kn(
                      n.id,
                      this.serializeUrl(n.extractedUrl),
                      `Navigation ID ${n.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    e.next(t), n.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                B(t => {
                  if (
                    ((l = !0),
                    (function(n) {
                      return n && n[Hn];
                    })(t))
                  ) {
                    const l = Xe(t.url);
                    l ||
                      ((this.navigated = !0), this.resetStateAndUrl(n.currentRouterState, n.currentUrlTree, n.rawUrl));
                    const r = new kn(n.id, this.serializeUrl(n.extractedUrl), t.message);
                    e.next(r), n.resolve(!1), l && this.navigateByUrl(t.url);
                  } else {
                    this.resetStateAndUrl(n.currentRouterState, n.currentUrlTree, n.rawUrl);
                    const l = new Sn(n.id, this.serializeUrl(n.extractedUrl), t);
                    e.next(l);
                    try {
                      n.resolve(this.errorHandler(t));
                    } catch (r) {
                      n.reject(r);
                    }
                  }
                  return C;
                })
              );
            })
          );
        }
        resetRootComponentType(n) {
          (this.rootComponentType = n), (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const n = this.transitions.value;
          return (n.urlAfterRedirects = this.browserUrlTree), n;
        }
        setTransition(n) {
          this.transitions.next(Object.assign({}, this.getTransition(), n));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(n => {
              let e = this.parseUrl(n.url);
              const t = 'popstate' === n.type ? 'popstate' : 'hashchange',
                l = n.state && n.state.navigationId ? n.state : null;
              setTimeout(() => {
                this.scheduleNavigation(e, t, l, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(n) {
          this.events.next(n);
        }
        resetConfig(n) {
          Wn(n), (this.config = n.map(Qn)), (this.navigated = !1), (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
        }
        createUrlTree(n, e = {}) {
          const {
            relativeTo: t,
            queryParams: r,
            fragment: s,
            preserveQueryParams: i,
            queryParamsHandling: o,
            preserveFragment: u
          } = e;
          Object(l.U)() &&
            i &&
            console &&
            console.warn &&
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          const a = t || this.routerState.root,
            c = u ? this.currentUrlTree.fragment : s;
          let d = null;
          if (o)
            switch (o) {
              case 'merge':
                d = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case 'preserve':
                d = this.currentUrlTree.queryParams;
                break;
              default:
                d = r || null;
            }
          else d = i ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== d && (d = this.removeEmptyProps(d)),
            (function(n, e, t, l, r) {
              if (0 === t.length) return Ve(e.root, e.root, e, l, r);
              const s = (function(n) {
                if ('string' == typeof n[0] && 1 === n.length && '/' === n[0]) return new Le(!0, 0, n);
                let e = 0,
                  t = !1;
                const l = n.reduce((n, l, r) => {
                  if ('object' == typeof l && null != l) {
                    if (l.outlets) {
                      const e = {};
                      return (
                        ne(l.outlets, (n, t) => {
                          e[t] = 'string' == typeof n ? n.split('/') : n;
                        }),
                        [...n, { outlets: e }]
                      );
                    }
                    if (l.segmentPath) return [...n, l.segmentPath];
                  }
                  return 'string' != typeof l
                    ? [...n, l]
                    : 0 === r
                    ? (l.split('/').forEach((l, r) => {
                        (0 == r && '.' === l) ||
                          (0 == r && '' === l ? (t = !0) : '..' === l ? e++ : '' != l && n.push(l));
                      }),
                      n)
                    : [...n, l];
                }, []);
                return new Le(t, e, l);
              })(t);
              if (s.toRoot()) return Ve(e.root, new re([], {}), e, l, r);
              const i = (function(n, e, t) {
                  if (n.isAbsolute) return new Ue(e.root, !0, 0);
                  if (-1 === t.snapshot._lastPathIndex) return new Ue(t.snapshot._urlSegment, !0, 0);
                  const l = je(n.commands[0]) ? 0 : 1;
                  return (function(n, e, t) {
                    let l = n,
                      r = e,
                      s = t;
                    for (; s > r; ) {
                      if (((s -= r), !(l = l.parent))) throw new Error("Invalid number of '../'");
                      r = l.segments.length;
                    }
                    return new Ue(l, !1, r - s);
                  })(t.snapshot._urlSegment, t.snapshot._lastPathIndex + l, n.numberOfDoubleDots);
                })(s, e, n),
                o = i.processChildren
                  ? ze(i.segmentGroup, i.index, s.commands)
                  : He(i.segmentGroup, i.index, s.commands);
              return Ve(i.segmentGroup, o, e, l, r);
            })(a, this.currentUrlTree, n, d, c)
          );
        }
        navigateByUrl(n, e = { skipLocationChange: !1 }) {
          Object(l.U)() &&
            this.isNgZoneEnabled &&
            !l.y.isInAngularZone() &&
            this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
          const t = Xe(n) ? n : this.parseUrl(n),
            r = this.urlHandlingStrategy.merge(t, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, e);
        }
        navigate(n, e = { skipLocationChange: !1 }) {
          return (
            (function(n) {
              for (let e = 0; e < n.length; e++) {
                const t = n[e];
                if (null == t) throw new Error(`The requested path contains ${t} segment at index ${e}`);
              }
            })(n),
            this.navigateByUrl(this.createUrlTree(n, e), e)
          );
        }
        serializeUrl(n) {
          return this.urlSerializer.serialize(n);
        }
        parseUrl(n) {
          let e;
          try {
            e = this.urlSerializer.parse(n);
          } catch (t) {
            e = this.malformedUriErrorHandler(t, this.urlSerializer, n);
          }
          return e;
        }
        isActive(n, e) {
          if (Xe(n)) return te(this.currentUrlTree, n, e);
          const t = this.parseUrl(n);
          return te(this.currentUrlTree, t, e);
        }
        removeEmptyProps(n) {
          return Object.keys(n).reduce((e, t) => {
            const l = n[t];
            return null != l && (e[t] = l), e;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            n => {
              (this.navigated = !0),
                (this.lastSuccessfulId = n.id),
                this.events.next(
                  new On(n.id, this.serializeUrl(n.extractedUrl), this.serializeUrl(this.currentUrlTree))
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                n.resolve(!0);
            },
            n => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(n, e, t, l) {
          const r = this.getTransition();
          if (r && 'imperative' !== e && 'imperative' === r.source && r.rawUrl.toString() === n.toString())
            return Promise.resolve(!0);
          if (r && 'hashchange' == e && 'popstate' === r.source && r.rawUrl.toString() === n.toString())
            return Promise.resolve(!0);
          if (r && 'popstate' == e && 'hashchange' === r.source && r.rawUrl.toString() === n.toString())
            return Promise.resolve(!0);
          let s = null,
            i = null;
          const o = new Promise((n, e) => {
              (s = n), (i = e);
            }),
            u = ++this.navigationId;
          return (
            this.setTransition({
              id: u,
              source: e,
              restoredState: t,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: n,
              extras: l,
              resolve: s,
              reject: i,
              promise: o,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            o.catch(n => Promise.reject(n))
          );
        }
        setBrowserUrl(n, e, t, l) {
          const r = this.urlSerializer.serialize(n);
          (l = l || {}),
            this.location.isCurrentPathEqualTo(r) || e
              ? this.location.replaceState(r, '', Object.assign({}, l, { navigationId: t }))
              : this.location.go(r, '', Object.assign({}, l, { navigationId: t }));
        }
        resetStateAndUrl(n, e, t) {
          (this.routerState = n),
            (this.currentUrlTree = e),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t)),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
            navigationId: this.lastSuccessfulId
          });
        }
      }
      let Ft = (() =>
          class {
            constructor(n, e, t, l, r) {
              (this.router = n),
                (this.route = e),
                (this.commands = []),
                null == t && l.setAttribute(r.nativeElement, 'tabindex', '0');
            }
            set routerLink(n) {
              this.commands = null != n ? (Array.isArray(n) ? n : [n]) : [];
            }
            set preserveQueryParams(n) {
              Object(l.U)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.'),
                (this.preserve = n);
            }
            onClick() {
              const n = { skipLocationChange: zt(this.skipLocationChange), replaceUrl: zt(this.replaceUrl) };
              return this.router.navigateByUrl(this.urlTree, n), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: zt(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: zt(this.preserveFragment)
              });
            }
          })(),
        Ht = (() =>
          class {
            constructor(n, e, t) {
              (this.router = n),
                (this.route = e),
                (this.locationStrategy = t),
                (this.commands = []),
                (this.subscription = n.events.subscribe(n => {
                  n instanceof On && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(n) {
              this.commands = null != n ? (Array.isArray(n) ? n : [n]) : [];
            }
            set preserveQueryParams(n) {
              Object(l.U)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.'),
                (this.preserve = n);
            }
            ngOnChanges(n) {
              this.updateTargetUrlAndHref();
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(n, e, t, l) {
              if (0 !== n || e || t || l) return !0;
              if ('string' == typeof this.target && '_self' != this.target) return !0;
              const r = {
                skipLocationChange: zt(this.skipLocationChange),
                replaceUrl: zt(this.replaceUrl),
                state: this.state
              };
              return this.router.navigateByUrl(this.urlTree, r), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: zt(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: zt(this.preserveFragment)
              });
            }
          })();
      function zt(n) {
        return '' === n || !!n;
      }
      let $t = (() =>
        class {
          constructor(n, e, t, l, r) {
            (this.router = n),
              (this.element = e),
              (this.renderer = t),
              (this.link = l),
              (this.linkWithHref = r),
              (this.classes = []),
              (this.isActive = !1),
              (this.routerLinkActiveOptions = { exact: !1 }),
              (this.subscription = n.events.subscribe(n => {
                n instanceof On && this.update();
              }));
          }
          ngAfterContentInit() {
            this.links.changes.subscribe(n => this.update()),
              this.linksWithHrefs.changes.subscribe(n => this.update()),
              this.update();
          }
          set routerLinkActive(n) {
            const e = Array.isArray(n) ? n : n.split(' ');
            this.classes = e.filter(n => !!n);
          }
          ngOnChanges(n) {
            this.update();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          update() {
            this.links &&
              this.linksWithHrefs &&
              this.router.navigated &&
              Promise.resolve().then(() => {
                const n = this.hasActiveLinks();
                this.isActive !== n &&
                  ((this.isActive = n),
                  this.classes.forEach(e => {
                    n
                      ? this.renderer.addClass(this.element.nativeElement, e)
                      : this.renderer.removeClass(this.element.nativeElement, e);
                  }));
              });
          }
          isLinkActive(n) {
            return e => n.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
          }
          hasActiveLinks() {
            const n = this.isLinkActive(this.router);
            return (
              (this.link && n(this.link)) ||
              (this.linkWithHref && n(this.linkWithHref)) ||
              this.links.some(n) ||
              this.linksWithHrefs.some(n)
            );
          }
        })();
      class Bt {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Wt()),
            (this.attachRef = null);
        }
      }
      class Wt {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(n, e) {
          const t = this.getOrCreateContext(n);
          (t.outlet = e), this.contexts.set(n, t);
        }
        onChildOutletDestroyed(n) {
          const e = this.getContext(n);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const n = this.contexts;
          return (this.contexts = new Map()), n;
        }
        onOutletReAttached(n) {
          this.contexts = n;
        }
        getOrCreateContext(n) {
          let e = this.getContext(n);
          return e || ((e = new Bt()), this.contexts.set(n, e)), e;
        }
        getContext(n) {
          return this.contexts.get(n) || null;
        }
      }
      let Gt = (() =>
        class {
          constructor(n, e, t, r, s) {
            (this.parentContexts = n),
              (this.location = e),
              (this.resolver = t),
              (this.changeDetector = s),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new l.m()),
              (this.deactivateEvents = new l.m()),
              (this.name = r || Ln),
              n.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const n = this.parentContexts.getContext(this.name);
              n &&
                n.route &&
                (n.attachRef ? this.attach(n.attachRef, n.route) : this.activateWith(n.route, n.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            const n = this.activated;
            return (this.activated = null), (this._activatedRoute = null), n;
          }
          attach(n, e) {
            (this.activated = n), (this._activatedRoute = e), this.location.insert(n.hostView);
          }
          deactivate() {
            if (this.activated) {
              const n = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(n);
            }
          }
          activateWith(n, e) {
            if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = n;
            const t = (e = e || this.resolver).resolveComponentFactory(n._futureSnapshot.routeConfig.component),
              l = this.parentContexts.getOrCreateContext(this.name).children,
              r = new Zt(n, l, this.location.injector);
            (this.activated = this.location.createComponent(t, this.location.length, r)),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        })();
      class Zt {
        constructor(n, e, t) {
          (this.route = n), (this.childContexts = e), (this.parent = t);
        }
        get(n, e) {
          return n === Ee ? this.route : n === Wt ? this.childContexts : this.parent.get(n, e);
        }
      }
      class Qt {}
      class Jt {
        preload(n, e) {
          return e().pipe(B(() => a(null)));
        }
      }
      class Yt {
        preload(n, e) {
          return a(null);
        }
      }
      let Xt = (() =>
        class {
          constructor(n, e, t, l, r) {
            (this.router = n),
              (this.injector = l),
              (this.preloadingStrategy = r),
              (this.loader = new qt(
                e,
                t,
                e => n.triggerEvent(new Dn(e)),
                e => n.triggerEvent(new Tn(e))
              ));
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                K(n => n instanceof On),
                cn(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            const n = this.injector.get(l.w);
            return this.processRoutes(n, this.router.config);
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          processRoutes(n, e) {
            const t = [];
            for (const l of e)
              if (l.loadChildren && !l.canLoad && l._loadedConfig) {
                const n = l._loadedConfig;
                t.push(this.processRoutes(n.module, n.routes));
              } else
                l.loadChildren && !l.canLoad
                  ? t.push(this.preloadConfig(n, l))
                  : l.children && t.push(this.processRoutes(n, l.children));
            return Object(c.a)(t).pipe(
              Object(S.a)(),
              Object(k.a)(n => void 0)
            );
          }
          preloadConfig(n, e) {
            return this.preloadingStrategy.preload(e, () =>
              this.loader
                .load(n.injector, e)
                .pipe(Object(X.a)(n => ((e._loadedConfig = n), this.processRoutes(n.module, n.routes))))
            );
          }
        })();
      class nl {
        constructor(n, e, t = {}) {
          (this.router = n),
            (this.viewportScroller = e),
            (this.options = t),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (t.scrollPositionRestoration = t.scrollPositionRestoration || 'disabled'),
            (t.anchorScrolling = t.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe(n => {
            n instanceof xn
              ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = n.navigationTrigger),
                (this.restoredId = n.restoredState ? n.restoredState.navigationId : 0))
              : n instanceof On &&
                ((this.lastId = n.id), this.scheduleScrollEvent(n, this.router.parseUrl(n.urlAfterRedirects).fragment));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(n => {
            n instanceof jn &&
              (n.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(n.position)
                : n.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(n.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(n, e) {
          this.router.triggerEvent(new jn(n, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e));
        }
        ngOnDestroy() {
          this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
        }
      }
      const el = new l.p('ROUTER_CONFIGURATION'),
        tl = new l.p('ROUTER_FORROOT_GUARD'),
        ll = [
          s.g,
          { provide: ue, useClass: ae },
          {
            provide: Ut,
            useFactory: cl,
            deps: [l.g, ue, Wt, s.g, l.q, l.v, l.i, It, el, [Nt, new l.z()], [Dt, new l.z()]]
          },
          Wt,
          { provide: Ee, useFactory: dl, deps: [Ut] },
          { provide: l.v, useClass: l.I },
          Xt,
          Yt,
          Jt,
          { provide: el, useValue: { enableTracing: !1 } }
        ];
      function rl() {
        return new l.x('Router', Ut);
      }
      let sl = (() => {
        class n {
          constructor(n, e) {}
          static forRoot(e, t) {
            return {
              ngModule: n,
              providers: [
                ll,
                al(e),
                { provide: tl, useFactory: ul, deps: [[Ut, new l.z(), new l.H()]] },
                { provide: el, useValue: t || {} },
                { provide: s.h, useFactory: ol, deps: [s.p, [new l.o(s.a), new l.z()], el] },
                { provide: nl, useFactory: il, deps: [Ut, s.r, el] },
                { provide: Qt, useExisting: t && t.preloadingStrategy ? t.preloadingStrategy : Yt },
                { provide: l.x, multi: !0, useFactory: rl },
                [
                  hl,
                  { provide: l.d, multi: !0, useFactory: pl, deps: [hl] },
                  { provide: gl, useFactory: bl, deps: [hl] },
                  { provide: l.b, multi: !0, useExisting: gl }
                ]
              ]
            };
          }
          static forChild(e) {
            return { ngModule: n, providers: [al(e)] };
          }
        }
        return n;
      })();
      function il(n, e, t) {
        return t.scrollOffset && e.setOffset(t.scrollOffset), new nl(n, e, t);
      }
      function ol(n, e, t = {}) {
        return t.useHash ? new s.e(n, e) : new s.o(n, e);
      }
      function ul(n) {
        if (n)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function al(n) {
        return [
          { provide: l.a, multi: !0, useValue: n },
          { provide: It, multi: !0, useValue: n }
        ];
      }
      function cl(n, e, t, l, r, s, i, o, u = {}, a, c) {
        const d = new Ut(null, e, t, l, r, s, i, Yn(o));
        if (
          (a && (d.urlHandlingStrategy = a),
          c && (d.routeReuseStrategy = c),
          u.errorHandler && (d.errorHandler = u.errorHandler),
          u.malformedUriErrorHandler && (d.malformedUriErrorHandler = u.malformedUriErrorHandler),
          u.enableTracing)
        ) {
          const n = Object(wn.s)();
          d.events.subscribe(e => {
            n.logGroup(`Router Event: ${e.constructor.name}`), n.log(e.toString()), n.log(e), n.logGroupEnd();
          });
        }
        return (
          u.onSameUrlNavigation && (d.onSameUrlNavigation = u.onSameUrlNavigation),
          u.paramsInheritanceStrategy && (d.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
          u.urlUpdateStrategy && (d.urlUpdateStrategy = u.urlUpdateStrategy),
          u.relativeLinkResolution && (d.relativeLinkResolution = u.relativeLinkResolution),
          d
        );
      }
      function dl(n) {
        return n.routerState.root;
      }
      let hl = (() =>
        class {
          constructor(n) {
            (this.injector = n), (this.initNavigation = !1), (this.resultOfPreactivationDone = new d.a());
          }
          appInitializer() {
            return this.injector.get(s.f, Promise.resolve(null)).then(() => {
              let n = null;
              const e = new Promise(e => (n = e)),
                t = this.injector.get(Ut),
                l = this.injector.get(el);
              if (this.isLegacyDisabled(l) || this.isLegacyEnabled(l)) n(!0);
              else if ('disabled' === l.initialNavigation) t.setUpLocationChangeListener(), n(!0);
              else {
                if ('enabled' !== l.initialNavigation)
                  throw new Error(`Invalid initialNavigation options: '${l.initialNavigation}'`);
                (t.hooks.afterPreactivation = () =>
                  this.initNavigation ? a(null) : ((this.initNavigation = !0), n(!0), this.resultOfPreactivationDone)),
                  t.initialNavigation();
              }
              return e;
            });
          }
          bootstrapListener(n) {
            const e = this.injector.get(el),
              t = this.injector.get(Xt),
              r = this.injector.get(nl),
              s = this.injector.get(Ut),
              i = this.injector.get(l.g);
            n === i.components[0] &&
              (this.isLegacyEnabled(e)
                ? s.initialNavigation()
                : this.isLegacyDisabled(e) && s.setUpLocationChangeListener(),
              t.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(n) {
            return (
              'legacy_enabled' === n.initialNavigation || !0 === n.initialNavigation || void 0 === n.initialNavigation
            );
          }
          isLegacyDisabled(n) {
            return 'legacy_disabled' === n.initialNavigation || !1 === n.initialNavigation;
          }
        })();
      function pl(n) {
        return n.appInitializer.bind(n);
      }
      function bl(n) {
        return n.bootstrapListener.bind(n);
      }
      const gl = new l.p('Router Initializer');
      var fl = t('VRyK'),
        ml = t('AytR');
      class vl {
        constructor(n) {
          if (n) throw new Error(`${n} has already been loaded. Import Core module in the AppModule only.`);
        }
      }
      const _l = 'credentials';
      let yl = (() => {
          class n {
            constructor() {
              this._credentials = null;
              const n = sessionStorage.getItem(_l) || localStorage.getItem(_l);
              n && (this._credentials = JSON.parse(n));
            }
            isAuthenticated() {
              return !!this.credentials;
            }
            get credentials() {
              return this._credentials;
            }
            setCredentials(n, e) {
              (this._credentials = n || null),
                n
                  ? (e ? localStorage : sessionStorage).setItem(_l, JSON.stringify(n))
                  : (sessionStorage.removeItem(_l), localStorage.removeItem(_l));
            }
          }
          return (
            (n.ngInjectableDef = l.Qb({
              factory: function() {
                return new n();
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        wl = (() => {
          class n {
            constructor(n) {
              this.credentialsService = n;
            }
            login(n) {
              const e = { username: n.useremail, token: '123456' };
              return this.credentialsService.setCredentials(e, n.remember), a(e);
            }
            logout() {
              return this.credentialsService.setCredentials(), a(!0);
            }
          }
          return (
            (n.ngInjectableDef = l.Qb({
              factory: function() {
                return new n(l.Rb(yl));
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })();
      var Cl = (function(n) {
        return (
          (n[(n.Off = 0)] = 'Off'),
          (n[(n.Error = 1)] = 'Error'),
          (n[(n.Warning = 2)] = 'Warning'),
          (n[(n.Info = 3)] = 'Info'),
          (n[(n.Debug = 4)] = 'Debug'),
          n
        );
      })({});
      let xl = (() => {
        class n {
          constructor(n) {
            this.source = n;
          }
          static enableProductionMode() {
            n.level = Cl.Warning;
          }
          debug(...n) {
            this.log(console.log, Cl.Debug, n);
          }
          info(...n) {
            this.log(console.info, Cl.Info, n);
          }
          warn(...n) {
            this.log(console.warn, Cl.Warning, n);
          }
          error(...n) {
            this.log(console.error, Cl.Error, n);
          }
          log(e, t, l) {
            if (t <= n.level) {
              const r = this.source ? ['[' + this.source + ']'].concat(l) : l;
              e.apply(console, r), n.outputs.forEach(n => n.apply(n, [this.source, t, ...l]));
            }
          }
        }
        return (n.level = Cl.Debug), (n.outputs = []), n;
      })();
      const Ol = new xl('AuthenticationGuard');
      let kl = (() => {
        class n {
          constructor(n, e) {
            (this.router = n), (this.credentialsService = e);
          }
          canActivate(n, e) {
            return (
              !!this.credentialsService.isAuthenticated() ||
              (Ol.debug('Not authenticated, redirecting and adding redirect url...'),
              this.router.navigate(['/login'], { queryParams: { redirect: e.url }, replaceUrl: !0 }),
              !1)
            );
          }
        }
        return (
          (n.ngInjectableDef = l.Qb({
            factory: function() {
              return new n(l.Rb(Ut), l.Rb(yl));
            },
            token: n,
            providedIn: 'root'
          })),
          n
        );
      })();
      var Sl = t('A/Ql'),
        Ml = t('4odN'),
        Pl = t('w1tV');
      function Kl(n, e, t) {
        return 0 === t ? [e] : (n.push(e), n);
      }
      class El {}
      let Al = (() =>
        class extends El {
          getTranslation(n) {
            return a({});
          }
        })();
      class Dl {}
      let Tl = (() =>
        class {
          handle(n) {
            return n.key;
          }
        })();
      class Il {}
      let ql = (() =>
        class extends Il {
          compile(n, e) {
            return n;
          }
          compileTranslations(n, e) {
            return n;
          }
        })();
      function Nl(n) {
        return null != n;
      }
      function Rl(n) {
        return n && 'object' == typeof n && !Array.isArray(n);
      }
      class jl {}
      let Vl = (() =>
        class extends jl {
          constructor() {
            super(...arguments), (this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g);
          }
          interpolate(n, e) {
            return 'string' == typeof n
              ? this.interpolateString(n, e)
              : 'function' == typeof n
              ? this.interpolateFunction(n, e)
              : n;
          }
          getValue(n, e) {
            let t = e.split('.');
            e = '';
            do {
              (e += t.shift()),
                !Nl(n) || !Nl(n[e]) || ('object' != typeof n[e] && t.length)
                  ? t.length
                    ? (e += '.')
                    : (n = void 0)
                  : ((n = n[e]), (e = ''));
            } while (t.length);
            return n;
          }
          interpolateFunction(n, e) {
            return n(e);
          }
          interpolateString(n, e) {
            return e
              ? n.replace(this.templateMatcher, (n, t) => {
                  let l = this.getValue(e, t);
                  return Nl(l) ? l : n;
                })
              : n;
          }
        })();
      class Ll {
        constructor() {
          (this.currentLang = this.defaultLang),
            (this.translations = {}),
            (this.langs = []),
            (this.onTranslationChange = new l.m()),
            (this.onLangChange = new l.m()),
            (this.onDefaultLangChange = new l.m());
        }
      }
      const Ul = new l.p('USE_STORE'),
        Fl = new l.p('USE_DEFAULT_LANG');
      let Hl = (() =>
          class {
            constructor(n, e, t, r, s, i = !0, o = !1) {
              (this.store = n),
                (this.currentLoader = e),
                (this.compiler = t),
                (this.parser = r),
                (this.missingTranslationHandler = s),
                (this.useDefaultLang = i),
                (this.isolate = o),
                (this.pending = !1),
                (this._onTranslationChange = new l.m()),
                (this._onLangChange = new l.m()),
                (this._onDefaultLangChange = new l.m()),
                (this._langs = []),
                (this._translations = {}),
                (this._translationRequests = {});
            }
            get onTranslationChange() {
              return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
            }
            get onLangChange() {
              return this.isolate ? this._onLangChange : this.store.onLangChange;
            }
            get onDefaultLangChange() {
              return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
            }
            get defaultLang() {
              return this.isolate ? this._defaultLang : this.store.defaultLang;
            }
            set defaultLang(n) {
              this.isolate ? (this._defaultLang = n) : (this.store.defaultLang = n);
            }
            get currentLang() {
              return this.isolate ? this._currentLang : this.store.currentLang;
            }
            set currentLang(n) {
              this.isolate ? (this._currentLang = n) : (this.store.currentLang = n);
            }
            get langs() {
              return this.isolate ? this._langs : this.store.langs;
            }
            set langs(n) {
              this.isolate ? (this._langs = n) : (this.store.langs = n);
            }
            get translations() {
              return this.isolate ? this._translations : this.store.translations;
            }
            set translations(n) {
              this.isolate ? (this._translations = n) : (this.store.translations = n);
            }
            setDefaultLang(n) {
              if (n === this.defaultLang) return;
              let e = this.retrieveTranslations(n);
              void 0 !== e
                ? (this.defaultLang || (this.defaultLang = n),
                  e.pipe(Z(1)).subscribe(e => {
                    this.changeDefaultLang(n);
                  }))
                : this.changeDefaultLang(n);
            }
            getDefaultLang() {
              return this.defaultLang;
            }
            use(n) {
              if (n === this.currentLang) return a(this.translations[n]);
              let e = this.retrieveTranslations(n);
              return void 0 !== e
                ? (this.currentLang || (this.currentLang = n),
                  e.pipe(Z(1)).subscribe(e => {
                    this.changeLang(n);
                  }),
                  e)
                : (this.changeLang(n), a(this.translations[n]));
            }
            retrieveTranslations(n) {
              let e;
              return (
                void 0 === this.translations[n] &&
                  ((this._translationRequests[n] = this._translationRequests[n] || this.getTranslation(n)),
                  (e = this._translationRequests[n])),
                e
              );
            }
            getTranslation(n) {
              this.pending = !0;
              const e = this.currentLoader.getTranslation(n).pipe(Object(Pl.a)());
              return (
                (this.loadingTranslations = e.pipe(
                  Z(1),
                  Object(k.a)(e => this.compiler.compileTranslations(e, n)),
                  Object(Pl.a)()
                )),
                this.loadingTranslations.subscribe(
                  e => {
                    (this.translations[n] = e), this.updateLangs(), (this.pending = !1);
                  },
                  n => {
                    this.pending = !1;
                  }
                ),
                e
              );
            }
            setTranslation(n, e, t = !1) {
              (e = this.compiler.compileTranslations(e, n)),
                (this.translations[n] =
                  t && this.translations[n]
                    ? (function n(e, t) {
                        let l = Object.assign({}, e);
                        return (
                          Rl(e) &&
                            Rl(t) &&
                            Object.keys(t).forEach(r => {
                              Rl(t[r]) && r in e ? (l[r] = n(e[r], t[r])) : Object.assign(l, { [r]: t[r] });
                            }),
                          l
                        );
                      })(this.translations[n], e)
                    : e),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: n, translations: this.translations[n] });
            }
            getLangs() {
              return this.langs;
            }
            addLangs(n) {
              n.forEach(n => {
                -1 === this.langs.indexOf(n) && this.langs.push(n);
              });
            }
            updateLangs() {
              this.addLangs(Object.keys(this.translations));
            }
            getParsedResult(n, e, t) {
              let l;
              if (e instanceof Array) {
                let l = {},
                  r = !1;
                for (let s of e)
                  (l[s] = this.getParsedResult(n, s, t)), 'function' == typeof l[s].subscribe && (r = !0);
                if (r) {
                  let n;
                  for (let t of e) {
                    let e = 'function' == typeof l[t].subscribe ? l[t] : a(l[t]);
                    n = void 0 === n ? e : Object(fl.a)(n, e);
                  }
                  return n.pipe(
                    hn(Kl, []),
                    Object(k.a)(n => {
                      let t = {};
                      return (
                        n.forEach((n, l) => {
                          t[e[l]] = n;
                        }),
                        t
                      );
                    })
                  );
                }
                return l;
              }
              if (
                (n && (l = this.parser.interpolate(this.parser.getValue(n, e), t)),
                void 0 === l &&
                  this.defaultLang &&
                  this.defaultLang !== this.currentLang &&
                  this.useDefaultLang &&
                  (l = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], e), t)),
                void 0 === l)
              ) {
                let n = { key: e, translateService: this };
                void 0 !== t && (n.interpolateParams = t), (l = this.missingTranslationHandler.handle(n));
              }
              return void 0 !== l ? l : e;
            }
            get(n, e) {
              if (!Nl(n) || !n.length) throw new Error('Parameter "key" required');
              if (this.pending)
                return b.a.create(t => {
                  let l = n => {
                      t.next(n), t.complete();
                    },
                    r = n => {
                      t.error(n);
                    };
                  this.loadingTranslations.subscribe(t => {
                    'function' == typeof (t = this.getParsedResult(t, n, e)).subscribe ? t.subscribe(l, r) : l(t);
                  }, r);
                });
              {
                let t = this.getParsedResult(this.translations[this.currentLang], n, e);
                return 'function' == typeof t.subscribe ? t : a(t);
              }
            }
            stream(n, e) {
              if (!Nl(n) || !n.length) throw new Error('Parameter "key" required');
              return sn(
                this.get(n, e),
                this.onLangChange.pipe(
                  tn(t => {
                    const l = this.getParsedResult(t.translations, n, e);
                    return 'function' == typeof l.subscribe ? l : a(l);
                  })
                )
              );
            }
            instant(n, e) {
              if (!Nl(n) || !n.length) throw new Error('Parameter "key" required');
              let t = this.getParsedResult(this.translations[this.currentLang], n, e);
              if (void 0 !== t.subscribe) {
                if (n instanceof Array) {
                  let e = {};
                  return (
                    n.forEach((t, l) => {
                      e[n[l]] = n[l];
                    }),
                    e
                  );
                }
                return n;
              }
              return t;
            }
            set(n, e, t = this.currentLang) {
              (this.translations[t][n] = this.compiler.compile(e, t)),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: t, translations: this.translations[t] });
            }
            changeLang(n) {
              (this.currentLang = n),
                this.onLangChange.emit({ lang: n, translations: this.translations[n] }),
                this.defaultLang || this.changeDefaultLang(n);
            }
            changeDefaultLang(n) {
              (this.defaultLang = n), this.onDefaultLangChange.emit({ lang: n, translations: this.translations[n] });
            }
            reloadLang(n) {
              return this.resetLang(n), this.getTranslation(n);
            }
            resetLang(n) {
              (this._translationRequests[n] = void 0), (this.translations[n] = void 0);
            }
            getBrowserLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let n = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                -1 !==
                  (n =
                    n ||
                    window.navigator.language ||
                    window.navigator.browserLanguage ||
                    window.navigator.userLanguage).indexOf('-') && (n = n.split('-')[0]),
                -1 !== n.indexOf('_') && (n = n.split('_')[0]),
                n
              );
            }
            getBrowserCultureLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              return (
                (window.navigator.languages ? window.navigator.languages[0] : null) ||
                window.navigator.language ||
                window.navigator.browserLanguage ||
                window.navigator.userLanguage
              );
            }
          })(),
        zl = (() =>
          class {
            constructor(n, e, t) {
              (this.translateService = n),
                (this.element = e),
                (this._ref = t),
                this.onTranslationChangeSub ||
                  (this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(n => {
                    n.lang === this.translateService.currentLang && this.checkNodes(!0, n.translations);
                  })),
                this.onLangChangeSub ||
                  (this.onLangChangeSub = this.translateService.onLangChange.subscribe(n => {
                    this.checkNodes(!0, n.translations);
                  })),
                this.onDefaultLangChangeSub ||
                  (this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(n => {
                    this.checkNodes(!0);
                  }));
            }
            set translate(n) {
              n && ((this.key = n), this.checkNodes());
            }
            set translateParams(n) {
              (function n(e, t) {
                if (e === t) return !0;
                if (null === e || null === t) return !1;
                if (e != e && t != t) return !0;
                let l,
                  r,
                  s,
                  i = typeof e;
                if (i == typeof t && 'object' == i) {
                  if (!Array.isArray(e)) {
                    if (Array.isArray(t)) return !1;
                    for (r in ((s = Object.create(null)), e)) {
                      if (!n(e[r], t[r])) return !1;
                      s[r] = !0;
                    }
                    for (r in t) if (!(r in s) && void 0 !== t[r]) return !1;
                    return !0;
                  }
                  if (!Array.isArray(t)) return !1;
                  if ((l = e.length) == t.length) {
                    for (r = 0; r < l; r++) if (!n(e[r], t[r])) return !1;
                    return !0;
                  }
                }
                return !1;
              })(this.currentParams, n) || ((this.currentParams = n), this.checkNodes(!0));
            }
            ngAfterViewChecked() {
              this.checkNodes();
            }
            checkNodes(n = !1, e) {
              let t = this.element.nativeElement.childNodes;
              t.length ||
                (this.setContent(this.element.nativeElement, this.key), (t = this.element.nativeElement.childNodes));
              for (let l = 0; l < t.length; ++l) {
                let r = t[l];
                if (3 === r.nodeType) {
                  let t;
                  if (this.key) (t = this.key), n && (r.lastKey = null);
                  else {
                    let e = this.getContent(r),
                      l = e.trim();
                    l.length &&
                      (e !== r.currentValue
                        ? ((t = l), (r.originalContent = this.getContent(r)))
                        : r.originalContent && n && ((r.lastKey = null), (t = r.originalContent.trim())));
                  }
                  this.updateValue(t, r, e);
                }
              }
            }
            updateValue(n, e, t) {
              if (n) {
                if (e.lastKey === n && this.lastParams === this.currentParams) return;
                this.lastParams = this.currentParams;
                let l = t => {
                  t !== n && (e.lastKey = n),
                    e.originalContent || (e.originalContent = this.getContent(e)),
                    (e.currentValue = Nl(t) ? t : e.originalContent || n),
                    this.setContent(e, this.key ? e.currentValue : e.originalContent.replace(n, e.currentValue)),
                    this._ref.markForCheck();
                };
                if (Nl(t)) {
                  let e = this.translateService.getParsedResult(t, n, this.currentParams);
                  'function' == typeof e.subscribe ? e.subscribe(l) : l(e);
                } else this.translateService.get(n, this.currentParams).subscribe(l);
              }
            }
            getContent(n) {
              return Nl(n.textContent) ? n.textContent : n.data;
            }
            setContent(n, e) {
              Nl(n.textContent) ? (n.textContent = e) : (n.data = e);
            }
            ngOnDestroy() {
              this.onLangChangeSub && this.onLangChangeSub.unsubscribe(),
                this.onDefaultLangChangeSub && this.onDefaultLangChangeSub.unsubscribe(),
                this.onTranslationChangeSub && this.onTranslationChangeSub.unsubscribe();
            }
          })(),
        $l = (() => {
          class n {
            static forRoot(e = {}) {
              return {
                ngModule: n,
                providers: [
                  e.loader || { provide: El, useClass: Al },
                  e.compiler || { provide: Il, useClass: ql },
                  e.parser || { provide: jl, useClass: Vl },
                  e.missingTranslationHandler || { provide: Dl, useClass: Tl },
                  Ll,
                  { provide: Ul, useValue: e.isolate },
                  { provide: Fl, useValue: e.useDefaultLang },
                  Hl
                ]
              };
            }
            static forChild(e = {}) {
              return {
                ngModule: n,
                providers: [
                  e.loader || { provide: El, useClass: Al },
                  e.compiler || { provide: Il, useClass: ql },
                  e.parser || { provide: jl, useClass: Vl },
                  e.missingTranslationHandler || { provide: Dl, useClass: Tl },
                  { provide: Ul, useValue: e.isolate },
                  { provide: Fl, useValue: e.useDefaultLang },
                  Hl
                ]
              };
            }
          }
          return n;
        })();
      const Bl = new xl('I18nService'),
        Wl = 'language';
      function Gl(n) {
        return n;
      }
      let Zl = (() => {
        class n {
          constructor(n) {
            (this.translateService = n), n.setTranslation('en-US', Sl), n.setTranslation('fr-FR', Ml);
          }
          init(n, e) {
            (this.defaultLanguage = n),
              (this.supportedLanguages = e),
              (this.language = ''),
              (this.langChangeSubscription = this.translateService.onLangChange.subscribe(n => {
                localStorage.setItem(Wl, n.lang);
              }));
          }
          destroy() {
            this.langChangeSubscription && this.langChangeSubscription.unsubscribe();
          }
          set language(n) {
            n = n || localStorage.getItem(Wl) || this.translateService.getBrowserCultureLang();
            let e = this.supportedLanguages.includes(n);
            n &&
              !e &&
              ((n = n.split('-')[0]), (n = this.supportedLanguages.find(e => e.startsWith(n)) || ''), (e = Boolean(n))),
              e || (n = this.defaultLanguage),
              Bl.debug(`Language set to ${n}`),
              this.translateService.use(n);
          }
          get language() {
            return this.translateService.currentLang;
          }
        }
        return (
          (n.ngInjectableDef = l.Qb({
            factory: function() {
              return new n(l.Rb(Hl));
            },
            token: n,
            providedIn: 'root'
          })),
          n
        );
      })();
      class Ql {}
      class Jl {}
      class Yl {
        constructor(n) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            n
              ? (this.lazyInit =
                  'string' == typeof n
                    ? () => {
                        (this.headers = new Map()),
                          n.split('\n').forEach(n => {
                            const e = n.indexOf(':');
                            if (e > 0) {
                              const t = n.slice(0, e),
                                l = t.toLowerCase(),
                                r = n.slice(e + 1).trim();
                              this.maybeSetNormalizedName(t, l),
                                this.headers.has(l) ? this.headers.get(l).push(r) : this.headers.set(l, [r]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(n).forEach(e => {
                            let t = n[e];
                            const l = e.toLowerCase();
                            'string' == typeof t && (t = [t]),
                              t.length > 0 && (this.headers.set(l, t), this.maybeSetNormalizedName(e, l));
                          });
                      })
              : (this.headers = new Map());
        }
        has(n) {
          return this.init(), this.headers.has(n.toLowerCase());
        }
        get(n) {
          this.init();
          const e = this.headers.get(n.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(n) {
          return this.init(), this.headers.get(n.toLowerCase()) || null;
        }
        append(n, e) {
          return this.clone({ name: n, value: e, op: 'a' });
        }
        set(n, e) {
          return this.clone({ name: n, value: e, op: 's' });
        }
        delete(n, e) {
          return this.clone({ name: n, value: e, op: 'd' });
        }
        maybeSetNormalizedName(n, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, n);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Yl ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate && (this.lazyUpdate.forEach(n => this.applyUpdate(n)), (this.lazyUpdate = null)));
        }
        copyFrom(n) {
          n.init(),
            Array.from(n.headers.keys()).forEach(e => {
              this.headers.set(e, n.headers.get(e)), this.normalizedNames.set(e, n.normalizedNames.get(e));
            });
        }
        clone(n) {
          const e = new Yl();
          return (
            (e.lazyInit = this.lazyInit && this.lazyInit instanceof Yl ? this.lazyInit : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([n])),
            e
          );
        }
        applyUpdate(n) {
          const e = n.name.toLowerCase();
          switch (n.op) {
            case 'a':
            case 's':
              let t = n.value;
              if (('string' == typeof t && (t = [t]), 0 === t.length)) return;
              this.maybeSetNormalizedName(n.name, e);
              const l = ('a' === n.op ? this.headers.get(e) : void 0) || [];
              l.push(...t), this.headers.set(e, l);
              break;
            case 'd':
              const r = n.value;
              if (r) {
                let n = this.headers.get(e);
                if (!n) return;
                0 === (n = n.filter(n => -1 === r.indexOf(n))).length
                  ? (this.headers.delete(e), this.normalizedNames.delete(e))
                  : this.headers.set(e, n);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(n) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(e => n(this.normalizedNames.get(e), this.headers.get(e)));
        }
      }
      class Xl {
        encodeKey(n) {
          return nr(n);
        }
        encodeValue(n) {
          return nr(n);
        }
        decodeKey(n) {
          return decodeURIComponent(n);
        }
        decodeValue(n) {
          return decodeURIComponent(n);
        }
      }
      function nr(n) {
        return encodeURIComponent(n)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class er {
        constructor(n = {}) {
          if (((this.updates = null), (this.cloneFrom = null), (this.encoder = n.encoder || new Xl()), n.fromString)) {
            if (n.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function(n, e) {
              const t = new Map();
              return (
                n.length > 0 &&
                  n.split('&').forEach(n => {
                    const l = n.indexOf('='),
                      [r, s] =
                        -1 == l ? [e.decodeKey(n), ''] : [e.decodeKey(n.slice(0, l)), e.decodeValue(n.slice(l + 1))],
                      i = t.get(r) || [];
                    i.push(s), t.set(r, i);
                  }),
                t
              );
            })(n.fromString, this.encoder);
          } else
            n.fromObject
              ? ((this.map = new Map()),
                Object.keys(n.fromObject).forEach(e => {
                  const t = n.fromObject[e];
                  this.map.set(e, Array.isArray(t) ? t : [t]);
                }))
              : (this.map = null);
        }
        has(n) {
          return this.init(), this.map.has(n);
        }
        get(n) {
          this.init();
          const e = this.map.get(n);
          return e ? e[0] : null;
        }
        getAll(n) {
          return this.init(), this.map.get(n) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(n, e) {
          return this.clone({ param: n, value: e, op: 'a' });
        }
        set(n, e) {
          return this.clone({ param: n, value: e, op: 's' });
        }
        delete(n, e) {
          return this.clone({ param: n, value: e, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(n => {
                const e = this.encoder.encodeKey(n);
                return this.map
                  .get(n)
                  .map(n => e + '=' + this.encoder.encodeValue(n))
                  .join('&');
              })
              .join('&')
          );
        }
        clone(n) {
          const e = new er({ encoder: this.encoder });
          return (e.cloneFrom = this.cloneFrom || this), (e.updates = (this.updates || []).concat([n])), e;
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach(n => this.map.set(n, this.cloneFrom.map.get(n))),
              this.updates.forEach(n => {
                switch (n.op) {
                  case 'a':
                  case 's':
                    const e = ('a' === n.op ? this.map.get(n.param) : void 0) || [];
                    e.push(n.value), this.map.set(n.param, e);
                    break;
                  case 'd':
                    if (void 0 === n.value) {
                      this.map.delete(n.param);
                      break;
                    }
                    {
                      let e = this.map.get(n.param) || [];
                      const t = e.indexOf(n.value);
                      -1 !== t && e.splice(t, 1), e.length > 0 ? this.map.set(n.param, e) : this.map.delete(n.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function tr(n) {
        return 'undefined' != typeof ArrayBuffer && n instanceof ArrayBuffer;
      }
      function lr(n) {
        return 'undefined' != typeof Blob && n instanceof Blob;
      }
      function rr(n) {
        return 'undefined' != typeof FormData && n instanceof FormData;
      }
      class sr {
        constructor(n, e, t, l) {
          let r;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = n.toUpperCase()),
            (function(n) {
              switch (n) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || l
              ? ((this.body = void 0 !== t ? t : null), (r = l))
              : (r = t),
            r &&
              ((this.reportProgress = !!r.reportProgress),
              (this.withCredentials = !!r.withCredentials),
              r.responseType && (this.responseType = r.responseType),
              r.headers && (this.headers = r.headers),
              r.params && (this.params = r.params)),
            this.headers || (this.headers = new Yl()),
            this.params)
          ) {
            const n = this.params.toString();
            if (0 === n.length) this.urlWithParams = e;
            else {
              const t = e.indexOf('?');
              this.urlWithParams = e + (-1 === t ? '?' : t < e.length - 1 ? '&' : '') + n;
            }
          } else (this.params = new er()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : tr(this.body) || lr(this.body) || rr(this.body) || 'string' == typeof this.body
            ? this.body
            : this.body instanceof er
            ? this.body.toString()
            : 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body
            ? null
            : rr(this.body)
            ? null
            : lr(this.body)
            ? this.body.type || null
            : tr(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof er
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body || 'number' == typeof this.body || Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(n = {}) {
          const e = n.method || this.method,
            t = n.url || this.url,
            l = n.responseType || this.responseType,
            r = void 0 !== n.body ? n.body : this.body,
            s = void 0 !== n.withCredentials ? n.withCredentials : this.withCredentials,
            i = void 0 !== n.reportProgress ? n.reportProgress : this.reportProgress;
          let o = n.headers || this.headers,
            u = n.params || this.params;
          return (
            void 0 !== n.setHeaders && (o = Object.keys(n.setHeaders).reduce((e, t) => e.set(t, n.setHeaders[t]), o)),
            n.setParams && (u = Object.keys(n.setParams).reduce((e, t) => e.set(t, n.setParams[t]), u)),
            new sr(e, t, r, { params: u, headers: o, reportProgress: i, responseType: l, withCredentials: s })
          );
        }
      }
      const ir = (function() {
        var n = { Sent: 0, UploadProgress: 1, ResponseHeader: 2, DownloadProgress: 3, Response: 4, User: 5 };
        return (
          (n[n.Sent] = 'Sent'),
          (n[n.UploadProgress] = 'UploadProgress'),
          (n[n.ResponseHeader] = 'ResponseHeader'),
          (n[n.DownloadProgress] = 'DownloadProgress'),
          (n[n.Response] = 'Response'),
          (n[n.User] = 'User'),
          n
        );
      })();
      class or {
        constructor(n, e = 200, t = 'OK') {
          (this.headers = n.headers || new Yl()),
            (this.status = void 0 !== n.status ? n.status : e),
            (this.statusText = n.statusText || t),
            (this.url = n.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class ur extends or {
        constructor(n = {}) {
          super(n), (this.type = ir.ResponseHeader);
        }
        clone(n = {}) {
          return new ur({
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0
          });
        }
      }
      class ar extends or {
        constructor(n = {}) {
          super(n), (this.type = ir.Response), (this.body = void 0 !== n.body ? n.body : null);
        }
        clone(n = {}) {
          return new ar({
            body: void 0 !== n.body ? n.body : this.body,
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0
          });
        }
      }
      class cr extends or {
        constructor(n) {
          super(n, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${n.url || '(unknown url)'}`
                : `Http failure response for ${n.url || '(unknown url)'}: ${n.status} ${n.statusText}`),
            (this.error = n.error || null);
        }
      }
      function dr(n, e) {
        return {
          body: e,
          headers: n.headers,
          observe: n.observe,
          params: n.params,
          reportProgress: n.reportProgress,
          responseType: n.responseType,
          withCredentials: n.withCredentials
        };
      }
      let hr = (() =>
        class {
          constructor(n) {
            this.handler = n;
          }
          request(n, e, t = {}) {
            let l;
            if (n instanceof sr) l = n;
            else {
              let r = void 0;
              r = t.headers instanceof Yl ? t.headers : new Yl(t.headers);
              let s = void 0;
              t.params && (s = t.params instanceof er ? t.params : new er({ fromObject: t.params })),
                (l = new sr(n, e, void 0 !== t.body ? t.body : null, {
                  headers: r,
                  params: s,
                  reportProgress: t.reportProgress,
                  responseType: t.responseType || 'json',
                  withCredentials: t.withCredentials
                }));
            }
            const r = a(l).pipe(cn(n => this.handler.handle(n)));
            if (n instanceof sr || 'events' === t.observe) return r;
            const s = r.pipe(K(n => n instanceof ar));
            switch (t.observe || 'body') {
              case 'body':
                switch (l.responseType) {
                  case 'arraybuffer':
                    return s.pipe(
                      Object(k.a)(n => {
                        if (null !== n.body && !(n.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return n.body;
                      })
                    );
                  case 'blob':
                    return s.pipe(
                      Object(k.a)(n => {
                        if (null !== n.body && !(n.body instanceof Blob)) throw new Error('Response is not a Blob.');
                        return n.body;
                      })
                    );
                  case 'text':
                    return s.pipe(
                      Object(k.a)(n => {
                        if (null !== n.body && 'string' != typeof n.body) throw new Error('Response is not a string.');
                        return n.body;
                      })
                    );
                  case 'json':
                  default:
                    return s.pipe(Object(k.a)(n => n.body));
                }
              case 'response':
                return s;
              default:
                throw new Error(`Unreachable: unhandled observe type ${t.observe}}`);
            }
          }
          delete(n, e = {}) {
            return this.request('DELETE', n, e);
          }
          get(n, e = {}) {
            return this.request('GET', n, e);
          }
          head(n, e = {}) {
            return this.request('HEAD', n, e);
          }
          jsonp(n, e) {
            return this.request('JSONP', n, {
              params: new er().append(e, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            });
          }
          options(n, e = {}) {
            return this.request('OPTIONS', n, e);
          }
          patch(n, e, t = {}) {
            return this.request('PATCH', n, dr(t, e));
          }
          post(n, e, t = {}) {
            return this.request('POST', n, dr(t, e));
          }
          put(n, e, t = {}) {
            return this.request('PUT', n, dr(t, e));
          }
        })();
      class pr {
        constructor(n, e) {
          (this.next = n), (this.interceptor = e);
        }
        handle(n) {
          return this.interceptor.intercept(n, this.next);
        }
      }
      const br = new l.p('HTTP_INTERCEPTORS');
      let gr = (() =>
        class {
          intercept(n, e) {
            return e.handle(n);
          }
        })();
      const fr = /^\)\]\}',?\n/;
      class mr {}
      let vr = (() =>
          class {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          })(),
        _r = (() =>
          class {
            constructor(n) {
              this.xhrFactory = n;
            }
            handle(n) {
              if ('JSONP' === n.method)
                throw new Error('Attempted to construct Jsonp request without JsonpClientModule installed.');
              return new b.a(e => {
                const t = this.xhrFactory.build();
                if (
                  (t.open(n.method, n.urlWithParams),
                  n.withCredentials && (t.withCredentials = !0),
                  n.headers.forEach((n, e) => t.setRequestHeader(n, e.join(','))),
                  n.headers.has('Accept') || t.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                  !n.headers.has('Content-Type'))
                ) {
                  const e = n.detectContentTypeHeader();
                  null !== e && t.setRequestHeader('Content-Type', e);
                }
                if (n.responseType) {
                  const e = n.responseType.toLowerCase();
                  t.responseType = 'json' !== e ? e : 'text';
                }
                const l = n.serializeBody();
                let r = null;
                const s = () => {
                    if (null !== r) return r;
                    const e = 1223 === t.status ? 204 : t.status,
                      l = t.statusText || 'OK',
                      s = new Yl(t.getAllResponseHeaders()),
                      i =
                        (function(n) {
                          return 'responseURL' in n && n.responseURL
                            ? n.responseURL
                            : /^X-Request-URL:/m.test(n.getAllResponseHeaders())
                            ? n.getResponseHeader('X-Request-URL')
                            : null;
                        })(t) || n.url;
                    return (r = new ur({ headers: s, status: e, statusText: l, url: i }));
                  },
                  i = () => {
                    let { headers: l, status: r, statusText: i, url: o } = s(),
                      u = null;
                    204 !== r && (u = void 0 === t.response ? t.responseText : t.response),
                      0 === r && (r = u ? 200 : 0);
                    let a = r >= 200 && r < 300;
                    if ('json' === n.responseType && 'string' == typeof u) {
                      const n = u;
                      u = u.replace(fr, '');
                      try {
                        u = '' !== u ? JSON.parse(u) : null;
                      } catch (c) {
                        (u = n), a && ((a = !1), (u = { error: c, text: u }));
                      }
                    }
                    a
                      ? (e.next(new ar({ body: u, headers: l, status: r, statusText: i, url: o || void 0 })),
                        e.complete())
                      : e.error(new cr({ error: u, headers: l, status: r, statusText: i, url: o || void 0 }));
                  },
                  o = n => {
                    const { url: l } = s(),
                      r = new cr({
                        error: n,
                        status: t.status || 0,
                        statusText: t.statusText || 'Unknown Error',
                        url: l || void 0
                      });
                    e.error(r);
                  };
                let u = !1;
                const a = l => {
                    u || (e.next(s()), (u = !0));
                    let r = { type: ir.DownloadProgress, loaded: l.loaded };
                    l.lengthComputable && (r.total = l.total),
                      'text' === n.responseType && t.responseText && (r.partialText = t.responseText),
                      e.next(r);
                  },
                  c = n => {
                    let t = { type: ir.UploadProgress, loaded: n.loaded };
                    n.lengthComputable && (t.total = n.total), e.next(t);
                  };
                return (
                  t.addEventListener('load', i),
                  t.addEventListener('error', o),
                  n.reportProgress &&
                    (t.addEventListener('progress', a),
                    null !== l && t.upload && t.upload.addEventListener('progress', c)),
                  t.send(l),
                  e.next({ type: ir.Sent }),
                  () => {
                    t.removeEventListener('error', o),
                      t.removeEventListener('load', i),
                      n.reportProgress &&
                        (t.removeEventListener('progress', a),
                        null !== l && t.upload && t.upload.removeEventListener('progress', c)),
                      t.abort();
                  }
                );
              });
            }
          })();
      const yr = new l.p('XSRF_COOKIE_NAME'),
        wr = new l.p('XSRF_HEADER_NAME');
      class Cr {}
      let xr = (() =>
          class {
            constructor(n, e, t) {
              (this.doc = n),
                (this.platform = e),
                (this.cookieName = t),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const n = this.doc.cookie || '';
              return (
                n !== this.lastCookieString &&
                  (this.parseCount++, (this.lastToken = Object(s.C)(n, this.cookieName)), (this.lastCookieString = n)),
                this.lastToken
              );
            }
          })(),
        Or = (() =>
          class {
            constructor(n, e) {
              (this.tokenService = n), (this.headerName = e);
            }
            intercept(n, e) {
              const t = n.url.toLowerCase();
              if ('GET' === n.method || 'HEAD' === n.method || t.startsWith('http://') || t.startsWith('https://'))
                return e.handle(n);
              const l = this.tokenService.getToken();
              return (
                null === l ||
                  n.headers.has(this.headerName) ||
                  (n = n.clone({ headers: n.headers.set(this.headerName, l) })),
                e.handle(n)
              );
            }
          })(),
        kr = (() =>
          class {
            constructor(n, e) {
              (this.backend = n), (this.injector = e), (this.chain = null);
            }
            handle(n) {
              if (null === this.chain) {
                const n = this.injector.get(br, []);
                this.chain = n.reduceRight((n, e) => new pr(n, e), this.backend);
              }
              return this.chain.handle(n);
            }
          })(),
        Sr = (() => {
          class n {
            static disable() {
              return { ngModule: n, providers: [{ provide: Or, useClass: gr }] };
            }
            static withOptions(e = {}) {
              return {
                ngModule: n,
                providers: [
                  e.cookieName ? { provide: yr, useValue: e.cookieName } : [],
                  e.headerName ? { provide: wr, useValue: e.headerName } : []
                ]
              };
            }
          }
          return n;
        })(),
        Mr = (() => class {})();
      const Pr = new xl('ErrorHandlerInterceptor');
      let Kr = (() => {
        class n {
          intercept(n, e) {
            return e.handle(n).pipe(B(n => this.errorHandler(n)));
          }
          errorHandler(n) {
            throw (ml.a.production || Pr.error('Request error', n), n);
          }
        }
        return (
          (n.ngInjectableDef = l.Qb({
            factory: function() {
              return new n();
            },
            token: n,
            providedIn: 'root'
          })),
          n
        );
      })();
      const Er = new xl('HttpCacheService'),
        Ar = 'httpCache';
      let Dr = (() => {
          class n {
            constructor() {
              (this.cachedData = {}), (this.storage = null), this.loadCacheData();
            }
            setCacheData(n, e, t) {
              (this.cachedData[n] = { lastUpdated: t || new Date(), data: e }),
                Er.debug(`Cache set for key: "${n}"`),
                this.saveCacheData();
            }
            getCacheData(n) {
              const e = this.cachedData[n];
              return e ? (Er.debug(`Cache hit for key: "${n}"`), e.data) : null;
            }
            getHttpCacheEntry(n) {
              return this.cachedData[n] || null;
            }
            clearCache(n) {
              delete this.cachedData[n], Er.debug(`Cache cleared for key: "${n}"`), this.saveCacheData();
            }
            cleanCache(n) {
              n
                ? Object.entries(this.cachedData).forEach(([e, t]) => {
                    n >= t.lastUpdated && delete this.cachedData[e];
                  })
                : (this.cachedData = {}),
                this.saveCacheData();
            }
            setPersistence(n) {
              this.cleanCache(),
                (this.storage = 'local' === n || 'session' === n ? window[n + 'Storage'] : null),
                this.loadCacheData();
            }
            saveCacheData() {
              this.storage && this.storage.setItem(Ar, JSON.stringify(this.cachedData));
            }
            loadCacheData() {
              const n = this.storage ? this.storage.getItem(Ar) : null;
              this.cachedData = n ? JSON.parse(n) : {};
            }
          }
          return (
            (n.ngInjectableDef = l.Qb({
              factory: function() {
                return new n();
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        Tr = (() => {
          class n {
            constructor(n) {
              (this.httpCacheService = n), (this.forceUpdate = !1);
            }
            configure(e) {
              const t = new n(this.httpCacheService);
              return e && e.update && (t.forceUpdate = !0), t;
            }
            intercept(n, e) {
              return 'GET' !== n.method
                ? e.handle(n)
                : new b.a(t => {
                    const l = this.forceUpdate ? null : this.httpCacheService.getCacheData(n.urlWithParams);
                    null !== l
                      ? (t.next(new ar(l)), t.complete())
                      : e.handle(n).subscribe(
                          e => {
                            e instanceof ar && this.httpCacheService.setCacheData(n.urlWithParams, e), t.next(e);
                          },
                          n => t.error(n),
                          () => t.complete()
                        );
                  });
            }
          }
          return (
            (n.ngInjectableDef = l.Qb({
              factory: function() {
                return new n(l.Rb(Dr));
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        Ir = (() => {
          class n {
            intercept(n, e) {
              return /^(http|https):/i.test(n.url) || (n = n.clone({ url: ml.a.serverUrl + n.url })), e.handle(n);
            }
          }
          return (
            (n.ngInjectableDef = l.Qb({
              factory: function() {
                return new n();
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })();
      class qr {
        constructor(n, e) {
          (this.next = n), (this.interceptor = e);
        }
        handle(n) {
          return this.interceptor.intercept(n, this.next);
        }
      }
      const Nr = new l.p('HTTP_DYNAMIC_INTERCEPTORS');
      let Rr = (() => {
        class n extends hr {
          constructor(n, e, t = []) {
            super(n),
              (this.httpHandler = n),
              (this.injector = e),
              (this.interceptors = t),
              this.interceptors || (this.interceptors = [this.injector.get(Ir), this.injector.get(Kr)]);
          }
          cache(n) {
            const e = this.injector.get(Tr).configure({ update: n });
            return this.addInterceptor(e);
          }
          skipErrorHandler() {
            return this.removeInterceptor(Kr);
          }
          disableApiPrefix() {
            return this.removeInterceptor(Ir);
          }
          request(n, e, t) {
            const l = this.interceptors.reduceRight((n, e) => new qr(n, e), this.httpHandler);
            return new hr(l).request(n, e, t);
          }
          removeInterceptor(e) {
            return new n(
              this.httpHandler,
              this.injector,
              this.interceptors.filter(n => !(n instanceof e))
            );
          }
          addInterceptor(e) {
            return new n(this.httpHandler, this.injector, this.interceptors.concat([e]));
          }
        }
        return (
          (n.ngInjectableDef = l.Qb({
            factory: function() {
              return new n(l.Rb(Ql), l.Rb(l.n), l.Rb(Nr, 8));
            },
            token: n,
            providedIn: 'root'
          })),
          n
        );
      })();
      class jr extends Dt {
        shouldDetach(n) {
          return !1;
        }
        store(n, e) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, e) {
          return n.routeConfig === e.routeConfig || n.data.reuse;
        }
      }
      function Vr(n) {
        return e => e.lift(new Lr(n));
      }
      class Lr {
        constructor(n) {
          this.notifier = n;
        }
        call(n, e) {
          const t = new Ur(n),
            l = Object(v.a)(t, this.notifier);
          return l && !t.seenValue ? (t.add(l), e.subscribe(t)) : t;
        }
      }
      class Ur extends m.a {
        constructor(n) {
          super(n), (this.seenValue = !1);
        }
        notifyNext(n, e, t, l, r) {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      const Fr = Symbol('untilDestroyed'),
        Hr = new xl('App');
      class zr {
        constructor(n, e, t, l, r) {
          (this.router = n),
            (this.activatedRoute = e),
            (this.titleService = t),
            (this.translateService = l),
            (this.i18nService = r);
        }
        ngOnInit() {
          ml.a.production && xl.enableProductionMode(),
            Hr.debug('init'),
            this.i18nService.init(ml.a.defaultLanguage, ml.a.supportedLanguages);
          const n = this.router.events.pipe(K(n => n instanceof On));
          Object(fl.a)(this.translateService.onLangChange, n)
            .pipe(
              Object(k.a)(() => {
                let n = this.activatedRoute;
                for (; n.firstChild; ) n = n.firstChild;
                return n;
              }),
              K(n => 'primary' === n.outlet),
              tn(n => n.data),
              (function(n, e = 'ngOnDestroy') {
                return t => {
                  const l = n[e],
                    r = 'function' == typeof l;
                  if (!r) throw new Error(`${n.constructor.name} is using untilDestroyed but doesn't implement ${e}`);
                  return (
                    n[Fr] ||
                      ((n[Fr] = new d.a()),
                      (n[e] = function() {
                        r && l.apply(this, arguments), n[Fr].next(), n[Fr].complete();
                      })),
                    t.pipe(Vr(n[Fr]))
                  );
                };
              })(this)
            )
            .subscribe(n => {
              const e = n.title;
              e && this.titleService.setTitle(this.translateService.instant(e));
            });
        }
        ngOnDestroy() {
          this.i18nService.destroy();
        }
      }
      var $r = l.ob({ encapsulation: 2, styles: [], data: {} });
      function Br(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            l.pb(1, 212992, null, 0, Gt, [Wt, l.N, l.j, [8, null], l.h], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      function Wr(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'ng-component', [], null, null, null, Br, $r)),
            l.pb(1, 49152, null, 0, Vn, [], null, null)
          ],
          null,
          null
        );
      }
      var Gr = l.mb('ng-component', Vn, Wr, {}, {}, []),
        Zr = t('XoHu');
      function Qr(n, e) {
        return new b.a(t => {
          const l = n.length;
          if (0 === l) return void t.complete();
          const r = new Array(l);
          let s = 0,
            i = 0;
          for (let o = 0; o < l; o++) {
            const u = Object(c.a)(n[o]);
            let a = !1;
            t.add(
              u.subscribe({
                next: n => {
                  a || ((a = !0), i++), (r[o] = n);
                },
                error: n => t.error(n),
                complete: () => {
                  (++s !== l && a) ||
                    (i === l && t.next(e ? e.reduce((n, e, t) => ((n[e] = r[t]), n), {}) : r), t.complete());
                }
              })
            );
          }
        });
      }
      const Jr = new l.p('NgValueAccessor');
      let Yr = (() =>
        class {
          constructor(n, e) {
            (this._renderer = n), (this._elementRef = e), (this.onChange = n => {}), (this.onTouched = () => {});
          }
          writeValue(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', n);
          }
          registerOnChange(n) {
            this.onChange = n;
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
          }
        })();
      const Xr = new l.p('CompositionEventMode');
      let ns = (() =>
        class {
          constructor(n, e, t) {
            (this._renderer = n),
              (this._elementRef = e),
              (this._compositionMode = t),
              (this.onChange = n => {}),
              (this.onTouched = () => {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function() {
                  const n = Object(wn.s)() ? Object(wn.s)().getUserAgent() : '';
                  return /android (\d+)/.test(n.toLowerCase());
                })());
          }
          writeValue(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == n ? '' : n);
          }
          registerOnChange(n) {
            this.onChange = n;
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
          }
          _handleInput(n) {
            (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(n);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(n) {
            (this._composing = !1), this._compositionMode && this.onChange(n);
          }
        })();
      class es {
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        reset(n) {
          this.control && this.control.reset(n);
        }
        hasError(n, e) {
          return !!this.control && this.control.hasError(n, e);
        }
        getError(n, e) {
          return this.control ? this.control.getError(n, e) : null;
        }
      }
      class ts extends es {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      function ls() {
        throw new Error('unimplemented');
      }
      class rs extends es {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return ls();
        }
        get asyncValidator() {
          return ls();
        }
      }
      class ss {
        constructor(n) {
          this._cd = n;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      let is = (() =>
          class extends ss {
            constructor(n) {
              super(n);
            }
          })(),
        os = (() =>
          class extends ss {
            constructor(n) {
              super(n);
            }
          })();
      function us(n) {
        return null == n || 0 === n.length;
      }
      const as = new l.p('NgValidators'),
        cs = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class ds {
        static min(n) {
          return e => {
            if (us(e.value) || us(n)) return null;
            const t = parseFloat(e.value);
            return !isNaN(t) && t < n ? { min: { min: n, actual: e.value } } : null;
          };
        }
        static max(n) {
          return e => {
            if (us(e.value) || us(n)) return null;
            const t = parseFloat(e.value);
            return !isNaN(t) && t > n ? { max: { max: n, actual: e.value } } : null;
          };
        }
        static required(n) {
          return us(n.value) ? { required: !0 } : null;
        }
        static requiredTrue(n) {
          return !0 === n.value ? null : { required: !0 };
        }
        static email(n) {
          return us(n.value) ? null : cs.test(n.value) ? null : { email: !0 };
        }
        static minLength(n) {
          return e => {
            if (us(e.value)) return null;
            const t = e.value ? e.value.length : 0;
            return t < n ? { minlength: { requiredLength: n, actualLength: t } } : null;
          };
        }
        static maxLength(n) {
          return e => {
            const t = e.value ? e.value.length : 0;
            return t > n ? { maxlength: { requiredLength: n, actualLength: t } } : null;
          };
        }
        static pattern(n) {
          if (!n) return ds.nullValidator;
          let e, t;
          return (
            'string' == typeof n
              ? ((t = ''),
                '^' !== n.charAt(0) && (t += '^'),
                (t += n),
                '$' !== n.charAt(n.length - 1) && (t += '$'),
                (e = new RegExp(t)))
              : ((t = n.toString()), (e = n)),
            n => {
              if (us(n.value)) return null;
              const l = n.value;
              return e.test(l) ? null : { pattern: { requiredPattern: t, actualValue: l } };
            }
          );
        }
        static nullValidator(n) {
          return null;
        }
        static compose(n) {
          if (!n) return null;
          const e = n.filter(hs);
          return 0 == e.length
            ? null
            : function(n) {
                return bs(
                  (function(n, e) {
                    return e.map(e => e(n));
                  })(n, e)
                );
              };
        }
        static composeAsync(n) {
          if (!n) return null;
          const e = n.filter(hs);
          return 0 == e.length
            ? null
            : function(n) {
                return (function(...n) {
                  if (1 === n.length) {
                    const e = n[0];
                    if (Object(f.a)(e)) return Qr(e, null);
                    if (Object(Zr.a)(e) && Object.getPrototypeOf(e) === Object.prototype) {
                      const n = Object.keys(e);
                      return Qr(
                        n.map(n => e[n]),
                        n
                      );
                    }
                  }
                  if ('function' == typeof n[n.length - 1]) {
                    const e = n.pop();
                    return Qr((n = 1 === n.length && Object(f.a)(n[0]) ? n[0] : n), null).pipe(
                      Object(k.a)(n => e(...n))
                    );
                  }
                  return Qr(n, null);
                })(
                  (function(n, e) {
                    return e.map(e => e(n));
                  })(n, e).map(ps)
                ).pipe(Object(k.a)(bs));
              };
        }
      }
      function hs(n) {
        return null != n;
      }
      function ps(n) {
        const e = Object(l.xb)(n) ? Object(c.a)(n) : n;
        if (!Object(l.wb)(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function bs(n) {
        const e = n.reduce((n, e) => (null != e ? Object.assign({}, n, e) : n), {});
        return 0 === Object.keys(e).length ? null : e;
      }
      function gs(n) {
        return n.validate ? e => n.validate(e) : n;
      }
      function fs(n) {
        return n.validate ? e => n.validate(e) : n;
      }
      let ms = (() =>
          class {
            constructor(n, e) {
              (this._renderer = n), (this._elementRef = e), (this.onChange = n => {}), (this.onTouched = () => {});
            }
            writeValue(n) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == n ? '' : n);
            }
            registerOnChange(n) {
              this.onChange = e => {
                n('' == e ? null : parseFloat(e));
              };
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            setDisabledState(n) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
            }
          })(),
        vs = (() =>
          class {
            constructor() {
              this._accessors = [];
            }
            add(n, e) {
              this._accessors.push([n, e]);
            }
            remove(n) {
              for (let e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === n) return void this._accessors.splice(e, 1);
            }
            select(n) {
              this._accessors.forEach(e => {
                this._isSameGroup(e, n) && e[1] !== n && e[1].fireUncheck(n.value);
              });
            }
            _isSameGroup(n, e) {
              return !!n[0].control && n[0]._parent === e._control._parent && n[1].name === e.name;
            }
          })(),
        _s = (() =>
          class {
            constructor(n, e, t, l) {
              (this._renderer = n),
                (this._elementRef = e),
                (this._registry = t),
                (this._injector = l),
                (this.onChange = () => {}),
                (this.onTouched = () => {});
            }
            ngOnInit() {
              (this._control = this._injector.get(rs)), this._checkName(), this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(n) {
              (this._state = n === this.value),
                this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
            }
            registerOnChange(n) {
              (this._fn = n),
                (this.onChange = () => {
                  n(this.value), this._registry.select(this);
                });
            }
            fireUncheck(n) {
              this.writeValue(n);
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            setDisabledState(n) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
            }
            _checkName() {
              this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(),
                !this.name && this.formControlName && (this.name = this.formControlName);
            }
            _throwNameError() {
              throw new Error(
                '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
              );
            }
          })(),
        ys = (() =>
          class {
            constructor(n, e) {
              (this._renderer = n), (this._elementRef = e), (this.onChange = n => {}), (this.onTouched = () => {});
            }
            writeValue(n) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(n));
            }
            registerOnChange(n) {
              this.onChange = e => {
                n('' == e ? null : parseFloat(e));
              };
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            setDisabledState(n) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
            }
          })();
      const ws = {
        formControlName:
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        formGroupName:
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        formArrayName:
          '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
        ngModelGroup:
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        ngModelWithFormGroup:
          '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
      };
      function Cs(n, e) {
        return null == n ? `${e}` : (e && 'object' == typeof e && (e = 'Object'), `${n}: ${e}`.slice(0, 50));
      }
      let xs = (() =>
          class {
            constructor(n, e) {
              (this._renderer = n),
                (this._elementRef = e),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this.onChange = n => {}),
                (this.onTouched = () => {}),
                (this._compareWith = l.yb);
            }
            set compareWith(n) {
              if ('function' != typeof n)
                throw new Error(`compareWith must be a function, but received ${JSON.stringify(n)}`);
              this._compareWith = n;
            }
            writeValue(n) {
              this.value = n;
              const e = this._getOptionId(n);
              null == e && this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
              const t = Cs(e, n);
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', t);
            }
            registerOnChange(n) {
              this.onChange = e => {
                (this.value = this._getOptionValue(e)), n(this.value);
              };
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            setDisabledState(n) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(n) {
              for (const e of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(e), n)) return e;
              return null;
            }
            _getOptionValue(n) {
              const e = (function(n) {
                return n.split(':')[0];
              })(n);
              return this._optionMap.has(e) ? this._optionMap.get(e) : n;
            }
          })(),
        Os = (() =>
          class {
            constructor(n, e, t) {
              (this._element = n),
                (this._renderer = e),
                (this._select = t),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(n) {
              null != this._select &&
                (this._select._optionMap.set(this.id, n),
                this._setElementValue(Cs(this.id, n)),
                this._select.writeValue(this._select.value));
            }
            set value(n) {
              this._setElementValue(n), this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(n) {
              this._renderer.setProperty(this._element.nativeElement, 'value', n);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          })();
      function ks(n, e) {
        return null == n
          ? `${e}`
          : ('string' == typeof e && (e = `'${e}'`),
            e && 'object' == typeof e && (e = 'Object'),
            `${n}: ${e}`.slice(0, 50));
      }
      let Ss = (() =>
          class {
            constructor(n, e) {
              (this._renderer = n),
                (this._elementRef = e),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this.onChange = n => {}),
                (this.onTouched = () => {}),
                (this._compareWith = l.yb);
            }
            set compareWith(n) {
              if ('function' != typeof n)
                throw new Error(`compareWith must be a function, but received ${JSON.stringify(n)}`);
              this._compareWith = n;
            }
            writeValue(n) {
              let e;
              if (((this.value = n), Array.isArray(n))) {
                const t = n.map(n => this._getOptionId(n));
                e = (n, e) => {
                  n._setSelected(t.indexOf(e.toString()) > -1);
                };
              } else
                e = (n, e) => {
                  n._setSelected(!1);
                };
              this._optionMap.forEach(e);
            }
            registerOnChange(n) {
              this.onChange = e => {
                const t = [];
                if (e.hasOwnProperty('selectedOptions')) {
                  const n = e.selectedOptions;
                  for (let e = 0; e < n.length; e++) {
                    const l = n.item(e),
                      r = this._getOptionValue(l.value);
                    t.push(r);
                  }
                } else {
                  const n = e.options;
                  for (let e = 0; e < n.length; e++) {
                    const l = n.item(e);
                    if (l.selected) {
                      const n = this._getOptionValue(l.value);
                      t.push(n);
                    }
                  }
                }
                (this.value = t), n(t);
              };
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            setDisabledState(n) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
            }
            _registerOption(n) {
              const e = (this._idCounter++).toString();
              return this._optionMap.set(e, n), e;
            }
            _getOptionId(n) {
              for (const e of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(e)._value, n)) return e;
              return null;
            }
            _getOptionValue(n) {
              const e = (function(n) {
                return n.split(':')[0];
              })(n);
              return this._optionMap.has(e) ? this._optionMap.get(e)._value : n;
            }
          })(),
        Ms = (() =>
          class {
            constructor(n, e, t) {
              (this._element = n),
                (this._renderer = e),
                (this._select = t),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(n) {
              null != this._select &&
                ((this._value = n), this._setElementValue(ks(this.id, n)), this._select.writeValue(this._select.value));
            }
            set value(n) {
              this._select
                ? ((this._value = n),
                  this._setElementValue(ks(this.id, n)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(n);
            }
            _setElementValue(n) {
              this._renderer.setProperty(this._element.nativeElement, 'value', n);
            }
            _setSelected(n) {
              this._renderer.setProperty(this._element.nativeElement, 'selected', n);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          })();
      function Ps(n, e) {
        return [...e.path, n];
      }
      function Ks(n, e) {
        n || As(e, 'Cannot find control with'),
          e.valueAccessor || As(e, 'No value accessor for form control with'),
          (n.validator = ds.compose([n.validator, e.validator])),
          (n.asyncValidator = ds.composeAsync([n.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(n.value),
          (function(n, e) {
            e.valueAccessor.registerOnChange(t => {
              (n._pendingValue = t),
                (n._pendingChange = !0),
                (n._pendingDirty = !0),
                'change' === n.updateOn && Es(n, e);
            });
          })(n, e),
          (function(n, e) {
            n.registerOnChange((n, t) => {
              e.valueAccessor.writeValue(n), t && e.viewToModelUpdate(n);
            });
          })(n, e),
          (function(n, e) {
            e.valueAccessor.registerOnTouched(() => {
              (n._pendingTouched = !0),
                'blur' === n.updateOn && n._pendingChange && Es(n, e),
                'submit' !== n.updateOn && n.markAsTouched();
            });
          })(n, e),
          e.valueAccessor.setDisabledState &&
            n.registerOnDisabledChange(n => {
              e.valueAccessor.setDisabledState(n);
            }),
          e._rawValidators.forEach(e => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => n.updateValueAndValidity());
          }),
          e._rawAsyncValidators.forEach(e => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => n.updateValueAndValidity());
          });
      }
      function Es(n, e) {
        n._pendingDirty && n.markAsDirty(),
          n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(n._pendingValue),
          (n._pendingChange = !1);
      }
      function As(n, e) {
        let t;
        throw ((t =
          n.path.length > 1
            ? `path: '${n.path.join(' -> ')}'`
            : n.path[0]
            ? `name: '${n.path}'`
            : 'unspecified name attribute'),
        new Error(`${e} ${t}`));
      }
      function Ds(n) {
        return null != n ? ds.compose(n.map(gs)) : null;
      }
      function Ts(n) {
        return null != n ? ds.composeAsync(n.map(fs)) : null;
      }
      const Is = [Yr, ys, ms, xs, Ss, _s],
        qs = 'VALID',
        Ns = 'INVALID',
        Rs = 'PENDING',
        js = 'DISABLED';
      function Vs(n) {
        const e = Us(n) ? n.validators : n;
        return Array.isArray(e) ? Ds(e) : e || null;
      }
      function Ls(n, e) {
        const t = Us(e) ? e.asyncValidators : n;
        return Array.isArray(t) ? Ts(t) : t || null;
      }
      function Us(n) {
        return null != n && !Array.isArray(n) && 'object' == typeof n;
      }
      class Fs {
        constructor(n, e) {
          (this.validator = n),
            (this.asyncValidator = e),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === qs;
        }
        get invalid() {
          return this.status === Ns;
        }
        get pending() {
          return this.status == Rs;
        }
        get disabled() {
          return this.status === js;
        }
        get enabled() {
          return this.status !== js;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(n) {
          this.validator = Vs(n);
        }
        setAsyncValidators(n) {
          this.asyncValidator = Ls(n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          (this.touched = !0), this._parent && !n.onlySelf && this._parent.markAsTouched(n);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild(n => n.markAllAsTouched());
        }
        markAsUntouched(n = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(n => {
              n.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        markAsDirty(n = {}) {
          (this.pristine = !1), this._parent && !n.onlySelf && this._parent.markAsDirty(n);
        }
        markAsPristine(n = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(n => {
              n.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        markAsPending(n = {}) {
          (this.status = Rs),
            !1 !== n.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !n.onlySelf && this._parent.markAsPending(n);
        }
        disable(n = {}) {
          const e = this._parentMarkedDirty(n.onlySelf);
          (this.status = js),
            (this.errors = null),
            this._forEachChild(e => {
              e.disable(Object.assign({}, n, { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== n.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign({}, n, { skipPristineCheck: e })),
            this._onDisabledChange.forEach(n => n(!0));
        }
        enable(n = {}) {
          const e = this._parentMarkedDirty(n.onlySelf);
          (this.status = qs),
            this._forEachChild(e => {
              e.enable(Object.assign({}, n, { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }),
            this._updateAncestors(Object.assign({}, n, { skipPristineCheck: e })),
            this._onDisabledChange.forEach(n => n(!1));
        }
        _updateAncestors(n) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(n) {
          this._parent = n;
        }
        updateValueAndValidity(n = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status !== qs && this.status !== Rs) || this._runAsyncValidator(n.emitEvent)),
            !1 !== n.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !n.onlySelf && this._parent.updateValueAndValidity(n);
        }
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild(e => e._updateTreeValidity(n)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? js : qs;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n) {
          if (this.asyncValidator) {
            this.status = Rs;
            const e = ps(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, { emitEvent: n }));
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(n, e = {}) {
          (this.errors = n), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(n) {
          return (function(n, e, t) {
            return null == e
              ? null
              : (e instanceof Array || (e = e.split('.')),
                e instanceof Array && 0 === e.length
                  ? null
                  : e.reduce(
                      (n, e) =>
                        n instanceof zs
                          ? n.controls.hasOwnProperty(e)
                            ? n.controls[e]
                            : null
                          : (n instanceof $s && n.at(e)) || null,
                      n
                    ));
          })(this, n);
        }
        getError(n, e) {
          const t = e ? this.get(e) : this;
          return t && t.errors ? t.errors[n] : null;
        }
        hasError(n, e) {
          return !!this.getError(n, e);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(n);
        }
        _initObservables() {
          (this.valueChanges = new l.m()), (this.statusChanges = new l.m());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? js
            : this.errors
            ? Ns
            : this._anyControlsHaveStatus(Rs)
            ? Rs
            : this._anyControlsHaveStatus(Ns)
            ? Ns
            : qs;
        }
        _anyControlsHaveStatus(n) {
          return this._anyControls(e => e.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls(n => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(n => n.touched);
        }
        _updatePristine(n = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        _updateTouched(n = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        _isBoxedValue(n) {
          return 'object' == typeof n && null !== n && 2 === Object.keys(n).length && 'value' in n && 'disabled' in n;
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          Us(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return !n && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class Hs extends Fs {
        constructor(n = null, e, t) {
          super(Vs(e), Ls(t, e)),
            (this._onChange = []),
            this._applyFormState(n),
            this._setUpdateStrategy(e),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(n, e = {}) {
          (this.value = this._pendingValue = n),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach(n => n(this.value, !1 !== e.emitViewToModelChange)),
            this.updateValueAndValidity(e);
        }
        patchValue(n, e = {}) {
          this.setValue(n, e);
        }
        reset(n = null, e = {}) {
          this._applyFormState(n),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(n) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(n) {
          this._onChange.push(n);
        }
        _clearChangeFns() {
          (this._onChange = []), (this._onDisabledChange = []), (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(n) {
          this._onDisabledChange.push(n);
        }
        _forEachChild(n) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(n) {
          this._isBoxedValue(n)
            ? ((this.value = this._pendingValue = n.value),
              n.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = n);
        }
      }
      class zs extends Fs {
        constructor(n, e, t) {
          super(Vs(e), Ls(t, e)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(n, e) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = e), e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e);
        }
        addControl(n, e) {
          this.registerControl(n, e), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(n) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(n, e) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            e && this.registerControl(n, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, e = {}) {
          this._checkAllValuesPresent(n),
            Object.keys(n).forEach(t => {
              this._throwIfControlMissing(t), this.controls[t].setValue(n[t], { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(n, e = {}) {
          Object.keys(n).forEach(t => {
            this.controls[t] && this.controls[t].patchValue(n[t], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(n = {}, e = {}) {
          this._forEachChild((t, l) => {
            t.reset(n[l], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren({}, (n, e, t) => ((n[t] = e instanceof Hs ? e.value : e.getRawValue()), n));
        }
        _syncPendingControls() {
          let n = this._reduceChildren(!1, (n, e) => !!e._syncPendingControls() || n);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _throwIfControlMissing(n) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[n]) throw new Error(`Cannot find form control with name: ${n}.`);
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach(e => n(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild(n => {
            n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          let e = !1;
          return (
            this._forEachChild((t, l) => {
              e = e || (this.contains(l) && n(t));
            }),
            e
          );
        }
        _reduceValue() {
          return this._reduceChildren({}, (n, e, t) => ((e.enabled || this.disabled) && (n[t] = e.value), n));
        }
        _reduceChildren(n, e) {
          let t = n;
          return (
            this._forEachChild((n, l) => {
              t = e(t, n, l);
            }),
            t
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls)) if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(n) {
          this._forEachChild((e, t) => {
            if (void 0 === n[t]) throw new Error(`Must supply a value for form control with name: '${t}'.`);
          });
        }
      }
      class $s extends Fs {
        constructor(n, e, t) {
          super(Vs(e), Ls(t, e)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(n) {
          return this.controls[n];
        }
        push(n) {
          this.controls.push(n), this._registerControl(n), this.updateValueAndValidity(), this._onCollectionChange();
        }
        insert(n, e) {
          this.controls.splice(n, 0, e), this._registerControl(e), this.updateValueAndValidity();
        }
        removeAt(n) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            this.controls.splice(n, 1),
            this.updateValueAndValidity();
        }
        setControl(n, e) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            this.controls.splice(n, 1),
            e && (this.controls.splice(n, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(n, e = {}) {
          this._checkAllValuesPresent(n),
            n.forEach((n, t) => {
              this._throwIfControlMissing(t), this.at(t).setValue(n, { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(n, e = {}) {
          n.forEach((n, t) => {
            this.at(t) && this.at(t).patchValue(n, { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(n = [], e = {}) {
          this._forEachChild((t, l) => {
            t.reset(n[l], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map(n => (n instanceof Hs ? n.value : n.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild(n => n._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let n = this.controls.reduce((n, e) => !!e._syncPendingControls() || n, !1);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _throwIfControlMissing(n) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(n)) throw new Error(`Cannot find form control at index ${n}`);
        }
        _forEachChild(n) {
          this.controls.forEach((e, t) => {
            n(e, t);
          });
        }
        _updateValue() {
          this.value = this.controls.filter(n => n.enabled || this.disabled).map(n => n.value);
        }
        _anyControls(n) {
          return this.controls.some(e => e.enabled && n(e));
        }
        _setUpControls() {
          this._forEachChild(n => this._registerControl(n));
        }
        _checkAllValuesPresent(n) {
          this._forEachChild((e, t) => {
            if (void 0 === n[t]) throw new Error(`Must supply a value for form control at index: ${t}.`);
          });
        }
        _allControlsDisabled() {
          for (const n of this.controls) if (n.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(n) {
          n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const Bs = (() => Promise.resolve(null))();
      let Ws = (() =>
        class extends ts {
          constructor(n, e) {
            super(),
              (this.submitted = !1),
              (this._directives = []),
              (this.ngSubmit = new l.m()),
              (this.form = new zs({}, Ds(n), Ts(e)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(n) {
            Bs.then(() => {
              const e = this._findContainer(n.path);
              (n.control = e.registerControl(n.name, n.control)),
                Ks(n.control, n),
                n.control.updateValueAndValidity({ emitEvent: !1 }),
                this._directives.push(n);
            });
          }
          getControl(n) {
            return this.form.get(n.path);
          }
          removeControl(n) {
            Bs.then(() => {
              const e = this._findContainer(n.path);
              e && e.removeControl(n.name),
                (function(n, e) {
                  const t = n.indexOf(e);
                  t > -1 && n.splice(t, 1);
                })(this._directives, n);
            });
          }
          addFormGroup(n) {
            Bs.then(() => {
              const e = this._findContainer(n.path),
                t = new zs({});
              (function(n, e) {
                null == n && As(e, 'Cannot find control with'),
                  (n.validator = ds.compose([n.validator, e.validator])),
                  (n.asyncValidator = ds.composeAsync([n.asyncValidator, e.asyncValidator]));
              })(t, n),
                e.registerControl(n.name, t),
                t.updateValueAndValidity({ emitEvent: !1 });
            });
          }
          removeFormGroup(n) {
            Bs.then(() => {
              const e = this._findContainer(n.path);
              e && e.removeControl(n.name);
            });
          }
          getFormGroup(n) {
            return this.form.get(n.path);
          }
          updateModel(n, e) {
            Bs.then(() => {
              this.form.get(n.path).setValue(e);
            });
          }
          setValue(n) {
            this.control.setValue(n);
          }
          onSubmit(n) {
            return (
              (this.submitted = !0),
              (e = this._directives),
              this.form._syncPendingControls(),
              e.forEach(n => {
                const e = n.control;
                'submit' === e.updateOn &&
                  e._pendingChange &&
                  (n.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
              }),
              this.ngSubmit.emit(n),
              !1
            );
            var e;
          }
          onReset() {
            this.resetForm();
          }
          resetForm(n) {
            this.form.reset(n), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(n) {
            return n.pop(), n.length ? this.form.get(n) : this.form;
          }
        })();
      class Gs {
        static modelParentException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${ws.formControlName}\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${ws.ngModelWithFormGroup}`
          );
        }
        static formGroupNameException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${ws.formGroupName}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${ws.ngModelGroup}`
          );
        }
        static missingNameException() {
          throw new Error(
            'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
          );
        }
        static modelGroupParentException() {
          throw new Error(
            `\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${ws.formGroupName}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${ws.ngModelGroup}`
          );
        }
        static ngFormWarning() {
          console.warn(
            "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
          );
        }
      }
      const Zs = new l.p('NgFormSelectorWarning');
      class Qs extends ts {
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormGroup(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormGroup(this);
        }
        get control() {
          return this.formDirective.getFormGroup(this);
        }
        get path() {
          return Ps(this.name, this._parent);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return Ds(this._validators);
        }
        get asyncValidator() {
          return Ts(this._asyncValidators);
        }
        _checkParentType() {}
      }
      let Js = (() => {
        class n extends Qs {
          constructor(n, e, t) {
            super(), (this._parent = n), (this._validators = e), (this._asyncValidators = t);
          }
          _checkParentType() {
            this._parent instanceof n || this._parent instanceof Ws || Gs.modelGroupParentException();
          }
        }
        return n;
      })();
      const Ys = (() => Promise.resolve(null))();
      let Xs = (() =>
          class extends rs {
            constructor(n, e, t, r) {
              super(),
                (this.control = new Hs()),
                (this._registered = !1),
                (this.update = new l.m()),
                (this._parent = n),
                (this._rawValidators = e || []),
                (this._rawAsyncValidators = t || []),
                (this.valueAccessor = (function(n, e) {
                  if (!e) return null;
                  Array.isArray(e) || As(n, 'Value accessor was not provided as an array for form control with');
                  let t = void 0,
                    l = void 0,
                    r = void 0;
                  return (
                    e.forEach(e => {
                      e.constructor === ns
                        ? (t = e)
                        : (function(n) {
                            return Is.some(e => n.constructor === e);
                          })(e)
                        ? (l && As(n, 'More than one built-in value accessor matches form control with'), (l = e))
                        : (r && As(n, 'More than one custom value accessor matches form control with'), (r = e));
                    }),
                    r || l || t || (As(n, 'No valid value accessor for form control with'), null)
                  );
                })(this, r));
            }
            ngOnChanges(n) {
              this._checkForErrors(),
                this._registered || this._setUpControl(),
                'isDisabled' in n && this._updateDisabled(n),
                (function(n, e) {
                  if (!n.hasOwnProperty('model')) return !1;
                  const t = n.model;
                  return !!t.isFirstChange() || !Object(l.yb)(e, t.currentValue);
                })(n, this.viewModel) && (this._updateValue(this.model), (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._parent ? Ps(this.name, this._parent) : [this.name];
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            get validator() {
              return Ds(this._rawValidators);
            }
            get asyncValidator() {
              return Ts(this._rawAsyncValidators);
            }
            viewToModelUpdate(n) {
              (this.viewModel = n), this.update.emit(n);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return !this._parent || !(!this.options || !this.options.standalone);
            }
            _setUpStandalone() {
              Ks(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(), this._checkName();
            }
            _checkParentType() {
              !(this._parent instanceof Js) && this._parent instanceof Qs
                ? Gs.formGroupNameException()
                : this._parent instanceof Js || this._parent instanceof Ws || Gs.modelParentException();
            }
            _checkName() {
              this.options && this.options.name && (this.name = this.options.name),
                this._isStandalone() || this.name || Gs.missingNameException();
            }
            _updateValue(n) {
              Ys.then(() => {
                this.control.setValue(n, { emitViewToModelChange: !1 });
              });
            }
            _updateDisabled(n) {
              const e = n.isDisabled.currentValue,
                t = '' === e || (e && 'false' !== e);
              Ys.then(() => {
                t && !this.control.disabled
                  ? this.control.disable()
                  : !t && this.control.disabled && this.control.enable();
              });
            }
          })(),
        ni = (() => class {})();
      const ei = new l.p('NgModelWithFormControlWarning');
      let ti = (() =>
          class {
            get required() {
              return this._required;
            }
            set required(n) {
              (this._required = null != n && !1 !== n && 'false' !== `${n}`), this._onChange && this._onChange();
            }
            validate(n) {
              return this.required ? ds.required(n) : null;
            }
            registerOnValidatorChange(n) {
              this._onChange = n;
            }
          })(),
        li = (() =>
          class {
            set email(n) {
              (this._enabled = '' === n || !0 === n || 'true' === n), this._onChange && this._onChange();
            }
            validate(n) {
              return this._enabled ? ds.email(n) : null;
            }
            registerOnValidatorChange(n) {
              this._onChange = n;
            }
          })(),
        ri = (() =>
          class {
            ngOnChanges(n) {
              'minlength' in n && (this._createValidator(), this._onChange && this._onChange());
            }
            validate(n) {
              return null == this.minlength ? null : this._validator(n);
            }
            registerOnValidatorChange(n) {
              this._onChange = n;
            }
            _createValidator() {
              this._validator = ds.minLength(parseInt(this.minlength, 10));
            }
          })(),
        si = (() =>
          class {
            ngOnChanges(n) {
              'maxlength' in n && (this._createValidator(), this._onChange && this._onChange());
            }
            validate(n) {
              return null != this.maxlength ? this._validator(n) : null;
            }
            registerOnValidatorChange(n) {
              this._onChange = n;
            }
            _createValidator() {
              this._validator = ds.maxLength(parseInt(this.maxlength, 10));
            }
          })(),
        ii = (() =>
          class {
            ngOnChanges(n) {
              'pattern' in n && (this._createValidator(), this._onChange && this._onChange());
            }
            validate(n) {
              return this._validator(n);
            }
            registerOnValidatorChange(n) {
              this._onChange = n;
            }
            _createValidator() {
              this._validator = ds.pattern(this.pattern);
            }
          })(),
        oi = (() => class {})(),
        ui = (() =>
          class {
            group(n, e = null) {
              const t = this._reduceControls(n);
              let l = null,
                r = null,
                s = void 0;
              return (
                null != e &&
                  ((function(n) {
                    return void 0 !== n.asyncValidators || void 0 !== n.validators || void 0 !== n.updateOn;
                  })(e)
                    ? ((l = null != e.validators ? e.validators : null),
                      (r = null != e.asyncValidators ? e.asyncValidators : null),
                      (s = null != e.updateOn ? e.updateOn : void 0))
                    : ((l = null != e.validator ? e.validator : null),
                      (r = null != e.asyncValidator ? e.asyncValidator : null))),
                new zs(t, { asyncValidators: r, updateOn: s, validators: l })
              );
            }
            control(n, e, t) {
              return new Hs(n, e, t);
            }
            array(n, e, t) {
              const l = n.map(n => this._createControl(n));
              return new $s(l, e, t);
            }
            _reduceControls(n) {
              const e = {};
              return (
                Object.keys(n).forEach(t => {
                  e[t] = this._createControl(n[t]);
                }),
                e
              );
            }
            _createControl(n) {
              return n instanceof Hs || n instanceof zs || n instanceof $s
                ? n
                : Array.isArray(n)
                ? this.control(n[0], n.length > 1 ? n[1] : null, n.length > 2 ? n[2] : null)
                : this.control(n);
            }
          })(),
        ai = (() => {
          class n {
            static withConfig(e) {
              return { ngModule: n, providers: [{ provide: Zs, useValue: e.warnOnDeprecatedNgFormSelector }] };
            }
          }
          return n;
        })(),
        ci = (() => {
          class n {
            static withConfig(e) {
              return { ngModule: n, providers: [{ provide: ei, useValue: e.warnOnNgModelWithFormControl }] };
            }
          }
          return n;
        })();
      class di extends vn.a {
        constructor(n, e) {
          super();
        }
        schedule(n, e = 0) {
          return this;
        }
      }
      class hi extends di {
        constructor(n, e) {
          super(n, e), (this.scheduler = n), (this.work = e), (this.pending = !1);
        }
        schedule(n, e = 0) {
          if (this.closed) return this;
          this.state = n;
          const t = this.id,
            l = this.scheduler;
          return (
            null != t && (this.id = this.recycleAsyncId(l, t, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(l, this.id, e)),
            this
          );
        }
        requestAsyncId(n, e, t = 0) {
          return setInterval(n.flush.bind(n, this), t);
        }
        recycleAsyncId(n, e, t = 0) {
          if (null !== t && this.delay === t && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(n, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const t = this._execute(n, e);
          if (t) return t;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(n, e) {
          let t = !1,
            l = void 0;
          try {
            this.work(n);
          } catch (r) {
            (t = !0), (l = (!!r && r) || new Error(r));
          }
          if (t) return this.unsubscribe(), l;
        }
        _unsubscribe() {
          const n = this.id,
            e = this.scheduler,
            t = e.actions,
            l = t.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== l && t.splice(l, 1),
            null != n && (this.id = this.recycleAsyncId(e, n, null)),
            (this.delay = null);
        }
      }
      let pi = (() => {
        class n {
          constructor(e, t = n.now) {
            (this.SchedulerAction = e), (this.now = t);
          }
          schedule(n, e = 0, t) {
            return new this.SchedulerAction(this, n).schedule(t, e);
          }
        }
        return (n.now = () => Date.now()), n;
      })();
      class bi extends pi {
        constructor(n, e = pi.now) {
          super(n, () => (bi.delegate && bi.delegate !== this ? bi.delegate.now() : e())),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(n, e = 0, t) {
          return bi.delegate && bi.delegate !== this ? bi.delegate.schedule(n, e, t) : super.schedule(n, e, t);
        }
        flush(n) {
          const { actions: e } = this;
          if (this.active) return void e.push(n);
          let t;
          this.active = !0;
          do {
            if ((t = n.execute(n.state, n.delay))) break;
          } while ((n = e.shift()));
          if (((this.active = !1), t)) {
            for (; (n = e.shift()); ) n.unsubscribe();
            throw t;
          }
        }
      }
      const gi = new bi(hi),
        fi = new b.a(pn.a);
      function mi(n, e, t, l) {
        return (
          Object(bn.a)(t) && ((l = t), (t = void 0)),
          l
            ? mi(n, e, t).pipe(Object(k.a)(n => (Object(f.a)(n) ? l(...n) : l(n))))
            : new b.a(l => {
                !(function n(e, t, l, r, s) {
                  let i;
                  if (
                    (function(n) {
                      return n && 'function' == typeof n.addEventListener && 'function' == typeof n.removeEventListener;
                    })(e)
                  ) {
                    const n = e;
                    e.addEventListener(t, l, s), (i = () => n.removeEventListener(t, l, s));
                  } else if (
                    (function(n) {
                      return n && 'function' == typeof n.on && 'function' == typeof n.off;
                    })(e)
                  ) {
                    const n = e;
                    e.on(t, l), (i = () => n.off(t, l));
                  } else if (
                    (function(n) {
                      return n && 'function' == typeof n.addListener && 'function' == typeof n.removeListener;
                    })(e)
                  ) {
                    const n = e;
                    e.addListener(t, l), (i = () => n.removeListener(t, l));
                  } else {
                    if (!e || !e.length) throw new TypeError('Invalid event target');
                    for (let i = 0, o = e.length; i < o; i++) n(e[i], t, l, r, s);
                  }
                  r.add(i);
                })(
                  n,
                  e,
                  function(n) {
                    l.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : n);
                  },
                  l,
                  t
                );
              })
        );
      }
      function vi(...n) {
        return e => {
          let t;
          return 'function' == typeof n[n.length - 1] && (t = n.pop()), e.lift(new _i(n, t));
        };
      }
      class _i {
        constructor(n, e) {
          (this.observables = n), (this.project = e);
        }
        call(n, e) {
          return e.subscribe(new yi(n, this.observables, this.project));
        }
      }
      class yi extends m.a {
        constructor(n, e, t) {
          super(n), (this.observables = e), (this.project = t), (this.toRespond = []);
          const l = e.length;
          this.values = new Array(l);
          for (let r = 0; r < l; r++) this.toRespond.push(r);
          for (let r = 0; r < l; r++) {
            let n = e[r];
            this.add(Object(v.a)(this, n, n, r));
          }
        }
        notifyNext(n, e, t, l, r) {
          this.values[t] = e;
          const s = this.toRespond;
          if (s.length > 0) {
            const n = s.indexOf(t);
            -1 !== n && s.splice(n, 1);
          }
        }
        notifyComplete() {}
        _next(n) {
          if (0 === this.toRespond.length) {
            const e = [n, ...this.values];
            this.project ? this._tryProject(e) : this.destination.next(e);
          }
        }
        _tryProject(n) {
          let e;
          try {
            e = this.project.apply(this, n);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
      }
      function wi(n, e) {
        return new b.a(e ? t => e.schedule(Ci, 0, { error: n, subscriber: t }) : e => e.error(n));
      }
      function Ci({ error: n, subscriber: e }) {
        e.error(n);
      }
      let xi = (() => {
        class n {
          constructor(n, e, t) {
            (this.kind = n), (this.value = e), (this.error = t), (this.hasValue = 'N' === n);
          }
          observe(n) {
            switch (this.kind) {
              case 'N':
                return n.next && n.next(this.value);
              case 'E':
                return n.error && n.error(this.error);
              case 'C':
                return n.complete && n.complete();
            }
          }
          do(n, e, t) {
            switch (this.kind) {
              case 'N':
                return n && n(this.value);
              case 'E':
                return e && e(this.error);
              case 'C':
                return t && t();
            }
          }
          accept(n, e, t) {
            return n && 'function' == typeof n.next ? this.observe(n) : this.do(n, e, t);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return a(this.value);
              case 'E':
                return wi(this.error);
              case 'C':
                return x();
            }
            throw new Error('unexpected notification kind value');
          }
          static createNext(e) {
            return void 0 !== e ? new n('N', e) : n.undefinedValueNotification;
          }
          static createError(e) {
            return new n('E', void 0, e);
          }
          static createComplete() {
            return n.completeNotification;
          }
        }
        return (n.completeNotification = new n('C')), (n.undefinedValueNotification = new n('N', void 0)), n;
      })();
      class Oi {
        constructor(n, e) {
          (this.delay = n), (this.scheduler = e);
        }
        call(n, e) {
          return e.subscribe(new ki(n, this.delay, this.scheduler));
        }
      }
      class ki extends P.a {
        constructor(n, e, t) {
          super(n), (this.delay = e), (this.scheduler = t), (this.queue = []), (this.active = !1), (this.errored = !1);
        }
        static dispatch(n) {
          const e = n.source,
            t = e.queue,
            l = n.scheduler,
            r = n.destination;
          for (; t.length > 0 && t[0].time - l.now() <= 0; ) t.shift().notification.observe(r);
          if (t.length > 0) {
            const e = Math.max(0, t[0].time - l.now());
            this.schedule(n, e);
          } else this.unsubscribe(), (e.active = !1);
        }
        _schedule(n) {
          (this.active = !0),
            this.destination.add(
              n.schedule(ki.dispatch, this.delay, { source: this, destination: this.destination, scheduler: n })
            );
        }
        scheduleNotification(n) {
          if (!0 === this.errored) return;
          const e = this.scheduler,
            t = new Si(e.now() + this.delay, n);
          this.queue.push(t), !1 === this.active && this._schedule(e);
        }
        _next(n) {
          this.scheduleNotification(xi.createNext(n));
        }
        _error(n) {
          (this.errored = !0), (this.queue = []), this.destination.error(n), this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(xi.createComplete()), this.unsubscribe();
        }
      }
      class Si {
        constructor(n, e) {
          (this.time = n), (this.notification = e);
        }
      }
      function Mi(n) {
        return parseInt(`${n}`, 10);
      }
      function Pi(n) {
        return null != n ? `${n}` : '';
      }
      function Ki(n) {
        return 'number' == typeof n && isFinite(n) && Math.floor(n) === n;
      }
      function Ei(n) {
        return null != n;
      }
      function Ai(n, e) {
        return n && n.className && n.className.split && n.className.split(/\s+/).indexOf(e) >= 0;
      }
      'undefined' == typeof Element ||
        Element.prototype.closest ||
        (Element.prototype.matches ||
          (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        (Element.prototype.closest = function(n) {
          let e = this;
          if (!document.documentElement.contains(e)) return null;
          do {
            if (e.matches(n)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);
          return null;
        }));
      let Di = (() => class {})(),
        Ti = (() => {
          class n {
            constructor() {
              (this.dismissible = !0), (this.type = 'warning');
            }
          }
          return (
            (n.ngInjectableDef = Object(l.Qb)({
              factory: function() {
                return new n();
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        Ii = (() =>
          class {
            constructor(n, e, t) {
              (this._renderer = e),
                (this._element = t),
                (this.close = new l.m()),
                (this.dismissible = n.dismissible),
                (this.type = n.type);
            }
            closeHandler() {
              this.close.emit(null);
            }
            ngOnChanges(n) {
              const e = n.type;
              e &&
                !e.firstChange &&
                (this._renderer.removeClass(this._element.nativeElement, `alert-${e.previousValue}`),
                this._renderer.addClass(this._element.nativeElement, `alert-${e.currentValue}`));
            }
            ngOnInit() {
              this._renderer.addClass(this._element.nativeElement, `alert-${this.type}`);
            }
          })(),
        qi = (() => class {})(),
        Ni = (() => class {})(),
        Ri = (() => class {})(),
        ji = (() => class {})();
      class Vi {
        static from(n) {
          return n instanceof Vi ? n : n ? new Vi(n.year, n.month, n.day) : null;
        }
        constructor(n, e, t) {
          (this.year = Ki(n) ? n : null), (this.month = Ki(e) ? e : null), (this.day = Ki(t) ? t : null);
        }
        equals(n) {
          return n && this.year === n.year && this.month === n.month && this.day === n.day;
        }
        before(n) {
          return (
            !!n &&
            (this.year === n.year
              ? this.month === n.month
                ? this.day !== n.day && this.day < n.day
                : this.month < n.month
              : this.year < n.year)
          );
        }
        after(n) {
          return (
            !!n &&
            (this.year === n.year
              ? this.month === n.month
                ? this.day !== n.day && this.day > n.day
                : this.month > n.month
              : this.year > n.year)
          );
        }
      }
      function Li(n) {
        return new Vi(n.getFullYear(), n.getMonth() + 1, n.getDate());
      }
      function Ui(n) {
        const e = new Date(n.year, n.month - 1, n.day, 12);
        return isNaN(e.getTime()) || e.setFullYear(n.year), e;
      }
      function Fi() {
        return new zi();
      }
      let Hi = (() => {
          class n {}
          return (n.ngInjectableDef = Object(l.Qb)({ factory: Fi, token: n, providedIn: 'root' })), n;
        })(),
        zi = (() =>
          class extends Hi {
            getDaysPerWeek() {
              return 7;
            }
            getMonths() {
              return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }
            getWeeksPerMonth() {
              return 6;
            }
            getNext(n, e = 'd', t = 1) {
              let l = Ui(n),
                r = !0,
                s = l.getMonth();
              switch (e) {
                case 'y':
                  l.setFullYear(l.getFullYear() + t);
                  break;
                case 'm':
                  l.setMonth((s += t)), (s %= 12) < 0 && (s += 12);
                  break;
                case 'd':
                  l.setDate(l.getDate() + t), (r = !1);
                  break;
                default:
                  return n;
              }
              return r && l.getMonth() !== s && l.setDate(0), Li(l);
            }
            getPrev(n, e = 'd', t = 1) {
              return this.getNext(n, e, -t);
            }
            getWeekday(n) {
              let e = Ui(n).getDay();
              return 0 === e ? 7 : e;
            }
            getWeekNumber(n, e) {
              7 === e && (e = 0);
              const t = Ui(n[(11 - e) % 7]);
              t.setDate(t.getDate() + 4 - (t.getDay() || 7));
              const l = t.getTime();
              return t.setMonth(0), t.setDate(1), Math.floor(Math.round((l - t.getTime()) / 864e5) / 7) + 1;
            }
            getToday() {
              return Li(new Date());
            }
            isValid(n) {
              if (!(n && Ki(n.year) && Ki(n.month) && Ki(n.day))) return !1;
              if (0 === n.year) return !1;
              const e = Ui(n);
              return (
                !isNaN(e.getTime()) &&
                e.getFullYear() === n.year &&
                e.getMonth() + 1 === n.month &&
                e.getDate() === n.day
              );
            }
          })();
      function $i(n, e) {
        return !(function(n, e) {
          return (!n && !e) || (!!n && !!e && n.equals(e));
        })(n, e);
      }
      function Bi(n, e) {
        return !((!n && !e) || (n && e && n.year === e.year && n.month === e.month));
      }
      function Wi(n, e, t) {
        return n && e && n.before(e) ? e : n && t && n.after(t) ? t : n;
      }
      function Gi(n, e) {
        const { minDate: t, maxDate: l, disabled: r, markDisabled: s } = e;
        return !(
          !Ei(n) ||
          r ||
          (s && s(n, { year: n.year, month: n.month })) ||
          (t && n.before(t)) ||
          (l && n.after(l))
        );
      }
      let Zi = (() => {
          class n {
            getDayNumerals(n) {
              return `${n.day}`;
            }
            getWeekNumerals(n) {
              return `${n}`;
            }
            getYearNumerals(n) {
              return `${n}`;
            }
          }
          return (
            (n.ngInjectableDef = Object(l.Qb)({
              factory: function() {
                return (n = Object(l.Rb)(l.t)), new Qi(n);
                var n;
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        Qi = (() =>
          class extends Zi {
            constructor(n) {
              super(), (this._locale = n);
              const e = Object(s.t)(n, s.d.Standalone, s.q.Short);
              (this._weekdaysShort = e.map((n, t) => e[(t + 1) % 7])),
                (this._monthsShort = Object(s.v)(n, s.d.Standalone, s.q.Abbreviated)),
                (this._monthsFull = Object(s.v)(n, s.d.Standalone, s.q.Wide));
            }
            getWeekdayShortName(n) {
              return this._weekdaysShort[n - 1];
            }
            getMonthShortName(n) {
              return this._monthsShort[n - 1];
            }
            getMonthFullName(n) {
              return this._monthsFull[n - 1];
            }
            getDayAriaLabel(n) {
              const e = new Date(n.year, n.month - 1, n.day);
              return Object(s.s)(e, 'fullDate', this._locale);
            }
          })(),
        Ji = (() =>
          class {
            constructor(n, e) {
              (this._calendar = n),
                (this._i18n = e),
                (this._model$ = new d.a()),
                (this._select$ = new d.a()),
                (this._state = {
                  disabled: !1,
                  displayMonths: 1,
                  firstDayOfWeek: 1,
                  focusVisible: !1,
                  months: [],
                  navigation: 'select',
                  outsideDays: 'visible',
                  prevDisabled: !1,
                  nextDisabled: !1,
                  selectBoxes: { years: [], months: [] },
                  selectedDate: null
                });
            }
            get model$() {
              return this._model$.pipe(K(n => n.months.length > 0));
            }
            get select$() {
              return this._select$.pipe(K(n => null !== n));
            }
            set dayTemplateData(n) {
              this._state.dayTemplateData !== n && this._nextState({ dayTemplateData: n });
            }
            set disabled(n) {
              this._state.disabled !== n && this._nextState({ disabled: n });
            }
            set displayMonths(n) {
              Ki((n = Mi(n))) && n > 0 && this._state.displayMonths !== n && this._nextState({ displayMonths: n });
            }
            set firstDayOfWeek(n) {
              Ki((n = Mi(n))) && n >= 0 && this._state.firstDayOfWeek !== n && this._nextState({ firstDayOfWeek: n });
            }
            set focusVisible(n) {
              this._state.focusVisible === n || this._state.disabled || this._nextState({ focusVisible: n });
            }
            set maxDate(n) {
              const e = this.toValidDate(n, null);
              $i(this._state.maxDate, e) && this._nextState({ maxDate: e });
            }
            set markDisabled(n) {
              this._state.markDisabled !== n && this._nextState({ markDisabled: n });
            }
            set minDate(n) {
              const e = this.toValidDate(n, null);
              $i(this._state.minDate, e) && this._nextState({ minDate: e });
            }
            set navigation(n) {
              this._state.navigation !== n && this._nextState({ navigation: n });
            }
            set outsideDays(n) {
              this._state.outsideDays !== n && this._nextState({ outsideDays: n });
            }
            focus(n) {
              !this._state.disabled &&
                this._calendar.isValid(n) &&
                $i(this._state.focusDate, n) &&
                this._nextState({ focusDate: n });
            }
            focusMove(n, e) {
              this.focus(this._calendar.getNext(this._state.focusDate, n, e));
            }
            focusSelect() {
              Gi(this._state.focusDate, this._state) && this.select(this._state.focusDate, { emitEvent: !0 });
            }
            open(n) {
              const e = this.toValidDate(n, this._calendar.getToday());
              this._state.disabled ||
                (this._state.firstDate && !Bi(this._state.firstDate, n)) ||
                this._nextState({ firstDate: e });
            }
            select(n, e = {}) {
              const t = this.toValidDate(n, null);
              this._state.disabled ||
                ($i(this._state.selectedDate, t) && this._nextState({ selectedDate: t }),
                e.emitEvent && Gi(t, this._state) && this._select$.next(t));
            }
            toValidDate(n, e) {
              const t = Vi.from(n);
              return void 0 === e && (e = this._calendar.getToday()), this._calendar.isValid(t) ? t : e;
            }
            _nextState(n) {
              const e = this._updateState(n);
              this._patchContexts(e), (this._state = e), this._model$.next(this._state);
            }
            _patchContexts(n) {
              const {
                months: e,
                displayMonths: t,
                selectedDate: l,
                focusDate: r,
                focusVisible: s,
                disabled: i,
                outsideDays: o
              } = n;
              n.months.forEach(n => {
                n.weeks.forEach(u => {
                  u.days.forEach(u => {
                    r && (u.context.focused = r.equals(u.date) && s),
                      (u.tabindex = !i && u.date.equals(r) && r.month === n.number ? 0 : -1),
                      !0 === i && (u.context.disabled = !0),
                      void 0 !== l && (u.context.selected = null !== l && l.equals(u.date)),
                      n.number !== u.date.month &&
                        (u.hidden =
                          'hidden' === o ||
                          'collapsed' === o ||
                          (t > 1 && u.date.after(e[0].firstDate) && u.date.before(e[t - 1].lastDate)));
                  });
                });
              });
            }
            _updateState(n) {
              const e = Object.assign({}, this._state, n);
              let t = e.firstDate;
              if (
                (('minDate' in n || 'maxDate' in n) &&
                  ((function(n, e) {
                    if (e && n && e.before(n)) throw new Error(`'maxDate' ${e} should be greater than 'minDate' ${n}`);
                  })(e.minDate, e.maxDate),
                  (e.focusDate = Wi(e.focusDate, e.minDate, e.maxDate)),
                  (e.firstDate = Wi(e.firstDate, e.minDate, e.maxDate)),
                  (t = e.focusDate)),
                'disabled' in n && (e.focusVisible = !1),
                'selectedDate' in n && 0 === this._state.months.length && (t = e.selectedDate),
                'focusVisible' in n)
              )
                return e;
              if (
                'focusDate' in n &&
                ((e.focusDate = Wi(e.focusDate, e.minDate, e.maxDate)),
                (t = e.focusDate),
                0 !== e.months.length && !e.focusDate.before(e.firstDate) && !e.focusDate.after(e.lastDate))
              )
                return e;
              if (('firstDate' in n && ((e.firstDate = Wi(e.firstDate, e.minDate, e.maxDate)), (t = e.firstDate)), t)) {
                const l = (function(n, e, t, l, r) {
                  const { displayMonths: s, months: i } = t,
                    o = i.splice(0, i.length);
                  return (
                    Array.from({ length: s }, (t, l) => {
                      const s = Object.assign(n.getNext(e, 'm', l), { day: 1 });
                      if (((i[l] = null), !r)) {
                        const n = o.findIndex(n => n.firstDate.equals(s));
                        -1 !== n && (i[l] = o.splice(n, 1)[0]);
                      }
                      return s;
                    }).forEach((e, r) => {
                      null === i[r] &&
                        (i[r] = (function(n, e, t, l, r = {}) {
                          const {
                              dayTemplateData: s,
                              minDate: i,
                              maxDate: o,
                              firstDayOfWeek: u,
                              markDisabled: a,
                              outsideDays: c
                            } = t,
                            d = n.getToday();
                          (r.firstDate = null),
                            (r.lastDate = null),
                            (r.number = e.month),
                            (r.year = e.year),
                            (r.weeks = r.weeks || []),
                            (r.weekdays = r.weekdays || []),
                            (e = (function(n, e, t) {
                              const l = n.getDaysPerWeek(),
                                r = new Vi(e.year, e.month, 1),
                                s = n.getWeekday(r) % l;
                              return n.getPrev(r, 'd', (l + s - t) % l);
                            })(n, e, u));
                          for (let h = 0; h < n.getWeeksPerMonth(); h++) {
                            let t = r.weeks[h];
                            t || (t = r.weeks[h] = { number: 0, days: [], collapsed: !0 });
                            const p = t.days;
                            for (let u = 0; u < n.getDaysPerWeek(); u++) {
                              0 === h && (r.weekdays[u] = n.getWeekday(e));
                              const t = new Vi(e.year, e.month, e.day),
                                c = n.getNext(t),
                                b = l.getDayAriaLabel(t);
                              let g = !!((i && t.before(i)) || (o && t.after(o)));
                              !g && a && (g = a(t, { month: r.number, year: r.year }));
                              let f = t.equals(d),
                                m = s ? s(t, { month: r.number, year: r.year }) : void 0;
                              null === r.firstDate && t.month === r.number && (r.firstDate = t),
                                t.month === r.number && c.month !== r.number && (r.lastDate = t);
                              let v = p[u];
                              v || (v = p[u] = {}),
                                (v.date = t),
                                (v.context = Object.assign(v.context || {}, {
                                  $implicit: t,
                                  date: t,
                                  data: m,
                                  currentMonth: r.number,
                                  disabled: g,
                                  focused: !1,
                                  selected: !1,
                                  today: f
                                })),
                                (v.tabindex = -1),
                                (v.ariaLabel = b),
                                (v.hidden = !1),
                                (e = c);
                            }
                            (t.number = n.getWeekNumber(
                              p.map(n => n.date),
                              u
                            )),
                              (t.collapsed =
                                'collapsed' === c &&
                                p[0].date.month !== r.number &&
                                p[p.length - 1].date.month !== r.number);
                          }
                          return r;
                        })(n, e, t, l, o.shift() || {}));
                    }),
                    i
                  );
                })(
                  this._calendar,
                  t,
                  e,
                  this._i18n,
                  'dayTemplateData' in n ||
                    'firstDayOfWeek' in n ||
                    'markDisabled' in n ||
                    'minDate' in n ||
                    'maxDate' in n ||
                    'disabled' in n ||
                    'outsideDays' in n
                );
                (e.months = l),
                  (e.firstDate = l.length > 0 ? l[0].firstDate : void 0),
                  (e.lastDate = l.length > 0 ? l[l.length - 1].lastDate : void 0),
                  'selectedDate' in n && !Gi(e.selectedDate, e) && (e.selectedDate = null),
                  'firstDate' in n &&
                    (void 0 === e.focusDate || e.focusDate.before(e.firstDate) || e.focusDate.after(e.lastDate)) &&
                    (e.focusDate = t);
                const r = !this._state.firstDate || this._state.firstDate.year !== e.firstDate.year,
                  s = !this._state.firstDate || this._state.firstDate.month !== e.firstDate.month;
                'select' === e.navigation
                  ? (('minDate' in n || 'maxDate' in n || 0 === e.selectBoxes.years.length || r) &&
                      (e.selectBoxes.years = (function(n, e, t) {
                        if (!n) return [];
                        const l = e ? Math.max(e.year, n.year - 500) : n.year - 10,
                          r = (t ? Math.min(t.year, n.year + 500) : n.year + 10) - l + 1,
                          s = Array(r);
                        for (let i = 0; i < r; i++) s[i] = l + i;
                        return s;
                      })(e.firstDate, e.minDate, e.maxDate)),
                    ('minDate' in n || 'maxDate' in n || 0 === e.selectBoxes.months.length || r) &&
                      (e.selectBoxes.months = (function(n, e, t, l) {
                        if (!e) return [];
                        let r = n.getMonths(e.year);
                        if (t && e.year === t.year) {
                          const n = r.findIndex(n => n === t.month);
                          r = r.slice(n);
                        }
                        if (l && e.year === l.year) {
                          const n = r.findIndex(n => n === l.month);
                          r = r.slice(0, n + 1);
                        }
                        return r;
                      })(this._calendar, e.firstDate, e.minDate, e.maxDate)))
                  : (e.selectBoxes = { years: [], months: [] }),
                  ('arrows' !== e.navigation && 'select' !== e.navigation) ||
                    !(s || r || 'minDate' in n || 'maxDate' in n || 'disabled' in n) ||
                    ((e.prevDisabled =
                      e.disabled ||
                      (function(n, e, t) {
                        const l = Object.assign(n.getPrev(e, 'm'), { day: 1 });
                        return t && ((l.year === t.year && l.month < t.month) || (l.year < t.year && 1 === t.month));
                      })(this._calendar, e.firstDate, e.minDate)),
                    (e.nextDisabled =
                      e.disabled ||
                      (function(n, e, t) {
                        const l = Object.assign(n.getNext(e, 'm'), { day: 1 });
                        return t && l.after(t);
                      })(this._calendar, e.lastDate, e.maxDate)));
              }
              return e;
            }
          })();
      const Yi = (function() {
        var n = {
          Tab: 9,
          Enter: 13,
          Escape: 27,
          Space: 32,
          PageUp: 33,
          PageDown: 34,
          End: 35,
          Home: 36,
          ArrowLeft: 37,
          ArrowUp: 38,
          ArrowRight: 39,
          ArrowDown: 40
        };
        return (
          (n[n.Tab] = 'Tab'),
          (n[n.Enter] = 'Enter'),
          (n[n.Escape] = 'Escape'),
          (n[n.Space] = 'Space'),
          (n[n.PageUp] = 'PageUp'),
          (n[n.PageDown] = 'PageDown'),
          (n[n.End] = 'End'),
          (n[n.Home] = 'Home'),
          (n[n.ArrowLeft] = 'ArrowLeft'),
          (n[n.ArrowUp] = 'ArrowUp'),
          (n[n.ArrowRight] = 'ArrowRight'),
          (n[n.ArrowDown] = 'ArrowDown'),
          n
        );
      })();
      let Xi = (() =>
        class {
          constructor(n, e) {
            (this._service = n),
              (this._calendar = e),
              n.model$.subscribe(n => {
                (this._minDate = n.minDate),
                  (this._maxDate = n.maxDate),
                  (this._firstViewDate = n.firstDate),
                  (this._lastViewDate = n.lastDate);
              });
          }
          processKey(n) {
            switch (n.which) {
              case Yi.PageUp:
                this._service.focusMove(n.shiftKey ? 'y' : 'm', -1);
                break;
              case Yi.PageDown:
                this._service.focusMove(n.shiftKey ? 'y' : 'm', 1);
                break;
              case Yi.End:
                this._service.focus(n.shiftKey ? this._maxDate : this._lastViewDate);
                break;
              case Yi.Home:
                this._service.focus(n.shiftKey ? this._minDate : this._firstViewDate);
                break;
              case Yi.ArrowLeft:
                this._service.focusMove('d', -1);
                break;
              case Yi.ArrowUp:
                this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                break;
              case Yi.ArrowRight:
                this._service.focusMove('d', 1);
                break;
              case Yi.ArrowDown:
                this._service.focusMove('d', this._calendar.getDaysPerWeek());
                break;
              case Yi.Enter:
              case Yi.Space:
                this._service.focusSelect();
                break;
              default:
                return;
            }
            n.preventDefault(), n.stopPropagation();
          }
        })();
      const no = (function() {
        var n = { PREV: 0, NEXT: 1 };
        return (n[n.PREV] = 'PREV'), (n[n.NEXT] = 'NEXT'), n;
      })();
      let eo = (() => {
        class n {
          constructor() {
            (this.displayMonths = 1),
              (this.firstDayOfWeek = 1),
              (this.navigation = 'select'),
              (this.outsideDays = 'visible'),
              (this.showWeekdays = !0),
              (this.showWeekNumbers = !1);
          }
        }
        return (
          (n.ngInjectableDef = Object(l.Qb)({
            factory: function() {
              return new n();
            },
            token: n,
            providedIn: 'root'
          })),
          n
        );
      })();
      function to() {
        return new ro();
      }
      let lo = (() => {
          class n {}
          return (n.ngInjectableDef = Object(l.Qb)({ factory: to, token: n, providedIn: 'root' })), n;
        })(),
        ro = (() =>
          class extends lo {
            fromModel(n) {
              return n && Ki(n.year) && Ki(n.month) && Ki(n.day) ? { year: n.year, month: n.month, day: n.day } : null;
            }
            toModel(n) {
              return n && Ki(n.year) && Ki(n.month) && Ki(n.day) ? { year: n.year, month: n.month, day: n.day } : null;
            }
          })(),
        so = (() =>
          class {
            constructor(n, e, t, r, s, i, o, u, a) {
              (this._keyMapService = n),
                (this._service = e),
                (this._calendar = t),
                (this.i18n = r),
                (this._cd = i),
                (this._elementRef = o),
                (this._ngbDateAdapter = u),
                (this._ngZone = a),
                (this._destroyed$ = new d.a()),
                (this.navigate = new l.m()),
                (this.select = new l.m()),
                (this.onChange = n => {}),
                (this.onTouched = () => {}),
                [
                  'dayTemplate',
                  'dayTemplateData',
                  'displayMonths',
                  'firstDayOfWeek',
                  'footerTemplate',
                  'markDisabled',
                  'minDate',
                  'maxDate',
                  'navigation',
                  'outsideDays',
                  'showWeekdays',
                  'showWeekNumbers',
                  'startDate'
                ].forEach(n => (this[n] = s[n])),
                e.select$.pipe(Vr(this._destroyed$)).subscribe(n => {
                  this.select.emit(n);
                }),
                e.model$.pipe(Vr(this._destroyed$)).subscribe(n => {
                  const e = n.firstDate,
                    t = this.model ? this.model.firstDate : null;
                  let l = !1;
                  if (
                    !e.equals(t) &&
                    (this.navigate.emit({
                      current: t ? { year: t.year, month: t.month } : null,
                      next: { year: e.year, month: e.month },
                      preventDefault: () => (l = !0)
                    }),
                    l && null !== t)
                  )
                    return void this._service.open(t);
                  const r = n.selectedDate,
                    s = n.focusDate,
                    o = this.model ? this.model.focusDate : null;
                  (this.model = n),
                    $i(r, this._controlValue) &&
                      ((this._controlValue = r), this.onTouched(), this.onChange(this._ngbDateAdapter.toModel(r))),
                    $i(s, o) && o && n.focusVisible && this.focus(),
                    i.markForCheck();
                });
            }
            focus() {
              this._ngZone.onStable
                .asObservable()
                .pipe(Z(1))
                .subscribe(() => {
                  const n = this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
                  n && n.focus();
                });
            }
            navigateTo(n) {
              this._service.open(Vi.from(n ? (n.day ? n : Object.assign({}, n, { day: 1 })) : null));
            }
            ngAfterViewInit() {
              this._ngZone.runOutsideAngular(() => {
                const n = mi(this._monthsEl.nativeElement, 'focusin'),
                  e = mi(this._monthsEl.nativeElement, 'focusout');
                Object(fl.a)(n, e)
                  .pipe(
                    K(({ target: n, relatedTarget: e }) => !(Ai(n, 'ngb-dp-day') && Ai(e, 'ngb-dp-day'))),
                    Vr(this._destroyed$)
                  )
                  .subscribe(({ type: n }) => this._ngZone.run(() => (this._service.focusVisible = 'focusin' === n)));
              });
            }
            ngOnDestroy() {
              this._destroyed$.next();
            }
            ngOnInit() {
              void 0 === this.model &&
                ([
                  'dayTemplateData',
                  'displayMonths',
                  'markDisabled',
                  'firstDayOfWeek',
                  'navigation',
                  'minDate',
                  'maxDate',
                  'outsideDays'
                ].forEach(n => (this._service[n] = this[n])),
                this.navigateTo(this.startDate));
            }
            ngOnChanges(n) {
              if (
                ([
                  'dayTemplateData',
                  'displayMonths',
                  'markDisabled',
                  'firstDayOfWeek',
                  'navigation',
                  'minDate',
                  'maxDate',
                  'outsideDays'
                ]
                  .filter(e => e in n)
                  .forEach(n => (this._service[n] = this[n])),
                'startDate' in n)
              ) {
                const { currentValue: e, previousValue: t } = n.startDate;
                Bi(t, e) && this.navigateTo(this.startDate);
              }
            }
            onDateSelect(n) {
              this._service.focus(n), this._service.select(n, { emitEvent: !0 });
            }
            onKeyDown(n) {
              this._keyMapService.processKey(n);
            }
            onNavigateDateSelect(n) {
              this._service.open(n);
            }
            onNavigateEvent(n) {
              switch (n) {
                case no.PREV:
                  this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                  break;
                case no.NEXT:
                  this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
              }
            }
            registerOnChange(n) {
              this.onChange = n;
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            setDisabledState(n) {
              this._service.disabled = n;
            }
            writeValue(n) {
              (this._controlValue = Vi.from(this._ngbDateAdapter.fromModel(n))),
                this._service.select(this._controlValue);
            }
          })(),
        io = (() =>
          class {
            constructor(n) {
              (this.i18n = n), (this.select = new l.m());
            }
            doSelect(n) {
              n.context.disabled || n.hidden || this.select.emit(n.date);
            }
          })(),
        oo = (() =>
          class {
            constructor(n) {
              (this.i18n = n),
                (this.navigation = no),
                (this.months = []),
                (this.navigate = new l.m()),
                (this.select = new l.m());
            }
            onClickPrev(n) {
              n.currentTarget.focus(), this.navigate.emit(this.navigation.PREV);
            }
            onClickNext(n) {
              n.currentTarget.focus(), this.navigate.emit(this.navigation.NEXT);
            }
          })();
      'undefined' != typeof navigator && navigator.userAgent && navigator;
      const uo = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[contenteditable]',
        '[tabindex]:not([tabindex="-1"])'
      ].join(', ');
      function ao(n) {
        const e = Array.from(n.querySelectorAll(uo)).filter(n => -1 !== n.tabIndex);
        return [e[0], e[e.length - 1]];
      }
      const co = (n, e, t, l = !1) => {
        n.runOutsideAngular(() => {
          const n = mi(e, 'focusin').pipe(
            Vr(t),
            Object(k.a)(n => n.target)
          );
          mi(e, 'keydown')
            .pipe(
              Vr(t),
              K(n => n.which === Yi.Tab),
              vi(n)
            )
            .subscribe(([n, t]) => {
              const [l, r] = ao(e);
              (t !== l && t !== e) || !n.shiftKey || (r.focus(), n.preventDefault()),
                t !== r || n.shiftKey || (l.focus(), n.preventDefault());
            }),
            l &&
              mi(e, 'click')
                .pipe(
                  Vr(t),
                  vi(n),
                  Object(k.a)(n => n[1])
                )
                .subscribe(n => n.focus());
        });
      };
      let ho = (() =>
          class {
            constructor(n) {
              this.i18n = n;
            }
            isMuted() {
              return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
            }
          })(),
        po = (() =>
          class {
            constructor(n, e) {
              (this.i18n = n), (this._renderer = e), (this.select = new l.m()), (this._month = -1), (this._year = -1);
            }
            changeMonth(n) {
              this.select.emit(new Vi(this.date.year, Mi(n), 1));
            }
            changeYear(n) {
              this.select.emit(new Vi(Mi(n), this.date.month, 1));
            }
            ngAfterViewChecked() {
              this.date &&
                (this.date.month !== this._month &&
                  ((this._month = this.date.month),
                  this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month)),
                this.date.year !== this._year &&
                  ((this._year = this.date.year),
                  this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year)));
            }
          })(),
        bo = (() => class {})(),
        go = (() => class {})(),
        fo = (() => {
          class n {
            constructor() {
              (this.backdrop = !0), (this.keyboard = !0);
            }
          }
          return (
            (n.ngInjectableDef = Object(l.Qb)({
              factory: function() {
                return new n();
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })();
      class mo {
        constructor(n, e, t) {
          (this.nodes = n), (this.viewRef = e), (this.componentRef = t);
        }
      }
      const vo = () => {};
      let _o = (() => {
          class n {
            constructor(n) {
              this._document = n;
            }
            compensate() {
              return this._isPresent() ? this._adjustBody(this._getWidth()) : vo;
            }
            _adjustBody(n) {
              const e = this._document.body,
                t = e.style.paddingRight,
                l = parseFloat(window.getComputedStyle(e)['padding-right']);
              return (e.style['padding-right'] = `${l + n}px`), () => (e.style['padding-right'] = t);
            }
            _isPresent() {
              const n = this._document.body.getBoundingClientRect();
              return n.left + n.right < window.innerWidth;
            }
            _getWidth() {
              const n = this._document.createElement('div');
              n.className = 'modal-scrollbar-measure';
              const e = this._document.body;
              e.appendChild(n);
              const t = n.getBoundingClientRect().width - n.clientWidth;
              return e.removeChild(n), t;
            }
          }
          return (
            (n.ngInjectableDef = Object(l.Qb)({
              factory: function() {
                return new n(Object(l.Rb)(s.c));
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        yo = (() => class {})();
      class wo {
        close(n) {}
        dismiss(n) {}
      }
      class Co {
        constructor(n, e, t, l) {
          (this._windowCmptRef = n),
            (this._contentRef = e),
            (this._backdropCmptRef = t),
            (this._beforeDismiss = l),
            n.instance.dismissEvent.subscribe(n => {
              this.dismiss(n);
            }),
            (this.result = new Promise((n, e) => {
              (this._resolve = n), (this._reject = e);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance;
        }
        close(n) {
          this._windowCmptRef && (this._resolve(n), this._removeModalElements());
        }
        _dismiss(n) {
          this._reject(n), this._removeModalElements();
        }
        dismiss(n) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const e = this._beforeDismiss();
              e && e.then
                ? e.then(
                    e => {
                      !1 !== e && this._dismiss(n);
                    },
                    () => {}
                  )
                : !1 !== e && this._dismiss(n);
            } else this._dismiss(n);
        }
        _removeModalElements() {
          const n = this._windowCmptRef.location.nativeElement;
          if ((n.parentNode.removeChild(n), this._windowCmptRef.destroy(), this._backdropCmptRef)) {
            const n = this._backdropCmptRef.location.nativeElement;
            n.parentNode.removeChild(n), this._backdropCmptRef.destroy();
          }
          this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
            (this._windowCmptRef = null),
            (this._backdropCmptRef = null),
            (this._contentRef = null);
        }
      }
      const xo = (function() {
        var n = { BACKDROP_CLICK: 0, ESC: 1 };
        return (n[n.BACKDROP_CLICK] = 'BACKDROP_CLICK'), (n[n.ESC] = 'ESC'), n;
      })();
      let Oo = (() =>
          class {
            constructor(n, e, t) {
              (this._document = n),
                (this._elRef = e),
                (this._zone = t),
                (this.backdrop = !0),
                (this.keyboard = !0),
                (this.dismissEvent = new l.m()),
                t.runOutsideAngular(() => {
                  mi(this._elRef.nativeElement, 'keydown')
                    .pipe(
                      Vr(this.dismissEvent),
                      K(n => n.which === Yi.Escape && this.keyboard)
                    )
                    .subscribe(n =>
                      requestAnimationFrame(() => {
                        n.defaultPrevented || t.run(() => this.dismiss(xo.ESC));
                      })
                    );
                  const n = mi(this._elRef.nativeElement, 'mousedown').pipe(
                    Vr(this.dismissEvent),
                    Object(k.a)(n => !0 === this.backdrop && this._elRef.nativeElement === n.target)
                  );
                  mi(this._elRef.nativeElement, 'mouseup')
                    .pipe(
                      Vr(this.dismissEvent),
                      vi(n),
                      K(([n, e]) => e)
                    )
                    .subscribe(() => this._zone.run(() => this.dismiss(xo.BACKDROP_CLICK)));
                });
            }
            dismiss(n) {
              this.dismissEvent.emit(n);
            }
            ngOnInit() {
              this._elWithFocus = this._document.activeElement;
            }
            ngAfterViewInit() {
              if (!this._elRef.nativeElement.contains(document.activeElement)) {
                const n = this._elRef.nativeElement.querySelector('[ngbAutofocus]'),
                  e = ao(this._elRef.nativeElement)[0];
                (n || e || this._elRef.nativeElement).focus();
              }
            }
            ngOnDestroy() {
              const n = this._document.body,
                e = this._elWithFocus;
              let t;
              (t = e && e.focus && n.contains(e) ? e : n),
                this._zone.runOutsideAngular(() => {
                  setTimeout(() => t.focus()), (this._elWithFocus = null);
                });
            }
          })(),
        ko = (() => {
          class n {
            constructor(n, e, t, l, r, s) {
              (this._applicationRef = n),
                (this._injector = e),
                (this._document = t),
                (this._scrollBar = l),
                (this._rendererFactory = r),
                (this._ngZone = s),
                (this._activeWindowCmptHasChanged = new d.a()),
                (this._ariaHiddenValues = new Map()),
                (this._backdropAttributes = ['backdropClass']),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  'ariaLabelledBy',
                  'backdrop',
                  'centered',
                  'keyboard',
                  'scrollable',
                  'size',
                  'windowClass'
                ]),
                (this._windowCmpts = []),
                this._activeWindowCmptHasChanged.subscribe(() => {
                  if (this._windowCmpts.length) {
                    const n = this._windowCmpts[this._windowCmpts.length - 1];
                    co(this._ngZone, n.location.nativeElement, this._activeWindowCmptHasChanged),
                      this._revertAriaHidden(),
                      this._setAriaHidden(n.location.nativeElement);
                  }
                });
            }
            open(n, e, t, l) {
              const r = Ei(l.container) ? this._document.querySelector(l.container) : this._document.body,
                s = this._rendererFactory.createRenderer(null, null),
                i = this._scrollBar.compensate(),
                o = () => {
                  this._modalRefs.length ||
                    (s.removeClass(this._document.body, 'modal-open'), this._revertAriaHidden());
                };
              if (!r)
                throw new Error(`The specified modal container "${l.container || 'body'}" was not found in the DOM.`);
              const u = new wo(),
                a = this._getContentRef(n, l.injector || e, t, u, l);
              let c = !1 !== l.backdrop ? this._attachBackdrop(n, r) : null,
                d = this._attachWindowComponent(n, r, a),
                h = new Co(d, a, c, l.beforeDismiss);
              return (
                this._registerModalRef(h),
                this._registerWindowCmpt(d),
                h.result.then(i, i),
                h.result.then(o, o),
                (u.close = n => {
                  h.close(n);
                }),
                (u.dismiss = n => {
                  h.dismiss(n);
                }),
                this._applyWindowOptions(d.instance, l),
                1 === this._modalRefs.length && s.addClass(this._document.body, 'modal-open'),
                c && c.instance && this._applyBackdropOptions(c.instance, l),
                h
              );
            }
            dismissAll(n) {
              this._modalRefs.forEach(e => e.dismiss(n));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(n, e) {
              let t = n.resolveComponentFactory(yo).create(this._injector);
              return this._applicationRef.attachView(t.hostView), e.appendChild(t.location.nativeElement), t;
            }
            _attachWindowComponent(n, e, t) {
              let l = n.resolveComponentFactory(Oo).create(this._injector, t.nodes);
              return this._applicationRef.attachView(l.hostView), e.appendChild(l.location.nativeElement), l;
            }
            _applyWindowOptions(n, e) {
              this._windowAttributes.forEach(t => {
                Ei(e[t]) && (n[t] = e[t]);
              });
            }
            _applyBackdropOptions(n, e) {
              this._backdropAttributes.forEach(t => {
                Ei(e[t]) && (n[t] = e[t]);
              });
            }
            _getContentRef(n, e, t, r, s) {
              return t
                ? t instanceof l.K
                  ? this._createFromTemplateRef(t, r)
                  : 'string' == typeof t
                  ? this._createFromString(t)
                  : this._createFromComponent(n, e, t, r, s)
                : new mo([]);
            }
            _createFromTemplateRef(n, e) {
              const t = n.createEmbeddedView({
                $implicit: e,
                close(n) {
                  e.close(n);
                },
                dismiss(n) {
                  e.dismiss(n);
                }
              });
              return this._applicationRef.attachView(t), new mo([t.rootNodes], t);
            }
            _createFromString(n) {
              const e = this._document.createTextNode(`${n}`);
              return new mo([[e]]);
            }
            _createFromComponent(n, e, t, r, s) {
              const i = n.resolveComponentFactory(t),
                o = l.q.create({ providers: [{ provide: wo, useValue: r }], parent: e }),
                u = i.create(o),
                a = u.location.nativeElement;
              return (
                s.scrollable && a.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(u.hostView),
                new mo([[a]], u.hostView, u)
              );
            }
            _setAriaHidden(n) {
              const e = n.parentElement;
              e &&
                n !== this._document.body &&
                (Array.from(e.children).forEach(e => {
                  e !== n &&
                    'SCRIPT' !== e.nodeName &&
                    (this._ariaHiddenValues.set(e, e.getAttribute('aria-hidden')),
                    e.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(e));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((n, e) => {
                n ? e.setAttribute('aria-hidden', n) : e.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(n) {
              const e = () => {
                const e = this._modalRefs.indexOf(n);
                e > -1 && this._modalRefs.splice(e, 1);
              };
              this._modalRefs.push(n), n.result.then(e, e);
            }
            _registerWindowCmpt(n) {
              this._windowCmpts.push(n),
                this._activeWindowCmptHasChanged.next(),
                n.onDestroy(() => {
                  const e = this._windowCmpts.indexOf(n);
                  e > -1 && (this._windowCmpts.splice(e, 1), this._activeWindowCmptHasChanged.next());
                });
            }
          }
          return (
            (n.ngInjectableDef = Object(l.Qb)({
              factory: function() {
                return new n(
                  Object(l.Rb)(l.g),
                  Object(l.Rb)(l.n),
                  Object(l.Rb)(s.c),
                  Object(l.Rb)(_o),
                  Object(l.Rb)(l.D),
                  Object(l.Rb)(l.y)
                );
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        So = (() => {
          class n {
            constructor(n, e, t, l) {
              (this._moduleCFR = n), (this._injector = e), (this._modalStack = t), (this._config = l);
            }
            open(n, e = {}) {
              const t = Object.assign({}, this._config, e);
              return this._modalStack.open(this._moduleCFR, this._injector, n, t);
            }
            dismissAll(n) {
              this._modalStack.dismissAll(n);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          }
          return (
            (n.ngInjectableDef = Object(l.Qb)({
              factory: function() {
                return new n(Object(l.Rb)(l.j), Object(l.Rb)(l.n), Object(l.Rb)(ko), Object(l.Rb)(fo));
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })(),
        Mo = (() => class {})(),
        Po = (() => class {})(),
        Ko = (() =>
          class {
            isTitleTemplate() {
              return this.title instanceof l.K;
            }
          })(),
        Eo = (() => class {})(),
        Ao = (() => class {})(),
        Do = (() => class {})(),
        To = (() => class {})(),
        Io = (() => class {})(),
        qo = (() => class {})(),
        No = (() => class {})(),
        Ro = (() => class {})(),
        jo = (() =>
          class {
            constructor() {
              this.highlightClass = 'ngb-highlight';
            }
            ngOnChanges(n) {
              const e = Pi(this.result),
                t = (Array.isArray(this.term) ? this.term : [this.term])
                  .map(n =>
                    (function(n) {
                      return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
                    })(Pi(n))
                  )
                  .filter(n => n);
              this.parts = t.length ? e.split(new RegExp(`(${t.join('|')})`, 'gmi')) : [e];
            }
          })(),
        Vo = (() =>
          class {
            constructor() {
              (this.activeIdx = 0),
                (this.focusFirst = !0),
                (this.formatter = Pi),
                (this.selectEvent = new l.m()),
                (this.activeChangeEvent = new l.m());
            }
            hasActive() {
              return this.activeIdx > -1 && this.activeIdx < this.results.length;
            }
            getActive() {
              return this.results[this.activeIdx];
            }
            markActive(n) {
              (this.activeIdx = n), this._activeChanged();
            }
            next() {
              this.activeIdx === this.results.length - 1
                ? (this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1)
                : this.activeIdx++,
                this._activeChanged();
            }
            prev() {
              this.activeIdx < 0
                ? (this.activeIdx = this.results.length - 1)
                : 0 === this.activeIdx
                ? (this.activeIdx = this.focusFirst ? this.results.length - 1 : -1)
                : this.activeIdx--,
                this._activeChanged();
            }
            resetActive() {
              (this.activeIdx = this.focusFirst ? 0 : -1), this._activeChanged();
            }
            select(n) {
              this.selectEvent.emit(n);
            }
            ngOnInit() {
              this.resetActive();
            }
            _activeChanged() {
              this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : void 0);
            }
          })(),
        Lo = (() => class {})(),
        Uo = (() => class {})();
      var Fo = l.ob({ encapsulation: 2, styles: ['ngb-alert{display:block}'], data: {} });
      function Ho(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              4,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'close'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.closeHandler() && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(2, 0, null, null, 1, 'span', [['aria-hidden', 'true']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\xd7'])),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          null,
          null
        );
      }
      function zo(n) {
        return l.Mb(
          2,
          [
            (n()(), l.Kb(-1, null, ['\n    '])),
            l.Bb(null, 0),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, Ho)),
            l.pb(4, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            n(e, 4, 0, e.component.dismissible);
          },
          null
        );
      }
      function $o(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-alert',
              [
                ['class', 'alert'],
                ['role', 'alert']
              ],
              [[2, 'alert-dismissible', null]],
              null,
              null,
              zo,
              Fo
            )),
            l.pb(1, 638976, null, 0, Ii, [Ti, l.C, l.k], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          function(n, e) {
            n(e, 0, 0, l.Cb(e, 1).dismissible);
          }
        );
      }
      var Bo = l.mb('ngb-alert', Ii, $o, { dismissible: 'dismissible', type: 'type' }, { close: 'close' }, ['*']),
        Wo = l.ob({
          encapsulation: 2,
          styles: [
            'ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}.ngb-dp-day[tabindex="0"]{z-index:1}'
          ],
          data: {}
        });
      function Go(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'ngb-dp-weekday ngb-dp-showweek']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      function Zo(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [
                ['class', 'ngb-dp-weekday small'],
                ['role', 'columnheader']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(1, null, ['\n        ', '\n      ']))
          ],
          null,
          function(n, e) {
            n(e, 1, 0, e.component.i18n.getWeekdayShortName(e.context.$implicit));
          }
        );
      }
      function Qo(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              7,
              'div',
              [
                ['class', 'ngb-dp-week ngb-dp-weekdays'],
                ['role', 'row']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, Go)),
            l.pb(3, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, Zo)),
            l.pb(6, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 3, 0, t.showWeekNumbers), n(e, 6, 0, t.month.weekdays);
          },
          null
        );
      }
      function Jo(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'ngb-dp-week-number small text-muted']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(1, null, ['', '']))
          ],
          null,
          function(n, e) {
            n(e, 1, 0, e.component.i18n.getWeekNumerals(e.parent.parent.context.$implicit.number));
          }
        );
      }
      function Yo(n) {
        return l.Mb(0, [(n()(), l.fb(0, null, null, 0))], null, null);
      }
      function Xo(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.fb(16777216, null, null, 1, null, Yo)),
            l.pb(
              2,
              540672,
              null,
              0,
              s.n,
              [l.N],
              { ngTemplateOutletContext: [0, 'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] },
              null
            ),
            (n()(), l.Kb(-1, null, ['\n          ']))
          ],
          function(n, e) {
            n(e, 2, 0, e.parent.context.$implicit.context, e.component.dayTemplate);
          },
          null
        );
      }
      function nu(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              4,
              'div',
              [
                ['class', 'ngb-dp-day'],
                ['role', 'gridcell']
              ],
              [
                [2, 'disabled', null],
                [8, 'tabIndex', 0],
                [2, 'hidden', null],
                [2, 'ngb-dp-today', null],
                [1, 'aria-label', 0]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.doSelect(n.context.$implicit) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.fb(16777216, null, null, 1, null, Xo)),
            l.pb(3, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n        ']))
          ],
          function(n, e) {
            n(e, 3, 0, !e.context.$implicit.hidden);
          },
          function(n, e) {
            n(
              e,
              0,
              0,
              e.context.$implicit.context.disabled,
              e.context.$implicit.tabindex,
              e.context.$implicit.hidden,
              e.context.$implicit.context.today,
              e.context.$implicit.ariaLabel
            );
          }
        );
      }
      function eu(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              7,
              'div',
              [
                ['class', 'ngb-dp-week'],
                ['role', 'row']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.fb(16777216, null, null, 1, null, Jo)),
            l.pb(3, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.fb(16777216, null, null, 1, null, nu)),
            l.pb(6, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n      ']))
          ],
          function(n, e) {
            n(e, 3, 0, e.component.showWeekNumbers), n(e, 6, 0, e.parent.context.$implicit.days);
          },
          null
        );
      }
      function tu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, eu)),
            l.pb(2, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            n(e, 2, 0, !e.context.$implicit.collapsed);
          },
          null
        );
      }
      function lu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, Qo)),
            l.pb(2, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, tu)),
            l.pb(5, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n  ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 2, 0, t.showWeekdays), n(e, 5, 0, t.month.weeks);
          },
          null
        );
      }
      var ru = l.ob({
        encapsulation: 2,
        styles: [
          '[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}'
        ],
        data: {}
      });
      function su(n) {
        return l.Mb(2, [(n()(), l.Kb(0, null, ['', '']))], null, function(n, e) {
          var t = e.component;
          n(e, 0, 0, t.i18n.getDayNumerals(t.date));
        });
      }
      var iu = l.ob({
        encapsulation: 2,
        styles: [
          'ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}'
        ],
        data: {}
      });
      function ou(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              2,
              'ngb-datepicker-navigation-select',
              [['class', 'ngb-dp-navigation-select']],
              null,
              [[null, 'select']],
              function(n, e, t) {
                var l = !0;
                return 'select' === e && (l = !1 !== n.component.select.emit(t) && l), l;
              },
              fu,
              pu
            )),
            l.pb(
              1,
              8437760,
              null,
              0,
              po,
              [Zi, l.C],
              { date: [0, 'date'], disabled: [1, 'disabled'], months: [2, 'months'], years: [3, 'years'] },
              { select: 'select' }
            ),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 1, 0, t.date, t.disabled, t.selectBoxes.months, t.selectBoxes.years);
          },
          null
        );
      }
      function uu(n) {
        return l.Mb(
          0,
          [(n()(), l.qb(0, 0, null, null, 0, 'div', [['class', 'ngb-dp-arrow']], null, null, null, null, null))],
          null,
          null
        );
      }
      function au(n) {
        return l.Mb(
          0,
          [(n()(), l.qb(0, 0, null, null, 0, 'div', [['class', 'ngb-dp-arrow']], null, null, null, null, null))],
          null,
          null
        );
      }
      function cu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, uu)),
            l.pb(2, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(4, 0, null, null, 1, 'div', [['class', 'ngb-dp-month-name']], null, null, null, null, null)),
            (n()(), l.Kb(5, null, ['\n        ', ' ', '\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, au)),
            l.pb(8, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 2, 0, e.context.index > 0), n(e, 8, 0, e.context.index !== t.months.length - 1);
          },
          function(n, e) {
            var t = e.component;
            n(
              e,
              5,
              0,
              t.i18n.getMonthFullName(e.context.$implicit.number, e.context.$implicit.year),
              t.i18n.getYearNumerals(e.context.$implicit.year)
            );
          }
        );
      }
      function du(n) {
        return l.Mb(
          0,
          [
            (n()(), l.fb(16777216, null, null, 1, null, cu)),
            l.pb(1, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.fb(0, null, null, 0))
          ],
          function(n, e) {
            n(e, 1, 0, e.component.months);
          },
          null
        );
      }
      function hu(n) {
        return l.Mb(
          2,
          [
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(1, 0, null, null, 6, 'div', [['class', 'ngb-dp-arrow']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              3,
              0,
              null,
              null,
              3,
              'button',
              [
                ['aria-label', 'Previous month'],
                ['class', 'btn btn-link ngb-dp-arrow-btn'],
                ['title', 'Previous month'],
                ['type', 'button']
              ],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.onClickPrev(t) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(5, 0, null, null, 0, 'span', [['class', 'ngb-dp-navigation-chevron']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, ou)),
            l.pb(10, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, du)),
            l.pb(13, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(15, 0, null, null, 6, 'div', [['class', 'ngb-dp-arrow right']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              17,
              0,
              null,
              null,
              3,
              'button',
              [
                ['aria-label', 'Next month'],
                ['class', 'btn btn-link ngb-dp-arrow-btn'],
                ['title', 'Next month'],
                ['type', 'button']
              ],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.onClickNext(t) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(19, 0, null, null, 0, 'span', [['class', 'ngb-dp-navigation-chevron']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 10, 0, t.showSelect), n(e, 13, 0, !t.showSelect);
          },
          function(n, e) {
            var t = e.component;
            n(e, 3, 0, t.prevDisabled), n(e, 17, 0, t.nextDisabled);
          }
        );
      }
      var pu = l.ob({
        encapsulation: 2,
        styles: [
          'ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}'
        ],
        data: {}
      });
      function bu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 3, 'option', [], [[1, 'aria-label', 0]], null, null, null, null)),
            l.pb(1, 147456, null, 0, Os, [l.k, l.C, [8, null]], { value: [0, 'value'] }, null),
            l.pb(2, 147456, null, 0, Ms, [l.k, l.C, [8, null]], { value: [0, 'value'] }, null),
            (n()(), l.Kb(3, null, ['', '']))
          ],
          function(n, e) {
            n(e, 1, 0, e.context.$implicit), n(e, 2, 0, e.context.$implicit);
          },
          function(n, e) {
            var t = e.component;
            n(e, 0, 0, t.i18n.getMonthFullName(e.context.$implicit, null == t.date ? null : t.date.year)),
              n(e, 3, 0, t.i18n.getMonthShortName(e.context.$implicit, null == t.date ? null : t.date.year));
          }
        );
      }
      function gu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
            l.pb(1, 147456, null, 0, Os, [l.k, l.C, [8, null]], { value: [0, 'value'] }, null),
            l.pb(2, 147456, null, 0, Ms, [l.k, l.C, [8, null]], { value: [0, 'value'] }, null),
            (n()(), l.Kb(3, null, ['', '']))
          ],
          function(n, e) {
            n(e, 1, 0, e.context.$implicit), n(e, 2, 0, e.context.$implicit);
          },
          function(n, e) {
            n(e, 3, 0, e.component.i18n.getYearNumerals(e.context.$implicit));
          }
        );
      }
      function fu(n) {
        return l.Mb(
          2,
          [
            l.Ib(402653184, 1, { monthSelect: 0 }),
            l.Ib(402653184, 2, { yearSelect: 0 }),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              3,
              0,
              [
                [1, 0],
                ['month', 1]
              ],
              null,
              4,
              'select',
              [
                ['aria-label', 'Select month'],
                ['class', 'custom-select'],
                ['title', 'Select month']
              ],
              [[8, 'disabled', 0]],
              [[null, 'change']],
              function(n, e, t) {
                var l = !0;
                return 'change' === e && (l = !1 !== n.component.changeMonth(t.target.value) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.fb(16777216, null, null, 1, null, bu)),
            l.pb(6, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              8,
              0,
              [
                [2, 0],
                ['year', 1]
              ],
              null,
              4,
              'select',
              [
                ['aria-label', 'Select year'],
                ['class', 'custom-select'],
                ['title', 'Select year']
              ],
              [[8, 'disabled', 0]],
              [[null, 'change']],
              function(n, e, t) {
                var l = !0;
                return 'change' === e && (l = !1 !== n.component.changeYear(t.target.value) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.fb(16777216, null, null, 1, null, gu)),
            l.pb(11, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 6, 0, t.months), n(e, 11, 0, t.years);
          },
          function(n, e) {
            var t = e.component;
            n(e, 3, 0, t.disabled), n(e, 8, 0, t.disabled);
          }
        );
      }
      var mu = l.ob({
        encapsulation: 2,
        styles: [
          'ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}'
        ],
        data: {}
      });
      function vu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              1,
              0,
              null,
              null,
              2,
              'div',
              [
                ['class', 'btn-light'],
                ['ngbDatepickerDayView', '']
              ],
              [
                [2, 'bg-primary', null],
                [2, 'text-white', null],
                [2, 'text-muted', null],
                [2, 'outside', null],
                [2, 'active', null]
              ],
              null,
              null,
              su,
              ru
            )),
            l.pb(
              2,
              49152,
              null,
              0,
              ho,
              [Zi],
              {
                currentMonth: [0, 'currentMonth'],
                date: [1, 'date'],
                disabled: [2, 'disabled'],
                focused: [3, 'focused'],
                selected: [4, 'selected']
              },
              null
            ),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            n(
              e,
              2,
              0,
              e.context.currentMonth,
              e.context.date,
              e.context.disabled,
              e.context.focused,
              e.context.selected
            );
          },
          function(n, e) {
            n(
              e,
              1,
              0,
              l.Cb(e, 2).selected,
              l.Cb(e, 2).selected,
              l.Cb(e, 2).isMuted(),
              l.Cb(e, 2).isMuted(),
              l.Cb(e, 2).focused
            );
          }
        );
      }
      function _u(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              2,
              'ngb-datepicker-navigation',
              [],
              null,
              [
                [null, 'navigate'],
                [null, 'select']
              ],
              function(n, e, t) {
                var l = !0,
                  r = n.component;
                return (
                  'navigate' === e && (l = !1 !== r.onNavigateEvent(t) && l),
                  'select' === e && (l = !1 !== r.onNavigateDateSelect(t) && l),
                  l
                );
              },
              hu,
              iu
            )),
            l.pb(
              1,
              49152,
              null,
              0,
              oo,
              [Zi],
              {
                date: [0, 'date'],
                disabled: [1, 'disabled'],
                months: [2, 'months'],
                showSelect: [3, 'showSelect'],
                prevDisabled: [4, 'prevDisabled'],
                nextDisabled: [5, 'nextDisabled'],
                selectBoxes: [6, 'selectBoxes']
              },
              { navigate: 'navigate', select: 'select' }
            ),
            (n()(), l.Kb(-1, null, ['\n      ']))
          ],
          function(n, e) {
            var t = e.component;
            n(
              e,
              1,
              0,
              t.model.firstDate,
              t.model.disabled,
              t.model.months,
              'select' === t.model.navigation,
              t.model.prevDisabled,
              t.model.nextDisabled,
              t.model.selectBoxes
            );
          },
          null
        );
      }
      function yu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'div', [['class', 'ngb-dp-month-name']], null, null, null, null, null)),
            (n()(), l.Kb(1, null, ['\n            ', ' ', '\n          ']))
          ],
          null,
          function(n, e) {
            var t = e.component;
            n(
              e,
              1,
              0,
              t.i18n.getMonthFullName(e.parent.context.$implicit.number, e.parent.context.$implicit.year),
              t.i18n.getYearNumerals(e.parent.context.$implicit.year)
            );
          }
        );
      }
      function wu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(1, 0, null, null, 8, 'div', [['class', 'ngb-dp-month']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.fb(16777216, null, null, 1, null, yu)),
            l.pb(4, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              6,
              0,
              null,
              null,
              2,
              'ngb-datepicker-month-view',
              [['role', 'grid']],
              null,
              [[null, 'select']],
              function(n, e, t) {
                var l = !0;
                return 'select' === e && (l = !1 !== n.component.onDateSelect(t) && l), l;
              },
              lu,
              Wo
            )),
            l.pb(
              7,
              49152,
              null,
              0,
              io,
              [Zi],
              {
                dayTemplate: [0, 'dayTemplate'],
                month: [1, 'month'],
                showWeekdays: [2, 'showWeekdays'],
                showWeekNumbers: [3, 'showWeekNumbers']
              },
              { select: 'select' }
            ),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 4, 0, 'none' === t.navigation || (t.displayMonths > 1 && 'select' === t.navigation)),
              n(e, 7, 0, t.dayTemplate || l.Cb(e.parent, 2), e.context.$implicit, t.showWeekdays, t.showWeekNumbers);
          },
          null
        );
      }
      function Cu(n) {
        return l.Mb(0, [(n()(), l.fb(0, null, null, 0))], null, null);
      }
      function xu(n) {
        return l.Mb(
          2,
          [
            l.Ib(402653184, 1, { _monthsEl: 0 }),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(0, [['dt', 2]], null, 0, null, vu)),
            (n()(), l.Kb(-1, null, ['\n\n    '])),
            (n()(), l.qb(4, 0, null, null, 4, 'div', [['class', 'ngb-dp-header']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, _u)),
            l.pb(7, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n\n    '])),
            (n()(),
            l.qb(
              10,
              0,
              [
                [1, 0],
                ['months', 1]
              ],
              null,
              4,
              'div',
              [['class', 'ngb-dp-months']],
              null,
              [[null, 'keydown']],
              function(n, e, t) {
                var l = !0;
                return 'keydown' === e && (l = !1 !== n.component.onKeyDown(t) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, wu)),
            l.pb(13, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, Cu)),
            l.pb(17, 540672, null, 0, s.n, [l.N], { ngTemplateOutlet: [0, 'ngTemplateOutlet'] }, null),
            (n()(), l.Kb(-1, null, ['\n  ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 7, 0, 'none' !== t.navigation), n(e, 13, 0, t.model.months), n(e, 17, 0, t.footerTemplate);
          },
          null
        );
      }
      function Ou(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 4, 'ngb-datepicker', [], null, null, null, xu, mu)),
            l.Hb(
              5120,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [so]
            ),
            l.Hb(512, null, Ji, Ji, [Hi, Zi]),
            l.Hb(512, null, Xi, Xi, [Ji, Hi]),
            l.pb(4, 4964352, null, 0, so, [Xi, Ji, Hi, Zi, eo, l.h, l.k, lo, l.y], null, null)
          ],
          function(n, e) {
            n(e, 4, 0);
          },
          null
        );
      }
      var ku = l.mb(
          'ngb-datepicker',
          so,
          Ou,
          {
            dayTemplate: 'dayTemplate',
            dayTemplateData: 'dayTemplateData',
            displayMonths: 'displayMonths',
            firstDayOfWeek: 'firstDayOfWeek',
            footerTemplate: 'footerTemplate',
            markDisabled: 'markDisabled',
            maxDate: 'maxDate',
            minDate: 'minDate',
            navigation: 'navigation',
            outsideDays: 'outsideDays',
            showWeekdays: 'showWeekdays',
            showWeekNumbers: 'showWeekNumbers',
            startDate: 'startDate'
          },
          { navigate: 'navigate', select: 'select' },
          []
        ),
        Su = l.ob({
          encapsulation: 2,
          styles: [
            'ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}'
          ],
          data: {}
        });
      function Mu(n) {
        return l.Mb(0, [(n()(), l.Kb(0, null, ['', '']))], null, function(n, e) {
          n(e, 0, 0, e.component.title);
        });
      }
      function Pu(n) {
        return l.Mb(0, [(n()(), l.fb(0, null, null, 0))], null, null);
      }
      function Ku(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 6, 'h3', [['class', 'popover-header']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(0, [['simpleTitle', 2]], null, 0, null, Mu)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.fb(16777216, null, null, 1, null, Pu)),
            l.pb(
              5,
              540672,
              null,
              0,
              s.n,
              [l.N],
              { ngTemplateOutletContext: [0, 'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] },
              null
            ),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 5, 0, t.context, t.isTitleTemplate() ? t.title : l.Cb(e, 2));
          },
          null
        );
      }
      function Eu(n) {
        return l.Mb(
          2,
          [
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(1, 0, null, null, 0, 'div', [['class', 'arrow']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, Ku)),
            l.pb(4, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(6, 0, null, null, 1, 'div', [['class', 'popover-body']], null, null, null, null, null)),
            l.Bb(null, 0)
          ],
          function(n, e) {
            n(e, 4, 0, null != e.component.title);
          },
          null
        );
      }
      function Au(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-popover-window',
              [['role', 'tooltip']],
              [
                [8, 'className', 0],
                [8, 'id', 0]
              ],
              null,
              null,
              Eu,
              Su
            )),
            l.pb(1, 49152, null, 0, Ko, [], null, null)
          ],
          null,
          function(n, e) {
            n(e, 0, 0, 'popover' + (l.Cb(e, 1).popoverClass ? ' ' + l.Cb(e, 1).popoverClass : ''), l.Cb(e, 1).id);
          }
        );
      }
      var Du = l.mb(
          'ngb-popover-window',
          Ko,
          Au,
          { title: 'title', id: 'id', popoverClass: 'popoverClass', context: 'context' },
          {},
          ['*']
        ),
        Tu = l.ob({
          encapsulation: 2,
          styles: [
            'ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}'
          ],
          data: {}
        });
      function Iu(n) {
        return l.Mb(
          2,
          [
            (n()(), l.qb(0, 0, null, null, 0, 'div', [['class', 'arrow']], null, null, null, null, null)),
            (n()(), l.qb(1, 0, null, null, 1, 'div', [['class', 'tooltip-inner']], null, null, null, null, null)),
            l.Bb(null, 0)
          ],
          null,
          null
        );
      }
      function qu(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-tooltip-window',
              [['role', 'tooltip']],
              [
                [8, 'className', 0],
                [8, 'id', 0]
              ],
              null,
              null,
              Iu,
              Tu
            )),
            l.pb(1, 49152, null, 0, No, [], null, null)
          ],
          null,
          function(n, e) {
            n(e, 0, 0, 'tooltip show' + (l.Cb(e, 1).tooltipClass ? ' ' + l.Cb(e, 1).tooltipClass : ''), l.Cb(e, 1).id);
          }
        );
      }
      var Nu = l.mb('ngb-tooltip-window', No, qu, { id: 'id', tooltipClass: 'tooltipClass' }, {}, ['*']),
        Ru = l.ob({ encapsulation: 2, styles: [], data: {} });
      function ju(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(1, 0, null, null, 1, 'ngb-highlight', [], null, null, null, Gu, zu)),
            l.pb(2, 573440, null, 0, jo, [], { result: [0, 'result'], term: [1, 'term'] }, null),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            var t = e.context.formatter(e.context.result);
            n(e, 2, 0, t, e.context.term);
          },
          null
        );
      }
      function Vu(n) {
        return l.Mb(0, [(n()(), l.fb(0, null, null, 0))], null, null);
      }
      function Lu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              1,
              0,
              null,
              null,
              5,
              'button',
              [
                ['class', 'dropdown-item'],
                ['role', 'option'],
                ['type', 'button']
              ],
              [
                [8, 'id', 0],
                [2, 'active', null]
              ],
              [
                [null, 'mouseenter'],
                [null, 'click']
              ],
              function(n, e, t) {
                var l = !0,
                  r = n.component;
                return (
                  'mouseenter' === e && (l = !1 !== r.markActive(n.context.index) && l),
                  'click' === e && (l = !1 !== r.select(n.context.$implicit) && l),
                  l
                );
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.fb(16777216, null, null, 2, null, Vu)),
            l.pb(
              4,
              540672,
              null,
              0,
              s.n,
              [l.N],
              { ngTemplateOutletContext: [0, 'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] },
              null
            ),
            l.Fb(5, { result: 0, term: 1, formatter: 2 }),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          function(n, e) {
            var t = e.component,
              r = n(e, 5, 0, e.context.$implicit, t.term, t.formatter);
            n(e, 4, 0, r, t.resultTemplate || l.Cb(e.parent, 1));
          },
          function(n, e) {
            var t = e.component;
            n(e, 1, 0, t.id + '-' + e.context.index, e.context.index === t.activeIdx);
          }
        );
      }
      function Uu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(0, [['rt', 2]], null, 0, null, ju)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.fb(16777216, null, null, 1, null, Lu)),
            l.pb(4, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n  ']))
          ],
          function(n, e) {
            n(e, 4, 0, e.component.results);
          },
          null
        );
      }
      function Fu(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-typeahead-window',
              [
                ['class', 'dropdown-menu show'],
                ['role', 'listbox']
              ],
              [[8, 'id', 0]],
              [[null, 'mousedown']],
              function(n, e, t) {
                var l = !0;
                return 'mousedown' === e && (l = !1 !== t.preventDefault() && l), l;
              },
              Uu,
              Ru
            )),
            l.pb(1, 114688, null, 0, Vo, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          function(n, e) {
            n(e, 0, 0, l.Cb(e, 1).id);
          }
        );
      }
      var Hu = l.mb(
          'ngb-typeahead-window',
          Vo,
          Fu,
          {
            id: 'id',
            focusFirst: 'focusFirst',
            results: 'results',
            term: 'term',
            formatter: 'formatter',
            resultTemplate: 'resultTemplate'
          },
          { selectEvent: 'select', activeChangeEvent: 'activeChange' },
          []
        ),
        zu = l.ob({ encapsulation: 2, styles: ['.ngb-highlight{font-weight:700}'], data: {} });
      function $u(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'span', [], [[8, 'className', 0]], null, null, null, null)),
            (n()(), l.Kb(1, null, ['', '']))
          ],
          null,
          function(n, e) {
            n(e, 0, 0, e.component.highlightClass), n(e, 1, 0, e.parent.context.$implicit);
          }
        );
      }
      function Bu(n) {
        return l.Mb(0, [(n()(), l.Kb(0, null, ['', '']))], null, function(n, e) {
          n(e, 0, 0, e.parent.context.$implicit);
        });
      }
      function Wu(n) {
        return l.Mb(
          0,
          [
            (n()(), l.fb(16777216, null, null, 1, null, $u)),
            l.pb(1, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] }, null),
            (n()(), l.fb(0, [['even', 2]], null, 0, null, Bu))
          ],
          function(n, e) {
            n(e, 1, 0, e.context.odd, l.Cb(e, 2));
          },
          null
        );
      }
      function Gu(n) {
        return l.Mb(
          2,
          [
            (n()(), l.fb(16777216, null, null, 1, null, Wu)),
            l.pb(1, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null)
          ],
          function(n, e) {
            n(e, 1, 0, e.component.parts);
          },
          null
        );
      }
      var Zu = l.ob({ encapsulation: 2, styles: [], data: {} });
      function Qu(n) {
        return l.Mb(0, [], null, null);
      }
      function Ju(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-modal-backdrop',
              [['style', 'z-index: 1050']],
              [[8, 'className', 0]],
              null,
              null,
              Qu,
              Zu
            )),
            l.pb(1, 49152, null, 0, yo, [], null, null)
          ],
          null,
          function(n, e) {
            n(e, 0, 0, 'modal-backdrop fade show' + (l.Cb(e, 1).backdropClass ? ' ' + l.Cb(e, 1).backdropClass : ''));
          }
        );
      }
      var Yu = l.mb('ngb-modal-backdrop', yo, Ju, { backdropClass: 'backdropClass' }, {}, []),
        Xu = l.ob({
          encapsulation: 2,
          styles: [
            'ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}'
          ],
          data: {}
        });
      function na(n) {
        return l.Mb(
          0,
          [
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(1, 0, null, null, 4, 'div', [['role', 'document']], [[8, 'className', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(3, 0, null, null, 1, 'div', [['class', 'modal-content']], null, null, null, null, null)),
            l.Bb(null, 0),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    ']))
          ],
          null,
          function(n, e) {
            var t = e.component;
            n(
              e,
              1,
              0,
              'modal-dialog' +
                (t.size ? ' modal-' + t.size : '') +
                (t.centered ? ' modal-dialog-centered' : '') +
                (t.scrollable ? ' modal-dialog-scrollable' : '')
            );
          }
        );
      }
      function ea(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-modal-window',
              [
                ['role', 'dialog'],
                ['tabindex', '-1']
              ],
              [
                [8, 'className', 0],
                [1, 'aria-modal', 0],
                [1, 'aria-labelledby', 0]
              ],
              null,
              null,
              na,
              Xu
            )),
            l.pb(1, 4440064, null, 0, Oo, [s.c, l.k, l.y], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          function(n, e) {
            n(
              e,
              0,
              0,
              'modal fade show d-block' + (l.Cb(e, 1).windowClass ? ' ' + l.Cb(e, 1).windowClass : ''),
              !0,
              l.Cb(e, 1).ariaLabelledBy
            );
          }
        );
      }
      var ta = l.mb(
        'ngb-modal-window',
        Oo,
        ea,
        {
          ariaLabelledBy: 'ariaLabelledBy',
          backdrop: 'backdrop',
          centered: 'centered',
          keyboard: 'keyboard',
          scrollable: 'scrollable',
          size: 'size',
          windowClass: 'windowClass'
        },
        { dismissEvent: 'dismiss' },
        ['*']
      );
      class la {
        constructor(n, e, t) {
          (this.router = n), (this.authenticationService = e), (this.credentialsService = t), (this.menuHidden = !0);
        }
        ngOnInit() {}
        toggleMenu() {
          this.menuHidden = !this.menuHidden;
        }
      }
      var ra = l.ob({
        encapsulation: 0,
        styles: [
          [
            'oval[_ngcontent-%COMP%]{height:57px;width:57px;background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);border-radius:50px;margin:auto}.header-title-box[_ngcontent-%COMP%]{padding-top:10px;padding-left:10px}.sidebar-heading[_ngcontent-%COMP%]{padding:.875rem 1.25rem;font-size:1.2rem}.list-group[_ngcontent-%COMP%]{width:15rem}#page-content-wrapper[_ngcontent-%COMP%]{min-width:100vw}#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.warning[_ngcontent-%COMP%]{color:#ba0e0e;font-weight:700}.sidebar-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#9b9b9b}.active[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.overview-box[_ngcontent-%COMP%]{width:100%;height:150px;background:#fff;margin-bottom:2rem;box-shadow:0 0 15px 5px #f5f5f5;border-radius:5px}.overview-box.full[_ngcontent-%COMP%]{width:100%;height:332px;font-size:13px}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem}.circle[_ngcontent-%COMP%]{width:47px;height:47px}.main-table[_ngcontent-%COMP%]{background:#fff}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.3rem;text-align:center;padding:2rem;margin:0}.table-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;font-weight:700}.table-dropdown[_ngcontent-%COMP%]   button.dropdown-item[_ngcontent-%COMP%]{font-weight:400;padding:10px;border-bottom:1px solid #d9d9d9}.table-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.main-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.3rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.2rem 0 1.2rem 1.5rem}.main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.2rem 0 1.2rem 1.5rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline}.modal-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;text-decoration:underline;color:#007bff}@media (min-width:768px){#sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}#page-content-wrapper[_ngcontent-%COMP%]{min-width:0;width:100%;background:#f8f8f8}#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%]{margin-left:-15rem}}'
          ]
        ],
        data: {}
      });
      function sa(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'div', [['class', 'sidebar-heading']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['HiredHelpr'])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(),
            l.qb(
              3,
              0,
              null,
              null,
              90,
              'div',
              [['class', 'list-group list-group-flush']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              5,
              0,
              null,
              null,
              15,
              'a',
              [
                ['class', 'list-group-item list-group-item-action bg-light'],
                ['routerLinkActive', 'active']
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 6).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(6, 671744, [[2, 4]], 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(7, 1),
            l.pb(
              8,
              1720320,
              null,
              2,
              $t,
              [Ut, l.k, l.C, [2, Ft], [2, Ht]],
              { routerLinkActiveOptions: [0, 'routerLinkActiveOptions'], routerLinkActive: [1, 'routerLinkActive'] },
              null
            ),
            l.Ib(603979776, 1, { links: 1 }),
            l.Ib(603979776, 2, { linksWithHrefs: 1 }),
            l.Fb(11, { exact: 0 }),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(13, 0, null, null, 6, 'div', [['class', 'sidebar-nav']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(15, 0, null, null, 0, 'span', [['class', 'nav-icon']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(17, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Overview'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              22,
              0,
              null,
              null,
              15,
              'a',
              [
                ['class', 'list-group-item list-group-item-action bg-light'],
                ['routerLinkActive', 'active']
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 23).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(23, 671744, [[4, 4]], 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(24, 1),
            l.pb(
              25,
              1720320,
              null,
              2,
              $t,
              [Ut, l.k, l.C, [2, Ft], [2, Ht]],
              { routerLinkActiveOptions: [0, 'routerLinkActiveOptions'], routerLinkActive: [1, 'routerLinkActive'] },
              null
            ),
            l.Ib(603979776, 3, { links: 1 }),
            l.Ib(603979776, 4, { linksWithHrefs: 1 }),
            l.Fb(28, { exact: 0 }),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(30, 0, null, null, 6, 'div', [['class', 'sidebar-nav']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(32, 0, null, null, 0, 'span', [['class', 'nav-icon']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Maintenance'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              39,
              0,
              null,
              null,
              9,
              'a',
              [
                ['class', 'list-group-item list-group-item-action bg-light'],
                ['href', '#']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(41, 0, null, null, 6, 'div', [['class', 'sidebar-nav']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(43, 0, null, null, 0, 'span', [['class', 'nav-icon']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(45, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Messages'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              50,
              0,
              null,
              null,
              9,
              'a',
              [
                ['class', 'list-group-item list-group-item-action bg-light'],
                ['href', '#']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(52, 0, null, null, 6, 'div', [['class', 'sidebar-nav']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(54, 0, null, null, 0, 'span', [['class', 'nav-icon']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(56, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Pool Pro'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              61,
              0,
              null,
              null,
              9,
              'a',
              [
                ['class', 'list-group-item list-group-item-action bg-light'],
                ['href', '../invoices/']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(63, 0, null, null, 6, 'div', [['class', 'sidebar-nav']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(65, 0, null, null, 0, 'span', [['class', 'nav-icon']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(67, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Invoices'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              72,
              0,
              null,
              null,
              9,
              'a',
              [
                ['class', 'list-group-item list-group-item-action bg-light'],
                ['href', '#']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(74, 0, null, null, 6, 'div', [['class', 'sidebar-nav']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(76, 0, null, null, 0, 'span', [['class', 'nav-icon']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(78, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Enterprise'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              83,
              0,
              null,
              null,
              9,
              'a',
              [
                ['class', 'list-group-item list-group-item-action bg-light'],
                ['href', '#']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(85, 0, null, null, 6, 'div', [['class', 'sidebar-nav']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(87, 0, null, null, 0, 'span', [['class', 'nav-icon']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(89, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Prices'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            var t = n(e, 7, 0, '/overview');
            n(e, 6, 0, t);
            var l = n(e, 11, 0, !0);
            n(e, 8, 0, l, 'active');
            var r = n(e, 24, 0, '/maintenance');
            n(e, 23, 0, r);
            var s = n(e, 28, 0, !0);
            n(e, 25, 0, s, 'active');
          },
          function(n, e) {
            n(e, 5, 0, l.Cb(e, 6).target, l.Cb(e, 6).href), n(e, 22, 0, l.Cb(e, 23).target, l.Cb(e, 23).href);
          }
        );
      }
      class ia {
        constructor() {}
        ngOnInit() {}
      }
      var oa = l.ob({
        encapsulation: 0,
        styles: [
          [
            'body[_ngcontent-%COMP%]{overflow-x:hidden;font-family:Poppins,sans-serif}oval[_ngcontent-%COMP%]{height:57px;width:57px;background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);border-radius:50px;margin:auto}.sidebar-heading[_ngcontent-%COMP%]{padding:.875rem 1.25rem;font-size:1.2rem}.list-group[_ngcontent-%COMP%]{width:15rem}#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}.sidebar-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#9b9b9b}.active[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.main-table[_ngcontent-%COMP%]{background:#fff}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.3rem;text-align:center;padding:2rem;margin:0}.table-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;font-weight:700}.table-dropdown[_ngcontent-%COMP%]   button.dropdown-item[_ngcontent-%COMP%]{font-weight:400;padding:10px;border-bottom:1px solid #d9d9d9}.table-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.main-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.3rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.2rem 0 1.2rem 1.5rem}.main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.2rem 0 1.2rem 1.5rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline}.modal-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;text-decoration:underline;color:#007bff}h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}a.link[_ngcontent-%COMP%]{color:#0057c1}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.overview-box[_ngcontent-%COMP%]{width:100%;height:150px;background:#fff;margin-bottom:2rem;box-shadow:0 0 15px 5px #f5f5f5;border-radius:5px}.overview-box.full[_ngcontent-%COMP%]{width:100%;height:332px;font-size:13px}.circle[_ngcontent-%COMP%]{width:47px;height:47px}.oval[_ngcontent-%COMP%]{height:57px;width:57px;background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);border-radius:50px;margin:auto}.header-title-box[_ngcontent-%COMP%]{padding-top:10px;padding-left:10px}.warning[_ngcontent-%COMP%]{color:#ba0e0e;font-weight:700}#sidebar-wrapper[_ngcontent-%COMP%]{min-height:100vh;margin-left:-15rem;-webkit-transition:margin .25s ease-out;transition:margin .25s ease-out}#page-content-wrapper[_ngcontent-%COMP%]{min-width:100vw}@media (min-width:768px){#sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}#page-content-wrapper[_ngcontent-%COMP%]{min-width:0;width:100%;background:#f8f8f8}#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%]{margin-left:-15rem}}'
          ]
        ],
        data: {}
      });
      function ua(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              15,
              'div',
              [
                ['class', 'd-flex'],
                ['id', 'wrapper']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              3,
              0,
              null,
              null,
              4,
              'div',
              [
                ['class', 'bg-light border-right'],
                ['id', 'sidebar-wrapper']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(5, 0, null, null, 1, 'app-sidebar', [], null, null, null, sa, ra)),
            l.pb(6, 114688, null, 0, la, [Ut, wl, yl], null, null),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(10, 0, null, null, 4, 'div', [['id', 'page-content-wrapper']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(12, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            l.pb(13, 212992, null, 0, Gt, [Wt, l.N, l.j, [8, null], l.h], null, null),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 6, 0), n(e, 13, 0);
          },
          null
        );
      }
      function aa(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-shell', [], null, null, null, ua, oa)),
            l.pb(1, 114688, null, 0, ia, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var ca = l.mb('app-shell', ia, aa, {}, {}, []);
      class da {
        constructor() {
          this.version = ml.a.version;
        }
        ngOnInit() {}
      }
      var ha = l.ob({ encapsulation: 0, styles: [['']], data: {} });
      function pa(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 19, 'div', [['class', 'container-fluid']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(2, 0, null, null, 16, 'div', [['class', 'jumbotron text-center']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 5, 'h1', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(6, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            l.pb(7, 8536064, null, 0, zl, [Hl, l.k, l.h], { translate: [0, 'translate'] }, null),
            (n()(), l.Kb(-1, null, ['APP_NAME'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(11, 0, null, null, 6, 'p', [], null, null, null, null, null)),
            (n()(), l.qb(12, 0, null, null, 0, 'i', [['class', 'far fa-bookmark']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, [' '])),
            (n()(), l.qb(14, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            l.pb(15, 8536064, null, 0, zl, [Hl, l.k, l.h], { translate: [0, 'translate'] }, null),
            (n()(), l.Kb(-1, null, ['Version'])),
            (n()(), l.Kb(17, null, [' ', ''])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 7, 0, ''), n(e, 15, 0, '');
          },
          function(n, e) {
            n(e, 17, 0, e.component.version);
          }
        );
      }
      function ba(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-about', [], null, null, null, pa, ha)),
            l.pb(1, 114688, null, 0, da, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var ga = l.mb('app-about', da, ba, {}, {}, []);
      class fa {
        constructor() {
          this.version = ml.a.version;
        }
        ngOnInit() {}
      }
      var ma = l.ob({
        encapsulation: 0,
        styles: [
          [
            'h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}a.link[_ngcontent-%COMP%]{color:#0057c1}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.overview-box[_ngcontent-%COMP%]{width:100%;height:150px;background:#fff;margin-bottom:2rem;box-shadow:0 0 15px 5px #f5f5f5;border-radius:5px}.overview-box.full[_ngcontent-%COMP%]{width:100%;height:332px;font-size:13px}.circle[_ngcontent-%COMP%]{width:47px;height:47px}.oval[_ngcontent-%COMP%]{height:57px;width:57px;background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);border-radius:50px;margin:auto}.header-title-box[_ngcontent-%COMP%]{padding-top:10px;padding-left:10px}.warning[_ngcontent-%COMP%]{color:#ba0e0e;font-weight:700}'
          ]
        ],
        data: {}
      });
      function va(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              186,
              'div',
              [['class', 'container-fluid content-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 7, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 4, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Overview (Week of '])),
            (n()(), l.qb(6, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/00'])),
            (n()(), l.Kb(-1, null, [')'])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(11, 0, null, null, 76, 'div', [['class', 'row']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(13, 0, null, null, 23, 'div', [['class', 'col-sm-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              15,
              0,
              null,
              null,
              20,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 16).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(16, 671744, null, 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(17, 1),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(19, 0, null, null, 15, 'div', [['class', 'row overview-box pt-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(21, 0, null, null, 3, 'div', [['class', 'overview-boxicon col-md-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(23, 0, null, null, 0, 'div', [['class', 'oval']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(26, 0, null, null, 7, 'div', [['class', 'overview-boxtext col-md-8']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(28, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['0'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(31, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Jobs Approved'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(38, 0, null, null, 23, 'div', [['class', 'col-sm-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              40,
              0,
              null,
              null,
              20,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 41).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(41, 671744, null, 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(42, 1),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(44, 0, null, null, 15, 'div', [['class', 'row overview-box pt-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(46, 0, null, null, 3, 'div', [['class', 'overview-boxicon col-md-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(48, 0, null, null, 0, 'div', [['class', 'oval']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(51, 0, null, null, 7, 'div', [['class', 'overview-boxtext col-md-8']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(53, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['9'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(56, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['JOBS COMPLETED NEEDING APPROVAL'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(63, 0, null, null, 23, 'div', [['class', 'col-sm-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              65,
              0,
              null,
              null,
              20,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 66).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(66, 671744, null, 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(67, 1),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(69, 0, null, null, 15, 'div', [['class', 'row overview-box pt-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(71, 0, null, null, 3, 'div', [['class', 'overview-boxicon col-md-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(73, 0, null, null, 0, 'div', [['class', 'oval']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(76, 0, null, null, 7, 'div', [['class', 'overview-boxtext col-md-8']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(78, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['0'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(81, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Pending Jobs'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(89, 0, null, null, 96, 'div', [['class', 'row']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(91, 0, null, null, 45, 'div', [['class', 'col-sm-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              93,
              0,
              null,
              null,
              20,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 94).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(94, 671744, null, 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(95, 1),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(97, 0, null, null, 15, 'div', [['class', 'row overview-box pt-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(99, 0, null, null, 3, 'div', [['class', 'overview-boxicon col-md-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(101, 0, null, null, 0, 'div', [['class', 'oval']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(104, 0, null, null, 7, 'div', [['class', 'overview-boxtext col-md-8']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(106, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['9'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(109, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Pool Needing Maintenance'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              115,
              0,
              null,
              null,
              20,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 116).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(116, 671744, null, 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(117, 1),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(119, 0, null, null, 15, 'div', [['class', 'row overview-box pt-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(121, 0, null, null, 3, 'div', [['class', 'overview-boxicon col-md-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(123, 0, null, null, 0, 'div', [['class', 'oval']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(126, 0, null, null, 7, 'div', [['class', 'overview-boxtext col-md-8']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(128, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['9'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(131, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issues with cleaning'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(138, 0, null, null, 46, 'div', [['class', 'col-sm-8']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(140, 0, null, null, 43, 'div', [['class', 'overview-box full']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              142,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'overview-boxicon header-title-box']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(144, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issue with Cleaning'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(148, 0, null, null, 34, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(150, 0, null, null, 31, 'tbody', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(152, 0, null, null, 13, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(154, 0, null, null, 4, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                4321 Bobby Lane, Austin TX 77001 -\n                '])),
            (n()(), l.qb(156, 0, null, null, 1, 'span', [['class', 'warning']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['On Hold - maintenance bid needs approval'])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(160, 0, null, null, 4, 'td', [['class', 'pull-right']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              162,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'link'],
                ['href', '#']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['Resolve issue'])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(167, 0, null, null, 13, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(169, 0, null, null, 4, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                4321 Bobby Lane, Austin TX 77001 -\n                '])),
            (n()(), l.qb(171, 0, null, null, 1, 'span', [['class', 'warning']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Power is off - please turn on the power.'])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(175, 0, null, null, 4, 'td', [['class', 'pull-right']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              177,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'link'],
                ['href', '#']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['Resolve issue'])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            var t = n(e, 17, 0, 'jobs-approved');
            n(e, 16, 0, t);
            var l = n(e, 42, 0, 'jobs-approved');
            n(e, 41, 0, l);
            var r = n(e, 67, 0, 'jobs-pending');
            n(e, 66, 0, r);
            var s = n(e, 95, 0, '/maintenance');
            n(e, 94, 0, s);
            var i = n(e, 117, 0, 'issues-cleaning');
            n(e, 116, 0, i);
          },
          function(n, e) {
            n(e, 15, 0, l.Cb(e, 16).target, l.Cb(e, 16).href),
              n(e, 40, 0, l.Cb(e, 41).target, l.Cb(e, 41).href),
              n(e, 65, 0, l.Cb(e, 66).target, l.Cb(e, 66).href),
              n(e, 93, 0, l.Cb(e, 94).target, l.Cb(e, 94).href),
              n(e, 115, 0, l.Cb(e, 116).target, l.Cb(e, 116).href);
          }
        );
      }
      function _a(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-overview', [], null, null, null, va, ma)),
            l.pb(1, 114688, null, 0, fa, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var ya = l.mb('app-overview', fa, _a, {}, {}, []);
      class wa {
        constructor(n, e) {
          (this.activeModal = n), (this.formBuilder = e);
        }
        ngOnInit() {
          this.radioGroupForm = this.formBuilder.group({ model: 1 });
        }
        selected(n) {
          var e;
          switch (((this.selectedIndex = n), n)) {
            case 0:
              e = '/assets/tab1.jpg';
              break;
            case 1:
              e = '/assets/tab2.jpg';
              break;
            case 2:
              e = '/assets/tab3.jpg';
              break;
            case 3:
              e = '/assets/tab4.jpg';
              break;
            case 4:
              e = '/assets/tab5.jpg';
              break;
            default:
              e = '/assets/tab1.jpg';
          }
          this.setUrl("url('" + e + "')");
        }
        setUrl(n) {
          this.imgUrl = n;
        }
        getUrl() {
          return this.imgUrl;
        }
      }
      class Ca {
        constructor(n) {
          this.modalService = n;
        }
        ngOnInit() {}
        openModal() {
          this.modalService.open(wa, { size: 'lg' });
        }
      }
      var xa = l.ob({
        encapsulation: 0,
        styles: [
          [
            'h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}a.link[_ngcontent-%COMP%]{color:#0057c1}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem;display:inline-block}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.overview-box[_ngcontent-%COMP%]{width:100%;height:150px;background:#fff;margin-bottom:2rem;box-shadow:0 0 15px 5px #f5f5f5;border-radius:5px}.overview-box.full[_ngcontent-%COMP%]{width:100%;height:332px;font-size:13px}.main-table[_ngcontent-%COMP%]{background:#fff;box-shadow:0 0 15px 0 #f5f5f5}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:2rem;margin:0}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.2rem 0 1.2rem 1.5rem;border-bottom:2px solid #eee;border-top:0}.table-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;font-weight:700;font-size:14px}.table-dropdown[_ngcontent-%COMP%]   button.dropdown-item[_ngcontent-%COMP%]{font-weight:400;padding:10px;border-bottom:1px solid #d9d9d9}.table-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}'
          ]
        ],
        data: {}
      });
      function Oa(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              136,
              'div',
              [['class', 'container-fluid content-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 7, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 4, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Jobs Approved ('])),
            (n()(), l.qb(6, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00'])),
            (n()(), l.Kb(-1, null, [')'])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n\n  '])),
            (n()(), l.qb(11, 0, null, null, 124, 'div', [['class', 'main-table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(13, 0, null, null, 121, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(15, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Listed below are the jobs you have approved this week'])),
            (n()(), l.Kb(-1, null, ['\n\n      '])),
            (n()(), l.qb(18, 0, null, null, 115, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(20, 0, null, null, 37, 'thead', [['class', 'main-thead']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(22, 0, null, null, 34, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(24, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['No.'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(27, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Address'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(30, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Approved'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(33, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Date of Service'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(36, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Photos'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(39, 0, null, null, 16, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(41, 0, null, null, 13, 'div', [['class', 'table-dropdown']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              43,
              0,
              null,
              null,
              1,
              'button',
              [
                ['aria-expanded', 'false'],
                ['aria-haspopup', 'true'],
                ['class', 'btn dropdown-toggle'],
                ['data-toggle', 'dropdown'],
                ['id', 'dropdownMenu2'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  Service Type\n                '])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              46,
              0,
              null,
              null,
              7,
              'div',
              [
                ['aria-labelledby', 'dropdownMenu2'],
                ['class', 'dropdown-menu']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  '])),
            (n()(),
            l.qb(
              48,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'dropdown-item'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                    Inspect\n                  '])),
            (n()(), l.Kb(-1, null, ['\n                  '])),
            (n()(),
            l.qb(
              51,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'dropdown-item'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                    Cleaning\n                  '])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(59, 0, null, null, 73, 'tbody', [['class', 'main-tbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(61, 0, null, null, 22, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(63, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00021'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(66, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['1234 Austin Drive, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(69, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(72, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(75, 0, null, null, 4, 'td', [['class', 'modal-btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              77,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.openModal() && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                View\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(81, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Inspect'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(85, 0, null, null, 22, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(87, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00025'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(90, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['4321 Bobby Lane, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(93, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(96, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(99, 0, null, null, 4, 'td', [['class', 'modal-btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              101,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.openModal() && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                View\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(105, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Cleaning'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(109, 0, null, null, 22, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(111, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00026'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(114, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['5678 Longand Blvd, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(117, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(120, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(123, 0, null, null, 4, 'td', [['class', 'modal-btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              125,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.openModal() && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                View\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(129, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Cleaning'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          null
        );
      }
      function ka(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-jobs-approved', [], null, null, null, Oa, xa)),
            l.pb(1, 114688, null, 0, Ca, [So], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Sa = l.mb('app-jobs-approved', Ca, ka, {}, {}, []);
      const Ma = [
        {
          id: 10,
          address: '1234 Austin Drive, Austin TX 77001',
          servicetype: 'cleaning',
          status: 'approved',
          issues: JSON
        }
      ];
      class Pa {
        constructor() {
          this.jobs = Ma;
        }
        ngOnInit() {}
      }
      var Ka = l.ob({
        encapsulation: 0,
        styles: [
          [
            'h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}a.link[_ngcontent-%COMP%]{color:#0057c1}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem;display:inline-block}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.overview-box[_ngcontent-%COMP%]{width:100%;height:150px;background:#fff;margin-bottom:2rem;box-shadow:0 0 15px 5px #f5f5f5;border-radius:5px}.overview-box.full[_ngcontent-%COMP%]{width:100%;height:332px;font-size:13px}.circle[_ngcontent-%COMP%]{width:47px;height:47px}.oval[_ngcontent-%COMP%]{height:57px;width:57px;background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);border-radius:50px;margin:auto}.header-title-box[_ngcontent-%COMP%]{padding-top:10px;padding-left:10px}.warning[_ngcontent-%COMP%]{color:#ba0e0e;font-weight:700}.page-search[_ngcontent-%COMP%]{display:initial;float:right;box-shadow:0 0 15px 0 #f5f5f5}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 15px;font-size:14px;border:0;border-radius:4px;width:250px}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#9b9b9b}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.2rem 0 1.2rem 1.5rem;border-bottom:2px solid #eee;border-top:0}.main-table[_ngcontent-%COMP%]{background:#fff;box-shadow:0 0 15px 0 #f5f5f5}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:2rem;margin:0}.table-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;font-weight:700;font-size:14px}.table-dropdown[_ngcontent-%COMP%]   button.dropdown-item[_ngcontent-%COMP%]{font-weight:400;padding:10px;border-bottom:1px solid #d9d9d9}.table-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}'
          ]
        ],
        data: {}
      });
      function Ea(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 10, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(2, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(3, null, ['', ''])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(5, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(6, null, ['', ''])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(8, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(9, null, ['', ''])),
            (n()(), l.Kb(-1, null, ['\n          ']))
          ],
          null,
          function(n, e) {
            n(e, 3, 0, e.context.$implicit.id),
              n(e, 6, 0, e.context.$implicit.address),
              n(e, 9, 0, e.context.$implicit.servicetype);
          }
        );
      }
      function Aa(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              63,
              'div',
              [['class', 'container-fluid content-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 12, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 4, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Pending Jobs ('])),
            (n()(), l.qb(6, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00'])),
            (n()(), l.Kb(-1, null, [')'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(10, 0, null, null, 3, 'div', [['class', 'page-search']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              12,
              0,
              null,
              null,
              0,
              'input',
              [
                ['name', 'search'],
                ['placeholder', 'Search by address...'],
                ['type', 'search']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n\n  '])),
            (n()(), l.qb(16, 0, null, null, 46, 'div', [['class', 'main-table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(18, 0, null, null, 43, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(20, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Here are all the jobs to be completed this week.'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(23, 0, null, null, 37, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(25, 0, null, null, 28, 'thead', [['class', 'main-thead']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(27, 0, null, null, 25, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(29, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['No.'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(32, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Address'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(35, 0, null, null, 16, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(37, 0, null, null, 13, 'div', [['class', 'table-dropdown']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              39,
              0,
              null,
              null,
              1,
              'button',
              [
                ['aria-expanded', 'false'],
                ['aria-haspopup', 'true'],
                ['class', 'btn dropdown-toggle'],
                ['data-toggle', 'dropdown'],
                ['id', 'dropdownMenu2'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  Service Type\n                '])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              42,
              0,
              null,
              null,
              7,
              'div',
              [
                ['aria-labelledby', 'dropdownMenu2'],
                ['class', 'dropdown-menu']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  '])),
            (n()(),
            l.qb(
              44,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'dropdown-item'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                    Inspect\n                  '])),
            (n()(), l.Kb(-1, null, ['\n                  '])),
            (n()(),
            l.qb(
              47,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'dropdown-item'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                    Cleaning\n                  '])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(55, 0, null, null, 4, 'tbody', [['class', 'main-tbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.fb(16777216, null, null, 1, null, Ea)),
            l.pb(58, 278528, null, 0, s.j, [l.N, l.K, l.r], { ngForOf: [0, 'ngForOf'] }, null),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 58, 0, e.component.jobs);
          },
          null
        );
      }
      function Da(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-jobs-pending', [], null, null, null, Aa, Ka)),
            l.pb(1, 114688, null, 0, Pa, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Ta = l.mb('app-jobs-pending', Pa, Da, {}, {}, []);
      class Ia {
        constructor(n, e) {
          (this.activeModal = n), (this.formBuilder = e), (this.supportForm = !1);
        }
        ngOnInit() {
          this.radioGroupForm = this.formBuilder.group({ model: 1 });
        }
        selected(n) {
          var e;
          switch (((this.selectedIndex = n), n)) {
            case 0:
              e = '/assets/tab1.jpg';
              break;
            case 1:
              e = '/assets/tab2.jpg';
              break;
            case 2:
              e = '/assets/tab3.jpg';
              break;
            case 3:
              e = '/assets/tab4.jpg';
              break;
            case 4:
              e = '/assets/tab5.jpg';
              break;
            default:
              e = '/assets/tab1.jpg';
          }
          this.setUrl("url('" + e + "')");
        }
        setUrl(n) {
          this.imgUrl = n;
        }
        getUrl() {
          return this.imgUrl;
        }
        showSupport() {
          this.supportForm = !this.supportForm;
        }
      }
      class qa {
        constructor(n) {
          this.modalService = n;
        }
        ngOnInit() {}
        openModal() {
          this.modalService.open(Ia, { size: 'lg' });
        }
      }
      var Na = l.ob({
        encapsulation: 0,
        styles: [
          [
            'body[_ngcontent-%COMP%]{overflow-x:hidden;font-family:Poppins,sans-serif;font-size:14px}h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem;display:inline-block}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.overview-box[_ngcontent-%COMP%]{width:100%;height:150px;background:#fff;margin-bottom:2rem;box-shadow:0 0 15px 5px #f5f5f5;border-radius:5px}.overview-box.full[_ngcontent-%COMP%]{width:100%;height:332px;font-size:13px}.page-search[_ngcontent-%COMP%]{display:initial;float:right;box-shadow:0 0 15px 0 #f5f5f5}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 15px;font-size:14px;border:0;border-radius:4px;width:250px}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#9b9b9b}.main-table[_ngcontent-%COMP%]{background:#fff;box-shadow:0 0 15px 0 #f5f5f5}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:2rem;margin:0}.table-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;font-weight:700;font-size:14px}.table-dropdown[_ngcontent-%COMP%]   button.dropdown-item[_ngcontent-%COMP%]{font-weight:400;padding:10px;border-bottom:1px solid #d9d9d9}.table-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.main-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.3rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top;padding:1.2rem .5rem;border-top:2px solid #eee}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:1.5rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-right:1.5rem}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.2rem .5rem;border-bottom:2px solid #eee;border-top:0}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{padding-left:1.5rem}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{padding-right:1.5rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline}td.table-issue-width[_ngcontent-%COMP%]{width:200px}.placeholder-midtxt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:auto;text-align:center;font-size:18px}'
          ]
        ],
        data: {}
      });
      function Ra(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              87,
              'div',
              [['class', 'container-fluid content-container animated animatedFadeInUp fadeInUp']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 12, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 4, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Jobs Completed Needing Approval ('])),
            (n()(), l.qb(6, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00'])),
            (n()(), l.Kb(-1, null, [')'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(10, 0, null, null, 3, 'div', [['class', 'page-search']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              12,
              0,
              null,
              null,
              0,
              'input',
              [
                ['name', 'search'],
                ['placeholder', 'Search by address...'],
                ['type', 'search']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(16, 0, null, null, 70, 'div', [['class', 'main-table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(18, 0, null, null, 4, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(20, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Please accept or reject the services listed below.'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(24, 0, null, null, 61, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(26, 0, null, null, 34, 'thead', [['class', 'main-thead']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(28, 0, null, null, 31, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(30, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['No.'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(33, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Address'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(36, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Date of Service'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(39, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Photos'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(42, 0, null, null, 16, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(44, 0, null, null, 13, 'div', [['class', 'table-dropdown']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              46,
              0,
              null,
              null,
              1,
              'button',
              [
                ['aria-expanded', 'false'],
                ['aria-haspopup', 'true'],
                ['class', 'btn dropdown-toggle'],
                ['data-toggle', 'dropdown'],
                ['id', 'dropdownMenu2'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                Service Type\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              49,
              0,
              null,
              null,
              7,
              'div',
              [
                ['aria-labelledby', 'dropdownMenu2'],
                ['class', 'dropdown-menu']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              51,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'dropdown-item'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  Inspect\n                '])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              54,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'dropdown-item'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  Cleaning\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(62, 0, null, null, 22, 'tbody', [['class', 'main-tbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(64, 0, null, null, 19, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(66, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00025'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(69, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['4321 Bobby Lane, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(72, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(75, 0, null, null, 4, 'td', [['class', 'modal-btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              77,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.openModal() && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n              View\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(81, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Cleaning'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          null
        );
      }
      function ja(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-jobs-completed', [], null, null, null, Ra, Na)),
            l.pb(1, 114688, null, 0, qa, [So], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Va = l.mb('app-jobs-completed', qa, ja, {}, {}, []);
      class La {
        constructor(n) {
          this.router = n;
        }
        gotoIssue(n) {
          this.router.navigate([this.router.url, n, 'details']);
        }
      }
      var Ua = l.ob({
        encapsulation: 0,
        styles: [
          [
            'h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}a.link[_ngcontent-%COMP%]{color:#0057c1}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem;display:inline-block}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.overview-box[_ngcontent-%COMP%]{width:100%;height:150px;background:#fff;margin-bottom:2rem;box-shadow:0 0 15px 5px #f5f5f5;border-radius:5px}.overview-box.full[_ngcontent-%COMP%]{width:100%;height:332px;font-size:13px}.circle[_ngcontent-%COMP%]{width:47px;height:47px}.oval[_ngcontent-%COMP%]{height:57px;width:57px;background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);border-radius:50px;margin:auto}.header-title-box[_ngcontent-%COMP%]{padding-top:10px;padding-left:10px}.warning[_ngcontent-%COMP%]{color:#ba0e0e;font-weight:700}.page-search[_ngcontent-%COMP%]{display:initial;float:right;box-shadow:0 0 15px 0 #f5f5f5}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 15px;font-size:14px;border:0;border-radius:4px;width:250px}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#9b9b9b}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.2rem 0 1.2rem 1.5rem;border-bottom:2px solid #eee;border-top:0}.main-table[_ngcontent-%COMP%]{background:#fff;box-shadow:0 0 15px 0 #f5f5f5}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:2rem;margin:0}.table-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;font-weight:700;font-size:14px}.table-dropdown[_ngcontent-%COMP%]   button.dropdown-item[_ngcontent-%COMP%]{font-weight:400;padding:10px;border-bottom:1px solid #d9d9d9}.table-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{padding-bottom:0}.issue-list[_ngcontent-%COMP%]{cursor:pointer}'
          ]
        ],
        data: {}
      });
      function Fa(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              64,
              'div',
              [['class', 'container-fluid content-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 12, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 4, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issues with Cleaning ('])),
            (n()(), l.qb(6, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00'])),
            (n()(), l.Kb(-1, null, [')'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(10, 0, null, null, 3, 'div', [['class', 'page-search']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              12,
              0,
              null,
              null,
              0,
              'input',
              [
                ['name', 'search'],
                ['placeholder', 'Search by address...'],
                ['type', 'search']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n\n  '])),
            (n()(), l.qb(16, 0, null, null, 47, 'div', [['class', 'main-table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(18, 0, null, null, 44, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(20, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Here are the cleanings identified with issues.'])),
            (n()(), l.Kb(-1, null, ['\n\n      '])),
            (n()(), l.qb(23, 0, null, null, 38, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(25, 0, null, null, 15, 'thead', [['class', 'main-thead']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(27, 0, null, null, 12, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(29, 0, null, null, 1, 'th', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['No.'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(32, 0, null, null, 1, 'th', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Address'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(35, 0, null, null, 1, 'th', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Date of Cleaning'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(38, 0, null, null, 0, 'th', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(42, 0, null, null, 18, 'tbody', [['class', 'main-tbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              44,
              0,
              null,
              null,
              15,
              'tr',
              [['class', 'issue-list issue']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.gotoIssue(9) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(46, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00021'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(49, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['1234 Austin Drive, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(52, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(55, 0, null, null, 3, 'td', [['class', 'pull-right arrow-box']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              57,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'forward-arrow'],
                ['src', 'assets/arrow-forward.svg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          null
        );
      }
      function Ha(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-issues-cleaning', [], null, null, null, Fa, Ua)),
            l.pb(1, 49152, null, 0, La, [Ut], null, null)
          ],
          null,
          null
        );
      }
      var za = l.mb('app-issues-cleaning', La, Ha, {}, {}, []);
      class $a {
        constructor() {}
        ngOnInit() {}
      }
      var Ba = l.ob({
        encapsulation: 0,
        styles: [
          [
            'h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}a.link[_ngcontent-%COMP%]{color:#0057c1}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem;display:inline-block}.content-container[_ngcontent-%COMP%]{padding:3rem;background:#f8f8f8}.message-button[_ngcontent-%COMP%]{display:initial;float:right}.message-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;color:#fff;background:#0057c1;padding:7px 35px;border-radius:4px}.main-gridbox[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0;height:100%;min-height:200px}.main-gridbox[_ngcontent-%COMP%]{border:2px solid #eee;font-size:12px;background:#fff}.main-gridbox[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{box-sizing:border-box;border-right:2px solid #eee;padding:10px}.main-gridbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.main-gridbox[_ngcontent-%COMP%]   .gridbox-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:10px}.main-gridbox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;padding:0;text-decoration:underline;color:#007bff;margin-bottom:10px}.placeholder-midtxt[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.placeholder-midtxt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:auto;text-align:center;font-size:18px}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:2rem;margin:0}.msg-thread[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem}.right-msg[_ngcontent-%COMP%]{text-align:right;margin-bottom:1rem;width:70%;margin-left:auto}.right-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:5px}.right-msg[_ngcontent-%COMP%]   .msg-name[_ngcontent-%COMP%]{color:#0057c1;font-weight:700;font-size:16px}.right-msg[_ngcontent-%COMP%]   .msg-date[_ngcontent-%COMP%]{color:#9b9b9b;font-size:12px;text-transform:uppercase}.left-msg[_ngcontent-%COMP%]{text-align:left;margin-bottom:1rem;width:70%;margin-right:auto}.left-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:5px}.left-msg[_ngcontent-%COMP%]   .msg-name[_ngcontent-%COMP%]{color:#0eba58;font-weight:700;font-size:16px}.left-msg[_ngcontent-%COMP%]   .msg-date[_ngcontent-%COMP%]{color:#9b9b9b;font-size:12px;text-transform:uppercase}'
          ]
        ],
        data: {}
      });
      function Wa(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              93,
              'div',
              [['class', 'container-fluid content-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 16, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 7, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Cleaning No. '])),
            (n()(), l.qb(6, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00025'])),
            (n()(), l.Kb(-1, null, [' ('])),
            (n()(), l.qb(9, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, [')'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(13, 0, null, null, 4, 'div', [['class', 'message-button']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(15, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Message Us'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n\n  '])),
            (n()(), l.qb(20, 0, null, null, 72, 'div', [['class', 'main-gridbox']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(22, 0, null, null, 69, 'div', [['class', 'row']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(24, 0, null, null, 7, 'div', [['class', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(26, 0, null, null, 1, 'p', [['class', 'gridbox-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Address on Home'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              29,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn'],
                ['data-target', '#exampleModal1'],
                ['data-toggle', 'modal']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          View Photo\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(33, 0, null, null, 21, 'div', [['class', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(35, 0, null, null, 1, 'p', [['class', 'gridbox-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Fence Around Pool'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(38, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          Is there a fence around the pool/backyard:\n          '])),
            (n()(), l.qb(40, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Yes'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(44, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['View Photo'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(47, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Is the gate able to close and lock? '])),
            (n()(), l.qb(49, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Yes'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(52, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['View Photo'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(56, 0, null, null, 7, 'div', [['class', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(58, 0, null, null, 1, 'p', [['class', 'gridbox-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Picture of Pool Before'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(61, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['View Photo'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(65, 0, null, null, 7, 'div', [['class', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(67, 0, null, null, 1, 'p', [['class', 'gridbox-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Test and add chemicals'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(70, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['View Photo'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(74, 0, null, null, 7, 'div', [['class', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(76, 0, null, null, 1, 'p', [['class', 'gridbox-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Picture of Pool After Cleaning'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(79, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['View Photo'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(83, 0, null, null, 7, 'div', [['class', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(85, 0, null, null, 1, 'p', [['class', 'gridbox-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Miscellaneous Issues'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(88, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Go to Maintenance'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n\n'])),
            (n()(),
            l.qb(
              95,
              0,
              null,
              null,
              24,
              'div',
              [['class', 'container-fluid content-container no-pt']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(97, 0, null, null, 7, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(99, 0, null, null, 4, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issue identified ('])),
            (n()(), l.qb(101, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issue will be resolved shortly'])),
            (n()(), l.Kb(-1, null, [')'])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n\n  '])),
            (n()(), l.qb(106, 0, null, null, 12, 'div', [['class', 'main-gridbox']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(108, 0, null, null, 9, 'div', [['class', 'row']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(110, 0, null, null, 4, 'div', [['class', 'col placeholder-midtxt']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(112, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(),
            l.Kb(-1, null, [
              '\n          Once we have solved the issue we will send a new picture here for verification.\n        '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n\n'])),
            (n()(),
            l.qb(
              121,
              0,
              null,
              null,
              43,
              'div',
              [['class', 'container-fluid content-container no-pt']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(123, 0, null, null, 4, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(125, 0, null, null, 1, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      Message History\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n\n  '])),
            (n()(),
            l.qb(129, 0, null, null, 34, 'div', [['class', 'main-gridbox bg-light']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(131, 0, null, null, 4, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(133, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Your messaging history can be viewed below!'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(137, 0, null, null, 25, 'div', [['class', 'msg-thread']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(139, 0, null, null, 10, 'div', [['class', 'right-msg']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(141, 0, null, null, 1, 'p', [['class', 'msg-name']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['John Appleseed'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(144, 0, null, null, 1, 'p', [['class', 'msg-text']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['The picture after the cleaning is green.'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(147, 0, null, null, 1, 'p', [['class', 'msg-date']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['04/8/2019 10:00 Am'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n\n      '])),
            (n()(), l.qb(151, 0, null, null, 10, 'div', [['class', 'left-msg']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(153, 0, null, null, 1, 'p', [['class', 'msg-name']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Connor Pfister'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(156, 0, null, null, 1, 'p', [['class', 'msg-text']], null, null, null, null, null)),
            (n()(),
            l.Kb(-1, null, [
              '\n          The timer was completely broken, so it needs to be fully replaced.\n        '
            ])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(159, 0, null, null, 1, 'p', [['class', 'msg-date']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['04/11/2019 10:05 Am'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          null
        );
      }
      function Ga(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-issue-detail', [], null, null, null, Wa, Ba)),
            l.pb(1, 114688, null, 0, $a, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Za = l.mb('app-issue-detail', $a, Ga, {}, {}, []),
        Qa = l.ob({
          encapsulation: 0,
          styles: [
            [
              '.modal-title[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.2rem;font-weight:700}.main-modalbody[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.main-modalbody[_ngcontent-%COMP%]{padding:0}.modal-body[_ngcontent-%COMP%]   .full-photo[_ngcontent-%COMP%]{width:100%;min-height:250px;background-position:center;background-size:cover}.modal-footer.main-modal-footer[_ngcontent-%COMP%]{padding:3rem 1rem;-webkit-box-pack:unset;justify-content:unset;-webkit-box-align:unset;align-items:unset;display:block;text-align:center}.main-modal-footer[_ngcontent-%COMP%]   .approved-btn[_ngcontent-%COMP%]{background:#0eba58;color:#fff;text-transform:uppercase;font-weight:700;padding:15px;width:200px}.modal-tab-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:0;border-bottom:2px solid #efefef;width:100%;text-align:left;padding:1rem}.modal-tab-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#0057c1;color:#fff;border-bottom:2px solid #0057c1}.modal-img[_ngcontent-%COMP%]{background-size:cover;width:100%;height:100%;background-position:center}'
            ]
          ],
          data: {}
        });
      function Ja(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 51, 'div', [['class', 'modal-content']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 10, 'div', [['class', 'modal-header']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 1, 'h5', [['class', 'modal-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      1234 Austin Drive, Austin TX 77001\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              7,
              0,
              null,
              null,
              4,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'close'],
                ['data-dismiss', 'modal'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.activeModal.dismiss('Cross click') && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(9, 0, null, null, 1, 'span', [['aria-hidden', 'true']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\xd7'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(14, 0, null, null, 30, 'div', [['class', 'modal-body main-modalbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(16, 0, null, null, 27, 'div', [['class', 'row']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(18, 0, null, null, 19, 'div', [['class', 'col-md-6 no-padding']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(20, 0, null, null, 16, 'div', [['class', 'modal-tab-btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              22,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(0) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Address on the Home\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              25,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn2 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(1) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Fence Around The Pool\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              28,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn3 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(2) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Pool Before the Cleaning\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              31,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn4 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(3) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Pool after the cleaning\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              34,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn5 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(4) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Test and Add Chemicals\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(39, 0, null, null, 3, 'div', [['class', 'col-md-6 no-padding']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              41,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'modal-img']],
              [[4, 'background-image', null]],
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              46,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'modal-footer main-modal-footer']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              48,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn approved-btn'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      Approved\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          function(n, e) {
            var t = e.component;
            n(e, 22, 0, 0 === t.selectedIndex),
              n(e, 25, 0, 1 === t.selectedIndex),
              n(e, 28, 0, 2 === t.selectedIndex),
              n(e, 31, 0, 3 === t.selectedIndex),
              n(e, 34, 0, 4 === t.selectedIndex),
              n(e, 41, 0, t.getUrl());
          }
        );
      }
      function Ya(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-modal', [], null, null, null, Ja, Qa)),
            l.pb(1, 114688, null, 0, wa, [wo, ui], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Xa = l.mb('app-modal', wa, Ya, {}, {}, []),
        nc = l.ob({
          encapsulation: 0,
          styles: [
            [
              '.modal-title[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.2rem;font-weight:700}.main-modalbody[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.main-modalbody[_ngcontent-%COMP%]{padding:0}.modal-tab-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:0;border-bottom:2px solid #efefef;width:100%;text-align:left;padding:1rem}.modal-tab-btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#0057c1;color:#fff;border-bottom:2px solid #0057c1}.modal-footer.main-modal-footer[_ngcontent-%COMP%]{padding:3rem 1rem;-webkit-box-pack:unset;justify-content:unset;-webkit-box-align:unset;align-items:unset;display:block;text-align:center}.main-modal-footer[_ngcontent-%COMP%]   .approved-btn[_ngcontent-%COMP%]{background:#0eba58;color:#fff;text-transform:uppercase;font-weight:700;padding:15px;width:200px}.modal-footer[_ngcontent-%COMP%]   .ticket-link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:0}.modal-img[_ngcontent-%COMP%]{background-size:cover;width:100%;height:100%;background-position:center}.modal-footer[_ngcontent-%COMP%]   .ticket-link[_ngcontent-%COMP%]{margin:2rem 0 0;font-size:14px;color:#9b9b9b}.modal-footer[_ngcontent-%COMP%]   .ticket-link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#9b9b9b;text-decoration:underline;background:0 0;border:0;font-size:14px;padding:0}.modal-ticket-wrapper[_ngcontent-%COMP%]{margin-top:1.5rem;-webkit-transition:.2s;transition:all .2s;display:none}.modal-ticket-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;font-size:14px;padding:10px;height:80px;border:2px solid #eee;border-radius:4px}.modal-ticket-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#9b9b9b}.modal-ticket-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder{color:#9b9b9b}.modal-ticket-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder{color:#9b9b9b}.modal-ticket-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#9b9b9b}.modal-ticket-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;text-align:left;color:#9b9b9b}.modal-ticket-wrapper[_ngcontent-%COMP%]   .submit-ticket-btn[_ngcontent-%COMP%]{color:#4a4a4a;font-weight:700;text-transform:uppercase;background:#eeee;padding:15px;width:200px}.modal-ticket-wrapper[_ngcontent-%COMP%]   .submit-ticket-btn.enable[_ngcontent-%COMP%]{background:#0057c1;color:#fff}.showSupportForm[_ngcontent-%COMP%]{display:block}.hideSupportForm[_ngcontent-%COMP%]{display:none}'
            ]
          ],
          data: {}
        });
      function ec(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 70, 'div', [['class', 'modal-content']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 10, 'div', [['class', 'modal-header']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 1, 'h5', [['class', 'modal-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      1234 Austin Drive, Austin TX 77001\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              7,
              0,
              null,
              null,
              4,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'close'],
                ['data-dismiss', 'modal'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.activeModal.dismiss('Cross click') && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(9, 0, null, null, 1, 'span', [['aria-hidden', 'true']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\xd7'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(14, 0, null, null, 30, 'div', [['class', 'modal-body main-modalbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(16, 0, null, null, 27, 'div', [['class', 'row']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(18, 0, null, null, 19, 'div', [['class', 'col-md-6 no-padding']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(20, 0, null, null, 16, 'div', [['class', 'modal-tab-btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              22,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(0) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Address on the Home\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              25,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn2 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(1) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Fence Around The Pool\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              28,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn3 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(2) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Pool Before the Cleaning\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              31,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn4 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(3) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Pool after the cleaning\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              34,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn5 tab-btn']],
              [[2, 'active', null]],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.selected(4) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n            Test and Add Chemicals\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(39, 0, null, null, 3, 'div', [['class', 'col-md-6 no-padding']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              41,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'modal-img']],
              [[4, 'background-image', null]],
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              46,
              0,
              null,
              null,
              23,
              'div',
              [['class', 'modal-footer main-modal-footer']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              48,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn approved-btn'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      Approve Cleaning\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(51, 0, null, null, 4, 'p', [['class', 'ticket-link']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      Have an issue with the service?\n      '])),
            (n()(),
            l.qb(
              53,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'ticket-toggle']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.showSupport() && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['Click here.'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(57, 0, null, null, 11, 'div', [['class', 'modal-ticket-wrapper']], null, null, null, null, null)),
            l.Hb(512, null, s.y, s.z, [l.r, l.s, l.k, l.C]),
            l.pb(59, 278528, null, 0, s.i, [s.y], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              61,
              0,
              null,
              null,
              0,
              'textarea',
              [['placeholder', 'Please write any issues you have regarding this work ordere here.*']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(63, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            l.Kb(-1, null, [
              '\n        *Hiredhelpr suspends payment of this work order until the issue is resolved.\n      '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              66,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn submit-ticket-btn'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        Submit Ticket\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 59, 0, 'modal-ticket-wrapper', e.component.supportForm ? 'showSupportForm' : 'hideSupportForm');
          },
          function(n, e) {
            var t = e.component;
            n(e, 22, 0, 0 === t.selectedIndex),
              n(e, 25, 0, 1 === t.selectedIndex),
              n(e, 28, 0, 2 === t.selectedIndex),
              n(e, 31, 0, 3 === t.selectedIndex),
              n(e, 34, 0, 4 === t.selectedIndex),
              n(e, 41, 0, t.getUrl());
          }
        );
      }
      function tc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-modal', [], null, null, null, ec, nc)),
            l.pb(1, 114688, null, 0, Ia, [wo, ui], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var lc = l.mb('app-modal', Ia, tc, {}, {}, []);
      class rc {
        constructor(n) {
          this.router = n;
        }
        ngOnInit() {}
        gotoIssue(n) {
          this.router.navigate([this.router.url, n, 'details']);
        }
      }
      var sc = l.ob({
        encapsulation: 0,
        styles: [
          [
            'body[_ngcontent-%COMP%]{overflow-x:hidden;font-family:Poppins,sans-serif;font-size:14px}h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px;font-weight:700;color:#9b9b9b}h3[_ngcontent-%COMP%]{font-size:16px}.content-container[_ngcontent-%COMP%]{padding:3rem 2rem;background:#f8f8f8}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem;display:inline-block}.page-search[_ngcontent-%COMP%]{display:initial;float:right;box-shadow:0 0 15px 0 #f5f5f5}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 15px;font-size:14px;border:0;border-radius:4px;width:250px}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#9b9b9b}.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#9b9b9b}.main-table[_ngcontent-%COMP%]{background:#fff;box-shadow:0 0 15px 0 #f5f5f5}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem;text-align:center;padding:2rem;margin:0}.main-tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.3rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top;padding:1.2rem .5rem;border-top:2px solid #eee}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:1.5rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-right:1.5rem}.main-tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline}.forward-arrow[_ngcontent-%COMP%]{width:25px}'
          ]
        ],
        data: {}
      });
      function ic(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              60,
              'div',
              [['class', 'container-fluid content-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 9, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 1, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Maintenance'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(7, 0, null, null, 3, 'div', [['class', 'page-search']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              9,
              0,
              null,
              null,
              0,
              'input',
              [
                ['name', 'search'],
                ['placeholder', 'Search by address...'],
                ['type', 'search']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(13, 0, null, null, 46, 'div', [['class', 'main-table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(15, 0, null, null, 4, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(17, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        Here are all the pools with issues!\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(21, 0, null, null, 37, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(23, 0, null, null, 34, 'tbody', [['class', 'main-tbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              25,
              0,
              null,
              null,
              9,
              'tr',
              [],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.gotoIssue(9) && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(27, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['1234 Austin Drive, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(30, 0, null, null, 3, 'td', [['class', 'pull-right arrow-box']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              32,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'forward-arrow'],
                ['src', 'assets/arrow-forward.svg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              36,
              0,
              null,
              null,
              9,
              'tr',
              [
                ['class', 'clickable-row'],
                ['data-href', 'maintenance-issue.html']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(38, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['1234 Austin Drive, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(41, 0, null, null, 3, 'td', [['class', 'pull-right arrow-box']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              43,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'forward-arrow'],
                ['src', 'assets/arrow-forward.svg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              47,
              0,
              null,
              null,
              9,
              'tr',
              [
                ['class', 'clickable-row'],
                ['data-href', 'maintenance-issue.html']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(49, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['1234 Austin Drive, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(52, 0, null, null, 3, 'td', [['class', 'pull-right arrow-box']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              54,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'forward-arrow'],
                ['src', 'assets/arrow-forward.svg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          null
        );
      }
      function oc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-maintenance', [], null, null, null, ic, sc)),
            l.pb(1, 114688, null, 0, rc, [Ut], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var uc = l.mb('app-maintenance', rc, oc, {}, {}, []);
      class ac {
        constructor(n) {
          this.activeModal = n;
        }
        ngOnInit() {}
      }
      class cc {
        constructor(n) {
          this.modalService = n;
        }
        ngOnInit() {}
        openModal() {
          this.modalService.open(ac, { windowClass: 'myCustomSizeModalClass' });
        }
      }
      var dc = l.ob({
        encapsulation: 0,
        styles: [
          [
            '.content-container[_ngcontent-%COMP%]{padding:3rem 2rem;background:#f8f8f8}.content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;line-height:35px;color:#000;font-weight:700;margin-bottom:1.5rem;display:inline-block}.message-button[_ngcontent-%COMP%]{display:initial;float:right}.message-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;color:#fff;background:#0057c1;padding:7px 35px;border-radius:4px}.main-table[_ngcontent-%COMP%]{background:#fff;box-shadow:0 0 15px 0 #f5f5f5}.table-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:2rem;margin:0}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.2rem .5rem;border-bottom:2px solid #eee;border-top:0}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{padding-left:1.5rem}table[_ngcontent-%COMP%]   .main-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{padding-right:1.5rem}td.table-issue-width[_ngcontent-%COMP%]{width:200px}.modal-btn.accept[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0eba58;color:#fff;text-transform:uppercase;font-weight:700;padding:5px 10px;width:150px;text-decoration:none}.modal-btn.powerison[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#fff;border:1px solid #0057c1;color:#0057c1;text-transform:uppercase;font-weight:700;padding:5px 10px;width:150px;text-decoration:none}.tr-row2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0;padding-top:0;font-size:13px;vertical-align:top}tr.tr-row2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.issue-fix-img[_ngcontent-%COMP%]{width:70px;height:50px;background-size:cover;background-position:center;border-radius:4px}.myCustomSizeModalClass[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{max-width:565px!important}'
          ]
        ],
        data: {}
      });
      function hc(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(
              0,
              0,
              null,
              null,
              162,
              'div',
              [['class', 'container-fluid content-container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 10, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(4, 0, null, null, 1, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['1234 Austin Drive, Austin TX 77001'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              7,
              0,
              null,
              null,
              4,
              'div',
              [
                ['class', 'message-button'],
                ['id', 'msg-button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(9, 0, null, null, 1, 'button', [['class', 'btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Message Us'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(14, 0, null, null, 147, 'div', [['class', 'main-table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(16, 0, null, null, 4, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(18, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Please accept the bid(s) ti fix the issue(s) listed.'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(22, 0, null, null, 138, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(24, 0, null, null, 28, 'thead', [['class', 'main-thead']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(26, 0, null, null, 25, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(28, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['No.'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(31, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issue'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(34, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Action'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(37, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Cost'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(40, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Date Submitted'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(43, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Next Steps'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(46, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Fixed'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(49, 0, null, null, 1, 'th', [['scope', 'col']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Fixed Date'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(54, 0, null, null, 105, 'tbody', [['class', 'main-tbody']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(56, 0, null, null, 28, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(58, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00025'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(61, 0, null, null, 1, 'td', [['class', 'table-issue-width']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Electrical Timer Box'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(64, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Replace'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(67, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['$150'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(70, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(73, 0, null, null, 4, 'td', [['class', 'modal-btn accept']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              75,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.openModal() && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n              Accept\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(79, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['--'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(82, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['--'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(86, 0, null, null, 26, 'tr', [['class', 'tr-row2']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(88, 0, null, null, 6, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(90, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issue:'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              93,
              0,
              null,
              null,
              0,
              'div',
              [
                ['class', 'issue-fix-img'],
                ['style', 'background-image: url(assets/tab1.jpg);']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(96, 0, null, null, 6, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(98, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Fix:'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              101,
              0,
              null,
              null,
              0,
              'div',
              [
                ['class', 'issue-fix-img'],
                ['style', 'background-image: url(assets/tab2.jpg);']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(104, 0, null, null, 7, 'td', [['colspan', '6']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(106, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Description:'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(109, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Timer box was malfunctioning. It is broken.'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n\n        '])),
            (n()(), l.qb(114, 0, null, null, 28, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(116, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00025'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(119, 0, null, null, 1, 'td', [['class', 'table-issue-width']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Power is off'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(122, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Turn on'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(125, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['$50'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(128, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['00/00/0000'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(131, 0, null, null, 4, 'td', [['class', 'modal-btn powerison']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(
              133,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn'],
                ['data-target', '#exampleModal2'],
                ['data-toggle', 'modal'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n              Power Is On\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(137, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['--'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(140, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['--'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(144, 0, null, null, 14, 'tr', [['class', 'tr-row2']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(146, 0, null, null, 0, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(148, 0, null, null, 0, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(150, 0, null, null, 7, 'td', [['colspan', '6']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(152, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Description:'])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(155, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            l.Kb(-1, null, [
              '\n              The power is off so the inspection could not be completed. A $50 penalty fee has been charged to your\n              account. Please turn power on and then click the button above to continue servicing. - HiredHelpr staff\n            '
            ])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n\n'])),
            (n()(),
            l.qb(
              164,
              0,
              null,
              null,
              16,
              'div',
              [['class', 'container-fluid content-container no-pt']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(166, 0, null, null, 4, 'div', [['class', 'content-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(168, 0, null, null, 1, 'h1', [['class', '']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      Message History\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(172, 0, null, null, 7, 'div', [['class', 'msg-history-box bg-light']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(174, 0, null, null, 4, 'div', [['class', 'table-title']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(176, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Your messaging history can be viewed below!'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          null
        );
      }
      function pc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-issue-detail', [], null, null, null, hc, dc)),
            l.pb(1, 114688, null, 0, cc, [So], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var bc = l.mb('app-issue-detail', cc, pc, {}, {}, []),
        gc = l.ob({
          encapsulation: 0,
          styles: [
            [
              '.modal-title[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.2rem;font-weight:700}.issue-modal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0;padding:.2rem .75rem}.modal-footer.main-modal-footer[_ngcontent-%COMP%]{padding:2rem 1rem;-webkit-box-pack:unset;justify-content:unset;-webkit-box-align:unset;align-items:unset;display:block;text-align:center;border:0}.main-modal-footer[_ngcontent-%COMP%]   .approved-btn[_ngcontent-%COMP%]{background:#0eba58;color:#fff;text-transform:uppercase;font-weight:700;padding:15px;width:200px}'
            ]
          ],
          data: {}
        });
      function fc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 65, 'div', [['class', 'modal-content']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(2, 0, null, null, 10, 'div', [['class', 'modal-header']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              4,
              0,
              null,
              null,
              1,
              'h5',
              [
                ['class', 'modal-title'],
                ['id', 'exampleModalLabel']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      Do you accept the cost to fix the issue?\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              7,
              0,
              null,
              null,
              4,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'close'],
                ['data-dismiss', 'modal'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return 'click' === e && (l = !1 !== n.component.activeModal.dismiss('Cross click') && l), l;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(9, 0, null, null, 1, 'span', [['aria-hidden', 'true']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\xd7'])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.qb(14, 0, null, null, 44, 'div', [['class', 'modal-body']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(16, 0, null, null, 23, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(18, 0, null, null, 7, 'thead', [['class', 'issue-modal']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(20, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Issue:'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(23, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Cost:'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(27, 0, null, null, 11, 'tbody', [['class', 'issue-modal']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(29, 0, null, null, 8, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(31, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Electrical Timer Box'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(34, 0, null, null, 2, 'td', [], null, null, null, null, null)),
            (n()(), l.qb(35, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['$150'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n\n    '])),
            (n()(), l.qb(41, 0, null, null, 16, 'table', [['class', 'table']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(43, 0, null, null, 4, 'thead', [['class', 'issue-modal']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(45, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Description:'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(49, 0, null, null, 7, 'tbody', [['class', 'issue-modal']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(51, 0, null, null, 4, 'tr', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(53, 0, null, null, 1, 'td', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Timer box was manfunctioning. It is broken.'])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              60,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'modal-footer main-modal-footer']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              62,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn approved-btn'],
                ['type', 'button']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      Accept!\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          null,
          null
        );
      }
      function mc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-modal', [], null, null, null, fc, gc)),
            l.pb(1, 114688, null, 0, ac, [wo], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var vc = l.mb('app-modal', ac, mc, {}, {}, []);
      let _c = (() =>
          class {
            constructor(n, e, t) {
              (this.el = n),
                (this.zone = e),
                (this.platformId = t),
                (this.afterChange = new l.m()),
                (this.beforeChange = new l.m()),
                (this.breakpoint = new l.m()),
                (this.destroy = new l.m()),
                (this.init = new l.m()),
                (this.slides = []),
                (this.initialized = !1),
                (this._removedSlides = []),
                (this._addedSlides = []);
            }
            ngOnDestroy() {
              this.unslick();
            }
            ngAfterViewInit() {
              this.ngAfterViewChecked();
            }
            ngAfterViewChecked() {
              if (!Object(s.x)(this.platformId) && (this._addedSlides.length > 0 || this._removedSlides.length > 0)) {
                const n = this.slides.length - this._removedSlides.length + this._addedSlides.length;
                this.initialized
                  ? 0 === n
                    ? this.unslick()
                    : (this._addedSlides.forEach(n => {
                        this.slides.push(n),
                          this.zone.runOutsideAngular(() => {
                            this.$instance.slick('slickAdd', n.el.nativeElement);
                          });
                      }),
                      (this._addedSlides = []),
                      this._removedSlides.forEach(n => {
                        const e = this.slides.indexOf(n);
                        (this.slides = this.slides.filter(e => e !== n)),
                          this.zone.runOutsideAngular(() => {
                            this.$instance.slick('slickRemove', e);
                          });
                      }),
                      (this._removedSlides = []))
                  : n > 0 && this.initSlick();
              }
            }
            initSlick() {
              (this.slides = this._addedSlides),
                (this._addedSlides = []),
                (this._removedSlides = []),
                this.zone.runOutsideAngular(() => {
                  (this.$instance = jQuery(this.el.nativeElement)),
                    this.$instance.on('init', (n, e) => {
                      this.zone.run(() => {
                        this.init.emit({ event: n, slick: e });
                      });
                    }),
                    this.$instance.slick(this.config),
                    this.zone.run(() => {
                      (this.initialized = !0),
                        (this.currentIndex = this.config && this.config.initialSlide ? this.config.initialSlide : 0);
                    }),
                    this.$instance.on('afterChange', (n, e, t) => {
                      this.zone.run(() => {
                        this.afterChange.emit({ event: n, slick: e, currentSlide: t }), (this.currentIndex = t);
                      });
                    }),
                    this.$instance.on('beforeChange', (n, e, t, l) => {
                      this.zone.run(() => {
                        this.beforeChange.emit({ event: n, slick: e, currentSlide: t, nextSlide: l }),
                          (this.currentIndex = l);
                      });
                    }),
                    this.$instance.on('breakpoint', (n, e, t) => {
                      this.zone.run(() => {
                        this.breakpoint.emit({ event: n, slick: e, breakpoint: t });
                      });
                    }),
                    this.$instance.on('destroy', (n, e) => {
                      this.zone.run(() => {
                        this.destroy.emit({ event: n, slick: e }), (this.initialized = !1);
                      });
                    });
                });
            }
            addSlide(n) {
              this._addedSlides.push(n);
            }
            removeSlide(n) {
              this._removedSlides.push(n);
            }
            slickGoTo(n) {
              this.zone.runOutsideAngular(() => {
                this.$instance.slick('slickGoTo', n);
              });
            }
            slickNext() {
              this.zone.runOutsideAngular(() => {
                this.$instance.slick('slickNext');
              });
            }
            slickPrev() {
              this.zone.runOutsideAngular(() => {
                this.$instance.slick('slickPrev');
              });
            }
            slickPause() {
              this.zone.runOutsideAngular(() => {
                this.$instance.slick('slickPause');
              });
            }
            slickPlay() {
              this.zone.runOutsideAngular(() => {
                this.$instance.slick('slickPlay');
              });
            }
            unslick() {
              this.$instance &&
                (this.zone.runOutsideAngular(() => {
                  this.$instance.slick('unslick');
                }),
                (this.$instance = void 0)),
                (this.initialized = !1);
            }
            ngOnChanges(n) {
              if (this.initialized) {
                const e = n.config;
                if (e.previousValue !== e.currentValue && void 0 !== e.currentValue) {
                  const n = e.currentValue.refresh,
                    t = Object.assign({}, e.currentValue);
                  delete t.refresh,
                    this.zone.runOutsideAngular(() => {
                      this.$instance.slick('slickSetOption', t, n);
                    });
                }
              }
            }
          })(),
        yc = (() =>
          class {
            constructor(n, e, t) {
              (this.el = n), (this.platformId = e), (this.carousel = t);
            }
            ngOnInit() {
              Object(s.w)(this.platformId) && this.carousel.addSlide(this);
            }
            ngOnDestroy() {
              Object(s.w)(this.platformId) && this.carousel.removeSlide(this);
            }
          })(),
        wc = (() => class {})();
      var Cc = l.ob({ encapsulation: 2, styles: [], data: {} });
      function xc(n) {
        return l.Mb(0, [l.Bb(null, 0)], null, null);
      }
      class Oc {
        constructor() {
          (this.testimonials = [{ statement: 'test1' }, { statement: 'test2' }, { statement: 'test3' }]),
            (this.slideConfig = {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: !1,
              autoplay: !0,
              dots: !0,
              arrows: !1,
              adaptiveHeight: !0,
              speed: 1750,
              autoplaySpeed: 7e3
            });
        }
        ngOnInit() {}
      }
      var kc = l.ob({
        encapsulation: 0,
        styles: [
          [
            '.testimonial-shell[_ngcontent-%COMP%]{position:relative;min-height:90vh;bottom:0}.testimonial[_ngcontent-%COMP%]{position:absolute!important;left:20px;bottom:0;height:310px;width:80%;font-size:1.8rem;font-weight:700;color:#fff}.highlight[_ngcontent-%COMP%]{color:#0057c1}.auth[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2rem;text-transform:uppercase}.auth[_ngcontent-%COMP%]   img.avatar[_ngcontent-%COMP%]{width:60px;height:60px;float:left;box-shadow:1px -1px 3px 1px #5f5f5f;border-radius:5px;margin:5px}.auth-name[_ngcontent-%COMP%]{padding-left:10px}'
          ]
        ],
        data: {}
      });
      function Sc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 59, 'div', [['class', 'testimonial-shell']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              2,
              0,
              null,
              null,
              56,
              'ngx-slick-carousel',
              [['class', 'carousel testimonial']],
              null,
              null,
              null,
              xc,
              Cc
            )),
            l.Hb(
              5120,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [_c]
            ),
            l.pb(4, 13287424, null, 0, _c, [l.k, l.y, l.A], { config: [0, 'config'] }, null),
            (n()(), l.Kb(-1, 0, ['\n    '])),
            (n()(),
            l.qb(
              6,
              0,
              null,
              0,
              15,
              'div',
              [
                ['class', 'slide'],
                ['ngxSlickItem', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            l.pb(7, 212992, null, 0, yc, [l.k, l.A, _c], null, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(9, 0, null, null, 4, 'div', [['class', 'statement']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        \u201cHiredHelpr\n        '])),
            (n()(), l.qb(11, 0, null, null, 1, 'span', [['class', 'highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['does everything for you.'])),
            (n()(),
            l.Kb(-1, null, [
              ' All I have to do is show up, record the readings through\n        my phone and I\u2019m done.\n      '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(15, 0, null, null, 5, 'div', [['class', 'auth']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              17,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'avatar'],
                ['src', 'assets/avatar.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            l.qb(18, 0, null, null, 1, 'span', [['class', 'auth-name highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Ryan Jones'])),
            (n()(), l.Kb(-1, null, ['\n        CEO, Pools service of America\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, 0, ['\n    '])),
            (n()(),
            l.qb(
              23,
              0,
              null,
              0,
              16,
              'div',
              [
                ['class', 'slide'],
                ['ngxSlickItem', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            l.pb(24, 212992, null, 0, yc, [l.k, l.A, _c], null, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(26, 0, null, null, 4, 'div', [['class', 'statement']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        \u201cHiredHelpr\n        '])),
            (n()(), l.qb(28, 0, null, null, 1, 'span', [['class', 'highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['does everything for you.'])),
            (n()(),
            l.Kb(-1, null, [
              ' All I have to do is show up, record the readings through\n        my phone and I\u2019m done.\n      '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(32, 0, null, null, 6, 'div', [['class', 'auth']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              34,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'avatar'],
                ['src', 'assets/avatar.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(36, 0, null, null, 1, 'span', [['class', 'auth-name highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Ryan Jones'])),
            (n()(), l.Kb(-1, null, [' CEO, Pools service of America\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, 0, ['\n    '])),
            (n()(),
            l.qb(
              41,
              0,
              null,
              0,
              16,
              'div',
              [
                ['class', 'slide'],
                ['ngxSlickItem', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            l.pb(42, 212992, null, 0, yc, [l.k, l.A, _c], null, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(44, 0, null, null, 4, 'div', [['class', 'statement']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        \u201cHiredHelpr\n        '])),
            (n()(), l.qb(46, 0, null, null, 1, 'span', [['class', 'highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['does everything for you.'])),
            (n()(),
            l.Kb(-1, null, [
              ' All I have to do is show up, record the readings through\n        my phone and I\u2019m done.\n      '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(50, 0, null, null, 6, 'div', [['class', 'auth']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              52,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'avatar'],
                ['src', 'assets/avatar.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(54, 0, null, null, 1, 'span', [['class', 'auth-name highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Ryan Jones'])),
            (n()(), l.Kb(-1, null, [' CEO, Pools service of America\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, 0, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 4, 0, e.component.slideConfig), n(e, 7, 0), n(e, 24, 0), n(e, 42, 0);
          },
          null
        );
      }
      new xl('Login');
      class Mc {
        constructor(n, e, t, l, r) {
          (this.router = n),
            (this.route = e),
            (this.formBuilder = t),
            (this.i18nService = l),
            (this.authenticationService = r),
            (this.isLoading = !1),
            (this.hasError = !1);
        }
        ngOnInit() {}
        ngOnDestroy() {}
        login(n) {
          this.authenticationService.login(n.value), console.log(n);
        }
        setLanguage(n) {
          this.i18nService.language = n;
        }
        get currentLanguage() {
          return this.i18nService.language;
        }
        get languages() {
          return this.i18nService.supportedLanguages;
        }
      }
      var Pc = l.ob({
        encapsulation: 0,
        styles: [
          [
            'body[_ngcontent-%COMP%]{overflow-x:hidden;font-family:Poppins,sans-serif;font-size:14px}h3[_ngcontent-%COMP%]{font-size:16px}.full-body[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.full-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex-shrink:0}.left-pane[_ngcontent-%COMP%]{background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);-webkit-box-flex:1;flex-grow:1}.logo-main[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#0057c1}.helpr-main[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#fff}.logo[_ngcontent-%COMP%]{margin:20px 0 0 20px}.testimonial-shell[_ngcontent-%COMP%]{position:relative;min-height:90vh;bottom:0}.testimonial[_ngcontent-%COMP%]{position:absolute!important;left:20px;bottom:0;height:310px;width:80%;font-size:1.8rem;font-weight:700;color:#fff}.container[_ngcontent-%COMP%]{padding:20px}.slick-slide[_ngcontent-%COMP%]{opacity:0;-webkit-transition:opacity 1.25s ease-out;transition:opacity 1.25s ease-out}.slick-slide.slick-current.slick-active[_ngcontent-%COMP%]{opacity:1;-webkit-transition:opacity 1.25s ease-out;transition:opacity 1.25s ease-out}.slick-dots[_ngcontent-%COMP%]{text-align:left!important}.slickdot[_ngcontent-%COMP%]{box-sizing:border-box;height:14px;width:14px;border:1px solid #b7b7b7;border-radius:2px;background-color:#fff}.slickdot.slick-active[_ngcontent-%COMP%]{background-color:#0057c1!important}.auth[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2rem;text-transform:uppercase}.auth[_ngcontent-%COMP%]   img.avatar[_ngcontent-%COMP%]{width:60px;height:60px;float:left;box-shadow:1px -1px 3px 1px #5f5f5f;border-radius:5px;margin:5px}.highlight[_ngcontent-%COMP%]{color:#0057c1}.auth-name[_ngcontent-%COMP%]{padding-left:10px}.header-signin[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:2rem;font-weight:400;color:#000;text-transform:inherit}sub[_ngcontent-%COMP%]{font-size:1.6rem;color:#9b9b9b}.top-left-rad[_ngcontent-%COMP%]{border-top-left-radius:5px}.top-right-rad[_ngcontent-%COMP%]{border-top-right-radius:5px}.table-title[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border:0}.main-modal-footer[_ngcontent-%COMP%]   .btn-width-lg[_ngcontent-%COMP%]{min-width:300px}.disclaimer[_ngcontent-%COMP%]{color:#9b9b9b}.disclaimer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-weight:400}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:50px;padding:5px 10px;border:1px solid #bbb;font-size:16px;border-radius:4px}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:.375rem 1.75rem .375rem .75rem;font-size:12px;border-radius:4px;border:2px solid #eee;height:5rem}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}.form-field[_ngcontent-%COMP%]{margin-bottom:10px}.signupfields[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600}.main-button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;padding:7px 35px;border-radius:4px;height:45px}button.blue-btn[_ngcontent-%COMP%]{background:#0057c1;color:#fff;border:1px solid #0057c1}button.blue-btn[_ngcontent-%COMP%]:hover{background:#fff;border:1px solid #0057c1;color:#0057c1}'
          ]
        ],
        data: {}
      });
      function Kc(n) {
        return l.Mb(
          0,
          [
            (n()(),
            l.qb(0, 0, null, null, 94, 'div', [['class', 'container-fluid h-100']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              2,
              0,
              null,
              null,
              91,
              'div',
              [['class', 'row justify-content-center h-100']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              4,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'col-6 hidden-md-down left-pane']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(6, 0, null, null, 4, 'div', [['class', 'logo']], null, null, null, null, null)),
            (n()(), l.qb(7, 0, null, null, 1, 'span', [['class', 'logo-main']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Hired'])),
            (n()(), l.qb(9, 0, null, null, 1, 'span', [['class', 'helpr-main']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Helpr'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(12, 0, null, null, 1, 'app-carousel', [], null, null, null, Sc, kc)),
            l.pb(13, 114688, null, 0, Oc, [], null, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(16, 0, null, null, 76, 'div', [['class', 'col-6 ']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              18,
              0,
              null,
              null,
              73,
              'div',
              [['class', 'row mt-5  animated animatedFadeInUp fadeInUp']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(20, 0, null, null, 7, 'div', [['class', 'col-12 pl-5 mb-5']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(22, 0, null, null, 1, 'h2', [['class', 'pb-3']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Nationwide Pool Care Made Easy'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(25, 0, null, null, 1, 'sub', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['We Service Pools Forever with No Hassle. '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              29,
              0,
              null,
              null,
              61,
              'div',
              [['class', 'col-7 mt-5 ml-5 signupfields']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              31,
              0,
              null,
              null,
              50,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'ngSubmit'],
                [null, 'keydown.enter'],
                [null, 'submit'],
                [null, 'reset']
              ],
              function(n, e, t) {
                var r = !0,
                  s = n.component;
                return (
                  'submit' === e && (r = !1 !== l.Cb(n, 33).onSubmit(t) && r),
                  'reset' === e && (r = !1 !== l.Cb(n, 33).onReset() && r),
                  'ngSubmit' === e && (r = !1 !== s.login(l.Cb(n, 33)) && r),
                  'keydown.enter' === e && (r = !1 !== t.preventDefault() && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(32, 16384, null, 0, ni, [], null, null),
            l.pb(
              33,
              4210688,
              [['loginForm', 4]],
              0,
              Ws,
              [
                [8, null],
                [8, null]
              ],
              null,
              { ngSubmit: 'ngSubmit' }
            ),
            l.Hb(2048, null, ts, null, [Ws]),
            l.pb(35, 16384, null, 0, os, [[4, ts]], null, null),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(38, 0, null, null, 17, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(40, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['WORK EMAIL ADDRESS'])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              43,
              0,
              null,
              null,
              8,
              'input',
              [
                ['email', 'true'],
                ['name', 'useremail'],
                ['ngModel', ''],
                ['required', '']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 44)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 44).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 44)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 44)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(44, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(45, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.pb(46, 16384, null, 0, li, [], { email: [0, 'email'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n, e) {
                return [n, e];
              },
              [ti, li]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              49,
              671744,
              [['useremail', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(51, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(53, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                Email is Required.\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.qb(57, 0, null, null, 16, 'div', [['class', 'form-field mt-4 ']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(59, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['PASSWORD'])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(
              62,
              0,
              null,
              null,
              7,
              'input',
              [
                ['name', 'password'],
                ['ngModel', ''],
                ['required', '']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 63)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 63).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 63)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 63)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(63, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(64, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n) {
                return [n];
              },
              [ti]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              67,
              671744,
              [['password', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(69, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(71, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                Password is Required.\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(),
            l.qb(76, 0, null, null, 4, 'div', [['class', 'main-button-action mt-4 ']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(78, 0, null, null, 1, 'button', [['class', 'btn blue-btn']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                Log in\n              '])),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(83, 0, null, null, 6, 'div', [['class', 'forgotpassword mt-3 ']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n            Don\u2019t have an account?\n            '])),
            (n()(),
            l.qb(
              85,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 86).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(86, 671744, null, 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(87, 1),
            (n()(), l.Kb(-1, null, ['Create an Account'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 13, 0),
              n(e, 45, 0, ''),
              n(e, 46, 0, 'true'),
              n(e, 49, 0, 'useremail', ''),
              n(e, 64, 0, ''),
              n(e, 67, 0, 'password', '');
            var t = n(e, 87, 0, '/signup');
            n(e, 86, 0, t);
          },
          function(n, e) {
            n(
              e,
              31,
              0,
              l.Cb(e, 35).ngClassUntouched,
              l.Cb(e, 35).ngClassTouched,
              l.Cb(e, 35).ngClassPristine,
              l.Cb(e, 35).ngClassDirty,
              l.Cb(e, 35).ngClassValid,
              l.Cb(e, 35).ngClassInvalid,
              l.Cb(e, 35).ngClassPending
            ),
              n(
                e,
                43,
                0,
                l.Cb(e, 45).required ? '' : null,
                l.Cb(e, 51).ngClassUntouched,
                l.Cb(e, 51).ngClassTouched,
                l.Cb(e, 51).ngClassPristine,
                l.Cb(e, 51).ngClassDirty,
                l.Cb(e, 51).ngClassValid,
                l.Cb(e, 51).ngClassInvalid,
                l.Cb(e, 51).ngClassPending
              ),
              n(e, 53, 0, l.Cb(e, 49).valid || l.Cb(e, 49).untouched),
              n(
                e,
                62,
                0,
                l.Cb(e, 64).required ? '' : null,
                l.Cb(e, 69).ngClassUntouched,
                l.Cb(e, 69).ngClassTouched,
                l.Cb(e, 69).ngClassPristine,
                l.Cb(e, 69).ngClassDirty,
                l.Cb(e, 69).ngClassValid,
                l.Cb(e, 69).ngClassInvalid,
                l.Cb(e, 69).ngClassPending
              ),
              n(e, 71, 0, l.Cb(e, 67).valid || l.Cb(e, 67).untouched),
              n(e, 85, 0, l.Cb(e, 86).target, l.Cb(e, 86).href);
          }
        );
      }
      function Ec(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-login', [], null, null, null, Kc, Pc)),
            l.pb(1, 245760, null, 0, Mc, [Ut, Ee, ui, Zl, wl], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Ac = l.mb('app-login', Mc, Ec, {}, {}, []);
      class Dc {
        transform(n) {
          if (n) {
            if (3 === n.length) return n.concat(' ');
            if (n.length >= 4 && n.length <= 6) return n;
            if (n.length >= 6 && n.length <= 7) return n + '-';
            if (n.length > 7) return n;
          }
        }
      }
      class Tc {
        constructor() {
          this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !1,
            autoplay: !0,
            dots: !0,
            arrows: !1,
            adaptiveHeight: !0,
            speed: 1750,
            autoplaySpeed: 7e3
          };
        }
        ngOnInit() {}
      }
      var Ic = l.ob({
        encapsulation: 0,
        styles: [
          [
            '.testimonial-shell[_ngcontent-%COMP%]{position:relative;min-height:90vh;bottom:0}.testimonial[_ngcontent-%COMP%]{position:absolute!important;left:20px;bottom:0;height:310px;width:80%;font-size:1.8rem;font-weight:700;color:#fff}.highlight[_ngcontent-%COMP%]{color:#0057c1}.auth[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2rem;text-transform:uppercase}.auth[_ngcontent-%COMP%]   img.avatar[_ngcontent-%COMP%]{width:60px;height:60px;float:left;box-shadow:1px -1px 3px 1px #5f5f5f;border-radius:5px;margin:5px}.auth-name[_ngcontent-%COMP%]{padding-left:10px}'
          ]
        ],
        data: {}
      });
      function qc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 59, 'div', [['class', 'testimonial-shell']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              2,
              0,
              null,
              null,
              56,
              'ngx-slick-carousel',
              [['class', 'carousel testimonial']],
              null,
              null,
              null,
              xc,
              Cc
            )),
            l.Hb(
              5120,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [_c]
            ),
            l.pb(4, 13287424, null, 0, _c, [l.k, l.y, l.A], { config: [0, 'config'] }, null),
            (n()(), l.Kb(-1, 0, ['\n    '])),
            (n()(),
            l.qb(
              6,
              0,
              null,
              0,
              15,
              'div',
              [
                ['class', 'slide'],
                ['ngxSlickItem', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            l.pb(7, 212992, null, 0, yc, [l.k, l.A, _c], null, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(9, 0, null, null, 4, 'div', [['class', 'statement']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        \u201cHiredHelpr\n        '])),
            (n()(), l.qb(11, 0, null, null, 1, 'span', [['class', 'highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['does everything for you.'])),
            (n()(),
            l.Kb(-1, null, [
              ' All I have to do is show up, record the readings through\n        my phone and I\u2019m done.\n      '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(15, 0, null, null, 5, 'div', [['class', 'auth']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              17,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'avatar'],
                ['src', 'assets/avatar.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            l.qb(18, 0, null, null, 1, 'span', [['class', 'auth-name highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Ryan Jones'])),
            (n()(), l.Kb(-1, null, ['\n        CEO, Pools service of America\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, 0, ['\n    '])),
            (n()(),
            l.qb(
              23,
              0,
              null,
              0,
              16,
              'div',
              [
                ['class', 'slide'],
                ['ngxSlickItem', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            l.pb(24, 212992, null, 0, yc, [l.k, l.A, _c], null, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(26, 0, null, null, 4, 'div', [['class', 'statement']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        \u201cHiredHelpr\n        '])),
            (n()(), l.qb(28, 0, null, null, 1, 'span', [['class', 'highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['does everything for you.'])),
            (n()(),
            l.Kb(-1, null, [
              ' All I have to do is show up, record the readings through\n        my phone and I\u2019m done.\n      '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(32, 0, null, null, 6, 'div', [['class', 'auth']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              34,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'avatar'],
                ['src', 'assets/avatar.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(36, 0, null, null, 1, 'span', [['class', 'auth-name highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Ryan Jones'])),
            (n()(), l.Kb(-1, null, [' CEO, Pools service of America\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, 0, ['\n    '])),
            (n()(),
            l.qb(
              41,
              0,
              null,
              0,
              16,
              'div',
              [
                ['class', 'slide'],
                ['ngxSlickItem', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            l.pb(42, 212992, null, 0, yc, [l.k, l.A, _c], null, null),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(44, 0, null, null, 4, 'div', [['class', 'statement']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        \u201cHiredHelpr\n        '])),
            (n()(), l.qb(46, 0, null, null, 1, 'span', [['class', 'highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['does everything for you.'])),
            (n()(),
            l.Kb(-1, null, [
              ' All I have to do is show up, record the readings through\n        my phone and I\u2019m done.\n      '
            ])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(50, 0, null, null, 6, 'div', [['class', 'auth']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              52,
              0,
              null,
              null,
              0,
              'img',
              [
                ['class', 'avatar'],
                ['src', 'assets/avatar.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(54, 0, null, null, 1, 'span', [['class', 'auth-name highlight']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Ryan Jones'])),
            (n()(), l.Kb(-1, null, [' CEO, Pools service of America\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, 0, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 4, 0, e.component.slideConfig), n(e, 7, 0), n(e, 24, 0), n(e, 42, 0);
          },
          null
        );
      }
      const Nc = {
        production: !0,
        hmr: !1,
        version: t('4pUk').a.npm_package_version,
        serverUrl: 'http://18.222.162.8',
        serverPort: 8080,
        defaultLanguage: 'en-US',
        supportedLanguages: ['en-US', 'fr-FR']
      };
      class Rc {
        constructor(n, e) {
          (this.http = n),
            (this.router = e),
            (this.serverUrl = Nc.serverUrl),
            (this.serverPort = Nc.serverPort),
            (this.baseUrl = `${this.serverUrl}:${this.serverPort}`),
            (this.page = 1);
        }
        ngOnInit() {}
        signup(n) {
          if (1 === this.page)
            (this.Formdata = {
              email: n.value.email,
              name: n.value.fullname,
              password: n.value.password,
              confirm_password: n.value.confirm_password,
              phone_no: '',
              company_name: '',
              company_address: '',
              roles: 'enterprise'
            }),
              (this.page = 2);
          else {
            (this.Formdata.phone_no = n.value.phone_number),
              (this.Formdata.company_name = n.value.companyname),
              (this.Formdata.company_address = n.value.company_address);
            let e = { headers: new Yl().set('Content-Type', 'application/json') };
            this.http.post(`${this.baseUrl}/signup`, { data: this.Formdata }, e).subscribe(
              n => {
                this.router.navigate(['login']);
              },
              n => {
                console.log(JSON.stringify(n));
              }
            );
          }
        }
      }
      var jc = l.ob({
        encapsulation: 0,
        styles: [
          [
            'body[_ngcontent-%COMP%]{overflow-x:hidden;font-family:Poppins,sans-serif;font-size:14px}h3[_ngcontent-%COMP%]{font-size:16px}.full-body[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.full-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex-shrink:0}.left-pane[_ngcontent-%COMP%]{background:linear-gradient(135deg,#00e0f2 0,#00bee0 100%);-webkit-box-flex:1;flex-grow:1}.logo-main[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#0057c1}.helpr-main[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#fff}.logo[_ngcontent-%COMP%]{margin:20px 0 0 20px}.testimonial-shell[_ngcontent-%COMP%]{position:relative;min-height:90vh;bottom:0}.testimonial[_ngcontent-%COMP%]{position:absolute!important;left:20px;bottom:0;height:310px;width:80%;font-size:1.8rem;font-weight:700;color:#fff}.container[_ngcontent-%COMP%]{padding:20px}.slick-slide[_ngcontent-%COMP%]{opacity:0;-webkit-transition:opacity 1.25s ease-out;transition:opacity 1.25s ease-out}.slick-slide.slick-current.slick-active[_ngcontent-%COMP%]{opacity:1;-webkit-transition:opacity 1.25s ease-out;transition:opacity 1.25s ease-out}.slick-dots[_ngcontent-%COMP%]{text-align:left!important}.slickdot[_ngcontent-%COMP%]{box-sizing:border-box;height:14px;width:14px;border:1px solid #b7b7b7;border-radius:2px;background-color:#fff}.slickdot.slick-active[_ngcontent-%COMP%]{background-color:#0057c1!important}.auth[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2rem;text-transform:uppercase}.auth[_ngcontent-%COMP%]   img.avatar[_ngcontent-%COMP%]{width:60px;height:60px;float:left;box-shadow:1px -1px 3px 1px #5f5f5f;border-radius:5px;margin:5px}.highlight[_ngcontent-%COMP%]{color:#0057c1}.auth-name[_ngcontent-%COMP%]{padding-left:10px}.header-signin[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:2rem;font-weight:400;color:#000;text-transform:inherit}sub[_ngcontent-%COMP%]{font-size:1.6rem;color:#9b9b9b}.top-left-rad[_ngcontent-%COMP%]{border-top-left-radius:5px}.top-right-rad[_ngcontent-%COMP%]{border-top-right-radius:5px}.table-title[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border:0}.main-modal-footer[_ngcontent-%COMP%]   .btn-width-lg[_ngcontent-%COMP%]{min-width:300px}.disclaimer[_ngcontent-%COMP%]{color:#9b9b9b}.disclaimer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-weight:400}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:50px;padding:5px 10px;border:1px solid #bbb;font-size:16px;border-radius:4px}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#bbb;font-weight:200}.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:.375rem 1.75rem .375rem .75rem;font-size:12px;border-radius:4px;border:2px solid #eee;height:5rem}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}.form-field[_ngcontent-%COMP%]{margin-bottom:10px}.signupfields[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600}.main-button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;padding:7px 35px;border-radius:4px;height:45px}button.blue-btn[_ngcontent-%COMP%]{background:#0057c1;color:#fff;border:1px solid #0057c1}button.blue-btn[_ngcontent-%COMP%]:hover{background:#fff;border:1px solid #0057c1;color:#0057c1}'
          ]
        ],
        data: {}
      });
      function Vc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 87, 'div', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(2, 0, null, null, 17, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(4, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['WORK EMAIL ADDRESS'])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              7,
              0,
              null,
              null,
              8,
              'input',
              [
                ['email', 'true'],
                ['name', 'email'],
                ['ngModel', ''],
                ['placeholder', 'Work Email Address'],
                ['required', '']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 8)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 8).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 8)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 8)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(8, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(9, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.pb(10, 16384, null, 0, li, [], { email: [0, 'email'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n, e) {
                return [n, e];
              },
              [ti, li]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              13,
              671744,
              [['email', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(15, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(17, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Email is Required.\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(21, 0, null, null, 16, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(23, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['FULL NAME'])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              26,
              0,
              null,
              null,
              7,
              'input',
              [
                ['name', 'fullname'],
                ['ngModel', ''],
                ['placeholder', 'Full Name'],
                ['required', ''],
                ['type', 'text']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 27)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 27).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 27)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 27)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(27, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(28, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n) {
                return [n];
              },
              [ti]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              31,
              671744,
              [['fullname', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(33, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(35, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Full Name is Required.\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(39, 0, null, null, 17, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(41, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['PASSWORD (8 OR MORE CHARACTERS)'])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              44,
              0,
              null,
              null,
              8,
              'input',
              [
                ['minlength', '8'],
                ['name', 'password'],
                ['ngModel', ''],
                ['placeholder', 'Password'],
                ['required', ''],
                ['type', 'password']
              ],
              [
                [1, 'required', 0],
                [1, 'minlength', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 45)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 45).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 45)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 45)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(45, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(46, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.pb(47, 540672, null, 0, ri, [], { minlength: [0, 'minlength'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n, e) {
                return [n, e];
              },
              [ti, ri]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              50,
              671744,
              [['password', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(52, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(54, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Password is Required.\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(58, 0, null, null, 22, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(60, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, [' CONFIRM PASSWORD (8 OR MORE CHARACTERS)'])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              63,
              0,
              null,
              null,
              8,
              'input',
              [
                ['minlength', '8'],
                ['name', 'confirm_password'],
                ['ngModel', ''],
                ['placeholder', 'Confirm Password'],
                ['required', ''],
                ['type', 'password']
              ],
              [
                [1, 'required', 0],
                [1, 'minlength', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 64)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 64).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 64)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 64)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(64, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(65, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.pb(66, 540672, null, 0, ri, [], { minlength: [0, 'minlength'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n, e) {
                return [n, e];
              },
              [ti, ri]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              69,
              671744,
              [['confirm_password', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(71, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(73, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Please Confirm Password.\n                '])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(76, 0, null, null, 3, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  '])),
            (n()(), l.qb(78, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Password Do Not Match.\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(82, 0, null, null, 4, 'div', [['class', 'main-button-action mt-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              84,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn blue-btn']],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return 'click' === e && (r = !1 !== n.component.signup(l.Cb(n.parent, 34)) && r), r;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  Continue\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n            ']))
          ],
          function(n, e) {
            n(e, 9, 0, ''),
              n(e, 10, 0, 'true'),
              n(e, 13, 0, 'email', ''),
              n(e, 28, 0, ''),
              n(e, 31, 0, 'fullname', ''),
              n(e, 46, 0, ''),
              n(e, 47, 0, '8'),
              n(e, 50, 0, 'password', ''),
              n(e, 65, 0, ''),
              n(e, 66, 0, '8'),
              n(e, 69, 0, 'confirm_password', '');
          },
          function(n, e) {
            n(
              e,
              7,
              0,
              l.Cb(e, 9).required ? '' : null,
              l.Cb(e, 15).ngClassUntouched,
              l.Cb(e, 15).ngClassTouched,
              l.Cb(e, 15).ngClassPristine,
              l.Cb(e, 15).ngClassDirty,
              l.Cb(e, 15).ngClassValid,
              l.Cb(e, 15).ngClassInvalid,
              l.Cb(e, 15).ngClassPending
            ),
              n(e, 17, 0, l.Cb(e, 13).valid || l.Cb(e, 13).untouched),
              n(
                e,
                26,
                0,
                l.Cb(e, 28).required ? '' : null,
                l.Cb(e, 33).ngClassUntouched,
                l.Cb(e, 33).ngClassTouched,
                l.Cb(e, 33).ngClassPristine,
                l.Cb(e, 33).ngClassDirty,
                l.Cb(e, 33).ngClassValid,
                l.Cb(e, 33).ngClassInvalid,
                l.Cb(e, 33).ngClassPending
              ),
              n(e, 35, 0, l.Cb(e, 31).valid || l.Cb(e, 31).untouched),
              n(
                e,
                44,
                0,
                l.Cb(e, 46).required ? '' : null,
                l.Cb(e, 47).minlength ? l.Cb(e, 47).minlength : null,
                l.Cb(e, 52).ngClassUntouched,
                l.Cb(e, 52).ngClassTouched,
                l.Cb(e, 52).ngClassPristine,
                l.Cb(e, 52).ngClassDirty,
                l.Cb(e, 52).ngClassValid,
                l.Cb(e, 52).ngClassInvalid,
                l.Cb(e, 52).ngClassPending
              ),
              n(e, 54, 0, l.Cb(e, 50).valid || l.Cb(e, 50).untouched),
              n(
                e,
                63,
                0,
                l.Cb(e, 65).required ? '' : null,
                l.Cb(e, 66).minlength ? l.Cb(e, 66).minlength : null,
                l.Cb(e, 71).ngClassUntouched,
                l.Cb(e, 71).ngClassTouched,
                l.Cb(e, 71).ngClassPristine,
                l.Cb(e, 71).ngClassDirty,
                l.Cb(e, 71).ngClassValid,
                l.Cb(e, 71).ngClassInvalid,
                l.Cb(e, 71).ngClassPending
              ),
              n(e, 73, 0, l.Cb(e, 69).valid || l.Cb(e, 69).untouched),
              n(
                e,
                76,
                0,
                (!l.Cb(e, 50).valid && !l.Cb(e, 50).touched) ||
                  !l.Cb(e, 69).touched ||
                  l.Cb(e, 69).value === l.Cb(e, 50).value
              ),
              n(e, 84, 0, !l.Cb(e, 13).valid || !l.Cb(e, 50).valid || !l.Cb(e, 69).valid);
          }
        );
      }
      function Lc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 64, 'div', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(2, 0, null, null, 19, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(4, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['PHONE NUMBER'])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              7,
              0,
              null,
              null,
              10,
              'input',
              [
                ['maxlength', '12'],
                ['name', 'phone_number'],
                ['pattern', '[0-9]{3} [0-9]{3}-[0-9]{4}'],
                ['placeholder', '### ###-####'],
                ['required', ''],
                ['type', 'tel']
              ],
              [
                [1, 'required', 0],
                [1, 'maxlength', 0],
                [1, 'pattern', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 8)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 8).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 8)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 8)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(8, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(9, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.pb(10, 540672, null, 0, si, [], { maxlength: [0, 'maxlength'] }, null),
            l.pb(11, 540672, null, 0, ii, [], { pattern: [0, 'pattern'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n, e, t) {
                return [n, e, t];
              },
              [ti, si, ii]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              14,
              671744,
              [['phone_number', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Gb(15, 1),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(17, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(19, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Phone Number is Required.\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(23, 0, null, null, 16, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(25, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['COMPANY NAME'])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              28,
              0,
              null,
              null,
              7,
              'input',
              [
                ['name', 'companyname'],
                ['ngModel', ''],
                ['placeholder', 'Company Name'],
                ['required', ''],
                ['type', 'text']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 29)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 29).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 29)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 29)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(29, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(30, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n) {
                return [n];
              },
              [ti]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              33,
              671744,
              [['companyname', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(35, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(37, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Company Name is Required.\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.qb(41, 0, null, null, 16, 'div', [['class', 'form-field']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(43, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['COMPANY ADDRESS'])),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              46,
              0,
              null,
              null,
              7,
              'input',
              [
                ['name', 'company_address'],
                ['ngModel', ''],
                ['placeholder', 'Company Address'],
                ['required', ''],
                ['type', 'text']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'input' === e && (r = !1 !== l.Cb(n, 47)._handleInput(t.target.value) && r),
                  'blur' === e && (r = !1 !== l.Cb(n, 47).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== l.Cb(n, 47)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== l.Cb(n, 47)._compositionEnd(t.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(47, 16384, null, 0, ns, [l.C, l.k, [2, Xr]], null, null),
            l.pb(48, 16384, null, 0, ti, [], { required: [0, 'required'] }, null),
            l.Hb(
              1024,
              null,
              as,
              function(n) {
                return [n];
              },
              [ti]
            ),
            l.Hb(
              1024,
              null,
              Jr,
              function(n) {
                return [n];
              },
              [ns]
            ),
            l.pb(
              51,
              671744,
              [['company_address', 4]],
              0,
              Xs,
              [
                [2, ts],
                [6, as],
                [8, null],
                [6, Jr]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            l.Hb(2048, null, rs, null, [Xs]),
            l.pb(53, 16384, null, 0, is, [[4, rs]], null, null),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(), l.qb(55, 0, null, null, 1, 'small', [], [[8, 'hidden', 0]], null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                  Company Address is Required.\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(),
            l.qb(59, 0, null, null, 4, 'div', [['class', 'main-button-action mt-4']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n                '])),
            (n()(),
            l.qb(
              61,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn blue-btn']],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return 'click' === e && (r = !1 !== n.component.signup(l.Cb(n.parent, 34)) && r), r;
              },
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n                  Get Started\n                '])),
            (n()(), l.Kb(-1, null, ['\n              '])),
            (n()(), l.Kb(-1, null, ['\n            ']))
          ],
          function(n, e) {
            n(e, 9, 0, ''), n(e, 10, 0, '12'), n(e, 11, 0, '[0-9]{3} [0-9]{3}-[0-9]{4}');
            var t = l.Lb(e, 14, 1, n(e, 15, 0, l.Cb(e.parent, 0), l.Cb(e, 14).value));
            n(e, 14, 0, 'phone_number', t),
              n(e, 30, 0, ''),
              n(e, 33, 0, 'companyname', ''),
              n(e, 48, 0, ''),
              n(e, 51, 0, 'company_address', '');
          },
          function(n, e) {
            n(
              e,
              7,
              0,
              l.Cb(e, 9).required ? '' : null,
              l.Cb(e, 10).maxlength ? l.Cb(e, 10).maxlength : null,
              l.Cb(e, 11).pattern ? l.Cb(e, 11).pattern : null,
              l.Cb(e, 17).ngClassUntouched,
              l.Cb(e, 17).ngClassTouched,
              l.Cb(e, 17).ngClassPristine,
              l.Cb(e, 17).ngClassDirty,
              l.Cb(e, 17).ngClassValid,
              l.Cb(e, 17).ngClassInvalid,
              l.Cb(e, 17).ngClassPending
            ),
              n(e, 19, 0, l.Cb(e, 14).valid || l.Cb(e, 14).untouched),
              n(
                e,
                28,
                0,
                l.Cb(e, 30).required ? '' : null,
                l.Cb(e, 35).ngClassUntouched,
                l.Cb(e, 35).ngClassTouched,
                l.Cb(e, 35).ngClassPristine,
                l.Cb(e, 35).ngClassDirty,
                l.Cb(e, 35).ngClassValid,
                l.Cb(e, 35).ngClassInvalid,
                l.Cb(e, 35).ngClassPending
              ),
              n(e, 37, 0, l.Cb(e, 33).valid || l.Cb(e, 33).untouched),
              n(
                e,
                46,
                0,
                l.Cb(e, 48).required ? '' : null,
                l.Cb(e, 53).ngClassUntouched,
                l.Cb(e, 53).ngClassTouched,
                l.Cb(e, 53).ngClassPristine,
                l.Cb(e, 53).ngClassDirty,
                l.Cb(e, 53).ngClassValid,
                l.Cb(e, 53).ngClassInvalid,
                l.Cb(e, 53).ngClassPending
              ),
              n(e, 55, 0, l.Cb(e, 51).valid || l.Cb(e, 51).untouched),
              n(e, 61, 0, !l.Cb(e, 14).valid || !l.Cb(e, 33).valid || !l.Cb(e, 51).valid);
          }
        );
      }
      function Uc(n) {
        return l.Mb(
          0,
          [
            l.Eb(0, Dc, []),
            (n()(),
            l.qb(1, 0, null, null, 63, 'div', [['class', 'container-fluid h-100']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(),
            l.qb(
              3,
              0,
              null,
              null,
              60,
              'div',
              [['class', 'row justify-content-center h-100']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(),
            l.qb(
              5,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'col-6 hidden-md-down left-pane']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(7, 0, null, null, 4, 'div', [['class', 'logo']], null, null, null, null, null)),
            (n()(), l.qb(8, 0, null, null, 1, 'span', [['class', 'logo-main']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Hired'])),
            (n()(), l.qb(10, 0, null, null, 1, 'span', [['class', 'helpr-main']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Helpr'])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.qb(13, 0, null, null, 1, 'app-signupcarousel', [], null, null, null, qc, Ic)),
            l.pb(14, 114688, null, 0, Tc, [], null, null),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.qb(17, 0, null, null, 45, 'div', [['class', 'col-6']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(),
            l.qb(
              19,
              0,
              null,
              null,
              42,
              'div',
              [['class', 'row mt-5  animated animatedFadeInUp fadeInUp']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.qb(21, 0, null, null, 7, 'div', [['class', 'col-12 pl-5 mb-5']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(23, 0, null, null, 1, 'h2', [['class', 'pb-3']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Nationwide Pool Care Made Easy'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(26, 0, null, null, 1, 'sub', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['We Service Pools Forever with No Hassle. '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(),
            l.qb(
              30,
              0,
              null,
              null,
              30,
              'div',
              [['class', 'col-7 mt-5 ml-5 signupfields']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(),
            l.qb(
              32,
              0,
              null,
              null,
              11,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'keydown.enter'],
                [null, 'submit'],
                [null, 'reset']
              ],
              function(n, e, t) {
                var r = !0;
                return (
                  'submit' === e && (r = !1 !== l.Cb(n, 34).onSubmit(t) && r),
                  'reset' === e && (r = !1 !== l.Cb(n, 34).onReset() && r),
                  'keydown.enter' === e && (r = !1 !== t.preventDefault() && r),
                  r
                );
              },
              null,
              null
            )),
            l.pb(33, 16384, null, 0, ni, [], null, null),
            l.pb(
              34,
              4210688,
              [['signupForm', 4]],
              0,
              Ws,
              [
                [8, null],
                [8, null]
              ],
              null,
              null
            ),
            l.Hb(2048, null, ts, null, [Ws]),
            l.pb(36, 16384, null, 0, os, [[4, ts]], null, null),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.fb(16777216, null, null, 1, null, Vc)),
            l.pb(39, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n            '])),
            (n()(), l.fb(16777216, null, null, 1, null, Lc)),
            l.pb(42, 16384, null, 0, s.k, [l.N, l.K], { ngIf: [0, 'ngIf'] }, null),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n\n          '])),
            (n()(),
            l.qb(45, 0, null, null, 5, 'div', [['class', 'forgotpassword mt-3']], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Already have an account? '])),
            (n()(),
            l.qb(
              47,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var r = !0;
                return (
                  'click' === e && (r = !1 !== l.Cb(n, 48).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && r), r
                );
              },
              null,
              null
            )),
            l.pb(48, 671744, null, 0, Ht, [Ut, Ee, s.h], { routerLink: [0, 'routerLink'] }, null),
            l.Db(49, 1),
            (n()(), l.Kb(-1, null, ['Sign In'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.qb(52, 0, null, null, 7, 'div', [['class', 'disclaimer mt-5']], null, null, null, null, null)),
            (n()(),
            l.Kb(-1, null, [
              '\n            By clicking \u201cGet Started\u201d I agree to HiredHelpr\u2019s\n            '
            ])),
            (n()(), l.qb(54, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Terms of Service'])),
            (n()(), l.Kb(-1, null, [' and '])),
            (n()(), l.qb(57, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), l.Kb(-1, null, ['Privacy Policy.'])),
            (n()(), l.Kb(-1, null, ['\n          '])),
            (n()(), l.Kb(-1, null, ['\n        '])),
            (n()(), l.Kb(-1, null, ['\n      '])),
            (n()(), l.Kb(-1, null, ['\n    '])),
            (n()(), l.Kb(-1, null, ['\n  '])),
            (n()(), l.Kb(-1, null, ['\n'])),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            var t = e.component;
            n(e, 14, 0), n(e, 39, 0, 1 === t.page), n(e, 42, 0, 2 === t.page);
            var l = n(e, 49, 0, '/login');
            n(e, 48, 0, l);
          },
          function(n, e) {
            n(
              e,
              32,
              0,
              l.Cb(e, 36).ngClassUntouched,
              l.Cb(e, 36).ngClassTouched,
              l.Cb(e, 36).ngClassPristine,
              l.Cb(e, 36).ngClassDirty,
              l.Cb(e, 36).ngClassValid,
              l.Cb(e, 36).ngClassInvalid,
              l.Cb(e, 36).ngClassPending
            ),
              n(e, 47, 0, l.Cb(e, 48).target, l.Cb(e, 48).href);
          }
        );
      }
      function Fc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-signup', [], null, null, null, Uc, jc)),
            l.pb(1, 114688, null, 0, Rc, [hr, Ut], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Hc = l.mb('app-signup', Rc, Fc, {}, {}, []),
        zc = l.ob({ encapsulation: 0, styles: [['']], data: {} });
      function $c(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            l.pb(1, 212992, null, 0, Gt, [Wt, l.N, l.j, [8, null], l.h], null, null),
            (n()(), l.Kb(-1, null, ['\n']))
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      function Bc(n) {
        return l.Mb(
          0,
          [
            (n()(), l.qb(0, 0, null, null, 1, 'app-root', [], null, null, null, $c, zc)),
            l.pb(1, 245760, null, 0, zr, [Ut, Ee, wn.h, Hl, Zl], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Wc = l.mb('app-root', zr, Bc, {}, {}, []),
        Gc = t('oB13');
      const Zc = 'Service workers are disabled or not supported by this browser';
      class Qc {
        constructor(n) {
          if (((this.serviceWorker = n), n)) {
            const e = mi(n, 'controllerchange').pipe(Object(k.a)(() => n.controller)),
              t = sn(
                O(() => a(n.controller)),
                e
              );
            (this.worker = t.pipe(K(n => !!n))), (this.registration = this.worker.pipe(tn(() => n.getRegistration())));
            const l = mi(n, 'message')
              .pipe(Object(k.a)(n => n.data))
              .pipe(K(n => n && n.type))
              .pipe(Object(Gc.a)(new d.a()));
            l.connect(), (this.events = l);
          } else this.worker = this.events = this.registration = ((e = Zc), O(() => wi(new Error(e))));
          var e;
        }
        postMessage(n, e) {
          return this.worker
            .pipe(
              Z(1),
              gn(t => {
                t.postMessage(Object.assign({ action: n }, e));
              })
            )
            .toPromise()
            .then(() => void 0);
        }
        postMessageWithStatus(n, e, t) {
          const l = this.waitForStatus(t),
            r = this.postMessage(n, e);
          return Promise.all([l, r]).then(() => void 0);
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(n) {
          return this.events.pipe(K(e => e.type === n));
        }
        nextEventOfType(n) {
          return this.eventsOfType(n).pipe(Z(1));
        }
        waitForStatus(n) {
          return this.eventsOfType('STATUS')
            .pipe(
              K(e => e.nonce === n),
              Z(1),
              Object(k.a)(n => {
                if (!n.status) throw new Error(n.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let Jc = (() =>
          class {
            constructor(n) {
              if (((this.sw = n), (this.subscriptionChanges = new d.a()), !n.isEnabled))
                return (this.messages = fi), (this.notificationClicks = fi), void (this.subscription = fi);
              (this.messages = this.sw.eventsOfType('PUSH').pipe(Object(k.a)(n => n.data))),
                (this.notificationClicks = this.sw.eventsOfType('NOTIFICATION_CLICK').pipe(Object(k.a)(n => n.data))),
                (this.pushManager = this.sw.registration.pipe(Object(k.a)(n => n.pushManager)));
              const e = this.pushManager.pipe(tn(n => n.getSubscription()));
              this.subscription = Object(fl.a)(e, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(n) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Zc));
              const e = { userVisibleOnly: !0 };
              let t = this.decodeBase64(n.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+')),
                l = new Uint8Array(new ArrayBuffer(t.length));
              for (let r = 0; r < t.length; r++) l[r] = t.charCodeAt(r);
              return (
                (e.applicationServerKey = l),
                this.pushManager
                  .pipe(
                    tn(n => n.subscribe(e)),
                    Z(1)
                  )
                  .toPromise()
                  .then(n => (this.subscriptionChanges.next(n), n))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      Z(1),
                      tn(n => {
                        if (null === n) throw new Error('Not subscribed to push notifications.');
                        return n.unsubscribe().then(n => {
                          if (!n) throw new Error('Unsubscribe failed!');
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(Zc));
            }
            decodeBase64(n) {
              return atob(n);
            }
          })(),
        Yc = (() =>
          class {
            constructor(n) {
              if (((this.sw = n), !n.isEnabled)) return (this.available = fi), void (this.activated = fi);
              (this.available = this.sw.eventsOfType('UPDATE_AVAILABLE')),
                (this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED'));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Zc));
              const n = this.sw.generateNonce();
              return this.sw.postMessageWithStatus('CHECK_FOR_UPDATES', { statusNonce: n }, n);
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Zc));
              const n = this.sw.generateNonce();
              return this.sw.postMessageWithStatus('ACTIVATE_UPDATE', { statusNonce: n }, n);
            }
          })();
      class Xc {}
      const nd = new l.p('NGSW_REGISTER_SCRIPT');
      function ed(n, e, t, r) {
        return () => {
          if (!(Object(s.w)(r) && 'serviceWorker' in navigator && !1 !== t.enabled)) return;
          let i;
          if (
            (navigator.serviceWorker.addEventListener('controllerchange', () => {
              null !== navigator.serviceWorker.controller &&
                navigator.serviceWorker.controller.postMessage({ action: 'INITIALIZE' });
            }),
            'function' == typeof t.registrationStrategy)
          )
            i = t.registrationStrategy();
          else {
            const [e, ...r] = (t.registrationStrategy || 'registerWhenStable').split(':');
            switch (e) {
              case 'registerImmediately':
                i = a(null);
                break;
              case 'registerWithDelay':
                i = a(null).pipe(
                  (function(n, e = gi) {
                    var t;
                    const l = (t = n) instanceof Date && !isNaN(+t) ? +n - e.now() : Math.abs(n);
                    return n => n.lift(new Oi(l, e));
                  })(+r[0] || 0)
                );
                break;
              case 'registerWhenStable':
                i = n.get(l.g).isStable.pipe(K(n => n));
                break;
              default:
                throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`);
            }
          }
          i.pipe(Z(1)).subscribe(() =>
            navigator.serviceWorker
              .register(e, { scope: t.scope })
              .catch(n => console.error('Service worker registration failed with:', n))
          );
        };
      }
      function td(n, e) {
        return new Qc(Object(s.w)(e) && !1 !== n.enabled ? navigator.serviceWorker : void 0);
      }
      let ld = (() => {
          class n {
            static register(e, t = {}) {
              return {
                ngModule: n,
                providers: [
                  { provide: nd, useValue: e },
                  { provide: Xc, useValue: t },
                  { provide: Qc, useFactory: td, deps: [Xc, l.A] },
                  { provide: l.d, useFactory: ed, deps: [l.q, nd, Xc, l.A], multi: !0 }
                ]
              };
            }
          }
          return n;
        })(),
        rd = (() => {
          class n {
            constructor() {}
            getJobs() {
              return a(Ma);
            }
            getJobByID(n) {
              return a(Ma);
            }
          }
          return (
            (n.ngInjectableDef = l.Qb({
              factory: function() {
                return new n();
              },
              token: n,
              providedIn: 'root'
            })),
            n
          );
        })();
      class sd {
        static childRoutes(n) {
          return { path: '', component: ia, children: n, canActivate: [kl], data: { reuse: !0 } };
        }
      }
      const id = { title: Gl('About') };
      sd.childRoutes([{ path: 'about', component: da, data: id }]);
      class od {}
      const ud = { title: Gl('Maintenance') };
      sd.childRoutes([
        { path: 'maintenance', component: rc, data: ud },
        { path: 'maintenance/:id/details', component: cc, pathMatch: 'full' }
      ]);
      class ad {}
      const cd = { title: Gl('Login') };
      class dd {}
      const hd = { title: Gl('Signup') };
      class pd {}
      class bd {}
      class gd {}
      class fd {}
      sd.childRoutes([
        {
          path: 'overview',
          children: [
            { path: '', component: fa, pathMatch: 'full' },
            { path: 'jobs-approved', component: Ca },
            { path: 'jobs-pending', component: Pa },
            { path: 'jobs-completed', component: qa, pathMatch: 'full' },
            { path: 'issues-cleaning', component: La, pathMatch: 'full' },
            { path: 'issues-cleaning/:id/details', component: $a, pathMatch: 'full' }
          ]
        }
      ]);
      class md {}
      class vd {}
      class _d {}
      class yd {}
      class wd {}
      class Cd {}
      t.d(e, 'a', function() {
        return xd;
      });
      var xd = l.nb(r, [zr], function(n) {
        return l.zb([
          l.Ab(512, l.j, l.Y, [
            [8, [Gr, Bo, ku, Yu, ta, Du, Nu, Hu, ca, ga, ya, Sa, Ta, Va, za, Za, Xa, lc, uc, bc, vc, Ac, Hc, Wc]],
            [3, l.j],
            l.w
          ]),
          l.Ab(5120, l.t, l.kb, [[3, l.t]]),
          l.Ab(4608, s.m, s.l, [l.t, [2, s.B]]),
          l.Ab(5120, l.gb, l.lb, [l.y]),
          l.Ab(5120, l.c, l.hb, []),
          l.Ab(5120, l.r, l.ib, []),
          l.Ab(5120, l.s, l.jb, []),
          l.Ab(4608, wn.b, wn.l, [s.c]),
          l.Ab(6144, l.F, null, [wn.b]),
          l.Ab(4608, wn.e, wn.g, []),
          l.Ab(
            5120,
            wn.c,
            function(n, e, t, l, r, s, i, o) {
              return [new wn.j(n, e, t), new wn.o(l), new wn.n(r, s, i, o)];
            },
            [s.c, l.y, l.A, s.c, s.c, wn.e, l.Z, [2, wn.f]]
          ),
          l.Ab(4608, wn.d, wn.d, [wn.c, l.y]),
          l.Ab(135680, wn.m, wn.m, [s.c]),
          l.Ab(4608, wn.k, wn.k, [wn.d, wn.m, l.c]),
          l.Ab(6144, l.D, null, [wn.k]),
          l.Ab(6144, wn.p, null, [wn.m]),
          l.Ab(4608, l.L, l.L, [l.y]),
          l.Ab(5120, Qc, td, [Xc, l.A]),
          l.Ab(4608, Jc, Jc, [Qc]),
          l.Ab(4608, Yc, Yc, [Qc]),
          l.Ab(4608, vs, vs, []),
          l.Ab(4608, Cr, xr, [s.c, l.A, yr]),
          l.Ab(4608, Or, Or, [Cr, wr]),
          l.Ab(
            5120,
            br,
            function(n) {
              return [n];
            },
            [Or]
          ),
          l.Ab(4608, vr, vr, []),
          l.Ab(6144, mr, null, [vr]),
          l.Ab(4608, _r, _r, [mr]),
          l.Ab(6144, Jl, null, [_r]),
          l.Ab(4608, Ql, kr, [Jl, l.q]),
          l.Ab(4608, hr, Rr, [Ql, l.q, [2, Nr]]),
          l.Ab(4608, So, So, [l.j, l.q, ko, fo]),
          l.Ab(4608, ui, ui, []),
          l.Ab(4608, rd, rd, []),
          l.Ab(5120, Ee, dl, [Ut]),
          l.Ab(4608, Yt, Yt, []),
          l.Ab(6144, Qt, null, [Yt]),
          l.Ab(135680, Xt, Xt, [Ut, l.v, l.i, l.q, Qt]),
          l.Ab(4608, Jt, Jt, []),
          l.Ab(5120, nl, il, [Ut, s.r, el]),
          l.Ab(5120, gl, bl, [hl]),
          l.Ab(
            5120,
            l.b,
            function(n) {
              return [n];
            },
            [gl]
          ),
          l.Ab(4608, El, Al, []),
          l.Ab(4608, Il, ql, []),
          l.Ab(4608, jl, Vl, []),
          l.Ab(4608, Dl, Tl, []),
          l.Ab(4608, Ll, Ll, []),
          l.Ab(4608, Hl, Hl, [Ll, El, Il, jl, Dl, Fl, Ul]),
          l.Ab(1024, tl, ul, [[3, Ut]]),
          l.Ab(1024, l.l, wn.q, []),
          l.Ab(
            1024,
            l.x,
            function() {
              return [rl()];
            },
            []
          ),
          l.Ab(512, hl, hl, [l.q]),
          l.Ab(256, nd, './ngsw-worker.js', []),
          l.Ab(256, Xc, { enabled: !0 }, []),
          l.Ab(
            1024,
            l.d,
            function(n, e, t, l, r, s) {
              return [wn.r(n), pl(e), ed(t, l, r, s)];
            },
            [[2, l.x], hl, l.q, nd, Xc, l.A]
          ),
          l.Ab(512, l.e, l.e, [[2, l.d]]),
          l.Ab(131584, l.g, l.g, [l.y, l.Z, l.q, l.l, l.j, l.e]),
          l.Ab(512, ue, ae, []),
          l.Ab(512, Wt, Wt, []),
          l.Ab(256, el, { enableTracing: !0 }, []),
          l.Ab(1024, s.h, ol, [s.p, [2, s.a], el]),
          l.Ab(512, s.g, s.g, [s.h, s.p]),
          l.Ab(512, l.i, l.i, []),
          l.Ab(512, l.v, l.I, [l.i, [2, l.J]]),
          l.Ab(
            1024,
            It,
            function() {
              return [
                [
                  {
                    path: '',
                    component: ia,
                    children: [{ path: 'about', component: da, data: id }],
                    canActivate: [kl],
                    data: { reuse: !0 }
                  }
                ],
                [
                  {
                    path: '',
                    component: ia,
                    children: [
                      {
                        path: 'overview',
                        children: [
                          { path: '', component: fa, pathMatch: 'full' },
                          { path: 'jobs-approved', component: Ca },
                          { path: 'jobs-pending', component: Pa },
                          { path: 'jobs-completed', component: qa, pathMatch: 'full' },
                          { path: 'issues-cleaning', component: La, pathMatch: 'full' },
                          { path: 'issues-cleaning/:id/details', component: $a, pathMatch: 'full' }
                        ]
                      }
                    ],
                    canActivate: [kl],
                    data: { reuse: !0 }
                  }
                ],
                [
                  {
                    path: '',
                    component: ia,
                    children: [
                      { path: 'maintenance', component: rc, data: ud },
                      { path: 'maintenance/:id/details', component: cc, pathMatch: 'full' }
                    ],
                    canActivate: [kl],
                    data: { reuse: !0 }
                  }
                ],
                [{ path: 'login', component: Mc, data: cd }],
                [{ path: 'signup', component: Rc, data: hd }],
                [
                  { path: '**', redirectTo: 'overview', pathMatch: 'full' },
                  { path: 'overview', component: fa },
                  { path: 'maintenance', component: rc },
                  { path: 'login', component: Mc },
                  { path: 'signup', component: Rc }
                ]
              ];
            },
            []
          ),
          l.Ab(512, Dt, jr, []),
          l.Ab(1024, Ut, cl, [l.g, ue, Wt, s.g, l.q, l.v, l.i, It, el, [2, Nt], [2, Dt]]),
          l.Ab(1073742336, sl, sl, [
            [2, tl],
            [2, Ut]
          ]),
          l.Ab(1073742336, s.b, s.b, []),
          l.Ab(1073742336, l.f, l.f, [l.g]),
          l.Ab(1073742336, wn.a, wn.a, [[3, wn.a]]),
          l.Ab(1073742336, ld, ld, []),
          l.Ab(1073742336, oi, oi, []),
          l.Ab(1073742336, ai, ai, []),
          l.Ab(1073742336, Sr, Sr, []),
          l.Ab(1073742336, Mr, Mr, []),
          l.Ab(1073742336, $l, $l, []),
          l.Ab(1073742336, Di, Di, []),
          l.Ab(1073742336, qi, qi, []),
          l.Ab(1073742336, Ni, Ni, []),
          l.Ab(1073742336, Ri, Ri, []),
          l.Ab(1073742336, ji, ji, []),
          l.Ab(1073742336, bo, bo, []),
          l.Ab(1073742336, go, go, []),
          l.Ab(1073742336, Mo, Mo, []),
          l.Ab(1073742336, Po, Po, []),
          l.Ab(1073742336, Eo, Eo, []),
          l.Ab(1073742336, Ao, Ao, []),
          l.Ab(1073742336, Do, Do, []),
          l.Ab(1073742336, To, To, []),
          l.Ab(1073742336, Io, Io, []),
          l.Ab(1073742336, qo, qo, []),
          l.Ab(1073742336, Ro, Ro, []),
          l.Ab(1073742336, Lo, Lo, []),
          l.Ab(1073742336, Uo, Uo, []),
          l.Ab(1073742336, vl, vl, [[3, vl]]),
          l.Ab(1073742336, bd, bd, []),
          l.Ab(1073742336, gd, gd, []),
          l.Ab(1073742336, od, od, []),
          l.Ab(1073742336, fd, fd, []),
          l.Ab(1073742336, md, md, []),
          l.Ab(1073742336, ci, ci, []),
          l.Ab(1073742336, vd, vd, []),
          l.Ab(1073742336, ad, ad, []),
          l.Ab(1073742336, _d, _d, []),
          l.Ab(1073742336, dd, dd, []),
          l.Ab(1073742336, wc, wc, []),
          l.Ab(1073742336, yd, yd, []),
          l.Ab(1073742336, pd, pd, []),
          l.Ab(1073742336, wd, wd, []),
          l.Ab(1073742336, Cd, Cd, []),
          l.Ab(1073742336, r, r, []),
          l.Ab(256, l.X, !0, []),
          l.Ab(256, yr, 'XSRF-TOKEN', []),
          l.Ab(256, wr, 'X-XSRF-TOKEN', []),
          l.Ab(256, Ul, void 0, []),
          l.Ab(256, Fl, void 0, [])
        ]);
      });
    },
    VRyK: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return o;
      });
      var l = t('HDdC'),
        r = t('z+Ro'),
        s = t('bHdf'),
        i = t('yCtX');
      function o(...n) {
        let e = Number.POSITIVE_INFINITY,
          t = null,
          o = n[n.length - 1];
        return (
          Object(r.a)(o)
            ? ((t = n.pop()), n.length > 1 && 'number' == typeof n[n.length - 1] && (e = n.pop()))
            : 'number' == typeof o && (e = n.pop()),
          null === t && 1 === n.length && n[0] instanceof l.a ? n[0] : Object(s.a)(e)(Object(i.a)(n, t))
        );
      }
    },
    XNiG: function(n, e, t) {
      'use strict';
      var l = t('HDdC'),
        r = t('7o/Q'),
        s = t('quSY'),
        i = t('9ppp');
      class o extends s.a {
        constructor(n, e) {
          super(), (this.subject = n), (this.subscriber = e), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const n = this.subject,
            e = n.observers;
          if (((this.subject = null), !e || 0 === e.length || n.isStopped || n.closed)) return;
          const t = e.indexOf(this.subscriber);
          -1 !== t && e.splice(t, 1);
        }
      }
      var u = t('2QA8');
      t.d(e, 'b', function() {
        return a;
      }),
        t.d(e, 'a', function() {
          return c;
        });
      class a extends r.a {
        constructor(n) {
          super(n), (this.destination = n);
        }
      }
      let c = (() => {
        class n extends l.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [u.a]() {
            return new a(this);
          }
          lift(n) {
            const e = new d(this, this);
            return (e.operator = n), e;
          }
          next(n) {
            if (this.closed) throw new i.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                t = e.length,
                l = e.slice();
              for (let r = 0; r < t; r++) l[r].next(n);
            }
          }
          error(n) {
            if (this.closed) throw new i.a();
            (this.hasError = !0), (this.thrownError = n), (this.isStopped = !0);
            const { observers: e } = this,
              t = e.length,
              l = e.slice();
            for (let r = 0; r < t; r++) l[r].error(n);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new i.a();
            this.isStopped = !0;
            const { observers: n } = this,
              e = n.length,
              t = n.slice();
            for (let l = 0; l < e; l++) t[l].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(n) {
            if (this.closed) throw new i.a();
            return super._trySubscribe(n);
          }
          _subscribe(n) {
            if (this.closed) throw new i.a();
            return this.hasError
              ? (n.error(this.thrownError), s.a.EMPTY)
              : this.isStopped
              ? (n.complete(), s.a.EMPTY)
              : (this.observers.push(n), new o(this, n));
          }
          asObservable() {
            const n = new l.a();
            return (n.source = this), n;
          }
        }
        return (n.create = (n, e) => new d(n, e)), n;
      })();
      class d extends c {
        constructor(n, e) {
          super(), (this.destination = n), (this.source = e);
        }
        next(n) {
          const { destination: e } = this;
          e && e.next && e.next(n);
        }
        error(n) {
          const { destination: e } = this;
          e && e.error && this.destination.error(n);
        }
        complete() {
          const { destination: n } = this;
          n && n.complete && this.destination.complete();
        }
        _subscribe(n) {
          const { source: e } = this;
          return e ? this.source.subscribe(n) : s.a.EMPTY;
        }
      }
    },
    XoHu: function(n, e, t) {
      'use strict';
      function l(n) {
        return null !== n && 'object' == typeof n;
      }
      t.d(e, 'a', function() {
        return l;
      });
    },
    ZUHj: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return i;
      });
      var l = t('51Dv'),
        r = t('SeVD'),
        s = t('HDdC');
      function i(n, e, t, i, o = new l.a(n, t, i)) {
        if (!o.closed) return e instanceof s.a ? e.subscribe(o) : Object(r.a)(e)(o);
      }
    },
    bHdf: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return s;
      });
      var l = t('5+tZ'),
        r = t('SpAZ');
      function s(n = Number.POSITIVE_INFINITY) {
        return Object(l.a)(r.a, n);
      }
    },
    c2HN: function(n, e, t) {
      'use strict';
      function l(n) {
        return !!n && 'function' != typeof n.subscribe && 'function' == typeof n.then;
      }
      t.d(e, 'a', function() {
        return l;
      });
    },
    cUpR: function(n, e, t) {
      'use strict';
      t.d(e, 'q', function() {
        return _n;
      }),
        t.d(e, 'r', function() {
          return M;
        }),
        t.d(e, 'a', function() {
          return yn;
        }),
        t.d(e, 'i', function() {
          return vn;
        }),
        t.d(e, 'h', function() {
          return Cn;
        }),
        t.d(e, 'c', function() {
          return P;
        }),
        t.d(e, 'd', function() {
          return K;
        }),
        t.d(e, 'e', function() {
          return en;
        }),
        t.d(e, 'f', function() {
          return tn;
        }),
        t.d(e, 'g', function() {
          return ln;
        }),
        t.d(e, 'b', function() {
          return an;
        }),
        t.d(e, 's', function() {
          return i;
        }),
        t.d(e, 'k', function() {
          return V;
        }),
        t.d(e, 'j', function() {
          return X;
        }),
        t.d(e, 'n', function() {
          return rn;
        }),
        t.d(e, 'o', function() {
          return un;
        }),
        t.d(e, 'm', function() {
          return D;
        }),
        t.d(e, 'p', function() {
          return A;
        }),
        t.d(e, 'l', function() {
          return cn;
        });
      var l = t('SVse'),
        r = t('8Y7J');
      let s = null;
      function i() {
        return s;
      }
      class o {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(n) {
          this._attrToPropMap = n;
        }
      }
      class u extends o {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const n = this.createElement('div', document);
            if (null != this.getStyle(n, 'animationName')) this._animationPrefix = '';
            else {
              const e = ['Webkit', 'Moz', 'O', 'ms'];
              for (let t = 0; t < e.length; t++)
                if (null != this.getStyle(n, e[t] + 'AnimationName')) {
                  this._animationPrefix = '-' + e[t].toLowerCase() + '-';
                  break;
                }
            }
            const e = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(e).forEach(t => {
              null != this.getStyle(n, t) && (this._transitionEnd = e[t]);
            });
          } catch (n) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(n) {
          return n.getDistributedNodes();
        }
        resolveAndSetHref(n, e, t) {
          n.href = null == t ? e : e + '/../' + t;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      }
      const a = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
        c = 3,
        d = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        h = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        p = (() => {
          if (r.tb.Node)
            return (
              r.tb.Node.prototype.contains ||
              function(n) {
                return !!(16 & this.compareDocumentPosition(n));
              }
            );
        })();
      class b extends u {
        parse(n) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var n;
          (n = new b()), s || (s = n);
        }
        hasProperty(n, e) {
          return e in n;
        }
        setProperty(n, e, t) {
          n[e] = t;
        }
        getProperty(n, e) {
          return n[e];
        }
        invoke(n, e, t) {
          n[e](...t);
        }
        logError(n) {
          window.console && (console.error ? console.error(n) : console.log(n));
        }
        log(n) {
          window.console && window.console.log && window.console.log(n);
        }
        logGroup(n) {
          window.console && window.console.group && window.console.group(n);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        get attrToPropMap() {
          return a;
        }
        contains(n, e) {
          return p.call(n, e);
        }
        querySelector(n, e) {
          return n.querySelector(e);
        }
        querySelectorAll(n, e) {
          return n.querySelectorAll(e);
        }
        on(n, e, t) {
          n.addEventListener(e, t, !1);
        }
        onAndCancel(n, e, t) {
          return (
            n.addEventListener(e, t, !1),
            () => {
              n.removeEventListener(e, t, !1);
            }
          );
        }
        dispatchEvent(n, e) {
          n.dispatchEvent(e);
        }
        createMouseEvent(n) {
          const e = this.getDefaultDocument().createEvent('MouseEvent');
          return e.initEvent(n, !0, !0), e;
        }
        createEvent(n) {
          const e = this.getDefaultDocument().createEvent('Event');
          return e.initEvent(n, !0, !0), e;
        }
        preventDefault(n) {
          n.preventDefault(), (n.returnValue = !1);
        }
        isPrevented(n) {
          return n.defaultPrevented || (null != n.returnValue && !n.returnValue);
        }
        getInnerHTML(n) {
          return n.innerHTML;
        }
        getTemplateContent(n) {
          return 'content' in n && this.isTemplateElement(n) ? n.content : null;
        }
        getOuterHTML(n) {
          return n.outerHTML;
        }
        nodeName(n) {
          return n.nodeName;
        }
        nodeValue(n) {
          return n.nodeValue;
        }
        type(n) {
          return n.type;
        }
        content(n) {
          return this.hasProperty(n, 'content') ? n.content : n;
        }
        firstChild(n) {
          return n.firstChild;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        parentElement(n) {
          return n.parentNode;
        }
        childNodes(n) {
          return n.childNodes;
        }
        childNodesAsList(n) {
          const e = n.childNodes,
            t = new Array(e.length);
          for (let l = 0; l < e.length; l++) t[l] = e[l];
          return t;
        }
        clearNodes(n) {
          for (; n.firstChild; ) n.removeChild(n.firstChild);
        }
        appendChild(n, e) {
          n.appendChild(e);
        }
        removeChild(n, e) {
          n.removeChild(e);
        }
        replaceChild(n, e, t) {
          n.replaceChild(e, t);
        }
        remove(n) {
          return n.parentNode && n.parentNode.removeChild(n), n;
        }
        insertBefore(n, e, t) {
          n.insertBefore(t, e);
        }
        insertAllBefore(n, e, t) {
          t.forEach(t => n.insertBefore(t, e));
        }
        insertAfter(n, e, t) {
          n.insertBefore(t, e.nextSibling);
        }
        setInnerHTML(n, e) {
          n.innerHTML = e;
        }
        getText(n) {
          return n.textContent;
        }
        setText(n, e) {
          n.textContent = e;
        }
        getValue(n) {
          return n.value;
        }
        setValue(n, e) {
          n.value = e;
        }
        getChecked(n) {
          return n.checked;
        }
        setChecked(n, e) {
          n.checked = e;
        }
        createComment(n) {
          return this.getDefaultDocument().createComment(n);
        }
        createTemplate(n) {
          const e = this.getDefaultDocument().createElement('template');
          return (e.innerHTML = n), e;
        }
        createElement(n, e) {
          return (e = e || this.getDefaultDocument()).createElement(n);
        }
        createElementNS(n, e, t) {
          return (t = t || this.getDefaultDocument()).createElementNS(n, e);
        }
        createTextNode(n, e) {
          return (e = e || this.getDefaultDocument()).createTextNode(n);
        }
        createScriptTag(n, e, t) {
          const l = (t = t || this.getDefaultDocument()).createElement('SCRIPT');
          return l.setAttribute(n, e), l;
        }
        createStyleElement(n, e) {
          const t = (e = e || this.getDefaultDocument()).createElement('style');
          return this.appendChild(t, this.createTextNode(n, e)), t;
        }
        createShadowRoot(n) {
          return n.createShadowRoot();
        }
        getShadowRoot(n) {
          return n.shadowRoot;
        }
        getHost(n) {
          return n.host;
        }
        clone(n) {
          return n.cloneNode(!0);
        }
        getElementsByClassName(n, e) {
          return n.getElementsByClassName(e);
        }
        getElementsByTagName(n, e) {
          return n.getElementsByTagName(e);
        }
        classList(n) {
          return Array.prototype.slice.call(n.classList, 0);
        }
        addClass(n, e) {
          n.classList.add(e);
        }
        removeClass(n, e) {
          n.classList.remove(e);
        }
        hasClass(n, e) {
          return n.classList.contains(e);
        }
        setStyle(n, e, t) {
          n.style[e] = t;
        }
        removeStyle(n, e) {
          n.style[e] = '';
        }
        getStyle(n, e) {
          return n.style[e];
        }
        hasStyle(n, e, t) {
          const l = this.getStyle(n, e) || '';
          return t ? l == t : l.length > 0;
        }
        tagName(n) {
          return n.tagName;
        }
        attributeMap(n) {
          const e = new Map(),
            t = n.attributes;
          for (let l = 0; l < t.length; l++) {
            const n = t.item(l);
            e.set(n.name, n.value);
          }
          return e;
        }
        hasAttribute(n, e) {
          return n.hasAttribute(e);
        }
        hasAttributeNS(n, e, t) {
          return n.hasAttributeNS(e, t);
        }
        getAttribute(n, e) {
          return n.getAttribute(e);
        }
        getAttributeNS(n, e, t) {
          return n.getAttributeNS(e, t);
        }
        setAttribute(n, e, t) {
          n.setAttribute(e, t);
        }
        setAttributeNS(n, e, t, l) {
          n.setAttributeNS(e, t, l);
        }
        removeAttribute(n, e) {
          n.removeAttribute(e);
        }
        removeAttributeNS(n, e, t) {
          n.removeAttributeNS(e, t);
        }
        templateAwareRoot(n) {
          return this.isTemplateElement(n) ? this.content(n) : n;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(n) {
          try {
            return n.getBoundingClientRect();
          } catch (e) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
        }
        getTitle(n) {
          return n.title;
        }
        setTitle(n, e) {
          n.title = e || '';
        }
        elementMatches(n, e) {
          return (
            !!this.isElementNode(n) &&
            ((n.matches && n.matches(e)) ||
              (n.msMatchesSelector && n.msMatchesSelector(e)) ||
              (n.webkitMatchesSelector && n.webkitMatchesSelector(e)))
          );
        }
        isTemplateElement(n) {
          return this.isElementNode(n) && 'TEMPLATE' === n.nodeName;
        }
        isTextNode(n) {
          return n.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(n) {
          return n.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(n) {
          return null != n.shadowRoot && n instanceof HTMLElement;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        importIntoDoc(n) {
          return document.importNode(this.templateAwareRoot(n), !0);
        }
        adoptNode(n) {
          return document.adoptNode(n);
        }
        getHref(n) {
          return n.getAttribute('href');
        }
        getEventKey(n) {
          let e = n.key;
          if (null == e) {
            if (null == (e = n.keyIdentifier)) return 'Unidentified';
            e.startsWith('U+') &&
              ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
              n.location === c && h.hasOwnProperty(e) && (e = h[e]));
          }
          return d[e] || e;
        }
        getGlobalEventTarget(n, e) {
          return 'window' === e ? window : 'document' === e ? n : 'body' === e ? n.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(n) {
          const e = f || (f = document.querySelector('base')) ? f.getAttribute('href') : null;
          return null == e
            ? null
            : ((t = e),
              g || (g = document.createElement('a')),
              g.setAttribute('href', t),
              '/' === g.pathname.charAt(0) ? g.pathname : '/' + g.pathname);
          var t;
        }
        resetBaseElement() {
          f = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(n, e, t) {
          this.setAttribute(n, 'data-' + e, t);
        }
        getData(n, e) {
          return this.getAttribute(n, 'data-' + e);
        }
        getComputedStyle(n) {
          return getComputedStyle(n);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(n) {
          return Object(l.C)(document.cookie, n);
        }
        setCookie(n, e) {
          document.cookie = encodeURIComponent(n) + '=' + encodeURIComponent(e);
        }
      }
      let g,
        f = null;
      function m() {
        return !!window.history.pushState;
      }
      let v = (() => {
        class n extends l.p {
          constructor(n) {
            super(), (this._doc = n), this._init();
          }
          _init() {
            (this.location = i().getLocation()), (this._history = i().getHistory());
          }
          getBaseHrefFromDOM() {
            return i().getBaseHref(this._doc);
          }
          onPopState(n) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', n, !1);
          }
          onHashChange(n) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', n, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(n) {
            this.location.pathname = n;
          }
          pushState(n, e, t) {
            m() ? this._history.pushState(n, e, t) : (this.location.hash = t);
          }
          replaceState(n, e, t) {
            m() ? this._history.replaceState(n, e, t) : (this.location.hash = t);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (n.ctorParameters = () => [{ type: void 0, decorators: [{ type: r.o, args: [l.c] }] }]), n;
      })();
      const _ = new r.p('TRANSITION_ID'),
        y = [
          {
            provide: r.d,
            useFactory: function(n, e, t) {
              return () => {
                t.get(r.e).donePromise.then(() => {
                  const t = i();
                  Array.prototype.slice
                    .apply(t.querySelectorAll(e, 'style[ng-transition]'))
                    .filter(e => t.getAttribute(e, 'ng-transition') === n)
                    .forEach(n => t.remove(n));
                });
              };
            },
            deps: [_, l.c, r.q],
            multi: !0
          }
        ];
      class w {
        static init() {
          Object(r.W)(new w());
        }
        addToWindow(n) {
          (r.tb.getAngularTestability = (e, t = !0) => {
            const l = n.findTestabilityInTree(e, t);
            if (null == l) throw new Error('Could not find testability for element.');
            return l;
          }),
            (r.tb.getAllAngularTestabilities = () => n.getAllTestabilities()),
            (r.tb.getAllAngularRootElements = () => n.getAllRootElements()),
            r.tb.frameworkStabilizers || (r.tb.frameworkStabilizers = []),
            r.tb.frameworkStabilizers.push(n => {
              const e = r.tb.getAllAngularTestabilities();
              let t = e.length,
                l = !1;
              const s = function(e) {
                (l = l || e), 0 == --t && n(l);
              };
              e.forEach(function(n) {
                n.whenStable(s);
              });
            });
        }
        findTestabilityInTree(n, e, t) {
          if (null == e) return null;
          const l = n.getTestability(e);
          return null != l
            ? l
            : t
            ? i().isShadowRoot(e)
              ? this.findTestabilityInTree(n, i().getHost(e), !0)
              : this.findTestabilityInTree(n, i().parentElement(e), !0)
            : null;
        }
      }
      function C(n, e) {
        ('undefined' != typeof COMPILED && COMPILED) || ((r.tb.ng = r.tb.ng || {})[n] = e);
      }
      const x = (() => ({ ApplicationRef: r.g, NgZone: r.y }))(),
        O = 'probe',
        k = 'coreTokens';
      function S(n) {
        return Object(r.T)(n);
      }
      function M(n) {
        return (
          C(O, S),
          C(
            k,
            Object.assign(
              {},
              x,
              (n || []).reduce((n, e) => ((n[e.name] = e.token), n), {})
            )
          ),
          () => S
        );
      }
      const P = new r.p('EventManagerPlugins');
      let K = (() =>
        class {
          constructor(n, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              n.forEach(n => (n.manager = this)),
              (this._plugins = n.slice().reverse());
          }
          addEventListener(n, e, t) {
            return this._findPluginFor(e).addEventListener(n, e, t);
          }
          addGlobalEventListener(n, e, t) {
            return this._findPluginFor(e).addGlobalEventListener(n, e, t);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(n) {
            const e = this._eventNameToPlugin.get(n);
            if (e) return e;
            const t = this._plugins;
            for (let l = 0; l < t.length; l++) {
              const e = t[l];
              if (e.supports(n)) return this._eventNameToPlugin.set(n, e), e;
            }
            throw new Error(`No event manager plugin found for event ${n}`);
          }
        })();
      class E {
        constructor(n) {
          this._doc = n;
        }
        addGlobalEventListener(n, e, t) {
          const l = i().getGlobalEventTarget(this._doc, n);
          if (!l) throw new Error(`Unsupported event target ${l} for event ${e}`);
          return this.addEventListener(l, e, t);
        }
      }
      let A = (() =>
          class {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(n) {
              const e = new Set();
              n.forEach(n => {
                this._stylesSet.has(n) || (this._stylesSet.add(n), e.add(n));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(n) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          })(),
        D = (() =>
          class extends A {
            constructor(n) {
              super(),
                (this._doc = n),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(n.head);
            }
            _addStylesToHost(n, e) {
              n.forEach(n => {
                const t = this._doc.createElement('style');
                (t.textContent = n), this._styleNodes.add(e.appendChild(t));
              });
            }
            addHost(n) {
              this._addStylesToHost(this._stylesSet, n), this._hostNodes.add(n);
            }
            removeHost(n) {
              this._hostNodes.delete(n);
            }
            onStylesAdded(n) {
              this._hostNodes.forEach(e => this._addStylesToHost(n, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach(n => i().remove(n));
            }
          })();
      const T = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        I = /%COMP%/g,
        q = '_nghost-%COMP%',
        N = '_ngcontent-%COMP%';
      function R(n, e, t) {
        for (let l = 0; l < e.length; l++) {
          let r = e[l];
          Array.isArray(r) ? R(n, r, t) : ((r = r.replace(I, n)), t.push(r));
        }
        return t;
      }
      function j(n) {
        return e => {
          !1 === n(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let V = (() =>
        class {
          constructor(n, e, t) {
            (this.eventManager = n),
              (this.sharedStylesHost = e),
              (this.appId = t),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new L(n));
          }
          createRenderer(n, e) {
            if (!n || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case r.O.Emulated: {
                let t = this.rendererByCompId.get(e.id);
                return (
                  t ||
                    ((t = new H(this.eventManager, this.sharedStylesHost, e, this.appId)),
                    this.rendererByCompId.set(e.id, t)),
                  t.applyToHost(n),
                  t
                );
              }
              case r.O.Native:
              case r.O.ShadowDom:
                return new z(this.eventManager, this.sharedStylesHost, n, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const n = R(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(n), this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        })();
      class L {
        constructor(n) {
          (this.eventManager = n), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(n, e) {
          return e ? document.createElementNS(T[e] || e, n) : document.createElement(n);
        }
        createComment(n) {
          return document.createComment(n);
        }
        createText(n) {
          return document.createTextNode(n);
        }
        appendChild(n, e) {
          n.appendChild(e);
        }
        insertBefore(n, e, t) {
          n && n.insertBefore(e, t);
        }
        removeChild(n, e) {
          n && n.removeChild(e);
        }
        selectRootElement(n, e) {
          let t = 'string' == typeof n ? document.querySelector(n) : n;
          if (!t) throw new Error(`The selector "${n}" did not match any elements`);
          return e || (t.textContent = ''), t;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, e, t, l) {
          if (l) {
            e = l + ':' + e;
            const r = T[l];
            r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t);
          } else n.setAttribute(e, t);
        }
        removeAttribute(n, e, t) {
          if (t) {
            const l = T[t];
            l ? n.removeAttributeNS(l, e) : n.removeAttribute(`${t}:${e}`);
          } else n.removeAttribute(e);
        }
        addClass(n, e) {
          n.classList.add(e);
        }
        removeClass(n, e) {
          n.classList.remove(e);
        }
        setStyle(n, e, t, l) {
          l & r.E.DashCase ? n.style.setProperty(e, t, l & r.E.Important ? 'important' : '') : (n.style[e] = t);
        }
        removeStyle(n, e, t) {
          t & r.E.DashCase ? n.style.removeProperty(e) : (n.style[e] = '');
        }
        setProperty(n, e, t) {
          F(e, 'property'), (n[e] = t);
        }
        setValue(n, e) {
          n.nodeValue = e;
        }
        listen(n, e, t) {
          return (
            F(e, 'listener'),
            'string' == typeof n
              ? this.eventManager.addGlobalEventListener(n, e, j(t))
              : this.eventManager.addEventListener(n, e, j(t))
          );
        }
      }
      const U = (() => '@'.charCodeAt(0))();
      function F(n, e) {
        if (n.charCodeAt(0) === U)
          throw new Error(
            `Found the synthetic ${e} ${n}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class H extends L {
        constructor(n, e, t, l) {
          super(n), (this.component = t);
          const r = R(l + '-' + t.id, t.styles, []);
          e.addStyles(r),
            (this.contentAttr = N.replace(I, l + '-' + t.id)),
            (this.hostAttr = (function(n) {
              return q.replace(I, n);
            })(l + '-' + t.id));
        }
        applyToHost(n) {
          super.setAttribute(n, this.hostAttr, '');
        }
        createElement(n, e) {
          const t = super.createElement(n, e);
          return super.setAttribute(t, this.contentAttr, ''), t;
        }
      }
      class z extends L {
        constructor(n, e, t, l) {
          super(n),
            (this.sharedStylesHost = e),
            (this.hostEl = t),
            (this.component = l),
            (this.shadowRoot =
              l.encapsulation === r.O.ShadowDom ? t.attachShadow({ mode: 'open' }) : t.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = R(l.id, l.styles, []);
          for (let r = 0; r < s.length; r++) {
            const n = document.createElement('style');
            (n.textContent = s[r]), this.shadowRoot.appendChild(n);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(n, e) {
          return super.appendChild(this.nodeOrShadowRoot(n), e);
        }
        insertBefore(n, e, t) {
          return super.insertBefore(this.nodeOrShadowRoot(n), e, t);
        }
        removeChild(n, e) {
          return super.removeChild(this.nodeOrShadowRoot(n), e);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
        }
      }
      const $ = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(n) {
            return '__zone_symbol__' + n;
          })(),
        B = $('addEventListener'),
        W = $('removeEventListener'),
        G = {},
        Z = '__zone_symbol__propagationStopped',
        Q = (() => {
          const n = 'undefined' != typeof Zone && Zone[$('BLACK_LISTED_EVENTS')];
          if (n) {
            const e = {};
            return (
              n.forEach(n => {
                e[n] = n;
              }),
              e
            );
          }
        })(),
        J = function(n) {
          return !!Q && Q.hasOwnProperty(n);
        },
        Y = function(n) {
          const e = G[n.type];
          if (!e) return;
          const t = this[e];
          if (!t) return;
          const l = [n];
          if (1 === t.length) {
            const n = t[0];
            return n.zone !== Zone.current ? n.zone.run(n.handler, this, l) : n.handler.apply(this, l);
          }
          {
            const e = t.slice();
            for (let t = 0; t < e.length && !0 !== n[Z]; t++) {
              const n = e[t];
              n.zone !== Zone.current ? n.zone.run(n.handler, this, l) : n.handler.apply(this, l);
            }
          }
        };
      let X = (() =>
        class extends E {
          constructor(n, e, t) {
            super(n), (this.ngZone = e), (t && Object(l.x)(t)) || this.patchEvent();
          }
          patchEvent() {
            if ('undefined' == typeof Event || !Event || !Event.prototype) return;
            if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
            const n = (Event.prototype.__zone_symbol__stopImmediatePropagation =
              Event.prototype.stopImmediatePropagation);
            Event.prototype.stopImmediatePropagation = function() {
              this && (this[Z] = !0), n && n.apply(this, arguments);
            };
          }
          supports(n) {
            return !0;
          }
          addEventListener(n, e, t) {
            let l = t;
            if (!n[B] || (r.y.isInAngularZone() && !J(e))) n.addEventListener(e, l, !1);
            else {
              let t = G[e];
              t || (t = G[e] = $('ANGULAR' + e + 'FALSE'));
              let r = n[t];
              const s = r && r.length > 0;
              r || (r = n[t] = []);
              const i = J(e) ? Zone.root : Zone.current;
              if (0 === r.length) r.push({ zone: i, handler: l });
              else {
                let n = !1;
                for (let e = 0; e < r.length; e++)
                  if (r[e].handler === l) {
                    n = !0;
                    break;
                  }
                n || r.push({ zone: i, handler: l });
              }
              s || n[B](e, Y, !1);
            }
            return () => this.removeEventListener(n, e, l);
          }
          removeEventListener(n, e, t) {
            let l = n[W];
            if (!l) return n.removeEventListener.apply(n, [e, t, !1]);
            let r = G[e],
              s = r && n[r];
            if (!s) return n.removeEventListener.apply(n, [e, t, !1]);
            let i = !1;
            for (let o = 0; o < s.length; o++)
              if (s[o].handler === t) {
                (i = !0), s.splice(o, 1);
                break;
              }
            i ? 0 === s.length && l.apply(n, [e, Y, !1]) : n.removeEventListener.apply(n, [e, t, !1]);
          }
        })();
      const nn = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        en = new r.p('HammerGestureConfig'),
        tn = new r.p('HammerLoader');
      let ln = (() =>
          class {
            constructor() {
              (this.events = []), (this.overrides = {});
            }
            buildHammer(n) {
              const e = new Hammer(n, this.options);
              e.get('pinch').set({ enable: !0 }), e.get('rotate').set({ enable: !0 });
              for (const t in this.overrides) e.get(t).set(this.overrides[t]);
              return e;
            }
          })(),
        rn = (() =>
          class extends E {
            constructor(n, e, t, l) {
              super(n), (this._config = e), (this.console = t), (this.loader = l);
            }
            supports(n) {
              return !(
                (!nn.hasOwnProperty(n.toLowerCase()) && !this.isCustomEvent(n)) ||
                (!window.Hammer &&
                  !this.loader &&
                  (this.console.warn(
                    `The "${n}" event cannot be bound because Hammer.JS is not ` +
                      'loaded and no custom loader has been specified.'
                  ),
                  1))
              );
            }
            addEventListener(n, e, t) {
              const l = this.manager.getZone();
              if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
                let l = !1,
                  r = () => {
                    l = !0;
                  };
                return (
                  this.loader()
                    .then(() => {
                      if (!window.Hammer)
                        return (
                          this.console.warn('The custom HAMMER_LOADER completed, but Hammer.JS is not present.'),
                          void (r = () => {})
                        );
                      l || (r = this.addEventListener(n, e, t));
                    })
                    .catch(() => {
                      this.console.warn(
                        `The "${e}" event cannot be bound because the custom ` + 'Hammer.JS loader failed.'
                      ),
                        (r = () => {});
                    }),
                  () => {
                    r();
                  }
                );
              }
              return l.runOutsideAngular(() => {
                const r = this._config.buildHammer(n),
                  s = function(n) {
                    l.runGuarded(function() {
                      t(n);
                    });
                  };
                return (
                  r.on(e, s),
                  () => {
                    r.off(e, s), 'function' == typeof r.destroy && r.destroy();
                  }
                );
              });
            }
            isCustomEvent(n) {
              return this._config.events.indexOf(n) > -1;
            }
          })();
      const sn = ['alt', 'control', 'meta', 'shift'],
        on = { alt: n => n.altKey, control: n => n.ctrlKey, meta: n => n.metaKey, shift: n => n.shiftKey };
      let un = (() => {
        class n extends E {
          constructor(n) {
            super(n);
          }
          supports(e) {
            return null != n.parseEventName(e);
          }
          addEventListener(e, t, l) {
            const r = n.parseEventName(t),
              s = n.eventCallback(r.fullKey, l, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => i().onAndCancel(e, r.domEventName, s));
          }
          static parseEventName(e) {
            const t = e.toLowerCase().split('.'),
              l = t.shift();
            if (0 === t.length || ('keydown' !== l && 'keyup' !== l)) return null;
            const r = n._normalizeKey(t.pop());
            let s = '';
            if (
              (sn.forEach(n => {
                const e = t.indexOf(n);
                e > -1 && (t.splice(e, 1), (s += n + '.'));
              }),
              (s += r),
              0 != t.length || 0 === r.length)
            )
              return null;
            const i = {};
            return (i.domEventName = l), (i.fullKey = s), i;
          }
          static getEventFullKey(n) {
            let e = '',
              t = i().getEventKey(n);
            return (
              ' ' === (t = t.toLowerCase()) ? (t = 'space') : '.' === t && (t = 'dot'),
              sn.forEach(l => {
                l != t && (0, on[l])(n) && (e += l + '.');
              }),
              (e += t)
            );
          }
          static eventCallback(e, t, l) {
            return r => {
              n.getEventFullKey(r) === e && l.runGuarded(() => t(r));
            };
          }
          static _normalizeKey(n) {
            switch (n) {
              case 'esc':
                return 'escape';
              default:
                return n;
            }
          }
        }
        return n;
      })();
      class an {}
      let cn = (() =>
        class extends an {
          constructor(n) {
            super(), (this._doc = n);
          }
          sanitize(n, e) {
            if (null == e) return null;
            switch (n) {
              case r.G.NONE:
                return e;
              case r.G.HTML:
                return e instanceof hn
                  ? e.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(e, 'HTML'), Object(r.cb)(this._doc, String(e)));
              case r.G.STYLE:
                return e instanceof pn
                  ? e.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(e, 'Style'), Object(r.db)(e));
              case r.G.SCRIPT:
                if (e instanceof bn) return e.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(e, 'Script'), new Error('unsafe value used in a script context'));
              case r.G.URL:
                return e instanceof fn || e instanceof gn
                  ? e.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(e, 'URL'), Object(r.eb)(String(e)));
              case r.G.RESOURCE_URL:
                if (e instanceof fn) return e.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(e, 'ResourceURL'),
                new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
              default:
                throw new Error(`Unexpected SecurityContext ${n} (see http://g.co/ng/security#xss)`);
            }
          }
          checkNotSafeValue(n, e) {
            if (n instanceof dn)
              throw new Error(`Required a safe ${e}, got a ${n.getTypeName()} ` + '(see http://g.co/ng/security#xss)');
          }
          bypassSecurityTrustHtml(n) {
            return new hn(n);
          }
          bypassSecurityTrustStyle(n) {
            return new pn(n);
          }
          bypassSecurityTrustScript(n) {
            return new bn(n);
          }
          bypassSecurityTrustUrl(n) {
            return new gn(n);
          }
          bypassSecurityTrustResourceUrl(n) {
            return new fn(n);
          }
        })();
      class dn {
        constructor(n) {
          this.changingThisBreaksApplicationSecurity = n;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class hn extends dn {
        getTypeName() {
          return 'HTML';
        }
      }
      class pn extends dn {
        getTypeName() {
          return 'Style';
        }
      }
      class bn extends dn {
        getTypeName() {
          return 'Script';
        }
      }
      class gn extends dn {
        getTypeName() {
          return 'URL';
        }
      }
      class fn extends dn {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const mn = [
          { provide: r.A, useValue: l.A },
          {
            provide: r.B,
            useValue: function() {
              b.makeCurrent(), w.init();
            },
            multi: !0
          },
          { provide: l.p, useClass: v, deps: [l.c] },
          {
            provide: l.c,
            useFactory: function() {
              return document;
            },
            deps: []
          }
        ],
        vn = Object(r.Q)(r.V, 'browser', mn);
      function _n() {
        return new r.l();
      }
      let yn = (() => {
        class n {
          constructor(n) {
            if (n)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: n,
              providers: [{ provide: r.c, useValue: e.appId }, { provide: _, useExisting: r.c }, y]
            };
          }
        }
        return n;
      })();
      function wn() {
        return new Cn(Object(r.Rb)(l.c));
      }
      let Cn = (() => {
        class n {
          constructor(n) {
            this._doc = n;
          }
          getTitle() {
            return i().getTitle(this._doc);
          }
          setTitle(n) {
            i().setTitle(this._doc, n);
          }
        }
        return (n.ngInjectableDef = Object(r.Qb)({ factory: wn, token: n, providedIn: 'root' })), n;
      })();
      'undefined' != typeof window && window;
    },
    gRHU: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return s;
      });
      var l = t('2fFW'),
        r = t('NJ4a');
      const s = {
        closed: !0,
        next(n) {},
        error(n) {
          if (l.a.useDeprecatedSynchronousErrorHandling) throw n;
          Object(r.a)(n);
        },
        complete() {}
      };
    },
    jZKg: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return s;
      });
      var l = t('HDdC'),
        r = t('quSY');
      function s(n, e) {
        return new l.a(t => {
          const l = new r.a();
          let s = 0;
          return (
            l.add(
              e.schedule(function() {
                s !== n.length ? (t.next(n[s++]), t.closed || l.add(this.schedule())) : t.complete();
              })
            ),
            l
          );
        });
      }
    },
    kJWO: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = (() => ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
    },
    l7GE: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var l = t('7o/Q');
      class r extends l.a {
        notifyNext(n, e, t, l, r) {
          this.destination.next(e);
        }
        notifyError(n, e) {
          this.destination.error(n);
        }
        notifyComplete(n) {
          this.destination.complete();
        }
      }
    },
    lJxs: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var l = t('7o/Q');
      function r(n, e) {
        return function(t) {
          if ('function' != typeof n) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return t.lift(new s(n, e));
        };
      }
      class s {
        constructor(n, e) {
          (this.project = n), (this.thisArg = e);
        }
        call(n, e) {
          return e.subscribe(new i(n, this.project, this.thisArg));
        }
      }
      class i extends l.a {
        constructor(n, e, t) {
          super(n), (this.project = e), (this.count = 0), (this.thisArg = t || this);
        }
        _next(n) {
          let e;
          try {
            e = this.project.call(this.thisArg, n, this.count++);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
      }
    },
    mCNh: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      }),
        t.d(e, 'b', function() {
          return s;
        });
      var l = t('KqfI');
      function r(...n) {
        return s(n);
      }
      function s(n) {
        return n
          ? 1 === n.length
            ? n[0]
            : function(e) {
                return n.reduce((n, e) => e(n), e);
              }
          : l.a;
      }
    },
    n6bG: function(n, e, t) {
      'use strict';
      function l(n) {
        return 'function' == typeof n;
      }
      t.d(e, 'a', function() {
        return l;
      });
    },
    ngJS: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return l;
      });
      const l = n => e => {
        for (let t = 0, l = n.length; t < l && !e.closed; t++) e.next(n[t]);
        e.complete();
      };
    },
    oB13: function(n, e, t) {
      'use strict';
      var l = t('XNiG'),
        r = t('HDdC'),
        s = (t('7o/Q'), t('quSY')),
        i = t('x+ZX');
      class o extends r.a {
        constructor(n, e) {
          super(), (this.source = n), (this.subjectFactory = e), (this._refCount = 0), (this._isComplete = !1);
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n);
        }
        getSubject() {
          const n = this._subject;
          return (n && !n.isStopped) || (this._subject = this.subjectFactory()), this._subject;
        }
        connect() {
          let n = this._connection;
          return (
            n ||
              ((this._isComplete = !1),
              (n = this._connection = new s.a()).add(this.source.subscribe(new a(this.getSubject(), this))),
              n.closed && ((this._connection = null), (n = s.a.EMPTY))),
            n
          );
        }
        refCount() {
          return Object(i.a)()(this);
        }
      }
      const u = (() => {
        const n = o.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: n._subscribe },
          _isComplete: { value: n._isComplete, writable: !0 },
          getSubject: { value: n.getSubject },
          connect: { value: n.connect },
          refCount: { value: n.refCount }
        };
      })();
      class a extends l.b {
        constructor(n, e) {
          super(n), (this.connectable = e);
        }
        _error(n) {
          this._unsubscribe(), super._error(n);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const n = this.connectable;
          if (n) {
            this.connectable = null;
            const e = n._connection;
            (n._refCount = 0), (n._subject = null), (n._connection = null), e && e.unsubscribe();
          }
        }
      }
      function c(n, e) {
        return function(t) {
          let l;
          if (
            ((l =
              'function' == typeof n
                ? n
                : function() {
                    return n;
                  }),
            'function' == typeof e)
          )
            return t.lift(new d(l, e));
          const r = Object.create(t, u);
          return (r.source = t), (r.subjectFactory = l), r;
        };
      }
      t.d(e, 'a', function() {
        return c;
      });
      class d {
        constructor(n, e) {
          (this.subjectFactory = n), (this.selector = e);
        }
        call(n, e) {
          const { selector: t } = this,
            l = this.subjectFactory(),
            r = t(l).subscribe(n);
          return r.add(e.subscribe(l)), r;
        }
      }
    },
    quSY: function(n, e, t) {
      'use strict';
      var l = t('DH7j'),
        r = t('XoHu'),
        s = t('n6bG');
      const i = (() => {
        function n(n) {
          return (
            Error.call(this),
            (this.message = n
              ? `${n.length} errors occurred during unsubscription:\n${n
                  .map((n, e) => `${e + 1}) ${n.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = n),
            this
          );
        }
        return (n.prototype = Object.create(Error.prototype)), n;
      })();
      t.d(e, 'a', function() {
        return o;
      });
      let o = (() => {
        class n {
          constructor(n) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n && (this._unsubscribe = n);
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let { _parentOrParents: t, _unsubscribe: o, _subscriptions: a } = this;
            if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), t instanceof n))
              t.remove(this);
            else if (null !== t) for (let n = 0; n < t.length; ++n) t[n].remove(this);
            if (Object(s.a)(o))
              try {
                o.call(this);
              } catch (c) {
                e = c instanceof i ? u(c.errors) : [c];
              }
            if (Object(l.a)(a)) {
              let n = -1,
                t = a.length;
              for (; ++n < t; ) {
                const t = a[n];
                if (Object(r.a)(t))
                  try {
                    t.unsubscribe();
                  } catch (c) {
                    (e = e || []), c instanceof i ? (e = e.concat(u(c.errors))) : e.push(c);
                  }
              }
            }
            if (e) throw new i(e);
          }
          add(e) {
            let t = e;
            if (!e) return n.EMPTY;
            switch (typeof e) {
              case 'function':
                t = new n(e);
              case 'object':
                if (t === this || t.closed || 'function' != typeof t.unsubscribe) return t;
                if (this.closed) return t.unsubscribe(), t;
                if (!(t instanceof n)) {
                  const e = t;
                  (t = new n())._subscriptions = [e];
                }
                break;
              default:
                throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
            }
            let { _parentOrParents: l } = t;
            if (null === l) t._parentOrParents = this;
            else if (l instanceof n) {
              if (l === this) return t;
              t._parentOrParents = [l, this];
            } else {
              if (-1 !== l.indexOf(this)) return t;
              l.push(this);
            }
            const r = this._subscriptions;
            return null === r ? (this._subscriptions = [t]) : r.push(t), t;
          }
          remove(n) {
            const e = this._subscriptions;
            if (e) {
              const t = e.indexOf(n);
              -1 !== t && e.splice(t, 1);
            }
          }
        }
        return (
          (n.EMPTY = (function(n) {
            return (n.closed = !0), n;
          })(new n())),
          n
        );
      })();
      function u(n) {
        return n.reduce((n, e) => n.concat(e instanceof i ? e.errors : e), []);
      }
    },
    'rB/T': function(n, e, t) {
      'use strict';
      function l(n) {
        for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), l(t('LbVS')), l(t('vauT')), l(t('PsNa'));
    },
    vauT: function(n, e, t) {
      'use strict';
      function l() {
        var n = document.querySelectorAll('input, textarea, select');
        return Array.prototype.slice.call(n).map(function(n) {
          var e = n.tagName.toLowerCase(),
            t = n.type,
            l = n.id && 'string' == typeof n.id ? n.id : null,
            r = n.name && 'string' == typeof n.name ? n.name : null,
            s = n.value && 'string' == typeof n.value ? n.value : null,
            i = n.childNodes,
            o = Boolean(n.selected),
            u = { tag: e, type: null, id: l, name: r, value: '', checked: !1, options: [] };
          if ('input' === e || 'textarea' === e) {
            if (((u.type = t), 'input' !== e)) return (u.value = s), u;
            switch (t) {
              case 'checkbox':
              case 'radio':
                return (u.checked = o), (u.value = s), u;
              case 'image':
              case 'button':
              case 'submit':
              case 'reset':
              default:
                return u;
            }
          } else if ('select' === e) {
            var a = Array.prototype.slice.call(i).map(function(n, e) {
              return { value: n.value, selected: Boolean(n.selected) };
            });
            return (u.options = a), u;
          }
          return u;
        });
      }
      function r(n) {
        var e = document.querySelectorAll('input, textarea');
        n.forEach(function(n, t) {
          if ('input' === n.tag || 'textarea' === n.tag)
            if ('input' !== n.tag || ('checkbox' !== n.type && 'radio' !== n.type))
              ('input' !== n.tagName.toLowerCase() ||
                ('image' !== n.type && 'button' !== n.type && 'submit' !== n.type && 'reset' !== n.type)) &&
                (null === n.id && null === n.name
                  ? !n.value.length ||
                    !e[t] ||
                    e[t].tagName.toLowerCase() !== n.tag ||
                    ('textarea' !== n.tag && e[t].getAttribute('type') !== n.type) ||
                    ('string' == typeof e[t].id && e[t].id.length) ||
                    ('string' == typeof e[t].getAttribute('name') && e[t].getAttribute('name').length) ||
                    ((e[t].value = n.value), e[t].dispatchEvent(new CustomEvent('input', { detail: e[t].value })))
                  : ((l =
                      'input' +
                      (null !== n.id ? '#' + n.id : '') +
                      ('input' === n.tag ? '[type="' + n.type + '"]' : '') +
                      (null !== n.name ? '[name="' + n.name + '"]' : '')),
                    (r = document.body.querySelector(l)) &&
                      n.value.length &&
                      ((r.value = n.value), r.dispatchEvent(new CustomEvent('input', { detail: r.value })))));
            else {
              var l =
                'input' +
                (null !== n.id ? '#' + n.id : '') +
                '[type="' +
                n.type +
                '"]' +
                (null !== n.name ? '[name="' + n.name + '"]' : '') +
                '[value="' +
                n.value +
                '"]';
              (r = document.body.querySelector(l)) &&
                Boolean(n.checked) &&
                ((r.checked = 'checked'), r.dispatchEvent(new CustomEvent('input', { detail: r.checked })));
            }
          else if ('select' === n.tag) {
            var r,
              s = null;
            null === n.id && null === n.name
              ? !e[t] ||
                e[t].tagName.toLowerCase() !== n.tag ||
                ('string' == typeof e[t].id && e[t].id.length) ||
                ('string' == typeof e[t].getAttribute('name') && e[t].getAttribute('name').length) ||
                (s = e[t])
              : ((l =
                  'select' + (null !== n.id ? '#' + n.id : '') + (null !== n.name ? '[name="' + n.name + '"]' : '')),
                (r = document.body.querySelector(l)) && (s = r)),
              s &&
                n.options.forEach(function(n, e) {
                  var t = s.querySelector('option[value="' + n.value + '"]');
                  t ||
                    !s.childNodes[e] ||
                    ('string' == typeof s.childNodes[e].value && s.childNodes[e].value.length) ||
                    (t = s.childNodes[e]),
                    t &&
                      n.selected &&
                      ((t.selected = 'selected'), t.dispatchEvent(new CustomEvent('input', { detail: t.selected })));
                });
          }
        });
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.__getInputValues = l),
        (e.__setInputValues = r),
        (e.__createInputTransfer = function() {
          var n = l();
          return function() {
            return r(n);
          };
        });
    },
    w1tV: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return o;
      });
      var l = t('oB13'),
        r = t('x+ZX'),
        s = t('XNiG');
      function i() {
        return new s.a();
      }
      function o() {
        return n => Object(r.a)()(Object(l.a)(i)(n));
      }
    },
    'x+ZX': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return r;
      });
      var l = t('7o/Q');
      function r() {
        return function(n) {
          return n.lift(new s(n));
        };
      }
      class s {
        constructor(n) {
          this.connectable = n;
        }
        call(n, e) {
          const { connectable: t } = this;
          t._refCount++;
          const l = new i(n, t),
            r = e.subscribe(l);
          return l.closed || (l.connection = t.connect()), r;
        }
      }
      class i extends l.a {
        constructor(n, e) {
          super(n), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: n } = this;
          if (!n) return void (this.connection = null);
          this.connectable = null;
          const e = n._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((n._refCount = e - 1), e > 1)) return void (this.connection = null);
          const { connection: t } = this,
            l = n._connection;
          (this.connection = null), !l || (t && l !== t) || l.unsubscribe();
        }
      }
    },
    yCtX: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return i;
      });
      var l = t('HDdC'),
        r = t('ngJS'),
        s = t('jZKg');
      function i(n, e) {
        return e ? Object(s.a)(n, e) : new l.a(Object(r.a)(n));
      }
    },
    'z+Ro': function(n, e, t) {
      'use strict';
      function l(n) {
        return n && 'function' == typeof n.schedule;
      }
      t.d(e, 'a', function() {
        return l;
      });
    },
    zUnb: function(n, e, t) {
      'use strict';
      t.r(e),
        function(n) {
          t.d(e, '\u02750', function() {
            return a;
          });
          var l = t('8Y7J'),
            r = t('AytR'),
            s = t('0QMH'),
            i = t('Ss9G'),
            o = t('cUpR');
          r.a.production && Object(l.R)();
          const u = () => o.i().bootstrapModuleFactory(i.a),
            a = u;
          r.a.hmr ? Object(s.a)(n, u) : u().catch(n => console.error(n));
        }.call(this, t('3UD+')(n));
    },
    zn8P: function(n, e) {
      function t(n) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (t.keys = function() {
        return [];
      }),
        (t.resolve = t),
        (n.exports = t),
        (t.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
