import Vue from 'vue'
import Router from 'vue-router'

import Header from './components/header'
import Home from './shelter/index/index'

Vue.use(Router)

//创建新的路由
export default new Router({
    mode:'history',
    routes: [
      { 
          path: '/', 
          name: 'header', 
          component: Header,
      },
      {
        path:'/home',
        name:'home',
        component:Home
      }
    ]
  })