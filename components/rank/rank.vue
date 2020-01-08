<template>
	<div>
		<scroll-view scroll-y="false" class="rank_container">
			<div class="card">
				<div class="bookList">
					<div class="bookCard"   v-for="(rankItem,rankIndex) in rank" :key = "rankIndex">
							<div class="Fcard" v-for="(cateItem,cateIndex) in rankItem.categories" :key="cateIndex">
								<image class="cardTitle" :src="cateItem.ranklistCover.chart_title"></image>
								<div v-if="rankIndex%2===0">
									<div class="bookItem" v-for="(itembook,index) in cateItem.lectureBooks" :key = "index"  v-if="cateItem.lectureBooks[index].searchIdx<4" @click="toDetail">
										<img :src="itembook.bookInfo.cover" alt="">
										<p>{{itembook.searchIdx}} {{itembook.bookInfo.title}}</p>
										<span class="whiter"> {{itembook.bookInfo.author}}</span>
									</div>
								</div>
								<div class="bookFItem" v-if="rankIndex%2!==0">
									<div class="item"  v-for="(itembook,index) in cateItem.lectureBooks" :key = "index" v-if="cateItem.lectureBooks[index].searchIdx<5" @click="toDetail">
										<img :src="itembook.bookInfo.cover" alt="">
										<p>{{itembook.searchIdx}} {{itembook.bookInfo.title}}</p>
										<span> {{itembook.bookInfo.author}}</span>
									</div>
								</div>
								<button class="btn" @click="toMore(cateItem)">查看全部</button>
							</div>
					</div>
				</div>
			</div>
		</scroll-view>
	</div>
</template>

<script>
	import require from '../../utils/request.js'
	export default {
		data(){
			return{
				rank:[],
				isShow:false
			}
		},
		methods:{
			toMore(data){
				let id = data.CategoryId
				// console.log(data)
				// console.log(id)
				uni.navigateTo({
					url:'/pages/seeMore/seeMore?id='+id
				})
			},
			toDetail(){
				uni.navigateTo({
					url:'/pages/books/index'
				})
			}
			
		},
		async mounted(){
			let result = await require('/getRank')
			this.rank = result.data
		}
	}
</script>

<style lang="stylus">
.rank_container
	height calc(100vh - 180upx)
	.card
		width: calc(100% - 80upx);
		height: 100%;
		padding 0 40upx
	.bookList
		.bookCard
			.cardTitle
				width: 280upx;
				height: 60upx;
		.bookItem
			background-color: #FAFAFC
			width: 100%;
			height: 200upx;
			img
				width: 120upx;
				height: 160upx;
			>p
				position: relative;
				display inline-block
				font-size 32upx
				font-weight bold
				top: -100upx;
				left: 40upx;
			.whiter
				position: relative;
				display block
				color gray
				font-size 26upx
				margin-left: 176upx;
				top: -88upx;
		.btn
			width: 90%;
			height: 60upx;
			font-size 24upx
			background-color: white;
			color #007AFF
			margin-top 20upx
			font-family:  SimHei
	.Fcard
		padding-top 60upx
		.cardTitle
			width: 280upx;
			height: 60upx;
		.bookFItem
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			flex-wrap: wrap;
			.item
				width: 50%;
				height: 25%;
				img
					width: 120upx;
					height: 160upx;
				>p
					position: relative;
					display inline-block
					font-size 24upx
					font-weight bold
					top: -100upx;
					left: 16upx;
				span
					position: relative;
					display block
					color gray
					font-size 20upx
					margin-left: 156upx;
					top: -88upx;
		.btn
			width: 90%;
			height: 60upx;
			font-size 28upx
			background-color: white;
			color #007AFF
			font-family:  SimHei
</style>

