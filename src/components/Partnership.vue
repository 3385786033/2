<template>
  <div class="Record">
    <div id="heads">
      <mt-header title="申请成为合伙人">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="Record-list">
      <img src="../../static/images/dendai.png" alt="等待审核">
      <p class="message">谢谢您的支持，请等待审核！</p>
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
        //初始化无限加载相关参数
        queryLoading: false,
        moreLoading: false,
        allLoaded: false,
        totalNum: 0,
        pageSize: 20,
        pageNum: 1,
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
    .Record-list{
      overflow: hidden;
      text-align: center;
      padding-top: 5rem;
     .message{
       margin-top: 3rem;
     }
    }
  }
</style>
