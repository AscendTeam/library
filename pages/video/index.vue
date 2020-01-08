<template>
	<view>
			<view class="uni-padding-wrap uni-common-mt" v-for="(item, index) in videoData" :key="index">
					<view>
							<video class="myVideo" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"></video>
					</view>
					<span class="videoTitle">{{item.review.title}}</span>
					<div class="videoAll">
						<div class="videoUserico">
							<image :src="item.review.videoInfo.mediaIcon" mode=""></image>
							<span>{{item.review.videoInfo.mediaName}}</span>
						</div>
						<div class="videoMation">
							<i class="iconfont iconxin1" @click="hothear(index)" :class="item.isCollected?'active':''"></i>
							<span>{{item.likesCount}}</span>
						</div>
						<div class="videoShare">
							<button open-type='share' contactShare> <i class="iconfont iconweixin"></i>发给朋友</button>
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
				videoData:[],
			}
		},
		async mounted(){
			let result = await request("/getVideo")
			this.videoData = result.reviews
			// console.log(this.videoData)
		},
		methods:{
			hothear(index){
				console.log(index)
				let flag = this.videoData[index].isCollected || false
				this.$set(this.videoData[index],'isCollected',!flag)
				
				let num=this.videoData[index].likesCount
				console.log(num)
				if (flag) {
			   // this.$set(num+=1) 
				 this.$set(this.videoData[index],'num+=1',!num)
				} else{
					// num-=1
				}
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
						color #656B79
					.active
						 color red
					span
						font-size 25upx
						color #555555
				button	
					background #007AFF
					display flex
					border-radius 50upx
					height 50upx
					line-height 50upx
					color white
					position absolute
					right 0
					font-size 24upx
					.iconfont
						font-size 38upx
						padding-right 5upx
						
</style>
