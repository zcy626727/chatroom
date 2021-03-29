<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <!-- <aplayer :audio="audio" :lrcType="3" /> -->
 
  <button @click="test">点我测试</button>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import aplayer from "vue-aplayer";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    // 'aplayer':APlayer
  },
  data() {
    return {
    };
  },
  methods: {
    test() {
      this.$prompt("请输入申请信息", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{0,100}$/,
        inputErrorMessage: "文本过长",
        inputType: "text",
        inputValue: "ba",
      })
        .then(({ value }) => {
          alert(value);
        })
        .catch(() => {});
    },
  },
};
</script>
