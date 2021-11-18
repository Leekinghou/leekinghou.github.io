"use strict";function asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function o(e){asyncGeneratorStep(r,t,n,o,a,"next",e)}function a(e){asyncGeneratorStep(r,t,n,o,a,"throw",e)}o(void 0)})}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var n,e,r,t,l=window.crypto||window.msCrypto,p=window.localStorage,f="hexo-blog-encrypt:#"+window.location.pathname,y=h("hexo-blog-encrypt的作者们都是大帅比!"),m=h("hexo-blog-encrypt是地表最强Hexo加密插件!"),o=document.getElementById("hexo-blog-encrypt"),a=o.dataset.wpm,c=o.dataset.whm,i=o.getElementsByTagName("script").hbeData,u=i.innerText,s=i.dataset.hmacdigest;function d(e){return new Uint8Array(e.match(/[\da-f]{2}/gi).map(function(e){return parseInt(e,16)}))}function h(e){for(var t=e.length,n=0,r=new Array,o=0;o<t;){var a=e.codePointAt(o);a<128?(r[n++]=a,o++):127<a&&a<2048?(r[n++]=a>>6|192,r[n++]=63&a|128,o++):2047<a&&a<65536?(r[n++]=a>>12|224,r[n++]=a>>6&63|128,r[n++]=63&a|128,o++):(r[n++]=a>>18|240,r[n++]=a>>12&63|128,r[n++]=a>>6&63|128,r[n++]=63&a|128,o+=2)}return new Uint8Array(r)}function g(){return(g=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.createElement("script"),["type","text","src","crossorigin","defer","referrerpolicy"].forEach(function(e){t[e]&&(n[e]=t[e])}),e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(){return(b=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.createElement("div")).innerHTML=t,n.querySelectorAll("script").forEach(function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,function(){return g.apply(this,arguments)}(t);case 3:e.t1=e.sent,e.t0.replaceWith.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()),e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(){return(w=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new TextEncoder,o=r.encode(n),r=d(s),e.next=5,l.subtle.verify({name:"HMAC",hash:"SHA-256"},t,r,o);case 5:return o=e.sent,console.log("Verification result: ".concat(o)),o||(alert(c),console.log("".concat(c,", got "),r," but proved wrong.")),e.abrupt("return",o);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(){return x.apply(this,arguments)}function x(){return(x=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n,i){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=d(u),e.next=3,l.subtle.decrypt({name:"AES-CBC",iv:n},t,r.buffer).then(function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=new TextDecoder,(n=o.decode(t)).startsWith("<hbe-prefix></hbe-prefix>")){e.next=4;break}throw"Decode successfully but not start with KnownPrefix.";case 4:return(r=document.createElement("button")).textContent="Encrypt again",r.type="button",r.classList.add("hbe-button"),r.addEventListener("click",function(){window.localStorage.removeItem(f),window.location.reload()}),document.getElementById("hexo-blog-encrypt").style.display="inline",document.getElementById("hexo-blog-encrypt").innerHTML="",e.t0=document.getElementById("hexo-blog-encrypt"),e.next=14,function(){return b.apply(this,arguments)}(n);case 14:if(e.t1=e.sent,e.t0.appendChild.call(e.t0,e.t1),document.getElementById("hexo-blog-encrypt").appendChild(r),document.querySelectorAll("img").forEach(function(e){e.getAttribute("data-src")&&!e.src&&(e.src=e.getAttribute("data-src"))}),window.NexT&&NexT.boot&&"function"==typeof NexT.boot.refresh&&NexT.boot.refresh(),(o=document.getElementById("toc-div"))&&(o.style.display="inline"),(a=document.getElementsByClassName("toc-div-class"))&&0<a.length)for(c=0;c<a.length;c++)a[c].style.display="inline";return e.next=25,function(){return w.apply(this,arguments)}(i,n);case 25:return e.abrupt("return",e.sent);case 26:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return alert(a),console.log(e),!1});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}(t=JSON.parse(p.getItem(f)))&&(console.log("Password got from localStorage(".concat(f,"): "),t),n=d(t.iv).buffer,e=t.dk,r=t.hmk,l.subtle.importKey("jwk",e,{name:"AES-CBC",length:256},!0,["decrypt"]).then(function(t){l.subtle.importKey("jwk",r,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"]).then(function(e){v(t,n,e).then(function(e){e||p.removeItem(f)})})})),o.addEventListener("keydown",function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(o){var a,c,i,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.isComposing||13===o.keyCode)return a=document.getElementById("hbePass").value,e.next=4,n=a,r=void 0,r=new TextEncoder,l.subtle.importKey("raw",r.encode(n),{name:"PBKDF2"},!1,["deriveKey","deriveBits"]);e.next=15;break;case 4:return c=e.sent,e.next=7,n=c,l.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:y.buffer,iterations:1024},n,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"]);case 7:return i=e.sent,e.next=10,t=c,l.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:y.buffer,iterations:1024},t,{name:"AES-CBC",length:256},!0,["decrypt"]);case 10:return u=e.sent,e.next=13,t=c,l.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:m.buffer,iterations:512},t,128);case 13:s=e.sent,v(u,s,i).then(function(e){console.log("Decrypt result: ".concat(e)),e&&l.subtle.exportKey("jwk",u).then(function(t){l.subtle.exportKey("jwk",i).then(function(e){e={dk:t,iv:function(e){if("object"!==_typeof(e)||null===e||"number"!=typeof e.byteLength)throw new TypeError("Expected input to be an ArrayBuffer");for(var t,n=new Uint8Array(e),r="",o=0;o<n.length;o++)r+=1===(t=n[o].toString(16)).length?"0"+t:t;return r}(s),hmk:e};p.setItem(f,JSON.stringify(e))})})});case 15:case"end":return e.stop()}var t,n,r},e)}));return function(e){return t.apply(this,arguments)}}())}();