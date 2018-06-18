<template>
  <div>
    <ul>
      <li v-for="(item, index) in items"
        :key="index">
        {{item}}
        <button @click="remove(index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    items () {
      //get actual item based on id
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.inStore.find(storeItem => {
          return cartItem === storeItem.id
        })
      })
    }
  },
  methods: {
    remove(index) {
      this.$store.dispatch('removeFromCart', index)
    }
  }
}
</script>

<style scoped>

</style>
