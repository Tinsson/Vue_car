<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    fromdetails(){
        return this.$store.state.author;
    }
  }
}
</script>

<style lang="less" scoped>

</style>
