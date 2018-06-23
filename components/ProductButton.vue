<template>
  <b-button-group>
      <b-button @click="addToCart">Add to Cart</b-button>
      <b-button variant="info">{{product.price}}</b-button>
  </b-button-group>
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
