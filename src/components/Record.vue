<template>
  <div class="Record">
    <div id="heads">
      <mt-header title="办卡记录">
        <router-link :to="{name:'Home',query:{vals:'个人中心'}}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="Record-list">
      <!--ul里面几个scoller就是无限滚动的几个api-->
      <ul class="mui-table-view" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
        <!--li数据遍历循环部分-->
        <li class="mui-table-view-cell" v-for="item in list">
          <a class="mui-navigate-right">
            <span class="mui-pull-left">{{item.time}}</span>
            <span class="mui-pull-right">{{item.messages}}</span>
          </a>
        </li>
      </ul>
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
        list:[{
          time:'2018-02-12',
          messages:'申请中信银行信用卡'
        },{
          time:'2018-02-12',
          messages:'申请中信银行信用卡'
        },{
          time:'2018-02-12',
          messages:'申请中信银行信用卡'
        },{
          time:'2018-02-12',
          messages:'申请中信银行信用卡'
        },{
          time:'2018-02-12',
          messages:'申请中信银行信用卡'
        }
        ]
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
      //无限加载函数
      loadMore() {
        if(this.allLoaded){
          this.moreLoading = true;
          return;
        }
        if(this.queryLoading){
          return;
        }
        this.moreLoading = !this.queryLoading;
        this.pageNum++;
        /*this.$http.post("请求后台数据的接口",Object.assign({pageNum:this.pageNum},this.params)).then((res) => {
          if(res.sData && res.sData.list){
            this.list = this.list.concat(res.sData.list);
            this.allLoaded = this.debtList.length==this.totalNum;
          }
          this.moreLoading = this.allLoaded;
        });*/
      }
    },
    computed: {
      params() {
        return{
          //这里先定义要传递给后台的数据
          //然后将每次请求20条的参数一起提交给后台
          pageSize: this.pageSize
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.Record{
  .heads{

  }
  .Record-list{
    overflow: hidden;
    ul{
      li{
        list-style: none;
        margin: .5rem 0;
        color: #666;
      }
    }
  }
}
</style>
