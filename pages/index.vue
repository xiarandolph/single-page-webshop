<template>
  <div class="container">
    <product-list class="left"
      :products="inStore">
    </product-list>
    <cart class="right">
    </cart>
  </div>
</template>

<script>
import ProductList from '~/components/ProductList.vue'
import Cart from '~/components/Cart.vue'

export default {
  computed: {
    inStore () {
      return this.$store.getters.inStore
    }
  },
  components: {
    ProductList,
    Cart
  }
}
</script>

<style>
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.left {
  display: inline-block;
  max-width: 60%;
  height: 100%;
  overflow: auto;
}

</style>
