<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <TopNav/>
    <router-view/>
  </div>
</template>

<script>
import TopNav from '@/views/TopNav.vue'
export default {
  components: {
    TopNav,
  },
  data(){
    return{
      
    }
  },
  created(){
    // this.$axios.get('/user/hello').then((response)=>{
    //   console.log(response)
    //   if(response.data.code == 2000){
    //     this.$store.dispatch("setLoginState",true)
    //   }else{
    //     this.$store.dispatch("setLoginState",false)
    //   }
    // }).catch((error)=>{
    //   console.log(error)
    // })
    //测试window session登录状态
    // alert(window.sessionStorage.getItem("loginState"))
  }
  
}
</script>

<style lang="less">
body{
  background-color: #222;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
