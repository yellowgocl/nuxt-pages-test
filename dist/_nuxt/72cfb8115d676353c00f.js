(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{427:function(t,n,e){},609:function(t,n,e){t.exports=e.p+"img/d78b5c3.png"},610:function(t,n,e){t.exports=e.p+"img/7d222f6.png"},611:function(t,n,e){t.exports=e.p+"img/e496cc4.png"},612:function(t,n,e){t.exports=e.p+"img/ac9f3bc.png"},613:function(t,n,e){"use strict";var o=e(427);e.n(o).a},650:function(t,n,e){"use strict";e.r(n);e(66),e(20),e(18),e(8),e(51);var o=e(27),c=e(34);function r(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var l={name:"Home",components:{},mixins:[],props:{},asyncData:function(t){t.params,t.error;return{}},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(c.b)(["token","info","isLogin"]),{email:function(){return this.info.email}}),watch:{},mounted:function(){},created:function(){},methods:{havefunHandle:function(){this.isLogin?this.$store.dispatch("ourTeam/getHotStaff",this.token).then((function(t){console.log("get_hot_staff",t)})):console.log("get_hot_staff noLogin")},aboutUsHandle:function(){this.$router.push({path:"/aboutUs"})},loginHandle:function(){this.isLogin?this.$store.dispatch("user/logout",this.token).then((function(t){console.log("homeLogout",t)})):this.$router.push({path:"/login"})},checkBookingHandle:function(){this.$router.push({path:"/checkBooking"})}}},h=(e(613),e(5)),component=Object(h.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"home"},[o("div",{staticClass:"d-f"},[o("div",{staticStyle:{width:"532px"}},[o("div",{staticClass:"d-f",staticStyle:{height:"261px"}},[o("div",{staticClass:"button-content",staticStyle:{width:"267px"},on:{click:t.havefunHandle}},[o("el-image",{attrs:{src:e(609)}}),t._v(" "),o("span",{staticClass:"button-text align-right background-black primary-color",staticStyle:{bottom:"13px"}},[t._v("HAVE FUN")])],1),t._v(" "),o("div",{staticClass:"button-content",staticStyle:{width:"265px"},on:{click:t.aboutUsHandle}},[o("el-image",{attrs:{src:e(610)}}),t._v(" "),o("span",{staticClass:"button-text align-right background-black primary-color",staticStyle:{bottom:"13px"}},[t._v("ABOUT US")])],1)]),t._v(" "),o("div",{staticClass:"button-content",staticStyle:{width:"532px",height:"264px"},on:{click:t.loginHandle}},[o("el-image",{attrs:{src:e(611)}}),t._v(" "),o("span",{staticClass:"button-text align-right primary-color",staticStyle:{bottom:"8px"}},[t._v(t._s(t.isLogin?"LOG OUT":"LOG IN"))])],1)]),t._v(" "),o("div",{staticClass:"button-content",staticStyle:{width:"492px",height:"525px"},on:{click:t.checkBookingHandle}},[o("el-image",{attrs:{src:e(612)}}),t._v(" "),o("span",{staticClass:"button-text align-center primary-color",staticStyle:{top:"86px"}},[t._v("CHECK BOOKING")])],1)]),t._v(" "),o("el-divider",{staticClass:"ma-0"})],1)}),[],!1,null,"230845ac",null);n.default=component.exports}}]);