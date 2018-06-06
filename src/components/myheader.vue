<template>
  <div class="myheader">
		{{myheader}}
  </div>
</template>

<script>

import portrait from './../assets/portrait.jpg'


export default {
  name: 'myheader',
  props: ['myheader'] 
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
}
</style>
