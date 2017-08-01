<template>
  <div class="listsBox">
    <div @click="getmsg"><yd-button type="warning">get Access</yd-button></div>
  </div>
</template>
<script>

  export default {
      data(){
          return {
              user_id: '15'
          }
      },
      methods: {
          getmsg(){
              this.$ajax({
                method: 'post',
                url: '/api/getAccess',
                data: {user_id: this.user_id}
              }).then((d)=>{
                if(d.status == 1){
                    console.log(d.msg);
                }
              }).catch(()=>{

              })
          }
      }
  }
</script>
