/*!
 * matter-demo bundle 0.17.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 */

var pathSegInit = function(t,e){!function(){"use strict";"SVGPathSeg"in window||(window.SVGPathSeg=function(t,e,n){this.pathSegType=t,this.pathSegTypeAsLetter=e,this._owningPathSegList=n},window.SVGPathSeg.prototype.classname="SVGPathSeg",window.SVGPathSeg.PATHSEG_UNKNOWN=0,window.SVGPathSeg.PATHSEG_CLOSEPATH=1,window.SVGPathSeg.PATHSEG_MOVETO_ABS=2,window.SVGPathSeg.PATHSEG_MOVETO_REL=3,window.SVGPathSeg.PATHSEG_LINETO_ABS=4,window.SVGPathSeg.PATHSEG_LINETO_REL=5,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,window.SVGPathSeg.PATHSEG_ARC_ABS=10,window.SVGPathSeg.PATHSEG_ARC_REL=11,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,window.SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},window.SVGPathSegClosePath.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},window.SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},window.SVGPathSegClosePath.prototype.clone=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=e,this._y=n},window.SVGPathSegMovetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},window.SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoAbs.prototype.clone=function(){return new window.SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=e,this._y=n},window.SVGPathSegMovetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},window.SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoRel.prototype.clone=function(){return new window.SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=e,this._y=n},window.SVGPathSegLinetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},window.SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoAbs.prototype.clone=function(){return new window.SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=e,this._y=n},window.SVGPathSegLinetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},window.SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoRel.prototype.clone=function(){return new window.SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,e,n,i,o,r,h){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=e,this._y=n,this._x1=i,this._y1=o,this._x2=r,this._y2=h},window.SVGPathSegCurvetoCubicAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},window.SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,e,n,i,o,r,h){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=e,this._y=n,this._x1=i,this._y1=o,this._x2=r,this._y2=h},window.SVGPathSegCurvetoCubicRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},window.SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,e,n,i,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=e,this._y=n,this._x1=i,this._y1=o},window.SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,e,n,i,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=e,this._y=n,this._x1=i,this._y1=o},window.SVGPathSegCurvetoQuadraticRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,e,n,i,o,r,h,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=e,this._y=n,this._r1=i,this._r2=o,this._angle=r,this._largeArcFlag=h,this._sweepFlag=s},window.SVGPathSegArcAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},window.SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcAbs.prototype.clone=function(){return new window.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,e,n,i,o,r,h,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=e,this._y=n,this._r1=i,this._r2=o,this._angle=r,this._largeArcFlag=h,this._sweepFlag=s},window.SVGPathSegArcRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},window.SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcRel.prototype.clone=function(){return new window.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=e},window.SVGPathSegLinetoHorizontalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=e},window.SVGPathSegLinetoHorizontalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},window.SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=e},window.SVGPathSegLinetoVerticalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},window.SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=e},window.SVGPathSegLinetoVerticalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},window.SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,e,n,i,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=e,this._y=n,this._x2=i,this._y2=o},window.SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,e,n,i,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=e,this._y=n,this._x2=i,this._y2=o},window.SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=e,this._y=n},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=e,this._y=n},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,e){return new window.SVGPathSegMovetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,e){return new window.SVGPathSegMovetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,e){return new window.SVGPathSegLinetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,e){return new window.SVGPathSegLinetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,e,n,i,o,r){return new window.SVGPathSegCurvetoCubicAbs(void 0,t,e,n,i,o,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,e,n,i,o,r){return new window.SVGPathSegCurvetoCubicRel(void 0,t,e,n,i,o,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,e,n,i){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,t,e,n,i)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,e,n,i){return new window.SVGPathSegCurvetoQuadraticRel(void 0,t,e,n,i)},window.SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,e,n,i,o,r,h){return new window.SVGPathSegArcAbs(void 0,t,e,n,i,o,r,h)},window.SVGPathElement.prototype.createSVGPathSegArcRel=function(t,e,n,i,o,r,h){return new window.SVGPathSegArcRel(void 0,t,e,n,i,o,r,h)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new window.SVGPathSegLinetoHorizontalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new window.SVGPathSegLinetoHorizontalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new window.SVGPathSegLinetoVerticalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new window.SVGPathSegLinetoVerticalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,e,n,i){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,n,i)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,e,n,i){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,n,i)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)},"getPathSegAtLength"in window.SVGPathElement.prototype||(window.SVGPathElement.prototype.getPathSegAtLength=function(t){if(void 0===t||!isFinite(t))throw"Invalid arguments.";var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",this.getAttribute("d"));var n=e.pathSegList.numberOfItems-1;if(n<=0)return 0;do{if(e.pathSegList.removeItem(n),t>e.getTotalLength())break;n--}while(n>0);return n})),"SVGPathSegList"in window&&"appendItem"in window.SVGPathSegList.prototype||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.classname="SVGPathSegList",Object.defineProperty(window.SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new window.SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),window.SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},window.SVGPathSegList.prototype._updateListFromPathMutations=function(t){if(this._pathElement){var e=!1;t.forEach((function(t){"d"==t.attributeName&&(e=!0)})),e&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))}},window.SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",window.SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},window.SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach((function(t){t._owningPathSegList=null})),this._list=[],this._writeListToPath()},window.SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||t<0||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},window.SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},window.SVGPathSegList.prototype.insertItemBefore=function(t,e){return this._checkPathSynchronizedToList(),e>this.numberOfItems&&(e=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(e,0,t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.replaceItem=function(t,e){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(e),this._list[e]=t,t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t);var e=this._list[t];return this._list.splice(t,1),this._writeListToPath(),e},window.SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList._pathSegArrayAsString=function(t){var e="",n=!0;return t.forEach((function(t){n?(n=!1,e+=t._asPathString()):e+=" "+t._asPathString()})),e},window.SVGPathSegList.prototype._parsePath=function(t){if(!t||0==t.length)return[];var e=this,n=function(){this.pathSegList=[]};n.prototype.appendSegment=function(t){this.pathSegList.push(t)};var i=function(t){this._string=t,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=window.SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()};i.prototype._isCurrentSpace=function(){var t=this._string[this._currentIndex];return t<=" "&&(" "==t||"\n"==t||"\t"==t||"\r"==t||"\f"==t)},i.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++;return this._currentIndex<this._endIndex},i.prototype._skipOptionalSpacesOrDelimiter=function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!=this._string.charAt(this._currentIndex))&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","==this._string.charAt(this._currentIndex)&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},i.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},i.prototype.peekSegmentType=function(){var t=this._string[this._currentIndex];return this._pathSegTypeFromChar(t)},i.prototype._pathSegTypeFromChar=function(t){switch(t){case"Z":case"z":return window.SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return window.SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return window.SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return window.SVGPathSeg.PATHSEG_LINETO_REL;case"C":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return window.SVGPathSeg.PATHSEG_ARC_ABS;case"a":return window.SVGPathSeg.PATHSEG_ARC_REL;case"H":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return window.SVGPathSeg.PATHSEG_UNKNOWN}},i.prototype._nextCommandHelper=function(t,e){return("+"==t||"-"==t||"."==t||t>="0"&&t<="9")&&e!=window.SVGPathSeg.PATHSEG_CLOSEPATH?e==window.SVGPathSeg.PATHSEG_MOVETO_ABS?window.SVGPathSeg.PATHSEG_LINETO_ABS:e==window.SVGPathSeg.PATHSEG_MOVETO_REL?window.SVGPathSeg.PATHSEG_LINETO_REL:e:window.SVGPathSeg.PATHSEG_UNKNOWN},i.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var t=this.peekSegmentType();return t==window.SVGPathSeg.PATHSEG_MOVETO_ABS||t==window.SVGPathSeg.PATHSEG_MOVETO_REL},i.prototype._parseNumber=function(){var t=0,e=0,n=1,i=0,o=1,r=1,h=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:this._currentIndex<this._endIndex&&"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,o=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&"."!=this._string.charAt(this._currentIndex))){for(var s=this._currentIndex;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++;if(this._currentIndex!=s)for(var a=this._currentIndex-1,S=1;a>=s;)e+=S*(this._string.charAt(a--)-"0"),S*=10;if(this._currentIndex<this._endIndex&&"."==this._string.charAt(this._currentIndex)){if(this._currentIndex++,this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)n*=10,i+=(this._string.charAt(this._currentIndex)-"0")/n,this._currentIndex+=1}if(this._currentIndex!=h&&this._currentIndex+1<this._endIndex&&("e"==this._string.charAt(this._currentIndex)||"E"==this._string.charAt(this._currentIndex))&&"x"!=this._string.charAt(this._currentIndex+1)&&"m"!=this._string.charAt(this._currentIndex+1)){if(this._currentIndex++,"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,r=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)t*=10,t+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var u=e+i;if(u*=o,t&&(u*=Math.pow(10,r*t)),h!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),u}},i.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var t=!1,e=this._string.charAt(this._currentIndex++);if("0"==e)t=!1;else{if("1"!=e)return;t=!0}return this._skipOptionalSpacesOrDelimiter(),t}},i.prototype.parseSegment=function(){var t=this._string[this._currentIndex],n=this._pathSegTypeFromChar(t);if(n==window.SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==window.SVGPathSeg.PATHSEG_UNKNOWN)return null;if((n=this._nextCommandHelper(t,this._previousCommand))==window.SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++;switch(this._previousCommand=n,n){case window.SVGPathSeg.PATHSEG_MOVETO_REL:return new window.SVGPathSegMovetoRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:return new window.SVGPathSegMovetoAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:return new window.SVGPathSegLinetoRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:return new window.SVGPathSegLinetoAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new window.SVGPathSegLinetoHorizontalRel(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new window.SVGPathSegLinetoHorizontalAbs(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new window.SVGPathSegLinetoVerticalRel(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new window.SVGPathSegLinetoVerticalAbs(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new window.SVGPathSegClosePath(e);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var i={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicRel(e,i.x,i.y,i.x1,i.y1,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:i={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicAbs(e,i.x,i.y,i.x1,i.y1,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:i={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicSmoothRel(e,i.x,i.y,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:i={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicSmoothAbs(e,i.x,i.y,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:i={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoQuadraticRel(e,i.x,i.y,i.x1,i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:i={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoQuadraticAbs(e,i.x,i.y,i.x1,i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new window.SVGPathSegCurvetoQuadraticSmoothRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:i={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegArcRel(e,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:i={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegArcAbs(e,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);default:throw"Unknown path seg type."}};var o=new n,r=new i(t);if(!r.initialCommandIsMoveTo())return[];for(;r.hasMoreData();){var h=r.parseSegment();if(!h)return[];o.appendSegment(h)}return o.pathSegList})}()};
pathSegInit();

/* Pass in the objects to merge as arguments.
   For a deep extend, set the first argument to `true`.*/
var extend = function () {
	// Variables
	var extended = {};
	var deep = true;
	var i = 0;
	var length = arguments.length;

	// Check if a deep merge
	if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
		deep = arguments[0];
		i++;
	}

	// Merge the object into the extended object
	var merge = function (obj) {
		for ( var prop in obj ) {
			if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
			// If deep merge and property is an object, merge properties
				if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
					extended[prop] = extend( true, extended[prop], obj[prop] );
				} else {
					extended[prop] = obj[prop];
				}
			}
		}
	};

	// Loop through each object and conduct a merge
	for ( ; i < length; i++ ) {
		var obj = arguments[i];
		merge(obj);
	}
	return extended;
};


var lchEngine = function(userOptions) {





	var defaultOptions = {
			target: document.body,
			width: 600,
			height: 600
		},
		options = extend(defaultOptions,userOptions);

	var Engine = Matter.Engine,
		Render = Matter.Render,
		Runner = Matter.Runner,
		Common = Matter.Common,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse,
		Composite = Matter.Composite,
		Vertices = Matter.Vertices,
		Svg = Matter.Svg,
		Bodies = Matter.Bodies,
		Body = Matter.Body;

	// create engine
	var engine = Engine.create(),
		world = engine.world;
	engine.gravity.y = 1;

	// create renderer
	var render = Render.create({
		element: userOptions.target,
		engine: engine,
		options: {
			background: userOptions.background? userOptions.background : '#fff',
			wireframes: false,
			width: userOptions.width,
			height: userOptions.height
		}
	});

	Render.run(render);

	// create runner
	var runner = Runner.create();
	Runner.run(runner, engine); 	



	var wallThickness = 200;

	Composite.add(world, [
		//Bodies.rectangle(userOptions.width/2, -wallThickness/2, userOptions.width, wallThickness, { isStatic: true }), //top
		Bodies.rectangle(userOptions.width/2,userOptions.height/2,userOptions.width,userOptions.height, {isStatic: true, collisionFilter: 0, render: { fillStyle: userOptions.background, strokeStyle: userOptions.background, lineWidth: 1}}),

		Bodies.rectangle(userOptions.width/2, userOptions.height + wallThickness/2, userOptions.width, wallThickness, { isStatic: true }),//bottom
		Bodies.rectangle(userOptions.width + wallThickness/2, userOptions.height/2, wallThickness, userOptions.height, { isStatic: true }),//right
		Bodies.rectangle(-wallThickness/2, userOptions.height/2, wallThickness, userOptions.height, { isStatic: true }) //left
	]);

	Bodies.rectangle(-wallThickness/2, userOptions.height/2, wallThickness, userOptions.height)


	//// FORME ////
	function svgBodies(url,scale,pointdraw,color){

		opt_loc = {render: { fillStyle: color, strokeStyle: color, lineWidth: 1}, friction: 0}
    	opt = extend(opt_def, opt_loc);


		var select = function(root, selector) {
	 		return Array.prototype.slice.call(root.querySelectorAll(selector));
	 	};

		var loadSvg = function(url) {
			return fetch(url)
				.then(function(response) { return response.text(); })
				.then(function(raw) { return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'); });
		};

		([url]).forEach(function(filePath, i) { 
			loadSvg(filePath).then(function(svgContent) {
				var vertexSets = select(svgContent, 'path')
					.map(function(svgPath) {
						return Vertices.scale(Svg.pathToVertices(svgPath, pointdraw), scale, scale); });
				if(typeof x === 'undefined') x = 100 + i * 150;
				if(typeof y === 'undefined') y = 200 + i * 50;

				Composite.add(world, Bodies.fromVertices(x, y, vertexSets, opt, true));
			});
		});
    	return url;
	};

	function imgBodies(x,y,sizew,sizeh,url){
    	opt_loc = {render:{sprite: {texture: url}}};
    	opt = extend(opt_def, opt_loc);
    	imgBodie = Bodies.rectangle(x, y, sizew, sizeh, opt)
		return imgBodie;
    }

    function asterisk(x,y,size,weight,nline,color){
    	opt_loc = {render: { fillStyle: color, strokeStyle: color, lineWidth: 1}}
    	opt = extend(opt_def, opt_loc);

    	var partList = []

    	for (var i = 0; i < nline; i++) {
    		part = Bodies.rectangle(x, y, size, size / weight, opt)
    		Body.rotate(part, Math.PI/(1/(i+1)*nline));
    		partList.push(part)
    	}
		var finalOptions = extend(opt, {parts: partList} )
		var compoundBodyA = Body.create(finalOptions);

        return compoundBodyA;
    }

    function semicircle(x,y,size,color){
    	opt_loc = {chamfer: { quality: 14, radius: [0, size, size, 0] }, render: { fillStyle: color, strokeStyle: color, lineWidth: 1}}
    	opt = extend(opt_def, opt_loc);
    	semic = Bodies.rectangle(x, y, size, size*2, opt);
		return semic;

    }

    function rect(x,y,sizew,sizeh,color){
    	opt_loc = {render: { fillStyle: color, strokeStyle: color, lineWidth: 1}};
    	opt = extend(opt_def, opt_loc);
    	rec = Bodies.rectangle(x, y, sizew, sizeh, opt);
		return rec;
    }

    function oval(x,y,size,color){
    	opt_loc = {render: { fillStyle: color, strokeStyle: color, lineWidth: 1}}
    	opt = extend(opt_def, opt_loc);
    	ovl = Bodies.circle(x, y, size, opt);
		return ovl;
    }

	function generateShapes(colors = '#000000') {
		var shapes = [];
		
		if(userOptions.logo) {
			shapes.push(
				generateShape('lucca',colors),
				generateShape('creative',colors),
				generateShape('hub',colors),
			);
		}
		
		if(typeof colors === 'object' && colors.length === 5) {
			shapes.push(
				generateShape('semicircle',colors[0]),
				generateShape('rect',colors[1]),
				generateShape('oval',colors[2]),
				generateShape('asterisk',colors[3]),
				generateShape('svgBodies',colors[4]),
			);
		}
		else {
			shapes.push(
				generateShape('semicircle',colors),
				generateShape('rect',colors),
				generateShape('oval',colors),
				generateShape('asterisk',colors),
				generateShape('svgBodies',colors),
			);
		}

		return shapes;
	}

	function random(min, max) {
		return min + Math.random() * (max - min);
	  }

	function generateShape(id, color, x = userOptions.width / 2, y = 0,size = userOptions.size_shape) {
		
		var result;
		var maxWidth = 250;
		var minWidth = 60;
		var offset = 150;
		var offsetX = userOptions.offsetX? (150 + userOptions.offsetX) : 150;
		var leftOffset = userOptions.offsetX? 0 : -offsetX;
		x = x === userOptions.width / 2? random(leftOffset, offsetX) +userOptions.width / 2 : x;		
		var multiplerWidth = random(0.45, 1)*size; 

		switch(id) {
			case 0:
			case 'semicircle':
				width = userOptions.width/10 > maxWidth/2? maxWidth/2 : (userOptions.width/10);
				width = width*multiplerWidth;
				width = width < minWidth? minWidth : width;
				y = y === 0? y - offset : y;
				result = semicircle(x,y,width,color);
			break;

			case 'lucca':
			case 1:
				y = y === 0? y - offset*2 : y;
				result = imgBodies(x,y,150,52,'sprites/Lucca.jpg');
			break;

			case 'rect':
			case 2:
				y = y === 0? y - offset*3 : y;
				width = userOptions.width/10 > maxWidth? maxWidth : userOptions.width/10;
				width = width*multiplerWidth;
				width = width < minWidth? minWidth : width;
				result = rect(x,y,width,width/1.5,color);
			break;

			case 'creative':
			case 3:
				y = y === 0? y - offset*4 : y;
				result = imgBodies(x,y,206,52,'sprites/Creative.jpg');
			break;

			case 'oval':
			case 4:
				y = y === 0? y - offset*5 : y;
				width = userOptions.width/10 > maxWidth/2? maxWidth/2 : userOptions.width/10;
				width = width*multiplerWidth;
				width = width < minWidth? minWidth : width;
				result= oval(x,y,width,color);
			break;

			case 'hub':
			case 5:
				y = y === 0? y - offset*6 : y;
				result = imgBodies(x,y,100,52,'sprites/Hub.jpg');
			break;

			case 'asterisk':
			case 6:
				y = y === 0? y - offset*7 : y;
				width = userOptions.width/5 > maxWidth? maxWidth : userOptions.width/5;
				width = width*multiplerWidth;
				width = width < minWidth? minWidth : width;
				result = asterisk(x,y,width,12,8,color);
			break;

			case 'svgBodies':
			case 7:
				if(!userOptions.bypass) {
					y = y === 0? y - offset*8 : y;
					width = (userOptions.width/900) > 1? 1 : userOptions.width/900;
					width = width*multiplerWidth;
					width = width < minWidth/120? minWidth/120: width;
					result = svgBodies('svg/Risorsa_01.svg',width,15,color,x, y);
				}
				else {
					result = {};
				}
			break;
		}				

		return result;
	}


	/* Attributi per le forme */
	
    opt_def = {
		render: { 
			fillStyle: "#000000", 
			strokeStyle: "#000000", 
			lineWidth: 1
		},
		friction: 1,
		frictionStatic: 100,
		restitution: 0.1,
		density: 0.1,
		slop: 0,
	};

	var shapes = generateShapes(userOptions.colors);
	Composite.add(world, shapes);

	var shapeGeneratedId = 0;

	/* Add Element on Click*/

	var startedOffsetX;
	var startedOffsetY;

	function onPress(e) {
		if(e.changedTouches) {
			startedOffsetX = e.changedTouches[0].clientX ;
			startedOffsetY = e.changedTouches[0].clientY;
		}
		else {
			startedOffsetX = e.offsetX;
			startedOffsetY = e.offsetY;
		}
	}

	function onRelease(e) {
		console.log(world.bodies)
		var offsetX;
		var offsetY;
		if(e.changedTouches) {
			offsetX = e.changedTouches[0].clientX;
			offsetY = e.changedTouches[0].clientY;
		}
		else {
			offsetX = e.offsetX;
			offsetY = e.offsetY;
		}
	
		if( (offsetX- startedOffsetX < offset && offsetX - startedOffsetX > -offset) && 
			(offsetY - startedOffsetY < offset && offsetY - startedOffsetY > -offset)
		) {	
			var randomColorId = Math.floor(Math.random() * userOptions.colors.length);
			Composite.add(world, [generateShape(shapeGeneratedId, userOptions.colors[randomColorId], offsetX, offsetY,userOptions.size)]);
			
			if(shapeGeneratedId < 7) {
				if(userOptions.logo){
					shapeGeneratedId++;
				}else{
					shapeGeneratedId = shapeGeneratedId + 2
					
					if (shapeGeneratedId == 8){
						shapeGeneratedId = 0
					}
				}
			}
			else {
				shapeGeneratedId = 0;
			}
		}
	}


	if(userOptions.canAdd) {
		var offset = 20;

		userOptions.target.addEventListener('touchstart', function(e) {
			onPress(e);
		  }, false);
		userOptions.target.addEventListener('touchend', function(e) {
			onRelease(e);
		  }, false);

		jQuery(userOptions.target).on('mousedown', onPress);
		jQuery(userOptions.target).on("mouseup", onRelease);
	}

	if(userOptions.interval) {
		var maxItemsToSpawn = userOptions.items;
		var counterItems = 0;
		var ghost;

		if(userOptions.ghost) {

			ghost = Bodies.rectangle(
				userOptions.ghost.x+(userOptions.ghost.width/2), 
				userOptions.height-userOptions.ghost.height/2, userOptions.ghost.width, 
				userOptions.ghost.height, 
				{ isStatic: true }
			)

			Composite.add(world, ghost, null, { isStatic: true });
		}


		setInterval(() => {
			
			if(counterItems < maxItemsToSpawn) {
				var randomColorId = Math.floor(Math.random() * userOptions.colors.length);
				var shapeColor = typeof userOptions.colors === 'object'? userOptions.colors[randomColorId] : userOptions.colors;
				Composite.add(world, [generateShape(shapeGeneratedId, shapeColor, userOptions.width/2, -100,userOptions.size)]);

				if(shapeGeneratedId < 6) {
					shapeGeneratedId = shapeGeneratedId +2;
				}
				else {
					shapeGeneratedId = 0;
				}
				counterItems++;
			}

		},userOptions.interval);
	}

	/* Mouse Event */
	var mouse = Mouse.create(render.canvas),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.2,
			render: {
				visible: false
			}
		}
	});
	// Prevent unscrolling from Render
	mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
	mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
	
	Composite.add(world, mouseConstraint);
	render.mouse = mouse;
	
	// fit the render viewport to the scene
	Render.lookAt(render, {
		min: { x: 0, y: 0 },
		max: { x: userOptions.width, y: userOptions.height }
	});

	// context for MatterTools.Demo
	return {
		engine: engine,
		runner: runner,
		render: render,
		canvas: render.canvas,
		stop: function() {
			Matter.Render.stop(render);
			Matter.Runner.stop(runner);
		}
	};

};




function CreateBox(){

	
	lchEngine({
		target: document.getElementById('world-1'),
		width: width_canvas,
		height: heigth_canvas,
		logo: logo_value,
		colors: color_value,
		canAdd: true,
		size_shape: inc_size_shape,
		background: background_value
	});
}
