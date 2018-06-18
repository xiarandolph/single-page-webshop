<template>
  <div class="container">
    <product-item v-for="product in inStore"
      :key="product.uuid"
      :product="product">
    </product-item>
    <cart></cart>
  </div>
</template>

<script>
import ProductItem from '~/components/ProductItem.vue'
import Cart from '~/components/Cart.vue'

export default {
  computed: {
    inStore () {
      return this.$store.getters.inStore
    }
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
