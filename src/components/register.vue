<template>
  <body class="form-membership" v-loading="loading">
    <div class="form-wrapper">
      <!-- logo -->
      <div class="logo">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="612px"
          height="612px"
          viewBox="0 0 612 612"
          style="enable-background: new 0 0 612 612"
          xml:space="preserve"
        >
          <g>
            <g id="_x32__26_">
              <g>
                <path
                  d="M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25
                    c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75
                    c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125
                    S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612
                    l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z
                    M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75
                    c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z"
                />
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <!-- ./ logo -->

      <h5>register</h5>

      <!-- form -->
      <el-form
        :model="regForm"
        label-position="left"
        status-icon
        :rules="rules"
        ref="regForm"
        label-width="100px"
      >
        <el-form-item label-width="70px" label="昵称" prop="nickname">
          <el-input
            type="text"
            v-model="regForm.nickname"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="账号" prop="username">
          <el-input
            type="text"
            v-model="regForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="邮箱" prop="email">
          <el-input
            type="text"
            v-model="regForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="密码" prop="password">
          <el-input
            type="password"
            v-model="regForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="重复密码" prop="repassword">
          <el-input
            type="password"
            v-model="regForm.repassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label-width="0px">
          <el-button type="primary" @click="submitForm('regForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('regForm')">重置</el-button>
        </el-form-item>
      </el-form>


      <!-- ./ form -->
    </div>
  </body>
</template>

<script>
export default {
  name: "register",
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      callback();
      setTimeout(() => {
        var uPattern = /^[a-zA-Z0-9_]{6,26}$/;
        if (!uPattern.test(value)) {
          callback(new Error("6到26位(字母,数字,下划线)"));
        } else {
          callback();
        }
      }, 1000);
    };

    var checkPassword = (rule, value, callback) => {

      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      callback();
      setTimeout(() => {
        var pPattern = /^.*(?=.{7,27})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (!pPattern.test(value)) {
          callback(
            new Error("7-27位，且包括至少1个大写字母，小写字母，数字")
          );
        } else {
          callback();
        }
      }, 1000);
    };

    var checknickname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      }
      callback();
      setTimeout(() => {
        if (value.length < 1 || value.length > 20) {
          callback(new Error("昵称过长"));
        } else {
          callback();
        }
      }, 1000);
    };

    var checkemail = (rule, value, callback) => {
      var remail = /[a-zA-Z0-9_]{1,}[@][a-z0-9]{1,}[.][a-z]{1,}/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      callback();
      setTimeout(() => {
        if (!remail.test(value)) {
          callback(new Error("邮箱不合法"));
        } else {
          callback();
        }
      }, 1000);
    };

    var checkRPassword = (rule, value, callback) => {
      setTimeout(() => {
        if (value != this.regForm.password) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      }, 1000);
    };

    return {
      regForm: {
        nickname: "",
        username: "",
        password: "",
        email: "",
        repassword: "",
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        nickname: [{ validator: checknickname, trigger: "blur" }],
        email: [{ validator: checkemail, trigger: "blur" }],
        repassword: [{ validator: checkRPassword, trigger: "blur" }],
      },
      loading: false,
    };
  },
  methods: {
    submitForm(formName) {
      this.loading = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("Register", this.regForm)
            .then((response) => {
              this.loading = false;
              if (response.data.code == 2001) {
                this.$notify({
                  title: "成功",
                  message: response.data.message,
                  type: "success",
                  duration: 1000,
                });
                this.$router.push("/");
              } else {
                this.$notify.error({
                  title: "错误",
                  message: response.data.message,
                  duration: 1000,
                });
              }
            })
            .catch(() => {
              this.$notify.error({
                  title: "错误",
                  message: '发生异常',
                  duration: 1000,
                });
            });
        } else {
          this.loading = false;
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/chatRoom.css";
@import "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

body.form-membership{
  padding: 0;
}
</style>>
