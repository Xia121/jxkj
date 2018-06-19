<template>
  <div class="myheader">
    <span class="back" @click="isShow">返回</span>
		<span class="head">{{myheader}}</span>
  </div>
</template>

<script>

import portrait from './../assets/portrait.jpg'


export default {
  name: 'myheader',
  props: ['myheader'],
  methods: {
      isShow (boole) {
          let boole = !boole
          return boole
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
</style>
