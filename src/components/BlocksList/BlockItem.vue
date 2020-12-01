<template>
  <li :class="['block-item', block.type]" @click="$emit('click')">
    <p v-if="!isImage">
      {{ block.text }}
    </p>

    <img v-else :src="image.src" :alt="image.description" />
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BlockItem',
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
}
</script>

<style scoped>
.block-item {
  display: flex;
  height: 90px;
  background-color: #eee;
  border-radius: 5px;

  &.image {
    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &.text {
    padding: 10px;
  }
}
</style>
