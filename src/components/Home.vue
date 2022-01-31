<template>
  <div>
    <h1 class="my-6 ml-9 text-3xl font-bold">Upvote Component</h1>

    <div class="mt-6 mb-3 ml-9 text-sm font-bold text-primary-700 flex justify-start items-center gap-5">
      <span>
        Select Color:
      </span>
      <button class="p-2 rounded-lg bg-blue-700" @click="updateColor('blue')" />
      <button class="p-2 rounded-lg bg-red-700" @click="updateColor('red')" />
    </div>

    <div>
      <Upvote
        v-for="(upvote, index) in upvotes"
        :key="index"
        :upvote="upvote"
        example="test"
        @updateState="(newState) => updateState(index, newState)"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue"

import Upvote from "./Upvote.vue"

export default {
  components: {
    Upvote,
  },

  setup() {
    const store = useStore()

    return {
      upvotes: computed(() => store.state.upvotes),
      updateState: (index, newUpvote) => store.dispatch("updateVote", { index, newUpvote }),
      updateColor: (newColor) => store.dispatch("changeColor", newColor)
    }
  },
}
</script>
