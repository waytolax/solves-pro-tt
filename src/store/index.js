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
  addBlock({ state, commit }, payload) {
    const updatedBlocks = [...state.blocks, createBlock(payload)]

    commit('setBlocks', updatedBlocks)
  },
  updateBlock({ state, commit }, { block, value }) {
    const updatedBlocks = state.blocks.map(b =>
      b.id === block.id
        ? createBlock({ id: block.id, type: block.type, value })
        : b
    )

    commit('setBlocks', updatedBlocks)
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
      const blocks = JSON.parse(localStorage.getItem('my-blocks'))
      commit('setBlocks', blocks || [])
    } catch (e) {
      console.log(e)
    }
  },
}

const getters = {
  getImageById: state => id => state.images.find(i => i.id === id),
}

export default {
  state,
  getters,
  mutations,
  actions,
}
