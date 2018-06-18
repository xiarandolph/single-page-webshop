<template>
  <div class="container">
    <product-item :product="{name: 'Product 1'}"></product-item>
    <product-item :product="{name: 'Product 2'}"></product-item>
  </div>
</template>

<script>
import ProductItem from '~/components/ProductItem.vue'

export default {
  components: {
    ProductItem
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
}
</style>
