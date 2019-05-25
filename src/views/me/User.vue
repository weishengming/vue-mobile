<template>
    <div>
        <van-nav-bar
                title="编辑"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />

        <van-cell-group>
            <van-field
                    v-model="user.userName"
                    required
                    label="用户名"
                    disabled
                    right-icon="question-o"
                    placeholder="请输入手机号"
                    @click-right-icon="$toast('不可修改')"
            />
            <van-field
                    v-model="user.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
            />
            <van-field
                    v-model="user.name"
                    required
                    label="昵称"
                    placeholder="请输入昵称"
            />
            <van-field
                    v-model="user.phone"
                    required
                    label="手机号"
                    placeholder="请输入手机号"
            />
            <van-radio-group v-model="user.sex">
                <van-cell-group>
                    <van-cell icon="user-o"  title="男" clickable @click="user.sex = '男'">
                        <van-radio name="男" />
                    </van-cell>
                    <van-cell icon="contact"  title="女" clickable @click="user.sex = '女'">
                        <van-radio name="女" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
            <br>

        </van-cell-group>
        <br>
        <van-row>
            <van-col span="1">&nbsp;&nbsp;</van-col>
            <van-col span="22"><van-button  type="primary" size="large" v-on:click="save">保存</van-button></van-col>
        </van-row>
    </div>
</template>

<script>
    import { NavBar,Field,CellGroup,Button,Row, Col,RadioGroup, Radio,Cell   } from 'vant';
    export default {
        name: "User",
        data(){
            return{
                radio: '1',
                checked: true,
                user: {
                    userName: '',
                    name: '',
                    phone:'',
                    sex:'男',
                    password: ''
                }
            }
        },
        created() {
            this.getUserInfo();
        },
        components: {
            [Cell.name]:Cell,
            [RadioGroup.name]:RadioGroup,
            [Radio.name]:Radio,
            [Field.name]:Field,
            [CellGroup.name]:CellGroup,
            [NavBar.name]:NavBar,
            [Button.name]:Button,
            [Row.name]:Row,
            [Col.name]:Col,
        },
        methods:{
            getUserInfo(){
                this.$axios.get('/user/getUserInfo',localStorage.getItem('token')).then(res=>{
                    if("200"==res.data.code){
                        localStorage.setItem('userId',res.data.data.id);
                        this.$store.dispatch('setUserId',res.data.data.id);
                        this.user=res.data.data;
                    }else{
                        alert(res.data.msg);
                    }
                })
            },
            onClickLeft(){
                this.$router.go(-1);
            },
            save(){
                this.$axios.post('/user/save',this.user).then(res=>{
                    this.$router.push("/me")
                })
            }
        }
    }
</script>

<style scoped>

</style>
