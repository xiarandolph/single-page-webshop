<template>
  <article class="product">
    <h1>{{product.name}}</h1>
    <p>{{product.description}}</p>
    <p>{{product.price}}</p>
    <product-button :product="product"></product-button>
  </article>
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
  display: block;
  float: left;
  width: 300px;
  min-width: 300px;
  margin: .5% .5%;
  padding: 10px;
}
</style>
