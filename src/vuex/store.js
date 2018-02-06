import Vue from 'vue'
import Vuex from 'vuex'

import count from './modules/action_count'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    count
  }
})
