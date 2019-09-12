<template>
  <div class="yf-footer-container">
    <el-row>
      <el-col :span="8">
        <div style="height: 100px">LOGO</div>
      </el-col>
      <el-col :span="4">产品中心</el-col>
      <el-col :span="4">解决方案</el-col>
      <el-col :span="4">商务合作</el-col>
      <el-col :span="4">联系我们</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div style="height: 40px">Copy Right</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'YfFooter'
}
</script>

<style lang="scss" scoped>
  .yc-footer-container {
    width: 100%;
    background-color: #333333;
    margin: 50px 0 0 0;
    border-bottom: thin solid #666666;
    min-width: 1220px;
    padding: 0 5%;
  }
</style>
