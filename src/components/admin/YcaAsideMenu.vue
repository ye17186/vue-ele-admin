<template>
  <el-menu class="yc-menu" default-active="1-4-1"
           :collapse="collapse">
    <template v-for="menuA in menus">
      <el-menu-item v-if="!menuA.meta.hidden && menuA.meta.key.split('_').length === 1 && menuA.meta.isLeaf"
                    :key="menuA.meta.key" :index="menuA.meta.key">
        <span slot="title">{{ menuA.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else-if="!menuA.meta.hidden && menuA.meta.key.split('_').length === 1 && !menuA.meta.isLeaf"
                  :key="menuA.meta.key" :index="menuA.meta.key">
        <template slot="title">
          <span slot="title">{{ menuA.meta.title }}</span>
        </template>
        <template v-for="menuB in menus">
          <el-menu-item v-if="!menuB.meta.hidden && menuB.meta.key.split('_').length === 2
           && menuB.meta.key.split('_')[0] === menuA.meta.key && menuB.meta.isLeaf"
                        :key="menuB.meta.key" :index="menuB.meta.key">
            <span slot="title">{{ menuB.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import SysConfig from '../../plugins/SysConfig'

export default {
  name: 'YcaAsideMenu',
  props: {
    collapse: Boolean
  },
  data: function () {
    return {
      menus: SysConfig.menus
    }
  }
}
</script>

<style lang="scss" scoped>
  .yc-menu:not(.el-menu--collapse) {
    width: 199px;
  }
</style>
