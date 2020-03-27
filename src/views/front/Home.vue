<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <main>
      <div class="jumbotron-fluid">
          <div class="bg-cover main_banner position-relative">
            <div id="bannerMove">
              <div class="position-absolute position-relative d-none d-lg-block bannerMoveClass">
                <a class="main_banner_center position-absolute" :class="{'active':BannerSwitch==='專屬傭兵' }" href="#" @click.prevent="tempBannerSwitch"><p class="d-none">專屬傭兵</p><img class="img-colorful" height="725" src="../../assets/images/center.png" alt=""></a>
                <a class="main_banner_left position-absolute" style="overflow:hidden" href="#" :class="{'active':BannerSwitch==='獨家技術'}" @click.prevent="tempBannerSwitch"><p class="d-none">獨家技術</p><img class="img-colorful" height="725" src="../../assets/images/left.png" alt=""></a>
                <a class="main_banner_right position-absolute" href="#" :class="{'active':BannerSwitch==='十大建設'}" @click.prevent="tempBannerSwitch"><p class="d-none">十大建設</p><img class="img-colorful" height="725" src="../../assets/images/right.png" alt=""></a>
              </div>
            </div>
          </div>
      </div>
      <div class="bg-cover main_content-bg">
        <div class="row">
          <div class="d-flex container align-items-center pt-5 main_content-title">
            <h2 class="col-12 h1 text-left mb-3">商城介紹</h2>
          </div>
          <div class="mb-5 part_content-bg" style="margin-top:90px">
            <div class="container d-lg-flex" style="height:100%">
              <div class="row align-items-center">
                <div class="col-lg-5">
                  <img class="part_img w-100" src="../../assets/images/content-img1.png" height="312" alt="">
                </div>
                <p class="h5 col-lg-7 mt-4 mt-lg-0 px-5" style="line-height: 40px;">世紀商城系統支援最即時的戰爭資源，馬上下單，立即使用，讓在在戰場上，攻無不克，戰無不勝，你就是手握王者之劍的霸主，現在加入會員還有九折優惠喔。</p>
              </div>
            </div>
          </div>
          <div class="my-5 part_content-bg part_content-bgRight">
            <div class="container d-lg-flex" style="height:100%">
              <div class="row align-items-center flex-column-reverse flex-lg-row">
                <p class="h5 col-lg-7 mt-4 mt-md-0 px-5" style="line-height: 40px;">在人人自危的世界，只有擁有最多資源的的人才會是贏家，在這個地下商城裡，傭兵、裝備...應用盡有，所有你要變強的資源都幫你準備好了。讓我們一起重返榮耀吧 !</p>
                <div class="col-lg-5">
                  <img class="part_img w-100" src="../../assets/images/part-img.jpg" height="312" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container main_content-title d-flex pr-0">
            <h2 class="h1 mb-3 text-left">客戶好評</h2>
            <router-link to="/shop" class="align-self-end ml-auto btn title_entry"><h4>進入商城 <i class="fas fa-arrow-circle-right"></i></h4></router-link>
          </div>
          <div class="container content-review_bg mt-2 d-flex justify-content-between px-0">
            <swiper :options="swiperOptionReview" ref="mySwiperReview" style="height:100px" class="mx-0" v-if="!isLoading">
              <swiper-slide v-for="(item,key) in reviewList" :key="key" class="ml-3">
                <p class="h6 font-weight-bolder">{{item.user.name}} : {{item.message || '好棒棒的商城，好棒棒的商品，好棒棒大集合'}}</p>
              </swiper-slide>
            </swiper>
            <div class="swiper-scrollbar" style="width:10px"></div>
          </div>
        </div>
        <div id="hotProduct">
          <div class="container pt-5 main_content-title d-flex pr-0">
            <h2 class="h1 mb-3 text-left">商品展示</h2>
            <router-link to="/shop" class="align-self-end ml-auto btn title_entry"><h4>進入商城 <i class="fas fa-arrow-circle-right"></i></h4></router-link>
          </div>
          <div class="container d-flex justify-content-start px-0">
            <a class="btn font-weight-bolder showBtn" :class="{'active':BannerSwitch==='專屬傭兵'}" @click.prevent="tempBannerSwitch">專屬傭兵</a>
            <a class="btn font-weight-bolder mx-2 showBtn" :class="{'active':BannerSwitch==='獨家技術'}" @click.prevent="tempBannerSwitch">獨家技術</a>
            <a class="btn font-weight-bolder showBtn" :class="{'active':BannerSwitch==='十大建設'}" @click.prevent="tempBannerSwitch">十大建設</a>
          </div>
          <swiper :options="swiperOption" ref="mySwiper" class="container mb-5" v-if="!isLoading">
            <swiper-slide v-for="itemMain in randomProducts" :key="itemMain.id">
              <div class="row justify-content-center">
                <div class="col-7 col-md-8 col-lg-9">
                  <ProductCard :item="itemMain"></ProductCard>
                </div>
              </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev sw" slot="button-prev"></div>
            <div class="swiper-button-next sw" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <MarketCart :childCarts="carts"></MarketCart>
    </main>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MarketCart from '../../components/MarketCart'
