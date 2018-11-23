import axios from '@/config/axios'

export function Login(params){
    return axios({
        url:"/manage/user/login.do",
        method:"post",
        data:params
    })
}