<template>
  <div class="yf-footer-container">
    <el-row style="border-bottom: thin solid #666666;">
      <el-col :span="8">
        <div style="height: 100px">LOGO</div>
      </el-col>
      <el-col :span="4">
        <div><el-link class="menu-link">产品中心</el-link></div>
        <div><el-link>产品中心</el-link></div>
        <div><el-link>产品中心</el-link></div>
        <div><el-link>产品中心</el-link></div>
      </el-col>
      <el-col :span="4">解决方案</el-col>
      <el-col :span="4">商务合作</el-col>
      <el-col :span="4">联系我们</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div style="height: 30px">Copy Right</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'YcfFooter'
}
</script>

<style lang="scss" scoped>
  .yf-footer-container {
    height: 130px;
    color: #ffffff;
    background-color: #333333;
    border-bottom: thin solid #666666;
  }
  .menu-link {
    color: #ffffff;
    font-weight: bold;
  }
</style>
