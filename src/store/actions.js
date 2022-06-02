/*
包含多个事件回调函数的对象，通过执行: commit()来触发 mutation 的调用, 间接更新 state
 组件中: $store.dispatch('action 名称', data1) 
 */
import { SET_LOGIN_STATE,SET_CURRENT_NAV,SET_LOGIN_INFO } from './mutation-types'
import { login,register,logout } from '@/api/user'

export default {
  //设置用户信息，info为false表示清空用户信息
  setLoginInfo({ commit }, info) {
    commit(SET_LOGIN_INFO, info)
  },
  //设置登陆状态(控制导航显示)
  setLoginState({ commit }, s) {
    commit(SET_LOGIN_STATE, s)
  },
  //设置当前选择的导航栏
  setCurrentNav({ commit }, s) {
    commit(SET_CURRENT_NAV, s)
  },
  //登录
  Login({ commit }, userInfo) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用 
    return new Promise((resolve, reject) => { //封装一个 Promise
      login(userInfo.username.trim(), userInfo.password.trim(),userInfo.rememberMe).then(response => { //使用 login 接口进行网络请求
        commit(SET_LOGIN_STATE, true)//设置已登录状态 
        commit(SET_LOGIN_INFO,response.data.data.userInfo)
        resolve(response) //将结果封装进 Promise
      }).catch(error => {
        commit(SET_LOGIN_STATE, false)//设置未登录状态 
        commit(SET_LOGIN_INFO,false)
        reject(error)
      })
    })
  },
  //注册，注册成功后自动调用登录接口进行登录
  Register({dispatch},userInfo){
    return new Promise((resolve,reject)=>{
      register(userInfo.username.trim(),userInfo.password.trim(),userInfo.nickname.trim(),userInfo.email.trim()).then(()=>{
        return dispatch("Login",userInfo).then((response) => {
          if (response.data.code == 2001) {
            resolve(response)
          } else {
            reject(response)
          }
        })
      })

    })
  },
  //注销
  Logout({ commit }) { 
    return new Promise((resolve, reject) => {
      logout().then((response)=>{
        if(response.data.code == 2002){//注销成功
          commit(SET_LOGIN_STATE,false)//设置登录状态
          resolve(response)
        }else{//注销失败，保持原状态
          reject(response)
        }
      })
    })
  },


}