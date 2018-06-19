<template>
  <div class="news">
      <div class="header">
        <p>消息</p>
      </div>
      <div class="wrapper" ref="wrapper" :style="{height:wrapperHeight+'px'}" >
          <div class="content" ref="content">
              <div class="loading_top" style="text-align: center;">
                  <span>{{ladingTop}}</span>
                  <i class="iconfont icon-icon"></i>
              </div>
              <div class="weui-panel__bd" v-for="(item, index) in news">
                  <div class="weui-media-box weui-media-box_appmsg">
                      <div class="weui-media-box__hd">
                          <img class="weui-media-box__thumb" :src="news[index].icon"alt="">
                      </div>
                      <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{news[index].title}}</h4>
                        <span>{{news[index].date}}</span>
                        <div class="weui-media-box__desc">
                          {{news[index].text}}
                        </div>
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
  name: 'news',
  inject: ['reload'],
  components: {
    foote
  },
  data () {
    return {
      wrapperHeight:  document.body.clientHeight-70,
      ladingTop: '下拉刷新',
      news: [
        {
          "icon":portrait,
          "title": "标题二",
          "date": "3月4日",
          "text":"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
        },
        {
          "icon":portrait,
          "title": "标题二",
          "date": "3月4日",
          "text":"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
        }
      ]
    }
  },
  mounted () {
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
    }
  },
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

.weui-panel__bd {
  padding-top: 15px;
  .weui-media-box__bd {
    position: relative;
    span {
      position: absolute;
      right: 0;
      top: 0;
      color: #999;
    }
  }
}
</style>
