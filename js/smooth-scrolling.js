"use strict";function _typeof11(e){return(_typeof11="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof10(e){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(e){return _typeof11(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof11(e)})(e)}function _typeof9(e){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(e){return _typeof10(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof10(e)})(e)}function _typeof8(e){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(e){return _typeof9(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof9(e)})(e)}function _typeof7(e){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(e){return _typeof8(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof8(e)})(e)}function _typeof6(e){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(e){return _typeof7(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof7(e)})(e)}function _typeof5(e){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(e){return _typeof6(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof6(e)})(e)}function _typeof4(e){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(e){return _typeof5(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof5(e)})(e)}function _typeof3(e){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(e){return _typeof4(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof4(e)})(e)}function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return _typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof3(e)})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}!function(){var a,i,c,l,o={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},d=o,u=!1,y=!1,n={x:0,y:0},f=!1,s=document.documentElement,p=[],m=/^Mac/.test(navigator.platform),b={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},h={37:1,38:1,39:1,40:1};function w(){var e,t,o,n,r,l;!f&&document.body&&(f=!0,e=document.body,t=document.documentElement,l=window.innerHeight,o=e.scrollHeight,s=0<=document.compatMode.indexOf("CSS")?t:e,a=e,d.keyboardSupport&&X("keydown",_),top!=self?y=!0:G&&l<o&&(e.offsetHeight<=l||t.offsetHeight<=l)&&((n=document.createElement("div")).style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+s.scrollHeight+"px",document.body.appendChild(n),c=function(){r=r||setTimeout(function(){u||(n.style.height="0",n.style.height=s.scrollHeight+"px",r=null)},500)},setTimeout(c,10),X("resize",c),(i=new j(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),s.offsetHeight<=l&&((l=document.createElement("div")).style.clear="both",e.appendChild(l))),d.fixedBackground||u||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll"))}var S=[],v=!1,r=Date.now();function g(f,s,p){var m,e,t=0<s?1:-1,o=0<p?1:-1;n.x===t&&n.y===o||(n.x=t,n.y=o,S=[],r=0),1!=d.accelerationMax&&((o=Date.now()-r)<d.accelerationDelta&&1<(e=(1+50/o)/2)&&(e=Math.min(e,d.accelerationMax),s*=e,p*=e),r=Date.now()),S.push({x:s,y:p,lastX:s<0?.99:-.99,lastY:p<0?.99:-.99,start:Date.now()}),v||(e=R(),m=f===e||f===document.body,null==f.$scrollBehavior&&(o=D(t=f),null==T[o]&&(t=getComputedStyle(t,"")["scroll-behavior"],T[o]="smooth"==t),T[o])&&(f.$scrollBehavior=f.style.scrollBehavior,f.style.scrollBehavior="auto"),e=function e(t){for(var o,n=Date.now(),r=0,l=0,i=0;i<S.length;i++){var c=S[i],u=n-c.start,a=u>=d.animationTime,y=a?1:u/d.animationTime;d.pulseAlgorithm&&(y=1<=(o=y)?1:o<=0?0:(1==d.pulseNormalize&&(d.pulseNormalize/=q(1)),q(o))),r+=u=c.x*y-c.lastX>>0,l+=y=c.y*y-c.lastY>>0,c.lastX+=u,c.lastY+=y,a&&(S.splice(i,1),i--)}m?window.scrollBy(r,l):(r&&(f.scrollLeft+=r),l&&(f.scrollTop+=l)),(S=s||p?S:[]).length?$(e,f,1e3/d.frameRate+1):(v=!1,null!=f.$scrollBehavior&&(f.style.scrollBehavior=f.$scrollBehavior,f.$scrollBehavior=null))},$(e,f,0),v=!0)}function e(e){f||w();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(A(a,"embed")||A(t,"embed")&&/\.pdf/i.test(t.src)||A(a,"object")||t.shadowRoot)return!0;var o,n=-e.wheelDeltaX||e.deltaX||0,r=-e.wheelDeltaY||e.deltaY||0;return m&&(e.wheelDeltaX&&N(e.wheelDeltaX,120)&&(n=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&N(e.wheelDeltaY,120)&&(r=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),n||r||(r=-e.wheelDelta||0),1===e.deltaMode&&(n*=40,r*=40),(t=H(t))?!(!(o=r)||(p.length||(p=[o,o,o]),o=Math.abs(o),p.push(o),p.shift(),clearTimeout(l),l=setTimeout(function(){try{localStorage.SS_deltaBuffer=p.join(",")}catch(e){}},1e3),o=120<o&&K(o),K(120)||K(100)||o))||(1.2<Math.abs(n)&&(n*=d.stepSize/120),1.2<Math.abs(r)&&(r*=d.stepSize/120),g(t,n,r),e.preventDefault(),void B()):!y||!I||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function _(o){var e=o.target,t=o.ctrlKey||o.altKey||o.metaKey||o.shiftKey&&o.keyCode!==b.spacebar;document.body.contains(a)||(a=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(o.defaultPrevented||/^(textarea|select|embed|object)$/i.test(e.nodeName)||A(e,"input")&&!n.test(e.type)||A(a,"video")||function(){var e=o.target,t=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(t=e.classList&&e.classList.contains("html5-video-controls"))break}while(e=e.parentNode);return t}()||e.isContentEditable||t)return!0;if((A(e,"button")||A(e,"input")&&n.test(e.type))&&o.keyCode===b.spacebar)return!0;if(A(e,"input")&&"radio"==e.type&&h[o.keyCode])return!0;var r=0,l=0,i=H(a);if(!i)return!y||!I||parent.keydown(o);var c=i.clientHeight;switch(i==document.body&&(c=window.innerHeight),o.keyCode){case b.up:l=-d.arrowScroll;break;case b.down:l=d.arrowScroll;break;case b.spacebar:l=-(o.shiftKey?1:-1)*c*.9;break;case b.pageup:l=.9*-c;break;case b.pagedown:l=.9*c;break;case b.home:l=-(i=i==document.body&&document.scrollingElement?document.scrollingElement:i).scrollTop;break;case b.end:var u=i.scrollHeight-i.scrollTop-c,l=0<u?10+u:0;break;case b.left:r=-d.arrowScroll;break;case b.right:r=d.arrowScroll;break;default:return!0}g(i,r,l),o.preventDefault(),B()}function t(e){a=e.target}var x,k,D=(x=0,function(e){return e.uniqueID||(e.uniqueID=x++)}),M={},E={},T={};function B(){clearTimeout(k),k=setInterval(function(){M=E=T={}},1e3)}function C(e,t,o){for(var n=o?M:E,r=e.length;r--;)n[D(e[r])]=t;return t}function H(e){var t=[],o=document.body,n=s.scrollHeight;do{var r=E[D(e)];if(r)return C(t,r);if(t.push(e),n===e.scrollHeight){if(r=L(s)&&L(o)||O(s),y&&z(s)||!y&&r)return C(t,R())}else if(z(e)&&O(e))return C(t,e)}while(e=e.parentElement)}function z(e){return e.clientHeight+10<e.scrollHeight}function L(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function O(e){return"scroll"===(e=getComputedStyle(e,"").getPropertyValue("overflow-y"))||"auto"===e}function X(e,t,o){window.addEventListener(e,t,o||!1)}function Y(e,t,o){window.removeEventListener(e,t,o||!1)}function A(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{p=localStorage.SS_deltaBuffer.split(",")}catch(e){}function N(e,t){return Math.floor(e/t)==e/t}function K(e){return N(p[0],e)&&N(p[1],e)&&N(p[2],e)}var P,$=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},j=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,R=(P=document.scrollingElement,function(){var e,t;return P||((e=document.createElement("div")).style.cssText="height:10000px;width:1px;",document.body.appendChild(e),t=document.body.scrollTop,document.documentElement.scrollTop,window.scrollBy(0,3),P=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)),P});function q(e){var t;return((e*=d.pulseScale)<1?e-(1-Math.exp(-e)):(--e,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*d.pulseNormalize}var V=window.navigator.userAgent,F=/Edge/.test(V),I=/chrome/i.test(V)&&!F,W=/safari/i.test(V)&&!F,U=/mobile/i.test(V),F=/Windows NT 6.1/i.test(V)&&/rv:11/i.test(V),G=W&&(/Version\/8/i.test(V)||/Version\/9/i.test(V)),F=(I||W||F)&&!U,J=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){J=!0}}))}catch(e){}var U=!!J&&{passive:!1},Q="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Z(e){for(var t in e)o.hasOwnProperty(t)&&(d[t]=e[t])}Q&&F&&(X(Q,e,U),X("mousedown",t),X("load",w)),Z.destroy=function(){i&&i.disconnect(),Y(Q,e),Y("mousedown",t),Y("keydown",_),Y("resize",c),Y("load",w)},window.SmoothScrollOptions&&Z(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return Z}):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=Z:window.SmoothScroll=Z}();