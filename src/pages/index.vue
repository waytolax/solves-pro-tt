<template>
  <main class="index-page container">
    <h1>Создайте свой уникальный шаблон из блоков</h1>
    <BlocksList :blocks="blocks" @edit-block="editBlock" />
    <AddBlockBtn @click="openDialog('creation')">
      Добавить новый блок
    </AddBlockBtn>

    <component
      :is="dialog"
      :block="editableBlock"
      @close="closeDialog"
      @apply-changes="applyChanges"
      @open-dialog="openDialog($event)"
      @delete-block="startBlockDelition"
    />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import BlocksList from '@/components/BlocksList'
import AddBlockBtn from '@ui/AddBlockBtn'
import CreationDialog from '@/components/Dialogs/CreationDialog'
import TextDialog from '@/components/Dialogs/TextDialog'
import ImageDialog from '@/components/Dialogs/ImageDialog'

export default {
  components: {
    BlocksList,
    AddBlockBtn,
    CreationDialog,
    TextDialog,
    ImageDialog,
  },
  data() {
    return {
      currentDialog: '',
      editableBlock: null,
    }
  },
  computed: {
    ...mapGetters({ blocks: 'getBlocksSortedByOrder' }),
    dialog() {
      return {
        creation: 'CreationDialog',
        text: 'TextDialog',
        image: 'ImageDialog',
      }[this.currentDialog]
    },
  },
  methods: {
    ...mapActions({
      addBlock: 'addBlock',
      updateBlock: 'updateBlock',
      deleteBlock: 'deleteBlock',
    }),
    applyChanges({ value, event }) {
      if (event === 'set') this.addBlock({ type: this.currentDialog, value })
      if (event === 'update') {
        this.updateBlock({ block: this.editableBlock, value })
      }

      this.closeDialog()
    },
    editBlock(block) {
      this.editableBlock = block
      this.openDialog(block.type)
    },
    startBlockDelition() {
      const isConfirmed = confirm('Вы уверены что хотите удалить этот блок?')
      if (isConfirmed) this.deleteBlock(this.editableBlock)

      this.closeDialog()
    },
    openDialog(type) {
      this.currentDialog = type
    },
    closeDialog() {
      this.currentDialog = ''
      this.editableBlock = null
    },
  },
}
</script>

<style scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  & h1 {
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
