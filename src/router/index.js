import Vue from 'vue'
import Router from 'vue-router'
import admin from '../components/admin'//首页
import test from '../components/test'
import profile from '../components/profile'
import archives from '../components/archives'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {//首页
      path: '/',
      name:'admin',
        component: admin,
        children: [
        {
          path:'archives',
          name:'archives',
          component: archives
        }
      ]
    },
    {
        path:'/admin',
        name:'admin',
        component: admin,
        children: [
        {
          path:'archives',
          name:'archives',
          component: archives
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

