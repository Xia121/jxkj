<template>
  <div class="admin">
      <div class="character">


      </div>

      <div class="choice">
          <router-link  :to="{name:'test',params:{id: id}}">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </router-link>
          <a href="https://vuejs.org">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </a>
          <router-link to="">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </router-link>
          <router-link to="">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </router-link>
          <router-link to="">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </router-link>
          <router-link to="">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </router-link>
          <router-link to="">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </router-link>
          <router-link to="">
              <i class="iconfont icon-shouye1"></i>
              <p>首页</p>
          </router-link>
      </div>

      <router-view class="admin-content" :style="{height:clientHeight+'px'}">
      </router-view>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'admin',
      id: 123,
      clientHeight: document.body.clientHeight,
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin {
  width: 100%;
  height: 100%;
}

.admin .character {
  margin-top: 15px;
  border-radius: 10px;
  background:-webkit-linear-gradient(right, rgba(46,169,204,1), rgba(36,203,180,1));
  background:-o-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
  background:-moz-linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1));
  background:linear-gradient(left, rgba(46,169,204,1), rgba(36,203,180,1)); 
  width: 100%;
  height: 150px;
}

.choice {
  display: flex;
  flex-direction: row;
  flex-wrap : wrap;
  padding: 15px 0;
}

.choice a {
  flex: 0 0 25%;
  margin-top: 10px;
}
.admin-content {
  position: absolute;
  top: 0;
}
</style>
