import Axios from 'axios'

const axios=Axios.create({
    //baseURL:"http://admintest.happymmall.com/",
    timeout: 6000,
  //  headers: {'Content-Type': 'application/json;charset=UTF-8'}
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
  
})

axios.interceptors.request.use(
    config=>{
        return config
    },(err)=>{
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response=>response
    ,(err)=>{
        return Promise.reject(err)
    }
)
export default axios;