!function(){function e(t,n){n=n||d;var r;return m?(r=window.requestIdleCallback(function(r){if(r.timeRemaining()<=10&&!r.didTimeout)return e(t,n);t(r)},n),window.cancelIdleCallback.bind(window,r)):h?(r=setTimeout(t,0),clearTimeout.bind(window,r)):void 0}function t(e){if(!(this instanceof t))return new t(e);this._name=e||"nanobus",this._starListeners=[],this._listeners={}}function n(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}function r(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(N(e,t),function(e,t){for(var n,i,a,s,c=0,l=0;n=t.childNodes[l],i=e.childNodes[l-c],n||i;l++)if(i)if(n)if(o(i,n))(a=r(i,n))!==n&&(t.replaceChild(a,n),c++);else{s=null;for(var u=l;u<t.childNodes.length;u++)if(o(t.childNodes[u],i)){s=t.childNodes[u];break}s?((a=r(i,s))!==s&&c++,t.insertBefore(a,n)):i.id||n.id?(t.insertBefore(i,n),c++):(a=r(i,n))!==n&&(t.replaceChild(a,n),c++)}else t.appendChild(i),c++;else t.removeChild(n),l--}(e,t),t):null:e}function o(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&e.type===T&&e.nodeValue===t.nodeValue}function i(){if(!(this instanceof i))return new i;this.trie={nodes:{}}}function a(e){function t(e){for(var t=new Array(arguments.length),o=1;o<t.length;o++)t[o]=arguments[o];var i=r.match(e);if(i&&i.cb){t[0]=i.params;var a=i.cb;return a.apply(a,t)}var s=r.match(n);if(s&&s.cb){t[0]=s.params;var c=s.cb;return c.apply(c,t)}throw new Error("route '"+e+"' did not match")}if(!(this instanceof a))return new a(e);var n=(e||"").replace(/^\//,""),r=P();return t._trie=r,t.emit=t,t.on=function(e,n){return e=e||"/",n.route=e,n&&n._wayfarer&&n._trie?r.mount(e,n._trie.trie):r.create(e).cb=n,t},t._wayfarer=!0,t}function s(e){if(!(this instanceof s))return new s(e);e=e||{};var t=this;this._events={DOMCONTENTLOADED:"DOMContentLoaded",DOMTITLECHANGE:"DOMTitleChange",REPLACESTATE:"replaceState",PUSHSTATE:"pushState",NAVIGATE:"navigate",POPSTATE:"popState",RENDER:"render"},this._historyEnabled=void 0===e.history||e.history,this._hrefEnabled=void 0===e.href||e.href,this._hasWindow="undefined"!=typeof window,this._createLocation=E,this._loaded=!1,this._tree=null,this.router=U({curry:!0}),this.emitter=w("choo.emit"),this.state={events:this._events},this._hasWindow&&(this.state.title=document.title),this.emitter.prependListener(this._events.DOMTITLECHANGE,function(e){t.state.title=e,t._hasWindow&&(document.title=e)})}var c,l=function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];if(Array.isArray(o))e(t,o);else{if(("number"==typeof o||"boolean"==typeof o||o instanceof Date||o instanceof RegExp)&&(o=o.toString()),"string"==typeof o){if(/^[\n\r\s]+$/.test(o))continue;if(t.lastChild&&"#text"===t.lastChild.nodeName){t.lastChild.nodeValue+=o;continue}o=document.createTextNode(o)}o&&o.nodeType&&t.appendChild(o)}}},u=function(e){var t=document.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);document.addEventListener("DOMContentLoaded",function(){e()})},d={},h="undefined"!=typeof window,m=h&&window.requestIdleCallback,f=e,p=!0;try{c=window.performance,p="true"===window.localStorage.DISABLE_NANOTIMING||!c.mark}catch(e){}var v=function(e){function t(t){var o="end-"+n+"-"+e;c.mark(o),f(function(){var i=e+" ["+n+"]";c.measure(i,r,o),c.clearMarks(r),c.clearMarks(o),t&&t(e)})}if(p)return function(e){e&&f(e)};var n=(100*c.now()).toFixed(),r="start-"+n+"-"+e;return c.mark(r),t.uuid=n,t},b=function(e,t,n){var r,o=e.length;if(!(t>=o||0===n)){var i=o-(n=t+n>o?o-t:n);for(r=t;r<i;++r)e[r]=e[r+n];e.length=i}},w={};w=t,t.prototype.emit=function(e,t){var n=v(this._name+"('"+e+"')"),r=this._listeners[e];return r&&r.length>0&&this._emit(this._listeners[e],t),this._starListeners.length>0&&this._emit(this._starListeners,e,t,n.uuid),n(),this},t.prototype.on=t.prototype.addListener=function(e,t){return"*"===e?this._starListeners.push(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)),this},t.prototype.prependListener=function(e,t){return"*"===e?this._starListeners.unshift(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].unshift(t)),this},t.prototype.once=function(e,t){function n(){t.apply(r,arguments),r.removeListener(e,n)}var r=this;return this.on(e,n),this},t.prototype.prependOnceListener=function(e,t){function n(){t.apply(r,arguments),r.removeListener(e,n)}var r=this;return this.prependListener(e,n),this},t.prototype.removeListener=function(e,t){function n(e,t){if(e){var n=e.indexOf(t);return-1!==n?(b(e,n,1),!0):void 0}}return"*"===e?(this._starListeners=this._starListeners.slice(),n(this._starListeners,t)):(void 0!==this._listeners[e]&&(this._listeners[e]=this._listeners[e].slice()),n(this._listeners[e],t))},t.prototype.removeAllListeners=function(e){return e?"*"===e?this._starListeners=[]:this._listeners[e]=[]:(this._starListeners=[],this._listeners={}),this},t.prototype.listeners=function(e){var t="*"!==e?this._listeners[e]:this._starListeners,n=[];if(t)for(var r=t.length,o=0;o<r;o++)n.push(t[o]);return n},t.prototype._emit=function(e,t,n,r){if(void 0!==e){void 0===n&&(n=t,t=null);for(var o=e.length,i=0;i<o;i++){var a=e[i];t?void 0!==r?a(t,n,r):a(t,n):a(n)}}};var g=/[noopener|noreferrer] [noopener|noreferrer]/,y=/^[\w-_]+:/,E=function(){return window.location.pathname.replace(/\/$/,"")+window.location.hash.replace(/^#/,"/")},A=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"],_=A.length,N=function(e,t){var r=e.nodeType,o=e.nodeName;1===r&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,c=r.length-1;c>=0;--c)s=r[c],a=s.name,o=s.namespaceURI,i=s.value,o?(a=s.localName||a,t.getAttributeNS(o,a)!==i&&t.setAttributeNS(o,a,i)):t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var l=n.length-1;l>=0;--l)!1!==(s=n[l]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),3!==r&&8!==r||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var r=e.value,o=t.value;n(e,t,"checked"),n(e,t,"disabled"),r!==o&&(t.setAttribute("value",r),t.value=r),"null"===r&&(t.value="",t.removeAttribute("value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=r):t.removeAttribute("value")}(e,t):"OPTION"===o?function(e,t){n(e,t,"selected")}(e,t):"TEXTAREA"===o&&function(e,t){var n=e.value;if(n!==t.value&&(t.value=n),t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t),function(e,t){for(var n=0;n<_;n++){var r=A[n];e[r]?t[r]=e[r]:t[r]&&(t[r]=void 0)}}(e,t)},T=3,C=function(e,t){return r(t,e)},L=new RegExp("([^?=&]+)(=([^&]*))?","g"),S=function(e){var t={};return e.replace(/^.*\?/,"").replace(L,function(e,n,r,o){t[window.decodeURIComponent(n)]=window.decodeURIComponent(o)}),t},k=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)O.call(n,r)&&(e[r]=n[r])}return e},O=Object.prototype.hasOwnProperty,I=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)x.call(n,r)&&(e[r]=n[r])}return e},x=Object.prototype.hasOwnProperty,P={};P=i,i.prototype.create=function(e){function t(e,r){var o=n.hasOwnProperty(e)&&n[e];if(!1===o)return r;var i=null;return/^:|^\*/.test(o)?(r.nodes.hasOwnProperty("$$")?i=r.nodes.$$:(i={nodes:{}},r.nodes.$$=i),"*"===o[0]&&(r.wildcard=!0),r.name=o.replace(/^:|^\*/,"")):r.nodes.hasOwnProperty(o)?i=r.nodes[o]:(i={nodes:{}},r.nodes[o]=i),t(e+1,i)}var n=e.replace(/^\//,"").split("/");return t(0,this.trie)},i.prototype.match=function(e){function t(e,o){if(void 0!==o){var i=n[e];if(void 0===i)return o;if(o.nodes.hasOwnProperty(i))return t(e+1,o.nodes[i]);if(o.name){try{r[o.name]=decodeURIComponent(i)}catch(n){return t(e,void 0)}return t(e+1,o.nodes.$$)}if(o.wildcard){try{r.wildcard=decodeURIComponent(n.slice(e).join("/"))}catch(n){return t(e,void 0)}return o.nodes.$$}return t(e+1)}}var n=e.replace(/^\//,"").split("/"),r={},o=t(0,this.trie);if(o)return o=k(o),o.params=r,o},i.prototype.mount=function(e,t){var n=e.replace(/^\//,"").split("/"),r=null,o=null;if(1===n.length)o=n[0],r=this.create(o);else{var i=n.splice(0,n.length-1).join("/");o=n[0],r=this.create(i)}I(r.nodes,t.nodes),t.name&&(r.name=t.name),r.nodes[""]&&(Object.keys(r.nodes[""]).forEach(function(e){"nodes"!==e&&(r[e]=r.nodes[""][e])}),I(r.nodes,r.nodes[""].nodes),delete r.nodes[""].nodes)};var R=a,D=/file:\/\//.test("object"==typeof window&&window.location&&window.location.origin),V=new RegExp("^(file://|/)(.*.html?/?)?"),$=new RegExp("^(http(s)?(://))?(www.)?[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"),M=new RegExp("#"),G=new RegExp("[?].*$"),U=function(e){function t(e){return r?(e=function(e,t){return(e=D?e.replace(V,""):e.replace($,"")).replace(G,"").replace(M,"/")}(e))===i?o():(i=e,(o=n(e))()):n(e)}var n=R((e=e||{}).default||"/404"),r=e.curry||!1,o=null,i=null;return t.router=n,t.on=function(e,t){e=e.replace(/^[#/]/,""),n.on(e,t)},t},W=s,j={};s.prototype.route=function(e,t){var n=this;this.router.on(e,function(r){return function(){n.state.params=r,n.state.route=e;var o=v("choo.route('"+e+"')"),i=t(n.state,function(e,t){n.emitter.emit(e,t)});return o(),i}})},s.prototype.use=function(e){var t=v("choo.use");e(this.state,this.emitter,this),t()},s.prototype.start=function(){var e=this;return this._historyEnabled&&(this.emitter.prependListener(this._events.NAVIGATE,function(){e.state.query=S(window.location.search),e._loaded&&(e.emitter.emit(e._events.RENDER),setTimeout(function(e,t){if(e)try{var n=document.querySelector(e);n&&n.scrollIntoView(t)}catch(e){}}.bind(null,window.location.hash),0))}),this.emitter.prependListener(this._events.POPSTATE,function(){e.emitter.emit(e._events.NAVIGATE)}),this.emitter.prependListener(this._events.PUSHSTATE,function(t){window.history.pushState(j,null,t),e.emitter.emit(e._events.NAVIGATE)}),this.emitter.prependListener(this._events.REPLACESTATE,function(t){window.history.replaceState(j,null,t),e.emitter.emit(e._events.NAVIGATE)}),window.onpopstate=function(){e.emitter.emit(e._events.POPSTATE)},e._hrefEnabled&&function(e,t){t=t||window.document,window.addEventListener("click",function(n){if(!(n.button&&0!==n.button||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.defaultPrevented)){var r=function e(n){if(n&&n!==t)return"a"!==n.localName||void 0===n.href?e(n.parentNode):n}(n.target);r&&(window.location.origin!==r.origin||r.hasAttribute("download")||"_blank"===r.getAttribute("target")&&g.test(r.getAttribute("rel"))||y.test(r.getAttribute("href"))||(n.preventDefault(),e(r)))}})}(function(t){var n=t.href;n!==window.location.href&&e.emitter.emit(e._events.PUSHSTATE,n)})),this.state.href=this._createLocation(),this._tree=this.router(this.state.href),this.state.query=S(window.location.search),this.emitter.prependListener(e._events.RENDER,function(e,t){t||(t=window.requestAnimationFrame);var n=!1,r=null;return function(){null!==r||n||(n=!0,t(function(){n=!1;for(var t=r.length,o=new Array(t),i=0;i<t;i++)o[i]=r[i];e.apply(e,o),r=null})),r=arguments}}(function(){var t=v("choo.render");e.state.href=e._createLocation();var n=e.router(e.state.href),r=v("choo.morph");C(e._tree,n),r(),t()})),u(function(){e.emitter.emit(e._events.DOMCONTENTLOADED),e._loaded=!0}),this._tree},s.prototype.mount=function(e){var t=this;u(function(){var n=v("choo.render"),r=t.start();t._tree=document.querySelector(e);var o=v("choo.morph");C(t._tree,r),o(),n()})},s.prototype.toString=function(e,t){return this.state=k(this.state,t||{}),this.state.href=e.replace(/\?*.$/,""),this.state.query=S(e),this.router(e).toString()};var q="nodeschool berlin - code of conduct",z={exports:{}},H=W();H.route("/test/",function(e,t){return"nodeschool berlin"!==e.title&&t(e.events.DOMTITLECHANGE,"nodeschool berlin"),function(){var e=l,t=document.createElement("body");t.setAttribute("class","sans-serif bg-light-yellow");var n=document.createElement("div");n.setAttribute("class","tc pv4 center");var r=document.createElement("img");r.setAttribute("src","assets/logo.png"),r.setAttribute("alt","logo"),r.setAttribute("class","w5");var o=document.createElement("h1");o.setAttribute("class","b f1 f-headline-ns db mt0 mb0"),e(o,["nodeschool"]);var i=document.createElement("h2");i.setAttribute("class","f2 f1-ns mt0"),e(i,["berlin"]);var a=document.createElement("div");a.setAttribute("class","f3"),e(a,["Friday November 10th @ Mozilla Berlin"]);var s=document.createElement("a");s.setAttribute("href","https://ti.to/nodeschool-berlin/25"),s.setAttribute("class","f3 link dim ba bw1 ph3 pv2 mv3 mb2 dib black"),e(s,["Sign up here"]),e(n,["\n        ",r,"\n        ",o,"\n        ",i,"\n        ",a,"\n        ",s,"\n      "]);var c=document.createElement("div");c.setAttribute("class","cf mw8 center pb5");var u=document.createElement("div");u.setAttribute("class","fl ph3 w-100 w-33-ns tc");var d=document.createElement("h3");e(d,["Learn Coding"]);var h=document.createElement("a");h.setAttribute("href","https://nodejs.org/"),e(h,["Node.js"]),e(u,["\n          ",d,"\n          Join us and learn coding with us. You are going to learn the basics of ",h,". It's a plus if you know some JavaScript beforehand, but if not we can help you out.\n        "]);var m=document.createElement("div");m.setAttribute("class","fl ph3 w-100 w-33-ns tc");var f=document.createElement("h3");e(f,["Self-Guided"]);var p=document.createElement("a");p.setAttribute("href","https://nodeschool.io"),e(p,["nodeschool.io"]),e(m,["\n          ",f,"\n          You will go through a set of self-paced challenges. No boring talks. All challenges are Open Source and available online on ",p,". This means you can continue learning after the event.\n        "]);var v=document.createElement("div");v.setAttribute("class","fl ph3 w-100 w-33-ns tc");var b=document.createElement("h3");e(b,["For Everyone"]);var w=document.createElement("a");return w.setAttribute("href","/berlin/coc"),e(w,["Code of Conduct"]),e(v,["\n          ",b,"\n          We think coding is awesome and everyone should feel welcome at our event. This includes that we are expecting all participants to be awesome to each other and respect the ",w,".\n        "]),e(c,["\n        ",u,"\n        ",m,"\n        ",v,"\n      "]),e(t,["\n      ",n,"\n      ",c,"\n    "]),t}()}),H.route("/test/coc",function(e,t){return e.title!==q&&t(e.events.DOMTITLECHANGE,q),function(){var e=l,t=document.createElement("body");t.setAttribute("class","sans-serif bg-light-yellow");var n=document.createElement("div");n.setAttribute("class","tc pv4 center");var r=document.createElement("h1");r.setAttribute("class","b f1 f-headline-ns db mt0 mb0"),e(r,["nodeschool"]);var o=document.createElement("h2");o.setAttribute("class","f2 f1-ns mt0 mb0"),e(o,["berlin"]),e(n,["\n        ",r,"\n        ",o,"\n      "]);var i=document.createElement("article");i.setAttribute("class","cf mw8 center pb5");var a=document.createElement("h3");a.setAttribute("class","f2"),e(a,["Code of Conduct"]);var s=document.createElement("p");e(s,["All attendees, speakers, sponsors and volunteers at NodeSchool Berlin are required to agree\n        with the following code of conduct. Organizers will enforce this code throughout the event.\n        We are expecting cooperation from all participants to help ensuring a safe environment for everybody."]);var c=document.createElement("p"),u=document.createElement("em");e(u,["tl:dr: Do not harass people. Be awesome to each other."]),e(c,[u]);var d=document.createElement("h4");d.setAttribute("class","f3"),e(d,["Need Help? Contact Finn"]);var h=document.createElement("table"),m=document.createElement("thead"),f=document.createElement("tr"),p=document.createElement("th");p.setAttribute("class","bb b--black-20 pv2 pr2 tl"),e(p,["Contact"]);var v=document.createElement("th");v.setAttribute("class","bb b--black-20 pv2 pr2 tl"),e(v,["Finn Pauls"]),e(f,["\n              ",p,"\n              ",v,"\n            "]),e(m,["\n            ",f,"\n          "]);var b=document.createElement("tbody"),w=document.createElement("tr"),g=document.createElement("td");g.setAttribute("class","bb b--black-20 pv2 pr2"),e(g,["Twitter"]);var y=document.createElement("td");y.setAttribute("class","bb b--black-20 pv2 pr2");var E=document.createElement("a");E.setAttribute("href","https://twitter.com/finnpauls"),e(E,["@finnpauls"]),e(y,[E]),e(w,["\n              ",g,"\n              ",y,"\n            "]);var A=document.createElement("tr"),_=document.createElement("td");_.setAttribute("class","bb b--black-20 pv2 pr2"),e(_,["Email"]);var N=document.createElement("td");N.setAttribute("class","bb b--black-20 pv2 pr2"),e(N,["derfinn[at]gmail.com"]),e(A,["\n              ",_,"\n              ",N,"\n            "]);var T=document.createElement("tr"),C=document.createElement("td");C.setAttribute("class","bb b--black-20 pv2 pr2"),e(C,["Phone"]);var L=document.createElement("td");L.setAttribute("class","bb b--black-20 pv2 pr2"),e(L,["+4915732650702"]),e(T,["\n              ",C,"\n              ",L,"\n            "]),e(b,["\n            ",w,"\n            ",A,"\n            ",T,"\n          "]),e(h,["\n          ",m,"\n          ",b,"\n        "]);var S=document.createElement("h4");S.setAttribute("class","f3"),e(S,["The Quick Version"]);var k=document.createElement("p");e(k,["NodeSchool Berlin is dedicated to providing a harassment-free conference experience for\n        everyone, regardless of gender, sexual orientation, disability, physical appearance, body size,\n        race, or religion. We do not tolerate harassment of participants in any form. Conference\n        participants violating these rules may be sanctioned or expelled from the event at the\n        discretion of the organizers."]);var O=document.createElement("h4");O.setAttribute("class","f3"),e(O,["The Less Quick Version"]);var I=document.createElement("p");e(I,["Harassment includes offensive verbal comments related to gender, sexual orientation,\n        disability, physical appearance, body size, race, religion, sexual images in\n        public spaces, deliberate intimidation, stalking, following, harassing photography\n        or recording, sustained disruption of talks or other events, inappropriate physical\n        contact, and unwelcome sexual attention."]);var x=document.createElement("p");e(x,["Participants asked to stop any harassing behavior are expected to comply immediately."]);var P=document.createElement("p");e(P,["If a participant engages in harassing behavior, the organizers may take any action\n        they deem appropriate, including warning the offender or expulsion from the event."]);var R=document.createElement("p");e(R,["If you are being harassed, notice that someone else is being harassed, or have any\n        other concerns, please conctact an organizer or mentor. We will tell you who are\n        responsible at the beginning of the event. You can also contact Finn directly (info above)."]);var D=document.createElement("p");e(D,["We are happy to help participants contact venue security or local law enforcement,\n        provide escorts, or otherwise assist those experiencing harassment to feel safe.\n        We value your attendance."]);var V=document.createElement("p");e(V,["We expect participants to follow these rules at the event and related social events."]);var $=document.createElement("p"),M=document.createElement("a");return M.setAttribute("href","http://2014.jsconf.eu/code-of-conduct.html"),e(M,["JSConf.eu Code of Conduct"]),e($,["This Code of Conduct was adapted from the ",M,"."]),e(i,["\n        ",a,"\n        ",s,"\n        ",c,"\n        ",d,"\n        ",h,"\n        ",S,"\n        ",k,"\n        ",O,"\n        ",I,"\n        ",x,"\n        ",P,"\n        ",R,"\n        ",D,"\n        ",V,"\n        ",$,"\n        "]),e(t,["\n      ",n,"\n      ",i,"\n      "]),t}()}),H.mount("body"),z=z.exports}();
//# sourceMappingURL=bundle.js.map