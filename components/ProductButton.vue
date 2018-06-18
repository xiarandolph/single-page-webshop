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
    addToCart () {
      this.$store.commit('cart/add', this.product)
    }
  }
}
</script>

<style scoped>

</style>
