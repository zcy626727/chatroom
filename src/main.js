import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入jQuery、bootstrap
import jquery from 'jquery'
import 'jquery.nicescroll'
import 'bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
//
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'

// import APlayer from '@moefe/vue-aplayer';
// import "vue-aplayer";  



const app = createApp(App)
axios.defaults.withCredentials=true
app.config.globalProperties.jQuery = jquery
app.config.globalProperties.$axios = axios



app.use(store).use(router).use(ElementPlus, { locale }).mount('#app')
