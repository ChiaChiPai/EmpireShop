<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="shop-banner"></div>
    <div class="shop-bg" id="shopTop">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-lg-4">
            <div class="sideBar my-3 d-flex justify-content-center sticky-top" style="top:1rem;">
              <ul class="sideBar-menu h3 pt-5 pl-0">
                <li>
                  <a href="#" @click.prevent="tempMenuSwitch"><img width="40" src="../../assets/images/lion-all.png" alt />全部商品</a>
                </li>
                <li>
                  <a href="#" @click.prevent="tempMenuSwitch"><img width="40" src="../../assets/images/rider.png" alt />專屬傭兵</a>
                </li>
                <li>
                  <a href="#" @click.prevent="tempMenuSwitch"><img width="40" src="../../assets/images/crown-removebg-preview.png" alt />獨家技術</a>
                </li>
                <li>
                  <a href="#" @click.prevent="tempMenuSwitch"><img width="40" src="../../assets/images/egos.png" alt />十大建設</a>
                </li>
                <li>
                  <a href="#" @click.prevent="tempMenuSwitch"><img width="40" src="../../assets/images/lion.png" alt />嗆人必備</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-7 col-lg-8">
          <!-- 商品列表 -->
          <div class="row" v-if="productsFilter.length !== 0">
            <div class="col-md-6 col-6 my-3 col-lg-4" v-for="itemMain in productsFilter" :key="itemMain.id">
              <ProductCard :item="itemMain"></ProductCard>
            </div>
          </div>
          <h5 v-else class="text-warning h4 mt-3 text-center">小編正在趕上架喔....</h5>
          <!-- 頁數 -->
          <Pagination class="d-flex justify-content-center" :childPaginations="pagination" :cardSize="sizeCol4" @changePage="getPageProducts" v-if="filterProducts.length>10"></Pagination>
          </div>
        </div>
      </div>
    </div>
    <MarketCart></MarketCart>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
import ProductCard from '../../components/ProductCard'
import MarketCart from '../../components/MarketCart'
import $ from 'jquery'

export default {
  components: {
    Pagination,
    ProductCard,
    MarketCart
  },
  data () {
    return {
      allProducts: [],
      pageProducts: [],
      filterProducts: [],
      singleProduct: {},
      tempMenu: '全部商品',
      pagination: {},
      sizeCol4: false,
      isLoading: false
    }
  },
  created () {
    const vm = this
    vm.getAllProducts()
    vm.getPageProducts()
    vm.getParams()
    setTimeout(() => {
      const topPositon = $('#shopTop').offset().top
      $('html, body').animate({ scrollTop: topPositon }, 800)
    }, 10)
  },
  methods: {
    // 取得全部資料
    getAllProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.allProducts = response.data.products
        vm.isLoading = false
      })
    },
    // 取得分頁資料
    getPageProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.pageProducts = response.data.products
        vm.pagination = response.data.pagination
        vm.isLoading = false
      })
    },

    // 從 detail 麵包屑回來的資料
    getParams () {
      const vm = this
      if (vm.$route.query.category) {
        vm.tempMenu = vm.$route.query.category
      }
    },

    // 切換商品頁面
    tempMenuSwitch (e) {
      const vm = this
      vm.tempMenu = e.target.text
      if (vm.$route.query.category) {
        vm.$router.push('/shop')
      }
    }
  },
  computed: {
    productsFilter () {
      const vm = this
      const filterData = vm.allProducts.filter((item) => {
        if (vm.tempMenu === '全部商品') {
          return item
        } else {
          return vm.tempMenu === item.category
        }
      })
      vm.filterProducts = filterData
      if (filterData.length > 10) {
        const moreFilterData = vm.pageProducts.filter((item) => {
          if (vm.tempMenu === '全部商品') {
            return item
          } else {
            return vm.tempMenu === item.category
          }
        })
        return moreFilterData
      } else {
        return filterData
      }
    }
  }
}
</script>
