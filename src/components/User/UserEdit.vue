<template>
  <div class="user-edit">
    <h1>User Edit</h1>
    <p>Age is: {{age}}</p>
    <button @click="changeAge">Change my age</button>
    <button @click="sendData">Send data to sibling</button>
  </div>
</template>

<script>
import {eventBus} from '../../main.js'

export default {
  props: {
    age: Number
  },
  data: function() {
    return {
      address: 'ha noi'
    }
  },
  methods: {
    changeAge: function() {
      console.log('change!')
      this.$emit('ageEdited', 30)
    },
    sendData: function() {
      eventBus.sendAddress(this.address)
    }
  }
}
</script>

<style scoped>
  .user-edit {
    border: 1px solid blue;
  }
</style>
