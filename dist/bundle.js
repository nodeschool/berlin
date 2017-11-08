(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
var css=0,choo=require(5),store=require(31);null;var app=choo();"production"!==process.env.NODE_ENV&&app.use(require(3)()),app.use(store),app.route("/",require(33)),app.route("/berlin",require(33)),app.route("/*",require(32)),module.parent?module.exports=app:app.mount("body");

}).call(this,require(22))
},{"2":2,"22":22,"3":3,"31":31,"32":32,"33":33,"5":5}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
function expose(){return function(o,e){e.on("DOMContentLoaded",function(){function t(){return console.table(n),i+" events recorded, showing the last "+MAX_HISTORY_LENGTH}window.choo={},window.choo.state=o,window.choo.emit=function(o,t){e.emit(o,t)},window.choo.on=function(o,t){e.on(o,t)};var n=[],i=0;window.choo._history=n,window.choo.history=t,window.choo.copy=function(o){var e=o&&"string"==typeof o,t=e&&1===arguments.length&&0===o.indexOf("state.");o&&"function"!=typeof o||(o=window.choo.state),t&&[].push.call(arguments,{state:window.choo.state}),stateCopy(e?pluck.apply(this,arguments):o)},Object.defineProperty(window.choo,"log",{get:t}),Object.defineProperty(window.choo,"history",{get:t}),e.on("*",function(o,e){i+=1;var t=new Event(o,e);n.push(t),onIdle(function(){var o=n.length;o>MAX_HISTORY_LENGTH&&removeItems(n,0,o-MAX_HISTORY_LENGTH)})})})}}function Event(o,e){this.name=o,this.data=e}var removeItems=require(23),onIdle=require(20),stateCopy=require(25),pluck=require(21),MAX_HISTORY_LENGTH=150;module.exports=expose;

},{"20":20,"21":21,"23":23,"25":25}],4:[function(require,module,exports){
module.exports={};

},{}],5:[function(require,module,exports){
function Choo(t){if(!(this instanceof Choo))return new Choo(t);t=t||{};var e=this;this._events={DOMCONTENTLOADED:"DOMContentLoaded",DOMTITLECHANGE:"DOMTitleChange",REPLACESTATE:"replaceState",PUSHSTATE:"pushState",NAVIGATE:"navigate",POPSTATE:"popState",RENDER:"render"},this._historyEnabled=void 0===t.history||t.history,this._hrefEnabled=void 0===t.href||t.href,this._hasWindow="undefined"!=typeof window,this._createLocation=nanolocation,this._loaded=!1,this._tree=null,this.router=nanorouter({curry:!0}),this.emitter=nanobus("choo.emit"),this.state={events:this._events},this._hasWindow&&(this.state.title=document.title),this.emitter.prependListener(this._events.DOMTITLECHANGE,function(t){e.state.title=t,e._hasWindow&&(document.title=t)})}var scrollToAnchor=require(24),documentReady=require(7),nanolocation=require(11),nanotiming=require(18),nanorouter=require(17),nanomorph=require(12),nanoquery=require(15),nanohref=require(10),nanoraf=require(16),nanobus=require(9),xtend=require(28);module.exports=Choo;var HISTORY_OBJECT={};Choo.prototype.route=function(t,e){var n=this;this.router.on(t,function(o){return function(){n.state.params=o,n.state.route=t;var r=nanotiming("choo.route('"+t+"')"),i=e(n.state,function(t,e){n.emitter.emit(t,e)});return r(),i}})},Choo.prototype.use=function(t){var e=nanotiming("choo.use");t(this.state,this.emitter,this),e()},Choo.prototype.start=function(){var t=this;return this._historyEnabled&&(this.emitter.prependListener(this._events.NAVIGATE,function(){t.state.query=nanoquery(window.location.search),t._loaded&&(t.emitter.emit(t._events.RENDER),setTimeout(scrollToAnchor.bind(null,window.location.hash),0))}),this.emitter.prependListener(this._events.POPSTATE,function(){t.emitter.emit(t._events.NAVIGATE)}),this.emitter.prependListener(this._events.PUSHSTATE,function(e){window.history.pushState(HISTORY_OBJECT,null,e),t.emitter.emit(t._events.NAVIGATE)}),this.emitter.prependListener(this._events.REPLACESTATE,function(e){window.history.replaceState(HISTORY_OBJECT,null,e),t.emitter.emit(t._events.NAVIGATE)}),window.onpopstate=function(){t.emitter.emit(t._events.POPSTATE)},t._hrefEnabled&&nanohref(function(e){var n=e.href;n!==window.location.href&&t.emitter.emit(t._events.PUSHSTATE,n)})),this.state.href=this._createLocation(),this._tree=this.router(this.state.href),this.state.query=nanoquery(window.location.search),this.emitter.prependListener(t._events.RENDER,nanoraf(function(){var e=nanotiming("choo.render");t.state.href=t._createLocation();var n=t.router(t.state.href),o=nanotiming("choo.morph");nanomorph(t._tree,n),o(),e()})),documentReady(function(){t.emitter.emit(t._events.DOMCONTENTLOADED),t._loaded=!0}),this._tree},Choo.prototype.mount=function(t){var e=this;documentReady(function(){var n=nanotiming("choo.render"),o=e.start();e._tree=document.querySelector(t);var r=nanotiming("choo.morph");nanomorph(e._tree,o),r(),n()})},Choo.prototype.toString=function(t,e){return(this.state=xtend(this.state,e||{})).href=t.replace(/\?*.$/,""),this.state.query=nanoquery(t),this.router(t).toString()};

},{"10":10,"11":11,"12":12,"15":15,"16":16,"17":17,"18":18,"24":24,"28":28,"7":7,"9":9}],6:[function(require,module,exports){
"use strict";module.exports=(e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=getSelection();let n=!1;o.rangeCount>0&&(n=o.getRangeAt(0)),document.body.appendChild(t),t.select();let l=!1;try{l=document.execCommand("copy")}catch(e){}return document.body.removeChild(t),n&&(o.removeAllRanges(),o.addRange(n)),l});

},{}],7:[function(require,module,exports){
"use strict";function ready(e){var t=document.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);document.addEventListener("DOMContentLoaded",function(){e()})}module.exports=ready;

},{}],8:[function(require,module,exports){
function stringify(t){return null!==t&&"object"==typeof t&&"function"!=typeof t.toJSON&&decirc(t,"",[],null),JSON.stringify(t)}function Circle(t,i,e){this.val=t,this.k=i,this.parent=e,this.count=1}function decirc(t,i,e,n){var c,o,r;if("object"==typeof t&&null!==t)if(t instanceof Circle)t.count++;else if("function"!=typeof t.toJSON||t.toJSON.forceDecirc)if(n&&~e.indexOf(t))n[i]=new Circle(t,i,n);else{for(e.push(t),o=(c=Object.keys(t)).length,r=0;r<o;r++)decirc(t[i=c[r]],i,e,t);e.pop()}}module.exports=stringify,stringify.default=stringify,Circle.prototype.toJSON=function(){return 0==--this.count&&(this.parent[this.k]=this.val),"[Circular]"};

},{}],9:[function(require,module,exports){
function Nanobus(t){if(!(this instanceof Nanobus))return new Nanobus(t);this._name=t||"nanobus",this._starListeners=[],this._listeners={}}var splice=require(23),nanotiming=require(18);module.exports=Nanobus,Nanobus.prototype.emit=function(t,s){var e=nanotiming(this._name+"('"+t+"')"),i=this._listeners[t];return i&&i.length>0&&this._emit(this._listeners[t],s),this._starListeners.length>0&&this._emit(this._starListeners,t,s,e.uuid),e(),this},Nanobus.prototype.on=Nanobus.prototype.addListener=function(t,s){return"*"===t?this._starListeners.push(s):(this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(s)),this},Nanobus.prototype.prependListener=function(t,s){return"*"===t?this._starListeners.unshift(s):(this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].unshift(s)),this},Nanobus.prototype.once=function(t,s){function e(){s.apply(i,arguments),i.removeListener(t,e)}var i=this;return this.on(t,e),this},Nanobus.prototype.prependOnceListener=function(t,s){function e(){s.apply(i,arguments),i.removeListener(t,e)}var i=this;return this.prependListener(t,e),this},Nanobus.prototype.removeListener=function(t,s){function e(t,s){if(t){var e=t.indexOf(s);return-1!==e?(splice(t,e,1),!0):void 0}}return"*"===t?(this._starListeners=this._starListeners.slice(),e(this._starListeners,s)):(void 0!==this._listeners[t]&&(this._listeners[t]=this._listeners[t].slice()),e(this._listeners[t],s))},Nanobus.prototype.removeAllListeners=function(t){return t?"*"===t?this._starListeners=[]:this._listeners[t]=[]:(this._starListeners=[],this._listeners={}),this},Nanobus.prototype.listeners=function(t){var s="*"!==t?this._listeners[t]:this._starListeners,e=[];if(s)for(var i=s.length,n=0;n<i;n++)e.push(s[n]);return e},Nanobus.prototype._emit=function(t,s,e,i){if(void 0!==t){void 0===e&&(e=s,s=null);for(var n=t.length,r=0;r<n;r++){var o=t[r];s?void 0!==i?o(s,e,i):o(s,e):o(e)}}};

},{"18":18,"23":23}],10:[function(require,module,exports){
function href(e,t){t=t||window.document,window.addEventListener("click",function(r){if(!(r.button&&0!==r.button||r.ctrlKey||r.metaKey||r.altKey||r.shiftKey||r.defaultPrevented)){var n=function e(r){if(r&&r!==t)return"a"!==r.localName||void 0===r.href?e(r.parentNode):r}(r.target);n&&(window.location.origin!==n.origin||n.hasAttribute("download")||"_blank"===n.getAttribute("target")&&safeExternalLink.test(n.getAttribute("rel"))||protocolLink.test(n.getAttribute("href"))||(r.preventDefault(),e(n)))}})}var safeExternalLink=/[noopener|noreferrer] [noopener|noreferrer]/,protocolLink=/^[\w-_]+:/;module.exports=href;

},{}],11:[function(require,module,exports){
function nanolocation(){return window.location.pathname.replace(/\/$/,"")+window.location.hash.replace(/^#/,"/")}module.exports=nanolocation;

},{}],12:[function(require,module,exports){
function nanomorph(e,a){return walk(a,e)}function walk(e,a){return a?e?e.isSameNode&&e.isSameNode(a)?a:e.tagName!==a.tagName?e:(morph(e,a),updateChildren(e,a),a):null:e}function updateChildren(e,a){for(var i,d,l,o,r=0,n=0;i=a.childNodes[n],d=e.childNodes[n-r],i||d;n++)if(d)if(i)if(same(d,i))(l=walk(d,i))!==i&&(a.replaceChild(l,i),r++);else{o=null;for(var m=n;m<a.childNodes.length;m++)if(same(a.childNodes[m],d)){o=a.childNodes[m];break}o?((l=walk(d,o))!==o&&r++,a.insertBefore(l,i)):d.id||i.id?(a.insertBefore(d,i),r++):(l=walk(d,i))!==i&&(a.replaceChild(l,i),r++)}else a.appendChild(d),r++;else a.removeChild(i),n--}function same(e,a){return e.id?e.id===a.id:e.isSameNode?e.isSameNode(a):e.tagName===a.tagName&&(e.type===TEXT_NODE&&e.nodeValue===a.nodeValue)}var morph=require(14),TEXT_NODE=3;module.exports=nanomorph;

},{"14":14}],13:[function(require,module,exports){
module.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"];

},{}],14:[function(require,module,exports){
function morph(e,t){var u=e.nodeType,a=e.nodeName;u===ELEMENT_NODE&&copyAttrs(e,t),u!==TEXT_NODE&&u!==COMMENT_NODE||(t.nodeValue=e.nodeValue),"INPUT"===a?updateInput(e,t):"OPTION"===a?updateOption(e,t):"TEXTAREA"===a&&updateTextarea(e,t),copyEvents(e,t)}function copyAttrs(e,t){for(var u=t.attributes,a=e.attributes,r=null,n=null,l=null,i=null,o=a.length-1;o>=0;--o)l=(i=a[o]).name,r=i.namespaceURI,n=i.value,r?(l=i.localName||l,t.getAttributeNS(r,l)!==n&&t.setAttributeNS(r,l,n)):t.hasAttribute(l)?t.getAttribute(l)!==n&&("null"===n||"undefined"===n?t.removeAttribute(l):t.setAttribute(l,n)):t.setAttribute(l,n);for(var v=u.length-1;v>=0;--v)!1!==(i=u[v]).specified&&(l=i.name,(r=i.namespaceURI)?(l=i.localName||l,e.hasAttributeNS(r,l)||t.removeAttributeNS(r,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l))}function copyEvents(e,t){for(var u=0;u<eventsLength;u++){var a=events[u];e[a]?t[a]=e[a]:t[a]&&(t[a]=void 0)}}function updateOption(e,t){updateAttribute(e,t,"selected")}function updateInput(e,t){var u=e.value,a=t.value;updateAttribute(e,t,"checked"),updateAttribute(e,t,"disabled"),u!==a&&(t.setAttribute("value",u),t.value=u),"null"===u&&(t.value="",t.removeAttribute("value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=u):t.removeAttribute("value")}function updateTextarea(e,t){var u=e.value;if(u!==t.value&&(t.value=u),t.firstChild&&t.firstChild.nodeValue!==u){if(""===u&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=u}}function updateAttribute(e,t,u){e[u]!==t[u]&&(t[u]=e[u],e[u]?t.setAttribute(u,""):t.removeAttribute(u))}var events=require(13),eventsLength=events.length,ELEMENT_NODE=1,TEXT_NODE=3,COMMENT_NODE=8;module.exports=morph;

},{"13":13}],15:[function(require,module,exports){
function qs(e){var n={};return e.replace(/^.*\?/,"").replace(reg,function(e,o,r,d){n[window.decodeURIComponent(o)]=window.decodeURIComponent(d)}),n}var reg=new RegExp("([^?=&]+)(=([^&]*))?","g");module.exports=qs;

},{}],16:[function(require,module,exports){
"use strict";function nanoraf(n,r){r||(r=window.requestAnimationFrame);var a=!1,o=null;return function(){null!==o||a||(a=!0,r(function(){a=!1;for(var r=o.length,t=new Array(r),u=0;u<r;u++)t[u]=o[u];n.apply(n,t),o=null})),o=arguments}}module.exports=nanoraf;

},{}],17:[function(require,module,exports){
function Nanorouter(e){function r(e){return n?(e=pathname(e,isLocalFile))===a?t():(a=e,(t=o(e))()):o(e)}var o=wayfarer((e=e||{}).default||"/404"),n=e.curry||!1,t=null,a=null;return r.router=o,r.on=function(e,r){e=e.replace(/^[#/]/,""),o.on(e,r)},r}function pathname(e,r){return(e=r?e.replace(stripElectron,""):e.replace(prefix,"")).replace(suffix,"").replace(normalize,"/")}var wayfarer=require(26),isLocalFile=/file:\/\//.test("object"==typeof window&&window.location&&window.location.origin),electron="^(file://|/)(.*.html?/?)?",protocol="^(http(s)?(://))?(www.)?",domain="[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?",qs="[?].*$",stripElectron=new RegExp(electron),prefix=new RegExp(protocol+domain),normalize=new RegExp("#"),suffix=new RegExp(qs);module.exports=Nanorouter;

},{"26":26}],18:[function(require,module,exports){
function nanotiming(r){function e(e){var a="end-"+n+"-"+r;perf.mark(a),onIdle(function(){var i=r+" ["+n+"]";perf.measure(i,o,a),perf.clearMarks(o),perf.clearMarks(a),e&&e(r)})}if(disabled)return noop;var n=(100*perf.now()).toFixed(),o="start-"+n+"-"+r;return perf.mark(o),e.uuid=n,e}function noop(r){r&&onIdle(r)}var onIdle=require(19),perf,disabled=!0;try{perf=window.performance,disabled="true"===window.localStorage.DISABLE_NANOTIMING||!perf.mark}catch(r){}module.exports=nanotiming;

},{"19":19}],19:[function(require,module,exports){
function onIdle(d,e){e=e||dftOpts;var n;return hasIdle?(n=window.requestIdleCallback(function(n){if(n.timeRemaining()<=10&&!n.didTimeout)return onIdle(d,e);d(n)},e),window.cancelIdleCallback.bind(window,n)):hasWindow?(n=setTimeout(d,0),clearTimeout.bind(window,n)):void 0}var dftOpts={},hasWindow="undefined"!=typeof window,hasIdle=hasWindow&&window.requestIdleCallback;module.exports=onIdle;

},{}],20:[function(require,module,exports){
function onIdle(d,e){e=e||dftOpts;var n;return hasIdle?(n=window.requestIdleCallback(d,e),window.cancelIdleCallback.bind(window,n)):hasWindow?(n=setTimeout(d,0),clearTimeout.bind(window,n)):void 0}var dftOpts={},hasWindow="undefined"!=typeof window,hasIdle=hasWindow&&window.requestIdleCallback;module.exports=onIdle;

},{}],21:[function(require,module,exports){
function plucker(r,n){return arguments.length>=2?pluck(r)(n):pluck(r)}function pluck(r){if((r="string"==typeof r?String(r).trim().split("."):r).length<2)return r=r[0],function(n){return n[r]};var n=r.length;return function(t){for(var u=0;u<n&&void 0!==t;u++)t=t[r[u]];return t}}module.exports=plucker;

},{}],22:[function(require,module,exports){
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}var process=module.exports={},cachedSetTimeout,cachedClearTimeout;!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var queue=[],draining=!1,currentQueue,queueIndex=-1;process.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];queue.push(new Item(e,t)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(e){return[]},process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};

},{}],23:[function(require,module,exports){
"use strict";module.exports=function(t,e,r){var n,o=t.length;if(!(e>=o||0===r)){var f=o-(r=e+r>o?o-e:r);for(n=e;n<f;++n)t[n]=t[n+r];t.length=f}};

},{}],24:[function(require,module,exports){
function scrollToAnchor(o,c){if(o)try{var r=document.querySelector(o);r&&r.scrollIntoView(c)}catch(o){}}module.exports=scrollToAnchor;

},{}],25:[function(require,module,exports){
function tryStringify(t){try{return JSON.stringify(t)}catch(t){}}function stateCopy(t){var r=tryStringify(t)||fastSafeStringify(t);copy(r)}var fastSafeStringify=require(8),copy=require(6);module.exports=stateCopy;

},{"6":6,"8":8}],26:[function(require,module,exports){
function Wayfarer(r){function e(r){for(var e=new Array(arguments.length),n=1;n<e.length;n++)e[n]=arguments[n];var i=t.match(r);if(i&&i.cb){e[0]=i.params;var c=i.cb;return c.apply(c,e)}var f=t.match(a);if(f&&f.cb){e[0]=f.params;var o=f.cb;return o.apply(o,e)}throw new Error("route '"+r+"' did not match")}if(!(this instanceof Wayfarer))return new Wayfarer(r);var a=(r||"").replace(/^\//,""),t=trie();return e._trie=t,e.emit=e,e.on=function(r,a){return r=r||"/",a.route=r,a&&a._wayfarer&&a._trie?t.mount(r,a._trie.trie):t.create(r).cb=a,e},e._wayfarer=!0,e}var trie=require(27);module.exports=Wayfarer;

},{"27":27}],27:[function(require,module,exports){
function Trie(){if(!(this instanceof Trie))return new Trie;this.trie={nodes:{}}}var mutate=require(29),xtend=require(28);module.exports=Trie,Trie.prototype.create=function(e){function n(e,t){var o=r.hasOwnProperty(e)&&r[e];if(!1===o)return t;var i=null;return/^:|^\*/.test(o)?(t.nodes.hasOwnProperty("$$")?i=t.nodes.$$:(i={nodes:{}},t.nodes.$$=i),"*"===o[0]&&(t.wildcard=!0),t.name=o.replace(/^:|^\*/,"")):t.nodes.hasOwnProperty(o)?i=t.nodes[o]:(i={nodes:{}},t.nodes[o]=i),n(e+1,i)}var r=e.replace(/^\//,"").split("/");return n(0,this.trie)},Trie.prototype.match=function(e){function n(e,o){if(void 0!==o){var i=r[e];if(void 0===i)return o;if(o.nodes.hasOwnProperty(i))return n(e+1,o.nodes[i]);if(o.name){try{t[o.name]=decodeURIComponent(i)}catch(r){return n(e,void 0)}return n(e+1,o.nodes.$$)}if(o.wildcard){try{t.wildcard=decodeURIComponent(r.slice(e).join("/"))}catch(r){return n(e,void 0)}return o.nodes.$$}return n(e+1)}}var r=e.replace(/^\//,"").split("/"),t={},o=n(0,this.trie);if(o)return o=xtend(o),o.params=t,o},Trie.prototype.mount=function(e,n){var r=e.replace(/^\//,"").split("/"),t=null,o=null;if(1===r.length)o=r[0],t=this.create(o);else{var i=r.splice(0,r.length-1).join("/");o=r[0],t=this.create(i)}mutate(t.nodes,n.nodes),n.name&&(t.name=n.name),t.nodes[""]&&(Object.keys(t.nodes[""]).forEach(function(e){"nodes"!==e&&(t[e]=t.nodes[""][e])}),mutate(t.nodes,t.nodes[""].nodes),delete t.nodes[""].nodes)};

},{"28":28,"29":29}],28:[function(require,module,exports){
function extend(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;

},{}],29:[function(require,module,exports){
function extend(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;

},{}],30:[function(require,module,exports){
module.exports=function e(t,n){for(var o=0;o<n.length;o++){var i=n[o];if(Array.isArray(i))e(t,i);else{if(("number"==typeof i||"boolean"==typeof i||i instanceof Date||i instanceof RegExp)&&(i=i.toString()),"string"==typeof i){if(/^[\n\r\s]+$/.test(i))continue;if(t.lastChild&&"#text"===t.lastChild.nodeName){t.lastChild.nodeValue+=i;continue}i=document.createTextNode(i)}i&&i.nodeType&&t.appendChild(i)}}};

},{}],31:[function(require,module,exports){
function store(t,o){t.totalClicks=0,o.on("DOMContentLoaded",function(){o.on("clicks:add",function(n){t.totalClicks+=n,o.emit(t.events.RENDER)})})}module.exports=store;

},{}],32:[function(require,module,exports){
function view(e,t){return e.title!==TITLE&&t(e.events.DOMTITLECHANGE,TITLE),function(){var e=require(30),t=document.createElement("body");t.setAttribute("class","sans-serif bg-light-yellow");var n=document.createElement("h1");return n.setAttribute("class","f-headline pa3 pa4-ns"),e(n,["\n        404 - route not found\n      "]),e(t,["\n      ",n,"\n    "]),t}()}var html=require(4),TITLE="route not found";module.exports=view;

},{"30":30,"4":4}],33:[function(require,module,exports){
function view(e,t){return e.title!==TITLE&&t(e.events.DOMTITLECHANGE,TITLE),function(){var e=require(30),t=document.createElement("body");t.setAttribute("class","sans-serif bg-light-yellow");var n=document.createElement("div");n.setAttribute("class","tc pv4 center");var o=document.createElement("img");o.setAttribute("src","assets/logo.png"),o.setAttribute("alt","logo"),o.setAttribute("class","w5");var r=document.createElement("h1");r.setAttribute("class","b f1 f-headline-ns db mt0 mb0"),e(r,["nodeschool"]);var a=document.createElement("h2");a.setAttribute("class","f2 f1-ns mt0"),e(a,["berlin"]);var s=document.createElement("div");s.setAttribute("class","f3"),e(s,["Friday November 10th @ Mozilla Berlin"]);var l=document.createElement("a");l.setAttribute("href","https://ti.to/nodeschool-berlin/25"),l.setAttribute("class","f3 link dim ba bw1 ph3 pv2 mv3 mb2 dib black"),e(l,["Sign up here"]),e(n,["\n        ",o,"\n        ",r,"\n        ",a,"\n        ",s,"\n        ",l,"\n      "]);var c=document.createElement("div");c.setAttribute("class","cf mw8 center pb5");var i=document.createElement("div");i.setAttribute("class","fl ph3 w-100 w-33-ns tc");var u=document.createElement("h3");e(u,["Learn Coding"]);var d=document.createElement("a");d.setAttribute("href","https://nodejs.org/"),e(d,["Node.js"]),e(i,["\n          ",u,"\n          Join us and learn coding with us. You are going to learn the basics of ",d,". It's a plus if you know some JavaScript beforehand, but if not we can help you out.\n        "]);var m=document.createElement("div");m.setAttribute("class","fl ph3 w-100 w-33-ns tc");var h=document.createElement("h3");e(h,["Self-Guided"]);var b=document.createElement("a");b.setAttribute("href","https://nodeschool.io"),e(b,["nodeschool.io"]),e(m,["\n          ",h,"\n          You will go through a set of self-paced challenges. No boring talks. All challenges are Open Source and available online on ",b,". This means you can continue learning after the event.\n        "]);var v=document.createElement("div");v.setAttribute("class","fl ph3 w-100 w-33-ns tc");var f=document.createElement("h3");e(f,["For Everyone"]);var p=document.createElement("a");return p.setAttribute("href","https://github.com/nodeschool/berlin/blob/master/codeofconduct.md"),e(p,["Code of Conduct"]),e(v,["\n          ",f,"\n          We think coding is awesome and everyone should feel welcome at our event. This includes that we are expecting all participants to be awesome to each other and respect the ",p,".\n        "]),e(c,["\n        ",i,"\n        ",m,"\n        ",v,"\n      "]),e(t,["\n      ",n,"\n      ",c,"\n    "]),t}()}var html=require(4),TITLE="nodeschool berlin";module.exports=view;

},{"30":30,"4":4}]},{},[1]);
