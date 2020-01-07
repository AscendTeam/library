import config from './config.js'
export default function (url, data={},method="Get"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:config.host + config.basePath + url,
			data,
			method,
			success: (res)=>{
				resolve(res.data)
			},
			fail: () => {
				reject()
			}
		})
	})
}