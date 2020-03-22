<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <main>
      <div class="news_banner"></div>
      <div class="bg-cover main_content-bg" id="newsTop">
        <div class="row">
          <div class="container part_news_bg my-5">
            <div class="d-flex container align-items-center pt-3" style="border-bottom: 3px double rgba(173, 145, 122, 0.884);">
              <h2 class="col-12 text-warning font-weight-bolder text-center">
                <span>最新消息</span>
                <ul id="pills-tab" class="nav nav-pills d-flex h5 pl-0 justify-content-end mb-1" role="tablist">
                  <li class="nav-item" style="list-style-type:none">
                    <a class="news-link active" id="pills-news-tab" data-toggle="pill" href="#pills-news" role="tab" aria-controls="pills-news" aria-selected="true">
                      <span class="badge badge-pill badge-light news-category">活動公告</span>
                    </a>
                  </li>
                  <li class="nav-item" style="list-style-type:none;">
                    <a class="news-link ml-3" id="pills-system-tab" data-toggle="pill" href="#pills-system" role="tab" aria-controls="pills-system" aria-selected="false">
                      <span class="badge badge-pill badge-light news-category">系統公告</span>
                    </a>
                  </li>
                </ul>
              </h2>
            </div>
            <div class="row align-items-center">
              <div class="tab-content col-12" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab">
                  <a :href="item.url" target="_blank" class="d-flex news-block" v-for="item in pageContent" :key="item.id">
                    <div class="d-none d-md-block col-md-2 my-2 position-relative">
                      <img :src="item.media.image.src" class="card-img-top img-cover" height="100" alt="臉書粉專圖" />
                      <span class="position-absolute" style="left:1rem;"><i class="fab fa-facebook-square h5"></i></span>
                    </div>
                    <div class="col-12 col-md-10 my-2 d-flex flex-column justify-content-center">
                      <h5 class="text-right mb-0 text-secondary" style="font-size:0.75rem;  margin-top:-16px;">{{item.date|toLocalDate}}</h5>
                      <p class="h6 mt-4 mt-lg-0 news-content text-warning mb-0" style="box-orient: vertical; line-clamp: 2;">{{item.description}}</p>
                    </div>
                  </a>
                  <nav aria-label="Page navigation">
                    <ul class="pagination my-2 justify-content-center">
                      <li class="page-item" :class="{'active':currentPage === 1}">
                        <a class="page-link custom-page" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item" :class="{'active':item === currentPage}" v-for="item in page" :key="item">
                        <a class="page-link custom-page" href="#" @click.prevent="changePage(item)">{{item}}</a>
                      </li>
                      <li class="page-item" :class="{'active':currentPage === page}">
                        <a class="page-link custom-page" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="tab-pane fade" id="pills-system" role="tabpanel" aria-labelledby="pills-system-tab">
                  <div class="row text-warning px-5 py-3" style="border-bottom: 0.5px solid rgba(173, 145, 122, 0.884);">
                    <div class="col-1 mb-0">
                      <p class="h6">2020/03/15</p>
                    </div>
                    <div class="col-10 ml-auto mb-0">
                      <p class="h6 mt-4 mt-lg-0">預計 2020/3/24 00:00~07:00 系統維護，造成不便之處，敬請見諒</p>
                    </div>
                  </div>
                  <div class="row text-warning px-5 py-3" style="border-bottom: 0.5px solid rgba(173, 145, 122, 0.884);">
                    <div class="col-1 mb-0">
                      <p class="h6">2020/03/10</p>
                    </div>
                    <div class="col-10 ml-auto">
                      <p class="h6 mt-4 mt-lg-0">預計 2020/3/20 00:00~05:00 系統維護，造成不便之處，敬請見諒</p>
                    </div>
                  </div>
                  <div class="row text-warning px-5 py-3" style="border-bottom: 0.5px solid rgba(173, 145, 122, 0.884);">
                    <div class="col-1 mb-0">
                      <p class="h6">2020/01/20</p>
                    </div>
                    <div class="col-10 ml-auto">
                      <p class="h6 mt-4 mt-lg-0">預計 2020/2/01 00:00~05:00 系統維護，造成不便之處，敬請見諒</p>
                    </div>
                  </div>
                  <div class="row text-warning px-5 py-3" style="border-bottom: 0.5px solid rgba(173, 145, 122, 0.884);">
                    <div class="col-1 mb-0">
                      <p class="h6">2020/01/02</p>
                    </div>
                    <div class="col-10 ml-auto">
                      <p class="h6 mt-4 mt-lg-0">因一萬人同時上線導致網站流量過載，工程師團隊在這邊深感抱歉，為表達本公司歉意，現在開始到二月底，全站九折優惠</p>
                    </div>
                  </div>
                  <div class="row text-warning px-5 py-3" style="border-bottom: 0.5px solid rgba(173, 145, 122, 0.884);">
                    <div class="col-1 mb-0">
                      <p>2019/12/20</p>
                    </div>
                    <div class="col-10 ml-auto">
                      <p class="h6 mt-4 mt-lg-0">預計 2020/1/1 00:00~02:00 系統維護，造成不便之處，敬請見諒</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      fbContent: [],
      fb_Id: [],
      fbDate: [],
      page: 0,
      currentPage: 0,
      pageContent: [],
      isLoading: false
    }
  },
  created () {
    const vm = this
    vm.getFB_Content()
    setTimeout(() => {
      const topPositon = $('#newsTop').offset().top
      $('html, body').animate({ scrollTop: topPositon }, 800)
    }, 10)
  },
  methods: {
    getFB_Content () {
      const api = 'https://cors-anywhere.herokuapp.com/https://graph.facebook.com/v6.0/ageEmpireShop/feed?access_token=EAAL5Tx0lRX0BAPWlyqaK1X82SwV29NyW1VPoSfKsI5TiXghZAVugInKEFhuNdWfYsG6DWKg5qrBTOqRnC5QUrIyRQnaGZAu2jZAv3iqFHpZA1gWdyEMxoMEPw9kUgA9frCZArxDKO7h0YZC8fvmA8ZAHaapgI4RXYe0wUhZCrK4NYAZDZD'
      const vm = this
      vm.isLoading = true
      vm.$http.get(api, { withCredentials: false }).then((response) => {
        const dataArr = response.data.data
        vm.fb_Id = dataArr.map((item) => {
          return item.id
        })
        vm.fbDate = dataArr.map((item) => {
          return item.created_time
        })
        if (vm.fb_Id) {
          const pageLength = vm.fb_Id.length
          vm.page = Math.round(pageLength / 4)
          vm.getFBContent()
        }
      })
    },
    getFBContent () {
      const vm = this
      for (let i = 0; i <= vm.fb_Id.length; i++) {
        const id = vm.fb_Id[i]
        vm.$http.get(`https://cors-anywhere.herokuapp.com/https://graph.facebook.com/v2.2/${id}?fields=attachments&access_token=EAAL5Tx0lRX0BAPWlyqaK1X82SwV29NyW1VPoSfKsI5TiXghZAVugInKEFhuNdWfYsG6DWKg5qrBTOqRnC5QUrIyRQnaGZAu2jZAv3iqFHpZA1gWdyEMxoMEPw9kUgA9frCZArxDKO7h0YZC8fvmA8ZAHaapgI4RXYe0wUhZCrK4NYAZDZD`, { withCredentials: false }).then((response) => {
          const newArr = {
            ...response.data.attachments.data[0]
          }
          newArr.date = vm.fbDate[i]
          vm.fbContent.push(newArr)
          vm.changePage()
          vm.isLoading = false
        })
      }
    },
    changePage (page = 1) {
      const vm = this
      vm.currentPage = page
      vm.pageContent = vm.fbContent.filter((item, index) => {
        return index < page * 4 && index >= (page - 1) * 4
      })
    }
  }
}
</script>
