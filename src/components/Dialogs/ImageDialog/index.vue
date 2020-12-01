<template>
  <Dialog class="image-dialog" @close="$emit('close')">
    <ImagesList :images="images" :selected.sync="selectedImage" />
    <div class="wrapper">
      <ButtonComp
        class="apply"
        :disabled="!selectedImage"
        @click="applyChanges"
      >
        {{ block ? 'Обновить' : 'Добавить' }}
      </ButtonComp>
      <ButtonComp class="cancel" @click="$emit('close')"> Закрыть </ButtonComp>
      <DeleteBtn v-if="block" @click="$emit('delete-block')" />
    </div>
  </Dialog>
</template>

<script>
import { mapState } from 'vuex'

import Dialog from '@ui/Dialog'
import ButtonComp from '@ui/ButtonComp'
import DeleteBtn from '@ui/DeleteBtn'
import ImagesList from './ImagesList'

export default {
  name: 'ImageDialog',
  components: {
    Dialog,
    ImagesList,
    ButtonComp,
    DeleteBtn,
  },
  props: {
    block: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selectedImage: '',
    }
  },
  computed: {
    ...mapState({ images: state => state.images }),
  },
  mounted() {
    if (this.block) this.selectedImage = this.block.image_id
  },
  methods: {
    applyChanges() {
      const data = {
        value: this.selectedImage,
        event: this.block ? 'update' : 'set',
      }
      this.$emit('apply-changes', data)
    },
  },
}
</script>

<style scoped>
.image-dialog {
  & .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;

    & .button-comp {
      height: 30px;
      font-size: 10px;
    }
  }
}
</style>
