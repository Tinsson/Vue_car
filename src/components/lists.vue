<template>
  <div class="listsBox">
    <div @click="getmsg"><yd-button type="warning">get Access</yd-button></div>
    <div @click="updateacc"><yd-button type="primary">update data</yd-button></div>
  </div>
</template>
<script>

  export default {
      data(){
          return {
              user_id: '15',
              access:'22323'
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
          },
          updateacc(){
              this.$ajax({
                method: 'post',
                url: '/api/updateAcc',
                data: {access: this.access}
              }).then((d)=>{
                  console.log(d);
              })
          }
      }
  }
</script>
