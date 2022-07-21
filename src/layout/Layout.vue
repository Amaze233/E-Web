
// @ClassName: Layout
// @Author: XIAO SIYU
// @Date: 2022/7/20 20:51
// @Version: 1.0
// @Description: TODO


<template>
  <div>
    <!--置顶栏导入-->
    <Header v-if="!(path === '/login' || path ===  '/revise')" />
    <!--路由导入-->
    <router-view style="flex: 1" />
  </div>
</template>

<script>

import Header from "@/components/Header";

export default {
  name: "Layout",
  data(){
    return{
      path:""
    }
  },
  components:{
    Header
  },
  // 判断路由
  mounted() {
    this.path = this.$route.path;
    // console.log(this.$route.path)
  },

}
</script>

<style scoped>

</style>
