"use strict";(self.webpackChunkdelivery=self.webpackChunkdelivery||[]).push([[638],{9638:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i,r,s=t(4165),a=t(5861),o=t(9439),l=t(2791),c=t(168),h=t(6444),u=h.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 110px 50px 110px;\n  & .shop_info {\n    display: flex;\n    & .shop_menu {\n      flex: 1 0 70%;\n      max-height: 60vh;\n    }\n\n    & .noOrder {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    & ul {\n      width: 100%;\n      display: flex;\n\n      justify-content: center;\n      flex-wrap: wrap;\n      gap: 35px;\n      padding: 10px;\n      /* max-width: 1600px; */\n\n      overflow: auto;\n      border: 1px solid var(--second);\n      border-radius: 5px;\n    }\n\n    & .shop_total {\n      display: flex;\n      justify-content: space-evenly;\n      align-items: center;\n      height: 10vh;\n      font-style: normal;\n      font-weight: 600;\n      font-size: 36px;\n      line-height: 22px;\n    }\n  }\n"]))),d=t(9368),p=t(1382),f=t(5671),g=t(3144),m=function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){if(n.constructor!==t.constructor)return!1;var i,r,s;if(Array.isArray(n)){if((i=n.length)!=t.length)return!1;for(r=i;0!==r--;)if(!e(n[r],t[r]))return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if((i=(s=Object.keys(n)).length)!==Object.keys(t).length)return!1;for(r=i;0!==r--;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;for(r=i;0!==r--;){var a=s[r];if(!e(n[a],t[a]))return!1}return!0}return n!==n&&t!==t},v="__googleMapsScriptId";!function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}(r||(r={}));var x,y=function(){function e(n){var t=n.apiKey,i=n.authReferrerPolicy,r=n.channel,s=n.client,a=n.id,o=void 0===a?v:a,l=n.language,c=n.libraries,h=void 0===c?[]:c,u=n.mapIds,d=n.nonce,p=n.region,g=n.retries,x=void 0===g?3:g,y=n.url,b=void 0===y?"https://maps.googleapis.com/maps/api/js":y,w=n.version;if((0,f.Z)(this,e),this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=i,this.channel=r,this.client=s,this.id=o||v,this.language=l,this.libraries=h,this.mapIds=u,this.nonce=d,this.region=p,this.retries=x,this.url=b,this.version=w,e.instance){if(!m(this.options,e.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(e.instance.options)));return e.instance}e.instance=this}return(0,g.Z)(e,[{key:"options",get:function(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}},{key:"status",get:function(){return this.errors.length?r.FAILURE:this.done?r.SUCCESS:this.loading?r.LOADING:r.INITIALIZED}},{key:"failed",get:function(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}},{key:"createUrl",value:function(){var e=this.url;return e+="?callback=".concat(this.CALLBACK),this.apiKey&&(e+="&key=".concat(this.apiKey)),this.channel&&(e+="&channel=".concat(this.channel)),this.client&&(e+="&client=".concat(this.client)),this.libraries.length>0&&(e+="&libraries=".concat(this.libraries.join(","))),this.language&&(e+="&language=".concat(this.language)),this.region&&(e+="&region=".concat(this.region)),this.version&&(e+="&v=".concat(this.version)),this.mapIds&&(e+="&map_ids=".concat(this.mapIds.join(","))),this.authReferrerPolicy&&(e+="&auth_referrer_policy=".concat(this.authReferrerPolicy)),e}},{key:"deleteScript",value:function(){var e=document.getElementById(this.id);e&&e.remove()}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var e=this;return new Promise((function(n,t){e.loadCallback((function(e){e?t(e.error):n(window.google)}))}))}},{key:"loadCallback",value:function(e){this.callbacks.push(e),this.execute()}},{key:"setScript",value:function(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),n=document.createElement("script");n.id=this.id,n.type="text/javascript",n.src=e,n.onerror=this.loadErrorCallback.bind(this),n.defer=!0,n.async=!0,this.nonce&&(n.nonce=this.nonce),document.head.appendChild(n)}}},{key:"reset",value:function(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}},{key:"resetIfRetryingFailed",value:function(){this.failed&&this.reset()}},{key:"loadErrorCallback",value:function(e){var n=this;if(this.errors.push(e),this.errors.length<=this.retries){var t=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Google Maps script, retrying in ".concat(t," ms.")),setTimeout((function(){n.deleteScript(),n.setScript()}),t)}else this.onerrorEvent=e,this.callback()}},{key:"setCallback",value:function(){window.__googleMapsCallback=this.callback.bind(this)}},{key:"callback",value:function(){var e=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(n){n(e.onerrorEvent)})),this.callbacks=[]}},{key:"execute",value:function(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}]),e}(),b=h.ZP.div(x||(x=(0,c.Z)(["\n  flex: 1 0 30%;\n  max-width: 30vw;\n\n  & #map {\n    width: 90%;\n    height: 200px;\n    margin-bottom: 20px;\n    border: 1px solid black;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n  }\n\n  & label {\n    display: flex;\n    align-items: center;\n    font-family: 'Montserrat', sans-serif;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 22px;\n    color: var(--primary);\n\n    & span {\n      width: 20%;\n    }\n    & input {\n      height: 30px;\n      min-width: 60%;\n      padding-left: 10px;\n      font-style: normal;\n      font-weight: 600;\n      font-size: 16px;\n      line-height: 22px;\n      border: 1px solid black;\n      box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n      border-radius: 5px;\n    }\n  }\n"]))),w=t(4393),k=t(5218),j=t(184),I=function(e){var n=e.onSubmit,t=(0,l.useState)(""),i=(0,o.Z)(t,2),r=i[0],s=i[1],a=(0,l.useState)(""),c=(0,o.Z)(a,2),h=c[0],u=c[1],p=(0,l.useState)(""),f=(0,o.Z)(p,2),g=f[0],m=f[1],v=(0,l.useState)(""),x=(0,o.Z)(v,2),I=x[0],S=x[1],C=(0,l.useState)({lat:49.8397,lng:24.0297}),E=(0,o.Z)(C,2),A=E[0],Z=E[1],L=(0,l.useState)("Lviv"),O=(0,o.Z)(L,2),P=O[0],N=O[1],_=(0,l.useRef)(!0),R=new y({apiKey:"AIzaSyBKPbNU2ib0PYNVjp6Gy4PJnzAk-0ectzE",version:"weekly"}),M={center:A,zoom:16};return(0,l.useEffect)((function(){if(_.current){_.current=!1;var e=(0,d.wJ)();e&&(0,w.Zy)(e).then((function(e){var n=e.map,t=e.name;if(!n)throw new Error("institution no location");Z(n),N(t)})).catch((function(e){k.Am.error("".concat(e.message))}))}}),[]),R.load().then((function(e){var n=new e.maps.Map(document.getElementById("map"),M);new e.maps.Marker({position:A,label:P,map:n}),(new e.maps.InfoWindow).setContent("Location found.")})).catch((function(e){k.Am.error("".concat(e.message))})),(0,j.jsxs)(b,{children:[(0,j.jsx)("div",{id:"map"}),(0,j.jsxs)("form",{id:"user-form",onSubmit:function(e){e.preventDefault(),n({name:r,phone:h,email:g,address:I}),s(""),u(""),m(""),S("")},children:[(0,j.jsxs)("label",{children:[(0,j.jsx)("span",{children:" Name:"}),(0,j.jsx)("input",{type:"text",placeholder:"Bill Mac Donald",value:r,onChange:function(e){return s(e.target.value)},required:!0})]}),(0,j.jsx)("br",{}),(0,j.jsxs)("label",{children:[(0,j.jsx)("span",{children:" Phone:"}),(0,j.jsx)("input",{type:"tel",placeholder:"067673232",value:h,onChange:function(e){return u(e.target.value)},required:!0})]}),(0,j.jsx)("br",{}),(0,j.jsxs)("label",{children:[(0,j.jsx)("span",{children:" Email:"}),(0,j.jsx)("input",{type:"email",value:g,placeholder:"delivery@testy.com",onChange:function(e){return m(e.target.value)},required:!0})]}),(0,j.jsx)("br",{}),(0,j.jsxs)("label",{children:[(0,j.jsx)("span",{children:" Address:"}),(0,j.jsx)("input",{type:"text",value:I,placeholder:"London",onChange:function(e){return S(e.target.value)}})]}),(0,j.jsx)("br",{})]})]})},S=t(3535),C=t(6331),E=t(8609),A=function(){var e=(0,l.useState)([]),n=(0,o.Z)(e,2),t=n[0],i=n[1],r=(0,l.useState)(0),c=(0,o.Z)(r,2),h=c[0],f=c[1],g=function(){var e=(0,d.Yb)().map((function(e){return e.menuItem}));i(e)};(0,l.useEffect)((function(){(0,d.Yb)()||(0,d.SI)([]),g()}),[]);var m=function(e){f((function(n){return n+e}))},v=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.menu=t,e.next=3,(0,E.FQ)();case 3:r=e.sent,(a=r.find((function(e){return e.email===n.email})))?k.Am.success("\u0434\u044f\u043a\u0443\u0454\u043c\u043e \u0437\u0430 \u0449\u0435 \u043e\u0434\u043d\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f  ".concat(a.name)):((0,w.Wl)(n),k.Am.success("\u0432\u0456\u0442\u0430\u0454\u043c\u043e \u0437 \u043f\u0435\u0440\u0448\u0438\u043c \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f\u043c  ".concat(n.name))),f(0),i([]),(0,d.SI)([]),(0,d.$A)("");case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(u,{children:(0,j.jsxs)("div",{className:"shop_info",children:[(0,j.jsx)(I,{onSubmit:v}),(0,j.jsxs)("div",{className:"shop_menu",children:[t.length?(0,j.jsx)("ul",{children:t.map((function(e){return(0,j.jsx)(p.Z,{changeTotal:m,menuItem:e,visible:"true",rerender:g,styleCart:{flexDirectionCart:"row",widthImg:"140",widthDiv:"200"}},e.id)}))}):(0,j.jsxs)("div",{className:"noOrder",children:[(0,j.jsx)("h2",{children:"Please make your choice first"}),(0,j.jsx)("img",{src:C,alt:"no order",width:"600",height:"600"})]}),(0,j.jsxs)("div",{className:"shop_total",children:[(0,j.jsxs)("p",{children:["Total: ",h," \u0433\u0440\u043d"]}),(0,j.jsx)(S.Z,{type:"submit",form:"user-form",disabled:!h,children:"SUBMIT"})]})]})]})})}}}]);
//# sourceMappingURL=638.4c188a81.chunk.js.map