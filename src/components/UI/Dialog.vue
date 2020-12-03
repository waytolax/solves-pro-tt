<template>
  <transition name="dialog-appear" appear>
    <div class="dialog" role="button" @click="$emit('close')">
      <div class="dialog-content" @click.stop="$emit('click')">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  cursor: pointer;

  & .dialog-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 800px;
    padding: 20px 10px;
    border-radius: 5px;
    background: #e0dbdb;
    cursor: auto;
  }
}

.dialog-appear-leave-to,
.dialog-appear-enter {
  opacity: 0;
}
.dialog-appear-leave-active,
.dialog-appear-enter-active {
  transition: opacity 0.3s;
}
</style>
