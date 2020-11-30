<template>
  <button class="add-block-btn" role="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.add-block-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 90px;
  background: center / 50px no-repeat;
  background-image: url('~@/static/images/icons/add.svg');
  font-size: 16px;
}
</style>
