"use strict";function _typeof22(t){return(_typeof22="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof21(t){return(_typeof21="function"==typeof Symbol&&"symbol"==_typeof22(Symbol.iterator)?function(t){return _typeof22(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof22(t)})(t)}function _typeof20(t){return(_typeof20="function"==typeof Symbol&&"symbol"==_typeof21(Symbol.iterator)?function(t){return _typeof21(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof21(t)})(t)}function _typeof19(t){return(_typeof19="function"==typeof Symbol&&"symbol"==_typeof20(Symbol.iterator)?function(t){return _typeof20(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof20(t)})(t)}function _typeof18(t){return(_typeof18="function"==typeof Symbol&&"symbol"==_typeof19(Symbol.iterator)?function(t){return _typeof19(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof19(t)})(t)}function _typeof17(t){return(_typeof17="function"==typeof Symbol&&"symbol"==_typeof18(Symbol.iterator)?function(t){return _typeof18(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof18(t)})(t)}function _typeof16(t){return(_typeof16="function"==typeof Symbol&&"symbol"==_typeof17(Symbol.iterator)?function(t){return _typeof17(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof17(t)})(t)}function _typeof15(t){return(_typeof15="function"==typeof Symbol&&"symbol"==_typeof16(Symbol.iterator)?function(t){return _typeof16(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof16(t)})(t)}function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==_typeof15(Symbol.iterator)?function(t){return _typeof15(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof15(t)})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}!function(){var f,l,i,y,e={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},b=e,u=!1,c=!1,n={x:0,y:0},p=!1,a=document.documentElement,m=[],s=/^Mac/.test(navigator.platform),d={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},S={37:1,38:1,39:1,40:1};function _(){var t,o,e,n,r,y;!p&&document.body&&(p=!0,t=document.body,o=document.documentElement,y=window.innerHeight,e=t.scrollHeight,a=0<=document.compatMode.indexOf("CSS")?o:t,f=t,b.keyboardSupport&&X("keydown",g),top!=self?c=!0:G&&y<e&&(t.offsetHeight<=y||o.offsetHeight<=y)&&((n=document.createElement("div")).style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+a.scrollHeight+"px",document.body.appendChild(n),i=function(){r=r||setTimeout(function(){u||(n.style.height="0",n.style.height=a.scrollHeight+"px",r=null)},500)},setTimeout(i,10),X("resize",i),(l=new j(i)).observe(t,{attributes:!0,childList:!0,characterData:!1}),a.offsetHeight<=y&&((y=document.createElement("div")).style.clear="both",t.appendChild(y))),b.fixedBackground||u||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll"))}var h=[],w=!1,r=Date.now();function v(p,a,m){var s,t,o=0<a?1:-1,e=0<m?1:-1;n.x===o&&n.y===e||(n.x=o,n.y=e,h=[],r=0),1!=b.accelerationMax&&((e=Date.now()-r)<b.accelerationDelta&&1<(t=(1+50/e)/2)&&(t=Math.min(t,b.accelerationMax),a*=t,m*=t),r=Date.now()),h.push({x:a,y:m,lastX:a<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),w||(t=R(),s=p===t||p===document.body,null==p.$scrollBehavior&&(e=D(o=p),null==T[e]&&(o=getComputedStyle(o,"")["scroll-behavior"],T[e]="smooth"==o),T[e])&&(p.$scrollBehavior=p.style.scrollBehavior,p.style.scrollBehavior="auto"),t=function t(o){for(var e,n=Date.now(),r=0,y=0,l=0;l<h.length;l++){var i=h[l],u=n-i.start,f=u>=b.animationTime,c=f?1:u/b.animationTime;b.pulseAlgorithm&&(c=1<=(e=c)?1:e<=0?0:(1==b.pulseNormalize&&(b.pulseNormalize/=q(1)),q(e))),r+=u=i.x*c-i.lastX>>0,y+=c=i.y*c-i.lastY>>0,i.lastX+=u,i.lastY+=c,f&&(h.splice(l,1),l--)}s?window.scrollBy(r,y):(r&&(p.scrollLeft+=r),y&&(p.scrollTop+=y)),(h=a||m?h:[]).length?$(t,p,1e3/b.frameRate+1):(w=!1,null!=p.$scrollBehavior&&(p.style.scrollBehavior=p.$scrollBehavior,p.$scrollBehavior=null))},$(t,p,0),w=!0)}function t(t){p||_();var o=t.target;if(t.defaultPrevented||t.ctrlKey)return!0;if(A(f,"embed")||A(o,"embed")&&/\.pdf/i.test(o.src)||A(f,"object")||o.shadowRoot)return!0;var e,n=-t.wheelDeltaX||t.deltaX||0,r=-t.wheelDeltaY||t.deltaY||0;return s&&(t.wheelDeltaX&&N(t.wheelDeltaX,120)&&(n=t.wheelDeltaX/Math.abs(t.wheelDeltaX)*-120),t.wheelDeltaY&&N(t.wheelDeltaY,120)&&(r=t.wheelDeltaY/Math.abs(t.wheelDeltaY)*-120)),n||r||(r=-t.wheelDelta||0),1===t.deltaMode&&(n*=40,r*=40),(o=H(o))?!(!(e=r)||(m.length||(m=[e,e,e]),e=Math.abs(e),m.push(e),m.shift(),clearTimeout(y),y=setTimeout(function(){try{localStorage.SS_deltaBuffer=m.join(",")}catch(t){}},1e3),e=120<e&&K(e),K(120)||K(100)||e))||(1.2<Math.abs(n)&&(n*=b.stepSize/120),1.2<Math.abs(r)&&(r*=b.stepSize/120),v(o,n,r),t.preventDefault(),void B()):!c||!I||(Object.defineProperty(t,"target",{value:window.frameElement}),parent.wheel(t))}function g(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==d.spacebar;document.body.contains(f)||(f=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||A(t,"input")&&!n.test(t.type)||A(f,"video")||function(){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}()||t.isContentEditable||o)return!0;if((A(t,"button")||A(t,"input")&&n.test(t.type))&&e.keyCode===d.spacebar)return!0;if(A(t,"input")&&"radio"==t.type&&S[e.keyCode])return!0;var r=0,y=0,l=H(f);if(!l)return!c||!I||parent.keydown(e);var i=l.clientHeight;switch(l==document.body&&(i=window.innerHeight),e.keyCode){case d.up:y=-b.arrowScroll;break;case d.down:y=b.arrowScroll;break;case d.spacebar:y=-(e.shiftKey?1:-1)*i*.9;break;case d.pageup:y=.9*-i;break;case d.pagedown:y=.9*i;break;case d.home:y=-(l=l==document.body&&document.scrollingElement?document.scrollingElement:l).scrollTop;break;case d.end:var u=l.scrollHeight-l.scrollTop-i,y=0<u?10+u:0;break;case d.left:r=-b.arrowScroll;break;case d.right:r=b.arrowScroll;break;default:return!0}v(l,r,y),e.preventDefault(),B()}function o(t){f=t.target}var x,k,D=(x=0,function(t){return t.uniqueID||(t.uniqueID=x++)}),M={},E={},T={};function B(){clearTimeout(k),k=setInterval(function(){M=E=T={}},1e3)}function C(t,o,e){for(var n=e?M:E,r=t.length;r--;)n[D(t[r])]=o;return o}function H(t){var o=[],e=document.body,n=a.scrollHeight;do{var r=E[D(t)];if(r)return C(o,r);if(o.push(t),n===t.scrollHeight){if(r=L(a)&&L(e)||O(a),c&&z(a)||!c&&r)return C(o,R())}else if(z(t)&&O(t))return C(o,t)}while(t=t.parentElement)}function z(t){return t.clientHeight+10<t.scrollHeight}function L(t){return"hidden"!==getComputedStyle(t,"").getPropertyValue("overflow-y")}function O(t){return"scroll"===(t=getComputedStyle(t,"").getPropertyValue("overflow-y"))||"auto"===t}function X(t,o,e){window.addEventListener(t,o,e||!1)}function Y(t,o,e){window.removeEventListener(t,o,e||!1)}function A(t,o){return t&&(t.nodeName||"").toLowerCase()===o.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{m=localStorage.SS_deltaBuffer.split(",")}catch(t){}function N(t,o){return Math.floor(t/o)==t/o}function K(t){return N(m[0],t)&&N(m[1],t)&&N(m[2],t)}var P,$=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t,o,e){window.setTimeout(t,e||1e3/60)},j=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,R=(P=document.scrollingElement,function(){var t,o;return P||((t=document.createElement("div")).style.cssText="height:10000px;width:1px;",document.body.appendChild(t),o=document.body.scrollTop,document.documentElement.scrollTop,window.scrollBy(0,3),P=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)),P});function q(t){var o;return((t*=b.pulseScale)<1?t-(1-Math.exp(-t)):(--t,(o=Math.exp(-1))+(1-Math.exp(-t))*(1-o)))*b.pulseNormalize}var V=window.navigator.userAgent,F=/Edge/.test(V),I=/chrome/i.test(V)&&!F,W=/safari/i.test(V)&&!F,U=/mobile/i.test(V),F=/Windows NT 6.1/i.test(V)&&/rv:11/i.test(V),G=W&&(/Version\/8/i.test(V)||/Version\/9/i.test(V)),F=(I||W||F)&&!U,J=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){J=!0}}))}catch(t){}var U=!!J&&{passive:!1},Q="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Z(t){for(var o in t)e.hasOwnProperty(o)&&(b[o]=t[o])}Q&&F&&(X(Q,t,U),X("mousedown",o),X("load",_)),Z.destroy=function(){l&&l.disconnect(),Y(Q,t),Y("mousedown",o),Y("keydown",g),Y("resize",i),Y("load",_)},window.SmoothScrollOptions&&Z(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return Z}):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=Z:window.SmoothScroll=Z}();