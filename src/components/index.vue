<template>
  <div class="hello">
    <h2>{{ fromdetails }}</h2>
    <router-link to="/details">
      <yd-button type="danger">
        订单详情
      </yd-button>
    </router-link>
    <router-link to="/lists">
      <yd-button bgcolor="#0060BC" color="#FFF">
        订单列表
      </yd-button>
    </router-link>
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
