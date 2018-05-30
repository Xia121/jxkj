<template>
  <div id="app weui-tab" :style="{height:clientHeight+'px'}">
    <div class="header">
        <p>医路通 </p>
    </div>
    <div class="content weui-tab__panel" :style="{height:contentHeight+'px'}">
        <router-view/>
    </div>
    
    <div class="weui-tabbar">

        <router-link to="/" class="weui-tabbar__item" exact>
            <i class="iconfont icon-shouye1"></i>
            <p class="weui-tabbar__label">首页</p>
        </router-link>

        <router-link to="/profile" class="weui-tabbar__item">
            <i class="iconfont icon-shouye"></i>
            <p class="weui-tabbar__label">找医院</p>
        </router-link>
        
        <router-link to="/asd"  class="weui-tabbar__item">
            <i class="iconfont icon-shouye13" ></i>
            <p class="weui-tabbar__label">找医生</p>
        </router-link>
        
        <router-link to="/dd"  class="weui-tabbar__item">
            <i class="iconfont icon-shouye14"></i>
            <p class="weui-tabbar__label">消息</p>
        </router-link>
        
        <router-link to="/ccc"  class="weui-tabbar__item">
            <i class="iconfont icon-shouye4"></i>
            <p class="weui-tabbar__label">我</p>
        </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){  
      return {  
          clientHeight: document.body.clientHeight,
          contentHeight: document.body.clientHeight-70
      }  
  },  
  mounted () {
    //this.getDate(this.setData)
  },
  methods: {
    /*getDate (callBack) {
      this.$http({
        url:'http://118.190.202.44:8080/rps/managecontent/selectNewsList',
        method: 'POST',
        params: {
          'userid' : 'dc2061eed9584624a803eeb9f0316e1f'
        },
        
      }).then(res=>{
        //console.log(res);
         callBack(res.body.data);
      })
    },
    setData(data) { //对数据做一些处理
      this.bookId = data.education;
      console.log(this.bookId)
    },*/
  }

}
</script>

<style scoped lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height:100%; 
  position: relative;
}

.header {
  height: 35px;
  width: 100%;
  text-align: center;
  background:-webkit-linear-gradient(right, rgba(46,169,204,1), rgba(36,203,180,1));
  background:-o-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
  background:-moz-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
  background:linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));     
}

.header p {
  margin: 0 auto;
  line-height: 35px;
  color: #fff;
  font-size: 18px;
}

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
</style>
