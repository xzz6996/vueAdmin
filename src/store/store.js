import Vue from 'vue'
import Vuex from 'vuex'
import {Login} from '@/api/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:''
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
          commit('setUserName',res.data.username);
          resolve(res)
        }).catch(err=>{
          reject(err)
        })
      })
    }
  }
})
