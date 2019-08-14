<template>
  <div style="float: left;" @click="switchMenuCollapse">
    <i :class="'el-icon-delete yc-collapse-btn ' + (isMenuCollapse ? ' is-active' : '')"></i>
  </div>
</template>

<script>
import StoreUtils from '../plugins/StoreUtils'

export default {
  name: 'YcHeaderCollapse',
  computed: {
    isMenuCollapse: function () {
      return this.$store.state.menuCollapse
    }
  },
  methods: {
    switchMenuCollapse: function () {
      StoreUtils.switchMenuCollapse()
    }
  }
}
</script>

<style lang="scss" scoped>
  .yc-collapse-btn {
    font-size: 32px;
    padding: 9px 5px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.3s;
    transform-origin: 50% 50%;
    &.is-active {
      transform: rotate(90deg);
    }
  }
</style>
