<template>
	<div class="cataListContent">
		<scroll-view scroll-y="true" class="kkk">
			<div class="strip" v-for="(item,index) in cataList.books" :key="index" @click="toDetail">
				<div class="car">{{item.searchIdx}}</div>
				<image :src="item.bookInfo.cover" mode=""></image>
				<div class="titleContent">
					<p class="contentHader">{{item.bookInfo.title}}</p>
					<p class="contentText">{{item.bookInfo.author}}</p>
					<div class="titleDeatil">
						{{item.readingCount}}人今日在阅读
					</div>
				</div>
			</div>
		</scroll-view>
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	export default{
		data(){
			return{
				cataList:{}
			}
		},
		async mounted(){
			this.cataList=await request('/getListYQ')
			// console.log(this.cataList)
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:'/pages/books/index'
				})
			}
		}
	}
</script>

<style lang="stylus">
.cataListContent
	.kkk
		height calc(100vh - 180upx)
		.strip
			display flex
			margin 20upx 20upx
			background-color white
			border-radius 10upx
			height 280upx
		.car
			font-size 34upx
			width 60upx
			font-weight bold
			text-align center
			line-height 280upx
			margin 0 20upx
		image
			width 180upx
			height 270upx
			margin 5upx 20upx
		.titleContent
			margin 50upx 10upx
			width 300upx
			.contentHader
				font-size 32upx
				margin 20upx 0upx
			.contentText
				width 180upx
				font-size 30upx
				margin 20upx 0upx
				color #999999
			.titleDeatil
				font-size 30upx
				color #999999
</style>
