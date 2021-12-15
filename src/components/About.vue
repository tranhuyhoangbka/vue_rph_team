<template>
  <div>
    <p>from aboutn page</p>
    <button @click="count++">Increase value</button>
    <p>count: {{count}}</p>
  </div>
</template>

<script>

export default {
  props: [],
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
  },
  created() {
    console.log('created');
  },
  destroyed() {
    console.log('destroyed');
  },
  deactivated() {
    // component not destroyed but not activated khi chuyen doi giua cac compnent
    console.log('Deactived');
  },
  activated(){
    // component change from deactived to activated khi chuyen doi giua cac compnent
    console.log('Activated');
  }
}
</script>

<style scoped>
</style>
