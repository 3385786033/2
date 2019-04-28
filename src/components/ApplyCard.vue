<template>
  <div class="ApplyCard">
    <mt-header title="信用卡办理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="bank_house">
      <div class="logo">
        <div class="logo_message">
          <img :src="imglist" alt="">
          <p>{{ create_val }}</p>
        </div>
        <div class="line"></div>
        <div class="Card_Centre">
          <router-link to="/">信用卡中心</router-link>
        </div>
      </div>
      <!--输入信息-->
      <div class="card_info">
        <div class="card_info_list">
          <mt-field placeholder="请输入用户名" v-model="username"></mt-field>
        </div>
        <div class="card_info_list">
        <mt-field placeholder="请输入身份证号码" type="number" v-model="IdCard"></mt-field>
        </div>
        <div class="card_info_list">
        <mt-field placeholder="请输入手机号码" type="tel" v-model="mobile"></mt-field>
        </div>
        <div class="card_info_list">
        <mt-field placeholder="请输入您期望申请获得的额度" type="number" v-model="limit"></mt-field>
        </div>
        <div style="margin: 0;color: red;font-size: 12px;text-align: center"v-if="false">*不能为空</div>
        <div class="card_info_list">
          <mt-button type="danger" style="width: 50%" @click="sendData">下一步</mt-button>
        </div>

      </div>
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
  export default {
    data(){
      return {
        create_val:'',
        imglist:'',
        username:'',
        mobile:'',
        IdCard:'',
        limit:'',
        //
        selected:'',
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
        personage2:'../../static/images/geren2.png'
      }
    },
    created(){
      this.create_val = this.$route.query.data
      this.imglist = this.$route.query.img_li
      this.cards = this.card1
      this.flukes = this.flukes1
      this.personages = this.personage1
      console.log(this.$route.query.img_li)
    },
    methods:{
      sendData(){
        let sendDatas = {
          username:this.username,
          mobile:this.mobile,
          IdCard:this.IdCard,
          limit:this.limit
        }
        switch (this.create_val){
          case '兴业银行':
            window,location.href='https://ccshop.cib.com.cn:8010/application/cardapp/newfast/ApplyCard/toSelectCard?id=094ff915adc3408bbbc5c9a3b535a7e1'
                break;
          case '民生银行':
            window.location.href='https://creditcard.cmbc.com.cn/wsv2/?etr=dgygSRR8+eiHPfCsQlfsRR5Mp8XkjZx53tZo4xoiGv5/v/5tr6d6KTtkP7Lan5ODOiP+catCCwer6822NSg08HE0MMSUdVxQazPB84QN67QLQKiMid/oKlh4nrlx8fS5ZvdJH4idkhLopR+yoxkUJUojeyFaC4AiE3eyD58xsh9rwa6McaGXh5MNeOKBIO9cWhg53heG/Ch4KEBxDmeXc/FLGttH6IRCuLBjZTTgIAwKBESGBpkdGD2AZnNSIfgNhd0Fy4fHZz2GDjtNMbWdGL04fF4cXKpzptAqvoqPOEKZMaEKg5YUMdI5j4tcvef85h5Vfs+qFtrKTLB1hXAkmARF5e0Ny/aFQn847d3kBhO6JkEC6Bxj4AiBDMoRPj9Ot5Mf1tU+Es3U4DD85fW8KiZyfq0XafmdbYRTihj1FMniElMTgKEb6VxAkDpaMzYA6Ky6dZpq7CCjtXSYam2MsNiPaSyqq2PHlVAKodXDb35o56vS6ETXoDO6KA/pEwDC'
            break;
          case '交通银行':
            window.location.href='https://creditcardapp.bankcomm.com/applynew/front/apply/new/reversion/cardlist.html'
            break;
          case '平安银行':
            window.location.href='https://c.pingan.com/apply/mobile/apply/index.html?id=17143549392'
            break;
          case '浙商银行':
            window.location.href='https://e.czbank.com/weixinHTML/creditCardApply/creditCardFullApplyETF.html?wxCreditCardActivtyNo=CZ03&apOrigin=95527&wxRecommenderId=18080457876&wxCustFakeId=8f4ba711-c6af-46e7-8e65-23bf6c511592-Mypfbq'
            break;
          case '中信银行':
            window.location.href='https://creditcard.ecitic.com/m/tjbk/card_list.html?uid=TJ94331049&sid=SJTJBK'
            break;
          case '浦发银行':
            window.location.href='https://ecentre.spdbccc.com.cn/creditcard/indexActivity.htm?data=F1706011505419172367'
            break;
          case '中国银行':
            window.location.href='https://apply.mcard.boc.cn/apply/mobile/mainAppi/gotoIdentityVerifyPage'
            break;
          case '工商银行':
            window.location.href='https://mims.icbc.com.cn/IMServiceServer/servlet/ICBCBaseReqNSServlet?dse_operationName=ApplyCreditCardOp&firstFlag=8&creditCardNoSel=460000335&paraPromoCode=TJ0001xe025dn3qch1eq&areacode=04402'
            break;
          default:

        }
        console.log(sendDatas)
      }
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        if(val === '信用卡申请'){
          this.cards = this.card2
          this.$router.push({name:'Home',query:{vals:val}})
        }else {
          this.cards = this.card1
        }
        if(val === '自由禄市'){
          this.flukes = this.flukes2
          this.$router.push({name:'Home',query:{vals:val}})
        }else {
          this.flukes = this.flukes1
        }
        if(val === '个人中心'){
          this.personages = this.personage2
          this.$router.push({name:'Home',query:{vals:val}})
        }else {
          this.personages = this.personage1
        }
      }
    },
  }
</script>
<style scoped>
  a{
    text-decoration: none;
  }
.ApplyCard{
  background-color: #F3F1F2;
  height: 100%;
  overflow: hidden;
  padding-bottom: 3rem;
}
.bank_house{
  /*border: 1px solid;*/
  height: auto;
  overflow: hidden;
}
.logo{
  overflow: hidden;
  width: 50%;
  margin: 3rem auto;
}
.logo .logo_message{
  float: left;
}
.logo .logo_message p{
  font-size: 14px;
  color: black;
  margin: 0;
  text-align: center;
}
.logo .logo_message img{
  width: 8.5vh;
  height: 50px;
  display: block;
}
.logo .line{
  width: 1px;
  height: 40px;
  float: left;
  margin-left: 10px;
  margin-top: 20px;
  background-color: #8e4b3f;
}
.logo .Card_Centre{
  float: left;
  padding-top: 30px;
  padding-left: 10px;
}
.logo .Card_Centre a{
  color: #8e4b3f;
}
  /*输入验证*/
.card_info{
  overflow: hidden;
}
.card_info .card_info_list{
  margin-top: 1rem;
  text-align: center;
}
  .card_info .card_info_list a{
    width: 80%;
    margin: 0 auto;
    border: 1px solid #d9d9d9;
    border-radius: .5rem;
  }
</style>
