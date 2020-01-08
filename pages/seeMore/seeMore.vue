<template>
<div>
	<div class="liang_moreContainer"  v-for='(cateItem, index) in projectData.categories' :key='index'>
		<div class="head">
			<img :src="cateItem.ranklistCover.chart_detail_title">
		</div>
		<div class="cataListContent">
<!-- 			<scroll-view scroll-y="true" class="kkk"> -->
				<div class="strip" v-for="(itembook,index) in cateItem.lectureBooks" :key="index">
					<div class="car">{{itembook.searchIdx}}</div>
					<image :src="itembook.bookInfo.cover" mode=""></image>
					<div class="titleContent">
						<p class="contentHader">{{itembook.bookInfo.title}}</p>
						<p class="contentText">{{itembook.bookInfo.author}}</p>
						<div class="titleDeatil">
							{{itembook.ratingCount}}人今日在阅读
						</div>
					</div>
				</div>
<!-- 			</scroll-view> -->
		</div>
	</div>
</div>
</template>

<script>
	import request from '../../utils/request.js'
	export default{
		data(){
			return{
				bookList:[],
				cateId: '',
				projectData:[]
			}
		},
		onLoad: function (option) {
			// console.log(option)
			// console.log(option.id);
			this.cateId = option.id;
		},
		async mounted(){
			let rank = await request('/getRank')
			let cateId = this.cateId;
			// console.log(rank);
			// try{
			this.projectData = rank.data.find((categories, cid)=>categories.name==cateId)
			// console.log(this.projectData)
			// }catch(e){
			// 	console.log(e);
			// }
		},
		
	}
</script>

<style lang="stylus">
	.liang_moreContainer
		.head
			height 80upx
			background #F75B6A
			img
				width 500upx
				height 80upx
				margin-left 80upx
		// .cataListContent
		// 	.kkk
		// 		height calc(100vh - 180upx)
	.strip
		padding 10upx 0
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
