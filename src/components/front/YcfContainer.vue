<template>
  <div class="yf-page-container">
    <ycf-header></ycf-header>
    <ycf-mainer></ycf-mainer>
    <ycf-footer></ycf-footer>
  </div>
</template>

<script>
import YcfHeader from './YcfHeader'
import YcfMainer from './YcfMainer'
import YcfFooter from './YcfFooter'
export default {
  name: 'YcfContainer',
  components: { YcfFooter, YcfMainer, YcfHeader }
}
</script>

<style scoped>
  .yf-page-container{
     min-width: 750px;
   }
</style>
