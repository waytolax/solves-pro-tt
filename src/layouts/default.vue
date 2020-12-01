<template>
  <div class="default-layout">
    <Nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  beforeMount() {
    this.fetchImages()
    this.fetchBlocks()

    window.addEventListener('beforeunload', this.saveBlocks)
  },
  destroyed() {
    window.removeEventListener('beforeunload', this.saveBlocks)
  },
  methods: {
    ...mapActions({
      saveBlocks: 'saveBlocks',
      fetchBlocks: 'fetchBlocks',
      fetchImages: 'fetchImages',
    }),
  },
}
</script>

<style>
@import '~@/assets/normalize.css';
@import '~@/assets/default-styles.css';

.default-layout {
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(90deg, #fd8355 0%, #f0576c 37%, #f79cbd 100%);
}
</style>
