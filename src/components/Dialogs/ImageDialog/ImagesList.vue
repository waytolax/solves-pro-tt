<template>
  <ul class="images-list">
    <li
      v-for="img of images"
      :key="img.id"
      :class="{ selected: img.id === selected }"
      @click="$emit('update:selected', img.id)"
    >
      <img :src="img.src" :alt="img.description" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ImagesList',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.images-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  justify-content: center;
  grid-gap: 10px;
  width: 100%;
  margin-bottom: 20px;

  & li {
    height: 60px;
    border-radius: 5px;
    cursor: pointer;

    &.selected {
      box-shadow: 0 0 7px 3px rgb(52, 83, 173);
    }

    & img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
}
</style>
