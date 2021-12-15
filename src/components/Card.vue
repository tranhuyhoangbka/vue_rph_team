<template>
  <div class="card">
    <h1>{{cardWords}}</h1>
    <p>This is my car</p>
    <slot name="title"></slot>
    <!--content default -->
    <slot name="content">content</slot>
    <!-- default slot -->
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: ['cardWords'],
  data: function() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  h2 {
    color:  red;
  }
</style>
