webpackJsonp([0],{"/kd6":function(a){var b=Object.prototype,c=b.toString;a.exports=function(a){return c.call(a)}},0:function(a,b,c){a.exports=c("JcF2")},"3MXp":function(a){a.exports=function(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)}},"4VQ1":function(a,b,c){var d=c("lxuR"),e="object"==typeof self&&self&&self.Object===Object&&self,f=d||e||Function("return this")();a.exports=f},"6EtS":function(a,b,c){var d=c("3MXp"),e=c("I45B"),f=c("YmiQ"),g=Math.max,h=Math.min;a.exports=function(a,b,c){function i(b){var c=p,d=q;return p=q=void 0,v=b,s=a.apply(d,c),s}function j(a){return v=a,t=setTimeout(m,b),w?i(a):s}function k(a){var c=a-u,d=a-v,e=b-c;return x?h(e,r-d):e}function l(a){var c=a-u,d=a-v;return void 0==u||c>=b||0>c||x&&d>=r}function m(){var a=e();return l(a)?n(a):void(t=setTimeout(m,k(a)))}function n(a){return(t=void 0,y&&p)?i(a):(p=q=void 0,s)}function o(){var a=e(),c=l(a);if(p=arguments,q=this,u=a,c){if(void 0===t)return j(u);if(x)return t=setTimeout(m,b),i(u)}return void 0===t&&(t=setTimeout(m,b)),s}var p,q,r,s,t,u,v=0,w=!1,x=!1,y=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return b=f(b)||0,d(c)&&(w=!!c.leading,x="maxWait"in c,r=x?g(f(c.maxWait)||0,b):r,y="trailing"in c?!!c.trailing:y),o.cancel=function(){void 0!==t&&clearTimeout(t),v=0,p=u=q=t=void 0},o.flush=function(){return void 0===t?s:n(e())},o}},"8uCp":function(a){a.exports=function(a){return null!=a&&"object"==typeof a}},CCpz:function(a,b,c){var d=c("paVz"),e=c("DjR4"),f=c("/kd6"),g=d?d.toStringTag:void 0;a.exports=function(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":g&&g in Object(a)?e(a):f(a)}},CXTQ:function(a,b,c){function d(a){return this instanceof d?void(this._from=a,this.ease("linear"),this.duration(500)):new d(a)}var e=c("XUqb"),f=c("yS6F"),g=c("mjo1"),h=c("DhpZ");a.exports=d,e(d.prototype),d.prototype.reset=function(){return this.isArray="array"===g(this._from),this._curr=f(this._from),this._done=!1,this._start=Date.now(),this},d.prototype.to=function(a){return this.reset(),this._to=a,this},d.prototype.duration=function(a){return this._duration=a,this},d.prototype.ease=function(a){if(a="function"==typeof a?a:h[a],!a)throw new TypeError("invalid easing function");return this._ease=a,this},d.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},d.prototype.step=function(){if(!this._done){var a=this._duration,b=Date.now(),c=b-this._start;if(c>=a)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var d=this._from,e=this._to,f=this._curr,g=this._ease,h=(b-this._start)/a,j=g(h);if(this.isArray){for(var l=0;l<d.length;++l)f[l]=d[l]+(e[l]-d[l])*j;return this._update(f),this}for(var i in d)f[i]=d[i]+(e[i]-d[i])*j;return this._update(f),this}},d.prototype.update=function(a){return 0==arguments.length?this.step():(this._update=a,this)}},DhpZ:function(a,b){var c=Math.sqrt,d=Math.pow,e=Math.cos,f=Math.PI;b.linear=function(a){return a},b.inQuad=function(a){return a*a},b.outQuad=function(a){return a*(2-a)},b.inOutQuad=function(a){return a*=2,1>a?0.5*a*a:-0.5*(--a*(a-2)-1)},b.inCube=function(a){return a*a*a},b.outCube=function(a){return--a*a*a+1},b.inOutCube=function(a){return a*=2,1>a?0.5*a*a*a:0.5*((a-=2)*a*a+2)},b.inQuart=function(a){return a*a*a*a},b.outQuart=function(a){return 1- --a*a*a*a},b.inOutQuart=function(a){return a*=2,1>a?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)},b.inQuint=function(a){return a*a*a*a*a},b.outQuint=function(a){return--a*a*a*a*a+1},b.inOutQuint=function(a){return a*=2,1>a?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)},b.inSine=function(a){return 1-e(a*f/2)},b.outSine=function(a){return Math.sin(a*f/2)},b.inOutSine=function(a){return .5*(1-e(f*a))},b.inExpo=function(a){return 0==a?0:d(1024,a-1)},b.outExpo=function(a){return 1==a?a:1-d(2,-10*a)},b.inOutExpo=function(a){return 0==a?0:1==a?1:1>(a*=2)?.5*d(1024,a-1):.5*(-d(2,-10*(a-1))+2)},b.inCirc=function(a){return 1-c(1-a*a)},b.outCirc=function(a){return c(1- --a*a)},b.inOutCirc=function(a){return a*=2,1>a?-0.5*(c(1-a*a)-1):0.5*(c(1-(a-=2)*a)+1)},b.inBack=function(a){var b=1.70158;return a*a*((b+1)*a-b)},b.outBack=function(a){var b=1.70158;return--a*a*((b+1)*a+b)+1},b.inOutBack=function(a){var b=1.70158*1.525;return 1>(a*=2)?0.5*(a*a*((b+1)*a-b)):0.5*((a-=2)*a*((b+1)*a+b)+2)},b.inBounce=function(a){return 1-b.outBounce(1-a)},b.outBounce=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},b.inOutBounce=function(a){return .5>a?.5*b.inBounce(2*a):.5*b.outBounce(2*a-1)+.5},b["in-quad"]=b.inQuad,b["out-quad"]=b.outQuad,b["in-out-quad"]=b.inOutQuad,b["in-cube"]=b.inCube,b["out-cube"]=b.outCube,b["in-out-cube"]=b.inOutCube,b["in-quart"]=b.inQuart,b["out-quart"]=b.outQuart,b["in-out-quart"]=b.inOutQuart,b["in-quint"]=b.inQuint,b["out-quint"]=b.outQuint,b["in-out-quint"]=b.inOutQuint,b["in-sine"]=b.inSine,b["out-sine"]=b.outSine,b["in-out-sine"]=b.inOutSine,b["in-expo"]=b.inExpo,b["out-expo"]=b.outExpo,b["in-out-expo"]=b.inOutExpo,b["in-circ"]=b.inCirc,b["out-circ"]=b.outCirc,b["in-out-circ"]=b.inOutCirc,b["in-back"]=b.inBack,b["out-back"]=b.outBack,b["in-out-back"]=b.inOutBack,b["in-bounce"]=b.inBounce,b["out-bounce"]=b.outBounce,b["in-out-bounce"]=b.inOutBounce},DjR4:function(a,b,c){var d=c("paVz"),e=Object.prototype,f=e.hasOwnProperty,g=e.toString,h=d?d.toStringTag:void 0;a.exports=function(a){var b=f.call(a,h),c=a[h];try{a[h]=void 0}catch(a){}var d=g.call(a);return b?a[h]=c:delete a[h],d}},DuR2:function(a){var b=function(){return this}();try{b=b||Function("return this")()||(1,eval)("this")}catch(a){"object"==typeof window&&(b=window)}a.exports=b},FA8B:function(a,b,c){const d=c("U194"),e=document.querySelectorAll("#topbar .topbar-link");if(e.forEach(function(a){const b=a.getAttribute("href"),c=document.querySelector(b),e=c.getBoundingClientRect().top+window.scrollY;a.addEventListener("click",function(){d(0,e)})}),600<window.innerWidth){const a=c("Xuid"),b=document.querySelector("#topbar");window.addEventListener("scroll",a(()=>{60<window.scrollY&&b.classList.add("topbar--stick"),0==window.scrollY&&b.classList.remove("topbar--stick")},200))}},I45B:function(a,b,c){var d=c("4VQ1");a.exports=function(){return d.Date.now()}},JcF2:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("To/m"),e=c.n(d),f=c("WbYu"),g=c.n(f),h=c("nfnv"),i=c.n(h),j=c("m9L+"),k=c.n(j),l=c("FA8B"),m=c.n(l);void 0===NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);const n=document.querySelector("#chart"),o=n.querySelectorAll("[data-percentage]");o.forEach((a)=>{const b=a.dataset.percentage/100*n.clientHeight;a.style.height=`${b}px`});const p=new IntersectionObserver((a)=>{a.forEach((a)=>{0.5<a.intersectionRatio&&(a.target.classList.add("observable--visible"),p.unobserve(a.target),console.log("section visible"))})},{threshold:[0.5]}),q=document.querySelectorAll(".observe");q.forEach((a)=>p.observe(a))},"To/m":function(){},U194:function(a,b,c){function d(){var a=window.pageYOffset||document.documentElement.scrollTop,b=window.pageXOffset||document.documentElement.scrollLeft;return{top:a,left:b}}var e=c("CXTQ"),f=c("xLZ8");a.exports=function(a,b,c){function g(){f(g),i.update()}c=c||{};var h=d(),i=e(h).ease(c.ease||"out-circ").to({top:b,left:a}).duration(c.duration||1e3);return i.update(function(a){window.scrollTo(0|a.left,0|a.top)}),i.on("end",function(){g=function(){}}),g(),i}},Vjhf:function(a,b,c){var d=c("CCpz"),e=c("8uCp");a.exports=function(a){return"symbol"==typeof a||e(a)&&d(a)=="[object Symbol]"}},WbYu:function(){const a=new IntersectionObserver((b)=>{b.forEach((b)=>{0.9<b.intersectionRatio&&(b.target.classList.add("batons--visible"),a.unobserve(b.target),console.log("batons visible"))})},{threshold:[0.9]}),b=document.querySelector("#advantages-section");a.observe(b)},XUqb:function(a){function b(a){if(a)return c(a)}function c(a){for(var c in b.prototype)a[c]=b.prototype[c];return a}a.exports=b,b.prototype.on=b.prototype.addEventListener=function(a,b){return this._callbacks=this._callbacks||{},(this._callbacks["$"+a]=this._callbacks["$"+a]||[]).push(b),this},b.prototype.once=function(a,b){function c(){this.off(a,c),b.apply(this,arguments)}return c.fn=b,this.on(a,c),this},b.prototype.off=b.prototype.removeListener=b.prototype.removeAllListeners=b.prototype.removeEventListener=function(a,b){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var c=this._callbacks["$"+a];if(!c)return this;if(1==arguments.length)return delete this._callbacks["$"+a],this;for(var d,e=0;e<c.length;e++)if(d=c[e],d===b||d.fn===b){c.splice(e,1);break}return this},b.prototype.emit=function(a){this._callbacks=this._callbacks||{};var b=[].slice.call(arguments,1),c=this._callbacks["$"+a];if(c){c=c.slice(0);for(var d=0,e=c.length;d<e;++d)c[d].apply(this,b)}return this},b.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks["$"+a]||[]},b.prototype.hasListeners=function(a){return!!this.listeners(a).length}},Xuid:function(a,b,c){var d=c("6EtS"),e=c("3MXp");a.exports=function(a,b,c){var f=!0,g=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return e(c)&&(f="leading"in c?!!c.leading:f,g="trailing"in c?!!c.trailing:g),d(a,b,{leading:f,maxWait:b,trailing:g})}},YmiQ:function(a,b,c){var d=c("3MXp"),e=c("Vjhf"),f=0/0,g=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,j=/^0o[0-7]+$/i,k=parseInt;a.exports=function(a){if("number"==typeof a)return a;if(e(a))return f;if(d(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=d(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(g,"");var c=i.test(a);return c||j.test(a)?k(a.slice(2),c?2:8):h.test(a)?f:+a}},lxuR:function(a,b,c){(function(b){var c="object"==typeof b&&b&&b.Object===Object&&b;a.exports=c}).call(b,c("DuR2"))},"m9L+":function(){const a=document.querySelector("#timeline"),b=a.querySelectorAll(".timeline-box"),c=new IntersectionObserver((a)=>{a.forEach((a)=>{0.7<a.intersectionRatio&&(a.target.classList.add("show"),c.unobserve(a.target),console.log("timeline box visible"))})},{threshold:[0.7]});b.forEach((a)=>c.observe(a))},mjo1:function(a){var b=Object.prototype.toString;a.exports=function(a){switch(b.call(a)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error";}return null===a?"null":void 0===a?"undefined":a===a?a&&1===a.nodeType?"element":(a=a.valueOf?a.valueOf():Object.prototype.valueOf.apply(a),typeof a):"nan"}},nfnv:function(){const a=document.querySelectorAll(".creation-box-wrapper");a.forEach((a)=>{const b=Snap(a.querySelector("svg")),c=b.select("path"),d={from:c.attr("d"),to:a.getAttribute("data-path-hover")},e={speed:450,easing:mina.backout};a.addEventListener("mouseenter",()=>{c.animate({path:d.to},e.speed,e.easing)}),a.addEventListener("mouseleave",()=>{c.animate({path:d.from},e.speed,e.easing)})})},paVz:function(a,b,c){var d=c("4VQ1"),e=d.Symbol;a.exports=e},xLZ8:function(a,b){b=a.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){var b=new Date().getTime(),d=Math.max(0,16-(b-c)),e=setTimeout(a,d);return c=b,e};var c=new Date().getTime(),d=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;b.cancel=function(a){d.call(window,a)}},yS6F:function(a,b,c){function d(a){switch(e(a)){case"object":var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=d(a[c]));return b;case"array":for(var b=Array(a.length),f=0,g=a.length;f<g;f++)b[f]=d(a[f]);return b;case"regexp":var h="";return h+=a.multiline?"m":"",h+=a.global?"g":"",h+=a.ignoreCase?"i":"",new RegExp(a.source,h);case"date":return new Date(a.getTime());default:return a;}}var e;try{e=c("mjo1")}catch(a){e=c("mjo1")}a.exports=d}},[0]);