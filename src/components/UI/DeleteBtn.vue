<template>
  <button class="delete-btn" @click="$emit('click')" />
</template>

<script>
export default {}
</script>

<style scoped>
.delete-btn {
  display: flex;
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: center / 20px no-repeat;
  background-image: url('~@/static/images/icons/delete.svg');

  &:active {
    opacity: 0.7;
  }
}
</style>
