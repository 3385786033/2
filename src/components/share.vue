<template>
  <div class="share_mask">
    <div id="heads">
      <mt-header title="我的名片">
        <router-link :to="{name:'Home',query:{vals:'个人中心'}}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="QRcode">
      <div class="QRcode_main">
        <qrcode></qrcode>
      </div>
    </div>
    <div class="QRcode_message">
      <p style="font-size: 16px">推广规则</p>
      <p>1 ,当你把“我的名片”页面通过右上角转发分享给其他人的时候 ，他们点入你所分享的推广页后，即可绑定上下级关系。</p>
      <p>2 ,别人通过扫“我的名片”页面二维码进入店铺首页，即可绑定 上下级关系。</p>
    </div>
    <div class="footers">
      <mt-button size="large" type="danger" @click.native="handleClick">生成名片</mt-button>
    </div>
    <div class="make" v-show="isShow">
      <div class="contents">
        <div class="male-head"> <i @click="close"><img src="../../static/images/clones.png" alt=""></i> </div>
        <div class="make-main">
          <qrcodes></qrcodes>
        </div>
        <div class="make-footer">
          <mt-button type="danger" size="large">保存图片</mt-button>
        </div>
        <p class="make-message">保存到相册可以分享到朋友圈</p>
      </div>
    </div>
  </div>
</template>
<script>
  import qrcode from '@/components/qrcode'
  import qrcodes from '@/components/qrcodes'
  export default {
    name: 'share',
    data () {
      return {
        popupVisible:false,
        isShow:false
      }
    },
    methods: {
      //动态生成二维码
      handleClick(){
        this.isShow =! this.isShow
      },
      close(){
        this.isShow =! this.isShow
      }
    },
    components:{
      qrcode,qrcodes
    }
  }
</script>
<style scoped lang="scss">
  *{
    box-sizing: border-box;
  }
  .share_mask{
    background-color: #eee;
    overflow: hidden;
  }
  .make{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,.5);
    .contents{
      background-color: #fff;
      height: 80%;
      width: 80%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      overflow: hidden;
      border-radius: 5px;
      padding-top: 1rem;
      .male-head{
        overflow: hidden;
        i{
          float: right;
          margin-right: 1rem;
        }
      }
      .make-main{
        width: 54%;
        height: 38%;
        margin: 10% auto;
        position: relative;
      }
      .make-footer{
        padding: 0 1rem;
        margin-top: 7rem;
      }
      .make-message{
        text-align: center;
        font-size: 14px;
        margin-top: 1rem;
      }
    }
  }
.QRcode{
  height: 15rem;
  width: 90%;
  margin: 1rem auto;
  position: relative;
  background-color: #fff;
  box-shadow: 1px 2px 2px #eee;
}
  .QRcode_main{
    width: 10rem;
    height: 10rem;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .QRcode_message{
    color: #666;
    width: 100%;
    padding:0 1rem;
  }
  .footers{
    position: fixed;
    bottom: 0;
    height: 5rem;
    width: 100%;
    padding:0  2rem;
    text-align: center;
  }
</style>
