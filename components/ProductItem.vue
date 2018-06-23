<template>
  <b-card class="h-100">
    <b-media no-body>
      <b-media-aside vertical-align="top">
        <b-img blank blank-color="#ccc" width="128" height="128" alt="placeholder"/>
      </b-media-aside>
      <b-media-body class="ml-3">
        <h2>{{product.name}}</h2>
        <p>{{product.description}}</p>
        <product-button :product="product"></product-button>
      </b-media-body>
    </b-media>
  </b-card>
</template>

<script>
import ProductButton from './ProductButton'

export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton
  }
}
</script>
