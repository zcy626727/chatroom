<template>
  <header>
    <a href="#" class="logo">LOGO</a>
    <div class="right-nav">
      <nav class="site-nav">
        <ul>
          <li
            v-for="(name, index) in items"
            :key="index"
            :class="{ active: routers[index] == activeItem }"
            @click="navListClick()"
          >
            <router-link class="router" :to="routers[index]"
              ><a href="#">{{ name }}</a></router-link
            >
          </li>
        </ul>
        <!-- 白天夜晚风格切换 -->
      </nav>

      <ul class="info">
        <li><div class="mid"></div></li>
        <!-- <li>
          <a
            href="#"
            class="dark-light-switcher"
            data-toggle="tooltip"
            title="模式切换"
            data-placement="right"
          >
            <i class="fa fa-moon-o"></i>
          </a>
        </li> -->

        <li v-if="!logined">
          <a href="/login">登录</a>
        </li>
        <li v-if="!logined">
          <a href="/register">注册</a>
        </li>
        <li v-else>
          <el-dropdown trigger="click" size="medium" >
          <span class="el-dropdown-link">
            <a href="#">
                <img style="height: 30px;width: 30px;" src="../assets/media/img/face.jpg" alt="user" class="rounded-circle">
            </a>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item divided @click="clickLogout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
          

        </li>

        
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  name: "TopNav",
  data() {
    return {
      //是否已登录
      items: ["网站首页", "聊天室"],
      routers: ["/", "/ChatRoom"],
    };
  },
  methods: {
    // 导航栏点击事件
    navListClick() {
      // alert("/"+this.$store.getters.getCurrentNav)
    },
    clickLogout(){
      this.$store.dispatch("Logout").then((response) => {
        if (response.data.code == 2002) {
          this.$notify({
            title: "成功",
            message: response.data.message,
            type: "success",
            duration: 1000
          });
          this.$router.push("/");
        } else {
          this.$notify.error({
            title: "错误",
            message: "注销失败",
            duration: 1000
          });
        }
      })
      .catch(() => {});
    }
  },
  computed:{
    logined(){
      return this.$store.getters.getLoginState
    },
    activeItem(){
      return '/'+this.$store.getters.getCurrentNav
    }
  },
  created() {
    // console.log(this.$route.path)
    console.log(this)
    // console.log(this.jquery)

    // console.log(this.$store.state.loginState)
    // console.log("修改后")
    // this.$store.commit('setLoginState',false)
    // console.log(this.$store.state.loginState)
    // console.log("修改后")
    // this.$store.dispatch('setLoginState',true)
    // console.log(this.$store.getters.getLoginState)
    // alert("/"+this.$store.getters.getCurrentNav)

  },
};
</script>

<style lang="less" scoped>
header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  height: 10vh;

  .logo {
    font-size: 34px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    color: black;
  }

  .right-nav {
    display: flex;

    .site-nav {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      :hover li:not(:hover) a {
        opacity: 0.5;
      }

      ul {
        .router {
          position: relative;
          padding: 30px 25px 30px 25px;
        }
        li:hover::after,
        li.active::after {
          transform: scaleX(1);
        }

        li::after {
          position: absolute;
          content: "";
          top: 90%;
          left: 0;
          width: 100%;
          height: 2px;
          background: #3498db;
          transform: scaleX(0);
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      }
    }

    .info {
      .mid {
        height: 100%;
        width: 2px;
        background-color: black;
        opacity: 0.2;
      }

      li {
        position: relative;
        padding: 30px 15px 30px 15px;

        i {
          margin-top: 50%;
        }
      }
    }

    ul {
      display: flex;
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        position: relative;
        padding: 0px 0px 0px 0px;
        cursor: pointer;
      }
    }
  }
}

ul li a {
  position: relative;
  display: flex;
  color: rgb(0, 0, 0);
  font-family: Lato, sans-serif;
  text-decoration: none;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  
}
</style>