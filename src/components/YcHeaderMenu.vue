<template>
  <div>
    <yc-header-collapse></yc-header-collapse>
    <yc-header-breadcrumb style="float: left;"></yc-header-breadcrumb>
    <yc-header-avatar style="float: right; margin-right: 10px;"></yc-header-avatar>
    <yc-header-dropdown style="float: right; margin-right: 5px; cursor: pointer;"></yc-header-dropdown>
  </div>
</template>

<script>
import YcHeaderCollapse from './YcHeaderCollapse'
import YcHeaderBreadcrumb from './YcHeaderBreadcrumb'
import YcHeaderAvatar from './YcHeaderAvatar'
import YcHeaderDropdown from './YcHeaderDropdown'
export default {
  name: 'YcHeaderMenu',
  components: { YcHeaderDropdown, YcHeaderAvatar, YcHeaderBreadcrumb, YcHeaderCollapse }
}
</script>

<style scoped>

</style>
