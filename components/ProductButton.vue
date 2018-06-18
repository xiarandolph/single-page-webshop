<template>
  <div>
    <div>
      <button @click="addToCart">Add to Cart</button>
    </div>
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
