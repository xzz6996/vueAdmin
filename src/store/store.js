import Vue from 'vue'
import Vuex from 'vuex'
import {Login} from '@/api/login'
import {getStore,setStore} from '@/config/localStorage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:getStore('username')
  },
  mutations: {
    setUserName(username){
      this.state.username=username;
    }
  },
  actions: {
    login({commit},params){
      return new Promise((resolve,reject)=>{      
        Login(params).then(res=>{
          setStore('username',res.data.data.username);
          commit('setUserName',res.data.data.username);
          resolve(res)
        }).catch(err=>{
          reject(err)
        })
      })
    }
  }
})
