<template>
  <div class="schedule">
    <mt-header title="进度查询">
      <router-link :to="{name:'Home',query:{vals:'个人中心'}}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="schedule-main">
      <ul class="listBank">
        <li v-for="(item,index) in logoList">
          <a :href="item.link_s">
            <img :src='item.images_list'alt="">
            <p>{{ item.message }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data (){
      return {
        logoList:[{
          images_list:"../../static/images/xinye.png",
          message:'兴业银行',
          link_s:'https://personalbank.cib.com.cn/pers/creditCard/outer/querySchedule.do'
        },{
          images_list:"../../static/images/minshen.png",
          message:'民生银行',
          link_s:'https://creditcard.cmbc.com.cn/home/cn/wap/business/account/progress/index.shtml'
        },{
          images_list:"../../static/images/jiaotong.png",
          message:'交通银行',
          link_s:'https://creditcardapp.bankcomm.com/member/apply/status/preinquiry.html'
        },{
          images_list:"../../static/images/pingan.png",
          message:'平安银行',
          link_s:'https://bank-static.pingan.com.cn/ca/ccBooking/ccBookingHtml/query/index.html'
        },{
          images_list:"../../static/images/zheshang.png",
          message:'浙商银行',
          link_s:'https://directbank.czbank.com/APPINSPECT/index.jsp'
        },{
          images_list:"../../static/images/zhongxin.png",
          message:'中信银行',
          link_s:'https://creditcard.ecitic.com/citiccard/ebankUserinfo/index.html#/'
        },{
          images_list:"../../static/images/pufa.png",
          message:'浦发银行',
          link_s:'https://wap.spdbccc.com.cn/ccws-wap/search/index'
        },{
          images_list:"../../static/images/zhongguo.png",
          message:'中国银行',
          link_s:'/'
        },{
          images_list:"../../static/images/gongshang.png",
          message:'工商银行',
          link_s:'https://mybank.icbc.com.cn/icbc/newperbank/perbank3/frame/frame_index.jsp'
        }
        ],
      }
    }
  }
</script>
<style scoped lang="scss">
  a { text-decoration: none; }
  .schedule-main{
    .listBank{
      height: auto;
      overflow: hidden;
      box-sizing: border-box;
      padding-left: .2rem;
      background-color: #eee;
      padding-bottom: .5rem;
    }
    .listBank li{
      box-sizing: border-box;
      list-style: none;
      width: 30%;
      height: 7.6rem;
      padding: .5rem;
      float: left;
      margin-left: 2%;
      margin-top: 3%;
      overflow: hidden;
      background-color: #fff;
      border-radius: 5px;
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
  }

</style>
