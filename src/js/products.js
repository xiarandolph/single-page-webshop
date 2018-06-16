class Product {
  constructor(name, args) {
    this.name = name
    this.description = args.description || ""
    this.price = args.price || 0
    this.adjustedPrice = this.price //to be computed
    this.types = args.types || null //array
    this.options = args.options || null //array
    this.imgPath = args.imgPath || null
  }
}

class Option {
  constructor(name, price, description = "") {
    this.name = name
    this.price = price
    this.description = description
    this.selected = false
  }
}

var optOne = function() {
  return new Option("Donation", 3, "Adds to the cost")
}

var productList = [
  new Product("Cup Holders", {
    description: "Pool cup holder floats",
    imgPath: "res/cupholders.jpg",
    types: [
      new Product("Donut", {
        description: "Donut cup holder",
        imgPath: "res/donut.jpg",
        price: 16
      }),
      new Product("Flamingo", {
        description: "Flamingo cup holder",
        imgPath: "res/flamingo.jpg",
        price: 16,
        options: [
          optOne(),
          new Option("Two flamingo heads", 7)
        ]
      })
    ]
  }),
  new Product("Product 2", {
    description: "The second one with some options",
    price: 7,
    options: [
      optOne()
    ]
  }),
  new Product("Product 3", {
    description: "The third sample product",
    price: 16
  }),
  new Product("Product 4", {
    description: "Testing the css overflow",
    price: 35
  })
]
