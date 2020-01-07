<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// let loading = setTimeout(function(){
			// 	clearTimeout(loading);
			// 	uni.reLaunch({
			// 		url:"/pages/index/index",
			// 	});
			// },3000)
		},
		onShow: function() {
			console.log('App Show')

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	@import url('./static/stylus/iconfont/iconfont.styl')
	/*每个页面公共css */
	page
		width 100%
		height 100%
</style>
