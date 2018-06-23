<template>
  <b-container fluid>
    <b-row>
      <b-col cols="8">
        <product-list :products="inStore">
        </product-list>
      </b-col>
      <b-col>
        <cart></cart>
      </b-col>
    </b-row>
  </b-container>
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
