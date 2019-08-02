<template>
  <el-container style="height: 100%;">
    <el-aside class="yc-aside" width="200px" style="background-color: antiquewhite; height: 100%;">
      <div style="height: 50px;">ddd</div>
      <el-scrollbar style="height: calc(100% - 50px); width: 100%;">
        <yc-container-menu></yc-container-menu>
      </el-scrollbar>
    </el-aside>
    <el-container style="height: 100%;">
      <el-header height="50px" style="background-color: #42b983; padding: 0;">
        <yc-container-collapse></yc-container-collapse>
        <yc-container-breadcrumb style="float: left;"></yc-container-breadcrumb>
        <yc-container-avatar style="float: right; margin-right: 10px;"></yc-container-avatar>
        <yc-container-dropdown style="float: right; margin-right: 5px; cursor: pointer;"></yc-container-dropdown>
      </el-header>
      <el-main style="overflow: hidden;">
        <div style="height: 100%; width: 100%; border: 1px solid red; ">
          <div style="height: 900px; width: 1500px; "></div>
        </div>
<!--        <el-scrollbar style="height: 100%;">-->

<!--        </el-scrollbar>-->
      </el-main>
      <el-footer height="30px" style="background-color: cadetblue">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import YcContainerMenu from './YcContainerMenu'
import YcContainerAvatar from './YcContainerAvatar'
import YcContainerDropdown from './YcContainerDropdown'
import YcContainerBreadcrumb from './YcContainerBreadcrumb'
import YcContainerCollapse from './YcContainerCollapse'

export default {
  name: 'YcContainer',
  components: { YcContainerCollapse, YcContainerBreadcrumb, YcContainerDropdown, YcContainerAvatar, YcContainerMenu }
}
</script>

<style lang="scss">
  .yc-aside {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .el-main {
    padding: 0;
  }
</style>
