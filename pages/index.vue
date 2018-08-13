<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            v-for="(product, key) in products"
            :key="key"
          >
            <product-card :product="product">
            </product-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'

export default {
  name: 'index',
  computed: {
    products () {
      return this.$store.state.product.list
    }
  },
  components: {
    'product-card': ProductCard
  }
}
</script>