<template>
  <div class="user row">
    <div class="col-md-12">
      <h1>The User component</h1>
      <p>I'm {{name}}, this is a test, age is {{age}}</p>
      <button @click="changeName">Change name</button>
      <hr>
    </div>

    <div class="col-md-6">
      <UserDetail :name="name"
        :resetNameFn="resetName"
        :age="age"
        @nameReseted="name = $event" />
    </div>
    <div class="col-md-6">
      <UserEdit :age="age" @ageEdited="age = $event" />
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data: function() {
    return {
      name: 'hoang',
      age: 18
    }
  },
  methods: {
    changeName: function() {
      this.name = 'thang'
    },
    resetName: function() {
      this.name = 'hoang'
    }
  },
  components: {
    UserDetail,
    UserEdit
  }
}
</script>

<style scoped>
</style>
