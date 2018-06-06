<template>
  <div class="archives">
      <myheader :myheader="myheader"></myheader>
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
      6666666666666666666666666666666
  </div>
</template>

<script>

import portrait from './../assets/portrait.jpg'
import myheader from './myheader.vue'


export default {
  name: 'archives',
  data () {
    return {
      myheader: '健康档案'
    }
  },
  components: {
      myheader
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
