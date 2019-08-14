import store from '../store'

const switchMenuCollapse = function () {
  store.dispatch('switchMenuCollapseAsync')
}

export default {
  switchMenuCollapse
}
