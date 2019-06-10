import axios from 'axios'  //引入axios
import QS from 'qs'	//引入qs模块
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.setTimeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

//响应拦截器
axios.interceptors.response.use(
	response => {
	if(response.data.code === 200){

		Message.success(response.data.msg)

		return Promise.resolve(response)

	}else if(response.data.code === 201){

		Message.error(response.data.msg)

		return Promise.resolve(response)

	}else if(response.data.code === 202){

		Message.error(response.data.msg)

		return Promise.resolve(response)

	}else{
		return Promise.reject(response)
	}
  },
  error => {
	console.log(error)
  }
)

//运用Promise异步操作封装axios post请求方法
export function post(url, params){
	return new Promise((resolve, reject) => {
		axios.post(url, QS.stringify(params))
		.then(res => {
			resolve(res.data);
			// Message.success(res.data.msg)
		})
		.catch(err => {
			reject(err)
		})
	})
}