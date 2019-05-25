import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初始化 token 默认为空
    token:'',
    // userId:''
  },
  mutations: {
    // 处理 给token赋值
    setToken(state,token){
      state.token=token;
    },
    // setUserId(state,userId){
    //   state.userId=userId;
    // }
  },
  actions: {
    // 提交改变后的状态
    setToken({state,commit},token){
      commit("setToken",token);
    },
    // setUserId({state,commit},userId){
    //   commit("setUserId",userId);
    // }
  }
})
