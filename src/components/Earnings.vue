<template>
  <div class="earnings">
    <div id="heads">
      <mt-header title="我的收益">
        <router-link :to="{name:'Home',query:{vals:'个人中心'}}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="earnings-head">
      <div class="earnings-head-left">
        <p>已收入金额</p>
        <p>200.00</p>
      </div>
      <div class="line"></div>
      <div class="earnings-head-right">
        <p>可提现金额</p>
        <p>2000.00</p>
      </div>
    </div>
    <div class="earnings-btn">
      <mt-button type="danger" @click="withdraw" size="normal" class="btn_val">申请提现</mt-button>
    </div>
    <div class="treasure-title">
      <div class="line-left"></div>
      <div class="line-span">收益明细</div>
      <div class="line-right"></div>
    </div>
    <div class="Record-list">
      <!--ul里面几个scoller就是无限滚动的几个api-->
      <ul class="mui-table-view" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
        <!--li数据遍历循环部分-->
        <li class="mui-table-view-cell" v-for="item in list">
          <a class="mui-navigate-right">
            <span class="mui-pull-left">{{item.time}}</span>
            <p class="mui-pull-right">{{item.messages}}</p>
          </a>
        </li>
        <!--底部判断是加载图标还是提示“全部加载”-->
        <li class="more_loading" v-show="!queryLoading">
          <mt-spinner type="snake" color="#00ccff" :size="20" v-show="moreLoading&&!allLoaded"></mt-spinner>
          <span v-show="allLoaded">已全部加载</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return{
        //初始化无限加载相关参数
        queryLoading: false,
        moreLoading: false,
        allLoaded: false,
        totalNum: 0,
        pageSize: 20,
        pageNum: 1,
        list:[{
          time:'2018-02-12',
          messages:'申请中信银行信阿斯顿发斯蒂芬舒服撒发顺丰撒地方用卡'
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
    methods:{
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
      },
      withdraw(){
        this.$router.push({name:'withdraw'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .earnings-head{
    height: 8rem;
    overflow: hidden;
    background-image: url("../../static/images/shouyis.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .earnings-head-left{
      float: left;
      width: 45%;
      color: #fff;
      text-align: center;
      p:nth-of-type(1){
        margin-top: 2rem;
      }
    }
    .line{
      float: left;
      height: 80%;
      width: 1px;
      margin: 4%;
      background-color: #fff;
    }
    .earnings-head-right{
      float: left;
      width: 45%;
      color: #fff;
      text-align: center;
      p:nth-of-type(1){
        margin-top: 2rem;
      }
    }
  }
  .earnings-btn{
    text-align: center;
    margin-top: 2rem;
    .btn_val{
      letter-spacing: .2rem;
      font-size: 14px;
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
  .Record-list{
    overflow: hidden;
    .mui-table-view{
      .mui-table-view-cell{
        overflow: hidden;
      }
      .mui-navigate-right{
        overflow: hidden;
        display: block;
      }
      padding: 0;
      overflow: hidden;
      .mui-pull-left{
        margin-right: 1rem;
        float: left;
        margin-left: 1rem;
      }
      .mui-pull-right{
        width: 50%;
        float: left;
        margin: 0;
        overflow: hidden;
      }
    }
    ul{
      li{
        list-style: none;
        margin: .5rem 0;
        color: #666;
      }
    }
  }
</style>
