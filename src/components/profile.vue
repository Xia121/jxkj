<template>
  <div class="profile" style="height: 600px">
       <scroller class="scroller" :on-refresh="refresh" :on-infinite="infinite">
          <div v-for="(item, index) in items" @click="onItemClick(index, item)"
             class="row">
            {{ item }}
          </div>

       </scroller>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      items: []
    }
  },
  mounted() {
    for (let i = 1; i <= 7; i++) {
      this.items.push(i)
    }
  },
  methods: {
    refresh(done) {
      /*this.items = [1, 2, 3, 4, 5, 6].map(() => parseInt(Math.random() * 10))
      done()*/
      console.log(123)
      done()
    },
    infinite(done) {
      //this.items = this.items.concat([3])
      
     

      setTimeout(() => {
          this.items = this.items.concat([3])
          console.log(222)
          done()
      }, 1500)
      
    },
    onItemClick(index, item) {
      console.log(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  height: 100vh;
  overflow-y: scroll;
}

.row {
  height: 100px;
  width: 100px;
  background: deepskyblue;
  margin: 10px;
}

.scroller {
  position: relative;
}
</style>
