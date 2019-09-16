<template>
  <div class="yf-header-container">
    <div class="yf-header-w1200">
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
        <i class="el-icon-phone yf-header-email1">17186@163.com</i>
      </div>
    </div>
    <div class="yf-header-w730">
      <i class="el-icon-s-fold" @click="drawer = !drawer">drawer</i>
      <el-drawer title="我是标题" direction="ttb" :visible.sync="drawer">
        <span>我来啦!</span>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YfHeader',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss">

  .yf-header-container {
    height: 60px;
    width: 90%;
    padding: 0 5%;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    background-color: #FFF;
    border-bottom: solid 1px #e6e6e6;
    transition: all 0.5s;
  }
  .yf-header-logo {
    img {
      height: 60px;
    }
  }
  .yf-header-menu-container {
    /*min-width: 750px;*/
  }
  .yf-header-contact {
    height: 100%;
    line-height: 60px;
  }
  @import "../../assets/css/front/responsive";
</style>
