<template>
  <div>
      <b-button @click="addToCart">Add to Cart</b-button>
  </div>
</template>

<script>
export default {
  name: 'product-button',
  props: ['product'],
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.product.id)
    }
  }
}
</script>

<style scoped>

</style>
