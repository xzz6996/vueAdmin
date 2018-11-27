import Vue from 'vue'
import Router from 'vue-router' 
Vue.use(Router)


const constRouters=[
  {
    path: '/',
    redirect:'/layout'
   },
   {
    path: '/layout',  
    name: 'layout',
    component: () => import(/* webpackChunkName: "group-foo" */ '@/components/layout')
   },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "group-foo" */ '@/components/login')
  },
  {
    path:'/*',
    component:() => import(/* webpackChunkName: "group-foo" */ '@/components/error')
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRouters
})
