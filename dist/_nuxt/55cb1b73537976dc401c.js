(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{337:function(e,t,n){},339:function(e,t,n){"use strict";var o=n(337);n.n(o).a},340:function(e,t,n){"use strict";n(338);var o={components:{},mixins:[],props:{height:{type:Number,default:-1},width:{type:Number,default:500}},data:function(){return{}},computed:{},watch:{},mounted:function(){},created:function(){},methods:{goBackHandle:function(){console.log("goBack")}}},c=(n(339),n(5)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"back-content d-f justify-center"},[t("el-button",{staticClass:"em-m-button",style:{height:-1===this.height?"auto":this.height+"px",width:this.width+"px"},on:{click:this.goBackHandle}},[this._v("\n    BACK\n  ")])],1)}),[],!1,null,"0793709c",null);t.a=component.exports},369:function(e,t,n){},422:function(e,t,n){"use strict";var o=n(369);n.n(o).a},423:function(e,t,n){},439:function(e,t,n){"use strict";var o=n(487);n(484);var c={components:{ECharts:o.a},mixins:[],props:{chartsData:{type:Object,default:function(){return{12.02:{amount:6e4,salary:5e4},12.03:{amount:6e4,salary:5e4},12.04:{amount:6e4,salary:5e4},12.05:{amount:6e4,salary:5e4},12.06:{amount:6e4,salary:5e4},12.07:{amount:6e4,salary:5e4},12.08:{amount:6e4,salary:5e4}}}}},data:function(){return{option:{}}},computed:{chartsOption:function(){return{textStyle:{color:"#bda270",fontFamily:"BellMTBold",fontSize:16},color:["#000","#9d8458","#c8c7c6","#000"],xAxis:[{type:"category",axisTick:{show:!1},data:["12.02","12.03","12.04","12.05","12.06","12.07","12.08"],axisLine:{lineStyle:{color:"#9d8458"}}}],yAxis:{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#9d8458"}},splitLine:{lineStyle:{color:"#9d8458"}}},series:[{name:"fixed",type:"bar",data:[0,0,0,0,0,0,0]},{name:"Amount",type:"bar",data:[6e4,2e4,5e4,4e4,3e4,1e4,2e4]},{name:"Salary",type:"bar",data:[1e4,1e4,1e4,1e4,1e4,1e4,1e4]},{name:"fixed",type:"bar",data:[0,0,0,0,0,0,0]}]}}},watch:{},mounted:function(){},created:function(){},methods:{}},l=(n(422),n(5)),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"charts-bar"},[t("e-charts",{attrs:{options:this.chartsOption}})],1)}),[],!1,null,"d5d65e70",null);t.a=component.exports},603:function(e,t,n){"use strict";var o=n(423);n.n(o).a},647:function(e,t,n){"use strict";n.r(t);var o=n(340),c=n(439),l={components:{BackButton:o.a,ChartsBar:c.a},mixins:[],props:{},data:function(){return{sevicesSelected:"",staffSelected:"",sevicesOptions:[{value:"option1",label:"a"},{value:"option2",label:"b"},{value:"option3",label:"c"}],staffOptions:[{value:"option1",label:"a"},{value:"option2",label:"b"},{value:"option3",label:"c"}]}},computed:{},watch:{},mounted:function(){},created:function(){},methods:{handleSelect:function(){}}},r=(n(603),n(5)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"check-salary"},[n("div",{staticClass:"inner-content"},[n("div",{staticClass:"select-content primary-color"},[n("el-select",{attrs:{placeholder:"Total Sevices"},model:{value:e.sevicesSelected,callback:function(t){e.sevicesSelected=t},expression:"sevicesSelected"}},e._l(e.sevicesOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),n("div",{staticClass:"menu-content d-f align-items-center primary-color"},[n("el-menu",{attrs:{mode:"horizontal"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("Total Date")]),e._v(" "),n("el-menu-item",{attrs:{index:"2"}},[e._v("Month")]),e._v(" "),n("el-menu-item",{attrs:{index:"3"}},[e._v("Week")]),e._v(" "),n("el-menu-item",{attrs:{index:"4"}},[e._v("Day")])],1)],1),e._v(" "),n("charts-bar")],1),e._v(" "),n("back-button")],1)}),[],!1,null,"0061be0a",null);t.default=component.exports}}]);