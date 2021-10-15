
/*!
 * matter-demo bundle 0.17.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 */
var v5Dj = function(t, e) {
        !function() {
            "use strict";
            "SVGPathSeg"in window || (window.SVGPathSeg = function(t, e, n) {
                this.pathSegType = t,
                this.pathSegTypeAsLetter = e,
                this._owningPathSegList = n
            }
            ,
            window.SVGPathSeg.prototype.classname = "SVGPathSeg",
            window.SVGPathSeg.PATHSEG_UNKNOWN = 0,
            window.SVGPathSeg.PATHSEG_CLOSEPATH = 1,
            window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2,
            window.SVGPathSeg.PATHSEG_MOVETO_REL = 3,
            window.SVGPathSeg.PATHSEG_LINETO_ABS = 4,
            window.SVGPathSeg.PATHSEG_LINETO_REL = 5,
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6,
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7,
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8,
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9,
            window.SVGPathSeg.PATHSEG_ARC_ABS = 10,
            window.SVGPathSeg.PATHSEG_ARC_REL = 11,
            window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12,
            window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13,
            window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14,
            window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15,
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16,
            window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17,
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18,
            window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19,
            window.SVGPathSeg.prototype._segmentChanged = function() {
                this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
            }
            ,
            window.SVGPathSegClosePath = function(t) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t)
            }
            ,
            window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegClosePath.prototype.toString = function() {
                return "[object SVGPathSegClosePath]"
            }
            ,
            window.SVGPathSegClosePath.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter
            }
            ,
            window.SVGPathSegClosePath.prototype.clone = function() {
                return new window.SVGPathSegClosePath(void 0)
            }
            ,
            window.SVGPathSegMovetoAbs = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t),
                this._x = e,
                this._y = n
            }
            ,
            window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegMovetoAbs.prototype.toString = function() {
                return "[object SVGPathSegMovetoAbs]"
            }
            ,
            window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegMovetoAbs.prototype.clone = function() {
                return new window.SVGPathSegMovetoAbs(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegMovetoRel = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t),
                this._x = e,
                this._y = n
            }
            ,
            window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegMovetoRel.prototype.toString = function() {
                return "[object SVGPathSegMovetoRel]"
            }
            ,
            window.SVGPathSegMovetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegMovetoRel.prototype.clone = function() {
                return new window.SVGPathSegMovetoRel(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegLinetoAbs = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t),
                this._x = e,
                this._y = n
            }
            ,
            window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegLinetoAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoAbs]"
            }
            ,
            window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegLinetoAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoAbs(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegLinetoRel = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t),
                this._x = e,
                this._y = n
            }
            ,
            window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegLinetoRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoRel]"
            }
            ,
            window.SVGPathSegLinetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegLinetoRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoRel(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoCubicAbs = function(t, e, n, i, o, r, h) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t),
                this._x = e,
                this._y = n,
                this._x1 = i,
                this._y1 = o,
                this._x2 = r,
                this._y2 = h
            }
            ,
            window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicAbs]"
            }
            ,
            window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoCubicRel = function(t, e, n, i, o, r, h) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t),
                this._x = e,
                this._y = n,
                this._x1 = i,
                this._y1 = o,
                this._x2 = r,
                this._y2 = h
            }
            ,
            window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicRel]"
            }
            ,
            window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoQuadraticAbs = function(t, e, n, i, o) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t),
                this._x = e,
                this._y = n,
                this._x1 = i,
                this._y1 = o
            }
            ,
            window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticAbs]"
            }
            ,
            window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoQuadraticRel = function(t, e, n, i, o) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t),
                this._x = e,
                this._y = n,
                this._x1 = i,
                this._y1 = o
            }
            ,
            window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticRel]"
            }
            ,
            window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegArcAbs = function(t, e, n, i, o, r, h, s) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t),
                this._x = e,
                this._y = n,
                this._r1 = i,
                this._r2 = o,
                this._angle = r,
                this._largeArcFlag = h,
                this._sweepFlag = s
            }
            ,
            window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegArcAbs.prototype.toString = function() {
                return "[object SVGPathSegArcAbs]"
            }
            ,
            window.SVGPathSegArcAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegArcAbs.prototype.clone = function() {
                return new window.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)
            }
            ,
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                get: function() {
                    return this._r1
                },
                set: function(t) {
                    this._r1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                get: function() {
                    return this._r2
                },
                set: function(t) {
                    this._r2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
                get: function() {
                    return this._angle
                },
                set: function(t) {
                    this._angle = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(t) {
                    this._largeArcFlag = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag
                },
                set: function(t) {
                    this._sweepFlag = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegArcRel = function(t, e, n, i, o, r, h, s) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t),
                this._x = e,
                this._y = n,
                this._r1 = i,
                this._r2 = o,
                this._angle = r,
                this._largeArcFlag = h,
                this._sweepFlag = s
            }
            ,
            window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegArcRel.prototype.toString = function() {
                return "[object SVGPathSegArcRel]"
            }
            ,
            window.SVGPathSegArcRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegArcRel.prototype.clone = function() {
                return new window.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)
            }
            ,
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                get: function() {
                    return this._r1
                },
                set: function(t) {
                    this._r1 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                get: function() {
                    return this._r2
                },
                set: function(t) {
                    this._r2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
                get: function() {
                    return this._angle
                },
                set: function(t) {
                    this._angle = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(t) {
                    this._largeArcFlag = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag
                },
                set: function(t) {
                    this._sweepFlag = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegLinetoHorizontalAbs = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t),
                this._x = e
            }
            ,
            window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalAbs]"
            }
            ,
            window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x
            }
            ,
            window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0,this._x)
            }
            ,
            Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegLinetoHorizontalRel = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t),
                this._x = e
            }
            ,
            window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalRel]"
            }
            ,
            window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x
            }
            ,
            window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalRel(void 0,this._x)
            }
            ,
            Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegLinetoVerticalAbs = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t),
                this._y = e
            }
            ,
            window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalAbs]"
            }
            ,
            window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y
            }
            ,
            window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalAbs(void 0,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegLinetoVerticalRel = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t),
                this._y = e
            }
            ,
            window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalRel]"
            }
            ,
            window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y
            }
            ,
            window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalRel(void 0,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoCubicSmoothAbs = function(t, e, n, i, o) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t),
                this._x = e,
                this._y = n,
                this._x2 = i,
                this._y2 = o
            }
            ,
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothAbs]"
            }
            ,
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoCubicSmoothRel = function(t, e, n, i, o) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t),
                this._x = e,
                this._y = n,
                this._x2 = i,
                this._y2 = o
            }
            ,
            window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothRel]"
            }
            ,
            window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoQuadraticSmoothAbs = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t),
                this._x = e,
                this._y = n
            }
            ,
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
            }
            ,
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathSegCurvetoQuadraticSmoothRel = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t),
                this._x = e,
                this._y = n
            }
            ,
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype),
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
            }
            ,
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }
            ,
            window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)
            }
            ,
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t,
                    this._segmentChanged()
                },
                enumerable: !0
            }),
            window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
                return new window.SVGPathSegClosePath(void 0)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(t, e) {
                return new window.SVGPathSegMovetoAbs(void 0,t,e)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(t, e) {
                return new window.SVGPathSegMovetoRel(void 0,t,e)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(t, e) {
                return new window.SVGPathSegLinetoAbs(void 0,t,e)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(t, e) {
                return new window.SVGPathSegLinetoRel(void 0,t,e)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(t, e, n, i, o, r) {
                return new window.SVGPathSegCurvetoCubicAbs(void 0,t,e,n,i,o,r)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(t, e, n, i, o, r) {
                return new window.SVGPathSegCurvetoCubicRel(void 0,t,e,n,i,o,r)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoQuadraticAbs(void 0,t,e,n,i)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoQuadraticRel(void 0,t,e,n,i)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(t, e, n, i, o, r, h) {
                return new window.SVGPathSegArcAbs(void 0,t,e,n,i,o,r,h)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegArcRel = function(t, e, n, i, o, r, h) {
                return new window.SVGPathSegArcRel(void 0,t,e,n,i,o,r,h)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(t) {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0,t)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(t) {
                return new window.SVGPathSegLinetoHorizontalRel(void 0,t)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(t) {
                return new window.SVGPathSegLinetoVerticalAbs(void 0,t)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(t) {
                return new window.SVGPathSegLinetoVerticalRel(void 0,t)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,n,i)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,n,i)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)
            }
            ,
            window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)
            }
            ,
            "getPathSegAtLength"in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function(t) {
                if (void 0 === t || !isFinite(t))
                    throw "Invalid arguments.";
                var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                e.setAttribute("d", this.getAttribute("d"));
                var n = e.pathSegList.numberOfItems - 1;
                if (n <= 0)
                    return 0;
                do {
                    if (e.pathSegList.removeItem(n),
                    t > e.getTotalLength())
                        break;
                    n--
                } while (n > 0);
                return n
            }
            )),
            "SVGPathSegList"in window && "appendItem"in window.SVGPathSegList.prototype || (window.SVGPathSegList = function(t) {
                this._pathElement = t,
                this._list = this._parsePath(this._pathElement.getAttribute("d")),
                this._mutationObserverConfig = {
                    attributes: !0,
                    attributeFilter: ["d"]
                },
                this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)),
                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }
            ,
            window.SVGPathSegList.prototype.classname = "SVGPathSegList",
            Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
                get: function() {
                    return this._checkPathSynchronizedToList(),
                    this._list.length
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
                get: function() {
                    return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)),
                    this._pathSegList
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }),
            Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }),
            window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
                this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
            }
            ,
            window.SVGPathSegList.prototype._updateListFromPathMutations = function(t) {
                if (this._pathElement) {
                    var e = !1;
                    t.forEach((function(t) {
                        "d" == t.attributeName && (e = !0)
                    }
                    )),
                    e && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
                }
            }
            ,
            window.SVGPathSegList.prototype._writeListToPath = function() {
                this._pathElementMutationObserver.disconnect(),
                this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)),
                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }
            ,
            window.SVGPathSegList.prototype.segmentChanged = function(t) {
                this._writeListToPath()
            }
            ,
            window.SVGPathSegList.prototype.clear = function() {
                this._checkPathSynchronizedToList(),
                this._list.forEach((function(t) {
                    t._owningPathSegList = null
                }
                )),
                this._list = [],
                this._writeListToPath()
            }
            ,
            window.SVGPathSegList.prototype.initialize = function(t) {
                return this._checkPathSynchronizedToList(),
                this._list = [t],
                t._owningPathSegList = this,
                this._writeListToPath(),
                t
            }
            ,
            window.SVGPathSegList.prototype._checkValidIndex = function(t) {
                if (isNaN(t) || t < 0 || t >= this.numberOfItems)
                    throw "INDEX_SIZE_ERR"
            }
            ,
            window.SVGPathSegList.prototype.getItem = function(t) {
                return this._checkPathSynchronizedToList(),
                this._checkValidIndex(t),
                this._list[t]
            }
            ,
            window.SVGPathSegList.prototype.insertItemBefore = function(t, e) {
                return this._checkPathSynchronizedToList(),
                e > this.numberOfItems && (e = this.numberOfItems),
                t._owningPathSegList && (t = t.clone()),
                this._list.splice(e, 0, t),
                t._owningPathSegList = this,
                this._writeListToPath(),
                t
            }
            ,
            window.SVGPathSegList.prototype.replaceItem = function(t, e) {
                return this._checkPathSynchronizedToList(),
                t._owningPathSegList && (t = t.clone()),
                this._checkValidIndex(e),
                this._list[e] = t,
                t._owningPathSegList = this,
                this._writeListToPath(),
                t
            }
            ,
            window.SVGPathSegList.prototype.removeItem = function(t) {
                this._checkPathSynchronizedToList(),
                this._checkValidIndex(t);
                var e = this._list[t];
                return this._list.splice(t, 1),
                this._writeListToPath(),
                e
            }
            ,
            window.SVGPathSegList.prototype.appendItem = function(t) {
                return this._checkPathSynchronizedToList(),
                t._owningPathSegList && (t = t.clone()),
                this._list.push(t),
                t._owningPathSegList = this,
                this._writeListToPath(),
                t
            }
            ,
            window.SVGPathSegList._pathSegArrayAsString = function(t) {
                var e = ""
                  , n = !0;
                return t.forEach((function(t) {
                    n ? (n = !1,
                    e += t._asPathString()) : e += " " + t._asPathString()
                }
                )),
                e
            }
            ,
            window.SVGPathSegList.prototype._parsePath = function(t) {
                if (!t || 0 == t.length)
                    return [];
                var e = this
                  , n = function() {
                    this.pathSegList = []
                };
                n.prototype.appendSegment = function(t) {
                    this.pathSegList.push(t)
                }
                ;
                var i = function(t) {
                    this._string = t,
                    this._currentIndex = 0,
                    this._endIndex = this._string.length,
                    this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN,
                    this._skipOptionalSpaces()
                };
                i.prototype._isCurrentSpace = function() {
                    var t = this._string[this._currentIndex];
                    return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t)
                }
                ,
                i.prototype._skipOptionalSpaces = function() {
                    for (; this._currentIndex < this._endIndex && this._isCurrentSpace(); )
                        this._currentIndex++;
                    return this._currentIndex < this._endIndex
                }
                ,
                i.prototype._skipOptionalSpacesOrDelimiter = function() {
                    return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++,
                    this._skipOptionalSpaces()),
                    this._currentIndex < this._endIndex)
                }
                ,
                i.prototype.hasMoreData = function() {
                    return this._currentIndex < this._endIndex
                }
                ,
                i.prototype.peekSegmentType = function() {
                    var t = this._string[this._currentIndex];
                    return this._pathSegTypeFromChar(t)
                }
                ,
                i.prototype._pathSegTypeFromChar = function(t) {
                    switch (t) {
                    case "Z":
                    case "z":
                        return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                    case "M":
                        return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case "m":
                        return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                    case "L":
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    case "l":
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    case "C":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case "c":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case "Q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case "q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case "A":
                        return window.SVGPathSeg.PATHSEG_ARC_ABS;
                    case "a":
                        return window.SVGPathSeg.PATHSEG_ARC_REL;
                    case "H":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case "h":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case "V":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case "v":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case "S":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case "s":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case "T":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case "t":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return window.SVGPathSeg.PATHSEG_UNKNOWN
                    }
                }
                ,
                i.prototype._nextCommandHelper = function(t, e) {
                    return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN
                }
                ,
                i.prototype.initialCommandIsMoveTo = function() {
                    if (!this.hasMoreData())
                        return !0;
                    var t = this.peekSegmentType();
                    return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL
                }
                ,
                i.prototype._parseNumber = function() {
                    var t = 0
                      , e = 0
                      , n = 1
                      , i = 0
                      , o = 1
                      , r = 1
                      , h = this._currentIndex;
                    if (this._skipOptionalSpaces(),
                    this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++,
                    o = -1),
                    !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
                        for (var s = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"; )
                            this._currentIndex++;
                        if (this._currentIndex != s)
                            for (var a = this._currentIndex - 1, S = 1; a >= s; )
                                e += S * (this._string.charAt(a--) - "0"),
                                S *= 10;
                        if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                            if (this._currentIndex++,
                            this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                                return;
                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"; )
                                n *= 10,
                                i += (this._string.charAt(this._currentIndex) - "0") / n,
                                this._currentIndex += 1
                        }
                        if (this._currentIndex != h && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                            if (this._currentIndex++,
                            "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++,
                            r = -1),
                            this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                                return;
                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"; )
                                t *= 10,
                                t += this._string.charAt(this._currentIndex) - "0",
                                this._currentIndex++
                        }
                        var u = e + i;
                        if (u *= o,
                        t && (u *= Math.pow(10, r * t)),
                        h != this._currentIndex)
                            return this._skipOptionalSpacesOrDelimiter(),
                            u
                    }
                }
                ,
                i.prototype._parseArcFlag = function() {
                    if (!(this._currentIndex >= this._endIndex)) {
                        var t = !1
                          , e = this._string.charAt(this._currentIndex++);
                        if ("0" == e)
                            t = !1;
                        else {
                            if ("1" != e)
                                return;
                            t = !0
                        }
                        return this._skipOptionalSpacesOrDelimiter(),
                        t
                    }
                }
                ,
                i.prototype.parseSegment = function() {
                    var t = this._string[this._currentIndex]
                      , n = this._pathSegTypeFromChar(t);
                    if (n == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                        if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                            return null;
                        if ((n = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN)
                            return null
                    } else
                        this._currentIndex++;
                    switch (this._previousCommand = n,
                    n) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new window.SVGPathSegMovetoRel(e,this._parseNumber(),this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new window.SVGPathSegMovetoAbs(e,this._parseNumber(),this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new window.SVGPathSegLinetoRel(e,this._parseNumber(),this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new window.SVGPathSegLinetoAbs(e,this._parseNumber(),this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new window.SVGPathSegLinetoHorizontalRel(e,this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new window.SVGPathSegLinetoHorizontalAbs(e,this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new window.SVGPathSegLinetoVerticalRel(e,this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new window.SVGPathSegLinetoVerticalAbs(e,this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        return this._skipOptionalSpaces(),
                        new window.SVGPathSegClosePath(e);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        var i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegCurvetoCubicRel(e,i.x,i.y,i.x1,i.y1,i.x2,i.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegCurvetoCubicAbs(e,i.x,i.y,i.x1,i.y1,i.x2,i.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        i = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegCurvetoCubicSmoothRel(e,i.x,i.y,i.x2,i.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        i = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegCurvetoCubicSmoothAbs(e,i.x,i.y,i.x2,i.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegCurvetoQuadraticRel(e,i.x,i.y,i.x1,i.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegCurvetoQuadraticAbs(e,i.x,i.y,i.x1,i.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(e,this._parseNumber(),this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e,this._parseNumber(),this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                        i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegArcRel(e,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                        i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegArcAbs(e,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);
                    default:
                        throw "Unknown path seg type."
                    }
                }
                ;
                var o = new n
                  , r = new i(t);
                if (!r.initialCommandIsMoveTo())
                    return [];
                for (; r.hasMoreData(); ) {
                    var h = r.parseSegment();
                    if (!h)
                        return [];
                    o.appendSegment(h)
                }
                return o.pathSegList
            }
            )
        }()
    };
v5Dj();
/*
// SVGPathSeg API polyfill
// https://github.com/progers/pathseg
//
// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
// changes which were implemented in Firefox 43 and Chrome 46.

(function() { "use strict";
    if (!("SVGPathSeg" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
        window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
        }

        window.SVGPathSeg.prototype.classname = "SVGPathSeg";

        window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
        window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
        window.SVGPathSeg.PATHSEG_ARC_REL = 11;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
        window.SVGPathSeg.prototype._segmentChanged = function() {
            if (this._owningPathSegList)
                this._owningPathSegList.segmentChanged(this);
        }

        window.SVGPathSegClosePath = function(owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
        }
        window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegClosePath.prototype.toString = function() { return "[object SVGPathSegClosePath]"; }
        window.SVGPathSegClosePath.prototype._asPathString = function() { return this.pathSegTypeAsLetter; }
        window.SVGPathSegClosePath.prototype.clone = function() { return new window.SVGPathSegClosePath(undefined); }

        window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoAbs.prototype.toString = function() { return "[object SVGPathSegMovetoAbs]"; }
        window.SVGPathSegMovetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoAbs.prototype.clone = function() { return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoRel.prototype.toString = function() { return "[object SVGPathSegMovetoRel]"; }
        window.SVGPathSegMovetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoRel.prototype.clone = function() { return new window.SVGPathSegMovetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoAbs.prototype.toString = function() { return "[object SVGPathSegLinetoAbs]"; }
        window.SVGPathSegLinetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoAbs.prototype.clone = function() { return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoRel.prototype.toString = function() { return "[object SVGPathSegLinetoRel]"; }
        window.SVGPathSegLinetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoRel.prototype.clone = function() { return new window.SVGPathSegLinetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicAbs]"; }
        window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicRel]"; }
        window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticAbs]"; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticRel]"; }
        window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcAbs.prototype.toString = function() { return "[object SVGPathSegArcAbs]"; }
        window.SVGPathSegArcAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcAbs.prototype.clone = function() { return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcRel.prototype.toString = function() { return "[object SVGPathSegArcRel]"; }
        window.SVGPathSegArcRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcRel.prototype.clone = function() { return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalAbs]"; }
        window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalRel]"; }
        window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalAbs]"; }
        window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalRel.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalRel]"; }
        window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalRel.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalRel(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothAbs]"; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothRel]"; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothRel]"; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        // Add createSVGPathSeg* functions to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-Interfacewindow.SVGPathElement.
        window.SVGPathElement.prototype.createSVGPathSegClosePath = function() { return new window.SVGPathSegClosePath(undefined); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) { return new window.SVGPathSegMovetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) { return new window.SVGPathSegMovetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) { return new window.SVGPathSegLinetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) { return new window.SVGPathSegLinetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) { return new window.SVGPathSegLinetoHorizontalAbs(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) { return new window.SVGPathSegLinetoHorizontalRel(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) { return new window.SVGPathSegLinetoVerticalAbs(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) { return new window.SVGPathSegLinetoVerticalRel(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y); }

        if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            // Add getPathSegAtLength to SVGPathElement.
            // Spec: https://www.w3.org/TR/SVG11/single-page.html#paths-__svg__SVGPathElement__getPathSegAtLength
            // This polyfill requires SVGPathElement.getTotalLength to implement the distance-along-a-path algorithm.
            window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
                if (distance === undefined || !isFinite(distance))
                    throw "Invalid arguments.";

                var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                measurementElement.setAttribute("d", this.getAttribute("d"));
                var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;

                // If the path is empty, return 0.
                if (lastPathSegment <= 0)
                    return 0;

                do {
                    measurementElement.pathSegList.removeItem(lastPathSegment);
                    if (distance > measurementElement.getTotalLength())
                        break;
                    lastPathSegment--;
                } while (lastPathSegment > 0);
                return lastPathSegment;
            }
        }
    }

    // Checking for SVGPathSegList in window checks for the case of an implementation without the
    // SVGPathSegList API.
    // The second check for appendItem is specific to Firefox 59+ which removed only parts of the
    // SVGPathSegList API (e.g., appendItem). In this case we need to re-implement the entire API
    // so the polyfill data (i.e., _list) is used throughout.
    if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
        window.SVGPathSegList = function(pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));

            // Use a MutationObserver to catch changes to the path's "d" attribute.
            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        window.SVGPathSegList.prototype.classname = "SVGPathSegList";

        Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // The length property was not specified but was in Firefox 58.
        Object.defineProperty(window.SVGPathSegList.prototype, "length", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // Add the pathSegList accessors to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function() {
                if (!this._pathSegList)
                    this._pathSegList = new window.SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true
        });
        // FIXME: The following are not implemented and simply return window.SVGPathElement.pathSegList.
        Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });

        // Process any pending mutations to the path element and update the list as needed.
        // This should be the first call of all public functions and is needed because
        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
        window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        }

        window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
            if (!this._pathElement)
                return;
            var hasPathMutations = false;
            mutationRecords.forEach(function(record) {
                if (record.attributeName == "d")
                    hasPathMutations = true;
            });
            if (hasPathMutations)
                this._list = this._parsePath(this._pathElement.getAttribute("d"));
        }

        // Serialize the list and update the path's 'd' attribute.
        window.SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        // When a path segment changes the list needs to be synchronized back to the path element.
        window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();

            this._list.forEach(function(pathSeg) {
                pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.initialize = function(newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype._checkValidIndex = function(index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems)
                throw "INDEX_SIZE_ERR";
        }

        window.SVGPathSegList.prototype.getItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            return this._list[index];
        }

        window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
            this._checkPathSynchronizedToList();

            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
            if (index > this.numberOfItems)
                index = this.numberOfItems;
            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.removeItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
        }

        window.SVGPathSegList.prototype.appendItem = function(newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            // TODO: Optimize this to just append to the existing attribute.
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function(pathSeg) {
                if (first) {
                    first = false;
                    string += pathSeg._asPathString();
                } else {
                    string += " " + pathSeg._asPathString();
                }
            });
            return string;
        }

        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
        window.SVGPathSegList.prototype._parsePath = function(string) {
            if (!string || string.length == 0)
                return [];

            var owningPathSegList = this;

            var Builder = function() {
                this.pathSegList = [];
            }

            Builder.prototype.appendSegment = function(pathSeg) {
                this.pathSegList.push(pathSeg);
            }

            var Source = function(string) {
                this._string = string;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;

                this._skipOptionalSpaces();
            }

            Source.prototype._isCurrentSpace = function() {
                var character = this._string[this._currentIndex];
                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            }

            Source.prototype._skipOptionalSpaces = function() {
                while (this._currentIndex < this._endIndex && this._isCurrentSpace())
                    this._currentIndex++;
                return this._currentIndex < this._endIndex;
            }

            Source.prototype._skipOptionalSpacesOrDelimiter = function() {
                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
                    return false;
                if (this._skipOptionalSpaces()) {
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                }
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.peekSegmentType = function() {
                var lookahead = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(lookahead);
            }

            Source.prototype._pathSegTypeFromChar = function(lookahead) {
                switch (lookahead) {
                case "Z":
                case "z":
                    return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                case "M":
                    return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                case "m":
                    return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                case "L":
                    return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                case "l":
                    return window.SVGPathSeg.PATHSEG_LINETO_REL;
                case "C":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                case "c":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                case "Q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                case "q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                case "A":
                    return window.SVGPathSeg.PATHSEG_ARC_ABS;
                case "a":
                    return window.SVGPathSeg.PATHSEG_ARC_REL;
                case "H":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                case "h":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                case "V":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                case "v":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                case "S":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                case "s":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                case "T":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                case "t":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                default:
                    return window.SVGPathSeg.PATHSEG_UNKNOWN;
                }
            }

            Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
                // Check for remaining coordinates in the current command.
                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || (lookahead >= "0" && lookahead <= "9")) && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS)
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL)
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    return previousCommand;
                }
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            }

            Source.prototype.initialCommandIsMoveTo = function() {
                // If the path is empty it is still valid, so return true.
                if (!this.hasMoreData())
                    return true;
                var command = this.peekSegmentType();
                // Path must start with moveTo.
                return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            }

            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
            Source.prototype._parseNumber = function() {
                var exponent = 0;
                var integer = 0;
                var frac = 1;
                var decimal = 0;
                var sign = 1;
                var expsign = 1;

                var startIndex = this._currentIndex;

                this._skipOptionalSpaces();

                // Read the sign.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
                    this._currentIndex++;
                else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    sign = -1;
                }

                if (this._currentIndex == this._endIndex || ((this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != "."))
                    // The first character of a number must be one of [0-9+-.].
                    return undefined;

                // Read the integer part, build right-to-left.
                var startIntPartIndex = this._currentIndex;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                    this._currentIndex++; // Advance to first non-digit.

                if (this._currentIndex != startIntPartIndex) {
                    var scanIntPartIndex = this._currentIndex - 1;
                    var multiplier = 1;
                    while (scanIntPartIndex >= startIntPartIndex) {
                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                        multiplier *= 10;
                    }
                }

                // Read the decimals.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    this._currentIndex++;

                    // There must be a least one digit following the .
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;
                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        frac *= 10;
                        decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                        this._currentIndex += 1;
                    }
                }

                // Read the exponent part.
                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && (this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m")) {
                    this._currentIndex++;

                    // Read the sign of the exponent.
                    if (this._string.charAt(this._currentIndex) == "+") {
                        this._currentIndex++;
                    } else if (this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        expsign = -1;
                    }

                    // There must be an exponent.
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;

                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        exponent *= 10;
                        exponent += (this._string.charAt(this._currentIndex) - "0");
                        this._currentIndex++;
                    }
                }

                var number = integer + decimal;
                number *= sign;

                if (exponent)
                    number *= Math.pow(10, expsign * exponent);

                if (startIndex == this._currentIndex)
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();

                return number;
            }

            Source.prototype._parseArcFlag = function() {
                if (this._currentIndex >= this._endIndex)
                    return undefined;
                var flag = false;
                var flagChar = this._string.charAt(this._currentIndex++);
                if (flagChar == "0")
                    flag = false;
                else if (flagChar == "1")
                    flag = true;
                else
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();
                return flag;
            }

            Source.prototype.parseSegment = function() {
                var lookahead = this._string[this._currentIndex];
                var command = this._pathSegTypeFromChar(lookahead);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    // Possibly an implicit command. Not allowed if this is the first command.
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                    command = this._nextCommandHelper(lookahead, this._previousCommand);
                    if (command == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                } else {
                    this._currentIndex++;
                }

                this._previousCommand = command;

                switch (command) {
                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                    return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                    return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                    return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                    return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                    return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                    return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                    return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                    return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                    this._skipOptionalSpaces();
                    return new window.SVGPathSegClosePath(owningPathSegList);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                    return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_ARC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                default:
                    throw "Unknown path seg type."
                }
            }

            var builder = new Builder();
            var source = new Source(string);

            if (!source.initialCommandIsMoveTo())
                return [];
            while (source.hasMoreData()) {
                var pathSeg = source.parseSegment();
                if (!pathSeg)
                    return [];
                builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
        }
    }
}());
*/