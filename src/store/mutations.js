/*
直接更新 state 的方法(回调函数)的对象
 */
import { SET_LOGIN_STATE, SET_LOGIN_INFO, SET_CURRENT_NAV } from './mutation-types'

export default {
  [SET_LOGIN_STATE](state, s) {
    if (s) {
      window.sessionStorage.setItem('loginState', s)
    } else {
      window.sessionStorage.removeItem('loginState')
    }
    state.loginState = s
  },
  [SET_LOGIN_INFO](state, loginInfo) {

    if (loginInfo) {
      window.sessionStorage.setItem("uId", loginInfo.uId)
      window.sessionStorage.setItem("username", loginInfo.username)
      window.sessionStorage.setItem("nickname", loginInfo.nickname)
      window.sessionStorage.setItem("email", loginInfo.email)
      window.sessionStorage.setItem("regTime", loginInfo.regTime)
      state.loginInfo.uId = loginInfo.uId
      state.loginInfo.username = loginInfo.username
      state.loginInfo.nickname = loginInfo.nickname
      state.loginInfo.email = loginInfo.email
      state.loginInfo.regTime = loginInfo.regTime
    } else {
      window.sessionStorage.removeItem("uId")
      window.sessionStorage.removeItem("username")
      window.sessionStorage.removeItem("nickname")
      window.sessionStorage.removeItem("email")
      window.sessionStorage.removeItem("regTime")
      state.loginInfo.uId = ''
      state.loginInfo.username = ''
      state.loginInfo.nickname = ''
      state.loginInfo.email = ''
      state.loginInfo.regTime = ''
    }
  },
  [SET_CURRENT_NAV](state, s) {
    state.currentNav = s
  }
}