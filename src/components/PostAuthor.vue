<template>
  <div>
    <h1>Post author</h1>
    <router-link :to="{name: 'poststart', params: {id: $route.params.id}}" class="btn btn-block btn-warning">Back start page</router-link>
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
  },
}
</script>

<style scoped>
</style>
