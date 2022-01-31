<template>
  <div class="mx-4 p-3 flex-row flex justify-start items-center">
    <div
      v-if="upvote"
      class="
        p-3
        rounded-lg
        border-2 border-primary-100
        flex flex-row
        gap-3
        mr-3
      "
      style="min-width: calc(288px + 5.25rem)"
    >
      <button
        v-for="item in upvote.count"
        :key="`${item}-${upvote.selected}`"
        class="p-2 rounded-lg"
        :class="upvote.selected
          ? (selectedColor === 'blue' ? 'bg-blue-100' : 'bg-red-100')
          : 'bg-primary-100'
        "
        @click="changeStateHandle"
      >
        <img
          :src="upvote.selected ? arrowImage : ArrowImageGrey"
          width="32"
          height="32"
        />
      </button>
    </div>

    <button
      class="bg-primary-100 text-primary-700 p-2 rounded-lg"
      @click="addUpvoteHandle"
    >
      <img :src="AddImage" width="32" height="32" />
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed, toRefs } from "vue"

import ArrowImageBlue from "../assets/icon-arrow-blue.svg"
import ArrowImageRed from "../assets/icon-arrow-red.svg"
import ArrowImageGrey from "../assets/icon-arrow-grey.svg"
import AddImage from "../assets/icon-add.svg"

export default {
  props: {
    upvote: {
      type: Object,
      default: null,
    },
  },

  emits: ["updateState"],

  setup(props, { emit }) {
    const store = useStore()
    const { upvote } = toRefs(props)

    const selectedColor = computed(() => store.state.selectedColor)

    return {
      ArrowImageGrey,
      AddImage,
      selectedColor,
      arrowImage: computed(() => selectedColor.value === "red" ? ArrowImageRed : ArrowImageBlue),

      addUpvoteHandle: () => {
        emit("updateState", {
          ...upvote.value,
          count: upvote.value.count + 1,
        })
      },
      changeStateHandle: () => {
        emit("updateState", {
          ...upvote.value,
          selected: !upvote.value.selected,
        })
      },
    }
  }
}
</script>
