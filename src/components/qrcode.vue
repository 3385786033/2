<template>
  <div >
    <canvas id="canvas"></canvas>
    <div id='code'>微信扫一扫</div>
  </div>

</template>
<script>
  import QRCode from 'qrcode'
  export default {
    data(){
      return{
        codes:''
      }
    },
    methods:{
      useqrcode(){
        var canvas = document.getElementById('canvas')
        QRCode.toCanvas(canvas, 'http://www.tianmao.com', function (error) {
          if (error) console.error(error)
          console.log('success!');
        })
      }
    },
    mounted(){
      this.useqrcode();
    }
  }
</script>
<style scoped>
  #canvas{width:10rem!important;height:10rem!important;}
  #code{
    text-align: center;
  }
</style>
