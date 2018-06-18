export const state = () => ({
  items: []
})

function getIndex(state, item) {
  return state.items.findIndex(p => p.uuid == item.uuid)
}

export const mutations = {
  add (state, item) {
    if (getIndex(state, item) < 0)
      state.items.push(item)
  },
  remove (state, item) {
    state.items.splice(getIndex(state, item), 1)
  }
}
