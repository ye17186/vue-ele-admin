<template>
  <div>
    <yca-header-collapse></yca-header-collapse>
    <yca-header-breadcrumb style="float: left;"></yca-header-breadcrumb>
    <yca-header-avatar style="float: right; margin-right: 10px;"></yca-header-avatar>
    <yca-header-dropdown style="float: right; margin-right: 5px; cursor: pointer;"></yca-header-dropdown>
  </div>
</template>

<script>
import YcaHeaderCollapse from './YcaHeaderCollapse'
import YcaHeaderBreadcrumb from './YcaHeaderBreadcrumb'
import YcaHeaderAvatar from './YcaHeaderAvatar'
import YcaHeaderDropdown from './YcaHeaderDropdown'
export default {
  name: 'YcaHeaderMenu',
  components: { YcaHeaderDropdown, YcaHeaderAvatar, YcaHeaderBreadcrumb, YcaHeaderCollapse }
}
</script>

<style scoped>

</style>
