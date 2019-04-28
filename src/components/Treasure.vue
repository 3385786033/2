<template>
  <div class="Treasure">
    <div id="heads">
      <mt-header title="个人财富">
        <router-link :to="{name:'Home',query:{vals:'个人中心'}}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="Treasure-message">
      <div class="message-p">
        <p>个人财富总数: <span>55</span></p>
      </div>
      <mt-button type="danger" size="small" class="btn-p" @click="conversion">兑换禄</mt-button>
    </div>
    <div class="treasure-title">
      <div class="line-left"></div>
      <div class="line-span">个人财富明细</div>
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
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
      conversion(){
        this.$router.push({name:'conversion'})
      }
    }
  }
</script>
<style scoped lang="scss">
.Treasure-message{
  overflow: hidden;
  padding-top: 1rem;
  .message-p{
    margin-left: .6rem;
    float: left;
    span{
      color: #ff4200;
      font-size: 14px;
    }
  }
  .btn-p{
    float: right;
    letter-spacing: .1rem;
    margin-top: .6rem;
    margin-right: .5rem;
    margin-left: .6rem;
  }
}
  .treasure-title{
    overflow: hidden;
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
