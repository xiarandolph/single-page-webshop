Vue.component('shop', {
  template: '#shop-template',
  props: {
    data: Array
  },
  data: function() {
    return {
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
      this.selection = selection
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
