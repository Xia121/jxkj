<template>
  <div class="doctor">
      <div class="header">
        <p>找医生</p>
      </div>
      <div class="wrapper" ref="wrapper" :style="{height:wrapperHeight+'px'}">
          <div class="content" ref="content">

              <iframe src="https://weui.io/" frameborder="0" style="width: 100%;height: 300px; padding-top: 35px;"></iframe>

              <div class="occupation weui-flex">
                  <div class="left weui-flex__item">
                      <div v-for="item in findTopPosition" @click="findTwo($event)" ref="findTop" :id=item.id class="Oitem">
                          {{item.positionName}}
                      </div>
                  </div>
                  <div class="right weui-flex__item">
                      <div v-for="item in findPosition" class="Oitem">
                          {{item.positionName}}
                      </div>
                  </div>
              </div>
          </div>

      </div>
      <foote class="foote"></foote>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
import portrait from './../assets/portrait.jpg'
import foote from './foote.vue'

export default {
  name: 'doctor',
  inject: ['reload'],
  components: {
    foote
  },
  data () {
    return {
      wrapperHeight:  document.body.clientHeight-70,
      ladingTop: '下拉刷新',
      id: 1,
      findTopPosition:[],
      findPosition:[]

    }
  },
  mounted() {
    this.findTop();
    this._findSCocd();
    this.$nextTick(() => {
      this._initScroll();
    })
  },
  methods: {

    _initScroll () {
      this.scroll = new BScroll(this.$refs['wrapper'], {
            probeType: 3,  
            click: true, 
            scrollY: true,  
            pullUpLoad: {  
                threshold: -50 // 当上拉距离超过30px时触发 pullingUp 事件  
            },
            mouseWheel: {    // pc端同样能滑动
              speed: 20,
              invert: false
            },
            useTransition:false,
        })

        this.scroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
          if (this.scrollY > 100) {
            this.ladingTop = '松开刷新'
          }
          else 
          {
            this.ladingTop = '下拉刷新'
          }
        })

        this.scroll.on('touchEnd', (pos) => {
          // 下拉动作
          this.topShow = false;
          if (pos.y > 100) {
             this.reload()
          }

        })
    },

    _findSCocd () {
        this.$http({
          url:'http://192.168.3.146/rps/positionCategory/findPosition',
          method: 'POST',
          params: {
            'id' : this.id,
          },
          
        }).then(res=>{
           this.findPosition  = res.body.data;
        })
    },

    findTop () {
        this.$http({
          url:'http://192.168.3.146/rps/positionCategory/findTopPosition',
          method: 'POST',
        }).then(res=>{
          this.findTopPosition = res.body.data
        })
    },

    findTwo (event) {
        this.id = event.target.getAttribute("id")

        this._findSCocd();
    },



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  position: fixed;
  height: 35px;
  width: 100%;
  text-align: center;
  background:-webkit-linear-gradient(right, rgba(46,169,204,1), rgba(36,203,180,1));
  background:-o-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
  background:-moz-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
  background:linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));    
  z-index: 99;
  p {
      margin: 0 auto;
      line-height: 35px;
      color: #fff;
      font-size: 18px;
  }
}

.doctor {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .myFrame {
    height: 200px !important;
    width: 100%;
    margin-top: 35px;
  }
  .occupation {
    width: 100%;
    height: auto;
    text-align: center;
    line-height: 30px;
    .Oitem{
      border: 1px solid #f1f1f1;
    }
  }
}
</style>
