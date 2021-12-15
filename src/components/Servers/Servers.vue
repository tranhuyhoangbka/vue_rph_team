<template>
  <div class="servers">
    <ul>
      <li v-for="i in 5" :key="`sever_item${i}`">item {{i}}</li>
    </ul>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  .servers {
    border: 1px solid blue;
  }
</style>
