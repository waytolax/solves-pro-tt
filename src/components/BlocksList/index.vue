<template>
  <transition-group
    v-show="blocks.length"
    class="blocks-list"
    tag="ul"
    @touchmove.native="preventTouch"
    @pointermove.prevent.native="dragMove"
    @pointerup.native="dragEnd"
    @pointercancel.native="dragEnd"
  >
    <BlockItem
      v-for="block of blocks"
      :key="block.id"
      :block="block"
      @click="$emit('edit-block', block)"
      @pointerdown="dragStart"
    />
  </transition-group>
</template>

<script>
import dragndrop from '@/mixins/dragndrop'

import BlockItem from './BlockItem'

export default {
  name: 'BlocksList',
  components: { BlockItem },
  mixins: [dragndrop],
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
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
