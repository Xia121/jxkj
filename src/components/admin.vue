<template>
  <div class="admin">
      <div class="character">
          <div class="portrait">
              <img v-bind:src="productList.portrait" alt="">
          </div>

          <div class="manager">
              <div class="name">
                  <span>姓名:{{productList.name}}</span>
                  <span>性别:{{productList.sex}}</span>
                  <span>年龄:{{productList.age}}岁</span>
              </div>

              <div class="card">
                  <span>就诊卡：86726663336</span>
                  <i class="iconfont icon-shouye21"></i>
              </div>
              <div class="card">
                  <span>健康卡：65222*********1</span>
                  <i class="iconfont icon-shouye25"></i>
              </div>
              <div class="card">
                  <span>社保卡：65222*********1</span>
                  <i class="iconfont icon-shouye15"></i>
              </div>
          </div>

      </div>

      <div class="choice weui-flex">
          <router-link  :to="{name:'test',params:{id: id}}" class="weui-flex__item">
              <i class="iconfont icon-shouye20"></i>
              <p>健康档案</p>
          </router-link>
          <a href="https://vuejs.org" class="weui-flex__item">
              <i class="iconfont icon-shouye17"></i>
              <p>签约医生</p>
          </a>
          <router-link to="" class="weui-flex__item"> 
              <i class="iconfont icon-shouye29"></i>
              <p>就诊记录</p>
          </router-link>
          <router-link to="" class="weui-flex__item">
              <i class="iconfont icon-shouye36"></i>
              <p>预约挂号</p>
          </router-link>
      </div>

      <div class="choice weui-flex">
          <router-link  :to="{name:'test',params:{id: id}}" class="weui-flex__item">
              <i class="iconfont icon-shouye28"></i>
              <p>用药提醒</p>
          </router-link>
          <a href="https://vuejs.org" class="weui-flex__item">
              <i class="iconfont icon-shouye33"></i>
              <p>义诊活动</p>
          </a>
          <router-link to="" class="weui-flex__item"> 
              <i class="iconfont icon-icon7"></i>
              <p>急救百科</p>
          </router-link>
          <router-link to="" class="weui-flex__item">
              <i class="iconfont icon-icon18"></i>
              <p>健康讲座</p>
          </router-link>
      </div>

      <router-view class="admin-content" :style="{height:clientHeight+'px'}">
      </router-view>

      <div class="news">
          <div class="newsList" v-for="item in items[0]">
              <div class="newImg">
                  <img v-bind:src="item.thumbnail" alt="">
              </div>
              <div class="newText page__bd">
                  <h2>{{item.newsHeadlines}}</h2>
                  <p>{{item.bewrite}}</p>
              </div>
          </div>
          <div @click="getNews(setData)" class="">
              <p>加载更多</p>
          </div>
      </div>
  </div>
</template>

<script>

import portrait from './../assets/portrait.jpg'


export default {
  name: 'admin',
  data () {
    return {
      msg: 'admin',
      id: 123,
      pageNum: 1,
      pageSize: 10,
      clientHeight: document.body.clientHeight,
      productList: 
        {
          'name':'马晓萌',
          'age': 21,
          'sex':'女',
          'portrait': portrait,
        },
      items: []
      }
  },

  mounted () {
    this.getNews(this.setData)
  },

  methods: {
      _limit (str) {
          let data;

          if (str.length > 10) 
          {
            data = str.substring(0,10)+"...";
          }

          return data;
      },
      getNews (callBack) {
        this.$http({
          url:'http://118.190.202.44:8080/rps/managecontent/selectNewsList',
          method: 'POST',
          params: {
            'pageNum' : this.pageNum,
            'pageSize' : this.pageSize
          },
          
        }).then(res=>{
          //console.log(res.body.data);
          callBack(res.body.data);
          this.pageNum++;
        })
      },
      setData(data) { //对数据做一些处理

        this.items.push(data)
        
        for (var i = this.items[0].length - 1; i >= 0; i--) {
            //console.log(data[i].newsContent)
            this.items[0][i].newsHeadlines = this._limit(data[i].newsHeadlines)
            //console.log(this.items[i].newsHeadlines)
        }
      },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.admin {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
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
  padding: 15px 0;
  text-align: center;
  margin: 0 auto;
}

.choice a {
  flex: 0 0 25%;
  margin-top: 10px;
}
.admin-content {
  position: absolute;
  top: 0;
}

.character {
    display: flex;
    flex-direction : row;
    .portrait {
        flex: 0 0 69px;
        margin: 20px 20px 20px 20px;
        overflow: hidden;
        img {
            border-radius: 50%;
            width: 69px;
            height: 69px;
        }
    }
    .manager {
      color: #fff;
      margin-top: 20px;
      div {
        margin-bottom: 5px;
        width: 100%;
        height: 20px;
        line-height: 20px;
      }
      .name span{
        margin-right: 5px;
      }
      .card{
          position: relative;
          i {
              position: absolute;
              right: 0;
              top: 0
          }
      }
    }
}

.weui-flex__item .iconfont{
  font-size: 20px !important;
}

.news {
    width: auto;
    padding: 0 10px;
    .newsList {
       width: 100%;
       display: flex;
       flex-direction : row;
       height: 100px;
       margin-bottom: 15px;
       .newImg {
          flex: 0 0 150px;
          text-align: center;
          margin-left: 5px;
          img {
            height: 100px;
            
          }
      }
    }
}
</style>
