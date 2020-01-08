<template>
	<div>
		<scroll-view scroll-y="false" class="rank_container">
			<div class="card">
				<div class="bookList">
					<div class="bookCard" :class="rankIndex%2===0?'backColor':''"  v-for="(rankItem,rankIndex) in rank" :key = "rankIndex">
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
										<div>
											<p>{{itembook.searchIdx}} {{itembook.bookInfo.title}}</p>
											<span> {{itembook.bookInfo.author}}</span>
										</div>
										
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
		width: 100%
		height: 100%;
	.bookList
		.bookCard
			padding 0 40upx
			padding-bottom 20upx
		.backColor
			background #FAFAFC
			.cardTitle
				height: 60upx;
		.bookItem
			// background-color: #FAFAFC
			width: 100%;
			height: 200upx;
			img
				width: 120upx;
				height: 160upx;
			>p
				position: relative;
				display inline-block
				font-size 28upx
				font-weight bold
				top: -100upx;
				left: 40upx;
			.whiter
				position: relative;
				display block
				color gray
				font-size 24upx
				margin-left: 176upx;
				top: -88upx;
	.Fcard
		padding-top 20upx
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
				display flex
				justify-content: space-between;
				flex-direction: row;
				img
					width: 120upx;
					height: 160upx;
				div
					width 255upx
					height: 160upx;
					padding-left 20upx
					padding-bottom 40upx
					>p
						width 180upx
						font-size 28upx
						font-weight bold
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					span
						color gray
						font-size 24upx
		.btn
			width: 100%
			height: 80upx;
			font-size 28upx
			line-height 80upx
			background-color: white;
			color #007AFF
			border 1px solid #E6E6E6
			outline: none;
			border-radius 20upx
			margin-bottom 20upx
			padding 0
			position none
			// font-family:  SimHei
</style>

