<template>
  <div>
    <product-item v-for="product in products"
      :key="product.uuid"
      :product="product">
    </product-item>
  </div>
</template>

<script>
import ProductItem from '~/components/ProductItem.vue'

export default {
  name: 'product-list',
  props: ['products'],
  components: {
    'product-item': ProductItem
  }
}

</script>

<style scoped>

</style>
