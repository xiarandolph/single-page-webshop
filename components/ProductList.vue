<template>
  <b-container fluid>
    <b-row v-for="(group,index) in groupedProducts"
      :key=index>
      <b-col v-for="product in group"
        :key="product.id">
        <product-item
          :product="product">
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
  },
  computed: {
    //return products in groups of 3
    groupedProducts() {
      var i,j,grouped = [], chunk=3
      for (i=0, j=this.products.length; i<j; i+=chunk) {
        grouped.push(this.products.slice(i, i+chunk))
      }
      console.log(grouped)
      return grouped
    }
  }
}

</script>
