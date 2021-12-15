<template>
  <div>
    <p>{{address}}</p>
    <button @click="changeAddress">Change Address</button>
  </div>
</template>

<script>

export default {
  name: 'DataContact',
  data: function() {
    return {
      address: 'ha noi'
    }
  },
  methods: {
    changeAddress: function() {
      this.address = 'HCM'
    }
  }
}
</script>

<style scoped>
</style>
