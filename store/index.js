import Vuex from 'vuex'

export const state = () => ({
  counter: 0
})

export const mutations = {
  incre (state) {
    state.counter++
  }
}
