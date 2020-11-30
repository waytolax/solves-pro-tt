<template>
  <Dialog class="text-dialog" @close="$emit('close')">
    <textarea v-model="text" autofocus rows="4" placeholder="Введите текст" />
    <div class="wrapper">
      <ButtonComp class="apply" :disabled="!text" @click="$emit('apply', text)">
        Сохранить
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
    initialText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: this.initialText,
    }
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
