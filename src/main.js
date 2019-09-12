import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import AxiosConfig from './plugins/AxiosConfig'

import './assets/css/global.css'

Vue.config.productionTip = false
Vue.prototype.$http = AxiosConfig

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
