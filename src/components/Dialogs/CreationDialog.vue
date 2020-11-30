<template>
  <Dialog class="creation-dialog" @close="$emit('close')">
    <ButtonComp
      v-for="block of blockTypes"
      :key="block.id"
      @click.native.stop="$emit('open-dialog', block.type)"
    >
      {{ block.title }}
    </ButtonComp>
  </Dialog>
</template>

<script>
import ButtonComp from '@ui/ButtonComp'
import Dialog from '@ui/Dialog'

export default {
  name: 'CreationDialog',
  components: { ButtonComp, Dialog },
  data() {
    return {
      blockTypes: [
        { id: 1, title: 'Текст', type: 'text' },
        { id: 2, title: 'Изображение', type: 'image' },
      ],
    }
  },
}
</script>

<style scoped>
.creation-dialog {
  & /deep/ .dialog-content {
    gap: 10px;
  }

  & .button-comp {
    height: 50px;
  }
}
</style>
