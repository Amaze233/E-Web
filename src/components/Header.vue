
// @ClassName: Header
// @Author: XIAO SIYU
// @Date: 2022/7/20 21:10
// @Version: 1.0
// @Description: TODO


<template>
  <div id="header" >
    <div id="title">购购购</div>
    <div style="flex: 1"></div>
    <el-dropdown id="xiala">
      <span class="el-dropdown-link">
        {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item divided @click.native="toLogin()" >退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      userName:""
    }
  },
  mounted() {
    this.userName = this.$store.getters.getUser
  },
  methods:{
    toLogin(){
      this.$router.push('/login');
    },
  }
}
</script>

<style scoped>
#header{
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px #CCC;
  display: flex;
}

#title{
  width: 220px;
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
  color: dodgerblue;
  cursor: pointer;
}

#xiala{
  width: 100px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
