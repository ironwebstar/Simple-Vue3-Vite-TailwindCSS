<template>
  <div>
    <h1 class="my-6 ml-9 text-3xl font-bold">Scrawlr Technical Project</h1>
    <div>
      <Upvote />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import Upvote from './Upvote.vue'

export default {
  components: {
    Upvote,
  },

  setup() {
    const store = useStore()
    const upvote = computed(() => store.state.upvote)

    return { upvote }
  },
}
</script>
