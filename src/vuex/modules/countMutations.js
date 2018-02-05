import * as types from '../types'

export const mutations = {
  [types.INCREASE_NUMBER](state)  {
    state.count = state.count + 5
  },
  [types.DECREASE_NUMBER](state)  {
    state.count = state.count - 3
  }
}
