import Vue from 'vue'
import Router from 'vue-router'
import admin from '../components/admin'//首页
import test from '../components/test'
import profile from '../components/profile'
import archives from '../components/archives'
import own from '../components/own'
import news from '../components/news'
import doctor from '../components/doctor'
import ownFirst from '../components/ownFirst'


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
    },
    {
        path:'/own',
        name:'own',
        component: own,
        children: [
          {
            path:'ownFirst',
            name:'ownFirst',
            component: ownFirst,
          },
        ]
    },
    {
        path:'/news',
        name:'news',
        component: news
    },
    {
        path:'/doctor',
        name:'doctor',
        component: doctor
    }

  ]
})

