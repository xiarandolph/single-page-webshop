Vue.component('shop', {
  template: '#shop-template',
  props: {
    data: Array,
    keys: Array,
  },
  data: function() {
    var sortOrders = {}
    this.keys.forEach(function(key) {
      sortOrders[key] = 1 //stores sort order for each column, 1 or -1 for ascending or descending
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function() {
      var sortKey = this.sortKey
      var order = this.sortOrders[sortKey] || 1
      var data = this.data

      if (sortKey) { //sorts data based on column sortKey and order
        data = data.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    motd: "Welcome to the shop",
    shopKeys: ['name', 'description', 'price'],
    shopData: productList //defined in products.js
  }
})
