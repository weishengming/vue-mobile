<template>
    <div>
        <van-nav-bar
                title="帮一帮"
                left-arrow
                @click-left="onClickLeft"
        />
        帮一帮
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
        name: "Help",
        methods:{
            onClickLeft(){
                this.$router.push("/discover")
            },

        }
    }
</script>

<style scoped>

</style>
