<template>
	<view style="overflow: hidden; width: 100%;height:100%">
		<scroll-view scroll-y="true" class="scroll-y" style="height:100%">
			<div class="hBox">
			<div class="hBtop">
				<image class="hAuthorImage" :src="bookInfo.cover"></image>
				<div class='hDetail'>	
					<h1>{{bookInfo.title}}</h1>
					<p class="hAuthor">{{bookInfo.author}}</p>				
					<div class='hItd' @click="moreItd=true">
						<span>{{bookInfo.intro}}</span>
						<i class="">></i>
					</div>
					
				</div>
			</div>
			<div class="hElt">
				<div>
					<span class="hScore">{{bookInfo.star/10}}</span>
					<star :score="bookInfo.star/10" size='24'></star>
					<p>{{bookInfo.payType}}人点评</p>
				</div>
				<div>
					<span class="hScore">{{(bookInfo.readingCount/10000).toFixed(1)}}</span><span>万人</span>
					<p >在此读书 ></p>
				</div>
			</div>
			<div class="hUserElt">
				<div class="huser">
					<image class="hAvater"></image>
					<span class="hUserName"></span>
					<span>点评</span>
					<p class="hUserSide"></p>
					<p class="hUserMore"></p>
				</div>
			</div>
			<div class="hReview">
				<span>轻点评分</span>
			</div>
			<div class="hDraw">
				去微信读书app领取43天无限卡
			</div>
			<div class="hPublish">
				<h2>出版说明</h2>
				<span class="hAuthor"></span>
				<p>{{bookInfo.intro}}</p>
				<button class="nextBooks">
					下一章
				</button>
			</div>
		</div>
		</scroll-view>
		<div class="activity-content" v-show="moreItd">
			<div class="activity-sheet-close">
				<p>简介</p>
				<p>{{bookInfo.intro}}</p>
				<p class="xtoken" @click='moreItd=false'>X</p>
			</div>
			<div class='activity-sheet-cover' @click="moreItd=false">
			</div>
		</div>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import star from '../../components/star/star.vue'
	export default {
		onLoad:function(option){
			this.bookToken = option.id
		},
		data() {
			return {
				bookInfo:{},
				moreItd:false,
			}
		},
		methods: {
		
		},
		components:{
			star
		},
		async mounted() {
			this.requestData = await request('/getDetail1')
			console.log(this.requestData)
			this.bList = this.requestData.data.book
			this.bookInfo= this.bList
			console.log(this.bookInfo)
			this.bookToke = this.requestData.data.reviewList.items
		}
	}
</script>

<style lang="stylus">
	.hBox
		padding 40upx
		.hBtop
			display: flex
			justify-content left
			flex-wrap nowrap
			.hAuthorImage
				width 220upx
				height 314upx
			.hDetail
				margin-left 40upx
				padding 40upx 0
				display flex
				flex-wrap wrap
				flex-direction column
				justify-content space-around
				.hAuthor
					color #0589FF
					font-size 32upx
				.hItd
					color #828388
					font-size 24upx
					width 400upx
					display flex
					justify-content space-between
					span
						word-break: break-all;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					i
						height 55upx
						line-height 55upx
						font-size 30upx
						font-weight 400
	.activity-content
			position fixed
			top 0
			left 0
			width 100%
			height 100%
			background reba(255,255,255,0.5)
			z-index 99
			&.move-enter-active,
			&.move-leave-active
				transition opacity .3s
			.activity-sheet-close
				position absolute
				background-color #f5f5f5
				width 600upx
				height 600upx
				left 50upx
				top 60upx
				padding 30upx
				border-radius 20upx
				z-index 100
				p:nth-child(1)
					color #0D1218
					font-size 32upx
					font-weight 600
					margin-bottom 30upx
				p:nth-child(2)
					color #999999
					font-size 28upx
				.xtoken
					width 100upx
					height 100upx
					border-radius 50upx
					background-color #333333
					color #0D1218
					position absolute
					left 280upx
					bottom -200upx	
					color #FFFFFF
					font-size 50upx
					line-height 100upx
					text-align center
			.activity-sheet-cover
				position: absolute
				width 100%
				height 100%
				top 0
				left 0
				background-color rgba(0,0,0,.2)
				
		.hElt
			margin 46upx 0  
			position relative
			div
				display: inline-block;
				width 330upx
				font-size 20upx
				
				.hScore
					font-size 40upx
					color #6F7A80
		.hUserElt
			width 588upx
			height 260upx
			padding 30upx
			border-radius 20upx
			background #F4F5F7
			.huser
				.hAvater
					width 40upx
					height 40upx
					border-radius 20upx
				.hUserName
					font-size 20upx
					color #7D8089
				span
					font-size 20upx
					color #7D8089
				.hUserSide
					font-size 28upx
					color #0D1218
				.hUserMore
					font-size 20upx
					color #7D8089
		.hReview
			margin 32upx 0
			height 46upx
			line-height 46upx
			font-size 26upx
			color #7D8089
		.hDraw
			height 96upx
			background-color #007AFF
			font-size 32upx
			color #F4F5F7
			line-height 96upx
			border-radius 20upx
			text-align center
		.hPublish
			margin 40upx 0
			padding 40upx 0
			background #F4F5F7
			font-size 32upx
			color #0D1218
			.nextBooks
				margin 40upx
				background-color #6F7A80
				font-size 32upx
				color #007AFF
				line-height 96upx
				text-align center
				border-right 20upx
				
					
					
				
			
</style>
