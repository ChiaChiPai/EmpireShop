(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e81524"],{7316:function(t,s,e){t.exports=e.p+"img/abond.041a2695.png"},7937:function(t,s,e){t.exports=e.p+"img/pageLoading.c32dd434.gif"},9162:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"py-4 px-3 mb-3",staticStyle:{border:"2px solid rgb(70, 39, 5)"}},[e("h4",{staticClass:"text-dark text-center py-1 mb-0 cart-cal-header"},[t._v("本次購物清單")]),t._l(t.childCarts,(function(s,a){return e("div",{key:a},[e("a",{staticClass:"p-2 text-dark d-flex justify-content-between align-items-center",attrs:{href:"#"}},[e("img",{attrs:{width:"50",src:s.product.imageUrl,alt:""}}),e("p",{staticClass:"h5 mb-0 pl-4"},[t._v(" "+t._s(s.product.title)+" "),e("span",{staticClass:"d-block h6 mb-0"},[t._v(" x "+t._s(s.qty))])]),e("span",{staticClass:"h5 mb-0 ml-auto"},[t._v(t._s(t._f("currency")(s.total)))])]),e("hr",{staticClass:"my-0",staticStyle:{"border-color":"rgb(70, 39, 5)"}})])}))],2)])},r=[],c={props:["childCarts"]},i=c,o=e("2877"),n=Object(o["a"])(i,a,r,!1,null,null,null);s["a"]=n.exports},b64b:function(t,s,e){var a=e("23e7"),r=e("7b0b"),c=e("df75"),i=e("d039"),o=i((function(){c(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return c(r(t))}})},e9fe:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[a("template",{slot:"default"},[a("img",{attrs:{width:"400",src:e("7937"),alt:""}})])],2),a("div",{staticClass:"cart-bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center py-5",staticStyle:{"border-bottom":"2px dashed black"}},[t._m(0),t._m(1),a("div",{staticClass:"col-sm-4 col-md-3 mt-3 d-flex flex-column align-items-center"},[t.orderList.is_paid?a("img",{staticClass:"d-none d-lg-block",staticStyle:{width:"130px",height:"90px"},attrs:{src:e("7316"),alt:""}}):a("img",{staticClass:"d-none d-lg-block",staticStyle:{width:"150px",height:"90px"},attrs:{src:e("ff83"),alt:""}}),a("p",{staticClass:"mb-1 h6"},[t._v("Step 3")]),a("p",{staticClass:"h4 p-1 mb-0 bg-dark text-white",staticStyle:{border:"4px double black"}},[t._v("完成訂單")])])]),a("div",{staticClass:"py-5 row"},[a("form",{staticClass:"col-lg-8 p-3 form-data",staticStyle:{border:"2px solid rgb(70, 39, 5)"},attrs:{id:"checkTop"}},[a("h4",{staticClass:"text-dark text-center py-1 mb-0 cart-cal-header mt-2 mb-3"},[t._v("購買資訊確認")]),a("table",{staticClass:"w-100 h6 info-table text-secondary"},[a("tbody",[a("tr",[a("td",[t._v("收件者姓名:")]),a("td",[t._v(" "+t._s(t.orderList.user.name)+" ")])]),a("tr",[a("td",[t._v("收件人電話 :")]),a("td",[t._v(" "+t._s(t.orderList.user.tel)+" ")])]),a("tr",[a("td",[t._v("Email :")]),a("td",[t._v(" "+t._s(t.orderList.user.email))])]),a("tr",[a("td",[t._v("地址 :")]),a("td",[t._v(" "+t._s(t.orderList.user.address))])]),a("tr",[a("td",[t._v("付款狀態 :")]),t.orderList.is_paid?a("td",{staticClass:"text-light font-weight-bold"},[t._v("已付款完成，回商城逛逛吧 !!")]):a("td",{staticClass:"text-danger font-weight-bold"},[t._v("尚未付款")])])])]),a("div",{staticClass:"text-center mt-5"},[t.orderList.is_paid?a("router-link",{staticClass:"btn btn-dark btn-lg w-100",attrs:{to:"/shop"}},[t._v("商城逛逛")]):a("button",{staticClass:"btn btn-dark btn-lg w-100",on:{click:function(s){return s.preventDefault(),t.payComfirm(s)}}},[t._v("確認付款")])],1)]),a("div",{staticClass:"col-lg-4 d-none d-lg-block"},[a("buyList",{attrs:{childCarts:t.productInfo}}),a("div",{staticClass:"py-4 px-3",staticStyle:{border:"2px solid rgb(70, 39, 5)"}},[a("h4",{staticClass:"text-dark text-center py-1 mb-0 cart-cal-header"},[t._v("訂單詳情")]),a("div",{staticClass:"d-flex justify-content-between h5 p-2 mt-2"},[a("p",[t._v("總計")]),t.couponRate?a("p",[t._v(t._s(t._f("currency")(t.orderList.total/t.couponRate||0)))]):a("p",[t._v(t._s(t._f("currency")(t.orderList.total)))])]),a("div",{staticClass:"d-flex justify-content-between h5 mb-0 px-2"},[a("p",[t._v("優惠折抵")]),t.couponRate?a("p",[t._v(t._s(t._f("currency")(t.orderList.total/t.couponRate-t.orderList.total||0)))]):a("p",[t._v("0")])]),a("hr"),a("div",{staticClass:"d-flex justify-content-between h5 mb-0 px-2"},[a("p",{staticClass:"mb-0"},[t._v("應付金額")]),a("p",{staticClass:"mb-0"},[t._v(t._s(t._f("currency")(t.orderList.total||0)))])])])],1)])])])],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-4 col-md-3 mt-3 d-flex flex-column align-items-center"},[a("img",{staticClass:"d-none d-lg-block",staticStyle:{width:"130px",height:"90px"},attrs:{src:e("7316"),alt:""}}),a("p",{staticClass:"mb-1 h6"},[t._v("Step 1")]),a("p",{staticClass:"h4 p-1 mb-0",staticStyle:{border:"4px double black"}},[t._v("確認購買")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-4 col-md-3 mt-3 d-flex flex-column align-items-center"},[a("img",{staticClass:"d-none d-lg-block",staticStyle:{width:"130px",height:"90px"},attrs:{src:e("7316"),alt:""}}),a("p",{staticClass:"mb-1 h6"},[t._v("Step 2")]),a("p",{staticClass:"h4 p-1 mb-0",staticStyle:{border:"4px double black"}},[t._v("填寫資料")])])}],c=(e("99af"),e("b64b"),e("9162")),i=e("1157"),o=e.n(i),n={components:{buyList:c["a"]},data:function(){return{orderId:"",orderList:{user:{}},productInfo:[],couponRate:1}},created:function(){var t=this;t.orderId=t.$route.params.orderId,t.getOrderList(),setTimeout((function(){var t=o()("#checkTop").offset().top;o()("html, body").animate({scrollTop:t},0)}),10)},methods:{getOrderList:function(){var t=this;t.isLoading=!0;var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/order/").concat(t.orderId);t.$http.get(s).then((function(s){t.isLoading=!1,t.orderList=s.data.order,t.productInfo=s.data.order.products;var e=Object.keys(t.productInfo)[0];t.productInfo[e].coupon&&(t.couponRate=.01*t.productInfo[e].coupon.percent)}))},payComfirm:function(){var t=this;t.isLoading=!0;var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/pay/").concat(t.orderId);t.$http.post(s).then((function(s){t.isLoading=!1,t.getOrderList()}))}}},l=n,d=e("2877"),p=Object(d["a"])(l,a,r,!1,null,null,null);s["default"]=p.exports},ff83:function(t,s,e){t.exports=e.p+"img/fight.69cafd58.gif"}}]);
//# sourceMappingURL=chunk-71e81524.14673c76.js.map