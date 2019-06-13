<template>
    <div id="Discover" class="Discover">
      <van-nav-bar
              title="发现"
              left-arrow
              @click-left="onClickLeft"
              right-text="设置"
              @click-right="onClickRight"
      />
        <van-cell-group>
            <van-cell icon="eye-o" value="看一看" v-on:click="addressList"  is-link />
            <van-cell  icon="chat-o" value="问一问" v-on:click="faves"  is-link />
        </van-cell-group>
        <br>
        <van-cell-group>
            <van-cell icon="search" value="搜一搜" v-on:click="addressList"  is-link />
            <van-cell  icon="friends-o" value="帮一帮" v-on:click="faves"  is-link />
        </van-cell-group>
        <br/>
    </div>
</template>
<script>
import { NavBar,Row, Col, Icon, Cell,Panel, CouponCell,CellGroup } from 'vant';
export default {
  components: {
    [NavBar.name]:NavBar,
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

    }
  },
  methods:{
    onClickLeft(){
      this.$router.push("/index")
    },
    onClickRight(){
       this.$router.push("/setting")
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
