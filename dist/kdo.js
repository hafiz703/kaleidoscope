! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define("kaleidoscope", ["exports"], e) : e(t.Kaleidoscope = {})
}(this, function(t) {
    "use strict";
    var e = {
            isiOS: function() {
                return /(ipad|iphone|ipod)/gi.test(navigator.userAgent)
            },
            shouldUseAudioDriver: function() {
                var t = /iphone.*(7|8|9)_[0-9]/i.test(navigator.userAgent),
                    e = /(iPhone|iPod).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
                return t || e
            },
            shouldUseCanvasInBetween: function() {
                return /trident|edge/i.test(navigator.userAgent)
            }
        },
        i = function(t) {
            return t && "object" == typeof t && "default" in t ? t.default : t
        }(function(t, e) {
            return e = {
                exports: {}
            }, t(e, e.exports), e.exports
        }(function(t) {
            var e = Math.atan,
                i = Math.tan,
                r = Math.acos,
                n = Math.sin,
                a = Math.cos,
                o = Math.atan2,
                s = Math.abs,
                h = Math.ceil,
                u = Math.sqrt,
                l = Math.pow,
                c = Math.round,
                p = Math.LN2,
                d = Math.log,
                f = Math.PI,
                m = Math.floor,
                v = Math.max,
                g = Math.min,
                y = Math.sign,
                x = Number.EPSILON,
                M = {
                    REVISION: "75"
                };
            t.exports = M, void 0 === x && (x = 2.220446049250313e-16), void 0 === y && (y = function(t) {
                return 0 > t ? -1 : 0 < t ? 1 : +t
            }), void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
                get: function() {
                    return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
                }
            }), void 0 === Object.assign && Object.defineProperty(Object, "assign", {
                writable: !0,
                configurable: !0,
                value: function(t) {
                    if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
                    for (var e, i = Object(t), r = 1, n = arguments.length; r !== n; ++r)
                        if (void 0 !== (e = arguments[r]) && null !== e) {
                            e = Object(e);
                            for (var a = Object.keys(e), o = 0, s = a.length; o !== s; ++o) {
                                var h = a[o],
                                    u = Object.getOwnPropertyDescriptor(e, h);
                                void 0 !== u && u.enumerable && (i[h] = e[h])
                            }
                        }
                    return i
                }
            }), M.MOUSE = {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2
            }, M.CullFaceNone = 0, M.CullFaceBack = 1, M.CullFaceFront = 2, M.CullFaceFrontBack = 3, M.FrontFaceDirectionCW = 0, M.FrontFaceDirectionCCW = 1, M.BasicShadowMap = 0, M.PCFShadowMap = 1, M.PCFSoftShadowMap = 2, M.FrontSide = 0, M.BackSide = 1, M.DoubleSide = 2, M.FlatShading = 1, M.SmoothShading = 2, M.NoColors = 0, M.FaceColors = 1, M.VertexColors = 2, M.NoBlending = 0, M.NormalBlending = 1, M.AdditiveBlending = 2, M.SubtractiveBlending = 3, M.MultiplyBlending = 4, M.CustomBlending = 5, M.AddEquation = 100, M.SubtractEquation = 101, M.ReverseSubtractEquation = 102, M.MinEquation = 103, M.MaxEquation = 104, M.ZeroFactor = 200, M.OneFactor = 201, M.SrcColorFactor = 202, M.OneMinusSrcColorFactor = 203, M.SrcAlphaFactor = 204, M.OneMinusSrcAlphaFactor = 205, M.DstAlphaFactor = 206, M.OneMinusDstAlphaFactor = 207, M.DstColorFactor = 208, M.OneMinusDstColorFactor = 209, M.SrcAlphaSaturateFactor = 210, M.NeverDepth = 0, M.AlwaysDepth = 1, M.LessDepth = 2, M.LessEqualDepth = 3, M.EqualDepth = 4, M.GreaterEqualDepth = 5, M.GreaterDepth = 6, M.NotEqualDepth = 7, M.MultiplyOperation = 0, M.MixOperation = 1, M.AddOperation = 2, M.NoToneMapping = 0, M.LinearToneMapping = 1, M.ReinhardToneMapping = 2, M.Uncharted2ToneMapping = 3, M.CineonToneMapping = 4, M.UVMapping = 300, M.CubeReflectionMapping = 301, M.CubeRefractionMapping = 302, M.EquirectangularReflectionMapping = 303, M.EquirectangularRefractionMapping = 304, M.SphericalReflectionMapping = 305, M.CubeUVReflectionMapping = 306, M.CubeUVRefractionMapping = 307, M.RepeatWrapping = 1e3, M.ClampToEdgeWrapping = 1001, M.MirroredRepeatWrapping = 1002, M.NearestFilter = 1003, M.NearestMipMapNearestFilter = 1004, M.NearestMipMapLinearFilter = 1005, M.LinearFilter = 1006, M.LinearMipMapNearestFilter = 1007, M.LinearMipMapLinearFilter = 1008, M.UnsignedByteType = 1009, M.ByteType = 1010, M.ShortType = 1011, M.UnsignedShortType = 1012, M.IntType = 1013, M.UnsignedIntType = 1014, M.FloatType = 1015, M.HalfFloatType = 1025, M.UnsignedShort4444Type = 1016, M.UnsignedShort5551Type = 1017, M.UnsignedShort565Type = 1018, M.AlphaFormat = 1019, M.RGBFormat = 1020, M.RGBAFormat = 1021, M.LuminanceFormat = 1022, M.LuminanceAlphaFormat = 1023, M.RGBEFormat = M.RGBAFormat, M.RGB_S3TC_DXT1_Format = 2001, M.RGBA_S3TC_DXT1_Format = 2002, M.RGBA_S3TC_DXT3_Format = 2003, M.RGBA_S3TC_DXT5_Format = 2004, M.RGB_PVRTC_4BPPV1_Format = 2100, M.RGB_PVRTC_2BPPV1_Format = 2101, M.RGBA_PVRTC_4BPPV1_Format = 2102, M.RGBA_PVRTC_2BPPV1_Format = 2103, M.RGB_ETC1_Format = 2151, M.LoopOnce = 2200, M.LoopRepeat = 2201, M.LoopPingPong = 2202, M.InterpolateDiscrete = 2300, M.InterpolateLinear = 2301, M.InterpolateSmooth = 2302, M.ZeroCurvatureEnding = 2400, M.ZeroSlopeEnding = 2401, M.WrapAroundEnding = 2402, M.TrianglesDrawMode = 0, M.TriangleStripDrawMode = 1, M.TriangleFanDrawMode = 2, M.LinearEncoding = 3e3, M.sRGBEncoding = 3001, M.GammaEncoding = 3007, M.RGBEEncoding = 3002, M.LogLuvEncoding = 3003, M.RGBM7Encoding = 3004, M.RGBM16Encoding = 3005, M.RGBDEncoding = 3006, M.Math = {
                generateUUID: function() {
                    var t, e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
                        i = Array(36),
                        r = 0;
                    return function() {
                        for (var n = 0; 36 > n; n++) 8 === n || 13 === n || 18 === n || 23 === n ? i[n] = "-" : 14 === n ? i[n] = "4" : (2 >= r && (r = 0 | 33554432 + 16777216 * Math.random()), t = 15 & r, r >>= 4, i[n] = e[19 === n ? 8 | 3 & t : t]);
                        return i.join("")
                    }
                }(),
                clamp: function(t, e, i) {
                    return v(e, g(i, t))
                },
                euclideanModulo: function(t, e) {
                    return (t % e + e) % e
                },
                mapLinear: function(t, e, i, r, n) {
                    return r + (t - e) * (n - r) / (i - e)
                },
                smoothstep: function(t, e, i) {
                    return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
                },
                smootherstep: function(t, e, i) {
                    return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
                },
                random16: function() {
                    return Math.random()
                },
                randInt: function(t, e) {
                    return t + m(Math.random() * (e - t + 1))
                },
                randFloat: function(t, e) {
                    return t + Math.random() * (e - t)
                },
                randFloatSpread: function(t) {
                    return t * (.5 - Math.random())
                },
                degToRad: function(t) {
                    return t * (f / 180)
                },
                radToDeg: function(t) {
                    return t * (180 / f)
                },
                isPowerOfTwo: function(t) {
                    return 0 == (t & t - 1) && 0 !== t
                },
                nearestPowerOfTwo: function(t) {
                    return l(2, c(d(t) / p))
                },
                nextPowerOfTwo: function(t) {
                    return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, ++t
                }
            }, M.Color = function(t) {
                return 3 === arguments.length ? this.fromArray(arguments) : this.set(t)
            }, M.Color.prototype = {
                constructor: M.Color,
                r: 1,
                g: 1,
                b: 1,
                set: function(t) {
                    return t instanceof M.Color ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
                },
                setScalar: function(t) {
                    this.r = t, this.g = t, this.b = t
                },
                setHex: function(t) {
                    return t = m(t), this.r = (255 & t >> 16) / 255, this.g = (255 & t >> 8) / 255, this.b = (255 & t) / 255, this
                },
                setRGB: function(t, e, i) {
                    return this.r = t, this.g = e, this.b = i, this
                },
                setHSL: function() {
                    function t(t, e, i) {
                        return 0 > i && (i += 1), 1 < i && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
                    }
                    return function(e, i, r) {
                        if (e = M.Math.euclideanModulo(e, 1), i = M.Math.clamp(i, 0, 1), r = M.Math.clamp(r, 0, 1), 0 === i) this.r = this.g = this.b = r;
                        else {
                            var n = .5 >= r ? r * (1 + i) : r + i - r * i,
                                a = 2 * r - n;
                            this.r = t(a, n, e + 1 / 3), this.g = t(a, n, e), this.b = t(a, n, e - 1 / 3)
                        }
                        return this
                    }
                }(),
                setStyle: function(t) {
                    function e(t) {
                        void 0 === t || parseFloat(t)
                    }
                    var i;
                    if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                        var r, n = i[1],
                            a = i[2];
                        switch (n) {
                            case "rgb":
                            case "rgba":
                                if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = g(255, parseInt(r[1], 10)) / 255, this.g = g(255, parseInt(r[2], 10)) / 255, this.b = g(255, parseInt(r[3], 10)) / 255, e(r[5]), this;
                                if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = g(100, parseInt(r[1], 10)) / 100, this.g = g(100, parseInt(r[2], 10)) / 100, this.b = g(100, parseInt(r[3], 10)) / 100, e(r[5]), this;
                                break;
                            case "hsl":
                            case "hsla":
                                if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                                    var o = parseFloat(r[1]) / 360,
                                        s = parseInt(r[2], 10) / 100,
                                        h = parseInt(r[3], 10) / 100;
                                    return e(r[5]), this.setHSL(o, s, h)
                                }
                        }
                    } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                        var u = (l = i[1]).length;
                        if (3 === u) return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
                        if (6 === u) return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
                    }
                    if (t && 0 < t.length) {
                        var l = M.ColorKeywords[t];
                        void 0 !== l && this.setHex(l)
                    }
                    return this
                },
                clone: function() {
                    return new this.constructor(this.r, this.g, this.b)
                },
                copy: function(t) {
                    return this.r = t.r, this.g = t.g, this.b = t.b, this
                },
                copyGammaToLinear: function(t, e) {
                    return void 0 === e && (e = 2), this.r = l(t.r, e), this.g = l(t.g, e), this.b = l(t.b, e), this
                },
                copyLinearToGamma: function(t, e) {
                    void 0 === e && (e = 2);
                    var i = 0 < e ? 1 / e : 1;
                    return this.r = l(t.r, i), this.g = l(t.g, i), this.b = l(t.b, i), this
                },
                convertGammaToLinear: function() {
                    var t = this.r,
                        e = this.g,
                        i = this.b;
                    return this.r = t * t, this.g = e * e, this.b = i * i, this
                },
                convertLinearToGamma: function() {
                    return this.r = u(this.r), this.g = u(this.g), this.b = u(this.b), this
                },
                getHex: function() {
                    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
                },
                getHexString: function() {
                    return ("000000" + this.getHex().toString(16)).slice(-6)
                },
                getHSL: function(t) {
                    var e, i, r = t || {
                            h: 0,
                            s: 0,
                            l: 0
                        },
                        n = this.r,
                        a = this.g,
                        o = this.b,
                        s = v(n, a, o),
                        h = g(n, a, o),
                        u = (h + s) / 2;
                    if (h === s) e = 0, i = 0;
                    else {
                        var l = s - h;
                        i = .5 >= u ? l / (s + h) : l / (2 - s - h), s === n ? e = (a - o) / l + (a < o ? 6 : 0) : s === a ? e = (o - n) / l + 2 : s === o && (e = (n - a) / l + 4), e /= 6
                    }
                    return r.h = e, r.s = i, r.l = u, r
                },
                getStyle: function() {
                    return "rgb(" + (0 | 255 * this.r) + "," + (0 | 255 * this.g) + "," + (0 | 255 * this.b) + ")"
                },
                offsetHSL: function(t, e, i) {
                    var r = this.getHSL();
                    return r.h += t, r.s += e, r.l += i, this.setHSL(r.h, r.s, r.l), this
                },
                add: function(t) {
                    return this.r += t.r, this.g += t.g, this.b += t.b, this
                },
                addColors: function(t, e) {
                    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
                },
                addScalar: function(t) {
                    return this.r += t, this.g += t, this.b += t, this
                },
                multiply: function(t) {
                    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
                },
                multiplyScalar: function(t) {
                    return this.r *= t, this.g *= t, this.b *= t, this
                },
                lerp: function(t, e) {
                    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
                },
                equals: function(t) {
                    return t.r === this.r && t.g === this.g && t.b === this.b
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
                }
            }, M.ColorKeywords = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            }, M.Vector2 = function(t, e) {
                this.x = t || 0, this.y = e || 0
            }, M.Vector2.prototype = {
                constructor: M.Vector2,
                get width() {
                    return this.x
                },
                set width(t) {
                    this.x = t
                },
                get height() {
                    return this.y
                },
                set height(t) {
                    this.y = t
                },
                set: function(t, e) {
                    return this.x = t, this.y = e, this
                },
                setScalar: function(t) {
                    return this.x = t, this.y = t, this
                },
                setX: function(t) {
                    return this.x = t, this
                },
                setY: function(t) {
                    return this.y = t, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                clone: function() {
                    return new this.constructor(this.x, this.y)
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this
                },
                add: function(t, e) {
                    return void 0 === e ? (this.x += t.x, this.y += t.y, this) : this.addVectors(t, e)
                },
                addScalar: function(t) {
                    return this.x += t, this.y += t, this
                },
                addVectors: function(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this
                },
                addScaledVector: function(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this
                },
                sub: function(t, e) {
                    return void 0 === e ? (this.x -= t.x, this.y -= t.y, this) : this.subVectors(t, e)
                },
                subScalar: function(t) {
                    return this.x -= t, this.y -= t, this
                },
                subVectors: function(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this
                },
                multiply: function(t) {
                    return this.x *= t.x, this.y *= t.y, this
                },
                multiplyScalar: function(t) {
                    return isFinite(t) ? (this.x *= t, this.y *= t) : (this.x = 0, this.y = 0), this
                },
                divide: function(t) {
                    return this.x /= t.x, this.y /= t.y, this
                },
                divideScalar: function(t) {
                    return this.multiplyScalar(1 / t)
                },
                min: function(t) {
                    return this.x = g(this.x, t.x), this.y = g(this.y, t.y), this
                },
                max: function(t) {
                    return this.x = v(this.x, t.x), this.y = v(this.y, t.y), this
                },
                clamp: function(t, e) {
                    return this.x = v(t.x, g(e.x, this.x)), this.y = v(t.y, g(e.y, this.y)), this
                },
                clampScalar: function() {
                    var t, e;
                    return function(i, r) {
                        return void 0 == t && (t = new M.Vector2, e = new M.Vector2), t.set(i, i), e.set(r, r), this.clamp(t, e)
                    }
                }(),
                clampLength: function(t, e) {
                    var i = this.length();
                    return this.multiplyScalar(v(t, g(e, i)) / i), this
                },
                floor: function() {
                    return this.x = m(this.x), this.y = m(this.y), this
                },
                ceil: function() {
                    return this.x = h(this.x), this.y = h(this.y), this
                },
                round: function() {
                    return this.x = c(this.x), this.y = c(this.y), this
                },
                roundToZero: function() {
                    return this.x = 0 > this.x ? h(this.x) : m(this.x), this.y = 0 > this.y ? h(this.y) : m(this.y), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y
                },
                length: function() {
                    return u(this.x * this.x + this.y * this.y)
                },
                lengthManhattan: function() {
                    return s(this.x) + s(this.y)
                },
                normalize: function() {
                    return this.divideScalar(this.length())
                },
                angle: function() {
                    var t = o(this.y, this.x);
                    return 0 > t && (t += 2 * f), t
                },
                distanceTo: function(t) {
                    return u(this.distanceToSquared(t))
                },
                distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        i = this.y - t.y;
                    return e * e + i * i
                },
                setLength: function(t) {
                    return this.multiplyScalar(t / this.length())
                },
                lerp: function(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
                },
                lerpVectors: function(t, e, i) {
                    return this.subVectors(e, t).multiplyScalar(i).add(t), this
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
                },
                fromAttribute: function(t, e, i) {
                    return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this
                },
                rotateAround: function(t, e) {
                    var i = a(e),
                        r = n(e),
                        o = this.x - t.x,
                        s = this.y - t.y;
                    return this.x = o * i - s * r + t.x, this.y = o * r + s * i + t.y, this
                }
            }, M.Vector3 = function(t, e, i) {
                this.x = t || 0, this.y = e || 0, this.z = i || 0
            }, M.Vector3.prototype = {
                constructor: M.Vector3,
                set: function(t, e, i) {
                    return this.x = t, this.y = e, this.z = i, this
                },
                setScalar: function(t) {
                    return this.x = t, this.y = t, this.z = t, this
                },
                setX: function(t) {
                    return this.x = t, this
                },
                setY: function(t) {
                    return this.y = t, this
                },
                setZ: function(t) {
                    return this.z = t, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        case 2:
                            this.z = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                clone: function() {
                    return new this.constructor(this.x, this.y, this.z)
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this
                },
                add: function(t, e) {
                    return void 0 === e ? (this.x += t.x, this.y += t.y, this.z += t.z, this) : this.addVectors(t, e)
                },
                addScalar: function(t) {
                    return this.x += t, this.y += t, this.z += t, this
                },
                addVectors: function(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
                },
                addScaledVector: function(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
                },
                sub: function(t, e) {
                    return void 0 === e ? (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) : this.subVectors(t, e)
                },
                subScalar: function(t) {
                    return this.x -= t, this.y -= t, this.z -= t, this
                },
                subVectors: function(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
                },
                multiply: function(t, e) {
                    return void 0 === e ? (this.x *= t.x, this.y *= t.y, this.z *= t.z, this) : this.multiplyVectors(t, e)
                },
                multiplyScalar: function(t) {
                    return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t) : (this.x = 0, this.y = 0, this.z = 0), this
                },
                multiplyVectors: function(t, e) {
                    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
                },
                applyEuler: function() {
                    var t;
                    return function(e) {
                        return M.Euler, void 0 == t && (t = new M.Quaternion), this.applyQuaternion(t.setFromEuler(e)), this
                    }
                }(),
                applyAxisAngle: function() {
                    var t;
                    return function(e, i) {
                        return void 0 == t && (t = new M.Quaternion), this.applyQuaternion(t.setFromAxisAngle(e, i)), this
                    }
                }(),
                applyMatrix3: function(t) {
                    var e = this.x,
                        i = this.y,
                        r = this.z,
                        n = t.elements;
                    return this.x = n[0] * e + n[3] * i + n[6] * r, this.y = n[1] * e + n[4] * i + n[7] * r, this.z = n[2] * e + n[5] * i + n[8] * r, this
                },
                applyMatrix4: function(t) {
                    var e = this.x,
                        i = this.y,
                        r = this.z,
                        n = t.elements;
                    return this.x = n[0] * e + n[4] * i + n[8] * r + n[12], this.y = n[1] * e + n[5] * i + n[9] * r + n[13], this.z = n[2] * e + n[6] * i + n[10] * r + n[14], this
                },
                applyProjection: function(t) {
                    var e = this.x,
                        i = this.y,
                        r = this.z,
                        n = t.elements,
                        a = 1 / (n[3] * e + n[7] * i + n[11] * r + n[15]);
                    return this.x = (n[0] * e + n[4] * i + n[8] * r + n[12]) * a, this.y = (n[1] * e + n[5] * i + n[9] * r + n[13]) * a, this.z = (n[2] * e + n[6] * i + n[10] * r + n[14]) * a, this
                },
                applyQuaternion: function(t) {
                    var e = this.x,
                        i = this.y,
                        r = this.z,
                        n = t.x,
                        a = t.y,
                        o = t.z,
                        s = t.w,
                        h = s * e + a * r - o * i,
                        u = s * i + o * e - n * r,
                        l = s * r + n * i - a * e,
                        c = -n * e - a * i - o * r;
                    return this.x = h * s + c * -n + u * -o - l * -a, this.y = u * s + c * -a + l * -n - h * -o, this.z = l * s + c * -o + h * -a - u * -n, this
                },
                project: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyProjection(t)
                    }
                }(),
                unproject: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyProjection(t)
                    }
                }(),
                transformDirection: function(t) {
                    var e = this.x,
                        i = this.y,
                        r = this.z,
                        n = t.elements;
                    return this.x = n[0] * e + n[4] * i + n[8] * r, this.y = n[1] * e + n[5] * i + n[9] * r, this.z = n[2] * e + n[6] * i + n[10] * r, this.normalize(), this
                },
                divide: function(t) {
                    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
                },
                divideScalar: function(t) {
                    return this.multiplyScalar(1 / t)
                },
                min: function(t) {
                    return this.x = g(this.x, t.x), this.y = g(this.y, t.y), this.z = g(this.z, t.z), this
                },
                max: function(t) {
                    return this.x = v(this.x, t.x), this.y = v(this.y, t.y), this.z = v(this.z, t.z), this
                },
                clamp: function(t, e) {
                    return this.x = v(t.x, g(e.x, this.x)), this.y = v(t.y, g(e.y, this.y)), this.z = v(t.z, g(e.z, this.z)), this
                },
                clampScalar: function() {
                    var t, e;
                    return function(i, r) {
                        return void 0 == t && (t = new M.Vector3, e = new M.Vector3), t.set(i, i, i), e.set(r, r, r), this.clamp(t, e)
                    }
                }(),
                clampLength: function(t, e) {
                    var i = this.length();
                    return this.multiplyScalar(v(t, g(e, i)) / i), this
                },
                floor: function() {
                    return this.x = m(this.x), this.y = m(this.y), this.z = m(this.z), this
                },
                ceil: function() {
                    return this.x = h(this.x), this.y = h(this.y), this.z = h(this.z), this
                },
                round: function() {
                    return this.x = c(this.x), this.y = c(this.y), this.z = c(this.z), this
                },
                roundToZero: function() {
                    return this.x = 0 > this.x ? h(this.x) : m(this.x), this.y = 0 > this.y ? h(this.y) : m(this.y), this.z = 0 > this.z ? h(this.z) : m(this.z), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z
                },
                length: function() {
                    return u(this.x * this.x + this.y * this.y + this.z * this.z)
                },
                lengthManhattan: function() {
                    return s(this.x) + s(this.y) + s(this.z)
                },
                normalize: function() {
                    return this.divideScalar(this.length())
                },
                setLength: function(t) {
                    return this.multiplyScalar(t / this.length())
                },
                lerp: function(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
                },
                lerpVectors: function(t, e, i) {
                    return this.subVectors(e, t).multiplyScalar(i).add(t), this
                },
                cross: function(t, e) {
                    if (void 0 !== e) return this.crossVectors(t, e);
                    var i = this.x,
                        r = this.y,
                        n = this.z;
                    return this.x = r * t.z - n * t.y, this.y = n * t.x - i * t.z, this.z = i * t.y - r * t.x, this
                },
                crossVectors: function(t, e) {
                    var i = t.x,
                        r = t.y,
                        n = t.z,
                        a = e.x,
                        o = e.y,
                        s = e.z;
                    return this.x = r * s - n * o, this.y = n * a - i * s, this.z = i * o - r * a, this
                },
                projectOnVector: function() {
                    var t, e;
                    return function(i) {
                        return void 0 == t && (t = new M.Vector3), t.copy(i).normalize(), e = this.dot(t), this.copy(t).multiplyScalar(e)
                    }
                }(),
                projectOnPlane: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Vector3), t.copy(this).projectOnVector(e), this.sub(t)
                    }
                }(),
                reflect: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Vector3), this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
                    }
                }(),
                angleTo: function(t) {
                    var e = this.dot(t) / u(this.lengthSq() * t.lengthSq());
                    return r(M.Math.clamp(e, -1, 1))
                },
                distanceTo: function(t) {
                    return u(this.distanceToSquared(t))
                },
                distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        i = this.y - t.y,
                        r = this.z - t.z;
                    return e * e + i * i + r * r
                },
                setFromSpherical: function(t) {
                    var e = n(t.phi) * t.radius;
                    return this.x = e * n(t.theta), this.y = a(t.phi) * t.radius, this.z = e * a(t.theta), this
                },
                setFromMatrixPosition: function(t) {
                    return this.setFromMatrixColumn(t, 3)
                },
                setFromMatrixScale: function(t) {
                    var e = this.setFromMatrixColumn(t, 0).length(),
                        i = this.setFromMatrixColumn(t, 1).length(),
                        r = this.setFromMatrixColumn(t, 2).length();
                    return this.x = e, this.y = i, this.z = r, this
                },
                setFromMatrixColumn: function(t, e) {
                    return "number" == typeof t && (t = arguments[1], e = arguments[0]), this.fromArray(t.elements, 4 * e)
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y && t.z === this.z
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
                },
                fromAttribute: function(t, e, i) {
                    return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this
                }
            }, M.Vector4 = function(t, e, i, r) {
                this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 === r ? 1 : r
            }, M.Vector4.prototype = {
                constructor: M.Vector4,
                set: function(t, e, i, r) {
                    return this.x = t, this.y = e, this.z = i, this.w = r, this
                },
                setScalar: function(t) {
                    return this.x = t, this.y = t, this.z = t, this.w = t, this
                },
                setX: function(t) {
                    return this.x = t, this
                },
                setY: function(t) {
                    return this.y = t, this
                },
                setZ: function(t) {
                    return this.z = t, this
                },
                setW: function(t) {
                    return this.w = t, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        case 2:
                            this.z = e;
                            break;
                        case 3:
                            this.w = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        case 3:
                            return this.w;
                        default:
                            throw new Error("index is out of range: " + t)
                    }
                },
                clone: function() {
                    return new this.constructor(this.x, this.y, this.z, this.w)
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 === t.w ? 1 : t.w, this
                },
                add: function(t, e) {
                    return void 0 === e ? (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this) : this.addVectors(t, e)
                },
                addScalar: function(t) {
                    return this.x += t, this.y += t, this.z += t, this.w += t, this
                },
                addVectors: function(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
                },
                addScaledVector: function(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
                },
                sub: function(t, e) {
                    return void 0 === e ? (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this) : this.subVectors(t, e)
                },
                subScalar: function(t) {
                    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
                },
                subVectors: function(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
                },
                multiplyScalar: function(t) {
                    return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t, this.w *= t) : (this.x = 0, this.y = 0, this.z = 0, this.w = 0), this
                },
                applyMatrix4: function(t) {
                    var e = this.x,
                        i = this.y,
                        r = this.z,
                        n = this.w,
                        a = t.elements;
                    return this.x = a[0] * e + a[4] * i + a[8] * r + a[12] * n, this.y = a[1] * e + a[5] * i + a[9] * r + a[13] * n, this.z = a[2] * e + a[6] * i + a[10] * r + a[14] * n, this.w = a[3] * e + a[7] * i + a[11] * r + a[15] * n, this
                },
                divideScalar: function(t) {
                    return this.multiplyScalar(1 / t)
                },
                setAxisAngleFromQuaternion: function(t) {
                    this.w = 2 * r(t.w);
                    var e = u(1 - t.w * t.w);
                    return 1e-4 > e ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
                },
                setAxisAngleFromRotationMatrix: function(t) {
                    var e, i, n, a, o = .01,
                        h = t.elements,
                        l = h[0],
                        c = h[4],
                        p = h[8],
                        d = h[1],
                        m = h[5],
                        v = h[9],
                        g = h[2],
                        y = h[6],
                        x = h[10];
                    if (s(c - d) < o && s(p - g) < o && s(v - y) < o) {
                        if (s(c + d) < .1 && s(p + g) < .1 && s(v + y) < .1 && s(l + m + x - 3) < .1) return this.set(1, 0, 0, 0), this;
                        e = f;
                        var M = (l + 1) / 2,
                            _ = (m + 1) / 2,
                            b = (x + 1) / 2,
                            S = (c + d) / 4,
                            w = (p + g) / 4,
                            E = (v + y) / 4;
                        return M > _ && M > b ? M < o ? (i = 0, n = .707106781, a = .707106781) : (i = u(M), n = S / i, a = w / i) : _ > b ? _ < o ? (i = .707106781, n = 0, a = .707106781) : (n = u(_), i = S / n, a = E / n) : b < o ? (i = .707106781, n = .707106781, a = 0) : (a = u(b), i = w / a, n = E / a), this.set(i, n, a, e), this
                    }
                    var T = u((y - v) * (y - v) + (p - g) * (p - g) + (d - c) * (d - c));
                    return .001 > s(T) && (T = 1), this.x = (y - v) / T, this.y = (p - g) / T, this.z = (d - c) / T, this.w = r((l + m + x - 1) / 2), this
                },
                min: function(t) {
                    return this.x = g(this.x, t.x), this.y = g(this.y, t.y), this.z = g(this.z, t.z), this.w = g(this.w, t.w), this
                },
                max: function(t) {
                    return this.x = v(this.x, t.x), this.y = v(this.y, t.y), this.z = v(this.z, t.z), this.w = v(this.w, t.w), this
                },
                clamp: function(t, e) {
                    return this.x = v(t.x, g(e.x, this.x)), this.y = v(t.y, g(e.y, this.y)), this.z = v(t.z, g(e.z, this.z)), this.w = v(t.w, g(e.w, this.w)), this
                },
                clampScalar: function() {
                    var t, e;
                    return function(i, r) {
                        return void 0 == t && (t = new M.Vector4, e = new M.Vector4), t.set(i, i, i, i), e.set(r, r, r, r), this.clamp(t, e)
                    }
                }(),
                floor: function() {
                    return this.x = m(this.x), this.y = m(this.y), this.z = m(this.z), this.w = m(this.w), this
                },
                ceil: function() {
                    return this.x = h(this.x), this.y = h(this.y), this.z = h(this.z), this.w = h(this.w), this
                },
                round: function() {
                    return this.x = c(this.x), this.y = c(this.y), this.z = c(this.z), this.w = c(this.w), this
                },
                roundToZero: function() {
                    return this.x = 0 > this.x ? h(this.x) : m(this.x), this.y = 0 > this.y ? h(this.y) : m(this.y), this.z = 0 > this.z ? h(this.z) : m(this.z), this.w = 0 > this.w ? h(this.w) : m(this.w), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                },
                length: function() {
                    return u(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                },
                lengthManhattan: function() {
                    return s(this.x) + s(this.y) + s(this.z) + s(this.w)
                },
                normalize: function() {
                    return this.divideScalar(this.length())
                },
                setLength: function(t) {
                    return this.multiplyScalar(t / this.length())
                },
                lerp: function(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
                },
                lerpVectors: function(t, e, i) {
                    return this.subVectors(e, t).multiplyScalar(i).add(t), this
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
                },
                fromAttribute: function(t, e, i) {
                    return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this.w = t.array[e + 3], this
                }
            }, M.Matrix3 = function() {
                this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length
            }, M.Matrix3.prototype = {
                constructor: M.Matrix3,
                set: function(t, e, i, r, n, a, o, s, h) {
                    var u = this.elements;
                    return u[0] = t, u[1] = r, u[2] = o, u[3] = e, u[4] = n, u[5] = s, u[6] = i, u[7] = a, u[8] = h, this
                },
                identity: function() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                },
                clone: function() {
                    return (new this.constructor).fromArray(this.elements)
                },
                copy: function(t) {
                    var e = t.elements;
                    return this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
                },
                setFromMatrix4: function(t) {
                    var e = t.elements;
                    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
                },
                applyToVector3Array: function() {
                    var t;
                    return function(e, i, r) {
                        void 0 == t && (t = new M.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length);
                        for (var n = 0, a = i; n < r; n += 3, a += 3) t.fromArray(e, a), t.applyMatrix3(this), t.toArray(e, a);
                        return e
                    }
                }(),
                applyToBuffer: function() {
                    var t;
                    return function(e, i, r) {
                        void 0 == t && (t = new M.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length / e.itemSize);
                        for (var n = 0, a = i; n < r; n++, a++) t.x = e.getX(a), t.y = e.getY(a), t.z = e.getZ(a), t.applyMatrix3(this), e.setXYZ(t.x, t.y, t.z);
                        return e
                    }
                }(),
                multiplyScalar: function(t) {
                    var e = this.elements;
                    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
                },
                determinant: function() {
                    var t = this.elements,
                        e = t[0],
                        i = t[1],
                        r = t[2],
                        n = t[3],
                        a = t[4],
                        o = t[5],
                        s = t[6],
                        h = t[7],
                        u = t[8];
                    return e * a * u - e * o * h - i * n * u + i * o * s + r * n * h - r * a * s
                },
                getInverse: function(t, e) {
                    M.Matrix4;
                    var i = t.elements,
                        r = this.elements,
                        n = i[0],
                        a = i[1],
                        o = i[2],
                        s = i[3],
                        h = i[4],
                        u = i[5],
                        l = i[6],
                        c = i[7],
                        p = i[8],
                        d = p * h - u * c,
                        f = u * l - p * s,
                        m = c * s - h * l,
                        v = n * d + a * f + o * m;
                    if (0 == v) {
                        if (e) throw new Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
                        return this.identity()
                    }
                    return r[0] = d, r[1] = o * c - p * a, r[2] = u * a - o * h, r[3] = f, r[4] = p * n - o * l, r[5] = o * s - u * n, r[6] = m, r[7] = a * l - c * n, r[8] = h * n - a * s, this.multiplyScalar(1 / v)
                },
                transpose: function() {
                    var t, e = this.elements;
                    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
                },
                flattenToArrayOffset: function(t, e) {
                    var i = this.elements;
                    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
                },
                getNormalMatrix: function(t) {
                    return this.setFromMatrix4(t).getInverse(this).transpose()
                },
                transposeIntoArray: function(t) {
                    var e = this.elements;
                    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
                },
                fromArray: function(t) {
                    return this.elements.set(t), this
                },
                toArray: function() {
                    var t = this.elements;
                    return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]
                }
            }, M.Matrix4 = function() {
                this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length
            }, M.Matrix4.prototype = {
                constructor: M.Matrix4,
                set: function(t, e, i, r, n, a, o, s, h, u, l, c, p, d, f, m) {
                    var v = this.elements;
                    return v[0] = t, v[4] = e, v[8] = i, v[12] = r, v[1] = n, v[5] = a, v[9] = o, v[13] = s, v[2] = h, v[6] = u, v[10] = l, v[14] = c, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
                },
                identity: function() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                },
                clone: function() {
                    return (new M.Matrix4).fromArray(this.elements)
                },
                copy: function(t) {
                    return this.elements.set(t.elements), this
                },
                copyPosition: function(t) {
                    var e = this.elements,
                        i = t.elements;
                    return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
                },
                extractBasis: function(t, e, i) {
                    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
                },
                makeBasis: function(t, e, i) {
                    return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
                },
                extractRotation: function() {
                    var t;
                    return function(e) {
                        void 0 == t && (t = new M.Vector3);
                        var i = this.elements,
                            r = e.elements,
                            n = 1 / t.setFromMatrixColumn(e, 0).length(),
                            a = 1 / t.setFromMatrixColumn(e, 1).length(),
                            o = 1 / t.setFromMatrixColumn(e, 2).length();
                        return i[0] = r[0] * n, i[1] = r[1] * n, i[2] = r[2] * n, i[4] = r[4] * a, i[5] = r[5] * a, i[6] = r[6] * a, i[8] = r[8] * o, i[9] = r[9] * o, i[10] = r[10] * o, this
                    }
                }(),
                makeRotationFromEuler: function(t) {
                    M.Euler;
                    var e = this.elements,
                        i = t.x,
                        r = t.y,
                        o = t.z,
                        s = a(i),
                        h = n(i),
                        u = a(r),
                        l = n(r),
                        c = a(o),
                        p = n(o);
                    if ("XYZ" === t.order) {
                        var d = s * c,
                            f = s * p,
                            m = h * c,
                            v = h * p;
                        e[0] = u * c, e[4] = -u * p, e[8] = l, e[1] = f + m * l, e[5] = d - v * l, e[9] = -h * u, e[2] = v - d * l, e[6] = m + f * l, e[10] = s * u
                    } else if ("YXZ" === t.order) {
                        var g = u * c,
                            y = u * p,
                            x = l * c,
                            _ = l * p;
                        e[0] = g + _ * h, e[4] = x * h - y, e[8] = s * l, e[1] = s * p, e[5] = s * c, e[9] = -h, e[2] = y * h - x, e[6] = _ + g * h, e[10] = s * u
                    } else if ("ZXY" === t.order) {
                        var g = u * c,
                            y = u * p,
                            x = l * c,
                            _ = l * p;
                        e[0] = g - _ * h, e[4] = -s * p, e[8] = x + y * h, e[1] = y + x * h, e[5] = s * c, e[9] = _ - g * h, e[2] = -s * l, e[6] = h, e[10] = s * u
                    } else if ("ZYX" === t.order) {
                        var d = s * c,
                            f = s * p,
                            m = h * c,
                            v = h * p;
                        e[0] = u * c, e[4] = m * l - f, e[8] = d * l + v, e[1] = u * p, e[5] = v * l + d, e[9] = f * l - m, e[2] = -l, e[6] = h * u, e[10] = s * u
                    } else if ("YZX" === t.order) {
                        var b = s * u,
                            S = s * l,
                            w = h * u,
                            E = h * l;
                        e[0] = u * c, e[4] = E - b * p, e[8] = w * p + S, e[1] = p, e[5] = s * c, e[9] = -h * c, e[2] = -l * c, e[6] = S * p + w, e[10] = b - E * p
                    } else if ("XZY" === t.order) {
                        var b = s * u,
                            S = s * l,
                            w = h * u,
                            E = h * l;
                        e[0] = u * c, e[4] = -p, e[8] = l * c, e[1] = b * p + E, e[5] = s * c, e[9] = S * p - w, e[2] = w * p - S, e[6] = h * c, e[10] = E * p + b
                    }
                    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
                },
                makeRotationFromQuaternion: function(t) {
                    var e = this.elements,
                        i = t.x,
                        r = t.y,
                        n = t.z,
                        a = t.w,
                        o = i + i,
                        s = r + r,
                        h = n + n,
                        u = i * o,
                        l = i * s,
                        c = i * h,
                        p = r * s,
                        d = r * h,
                        f = n * h,
                        m = a * o,
                        v = a * s,
                        g = a * h;
                    return e[0] = 1 - (p + f), e[4] = l - g, e[8] = c + v, e[1] = l + g, e[5] = 1 - (u + f), e[9] = d - m, e[2] = c - v, e[6] = d + m, e[10] = 1 - (u + p), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
                },
                lookAt: function() {
                    var t, e, i;
                    return function(r, n, a) {
                        void 0 == t && (t = new M.Vector3), void 0 == e && (e = new M.Vector3), void 0 == i && (i = new M.Vector3);
                        var o = this.elements;
                        return i.subVectors(r, n).normalize(), 0 === i.lengthSq() && (i.z = 1), t.crossVectors(a, i).normalize(), 0 === t.lengthSq() && (i.x += 1e-4, t.crossVectors(a, i).normalize()), e.crossVectors(i, t), o[0] = t.x, o[4] = e.x, o[8] = i.x, o[1] = t.y, o[5] = e.y, o[9] = i.y, o[2] = t.z, o[6] = e.z, o[10] = i.z, this
                    }
                }(),
                multiply: function(t, e) {
                    return void 0 === e ? this.multiplyMatrices(this, t) : this.multiplyMatrices(t, e)
                },
                multiplyMatrices: function(t, e) {
                    var i = t.elements,
                        r = e.elements,
                        n = this.elements,
                        a = i[0],
                        o = i[4],
                        s = i[8],
                        h = i[12],
                        u = i[1],
                        l = i[5],
                        c = i[9],
                        p = i[13],
                        d = i[2],
                        f = i[6],
                        m = i[10],
                        v = i[14],
                        g = i[3],
                        y = i[7],
                        x = i[11],
                        M = i[15],
                        _ = r[0],
                        b = r[4],
                        S = r[8],
                        w = r[12],
                        E = r[1],
                        T = r[5],
                        A = r[9],
                        L = r[13],
                        R = r[2],
                        C = r[6],
                        U = r[10],
                        F = r[14],
                        P = r[3],
                        D = r[7],
                        N = r[11],
                        B = r[15];
                    return n[0] = a * _ + o * E + s * R + h * P, n[4] = a * b + o * T + s * C + h * D, n[8] = a * S + o * A + s * U + h * N, n[12] = a * w + o * L + s * F + h * B, n[1] = u * _ + l * E + c * R + p * P, n[5] = u * b + l * T + c * C + p * D, n[9] = u * S + l * A + c * U + p * N, n[13] = u * w + l * L + c * F + p * B, n[2] = d * _ + f * E + m * R + v * P, n[6] = d * b + f * T + m * C + v * D, n[10] = d * S + f * A + m * U + v * N, n[14] = d * w + f * L + m * F + v * B, n[3] = g * _ + y * E + x * R + M * P, n[7] = g * b + y * T + x * C + M * D, n[11] = g * S + y * A + x * U + M * N, n[15] = g * w + y * L + x * F + M * B, this
                },
                multiplyToArray: function(t, e, i) {
                    var r = this.elements;
                    return this.multiplyMatrices(t, e), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this
                },
                multiplyScalar: function(t) {
                    var e = this.elements;
                    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
                },
                applyToVector3Array: function() {
                    var t;
                    return function(e, i, r) {
                        void 0 == t && (t = new M.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length);
                        for (var n = 0, a = i; n < r; n += 3, a += 3) t.fromArray(e, a), t.applyMatrix4(this), t.toArray(e, a);
                        return e
                    }
                }(),
                applyToBuffer: function() {
                    var t;
                    return function(e, i, r) {
                        void 0 == t && (t = new M.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length / e.itemSize);
                        for (var n = 0, a = i; n < r; n++, a++) t.x = e.getX(a), t.y = e.getY(a), t.z = e.getZ(a), t.applyMatrix4(this), e.setXYZ(t.x, t.y, t.z);
                        return e
                    }
                }(),
                determinant: function() {
                    var t = this.elements,
                        e = t[0],
                        i = t[4],
                        r = t[8],
                        n = t[12],
                        a = t[1],
                        o = t[5],
                        s = t[9],
                        h = t[13],
                        u = t[2],
                        l = t[6],
                        c = t[10],
                        p = t[14];
                    return t[3] * (+n * s * l - r * h * l - n * o * c + i * h * c + r * o * p - i * s * p) + t[7] * (+e * s * p - e * h * c + n * a * c - r * a * p + r * h * u - n * s * u) + t[11] * (+e * h * l - e * o * p - n * a * l + i * a * p + n * o * u - i * h * u) + t[15] * (-r * o * u - e * s * l + e * o * c + r * a * l - i * a * c + i * s * u)
                },
                transpose: function() {
                    var t, e = this.elements;
                    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
                },
                flattenToArrayOffset: function(t, e) {
                    var i = this.elements;
                    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
                },
                getPosition: function() {
                    var t;
                    return function() {
                        return void 0 == t && (t = new M.Vector3), t.setFromMatrixColumn(this, 3)
                    }
                }(),
                setPosition: function(t) {
                    var e = this.elements;
                    return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
                },
                getInverse: function(t, e) {
                    var i = this.elements,
                        r = t.elements,
                        n = r[0],
                        a = r[1],
                        o = r[2],
                        s = r[3],
                        h = r[4],
                        u = r[5],
                        l = r[6],
                        c = r[7],
                        p = r[8],
                        d = r[9],
                        f = r[10],
                        m = r[11],
                        v = r[12],
                        g = r[13],
                        y = r[14],
                        x = r[15],
                        M = d * y * c - g * f * c + g * l * m - u * y * m - d * l * x + u * f * x,
                        _ = v * f * c - p * y * c - v * l * m + h * y * m + p * l * x - h * f * x,
                        b = p * g * c - v * d * c + v * u * m - h * g * m - p * u * x + h * d * x,
                        S = v * d * l - p * g * l - v * u * f + h * g * f + p * u * y - h * d * y,
                        w = n * M + a * _ + o * b + s * S;
                    if (0 == w) {
                        if (e) throw new Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                        return this.identity()
                    }
                    return i[0] = M, i[1] = g * f * s - d * y * s - g * o * m + a * y * m + d * o * x - a * f * x, i[2] = u * y * s - g * l * s + g * o * c - a * y * c - u * o * x + a * l * x, i[3] = d * l * s - u * f * s - d * o * c + a * f * c + u * o * m - a * l * m, i[4] = _, i[5] = p * y * s - v * f * s + v * o * m - n * y * m - p * o * x + n * f * x, i[6] = v * l * s - h * y * s - v * o * c + n * y * c + h * o * x - n * l * x, i[7] = h * f * s - p * l * s + p * o * c - n * f * c - h * o * m + n * l * m, i[8] = b, i[9] = v * d * s - p * g * s - v * a * m + n * g * m + p * a * x - n * d * x, i[10] = h * g * s - v * u * s + v * a * c - n * g * c - h * a * x + n * u * x, i[11] = p * u * s - h * d * s - p * a * c + n * d * c + h * a * m - n * u * m, i[12] = S, i[13] = p * g * o - v * d * o + v * a * f - n * g * f - p * a * y + n * d * y, i[14] = v * u * o - h * g * o - v * a * l + n * g * l + h * a * y - n * u * y, i[15] = h * d * o - p * u * o + p * a * l - n * d * l - h * a * f + n * u * f, this.multiplyScalar(1 / w)
                },
                scale: function(t) {
                    var e = this.elements,
                        i = t.x,
                        r = t.y,
                        n = t.z;
                    return e[0] *= i, e[4] *= r, e[8] *= n, e[1] *= i, e[5] *= r, e[9] *= n, e[2] *= i, e[6] *= r, e[10] *= n, e[3] *= i, e[7] *= r, e[11] *= n, this
                },
                getMaxScaleOnAxis: function() {
                    var t = this.elements,
                        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                        r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                    return u(v(e, i, r))
                },
                makeTranslation: function(t, e, i) {
                    return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
                },
                makeRotationX: function(t) {
                    var e = a(t),
                        i = n(t);
                    return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
                },
                makeRotationY: function(t) {
                    var e = a(t),
                        i = n(t);
                    return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
                },
                makeRotationZ: function(t) {
                    var e = a(t),
                        i = n(t);
                    return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                },
                makeRotationAxis: function(t, e) {
                    var i = a(e),
                        r = n(e),
                        o = 1 - i,
                        s = t.x,
                        h = t.y,
                        u = t.z,
                        l = o * s,
                        c = o * h;
                    return this.set(l * s + i, l * h - r * u, l * u + r * h, 0, l * h + r * u, c * h + i, c * u - r * s, 0, l * u - r * h, c * u + r * s, o * u * u + i, 0, 0, 0, 0, 1), this
                },
                makeScale: function(t, e, i) {
                    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
                },
                compose: function(t, e, i) {
                    return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this
                },
                decompose: function() {
                    var t, e;
                    return function(i, r, n) {
                        void 0 == t && (t = new M.Vector3), void 0 == e && (e = new M.Matrix4);
                        var a = this.elements,
                            o = t.set(a[0], a[1], a[2]).length(),
                            s = t.set(a[4], a[5], a[6]).length(),
                            h = t.set(a[8], a[9], a[10]).length();
                        0 > this.determinant() && (o = -o), i.x = a[12], i.y = a[13], i.z = a[14], e.elements.set(this.elements);
                        var u = 1 / o,
                            l = 1 / s,
                            c = 1 / h;
                        return e.elements[0] *= u, e.elements[1] *= u, e.elements[2] *= u, e.elements[4] *= l, e.elements[5] *= l, e.elements[6] *= l, e.elements[8] *= c, e.elements[9] *= c, e.elements[10] *= c, r.setFromRotationMatrix(e), n.x = o, n.y = s, n.z = h, this
                    }
                }(),
                makeFrustum: function(t, e, i, r, n, a) {
                    var o = this.elements;
                    return o[0] = 2 * n / (e - t), o[4] = 0, o[8] = (e + t) / (e - t), o[12] = 0, o[1] = 0, o[5] = 2 * n / (r - i), o[9] = (r + i) / (r - i), o[13] = 0, o[2] = 0, o[6] = 0, o[10] = -(a + n) / (a - n), o[14] = -2 * a * n / (a - n), o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
                },
                makePerspective: function(t, e, r, n) {
                    var a = r * i(M.Math.degToRad(.5 * t)),
                        o = -a;
                    return this.makeFrustum(o * e, a * e, o, a, r, n)
                },
                makeOrthographic: function(t, e, i, r, n, a) {
                    var o = this.elements,
                        s = 1 / (e - t),
                        h = 1 / (i - r),
                        u = 1 / (a - n);
                    return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -(e + t) * s, o[1] = 0, o[5] = 2 * h, o[9] = 0, o[13] = -(i + r) * h, o[2] = 0, o[6] = 0, o[10] = -2 * u, o[14] = -(a + n) * u, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
                },
                equals: function(t) {
                    for (var e = this.elements, i = t.elements, r = 0; 16 > r; r++)
                        if (e[r] !== i[r]) return !1;
                    return !0
                },
                fromArray: function(t) {
                    return this.elements.set(t), this
                },
                toArray: function() {
                    var t = this.elements;
                    return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]]
                }
            }, M.Plane = function(t, e) {
                this.normal = void 0 === t ? new M.Vector3(1, 0, 0) : t, this.constant = void 0 === e ? 0 : e
            }, M.Plane.prototype = {
                constructor: M.Plane,
                set: function(t, e) {
                    return this.normal.copy(t), this.constant = e, this
                },
                setComponents: function(t, e, i, r) {
                    return this.normal.set(t, e, i), this.constant = r, this
                },
                setFromNormalAndCoplanarPoint: function(t, e) {
                    return this.normal.copy(t), this.constant = -e.dot(this.normal), this
                },
                setFromCoplanarPoints: function() {
                    var t = new M.Vector3,
                        e = new M.Vector3;
                    return function(i, r, n) {
                        var a = t.subVectors(n, r).cross(e.subVectors(i, r)).normalize();
                        return this.setFromNormalAndCoplanarPoint(a, i), this
                    }
                }(),
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.normal.copy(t.normal), this.constant = t.constant, this
                },
                normalize: function() {
                    var t = 1 / this.normal.length();
                    return this.normal.multiplyScalar(t), this.constant *= t, this
                },
                negate: function() {
                    return this.constant *= -1, this.normal.negate(), this
                },
                distanceToPoint: function(t) {
                    return this.normal.dot(t) + this.constant
                },
                distanceToSphere: function(t) {
                    return this.distanceToPoint(t.center) - t.radius
                },
                projectPoint: function(t, e) {
                    return this.orthoPoint(t, e).sub(t).negate()
                },
                orthoPoint: function(t, e) {
                    var i = this.distanceToPoint(t);
                    return (e || new M.Vector3).copy(this.normal).multiplyScalar(i)
                },
                intersectLine: function() {
                    var t = new M.Vector3;
                    return function(e, i) {
                        var r = i || new M.Vector3,
                            n = e.delta(t),
                            a = this.normal.dot(n);
                        if (0 === a) return 0 === this.distanceToPoint(e.start) ? r.copy(e.start) : void 0;
                        var o = -(e.start.dot(this.normal) + this.constant) / a;
                        return 0 > o || 1 < o ? void 0 : r.copy(n).multiplyScalar(o).add(e.start)
                    }
                }(),
                intersectsLine: function(t) {
                    var e = this.distanceToPoint(t.start),
                        i = this.distanceToPoint(t.end);
                    return 0 > e && 0 < i || 0 > i && 0 < e
                },
                intersectsBox: function(t) {
                    return t.intersectsPlane(this)
                },
                intersectsSphere: function(t) {
                    return t.intersectsPlane(this)
                },
                coplanarPoint: function(t) {
                    return (t || new M.Vector3).copy(this.normal).multiplyScalar(-this.constant)
                },
                applyMatrix4: function() {
                    var t = new M.Vector3,
                        e = new M.Vector3,
                        i = new M.Matrix3;
                    return function(r, n) {
                        var a = n || i.getNormalMatrix(r),
                            o = t.copy(this.normal).applyMatrix3(a),
                            s = this.coplanarPoint(e);
                        return s.applyMatrix4(r), this.setFromNormalAndCoplanarPoint(o, s), this
                    }
                }(),
                translate: function(t) {
                    return this.constant -= t.dot(this.normal), this
                },
                equals: function(t) {
                    return t.normal.equals(this.normal) && t.constant === this.constant
                }
            }, M.Quaternion = function(t, e, i, r) {
                this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 === r ? 1 : r
            }, M.Quaternion.prototype = {
                constructor: M.Quaternion,
                get x() {
                    return this._x
                },
                set x(t) {
                    this._x = t, this.onChangeCallback()
                },
                get y() {
                    return this._y
                },
                set y(t) {
                    this._y = t, this.onChangeCallback()
                },
                get z() {
                    return this._z
                },
                set z(t) {
                    this._z = t, this.onChangeCallback()
                },
                get w() {
                    return this._w
                },
                set w(t) {
                    this._w = t, this.onChangeCallback()
                },
                set: function(t, e, i, r) {
                    return this._x = t, this._y = e, this._z = i, this._w = r, this.onChangeCallback(), this
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._w)
                },
                copy: function(t) {
                    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
                },
                setFromEuler: function(t, e) {
                    if (0 == t instanceof M.Euler) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                    var i = a(t._x / 2),
                        r = a(t._y / 2),
                        o = a(t._z / 2),
                        s = n(t._x / 2),
                        h = n(t._y / 2),
                        u = n(t._z / 2),
                        l = t.order;
                    return "XYZ" === l ? (this._x = s * r * o + i * h * u, this._y = i * h * o - s * r * u, this._z = i * r * u + s * h * o, this._w = i * r * o - s * h * u) : "YXZ" === l ? (this._x = s * r * o + i * h * u, this._y = i * h * o - s * r * u, this._z = i * r * u - s * h * o, this._w = i * r * o + s * h * u) : "ZXY" === l ? (this._x = s * r * o - i * h * u, this._y = i * h * o + s * r * u, this._z = i * r * u + s * h * o, this._w = i * r * o - s * h * u) : "ZYX" === l ? (this._x = s * r * o - i * h * u, this._y = i * h * o + s * r * u, this._z = i * r * u - s * h * o, this._w = i * r * o + s * h * u) : "YZX" === l ? (this._x = s * r * o + i * h * u, this._y = i * h * o + s * r * u, this._z = i * r * u - s * h * o, this._w = i * r * o - s * h * u) : "XZY" === l && (this._x = s * r * o - i * h * u, this._y = i * h * o - s * r * u, this._z = i * r * u + s * h * o, this._w = i * r * o + s * h * u), !1 !== e && this.onChangeCallback(), this
                },
                setFromAxisAngle: function(t, e) {
                    var i = e / 2,
                        r = n(i);
                    return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = a(i), this.onChangeCallback(), this
                },
                setFromRotationMatrix: function(t) {
                    var e, i = t.elements,
                        r = i[0],
                        n = i[4],
                        a = i[8],
                        o = i[1],
                        s = i[5],
                        h = i[9],
                        l = i[2],
                        c = i[6],
                        p = i[10],
                        d = r + s + p;
                    return 0 < d ? (e = .5 / u(d + 1), this._w = .25 / e, this._x = (c - h) * e, this._y = (a - l) * e, this._z = (o - n) * e) : r > s && r > p ? (e = 2 * u(1 + r - s - p), this._w = (c - h) / e, this._x = .25 * e, this._y = (n + o) / e, this._z = (a + l) / e) : s > p ? (e = 2 * u(1 + s - r - p), this._w = (a - l) / e, this._x = (n + o) / e, this._y = .25 * e, this._z = (h + c) / e) : (e = 2 * u(1 + p - r - s), this._w = (o - n) / e, this._x = (a + l) / e, this._y = (h + c) / e, this._z = .25 * e), this.onChangeCallback(), this
                },
                setFromUnitVectors: function() {
                    var t, e;
                    return function(i, r) {
                        return void 0 == t && (t = new M.Vector3), (e = i.dot(r) + 1) < 1e-6 ? (e = 0, s(i.x) > s(i.z) ? t.set(-i.y, i.x, 0) : t.set(0, -i.z, i.y)) : t.crossVectors(i, r), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize(), this
                    }
                }(),
                inverse: function() {
                    return this.conjugate().normalize(), this
                },
                conjugate: function() {
                    return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
                },
                dot: function(t) {
                    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
                },
                lengthSq: function() {
                    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
                },
                length: function() {
                    return u(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
                },
                normalize: function() {
                    var t = this.length();
                    return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x *= t, this._y *= t, this._z *= t, this._w *= t), this.onChangeCallback(), this
                },
                multiply: function(t, e) {
                    return void 0 === e ? this.multiplyQuaternions(this, t) : this.multiplyQuaternions(t, e)
                },
                multiplyQuaternions: function(t, e) {
                    var i = t._x,
                        r = t._y,
                        n = t._z,
                        a = t._w,
                        o = e._x,
                        s = e._y,
                        h = e._z,
                        u = e._w;
                    return this._x = i * u + a * o + r * h - n * s, this._y = r * u + a * s + n * o - i * h, this._z = n * u + a * h + i * s - r * o, this._w = a * u - i * o - r * s - n * h, this.onChangeCallback(), this
                },
                slerp: function(t, e) {
                    if (0 === e) return this;
                    if (1 === e) return this.copy(t);
                    var i = this._x,
                        r = this._y,
                        a = this._z,
                        h = this._w,
                        l = h * t._w + i * t._x + r * t._y + a * t._z;
                    if (0 > l ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, l = -l) : this.copy(t), 1 <= l) return this._w = h, this._x = i, this._y = r, this._z = a, this;
                    var c = u(1 - l * l);
                    if (.001 > s(c)) return this._w = .5 * (h + this._w), this._x = .5 * (i + this._x), this._y = .5 * (r + this._y), this._z = .5 * (a + this._z), this;
                    var p = o(c, l),
                        d = n((1 - e) * p) / c,
                        f = n(e * p) / c;
                    return this._w = h * d + this._w * f, this._x = i * d + this._x * f, this._y = r * d + this._y * f, this._z = a * d + this._z * f, this.onChangeCallback(), this
                },
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
                },
                onChange: function(t) {
                    return this.onChangeCallback = t, this
                },
                onChangeCallback: function() {}
            }, Object.assign(M.Quaternion, {
                slerp: function(t, e, i, r) {
                    return i.copy(t).slerp(e, r)
                },
                slerpFlat: function(t, e, i, r, a, s, h) {
                    var l = i[r + 0],
                        c = i[r + 1],
                        p = i[r + 2],
                        d = i[r + 3],
                        f = a[s + 0],
                        m = a[s + 1],
                        v = a[s + 2],
                        g = a[s + 3];
                    if (d !== g || l !== f || c !== m || p !== v) {
                        var y = 1 - h,
                            M = l * f + c * m + p * v + d * g,
                            _ = 0 <= M ? 1 : -1,
                            b = 1 - M * M;
                        if (b > x) {
                            var S = u(b),
                                w = o(S, M * _);
                            y = n(y * w) / S, h = n(h * w) / S
                        }
                        var E = h * _;
                        if (l = l * y + f * E, c = c * y + m * E, p = p * y + v * E, d = d * y + g * E, y == 1 - h) {
                            var T = 1 / u(l * l + c * c + p * p + d * d);
                            l *= T, c *= T, p *= T, d *= T
                        }
                    }
                    t[e] = l, t[e + 1] = c, t[e + 2] = p, t[e + 3] = d
                }
            }), M.Triangle = function(t, e, i) {
                this.a = void 0 === t ? new M.Vector3 : t, this.b = void 0 === e ? new M.Vector3 : e, this.c = void 0 === i ? new M.Vector3 : i
            }, M.Triangle.normal = function() {
                var t = new M.Vector3;
                return function(e, i, r, n) {
                    var a = n || new M.Vector3;
                    a.subVectors(r, i), t.subVectors(e, i), a.cross(t);
                    var o = a.lengthSq();
                    return 0 < o ? a.multiplyScalar(1 / u(o)) : a.set(0, 0, 0)
                }
            }(), M.Triangle.barycoordFromPoint = function() {
                var t = new M.Vector3,
                    e = new M.Vector3,
                    i = new M.Vector3;
                return function(r, n, a, o, s) {
                    t.subVectors(o, n), e.subVectors(a, n), i.subVectors(r, n);
                    var h = t.dot(t),
                        u = t.dot(e),
                        l = t.dot(i),
                        c = e.dot(e),
                        p = e.dot(i),
                        d = h * c - u * u,
                        f = s || new M.Vector3;
                    if (0 == d) return f.set(-2, -1, -1);
                    var m = 1 / d,
                        v = (c * l - u * p) * m,
                        g = (h * p - u * l) * m;
                    return f.set(1 - v - g, g, v)
                }
            }(), M.Triangle.containsPoint = function() {
                var t = new M.Vector3;
                return function(e, i, r, n) {
                    var a = M.Triangle.barycoordFromPoint(e, i, r, n, t);
                    return 0 <= a.x && 0 <= a.y && 1 >= a.x + a.y
                }
            }(), M.Triangle.prototype = {
                constructor: M.Triangle,
                set: function(t, e, i) {
                    return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
                },
                setFromPointsAndIndices: function(t, e, i, r) {
                    return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[r]), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
                },
                area: function() {
                    var t = new M.Vector3,
                        e = new M.Vector3;
                    return function() {
                        return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
                    }
                }(),
                midpoint: function(t) {
                    return (t || new M.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                },
                normal: function(t) {
                    return M.Triangle.normal(this.a, this.b, this.c, t)
                },
                plane: function(t) {
                    return (t || new M.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
                },
                barycoordFromPoint: function(t, e) {
                    return M.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e)
                },
                containsPoint: function(t) {
                    return M.Triangle.containsPoint(t, this.a, this.b, this.c)
                },
                equals: function(t) {
                    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
                }
            }, M.Box3 = function(t, e) {
                this.min = void 0 === t ? new M.Vector3(1 / 0, 1 / 0, 1 / 0) : t, this.max = void 0 === e ? new M.Vector3(-1 / 0, -1 / 0, -1 / 0) : e
            }, M.Box3.prototype = {
                constructor: M.Box3,
                set: function(t, e) {
                    return this.min.copy(t), this.max.copy(e), this
                },
                setFromArray: function(t) {
                    this.makeEmpty();
                    for (var e = 1 / 0, i = 1 / 0, r = 1 / 0, n = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, h = t.length; s < h; s += 3) {
                        var u = t[s],
                            l = t[s + 1],
                            c = t[s + 2];
                        u < e && (e = u), l < i && (i = l), c < r && (r = c), u > n && (n = u), l > a && (a = l), c > o && (o = c)
                    }
                    this.min.set(e, i, r), this.max.set(n, a, o)
                },
                setFromPoints: function(t) {
                    this.makeEmpty();
                    for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
                    return this
                },
                setFromCenterAndSize: function() {
                    var t = new M.Vector3;
                    return function(e, i) {
                        var r = t.copy(i).multiplyScalar(.5);
                        return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
                    }
                }(),
                setFromObject: function() {
                    var t;
                    return function(e) {
                        void 0 == t && (t = new M.Box3);
                        var i = this;
                        return this.makeEmpty(), e.updateMatrixWorld(!0), e.traverse(function(e) {
                            var r = e.geometry;
                            void 0 !== r && (null === r.boundingBox && r.computeBoundingBox(), !1 === r.boundingBox.isEmpty() && (t.copy(r.boundingBox), t.applyMatrix4(e.matrixWorld), i.union(t)))
                        }), this
                    }
                }(),
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.min.copy(t.min), this.max.copy(t.max), this
                },
                makeEmpty: function() {
                    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
                },
                isEmpty: function() {
                    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
                },
                center: function(t) {
                    return (t || new M.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
                },
                size: function(t) {
                    return (t || new M.Vector3).subVectors(this.max, this.min)
                },
                expandByPoint: function(t) {
                    return this.min.min(t), this.max.max(t), this
                },
                expandByVector: function(t) {
                    return this.min.sub(t), this.max.add(t), this
                },
                expandByScalar: function(t) {
                    return this.min.addScalar(-t), this.max.addScalar(t), this
                },
                containsPoint: function(t) {
                    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
                },
                containsBox: function(t) {
                    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
                },
                getParameter: function(t, e) {
                    return (e || new M.Vector3).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
                },
                intersectsBox: function(t) {
                    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
                },
                intersectsSphere: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Vector3), this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
                    }
                }(),
                intersectsPlane: function(t) {
                    var e, i;
                    return 0 < t.normal.x ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), 0 < t.normal.y ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), 0 < t.normal.z ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant
                },
                clampPoint: function(t, e) {
                    return (e || new M.Vector3).copy(t).clamp(this.min, this.max)
                },
                distanceToPoint: function() {
                    var t = new M.Vector3;
                    return function(e) {
                        return t.copy(e).clamp(this.min, this.max).sub(e).length()
                    }
                }(),
                getBoundingSphere: function() {
                    var t = new M.Vector3;
                    return function(e) {
                        var i = e || new M.Sphere;
                        return i.center = this.center(), i.radius = .5 * this.size(t).length(), i
                    }
                }(),
                intersect: function(t) {
                    return this.min.max(t.min), this.max.min(t.max), this
                },
                union: function(t) {
                    return this.min.min(t.min), this.max.max(t.max), this
                },
                applyMatrix4: function() {
                    var t = [new M.Vector3, new M.Vector3, new M.Vector3, new M.Vector3, new M.Vector3, new M.Vector3, new M.Vector3, new M.Vector3];
                    return function(e) {
                        return t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.makeEmpty(), this.setFromPoints(t), this
                    }
                }(),
                translate: function(t) {
                    return this.min.add(t), this.max.add(t), this
                },
                equals: function(t) {
                    return t.min.equals(this.min) && t.max.equals(this.max)
                }
            }, M.Euler = function(t, e, i, r) {
                this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = r || M.Euler.DefaultOrder
            }, M.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], M.Euler.DefaultOrder = "XYZ", M.Euler.prototype = {
                constructor: M.Euler,
                get x() {
                    return this._x
                },
                set x(t) {
                    this._x = t, this.onChangeCallback()
                },
                get y() {
                    return this._y
                },
                set y(t) {
                    this._y = t, this.onChangeCallback()
                },
                get z() {
                    return this._z
                },
                set z(t) {
                    this._z = t, this.onChangeCallback()
                },
                get order() {
                    return this._order
                },
                set order(t) {
                    this._order = t, this.onChangeCallback()
                },
                set: function(t, e, i, r) {
                    return this._x = t, this._y = e, this._z = i, this._order = r || this._order, this.onChangeCallback(), this
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._order)
                },
                copy: function(t) {
                    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
                },
                setFromRotationMatrix: function(t, e, i) {
                    var r = Math.asin,
                        n = M.Math.clamp,
                        a = t.elements,
                        h = a[0],
                        u = a[4],
                        l = a[8],
                        c = a[1],
                        p = a[5],
                        d = a[9],
                        f = a[2],
                        m = a[6],
                        v = a[10];
                    return "XYZ" === (e = e || this._order) ? (this._y = r(n(l, -1, 1)), .99999 > s(l) ? (this._x = o(-d, v), this._z = o(-u, h)) : (this._x = o(m, p), this._z = 0)) : "YXZ" === e ? (this._x = r(-n(d, -1, 1)), .99999 > s(d) ? (this._y = o(l, v), this._z = o(c, p)) : (this._y = o(-f, h), this._z = 0)) : "ZXY" === e ? (this._x = r(n(m, -1, 1)), .99999 > s(m) ? (this._y = o(-f, v), this._z = o(-u, p)) : (this._y = 0, this._z = o(c, h))) : "ZYX" === e ? (this._y = r(-n(f, -1, 1)), .99999 > s(f) ? (this._x = o(m, v), this._z = o(c, h)) : (this._x = 0, this._z = o(-u, p))) : "YZX" === e ? (this._z = r(n(c, -1, 1)), .99999 > s(c) ? (this._x = o(-d, p), this._y = o(-f, h)) : (this._x = 0, this._y = o(l, v))) : "XZY" === e && (this._z = r(-n(u, -1, 1)), .99999 > s(u) ? (this._x = o(m, p), this._y = o(l, h)) : (this._x = o(-d, v), this._y = 0)), this._order = e, !1 !== i && this.onChangeCallback(), this
                },
                setFromQuaternion: function() {
                    var t;
                    return function(e, i, r) {
                        return void 0 == t && (t = new M.Matrix4), t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, r), this
                    }
                }(),
                setFromVector3: function(t, e) {
                    return this.set(t.x, t.y, t.z, e || this._order)
                },
                reorder: function() {
                    var t = new M.Quaternion;
                    return function(e) {
                        t.setFromEuler(this), this.setFromQuaternion(t, e)
                    }
                }(),
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
                },
                fromArray: function(t) {
                    return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
                },
                toVector3: function(t) {
                    return t ? t.set(this._x, this._y, this._z) : new M.Vector3(this._x, this._y, this._z)
                },
                onChange: function(t) {
                    return this.onChangeCallback = t, this
                },
                onChangeCallback: function() {}
            }, M.Ray = function(t, e) {
                this.origin = void 0 === t ? new M.Vector3 : t, this.direction = void 0 === e ? new M.Vector3 : e
            }, M.Ray.prototype = {
                constructor: M.Ray,
                set: function(t, e) {
                    return this.origin.copy(t), this.direction.copy(e), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.origin.copy(t.origin), this.direction.copy(t.direction), this
                },
                at: function(t, e) {
                    return (e || new M.Vector3).copy(this.direction).multiplyScalar(t).add(this.origin)
                },
                lookAt: function(t) {
                    this.direction.copy(t).sub(this.origin).normalize()
                },
                recast: function() {
                    var t = new M.Vector3;
                    return function(e) {
                        return this.origin.copy(this.at(e, t)), this
                    }
                }(),
                closestPointToPoint: function(t, e) {
                    var i = e || new M.Vector3;
                    i.subVectors(t, this.origin);
                    var r = i.dot(this.direction);
                    return 0 > r ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(r).add(this.origin)
                },
                distanceToPoint: function(t) {
                    return u(this.distanceSqToPoint(t))
                },
                distanceSqToPoint: function() {
                    var t = new M.Vector3;
                    return function(e) {
                        var i = t.subVectors(e, this.origin).dot(this.direction);
                        return 0 > i ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
                    }
                }(),
                distanceSqToSegment: function() {
                    var t = new M.Vector3,
                        e = new M.Vector3,
                        i = new M.Vector3;
                    return function(r, n, a, o) {
                        t.copy(r).add(n).multiplyScalar(.5), e.copy(n).sub(r).normalize(), i.copy(this.origin).sub(t);
                        var h, u, l, c, p = .5 * r.distanceTo(n),
                            d = -this.direction.dot(e),
                            f = i.dot(this.direction),
                            m = -i.dot(e),
                            y = i.lengthSq(),
                            x = s(1 - d * d);
                        if (0 < x)
                            if (h = d * m - f, u = d * f - m, c = p * x, 0 <= h)
                                if (u >= -c)
                                    if (u <= c) {
                                        var M = 1 / x;
                                        l = (h *= M) * (h + d * (u *= M) + 2 * f) + u * (d * h + u + 2 * m) + y
                                    } else u = p, h = v(0, -(d * u + f)), l = -h * h + u * (u + 2 * m) + y;
                        else u = -p, h = v(0, -(d * u + f)), l = -h * h + u * (u + 2 * m) + y;
                        else u <= -c ? (h = v(0, -(-d * p + f)), u = 0 < h ? -p : g(v(-p, -m), p), l = -h * h + u * (u + 2 * m) + y) : u <= c ? (h = 0, u = g(v(-p, -m), p), l = u * (u + 2 * m) + y) : (h = v(0, -(d * p + f)), u = 0 < h ? p : g(v(-p, -m), p), l = -h * h + u * (u + 2 * m) + y);
                        else u = 0 < d ? -p : p, h = v(0, -(d * u + f)), l = -h * h + u * (u + 2 * m) + y;
                        return a && a.copy(this.direction).multiplyScalar(h).add(this.origin), o && o.copy(e).multiplyScalar(u).add(t), l
                    }
                }(),
                intersectSphere: function() {
                    var t = new M.Vector3;
                    return function(e, i) {
                        t.subVectors(e.center, this.origin);
                        var r = t.dot(this.direction),
                            n = t.dot(t) - r * r,
                            a = e.radius * e.radius;
                        if (n > a) return null;
                        var o = u(a - n),
                            s = r - o,
                            h = r + o;
                        return 0 > s && 0 > h ? null : 0 > s ? this.at(h, i) : this.at(s, i)
                    }
                }(),
                intersectsSphere: function(t) {
                    return this.distanceToPoint(t.center) <= t.radius
                },
                distanceToPlane: function(t) {
                    var e = t.normal.dot(this.direction);
                    if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                    var i = -(this.origin.dot(t.normal) + t.constant) / e;
                    return 0 <= i ? i : null
                },
                intersectPlane: function(t, e) {
                    var i = this.distanceToPlane(t);
                    return null === i ? null : this.at(i, e)
                },
                intersectsPlane: function(t) {
                    var e = t.distanceToPoint(this.origin);
                    return 0 === e || !!(0 > t.normal.dot(this.direction) * e)
                },
                intersectBox: function(t, e) {
                    var i, r, n, a, o, s, h = 1 / this.direction.x,
                        u = 1 / this.direction.y,
                        l = 1 / this.direction.z,
                        c = this.origin;
                    return 0 <= h ? (i = (t.min.x - c.x) * h, r = (t.max.x - c.x) * h) : (i = (t.max.x - c.x) * h, r = (t.min.x - c.x) * h), 0 <= u ? (n = (t.min.y - c.y) * u, a = (t.max.y - c.y) * u) : (n = (t.max.y - c.y) * u, a = (t.min.y - c.y) * u), i > a || n > r ? null : ((n > i || i !== i) && (i = n), (a < r || r !== r) && (r = a), 0 <= l ? (o = (t.min.z - c.z) * l, s = (t.max.z - c.z) * l) : (o = (t.max.z - c.z) * l, s = (t.min.z - c.z) * l), i > s || o > r ? null : ((o > i || i !== i) && (i = o), (s < r || r !== r) && (r = s), 0 > r ? null : this.at(0 <= i ? i : r, e)))
                },
                intersectsBox: function() {
                    var t = new M.Vector3;
                    return function(e) {
                        return null !== this.intersectBox(e, t)
                    }
                }(),
                intersectTriangle: function() {
                    var t = new M.Vector3,
                        e = new M.Vector3,
                        i = new M.Vector3,
                        r = new M.Vector3;
                    return function(n, a, o, s, h) {
                        e.subVectors(a, n), i.subVectors(o, n), r.crossVectors(e, i);
                        var u, l = this.direction.dot(r);
                        if (0 < l) {
                            if (s) return null;
                            u = 1
                        } else {
                            if (!(0 > l)) return null;
                            u = -1, l = -l
                        }
                        t.subVectors(this.origin, n);
                        var c = u * this.direction.dot(i.crossVectors(t, i));
                        if (0 > c) return null;
                        var p = u * this.direction.dot(e.cross(t));
                        if (0 > p) return null;
                        if (c + p > l) return null;
                        var d = -u * t.dot(r);
                        return 0 > d ? null : this.at(d / l, h)
                    }
                }(),
                applyMatrix4: function(t) {
                    return this.direction.add(this.origin).applyMatrix4(t), this.origin.applyMatrix4(t), this.direction.sub(this.origin), this.direction.normalize(), this
                },
                equals: function(t) {
                    return t.origin.equals(this.origin) && t.direction.equals(this.direction)
                }
            }, M.Sphere = function(t, e) {
                this.center = void 0 === t ? new M.Vector3 : t, this.radius = void 0 === e ? 0 : e
            }, M.Sphere.prototype = {
                constructor: M.Sphere,
                set: function(t, e) {
                    return this.center.copy(t), this.radius = e, this
                },
                setFromPoints: function() {
                    var t = new M.Box3;
                    return function(e, i) {
                        var r = this.center;
                        void 0 === i ? t.setFromPoints(e).center(r) : r.copy(i);
                        for (var n = 0, a = 0, o = e.length; a < o; a++) n = v(n, r.distanceToSquared(e[a]));
                        return this.radius = u(n), this
                    }
                }(),
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.center.copy(t.center), this.radius = t.radius, this
                },
                empty: function() {
                    return 0 >= this.radius
                },
                containsPoint: function(t) {
                    return t.distanceToSquared(this.center) <= this.radius * this.radius
                },
                distanceToPoint: function(t) {
                    return t.distanceTo(this.center) - this.radius
                },
                intersectsSphere: function(t) {
                    var e = this.radius + t.radius;
                    return t.center.distanceToSquared(this.center) <= e * e
                },
                intersectsBox: function(t) {
                    return t.intersectsSphere(this)
                },
                intersectsPlane: function(t) {
                    return s(this.center.dot(t.normal) - t.constant) <= this.radius
                },
                clampPoint: function(t, e) {
                    var i = this.center.distanceToSquared(t),
                        r = e || new M.Vector3;
                    return r.copy(t), i > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
                },
                getBoundingBox: function(t) {
                    var e = t || new M.Box3;
                    return e.set(this.center, this.center), e.expandByScalar(this.radius), e
                },
                applyMatrix4: function(t) {
                    return this.center.applyMatrix4(t), this.radius *= t.getMaxScaleOnAxis(), this
                },
                translate: function(t) {
                    return this.center.add(t), this
                },
                equals: function(t) {
                    return t.center.equals(this.center) && t.radius === this.radius
                }
            }, M.Frustum = function(t, e, i, r, n, a) {
                this.planes = [void 0 === t ? new M.Plane : t, void 0 === e ? new M.Plane : e, void 0 === i ? new M.Plane : i, void 0 === r ? new M.Plane : r, void 0 === n ? new M.Plane : n, void 0 === a ? new M.Plane : a]
            }, M.Frustum.prototype = {
                constructor: M.Frustum,
                set: function(t, e, i, r, n, a) {
                    var o = this.planes;
                    return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(r), o[4].copy(n), o[5].copy(a), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    for (var e = this.planes, i = 0; 6 > i; i++) e[i].copy(t.planes[i]);
                    return this
                },
                setFromMatrix: function(t) {
                    var e = this.planes,
                        i = t.elements,
                        r = i[0],
                        n = i[1],
                        a = i[2],
                        o = i[3],
                        s = i[4],
                        h = i[5],
                        u = i[6],
                        l = i[7],
                        c = i[8],
                        p = i[9],
                        d = i[10],
                        f = i[11],
                        m = i[12],
                        v = i[13],
                        g = i[14],
                        y = i[15];
                    return e[0].setComponents(o - r, l - s, f - c, y - m).normalize(), e[1].setComponents(o + r, l + s, f + c, y + m).normalize(), e[2].setComponents(o + n, l + h, f + p, y + v).normalize(), e[3].setComponents(o - n, l - h, f - p, y - v).normalize(), e[4].setComponents(o - a, l - u, f - d, y - g).normalize(), e[5].setComponents(o + a, l + u, f + d, y + g).normalize(), this
                },
                intersectsObject: function() {
                    var t = new M.Sphere;
                    return function(e) {
                        var i = e.geometry;
                        return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i.boundingSphere), t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
                    }
                }(),
                intersectsSphere: function(t) {
                    for (var e = this.planes, i = t.center, r = -t.radius, n = 0; 6 > n; n++)
                        if (e[n].distanceToPoint(i) < r) return !1;
                    return !0
                },
                intersectsBox: function() {
                    var t = new M.Vector3,
                        e = new M.Vector3;
                    return function(i) {
                        for (var r, n = this.planes, a = 0; 6 > a; a++) {
                            r = n[a], t.x = 0 < r.normal.x ? i.min.x : i.max.x, e.x = 0 < r.normal.x ? i.max.x : i.min.x, t.y = 0 < r.normal.y ? i.min.y : i.max.y, e.y = 0 < r.normal.y ? i.max.y : i.min.y, t.z = 0 < r.normal.z ? i.min.z : i.max.z, e.z = 0 < r.normal.z ? i.max.z : i.min.z;
                            var o = r.distanceToPoint(t),
                                s = r.distanceToPoint(e);
                            if (0 > o && 0 > s) return !1
                        }
                        return !0
                    }
                }(),
                containsPoint: function(t) {
                    for (var e = this.planes, i = 0; 6 > i; i++)
                        if (0 > e[i].distanceToPoint(t)) return !1;
                    return !0
                }
            }, M.EventDispatcher = function() {}, M.EventDispatcher.prototype = {
                constructor: M.EventDispatcher,
                apply: function(t) {
                    t.addEventListener = M.EventDispatcher.prototype.addEventListener, t.hasEventListener = M.EventDispatcher.prototype.hasEventListener, t.removeEventListener = M.EventDispatcher.prototype.removeEventListener, t.dispatchEvent = M.EventDispatcher.prototype.dispatchEvent
                },
                addEventListener: function(t, e) {
                    void 0 === this._listeners && (this._listeners = {});
                    var i = this._listeners;
                    void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
                },
                hasEventListener: function(t, e) {
                    if (void 0 === this._listeners) return !1;
                    var i = this._listeners;
                    return void 0 !== i[t] && -1 !== i[t].indexOf(e)
                },
                removeEventListener: function(t, e) {
                    if (void 0 !== this._listeners) {
                        var i = this._listeners[t];
                        if (void 0 !== i) {
                            var r = i.indexOf(e); - 1 !== r && i.splice(r, 1)
                        }
                    }
                },
                dispatchEvent: function(t) {
                    if (void 0 !== this._listeners) {
                        var e = this._listeners[t.type];
                        if (void 0 !== e) {
                            t.target = this;
                            for (var i = [], r = e.length, n = 0; n < r; n++) i[n] = e[n];
                            for (n = 0; n < r; n++) i[n].call(this, t)
                        }
                    }
                }
            }, M.Layers = function() {
                this.mask = 1
            }, M.Layers.prototype = {
                constructor: M.Layers,
                set: function(t) {
                    this.mask = 1 << t
                },
                enable: function(t) {
                    this.mask |= 1 << t
                },
                toggle: function(t) {
                    this.mask ^= 1 << t
                },
                disable: function(t) {
                    this.mask &= ~(1 << t)
                },
                test: function(t) {
                    return 0 != (this.mask & t.mask)
                }
            }, M.Object3D = function() {
                Object.defineProperty(this, "id", {
                    value: M.Object3DIdCount++
                }), this.uuid = M.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = M.Object3D.DefaultUp.clone();
                var t = new M.Vector3,
                    e = new M.Euler,
                    i = new M.Quaternion,
                    r = new M.Vector3(1, 1, 1);
                e.onChange(function() {
                    i.setFromEuler(e, !1)
                }), i.onChange(function() {
                    e.setFromQuaternion(i, void 0, !1)
                }), Object.defineProperties(this, {
                    position: {
                        enumerable: !0,
                        value: t
                    },
                    rotation: {
                        enumerable: !0,
                        value: e
                    },
                    quaternion: {
                        enumerable: !0,
                        value: i
                    },
                    scale: {
                        enumerable: !0,
                        value: r
                    },
                    modelViewMatrix: {
                        value: new M.Matrix4
                    },
                    normalMatrix: {
                        value: new M.Matrix3
                    }
                }), this.rotationAutoUpdate = !0, this.matrix = new M.Matrix4, this.matrixWorld = new M.Matrix4, this.matrixAutoUpdate = M.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new M.Layers, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
            }, M.Object3D.DefaultUp = new M.Vector3(0, 1, 0), M.Object3D.DefaultMatrixAutoUpdate = !0, M.Object3D.prototype = {
                constructor: M.Object3D,
                applyMatrix: function(t) {
                    this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
                },
                setRotationFromAxisAngle: function(t, e) {
                    this.quaternion.setFromAxisAngle(t, e)
                },
                setRotationFromEuler: function(t) {
                    this.quaternion.setFromEuler(t, !0)
                },
                setRotationFromMatrix: function(t) {
                    this.quaternion.setFromRotationMatrix(t)
                },
                setRotationFromQuaternion: function(t) {
                    this.quaternion.copy(t)
                },
                rotateOnAxis: function() {
                    var t = new M.Quaternion;
                    return function(e, i) {
                        return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this
                    }
                }(),
                rotateX: function() {
                    var t = new M.Vector3(1, 0, 0);
                    return function(e) {
                        return this.rotateOnAxis(t, e)
                    }
                }(),
                rotateY: function() {
                    var t = new M.Vector3(0, 1, 0);
                    return function(e) {
                        return this.rotateOnAxis(t, e)
                    }
                }(),
                rotateZ: function() {
                    var t = new M.Vector3(0, 0, 1);
                    return function(e) {
                        return this.rotateOnAxis(t, e)
                    }
                }(),
                translateOnAxis: function() {
                    var t = new M.Vector3;
                    return function(e, i) {
                        return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
                    }
                }(),
                translateX: function() {
                    var t = new M.Vector3(1, 0, 0);
                    return function(e) {
                        return this.translateOnAxis(t, e)
                    }
                }(),
                translateY: function() {
                    var t = new M.Vector3(0, 1, 0);
                    return function(e) {
                        return this.translateOnAxis(t, e)
                    }
                }(),
                translateZ: function() {
                    var t = new M.Vector3(0, 0, 1);
                    return function(e) {
                        return this.translateOnAxis(t, e)
                    }
                }(),
                localToWorld: function(t) {
                    return t.applyMatrix4(this.matrixWorld)
                },
                worldToLocal: function() {
                    var t = new M.Matrix4;
                    return function(e) {
                        return e.applyMatrix4(t.getInverse(this.matrixWorld))
                    }
                }(),
                lookAt: function() {
                    var t = new M.Matrix4;
                    return function(e) {
                        t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
                    }
                }(),
                add: function(t) {
                    if (1 < arguments.length) {
                        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                        return this
                    }
                    return t === this ? this : (t instanceof M.Object3D && (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                        type: "added"
                    }), this.children.push(t)), this)
                },
                remove: function(t) {
                    if (1 < arguments.length)
                        for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                    var i = this.children.indexOf(t); - 1 !== i && (t.parent = null, t.dispatchEvent({
                        type: "removed"
                    }), this.children.splice(i, 1))
                },
                getObjectById: function(t) {
                    return this.getObjectByProperty("id", t)
                },
                getObjectByName: function(t) {
                    return this.getObjectByProperty("name", t)
                },
                getObjectByProperty: function(t, e) {
                    if (this[t] === e) return this;
                    for (var i = 0, r = this.children.length; i < r; i++) {
                        var n = this.children[i].getObjectByProperty(t, e);
                        if (void 0 !== n) return n
                    }
                },
                getWorldPosition: function(t) {
                    var e = t || new M.Vector3;
                    return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
                },
                getWorldQuaternion: function() {
                    var t = new M.Vector3,
                        e = new M.Vector3;
                    return function(i) {
                        var r = i || new M.Quaternion;
                        return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, r, e), r
                    }
                }(),
                getWorldRotation: function() {
                    var t = new M.Quaternion;
                    return function(e) {
                        var i = e || new M.Euler;
                        return this.getWorldQuaternion(t), i.setFromQuaternion(t, this.rotation.order, !1)
                    }
                }(),
                getWorldScale: function() {
                    var t = new M.Vector3,
                        e = new M.Quaternion;
                    return function(i) {
                        var r = i || new M.Vector3;
                        return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, r), r
                    }
                }(),
                getWorldDirection: function() {
                    var t = new M.Quaternion;
                    return function(e) {
                        var i = e || new M.Vector3;
                        return this.getWorldQuaternion(t), i.set(0, 0, 1).applyQuaternion(t)
                    }
                }(),
                raycast: function() {},
                traverse: function(t) {
                    t(this);
                    for (var e = this.children, i = 0, r = e.length; i < r; i++) e[i].traverse(t)
                },
                traverseVisible: function(t) {
                    if (!1 !== this.visible) {
                        t(this);
                        for (var e = this.children, i = 0, r = e.length; i < r; i++) e[i].traverseVisible(t)
                    }
                },
                traverseAncestors: function(t) {
                    var e = this.parent;
                    null !== e && (t(e), e.traverseAncestors(t))
                },
                updateMatrix: function() {
                    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                },
                updateMatrixWorld: function(t) {
                    !0 === this.matrixAutoUpdate && this.updateMatrix(), (!0 === this.matrixWorldNeedsUpdate || !0 === t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                    for (var e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t)
                },
                toJSON: function(t) {
                    function e(t) {
                        var e = [];
                        for (var i in t) {
                            var r = t[i];
                            delete r.metadata, e.push(r)
                        }
                        return e
                    }
                    var i = void 0 === t,
                        r = {};
                    i && (t = {
                        geometries: {},
                        materials: {},
                        textures: {},
                        images: {}
                    }, r.metadata = {
                        version: 4.4,
                        type: "Object",
                        generator: "Object3D.toJSON"
                    });
                    var n = {};
                    if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), n.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)), n.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)), n.material = this.material.uuid), 0 < this.children.length) {
                        n.children = [];
                        for (var a = 0; a < this.children.length; a++) n.children.push(this.children[a].toJSON(t).object)
                    }
                    if (i) {
                        var o = e(t.geometries),
                            s = e(t.materials),
                            h = e(t.textures),
                            u = e(t.images);
                        0 < o.length && (r.geometries = o), 0 < s.length && (r.materials = s), 0 < h.length && (r.textures = h), 0 < u.length && (r.images = u)
                    }
                    return r.object = n, r
                },
                clone: function(t) {
                    return (new this.constructor).copy(this, t)
                },
                copy: function(t, e) {
                    if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.rotationAutoUpdate = t.rotationAutoUpdate, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                        for (var i, r = 0; r < t.children.length; r++) i = t.children[r], this.add(i.clone());
                    return this
                }
            }, M.EventDispatcher.prototype.apply(M.Object3D.prototype), M.Object3DIdCount = 0, M.Face3 = function(t, e, i, r, n, a) {
                this.a = t, this.b = e, this.c = i, this.normal = r instanceof M.Vector3 ? r : new M.Vector3, this.vertexNormals = Array.isArray(r) ? r : [], this.color = n instanceof M.Color ? n : new M.Color, this.vertexColors = Array.isArray(n) ? n : [], this.materialIndex = void 0 === a ? 0 : a
            }, M.Face3.prototype = {
                constructor: M.Face3,
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
                    for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
                    for (var e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
                    return this
                }
            }, M.BufferAttribute = function(t, e) {
                this.uuid = M.Math.generateUUID(), this.array = t, this.itemSize = e, this.dynamic = !1, this.updateRange = {
                    offset: 0,
                    count: -1
                }, this.version = 0
            }, M.BufferAttribute.prototype = {
                constructor: M.BufferAttribute,
                get count() {
                    return this.array.length / this.itemSize
                },
                set needsUpdate(t) {
                    !0 === t && this.version++
                },
                setDynamic: function(t) {
                    return this.dynamic = t, this
                },
                copy: function(t) {
                    return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.dynamic = t.dynamic, this
                },
                copyAt: function(t, e, i) {
                    t *= this.itemSize, i *= e.itemSize;
                    for (var r = 0, n = this.itemSize; r < n; r++) this.array[t + r] = e.array[i + r];
                    return this
                },
                copyArray: function(t) {
                    return this.array.set(t), this
                },
                copyColorsArray: function(t) {
                    for (var e, i = this.array, r = 0, n = 0, a = t.length; n < a; n++) void 0 === (e = t[n]) && (e = new M.Color), i[r++] = e.r, i[r++] = e.g, i[r++] = e.b;
                    return this
                },
                copyIndicesArray: function(t) {
                    for (var e, i = this.array, r = 0, n = 0, a = t.length; n < a; n++) e = t[n], i[r++] = e.a, i[r++] = e.b, i[r++] = e.c;
                    return this
                },
                copyVector2sArray: function(t) {
                    for (var e, i = this.array, r = 0, n = 0, a = t.length; n < a; n++) void 0 === (e = t[n]) && (e = new M.Vector2), i[r++] = e.x, i[r++] = e.y;
                    return this
                },
                copyVector3sArray: function(t) {
                    for (var e, i = this.array, r = 0, n = 0, a = t.length; n < a; n++) void 0 === (e = t[n]) && (e = new M.Vector3), i[r++] = e.x, i[r++] = e.y, i[r++] = e.z;
                    return this
                },
                copyVector4sArray: function(t) {
                    for (var e, i = this.array, r = 0, n = 0, a = t.length; n < a; n++) void 0 === (e = t[n]) && (e = new M.Vector4), i[r++] = e.x, i[r++] = e.y, i[r++] = e.z, i[r++] = e.w;
                    return this
                },
                set: function(t, e) {
                    return void 0 === e && (e = 0), this.array.set(t, e), this
                },
                getX: function(t) {
                    return this.array[t * this.itemSize]
                },
                setX: function(t, e) {
                    return this.array[t * this.itemSize] = e, this
                },
                getY: function(t) {
                    return this.array[t * this.itemSize + 1]
                },
                setY: function(t, e) {
                    return this.array[t * this.itemSize + 1] = e, this
                },
                getZ: function(t) {
                    return this.array[t * this.itemSize + 2]
                },
                setZ: function(t, e) {
                    return this.array[t * this.itemSize + 2] = e, this
                },
                getW: function(t) {
                    return this.array[t * this.itemSize + 3]
                },
                setW: function(t, e) {
                    return this.array[t * this.itemSize + 3] = e, this
                },
                setXY: function(t, e, i) {
                    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
                },
                setXYZ: function(t, e, i, r) {
                    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = r, this
                },
                setXYZW: function(t, e, i, r, n) {
                    return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = r, this.array[t + 3] = n, this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                }
            }, M.Int8Attribute = function(t, e) {
                return new M.BufferAttribute(new Int8Array(t), e)
            }, M.Uint8Attribute = function(t, e) {
                return new M.BufferAttribute(new Uint8Array(t), e)
            }, M.Uint8ClampedAttribute = function(t, e) {
                return new M.BufferAttribute(new Uint8ClampedArray(t), e)
            }, M.Int16Attribute = function(t, e) {
                return new M.BufferAttribute(new Int16Array(t), e)
            }, M.Uint16Attribute = function(t, e) {
                return new M.BufferAttribute(new Uint16Array(t), e)
            }, M.Int32Attribute = function(t, e) {
                return new M.BufferAttribute(new Int32Array(t), e)
            }, M.Uint32Attribute = function(t, e) {
                return new M.BufferAttribute(new Uint32Array(t), e)
            }, M.Float32Attribute = function(t, e) {
                return new M.BufferAttribute(new Float32Array(t), e)
            }, M.Float64Attribute = function(t, e) {
                return new M.BufferAttribute(new Float64Array(t), e)
            }, M.DynamicBufferAttribute = function(t, e) {
                return new M.BufferAttribute(t, e).setDynamic(!0)
            }, M.InstancedBufferAttribute = function(t, e, i) {
                M.BufferAttribute.call(this, t, e), this.meshPerAttribute = i || 1
            }, M.InstancedBufferAttribute.prototype = Object.create(M.BufferAttribute.prototype), M.InstancedBufferAttribute.prototype.constructor = M.InstancedBufferAttribute, M.InstancedBufferAttribute.prototype.copy = function(t) {
                return M.BufferAttribute.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
            }, M.BufferGeometry = function() {
                Object.defineProperty(this, "id", {
                    value: M.GeometryIdCount++
                }), this.uuid = M.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                    start: 0,
                    count: 1 / 0
                }
            }, M.BufferGeometry.prototype = {
                constructor: M.BufferGeometry,
                getIndex: function() {
                    return this.index
                },
                setIndex: function(t) {
                    this.index = t
                },
                addAttribute: function(t, e) {
                    return 0 == e instanceof M.BufferAttribute && 0 == e instanceof M.InterleavedBufferAttribute ? void this.addAttribute(t, new M.BufferAttribute(arguments[1], arguments[2])) : "index" === t ? void this.setIndex(e) : (this.attributes[t] = e, this)
                },
                getAttribute: function(t) {
                    return this.attributes[t]
                },
                removeAttribute: function(t) {
                    return delete this.attributes[t], this
                },
                addGroup: function(t, e, i) {
                    this.groups.push({
                        start: t,
                        count: e,
                        materialIndex: void 0 === i ? 0 : i
                    })
                },
                clearGroups: function() {
                    this.groups = []
                },
                setDrawRange: function(t, e) {
                    this.drawRange.start = t, this.drawRange.count = e
                },
                applyMatrix: function(t) {
                    var e = this.attributes.position;
                    void 0 !== e && (t.applyToVector3Array(e.array), e.needsUpdate = !0);
                    var i = this.attributes.normal;
                    return void 0 !== i && ((new M.Matrix3).getNormalMatrix(t).applyToVector3Array(i.array), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                },
                rotateX: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
                    }
                }(),
                rotateY: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
                    }
                }(),
                rotateZ: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
                    }
                }(),
                translate: function() {
                    var t;
                    return function(e, i, r) {
                        return void 0 == t && (t = new M.Matrix4), t.makeTranslation(e, i, r), this.applyMatrix(t), this
                    }
                }(),
                scale: function() {
                    var t;
                    return function(e, i, r) {
                        return void 0 == t && (t = new M.Matrix4), t.makeScale(e, i, r), this.applyMatrix(t), this
                    }
                }(),
                lookAt: function() {
                    var t;
                    return function(e) {
                        void 0 == t && (t = new M.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                    }
                }(),
                center: function() {
                    this.computeBoundingBox();
                    var t = this.boundingBox.center().negate();
                    return this.translate(t.x, t.y, t.z), t
                },
                setFromObject: function(t) {
                    var e = t.geometry;
                    if (t instanceof M.Points || t instanceof M.Line) {
                        var i = new M.Float32Attribute(3 * e.vertices.length, 3),
                            r = new M.Float32Attribute(3 * e.colors.length, 3);
                        if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", r.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                            var n = new M.Float32Attribute(e.lineDistances.length, 1);
                            this.addAttribute("lineDistance", n.copyArray(e.lineDistances))
                        }
                        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
                    } else t instanceof M.Mesh && e instanceof M.Geometry && this.fromGeometry(e);
                    return this
                },
                updateFromObject: function(t) {
                    var e = t.geometry;
                    if (t instanceof M.Mesh) {
                        var i = e.__directGeometry;
                        if (void 0 === i) return this.fromGeometry(e);
                        i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate, i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = i
                    }
                    if (!0 === e.verticesNeedUpdate && (void 0 !== (r = this.attributes.position) && (r.copyVector3sArray(e.vertices), r.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (void 0 !== (r = this.attributes.normal) && (r.copyVector3sArray(e.normals), r.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (void 0 !== (r = this.attributes.color) && (r.copyColorsArray(e.colors), r.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (void 0 !== (r = this.attributes.uv) && (r.copyVector2sArray(e.uvs), r.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate) {
                        var r = this.attributes.lineDistance;
                        void 0 !== r && (r.copyArray(e.lineDistances), r.needsUpdate = !0), e.lineDistancesNeedUpdate = !1
                    }
                    return e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
                },
                fromGeometry: function(t) {
                    return t.__directGeometry = (new M.DirectGeometry).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
                },
                fromDirectGeometry: function(t) {
                    var e = new Float32Array(3 * t.vertices.length);
                    if (this.addAttribute("position", new M.BufferAttribute(e, 3).copyVector3sArray(t.vertices)), 0 < t.normals.length) {
                        var i = new Float32Array(3 * t.normals.length);
                        this.addAttribute("normal", new M.BufferAttribute(i, 3).copyVector3sArray(t.normals))
                    }
                    if (0 < t.colors.length) {
                        var r = new Float32Array(3 * t.colors.length);
                        this.addAttribute("color", new M.BufferAttribute(r, 3).copyColorsArray(t.colors))
                    }
                    if (0 < t.uvs.length) {
                        var n = new Float32Array(2 * t.uvs.length);
                        this.addAttribute("uv", new M.BufferAttribute(n, 2).copyVector2sArray(t.uvs))
                    }
                    if (0 < t.uvs2.length) {
                        var a = new Float32Array(2 * t.uvs2.length);
                        this.addAttribute("uv2", new M.BufferAttribute(a, 2).copyVector2sArray(t.uvs2))
                    }
                    if (0 < t.indices.length) {
                        var o = new(65535 < t.vertices.length ? Uint32Array : Uint16Array)(3 * t.indices.length);
                        this.setIndex(new M.BufferAttribute(o, 1).copyIndicesArray(t.indices))
                    }
                    for (var s in this.groups = t.groups, t.morphTargets) {
                        for (var h = [], u = t.morphTargets[s], l = 0, c = u.length; l < c; l++) {
                            var p = u[l],
                                d = new M.Float32Attribute(3 * p.length, 3);
                            h.push(d.copyVector3sArray(p))
                        }
                        this.morphAttributes[s] = h
                    }
                    if (0 < t.skinIndices.length) {
                        var f = new M.Float32Attribute(4 * t.skinIndices.length, 4);
                        this.addAttribute("skinIndex", f.copyVector4sArray(t.skinIndices))
                    }
                    if (0 < t.skinWeights.length) {
                        var m = new M.Float32Attribute(4 * t.skinWeights.length, 4);
                        this.addAttribute("skinWeight", m.copyVector4sArray(t.skinWeights))
                    }
                    return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
                },
                computeBoundingBox: (new M.Vector3, function() {
                    null === this.boundingBox && (this.boundingBox = new M.Box3);
                    var t = this.attributes.position.array;
                    t && this.boundingBox.setFromArray(t), (void 0 === t || 0 === t.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)
                }),
                computeBoundingSphere: function() {
                    var t = new M.Box3,
                        e = new M.Vector3;
                    return function() {
                        null === this.boundingSphere && (this.boundingSphere = new M.Sphere);
                        var i = this.attributes.position.array;
                        if (i) {
                            var r = this.boundingSphere.center;
                            t.setFromArray(i), t.center(r);
                            for (var n = 0, a = 0, o = i.length; a < o; a += 3) e.fromArray(i, a), n = v(n, r.distanceToSquared(e));
                            this.boundingSphere.radius = u(n), isNaN(this.boundingSphere.radius)
                        }
                    }
                }(),
                computeFaceNormals: function() {},
                computeVertexNormals: function() {
                    var t = this.index,
                        e = this.attributes,
                        i = this.groups;
                    if (e.position) {
                        var r = e.position.array;
                        if (void 0 === e.normal) this.addAttribute("normal", new M.BufferAttribute(new Float32Array(r.length), 3));
                        else
                            for (var n = e.normal.array, a = 0, o = n.length; a < o; a++) n[a] = 0;
                        var s, h, u, l = e.normal.array,
                            c = new M.Vector3,
                            p = new M.Vector3,
                            d = new M.Vector3,
                            f = new M.Vector3,
                            m = new M.Vector3;
                        if (t) {
                            var v = t.array;
                            0 === i.length && this.addGroup(0, v.length);
                            for (var g = 0, y = i.length; g < y; ++g)
                                for (var x = i[g], _ = x.start, b = x.count, a = _, o = _ + b; a < o; a += 3) s = 3 * v[a + 0], h = 3 * v[a + 1], u = 3 * v[a + 2], c.fromArray(r, s), p.fromArray(r, h), d.fromArray(r, u), f.subVectors(d, p), m.subVectors(c, p), f.cross(m), l[s] += f.x, l[s + 1] += f.y, l[s + 2] += f.z, l[h] += f.x, l[h + 1] += f.y, l[h + 2] += f.z, l[u] += f.x, l[u + 1] += f.y, l[u + 2] += f.z
                        } else
                            for (var a = 0, o = r.length; a < o; a += 9) c.fromArray(r, a), p.fromArray(r, a + 3), d.fromArray(r, a + 6), f.subVectors(d, p), m.subVectors(c, p), f.cross(m), l[a] = f.x, l[a + 1] = f.y, l[a + 2] = f.z, l[a + 3] = f.x, l[a + 4] = f.y, l[a + 5] = f.z, l[a + 6] = f.x, l[a + 7] = f.y, l[a + 8] = f.z;
                        this.normalizeNormals(), e.normal.needsUpdate = !0
                    }
                },
                merge: function(t, e) {
                    if (0 != t instanceof M.BufferGeometry) {
                        void 0 === e && (e = 0);
                        var i = this.attributes;
                        for (var r in i)
                            if (void 0 !== t.attributes[r])
                                for (var n = i[r], a = n.array, o = t.attributes[r], s = o.array, h = o.itemSize, u = 0, l = h * e; u < s.length; u++, l++) a[l] = s[u];
                        return this
                    }
                },
                normalizeNormals: function() {
                    for (var t, e, i, r, n = this.attributes.normal.array, a = 0, o = n.length; a < o; a += 3) t = n[a], e = n[a + 1], i = n[a + 2], r = 1 / u(t * t + e * e + i * i), n[a] *= r, n[a + 1] *= r, n[a + 2] *= r
                },
                toNonIndexed: function() {
                    if (null === this.index) return this;
                    var t = new M.BufferGeometry,
                        e = this.index.array,
                        i = this.attributes;
                    for (var r in i) {
                        for (var n = i[r], a = n.array, o = n.itemSize, s = new a.constructor(e.length * o), h = 0, u = 0, l = 0, c = e.length; l < c; l++) {
                            h = e[l] * o;
                            for (var p = 0; p < o; p++) s[u++] = a[h++]
                        }
                        t.addAttribute(r, new M.BufferAttribute(s, o))
                    }
                    return t
                },
                toJSON: function() {
                    var t = {
                        metadata: {
                            version: 4.4,
                            type: "BufferGeometry",
                            generator: "BufferGeometry.toJSON"
                        }
                    };
                    if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                        var e = this.parameters;
                        for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                        return t
                    }
                    t.data = {
                        attributes: {}
                    };
                    var r = this.index;
                    if (null !== r) {
                        o = Array.prototype.slice.call(r.array);
                        t.data.index = {
                            type: r.array.constructor.name,
                            array: o
                        }
                    }
                    var n = this.attributes;
                    for (var i in n) {
                        var a = n[i],
                            o = Array.prototype.slice.call(a.array);
                        t.data.attributes[i] = {
                            itemSize: a.itemSize,
                            type: a.array.constructor.name,
                            array: o
                        }
                    }
                    var s = this.groups;
                    0 < s.length && (t.data.groups = JSON.parse(JSON.stringify(s)));
                    var h = this.boundingSphere;
                    return null !== h && (t.data.boundingSphere = {
                        center: h.center.toArray(),
                        radius: h.radius
                    }), t
                },
                clone: function() {
                    return (new M.BufferGeometry).copy(this)
                },
                copy: function(t) {
                    var e = t.index;
                    null !== e && this.setIndex(e.clone());
                    var i = t.attributes;
                    for (var r in i) {
                        var n = i[r];
                        this.addAttribute(r, n.clone())
                    }
                    for (var a, o = t.groups, s = 0, h = o.length; s < h; s++) a = o[s], this.addGroup(a.start, a.count);
                    return this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }, M.EventDispatcher.prototype.apply(M.BufferGeometry.prototype), M.BufferGeometry.MaxIndex = 65535, M.InterleavedBufferAttribute = function(t, e, i) {
                this.uuid = M.Math.generateUUID(), this.data = t, this.itemSize = e, this.offset = i
            }, M.InterleavedBufferAttribute.prototype = {
                constructor: M.InterleavedBufferAttribute,
                get length() {
                    return this.array.length
                },
                get count() {
                    return this.data.count
                },
                setX: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset] = e, this
                },
                setY: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset + 1] = e, this
                },
                setZ: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset + 2] = e, this
                },
                setW: function(t, e) {
                    return this.data.array[t * this.data.stride + this.offset + 3] = e, this
                },
                getX: function(t) {
                    return this.data.array[t * this.data.stride + this.offset]
                },
                getY: function(t) {
                    return this.data.array[t * this.data.stride + this.offset + 1]
                },
                getZ: function(t) {
                    return this.data.array[t * this.data.stride + this.offset + 2]
                },
                getW: function(t) {
                    return this.data.array[t * this.data.stride + this.offset + 3]
                },
                setXY: function(t, e, i) {
                    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
                },
                setXYZ: function(t, e, i, r) {
                    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this
                },
                setXYZW: function(t, e, i, r, n) {
                    return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this.data.array[t + 3] = n, this
                }
            }, M.InstancedBufferGeometry = function() {
                M.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
            }, M.InstancedBufferGeometry.prototype = Object.create(M.BufferGeometry.prototype), M.InstancedBufferGeometry.prototype.constructor = M.InstancedBufferGeometry, M.InstancedBufferGeometry.prototype.addGroup = function(t, e, i) {
                this.groups.push({
                    start: t,
                    count: e,
                    instances: i
                })
            }, M.InstancedBufferGeometry.prototype.copy = function(t) {
                var e = t.index;
                null !== e && this.setIndex(e.clone());
                var i = t.attributes;
                for (var r in i) {
                    var n = i[r];
                    this.addAttribute(r, n.clone())
                }
                for (var a, o = t.groups, s = 0, h = o.length; s < h; s++) a = o[s], this.addGroup(a.start, a.count, a.instances);
                return this
            }, M.EventDispatcher.prototype.apply(M.InstancedBufferGeometry.prototype), M.Geometry = function() {
                Object.defineProperty(this, "id", {
                    value: M.GeometryIdCount++
                }), this.uuid = M.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                    []
                ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
            }, M.Geometry.prototype = {
                constructor: M.Geometry,
                applyMatrix: function(t) {
                    for (var e = (new M.Matrix3).getNormalMatrix(t), i = 0, r = this.vertices.length; i < r; i++) this.vertices[i].applyMatrix4(t);
                    for (var n, i = 0, r = this.faces.length; i < r; i++) {
                        (n = this.faces[i]).normal.applyMatrix3(e).normalize();
                        for (var a = 0, o = n.vertexNormals.length; a < o; a++) n.vertexNormals[a].applyMatrix3(e).normalize()
                    }
                    return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
                },
                rotateX: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
                    }
                }(),
                rotateY: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
                    }
                }(),
                rotateZ: function() {
                    var t;
                    return function(e) {
                        return void 0 == t && (t = new M.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
                    }
                }(),
                translate: function() {
                    var t;
                    return function(e, i, r) {
                        return void 0 == t && (t = new M.Matrix4), t.makeTranslation(e, i, r), this.applyMatrix(t), this
                    }
                }(),
                scale: function() {
                    var t;
                    return function(e, i, r) {
                        return void 0 == t && (t = new M.Matrix4), t.makeScale(e, i, r), this.applyMatrix(t), this
                    }
                }(),
                lookAt: function() {
                    var t;
                    return function(e) {
                        void 0 == t && (t = new M.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                    }
                }(),
                fromBufferGeometry: function(t) {
                    function e(t, e, r, n) {
                        var a = void 0 === o ? [] : [l[t].clone(), l[e].clone(), l[r].clone()],
                            d = void 0 === s ? [] : [i.colors[t].clone(), i.colors[e].clone(), i.colors[r].clone()],
                            f = new M.Face3(t, e, r, a, d, n);
                        i.faces.push(f), void 0 !== h && i.faceVertexUvs[0].push([c[t].clone(), c[e].clone(), c[r].clone()]), void 0 !== u && i.faceVertexUvs[1].push([p[t].clone(), p[e].clone(), p[r].clone()])
                    }
                    var i = this,
                        r = null === t.index ? void 0 : t.index.array,
                        n = t.attributes,
                        a = n.position.array,
                        o = void 0 === n.normal ? void 0 : n.normal.array,
                        s = void 0 === n.color ? void 0 : n.color.array,
                        h = void 0 === n.uv ? void 0 : n.uv.array,
                        u = void 0 === n.uv2 ? void 0 : n.uv2.array;
                    void 0 !== u && (this.faceVertexUvs[1] = []);
                    for (var l = [], c = [], p = [], d = 0, f = 0; d < a.length; d += 3, f += 2) i.vertices.push(new M.Vector3(a[d], a[d + 1], a[d + 2])), void 0 !== o && l.push(new M.Vector3(o[d], o[d + 1], o[d + 2])), void 0 !== s && i.colors.push(new M.Color(s[d], s[d + 1], s[d + 2])), void 0 !== h && c.push(new M.Vector2(h[f], h[f + 1])), void 0 !== u && p.push(new M.Vector2(u[f], u[f + 1]));
                    if (void 0 !== r) {
                        var m = t.groups;
                        if (0 < m.length)
                            for (d = 0; d < m.length; d++)
                                for (var v = m[d], g = v.start, y = v.count, f = g; f < g + y; f += 3) e(r[f], r[f + 1], r[f + 2], v.materialIndex);
                        else
                            for (d = 0; d < r.length; d += 3) e(r[d], r[d + 1], r[d + 2])
                    } else
                        for (d = 0; d < a.length / 3; d += 3) e(d, d + 1, d + 2);
                    return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
                },
                center: function() {
                    this.computeBoundingBox();
                    var t = this.boundingBox.center().negate();
                    return this.translate(t.x, t.y, t.z), t
                },
                normalize: function() {
                    this.computeBoundingSphere();
                    var t = this.boundingSphere.center,
                        e = this.boundingSphere.radius,
                        i = 0 === e ? 1 : 1 / e,
                        r = new M.Matrix4;
                    return r.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(r), this
                },
                computeFaceNormals: function() {
                    for (var t = new M.Vector3, e = new M.Vector3, i = 0, r = this.faces.length; i < r; i++) {
                        var n = this.faces[i],
                            a = this.vertices[n.a],
                            o = this.vertices[n.b],
                            s = this.vertices[n.c];
                        t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), n.normal.copy(t)
                    }
                },
                computeVertexNormals: function(t) {
                    void 0 === t && (t = !0);
                    var e, i, r, n, a, o;
                    for (o = Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) o[e] = new M.Vector3;
                    if (t) {
                        var s, h, u, l = new M.Vector3,
                            c = new M.Vector3;
                        for (r = 0, n = this.faces.length; r < n; r++) a = this.faces[r], s = this.vertices[a.a], h = this.vertices[a.b], u = this.vertices[a.c], l.subVectors(u, h), c.subVectors(s, h), l.cross(c), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
                    } else
                        for (r = 0, n = this.faces.length; r < n; r++) a = this.faces[r], o[a.a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
                    for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
                    for (r = 0, n = this.faces.length; r < n; r++) {
                        var p = (a = this.faces[r]).vertexNormals;
                        3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
                    }
                    0 < this.faces.length && (this.normalsNeedUpdate = !0)
                },
                computeMorphNormals: function() {
                    var t, e, i, r, n;
                    for (i = 0, r = this.faces.length; i < r; i++)
                        for ((n = this.faces[i]).__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []), t = 0, e = n.vertexNormals.length; t < e; t++) n.__originalVertexNormals[t] ? n.__originalVertexNormals[t].copy(n.vertexNormals[t]) : n.__originalVertexNormals[t] = n.vertexNormals[t].clone();
                    var a = new M.Geometry;
                    for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                        if (!this.morphNormals[t]) {
                            this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                            var o = this.morphNormals[t].faceNormals,
                                s = this.morphNormals[t].vertexNormals;
                            for (i = 0, r = this.faces.length; i < r; i++) u = new M.Vector3, l = {
                                a: new M.Vector3,
                                b: new M.Vector3,
                                c: new M.Vector3
                            }, o.push(u), s.push(l)
                        }
                        var h = this.morphNormals[t];
                        a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals();
                        var u, l;
                        for (i = 0, r = this.faces.length; i < r; i++) n = this.faces[i], u = h.faceNormals[i], l = h.vertexNormals[i], u.copy(n.normal), l.a.copy(n.vertexNormals[0]), l.b.copy(n.vertexNormals[1]), l.c.copy(n.vertexNormals[2])
                    }
                    for (i = 0, r = this.faces.length; i < r; i++) n = this.faces[i], n.normal = n.__originalFaceNormal, n.vertexNormals = n.__originalVertexNormals
                },
                computeTangents: function() {},
                computeLineDistances: function() {
                    for (var t = 0, e = this.vertices, i = 0, r = e.length; i < r; i++) 0 < i && (t += e[i].distanceTo(e[i - 1])), this.lineDistances[i] = t
                },
                computeBoundingBox: function() {
                    null === this.boundingBox && (this.boundingBox = new M.Box3), this.boundingBox.setFromPoints(this.vertices)
                },
                computeBoundingSphere: function() {
                    null === this.boundingSphere && (this.boundingSphere = new M.Sphere), this.boundingSphere.setFromPoints(this.vertices)
                },
                merge: function(t, e, i) {
                    if (0 != t instanceof M.Geometry) {
                        var r, n = this.vertices.length,
                            a = this.vertices,
                            o = t.vertices,
                            s = this.faces,
                            h = t.faces,
                            u = this.faceVertexUvs[0],
                            l = t.faceVertexUvs[0];
                        void 0 === i && (i = 0), void 0 !== e && (r = (new M.Matrix3).getNormalMatrix(e));
                        for (var c = 0, p = o.length; c < p; c++) {
                            var d = o[c].clone();
                            void 0 !== e && d.applyMatrix4(e), a.push(d)
                        }
                        for (c = 0, p = h.length; c < p; c++) {
                            var f, m, v, g = h[c],
                                y = g.vertexNormals,
                                x = g.vertexColors;
                            (f = new M.Face3(g.a + n, g.b + n, g.c + n)).normal.copy(g.normal), void 0 !== r && f.normal.applyMatrix3(r).normalize();
                            for (var _ = 0, b = y.length; _ < b; _++) m = y[_].clone(), void 0 !== r && m.applyMatrix3(r).normalize(), f.vertexNormals.push(m);
                            f.color.copy(g.color);
                            for (var _ = 0, b = x.length; _ < b; _++) v = x[_], f.vertexColors.push(v.clone());
                            f.materialIndex = g.materialIndex + i, s.push(f)
                        }
                        for (c = 0, p = l.length; c < p; c++) {
                            var S = l[c],
                                w = [];
                            if (void 0 !== S) {
                                for (var _ = 0, b = S.length; _ < b; _++) w.push(S[_].clone());
                                u.push(w)
                            }
                        }
                    }
                },
                mergeMesh: function(t) {
                    0 == t instanceof M.Mesh || (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix))
                },
                mergeVertices: function() {
                    var t, e, i, r, n, a, o, s, h = {},
                        u = [],
                        l = [];
                    for (i = 0, r = this.vertices.length; i < r; i++) t = this.vertices[i], e = c(1e4 * t.x) + "_" + c(1e4 * t.y) + "_" + c(1e4 * t.z), void 0 === h[e] ? (h[e] = i, u.push(this.vertices[i]), l[i] = u.length - 1) : l[i] = l[h[e]];
                    var p = [];
                    for (i = 0, r = this.faces.length; i < r; i++) {
                        (n = this.faces[i]).a = l[n.a], n.b = l[n.b], n.c = l[n.c], a = [n.a, n.b, n.c];
                        for (var d = 0; 3 > d; d++)
                            if (a[d] === a[(d + 1) % 3]) {
                                d, p.push(i);
                                break
                            }
                    }
                    for (i = p.length - 1; 0 <= i; i--) {
                        var f = p[i];
                        for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
                    }
                    var m = this.vertices.length - u.length;
                    return this.vertices = u, m
                },
                sortFacesByMaterialIndex: function() {
                    for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
                    t.sort(function(t, e) {
                        return t.materialIndex - e.materialIndex
                    });
                    var r, n, a = this.faceVertexUvs[0],
                        o = this.faceVertexUvs[1];
                    a && a.length === e && (r = []), o && o.length === e && (n = []);
                    for (var s, i = 0; i < e; i++) s = t[i]._id, r && r.push(a[s]), n && n.push(o[s]);
                    r && (this.faceVertexUvs[0] = r), n && (this.faceVertexUvs[1] = n)
                },
                toJSON: function() {
                    function t(t, e, i) {
                        return i ? t | 1 << e : t & ~(1 << e)
                    }

                    function e(t) {
                        var e = t.x.toString() + t.y.toString() + t.z.toString();
                        return void 0 === p[e] ? (p[e] = c.length / 3, c.push(t.x, t.y, t.z), p[e]) : p[e]
                    }

                    function i(t) {
                        var e = t.r.toString() + t.g.toString() + t.b.toString();
                        return void 0 === f[e] ? (f[e] = d.length, d.push(t.getHex()), f[e]) : f[e]
                    }

                    function r(t) {
                        var e = t.x.toString() + t.y.toString();
                        return void 0 === v[e] ? (v[e] = m.length / 2, m.push(t.x, t.y), v[e]) : v[e]
                    }
                    var n = {
                        metadata: {
                            version: 4.4,
                            type: "Geometry",
                            generator: "Geometry.toJSON"
                        }
                    };
                    if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
                        var a = this.parameters;
                        for (var o in a) void 0 !== a[o] && (n[o] = a[o]);
                        return n
                    }
                    for (var s, h = [], u = 0; u < this.vertices.length; u++) s = this.vertices[u], h.push(s.x, s.y, s.z);
                    for (var l = [], c = [], p = {}, d = [], f = {}, m = [], v = {}, u = 0; u < this.faces.length; u++) {
                        var g = this.faces[u],
                            y = void 0 !== this.faceVertexUvs[0][u],
                            x = 0 < g.normal.length(),
                            M = 0 < g.vertexNormals.length,
                            _ = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b,
                            b = 0 < g.vertexColors.length,
                            S = 0;
                        if (S = t(S, 0, 0), S = t(S, 1, !0), S = t(S, 2, !1), S = t(S, 3, y), S = t(S, 4, x), S = t(S, 5, M), S = t(S, 6, _), S = t(S, 7, b), l.push(S), l.push(g.a, g.b, g.c), l.push(g.materialIndex), y) {
                            var w = this.faceVertexUvs[0][u];
                            l.push(r(w[0]), r(w[1]), r(w[2]))
                        }
                        if (x && l.push(e(g.normal)), M) {
                            var E = g.vertexNormals;
                            l.push(e(E[0]), e(E[1]), e(E[2]))
                        }
                        if (_ && l.push(i(g.color)), b) {
                            var T = g.vertexColors;
                            l.push(i(T[0]), i(T[1]), i(T[2]))
                        }
                    }
                    return n.data = {}, n.data.vertices = h, n.data.normals = c, 0 < d.length && (n.data.colors = d), 0 < m.length && (n.data.uvs = [m]), n.data.faces = l, n
                },
                clone: function() {
                    return (new M.Geometry).copy(this)
                },
                copy: function(t) {
                    this.vertices = [], this.faces = [], this.faceVertexUvs = [
                        []
                    ];
                    for (var e = t.vertices, i = 0, r = e.length; i < r; i++) this.vertices.push(e[i].clone());
                    for (var n = t.faces, i = 0, r = n.length; i < r; i++) this.faces.push(n[i].clone());
                    for (var a, i = 0, r = t.faceVertexUvs.length; i < r; i++) {
                        a = t.faceVertexUvs[i], void 0 === this.faceVertexUvs[i] && (this.faceVertexUvs[i] = []);
                        for (var o = 0, s = a.length; o < s; o++) {
                            for (var h, u = a[o], l = [], c = 0, p = u.length; c < p; c++) h = u[c], l.push(h.clone());
                            this.faceVertexUvs[i].push(l)
                        }
                    }
                    return this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }, M.EventDispatcher.prototype.apply(M.Geometry.prototype), M.GeometryIdCount = 0, M.DirectGeometry = function() {
                Object.defineProperty(this, "id", {
                    value: M.GeometryIdCount++
                }), this.uuid = M.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
            }, M.DirectGeometry.prototype = {
                constructor: M.DirectGeometry,
                computeBoundingBox: M.Geometry.prototype.computeBoundingBox,
                computeBoundingSphere: M.Geometry.prototype.computeBoundingSphere,
                computeFaceNormals: function() {},
                computeVertexNormals: function() {},
                computeGroups: function(t) {
                    for (var e, i, r, n = [], a = t.faces, o = 0; o < a.length; o++)(r = a[o]).materialIndex !== i && (i = r.materialIndex, void 0 != e && (e.count = 3 * o - e.start, n.push(e)), e = {
                        start: 3 * o,
                        materialIndex: i
                    });
                    void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), this.groups = n
                },
                fromGeometry: function(t) {
                    var e, i = t.faces,
                        r = t.vertices,
                        n = t.faceVertexUvs,
                        a = n[0] && 0 < n[0].length,
                        o = n[1] && 0 < n[1].length,
                        s = t.morphTargets,
                        h = s.length;
                    if (0 < h) {
                        e = [];
                        for (g = 0; g < h; g++) e[g] = [];
                        this.morphTargets.position = e
                    }
                    var u, l = t.morphNormals,
                        c = l.length;
                    if (0 < c) {
                        u = [];
                        for (g = 0; g < c; g++) u[g] = [];
                        this.morphTargets.normal = u
                    }
                    for (var p, d = t.skinIndices, f = t.skinWeights, m = d.length === r.length, v = f.length === r.length, g = 0; g < i.length; g++) {
                        p = i[g], this.vertices.push(r[p.a], r[p.b], r[p.c]);
                        var y = p.vertexNormals;
                        if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
                        else {
                            var x = p.normal;
                            this.normals.push(x, x, x)
                        }
                        var _ = p.vertexColors;
                        if (3 === _.length) this.colors.push(_[0], _[1], _[2]);
                        else {
                            var b = p.color;
                            this.colors.push(b, b, b)
                        }
                        if (!0 === a && (void 0 === (S = n[0][g]) ? this.uvs.push(new M.Vector2, new M.Vector2, new M.Vector2) : this.uvs.push(S[0], S[1], S[2])), !0 === o) {
                            var S = n[1][g];
                            void 0 === S ? this.uvs2.push(new M.Vector2, new M.Vector2, new M.Vector2) : this.uvs2.push(S[0], S[1], S[2])
                        }
                        for (var w, E = 0; E < h; E++) w = s[E].vertices, e[E].push(w[p.a], w[p.b], w[p.c]);
                        for (var T, E = 0; E < c; E++) T = l[E].vertexNormals[g], u[E].push(T.a, T.b, T.c);
                        m && this.skinIndices.push(d[p.a], d[p.b], d[p.c]), v && this.skinWeights.push(f[p.a], f[p.b], f[p.c])
                    }
                    return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }, M.EventDispatcher.prototype.apply(M.DirectGeometry.prototype), M.Camera = function() {
                M.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new M.Matrix4, this.projectionMatrix = new M.Matrix4
            }, M.Camera.prototype = Object.create(M.Object3D.prototype), M.Camera.prototype.constructor = M.Camera, M.Camera.prototype.getWorldDirection = function() {
                var t = new M.Quaternion;
                return function(e) {
                    var i = e || new M.Vector3;
                    return this.getWorldQuaternion(t), i.set(0, 0, -1).applyQuaternion(t)
                }
            }(), M.Camera.prototype.lookAt = function() {
                var t = new M.Matrix4;
                return function(e) {
                    t.lookAt(this.position, e, this.up), this.quaternion.setFromRotationMatrix(t)
                }
            }(), M.Camera.prototype.clone = function() {
                return (new this.constructor).copy(this)
            }, M.Camera.prototype.copy = function(t) {
                return M.Object3D.prototype.copy.call(this, t), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
            }, M.PerspectiveCamera = function(t, e, i, r) {
                M.Camera.call(this), this.type = "PerspectiveCamera", this.focalLength = 10, this.zoom = 1, this.fov = void 0 === t ? 50 : t, this.aspect = void 0 === e ? 1 : e, this.near = void 0 === i ? .1 : i, this.far = void 0 === r ? 2e3 : r, this.updateProjectionMatrix()
            }, M.PerspectiveCamera.prototype = Object.create(M.Camera.prototype), M.PerspectiveCamera.prototype.constructor = M.PerspectiveCamera, M.PerspectiveCamera.prototype.setLens = function(t, i) {
                void 0 === i && (i = 24), this.fov = 2 * M.Math.radToDeg(e(i / (2 * t))), this.updateProjectionMatrix()
            }, M.PerspectiveCamera.prototype.setViewOffset = function(t, e, i, r, n, a) {
                this.fullWidth = t, this.fullHeight = e, this.x = i, this.y = r, this.width = n, this.height = a, this.updateProjectionMatrix()
            }, M.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
                var t = M.Math.radToDeg(2 * e(i(.5 * M.Math.degToRad(this.fov)) / this.zoom));
                if (this.fullWidth) {
                    var r = this.fullWidth / this.fullHeight,
                        n = i(M.Math.degToRad(.5 * t)) * this.near,
                        a = -n,
                        o = r * a,
                        h = s(r * n - o),
                        u = s(n - a);
                    this.projectionMatrix.makeFrustum(o + this.x * h / this.fullWidth, o + (this.x + this.width) * h / this.fullWidth, n - (this.y + this.height) * u / this.fullHeight, n - this.y * u / this.fullHeight, this.near, this.far)
                } else this.projectionMatrix.makePerspective(t, this.aspect, this.near, this.far)
            }, M.PerspectiveCamera.prototype.copy = function(t) {
                return M.Camera.prototype.copy.call(this, t), this.focalLength = t.focalLength, this.zoom = t.zoom, this.fov = t.fov, this.aspect = t.aspect, this.near = t.near, this.far = t.far, this
            }, M.PerspectiveCamera.prototype.toJSON = function(t) {
                var e = M.Object3D.prototype.toJSON.call(this, t);
                return e.object.focalLength = this.focalLength, e.object.zoom = this.zoom, e.object.fov = this.fov, e.object.aspect = this.aspect, e.object.near = this.near, e.object.far = this.far, e
            }, M.Light = function(t, e) {
                M.Object3D.call(this), this.type = "Light", this.color = new M.Color(t), this.intensity = void 0 === e ? 1 : e, this.receiveShadow = void 0
            }, M.Light.prototype = Object.create(M.Object3D.prototype), M.Light.prototype.constructor = M.Light, M.Light.prototype.copy = function(t) {
                return M.Object3D.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
            }, M.Light.prototype.toJSON = function(t) {
                var e = M.Object3D.prototype.toJSON.call(this, t);
                return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), e
            }, M.Scene = function() {
                M.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
            }, M.Scene.prototype = Object.create(M.Object3D.prototype), M.Scene.prototype.constructor = M.Scene, M.Scene.prototype.copy = function(t, e) {
                return M.Object3D.prototype.copy.call(this, t, e), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
            }, M.FogExp2 = function(t, e) {
                this.name = "", this.color = new M.Color(t), this.density = void 0 === e ? 25e-5 : e
            }, M.FogExp2.prototype.clone = function() {
                return new M.FogExp2(this.color.getHex(), this.density)
            }, M.ImmediateRenderObject = function(t) {
                M.Object3D.call(this), this.material = t, this.render = function() {}
            }, M.ImmediateRenderObject.prototype = Object.create(M.Object3D.prototype), M.ImmediateRenderObject.prototype.constructor = M.ImmediateRenderObject, M.SphereBufferGeometry = function(t, e, i, r, o, s, h) {
                M.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                    radius: t,
                    widthSegments: e,
                    heightSegments: i,
                    phiStart: r,
                    phiLength: o,
                    thetaStart: s,
                    thetaLength: h
                }, t = t || 50, e = v(3, m(e) || 8), i = v(2, m(i) || 6), r = void 0 === r ? 0 : r, o = void 0 === o ? 2 * f : o;
                for (var u = (s = void 0 === s ? 0 : s) + (h = void 0 === h ? f : h), l = (e + 1) * (i + 1), c = new M.BufferAttribute(new Float32Array(3 * l), 3), p = new M.BufferAttribute(new Float32Array(3 * l), 3), d = new M.BufferAttribute(new Float32Array(2 * l), 2), g = 0, y = [], x = new M.Vector3, _ = 0; _ <= i; _++) {
                    for (var b = [], S = _ / i, w = 0; w <= e; w++) {
                        var E = w / e,
                            T = -t * a(r + E * o) * n(s + S * h),
                            A = t * a(s + S * h),
                            L = t * n(r + E * o) * n(s + S * h);
                        x.set(T, A, L).normalize(), c.setXYZ(g, T, A, L), p.setXYZ(g, x.x, x.y, x.z), d.setXY(g, E, 1 - S), b.push(g), g++
                    }
                    y.push(b)
                }
                for (var R = [], _ = 0; _ < i; _++)
                    for (w = 0; w < e; w++) {
                        var C = y[_][w + 1],
                            U = y[_][w],
                            F = y[_ + 1][w],
                            P = y[_ + 1][w + 1];
                        (0 !== _ || 0 < s) && R.push(C, U, P), (_ !== i - 1 || u < f) && R.push(U, F, P)
                    }
                this.setIndex(new(65535 < c.count ? M.Uint32Attribute : M.Uint16Attribute)(R, 1)), this.addAttribute("position", c), this.addAttribute("normal", p), this.addAttribute("uv", d), this.boundingSphere = new M.Sphere(new M.Vector3, t)
            }, M.SphereBufferGeometry.prototype = Object.create(M.BufferGeometry.prototype), M.SphereBufferGeometry.prototype.constructor = M.SphereBufferGeometry, M.SphereGeometry = function(t, e, i, r, n, a, o) {
                M.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
                    radius: t,
                    widthSegments: e,
                    heightSegments: i,
                    phiStart: r,
                    phiLength: n,
                    thetaStart: a,
                    thetaLength: o
                }, this.fromBufferGeometry(new M.SphereBufferGeometry(t, e, i, r, n, a, o))
            }, M.SphereGeometry.prototype = Object.create(M.Geometry.prototype), M.SphereGeometry.prototype.constructor = M.SphereGeometry, M.Material = function() {
                Object.defineProperty(this, "id", {
                    value: M.MaterialIdCount++
                }), this.uuid = M.Math.generateUUID(), this.name = "", this.type = "Material", this.side = M.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = M.NormalBlending, this.blendSrc = M.SrcAlphaFactor, this.blendDst = M.OneMinusSrcAlphaFactor, this.blendEquation = M.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = M.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
            }, M.Material.prototype = {
                constructor: M.Material,
                get needsUpdate() {
                    return this._needsUpdate
                },
                set needsUpdate(t) {
                    !0 === t && this.update(), this._needsUpdate = t
                },
                setValues: function(t) {
                    if (void 0 !== t)
                        for (var e in t) {
                            var i = t[e];
                            if (void 0 !== i) {
                                var r = this[e];
                                void 0 !== r && (r instanceof M.Color ? r.set(i) : r instanceof M.Vector3 && i instanceof M.Vector3 ? r.copy(i) : this[e] = "overdraw" == e ? +i : i)
                            }
                        }
                },
                toJSON: function(t) {
                    function e(t) {
                        var e = [];
                        for (var i in t) {
                            var r = t[i];
                            delete r.metadata, e.push(r)
                        }
                        return e
                    }
                    var i = void 0 === t;
                    i && (t = {
                        textures: {},
                        images: {}
                    });
                    var r = {
                        metadata: {
                            version: 4.4,
                            type: "Material",
                            generator: "Material.toJSON"
                        }
                    };
                    if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), this.color instanceof M.Color && (r.color = this.color.getHex()), .5 !== this.roughness && (r.roughness = this.roughness), .5 !== this.metalness && (r.metalness = this.metalness), this.emissive instanceof M.Color && (r.emissive = this.emissive.getHex()), this.specular instanceof M.Color && (r.specular = this.specular.getHex()), void 0 !== this.shininess && (r.shininess = this.shininess), this.map instanceof M.Texture && (r.map = this.map.toJSON(t).uuid), this.alphaMap instanceof M.Texture && (r.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap instanceof M.Texture && (r.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap instanceof M.Texture && (r.bumpMap = this.bumpMap.toJSON(t).uuid, r.bumpScale = this.bumpScale), this.normalMap instanceof M.Texture && (r.normalMap = this.normalMap.toJSON(t).uuid, r.normalScale = this.normalScale.toArray()), this.displacementMap instanceof M.Texture && (r.displacementMap = this.displacementMap.toJSON(t).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap instanceof M.Texture && (r.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap instanceof M.Texture && (r.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap instanceof M.Texture && (r.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap instanceof M.Texture && (r.specularMap = this.specularMap.toJSON(t).uuid), this.envMap instanceof M.Texture && (r.envMap = this.envMap.toJSON(t).uuid, r.reflectivity = this.reflectivity), void 0 !== this.size && (r.size = this.size), void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation), void 0 !== this.vertexColors && this.vertexColors !== M.NoColors && (r.vertexColors = this.vertexColors), void 0 !== this.shading && this.shading !== M.SmoothShading && (r.shading = this.shading), void 0 !== this.blending && this.blending !== M.NormalBlending && (r.blending = this.blending), void 0 !== this.side && this.side !== M.FrontSide && (r.side = this.side), 1 > this.opacity && (r.opacity = this.opacity), !0 === this.transparent && (r.transparent = this.transparent), 0 < this.alphaTest && (r.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (r.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (r.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (r.wireframeLinewidth = this.wireframeLinewidth), i) {
                        var n = e(t.textures),
                            a = e(t.images);
                        0 < n.length && (r.textures = n), 0 < a.length && (r.images = a)
                    }
                    return r
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.name = t.name, this.side = t.side, this.opacity = t.opacity, this.transparent = t.transparent, this.blending = t.blending, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this
                },
                update: function() {
                    this.dispatchEvent({
                        type: "update"
                    })
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }, M.EventDispatcher.prototype.apply(M.Material.prototype), M.MaterialIdCount = 0, M.LineBasicMaterial = function(t) {
                M.Material.call(this), this.type = "LineBasicMaterial", this.color = new M.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.blending = M.NormalBlending, this.vertexColors = M.NoColors, this.fog = !0, this.setValues(t)
            }, M.LineBasicMaterial.prototype = Object.create(M.Material.prototype), M.LineBasicMaterial.prototype.constructor = M.LineBasicMaterial, M.LineBasicMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.vertexColors = t.vertexColors, this.fog = t.fog, this
            }, M.LineDashedMaterial = function(t) {
                M.Material.call(this), this.type = "LineDashedMaterial", this.color = new M.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.blending = M.NormalBlending, this.vertexColors = M.NoColors, this.fog = !0, this.setValues(t)
            }, M.LineDashedMaterial.prototype = Object.create(M.Material.prototype), M.LineDashedMaterial.prototype.constructor = M.LineDashedMaterial, M.LineDashedMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this.vertexColors = t.vertexColors, this.fog = t.fog, this
            }, M.PointsMaterial = function(t) {
                M.Material.call(this), this.type = "PointsMaterial", this.color = new M.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.blending = M.NormalBlending, this.vertexColors = M.NoColors, this.fog = !0, this.setValues(t)
            }, M.PointsMaterial.prototype = Object.create(M.Material.prototype), M.PointsMaterial.prototype.constructor = M.PointsMaterial, M.PointsMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.vertexColors = t.vertexColors, this.fog = t.fog, this
            }, M.MeshDepthMaterial = function(t) {
                M.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
            }, M.MeshDepthMaterial.prototype = Object.create(M.Material.prototype), M.MeshDepthMaterial.prototype.constructor = M.MeshDepthMaterial, M.MeshDepthMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
            }, M.MeshNormalMaterial = function(t) {
                M.Material.call(this, t), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(t)
            }, M.MeshNormalMaterial.prototype = Object.create(M.Material.prototype), M.MeshNormalMaterial.prototype.constructor = M.MeshNormalMaterial, M.MeshNormalMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
            }, M.ShaderMaterial = function(t) {
                M.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = M.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = M.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
                    derivatives: !1,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                }, this.defaultAttributeValues = {
                    color: [1, 1, 1],
                    uv: [0, 0],
                    uv2: [0, 0]
                }, this.index0AttributeName = void 0, void 0 !== t && (t.attributes, this.setValues(t))
            }, M.ShaderMaterial.prototype = Object.create(M.Material.prototype), M.ShaderMaterial.prototype.constructor = M.ShaderMaterial, M.ShaderMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = M.UniformsUtils.clone(t.uniforms), this.defines = t.defines, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
            }, M.ShaderMaterial.prototype.toJSON = function(t) {
                var e = M.Material.prototype.toJSON.call(this, t);
                return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
            }, M.MeshBasicMaterial = function(t) {
                M.Material.call(this), this.type = "MeshBasicMaterial", this.color = new M.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = M.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = M.SmoothShading, this.blending = M.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = M.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(t)
            }, M.MeshBasicMaterial.prototype = Object.create(M.Material.prototype), M.MeshBasicMaterial.prototype.constructor = M.MeshBasicMaterial, M.MeshBasicMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
            }, M.MeshLambertMaterial = function(t) {
                M.Material.call(this), this.type = "MeshLambertMaterial", this.color = new M.Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new M.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = M.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.blending = M.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = M.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }, M.MeshLambertMaterial.prototype = Object.create(M.Material.prototype), M.MeshLambertMaterial.prototype.constructor = M.MeshLambertMaterial, M.MeshLambertMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, M.MeshStandardMaterial = function(t) {
                M.Material.call(this), this.type = "MeshStandardMaterial", this.color = new M.Color(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new M.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new M.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = M.SmoothShading, this.blending = M.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = M.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }, M.MeshStandardMaterial.prototype = Object.create(M.Material.prototype), M.MeshStandardMaterial.prototype.constructor = M.MeshStandardMaterial, M.MeshStandardMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, M.MeshPhongMaterial = function(t) {
                M.Material.call(this), this.type = "MeshPhongMaterial", this.color = new M.Color(16777215), this.specular = new M.Color(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new M.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new M.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = M.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = M.SmoothShading, this.blending = M.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = M.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }, M.MeshPhongMaterial.prototype = Object.create(M.Material.prototype), M.MeshPhongMaterial.prototype.constructor = M.MeshPhongMaterial, M.MeshPhongMaterial.prototype.copy = function(t) {
                return M.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, M.MultiMaterial = function(t) {
                this.uuid = M.Math.generateUUID(), this.type = "MultiMaterial", this.materials = t instanceof Array ? t : [], this.visible = !0
            }, M.MultiMaterial.prototype = {
                constructor: M.MultiMaterial,
                toJSON: function(t) {
                    for (var e, i = {
                            metadata: {
                                version: 4.2,
                                type: "material",
                                generator: "MaterialExporter"
                            },
                            uuid: this.uuid,
                            type: this.type,
                            materials: []
                        }, r = this.materials, n = 0, a = r.length; n < a; n++) e = r[n].toJSON(t), delete e.metadata, i.materials.push(e);
                    return i.visible = this.visible, i
                },
                clone: function() {
                    for (var t = new this.constructor, e = 0; e < this.materials.length; e++) t.materials.push(this.materials[e].clone());
                    return t.visible = this.visible, t
                }
            }, M.RawShaderMaterial = function(t) {
                M.ShaderMaterial.call(this, t), this.type = "RawShaderMaterial"
            }, M.RawShaderMaterial.prototype = Object.create(M.ShaderMaterial.prototype), M.RawShaderMaterial.prototype.constructor = M.RawShaderMaterial, M.Texture = function(t, e, i, r, n, a, o, s, h) {
                Object.defineProperty(this, "id", {
                    value: M.TextureIdCount++
                }), this.uuid = M.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 === t ? M.Texture.DEFAULT_IMAGE : t, this.mipmaps = [], this.mapping = void 0 === e ? M.Texture.DEFAULT_MAPPING : e, this.wrapS = void 0 === i ? M.ClampToEdgeWrapping : i, this.wrapT = void 0 === r ? M.ClampToEdgeWrapping : r, this.magFilter = void 0 === n ? M.LinearFilter : n, this.minFilter = void 0 === a ? M.LinearMipMapLinearFilter : a, this.anisotropy = void 0 === h ? 1 : h, this.format = void 0 === o ? M.RGBAFormat : o, this.type = void 0 === s ? M.UnsignedByteType : s, this.offset = new M.Vector2(0, 0), this.repeat = new M.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = M.LinearEncoding, this.version = 0, this.onUpdate = null
            }, M.Texture.DEFAULT_IMAGE = void 0, M.Texture.DEFAULT_MAPPING = M.UVMapping, M.Texture.prototype = {
                constructor: M.Texture,
                set needsUpdate(t) {
                    !0 === t && this.version++
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
                },
                toJSON: function(t) {
                    if (void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
                    var e = {
                        metadata: {
                            version: 4.4,
                            type: "Texture",
                            generator: "Texture.toJSON"
                        },
                        uuid: this.uuid,
                        name: this.name,
                        mapping: this.mapping,
                        repeat: [this.repeat.x, this.repeat.y],
                        offset: [this.offset.x, this.offset.y],
                        wrap: [this.wrapS, this.wrapT],
                        minFilter: this.minFilter,
                        magFilter: this.magFilter,
                        anisotropy: this.anisotropy
                    };
                    if (void 0 !== this.image) {
                        var i = this.image;
                        void 0 === i.uuid && (i.uuid = M.Math.generateUUID()), void 0 === t.images[i.uuid] && (t.images[i.uuid] = {
                            uuid: i.uuid,
                            url: function(t) {
                                var e;
                                return void 0 === t.toDataURL ? (e = document.createElement("canvas"), e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)) : e = t, 2048 < e.width || 2048 < e.height ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                            }(i)
                        }), e.image = i.uuid
                    }
                    return t.textures[this.uuid] = e, e
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                },
                transformUv: function(t) {
                    if (this.mapping === M.UVMapping) {
                        if (t.multiply(this.repeat), t.add(this.offset), 0 > t.x || 1 < t.x) switch (this.wrapS) {
                            case M.RepeatWrapping:
                                t.x -= m(t.x);
                                break;
                            case M.ClampToEdgeWrapping:
                                t.x = 0 > t.x ? 0 : 1;
                                break;
                            case M.MirroredRepeatWrapping:
                                1 === s(m(t.x) % 2) ? t.x = h(t.x) - t.x : t.x -= m(t.x)
                        }
                        if (0 > t.y || 1 < t.y) switch (this.wrapT) {
                            case M.RepeatWrapping:
                                t.y -= m(t.y);
                                break;
                            case M.ClampToEdgeWrapping:
                                t.y = 0 > t.y ? 0 : 1;
                                break;
                            case M.MirroredRepeatWrapping:
                                1 === s(m(t.y) % 2) ? t.y = h(t.y) - t.y : t.y -= m(t.y)
                        }
                        this.flipY && (t.y = 1 - t.y)
                    }
                }
            }, M.EventDispatcher.prototype.apply(M.Texture.prototype), M.TextureIdCount = 0, M.DataTexture = function(t, e, i, r, n, a, o, s, h, u, l) {
                M.Texture.call(this, null, a, o, s, h, u, r, n, l), this.image = {
                    data: t,
                    width: e,
                    height: i
                }, this.magFilter = void 0 === h ? M.NearestFilter : h, this.minFilter = void 0 === u ? M.NearestFilter : u, this.flipY = !1, this.generateMipmaps = !1
            }, M.DataTexture.prototype = Object.create(M.Texture.prototype), M.DataTexture.prototype.constructor = M.DataTexture, M.CompressedTexture = function(t, e, i, r, n, a, o, s, h, u, l) {
                M.Texture.call(this, null, a, o, s, h, u, r, n, l), this.image = {
                    width: e,
                    height: i
                }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
            }, M.CompressedTexture.prototype = Object.create(M.Texture.prototype), M.CompressedTexture.prototype.constructor = M.CompressedTexture, M.CubeTexture = function(t, e, i, r, n, a, o, s, h) {
                t = void 0 === t ? [] : t, e = void 0 === e ? M.CubeReflectionMapping : e, M.Texture.call(this, t, e, i, r, n, a, o, s, h), this.flipY = !1
            }, M.CubeTexture.prototype = Object.create(M.Texture.prototype), M.CubeTexture.prototype.constructor = M.CubeTexture, Object.defineProperty(M.CubeTexture.prototype, "images", {
                get: function() {
                    return this.image
                },
                set: function(t) {
                    this.image = t
                }
            }), M.VideoTexture = function(t, e, i, r, n, a, o, s, h) {
                function u() {
                    requestAnimationFrame(u), t.readyState >= t.HAVE_CURRENT_DATA && (l.needsUpdate = !0)
                }
                M.Texture.call(this, t, e, i, r, n, a, o, s, h), this.generateMipmaps = !1;
                var l = this;
                u()
            }, M.VideoTexture.prototype = Object.create(M.Texture.prototype), M.VideoTexture.prototype.constructor = M.VideoTexture, M.Sprite = function() {
                var t = new Uint16Array([0, 1, 2, 0, 2, 3]),
                    e = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
                    i = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                    r = new M.BufferGeometry;
                return r.setIndex(new M.BufferAttribute(t, 1)), r.addAttribute("position", new M.BufferAttribute(e, 3)), r.addAttribute("uv", new M.BufferAttribute(i, 2)),
                    function(t) {
                        M.Object3D.call(this), this.type = "Sprite", this.geometry = r, this.material = void 0 === t ? new M.SpriteMaterial : t
                    }
            }(), M.Sprite.prototype = Object.create(M.Object3D.prototype), M.Sprite.prototype.constructor = M.Sprite, M.Sprite.prototype.raycast = function() {
                var t = new M.Vector3;
                return function(e, i) {
                    t.setFromMatrixPosition(this.matrixWorld);
                    var r = e.ray.distanceSqToPoint(t);
                    r > this.scale.x * this.scale.y || i.push({
                        distance: u(r),
                        point: this.position,
                        face: null,
                        object: this
                    })
                }
            }(), M.Sprite.prototype.clone = function() {
                return new this.constructor(this.material).copy(this)
            }, M.Particle = M.Sprite, M.LensFlare = function(t, e, i, r, n) {
                M.Object3D.call(this), this.lensFlares = [], this.positionScreen = new M.Vector3, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, i, r, n)
            }, M.LensFlare.prototype = Object.create(M.Object3D.prototype), M.LensFlare.prototype.constructor = M.LensFlare, M.LensFlare.prototype.add = function(t, e, i, r, n, a) {
                void 0 === e && (e = -1), void 0 === i && (i = 0), void 0 === a && (a = 1), void 0 === n && (n = new M.Color(16777215)), void 0 === r && (r = M.NormalBlending), i = g(i, v(0, i)), this.lensFlares.push({
                    texture: t,
                    size: e,
                    distance: i,
                    x: 0,
                    y: 0,
                    z: 0,
                    scale: 1,
                    rotation: 0,
                    opacity: a,
                    color: n,
                    blending: r
                })
            }, M.LensFlare.prototype.updateLensFlares = function() {
                var t, e, i = this.lensFlares.length,
                    r = 2 * -this.positionScreen.x,
                    n = 2 * -this.positionScreen.y;
                for (t = 0; t < i; t++) e = this.lensFlares[t], e.x = this.positionScreen.x + r * e.distance, e.y = this.positionScreen.y + n * e.distance, e.wantedRotation = e.x * f * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
            }, M.LensFlare.prototype.copy = function(t) {
                M.Object3D.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
                for (var e = 0, i = t.lensFlares.length; e < i; e++) this.lensFlares.push(t.lensFlares[e]);
                return this
            }, M.Line = function(t, e, i) {
                return 1 === i ? new M.LineSegments(t, e) : (M.Object3D.call(this), this.type = "Line", this.geometry = void 0 === t ? new M.Geometry : t, void(this.material = void 0 === e ? new M.LineBasicMaterial({
                    color: 16777215 * Math.random()
                }) : e))
            }, M.Line.prototype = Object.create(M.Object3D.prototype), M.Line.prototype.constructor = M.Line, M.Line.prototype.raycast = function() {
                var t = new M.Matrix4,
                    e = new M.Ray,
                    i = new M.Sphere;
                return function(r, n) {
                    var a = r.linePrecision,
                        o = a * a,
                        s = this.geometry,
                        h = this.matrixWorld;
                    if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(h), !1 !== r.ray.intersectsSphere(i)) {
                        t.getInverse(h), e.copy(r.ray).applyMatrix4(t);
                        var u = new M.Vector3,
                            l = new M.Vector3,
                            c = new M.Vector3,
                            p = new M.Vector3,
                            d = this instanceof M.LineSegments ? 2 : 1;
                        if (s instanceof M.BufferGeometry) {
                            var f = s.index,
                                m = s.attributes.position.array;
                            if (null !== f)
                                for (var v = f.array, g = 0, y = v.length - 1; g < y; g += d) {
                                    var x = v[g],
                                        _ = v[g + 1];
                                    u.fromArray(m, 3 * x), l.fromArray(m, 3 * _), e.distanceSqToSegment(u, l, p, c) > o || (p.applyMatrix4(this.matrixWorld), (w = r.ray.origin.distanceTo(p)) < r.near || w > r.far || n.push({
                                        distance: w,
                                        point: c.clone().applyMatrix4(this.matrixWorld),
                                        index: g,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    }))
                                } else
                                    for (var g = 0, y = m.length / 3 - 1; g < y; g += d) u.fromArray(m, 3 * g), l.fromArray(m, 3 * g + 3), e.distanceSqToSegment(u, l, p, c) > o || (p.applyMatrix4(this.matrixWorld), (w = r.ray.origin.distanceTo(p)) < r.near || w > r.far || n.push({
                                        distance: w,
                                        point: c.clone().applyMatrix4(this.matrixWorld),
                                        index: g,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    }))
                        } else if (s instanceof M.Geometry)
                            for (var b = s.vertices, S = b.length, g = 0; g < S - 1; g += d)
                                if (!(e.distanceSqToSegment(b[g], b[g + 1], p, c) > o)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var w = r.ray.origin.distanceTo(p);
                                    w < r.near || w > r.far || n.push({
                                        distance: w,
                                        point: c.clone().applyMatrix4(this.matrixWorld),
                                        index: g,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                    }
                }
            }(), M.Line.prototype.clone = function() {
                return new this.constructor(this.geometry, this.material).copy(this)
            }, M.LineStrip = 0, M.LinePieces = 1, M.LineSegments = function(t, e) {
                M.Line.call(this, t, e), this.type = "LineSegments"
            }, M.LineSegments.prototype = Object.create(M.Line.prototype), M.LineSegments.prototype.constructor = M.LineSegments, M.Mesh = function(t, e) {
                M.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 === t ? new M.Geometry : t, this.material = void 0 === e ? new M.MeshBasicMaterial({
                    color: 16777215 * Math.random()
                }) : e, this.drawMode = M.TrianglesDrawMode, this.updateMorphTargets()
            }, M.Mesh.prototype = Object.create(M.Object3D.prototype), M.Mesh.prototype.constructor = M.Mesh, M.Mesh.prototype.setDrawMode = function(t) {
                this.drawMode = t
            }, M.Mesh.prototype.updateMorphTargets = function() {
                if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
                    this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (var t = 0, e = this.geometry.morphTargets.length; t < e; t++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[t].name] = t
                }
            }, M.Mesh.prototype.getMorphTargetIndexByName = function(t) {
                return void 0 === this.morphTargetDictionary[t] ? 0 : this.morphTargetDictionary[t]
            }, M.Mesh.prototype.raycast = function() {
                function t(t, e, i, r, n, a, o) {
                    return M.Triangle.barycoordFromPoint(t, e, i, r, v), n.multiplyScalar(v.x), a.multiplyScalar(v.y), o.multiplyScalar(v.z), n.add(a).add(o), n.clone()
                }

                function e(t, e, i, r, n, a, o) {
                    var s = t.material;
                    if (null === (s.side === M.BackSide ? i.intersectTriangle(a, n, r, !0, o) : i.intersectTriangle(r, n, a, s.side !== M.DoubleSide, o))) return null;
                    y.copy(o), y.applyMatrix4(t.matrixWorld);
                    var h = e.ray.origin.distanceTo(y);
                    return h < e.near || h > e.far ? null : {
                        distance: h,
                        point: y.clone(),
                        object: t
                    }
                }

                function i(i, r, n, a, u, l, c, m) {
                    o.fromArray(a, 3 * l), s.fromArray(a, 3 * c), h.fromArray(a, 3 * m);
                    var v = e(i, r, n, o, s, h, g);
                    return v && (u && (p.fromArray(u, 2 * l), d.fromArray(u, 2 * c), f.fromArray(u, 2 * m), v.uv = t(g, o, s, h, p, d, f)), v.face = new M.Face3(l, c, m, M.Triangle.normal(o, s, h)), v.faceIndex = l), v
                }
                var r = new M.Matrix4,
                    n = new M.Ray,
                    a = new M.Sphere,
                    o = new M.Vector3,
                    s = new M.Vector3,
                    h = new M.Vector3,
                    u = new M.Vector3,
                    l = new M.Vector3,
                    c = new M.Vector3,
                    p = new M.Vector2,
                    d = new M.Vector2,
                    f = new M.Vector2,
                    v = new M.Vector3,
                    g = new M.Vector3,
                    y = new M.Vector3;
                return function(v, y) {
                    var x = this.geometry,
                        _ = this.material,
                        b = this.matrixWorld;
                    if (void 0 !== _ && (null === x.boundingSphere && x.computeBoundingSphere(), a.copy(x.boundingSphere), a.applyMatrix4(b), !1 !== v.ray.intersectsSphere(a)) && (r.getInverse(b), n.copy(v.ray).applyMatrix4(r), null === x.boundingBox || !1 !== n.intersectsBox(x.boundingBox))) {
                        var S, w;
                        if (x instanceof M.BufferGeometry) {
                            var E, T, A, L = x.index,
                                R = x.attributes,
                                C = R.position.array;
                            if (void 0 !== R.uv && (S = R.uv.array), null !== L)
                                for (var U = L.array, F = 0, P = U.length; F < P; F += 3) E = U[F], T = U[F + 1], A = U[F + 2], (w = i(this, v, n, C, S, E, T, A)) && (w.faceIndex = m(F / 3), y.push(w));
                            else
                                for (var F = 0, P = C.length; F < P; F += 9) E = F / 3, T = E + 1, A = E + 2, (w = i(this, v, n, C, S, E, T, A)) && (w.index = E, y.push(w))
                        } else if (x instanceof M.Geometry) {
                            var D, N, B, I = _ instanceof M.MultiMaterial,
                                O = 1 == I ? _.materials : null,
                                V = x.vertices,
                                z = x.faces,
                                G = x.faceVertexUvs[0];
                            0 < G.length && (S = G);
                            for (var k = 0, W = z.length; k < W; k++) {
                                var j = z[k],
                                    X = 1 == I ? O[j.materialIndex] : _;
                                if (void 0 !== X) {
                                    if (D = V[j.a], N = V[j.b], B = V[j.c], !0 === X.morphTargets) {
                                        var H = x.morphTargets,
                                            Y = this.morphTargetInfluences;
                                        o.set(0, 0, 0), s.set(0, 0, 0), h.set(0, 0, 0);
                                        for (var q, Z = 0, Q = H.length; Z < Q; Z++)
                                            if (0 !== (q = Y[Z])) {
                                                var J = H[Z].vertices;
                                                o.addScaledVector(u.subVectors(J[j.a], D), q), s.addScaledVector(l.subVectors(J[j.b], N), q), h.addScaledVector(c.subVectors(J[j.c], B), q)
                                            }
                                        o.add(D), s.add(N), h.add(B), D = o, N = s, B = h
                                    }
                                    if (w = e(this, v, n, D, N, B, g)) {
                                        if (S) {
                                            var K = S[k];
                                            p.copy(K[0]), d.copy(K[1]), f.copy(K[2]), w.uv = t(g, D, N, B, p, d, f)
                                        }
                                        w.face = j, w.faceIndex = k, y.push(w)
                                    }
                                }
                            }
                        }
                    }
                }
            }(), M.Mesh.prototype.clone = function() {
                return new this.constructor(this.geometry, this.material).copy(this)
            }, M.SkinnedMesh = function(t, e, i) {
                M.Mesh.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new M.Matrix4, this.bindMatrixInverse = new M.Matrix4;
                var r = [];
                if (this.geometry && void 0 !== this.geometry.bones) {
                    for (var n, a, o = 0, s = this.geometry.bones.length; o < s; ++o) a = this.geometry.bones[o], n = new M.Bone(this), r.push(n), n.name = a.name, n.position.fromArray(a.pos), n.quaternion.fromArray(a.rotq), void 0 !== a.scl && n.scale.fromArray(a.scl);
                    for (var o = 0, s = this.geometry.bones.length; o < s; ++o) - 1 !== (a = this.geometry.bones[o]).parent && null !== a.parent ? r[a.parent].add(r[o]) : this.add(r[o])
                }
                this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new M.Skeleton(r, void 0, i), this.matrixWorld)
            }, M.SkinnedMesh.prototype = Object.create(M.Mesh.prototype), M.SkinnedMesh.prototype.constructor = M.SkinnedMesh, M.SkinnedMesh.prototype.bind = function(t, e) {
                this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
            }, M.SkinnedMesh.prototype.pose = function() {
                this.skeleton.pose()
            }, M.SkinnedMesh.prototype.normalizeSkinWeights = function() {
                if (this.geometry instanceof M.Geometry)
                    for (r = 0; r < this.geometry.skinWeights.length; r++) {
                        var t = this.geometry.skinWeights[r];
                        (n = 1 / t.lengthManhattan()) == 1 / 0 ? t.set(1, 0, 0, 0) : t.multiplyScalar(n)
                    } else if (this.geometry instanceof M.BufferGeometry)
                        for (var e = new M.Vector4, i = this.geometry.attributes.skinWeight, r = 0; r < i.count; r++) {
                            e.x = i.getX(r), e.y = i.getY(r), e.z = i.getZ(r), e.w = i.getW(r);
                            var n = 1 / e.lengthManhattan();
                            n == 1 / 0 ? e.set(1, 0, 0, 0) : e.multiplyScalar(n), i.setXYZW(r, e.x, e.y, e.z, e.w)
                        }
            }, M.SkinnedMesh.prototype.updateMatrixWorld = function() {
                M.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode && this.bindMatrixInverse.getInverse(this.bindMatrix)
            }, M.SkinnedMesh.prototype.clone = function() {
                return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
            }, M.Points = function(t, e) {
                M.Object3D.call(this), this.type = "Points", this.geometry = void 0 === t ? new M.Geometry : t, this.material = void 0 === e ? new M.PointsMaterial({
                    color: 16777215 * Math.random()
                }) : e
            }, M.Points.prototype = Object.create(M.Object3D.prototype), M.Points.prototype.constructor = M.Points, M.Points.prototype.raycast = function() {
                var t = new M.Matrix4,
                    e = new M.Ray,
                    i = new M.Sphere;
                return function(r, n) {
                    function a(t, i) {
                        var a = e.distanceSqToPoint(t);
                        if (a < p) {
                            var s = e.closestPointToPoint(t);
                            s.applyMatrix4(h);
                            var l = r.ray.origin.distanceTo(s);
                            if (l < r.near || l > r.far) return;
                            n.push({
                                distance: l,
                                distanceToRay: u(a),
                                point: s.clone(),
                                index: i,
                                face: null,
                                object: o
                            })
                        }
                    }
                    var o = this,
                        s = this.geometry,
                        h = this.matrixWorld,
                        l = r.params.Points.threshold;
                    if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(h), !1 !== r.ray.intersectsSphere(i)) {
                        t.getInverse(h), e.copy(r.ray).applyMatrix4(t);
                        var c = l / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                            p = c * c,
                            d = new M.Vector3;
                        if (s instanceof M.BufferGeometry) {
                            var f = s.index,
                                m = s.attributes.position.array;
                            if (null !== f)
                                for (var v, g = f.array, y = 0, x = g.length; y < x; y++) v = g[y], d.fromArray(m, 3 * v), a(d, v);
                            else
                                for (var y = 0, _ = m.length / 3; y < _; y++) d.fromArray(m, 3 * y), a(d, y)
                        } else
                            for (var b = s.vertices, y = 0, _ = b.length; y < _; y++) a(b[y], y)
                    }
                }
            }(), M.Points.prototype.clone = function() {
                return new this.constructor(this.geometry, this.material).copy(this)
            }, M.Light = function(t, e) {
                M.Object3D.call(this), this.type = "Light", this.color = new M.Color(t), this.intensity = void 0 === e ? 1 : e, this.receiveShadow = void 0
            }, M.Light.prototype = Object.create(M.Object3D.prototype), M.Light.prototype.constructor = M.Light, M.Light.prototype.copy = function(t) {
                return M.Object3D.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
            }, M.Light.prototype.toJSON = function(t) {
                var e = M.Object3D.prototype.toJSON.call(this, t);
                return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), e
            }, M.ShaderChunk = {}, M.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n", M.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n", M.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n", M.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n\t#endif\n\n#endif\n", M.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif", M.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n", M.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n", M.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif", M.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n", M.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif", M.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif", M.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\n\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n", M.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n", M.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n", M.ShaderChunk.encodings_pars_fragment = "// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n", M.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\n\t#endif\n\n\tenvColor = envMapTexelToLinear( envColor );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n", M.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( STANDARD )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n\n#ifdef USE_ENVMAP\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n", M.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n", M.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n", M.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n", M.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif", M.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif", M.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n", M.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif", M.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n\t#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif\n", M.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n", M.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n", M.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n", M.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif", M.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n", M.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n", M.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n", M.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif", M.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n", M.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n", M.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n", M.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif", M.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif", M.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n", M.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\n\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n  return toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\n  // John Hable's filmic operator from Uncharted 2 video game\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n  // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n", M.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif", M.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif", M.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif", M.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\n#endif", M.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n", M.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif", M.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n\t#endif\n\n#endif\n", M.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nvoid main() {\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n", M.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\n}\n", M.UniformsUtils = {
                merge: function(t) {
                    for (var e, i = {}, r = 0; r < t.length; r++)
                        for (var n in e = this.clone(t[r])) i[n] = e[n];
                    return i
                },
                clone: function(t) {
                    var e = {};
                    for (var i in t)
                        for (var r in e[i] = {}, t[i]) {
                            var n = t[i][r];
                            e[i][r] = n instanceof M.Color || n instanceof M.Vector2 || n instanceof M.Vector3 || n instanceof M.Vector4 || n instanceof M.Matrix3 || n instanceof M.Matrix4 || n instanceof M.Texture ? n.clone() : Array.isArray(n) ? n.slice() : n
                        }
                    return e
                }
            }, M.UniformsLib = {
                common: {
                    diffuse: {
                        type: "c",
                        value: new M.Color(15658734)
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    },
                    map: {
                        type: "t",
                        value: null
                    },
                    offsetRepeat: {
                        type: "v4",
                        value: new M.Vector4(0, 0, 1, 1)
                    },
                    specularMap: {
                        type: "t",
                        value: null
                    },
                    alphaMap: {
                        type: "t",
                        value: null
                    },
                    envMap: {
                        type: "t",
                        value: null
                    },
                    flipEnvMap: {
                        type: "f",
                        value: -1
                    },
                    reflectivity: {
                        type: "f",
                        value: 1
                    },
                    refractionRatio: {
                        type: "f",
                        value: .98
                    }
                },
                aomap: {
                    aoMap: {
                        type: "t",
                        value: null
                    },
                    aoMapIntensity: {
                        type: "f",
                        value: 1
                    }
                },
                lightmap: {
                    lightMap: {
                        type: "t",
                        value: null
                    },
                    lightMapIntensity: {
                        type: "f",
                        value: 1
                    }
                },
                emissivemap: {
                    emissiveMap: {
                        type: "t",
                        value: null
                    }
                },
                bumpmap: {
                    bumpMap: {
                        type: "t",
                        value: null
                    },
                    bumpScale: {
                        type: "f",
                        value: 1
                    }
                },
                normalmap: {
                    normalMap: {
                        type: "t",
                        value: null
                    },
                    normalScale: {
                        type: "v2",
                        value: new M.Vector2(1, 1)
                    }
                },
                displacementmap: {
                    displacementMap: {
                        type: "t",
                        value: null
                    },
                    displacementScale: {
                        type: "f",
                        value: 1
                    },
                    displacementBias: {
                        type: "f",
                        value: 0
                    }
                },
                roughnessmap: {
                    roughnessMap: {
                        type: "t",
                        value: null
                    }
                },
                metalnessmap: {
                    metalnessMap: {
                        type: "t",
                        value: null
                    }
                },
                fog: {
                    fogDensity: {
                        type: "f",
                        value: 25e-5
                    },
                    fogNear: {
                        type: "f",
                        value: 1
                    },
                    fogFar: {
                        type: "f",
                        value: 2e3
                    },
                    fogColor: {
                        type: "c",
                        value: new M.Color(16777215)
                    }
                },
                lights: {
                    ambientLightColor: {
                        type: "fv",
                        value: []
                    },
                    directionalLights: {
                        type: "sa",
                        value: [],
                        properties: {
                            direction: {
                                type: "v3"
                            },
                            color: {
                                type: "c"
                            },
                            shadow: {
                                type: "i"
                            },
                            shadowBias: {
                                type: "f"
                            },
                            shadowRadius: {
                                type: "f"
                            },
                            shadowMapSize: {
                                type: "v2"
                            }
                        }
                    },
                    directionalShadowMap: {
                        type: "tv",
                        value: []
                    },
                    directionalShadowMatrix: {
                        type: "m4v",
                        value: []
                    },
                    spotLights: {
                        type: "sa",
                        value: [],
                        properties: {
                            color: {
                                type: "c"
                            },
                            position: {
                                type: "v3"
                            },
                            direction: {
                                type: "v3"
                            },
                            distance: {
                                type: "f"
                            },
                            coneCos: {
                                type: "f"
                            },
                            penumbraCos: {
                                type: "f"
                            },
                            decay: {
                                type: "f"
                            },
                            shadow: {
                                type: "i"
                            },
                            shadowBias: {
                                type: "f"
                            },
                            shadowRadius: {
                                type: "f"
                            },
                            shadowMapSize: {
                                type: "v2"
                            }
                        }
                    },
                    spotShadowMap: {
                        type: "tv",
                        value: []
                    },
                    spotShadowMatrix: {
                        type: "m4v",
                        value: []
                    },
                    pointLights: {
                        type: "sa",
                        value: [],
                        properties: {
                            color: {
                                type: "c"
                            },
                            position: {
                                type: "v3"
                            },
                            decay: {
                                type: "f"
                            },
                            distance: {
                                type: "f"
                            },
                            shadow: {
                                type: "i"
                            },
                            shadowBias: {
                                type: "f"
                            },
                            shadowRadius: {
                                type: "f"
                            },
                            shadowMapSize: {
                                type: "v2"
                            }
                        }
                    },
                    pointShadowMap: {
                        type: "tv",
                        value: []
                    },
                    pointShadowMatrix: {
                        type: "m4v",
                        value: []
                    },
                    hemisphereLights: {
                        type: "sa",
                        value: [],
                        properties: {
                            direction: {
                                type: "v3"
                            },
                            skyColor: {
                                type: "c"
                            },
                            groundColor: {
                                type: "c"
                            }
                        }
                    }
                },
                points: {
                    diffuse: {
                        type: "c",
                        value: new M.Color(15658734)
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    },
                    size: {
                        type: "f",
                        value: 1
                    },
                    scale: {
                        type: "f",
                        value: 1
                    },
                    map: {
                        type: "t",
                        value: null
                    },
                    offsetRepeat: {
                        type: "v4",
                        value: new M.Vector4(0, 0, 1, 1)
                    }
                }
            }, M.ShaderLib = {
                basic: {
                    uniforms: M.UniformsUtils.merge([M.UniformsLib.common, M.UniformsLib.aomap, M.UniformsLib.fog]),
                    vertexShader: M.ShaderChunk.meshbasic_vert,
                    fragmentShader: M.ShaderChunk.meshbasic_frag
                },
                lambert: {
                    uniforms: M.UniformsUtils.merge([M.UniformsLib.common, M.UniformsLib.aomap, M.UniformsLib.lightmap, M.UniformsLib.emissivemap, M.UniformsLib.fog, M.UniformsLib.lights, {
                        emissive: {
                            type: "c",
                            value: new M.Color(0)
                        }
                    }]),
                    vertexShader: M.ShaderChunk.meshlambert_vert,
                    fragmentShader: M.ShaderChunk.meshlambert_frag
                },
                phong: {
                    uniforms: M.UniformsUtils.merge([M.UniformsLib.common, M.UniformsLib.aomap, M.UniformsLib.lightmap, M.UniformsLib.emissivemap, M.UniformsLib.bumpmap, M.UniformsLib.normalmap, M.UniformsLib.displacementmap, M.UniformsLib.fog, M.UniformsLib.lights, {
                        emissive: {
                            type: "c",
                            value: new M.Color(0)
                        },
                        specular: {
                            type: "c",
                            value: new M.Color(1118481)
                        },
                        shininess: {
                            type: "f",
                            value: 30
                        }
                    }]),
                    vertexShader: M.ShaderChunk.meshphong_vert,
                    fragmentShader: M.ShaderChunk.meshphong_frag
                },
                standard: {
                    uniforms: M.UniformsUtils.merge([M.UniformsLib.common, M.UniformsLib.aomap, M.UniformsLib.lightmap, M.UniformsLib.emissivemap, M.UniformsLib.bumpmap, M.UniformsLib.normalmap, M.UniformsLib.displacementmap, M.UniformsLib.roughnessmap, M.UniformsLib.metalnessmap, M.UniformsLib.fog, M.UniformsLib.lights, {
                        emissive: {
                            type: "c",
                            value: new M.Color(0)
                        },
                        roughness: {
                            type: "f",
                            value: .5
                        },
                        metalness: {
                            type: "f",
                            value: 0
                        },
                        envMapIntensity: {
                            type: "f",
                            value: 1
                        }
                    }]),
                    vertexShader: M.ShaderChunk.meshstandard_vert,
                    fragmentShader: M.ShaderChunk.meshstandard_frag
                },
                points: {
                    uniforms: M.UniformsUtils.merge([M.UniformsLib.points, M.UniformsLib.fog]),
                    vertexShader: M.ShaderChunk.points_vert,
                    fragmentShader: M.ShaderChunk.points_frag
                },
                dashed: {
                    uniforms: M.UniformsUtils.merge([M.UniformsLib.common, M.UniformsLib.fog, {
                        scale: {
                            type: "f",
                            value: 1
                        },
                        dashSize: {
                            type: "f",
                            value: 1
                        },
                        totalSize: {
                            type: "f",
                            value: 2
                        }
                    }]),
                    vertexShader: M.ShaderChunk.linedashed_vert,
                    fragmentShader: M.ShaderChunk.linedashed_frag
                },
                depth: {
                    uniforms: {
                        mNear: {
                            type: "f",
                            value: 1
                        },
                        mFar: {
                            type: "f",
                            value: 2e3
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        }
                    },
                    vertexShader: M.ShaderChunk.depth_vert,
                    fragmentShader: M.ShaderChunk.depth_frag
                },
                normal: {
                    uniforms: {
                        opacity: {
                            type: "f",
                            value: 1
                        }
                    },
                    vertexShader: M.ShaderChunk.normal_vert,
                    fragmentShader: M.ShaderChunk.normal_frag
                },
                cube: {
                    uniforms: {
                        tCube: {
                            type: "t",
                            value: null
                        },
                        tFlip: {
                            type: "f",
                            value: -1
                        }
                    },
                    vertexShader: M.ShaderChunk.cube_vert,
                    fragmentShader: M.ShaderChunk.cube_frag
                },
                equirect: {
                    uniforms: {
                        tEquirect: {
                            type: "t",
                            value: null
                        },
                        tFlip: {
                            type: "f",
                            value: -1
                        }
                    },
                    vertexShader: M.ShaderChunk.equirect_vert,
                    fragmentShader: M.ShaderChunk.equirect_frag
                },
                depthRGBA: {
                    uniforms: {},
                    vertexShader: M.ShaderChunk.depthRGBA_vert,
                    fragmentShader: M.ShaderChunk.depthRGBA_frag
                },
                distanceRGBA: {
                    uniforms: {
                        lightPos: {
                            type: "v3",
                            value: new M.Vector3(0, 0, 0)
                        }
                    },
                    vertexShader: M.ShaderChunk.distanceRGBA_vert,
                    fragmentShader: M.ShaderChunk.distanceRGBA_frag
                }
            }, M.WebGLRenderer = function(t) {
                function e() {
                    return null == Tt ? Vt : 1
                }

                function i(t, e, i, r) {
                    !0 === ft && (t *= r, e *= r, i *= r), $t.clearColor(t, e, i, r)
                }

                function r() {
                    $t.init(), $t.scissor(Ut.copy(zt).multiplyScalar(Vt)), $t.viewport(Pt.copy(kt).multiplyScalar(Vt)), i(Nt.r, Nt.g, Nt.b, Bt)
                }

                function n() {
                    Et = null, Ct = null, Rt = "", Lt = -1, $t.reset()
                }

                function o(t) {
                    t.preventDefault(), n(), r(), te.clear()
                }

                function h(t) {
                    var e = t.target;
                    e.removeEventListener("dispose", h), c(e), Yt.textures--
                }

                function u(t) {
                    var e = t.target;
                    e.removeEventListener("dispose", u), f(e), Yt.textures--
                }

                function l(t) {
                    var e = t.target;
                    e.removeEventListener("dispose", l), y(e)
                }

                function c(t) {
                    var e = te.get(t);
                    if (t.image && e.__image__webglTextureCube) Zt.deleteTexture(e.__image__webglTextureCube);
                    else {
                        if (void 0 === e.__webglInit) return;
                        Zt.deleteTexture(e.__webglTexture)
                    }
                    te.delete(t)
                }

                function f(t) {
                    var e = te.get(t),
                        i = te.get(t.texture);
                    if (t && void 0 !== i.__webglTexture) {
                        if (Zt.deleteTexture(i.__webglTexture), t instanceof M.WebGLRenderTargetCube)
                            for (var r = 0; 6 > r; r++) Zt.deleteFramebuffer(e.__webglFramebuffer[r]), Zt.deleteRenderbuffer(e.__webglDepthbuffer[r]);
                        else Zt.deleteFramebuffer(e.__webglFramebuffer), Zt.deleteRenderbuffer(e.__webglDepthbuffer);
                        te.delete(t.texture), te.delete(t)
                    }
                }

                function y(t) {
                    x(t), te.delete(t)
                }

                function x(t) {
                    var e = te.get(t).program;
                    t.program = void 0, void 0 !== e && ie.releaseProgram(e)
                }

                function _(t, e, i, r) {
                    var n;
                    if (!(i instanceof M.InstancedBufferGeometry && null === (n = Jt.get("ANGLE_instanced_arrays")))) {
                        void 0 === r && (r = 0), $t.initAttributes();
                        var a = i.attributes,
                            o = e.getAttributes(),
                            s = t.defaultAttributeValues;
                        for (var h in o) {
                            var u = o[h];
                            if (0 <= u) {
                                var l = a[h];
                                if (void 0 !== l) {
                                    var c = l.itemSize,
                                        p = ee.getAttributeBuffer(l);
                                    if (l instanceof M.InterleavedBufferAttribute) {
                                        var d = l.data,
                                            f = d.stride,
                                            m = l.offset;
                                        d instanceof M.InstancedInterleavedBuffer ? ($t.enableAttributeAndDivisor(u, d.meshPerAttribute, n), void 0 === i.maxInstancedCount && (i.maxInstancedCount = d.meshPerAttribute * d.count)) : $t.enableAttribute(u), Zt.bindBuffer(Zt.ARRAY_BUFFER, p), Zt.vertexAttribPointer(u, c, Zt.FLOAT, !1, f * d.array.BYTES_PER_ELEMENT, (r * f + m) * d.array.BYTES_PER_ELEMENT)
                                    } else l instanceof M.InstancedBufferAttribute ? ($t.enableAttributeAndDivisor(u, l.meshPerAttribute, n), void 0 === i.maxInstancedCount && (i.maxInstancedCount = l.meshPerAttribute * l.count)) : $t.enableAttribute(u), Zt.bindBuffer(Zt.ARRAY_BUFFER, p), Zt.vertexAttribPointer(u, c, Zt.FLOAT, !1, 0, r * c * 4)
                                } else if (void 0 !== s) {
                                    var v = s[h];
                                    if (void 0 !== v) switch (v.length) {
                                        case 2:
                                            Zt.vertexAttrib2fv(u, v);
                                            break;
                                        case 3:
                                            Zt.vertexAttrib3fv(u, v);
                                            break;
                                        case 4:
                                            Zt.vertexAttrib4fv(u, v);
                                            break;
                                        default:
                                            Zt.vertexAttrib1fv(u, v)
                                    }
                                }
                            }
                        }
                        $t.disableUnusedAttributes()
                    }
                }

                function b(t, e) {
                    return s(e[0]) - s(t[0])
                }

                function S(t, e) {
                    return t.object.renderOrder === e.object.renderOrder ? t.material.id === e.material.id ? t.z === e.z ? t.id - e.id : t.z - e.z : t.material.id - e.material.id : t.object.renderOrder - e.object.renderOrder
                }

                function w(t, e) {
                    return t.object.renderOrder === e.object.renderOrder ? t.z === e.z ? t.id - e.id : e.z - t.z : t.object.renderOrder - e.object.renderOrder
                }

                function E(t, e, i, r, n) {
                    var a, o;
                    i.transparent ? (a = xt, o = ++Mt) : (a = gt, o = ++yt);
                    var s = a[o];
                    void 0 === s ? (s = {
                        id: t.id,
                        object: t,
                        geometry: e,
                        material: i,
                        z: Xt.z,
                        group: n
                    }, a.push(s)) : (s.id = t.id, s.object = t, s.geometry = e, s.material = i, s.z = Xt.z, s.group = n)
                }

                function T(t, e) {
                    if (!1 !== t.visible) {
                        if (t.layers.test(e.layers))
                            if (t instanceof M.Light) vt.push(t);
                            else if (t instanceof M.Sprite)(!1 === t.frustumCulled || !0 === Wt.intersectsObject(t)) && bt.push(t);
                        else if (t instanceof M.LensFlare) St.push(t);
                        else if (t instanceof M.ImmediateRenderObject) !0 === wt.sortObjects && (Xt.setFromMatrixPosition(t.matrixWorld), Xt.applyProjection(jt)), E(t, null, t.material, Xt.z, null);
                        else if ((t instanceof M.Mesh || t instanceof M.Line || t instanceof M.Points) && (t instanceof M.SkinnedMesh && t.skeleton.update(), !1 === t.frustumCulled || !0 === Wt.intersectsObject(t))) {
                            var i = t.material;
                            if (!0 === i.visible) {
                                !0 === wt.sortObjects && (Xt.setFromMatrixPosition(t.matrixWorld), Xt.applyProjection(jt));
                                var r = ee.update(t);
                                if (i instanceof M.MultiMaterial)
                                    for (var n = r.groups, a = i.materials, o = 0, s = n.length; o < s; o++) {
                                        var h = n[o],
                                            u = a[h.materialIndex];
                                        !0 === u.visible && E(t, r, u, Xt.z, h)
                                    } else E(t, r, i, Xt.z, null)
                            }
                        }
                        for (var l = t.children, o = 0, s = l.length; o < s; o++) T(l[o], e)
                    }
                }

                function A(t, e, i, r) {
                    for (var n = 0, a = t.length; n < a; n++) {
                        var o = t[n],
                            s = o.object,
                            h = o.geometry,
                            u = void 0 === r ? o.material : r,
                            l = o.group;
                        if (s.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, s.matrixWorld), s.normalMatrix.getNormalMatrix(s.modelViewMatrix), s instanceof M.ImmediateRenderObject) {
                            R(u);
                            var c = U(e, i, u, s);
                            Rt = "", s.render(function(t) {
                                wt.renderBufferImmediate(t, c, u)
                            })
                        } else wt.renderBufferDirect(e, i, h, u, s, l)
                    }
                }

                function L(t, e, i) {
                    var r = te.get(t),
                        n = ie.getParameters(t, Ht, e, i),
                        a = ie.getProgramCode(t, n),
                        o = r.program,
                        s = !0;
                    if (void 0 === o) t.addEventListener("dispose", l);
                    else if (o.code !== a) x(t);
                    else {
                        if (void 0 !== n.shaderID) return;
                        s = !1
                    }
                    if (s) {
                        if (n.shaderID) {
                            var h = M.ShaderLib[n.shaderID];
                            r.__webglShader = {
                                name: t.type,
                                uniforms: M.UniformsUtils.clone(h.uniforms),
                                vertexShader: h.vertexShader,
                                fragmentShader: h.fragmentShader
                            }
                        } else r.__webglShader = {
                            name: t.type,
                            uniforms: t.uniforms,
                            vertexShader: t.vertexShader,
                            fragmentShader: t.fragmentShader
                        };
                        t.__webglShader = r.__webglShader, o = ie.acquireProgram(t, n, a), r.program = o, t.program = o
                    }
                    var u = o.getAttributes();
                    if (t.morphTargets) {
                        t.numSupportedMorphTargets = 0;
                        for (c = 0; c < wt.maxMorphTargets; c++) 0 <= u["morphTarget" + c] && t.numSupportedMorphTargets++
                    }
                    if (t.morphNormals) {
                        t.numSupportedMorphNormals = 0;
                        for (var c = 0; c < wt.maxMorphNormals; c++) 0 <= u["morphNormal" + c] && t.numSupportedMorphNormals++
                    }
                    r.uniformsList = [];
                    var p = r.__webglShader.uniforms,
                        d = r.program.getUniforms();
                    for (var f in p) {
                        var m = d[f];
                        m && r.uniformsList.push([r.__webglShader.uniforms[f], m])
                    }(t instanceof M.MeshPhongMaterial || t instanceof M.MeshLambertMaterial || t instanceof M.MeshStandardMaterial || t.lights) && (r.lightsHash = Ht.hash, p.ambientLightColor.value = Ht.ambient, p.directionalLights.value = Ht.directional, p.spotLights.value = Ht.spot, p.pointLights.value = Ht.point, p.hemisphereLights.value = Ht.hemi, p.directionalShadowMap.value = Ht.directionalShadowMap, p.directionalShadowMatrix.value = Ht.directionalShadowMatrix, p.spotShadowMap.value = Ht.spotShadowMap, p.spotShadowMatrix.value = Ht.spotShadowMatrix, p.pointShadowMap.value = Ht.pointShadowMap, p.pointShadowMatrix.value = Ht.pointShadowMatrix), r.hasDynamicUniforms = !1;
                    for (var v = 0, g = r.uniformsList.length; v < g; v++)
                        if (!0 === r.uniformsList[v][0].dynamic) {
                            r.hasDynamicUniforms = !0;
                            break
                        }
                }

                function R(t) {
                    C(t), !0 === t.transparent ? $t.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : $t.setBlending(M.NoBlending), $t.setDepthFunc(t.depthFunc), $t.setDepthTest(t.depthTest), $t.setDepthWrite(t.depthWrite), $t.setColorWrite(t.colorWrite), $t.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
                }

                function C(t) {
                    t.side === M.DoubleSide ? $t.disable(Zt.CULL_FACE) : $t.enable(Zt.CULL_FACE), $t.setFlipSided(t.side === M.BackSide)
                }

                function U(t, e, i, r) {
                    Dt = 0;
                    var n = te.get(i);
                    void 0 === n.program && (i.needsUpdate = !0), void 0 !== n.lightsHash && n.lightsHash !== Ht.hash && (i.needsUpdate = !0), i.needsUpdate && (L(i, e, r), i.needsUpdate = !1);
                    var a = !1,
                        o = !1,
                        s = !1,
                        h = n.program,
                        u = h.getUniforms(),
                        l = n.__webglShader.uniforms;
                    if (h.id !== Et && (Zt.useProgram(h.program), Et = h.id, a = !0, o = !0, s = !0), i.id !== Lt && (Lt = i.id, o = !0), (a || t !== Ct) && (Zt.uniformMatrix4fv(u.projectionMatrix, !1, t.projectionMatrix.elements), Kt.logarithmicDepthBuffer && Zt.uniform1f(u.logDepthBufFC, 2 / (d(t.far + 1) / p)), t !== Ct && (Ct = t, o = !0, s = !0), (i instanceof M.ShaderMaterial || i instanceof M.MeshPhongMaterial || i instanceof M.MeshStandardMaterial || i.envMap) && void 0 !== u.cameraPosition && (Xt.setFromMatrixPosition(t.matrixWorld), Zt.uniform3f(u.cameraPosition, Xt.x, Xt.y, Xt.z)), (i instanceof M.MeshPhongMaterial || i instanceof M.MeshLambertMaterial || i instanceof M.MeshBasicMaterial || i instanceof M.MeshStandardMaterial || i instanceof M.ShaderMaterial || i.skinning) && void 0 !== u.viewMatrix && Zt.uniformMatrix4fv(u.viewMatrix, !1, t.matrixWorldInverse.elements), void 0 !== u.toneMappingExposure && Zt.uniform1f(u.toneMappingExposure, wt.toneMappingExposure), void 0 !== u.toneMappingWhitePoint && Zt.uniform1f(u.toneMappingWhitePoint, wt.toneMappingWhitePoint)), i.skinning)
                        if (r.bindMatrix && void 0 !== u.bindMatrix && Zt.uniformMatrix4fv(u.bindMatrix, !1, r.bindMatrix.elements), r.bindMatrixInverse && void 0 !== u.bindMatrixInverse && Zt.uniformMatrix4fv(u.bindMatrixInverse, !1, r.bindMatrixInverse.elements), Kt.floatVertexTextures && r.skeleton && r.skeleton.useVertexTexture) {
                            if (void 0 !== u.boneTexture) {
                                var c = W();
                                Zt.uniform1i(u.boneTexture, c), wt.setTexture(r.skeleton.boneTexture, c)
                            }
                            void 0 !== u.boneTextureWidth && Zt.uniform1i(u.boneTextureWidth, r.skeleton.boneTextureWidth), void 0 !== u.boneTextureHeight && Zt.uniform1i(u.boneTextureHeight, r.skeleton.boneTextureHeight)
                        } else r.skeleton && r.skeleton.boneMatrices && void 0 !== u.boneGlobalMatrices && Zt.uniformMatrix4fv(u.boneGlobalMatrices, !1, r.skeleton.boneMatrices);
                    return o && ((i instanceof M.MeshPhongMaterial || i instanceof M.MeshLambertMaterial || i instanceof M.MeshStandardMaterial || i.lights) && G(l, s), e && i.fog && I(l, e), (i instanceof M.MeshBasicMaterial || i instanceof M.MeshLambertMaterial || i instanceof M.MeshPhongMaterial || i instanceof M.MeshStandardMaterial) && P(l, i), i instanceof M.LineBasicMaterial ? D(l, i) : i instanceof M.LineDashedMaterial ? (D(l, i), N(l, i)) : i instanceof M.PointsMaterial ? B(l, i) : i instanceof M.MeshLambertMaterial ? O(l, i) : i instanceof M.MeshPhongMaterial ? V(l, i) : i instanceof M.MeshStandardMaterial ? z(l, i) : i instanceof M.MeshDepthMaterial ? (l.mNear.value = t.near, l.mFar.value = t.far, l.opacity.value = i.opacity) : i instanceof M.MeshNormalMaterial && (l.opacity.value = i.opacity), X(n.uniformsList)), k(u, r), void 0 !== u.modelMatrix && Zt.uniformMatrix4fv(u.modelMatrix, !1, r.matrixWorld.elements), !0 === n.hasDynamicUniforms && F(n.uniformsList, r, t), h
                }

                function F(t, e, i) {
                    for (var r = [], n = 0, a = t.length; n < a; n++) {
                        var o = t[n][0],
                            s = o.onUpdateCallback;
                        void 0 !== s && (s.bind(o)(e, i), r.push(t[n]))
                    }
                    X(r)
                }

                function P(t, e) {
                    t.opacity.value = e.opacity, t.diffuse.value = e.color, e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), t.map.value = e.map, t.specularMap.value = e.specularMap, t.alphaMap.value = e.alphaMap, e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
                    var i;
                    if (e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i) {
                        i instanceof M.WebGLRenderTarget && (i = i.texture);
                        var r = i.offset,
                            n = i.repeat;
                        t.offsetRepeat.value.set(r.x, r.y, n.x, n.y)
                    }
                    t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap instanceof M.WebGLRenderTargetCube ? 1 : -1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio
                }

                function D(t, e) {
                    t.diffuse.value = e.color, t.opacity.value = e.opacity
                }

                function N(t, e) {
                    t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
                }

                function B(t, e) {
                    if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * Vt, t.scale.value = ht.clientHeight / 2, t.map.value = e.map, null !== e.map) {
                        var i = e.map.offset,
                            r = e.map.repeat;
                        t.offsetRepeat.value.set(i.x, i.y, r.x, r.y)
                    }
                }

                function I(t, e) {
                    t.fogColor.value = e.color, e instanceof M.Fog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e instanceof M.FogExp2 && (t.fogDensity.value = e.density)
                }

                function O(t, e) {
                    e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
                }

                function V(t, e) {
                    t.specular.value = e.specular, t.shininess.value = v(e.shininess, 1e-4), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                }

                function z(t, e) {
                    t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
                }

                function G(t, e) {
                    t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
                }

                function k(t, e) {
                    Zt.uniformMatrix4fv(t.modelViewMatrix, !1, e.modelViewMatrix.elements), t.normalMatrix && Zt.uniformMatrix3fv(t.normalMatrix, !1, e.normalMatrix.elements)
                }

                function W() {
                    var t = Dt;
                    return Kt.maxTextures, Dt += 1, t
                }

                function j(t, e, i, r) {
                    var n, a;
                    if ("1i" === e) Zt.uniform1i(i, r);
                    else if ("1f" === e) Zt.uniform1f(i, r);
                    else if ("2f" === e) Zt.uniform2f(i, r[0], r[1]);
                    else if ("3f" === e) Zt.uniform3f(i, r[0], r[1], r[2]);
                    else if ("4f" === e) Zt.uniform4f(i, r[0], r[1], r[2], r[3]);
                    else if ("1iv" === e) Zt.uniform1iv(i, r);
                    else if ("3iv" === e) Zt.uniform3iv(i, r);
                    else if ("1fv" === e) Zt.uniform1fv(i, r);
                    else if ("2fv" === e) Zt.uniform2fv(i, r);
                    else if ("3fv" === e) Zt.uniform3fv(i, r);
                    else if ("4fv" === e) Zt.uniform4fv(i, r);
                    else if ("Matrix2fv" === e) Zt.uniformMatrix2fv(i, !1, r);
                    else if ("Matrix3fv" === e) Zt.uniformMatrix3fv(i, !1, r);
                    else if ("Matrix4fv" === e) Zt.uniformMatrix4fv(i, !1, r);
                    else if ("i" === e) Zt.uniform1i(i, r);
                    else if ("f" === e) Zt.uniform1f(i, r);
                    else if ("v2" === e) Zt.uniform2f(i, r.x, r.y);
                    else if ("v3" === e) Zt.uniform3f(i, r.x, r.y, r.z);
                    else if ("v4" === e) Zt.uniform4f(i, r.x, r.y, r.z, r.w);
                    else if ("c" === e) Zt.uniform3f(i, r.r, r.g, r.b);
                    else if ("s" === e) {
                        l = t.properties;
                        for (var o in l) {
                            var s = l[o],
                                h = i[o],
                                u = r[o];
                            j(s, s.type, h, u)
                        }
                    } else if ("sa" === e)
                        for (var l = t.properties, c = 0, p = r.length; c < p; c++)
                            for (var o in l) {
                                var s = l[o],
                                    h = i[c][o],
                                    u = r[c][o];
                                j(s, s.type, h, u)
                            } else if ("iv1" === e) Zt.uniform1iv(i, r);
                            else if ("iv" === e) Zt.uniform3iv(i, r);
                    else if ("fv1" === e) Zt.uniform1fv(i, r);
                    else if ("fv" === e) Zt.uniform3fv(i, r);
                    else if ("v2v" === e) {
                        void 0 === t._array && (t._array = new Float32Array(2 * r.length));
                        for (var c = 0, d = 0, f = r.length; c < f; c++, d += 2) t._array[d + 0] = r[c].x, t._array[d + 1] = r[c].y;
                        Zt.uniform2fv(i, t._array)
                    } else if ("v3v" === e) {
                        void 0 === t._array && (t._array = new Float32Array(3 * r.length));
                        for (var c = 0, m = 0, f = r.length; c < f; c++, m += 3) t._array[m + 0] = r[c].x, t._array[m + 1] = r[c].y, t._array[m + 2] = r[c].z;
                        Zt.uniform3fv(i, t._array)
                    } else if ("v4v" === e) {
                        void 0 === t._array && (t._array = new Float32Array(4 * r.length));
                        for (var c = 0, v = 0, f = r.length; c < f; c++, v += 4) t._array[v + 0] = r[c].x, t._array[v + 1] = r[c].y, t._array[v + 2] = r[c].z, t._array[v + 3] = r[c].w;
                        Zt.uniform4fv(i, t._array)
                    } else if ("m2" === e) Zt.uniformMatrix2fv(i, !1, r.elements);
                    else if ("m3" === e) Zt.uniformMatrix3fv(i, !1, r.elements);
                    else if ("m3v" === e) {
                        void 0 === t._array && (t._array = new Float32Array(9 * r.length));
                        for (var c = 0, f = r.length; c < f; c++) r[c].flattenToArrayOffset(t._array, 9 * c);
                        Zt.uniformMatrix3fv(i, !1, t._array)
                    } else if ("m4" === e) Zt.uniformMatrix4fv(i, !1, r.elements);
                    else if ("m4v" === e) {
                        void 0 === t._array && (t._array = new Float32Array(16 * r.length));
                        for (var c = 0, f = r.length; c < f; c++) r[c].flattenToArrayOffset(t._array, 16 * c);
                        Zt.uniformMatrix4fv(i, !1, t._array)
                    } else if ("t" === e) {
                        if (n = r, a = W(), Zt.uniform1i(i, a), !n) return;
                        n instanceof M.CubeTexture || Array.isArray(n.image) && 6 === n.image.length ? $(n, a) : n instanceof M.WebGLRenderTargetCube ? tt(n.texture, a) : n instanceof M.WebGLRenderTarget ? wt.setTexture(n.texture, a) : wt.setTexture(n, a)
                    } else if ("tv" === e) {
                        void 0 === t._array && (t._array = []);
                        for (var c = 0, f = t.value.length; c < f; c++) t._array[c] = W();
                        Zt.uniform1iv(i, t._array);
                        for (var c = 0, f = t.value.length; c < f; c++) n = t.value[c], a = t._array[c], n && (n instanceof M.CubeTexture || n.image instanceof Array && 6 === n.image.length ? $(n, a) : n instanceof M.WebGLRenderTarget ? wt.setTexture(n.texture, a) : n instanceof M.WebGLRenderTargetCube ? tt(n.texture, a) : wt.setTexture(n, a))
                    }
                }

                function X(t) {
                    for (var e, i = 0, r = t.length; i < r; i++) !1 !== (e = t[i][0]).needsUpdate && j(e, e.type, t[i][1], e.value)
                }

                function H(t, e) {
                    var i, r, n, o, s, h, u = 0,
                        l = 0,
                        c = 0,
                        p = e.matrixWorldInverse,
                        d = 0,
                        f = 0,
                        m = 0,
                        v = 0,
                        g = 0;
                    for (Ht.shadowsPointLight = 0, i = 0, r = t.length; i < r; i++)
                        if (n = t[i], o = n.color, s = n.intensity, h = n.distance, n instanceof M.AmbientLight) u += o.r * s, l += o.g * s, c += o.b * s;
                        else if (n instanceof M.DirectionalLight)(y = re.get(n)).color.copy(n.color).multiplyScalar(n.intensity), y.direction.setFromMatrixPosition(n.matrixWorld), Xt.setFromMatrixPosition(n.target.matrixWorld), y.direction.sub(Xt), y.direction.transformDirection(p), y.shadow = n.castShadow, n.castShadow && (y.shadowBias = n.shadow.bias, y.shadowRadius = n.shadow.radius, y.shadowMapSize = n.shadow.mapSize, Ht.shadows[g++] = n), Ht.directionalShadowMap[d] = n.shadow.map, Ht.directionalShadowMatrix[d] = n.shadow.matrix, Ht.directional[d++] = y;
                    else if (n instanceof M.SpotLight)(y = re.get(n)).position.setFromMatrixPosition(n.matrixWorld), y.position.applyMatrix4(p), y.color.copy(o).multiplyScalar(s), y.distance = h, y.direction.setFromMatrixPosition(n.matrixWorld), Xt.setFromMatrixPosition(n.target.matrixWorld), y.direction.sub(Xt), y.direction.transformDirection(p), y.coneCos = a(n.angle), y.penumbraCos = a(n.angle * (1 - n.penumbra)), y.decay = 0 === n.distance ? 0 : n.decay, y.shadow = n.castShadow, n.castShadow && (y.shadowBias = n.shadow.bias, y.shadowRadius = n.shadow.radius, y.shadowMapSize = n.shadow.mapSize, Ht.shadows[g++] = n), Ht.spotShadowMap[m] = n.shadow.map, Ht.spotShadowMatrix[m] = n.shadow.matrix, Ht.spot[m++] = y;
                    else if (n instanceof M.PointLight)(y = re.get(n)).position.setFromMatrixPosition(n.matrixWorld), y.position.applyMatrix4(p), y.color.copy(n.color).multiplyScalar(n.intensity), y.distance = n.distance, y.decay = 0 === n.distance ? 0 : n.decay, y.shadow = n.castShadow, n.castShadow && (y.shadowBias = n.shadow.bias, y.shadowRadius = n.shadow.radius, y.shadowMapSize = n.shadow.mapSize, Ht.shadows[g++] = n), Ht.pointShadowMap[f] = n.shadow.map, void 0 === Ht.pointShadowMatrix[f] && (Ht.pointShadowMatrix[f] = new M.Matrix4), Xt.setFromMatrixPosition(n.matrixWorld).negate(), Ht.pointShadowMatrix[f].identity().setPosition(Xt), Ht.point[f++] = y;
                    else if (n instanceof M.HemisphereLight) {
                        var y = re.get(n);
                        y.direction.setFromMatrixPosition(n.matrixWorld), y.direction.transformDirection(p), y.direction.normalize(), y.skyColor.copy(n.color).multiplyScalar(s), y.groundColor.copy(n.groundColor).multiplyScalar(s), Ht.hemi[v++] = y
                    }
                    Ht.ambient[0] = u, Ht.ambient[1] = l, Ht.ambient[2] = c, Ht.directional.length = d, Ht.spot.length = m, Ht.point.length = f, Ht.hemi.length = v, Ht.shadows.length = g, Ht.hash = d + "," + f + "," + m + "," + v + "," + g
                }

                function Y(t, e, i) {
                    var r;
                    if (i ? (Zt.texParameteri(t, Zt.TEXTURE_WRAP_S, st(e.wrapS)), Zt.texParameteri(t, Zt.TEXTURE_WRAP_T, st(e.wrapT)), Zt.texParameteri(t, Zt.TEXTURE_MAG_FILTER, st(e.magFilter)), Zt.texParameteri(t, Zt.TEXTURE_MIN_FILTER, st(e.minFilter))) : (Zt.texParameteri(t, Zt.TEXTURE_WRAP_S, Zt.CLAMP_TO_EDGE), Zt.texParameteri(t, Zt.TEXTURE_WRAP_T, Zt.CLAMP_TO_EDGE), e.wrapS !== M.ClampToEdgeWrapping || (e.wrapT, M.ClampToEdgeWrapping), Zt.texParameteri(t, Zt.TEXTURE_MAG_FILTER, ot(e.magFilter)), Zt.texParameteri(t, Zt.TEXTURE_MIN_FILTER, ot(e.minFilter)), e.minFilter !== M.NearestFilter && (e.minFilter, M.LinearFilter)), r = Jt.get("EXT_texture_filter_anisotropic")) {
                        if (e.type === M.FloatType && null === Jt.get("OES_texture_float_linear")) return;
                        if (e.type === M.HalfFloatType && null === Jt.get("OES_texture_half_float_linear")) return;
                        (1 < e.anisotropy || te.get(e).__currentAnisotropy) && (Zt.texParameterf(t, r.TEXTURE_MAX_ANISOTROPY_EXT, g(e.anisotropy, wt.getMaxAnisotropy())), te.get(e).__currentAnisotropy = e.anisotropy)
                    }
                }

                function q(t, e, i) {
                    void 0 === t.__webglInit && (t.__webglInit = !0, e.addEventListener("dispose", h), t.__webglTexture = Zt.createTexture(), Yt.textures++), $t.activeTexture(Zt.TEXTURE0 + i), $t.bindTexture(Zt.TEXTURE_2D, t.__webglTexture), Zt.pixelStorei(Zt.UNPACK_FLIP_Y_WEBGL, e.flipY), Zt.pixelStorei(Zt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), Zt.pixelStorei(Zt.UNPACK_ALIGNMENT, e.unpackAlignment);
                    var r = Z(e.image, Kt.maxTextureSize);
                    J(e) && !1 === Q(r) && (r = K(r));
                    var n = Q(r),
                        a = st(e.format),
                        o = st(e.type);
                    Y(Zt.TEXTURE_2D, e, n);
                    var s, u = e.mipmaps;
                    if (e instanceof M.DataTexture)
                        if (0 < u.length && n) {
                            for (var l = 0, c = u.length; l < c; l++) s = u[l], $t.texImage2D(Zt.TEXTURE_2D, l, a, s.width, s.height, 0, a, o, s.data);
                            e.generateMipmaps = !1
                        } else $t.texImage2D(Zt.TEXTURE_2D, 0, a, r.width, r.height, 0, a, o, r.data);
                    else if (e instanceof M.CompressedTexture)
                        for (var l = 0, c = u.length; l < c; l++) s = u[l], e.format !== M.RGBAFormat && e.format !== M.RGBFormat ? -1 < $t.getCompressedTextureFormats().indexOf(a) && $t.compressedTexImage2D(Zt.TEXTURE_2D, l, a, s.width, s.height, 0, s.data) : $t.texImage2D(Zt.TEXTURE_2D, l, a, s.width, s.height, 0, a, o, s.data);
                    else if (0 < u.length && n) {
                        for (var l = 0, c = u.length; l < c; l++) s = u[l], $t.texImage2D(Zt.TEXTURE_2D, l, a, a, o, s);
                        e.generateMipmaps = !1
                    } else $t.texImage2D(Zt.TEXTURE_2D, 0, a, a, o, r);
                    e.generateMipmaps && n && Zt.generateMipmap(Zt.TEXTURE_2D), t.__version = e.version, e.onUpdate && e.onUpdate(e)
                }

                function Z(t, e) {
                    if (t.width > e || t.height > e) {
                        var i = e / v(t.width, t.height),
                            r = document.createElement("canvas");
                        return r.width = m(t.width * i), r.height = m(t.height * i), r.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, r.width, r.height), r
                    }
                    return t
                }

                function Q(t) {
                    return M.Math.isPowerOfTwo(t.width) && M.Math.isPowerOfTwo(t.height)
                }

                function J(t) {
                    return t.wrapS !== M.ClampToEdgeWrapping || t.wrapT !== M.ClampToEdgeWrapping || t.minFilter !== M.NearestFilter && t.minFilter !== M.LinearFilter
                }

                function K(t) {
                    if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
                        var e = document.createElement("canvas");
                        return e.width = M.Math.nearestPowerOfTwo(t.width), e.height = M.Math.nearestPowerOfTwo(t.height), e.getContext("2d").drawImage(t, 0, 0, e.width, e.height), e
                    }
                    return t
                }

                function $(t, e) {
                    var i = te.get(t);
                    if (6 === t.image.length)
                        if (0 < t.version && i.__version !== t.version) {
                            i.__image__webglTextureCube || (t.addEventListener("dispose", h), i.__image__webglTextureCube = Zt.createTexture(), Yt.textures++), $t.activeTexture(Zt.TEXTURE0 + e), $t.bindTexture(Zt.TEXTURE_CUBE_MAP, i.__image__webglTextureCube), Zt.pixelStorei(Zt.UNPACK_FLIP_Y_WEBGL, t.flipY);
                            for (var r = t instanceof M.CompressedTexture, n = t.image[0] instanceof M.DataTexture, a = [], o = 0; 6 > o; o++) a[o] = !wt.autoScaleCubemaps || r || n ? n ? t.image[o].image : t.image[o] : Z(t.image[o], Kt.maxCubemapSize);
                            var s = Q(a[0]),
                                u = st(t.format),
                                l = st(t.type);
                            Y(Zt.TEXTURE_CUBE_MAP, t, s);
                            for (o = 0; 6 > o; o++)
                                if (r)
                                    for (var c, p = a[o].mipmaps, d = 0, f = p.length; d < f; d++) c = p[d], t.format !== M.RGBAFormat && t.format !== M.RGBFormat ? -1 < $t.getCompressedTextureFormats().indexOf(u) && $t.compressedTexImage2D(Zt.TEXTURE_CUBE_MAP_POSITIVE_X + o, d, u, c.width, c.height, 0, c.data) : $t.texImage2D(Zt.TEXTURE_CUBE_MAP_POSITIVE_X + o, d, u, c.width, c.height, 0, u, l, c.data);
                                else n ? $t.texImage2D(Zt.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, u, a[o].width, a[o].height, 0, u, l, a[o].data) : $t.texImage2D(Zt.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, u, u, l, a[o]);
                            t.generateMipmaps && s && Zt.generateMipmap(Zt.TEXTURE_CUBE_MAP), i.__version = t.version, t.onUpdate && t.onUpdate(t)
                        } else $t.activeTexture(Zt.TEXTURE0 + e), $t.bindTexture(Zt.TEXTURE_CUBE_MAP, i.__image__webglTextureCube)
                }

                function tt(t, e) {
                    $t.activeTexture(Zt.TEXTURE0 + e), $t.bindTexture(Zt.TEXTURE_CUBE_MAP, te.get(t).__webglTexture)
                }

                function et(t, e, i, r) {
                    var n = st(e.texture.format),
                        a = st(e.texture.type);
                    $t.texImage2D(r, 0, n, e.width, e.height, 0, n, a, null), Zt.bindFramebuffer(Zt.FRAMEBUFFER, t), Zt.framebufferTexture2D(Zt.FRAMEBUFFER, i, r, te.get(e.texture).__webglTexture, 0), Zt.bindFramebuffer(Zt.FRAMEBUFFER, null)
                }

                function it(t, e) {
                    Zt.bindRenderbuffer(Zt.RENDERBUFFER, t), e.depthBuffer && !e.stencilBuffer ? (Zt.renderbufferStorage(Zt.RENDERBUFFER, Zt.DEPTH_COMPONENT16, e.width, e.height), Zt.framebufferRenderbuffer(Zt.FRAMEBUFFER, Zt.DEPTH_ATTACHMENT, Zt.RENDERBUFFER, t)) : e.depthBuffer && e.stencilBuffer ? (Zt.renderbufferStorage(Zt.RENDERBUFFER, Zt.DEPTH_STENCIL, e.width, e.height), Zt.framebufferRenderbuffer(Zt.FRAMEBUFFER, Zt.DEPTH_STENCIL_ATTACHMENT, Zt.RENDERBUFFER, t)) : Zt.renderbufferStorage(Zt.RENDERBUFFER, Zt.RGBA4, e.width, e.height), Zt.bindRenderbuffer(Zt.RENDERBUFFER, null)
                }

                function rt(t) {
                    var e = te.get(t);
                    if (t instanceof M.WebGLRenderTargetCube) {
                        e.__webglDepthbuffer = [];
                        for (var i = 0; 6 > i; i++) Zt.bindFramebuffer(Zt.FRAMEBUFFER, e.__webglFramebuffer[i]), e.__webglDepthbuffer[i] = Zt.createRenderbuffer(), it(e.__webglDepthbuffer[i], t)
                    } else Zt.bindFramebuffer(Zt.FRAMEBUFFER, e.__webglFramebuffer), e.__webglDepthbuffer = Zt.createRenderbuffer(), it(e.__webglDepthbuffer, t);
                    Zt.bindFramebuffer(Zt.FRAMEBUFFER, null)
                }

                function nt(t) {
                    var e = te.get(t),
                        i = te.get(t.texture);
                    t.addEventListener("dispose", u), i.__webglTexture = Zt.createTexture(), Yt.textures++;
                    var r = t instanceof M.WebGLRenderTargetCube,
                        n = M.Math.isPowerOfTwo(t.width) && M.Math.isPowerOfTwo(t.height);
                    if (r) {
                        e.__webglFramebuffer = [];
                        for (a = 0; 6 > a; a++) e.__webglFramebuffer[a] = Zt.createFramebuffer()
                    } else e.__webglFramebuffer = Zt.createFramebuffer();
                    if (r) {
                        $t.bindTexture(Zt.TEXTURE_CUBE_MAP, i.__webglTexture), Y(Zt.TEXTURE_CUBE_MAP, t.texture, n);
                        for (var a = 0; 6 > a; a++) et(e.__webglFramebuffer[a], t, Zt.COLOR_ATTACHMENT0, Zt.TEXTURE_CUBE_MAP_POSITIVE_X + a);
                        t.texture.generateMipmaps && n && Zt.generateMipmap(Zt.TEXTURE_CUBE_MAP), $t.bindTexture(Zt.TEXTURE_CUBE_MAP, null)
                    } else $t.bindTexture(Zt.TEXTURE_2D, i.__webglTexture), Y(Zt.TEXTURE_2D, t.texture, n), et(e.__webglFramebuffer, t, Zt.COLOR_ATTACHMENT0, Zt.TEXTURE_2D), t.texture.generateMipmaps && n && Zt.generateMipmap(Zt.TEXTURE_2D), $t.bindTexture(Zt.TEXTURE_2D, null);
                    t.depthBuffer && rt(t)
                }

                function at(t) {
                    var e = t instanceof M.WebGLRenderTargetCube ? Zt.TEXTURE_CUBE_MAP : Zt.TEXTURE_2D,
                        i = te.get(t.texture).__webglTexture;
                    $t.bindTexture(e, i), Zt.generateMipmap(e), $t.bindTexture(e, null)
                }

                function ot(t) {
                    return t === M.NearestFilter || t === M.NearestMipMapNearestFilter || t === M.NearestMipMapLinearFilter ? Zt.NEAREST : Zt.LINEAR
                }

                function st(t) {
                    var e;
                    if (t === M.RepeatWrapping) return Zt.REPEAT;
                    if (t === M.ClampToEdgeWrapping) return Zt.CLAMP_TO_EDGE;
                    if (t === M.MirroredRepeatWrapping) return Zt.MIRRORED_REPEAT;
                    if (t === M.NearestFilter) return Zt.NEAREST;
                    if (t === M.NearestMipMapNearestFilter) return Zt.NEAREST_MIPMAP_NEAREST;
                    if (t === M.NearestMipMapLinearFilter) return Zt.NEAREST_MIPMAP_LINEAR;
                    if (t === M.LinearFilter) return Zt.LINEAR;
                    if (t === M.LinearMipMapNearestFilter) return Zt.LINEAR_MIPMAP_NEAREST;
                    if (t === M.LinearMipMapLinearFilter) return Zt.LINEAR_MIPMAP_LINEAR;
                    if (t === M.UnsignedByteType) return Zt.UNSIGNED_BYTE;
                    if (t === M.UnsignedShort4444Type) return Zt.UNSIGNED_SHORT_4_4_4_4;
                    if (t === M.UnsignedShort5551Type) return Zt.UNSIGNED_SHORT_5_5_5_1;
                    if (t === M.UnsignedShort565Type) return Zt.UNSIGNED_SHORT_5_6_5;
                    if (t === M.ByteType) return Zt.BYTE;
                    if (t === M.ShortType) return Zt.SHORT;
                    if (t === M.UnsignedShortType) return Zt.UNSIGNED_SHORT;
                    if (t === M.IntType) return Zt.INT;
                    if (t === M.UnsignedIntType) return Zt.UNSIGNED_INT;
                    if (t === M.FloatType) return Zt.FLOAT;
                    if (null !== (e = Jt.get("OES_texture_half_float")) && t === M.HalfFloatType) return e.HALF_FLOAT_OES;
                    if (t === M.AlphaFormat) return Zt.ALPHA;
                    if (t === M.RGBFormat) return Zt.RGB;
                    if (t === M.RGBAFormat) return Zt.RGBA;
                    if (t === M.LuminanceFormat) return Zt.LUMINANCE;
                    if (t === M.LuminanceAlphaFormat) return Zt.LUMINANCE_ALPHA;
                    if (t === M.AddEquation) return Zt.FUNC_ADD;
                    if (t === M.SubtractEquation) return Zt.FUNC_SUBTRACT;
                    if (t === M.ReverseSubtractEquation) return Zt.FUNC_REVERSE_SUBTRACT;
                    if (t === M.ZeroFactor) return Zt.ZERO;
                    if (t === M.OneFactor) return Zt.ONE;
                    if (t === M.SrcColorFactor) return Zt.SRC_COLOR;
                    if (t === M.OneMinusSrcColorFactor) return Zt.ONE_MINUS_SRC_COLOR;
                    if (t === M.SrcAlphaFactor) return Zt.SRC_ALPHA;
                    if (t === M.OneMinusSrcAlphaFactor) return Zt.ONE_MINUS_SRC_ALPHA;
                    if (t === M.DstAlphaFactor) return Zt.DST_ALPHA;
                    if (t === M.OneMinusDstAlphaFactor) return Zt.ONE_MINUS_DST_ALPHA;
                    if (t === M.DstColorFactor) return Zt.DST_COLOR;
                    if (t === M.OneMinusDstColorFactor) return Zt.ONE_MINUS_DST_COLOR;
                    if (t === M.SrcAlphaSaturateFactor) return Zt.SRC_ALPHA_SATURATE;
                    if (null !== (e = Jt.get("WEBGL_compressed_texture_s3tc"))) {
                        if (t === M.RGB_S3TC_DXT1_Format) return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (t === M.RGBA_S3TC_DXT1_Format) return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (t === M.RGBA_S3TC_DXT3_Format) return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (t === M.RGBA_S3TC_DXT5_Format) return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
                    }
                    if (null !== (e = Jt.get("WEBGL_compressed_texture_pvrtc"))) {
                        if (t === M.RGB_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (t === M.RGB_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (t === M.RGBA_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (t === M.RGBA_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                    }
                    if (null !== (e = Jt.get("WEBGL_compressed_texture_etc1")) && t === M.RGB_ETC1_Format) return e.COMPRESSED_RGB_ETC1_WEBGL;
                    if (null !== (e = Jt.get("EXT_blend_minmax"))) {
                        if (t === M.MinEquation) return e.MIN_EXT;
                        if (t === M.MaxEquation) return e.MAX_EXT
                    }
                    return 0
                }
                var ht = void 0 === (t = t || {}).canvas ? document.createElement("canvas") : t.canvas,
                    ut = void 0 === t.context ? null : t.context,
                    lt = void 0 !== t.alpha && t.alpha,
                    ct = !(void 0 !== t.depth) || t.depth,
                    pt = !(void 0 !== t.stencil) || t.stencil,
                    dt = void 0 !== t.antialias && t.antialias,
                    ft = !(void 0 !== t.premultipliedAlpha) || t.premultipliedAlpha,
                    mt = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
                    vt = [],
                    gt = [],
                    yt = -1,
                    xt = [],
                    Mt = -1,
                    _t = new Float32Array(8),
                    bt = [],
                    St = [];
                this.domElement = ht, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = M.LinearToneMapping, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0;
                var wt = this,
                    Et = null,
                    Tt = null,
                    At = null,
                    Lt = -1,
                    Rt = "",
                    Ct = null,
                    Ut = new M.Vector4,
                    Ft = null,
                    Pt = new M.Vector4,
                    Dt = 0,
                    Nt = new M.Color(0),
                    Bt = 0,
                    It = ht.width,
                    Ot = ht.height,
                    Vt = 1,
                    zt = new M.Vector4(0, 0, It, Ot),
                    Gt = !1,
                    kt = new M.Vector4(0, 0, It, Ot),
                    Wt = new M.Frustum,
                    jt = new M.Matrix4,
                    Xt = new M.Vector3,
                    Ht = {
                        hash: "",
                        ambient: [0, 0, 0],
                        directional: [],
                        directionalShadowMap: [],
                        directionalShadowMatrix: [],
                        spot: [],
                        spotShadowMap: [],
                        spotShadowMatrix: [],
                        point: [],
                        pointShadowMap: [],
                        pointShadowMatrix: [],
                        hemi: [],
                        shadows: [],
                        shadowsPointLight: 0
                    },
                    Yt = {
                        geometries: 0,
                        textures: 0
                    },
                    qt = {
                        calls: 0,
                        vertices: 0,
                        faces: 0,
                        points: 0
                    };
                this.info = {
                    render: qt,
                    memory: Yt,
                    programs: null
                };
                var Zt;
                try {
                    var Qt = {
                        alpha: lt,
                        depth: ct,
                        stencil: pt,
                        antialias: dt,
                        premultipliedAlpha: ft,
                        preserveDrawingBuffer: mt
                    };
                    if (null === (Zt = ut || ht.getContext("webgl", Qt) || ht.getContext("experimental-webgl", Qt))) throw null !== ht.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
                    void 0 === Zt.getShaderPrecisionFormat && (Zt.getShaderPrecisionFormat = function() {
                        return {
                            rangeMin: 1,
                            rangeMax: 1,
                            precision: 1
                        }
                    }), ht.addEventListener("webglcontextlost", o, !1)
                } catch (t) {}
                var Jt = new M.WebGLExtensions(Zt);
                Jt.get("OES_texture_float"), Jt.get("OES_texture_float_linear"), Jt.get("OES_texture_half_float"), Jt.get("OES_texture_half_float_linear"), Jt.get("OES_standard_derivatives"), Jt.get("ANGLE_instanced_arrays"), Jt.get("OES_element_index_uint") && (M.BufferGeometry.MaxIndex = 4294967296);
                var Kt = new M.WebGLCapabilities(Zt, Jt, t),
                    $t = new M.WebGLState(Zt, Jt, st),
                    te = new M.WebGLProperties,
                    ee = new M.WebGLObjects(Zt, te, this.info),
                    ie = new M.WebGLPrograms(this, Kt),
                    re = new M.WebGLLights;
                this.info.programs = ie.programs;
                var ne = new M.WebGLBufferRenderer(Zt, Jt, qt),
                    ae = new M.WebGLIndexedBufferRenderer(Zt, Jt, qt);
                r(), this.context = Zt, this.capabilities = Kt, this.extensions = Jt, this.properties = te, this.state = $t;
                var oe = new M.WebGLShadowMap(this, Ht, ee);
                this.shadowMap = oe;
                var se = new M.SpritePlugin(this, bt),
                    he = new M.LensFlarePlugin(this, St);
                this.getContext = function() {
                    return Zt
                }, this.getContextAttributes = function() {
                    return Zt.getContextAttributes()
                }, this.forceContextLoss = function() {
                    Jt.get("WEBGL_lose_context").loseContext()
                }, this.getMaxAnisotropy = function() {
                    var t;
                    return function() {
                        if (void 0 != t) return t;
                        var e = Jt.get("EXT_texture_filter_anisotropic");
                        return t = null === e ? 0 : Zt.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                    }
                }(), this.getPrecision = function() {
                    return Kt.precision
                }, this.getPixelRatio = function() {
                    return Vt
                }, this.setPixelRatio = function(t) {
                    void 0 === t || (Vt = t, this.setSize(kt.z, kt.w, !1))
                }, this.getSize = function() {
                    return {
                        width: It,
                        height: Ot
                    }
                }, this.setSize = function(t, e, i) {
                    It = t, Ot = e, ht.width = t * Vt, ht.height = e * Vt, !1 !== i && (ht.style.width = t + "px", ht.style.height = e + "px"), this.setViewport(0, 0, t, e)
                }, this.setViewport = function(t, e, i, r) {
                    $t.viewport(kt.set(t, e, i, r))
                }, this.setScissor = function(t, e, i, r) {
                    $t.scissor(zt.set(t, e, i, r))
                }, this.setScissorTest = function(t) {
                    $t.setScissorTest(Gt = t)
                }, this.getClearColor = function() {
                    return Nt
                }, this.setClearColor = function(t, e) {
                    Nt.set(t), Bt = void 0 === e ? 1 : e, i(Nt.r, Nt.g, Nt.b, Bt)
                }, this.getClearAlpha = function() {
                    return Bt
                }, this.setClearAlpha = function(t) {
                    Bt = t, i(Nt.r, Nt.g, Nt.b, Bt)
                }, this.clear = function(t, e, i) {
                    var r = 0;
                    (void 0 === t || t) && (r |= Zt.COLOR_BUFFER_BIT), (void 0 === e || e) && (r |= Zt.DEPTH_BUFFER_BIT), (void 0 === i || i) && (r |= Zt.STENCIL_BUFFER_BIT), Zt.clear(r)
                }, this.clearColor = function() {
                    this.clear(!0, !1, !1)
                }, this.clearDepth = function() {
                    this.clear(!1, !0, !1)
                }, this.clearStencil = function() {
                    this.clear(!1, !1, !0)
                }, this.clearTarget = function(t, e, i, r) {
                    this.setRenderTarget(t), this.clear(e, i, r)
                }, this.resetGLState = n, this.dispose = function() {
                    ht.removeEventListener("webglcontextlost", o, !1)
                }, this.renderBufferImmediate = function(t, e, i) {
                    $t.initAttributes();
                    var r = te.get(t);
                    t.hasPositions && !r.position && (r.position = Zt.createBuffer()), t.hasNormals && !r.normal && (r.normal = Zt.createBuffer()), t.hasUvs && !r.uv && (r.uv = Zt.createBuffer()), t.hasColors && !r.color && (r.color = Zt.createBuffer());
                    var n = e.getAttributes();
                    if (t.hasPositions && (Zt.bindBuffer(Zt.ARRAY_BUFFER, r.position), Zt.bufferData(Zt.ARRAY_BUFFER, t.positionArray, Zt.DYNAMIC_DRAW), $t.enableAttribute(n.position), Zt.vertexAttribPointer(n.position, 3, Zt.FLOAT, !1, 0, 0)), t.hasNormals) {
                        if (Zt.bindBuffer(Zt.ARRAY_BUFFER, r.normal), "MeshPhongMaterial" !== i.type && "MeshStandardMaterial" !== i.type && i.shading === M.FlatShading)
                            for (var a = 0, o = 3 * t.count; a < o; a += 9) {
                                var s = t.normalArray,
                                    h = (s[a + 0] + s[a + 3] + s[a + 6]) / 3,
                                    u = (s[a + 1] + s[a + 4] + s[a + 7]) / 3,
                                    l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                                s[a + 0] = h, s[a + 1] = u, s[a + 2] = l, s[a + 3] = h, s[a + 4] = u, s[a + 5] = l, s[a + 6] = h, s[a + 7] = u, s[a + 8] = l
                            }
                        Zt.bufferData(Zt.ARRAY_BUFFER, t.normalArray, Zt.DYNAMIC_DRAW), $t.enableAttribute(n.normal), Zt.vertexAttribPointer(n.normal, 3, Zt.FLOAT, !1, 0, 0)
                    }
                    t.hasUvs && i.map && (Zt.bindBuffer(Zt.ARRAY_BUFFER, r.uv), Zt.bufferData(Zt.ARRAY_BUFFER, t.uvArray, Zt.DYNAMIC_DRAW), $t.enableAttribute(n.uv), Zt.vertexAttribPointer(n.uv, 2, Zt.FLOAT, !1, 0, 0)), t.hasColors && i.vertexColors !== M.NoColors && (Zt.bindBuffer(Zt.ARRAY_BUFFER, r.color), Zt.bufferData(Zt.ARRAY_BUFFER, t.colorArray, Zt.DYNAMIC_DRAW), $t.enableAttribute(n.color), Zt.vertexAttribPointer(n.color, 3, Zt.FLOAT, !1, 0, 0)), $t.disableUnusedAttributes(), Zt.drawArrays(Zt.TRIANGLES, 0, t.count), t.count = 0
                }, this.renderBufferDirect = function(t, i, r, n, a, o) {
                    R(n);
                    var s = U(t, i, n, a),
                        h = !1,
                        u = r.id + "_" + s.id + "_" + n.wireframe;
                    u != Rt && (Rt = u, h = !0);
                    var l = a.morphTargetInfluences;
                    if (void 0 !== l) {
                        for (var c = [], p = 0, d = l.length; p < d; p++) f = l[p], c.push([f, p]);
                        c.sort(b), 8 < c.length && (c.length = 8);
                        for (var f, m = r.morphAttributes, p = 0, d = c.length; p < d; p++)
                            if (f = c[p], _t[p] = f[0], 0 !== f[0]) {
                                x = f[1];
                                !0 === n.morphTargets && m.position && r.addAttribute("morphTarget" + p, m.position[x]), !0 === n.morphNormals && m.normal && r.addAttribute("morphNormal" + p, m.normal[x])
                            } else !0 === n.morphTargets && r.removeAttribute("morphTarget" + p), !0 === n.morphNormals && r.removeAttribute("morphNormal" + p);
                        var y = s.getUniforms();
                        null !== y.morphTargetInfluences && Zt.uniform1fv(y.morphTargetInfluences, _t), h = !0
                    }
                    var x = r.index,
                        S = r.attributes.position;
                    !0 === n.wireframe && (x = ee.getWireframeAttribute(r));
                    var w;
                    null === x ? w = ne : (w = ae).setIndex(x), h && (_(n, s, r), null !== x && Zt.bindBuffer(Zt.ELEMENT_ARRAY_BUFFER, ee.getAttributeBuffer(x)));
                    var E = 1 / 0;
                    null === x ? void 0 !== S && (E = S.count) : E = x.count;
                    var T = r.drawRange.start,
                        A = r.drawRange.count,
                        L = null === o ? 0 : o.start,
                        C = null === o ? 1 / 0 : o.count,
                        F = v(0, T, L),
                        P = g(0 + E, T + A, L + C) - 1,
                        D = v(0, P - F + 1);
                    if (a instanceof M.Mesh)
                        if (!0 === n.wireframe) $t.setLineWidth(n.wireframeLinewidth * e()), w.setMode(Zt.LINES);
                        else switch (a.drawMode) {
                            case M.TrianglesDrawMode:
                                w.setMode(Zt.TRIANGLES);
                                break;
                            case M.TriangleStripDrawMode:
                                w.setMode(Zt.TRIANGLE_STRIP);
                                break;
                            case M.TriangleFanDrawMode:
                                w.setMode(Zt.TRIANGLE_FAN)
                        } else if (a instanceof M.Line) {
                            var N = n.linewidth;
                            void 0 === N && (N = 1), $t.setLineWidth(N * e()), a instanceof M.LineSegments ? w.setMode(Zt.LINES) : w.setMode(Zt.LINE_STRIP)
                        } else a instanceof M.Points && w.setMode(Zt.POINTS);
                    r instanceof M.InstancedBufferGeometry ? 0 < r.maxInstancedCount && w.renderInstances(r, F, D) : w.render(F, D)
                }, this.render = function(t, e, i, r) {
                    if (0 != e instanceof M.Camera) {
                        var n = t.fog;
                        if (Rt = "", Lt = -1, Ct = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), jt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), Wt.setFromMatrix(jt), vt.length = 0, yt = -1, Mt = -1, bt.length = 0, St.length = 0, T(t, e), gt.length = yt + 1, xt.length = Mt + 1, !0 === wt.sortObjects && (gt.sort(S), xt.sort(w)), H(vt, e), oe.render(t, e), qt.calls = 0, qt.vertices = 0, qt.faces = 0, qt.points = 0, void 0 === i && (i = null), this.setRenderTarget(i), (this.autoClear || r) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), t.overrideMaterial) {
                            var a = t.overrideMaterial;
                            A(gt, e, n, a), A(xt, e, n, a)
                        } else $t.setBlending(M.NoBlending), A(gt, e, n), A(xt, e, n);
                        if (se.render(t, e), he.render(t, e, Pt), i) {
                            var o = i.texture;
                            o.generateMipmaps && Q(i) && o.minFilter !== M.NearestFilter && o.minFilter !== M.LinearFilter && at(i)
                        }
                        $t.setDepthTest(!0), $t.setDepthWrite(!0), $t.setColorWrite(!0)
                    }
                }, this.setFaceCulling = function(t, e) {
                    t === M.CullFaceNone ? $t.disable(Zt.CULL_FACE) : (e === M.FrontFaceDirectionCW ? Zt.frontFace(Zt.CW) : Zt.frontFace(Zt.CCW), t === M.CullFaceBack ? Zt.cullFace(Zt.BACK) : t === M.CullFaceFront ? Zt.cullFace(Zt.FRONT) : Zt.cullFace(Zt.FRONT_AND_BACK), $t.enable(Zt.CULL_FACE))
                }, this.setTexture = function(t, e) {
                    var i = te.get(t);
                    if (0 < t.version && i.__version !== t.version) {
                        var r = t.image;
                        return void 0 === r || !1 === r.complete ? void 0 : void q(i, t, e)
                    }
                    $t.activeTexture(Zt.TEXTURE0 + e), $t.bindTexture(Zt.TEXTURE_2D, i.__webglTexture)
                }, this.getCurrentRenderTarget = function() {
                    return Tt
                }, this.setRenderTarget = function(t) {
                    Tt = t, t && void 0 === te.get(t).__webglFramebuffer && nt(t);
                    var e, i = t instanceof M.WebGLRenderTargetCube;
                    if (t) {
                        var r = te.get(t);
                        e = i ? r.__webglFramebuffer[t.activeCubeFace] : r.__webglFramebuffer, Ut.copy(t.scissor), Ft = t.scissorTest, Pt.copy(t.viewport)
                    } else e = null, Ut.copy(zt).multiplyScalar(Vt), Ft = Gt, Pt.copy(kt).multiplyScalar(Vt);
                    if (At !== e && (Zt.bindFramebuffer(Zt.FRAMEBUFFER, e), At = e), $t.scissor(Ut), $t.setScissorTest(Ft), $t.viewport(Pt), i) {
                        var n = te.get(t.texture);
                        Zt.framebufferTexture2D(Zt.FRAMEBUFFER, Zt.COLOR_ATTACHMENT0, Zt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, n.__webglTexture, t.activeMipMapLevel)
                    }
                }, this.readRenderTargetPixels = function(t, e, i, r, n, a) {
                    if (0 != t instanceof M.WebGLRenderTarget) {
                        var o = te.get(t).__webglFramebuffer;
                        if (o) {
                            var s = !1;
                            o !== At && (Zt.bindFramebuffer(Zt.FRAMEBUFFER, o), s = !0);
                            try {
                                var h = t.texture;
                                if (h.format !== M.RGBAFormat && st(h.format) !== Zt.getParameter(Zt.IMPLEMENTATION_COLOR_READ_FORMAT)) return;
                                if (!(h.type === M.UnsignedByteType || st(h.type) === Zt.getParameter(Zt.IMPLEMENTATION_COLOR_READ_TYPE) || h.type === M.FloatType && Jt.get("WEBGL_color_buffer_float") || h.type === M.HalfFloatType && Jt.get("EXT_color_buffer_half_float"))) return;
                                Zt.checkFramebufferStatus(Zt.FRAMEBUFFER) === Zt.FRAMEBUFFER_COMPLETE && Zt.readPixels(e, i, r, n, st(h.format), st(h.type), a)
                            } finally {
                                s && Zt.bindFramebuffer(Zt.FRAMEBUFFER, At)
                            }
                        }
                    }
                }
            }, M.WebGLExtensions = function(t) {
                var e = {};
                this.get = function(i) {
                    if (void 0 !== e[i]) return e[i];
                    var r;
                    return r = "EXT_texture_filter_anisotropic" === i ? t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") : "WEBGL_compressed_texture_s3tc" === i ? t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc") : "WEBGL_compressed_texture_pvrtc" === i ? t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc") : "WEBGL_compressed_texture_etc1" === i ? t.getExtension("WEBGL_compressed_texture_etc1") : t.getExtension(i), e[i] = r, r
                }
            }, M.WebGLCapabilities = function(t, e, i) {
                function r(e) {
                    if ("highp" === e) {
                        if (0 < t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision && 0 < t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision) return "highp";
                        e = "mediump"
                    }
                    return "mediump" === e && 0 < t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision && 0 < t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
                }
                this.getMaxPrecision = r, this.precision = void 0 === i.precision ? "highp" : i.precision, this.logarithmicDepthBuffer = void 0 !== i.logarithmicDepthBuffer && i.logarithmicDepthBuffer, this.maxTextures = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), this.maxCubemapSize = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = t.getParameter(t.MAX_VARYING_VECTORS), this.maxFragmentUniforms = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = 0 < this.maxVertexTextures, this.floatFragmentTextures = !!e.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
                var n = r(this.precision);
                n !== this.precision && (this.precision = n), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!e.get("EXT_frag_depth"))
            }, M.WebGLProperties = function() {
                var t = {};
                this.get = function(e) {
                    var i = e.uuid,
                        r = t[i];
                    return void 0 === r && (r = {}, t[i] = r), r
                }, this.delete = function(e) {
                    delete t[e.uuid]
                }, this.clear = function() {
                    t = {}
                }
            }, M.WebGLLights = function() {
                var t = {};
                this.get = function(e) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    var i;
                    switch (e.type) {
                        case "DirectionalLight":
                            i = {
                                direction: new M.Vector3,
                                color: new M.Color,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new M.Vector2
                            };
                            break;
                        case "SpotLight":
                            i = {
                                position: new M.Vector3,
                                direction: new M.Vector3,
                                color: new M.Color,
                                distance: 0,
                                coneCos: 0,
                                penumbraCos: 0,
                                decay: 0,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new M.Vector2
                            };
                            break;
                        case "PointLight":
                            i = {
                                position: new M.Vector3,
                                color: new M.Color,
                                distance: 0,
                                decay: 0,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new M.Vector2
                            };
                            break;
                        case "HemisphereLight":
                            i = {
                                direction: new M.Vector3,
                                skyColor: new M.Color,
                                groundColor: new M.Color
                            }
                    }
                    return t[e.id] = i, i
                }
            }, M.WebGLState = function(t, e, i) {
                var r, n = this,
                    a = new M.Vector4,
                    o = new Uint8Array(16),
                    s = new Uint8Array(16),
                    h = new Uint8Array(16),
                    u = {},
                    l = null,
                    c = null,
                    p = null,
                    d = null,
                    f = null,
                    m = null,
                    v = null,
                    g = null,
                    y = !1,
                    x = null,
                    _ = null,
                    b = null,
                    S = null,
                    w = null,
                    E = null,
                    T = null,
                    A = null,
                    L = null,
                    R = null,
                    C = null,
                    U = null,
                    F = null,
                    P = null,
                    D = null,
                    N = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                    B = {},
                    I = new M.Vector4,
                    O = null,
                    V = null,
                    z = new M.Vector4,
                    G = new M.Vector4,
                    k = t.createTexture();
                t.bindTexture(t.TEXTURE_2D, k), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texImage2D(t.TEXTURE_2D, 0, t.RGB, 1, 1, 0, t.RGB, t.UNSIGNED_BYTE, new Uint8Array(3)), this.init = function() {
                    this.clearColor(0, 0, 0, 1), this.clearDepth(1), this.clearStencil(0), this.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.frontFace(t.CCW), t.cullFace(t.BACK), this.enable(t.CULL_FACE), this.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA)
                }, this.initAttributes = function() {
                    for (var t = 0, e = o.length; t < e; t++) o[t] = 0
                }, this.enableAttribute = function(i) {
                    o[i] = 1, 0 === s[i] && (t.enableVertexAttribArray(i), s[i] = 1), 0 !== h[i] && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, 0), h[i] = 0)
                }, this.enableAttributeAndDivisor = function(e, i, r) {
                    o[e] = 1, 0 === s[e] && (t.enableVertexAttribArray(e), s[e] = 1), h[e] !== i && (r.vertexAttribDivisorANGLE(e, i), h[e] = i)
                }, this.disableUnusedAttributes = function() {
                    for (var e = 0, i = s.length; e < i; e++) s[e] !== o[e] && (t.disableVertexAttribArray(e), s[e] = 0)
                }, this.enable = function(e) {
                    !0 !== u[e] && (t.enable(e), u[e] = !0)
                }, this.disable = function(e) {
                    !1 !== u[e] && (t.disable(e), u[e] = !1)
                }, this.getCompressedTextureFormats = function() {
                    if (null == l && (l = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                        for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), r = 0; r < i.length; r++) l.push(i[r]);
                    return l
                }, this.setBlending = function(e, r, n, a, o, s, h, u) {
                    e === M.NoBlending ? this.disable(t.BLEND) : this.enable(t.BLEND), (e !== c || u !== y) && (e === M.AdditiveBlending ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === M.SubtractiveBlending ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === M.MultiplyBlending ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.SRC_COLOR, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR)) : u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)), c = e, y = u), e === M.CustomBlending ? (o = o || r, s = s || n, h = h || a, (r !== p || o !== m) && (t.blendEquationSeparate(i(r), i(o)), p = r, m = o), (n !== d || a !== f || s !== v || h !== g) && (t.blendFuncSeparate(i(n), i(a), i(s), i(h)), d = n, f = a, v = s, g = h)) : (p = null, d = null, f = null, m = null, v = null, g = null)
                }, this.setDepthFunc = function(e) {
                    x !== e && (e ? e === M.NeverDepth ? t.depthFunc(t.NEVER) : e === M.AlwaysDepth ? t.depthFunc(t.ALWAYS) : e === M.LessDepth ? t.depthFunc(t.LESS) : e === M.LessEqualDepth ? t.depthFunc(t.LEQUAL) : e === M.EqualDepth ? t.depthFunc(t.EQUAL) : e === M.GreaterEqualDepth ? t.depthFunc(t.GEQUAL) : e === M.GreaterDepth ? t.depthFunc(t.GREATER) : e === M.NotEqualDepth ? t.depthFunc(t.NOTEQUAL) : t.depthFunc(t.LEQUAL) : t.depthFunc(t.LEQUAL), x = e)
                }, this.setDepthTest = function(e) {
                    e ? this.enable(t.DEPTH_TEST) : this.disable(t.DEPTH_TEST)
                }, this.setDepthWrite = function(e) {
                    _ !== e && (t.depthMask(e), _ = e)
                }, this.setColorWrite = function(e) {
                    b !== e && (t.colorMask(e, e, e, e), b = e)
                }, this.setStencilFunc = function(e, i, r) {
                    (w !== e || E !== i || T !== r) && (t.stencilFunc(e, i, r), w = e, E = i, T = r)
                }, this.setStencilOp = function(e, i, r) {
                    (A !== e || L !== i || R !== r) && (t.stencilOp(e, i, r), A = e, L = i, R = r)
                }, this.setStencilTest = function(e) {
                    e ? this.enable(t.STENCIL_TEST) : this.disable(t.STENCIL_TEST)
                }, this.setStencilWrite = function(e) {
                    S !== e && (t.stencilMask(e), S = e)
                }, this.setFlipSided = function(e) {
                    C !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), C = e)
                }, this.setLineWidth = function(e) {
                    e !== U && (t.lineWidth(e), U = e)
                }, this.setPolygonOffset = function(e, i, r) {
                    e ? this.enable(t.POLYGON_OFFSET_FILL) : this.disable(t.POLYGON_OFFSET_FILL), e && (F !== i || P !== r) && (t.polygonOffset(i, r), F = i, P = r)
                }, this.getScissorTest = function() {
                    return D
                }, this.setScissorTest = function(e) {
                    D = e, e ? this.enable(t.SCISSOR_TEST) : this.disable(t.SCISSOR_TEST)
                }, this.activeTexture = function(e) {
                    void 0 === e && (e = t.TEXTURE0 + N - 1), r !== e && (t.activeTexture(e), r = e)
                }, this.bindTexture = function(e, i) {
                    void 0 === r && n.activeTexture();
                    var a = B[r];
                    void 0 === a && (a = {
                        type: void 0,
                        texture: void 0
                    }, B[r] = a), (a.type !== e || a.texture !== i) && (t.bindTexture(e, i || k), a.type = e, a.texture = i)
                }, this.compressedTexImage2D = function() {
                    try {
                        t.compressedTexImage2D.apply(t, arguments)
                    } catch (t) {}
                }, this.texImage2D = function() {
                    try {
                        t.texImage2D.apply(t, arguments)
                    } catch (t) {}
                }, this.clearColor = function(e, i, r, n) {
                    a.set(e, i, r, n), !1 === I.equals(a) && (t.clearColor(e, i, r, n), I.copy(a))
                }, this.clearDepth = function(e) {
                    O !== e && (t.clearDepth(e), O = e)
                }, this.clearStencil = function(e) {
                    V !== e && (t.clearStencil(e), V = e)
                }, this.scissor = function(e) {
                    !1 === z.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), z.copy(e))
                }, this.viewport = function(e) {
                    !1 === G.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), G.copy(e))
                }, this.reset = function() {
                    for (var e = 0; e < s.length; e++) 1 === s[e] && (t.disableVertexAttribArray(e), s[e] = 0);
                    u = {}, l = null, r = void 0, B = {}, c = null, b = null, _ = null, S = null, C = null
                }
            }, M.WebGLGeometries = function(t, e, i) {
                function r(t) {
                    var n = t.target,
                        s = h[n.id];
                    null !== s.index && a(s.index), o(s.attributes), n.removeEventListener("dispose", r), delete h[n.id];
                    var u = e.get(n);
                    u.wireframe && a(u.wireframe), e.delete(n);
                    var l = e.get(s);
                    l.wireframe && a(l.wireframe), e.delete(s), i.memory.geometries--
                }

                function n(t) {
                    return t instanceof M.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
                }

                function a(e) {
                    var i = n(e);
                    void 0 !== i && (t.deleteBuffer(i), s(e))
                }

                function o(t) {
                    for (var e in t) a(t[e])
                }

                function s(t) {
                    t instanceof M.InterleavedBufferAttribute ? e.delete(t.data) : e.delete(t)
                }
                var h = {};
                this.get = function(t) {
                    var e = t.geometry;
                    if (void 0 !== h[e.id]) return h[e.id];
                    e.addEventListener("dispose", r);
                    var n;
                    return e instanceof M.BufferGeometry ? n = e : e instanceof M.Geometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new M.BufferGeometry).setFromObject(t)), n = e._bufferGeometry), h[e.id] = n, i.memory.geometries++, n
                }
            }, M.WebGLBufferRenderer = function(t, e, i) {
                var r;
                this.setMode = function(t) {
                    r = t
                }, this.render = function(e, n) {
                    t.drawArrays(r, e, n), i.calls++, i.vertices += n, r === t.TRIANGLES && (i.faces += n / 3)
                }, this.renderInstances = function(n) {
                    var a = e.get("ANGLE_instanced_arrays");
                    if (null !== a) {
                        var o = n.attributes.position,
                            s = 0;
                        o instanceof M.InterleavedBufferAttribute ? (s = o.data.count, a.drawArraysInstancedANGLE(r, 0, s, n.maxInstancedCount)) : (s = o.count, a.drawArraysInstancedANGLE(r, 0, s, n.maxInstancedCount)), i.calls++, i.vertices += s * n.maxInstancedCount, r === t.TRIANGLES && (i.faces += n.maxInstancedCount * s / 3)
                    }
                }
            }, M.WebGLIndexedBufferRenderer = function(t, e, i) {
                var r, n, a;
                this.setMode = function(t) {
                    r = t
                }, this.setIndex = function(i) {
                    i.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (n = t.UNSIGNED_INT, a = 4) : (n = t.UNSIGNED_SHORT, a = 2)
                }, this.render = function(e, o) {
                    t.drawElements(r, o, n, e * a), i.calls++, i.vertices += o, r === t.TRIANGLES && (i.faces += o / 3)
                }, this.renderInstances = function(o, s, h) {
                    var u = e.get("ANGLE_instanced_arrays");
                    null === u || (u.drawElementsInstancedANGLE(r, h, n, s * a, o.maxInstancedCount), i.calls++, i.vertices += h * o.maxInstancedCount, r === t.TRIANGLES && (i.faces += o.maxInstancedCount * h / 3))
                }
            }, M.WebGLShader = function(t, e, i) {
                var r = t.createShader(e);
                return t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS), t.getShaderInfoLog(r), r
            }, M.WebGLShadowMap = function(t, e, i) {
                function r(t, e, i, r) {
                    var n = t.geometry,
                        a = null,
                        o = m,
                        s = t.customDepthMaterial;
                    if (i && (o = v, s = t.customDistanceMaterial), s) a = s;
                    else {
                        var h = void 0 !== n.morphTargets && 0 < n.morphTargets.length && e.morphTargets,
                            u = t instanceof M.SkinnedMesh && e.skinning,
                            l = 0;
                        h && (l |= d), u && (l |= f), a = o[l]
                    }
                    return a.visible = e.visible, a.wireframe = e.wireframe, a.wireframeLinewidth = e.wireframeLinewidth, i && void 0 !== a.uniforms.lightPos && a.uniforms.lightPos.value.copy(r), a
                }

                function n(t, e, i) {
                    if (!1 !== t.visible) {
                        t.layers.test(e.layers) && (t instanceof M.Mesh || t instanceof M.Line || t instanceof M.Points) && t.castShadow && (!1 === t.frustumCulled || !0 === s.intersectsObject(t)) && !0 === t.material.visible && (t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), p.push(t));
                        for (var r = t.children, a = 0, o = r.length; a < o; a++) n(r[a], e, i)
                    }
                }
                for (var a = t.context, o = t.state, s = new M.Frustum, h = new M.Matrix4, u = new M.Vector2, l = new M.Vector3, c = new M.Vector3, p = [], d = 1, f = 2, m = [, , , , ], v = [, , , , ], g = [new M.Vector3(1, 0, 0), new M.Vector3(-1, 0, 0), new M.Vector3(0, 0, 1), new M.Vector3(0, 0, -1), new M.Vector3(0, 1, 0), new M.Vector3(0, -1, 0)], y = [new M.Vector3(0, 1, 0), new M.Vector3(0, 1, 0), new M.Vector3(0, 1, 0), new M.Vector3(0, 1, 0), new M.Vector3(0, 0, 1), new M.Vector3(0, 0, -1)], x = [new M.Vector4, new M.Vector4, new M.Vector4, new M.Vector4, new M.Vector4, new M.Vector4], _ = M.ShaderLib.depthRGBA, b = M.UniformsUtils.clone(_.uniforms), S = M.ShaderLib.distanceRGBA, w = M.UniformsUtils.clone(S.uniforms), E = 0; E !== 1 + (d | f); ++E) {
                    var T = 0 != (E & d),
                        A = 0 != (E & f),
                        L = new M.ShaderMaterial({
                            uniforms: b,
                            vertexShader: _.vertexShader,
                            fragmentShader: _.fragmentShader,
                            morphTargets: T,
                            skinning: A
                        });
                    m[E] = L;
                    var R = new M.ShaderMaterial({
                        defines: {
                            USE_SHADOWMAP: ""
                        },
                        uniforms: w,
                        vertexShader: S.vertexShader,
                        fragmentShader: S.fragmentShader,
                        morphTargets: T,
                        skinning: A
                    });
                    v[E] = R
                }
                var C = this;
                this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = M.PCFShadowMap, this.cullFace = M.CullFaceFront, this.render = function(d, f) {
                    var m, v, _ = e.shadows;
                    if (0 !== _.length && !1 !== C.enabled && (!1 !== C.autoUpdate || !1 !== C.needsUpdate)) {
                        o.clearColor(1, 1, 1, 1), o.disable(a.BLEND), o.enable(a.CULL_FACE), a.frontFace(a.CCW), a.cullFace(C.cullFace === M.CullFaceFront ? a.FRONT : a.BACK), o.setDepthTest(!0), o.setScissorTest(!1);
                        for (var b = 0, S = _.length; b < S; b++) {
                            var w = _[b],
                                E = w.shadow,
                                T = E.camera;
                            if (u.copy(E.mapSize), w instanceof M.PointLight) {
                                m = 6, v = !0;
                                var A = u.x,
                                    L = u.y;
                                x[0].set(2 * A, L, A, L), x[1].set(0, L, A, L), x[2].set(3 * A, L, A, L), x[3].set(A, L, A, L), x[4].set(3 * A, 0, A, L), x[5].set(A, 0, A, L), u.x *= 4, u.y *= 2
                            } else m = 1, v = !1;
                            if (null === E.map) {
                                var R = {
                                    minFilter: M.NearestFilter,
                                    magFilter: M.NearestFilter,
                                    format: M.RGBAFormat
                                };
                                E.map = new M.WebGLRenderTarget(u.x, u.y, R), w instanceof M.SpotLight && (T.aspect = u.x / u.y), T.updateProjectionMatrix()
                            }
                            var U = E.map,
                                F = E.matrix;
                            c.setFromMatrixPosition(w.matrixWorld), T.position.copy(c), t.setRenderTarget(U), t.clear();
                            for (var P = 0; P < m; P++) {
                                if (v) {
                                    l.copy(T.position), l.add(g[P]), T.up.copy(y[P]), T.lookAt(l);
                                    var D = x[P];
                                    o.viewport(D)
                                } else l.setFromMatrixPosition(w.target.matrixWorld), T.lookAt(l);
                                T.updateMatrixWorld(), T.matrixWorldInverse.getInverse(T.matrixWorld), F.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), F.multiply(T.projectionMatrix), F.multiply(T.matrixWorldInverse), h.multiplyMatrices(T.projectionMatrix, T.matrixWorldInverse), s.setFromMatrix(h), p.length = 0, n(d, f, T);
                                for (var N = 0, B = p.length; N < B; N++) {
                                    var I = p[N],
                                        O = i.update(I),
                                        V = I.material;
                                    if (V instanceof M.MultiMaterial)
                                        for (var z = O.groups, G = V.materials, k = 0, W = z.length; k < W; k++) {
                                            var j = z[k],
                                                X = G[j.materialIndex];
                                            if (!0 === X.visible) {
                                                H = r(I, X, v, c);
                                                t.renderBufferDirect(T, null, O, H, I, j)
                                            }
                                        } else {
                                            var H = r(I, V, v, c);
                                            t.renderBufferDirect(T, null, O, H, I, null)
                                        }
                                }
                            }
                        }
                        var Y = t.getClearColor(),
                            q = t.getClearAlpha();
                        t.setClearColor(Y, q), o.enable(a.BLEND), C.cullFace === M.CullFaceFront && a.cullFace(a.BACK), C.needsUpdate = !1
                    }
                }
            }, M.SpritePlugin = function(t, e) {
                function i() {
                    var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    a = c.createBuffer(), o = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, a), c.bufferData(c.ARRAY_BUFFER, t, c.STATIC_DRAW), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, o), c.bufferData(c.ELEMENT_ARRAY_BUFFER, e, c.STATIC_DRAW), s = r(), h = {
                        position: c.getAttribLocation(s, "position"),
                        uv: c.getAttribLocation(s, "uv")
                    }, u = {
                        uvOffset: c.getUniformLocation(s, "uvOffset"),
                        uvScale: c.getUniformLocation(s, "uvScale"),
                        rotation: c.getUniformLocation(s, "rotation"),
                        scale: c.getUniformLocation(s, "scale"),
                        color: c.getUniformLocation(s, "color"),
                        map: c.getUniformLocation(s, "map"),
                        opacity: c.getUniformLocation(s, "opacity"),
                        modelViewMatrix: c.getUniformLocation(s, "modelViewMatrix"),
                        projectionMatrix: c.getUniformLocation(s, "projectionMatrix"),
                        fogType: c.getUniformLocation(s, "fogType"),
                        fogDensity: c.getUniformLocation(s, "fogDensity"),
                        fogNear: c.getUniformLocation(s, "fogNear"),
                        fogFar: c.getUniformLocation(s, "fogFar"),
                        fogColor: c.getUniformLocation(s, "fogColor"),
                        alphaTest: c.getUniformLocation(s, "alphaTest")
                    };
                    var i = document.createElement("canvas");
                    i.width = 8, i.height = 8;
                    var n = i.getContext("2d");
                    n.fillStyle = "white", n.fillRect(0, 0, 8, 8), (l = new M.Texture(i)).needsUpdate = !0
                }

                function r() {
                    var e = c.createProgram(),
                        i = c.createShader(c.VERTEX_SHADER),
                        r = c.createShader(c.FRAGMENT_SHADER);
                    return c.shaderSource(i, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), c.shaderSource(r, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), c.compileShader(i), c.compileShader(r), c.attachShader(e, i), c.attachShader(e, r), c.linkProgram(e), e
                }

                function n(t, e) {
                    return t.renderOrder === e.renderOrder ? t.z === e.z ? e.id - t.id : e.z - t.z : t.renderOrder - e.renderOrder
                }
                var a, o, s, h, u, l, c = t.context,
                    p = t.state,
                    d = new M.Vector3,
                    f = new M.Quaternion,
                    m = new M.Vector3;
                this.render = function(r, v) {
                    if (0 !== e.length) {
                        void 0 === s && i(), c.useProgram(s), p.initAttributes(), p.enableAttribute(h.position), p.enableAttribute(h.uv), p.disableUnusedAttributes(), p.disable(c.CULL_FACE), p.enable(c.BLEND), c.bindBuffer(c.ARRAY_BUFFER, a), c.vertexAttribPointer(h.position, 2, c.FLOAT, !1, 16, 0), c.vertexAttribPointer(h.uv, 2, c.FLOAT, !1, 16, 8), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, o), c.uniformMatrix4fv(u.projectionMatrix, !1, v.projectionMatrix.elements), p.activeTexture(c.TEXTURE0), c.uniform1i(u.map, 0);
                        var g = 0,
                            y = 0,
                            x = r.fog;
                        x ? (c.uniform3f(u.fogColor, x.color.r, x.color.g, x.color.b), x instanceof M.Fog ? (c.uniform1f(u.fogNear, x.near), c.uniform1f(u.fogFar, x.far), c.uniform1i(u.fogType, 1), g = 1, y = 1) : x instanceof M.FogExp2 && (c.uniform1f(u.fogDensity, x.density), c.uniform1i(u.fogType, 2), g = 2, y = 2)) : (c.uniform1i(u.fogType, 0), g = 0, y = 0);
                        for (var _, b = 0, S = e.length; b < S; b++)(_ = e[b]).modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, _.matrixWorld), _.z = -_.modelViewMatrix.elements[14];
                        e.sort(n);
                        for (var w = [], b = 0, S = e.length; b < S; b++) {
                            var E = (_ = e[b]).material;
                            c.uniform1f(u.alphaTest, E.alphaTest), c.uniformMatrix4fv(u.modelViewMatrix, !1, _.modelViewMatrix.elements), _.matrixWorld.decompose(d, f, m), w[0] = m.x, w[1] = m.y;
                            var T = 0;
                            r.fog && E.fog && (T = y), g != T && (c.uniform1i(u.fogType, T), g = T), null === E.map ? (c.uniform2f(u.uvOffset, 0, 0), c.uniform2f(u.uvScale, 1, 1)) : (c.uniform2f(u.uvOffset, E.map.offset.x, E.map.offset.y), c.uniform2f(u.uvScale, E.map.repeat.x, E.map.repeat.y)), c.uniform1f(u.opacity, E.opacity), c.uniform3f(u.color, E.color.r, E.color.g, E.color.b), c.uniform1f(u.rotation, E.rotation), c.uniform2fv(u.scale, w), p.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst), p.setDepthTest(E.depthTest), p.setDepthWrite(E.depthWrite), E.map && E.map.image && E.map.image.width ? t.setTexture(E.map, 0) : t.setTexture(l, 0), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0)
                        }
                        p.enable(c.CULL_FACE), t.resetGLState()
                    }
                }
            }, M.LensFlarePlugin = function(t, e) {
                function i() {
                    var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    n = p.createBuffer(), a = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, n), p.bufferData(p.ARRAY_BUFFER, t, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), p.bufferData(p.ELEMENT_ARRAY_BUFFER, e, p.STATIC_DRAW), l = p.createTexture(), c = p.createTexture(), d.bindTexture(p.TEXTURE_2D, l), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), d.bindTexture(p.TEXTURE_2D, c), p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), u = 0 < p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
                    o = r(u ? {
                        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                        fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                    } : {
                        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                        fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                    }), s = {
                        vertex: p.getAttribLocation(o, "position"),
                        uv: p.getAttribLocation(o, "uv")
                    }, h = {
                        renderType: p.getUniformLocation(o, "renderType"),
                        map: p.getUniformLocation(o, "map"),
                        occlusionMap: p.getUniformLocation(o, "occlusionMap"),
                        opacity: p.getUniformLocation(o, "opacity"),
                        color: p.getUniformLocation(o, "color"),
                        scale: p.getUniformLocation(o, "scale"),
                        rotation: p.getUniformLocation(o, "rotation"),
                        screenPosition: p.getUniformLocation(o, "screenPosition")
                    }
                }

                function r(e) {
                    var i = p.createProgram(),
                        r = p.createShader(p.FRAGMENT_SHADER),
                        n = p.createShader(p.VERTEX_SHADER),
                        a = "precision " + t.getPrecision() + " float;\n";
                    return p.shaderSource(r, a + e.fragmentShader), p.shaderSource(n, a + e.vertexShader), p.compileShader(r), p.compileShader(n), p.attachShader(i, r), p.attachShader(i, n), p.linkProgram(i), i
                }
                var n, a, o, s, h, u, l, c, p = t.context,
                    d = t.state;
                this.render = function(r, f, m) {
                    if (0 !== e.length) {
                        var v = new M.Vector3,
                            g = m.w / m.z,
                            y = .5 * m.z,
                            x = .5 * m.w,
                            _ = 16 / m.w,
                            b = new M.Vector2(_ * g, _),
                            S = new M.Vector3(1, 1, 0),
                            w = new M.Vector2(1, 1);
                        void 0 === o && i(), p.useProgram(o), d.initAttributes(), d.enableAttribute(s.vertex), d.enableAttribute(s.uv), d.disableUnusedAttributes(), p.uniform1i(h.occlusionMap, 0), p.uniform1i(h.map, 1), p.bindBuffer(p.ARRAY_BUFFER, n), p.vertexAttribPointer(s.vertex, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(s.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), d.disable(p.CULL_FACE), d.setDepthWrite(!1);
                        for (var E = 0, T = e.length; E < T; E++) {
                            _ = 16 / m.w, b.set(_ * g, _);
                            var A = e[E];
                            if (v.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), v.applyMatrix4(f.matrixWorldInverse), v.applyProjection(f.projectionMatrix), S.copy(v), w.x = S.x * y + y, w.y = S.y * x + x, u || 0 < w.x && w.x < m.z && 0 < w.y && w.y < m.w) {
                                d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, null), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, l), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, m.x + w.x - 8, m.y + w.y - 8, 16, 16, 0), p.uniform1i(h.renderType, 0), p.uniform2f(h.scale, b.x, b.y), p.uniform3f(h.screenPosition, S.x, S.y, S.z), d.disable(p.BLEND), d.enable(p.DEPTH_TEST), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, c), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, m.x + w.x - 8, m.y + w.y - 8, 16, 16, 0), p.uniform1i(h.renderType, 1), d.disable(p.DEPTH_TEST), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, l), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), A.positionScreen.copy(S), A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(), p.uniform1i(h.renderType, 2), d.enable(p.BLEND);
                                for (var L, R = 0, C = A.lensFlares.length; R < C; R++).001 < (L = A.lensFlares[R]).opacity && .001 < L.scale && (S.x = L.x, S.y = L.y, S.z = L.z, _ = L.size * L.scale / m.w, b.x = _ * g, b.y = _, p.uniform3f(h.screenPosition, S.x, S.y, S.z), p.uniform2f(h.scale, b.x, b.y), p.uniform1f(h.rotation, L.rotation), p.uniform1f(h.opacity, L.opacity), p.uniform3f(h.color, L.color.r, L.color.g, L.color.b), d.setBlending(L.blending, L.blendEquation, L.blendSrc, L.blendDst), t.setTexture(L.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
                            }
                        }
                        d.enable(p.CULL_FACE), d.enable(p.DEPTH_TEST), d.setDepthWrite(!0), t.resetGLState()
                    }
                }
            }, M.WebGLObjects = function(t, e, i) {
                function r(t, i) {
                    var r = t instanceof M.InterleavedBufferAttribute ? t.data : t,
                        o = e.get(r);
                    void 0 === o.__webglBuffer ? n(o, r, i) : o.version !== r.version && a(o, r, i)
                }

                function n(e, i, r) {
                    e.__webglBuffer = t.createBuffer(), t.bindBuffer(r, e.__webglBuffer);
                    var n = i.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
                    t.bufferData(r, i.array, n), e.version = i.version
                }

                function a(e, i, r) {
                    t.bindBuffer(r, e.__webglBuffer), !1 === i.dynamic || -1 === i.updateRange.count ? t.bufferSubData(r, 0, i.array) : 0 === i.updateRange.count || (t.bufferSubData(r, i.updateRange.offset * i.array.BYTES_PER_ELEMENT, i.array.subarray(i.updateRange.offset, i.updateRange.offset + i.updateRange.count)), i.updateRange.count = 0), e.version = i.version
                }

                function o(t, e, i) {
                    if (e > i) {
                        var r = e;
                        e = i, i = r
                    }
                    var n = t[e];
                    return void 0 === n ? (t[e] = [i], !0) : !(-1 !== n.indexOf(i) || (n.push(i), 0))
                }
                var s = new M.WebGLGeometries(t, e, i);
                this.getAttributeBuffer = function(t) {
                    return t instanceof M.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
                }, this.getWireframeAttribute = function(i) {
                    var n = e.get(i);
                    if (void 0 !== n.wireframe) return n.wireframe;
                    var a = [],
                        s = i.index,
                        h = i.attributes,
                        u = h.position;
                    if (null !== s)
                        for (var l = {}, c = s.array, p = 0, d = c.length; p < d; p += 3) {
                            var f = c[p + 0],
                                m = c[p + 1],
                                v = c[p + 2];
                            o(l, f, m) && a.push(f, m), o(l, m, v) && a.push(m, v), o(l, v, f) && a.push(v, f)
                        } else
                            for (var c = h.position.array, p = 0, d = c.length / 3 - 1; p < d; p += 3) {
                                var f = p + 0,
                                    m = p + 1,
                                    v = p + 2;
                                a.push(f, m, m, v, v, f)
                            }
                    var g = 65535 < u.count ? Uint32Array : Uint16Array,
                        y = new M.BufferAttribute(new g(a), 1);
                    return r(y, t.ELEMENT_ARRAY_BUFFER), n.wireframe = y, y
                }, this.update = function(e) {
                    var i = s.get(e);
                    e.geometry instanceof M.Geometry && i.updateFromObject(e);
                    var n = i.index,
                        a = i.attributes;
                    for (var o in null !== n && r(n, t.ELEMENT_ARRAY_BUFFER), a) r(a[o], t.ARRAY_BUFFER);
                    var h = i.morphAttributes;
                    for (var o in h)
                        for (var u = h[o], l = 0, c = u.length; l < c; l++) r(u[l], t.ARRAY_BUFFER);
                    return i
                }
            }, M.WebGLProgram = function() {
                function t(t) {
                    switch (t) {
                        case M.LinearEncoding:
                            return ["Linear", "( value )"];
                        case M.sRGBEncoding:
                            return ["sRGB", "( value )"];
                        case M.RGBEEncoding:
                            return ["RGBE", "( value )"];
                        case M.RGBM7Encoding:
                            return ["RGBM", "( value, 7.0 )"];
                        case M.RGBM16Encoding:
                            return ["RGBM", "( value, 16.0 )"];
                        case M.RGBDEncoding:
                            return ["RGBD", "( value, 256.0 )"];
                        case M.GammaEncoding:
                            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                        default:
                            throw new Error("unsupported encoding: " + t)
                    }
                }

                function e(e, i) {
                    var r = t(i);
                    return "vec4 " + e + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
                }

                function i(e, i) {
                    var r = t(i);
                    return "vec4 " + e + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
                }

                function r(t, e) {
                    var i;
                    switch (e) {
                        case M.LinearToneMapping:
                            i = "Linear";
                            break;
                        case M.ReinhardToneMapping:
                            i = "Reinhard";
                            break;
                        case M.Uncharted2ToneMapping:
                            i = "Uncharted2";
                            break;
                        case M.CineonToneMapping:
                            i = "OptimizedCineon";
                            break;
                        default:
                            throw new Error("unsupported toneMapping: " + e)
                    }
                    return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
                }

                function n(t, e, i) {
                    return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(h).join("\n")
                }

                function a(t) {
                    var e = [];
                    for (var i in t) {
                        var r = t[i];
                        !1 === r || e.push("#define " + i + " " + r)
                    }
                    return e.join("\n")
                }

                function o(t, e) {
                    for (var i = {}, r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), n = 0; n < r; n++) {
                        var a = t.getActiveUniform(e, n).name,
                            o = t.getUniformLocation(e, a),
                            s = d.exec(a);
                        if (s) {
                            var h = s[1],
                                u = s[2],
                                l = i[h];
                            l || (l = i[h] = {}), l[u] = o
                        } else if (s = f.exec(a)) {
                            var c = s[1],
                                p = s[2],
                                v = s[3],
                                g = i[c];
                            g || (g = i[c] = []);
                            var y = g[p];
                            y || (y = g[p] = {}), y[v] = o
                        } else(s = m.exec(a)) ? i[c = s[1]] = o : i[a] = o
                    }
                    return i
                }

                function s(t, e) {
                    for (var i = {}, r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), n = 0; n < r; n++) {
                        var a = t.getActiveAttrib(e, n).name;
                        i[a] = t.getAttribLocation(e, a)
                    }
                    return i
                }

                function h(t) {
                    return "" !== t
                }

                function u(t, e) {
                    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
                }

                function l(t) {
                    var e = /#include +<([\w\d.]+)>/g;
                    return t.replace(e, function(t, e) {
                        var i = M.ShaderChunk[e];
                        if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
                        return l(i)
                    })
                }

                function c(t) {
                    var e = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
                    return t.replace(e, function(t, e, i, r) {
                        for (var n = "", a = parseInt(e); a < parseInt(i); a++) n += r.replace(/\[ i \]/g, "[ " + a + " ]");
                        return n
                    })
                }
                var p = 0,
                    d = /^([\w\d_]+)\.([\w\d_]+)$/,
                    f = /^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/,
                    m = /^([\w\d_]+)\[0\]$/;
                return function(t, d, f, m) {
                    var v = t.context,
                        g = f.extensions,
                        y = f.defines,
                        x = f.__webglShader.vertexShader,
                        _ = f.__webglShader.fragmentShader,
                        b = "SHADOWMAP_TYPE_BASIC";
                    m.shadowMapType === M.PCFShadowMap ? b = "SHADOWMAP_TYPE_PCF" : m.shadowMapType === M.PCFSoftShadowMap && (b = "SHADOWMAP_TYPE_PCF_SOFT");
                    var S = "ENVMAP_TYPE_CUBE",
                        w = "ENVMAP_MODE_REFLECTION",
                        E = "ENVMAP_BLENDING_MULTIPLY";
                    if (m.envMap) {
                        switch (f.envMap.mapping) {
                            case M.CubeReflectionMapping:
                            case M.CubeRefractionMapping:
                                S = "ENVMAP_TYPE_CUBE";
                                break;
                            case M.CubeUVReflectionMapping:
                            case M.CubeUVRefractionMapping:
                                S = "ENVMAP_TYPE_CUBE_UV";
                                break;
                            case M.EquirectangularReflectionMapping:
                            case M.EquirectangularRefractionMapping:
                                S = "ENVMAP_TYPE_EQUIREC";
                                break;
                            case M.SphericalReflectionMapping:
                                S = "ENVMAP_TYPE_SPHERE"
                        }
                        switch (f.envMap.mapping) {
                            case M.CubeRefractionMapping:
                            case M.EquirectangularRefractionMapping:
                                w = "ENVMAP_MODE_REFRACTION"
                        }
                        switch (f.combine) {
                            case M.MultiplyOperation:
                                E = "ENVMAP_BLENDING_MULTIPLY";
                                break;
                            case M.MixOperation:
                                E = "ENVMAP_BLENDING_MIX";
                                break;
                            case M.AddOperation:
                                E = "ENVMAP_BLENDING_ADD"
                        }
                    }
                    var T, A, L = 0 < t.gammaFactor ? t.gammaFactor : 1,
                        R = n(g, m, t.extensions),
                        C = a(y),
                        U = v.createProgram();
                    f instanceof M.RawShaderMaterial ? (T = "", A = "") : (T = ["precision " + m.precision + " float;", "precision " + m.precision + " int;", "#define SHADER_NAME " + f.__webglShader.name, C, m.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + L, "#define MAX_BONES " + m.maxBones, m.map ? "#define USE_MAP" : "", m.envMap ? "#define USE_ENVMAP" : "", m.envMap ? "#define " + w : "", m.lightMap ? "#define USE_LIGHTMAP" : "", m.aoMap ? "#define USE_AOMAP" : "", m.emissiveMap ? "#define USE_EMISSIVEMAP" : "", m.bumpMap ? "#define USE_BUMPMAP" : "", m.normalMap ? "#define USE_NORMALMAP" : "", m.displacementMap && m.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", m.specularMap ? "#define USE_SPECULARMAP" : "", m.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", m.metalnessMap ? "#define USE_METALNESSMAP" : "", m.alphaMap ? "#define USE_ALPHAMAP" : "", m.vertexColors ? "#define USE_COLOR" : "", m.flatShading ? "#define FLAT_SHADED" : "", m.skinning ? "#define USE_SKINNING" : "", m.useVertexTexture ? "#define BONE_TEXTURE" : "", m.morphTargets ? "#define USE_MORPHTARGETS" : "", m.morphNormals && !1 === m.flatShading ? "#define USE_MORPHNORMALS" : "", m.doubleSided ? "#define DOUBLE_SIDED" : "", m.flipSided ? "#define FLIP_SIDED" : "", m.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", m.shadowMapEnabled ? "#define " + b : "", 0 < m.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", m.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", m.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", m.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(h).join("\n"), A = [R, "precision " + m.precision + " float;", "precision " + m.precision + " int;", "#define SHADER_NAME " + f.__webglShader.name, C, m.alphaTest ? "#define ALPHATEST " + m.alphaTest : "", "#define GAMMA_FACTOR " + L, m.useFog && m.fog ? "#define USE_FOG" : "", m.useFog && m.fogExp ? "#define FOG_EXP2" : "", m.map ? "#define USE_MAP" : "", m.envMap ? "#define USE_ENVMAP" : "", m.envMap ? "#define " + S : "", m.envMap ? "#define " + w : "", m.envMap ? "#define " + E : "", m.lightMap ? "#define USE_LIGHTMAP" : "", m.aoMap ? "#define USE_AOMAP" : "", m.emissiveMap ? "#define USE_EMISSIVEMAP" : "", m.bumpMap ? "#define USE_BUMPMAP" : "", m.normalMap ? "#define USE_NORMALMAP" : "", m.specularMap ? "#define USE_SPECULARMAP" : "", m.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", m.metalnessMap ? "#define USE_METALNESSMAP" : "", m.alphaMap ? "#define USE_ALPHAMAP" : "", m.vertexColors ? "#define USE_COLOR" : "", m.flatShading ? "#define FLAT_SHADED" : "", m.doubleSided ? "#define DOUBLE_SIDED" : "", m.flipSided ? "#define FLIP_SIDED" : "", m.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", m.shadowMapEnabled ? "#define " + b : "", 0 < m.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", m.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", m.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", m.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", m.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", m.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", m.toneMapping === M.NoToneMapping ? "" : "#define TONE_MAPPING", m.toneMapping === M.NoToneMapping ? "" : M.ShaderChunk.tonemapping_pars_fragment, m.toneMapping === M.NoToneMapping ? "" : r("toneMapping", m.toneMapping), m.outputEncoding || m.mapEncoding || m.envMapEncoding || m.emissiveMapEncoding ? M.ShaderChunk.encodings_pars_fragment : "", m.mapEncoding ? e("mapTexelToLinear", m.mapEncoding) : "", m.envMapEncoding ? e("envMapTexelToLinear", m.envMapEncoding) : "", m.emissiveMapEncoding ? e("emissiveMapTexelToLinear", m.emissiveMapEncoding) : "", m.outputEncoding ? i("linearToOutputTexel", m.outputEncoding) : "", "\n"].filter(h).join("\n")), x = u(x = l(x, m), m), _ = u(_ = l(_, m), m), 0 == f instanceof M.ShaderMaterial && (x = c(x), _ = c(_));
                    var F = T + x,
                        P = A + _,
                        D = M.WebGLShader(v, v.VERTEX_SHADER, F),
                        N = M.WebGLShader(v, v.FRAGMENT_SHADER, P);
                    v.attachShader(U, D), v.attachShader(U, N), void 0 === f.index0AttributeName ? !0 === m.morphTargets && v.bindAttribLocation(U, 0, "position") : v.bindAttribLocation(U, 0, f.index0AttributeName), v.linkProgram(U);
                    var B = v.getProgramInfoLog(U),
                        I = v.getShaderInfoLog(D),
                        O = v.getShaderInfoLog(N),
                        V = !0,
                        z = !0;
                    !1 === v.getProgramParameter(U, v.LINK_STATUS) ? V = !1 : "" !== B || ("" === I || "" === O) && (z = !1), z && (this.diagnostics = {
                        runnable: V,
                        material: f,
                        programLog: B,
                        vertexShader: {
                            log: I,
                            prefix: T
                        },
                        fragmentShader: {
                            log: O,
                            prefix: A
                        }
                    }), v.deleteShader(D), v.deleteShader(N);
                    var G;
                    this.getUniforms = function() {
                        return void 0 == G && (G = o(v, U)), G
                    };
                    var k;
                    return this.getAttributes = function() {
                        return void 0 == k && (k = s(v, U)), k
                    }, this.destroy = function() {
                        v.deleteProgram(U), this.program = void 0
                    }, Object.defineProperties(this, {
                        uniforms: {
                            get: function() {
                                return this.getUniforms()
                            }
                        },
                        attributes: {
                            get: function() {
                                return this.getAttributes()
                            }
                        }
                    }), this.id = p++, this.code = d, this.usedTimes = 1, this.program = U, this.vertexShader = D, this.fragmentShader = N, this
                }
            }(), M.WebGLRenderTarget = function(t, e, i) {
                this.uuid = M.Math.generateUUID(), this.width = t, this.height = e, this.scissor = new M.Vector4(0, 0, t, e), this.scissorTest = !1, this.viewport = new M.Vector4(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = M.LinearFilter), this.texture = new M.Texture(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy), this.depthBuffer = !(void 0 !== i.depthBuffer) || i.depthBuffer, this.stencilBuffer = !(void 0 !== i.stencilBuffer) || i.stencilBuffer
            }, M.WebGLRenderTarget.prototype = {
                constructor: M.WebGLRenderTarget,
                setSize: function(t, e) {
                    (this.width !== t || this.height !== e) && (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this
                },
                dispose: function() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }, M.EventDispatcher.prototype.apply(M.WebGLRenderTarget.prototype), M.WebGLRenderTargetCube = function(t, e, i) {
                M.WebGLRenderTarget.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
            }, M.WebGLRenderTargetCube.prototype = Object.create(M.WebGLRenderTarget.prototype), M.WebGLRenderTargetCube.prototype.constructor = M.WebGLRenderTargetCube, M.WebGLPrograms = function(t, e) {
                function i(t) {
                    if (e.floatVertexTextures && t && t.skeleton && t.skeleton.useVertexTexture) return 1024;
                    var i = e.maxVertexUniforms,
                        r = m((i - 20) / 4);
                    return void 0 !== t && t instanceof M.SkinnedMesh && (r = g(t.skeleton.bones.length, r), t.skeleton.bones.length), r
                }

                function r(t, e) {
                    var i;
                    return t ? t instanceof M.Texture ? i = t.encoding : t instanceof M.WebGLRenderTarget && (i = t.texture.encoding) : i = M.LinearEncoding, i === M.LinearEncoding && e && (i = M.GammaEncoding), i
                }
                var n = [],
                    a = {
                        MeshDepthMaterial: "depth",
                        MeshNormalMaterial: "normal",
                        MeshBasicMaterial: "basic",
                        MeshLambertMaterial: "lambert",
                        MeshPhongMaterial: "phong",
                        MeshStandardMaterial: "standard",
                        LineBasicMaterial: "basic",
                        LineDashedMaterial: "dashed",
                        PointsMaterial: "points"
                    },
                    o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "pointLightShadows", "toneMapping", "physicallyCorrectLights", "shadowMapType", "alphaTest", "doubleSided", "flipSided"];
                this.getParameters = function(n, o, s, h) {
                    var u = a[n.type],
                        l = i(h),
                        c = t.getPrecision();
                    return null !== n.precision && (c = e.getMaxPrecision(n.precision), n.precision), {
                        shaderID: u,
                        precision: c,
                        supportsVertexTextures: e.vertexTextures,
                        outputEncoding: r(t.getCurrentRenderTarget(), t.gammaOutput),
                        map: !!n.map,
                        mapEncoding: r(n.map, t.gammaInput),
                        envMap: !!n.envMap,
                        envMapMode: n.envMap && n.envMap.mapping,
                        envMapEncoding: r(n.envMap, t.gammaInput),
                        envMapCubeUV: !!n.envMap && (n.envMap.mapping === M.CubeUVReflectionMapping || n.envMap.mapping === M.CubeUVRefractionMapping),
                        lightMap: !!n.lightMap,
                        aoMap: !!n.aoMap,
                        emissiveMap: !!n.emissiveMap,
                        emissiveMapEncoding: r(n.emissiveMap, t.gammaInput),
                        bumpMap: !!n.bumpMap,
                        normalMap: !!n.normalMap,
                        displacementMap: !!n.displacementMap,
                        roughnessMap: !!n.roughnessMap,
                        metalnessMap: !!n.metalnessMap,
                        specularMap: !!n.specularMap,
                        alphaMap: !!n.alphaMap,
                        combine: n.combine,
                        vertexColors: n.vertexColors,
                        fog: s,
                        useFog: n.fog,
                        fogExp: s instanceof M.FogExp2,
                        flatShading: n.shading === M.FlatShading,
                        sizeAttenuation: n.sizeAttenuation,
                        logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                        skinning: n.skinning,
                        maxBones: l,
                        useVertexTexture: e.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture,
                        morphTargets: n.morphTargets,
                        morphNormals: n.morphNormals,
                        maxMorphTargets: t.maxMorphTargets,
                        maxMorphNormals: t.maxMorphNormals,
                        numDirLights: o.directional.length,
                        numPointLights: o.point.length,
                        numSpotLights: o.spot.length,
                        numHemiLights: o.hemi.length,
                        pointLightShadows: o.shadowsPointLight,
                        shadowMapEnabled: t.shadowMap.enabled && h.receiveShadow && 0 < o.shadows.length,
                        shadowMapType: t.shadowMap.type,
                        toneMapping: t.toneMapping,
                        physicallyCorrectLights: t.physicallyCorrectLights,
                        premultipliedAlpha: n.premultipliedAlpha,
                        alphaTest: n.alphaTest,
                        doubleSided: n.side === M.DoubleSide,
                        flipSided: n.side === M.BackSide
                    }
                }, this.getProgramCode = function(t, e) {
                    var i = [];
                    if (e.shaderID ? i.push(e.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
                        for (var r in t.defines) i.push(r), i.push(t.defines[r]);
                    for (var n, a = 0; a < o.length; a++) n = o[a], i.push(n), i.push(e[n]);
                    return i.join()
                }, this.acquireProgram = function(e, i, r) {
                    for (var a, o, s = 0, h = n.length; s < h; s++)
                        if ((o = n[s]).code === r) {
                            ++(a = o).usedTimes;
                            break
                        }
                    return void 0 === a && (a = new M.WebGLProgram(t, r, e, i), n.push(a)), a
                }, this.releaseProgram = function(t) {
                    if (0 == --t.usedTimes) {
                        var e = n.indexOf(t);
                        n[e] = n[n.length - 1], n.pop(), t.destroy()
                    }
                }, this.programs = n
            }
        })),
        r = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = function t(e, i, r) {
            null === e && (e = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === n) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, i, r)
            }
            if ("value" in n) return n.value;
            var o = n.get;
            if (void 0 !== o) return o.call(r)
        },
        o = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        s = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        },
        h = function() {
            function t(e) {
                r(this, t), Object.assign(this, e), this.renderer = new i.WebGLRenderer, this.renderer.setClearColor(0, 0), this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio), this.el = this.renderer.domElement
            }
            return n(t, [{
                key: "setTexture",
                value: function(t) {
                    this.texture = t, this.mesh = this.createMesh()
                }
            }, {
                key: "setSize",
                value: function(t) {
                    var e = t.height,
                        i = t.width;
                    this.height = e, this.width = i, this.renderer.setSize(i, e)
                }
            }, {
                key: "createMesh",
                value: function() {
                    return this.material = new i.MeshBasicMaterial({
                        map: this.texture
                    }), this.geometry = new i.SphereGeometry(1, 50, 50), this.geometry.scale(-1, 1, 1), new i.Mesh(this.geometry, this.material)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.geometry.dispose(), this.material.dispose(), this.renderer.dispose()
                }
            }, {
                key: "render",
                value: function(t, e, i) {
                    i && this.renderer.render(t, e)
                }
            }]), t
        }(),
        u = function(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        },
      
        l = function() {
            function t(n) {
                var o = this;
                r(this, t), Object.assign(this, n), this.el = this.renderer.el, this.theta = this.initialYaw * a / 180, this.phi = 0, this.velo = e.isiOS() ? .02 : 1.6, this.rotateStart = new i.Vector2, this.rotateEnd = new i.Vector2, this.rotateDelta = new i.Vector2, this.orientation = new i.Quaternion, this.euler = new i.Euler, this.momentum = !1, this.isUserInteracting = !1, this.addDraggableStyle(), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = function(t) {
                    return o.onMouseDown({
                        clientX: t.touches[0].pageX,
                        clientY: t.touches[0].pageY
                    })
                }, this.onTouchMove = function(t) {
                    return o.onMouseMove({
                        clientX: t.touches[0].pageX,
                        clientY: t.touches[0].pageY
                    })
                }, this.onTouchEnd = function() {
                    return o.onMouseUp()
                }, this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onMessage = this.onMessage.bind(this), this.bindEvents()
            }
            var a = Math.PI;
            var clampTheta = function(val){
                if(val>3.2){
                    val= 3.2;
                }
                else if(val<0.25) {
                    val = 0.25;
                } 
                return val;
            }
            return n(t, [{
                key: "bindEvents",
                value: function() {
                    this.el.addEventListener("mouseleave", this.onMouseUp), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mousedown", this.onMouseDown), this.el.addEventListener("mouseup", this.onMouseUp), this.el.addEventListener("touchstart", this.onTouchStart), this.el.addEventListener("touchmove", this.onTouchMove), this.el.addEventListener("touchend", this.onTouchEnd), this.isInIframe() || window.addEventListener("devicemotion", this.onDeviceMotion), window.addEventListener("message", this.onMessage)
                }
            }, {
                key: "centralize",
                value: function() {
                    var t = this,
                        e = this.initialYaw * a / 180,
                        i = this.theta,
                        r = this.phi,
                        n = Date.now(),
                        o = function() {
                            var a = Date.now() - n,
                                h = a / 750;
                            return h = 1 < h ? 1 : h, a >= 750 ? cancelAnimationFrame(s) : (t.theta = i + (e - i) * u(h), t.phi = r + (0 - r) * u(h), requestAnimationFrame(o))
                        },
                        s = o()
                         
                }
            }, {
                key: "isInIframe",
                value: function() {
                    try {
                        return window.self !== window.top
                    } catch (t) {
                        return !0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.el.removeEventListener("mouseleave", this.onMouseUp), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mousedown", this.onMouseDown), this.el.removeEventListener("mouseup", this.onMouseUp), this.el.removeEventListener("touchstart", this.onTouchStart), this.el.removeEventListener("touchmove", this.onTouchMove), this.el.removeEventListener("touchend", this.onTouchEnd), window.removeEventListener("devicemotion", this.onDeviceMotion), window.removeEventListener("message", this.onMessage)
                }
            }, {
                key: "getCurrentStyle",
                value: function() {
                    return "height: " + parseInt(this.el.style.height, 10) + "px; width: " + parseInt(this.el.style.width, 10) + "px; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"
                }
            }, {
                key: "addDraggingStyle",
                value: function() {
                    this.el.setAttribute("style", this.getCurrentStyle() + " cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing;")
                }
            }, {
                key: "addDraggableStyle",
                value: function() {
                    this.el.setAttribute("style", this.getCurrentStyle() + " cursor: -webkit-grab; cursor: -moz-grab; cursor: grab;")
                }
            }, {
                key: "onMessage",
                value: function(t) {
                    var e = t.data,
                        i = e.orientation,
                        r = e.portrait,
                        n = e.rotationRate;
                    n && this.onDeviceMotion({
                        orientation: i,
                        portrait: r,
                        rotationRate: n
                    })
                }
            }, {
                key: "onDeviceMotion",
                value: function(t) {
                    // console.log('motion')
                    var e, r = void 0 === t.portrait ? window.matchMedia("(orientation: portrait)").matches : t.portrait;
                    e = void 0 === t.orientation ? void 0 === window.orientation ? -90 : window.orientation : t.orientation;
                    var n = i.Math.degToRad(t.rotationRate.alpha),
                        a = i.Math.degToRad(t.rotationRate.beta);
                    r ? (this.phi = this.verticalPanning ? this.phi + n * this.velo : this.phi, this.theta -= a * this.velo * -1) : (this.verticalPanning && (this.phi = -90 === e ? this.phi + a * this.velo : this.phi - a * this.velo), this.theta = -90 === e ? this.theta - n * this.velo : this.theta + n * this.velo), this.adjustPhi()
                    this.theta =  clampTheta(this.theta);
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    // let x =t.clientX;
                    // if(t.clientX>1000){
                    //     x = 1000;
                    // }
                    // else if(t.clientX<200) {
                    //     x = 200;
                    // }else{
                    //     x = t.clientX;
                    // }
                     
                    
                    // console.log(x)   
                    // this.isUserInteracting = false;
                
                    // console.log(this.theta);   
                    this.isUserInteracting && (this.rotateEnd.set(t.clientX, t.clientY), this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart), this.rotateStart.copy(this.rotateEnd), this.phi = this.verticalPanning ? this.phi + 2 * a * this.rotateDelta.y / this.renderer.height * .3 : this.phi, this.theta += 2 * a * this.rotateDelta.x / this.renderer.width * .5, this.adjustPhi())
                    this.theta =  clampTheta(this.theta);
                    
                }
            }, {
                key: "adjustPhi",
                value: function() {
                    this.phi = i.Math.clamp(this.phi, -a / 1.95, a / 1.95)
                }
            }, {
                key: "onMouseDown",
                value: function(t) {                     
                    this.addDraggingStyle(), this.rotateStart.set(t.clientX, t.clientY), this.isUserInteracting = !0, this.momentum = !1, this.onDragStart && this.onDragStart()
                }
            }, {
                key: "inertia",
                value: function() {
                    this.momentum && (this.rotateDelta.y *= .9, this.rotateDelta.x *= .9, this.theta += .005 * this.rotateDelta.x*0.07, this.phi = this.verticalPanning ? this.phi + .005 * this.rotateDelta.y : this.phi, this.adjustPhi())
                }
            }, {
                key: "onMouseUp",
                value: function() {
                    this.isUserInteracting && this.onDragStop && this.onDragStop(), this.addDraggableStyle(), this.isUserInteracting = !1, this.momentum = !0, this.inertia()
                }
            }, {
                key: "update",
                value: function() {                     
                    return (this.phi !== this.previousPhi || this.theta !== this.previousTheta) && (this.previousPhi = this.phi, this.previousTheta = this.theta, this.euler.set(this.phi, this.theta, 0, "YXZ"), this.orientation.setFromEuler(this.euler), this.camera.quaternion.copy(this.orientation), this.inertia(), !0)
                }
            }]), t
        }(),
        c = function() {
            function t() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, t), Object.assign(this, {
                    height: 360,
                    width: 640,
                    initialYaw: 90,
                    verticalPanning: !0,
                    hud:0
                }, e);
                var n = this.height,
                    a = this.width,
                    o = (this.container, this.containerId, this.initialYaw),
                    s = this.verticalPanning,
                    u = this.onDragStart,
                    c = this.onDragStop,
                    hud = this.hud;
                this.renderer = new h({
                    height: n,
                    width: a
                }), this.camera = new i.PerspectiveCamera(80, this.width / this.height, .1, 100), this.controls = new l({
                    camera: this.camera,
                    renderer: this.renderer,
                    initialYaw: o,
                    verticalPanning: s,
                    onDragStart: u,
                    onDragStop: c
                }), this.stopVideoLoop = this.stopVideoLoop.bind(this), this.onError = this.onError.bind(this), this.startVideoLoop = this.startVideoLoop.bind(this), this.needsUpdate = !1, this.scene = this.createScene(), this.scene.add(this.camera), this.element = this.getElement(), this.element.addEventListener("playing", this.startVideoLoop), this.element.addEventListener("pause", this.stopVideoLoop), this.element.addEventListener("ended", this.stopVideoLoop), this.texture = this.createTexture(), this.renderer.setTexture(this.texture), this.scene.getObjectByName("photo").children = [this.renderer.mesh], this.target = this.container ? this.container : document.querySelector(this.containerId)
            }
            return n(t, [{
                key: "play",
                value: function() {
                    
                    this.element.play && this.element.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.element.pause && this.element.pause()
                }
            }, {
                key: "centralize",
                value: function() {
                    this.controls.centralize()
                }
            }, {
                key: "stopVideoLoop",
                value: function() {
                    clearTimeout(this.videoLoopId), this.videoLoopId = null, this.needsUpdate = !1
                }
            }, {
                key: "destroy",
                value: function() {
                    this.element.style.display = "", clearTimeout(this.videoLoopId), cancelAnimationFrame(this.animationFrameId), this.element.pause && this.element.pause(), this.target.removeChild(this.renderer.el), this.controls.destroy(), this.renderer.destroy()
                }
            }, {
                key: "setSize",
                value: function(t) {
                    var e = t.height,
                        i = t.width;
                    this.camera.aspect = i / e, this.camera.updateProjectionMatrix(), this.renderer.setSize({
                        height: e,
                        width: i
                    })
                }
            }, {
                key: "getElement",
                value: function() {
                    if (this.source && this.source.tagName) return this.source;
                    var t = document.createElement("video");
                    return t.loop = this.loop || !1, t.muted = this.muted || !1, t.setAttribute("crossorigin", "anonymous"), t.setAttribute("webkit-playsinline", "true"), t.setAttribute("playsinline", "true"), t.setAttribute("src", this.source), t.autoplay = void 0 === this.autoplay || this.autoplay, t.addEventListener("error", this.onError), t
                }
            }, {
                key: "createTexture",
                value: function() {
                    var t = new i.Texture(this.element);
                    return t.minFilter = i.LinearFilter, t.magFilter = i.LinearFilter, t.format = i.RGBFormat, t.generateMipmaps = !1, t.needsUpdate = !0, t
                }
            }, {
                key: "createScene",
                value: function() {
                    var t = new i.Scene,
                        e = new i.Object3D;
                    return e.name = "photo", t.add(e), t
                }
            }, {
                key: "onError",
                value: function() {}
            }, {
                key: "startVideoLoop",
                value: function() {
                    var t = this;
                    this.videoLoopId && (clearTimeout(this.videoLoopId), this.videoLoopId = null);
                    var e = function() {
                        t.needsUpdate = !0, t.videoLoopId = setTimeout(e, 40)
                    };
                    e()
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    console.log('hud:',this.hud)
                    this.target.appendChild(this.renderer.el), this.element.style.display = "none";
                    var e = function() {
                        t.animationFrameId = requestAnimationFrame(e);
                        var i = t.controls.update();
                        t.renderer.render(t.scene, t.camera, t.needsUpdate || i), t.needsUpdate = !1
                    };
                    this.startVideoLoop(), e()
                }
            }]), t
        }(),
        p = function(t) {
            function e(t) {
                return r(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
            }
            return o(e, c), n(e, [{
                key: "createTexture",
                value: function() {
                    var t = new i.VideoTexture(this.element);
                    return t.minFilter = i.LinearFilter, t.magFilter = i.LinearFilter, t.format = i.RGBFormat, t.generateMipmaps = !1, t.needsUpdate = !0, t
                }
            }]), e
        }(),
        d = function(t) {
            function e(t) {
                return r(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
            }
            return o(e, c), n(e, [{
                key: "getElement",
                value: function() {
                    if (this.source && this.source.tagName) return this.source;
                    var t = document.createElement("img");
                    return t.setAttribute("crossorigin", "anonymous"), t.src = this.source, t
                }
            }]), e
        }(),
        f = function(t) {
            function e(t) {
                r(this, e);
                var i = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return i.context = i.element.getContext("2d"), i
            }
            return o(e, c), n(e, [{
                key: "play",
                value: function() {
                    this.video.play && this.video.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.video.pause && this.video.pause()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.video.style.display = "", a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
                }
            }, {
                key: "getElement",
                value: function() {
                    this.video = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "getElement", this).call(this), this.video.addEventListener("playing", this.startVideoLoop), this.video.addEventListener("pause", this.stopVideoLoop), this.video.addEventListener("ended", this.stopVideoLoop);
                    var t = document.createElement("canvas");
                    return t.height = this.height, t.width = this.width, t
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    this.target.appendChild(this.renderer.el), this.video.style.display = "none";
                    var e = function() {
                        t.animationFrameId = requestAnimationFrame(e), t.context.clearRect(0, 0, t.width, t.height), t.context.drawImage(t.video, 0, 0, t.width, t.height);
                        var i = t.controls.update();
                        t.renderer.render(t.scene, t.camera, t.needsUpdate || i), t.renderer.mesh.material.map.needsUpdate = !0, t.needsUpdate = !1
                    };
                    this.startVideoLoop(), e()
                }
            }]), e
        }(),
        m = function(t) {
            function e(t) {
                r(this, e);
                var i = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return i.driver.addEventListener("playing", i.startVideoLoop), i.driver.addEventListener("pause", i.stopVideoLoop), i.driver.addEventListener("ended", i.stopVideoLoop), i.driver.addEventListener("stalled", i.stopVideoLoop), i.driverInitialized = !1, i
            }
            return o(e, c), n(e, [{
                key: "play",
                value: function() {
                    this.driver.play()
                }
            }, {
                key: "pause",   
                value: function() {
                    this.driver.pause()
                }
            }, {
                key: "getElement",
                value: function() {
                    this.source && this.source.tagName ? this.driver = this.source : (this.driver = document.createElement("audio"), this.driver.src = this.source, this.driver.loop = this.loop || !1, this.driver.muted = this.muted || !1, this.driver.setAttribute("crossorigin", "anonymous"), this.driver.autoplay = this.autoplay || !0), this.source = this.driver.src, this.driver.src = "", this.driver.load();
                    var t = document.createElement("video");
                    return t.setAttribute("crossorigin", "anonymous"), t.src = this.source, t.load(), t.addEventListener("error", this.onError), t
                }
            }, {
                key: "createTexture",
                value: function() {
                    var t = new i.VideoTexture(this.element);
                    return t.minFilter = i.LinearFilter, t.magFilter = i.LinearFilter, t.format = i.RGBFormat, t.generateMipmaps = !1, t.needsUpdate = !0, t
                }
            }, {
                key: "startVideoLoop",
                value: function() {
                    var t = this;
                    this.videoLoopId && (clearTimeout(this.videoLoopId), this.videoLoopId = null);
                    var e = function() {
                        t.element.currentTime = t.driver.currentTime, t.needsUpdate = !0, t.videoLoopId = setTimeout(e, 40)
                    };
                    e()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.driver.style.display = "", a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    this.target.appendChild(this.renderer.el), this.element.style.display = "none", this.driver.style.display = "none";
                    var e = function() {
                        var i = t.controls.update();
                        t.renderer.render(t.scene, t.camera, t.needsUpdate || i), t.needsUpdate = !1, t.animationFrameId = requestAnimationFrame(e), t.element.readyState >= t.element.HAVE_FUTURE_DATA && !t.driverInitialized && (t.driver.src = t.source, t.driver.load(), t.onDriverReady && t.onDriverReady(), t.driverInitialized = !0)
                    };
                    e()
                }
            }]), e
        }();
    t.Video = function(t) {
        return e.shouldUseAudioDriver() ? new m(t) : e.shouldUseCanvasInBetween() ? new f(t) : new p(t)
    }, t.Image = d, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});