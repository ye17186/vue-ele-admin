<template>
  <el-tabs type="card" closable>
    <el-tab-pane label="用户管理1"></el-tab-pane>
    <el-tab-pane label="用户管理2"></el-tab-pane>
    <el-tab-pane label="用户管理3"></el-tab-pane>
    <el-tab-pane label="用户管理4"></el-tab-pane>
    <el-tab-pane label="用户管理5"></el-tab-pane>
    <el-tab-pane label="用户管理1"></el-tab-pane>
    <el-tab-pane label="用户管理2"></el-tab-pane>
    <el-tab-pane label="用户管理3"></el-tab-pane>
    <el-tab-pane label="用户管理4"></el-tab-pane>
    <el-tab-pane label="用户管理5"></el-tab-pane>
    <el-tab-pane label="用户管理1"></el-tab-pane>
    <el-tab-pane label="用户管理2"></el-tab-pane>
    <el-tab-pane label="用户管理3"></el-tab-pane>
    <el-tab-pane label="用户管理4"></el-tab-pane>
    <el-tab-pane label="用户管理5"></el-tab-pane>
    <el-tab-pane label="用户管理1"></el-tab-pane>
    <el-tab-pane label="用户管理2"></el-tab-pane>
    <el-tab-pane label="用户管理3"></el-tab-pane>
    <el-tab-pane label="用户管理4"></el-tab-pane>
    <el-tab-pane label="用户管理5"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'YcHeaderTabs'
}
</script>

<style lang="scss">
  .el-tabs__header {
    border-top: none !important;
    border-bottom: 2px solid #cccccc !important;
  }
  .el-tabs__nav-next, .el-tabs__nav-prev {
    line-height: 25px !important;
  }
  .el-tabs__item {
    height: 24px;
    line-height: 24px;
    padding: 0 8px !important;
    &.is-active {
      background-color: #42b983;
      color: #ffffff;
    }
  }
</style>
