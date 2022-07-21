// @ClassName: Card
// @Author: XIAO SIYU
// @Date: 2022/7/20 21:24
// @Version: 1.0
// @Description: TODO


<template>
<div>
  <el-col :span="8" v-for="(item,index) in goodList" :key="index"  style="height: 300px;width: 250px">
    <el-card :body-style="{ padding: '0px' }" shadow="hover" class="good">
      <img :src="item.productUrl" class="image" alt>
      <div style="padding: 14px;">
        <span>{{ item.productName }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ item.productPrice }}</time>
        </div>
      </div>
    </el-card>
  </el-col>
</div>
</template>

<script>
export default {
  name: "Card",
  props:["goodList"],
  mounted() {
    console.log(this.goodList)
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  height: 70%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.good{
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
}
</style>
