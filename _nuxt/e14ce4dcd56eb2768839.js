(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{337:function(e,t,n){},338:function(e,t,n){"use strict";var r=n(6),o=n(28),c=n(39),l=n(144),f=n(101),d=n(16),h=n(65).f,m=n(103).f,y=n(13).f,v=n(341).trim,w=r.Number,_=w,N=w.prototype,I="Number"==c(n(102)(N)),E="trim"in String.prototype,x=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,c=(t=E?t.trim():v(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(I?d((function(){N.valueOf.call(n)})):"Number"!=c(n))?l(new _(x(t)),n,w):x(t)};for(var S,k=n(10)?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;k.length>A;A++)o(_,S=k[A])&&!o(w,S)&&y(w,S,m(_,S));w.prototype=N,N.constructor=w,n(17)(r,"Number",w)}},339:function(e,t,n){"use strict";var r=n(337);n.n(r).a},340:function(e,t,n){"use strict";n(338);var r={components:{},mixins:[],props:{height:{type:Number,default:-1},width:{type:Number,default:500}},data:function(){return{}},computed:{},watch:{},mounted:function(){},created:function(){},methods:{goBackHandle:function(){console.log("goBack")}}},o=(n(339),n(5)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"back-content d-f justify-center"},[t("el-button",{staticClass:"em-m-button",style:{height:-1===this.height?"auto":this.height+"px",width:this.width+"px"},on:{click:this.goBackHandle}},[this._v("\n    BACK\n  ")])],1)}),[],!1,null,"0793709c",null);t.a=component.exports},341:function(e,t,n){var r=n(9),o=n(38),c=n(16),l=n(342),f="["+l+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(e,t,n){var o={},f=c((function(){return!!l[e]()||"​"!="​"[e]()})),d=o[e]=f?t(y):l[e];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},y=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},342:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},428:function(e,t,n){},614:function(e,t,n){"use strict";var r=n(428);n.n(r).a},651:function(e,t,n){"use strict";n.r(t);var r={components:{BackButton:n(340).a},mixins:[],props:{},data:function(){return{}},computed:{},watch:{},mounted:function(){},created:function(){},methods:{}},o=(n(614),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"introduction"},[n("div",{staticClass:"scroll-content"},[n("el-scrollbar",{staticStyle:{height:"100%",width:"100%"}},[n("span",{staticClass:"inner-text primary-color"},[e._v("\n        Empress Spa was founded in 2013 and recently established its first in 2020. Empress Spa focus and pursuit the service, integrity and excellence for the beauty industry. Empress Spa main focus is high quality service, fully certified professionals. We are able to say that we are the best in the industry to provide the most professional beauty services in our care."),n("br"),e._v(" "),n("br"),e._v("Again we would love to say thank you for your visit. Relax, Refresh, Renew, Remember and Rejuvenat!."),n("br"),e._v(" "),n("br"),e._v("Surrender your body to complete relaxation with our unique spa treatments and balancing therapies honoring global traditions. Cleanse, refresh, restore and balance your body through medium pressured relaxation massages, facials and body treatments."),n("br"),e._v(" "),n("br"),e._v("Geothermal bathing in our Spa is included with all treatments. We recommend bathing prior to your treatment to enjoy deeper benefits, eliminate body toxins, promote healthy skin and feel the therapeutic results more deeply. Connect with yourself and nature in the company of others. Immerse yourself in natural thermal mineral waters which flow from deep underground into pools and private baths at Peninsula Hot Springs. Awaken your senses and nourish your soul in nature."),n("br"),e._v(" "),n("br"),e._v("“Small steaming spas hidden around tree-lined corners, in caves and up stone steps mean you can easily find yourself in a world of your own with only the sound of nearby frogs to accompany you.”"),n("br"),e._v(" "),n("br"),e._v("Relax, Refresh Renew, Remember and Rejuvenate!.\n      ")])])],1),e._v(" "),n("back-button")],1)}),[],!1,null,"12348845",null);t.default=component.exports}}]);