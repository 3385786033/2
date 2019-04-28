<template>
  <div class="Record">
    <div id="heads">
      <mt-header title="合伙人权益">
        <router-link :to="{name:'Home',query:{vals:'个人中心'}}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="service-main">
      <img src="../../static/images/huohuoren.png" alt="">
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
      return{
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
    created(){
      this.cards = this.card1
      this.flukes = this.flukes1
      this.personages = this.personage1
    },
    methods:{

    },
    computed: {

    }
  }
</script>
<style scoped lang="scss">
  .Record{
    .heads{

    }
    .service-main{
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding-bottom: 3rem;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
