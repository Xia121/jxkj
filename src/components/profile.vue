<template>
  <div class="profile">
      <div class="header">
        <p>{{headerText}}</p>
      </div>
      <div class="wrapper" ref="wrapper" :style="{height:wrapperHeight+'px'}">
          <div class="content" ref="content">
            <div class="loading_top">
                <span>{{ladingTop}}</span>
                <i class="iconfont icon-icon"></i>
            </div>
            <div class="weui-flex proNav">
                <a class="proNavFlax" :href="profile[index].href" target="myFrame" v-for="(item, index) in profile" @click="_header($event)" ref="proNavFlax">
                    <div class="placeholder">{{profile[index].title}}</div>
                </a>
            </div>

            <iframe src="http://192.168.3.2:8080/zi.html" name="myFrame" frameborder="0" ref="myFrame" class="myFrame"></iframe>
            
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
  name: 'profile',
  inject: ['reload'],
  components: {
    foote
  },
  data () {
    return {
      wrapperHeight:  document.body.clientHeight-70,
      headerText: "全部机构",
      ladingTop: '下拉刷新',
      profile: [
        {
          "href":"http://192.168.3.2:8080/zi.html",
          "title":"全部机构"
        },
        {
          "href":"https://weui.io/",
          "title":"基本公卫"
        },
        {
          "href":"https://weui.io/",
          "title":"防疫站/门诊"
        },
        {
          "href":"https://weui.io/",
          "title":"狂犬病暴露处置门诊"
        },
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._contentHeight();
      this._initScroll();
    })
  },
  methods: {
     _contentHeight () {
      let cHeight = this.$refs.content.clientHeight
      let wHeight = this.$refs.wrapper.clientHeight
      if (cHeight < wHeight) {
          this.$refs.content.style.height = wHeight+1+"px"
      }
    },

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
    _header (event) {
      let text =  event.target.innerHTML
      this.headerText = text;
    }
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

.profile {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // padding: 10px;
  .loading_top {
    position: absolute;
    top: -35px;
    left: 50%;
    width: 150px;
    margin-left: -75px;
    text-align: center;
  }
  .myFrame {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
   }
  .proNav {
    padding-top: 35px;
    text-align: center;
    color: #999;
    display: flex;
    flex-direction : row;
    .proNavFlax {
      flex: auto;
      height: 30px;
      line-height: 30px;
      border-right: 1px solid #f1f1f1;
    }

    .proNavFlax:last-child {
      border: 0;
    }


  }
}
</style>
