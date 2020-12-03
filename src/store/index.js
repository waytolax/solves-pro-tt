import images from '@/assets/mock/images'
import { createBlock } from '@/models'

const state = () => ({
  blocks: [],
  images: [],
})

const mutations = {
  setBlocks: (state, data) => (state.blocks = data),
  setImages: (state, data) => (state.images = data),
}

const actions = {
  fetchImages({ commit }) {
    commit('setImages', images)
  },
  addBlock({ getters, state, commit }, payload) {
    const updatedBlocks = [
      ...state.blocks,
      createBlock({ ...payload, order: getters.getLastOrderNum + 1 }),
    ]

    commit('setBlocks', updatedBlocks)
  },
  updateBlock({ state, commit }, { block, value }) {
    const updatedBlocks = state.blocks.map(b =>
      b.id === block.id ? createBlock({ value }, block) : b
    )

    commit('setBlocks', updatedBlocks)
  },
  updateBlockOrder({ getters, state, commit }, { block, nextOrder = 0 }) {
    const newOrder = nextOrder
      ? nextOrder < block.order
        ? nextOrder
        : nextOrder - 1
      : getters.getLastOrderNum
    const isSameOrder = newOrder === block.order

    if (!isSameOrder) {
      const updatedBlocks = state.blocks.map(b => {
        if (b.id === block.id) {
          return createBlock({ order: newOrder }, block)
        }
        if (b.order > block.order && b.order <= newOrder) {
          return createBlock({ order: b.order - 1 }, b)
        }
        if (b.order < block.order && b.order >= newOrder) {
          return createBlock({ order: b.order + 1 }, b)
        }

        return b
      })

      commit('setBlocks', updatedBlocks)
    }
  },
  deleteBlock({ state, commit }, block) {
    const updatedBlocks = state.blocks.filter(b => b.id !== block.id)

    commit('setBlocks', updatedBlocks)
  },
  saveBlocks({ state }) {
    try {
      const blocks = JSON.stringify(state.blocks)
      localStorage.setItem('my-blocks', blocks)
    } catch (e) {
      console.log(e)
    }
  },
  fetchBlocks({ commit }) {
    try {
      let blocks = JSON.parse(localStorage.getItem('my-blocks')) || []

      // fix for blocks without order
      if (blocks.length && !blocks[0].order) {
        blocks = blocks.map((b, i) => ({ ...b, order: i + 1 }))
      }

      commit('setBlocks', blocks)
    } catch (e) {
      console.log(e)
    }
  },
}

const getters = {
  getImageById: state => id => state.images.find(i => i.id === id),
  getBlocksSortedByOrder: state =>
    [...state.blocks].sort((a, b) => a.order - b.order),
  getLastOrderNum: state =>
    state.blocks.reduce(
      (max, curr) => (curr.order > max ? curr.order : max),
      0
    ),
}

export default {
  state,
  getters,
  mutations,
  actions,
}
