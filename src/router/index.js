import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/front/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/Home.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/front/News.vue')
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

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

export default router
