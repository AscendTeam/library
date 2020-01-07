<template>
	<view class="y_launch_container">
		<view class="y_img_comtainer">
			<!-- <img class="logo" src="../../static/imgs/wreadlogo.png" alt=""> -->
			<img class="loading" src="../../static/imgs/loading.gif" alt="">
		</view>
		
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="stylus">
.y_launch_container
	.y_img_comtainer
		width 100%
		height 100%
		position relative
		// .logo
		// 	width 200rpx
		// 	height 200rpx
		.loading
			position absolute
			top 350rpx
			left 0; right 0;
			margin 0 auto
			width 250rpx
			height 250rpx
	
</style>
