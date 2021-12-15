<template>
  <div class="row">
    <div class="col-md-4">
      <form>
        <textarea v-model="item" class="form-control"></textarea>
        <button @click.prevent="createNew" class="btn btn-primary">Add</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      item: ''
    }
  },
  methods: {
    createNew: function() {

    }
  }
}
</script>

<style scoped>
</style>
