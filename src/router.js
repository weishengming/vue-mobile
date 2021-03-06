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
          path: '/look',
          name: 'Look',
          component: () => import('./views/discover/Look.vue')
      },
      {
          path: '/ask',
          name: 'Ask',
          component: () => import('./views/discover/Ask.vue')
      },
      {
          path: '/chat',
          name: 'Chat',
          component: () => import('./views/discover/Chat.vue')
      },
      {
          path: '/help',
          name: 'Help',
          component: () => import('./views/discover/Help.vue')
      },
      {
          path: '/church',
          name: 'Church',
          component: () => import('./views/discover/Church.vue')
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
        path: '/me',
        name: 'Me',
        component: () => import('./views/Me.vue')
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
