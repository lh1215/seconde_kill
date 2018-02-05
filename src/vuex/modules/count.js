const state = {
  count: 0
}

const mutations = {
  increment(state) {
    state.count = state.count + 5
  },
  decrement(state) {
    state.count = state.count - 3
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
}

const getters = {
  count: state => state.count,
}

export default {
  state,
  mutations,
  actions,
  getters
}
