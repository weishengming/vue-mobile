<template>
    <div id="Me" class="Me">
      <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" />

          <router-link to="/cart">待付款</router-link>
        </van-col>
        <van-col span="6">
          <van-icon name="records" />

          <router-link to="/goods">待接单</router-link>
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" />
          <router-link to="/register">待付款</router-link>
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />
          已发货
        </van-col>
      </van-row>

      <van-cell-group class="user-group">
        <van-cell icon="records" value="全部订单" is-link />
      </van-cell-group>

      <!--<van-cell-group>-->
        <!--<van-cell icon="points" value="我的积分" is-link />-->
        <!--<van-cell icon="gold-coin-o" value="我的优惠券" is-link />-->
        <!--<van-cell icon="gift-o" value="我收到的礼物" is-link />-->
      <!--</van-cell-group>-->

      <van-cell-group>
        <van-cell icon="location-o" value="我的地址" v-on:click="addressList"  is-link />
        <van-cell  icon="star-o" value="我的收藏" v-on:click="faves"  is-link />
      </van-cell-group>
      <br>
      <van-cell-group>
       <van-cell icon="user-o"  v-model="user.userName"   size="large" v-on:click="editUser" label="" is-link/>
       </van-cell-group>
    </div>
</template>

<script>

import { Row, Col, Icon, Cell,Panel, CouponCell,CellGroup } from 'vant';
export default {
  components: {
    [Panel.name]:Panel,
    [Cell.name]:Cell,
    [CouponCell.name]:CouponCell,
    [Row.name]:Row,
    [Col.name]:Col,
    [Icon.name]:Icon,
    [CellGroup.name]:CellGroup,
  },
  data () {
    return {
      user:{
        userName:'登录/注册'
      }
    }
  },
  created(){
    //通过token 获取用户信息
    this.$axios.get('/user/getUserInfo',localStorage.getItem('token')).then(res=>{
      if("200"==res.data.code){
        localStorage.setItem('userId',res.data.data.id);
        this.user.userName=res.data.data.name;
      }else{
        alert(res.data.msg);
      }
    })
  },
  methods:{
    editUser(){
        if(this.userName=="登录/注册"){
            this.$router.push("/login")
        }else {
            this.$router.push("/user")
        }
    },
    faves(){
        this.$router.push("/faves")
    },
    addressList(){
        this.$router.push("/addressList")
    }
  },
  //进入组件时
  beforeRouteEnter: function (to, from, next) {
    window.document.body.style.backgroundColor = '#fbf9ff';
    next()
  },

}
</script>

<style lang="less">
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }

    &-group {
      margin-bottom: 15px;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
