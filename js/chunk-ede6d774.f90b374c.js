(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ede6d774"],{"25e0":function(t,a,e){t.exports=e.p+"img/market.955d67a6.png"},"476e":function(t,a,e){},"534a":function(t,a,e){},"55c4":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[i("template",{slot:"default"},[i("img",{attrs:{width:"400",src:e("7937"),alt:""}})])],2),i("div",{staticClass:"detail-bg",attrs:{id:"headTop"}},[i("nav",{staticClass:"pt-4 pl-2",attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb",staticStyle:{"background-color":"transparent"}},[t._m(0),i("li",{staticClass:"breadcrumb-item breadcrumb-text"},[i("router-link",{attrs:{to:"/shop"}},[t._v("世紀商城")])],1),i("li",{staticClass:"breadcrumb-item breadcrumb-text"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goBackCategory(a)}}},[t._v(t._s(t.productDetail.category))])]),i("li",{staticClass:"breadcrumb-item breadcrumb-text active",attrs:{"aria-current":"page"}},[t._v(t._s(t.productDetail.title))])])]),i("div",{staticClass:"container"},[i("div",{staticClass:"row ",staticStyle:{border:"3px solid rgb(70, 39, 5)"}},[i("div",{staticClass:"col-4 col-md-3 detail-border d-flex justify-content-center align-items-center"},[i("div",{},[i("img",{attrs:{src:t.productDetail.imageUrl,width:"100%",alt:""}})])]),i("div",{staticClass:"col-8 col-md-5 detail-border"},[i("h5",{staticClass:"text-center mt-3"},[t._v("商品描述:")]),i("p",{staticStyle:{"line-height":"1.5rem"}},[t._v(t._s(t.productDetail.description))])]),i("div",{staticClass:"col-md-4 detail-border d-flex flex-column justify-content-between"},[i("div",{staticClass:"mt-3"},[i("h5",{staticClass:"text-center h4 font-weight-bolder"},[t._v(t._s(t.productDetail.title))]),i("span",{staticClass:"badge badge-secondary"},[t._v(t._s(t.productDetail.category))]),i("p",{staticClass:"h6"},[t._v(t._s(t.productDetail.content))]),i("hr",{staticStyle:{"border-width":"2spx"}})]),i("div",{},[i("div",{staticClass:"d-flex flex-column"},[t.productDetail.price?i("del",{staticClass:"h6 ml-auto text-secondary"},[t._v("售價 $ "+t._s(t.productDetail.origin_price))]):i("div",{staticClass:"h6 ml-auto text-secondary"},[t._v("售價 $ "+t._s(t.productDetail.origin_price))]),t.productDetail.price?i("div",{staticClass:"h5 ml-auto",staticStyle:{"font-weight":"900"}},[t._v("$ "+t._s(t.productDetail.price))]):t._e()]),i("div",{staticClass:"input-group mb-3",attrs:{id:"inputGroupSelect"}},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.productDetail.num,expression:"productDetail.num"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.productDetail,"num",a.target.multiple?e:e[0])}}},[i("option",{staticClass:"select_style",attrs:{selected:"",disabled:""}},[t._v("請選擇商品數量")]),t._l(10,(function(a){return i("option",{key:a,staticClass:"select_style",domProps:{value:a}},[t._v(t._s(a)+" "+t._s(t.productDetail.unit))])}))],2),i("div",{staticClass:"input-group-append mb-2"},[i("a",{staticClass:"input-group-text hvr-icon-buzz",attrs:{href:"#",for:"inputGroupSelect"},on:{click:function(a){return a.preventDefault(),t.addToCart(t.productDetail.id,t.productDetail.title,t.productDetail.num)}}},[t._v("加入購物車 "),i("i",{staticClass:"fas fa-plus-circle hvr-icon"})])])])])])])]),i("div",{staticClass:"container py-5"},[i("div",{staticClass:"row"},[t._m(1),i("div",{staticClass:"col-md-4 mb-5"},[i("div",{staticClass:"detail-border",staticStyle:{margin:"0 -15px"}},[t._m(2),t._l(t.hotProducts,(function(a){return i("div",{key:a.id},[i("a",{staticClass:"p-2 text-dark d-flex justify-content-between align-items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.hotProductDetail(a.id)}}},[i("img",{attrs:{width:"50",src:a.imageUrl,alt:""}}),i("span",{staticClass:"h5 mb-0 pl-4"},[t._v(t._s(a.title)),i("h6",{staticClass:"text-secondary"},[t._v(t._s(a.content))])]),i("span",{staticClass:"h5 mb-0 ml-auto"},[t._v("$ "+t._s(a.price))])]),i("hr",{staticClass:"my-0",staticStyle:{"border-color":"rgb(70, 39, 5)"}})])}))],2)])])]),i("MarketCart",{attrs:{childCarts:t.carts},on:{cartUpdateDetail:t.cartUpdate}})],1)],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"breadcrumb-item breadcrumb-text"},[e("a",{attrs:{href:"#"}},[t._v("首頁")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-8"},[e("h4",{staticClass:"h4 text-center font-weight-bold"},[t._v("注意事項")]),e("h5",{staticClass:"font-weight-bolder"},[t._v("選擇運送和交貨方式")]),e("p",[t._v(" 您在世紀商店下單訂購商品後，必須在結帳時選擇運送方式。您選擇的方式將會影響商品送達所需的時間。注意：商品無法運送至郵政信箱，且可用的運送選項因地區而異。 ")]),e("h5",{staticClass:"font-weight-bolder"},[t._v("免運費")]),e("p",[t._v("在某些地區，如果您訂購特定產品或訂單達到最低金額門檻，就可能享有免運費優惠。除非另有指定，否則適用免運費優惠時，將一律採用費用最低的運送方式。世紀商店可能會隨時變更或終止免運費優惠。")]),e("h5",{staticClass:"font-weight-bolder"},[t._v("追蹤商品運送狀態")]),e("p",[t._v("瞭解如何追蹤商品運送狀態。")]),e("h5",{staticClass:"font-weight-bolder"},[t._v("分批出貨")]),e("p",[t._v("訂單可能會分批寄出，商品一到貨就盡快讓您收到。您無法自行合併出貨，或自行將訂單商品分成多次運送。 結帳時，畫面顯示的運費是針對整筆訂單收取的費用。運送您的訂單商品時，我們會按每批出貨商品收取運費。 您只需針對運送的商品付款。不過您結帳之後，可能會看到一筆金額為訂單總金額的授權款項。 您可以根據每次出貨的狀態變更運送地址，或者完全取消出貨。 如要調整訂單內容，您必須針對每批出貨商品進行變更。 我們將以同一種運送方式寄送訂單中所有商品。")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",{staticClass:"text-center text-white py-2 mb-0 bg-dark"},[e("i",{staticClass:"fab fa-hotjar pulse"}),t._v(" 熱銷商品 "),e("i",{staticClass:"fab fa-hotjar pulse"})])}],r=(e("99af"),e("7db0"),e("a434"),e("c723")),c=e("1157"),o=e.n(c),l={components:{MarketCart:r["a"]},data:function(){return{productDetail:{},hotProducts:[],detailId:"",isLoading:!1,carts:[]}},created:function(){var t=this;t.detailId=t.$route.params.detailId,t.getProductDetail(),t.getHotProducts(),o()("html, body").animate({scrollTop:0},0),t.getCart()},methods:{getCart:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/cart"),a=this;a.$http.get(t).then((function(t){a.carts=t.data.data.carts}))},getHotProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/products/all"),a=this;a.isLoading=!0,a.$http.get(t).then((function(t){var e=t.data.products;a.isLoading=!1;for(var i=0;i<4;i++){var s=Math.floor(Math.random()*e.length);a.hotProducts.push(e[s]),e.splice(s,1)}}))},getProductDetail:function(){var t=this;t.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/product/").concat(t.detailId);t.$http.get(a).then((function(a){t.productDetail=a.data.product,t.productDetail.num=1,t.isLoading=!1}))},goBackCategory:function(){var t=this;t.$router.push({path:"/shop",query:{category:t.productDetail.category}})},hotProductDetail:function(t){var a=this;a.detailId=t,a.$router.push("/detail/".concat(a.detailId)),a.getProductDetail()},cartUpdate:function(t){var a=this;a.detailId=t,a.$router.push("/detail/".concat(t)),a.getProductDetail()},addToCart:function(t,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=this;i.isLoading=!0;var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/cart");i.$http.get(s).then((function(s){i.carts=s.data.data.carts;var r=i.carts.find((function(t){return t.product.title===a})),c=0;if(r){c=r.qty;var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/cart/").concat(r.id);i.$http.delete(o).then((function(t){}))}var l="".concat("https://vue-course-api.hexschool.io","/api/").concat("csc98104","/cart"),n={product_id:t,qty:c+e};i.$http.post(l,{data:n}).then((function(t){i.isLoading=!1}))}))}}},n=l,d=(e("d1fd"),e("2877")),u=Object(d["a"])(n,i,s,!1,null,null,null);a["default"]=u.exports},7937:function(t,a,e){t.exports=e.p+"img/pageLoading.c32dd434.gif"},"7db0":function(t,a,e){"use strict";var i=e("23e7"),s=e("b727").find,r=e("44d2"),c=e("ae40"),o="find",l=!0,n=c(o);o in[]&&Array(1)[o]((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!n},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},"9b25":function(t,a,e){"use strict";var i=e("534a"),s=e.n(i);s.a},a434:function(t,a,e){"use strict";var i=e("23e7"),s=e("23cb"),r=e("a691"),c=e("50c4"),o=e("7b0b"),l=e("65f0"),n=e("8418"),d=e("1dde"),u=e("ae40"),p=d("splice"),h=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,f=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!h},{splice:function(t,a){var e,i,d,u,p,h,b=o(this),_=c(b.length),C=s(t,_),y=arguments.length;if(0===y?e=i=0:1===y?(e=0,i=_-C):(e=y-2,i=f(v(r(a),0),_-C)),_+e-i>m)throw TypeError(g);for(d=l(b,i),u=0;u<i;u++)p=C+u,p in b&&n(d,u,b[p]);if(d.length=i,e<i){for(u=C;u<_-i;u++)p=u+i,h=u+e,p in b?b[h]=b[p]:delete b[h];for(u=_;u>_-i+e;u--)delete b[u-1]}else if(e>i)for(u=_-i;u>C;u--)p=u+i-1,h=u+e-1,p in b?b[h]=b[p]:delete b[h];for(u=0;u<e;u++)b[u+C]=arguments[u+2];return b.length=_-i+e,d}})},c723:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"position-relative position-fixed market"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.openModel(a)}}},[i("img",{staticClass:"market-img",attrs:{src:e("25e0"),width:"170",alt:""}}),0!==t.childCarts.length?i("h5",[i("span",{staticClass:"badge badge-danger position-absolute market-num"},[t._v(t._s(t.childCarts.length))])]):t._e()])]),i("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[i("div",{staticClass:"modal-content border-0",staticStyle:{background:"#ffe694"}},[t._m(0),i("div",{staticClass:"modal-body pb-0"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[0!==t.childCarts.length?i("table",{staticClass:"font-weight-bolder h6",staticStyle:{margin:"0 auto"},attrs:{rules:"rows",cellpadding:"10"}},t._l(t.childCarts,(function(a){return i("tbody",{key:a.id,staticClass:"productDetail",on:{click:function(e){return e.preventDefault(),t.getProductDetail(a.product.id)}}},[i("tr",[i("td",{staticClass:"d-none d-sm-table-cell",staticStyle:{width:"20%",padding:"0.3rem"}},[i("img",{staticClass:"img-fluid",staticStyle:{"min-width":"50px"},attrs:{src:a.product.imageUrl,alt:a.product.title}})]),i("td",{staticClass:"text-center"},[i("p",{staticClass:"d-block mb-0"},[t._v(t._s(a.product.title))]),a.coupon?i("div",{staticClass:"badge badge-success"},[t._v("已套用優惠")]):t._e()]),i("td",{staticClass:"text-center d-none d-lg-table-cell"},[i("div",{staticClass:"input-group"},[t._v(" "+t._s(a.qty)+" ")])]),i("td",{staticClass:"d-lg-none"},[i("div",{staticClass:"input-group mb-3",attrs:{id:"inputGroupSelect"}},[i("select",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"item.qty"}],staticClass:"custom-select select-text-center",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(a,"qty",e.target.multiple?i:i[0])},function(e){return t.changeQty(a.qty,a.product.id,a.id)}]}},[i("option",{staticClass:"select_style",attrs:{selected:"",disabled:""}},[t._v("數量")]),t._l(10,(function(e){return i("option",{key:e,staticClass:"select_style",domProps:{value:e}},[t._v(t._s(e)+" "+t._s(a.unit))])}))],2)])]),a.coupon?i("td",{staticClass:"text-right"},[i("del",{},[t._v(t._s(t._f("currency")(a.total)))]),i("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t._f("currency")(a.final_total)))])]):i("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))])])])})),0):0===t.childCarts.length?i("h6",[t._v(" 購物車沒有商品喔，趕快去商城逛逛!! ")]):t._e()])])]),i("div",{staticClass:"modal-footer",staticStyle:{"border-top":"0"}},[0!==t.childCarts.length?i("a",{staticClass:"btn btn-primary btn-light w-100 mt-0 text-warning",attrs:{href:"#",type:"button"},on:{click:function(a){return a.preventDefault(),t.goPay(a)}}},[t._v("結帳去")]):0===t.childCarts.length?i("a",{staticClass:"btn btn-primary btn-light w-100 mt-0 text-warning",attrs:{href:"#",type:"button"},on:{click:function(a){return a.preventDefault(),t.goShop(a)}}},[t._v("來去商城逛逛")]):t._e()])])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white mb-0"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("已選購商品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=e("1157"),c=e.n(r),o={data:function(){return{tempCount:0}},props:["childCarts"],watch:{childCarts:function(){var t=this;t.tempCount+=1,1!==t.tempCount&&t.$bus.$emit("message:push","加入購物車成功")}},methods:{openModel:function(){c()("#productModal").modal("show")},goPay:function(){var t=this;c()("#productModal").modal("hide"),t.$router.push("/cart")},goShop:function(){var t=this;c()("#productModal").modal("hide"),t.$router.push("/shop")},getProductDetail:function(t){var a=this;c()("#productModal").modal("hide"),a.$emit("cartUpdateDetail",t)}}},l=o,n=(e("9b25"),e("2877")),d=Object(n["a"])(l,i,s,!1,null,null,null);a["a"]=d.exports},d1fd:function(t,a,e){"use strict";var i=e("476e"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-ede6d774.f90b374c.js.map