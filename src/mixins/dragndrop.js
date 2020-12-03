import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dragStartOffset: null,
      draggableEl: null,
      draggableBlock: null,
    }
  },
  methods: {
    ...mapActions({ updateOrder: 'updateBlockOrder' }),
    dragStart(ev, el, block) {
      this.dragStartOffset = { x: ev.x, y: ev.y }
      this.draggableEl = el
      this.draggableBlock = block
      el.classList.add('dragging')
    },
    dragMove(ev) {
      if (this.draggableEl) {
        const offsetY = ev.y - this.dragStartOffset.y
        const offsetX = ev.x - this.dragStartOffset.x
        this.moveElement(this.draggableEl, offsetX, offsetY)
      }
    },
    dragEnd(ev) {
      if (this.draggableEl) {
        const nextBlock = this.getNextBlockEl(ev.y)
        const nextBlockOrder = nextBlock?.dataset.order || 0

        this.updateOrder({
          block: this.draggableBlock,
          nextOrder: +nextBlockOrder,
        })

        this.moveElement(this.draggableEl, 0, 0)
        this.draggableEl.classList.remove('dragging')
        this.draggableEl.style.transform = ''
        this.draggableEl = null
        this.draggableBlock = null
      }
    },
    preventTouch(ev) {
      if (this.draggableEl) ev.preventDefault()
    },
    moveElement(el, x = 0, y = 0) {
      el.style.transform = `translate(${x}px, ${y}px)`
    },
    getNextBlockEl(y) {
      const draggableElements = [...this.$el.children].filter(
        c => !c.classList.contains('dragging')
      )

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect()
          const offset = y - box.top - box.height / 2
          if (offset < 0 && offset > closest.offset) {
            return { offset, element: child }
          } else return closest
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element
    },
  },
}
