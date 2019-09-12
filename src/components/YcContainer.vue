<template>
  <el-container style="height: 100%;">
    <el-aside class="yc-aside" :width="isCollapse ? '65px' : '200px'">
      <el-row class="yc-admin-logo" style="">ddd</el-row>
      <el-scrollbar style="height: calc(100% - 50px); width: 100%;">
        <yc-aside-menu :collapse="isCollapse"></yc-aside-menu>
      </el-scrollbar>
    </el-aside>
    <el-container style="height: 100%;">
      <el-header height="75px" style="padding: 0;">
        <el-row style="height: 50px; border-bottom: 2px solid #cccccc;">
          <yc-header-menu></yc-header-menu>
        </el-row>
        <el-row style="height: 25px;">
          <yc-header-tabs></yc-header-tabs>
        </el-row>
      </el-header>
      <el-main class="yc-main-view">
        <el-scrollbar style="height: 100%;">
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
      <el-footer height="30px" style="background-color: cadetblue">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import YcAsideMenu from './YcAsideMenu'
import YcHeaderTabs from './YcHeaderTabs'
import YcHeaderMenu from './YcHeaderMenu'

export default {
  name: 'YcContainer',
  components: { YcHeaderMenu, YcHeaderTabs, YcAsideMenu },
  computed: {
    isCollapse: function () {
      return this.$store.state.menuCollapse
    }
  },
  data: function () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  .yc-aside {
    height: 100%;
    transition: width .3s;
    -moz-transition: width .3s;
    -webkit-transition: width .3s;
    -o-transition: width .3s;
    border-right: solid 1px #e6e6e6;
    .yc-admin-logo {
      height: 50px;
      border-bottom: 2px solid #cccccc;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .yc-main-view {
    height: 100%;
    padding: 5px 0 0 5px !important;
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .el-main {
    padding: 0;
  }
</style>
