<template>
  <ul v-show="blocks.length" class="blocks-list">
    <li>g</li>
  </ul>
</template>

<script>
export default {
  name: 'BlocksList',
  components: {},
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.blocks-list {
}
</style>
