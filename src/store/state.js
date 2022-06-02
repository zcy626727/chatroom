/*
状态管理s对象模块
 */


export default {
    loginState:window.sessionStorage.getItem('loginState'),
    loginInfo:{
        uId:window.sessionStorage.getItem('uId'),
        username:window.sessionStorage.getItem('username'),
        nickname:window.sessionStorage.getItem('nickname'),
        email:window.sessionStorage.getItem('email'),
        regTime:window.sessionStorage.getItem('regTime'),
    },
    currentNav:'',
}