<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link" exact active-class="active">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/postlist/published" class="nav-link" active-class="active">Posts</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/postdetail/1" class="nav-link" active-class="active">Post Detail</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'postdetail', params: {id: 2}, query: {locale: 'en', browser: 'chrome'}, hash: '#react'}" class="nav-link" active-class="active">Post Detail 2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  .router-link-active {
    @extend .active;
  }
</style>
