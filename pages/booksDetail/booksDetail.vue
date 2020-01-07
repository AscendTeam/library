<template>
	<div class="detailContainer">
		<div class="detail_head">
			<img :src="bookDetail.data.book.cover" alt="">
			<div class="right">
				<span class="title">{{bookDetail.data.book.title}}</span>
				<span class="author">{{bookDetail.data.book.author}}</span>
				<span class="info">{{bookDetail.data.book.intro}}</span>
				<span class="more"> > </span>
				<span class="end">已完结</span>
			</div>
		</div>
		<div class="num">
			<div class="left">
				<span class="star">{{bookDetail.data.book.star/10}}</span>
				<i></i>
				<span class="rat">{{bookDetail.data.book.ratingCount}}人点评</span>
			</div>
			<div class="right">
				<span class="read">{{bookDetail.data.book.readingCount/10000}}万人</span>
				<span class="toRead">在此读书 > </span>
			</div>
		</div>
		<div class="comment">
			<img class="avatar" :src="bookDetail.data.reviewList.items[0].author.avatar" alt="">
			<span class="name">{{bookDetail.data.reviewList.items[0].author.name}}</span>
			<span class="rat">点评</span>
			<div class="content">{{bookDetail.data.reviewList.items[0].content}}</div>
			<span class="more">查看更多点评 > </span>
		</div>
	</div>
</template>

<script>
	import {request} from '../../utils/request.js'
	export default{
		data(){
			return{
				bookDetail:{}
			}
		},
		async mounted(){
			let result = await request('/getDetail1')
			console.log(result)
			this.bookDetail = result
			
			//this.booksList = result.data.recommendationBookList
		}
	}
</script>

<style lang="stylus">
	.detailContainer
		width 90%
		margin 0 auto
		.detail_head
			display flex
			justify-content space-between
			img 
				width 230upx
				height 330upx
			.right
				position relative
				width 500upx
				height 320upx
				display flex
				flex-direction column
				margin-left 30upx
				span
					margin-top 20upx
				.title
					font-size 43upx
				.author
					font-size 33upx
					color #1B88EE
				.info
					height 80upx
					font-size 29upx
					color #aaa
					overflow hidden
					-webkit-line-clamp 2
					text-overflow ellipsis
				.more
					position absolute
					right 0
					top 50%
					margin-left 10upx
					color #aaa
				.end
					font-size 30upx
					color #aaa
					
		.num
			display flex
			justify-content space-between
			.left
				.star
					color #AAAAAA
					font-size 38upx
					font-weight bold
				.rat
					color #aaa
					font-size 26upx
			.right
				display flex
				flex-direction column
				align-items center
				.read
					color #aaa
					font-size 38upx
					font-weight bold
				.toRead
					color #aaa
					font-size 26upx
				
		.comment 
			width 710upx
			background #F4F5F7
			border-radius 8%
			.avatar
				margin 20upx
				width 40upx
				height 40upx
				border-radius 50%
				vertical-align middle
			
			.name
				font-size 36upx
				color #aaa
				vertical-align middle
			.rat
				font-size 36upx
				color #aaa
				vertical-align middle
				margin-left 10upx
			.content
				margin-left 10upx
				color #373D46
			.more
				margin-left 10upx
				font-size 34upx
				color #aaa
				
				
				
</style>
