import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuCollapse: false
  },
  mutations: {
    switchMenuCollapse: function (state) {
      state.menuCollapse = !state.menuCollapse
    }

  },
  actions: {
    switchMenuCollapseAsync: function (context) {
      context.commit('switchMenuCollapse')
    }
  }
})
