<template>
  <div>
    <h1>from Post List</h1>
    <button class="btn btn-block btn-danger" @click="backHome">Back home</button>
  </div>
</template>

<script>

export default {
  props: [],
  data: function() {
    return {
    }
  },
  methods: {
    backHome: function() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
