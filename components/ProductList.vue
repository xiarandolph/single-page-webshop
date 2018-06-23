<template>
  <b-container fluid>
    <b-row>
      <b-col v-for="product in products"
        :key="product.id"
        md="4">
        <product-item :product="product">
        </product-item>
      </b-col>
    </b-row>
  </b-container>
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
