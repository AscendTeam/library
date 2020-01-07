import config from './config.js'
export function request (url,data={},method='GET'){
	return new Promise((resolve,reject)=>{
		uni.request({
			url: config.host + url,
			data,
			method,
			success : (res)=>{
				resolve(res.data)
			},
			fail : ()=>{
				console.log('请求失败')
			}
		})
	})
}