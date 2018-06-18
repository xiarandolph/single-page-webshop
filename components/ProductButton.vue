<template>
  <div>
    <div>
      <button>Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-button',
  props: ['product'],
  data: function () {
    return {
      cart: "temp"
    }
  }
}
</script>

<style scoped>

</style>
