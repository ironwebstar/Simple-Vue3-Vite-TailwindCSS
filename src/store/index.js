import Vue from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  modules: {},

  state: () => ({
    upvotes: [],
  }),

  getters: {},

  mutations: {
    CHANGE_STATE(state, index) {
      Vue.set(state.upvotes, index, !state.upvotes[index].selected)
    },

    INCREASE_COUNT(state, index) {
      Vue.set(state.upvotes, index, state.upvotes[index].count + 1)
    },

    DECREASE_COUNT(state) {
      Vue.set(state.upvotes, index, state.upvotes[index].count - 1)
    },
  },

  actions: {
    changeState({ commit }, index) {
      commit('CHANGE_STATE', index)
    },

    increaseCount({ commit }, index) {
      commit('INCREASE_COUNT', index)
    },

    decreaseCount({ commit }, index) {
      commit('DECREASE_COUNT', index)
    },
  },
})

export default store
