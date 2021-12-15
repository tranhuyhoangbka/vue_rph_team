<template>
  <div class="row">
    <Items v-for="(item, index) in items" :key="`item${index}`" :data="item">{{item}}</Items>
  </div>
</template>

<script>
import Items from './Items.vue'

export default {
  props: ['items'],
  components: {
    Items
  }
}
</script>

<style scoped>
</style>
