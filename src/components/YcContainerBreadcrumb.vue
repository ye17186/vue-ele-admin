<template>
  <div style="height: 50px; width: 300px;">
    <el-breadcrumb separator="/" style="line-height: 50px; display: inline;">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'YcContainerBreadcrumb'
}
</script>

<style scoped>

</style>
