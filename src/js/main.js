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
      return (this.selection ? this.selection.options : this.data)
    }
  },
  methods: {
    select: function(selection) {
      if (!selection) {
        this.selection = this.selectionStack.pop()
      } else {
        if (this.selection) {
          this.selectionStack.push(this.selection)
        }
        this.selection = selection
      }
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
