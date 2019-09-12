<template>
  <div class="home-page-container">
    <MainCarousel class="home-section"></MainCarousel>
    <SolutionCards class="home-section" style="padding: 0 5%;"></SolutionCards>
<!--    <MainCarousel class="home-section"></MainCarousel>-->
<!--    <MainCarousel class="home-section"></MainCarousel>-->
<!--    <MainCarousel class="home-section"></MainCarousel>-->
<!--    <MainCarousel class="home-section"></MainCarousel>-->
    <el-backtop></el-backtop>

  </div>
</template>

<script>
import MainCarousel from './MainCarousel'
import SolutionCards from './SolutionCards'
export default {
  name: 'Home',
  components: { SolutionCards, MainCarousel }
}
</script>

<style scoped>
  .home-section {
    margin-bottom: 50px;
  }
</style>
