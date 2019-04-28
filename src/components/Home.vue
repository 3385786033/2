<template>
  <div class="home">
    <div id="heads">
      <mt-header title="首页">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <!--轮播-->
    <div class="carousel" id="carousel">
      <mt-swipe :auto="4000">
        <mt-swipe-item style="background-color: red"><img src="../../static/images/banner.png" alt=""></mt-swipe-item>
        <mt-swipe-item style="background-color: blue"><img src="../../static/images/banner1.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <!--列表-->
    <div class="page-wrap">
      <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="信用卡申请">
          <div class="page-title">
            <div class="page-span1">
              <i class="line"></i> &nbsp; 快速办卡
            </div>
            <!--<div class="page-span2">-->
              <!--<i class="tongzi"></i>-->
              <!--<p class="tongziMessages" id="gundong">推荐办卡</p>-->
            <!--</div>-->
          </div>
          <ul class="listBank">
            <li v-for="(item,index) in logoList">
              <router-link :to="{ name:'ApplyCard',query:{data:item.message,img_li:item.images_list}}">
                <img :src='item.images_list'alt="">
                <p>{{ item.message }}</p>
                <div style="font-size: 12px;color: red;text-align: center">{{ item.info }}</div>
              </router-link>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="自由禄市">
          <ul class="listBanks">
            <li v-for="item in listImg" @click="unopened">
              <div style="width: 80%;height: 60%;overflow: hidden;text-align: center;margin: 0 auto;margin-top: 10%">
                <img :src="item.img" alt="">
              </div>
              <p>{{ item.title }}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="个人中心">
          <div class="page-part">
            <mt-header style="background-color: #B56D61">
              <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
              </router-link>
              <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
          </div>
          <div class="userHeads">
            <div class="user-main">
              <div class="user-img">
                <img src="" alt="">
              </div>
              <mt-button type="danger" v-if="empty" class="logins" @click="test">点击登录</mt-button>
              <p v-else class="userlogin">愤路的小鸟</p>
            </div>
          </div>
          <!--收益-->
          <div class="userEarnings">
            <div class="userEarnings-left" @click="earnings">
              <p>我的收益 (元)</p>
              <p>0.00</p>
            </div>
            <div class="userEarnings-right" @click="treasure">
              <p>个人财富 (禄)</p>
              <p>200</p>
            </div>
          </div>
          <!--收益 end-->
          <div style="background-color: #eee;height: 1.2rem"></div>
          <!--各种信息-->
          <div class="infos" style="border: 0">
            <div>
              <mt-cell title="办卡记录" :to="record" is-link>
                <img slot="icon" src="../../static/images/jilu.png" width="24" height="24" style="margin-right: 1rem">
              </mt-cell>
            </div>
            <div>
              <mt-cell title="进度查询" :to="schedule" is-link>
                <img slot="icon" src="../../static/images/jindu.png" width="24" height="24" style="margin-right: 1rem">
              </mt-cell>
            </div>
            <div @click="partnership" style="box-sizing: border-box" v-if="isPartner">
              <mt-cell title="成为合伙人" is-link>
                <img slot="icon" src="../../static/images/hehuo.png" width="24" height="24" style="margin-right: 1rem">
              </mt-cell>
            </div>
            <div @click="mycard" style="box-sizing: border-box" v-else>
              <mt-cell title="我的名片" is-link>
                <img slot="icon" src="../../static/images/mingpian.png" width="24" height="24" style="margin-right: 1rem">
              </mt-cell>
            </div>
            <div @click="rights">
              <mt-cell title="合伙权益" is-link>
                <img slot="icon" src="../../static/images/quanyi.png" width="24" height="24" style="margin-right: 1rem">
              </mt-cell>
            </div>
            <div @click="services">
              <mt-cell title="联系客服" is-link>
                <img slot="icon" src="../../static/images/message.png" width="24" height="24" style="margin-right: 1rem">
              </mt-cell>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="信用卡申请">
        <img slot="icon" :src="cards">
        信用卡申请
      </mt-tab-item>
      <mt-tab-item id="自由禄市">
        <img slot="icon" :src="flukes">
        自由禄市
      </mt-tab-item>
      <mt-tab-item id="个人中心">
        <img slot="icon" :src="personages">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'home',
    data () {
      return {
        empty:true,
        selected:'信用卡申请',
        logoList:[{
          images_list:"../../static/images/xinye.png",
          message:'兴业银行',
          info:'*取现免手续费'
        },{
          images_list:"../../static/images/minshen.png",
          message:'民生银行',
          info:'*申请秒批'
        },{
          images_list:"../../static/images/jiaotong.png",
          message:'交通银行',
          info:'*新户送100元'
        },{
          images_list:"../../static/images/pingan.png",
          message:'平安银行',
          info:'*加油8.8折'
        },{
          images_list:"../../static/images/zheshang.png",
          message:'浙商银行',
          info:'*9元看电影'
        },{
          images_list:"../../static/images/zhongxin.png",
          message:'中信银行',
          info:'*新户有好礼'
        },{
          images_list:"../../static/images/pufa.png",
          message:'浦发银行',
          info:'*额度提升快'
        },{
          images_list:"../../static/images/zhongguo.png",
          message:'中国银行',
          info:'*三倍积分好礼享不完'
        },{
          images_list:"../../static/images/gongshang.png",
          message:'工商银行',
          info:'*宇宙大行人人拥有'
        }
        ],
        isPartner:false,
        listImg:[
          {
            title:'禄卡积分兑换',
            img:'../../static/images/jifen.png'
          },{
            title:'股票开户',
            img:'../../static/images/kaihu.png'
          },{
            title:'理财通',
            img:'../../static/images/licai.png'
          },
          {
            title:'融资贷款',
            img:'../../static/images/rongzi.png'
          }
        ],
        //信用卡
        cards:'',
        card1:'../../static/images/cards.png',
        card2:'../../static/images/card.png',
        //自由禄卡
        flukes:'',
        flukes1:'../../static/images/fulu.png',
        flukes2:'../../static/images/fulu2.png',
        //个人中心
        personages:'',
        personage1:'../../static/images/geren.png',
        personage2:'../../static/images/geren2.png',
        record:'Record',
        schedule:'schedu'
      }
    },
    methods: {
      partnership(){
       MessageBox.confirm('确认申请吗？','申请成为合伙人').then(
         action => {
           this.$router.push({name:'Partnership'})
         },
         action =>{
           //alert(action)
         }
       )
      },
      services(){
       this.$router.push({name:'service'})
      },
      rights(){
        this.$router.push({name:'equity'})
      },
      unopened(){
        MessageBox({
          title: '系统提示',
          message: '功能还未开放?',
          showCancelButton: true
        });
      },
      treasure(){
        this.$router.push({name:'Treasure'})
      },
      earnings(){
        this.$router.push({name:'Earnings'})
      },
      shows(){
        this.$router.push({name:'share'})
      },
      mycard(){
        this.$router.push({name:'share'})
      },
      isWeiXin() {
        const ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
          return true;
        } else {
          return false;
        }
      },
      test() {
        console.log(this.isWeiXin())
        if (this.isWeiXin()) {
          //alert(1)
          //微信登录，接口由后台定义
          this.$http.get('/wx/index/login/type/2').then((res) => {
            if(res.data.code == 0){   //微信登录成功跳转个人中心
            this.$router.push({name: 'UserHome',})
          }else{                //微信登录失败，使用填写信息登录
            this.$router.push({name: 'Login',})
          }
        })
        }
      }
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        if(val === '信用卡申请'){
          this.cards = this.card2
        }else {
          this.cards = this.card1
        }
        if(val === '自由禄市'){
          this.flukes = this.flukes2
        }else {
          this.flukes = this.flukes1
        }
        if(val === '个人中心'){
          this.personages = this.personage2
          document.getElementById('carousel').style.display = 'none'
          document.getElementById('heads').style.display = 'none'
        }else {
          document.getElementById('carousel').style.display = 'block'
          document.getElementById('heads').style.display = 'block'
          this.personages = this.personage1
        }
      }
    },
    created(){
      this.cards = this.card2
      this.flukes = this.flukes1
      this.personages = this.personage1
      if(this.$route.query.vals === undefined){

      }else {
        this.selected = this.$route.query.vals
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  a { text-decoration: none; }
.carousel{
  height: 30vh;
  text-align: center;
  overflow: hidden;
  img{
    display: block;
    width: 100%;
    height: 100%;
  }

}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 2.5rem;
}
/*银行列表*/
.page-title{
  margin: 10px 0;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  .page-span1{
    float: left;
  }
  .page-span2{
    float: right;
    margin-right: .2rem;
    .tongzi{
      display:block;
      width: 1rem;
      height: 1rem;
      float: left;
      margin-top: .1rem;
      background-image: url("../../static/images/tongzhi.png");
      margin-right: .3rem;
    }
    .tongziMessages{
      float: left;
      margin: 0;
    }
  }
}
.page-title .line{
  height: 2vh;
  display: block;
  background-color: saddlebrown;
  width: 2px;
  float: left;
  margin-left: 6px;
  margin-top: 4px;
}
  .listBank{
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: .2rem;
    background-color: #eee;
    padding-bottom: .5rem;
  }
  .listBank li{
    list-style: none;
    width: 30%;
    height: 8.6rem;
    float: left;
    margin-left: 2%;
    margin-top: 3%;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
  }
  .listBanks{
    overflow: hidden;
    padding: 0;
  }
  .listBanks li{
    list-style: none;
    width: 32.6%;
    height: 18vh;
    float: left;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #eee;
    text-align: center;
    margin: 0 auto;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
    p{
      margin: 0;
      margin-top: .5rem;
      font-size: 14px;
      text-align: center;
    }
  }
.listBank li a{
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
  position: relative;
}
.listBank li a img{
  width: 60%;
  height: 7.5vh;
  margin: 0 auto;
  display: block;
  margin-bottom: .7rem;
}
.listBank li a p{
  height: 1.5rem;
  margin: 0;
  line-height: 1.5rem;
  font-size: 14px;
  text-align: center;
  color: black;
  border-top:1px solid #eee;
  vertical-align: bottom;
}
/*银行列表 end*/
  /* 个人中心*/
  .userHeads{
    height: 10rem;
    text-align: center;
    background-color: #B56D61;
    background-image: url("../../static/images/gerenbg.png");
  }
  .user-main{
    width: 50%;
    height: 9rem;
    margin: 0 auto;
  }
  .user-img{
    height: 4rem;
    width: 4rem;
    background-color: #fff;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 50%;
  }
  .user-img img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .logins{
    margin-top: 1rem;
    background-color: #fff;
    color: #666;
    font-size: 14px;
    height: 2rem;
    width: 60%;
  }
  .userlogin{
    color: #fff;
  }
  /*收益*/
  .userEarnings{
    height: 5rem;
    overflow: hidden;
    background-color: #fff;
  }
  .userEarnings .userEarnings-left,.userEarnings .userEarnings-right{
    float: left;
    width: 50%;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .userEarnings .userEarnings-left{
    box-sizing: border-box;
    border-right: 1px solid #eee;
  }
  .userEarnings .userEarnings-left p:nth-of-type(1),.userEarnings .userEarnings-right p:nth-of-type(1){
    color: #727071;
    font-size: 20px;
    margin-bottom: 0;
    margin-top: .8rem;
  }
  .userEarnings .userEarnings-left p:nth-of-type(2),.userEarnings .userEarnings-right p:nth-of-type(2){
    margin-top: .5rem;
    margin-bottom: 0;
    color: #fd5353;
  }
  /*各种信息*/
  .infos{
    height: auto;
    overflow: hidden;
    padding-bottom: .2rem;
  }
</style>
