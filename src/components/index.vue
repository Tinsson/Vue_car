<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to CAR_T'
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
