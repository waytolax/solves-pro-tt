<template>
  <ul v-show="blocks.length" class="blocks-list">
    <BlockItem
      v-for="block of blocks"
      :key="block.id"
      :block="block"
      @click="$emit('edit-block', block)"
    />
  </ul>
</template>

<script>
import BlockItem from './BlockItem'

export default {
  name: 'BlocksList',
  components: { BlockItem },
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
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  height: 100%;
  max-height: calc(100vh - 95px);
  overflow: auto;
}
</style>
