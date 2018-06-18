<template>
  <div>
    <ul>
      <li v-for="item in items"
        :key="item.uuid">
        {{item}}
        <button @click="remove">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    items () {
      return this.$store.state.cart.items
    }
  },
  methods: {
    remove (item) {
      this.$store.commit('cart/remove', item)
    }
  }
}
</script>

<style scoped>

</style>
