<template>
    <div class="weui-tabbar foote">

        <router-link to="/" class="weui-tabbar__item" exact>
            <i class="iconfont icon-shouye1"></i>
            <p class="weui-tabbar__label">首页</p>
        </router-link>

        <router-link to="/profile" class="weui-tabbar__item">
            <i class="iconfont icon-shouye"></i>
            <p class="weui-tabbar__label">找医院</p>
        </router-link>
        
        <router-link to="/doctor"  class="weui-tabbar__item">
            <i class="iconfont icon-shouye13" ></i>
            <p class="weui-tabbar__label">找医生</p>
        </router-link>
        
        <router-link to="/news"  class="weui-tabbar__item">
            <i class="iconfont icon-shouye14"></i>
            <p class="weui-tabbar__label">消息</p>
        </router-link>
        
        <router-link to="/own"  class="weui-tabbar__item">
            <i class="iconfont icon-shouye4"></i>
            <p class="weui-tabbar__label">我</p>
        </router-link>
    </div>

</template>

<script typr="text/ecmascript-6">

export default {
  name: 'foote',
  provide () {
    return {
      
    }
  },
  data: function(){  
      return {  
/*          clientHeight: document.body.clientHeight,
          contentHeight: document.body.clientHeight-35,
          isRouterAlive: true*/
      }  
  },  
  mounted () {
  
  },
  methods: {
    /*reload () {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))    
    }*/
  },


}
</script>

<style scoped lang="less">

.footer{
  position: absolute;
  bottom: 0;
  height: 35px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.footer a{
  flex: 1;
}

.footer a i {
  display: block;
}

.router-link-active {
  color: #1E9FFF!important;
  
}

.weui-tabbar {
  z-index: 1;
}
</style>
