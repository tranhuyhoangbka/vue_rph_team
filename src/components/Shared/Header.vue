<template>
  <div>
    <nav>
      <li v-for="i in 5" :key="`nav_item${i}`">item {{i}}</li>
    </nav>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  li{
    display: inline-block;
    margin-right: 3px;
  }
</style>
