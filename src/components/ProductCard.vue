<template>
  <div>
    <!-- <div class="row">
      <div class="col-md-6 col-6 my-3" :class="{'col-lg-4': !cardSize,'col-lg-10': cardSize}" v-for="item in childProductCard" :key="item.id"> -->
        <div class="card product-section-bg text-center" @click="getProductDetail(item.id)" style="cursor: pointer;">
          <div class="position-relative" style="overflow: hidden;">
            <img :src="item.imageUrl" class="product-img" alt="..." />
            <span
              class="badge badge-secondary position-absolute"
              style="right:0; bottom:0;"
            >{{item.category}}</span>
          </div>
          <div class="px-3 py-2">
            <h4 class="card-title">{{item.title}}</h4>
            <p class="card-text text-truncate">{{item.content}}</p>
            <del class="card-text" v-if="item.price">售價 $ {{item.origin_price}}</del>
            <span class="card-text" v-else>售價 $ {{item.origin_price}}</span>
            <span class="h5 d-inline-block mb-0" style="color:red" v-if="item.price">$ {{item.price}}</span>
          </div>
          <div class="d-flex d-md-block pb-0 pb-md-2" style="width:100%">
            <a href="#" @click.prevent="getProductDetail(item.id)" class="btn product-btn product-btn-left">查看更多</a>
            <a href="#" class="btn product-btn product-btn-right" @click.prevent.stop="addToCart(item.id,item.title)">加入購物</a>
          </div>
        </div>
      </div>
    <!-- </div>
  </div> -->
</template>

<script>
export default {
  props: {
    // childProductCard: Array,
    // cardSize: Boolean
    item: []
  },
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getProductDetail (id) {
      const vm = this
      vm.$router.push(`/detail/${id}`).catch(() => {}) // 路由路徑重複報錯，vue-router3.1後推和替換方法返回promise。promise被拒絕但是你沒有catch，所以報錯Uncaught。
    },
    addToCart (id, addTitle) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$http.get(api).then(response => {
        vm.carts = response.data.data.carts
        const titleSearch = vm.carts.find((item) => {
          return item.product.title === addTitle
        })
        let addQty = 0
        if (titleSearch) {
          addQty = titleSearch.qty
          const deleteApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${titleSearch.id}`
          vm.$http.delete(deleteApi).then((response) => {
          })
        }
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
        const cart = {
          product_id: id,
          qty: addQty + 1
        }
        vm.$http.post(api, { data: cart }).then((response) => {
          vm.$bus.$emit('updateCart')
          vm.$bus.$emit('message:push', '加入購物車成功')
        })
      })
    }
  }
}
</script>
<!--
1. addToCart
考慮到可能有重複產品的增購，如果同樣產品按了兩次，購物車會出現重複名稱的商品，
會將第一次的刪除，然後用第二次按的產品取代他，同時加上上一次的產品數量。
-->
