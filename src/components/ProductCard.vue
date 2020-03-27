<template>
  <div>
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
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getProductDetail (id) {
      const vm = this
      vm.$router.push(`/detail/${id}`).catch(() => {})
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
        })
      })
    }
  }
}
</script>
