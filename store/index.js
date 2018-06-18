import products from '../assets/products.js'

export const state = () => ({
  inStore: products,
  inCart: []
})

export const getters = {
  inStore: state => state.inStore,
  inCart: state => state.inCart
}

export const mutations = {
  addToCart(state, id) {
    state.inCart.push(id)
  },
  removeFromCart(state, index) {
    state.inCart.splice(index, 1)
  }
}

export const actions = {
  addToCart(context, id) {
    context.commit('addToCart', id)
  },
  removeFromCart(context, index) {
    context.commit('removeFromCart', index)
  }
}
