import { createStore } from "vuex"
import { initialState, selectedColor } from "../data"

const store = createStore({
  modules: {},

  state: () => ({
    upvotes: initialState.upvotes,
    selectedColor,
  }),

  getters: {},

  mutations: {
    CHANGE_STATE(state, { index, newUpvote }) {
      state.upvotes[index] = newUpvote
    },

    CHANGE_COLOR(state, newColor) {
      state.selectedColor = newColor
    },
  },

  actions: {
    updateVote({ commit }, { index, newUpvote }) {
      commit("CHANGE_STATE", { index, newUpvote })
    },

    changeColor({ commit }, newColor) {
      commit("CHANGE_COLOR", newColor)
    },
  },
})

export default store
