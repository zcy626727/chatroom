/*
包含多个计算属性(get)的对象
组件中: $store.getters.xxx
 */
export default {
  getLoginState: state =>{
    return state.loginState
  },
  getCurrentNav: state =>{
    return state.currentNav
  },
  getLoginInfo: state =>{
    return state.loginInfo
  },
}