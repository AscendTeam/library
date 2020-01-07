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
	import require from '../utils/request.js'
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
				width: 140px;
				height: 30px;
		.bookItem
			background-color: #FAFAFC
			width: 100%;
			height: 100px;
			img
				width: 60px;
				height: 80px;
			>p
				position: relative;
				display inline-block
				font-size 12px
				font-weight bold
				top: -50px;
				left: 20px;
			.whiter
				position: relative;
				display block
				color gray
				font-size 10px
				margin-left: 88px;
				top: -44px;
		.btn
			width: 90%;
			height: 30px;
			font-size 14px
			background-color: white;
			color #007AFF
			font-family:  SimHei
	.Fcard
		padding-top 30px
		.cardTitle
			width: 140px;
			height: 30px;
		.bookFItem
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			flex-wrap: wrap;
			.item
				width: 50%;
				height: 25%;
				img
					width: 60px;
					height: 80px;
				>p
					position: relative;
					display inline-block
					font-size 12px
					font-weight bold
					top: -50px;
					left: 8px;
				span
					position: relative;
					display block
					color gray
					font-size 10px
					margin-left: 78px;
					top: -44px;
		.btn
			width: 90%;
			height: 30px;
			font-size 14px
			background-color: white;
			color #007AFF
			font-family:  SimHei			
</style>

	