"use strict";

import Vue from 'vue';
import axios from "axios";
import Router from '../router'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};
// 超时时间
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:9888";  //修改默认地址
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function(config) {
    //设置默认header
    config.headers.token = localStorage.token;
    config.headers.language='10';
    config.headers.platform="30";
    config.headers.devType = "30";
    config.headers.devNo = "0";
    config.headers.appType = "0";
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截  401 token过期处理

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
      if("401"==response.data.errorCode){
          Router.push("/login")
      }
      if("200"==response.data.code){
         return response;
     }else {
         alert(response.data.msg);
     }
  },
  function(error) {
      alert(error);
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)
export default Plugin;
