import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YcContainer',
      component: () => import('./components/YcContainer'),
      children: [{
        path: 'about',
        component: () => import('./views/About.vue')
      }]
    }
  ]
})
