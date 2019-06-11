import { post } from './http'

let url = 'http://localhost:3030'

//登陆接口
export const loginAddRess = data => post(url+'/api/user/login',data)

//注册接口
export const registerAddRess = data => post(url+'/api/user/register',data)
