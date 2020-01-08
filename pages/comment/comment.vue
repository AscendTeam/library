<template>
	<view style="height:100%">
		<div class='hAllComment'>
			<div class="comment" v-for="(cm,index) in commentData" :key="index">
				<image :src="cm.author.avatar"></image>
				<div class="hReader">
					<span class="authorName">{{cm.author.name}}</span>
					<span>点评</span>
					<star class="star2" :score="cm.numericStar" size="24"></star>
					<!-- <p>展开</p> -->
				</div>
				<p>{{cm.content}}</p>
			</div>
		</div>
		
	</view>
</template>

<script>
	import star from"../../components/star/star.vue"
	import request from "../../utils/request.js"
	export default {
		data() {
			return {
				commentData:[]
			}
		},
		methods: {
			
		},
		components:{
			star
		},
		async mounted() {
			this.requestData = await request('/getDetail1')
			this.commentData = this.requestData.data.reviewList.items
			// console.log (this.commentData)
		}
	}
</script>

<style lang="stylus">
	.hAllComment
		// height 100%
		background #EDEEF0
		.comment
			background #FFFFFF
			padding 30upx
			height 300upx
			margin-bottom 10upx		
			image
				width 40upx
				height 40upx
				border-radius 20upx
				vertical-align middle
			.hReader
				vertical-align middle
				display inline-flex
				justify-content left
				align-items center	
				.authorName
					font-size 24upx
					color #333333
					line-height 40upx
					margin 0 10upx
				span:nth-child(2)
					font-size 24upx
					color #6F7A80
					line-height 40upx
				star
					margin-left 10upx
					line-height 50upx
					vertical-align top
			p
				margin-left 50upx
				padding 20upx 0
				font-size 32upx
				color #0D1218
				white-space:wrap
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 5;
				overflow: hidden;
			
					
				
</style>
