<template>
  <Dialog class="image-dialog" @close="$emit('close')">
    <ImagesList :images="images" @select-image="selectedImage = $event" />
    <div class="wrapper">
      <ButtonComp
        class="apply"
        :disabled="!selectedImage"
        @click="$emit('apply', selectedImage.id)"
      >
        Сохранить
      </ButtonComp>
      <ButtonComp class="cancel" @click="$emit('close')"> Закрыть </ButtonComp>
    </div>
  </Dialog>
</template>

<script>
import Dialog from '@ui/Dialog'
import ButtonComp from '@ui/ButtonComp'
import ImagesList from './ImagesList'

export default {
  name: 'ImageDialog',
  components: {
    Dialog,
    ImagesList,
    ButtonComp,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedImage: null,
    }
  },
}
</script>

<style scoped>
.image-dialog {
  & .wrapper {
    display: flex;
    width: 100%;
    gap: 10px;

    & .button-comp {
      height: 30px;
      font-size: 10px;
    }
  }
}
</style>
