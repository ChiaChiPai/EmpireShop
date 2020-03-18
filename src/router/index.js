import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '',
      name: 'Index',
      component: () => import('../views/front/Index.vue'),
      redirect: '/home', // 如果什麼都沒有也會導回首頁
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/front/Home.vue')
        },
        {
          path: 'shop',
          name: 'Shop',
          component: () => import('../views/front/Shop.vue')
        },
        {
          path: 'detail/:detailId',
          name: 'Detail',
          component: () => import('../views/front/Detail.vue')
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('../views/front/Cart.vue')
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/back/Login.vue')
        }
      ]
    },
    {
      path: '/cart',
      name: 'Index',
      component: () => import('../views/front/Index.vue'),
      children: [
        {
          path: 'customerInfo',
          name: 'CustomerInfo',
          component: () => import('../views/front/CustomerInfo.vue')
        },
        {
          path: 'checkout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('../views/front/CustomerCheckout.vue')
        }
      ]
    },

    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('../views/back/Dashboard.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('../views/back/Products.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('../views/back/Coupon.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('../views/back/Orders.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
