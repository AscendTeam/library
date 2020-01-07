<template>
	<div class="liang_categoryContianer"> 
		<div class="listItem" v-for='(item, index) in rankList' :key='index'>
			<div class="left">
				<span class="title">{{rankList[index].bookInfo.category}}</span>
				<ol class="item">
					<li>1. {{rankList[0].bookInfo.title}}</li>
					<li>2. {{rankList[1].bookInfo.title}}</li>
					<li>3. {{rankList[2].bookInfo.title}}</li>
				</ol>
			</div>
			<img :src="rankList[index].bookInfo.cover" alt="">
		</div>
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	export default{
		data(){
			return{
				rankList:[]
			}
		},
		async mounted(){
			let result = await request('/getListXY')
			// console.log(result)
			this.rankList = result.books
			//this.booksList = result.data.recommendationBookList
		}
	}
</script>

<style lang="stylus">
	.liang_categoryContianer
		width 90%
		margin 0 auto
		background #fff
		.listItem
			display flex
			width 700upx
			height 280upx
			background #F8F8FA
			border-radius 8%
			margin-top 40upx
			justify-content space-between
			
			.left
				margin 40upx 60upx 40upx 20upx
				.title
					font-size 36upx
				.item
					color #A5AAB2
					font-size 30upx
					>li
						margin-top 20upx
				
			img 
				width 188upx
				height 270upx
				border-radius 5%
				
</style>
