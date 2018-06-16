class Product {
  constructor(name, args) {
    this.name = name
    this.description = args.description || ""
    this.price = args.price || 0
    this.adjustedPrice = this.price //to be computed
    this.types = args.types || null //array
    this.options = args.options || null //array
  }
}

class Option {
  constructor(name, price, description = "", selected = false) {
    this.name = name
    this.price = price
    this.description = description
    this.selected = selected
  }
}

let optOne = new Option("Option 1", 3, "Adds to the cost")

var productList = [
  new Product("Product 1", {
    description: "The first of many",
    types: [
      new Product("Type A", {
        description: "First type of the first product",
        price: 5
      }),
      new Product("Type B", {
        description: "Second type of the first product, with options",
        price: 18,
        options: [
          optOne,
          new Option("Option 2", 7)
        ]
      })
    ]
  }),
  new Product("Product 2", {
    description: "The second one with some options",
    price: 7,
    options: [
      optOne
    ]
  }),
  new Product("Product 3", {
    description: "The third and final sample product",
    price: 16
  })
]
