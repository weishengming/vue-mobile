<template>
    <div id="Index" class="">
        <van-nav-bar
                title="微生命"
                right-text="我的"
                @click-right="onClickRight"
                @click-left="onClickLeft"
        >
            <van-icon name="bulb-o" slot="right" />
            <van-icon name="contact" slot="left" />
        </van-nav-bar>


        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import { NavBar,Swipe, Icon,SwipeItem } from 'vant';
export default {
  components: {
      [NavBar.name]:NavBar,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
      [Icon.name]:Icon,
  },
  data () {
    return {
        images: [
            'https://img.yzcdn.cn/1.jpg',
            'https://img.yzcdn.cn/2.jpg'
        ]
    }
  },
  methods:{
      onClickRight(){
          this.$router.push("/discover");
      },
      onClickLeft(){
          this.$router.push("/me");
      }
  }
}
</script>

<style lang="less">
  .card__footer {
    padding-top: 10px;
  }
  .card__tags {
    .van-tag {
      margin-right: 5px;
    }
  }
</style>
