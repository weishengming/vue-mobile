<template>
  <div id="app">
    <!--<van-tabbar v-model="active">-->
      <!--<van-tabbar-item icon="goods-collect-o" ><router-link to="/index">商品</router-link></van-tabbar-item>-->
      <!--<van-tabbar-item icon="cart-o"><router-link to="/cart">购物车</router-link></van-tabbar-item>-->
      <!--<van-tabbar-item icon="contact"><router-link to="/me">我的</router-link></van-tabbar-item>-->
    <!--</van-tabbar>-->
    <router-view/>
  </div>
</template>
<script>
// import { Tabbar, TabbarItem } from 'vant'
export default {
  // components: {
  //   [Tabbar.name]:Tabbar,
  //   [TabbarItem.name]: TabbarItem
  // },
  data () {
    return {
      // val: 0
    }
  },
  methods: {
  },
  //进入组件时
  beforeRouteEnter: function (to, from, next) {
    window.document.body.style.backgroundColor = '#fbf9ff';
    next()
  },
  // beforeRouteLeave(to,from,next){
  //   window.document.body.style.backgroundColor='';
  //   next();
  // }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*#nav {*/
  /*padding: 30px;*/
  /*a {*/
    /*font-weight: bold;*/
    /*color: #2c3e50;*/
    /*&.router-link-exact-active {*/
      /*color: #42b983;*/
    /*}*/
  /*}*/
/*}*/
</style>
