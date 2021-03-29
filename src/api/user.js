import axios from 'axios' //引入封装好的 axios 请求
 
const request = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, //服务端url
  timeout: 5000, 
})
request.defaults.withCredentials=true

export function login(username, password,rememberMe) { //登录接口
  return request({ //使用封装好的 axios 进行网络请求
    url: '/login',
    method: 'post',
    data: { //提交的数据
      username,
      password,
      "remember-me":rememberMe
    }
  })
}

export function logout() { //注销接口
  return request({ 
    url: '/logout',
    method: 'get',
  })
}

export function register(username,password,nickname,email){
  return request({
    url: '/user/register',
    method: 'post',
    data: { //提交的数据
      username,
      password,
      nickname,
      email
    }
  })
}

export function checkloginState(){
  return request({
    url: '/user/hello',
    method: 'get'
  })
}
