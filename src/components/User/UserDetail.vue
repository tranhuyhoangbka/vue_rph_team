<template>
  <div class="user-detail">
    <h1>User Details</h1>
    <p>My name: {{name}}, Age is {{age}}</p>
    <p>Address: {{address}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetNameFn">Reset name from callback function</button>
  </div>
</template>

<script>
import {eventBus} from '../../main.js'

export default {
  props: {
    // name: String
    name: {
      type: String,
      // required: true,
      default: 'hoang'
    },
    resetNameFn: Function,
    age: Number
  },
  data: function(){
    return {
      // localName: this.name
      address: ''
    }
  },
  //props: ['name']
  methods: {
    reverseName: function() {
      return this.name.split('').reverse().join('');
    },
    resetName: function() {
      // this.localName = 'hoang';
      this.$emit('nameReseted', 'hoang');
    }
  },
  created() {
    eventBus.$on('injectedData', (address) => {
      this.address = address
    })
  }
  // computed: {
  //   localName: function() {
  //     return this.name;
  //   }
  // }
}
</script>

<style scoped>
  .user-detail {
    border: 1px solid blue;
  }
</style>
