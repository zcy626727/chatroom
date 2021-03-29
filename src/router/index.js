import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatRoom from '../views/ChatRoom.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
//引入api和store
import { checkloginState } from '@/api/user'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: '',
    component: Home,

  },
  {
    path: '/chatRoom',
    name: 'ChatRoom',
    component: ChatRoom,
    meta:{
      //添加字段，表示此路由需要登陆
      requireAuth:true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//设置全局钩子，每次跳转前发送请求测试用户是否是登录状态
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){//需要登陆
    checkloginState().then((response)=>{//检查登录状态
      if(response.data.code == 2000){//已经登陆
        store.dispatch("setLoginState",true)
      }else{//尚未登录，之后将会跳转到login界面
        store.dispatch("setLoginState",false)
      }
    }).catch((error)=>{
      console.log(error)
      //清空登陆状态和用户信息
      store.dispatch("setLoginState",false)
      store.dispatch("setLoginInfo",false)
    })
    if(store.getters.getLoginState){//已登录
      store.dispatch("setCurrentNav",to.name)
      next()
    }else{//未登录
      store.dispatch("setCurrentNav",'login')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }else{
    store.dispatch("setCurrentNav",to.name)
    next()
  }
})

export default router
