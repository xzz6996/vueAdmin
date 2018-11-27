import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
//import {getQueryString} from './config/base'
import {getStore} from './config/localStorage'
const username=getStore('username');

Vue.config.productionTip = false

const whiteList = ['/login']; // 不重定向白名单 
router.beforeEach((to, from, next) => {
  if(username!=='undefined'&&username!==null){
    if(to.name==='login'){
        next({path:'/'})
    }else{
      next()
      console.log(1)
    }
  }else{
    if(whiteList.indexOf(to.path)===-1){ // 在免登录白名单，直接进入
      next()
    }else{
        next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
