Vue.component('shop', {
  template: '#shop-template',
  props: {
    data: Array
  },
  data: function() {
    return {
      selectionStack: [], //holds previous selections
      selection: null
    }
  },
  computed: {
    filteredData: function() {
      return (this.selection ? this.selection.types : this.data)
    }
  },
  methods: {
    selectProduct: function(selection) {
      if (!selection)
        this.selection = this.selectionStack.pop()
      else if (selection.types || selection.options) {
        if (this.selection)
          this.selectionStack.push(this.selection)
        this.selection = selection
      }
    },
    selectOption: function(option) {
      option.selected = !option.selected
      this.selection.adjustedPrice += option.price * (option.selected ? 1 :
        -1)
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    motd: "Welcome to the shop",
    shopData: productList //defined in products.js
  }
})
