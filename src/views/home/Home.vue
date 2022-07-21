
// @ClassName: Home
// @Author: XIAO SIYU
// @Date: 2022/7/20 14:57
// @Version: 1.0
// @Description: TODO


<template>
  <div>
    <div class="goodsList">
      <Card :good-list="productList"></Card>
      <!-- 分页  -->
      <div style="position: fixed; bottom: 20px;">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5,10]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import request from "@/utils/request";

export default {
  name: "Home",
  components:{
    Card
  },
  data(){
    return{
      productList:[],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    }
  },
  mounted() {
    this.load()
  },
  methods:{
    load(){
      request.get("http://localhost:9090/product/getAll",{
        params:{
          pageNum: this.currentPage,
          pageSize: this.pageSize,
        }
      }
      ).then(res=>{
        this.total=res.data.productList.total
        this.productList=res.data.productList.records
        console.log(this.productList)
      })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.load()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      this.load()
    },
  }
}
</script>

<style scoped>
.goodsList{
  height: 615px;
  width: 1310px;
  margin: auto;
}

</style>
