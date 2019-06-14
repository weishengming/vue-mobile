<template>
    <div>
        <van-nav-bar
                title="问一问"
                left-arrow
                @click-left="onClickLeft"
        />

        问一问
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
        name: "Ask",
        methods:{
            onClickLeft(){
                this.$router.push("/discover")
            },

        }
    }
</script>

<style scoped>

</style>
