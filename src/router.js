import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//创建新的路由
export default new Router({
    mode:'history',
    routes: [
    //   { 
    //       path: '/', 
    //       name: 'header', 
    //       component: () => import('./components/header'),
    //   },
      {
          path:'/',
          name:'home',
          component: () => import('./shelter/index/index')
      },
      {
          path:'/login',
          name:'home',
          component: () => import('./login/login')
      }
    ]
  })