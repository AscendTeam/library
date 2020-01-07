
import config from "./config.js"
export default function(url,data={},method='GET'){
	return new Promise((resolve,reject)=>{
		//执行异步任务
		uni.request({
			url:config.host+url,
			data,
			method,
			success:(res)=>{
				resolve(res.data)
				//修改promise状态为成功状态，同时将数据传递给awiat的返回值
			},
			fail:()=>{
				console.log('请求失败')
			}
		})
	})
}