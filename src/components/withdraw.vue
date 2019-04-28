<template>
  <div class="withdraw">
    <div id="heads">
      <mt-header title="申请提现">
        <router-link :to="{name:'Earnings'}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="withdraw-main">
      <div>
        <mt-field label="申请人：" placeholder="请输入您的真实姓名" v-model="username"></mt-field>
      </div>
      <div>
        <mt-field label="手机号码：" placeholder="请输入您的手机号" type="tel" v-model="phone"></mt-field>
      </div>
      <div>
        <mt-field label="提现金额：" placeholder="请输入您的提现金额" type="number" v-model="website"></mt-field>
      </div>
      <div class="money">
        <p>可提现金额：<span style=""> 500.00</span></p>
      </div>
      <div class="withdre">
        <label for="">提现方式：</label>
        <!--<ul>-->
          <!--<li class="Oli" >-->
            <!--<div></div>-->
            <!--<span>微信</span>-->
          <!--</li>-->
          <!--<li class="Oli" >-->
            <!--<div></div>-->
            <!--<span>支付宝</span>-->
          <!--</li>-->
          <!--<li class="Oli" >-->
            <!--<div></div>-->
            <!--<span>银行卡</span>-->
          <!--</li>-->
        <!--</ul>-->
        <mt-radio
          class="radios"
          v-model="way"
          :options="['微信', '支付宝', '银行卡']">
        </mt-radio>
      </div>
      <div>
        <mt-field label="到账账户：" placeholder="请输入您的账户" type="number" v-model="number"></mt-field>
      </div>
      <div class="info">
        注：银行卡提现请务必要选择所属银行
      </div>
      <div class="btn-end">
        <mt-button type="danger" size="large" @click="sendforms">提交申请</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        username:'',
        phone:'',
        website:'',
        number:'',
        value:'',
        way:''
      }
    },
    methods:{
      sendforms(){
        let sendData = {
          username:this.username,
          phone:this.phone,
          website:this.website,
          number:this.number
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .withdre{
    overflow: hidden;
    /*height: 2.8rem;*/
    padding-top: .8rem;
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;
    label{
      float: left;
      padding-left: 10px;
    }
    /*ul{*/
      /*overflow: hidden;*/
      /*float: right;*/
      /*padding-left: 0;*/
      /*margin: 0;*/
      /*width: 70%;*/
      /*height: 2.8rem;*/
      /*li{*/
        /*!*width: 30%;*!*/
        /*list-style: none;*/
        /*overflow: hidden;*/
        /*float: left;*/
        /*margin-right: .5rem;*/
        /*.check{*/
          /*background-image: url("../../static/images/gouxuan.png");*/
        /*}*/
        /*div{*/
          /*width: .8rem;*/
          /*height: .8rem;*/
          /*overflow: hidden;*/
          /*border-radius: 50%;*/
          /*border: 1px solid;*/
          /*float: left;*/
          /*margin-top: .2rem;*/
          /*margin-right: .2rem;*/
        /*}*/
        /*span{*/
          /*float: left;*/
          /*font-size: 14px;*/
        /*}*/
      /*}*/
    /*}*/
    .radios{
     padding-left: 6rem;
    }
  }
  .money{
    padding-left: 10px;
    text-align: center;
    border-bottom: 1px solid #d9d9d9;
    p{
      color: #fd5353;
      font-size: 14px;
      span{

      }
    }
  }
  .info{
    padding-top: 1rem;
    text-align: center;
    font-size: 14px;
    color: #fd5353;
  }
  .btn-end{
    margin: 0 auto;
    padding-top: 8rem;
    input{
      display: block;
      border: 0;
      outline: none;
      height: 2.5rem;
      letter-spacing: .1rem;
      margin-top: .6rem;
      margin-right: .5rem;
      border-radius: 5px;
      color: #fff;
      margin: 0 auto;
      margin-top: 5rem;
      background-color: #ff4200;
    }
  }
</style>
