import { mutations } from './mutation_count';
import * as types from '../types'

const state = {
  count: 0
}

const actions = {
  increment: ({ commit }) => commit(types.INCREASE_NUMBER),
  decrement: ({ commit }) => commit(types.DECREASE_NUMBER)
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
