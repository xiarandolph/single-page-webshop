<template>
  <div class="container">
    <product-item v-for="product in products"
      :key="product.uuid"
      :product="product">
    </product-item>
    <cart></cart>
  </div>
</template>

<script>
import ProductItem from '~/components/ProductItem.vue'
import Cart from '~/components/Cart.vue'

import products from '~/assets/products.js'

export default {
  data: function() {
    return { products }
  },
  components: {
    ProductItem,
    Cart
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
}
</style>
