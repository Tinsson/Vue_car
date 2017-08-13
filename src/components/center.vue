<template>
  <div class="center">
    <div class="infoBox">
      <div class="section">
        <p class="hdside">
          <img class="avator" src="../assets/moto.jpg" alt="">
          <span class="user">{{name}}</span>
          <span class="arrow"></span>
        </p>
        <div class="integral">
          <div class="option line">
            <p class="num">{{score}}</p>
            <p class="tip">积分</p>
          </div>
          <div class="option line">
            <p class="num">{{card}}</p>
            <p class="tip">卡包</p>
          </div>
          <div class="option">
            <p class="num"><i class="ico-add"></i></p>
            <p class="tip">爱车</p>
          </div>
        </div>
      </div>
      <div class="expand">
        <div class="fact">
          <p class="ico order"></p>
          <p class="text">订单</p>
        </div>
        <div class="fact">
          <p class="ico msg"></p>
          <p class="text">客服</p>
        </div>
        <div class="fact">
          <p class="ico card"></p>
          <p class="text">超宝卡</p>
        </div>
        <div class="fact">
          <p class="ico convert"></p>
          <p class="text">口令兑换</p>
        </div>
      </div>
    </div>
    <div class="saveBox">
      <div class="tips">
        <span class="coin"></span>
        <span class="text">车T为您共省</span>
      </div>
      <div class="money">
        <span class="num">{{save}}</span>
        元
      </div>
    </div>
    <div class="article" v-for="item in artcle">
      <h2 class="sign">
        <span class="tyre"></span>
        <span class="text">{{item.tip}}</span>
      </h2>
      <div class="content">
        <img class="artpic" src="../assets/tyre.jpg" alt="">
        <div class="right">
          <h2 class="title">{{item.title}}</h2>
          <p class="text">{{item.text}}</p>
        </div>
      </div>
      <p class="check">查看详情</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'center',
    data () {
      return {
        name: '18368092182',
        score: 0,
        card: 5,
        save: "0.00",
        artcle: [{
            tip: '轮胎小贴士',
          title: '教你选择适合自己的轮胎',
          text: '轮胎品牌繁多？复杂参数眼花缭乱？看到这一篇你就明白了。'
        },{
          tip: '保养小贴士',
          title: '夏季汽车保养8项功课',
          text: '夏季汽车保养必修课，让爱车健康的一堂课，学起来！'
        }]
      }
    }
  }
</script>

<style lang="less" scoped>
  @theme: #F95259;
  .center{
    width: 100vw;
    min-height: 100vh;
    background-color: #F7F7F7;
    padding-bottom: .5rem;
  }
  .infoBox{
    width: 100%;
    background-color: #FFF;
    .section{
      width: 100%;
      background-color: @theme;
      padding-bottom: .3rem;
      .hdside{
        position: relative;
        display: flex;
        flex-direction: row;
        padding: .3rem;
        .avator{
          display: inline-block;
          width: .8rem;
          height: .8rem;
          border: 3px solid #FFF;
          border-radius: 50%;
          object-fit: cover;
        }
        .user{
          line-height: .8rem;
          color: #FFF;
          padding-left: .3rem;
          font-size: .3rem;
        }
        .arrow{
          position: absolute;
          top: .55rem;
          right: .5rem;
          display: inline-block;
          width: .2rem;
          height: .2rem;
          border: solid white;
          border-width: 1px 1px 0 0;
          transform: rotate(45deg);
        }
      }
      .integral{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .option{
            position: relative;
            color: #FFF;
            width: 33%;
            font-size: .3rem;
            text-align: center;
            &.line:after{
              content: '';
              position: absolute;
              right: 0;
              top: .1rem;
              width: 0;
              height: .7rem;
              border-right: .01rem solid #FFF;
            }
            .num{
              height: .45rem;
              line-height: .45rem;
              overflow: hidden;
            }
            .ico-add{
              display: inline-block;
              width:.45rem;
              height: .45rem;
              background: url('../assets/add.png') no-repeat center;
              background-size: cover;
            }
          }
      }
    }
    .expand{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .fact{
        width: 25%;
        text-align: center;
        padding: .2rem 0;
        .ico{
          display: inline-block;
          width: .6rem;
          height: .6rem;
          &.order{
            background: url("../assets/order.png") no-repeat center;
            background-size: cover;
          }
          &.msg{
            background: url("../assets/msg.png") no-repeat center;
            background-size: cover;
          }
          &.card{
            background: url("../assets/card.png") no-repeat center;
            background-size: cover;
          }
          &.convert{
            background: url("../assets/convert.png") no-repeat center;
            background-size: cover;
          }
        }
        .text{
          font-size: .28rem;
          color: #797878;
        }
      }
    }
  }

  .saveBox{
    width: 7.1rem;
    padding: .3rem 0;
    border-radius: 3px;
    margin: .2rem auto;
    background-color: #FFF;
    box-shadow: 0 1px 8px #d8d8d8;
    display: flex;
    justify-content: space-between;
    .tips{
      display: flex;
      flex-direction: row;
      .coin{
        display: inline-block;
        width: .6rem;
        height: .6rem;
        background: url('../assets/coin.png') no-repeat center;
        background-size: cover;
        margin-left: .2rem;
      }
      .text{
        line-height: .6rem;
        font-size: .32rem;
        color: #666;
        padding-left: .1rem;
      }
    }
    .money{
      display: inline-block;
      line-height: .6rem;
      margin-right: .3rem;
      .num{
        color: #f23030;
        font-size: .52rem;
      }
    }
  }

  .article{
    background-color: #FFF;
    padding: .2rem;
    margin-bottom: .2rem;
    .sign{
      padding: .1rem 0;
      display: flex;
      flex-direction: row;
      .tyre{
        width: .6rem;
        height: .6rem;
        display: inline-block;
        border-radius: 2px;
        background: #A6E0ED url("../assets/tyre.png") no-repeat center;
        background-size: .4rem .4rem;
      }
      .text{
        font-weight: normal;
        font-size: 14px;
        color: #8c8c8c;
        padding-left: .2rem;
        line-height: .6rem;
      }
    }
    .content{
      padding: .2rem 0;
      border-bottom: .5px solid #999;
      display: flex;
      justify-content: space-between;
      .artpic{
        width: 2rem;
        height: 2rem;
      }
      .right{
        width: 5rem;
        padding-left: .1rem;
        .title{
          padding-top: .2rem;
          font-size: .34rem;
        }
        .text{
          padding-top: .15rem;
          color: #8c8a8a;
          font-size: .28rem;
        }
      }
    }
    .check{
      text-align: center;
      letter-spacing: 1px;
      font-size: .26rem;
      color: #888;
      padding-top: .12rem;
    }
  }
</style>
