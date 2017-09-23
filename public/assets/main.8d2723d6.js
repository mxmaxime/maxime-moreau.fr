!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/assets/",n(n.s=4)}([function(t,n){var e=Object.prototype.toString;t.exports=function(t){switch(e.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},function(t,n){function e(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=e},function(t,n,e){var r=e(20),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,n,e){var r=e(2),o=r.Symbol;t.exports=o},function(t,n,e){e(5),t.exports=e(6)},function(t,n){},function(t,n,e){"use strict";e(7),e(8),e(9),e(10),void 0===NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);var r=document.querySelector("#chart");r.querySelectorAll("[data-percentage]").forEach(function(t){var n=t.dataset.percentage/100*r.clientHeight;t.style.height=n+"px"});var o={threshold:[.5]},i=new IntersectionObserver(function(t){t.forEach(function(t){t.intersectionRatio>.5&&(t.target.classList.add("observable--visible"),i.unobserve(t.target),console.log("section visible"))})},o);document.querySelectorAll(".observe").forEach(function(t){return i.observe(t)})},function(t,n,e){"use strict";var r={threshold:[.9]},o=new IntersectionObserver(function(t){t.forEach(function(t){t.intersectionRatio>.9&&(t.target.classList.add("batons--visible"),o.unobserve(t.target),console.log("batons visible"))})},r),i=document.querySelector("#advantages-section");o.observe(i)},function(t,n,e){"use strict";document.querySelectorAll(".creation-box-wrapper").forEach(function(t){var n=Snap(t.querySelector("svg")),e=n.select("path"),r={from:e.attr("d"),to:t.getAttribute("data-path-hover")},o={speed:450,easing:mina.backout};t.addEventListener("mouseenter",function(){e.animate({path:r.to},o.speed,o.easing)}),t.addEventListener("mouseleave",function(){e.animate({path:r.from},o.speed,o.easing)})})},function(t,n,e){"use strict";var r=document.querySelector("#timeline"),o=r.querySelectorAll(".timeline-box"),i={threshold:[.7]},u=new IntersectionObserver(function(t){t.forEach(function(t){t.intersectionRatio>.7&&(t.target.classList.add("show"),u.unobserve(t.target),console.log("timeline box visible"))})},i);o.forEach(function(t){return u.observe(t)})},function(t,n,e){"use strict";var r=e(11);if(document.querySelectorAll("#topbar .topbar-link").forEach(function(t){var n=t.getAttribute("href"),e=document.querySelector(n),o=e.getBoundingClientRect().top+window.scrollY;t.addEventListener("click",function(){r(0,o)})}),window.innerWidth>600){var o=e(17),i=document.querySelector("#topbar"),u=function(){window.scrollY>60&&i.classList.add("topbar--stick"),0==window.scrollY&&i.classList.remove("topbar--stick")};window.addEventListener("scroll",o(u,200))}},function(t,n,e){function r(t,n,e){function r(){u(r),a.update()}e=e||{};var c=o(),a=i(c).ease(e.ease||"out-circ").to({top:n,left:t}).duration(e.duration||1e3);return a.update(function(t){window.scrollTo(0|t.left,0|t.top)}),a.on("end",function(){r=function(){}}),r(),a}function o(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}}var i=e(12),u=e(16);t.exports=r},function(t,n,e){function r(t){if(!(this instanceof r))return new r(t);this._from=t,this.ease("linear"),this.duration(500)}var o=e(13),i=e(14),u=e(0),c=e(15);t.exports=r,o(r.prototype),r.prototype.reset=function(){return this.isArray="array"===u(this._from),this._curr=i(this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(t){return this.reset(),this._to=t,this},r.prototype.duration=function(t){return this._duration=t,this},r.prototype.ease=function(t){if(!(t="function"==typeof t?t:c[t]))throw new TypeError("invalid easing function");return this._ease=t,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var t=this._duration,n=Date.now();if(n-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var e=this._from,r=this._to,o=this._curr,i=this._ease,u=(n-this._start)/t,c=i(u);if(this.isArray){for(var a=0;a<e.length;++a)o[a]=e[a]+(r[a]-e[a])*c;return this._update(o),this}for(var s in e)o[s]=e[s]+(r[s]-e[s])*c;return this._update(o),this}},r.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},function(t,n){function e(t){if(t)return r(t)}function r(t){for(var n in e.prototype)t[n]=e.prototype[n];return t}t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,n){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(n),this},e.prototype.once=function(t,n){function e(){this.off(t,e),n.apply(this,arguments)}return e.fn=n,this.on(t,e),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,n){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var e=this._callbacks["$"+t];if(!e)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<e.length;o++)if((r=e[o])===n||r.fn===n){e.splice(o,1);break}return this},e.prototype.emit=function(t){this._callbacks=this._callbacks||{};var n=[].slice.call(arguments,1),e=this._callbacks["$"+t];if(e){e=e.slice(0);for(var r=0,o=e.length;r<o;++r)e[r].apply(this,n)}return this},e.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},e.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,n,e){function r(t){switch(o(t)){case"object":var n={};for(var e in t)t.hasOwnProperty(e)&&(n[e]=r(t[e]));return n;case"array":for(var n=new Array(t.length),i=0,u=t.length;i<u;i++)n[i]=r(t[i]);return n;case"regexp":var c="";return c+=t.multiline?"m":"",c+=t.global?"g":"",c+=t.ignoreCase?"i":"",new RegExp(t.source,c);case"date":return new Date(t.getTime());default:return t}}var o;try{o=e(0)}catch(t){o=e(0)}t.exports=r},function(t,n){n.linear=function(t){return t},n.inQuad=function(t){return t*t},n.outQuad=function(t){return t*(2-t)},n.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},n.inCube=function(t){return t*t*t},n.outCube=function(t){return--t*t*t+1},n.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},n.inQuart=function(t){return t*t*t*t},n.outQuart=function(t){return 1- --t*t*t*t},n.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},n.inQuint=function(t){return t*t*t*t*t},n.outQuint=function(t){return--t*t*t*t*t+1},n.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},n.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},n.outSine=function(t){return Math.sin(t*Math.PI/2)},n.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},n.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},n.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},n.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},n.inCirc=function(t){return 1-Math.sqrt(1-t*t)},n.outCirc=function(t){return Math.sqrt(1- --t*t)},n.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},n.inBack=function(t){var n=1.70158;return t*t*((n+1)*t-n)},n.outBack=function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},n.inOutBack=function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)},n.inBounce=function(t){return 1-n.outBounce(1-t)},n.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},n.inOutBounce=function(t){return t<.5?.5*n.inBounce(2*t):.5*n.outBounce(2*t-1)+.5},n["in-quad"]=n.inQuad,n["out-quad"]=n.outQuad,n["in-out-quad"]=n.inOutQuad,n["in-cube"]=n.inCube,n["out-cube"]=n.outCube,n["in-out-cube"]=n.inOutCube,n["in-quart"]=n.inQuart,n["out-quart"]=n.outQuart,n["in-out-quart"]=n.inOutQuart,n["in-quint"]=n.inQuint,n["out-quint"]=n.outQuint,n["in-out-quint"]=n.inOutQuint,n["in-sine"]=n.inSine,n["out-sine"]=n.outSine,n["in-out-sine"]=n.inOutSine,n["in-expo"]=n.inExpo,n["out-expo"]=n.outExpo,n["in-out-expo"]=n.inOutExpo,n["in-circ"]=n.inCirc,n["out-circ"]=n.outCirc,n["in-out-circ"]=n.inOutCirc,n["in-back"]=n.inBack,n["out-back"]=n.outBack,n["in-out-back"]=n.inOutBack,n["in-bounce"]=n.inBounce,n["out-bounce"]=n.outBounce,n["in-out-bounce"]=n.inOutBounce},function(t,n){function e(t){var n=(new Date).getTime(),e=Math.max(0,16-(n-r)),o=setTimeout(t,e);return r=n,o}n=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||e;var r=(new Date).getTime(),o=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;n.cancel=function(t){o.call(window,t)}},function(t,n,e){function r(t,n,e){var r=!0,c=!0;if("function"!=typeof t)throw new TypeError(u);return i(e)&&(r="leading"in e?!!e.leading:r,c="trailing"in e?!!e.trailing:c),o(t,n,{leading:r,maxWait:n,trailing:c})}var o=e(18),i=e(1),u="Expected a function";t.exports=r},function(t,n,e){function r(t,n,e){function r(n){var e=m,r=w;return m=w=void 0,E=n,x=t.apply(r,e)}function f(t){return E=t,_=setTimeout(h,n),k?r(t):x}function l(t){var e=t-O,r=t-E,o=n-e;return q?s(o,g-r):o}function p(t){var e=t-O,r=t-E;return void 0===O||e>=n||e<0||q&&r>=g}function h(){var t=i();if(p(t))return d(t);_=setTimeout(h,l(t))}function d(t){return _=void 0,j&&m?r(t):(m=w=void 0,x)}function v(){void 0!==_&&clearTimeout(_),E=0,m=O=w=_=void 0}function b(){return void 0===_?x:d(i())}function y(){var t=i(),e=p(t);if(m=arguments,w=this,O=t,e){if(void 0===_)return f(O);if(q)return _=setTimeout(h,n),r(O)}return void 0===_&&(_=setTimeout(h,n)),x}var m,w,g,x,_,O,E=0,k=!1,q=!1,j=!0;if("function"!=typeof t)throw new TypeError(c);return n=u(n)||0,o(e)&&(k=!!e.leading,q="maxWait"in e,g=q?a(u(e.maxWait)||0,n):g,j="trailing"in e?!!e.trailing:j),y.cancel=v,y.flush=b,y}var o=e(1),i=e(19),u=e(22),c="Expected a function",a=Math.max,s=Math.min;t.exports=r},function(t,n,e){var r=e(2),o=function(){return r.Date.now()};t.exports=o},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(n,e(21))},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){function r(t){if("number"==typeof t)return t;if(i(t))return u;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var e=s.test(t);return e||f.test(t)?l(t.slice(2),e?2:8):a.test(t)?u:+t}var o=e(1),i=e(23),u=NaN,c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt;t.exports=r},function(t,n,e){function r(t){return"symbol"==typeof t||i(t)&&o(t)==u}var o=e(24),i=e(27),u="[object Symbol]";t.exports=r},function(t,n,e){function r(t){return null==t?void 0===t?a:c:s&&s in Object(t)?i(t):u(t)}var o=e(3),i=e(25),u=e(26),c="[object Null]",a="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},function(t,n,e){function r(t){var n=u.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(n?t[a]=e:delete t[a]),o}var o=e(3),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,a=o?o.toStringTag:void 0;t.exports=r},function(t,n){function e(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=e},function(t,n){function e(t){return null!=t&&"object"==typeof t}t.exports=e}]);