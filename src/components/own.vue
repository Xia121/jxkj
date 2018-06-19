<template>
  <div class="own" :style="{height:wrapperHeight+'px'}">

	  <div class="wrapper" ref="wrapper" :style="{height:wrapperHeight+'px'}">
	  		
	  	<div class="content" ref="content">
	  		<div class="loading_top">
                <span>{{ladingTop}}</span>
                <i class="iconfont icon-icon"></i>
          	</div>
			<div class="header">
				<i class="iconfont icon-shouye26"></i>
				<img v-bind:src="own.portrait" alt="">
				<p class="name">{{own.name}}</p>
				<p>{{own.sex}} {{own.age}}</p>
				<p class="card">
					<span>就诊卡：{{own.edicalCard}}</span>
					<i class="iconfont icon-shouye8"></i>
				</p>
				<p class="money"> 
					<span>优惠券：{{own.coupon}}张</span>
					<span>余额：{{own.balance}}元</span>
				</p>
			</div>

			<div class="set" v-for="(item, index) in setMany">

				<router-link class="weui-cell weui-cell_access"  :to="{name:setMany[index].href}">
					<div class="weui-cell__hd">
						<img v-bind:src="setMany[index].icon" alt="" style="">
					</div>
					<div class="weui-cell__bd">
						<p>{{setMany[index].title}}</p>
					</div>
					<div class="weui-cell__ft">
						{{setMany[index].footer}}
					</div>

				</router-link>

			</div>
		</div>
	  </div>
	  <router-view class="weui-tab__panel index" style="padding: 0;"></router-view>
	  <foote class="foote"></foote>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
import portrait from './../assets/portrait.jpg'
import foote from './foote.vue'

export default {
  name: 'own',
  inject: ['reload'],
  components: {
    foote
  },
  data () {
    return {
    	wrapperHeight:  document.body.clientHeight-70,
    	contentHeight: 	document.body.clientHeight-70,
    	topShow: false,
    	ladingTop: '下拉刷新',
     	own:
     	{	
     		'name':'码小萌',
     		'portrait': portrait,
     		'edicalCard':8672632156482321,
     		'coupon':0,
     		'balance': 76.25,
     		'sex': '女',
     		'age': '22'
     	},
     	setMany: [
	     	{
	          "icon":  portrait,
              "title": "电子健康卡",
              "footer": "",
              "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "电子社保卡",
               "footer": "",
               "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "电子健康卡",
               "footer": "",
               "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "居民健康档案",
               "footer": "",
               "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "就诊卡",
               "footer": "3张",
               "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "我的钱包",
               "footer": "",
               "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "卡券管理",
               "footer": "",
               "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "帮助与反馈",
               "footer": "",
               "href":"ownFirst"
	        },
	        {
	           "icon":  portrait,
               "title": "设置",
               "footer": "",
               "href":"ownFirst"
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
        }),

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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.own {
	.index {
		position: absolute;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
	}
	.icon-shouye26 {
		font-size: 22px;
		position: absolute;
		top: 25%;
		right: 15%;
	}
	.name {
		font-size:16px; 
		font-weight: 700;
	}
	.loading_top {
		position: absolute;
		top: -35px;
		left: 50%;
		width: 150px;
		margin-left: -75px;
		text-align: center;
	}
	width: 100%;
	height: 100%;
	background: #fff;
	box-sizing: border-box;
	.header {
		text-align: center;
		position: relative;
		width: 100%;
		padding-top: 15px;
		color: #fff;
		line-height: 20px;
	    background:-webkit-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
	    background:-o-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
	    background:linear-gradient(to right, rgba(46,169,204,1), rgba(36,203,180,1));  
	  		height: auto;
	  		padding-bottom: 15px;
	  		img {
	  			width: 40px;
	  			height: 40px;
	  			display: block;
	  			border-radius: 50%;
	  			margin: 0 auto;
	  		}
	  		p {
	  			margin-top: 10px;
	  		}
	  		.name {
	  			font-weight: 700 !important;
	  		}
	  		.money span{
	  			margin-right: 10px;
	  		}
	  		.card {
	  			position: relative;
	  			i{
				position: absolute;
				right: 20%;
	
	  			}
	  		}
	
	}
	.set {
		.weui-cell {
			height: 30px;
			line-height: 30px;
			border-bottom: 1px solid #f1f1f1;
			.weui-cell__hd {
				img {
					margin-right:5px;
					display:block;
					width: 30px;
					height: 30px;
					line-height: 30px;
				}
			}
		}
	}
}

</style>
