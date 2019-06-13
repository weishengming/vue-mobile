import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/discover',
      name: 'Discover',
      component: () => import('./views/Discover.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/me/Login.vue')
    },
    {
      path: '/reg',
      name: 'Reg',
      component: () => import('./views/me/Reg.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('./views/me/User.vue')
    },
    {
        path: '/addressList',
        name: 'AddressList',
        component: () => import('./views/me/AddressList.vue')
    },
    {
        path: '/faves',
        name: 'Faves',
        component: () => import('./views/me/Faves.vue')
    },{
      path: '/new',
      name: 'New',
      component: () => import('./views/back/New.vue')
    },{
        path: '/setting',
        name: 'Setting',
        component: () => import('./views/me/Setting.vue')
     },{
      path: '/index',
      name: 'Index',
      component: () => import('./views/Index.vue')
    },{
      path: '/cart',
      name: 'Cart',
      component: () => import('./views/back/Cart.vue')
    },{
      path: '/goods',
      name: 'Goods',
      component: () => import('./views/back/Goods.vue')
    }
  ]
})
