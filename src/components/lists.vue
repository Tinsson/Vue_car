<template>
  <div class="listsBox">
    <h2 class="navHd">
      <span class="search"></span>
      {{title}}
    </h2>
    <div class="optBox">
      <div v-for="option in options" class="option">
        <p class="ico" :class="option.ico"></p>
        <p class="text">{{option.text}}</p>
      </div>
    </div>
    <div class="screen">
      <div v-for="condition in screen" class="condition">
        {{condition.content}}<i class="arrow"></i>
      </div>
    </div>
    <ul class="liBox">
      <li v-for="shop in shops" class="outli">
        <div class="imgBox">
          <img class="pic" src="../assets/moto.jpg" alt="">
        </div>
        <div class="infoBox">
          <h2 class="hdName">{{shop.name}}</h2>
          <p class="address">{{shop.address}}</p>
          <p class="record">
            <span class="access"><i class="num">{{shop.access}}</i>分</span>
            <span><i class="num">{{shop.custom}}</i>人购买</span>
          </p>
        </div>
        <div class="shortBox">
          <p class="tag">{{shop.tag}}</p>
          <p class="price">￥ <i class="num">{{shop.price}}</i></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

  export default {
      data(){
          return {
            title: "门店",
            options: [
              {
                ico: "list1",
                text: "洗车"
              },{
                ico: "list2",
                text: "内饰清洗"
              },{
                ico: "list3",
                text: "空调除臭",
              },{
                ico: "list4",
                text: "全车打蜡"
              }
            ],
            screen: [
              {
                content: "舟山市"
              },
              {
                content: "普通洗车-5座"
              },{
                content: "默认排序"
              }
            ],
            shops: [
              {
                name: "车之家",
                address: "定海区东山路车之家",
                custom: 207,
                access: 5,
                tag: "美容店",
                price: 20
              },
              {
                name: "汽车美容店",
                address: "普陀区东港街道东海西路2152号",
                custom: 562,
                access: 5,
                tag: "美容店",
                price: 15
              }
            ]
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
<style lang="less" scoped>
  @theme: #F95259;
  @line: #F1F1F1;
  #overText{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .listsBox{
    padding-top: 50px;
  }
  .navHd{
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    color: #000;
    font-size: 18px;
    line-height: 50px;
    background: #fbfbfb;
    border-bottom: 1px solid #eee;
    .search{
      position: absolute;
      top: 12px;
      left: 15px;
      width: 26px;
      height: 26px;
      display: inline-block;
      background: url("../assets/search.png") no-repeat center;
      background-size: cover;
    }
  }
  .optBox{
    border-bottom: 1px solid @line;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .option{
      width: 25%;
      height: 1.8rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      border-right: 1px solid @line;
      &:nth-last-child(1){
        border: none;
      }
      .ico{
        width: .6rem;
        height: .6rem;
        display: inline-block;
        align-self: center;
        &.list1{
          background: url("../assets/list1.png") no-repeat center;
          background-size: cover;
        }
        &.list2{
          background: url("../assets/list2.png") no-repeat center;
          background-size: cover;
        }
        &.list3{
          background: url("../assets/list3.png") no-repeat center;
          background-size: cover;
        }
        &.list4{
          background: url("../assets/list4.png") no-repeat center;
          background-size: cover;
        }
      }
      .text{
        color: #8F8F8F;
        text-align: center;
        margin-top: .15rem;
        font-size: .28rem;
      }
    }
  }
  .screen{
    height: .9rem;
    border-bottom: 1px solid @line;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .condition{
      width: 2.5rem;
      color: #333;
      font-size: 15px;
      align-self: center;
      text-align: center;
      height: .4rem;
      border-right: 1px solid #eee;
      &:nth-last-child(1){
        border: none;
      }
      .arrow{
        vertical-align: top;
        margin-left: 5px;
        margin-top: 8px;
        display: inline-block;
        border-top: 5px solid #666;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
    }
  }
  .outli{
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid @line;
    display: flex;
    flex-direction: row;
    padding: .24rem .2rem .24rem .24rem;
    .imgBox{
      width: 2rem;
      height: 1.5rem;
      .pic{
        width: 100%;
        height: 100%;
      }
    }
    .infoBox{
      width: 4rem;
      box-sizing: border-box;
      padding-left: .24rem;
      .hdName{
        font-size: .32rem;
        padding-bottom: .2rem;
        #overText;
      }
      .address{
        font-size: .28rem;
        color: #999;
        padding-bottom: .19rem;
        #overText
      }
      .record{
        font-size: .26rem;
        color: #999;
        span{
          padding: 0 5px;
          &.access{
            padding: 0 8px 0 0;
            border-right: 1px solid #ccc;
          }
        }
        .num{
          color: #ff9545;
        }
      }
    }
    .shortBox{
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .tag{
        padding: 2px 3px;
        color: #9BB9ED;
        background: #F3F8FC;
        font-size: .2rem;
        border-radius: 3px;
      }
      .price{
        color: #f00;
        font-size: .26rem;
        .num{
          font-size: .5rem;
        }
      }
    }
  }
</style>
