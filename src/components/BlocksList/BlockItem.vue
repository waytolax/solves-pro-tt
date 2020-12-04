<template>
  <li
    :class="['block-item', block.type]"
    :data-order="block.order"
    @click="$emit('click')"
  >
    <p v-if="!isImage">
      {{ block.text }}
    </p>

    <img v-else :src="image.src" :alt="image.description" />
    <DragBtn @click.native.stop @pointerdown.native="emitPointerEvent" />
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

import DragBtn from '@ui/DragBtn'

export default {
  name: 'BlockItem',
  components: { DragBtn },
  props: {
    block: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({ getImage: 'getImageById' }),
    isImage() {
      return this.block.type === 'image'
    },
    image() {
      return this.isImage ? this.getImage(this.block.image_id) : {}
    },
  },
  mounted() {
    this.$el.scrollIntoView({ behavior: 'smooth' })
  },
  methods: {
    emitPointerEvent(ev) {
      this.$emit('pointerdown', ev, this.$el, this.block)
    },
  },
}
</script>

<style scoped>
.block-item {
  position: relative;
  display: flex;
  height: 90px;
  background-color: #eee;
  border-radius: 5px;
  transition: 0.1s;
  will-change: transform;

  &.dragging {
    transform: scale(0.95);
    z-index: 100;
  }

  &.image {
    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &.text p {
    width: 100%;
    padding: 10px 15px 10px 10px;
  }

  & .drag-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
  }
}
</style>
