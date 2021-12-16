<template>
  <div>
    <h1>from Post detail</h1>
    <p>Id Post: {{id}}</p>
    <p>Client info:</p>
    <p><span>Locale: {{$route.query.locale}}</span> <span>Browser: {{$route.query.browser}}</span></p>
    <router-link :to="{name: 'postauthor', params: {id: id}}" class="btn btn-block btn-info" >Post Author</router-link>
    <router-link :to="{name: 'comments', params: {id: id}}" class="btn btn-block btn-info" >Post Comments</router-link>
    <router-view />
    <button class="btn btn-block btn-warning" @click="backList">Back List</button>
    <div style="height: 500px"></div>
    <h1 id="react">Learn react</h1>
    <div style="height: 500px"></div>
  </div>
</template>

<script>

export default {
  props: [],
  data: function() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    backList: function(){
      this.$router.push('/postlist/published')
    }
  },
  mounted() {
    console.log('post detail mounted')
  },
  watch: {
    $route(to) {
      this.id = to.params.id
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('before navigation set in component')
    next()
  },
  beforeRouteLeave (to, from, next) {
    if(confirm('Cac thay doi se khong duoc luu?')) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<style scoped>
</style>
