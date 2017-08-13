<template>
  <div class="center">
    <div class="infoBox">
      <div class="section">
        <p class="hdside">
          <img class="avator" src="../assets/card.png" alt="">
          <span class="user">{{name}}</span>
          <span class="arrow"></span>
        </p>
        <div class="integral"></div>
      </div>
      <div class="expand">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'center',
    data () {
      return {
        name: '18368092182'
      }
    }
  }
</script>

<style lang="less" scoped>
  @theme: #F95259;
  .infoBox{
    width: 100%;
    background-color: @theme;
  }
</style>
