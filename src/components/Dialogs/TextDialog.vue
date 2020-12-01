<template>
  <Dialog class="text-dialog" @close="$emit('close')">
    <textarea
      ref="textarea"
      v-model="text"
      rows="4"
      placeholder="Введите текст"
      maxlength="150"
    />
    <div class="wrapper">
      <ButtonComp class="apply" :disabled="!text" @click="applyChanges">
        {{ block ? 'Обновить' : 'Добавить' }}
      </ButtonComp>
      <ButtonComp class="cancel" @click="$emit('close')"> Закрыть </ButtonComp>
    </div>
  </Dialog>
</template>

<script>
import Dialog from '@ui/Dialog'
import ButtonComp from '@ui/ButtonComp'

export default {
  name: 'TextDialog',
  components: { Dialog, ButtonComp },
  props: {
    block: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      text: '',
    }
  },
  mounted() {
    if (this.block) this.text = this.block.text

    this.autoSelect()
  },
  methods: {
    applyChanges() {
      const data = {
        value: this.text,
        event: this.block ? 'update' : 'set',
      }
      this.$emit('apply-changes', data)
    },
    autoSelect() {
      this.$nextTick(() => this.$refs.textarea.select())
    },
  },
}
</script>

<style scoped>
.text-dialog {
  & textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    resize: none;
  }

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
