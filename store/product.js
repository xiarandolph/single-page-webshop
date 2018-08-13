export const state = () => ({
  list: [
    {
      'name': 'Item One',
      'description': 'The first item of many',
      'price': 10
    },
    {
      'name': 'Item Two',
      'description': 'The second item of many',
      'price': 13
    }
  ],
  current_filters: {}
})

export const getters = () => ({
  filteredList (state) {
    return state.list
  }
})
