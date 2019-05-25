import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/me',
      name: 'Me',
      component: () => import('./views/Me.vue')
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
      path: '/new',
      name: 'New',
      component: () => import('./views/New.vue')
    },{
      path: '/index',
      name: 'Index',
      component: () => import('./views/Index.vue')
    },{
      path: '/cart',
      name: 'Cart',
      component: () => import('./views/Cart.vue')
    },{
      path: '/goods',
      name: 'Goods',
      component: () => import('./views/Goods.vue')
    }
  ]
})
