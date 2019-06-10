import { post } from './http'

let url = 'http://localhost:3030'

//登陆接口
export const loginAddRess = data => post(url+'/api/user/login',data)

// export function loginAddRess(data){
// 	console.log(post())
// 	// post('http://localhost:3030/api/user/login',data)
// }