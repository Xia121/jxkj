<template>
  <div class="archives">
      <div class="myheader">
        <span class="back" @click="back()">返回</span>
        <span class="head">{{myheader}}</span>
      </div>
  </div>
</template>

<script>

import portrait from './../assets/portrait.jpg'


export default {
  name: 'archives',
  // props:["number"],
  data () {
    return {
      myheader: '健康档案'
    }
  },
  methods: {
    // change () {
    //   let newNumber = !this.number;
    //   this.$emit('update:number',newNumber);
    // }
    back () {
      window.history.go(-1);
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.archives {
  background: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .myheader {
      height: 35px;
      width: 100%;
      text-align: center;
      color: #fff;
      line-height: 35px;
      font-size: 18px;
      background:-webkit-linear-gradient(right, rgba(46,169,204,1), rgba(36,203,180,1));
      background:-o-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
      background:-moz-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
      background:linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));  
      position: relative;
      .back {
        position: absolute;
        left: 5%;
      }
      .head {
        margin: 0 auto;
        display: inline-block;
        position: absolute;
        left: 50%;
        margin-left: -36px;
      }
  }
}


</style>
