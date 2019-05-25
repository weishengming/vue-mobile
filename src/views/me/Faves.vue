<template>
<div>
    <van-nav-bar
            title="收藏"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
    <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="imageURL"
            origin-price="10.00"
    >
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
    </van-card>
</div>
</template>
<script>
    import { NavBar,Card,Button  } from 'vant';
    export default {
        name: "faves",
        components: {
            [Button.name]:Button,
            [NavBar.name]:NavBar,
            [Card.name]:Card,
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            },
        }
    }
</script>
<style scoped>

</style>
