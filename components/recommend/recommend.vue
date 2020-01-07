<template>
	<div class="liang_recommendContainer">
		<div class="recommendList" v-for='(item, index) in booksList.data.recommendationBookList' :key='index'>
			<div class="listItem" @click="toDetail(index)">
				<img class="booksImg" :src="item.cover" alt="">
				<div class="right">
					<span class="title">{{item.title}}</span>
					<span class="author">{{item.author}}</span>
					<span class="reason">{{item.reason}}</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	export default{
		data(){
			return{
				booksList:[]
			}
		},
		async mounted(){
			let result = await request('/getIndex')
			this.booksList = result
			// console.log(result.data.recommendationBookList)
			//this.booksList = result.data.recommendationBookList
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:'/pages/booksDetail/booksDetail'
				})
			}
		}
	}
	
</script>

<style lang="stylus">
	.liang_recommendContainer
		background #fff
		.recommendList
			
			width 90%
			margin 0 auto
			background #fff
			.listItem
				display flex
				margin 30upx 0
				.booksImg
					width 120upx
					height 168upx
				.right
					display flex
					flex-direction column
					margin-left 30upx
					.title
						font-size 35upx
						color #383E47
					.author
						font-size 30upx
						margin 20upx 0
						color #646A74
					.reason
						font-size 28upx
						color #AAAFB6
						
						
				
					
		
</style>
