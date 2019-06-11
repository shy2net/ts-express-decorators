(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{239:function(t,s,n){t.exports=n.p+"assets/img/middleware-call-sequence.f9adb834.png"},804:function(t,s,n){"use strict";n.r(s);var e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"middleware-call-sequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware-call-sequences","aria-hidden":"true"}},[this._v("#")]),this._v(" Middleware call sequences")])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{staticStyle:{"max-width":"400px",padding:"20px"},attrs:{src:n(239)}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Note: The middlewares represented in the Endpoint (0-n) box will be replayed as many times as it has endpoint that match\nthe url of the request.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("* Render is called only when a the @Render o @ResponseView decorator is used on the endpoint.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("** SendResponse middleware send a response only when a data is return by the endpoint method.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UseAfter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UseBefore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseAfter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwCtrlAfter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwCtrlBefore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwCtrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCtrl")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseAfter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwAfter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mdlw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwBefore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("endpointA")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EndpointA"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("endpointB")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EndpointB"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("Middlewares")]),t._v(" added in ServerLoader (logger, express middleware, etc...),")]),t._v(" "),n("li",[n("strong",[t._v("MdlwCtrlBefore")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("MdlwCtrl")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("MdlwBefore")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("MyCtrl.endpointA")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("MdlwAfter")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("SendResponse")]),t._v(", (but nothing data is returned by the endpointA)")]),t._v(" "),n("li",[n("strong",[t._v("MdlwCtrl")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("MyCtrl.endpointB")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("MdlwAfter")]),t._v(",")]),t._v(" "),n("li",[n("strong",[t._v("SendResponse")]),t._v(", send a response because endpointB return a data,")]),t._v(" "),n("li",[n("strong",[t._v("MdlwCtrlAfter")]),t._v(", but this middleware will not be called because a response is sent.")]),t._v(" "),n("li",[n("strong",[t._v("Middleware")]),t._v(" added in ServerLoader (not called too).")])])}],a=n(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("As you see in the previous section, a middleware can be use on different context:")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/docs/server-loader.html"}},[t._v("ServerLoader")]),t._v(",")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/docs/controllers.html"}},[t._v("Controller")]),t._v(",")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/docs/controllers.html"}},[t._v("Endpoint")]),t._v(".")],1)]),t._v(" "),n("p",[t._v("Middleware associated to a controller or endpoint as a same constraint that an endpoint.\nIt'll be played only when the url request match with the path associated to the controller and his endpoint method.")]),t._v(" "),n("p",[t._v("When a request is sent to the server all middlewares added in the "),n("router-link",{attrs:{to:"/docs/server-loader.html"}},[t._v("ServerLoader")]),t._v(", "),n("router-link",{attrs:{to:"/docs/controllers.html"}},[t._v("Controller")]),t._v(" or Endpoint with decorators\nwill be called while a response isn't sent by one of the middleware in the stack.")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("For example:")]),t._v(" "),t._m(5),n("p",[t._v("According to the call sequence scheme, the stack will be there:")]),t._v(" "),t._m(6)])},e,!1,null,null,null);s.default=r.exports}}]);