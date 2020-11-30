<template>
  <button class="button-comp" @click="$emit('click')" v-on="$attrs">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.button-comp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #5156af;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #fff;

  &:active {
    background-color: #676cc4;
  }
  &:disabled {
    opacity: 0.5;
  }

  &.apply {
    background-color: #4db45e;

    &:active {
      background-color: #54a160;
    }
  }
  &.cancel {
    background-color: #9e9eaa;

    &:active {
      background-color: #64646c;
    }
  }
}
</style>
