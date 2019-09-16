import Vue from 'vue'
import Router from 'vue-router'

import SysConfig from './plugins/SysConfig'

Vue.use(Router)

export default new Router({
  routes: SysConfig.routes
})
