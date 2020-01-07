<template>
	<view>
			<view class="uni-padding-wrap uni-common-mt" v-for="(item, index) in videoData" :key="index">
					<view>
							<video class="myVideo" src=""></video>
					</view>
					<span class="videoTitle">{{item.review.title}}</span>	
					<div class="videoAll">
						<div class="videoUserico">
							<image :src="item.review.videoInfo.mediaIcon" mode=""></image>
							<span>{{item.review.videoInfo.mediaName}}</span>
						</div>
						<div class="videoMation">
							<i class="iconfont iconxin" @click="hoke"></i>
							<span>{{item.review.videoInfo.duration}}</span>
						</div>
						<div class="videoShare">
							<i class="iconfont iconweixin"></i>
							<span>发给朋友</span>
						</div>
					</div>
			</view>
	</view>
</template>

<script>
	import request from "../../utils/request.js"
	export default {
		data(){
			return{
				videoData:[]
			}
		},
		async mounted(){
			let result = await request("/getVideo") 
			this.videoData = result.reviews
			console.log(this.videoData)
		},
		methods:{
			hoke(){
				
			}
		}

	}
</script>

<style lang="stylus">
	.uni-padding-wrap
		width 100%
		.myVideo
			width 100%
    .videoTitle
		font-size 28upx
		display block
		width 90%
		margin 10upx auto
		.videoAll
			display flex
			position relative
			height 50upx
			width 90%
			margin 40upx auto
			.videoUserico
				display flex
				line-height 50upx
				image
					width 45upx
					height 45upx
					border-radius 50%
				span
					font-size 26upx
					color #555555
					padding-left 10upx
					letter-spacing 3upx
			.videoMation	
				display flex
				height 50upx
				line-height 50upx
				margin-left 100upx
				.iconfont
					font-size 50upx
					padding 0 5upx
				span
					font-size 25upx
					color #555555
			.videoShare	
				background #007AFF
				display flex
				border-radius 50upx
				height 50upx
				line-height 50upx
				color white
				position absolute
				right 0
				.iconfont
					padding-left 20upx
					font-size 38upx
					
				span
					padding-right 20upx	
					font-size 25upx
					letter-spacing 3upx
</style>
