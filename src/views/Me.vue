<template>
    <div id="Me" class="Me">
        <van-nav-bar
                title="我的"
                left-arrow
                @click-left="onClickLeft">
        <van-icon name="home-o" slot="left" />
        </van-nav-bar>

        <van-cell-group>
            <van-cell icon="manager-o" value="帐号管理" v-on:click="addressList"  is-link />
            <van-cell  icon="star-o" value="我的关注" v-on:click="faves"  is-link />
        </van-cell-group>
        <br>
        <van-cell-group>
            <van-cell  icon="browsing-history-o" value="隐私设置" v-on:click="faves"  is-link />
            <van-cell  icon="location-o" value="地址管理" v-on:click="faves"  is-link />
        </van-cell-group>
        <br>
        <van-cell-group>
            <van-cell icon="comment-o" value="帮助与反馈" v-on:click="addressList"  is-link />
            <van-cell  icon="phone-o" value="关于我们" v-on:click="faves"  is-link />
        </van-cell-group>
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
            onClickLeft(){
                this.$router.push("/index")
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
