<template>
		<view class="page">
			<view class="y_searchBar" @click="goSearch">
				<span class="iconfont iconsearch"></span>
				<input type="text" placeholder="三体" disabled>
			</view>
		</view>
</template>

<script>
	export default {
		methods:{
			goSearch(){
				// let currentPage = getCurrentPages().pop().route;
				// if(currentPage != 'pages/search/index'){
				 	uni.navigateTo({
				 		url:'../../pages/search/index',
				 		animationType:"none"
				 	})
				// }
			}
			
			
		},
	}
</script>

<style lang="stylus">
.y_searchBar
	margin 20upx
	position relative
	span
		font-size 40upx
		position absolute
		top 15upx
		left 20upx
	input
		width 100%
		height 80upx
		padding 0 10%
		box-sizing border-box
		background #F6F7F9
		border-radius 50upx
</style>
