<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <main>
      <div class="jumbotron-fluid">
          <div class="bg-cover main_banner position-relative">
            <div id="bannerMove">
              <div class="position-absolute position-relative d-none d-lg-block bannerMoveClass">
                <a class="main_banner_center position-absolute" :class="{'active':BannerSwitch==='專屬傭兵' }" href="#" @click.prevent="tempBannerSwitch"><p class="d-none">專屬傭兵</p><img class="img-colorful" height="725" src="../../assets/images/center.png" alt=""></a>
                <a class="main_banner_left position-absolute" href="#" :class="{'active':BannerSwitch==='獨家技術'}" @click.prevent="tempBannerSwitch"><p class="d-none">獨家技術</p><img class="img-colorful" height="725" src="../../assets/images/left.png" alt=""></a>
                <a class="main_banner_right position-absolute" href="#" :class="{'active':BannerSwitch==='十大建設'}" @click.prevent="tempBannerSwitch"><p class="d-none">十大建設</p><img class="img-colorful" height="725" src="../../assets/images/right.png" alt=""></a>
              </div>
            </div>
          </div>
      </div>
      <!-- <div class="divider"></div> -->
      <!-- 介紹內容 -->
      <div class="bg-cover main_content-bg">
        <div class="row">
          <div class="d-flex container align-items-center pt-5">
            <h2 class="col-12 mb-0 text-warning h2 text-center mb-0">商城介紹</h2>
          </div>
          <div class="my-5 part_content-bg">
            <div class="container d-lg-flex" style="height:100%">
              <div class="row align-items-center">
                <iframe class="part_img col-lg-5 px-0" src="https://www.youtube.com/embed/wRTmEmTMJdw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      </div>
      <div class="content-product-bg" id="hotProduct">
        <div class="container">
          <swiper :options="swiperOption" ref="mySwiper" style="top:0">
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
      <MarketCart></MarketCart>
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
        loopedSlides: 6,
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
      isLoading: false
    }
  },
  created () {
    const vm = this
    vm.getProducts()
  },
  methods: {
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
      $('html, body').animate({ scrollTop: topPositon }, 800)
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
if (window.screen.availWidth !== originWidth) { // 如果一開始視窗不是全視窗
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
  window.onresize = function () { // 如果一開始視窗就是全視窗
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

<style lang="scss">
#scrollbarstyle::-webkit-scrollbar {
  width: 12px;
  background-color: rgba(235, 214, 182, 0.479);
}
#scrollbarstyle::-webkit-scrollbar-thumb  {
  border-radius: 1px;
  box-shadow: inset 0 0 6px rgba(201, 126, 14, 0.945);
  background-color: rgb(80, 36, 7);
}
#scrollbarstyle::-webkit-scrollbar-track {
  border-radius: 1px;
  background-color: rgba(243, 213, 169, 0.473);
}

</style>
