<template>
    <div id="Reg">
      <van-nav-bar
        title="注册"
        left-text="返回"
        right-text="注册"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <van-cell-group>
        <van-field
          v-model="regUser.userName"
          required
          label="手机号"
          right-icon="question-o"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="regUser.name"
          required
          label="昵称"
          placeholder="请输入昵称"
        />
        <van-field
          v-model="regUser.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <br>
      <van-row>
        <van-col span="1">&nbsp;&nbsp;</van-col>
        <van-col span="22"><van-button  type="primary" size="large" v-on:click="register">注册</van-button></van-col>
      </van-row>
    </div>
</template>

<script>
  import { NavBar,Field,CellGroup,Button,Row, Col  } from 'vant';
  export default {
    name: 'Reg',
    data(){
      return{
        regUser: {
          userName: '',
          name: '',
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
      onClickLeft(){
        this.$router.go(-1);
      },
      register(){
        this.$axios.post('/user/register',this.regUser).then(res=>{
          if("200"==res.data.code){
            this.$router.push("/login")
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
