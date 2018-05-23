import Vue from 'vue'
import Router from 'vue-router'
import admin from '../components/admin'//首页
import Test from '../components/test'//需要跳转的页面 给组件重新命名
import profile from '../components/profile'//需要跳转的页面 给组件重新命名
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'admin',
      component: admin
    },
    {
        path:'/admin',
        name:'admin',
        component: admin,
        children: [
        {
          path:'test',
          name:'test',
          component:Test
        } 
      ],
    },
    {
        path:'/profile',
        name:'profile',
        component: profile
    }

  ]
})

