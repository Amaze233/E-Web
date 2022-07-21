
// @ClassName: Login
// @Author: XIAO SIYU
// @Date: 2022/7/19 15:20
// @Version: 1.0
// @Description: TODO


<template>
  <div class="body">
    <!--引入粒子特效-->
    <Lizi class="lizi" disabled/>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="60px" class="login-box" v-show="showLogin">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" prefix-icon="el-icon-user-solid"  placeholder="请输入账号" v-model="loginForm.userName" clearable/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password v-model="loginForm.userPassword" clearable/>
      </el-form-item>
      <div style="display: flex; margin-left: 20%">
        <el-form-item>
          <el-button type="primary" plain @click="login" >登录</el-button>
        </el-form-item>
        <el-form-item >
          <el-button type="primary">修改密码</el-button>
        </el-form-item>
      </div>
<!--   注册提示框   -->
      <div style="margin-bottom: 10px">
        <span v-on:click="toRegister()">没有账号？马上注册</span>
      </div>
    </el-form>

    <el-form ref="loginForm" :model="registerForm" :rules="rules" label-width="60px" class="login-box" v-show="!showLogin">
      <h3 class="login-title">欢迎注册</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" prefix-icon="el-icon-user-solid"  placeholder="请输入账号" v-model="registerForm.userName" clearable/>
      </el-form-item>
      <el-form-item label="新密码" prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password v-model="registerForm.userPassword" clearable/>
      </el-form-item>
      <el-form-item label="重复" prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" placeholder="请重复输入密码" show-password v-model="registerForm.repeatPassword" clearable/>
      </el-form-item>
      <div style="display: flex; margin-left: 35%">
        <el-form-item>
          <el-button type="primary" plain @click="register" >注册</el-button>
        </el-form-item>
      </div>
      <!--   注册提示框   -->
      <div style="margin-bottom: 10px">
        <span v-on:click="toLogin()">已有账号？马上登录</span>
      </div>
    </el-form>
  </div>
</template>


<script>

import Lizi from "../../components/Lizi";
import request from "../../utils/request";

export default {
  name: 'Login' ,
  components:{
    Lizi
  },
  data () {
    return {
      showLogin: true,
      loginForm: {
        userName: '',
        userPassword: ''
      },
      registerForm: {
        userName: '',
        userPassword: '',
        repeatPassword:''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        userPassword: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
      },
    }
  },
  created() {
  },
  mounted() {
    this.$store.commit("removeUser")
  },
  methods: {
    login () {
      request.get("http://localhost:9090/login",
          {
            params: {
              userName: this.loginForm.userName,
              userPassword: this.loginForm.userPassword
            }
          }
      ).then(res => {
        console.log(res)
        if (res["code"] === 200) {
          this.$notify({
            title: '登录成功',
            message: res.data.user.userName + ', 欢迎进入电商管理系统!',
            type: 'success',
            duration: 5000,
            offset: 50
          })
          this.$store.commit("setUser",res.data.user.userName)// 缓存用户信息
          this.$router.push("/home")  //登录成功之后进行页面的跳转，跳转到主页
        } else {
          this.$message({
            type: "error",
            message: res["message"],
            duration: 2000,
            offset: 50
          })
        }
      })
    },
    register(){
        //两次输入密码相同
        if (this.registerForm.userPassword === this.registerForm.repeatPassword){
          request.get("http://localhost:9090/register",
              {
                params: {
                  userName: this.registerForm.userName,
                  userPassword: this.registerForm.userPassword
                }
              }
          ).then(res=>{
            console.log(res)
            this.showLogin = true
            if (res.code === 200){
              this.$message({
                message: res.message,
                type: 'success'
              });
            }else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }

          })
        }
    },
    toRegister(){
      this.showLogin = false
    },
    toLogin(){
      this.showLogin = true
    }
  }
}

</script>

<style scoped>

.body{
  background-size: cover;
}

.login-box{
  border: 1px solid #DCDFE6;
  width: 600px;
  height: 400px;
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin: auto;
  padding:60px 35px 65px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow:0 0 25px #909399;
}

.login-title{
  text-align:center;
  margin:0 auto 40px auto;
  color:#303133;
}
span{
  cursor: pointer;
}
span:hover{
  color: #409EFF;
}

</style>

