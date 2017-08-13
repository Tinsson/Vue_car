<template>
  <div class="login">
    <div class="logoBox">
      <span class="logo"></span>
    </div>
    <div class="infoBox">
      <div class="iptArea">
        <yd-cell-group>
          <yd-cell-item>
            <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
            <input type="text" v-model="mobile" slot="right" placeholder="请输入手机号码">
          </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group>
          <yd-cell-item>
            <yd-icon slot="icon" name="warn-outline" size=".45rem"></yd-icon>
            <input type="text" v-model="vertify" slot="right" placeholder="请输入手机验证码">
            <yd-sendcode title="验证码" slot="right" resetStr="重获验证码" runStr="{%s}秒后重发" initStr="获取验证码" v-model="start" @click.native="sendCode"></yd-sendcode>
          </yd-cell-item>
        </yd-cell-group>
      </div>
    </div>
    <p class="loginTip">未注册账号的手机号，登录时将自动完成注册，且代表您已阅读并同意<span class="protocol">《用户协议》</span></p>
    <div class="btnBox">
      <yd-button bgcolor="#03a9f4" color="#FFF" size="large" @click.native="login">验证并登录</yd-button>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        mobile: '',
        vertify: '',
        start: false
      }
    },
    methods: {
      sendCode() {
        let phoneReg = /^[1][34578][0-9]{9}$/;
        if(!phoneReg.test(this.mobile)){
          this.$dialog.toast({
            mes: '手机号码不正确！',
            timeout: 1000,
            icon: 'error'
          });
        }else{
          this.$dialog.loading.open('发送中...');
          this.$ajax({
            method: 'post',
            url: '/register/proof',
            data: {mobile: this.mobile}
          }).then((d)=>{
              if(d.data.status === 1){
                this.start = true;
                console.log(d.data.code[this.mobile]);
                this.$dialog.loading.close();
                this.$dialog.toast({
                  mes: '已发送',
                  icon: 'success',
                  timeout: 1500
                });
              }else if(d.data.status === 2){
                console.log(d.data.msg);
                this.$dialog.loading.close();
                this.$dialog.toast({
                  mes:d.data.msg,
                  icon: 'error',
                  timeout: 1500
                });
              }
          });
        }
      },
      login(){
        let phoneReg = /^[1][34578][0-9]{9}$/;
        if(!phoneReg.test(this.mobile)){
          this.$dialog.toast({
            mes: '手机号码不正确！',
            timeout: 1000,
            icon: 'error'
          });
        }else if(this.vertify.length !== 6){
          this.$dialog.toast({
            mes: '验证码不正确',
            timeout: 1000,
            icon: 'error'
          });
        }else {
          let registerInfo = {
            mobile: this.mobile,
            proof: this.vertify
          };
          this.$ajax({
            method: 'post',
            url: '/register/codeProof',
            data: registerInfo
          }).then((d) => {
            if(d.data.status === 1){
                //验证成功
              /*this.$router.push({
                path: '/lists'
              })*/
            }else{
                //验证失败
              this.$dialog.toast({
                mes: '验证码不正确',
                timeout: 1000,
                icon: 'error'
              });
            }
          }).catch((e) => {
            console.log(e);
          })
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .logoBox{
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }
  .logo{
    display: block;
    width: 3rem;
    height: 3rem;
    background: url("../assets/logo.png") no-repeat center;
    background-size: cover;
  }
  .infoBox{
    padding: 0 .5rem;
    .m-cell:after{
      border:none;
    }
  }
  .loginTip{
    padding: 0 .5rem;
    font-size: .24rem;
    .protocol{
      color: #10aeff;
    }
  }
  .btnBox{
    padding: 0 .5rem .4rem;
    button{
      font-size: 20px;
    }
  }
</style>
