import Axios from 'axios'

const axios=Axios.create({
    //baseURL:"http://admintest.happymmall.com/",
    timeout: 6000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
})
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(
    config=>{
        return config
    },(err)=>{
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response=>{
        if(response){
            console.log(response)
        }else{
            return 
        }
    },(err)=>{
        return Promise.reject(err)
    }
)
export default axios;