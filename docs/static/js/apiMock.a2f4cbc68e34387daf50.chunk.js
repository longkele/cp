(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{195:function(n,e,t){var a=t(209);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(15).default)("3ea83e81",a,!0,{})},196:function(n,e,t){var a=t(211);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(15).default)("81bb6994",a,!0,{})},208:function(n,e,t){"use strict";var a=t(195);t.n(a).a},209:function(n,e,t){(n.exports=t(14)(!1)).push([n.i,"\n.i-code[data-v-19189fba] {\n    margin: 0 0 10px 0;\n}\ndiv[data-v-19189fba]{\n     position: relative;\n     font-size: 14px;\n}\nspan.copy[data-v-19189fba], span.scale[data-v-19189fba], span.open-fiddle[data-v-19189fba]{\n     border-radius: 0 0 3px 3px;\n     padding: 2px 5px;\n     position: absolute;\n     top: 5px;\n     right: 0;\n     color: #b2b2b2;\n     cursor: pointer;\n}\nspan.scale[data-v-19189fba]{\n     right: 25px;\n}\nspan.open-fiddle[data-v-19189fba]{\n     right: 50px;\n}\n.bg + span.copy[data-v-19189fba]{\n     right: 5px;\n}\nspan.copy[data-v-19189fba]:hover, span.scale[data-v-19189fba]:hover, span.open-fiddle[data-v-19189fba]:hover{\n     color: #5c6b77;\n}\n\n",""])},210:function(n,e,t){"use strict";var a=t(196);t.n(a).a},211:function(n,e,t){(n.exports=t(14)(!1)).push([n.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},212:function(n,e,t){"use strict";t(215),t(216),t(214),t(201);var a=t(217),o=t.n(a),i=(t(218),t(219)),c=t.n(i),s={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data:function(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},mounted:function(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,o.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,o.a.highlightBlock(this.$refs.code2);var n=this.$parent.$parent.$parent;"Demo"===n.$options.name&&(this.title=n.title)},methods:{clip:function(){var n=this,e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new c.a(".copy",{text:function(){return e}});t.on("success",function(e){e.clearSelection(),t.destroy(),n.copied=!0,"zh-CN"===n.docLang?n.$Message.success("代码已复制到剪贴板"):n.$Message.success("Code copied"),setTimeout(function(){n.copied=!1},2e3)})},scale:function(){this.openScale=!0},getSource:function(n,e){var t=new RegExp("<"+e+"[^>]*>"),a=n.match(t);return a?(a=a[0],n.slice(n.indexOf(a)+a.length,n.lastIndexOf("</"+e+">"))):""},openFiddle:function(){}}},l=(t(208),t(210),t(0)),p=Object(l.a)(s,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"i-code"},[t("pre",{class:{bg:n.bg}},[t("code",{ref:"code",class:n.language},[n._t("default")],2)]),n._v(" "),t("span",{staticClass:"scale",on:{click:n.scale}},[t("Tooltip",{attrs:{content:n.$t("index.code_fullscreen"),placement:"top",transfer:""}},[t("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),n._v(" "),t("span",{staticClass:"copy",on:{click:n.clip}},[t("Tooltip",{attrs:{content:n.$t("index.code_copy"),placement:"top",transfer:""}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!n.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),n._v(" "),t("Icon",{directives:[{name:"show",rawName:"v-show",value:n.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),n._v(" "),t("Modal",{attrs:{"class-name":"code-scale-modal",title:n.title,width:"65"},model:{value:n.openScale,callback:function(e){n.openScale=e},expression:"openScale"}},[t("pre",{class:{bg:n.bg}},[n._v("            "),t("code",{ref:"code2",class:n.language}),n._v("\n        ")])])],1)},[],!1,null,"19189fba",null);e.a=p.exports},240:function(n,e,t){var a=t(311);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(15).default)("6157812c",a,!0,{})},310:function(n,e,t){"use strict";var a=t(240);t.n(a).a},311:function(n,e,t){(n.exports=t(14)(!1)).push([n.i,".img-list[data-v-5a654c4d] {\n  margin: 20px auto;\n}\n.img-list ul[data-v-5a654c4d] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.img-list ul li[data-v-5a654c4d] {\n  margin: 0 50px;\n  text-align: center;\n}\n.img-list ul li img[data-v-5a654c4d] {\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.img-list ul li span[data-v-5a654c4d] {\n  display: inline-block;\n  line-height: 30px;\n  font-size: 12px;\n}\n",""])},339:function(n,e,t){"use strict";t.r(e);var a=t(206),o=t(207),i=t(212),c={components:{iArticle:a.a,inAnchor:o.a,iCode:i.a}},s=(t(310),t(0)),l=Object(s.a)(c,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("i-article",[t("article",[t("h1",[n._v("接口模拟")]),n._v(" "),t("p",[n._v("在项目的开发过程中，经常需要对接口进行模拟。CP提供了一些解决这些问题的方案。")]),n._v(" "),t("inAnchor",{attrs:{title:"YApi",h2:""}}),n._v(" "),t("p",[n._v("YApi旨在为开发、产品、测试人员提供更优雅的接口管理服务。可以帮助开发者轻松创建、发布、维护 API")]),n._v(" "),t("p",[n._v("接入方式待补充")]),n._v(" "),t("inAnchor",{attrs:{title:"apim-tools(推荐百度内部使用)",h2:""}}),n._v(" "),t("p",[n._v("apim-tools是百度开源的一套用来解决前端开发中管理mock数据和设置接口代理的工具。")]),n._v(" "),t("p",[n._v("接入方法如下:")]),n._v(" "),t("ul",[t("li",[n._v("\n                    （1）、脚手架插件安装\n                    "),t("strong",[t("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-baidu"}},[n._v("vue-cli-plugin-cp")])])]),n._v(" "),t("li",[n._v("（2）、登录到百度内部apim网站注册项目；")]),n._v(" "),t("li",[n._v("（3）、在项目根目录下找到vue.config.js文件，然后将devServer.before方法中的schemaToken替换为自己注册的token。；")])]),n._v(" "),t("p",[n._v("相关代码如下:")]),n._v(" "),t("i-code",[t("pre",[n._v("\n// 项目中安装apim-tools\nnpm i apim-tools --save-dev\n\n// vue.config.js进行接入\nbefore(app) {\n    // do fancy stuff\n    const apimMw = apimTools.express({\n        port: 9000,\n        // 设置存储的 mock 相关数据存储的根目录\n        root: path.resolve(__dirname + '/.mock'),\n        // 项目 schema token 具体到 apim 平台查看\n        schemaToken: '注册后获取的项目token',\n        // 是否启动时候立刻自动同步\n        startAutoSync: true\n    });\n    app.use(apimMw);\n}\n                ")])])],1)])},[],!1,null,"5a654c4d",null);e.default=l.exports}}]);