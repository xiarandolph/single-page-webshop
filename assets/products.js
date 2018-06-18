class ProductItem {
  constructor(name, description, basePrice, id="") {
    this.name = name
    this.description = description
    this.basePrice = basePrice
    this.id = id
  }
  get uuid() {
    return this.id + this.name
  }
}

let products = [
  new ProductItem("Prod1", "first", 14),
  new ProductItem("Prod2", "second", 13)
]

export default products
