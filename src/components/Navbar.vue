<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <a class="bg-dark text-warning p-3 h5 ml-auto" style="border-radius:5px" href="#" @click.prevent="backToHome">世紀商城</a>
      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link h5 mb-0" to="/admin/products">
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link h5 mb-0" to="/admin/orders">
              訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link h5 mb-0" to="/admin/coupon">
              優惠券列表
            </router-link>
          </li>
          <li class="nav-item text-nowrap ml-lg-5 font-weight-bold">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    },
    backToHome () {
      const vm = this
      vm.$router.push('/home')
    }
  }
}
</script>
