<template>
    <div id="Discover" class="Discover">
      <van-nav-bar
              title="发现"
              left-arrow
              @click-left="onClickLeft"
      >
        <van-icon name="home-o" slot="left" />
        </van-nav-bar>

        <van-cell-group>
            <van-cell icon="eye-o" value="看一看" v-on:click="look"  is-link />
            <van-cell  icon="question-o" value="问一问" v-on:click="ask"  is-link />
        </van-cell-group>
        <br>
        <van-cell-group>
            <van-cell icon="chat-o" value="聊一聊" v-on:click="chat"  is-link />
            <van-cell  icon="like-o" value="帮一帮" v-on:click="help"  is-link />
        </van-cell-group>

        <!--这个模块 等人员量上来在后期扩展-->
        <!--<van-cell-group>-->
            <!--<van-cell icon="cart-o" value="购一购" v-on:click="chat"  is-link />-->
        <!--</van-cell-group>-->
        <!--<br>-->
        <br>
        <van-cell-group>
            <van-cell  icon="smile-o" value="聚一聚" v-on:click="church"  is-link />
        </van-cell-group>
        <br>
        <div style="text-align: left; font-size: small;font-weight: lighter">&nbsp;饥渴看看&nbsp;疑惑问问&nbsp;肢体聊聊&nbsp;困难帮帮&nbsp;家人聚聚</div>
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
  look(){
      this.$router.push("/look");
  },
  ask(){
      this.$router.push("/ask");
  },
  chat(){
      this.$router.push("/chat");
  },
  help(){
      this.$router.push("/help");
  },
  church(){
      this.$router.push("/church");
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
