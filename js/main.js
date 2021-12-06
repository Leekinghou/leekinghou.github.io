"use strict";function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function F(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(n=e&&e.offsetWidth,i=o&&o.offsetWidth,c=a&&a.offsetWidth);var t=document.getElementById("nav");window.innerWidth<768||n+i+c>t.offsetWidth-120?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}var e=document.getElementById("site-name"),n=e&&e.offsetWidth,o=document.querySelector("#menus .menus_items"),i=o&&o.offsetWidth,a=document.querySelector("#search-button"),c=a&&a.offsetWidth;function r(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(t){if(20<=e)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||F(!0)}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&F(!0)}saveToLocal.set("global-font-size",n,2)}var l,q=!1;function D(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":document.getElementById("rightside-config-hide").classList.toggle("show");break;case"readmode":!function(){var e;(e=document.body).classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)})}();break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200);break;case"hide-aside-btn":(e=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside");break;case"font-plus":r(!0);break;case"font-minus":r()}var e}),window.refreshFn=function(){var e,n,t,o,i,a,c,r,l,s,d,u,f,m,y,p,h,g,b,L,v,S,E,_,A,w,O,I,G,B,C,T,k;function N(){o.style.overflow="",o.style.paddingRight="",btf.fadeOut(t,.5),n.classList.remove("open")}function x(t,e,n){var o,i=document.createDocumentFragment();b&&((o=document.createElement("div")).className="highlight-tools ".concat(_),o.innerHTML=S+t+E,o.addEventListener("click",O),i.appendChild(o)),g&&e.offsetHeight>g+30&&((o=document.createElement("div")).className="code-expand-btn",o.innerHTML='<i class="fas fa-angle-double-down"></i>',o.addEventListener("click",I),i.appendChild(o)),"hl"===n?e.insertBefore(i,e.firstChild):e.parentNode.insertBefore(i,e)}F(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&function(){var t=document.getElementById("card-toc"),r=t.getElementsByClassName("toc-content")[0],l=r.querySelectorAll(".toc-link"),i=document.getElementById("article-container");window.tocScrollFn=function(){return btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop;e(t),o(t)},100)()},window.addEventListener("scroll",tocScrollFn);var e=function(t){var e=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,n=n<e?e-n:document.documentElement.scrollHeight-n,n=Math.round((t-o)/n*100);r.setAttribute("progress-percentage",100<n?100:n<=0?0:n)},s=GLOBAL_CONFIG.isanchor,n=function(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)};document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"}:n)()}),r.addEventListener("click",function(t){t.preventDefault(),t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&n()});var d=i.querySelectorAll("h1,h2,h3,h4,h5,h6"),u="",o=function(n){if(0===l.length||0===n)return!1;var t,e,o,i="",a="";if(d.forEach(function(t,e){n>btf.getEleTop(t)-80&&(i="#"+encodeURI(t.getAttribute("id")),a=e)}),u!==a){if(s&&(t=i,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,e=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:e},e,t))),""===i)return r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(u=a);u=a,r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),(o=l[a]).classList.add("active"),setTimeout(function(){var t=(e=o).getBoundingClientRect().top,e=r.scrollTop;t>document.documentElement.clientHeight-100&&(r.scrollTop=e+150),t<100&&(r.scrollTop=e-150)},0);for(var c=o.parentNode;!c.matches(".toc");c=c.parentNode)c.matches("li")&&c.classList.add("active")}}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(G=GLOBAL_CONFIG.noticeOutdate,(y=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=G.limitDay&&((p=document.createElement("div")).className="post-outdate-notice",p.textContent=G.messagePrev+" "+y+" "+G.messageNext,y=document.getElementById("article-container"),"top"===G.position?y.insertBefore(p,y.firstChild):y.appendChild(p))),GLOBAL_CONFIG.relativeDate.post&&D(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&D(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(p=document.getElementById("runtimeshow"))&&(h=p.getAttribute("data-publishDate"),p.innerText=btf.diffDate(h)+" "+GLOBAL_CONFIG.runtime),(h=document.getElementById("last-push-date"))&&(L=h.getAttribute("data-lastPushDate"),h.innerText=btf.diffDate(L,!0)),(L=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&L.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),e=document.getElementById("toggle-menu"),n=document.getElementById("sidebar-menus"),t=document.getElementById("menu-mask"),o=document.body,e.addEventListener("click",function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(t,.5),n.classList.add("open")}),t.addEventListener("click",function(t){n.classList.contains("open")&&N()}),window.addEventListener("resize",function(t){btf.isHidden(e)&&n.classList.contains("open")&&N()}),!GLOBAL_CONFIG_SITE.isHome||(c=document.getElementById("scroll-down"))&&c.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),(G=GLOBAL_CONFIG.highlight)&&(y=G.highlightCopy,p=G.highlightLang,h=GLOBAL_CONFIG_SITE.isHighlightShrink,g=G.highlightHeightLimit,b=y||p||void 0!==h,L="highlighjs"===G.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(b||g)&&L.length&&(v="prismjs"===G.plugin,_=!(E=S="")===h?"closed":"",void 0!==h&&(S='<i class="fas fa-angle-down expand '.concat(_,'"></i>')),y&&(E='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),A=function(t){var e=t.parentNode;e.classList.add("copy-true");var n,o=window.getSelection(),i=document.createRange();v?i.selectNodeContents(e.querySelectorAll("pre code")[0]):i.selectNodeContents(e.querySelectorAll("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((n=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,o.removeAllRanges(),e.classList.remove("copy-true")},w=function(t){var e=_toConsumableArray(t.parentNode.children).slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach(function(t){t.style.display="block"}):e.forEach(function(t){t.style.display="none"})},O=function(t){(t=t.target.classList).contains("expand")?w(this):t.contains("copy-button")&&A(this)},I=function(){this.classList.toggle("expand-done")},p?v?L.forEach(function(t){var e=t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure",{class:"highlight"}),x(e,t)}):L.forEach(function(t){var e=t.getAttribute("class").split(" ")[1];x('<div class="code-lang">'.concat(e="plain"===e||void 0===e?"Code":e,"</div>"),t,"hl")}):v?L.forEach(function(t){btf.wrap(t,"figure",{class:"highlight"}),x("",t)}):L.forEach(function(t){x("",t,"hl")}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode,o=t.alt;o&&!n.parentNode.classList.contains("justified-gallery")&&((e=document.createElement("div")).className="img-alt is-center",e.textContent=o,n.insertBefore(e,t.nextSibling))}),B="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group):not(.flink-item-icon) > img, #article-container > img"):[],C=0<B.length,T=document.querySelectorAll("#article-container .justified-gallery"),((k=0<T.length)||C)&&btf.isJqueryLoad(function(){var t,e,n;function o(t){t.each(function(t,e){var n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),e=n.attr("alt")||"";n.wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(e,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}k&&(t=T,(t=(e=$(t)).find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),q?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),q=!0)),C&&(n=B,void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){o($(n))})):o($(n)))}),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(i=mediumZoom(document.querySelectorAll("#article-container :not(a):not(.flink-item-icon) > img"))).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";i.update({background:e})}),f=document.getElementById("rightside"),m=window.innerHeight+56,document.body.scrollHeight<=m?f.style.cssText="opacity: 1; transform: translateX(-38px)":(l=!(r=0),s=document.getElementById("page-header"),d="function"==typeof chatBtnHide,u="function"==typeof chatBtnShow,window.scrollCollect=function(){return btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,n=r<e;56<(r=e)?(n?(s.classList.contains("nav-visible")&&s.classList.remove("nav-visible"),u&&!0===l&&(chatBtnHide(),l=!1)):(s.classList.contains("nav-visible")||s.classList.add("nav-visible"),d&&!1===l&&(chatBtnShow(),l=!0)),s.classList.add("nav-fixed"),"0"===window.getComputedStyle(f).getPropertyValue("opacity")&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===e&&s.classList.remove("nav-fixed","nav-visible"),f.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=m&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")},200)()},window.addEventListener("scroll",scrollCollect)),(c=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&c.forEach(function(t){btf.wrap(t,"div",{class:"table-wrap"})}),(c=document.querySelectorAll("#article-container .hide-button")).length&&c.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),a=!1,(c=document.querySelector("#comment-switch > .switch-btn"))&&c.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),a||"function"!=typeof loadOtherComment||(a=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",F),window.addEventListener("orientationchange",function(){setTimeout(F(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(l=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>l.limitCount?e+"\n\n\n"+l.languages.author+"\n"+l.languages.link+window.location.href+"\n"+l.languages.source+"\n"+l.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});