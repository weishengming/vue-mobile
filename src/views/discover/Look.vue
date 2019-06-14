<template>
    <div>
        <van-nav-bar
                title="看一看"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-tabs @click="onClick" animated>
            <van-tab title="图文">内容 1</van-tab>
            <van-tab title="视频">内容 2</van-tab>
        </van-tabs>
    </div>

</template>

<script>
    import { NavBar,Row, Col, Icon, Cell,Panel, Tab, Tabs} from 'vant';
    export default {
        components: {
            [NavBar.name]:NavBar,
            [Panel.name]:Panel,
            [Cell.name]:Cell,
            [Row.name]:Row,
            [Col.name]:Col,
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [Icon.name]:Icon,
        },
        name: "Look",
        methods:{
            onClickLeft(){
                this.$router.push("/discover")
            },
            onClick(index, title) {
                this.$toast(title);
            }
        }
    }
</script>

<style scoped>

</style>
