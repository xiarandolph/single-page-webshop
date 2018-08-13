<template>
  <v-card>
    <v-card-media
      src="https://picsum.photos/200"
      height="200px"
    >
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="blue">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'product-card',
  props: ['product']
}
</script>