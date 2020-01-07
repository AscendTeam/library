<template>
	<div class="liang_moreContainer">
		<div class="head">
			<img src="https://rescdn.qqmail.com/weread/cover/ranklist.rising.chart_detail_title.fu6ZCi3SI6.png" alt="">
		</div>
		<div class="list" v-for='(item, index) in bookList' :key='index'>
			<div class="listItem">
				<img :src="item.bookInfo.cover" alt="">
				<div class="item">
					<span class="title">{{item.bookInfo.title}}</span>
					<span class="author">{{item.bookInfo.author}}</span>
					<div class="rating">
						<span class="star">{{item.bookInfo.star/10}}分</span>
						<span class="rat">{{item.bookInfo.ratingCount}}人点评</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {request} from '../../utils/request.js'
	export default{
		data(){
			return{
				bookList:[],
			}
		},
		async mounted(){
			let result = await request('/getListLZ')
			let data = await request('/getRank')

			console.log(result)
			console.log(data)
			this.bookList = result.books
			//this.booksList = result.data.recommendationBookList
		}
	}
</script>

<style lang="stylus">
	.liang_moreContainer
		.head
			height 100upx
			background #F75B6A
			img
				width 500upx
				height 80upx
				margin-left 80upx
		.list
			width 90%
			margin 0 auto
			.listItem
				display flex
				margin-top 40upx
				img
					width 140upx
					height 200upx
					vertical-align middle
				.item
					display flex
					flex-direction column
					margin-left 30upx

					span
						overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
						vertical-align middle
						margin-top 20upx
					.title
						font-size 36upx
						font-weight bold
						color #666A70
					.author
						font-size 34upx
						color #aaa


					.rating
						.star
							margin-right 20upx
							color #aaa
							font-size 28upx
						.rat
							font-size 26upx
							color #aaa







</style>
