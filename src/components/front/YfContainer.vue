<template>
  <div>
    <yf-header></yf-header>
    <yf-mainer></yf-mainer>
    <yf-footer></yf-footer>
  </div>
</template>

<script>
import YfHeader from './YfHeader'
import YfMainer from './YfMainer'
import YfFooter from './YfFooter'
export default {
  name: 'YfContainer',
  components: { YfFooter, YfMainer, YfHeader }
}
</script>

<style scoped>

</style>
