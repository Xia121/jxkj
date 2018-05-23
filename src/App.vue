<template>
  <div id="app" :style="{height:clientHeight+'px'}">
    <div class="header">
        <p>医路通 </p>
    </div>
    <div class="content" :style="{height:contentHeight+'px'}">
        <router-view/>
    </div>
    
    <div class="footer">

        <router-link to="/admin" :click="submitForm()">
            <i class="iconfont icon-shouye1"></i>
            <p>首页</p>
        </router-link>

        <router-link to="/profile">
            <i class="iconfont icon-shouye"></i>
            <p>找医院</p>
        </router-link>

        <router-link to="/asd">
            <i class="iconfont icon-shouye13"></i>
            <p>找医生</p>
        </router-link>

        <router-link to="/dd">
            <i class="iconfont icon-shouye14"></i>
            <p>消息</p>
        </router-link>

        <router-link to="/ccc">
            <i class="iconfont icon-shouye4"></i>
            <p>我</p>
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
  methods: {
    submitForm: function (){
      console.log(123)
      var data = 'userid=123'
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function (stae){
        console.log(stae)
      }
      xhr.open('POST','http://118.190.202.44:8080/rps/manageuser/selectUserByUserId',true)
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
      xhr.send(data)
    },

    fuck: function () {
      alert(123)
    }
  }

}
</script>

<style>

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
  color: #1E9FFF;
  
}
</style>
