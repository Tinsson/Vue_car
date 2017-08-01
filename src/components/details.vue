<template>
  <div class="content">
    <yd-navbar title="订单详情">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="itemBox">
      <yd-cell-group class="cellBox">
        <yd-cell-item class="items">
          <span slot="left" class="p_lb">消费金额：</span>
          <span slot="right" class="p_price">￥{{price}}</span>
        </yd-cell-item>
        <yd-cell-item class="sub_info">
          <span slot="left">消费车辆：</span>
          <span slot="right" class="right_box">{{carnum}}</span>
        </yd-cell-item>
        <yd-cell-item class="sub_info last">
          <span slot="left">消费日期：</span>
          <span slot="right" class="right_box">{{date}}</span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <div class="details">
      <h2 class="hdtype">
        材料清单：
      </h2>
      <yd-cell-group class="cellBox">
        <yd-cell-item v-for="item in material">
          <span slot="left" class="itemLeft">{{item.name}}</span>
          <span slot="right" class="itemRight">x{{item.count}}</span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <div class="details">
      <h2 class="hdtype">
        工时清单：
      </h2>
      <yd-cell-group class="cellBox">
        <yd-cell-item v-for="item in hours">
          <span slot="left" class="itemLeft">{{item.name}}</span>
          <span slot="right" class="itemRight">{{item.time}}</span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <div class="details">
      <h2 class="hdtype">
        商家信息：
      </h2>
      <ul class="business">
        <li v-for="val in business" class="info cf">
          <span class="tips">{{val.type}}：</span>
          <span class="con">{{val.content}}</span>
        </li>
      </ul>
    </div>
    <div class="details">
      <h2 class="hdtype">
        服务评价：
      </h2>
      <form action="">
        <yd-cell-group>
          <yd-cell-item>
            <yd-rate slot="left" v-model="rate"></yd-rate>
            <span slot="right">{{rateInfo}}</span>
          </yd-cell-item>
          <yd-cell-item>
            <yd-textarea slot="right" placeholder="请输入评价信息" maxlength="100" class="textBox" v-model="access"></yd-textarea>
          </yd-cell-item>
        </yd-cell-group>
        <div class="btnBtn">
          <a href="javascript:;" @click="subInfo">
            <yd-button size="large" type="primary">提交评论</yd-button>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'


  export default {
    name: 'details',
    data () {
      return {
        msg: 'Welcome to Details',
        price: '25.00',
        carnum: '浙L8605J',
        date: '2017-6-26',
        material: [
          {name: '火花塞', count: '2'},
          {name: '机油', count: '3'}
        ],
        business: [
          {type: "消费店铺",content: "舟山新城海纳汽车用品店"},
          {type: "店铺地址",content: "浙江省舟山市定海区临城街道定沈路739号-12-13号"},
          {type: "店铺电话",content: "0580-2881212"}
        ],
        hours: [
          {name: '补胎',time: '1小时'},
          {name: '洗车', time: '30分钟'}
        ],
        access: [
          {baseClass: "good",selSwitch: "select",content: "好评",id: 1},
          {baseClass: "mid",selSwitch: "",content: "中评", id: 2},
          {baseClass: "bad",selSwitch: "",content: "差评", id: 3}
        ],
        rate: 5,
        rateInfo: '好评',
        mobile: '',
        access: '',
        user_id: '18'
      }
    },
    methods: {
        toindex: function(e){
            this.$router.push({
              path: "/"
            })
        },
        subInfo(){
            var data = {
              access: this.access,
              user_id: this.user_id
            };
            this.$ajax({
              method: 'post',
              url: '/api/access',
              data: data,
            }).then(function(d){
                if(d.status == 1){
                    alert(d.msg);
                }
            }).catch(function(){
                console.log(2222);
            })
        }
    },
    computed: mapState({
        author(){
            return this.$store.state.author
        },
        countAlias: 'count',
        addlocal(state){
            return this.date + state.count;
        },
        donecount(){
            return this.$store.getters.doneTodos;
        }
    }),
    watch: {
      mobile(){
        console.log(2222);
        this.$store.commit('newAuthor', this.mobile);
      },
      rate(){
        var rate = this.rate;
        var rateinfo;
        if(rate < 3){
            rateinfo = "差评";
        }else if(rate < 5){
            rateinfo = '中评';
        }else{
            rateinfo = '好评';
        }
        this.rateInfo = rateinfo;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @maincolor: #0060bc;
  @important: #ff6d00;
  .content{
    display: block;
    .items{
      line-height: 1.1rem;
      &:after{
        width: 94%;
        border-bottom: 2px dotted #eee;
      }
    }
    .sub_info{
      line-height: .6rem;
      .right_box{
        font-size: .32rem;
        color: #ff6d00;
      }
      &:after{
        border: none;
      }
      &.last{
        background: #FFF url('../assets/line.png') repeat-x bottom;
        background-size: 26px 3px;
      }
    }
    .cell-right{
      min-height: .8rem;
    }
    .p_lb{
      font-size: .35rem;
    }
    .p_price{
      font-size: .62rem;
      color: #000;
    }
    .sec_btn{
      display: inline-block;
      color: #FFF;
      background: @maincolor;
      padding: 10px 15px;
      border-radius: 5px;
    }
    .cellBox{
      margin-bottom: 0;
    }
    .details{
      margin-top: 5px;
      padding-top: 10px;
      width: 100%;
      box-sizing: border-box;
      background-color: #FFF;
      .hdtype{
        border-bottom: 1px solid #eaeaea;
        font-size: 18px;
        line-height: 30px;
        width: 100%;
        box-sizing: border-box;
        padding-left: 10px;
        padding-bottom: 10px;
      }
      .itemLeft{
        font-size: .35rem;
      }
      .itemRight{
        font-size: .4rem;
        color: @important;
      }
      .business{
        background-color: #FFF;
        width: 100%;
        overflow: hidden;
        padding: 10px 0;
        .info{
          width: 100%;
          line-height: 25px;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          .tips{
            display:inline-block;
            width: 30%;
            padding-left: 10px;
          }
          .con{
            display:inline-block;
            width: 70%;
          }
        }
      }
      .btnBtn{
        padding: 0 .5rem .5rem;
      }
      textarea{
        font-size: .5rem;
      }
    }
  }
  .chose {
    padding: 15px 10px;
    span {
      display: inline-block;
      border: 1px solid #333;
      padding: 5px 5px 5px 22px;
      font-size: 16px;
      border-radius: 5px;
      margin-right: 20px;
      &.good {
        background: url("../assets/good.png") no-repeat left;
        background-size: 18px 18px;
        &.select {
          background: url("../assets/good1.png") no-repeat left;
          background-size: 18px 18px;
          color: #FF6D00;
          border-color: #ff6d00;
        }
      }
      &.mid {
        background: url("../assets/mid.png") no-repeat left;
        background-size: 18px 18px;
        &.select {
          background: url("../assets/mid1.png") no-repeat left;
          background-size: 18px 18px;
          color: #f6c770;
          border-color: #f6c770;
        }
      }

      &.bad {
        background: url("../assets/bad.png") no-repeat left;
        background-size: 18px 18px;
        &.select {
          background: url("../assets/bad1.png") no-repeat left;
          background-size: 18px 18px;
          color: #1296db;
          border-color: #1296db;
        }
      }
    }
  }
</style>
