<template>
  <div class="mx-4 p-3 flex-row flex justify-start items-center">
    <div
      class="
        p-3
        rounded-lg
        border-2 border-test-primary-light
        flex flex-row
        gap-3
        mr-3
      "
      style="min-width: calc(288px + 5.25rem)"
    >
      <button
        v-for="item in upvote.count"
        :key="item"
        class="p-2 rounded-lg"
        :class="`bg-test-${upvote.selected ? 'secondary' : 'primary'}-light`"
        @click="changeStateHandle"
      >
        <img
          :src="upvote.selected ? ArrowImageBlue : ArrowImageGrey"
          width="32"
          height="32"
        />
      </button>
    </div>

    <button
      class="bg-test-primary-light text-test-primary p-2 rounded-lg"
      @click="addUpvoteHandle"
    >
      <img :src="AddImage" width="32" height="32" />
    </button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, defineProps, reactive } from 'vue'

import ArrowImageBlue from '../assets/icon-arrow-blue.svg'
import ArrowImageGrey from '../assets/icon-arrow-grey.svg'
import AddImage from '../assets/icon-add.svg'

const store = useStore()
const upvote = computed(() => store.state.upvote)
// const props = defineProps({
//   state: boolean,
// })

const addUpvoteHandle = () => {
  store.dispatch('increaseCount')
}

const changeStateHandle = () => {
  store.dispatch('changeState')
}
</script>
