<template>
  <div class="conversion">
    <div id="heads">
      <mt-header title="兑换禄">
        <router-link :to="{name:'Treasure'}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="conversion-main">
      <p class="conversion-main_p1">禄总数为 : <span>200</span></p>
      <div class="conversion-main_p2">
        需兑换禄 :
        <input type="number" v-model="vals">
      </div>
      <p class="conversion-main_p3">对应金额 : <span>200</span></p>
      <div style="text-align: center">
        <mt-button type="danger" size="normal" class="btn_val" @click="exchange">确认兑换</mt-button>
      </div>
    </div>
    <div class="treasure-title">
      <div class="line-left"></div>
      <div class="line-span">兑换规则</div>
      <div class="line-right"></div>
    </div>
    <div class="message-list">
      <p>1, 百禄兑换1元人民币；1禄兑换1分人民币。</p>
      <p>2, 每次兑换需大于等于20000禄，兑换后平台扣除相应单位的个人财富禄,首次兑换扣除平台终身使用费19999禄。</p>
    </div>
    <div class="treasure-title">
      <div class="line-left"></div>
      <div class="line-span">获得方式</div>
      <div class="line-right"></div>
    </div>
    <div class="message-list">
      <p>1, 推荐他人首次成功关注本公众号”百禄何“，99禄/每人；</p>
      <p>2, 推荐他人成为“百禄何“合伙人，999禄/合伙人；</p>
      <p>3, 跟据相应银行要求，通过本平台推荐他人成功领用信用卡，如下表：</p>
      <div class="message-img">
        <img src="../../static/images/biaoge.png" alt=""width="345">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        vals:''
      }
    },
    methods:{
      exchange(){

      }
    }
  }
</script>
<style scoped lang="scss">
  .conversion{
    .conversion-main{
      .conversion-main_p1{
        font-size: 20px;
        padding-left: 7rem;
        span{
          color: #ff4200;
        }
      }
      .conversion-main_p2{
        padding-left: 7rem;
        font-size: 20px;
        input{
          width: 4rem;
          border: 1px #e8e8e8 solid;
          border-radius: 5px;
          outline: none;
          height: 1.5rem;
          padding-left: .3rem;
        }
      }
      .conversion-main_p3{
        font-size: 20px;
        padding-left: 7rem;
        span{
          color: #ff4200;
        }
      }
      .sendBtn{
        margin-left: 8rem;
        width: 6rem;
        border: 0;
        outline: none;
        height: 2.5rem;
        letter-spacing: .1rem;
        margin-top: .6rem;
        margin-right: .5rem;
        border-radius: 5px;
        color: #fff;
        background-color: #ff4200;
      }
    }
      .treasure-title{
        overflow: hidden;
        padding-left: 2rem;
        margin-top: 2rem;
        .line-left{
          height: 1px;
          width: 30%;
          background-color: #e8e8e8;
          float: left;
          margin-top: .8rem;
        }
        .line-span{
          float: left;
          margin: 0 .8rem;
        }
        .line-right{
          height: 1px;
          width: 30%;
          background-color: #e8e8e8;
          float: left;

          margin-top: .8rem;
        }
      }
    .message-list{
      color: #949494;
      padding: 0 1rem;
      font-size: 14px;
      p{
        margin: .5rem 0;
      }
      .message-img{
        width: 100%;
        overflow: hidden;
        img{
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>
