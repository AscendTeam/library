<template>
	<div>
	<div id="card">
	<div id="bookList" v-for="(item,index) in rank" :key="index">
			<div class="bookCard"   v-for="(rankItem,index) in rank.data" :key = index>
				<div v-if="index/2===0">
					<div class="Fcard" v-for="(cateItem,index) in rankItem.categories" :key="index" >
						<image class="cardTitle" :src="cateItem.ranklistCover.chart_title" mode=""></image>
						<div class="bookItem" v-for="(itembook,index) in cateItem.lectureBooks" :key = index  v-if="cateItem.lectureBooks[index].searchIdx<4" @click="searchItem(index)">
							<img :src="itembook.bookInfo.cover" alt="">
							<p>{{itembook.searchIdx}}{{itembook.bookInfo.title}}</p>
							<span class="whiter">{{itembook.bookInfo.author}}</span>
						</div>
						<button class="btn">查看全部</button>
					</div>
				</div>
					<div v-show="index/2===1">
						<div class="Fcard" v-for="(cateItem,index) in rankItem.categories" :key="index" >
						<image class="cardTitle" :src="cateItem.ranklistCover.chart_title" mode=""></image>
						<div class="bookFItem" >
							<div class="item"  v-for="(itembook,index) in cateItem.lectureBooks" :key = index v-if="cateItem.lectureBooks[index].searchIdx<5" @click="search_item(index)">
								<img :src="itembook.bookInfo.cover" alt="">
								<p>{{itembook.searchIdx}}{{itembook.bookInfo.title}}</p>
								<span>{{itembook.bookInfo.author}}</span>
							</div>
						</div>
						<button class="btn">查看全部</button>
					</div>
				</div>
		</div>
</div>
</div>
</div>
</template>

<script>
	import require from '../../utils/request.js'
	export default {
		data(){
			return{
				rank:[]
			}
		},
		methods:{
			searchItem(index){
				let a = index
				console.log(a)
			},
			search_item(index){
				let a = index + 1 
				console.log(a)
			}
		},
		async mounted(){
			this.rank = await require('/getRank')
				console.log(this.rank)
		}
	}
</script>

<style lang="stylus">
	#card
		width: 100%;
		height: 100%;
	#bookList
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
				font-size 24upx
				font-weight bold
				top: -100upx;
				left: 40upx;
			.whiter
				position: relative;
				display block
				color gray
				font-size 20upx
				margin-left: 176upx;
				top: -88upx;
		.btn
			width: 90%;
			height: 60upx;
			font-size 24upx
			background-color: white;
			color #007AFF
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

	