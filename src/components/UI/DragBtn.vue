<template>
  <button class="drag-btn" />
</template>

<script>
export default {}
</script>

<style scoped>
.drag-btn {
  display: flex;
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: center / 20px no-repeat;
  background-image: url('~@/static/images/icons/drag.svg');
  background-color: rgba(238, 238, 238, 0.3);

  &:active {
    background-color: rgba(238, 238, 238, 0.5);
  }
}
</style>
