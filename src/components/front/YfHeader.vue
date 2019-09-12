<template>
  <div class="yf-header-container">
    <div class="fl yf-header-logo"><img src="../../assets/logo.png" alt=""></div>
    <div class="fl yf-header-menu-container">
      <el-menu class="yc-menu" mode="horizontal">
        <el-submenu index="1">
          <template slot="title">昊天同泰</template>
          <el-menu-item index="1-1">一个团队</el-menu-item>
          <el-menu-item index="1-2">一张船票</el-menu-item>
          <el-menu-item index="1-3">一点资讯</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">产品中心</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">解决方案</template>
          <el-submenu index="3-1">
            <template slot="title">公检司法</template>
            <el-menu-item index="3-1-1">选项1</el-menu-item>
            <el-menu-item index="3--12">选项2</el-menu-item>
            <el-menu-item index="3-1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3-2">
            <template slot="title">工业智能</template>
            <el-menu-item index="3-2-1">选项1</el-menu-item>
            <el-menu-item index="3-2-2">选项2</el-menu-item>
            <el-menu-item index="3-2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3-3">
            <template slot="title">智慧城市</template>
            <el-menu-item index="3-3-1">选项1</el-menu-item>
            <el-menu-item index="3-3-2">选项2</el-menu-item>
            <el-menu-item index="3-3-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="4">典型案例</el-menu-item>
        <el-submenu index="5">
          <template slot="title">商务合作</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">联系我们</el-menu-item>
      </el-menu>
    </div>
    <div class="fr yf-header-contact">
      ye17186@163.com
    </div>
  </div>
</template>

<script>
export default {
  name: 'YfHeader'
}
</script>

<style lang="scss" scoped>
  .yf-header-container {
    height: 60px;
    width: 90%;
    padding: 0 5%;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    background-color: #FFF;
    border-bottom: solid 1px #e6e6e6
  }
  .yf-header-logo {
    height: 100%;
    width: 20%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .yf-header-contact {
    height: 100%;
    width: 20%;
    line-height: 60px;
  }
</style>
