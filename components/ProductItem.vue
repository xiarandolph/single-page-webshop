<template>
  <div>
    <div class="product">
      <h1>{{product.name}}</h1>
      <p>{{product.description}}</p>
      <p>{{product.basePrice}}</p>
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton'

export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton
  }
}
</script>

<style scoped>
.product {
  min-width: 300px;
  padding: 10px;
}
</style>
