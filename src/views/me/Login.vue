<template>
  <div id="Login" name="Login">
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field
        v-model="loginUser.userName"
        required
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="loginUser.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <br>
    <van-row>
      <van-col span="1">&nbsp;&nbsp;</van-col>
      <van-col span="22"><van-button  type="primary" size="large" v-on:click="login">登录</van-button></van-col>
    </van-row>
  </div>

</template>

<script>
  import { NavBar,Field,CellGroup,Button,Row, Col  } from 'vant';
  export default {
    name: 'Login',
    data(){
      return{
        loginUser: {
          userName: '',
          password: ''
        }
      }
    },
    components: {
      [Field.name]:Field,
      [CellGroup.name]:CellGroup,
      [NavBar.name]:NavBar,
      [Button.name]:Button,
      [Row.name]:Row,
      [Col.name]:Col,


    },
    methods:{
      onClickRight(){
        this.$router.push("/reg");
      },
      login(){
        this.$axios.post('/user/login',this.loginUser).then(res=>{
          if("200"==res.data.code){
            let token = res.data.data;
            localStorage.setItem('token',token);
            this.$store.dispatch('setToken',token);
            this.$router.push("/index")
          }else{
            alert(res.data.msg);
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
