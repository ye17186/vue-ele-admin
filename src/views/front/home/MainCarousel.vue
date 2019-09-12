<template>
  <section>
    <el-carousel :interval="5000" arrow="hover" height="360px">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  name: 'MainCarousel'
}
</script>

<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
