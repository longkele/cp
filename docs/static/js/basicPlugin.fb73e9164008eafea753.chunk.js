(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(n,t,e){var r=e(80),i=e(103),o=e(104),c=Object.defineProperty;t.f=e(85)?Object.defineProperty:function(n,t,e){if(r(n),t=o(t,!0),r(e),i)try{return c(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},101:function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},102:function(n,t,e){"use strict";var r=e(80);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},103:function(n,t,e){n.exports=!e(85)&&!e(84)(function(){return 7!=Object.defineProperty(e(114)("div"),"a",{get:function(){return 7}}).a})},104:function(n,t,e){var r=e(82);n.exports=function(n,t){if(!r(n))return n;var e,i;if(t&&"function"==typeof(e=n.toString)&&!r(i=e.call(n)))return i;if("function"==typeof(e=n.valueOf)&&!r(i=e.call(n)))return i;if(!t&&"function"==typeof(e=n.toString)&&!r(i=e.call(n)))return i;throw TypeError("Can't convert object to primitive value")}},105:function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},106:function(n,t,e){var r=e(99);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)}}return function(){return n.apply(t,arguments)}}},107:function(n,t,e){var r=e(82),i=e(94),o=e(83)("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[o])?!!t:"RegExp"==i(n))}},108:function(n,t,e){var r=e(86);n.exports=function(n){return Object(r(n))}},109:function(n,t,e){var r=e(87),i=e(86);n.exports=function(n){return function(t,e){var o,c,u=String(i(t)),l=r(e),a=u.length;return l<0||l>=a?n?"":void 0:(o=u.charCodeAt(l))<55296||o>56319||l+1===a||(c=u.charCodeAt(l+1))<56320||c>57343?n?u.charAt(l):o:n?u.slice(l,l+2):c-56320+(o-55296<<10)+65536}}},110:function(n,t,e){var r=e(94),i=e(83)("toStringTag"),o="Arguments"==r(function(){return arguments}());n.exports=function(n){var t,e,c;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(n){}}(t=Object(n),i))?e:o?r(t):"Object"==(c=r(t))&&"function"==typeof t.callee?"Arguments":c}},111:function(n,t){n.exports=!1},112:function(n,t,e){"use strict";var r=e(89);e(113)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},113:function(n,t,e){var r=e(81),i=e(88),o=e(90),c=e(98),u=e(106),l=function(n,t,e){var a,s,f,p,v=n&l.F,g=n&l.G,h=n&l.S,d=n&l.P,x=n&l.B,y=g?r:h?r[t]||(r[t]={}):(r[t]||{}).prototype,_=g?i:i[t]||(i[t]={}),m=_.prototype||(_.prototype={});for(a in g&&(e=t),e)f=((s=!v&&y&&void 0!==y[a])?y:e)[a],p=x&&s?u(f,r):d&&"function"==typeof f?u(Function.call,f):f,y&&c(y,a,f,n&l.U),_[a]!=f&&o(_,a,p),d&&m[a]!=f&&(m[a]=f)};r.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,n.exports=l},114:function(n,t,e){var r=e(82),i=e(81).document,o=r(i)&&r(i.createElement);n.exports=function(n){return o?i.createElement(n):{}}},115:function(n,t,e){n.exports=e(95)("native-function-to-string",Function.toString)},116:function(n,t,e){var r=e(80),i=e(99),o=e(83)("species");n.exports=function(n,t){var e,c=r(n).constructor;return void 0===c||null==(e=r(c)[o])?t:i(e)}},117:function(n,t,e){"use strict";var r=e(80),i=e(108),o=e(91),c=e(87),u=e(92),l=e(93),a=Math.max,s=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;e(97)("replace",2,function(n,t,e,g){return[function(r,i){var o=n(this),c=null==r?void 0:r[t];return void 0!==c?c.call(r,o,i):e.call(String(o),r,i)},function(n,t){var i=g(e,n,this,t);if(i.done)return i.value;var f=r(n),p=String(this),v="function"==typeof t;v||(t=String(t));var d=f.global;if(d){var x=f.unicode;f.lastIndex=0}for(var y=[];;){var _=l(f,p);if(null===_)break;if(y.push(_),!d)break;""===String(_[0])&&(f.lastIndex=u(p,o(f.lastIndex),x))}for(var m,b="",w=0,S=0;S<y.length;S++){_=y[S];for(var E=String(_[0]),j=a(s(c(_.index),p.length),0),A=[],R=1;R<_.length;R++)A.push(void 0===(m=_[R])?m:String(m));var k=_.groups;if(v){var I=[E].concat(A,j,p);void 0!==k&&I.push(k);var M=String(t.apply(void 0,I))}else M=h(E,p,j,A,k,t);j>=w&&(b+=p.slice(w,j)+M,w=j+E.length)}return b+p.slice(w)}];function h(n,t,r,o,c,u){var l=r+n.length,a=o.length,s=v;return void 0!==c&&(c=i(c),s=p),e.call(u,s,function(e,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":u=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>a){var p=f(s/10);return 0===p?e:p<=a?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):e}u=o[s-1]}return void 0===u?"":u})}})},118:function(n,t,e){"use strict";var r=e(107),i=e(80),o=e(116),c=e(92),u=e(91),l=e(93),a=e(89),s=e(84),f=Math.min,p=[].push,v=!s(function(){RegExp(4294967295,"y")});e(97)("split",2,function(n,t,e,s){var g;return g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(n,t){var i=String(this);if(void 0===n&&0===t)return[];if(!r(n))return e.call(i,n,t);for(var o,c,u,l=[],s=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),f=0,v=void 0===t?4294967295:t>>>0,g=new RegExp(n.source,s+"g");(o=a.call(g,i))&&!((c=g.lastIndex)>f&&(l.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&p.apply(l,o.slice(1)),u=o[0].length,f=c,l.length>=v));)g.lastIndex===o.index&&g.lastIndex++;return f===i.length?!u&&g.test("")||l.push(""):l.push(i.slice(f)),l.length>v?l.slice(0,v):l}:"0".split(void 0,0).length?function(n,t){return void 0===n&&0===t?[]:e.call(this,n,t)}:e,[function(e,r){var i=n(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,r):g.call(String(i),e,r)},function(n,t){var r=s(g,n,this,t,g!==e);if(r.done)return r.value;var a=i(n),p=String(this),h=o(a,RegExp),d=a.unicode,x=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(v?"y":"g"),y=new h(v?a:"^(?:"+a.source+")",x),_=void 0===t?4294967295:t>>>0;if(0===_)return[];if(0===p.length)return null===l(y,p)?[p]:[];for(var m=0,b=0,w=[];b<p.length;){y.lastIndex=v?b:0;var S,E=l(y,v?p:p.slice(b));if(null===E||(S=f(u(y.lastIndex+(v?0:b)),p.length))===m)b=c(p,b,d);else{if(w.push(p.slice(m,b)),w.length===_)return w;for(var j=1;j<=E.length-1;j++)if(w.push(E[j]),w.length===_)return w;b=m=S}}return w.push(p.slice(m)),w}]})},131:function(n,t,e){var r=e(185);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(10).default)("5f6dde64",r,!0,{})},184:function(n,t,e){"use strict";var r=e(131);e.n(r).a},185:function(n,t,e){(n.exports=e(9)(!1)).push([n.i,".img-list[data-v-79ec2700] {\n  margin: 20px auto;\n}\n.img-list ul[data-v-79ec2700] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.img-list ul li[data-v-79ec2700] {\n  margin: 0 50px;\n  text-align: center;\n}\n.img-list ul li img[data-v-79ec2700] {\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.img-list ul li span[data-v-79ec2700] {\n  display: inline-block;\n  line-height: 30px;\n  font-size: 12px;\n}\n",""])},213:function(n,t,e){"use strict";e.r(t);var r=e(121),i=e(120),o=e(119),c={components:{iArticle:r.a,inAnchor:i.a},data:function(){return{code:o.a}}},u=(e(184),e(1)),l=Object(u.a)(c,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("i-article",[e("article",[e("h1",[n._v("Basic Plugin")]),n._v(" "),e("p",[n._v("本文介绍"),e("code",[e("strong",[n._v("CP")])]),n._v("的主要代码库"),e("code",[e("strong",[n._v("vue-cli-plugin-cp")])]),n._v("。主要包含：")]),n._v(" "),e("ul",[e("li",[n._v("在模板复用中，"),e("code",[n._v("vue-cli-plugin-cp")]),n._v("要解决哪些问题。")]),n._v(" "),e("li",[n._v("在模板复用中，"),e("code",[n._v("vue-cli-plugin-cp")]),n._v("如何解决这些问题。")]),n._v(" "),e("li",[e("code",[n._v("vue-cli-plugin-cp")]),n._v("的代码实现。")])]),n._v(" "),e("inAnchor",{attrs:{title:"模板复用中有哪些技术问题",h2:""}}),n._v(" "),e("p",[n._v("模板复用中有哪些技术问题")]),n._v(" "),e("inAnchor",{attrs:{title:"vue-cli-plugin-cp如何解决模板复用的问题",h2:""}}),n._v(" "),e("p",[n._v("vue-cli-plugin-cp如何解决模板复用的问题")]),n._v(" "),e("inAnchor",{attrs:{title:"vue-cli-plugin-cp的代码实现",h2:""}}),n._v(" "),e("p",[n._v("vue-cli-plugin-cp的代码实现")])],1)])},[],!1,null,"79ec2700",null);t.default=l.exports},80:function(n,t,e){var r=e(82);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},81:function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},82:function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},83:function(n,t,e){var r=e(95)("wks"),i=e(96),o=e(81).Symbol,c="function"==typeof o;(n.exports=function(n){return r[n]||(r[n]=c&&o[n]||(c?o:i)("Symbol."+n))}).store=r},84:function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},85:function(n,t,e){n.exports=!e(84)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},86:function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},87:function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},88:function(n,t){var e=n.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},89:function(n,t,e){"use strict";var r,i,o=e(102),c=RegExp.prototype.exec,u=String.prototype.replace,l=c,a=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),s=void 0!==/()??/.exec("")[1];(a||s)&&(l=function(n){var t,e,r,i,l=this;return s&&(e=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),a&&(t=l.lastIndex),r=c.call(l,n),a&&r&&(l.lastIndex=l.global?r.index+r[0].length:t),s&&r&&r.length>1&&u.call(r[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),n.exports=l},90:function(n,t,e){var r=e(100),i=e(105);n.exports=e(85)?function(n,t,e){return r.f(n,t,i(1,e))}:function(n,t,e){return n[t]=e,n}},91:function(n,t,e){var r=e(87),i=Math.min;n.exports=function(n){return n>0?i(r(n),9007199254740991):0}},92:function(n,t,e){"use strict";var r=e(109)(!0);n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},93:function(n,t,e){"use strict";var r=e(110),i=RegExp.prototype.exec;n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var o=e.call(n,t);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(n))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(n,t)}},94:function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},95:function(n,t,e){var r=e(88),i=e(81),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(n.exports=function(n,t){return o[n]||(o[n]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:e(111)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},96:function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},97:function(n,t,e){"use strict";e(112);var r=e(98),i=e(90),o=e(84),c=e(86),u=e(83),l=e(89),a=u("species"),s=!o(function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")}),f=function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();n.exports=function(n,t,e){var p=u(n),v=!o(function(){var t={};return t[p]=function(){return 7},7!=""[n](t)}),g=v?!o(function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===n&&(e.constructor={},e.constructor[a]=function(){return e}),e[p](""),!t}):void 0;if(!v||!g||"replace"===n&&!s||"split"===n&&!f){var h=/./[p],d=e(c,p,""[n],function(n,t,e,r,i){return t.exec===l?v&&!i?{done:!0,value:h.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}}),x=d[0],y=d[1];r(String.prototype,n,x),i(RegExp.prototype,p,2==t?function(n,t){return y.call(n,this,t)}:function(n){return y.call(n,this)})}}},98:function(n,t,e){var r=e(81),i=e(90),o=e(101),c=e(96)("src"),u=e(115),l=(""+u).split("toString");e(88).inspectSource=function(n){return u.call(n)},(n.exports=function(n,t,e,u){var a="function"==typeof e;a&&(o(e,"name")||i(e,"name",t)),n[t]!==e&&(a&&(o(e,c)||i(e,c,n[t]?""+n[t]:l.join(String(t)))),n===r?n[t]=e:u?n[t]?n[t]=e:i(n,t,e):(delete n[t],i(n,t,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},99:function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}}}]);