import ProductCard from '../../components/ProductCard'
import $ from 'jquery'

export default {
  components: {
    MarketCart,
    ProductCard,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptionReview: {
        slidesPerView: 3,
        speed: 100,
        autoplay: true,
        spaceBetween: 10,
        loop: true,
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        scrollbarHide: false,
        scrollbarDraggable: true,
        scrollbarSnapOnRelease: true,
        direction: 'vertical'
      },
      swiperOption: {
        initialSlide: 0,
        slidesPerView: 3,
        effect: 'coverflow',
        autoplay: true,
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1
        },
        loop: true,
        centeredSlides: true,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next.sw',
          prevEl: '.swiper-button-prev.sw'
        },
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }
      },
      allProducts: [],
      BannerSwitch: '專屬傭兵',
      sizeCol: true,
      fb_Id: [],
      pageContent: [],
      reviewList: [],
      isLoading: false,
      carts: []
    }
  },
  created () {
    const vm = this
    vm.getProducts()
    vm.getReview()
    vm.getCart()
    vm.$bus.$on('updateCart', () => {
      vm.getCart()
    })
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.$http.get(api).then((response) => {
        vm.carts = response.data.data.carts
      })
    },
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.allProducts = response.data.products
        vm.isLoading = false
      })
    },
    tempBannerSwitch (e) {
      const vm = this
      vm.BannerSwitch = e.currentTarget.text
      const topPositon = $('#hotProduct').offset().top
      $('html, body').animate({ scrollTop: topPositon }, 1000)
    },
    getReview () {
      const vm = this
      const api1 = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=1`
      const api2 = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=2`
      vm.$http.get(api1).then((response) => {
        const list1 = response.data.orders
        vm.$http.get(api2).then((response) => {
          const list2 = response.data.orders
          vm.reviewList = list1.concat(list2)
        })
      })
    }
  },
  // 讓 swiper 重新渲染
  watch: {
    randomProductsz () {
      const vm = this
      vm.isLoading = true
      setTimeout(() => {
        vm.isLoading = false
      }, 500)
    }
  },
  computed: {
    randomProducts () {
      const vm = this
      const filterData = vm.allProducts.filter((item) => {
        return vm.BannerSwitch === item.category
      })
      const newArray = []
      if (filterData.length <= 6) {
        return filterData
      } else {
        for (let index = 0; index < 6; index++) {
          const n = Math.floor(Math.random() * filterData.length)
          newArray.push(filterData[n])
          filterData.splice(n, 1)
        }
        return newArray
      }
    },
    swiper () {
      const vm = this
      return vm.$refs.mySwiper.swiper
    }
  }
}

// 計算 banner 按鈕位移距離
const originWidth = window.innerWidth
if (window.screen.availWidth !== originWidth) {
  const widthOffset = (originWidth - window.screen.availWidth) * 0.5
  setTimeout(() => {
    document.querySelector('#bannerMove').style.left = `${widthOffset}px`
  }, 10)
  window.onresize = function () {
    const normalWidth = window.innerWidth
    if (normalWidth !== originWidth) {
      const tempWidth = (normalWidth - originWidth) * 0.5
      document.querySelector('#bannerMove').style.left = `${widthOffset + tempWidth || 0}px`
    } else if (normalWidth === originWidth) {
      document.querySelector('#bannerMove').style.left = '0px'
    }
  }
} else {
  window.onresize = function () {
    const normalWidth = window.innerWidth
    if (normalWidth !== originWidth) {
      const tempWidth = (normalWidth - originWidth) * 0.5
      document.querySelector('#bannerMove').style.left = `${tempWidth || 0}px`
    } else if (normalWidth === originWidth) {
      document.querySelector('#bannerMove').style.left = '0px'
    }
  }
}
</script>
