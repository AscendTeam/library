<template>
	<div class="liang_categoryContianer"> 
		<div class="listItem"  @click="todetail">
			<div class="left">
				<span class="title">{{rankList[0].bookInfo.category}}</span>
				<ol class="item">
					<li>1. {{rankList[0].bookInfo.title}}</li>
					<li>2. {{rankList[1].bookInfo.title}}</li>
					<li>3. {{rankList[2].bookInfo.title}}</li>
				</ol>
			</div>
			<img :src="rankList[0].bookInfo.cover">
		</div>
		<div class="listItem"  @click="todetail">
			<div class="left">
				<span class="title">{{rankList1[0].bookInfo.category}}</span>
				<ol class="item">
					<li>1. {{rankList1[0].bookInfo.title}}</li>
					<li>2. {{rankList1[1].bookInfo.title}}</li>
					<li>3. {{rankList1[2].bookInfo.title}}</li>
				</ol>
			</div>
			<img :src="rankList[1].bookInfo.cover">
		</div>
		<div class="listItem"  @click="todetail">
			<div class="left">
				<span class="title">{{rankList2[0].bookInfo.category}}</span>
				<ol class="item">
					<li>1. {{rankList2[0].bookInfo.title}}</li>
					<li>2. {{rankList2[1].bookInfo.title}}</li>
					<li>3. {{rankList2[2].bookInfo.title}}</li>
				</ol>
			</div>
			<img :src="rankList[2].bookInfo.cover">
		</div>
		<div class="listItem"  @click="todetail">
				<div class="left">
					<span class="title">{{rankList[0].bookInfo.category}}</span>
					<ol class="item">
						<li>1. {{rankList[0].bookInfo.title}}</li>
						<li>2. {{rankList[1].bookInfo.title}}</li>
						<li>3. {{rankList[2].bookInfo.title}}</li>
					</ol>
				</div>
				<img :src="rankList[0].bookInfo.cover">
			</div>
			<div class="listItem"  @click="todetail">
				<div class="left">
					<span class="title">{{rankList1[0].bookInfo.category}}</span>
					<ol class="item">
						<li>1. {{rankList1[0].bookInfo.title}}</li>
						<li>2. {{rankList1[1].bookInfo.title}}</li>
						<li>3. {{rankList1[2].bookInfo.title}}</li>
					</ol>
				</div>
				<img :src="rankList[1].bookInfo.cover">
			</div>
			<div class="listItem"  @click="todetail">
				<div class="left">
					<span class="title">{{rankList2[0].bookInfo.category}}</span>
					<ol class="item">
						<li>1. {{rankList2[0].bookInfo.title}}</li>
						<li>2. {{rankList2[1].bookInfo.title}}</li>
						<li>3. {{rankList2[2].bookInfo.title}}</li>
					</ol>
				</div>
				<img :src="rankList[2].bookInfo.cover">
			</div>
			<div class="listItem"  @click="todetail">
					<div class="left">
						<span class="title">{{rankList[0].bookInfo.category}}</span>
						<ol class="item">
							<li>1. {{rankList[0].bookInfo.title}}</li>
							<li>2. {{rankList[1].bookInfo.title}}</li>
							<li>3. {{rankList[2].bookInfo.title}}</li>
						</ol>
					</div>
					<img :src="rankList[0].bookInfo.cover">
				</div>
				<div class="listItem"  @click="todetail">
					<div class="left">
						<span class="title">{{rankList1[0].bookInfo.category}}</span>
						<ol class="item">
							<li>1. {{rankList1[0].bookInfo.title}}</li>
							<li>2. {{rankList1[1].bookInfo.title}}</li>
							<li>3. {{rankList1[2].bookInfo.title}}</li>
						</ol>
					</div>
					<img :src="rankList[1].bookInfo.cover">
				</div>
				<div class="listItem"  @click="todetail">
					<div class="left">
						<span class="title">{{rankList2[0].bookInfo.category}}</span>
						<ol class="item">
							<li>1. {{rankList2[0].bookInfo.title}}</li>
							<li>2. {{rankList2[1].bookInfo.title}}</li>
							<li>3. {{rankList2[2].bookInfo.title}}</li>
						</ol>
					</div>
					<img :src="rankList[2].bookInfo.cover">
				</div>
				<div class="listItem"  @click="todetail">
						<div class="left">
							<span class="title">{{rankList[0].bookInfo.category}}</span>
							<ol class="item">
								<li>1. {{rankList[0].bookInfo.title}}</li>
								<li>2. {{rankList[1].bookInfo.title}}</li>
								<li>3. {{rankList[2].bookInfo.title}}</li>
							</ol>
						</div>
						<img :src="rankList[0].bookInfo.cover">
					</div>
					<div class="listItem"  @click="todetail">
						<div class="left">
							<span class="title">{{rankList1[0].bookInfo.category}}</span>
							<ol class="item">
								<li>1. {{rankList1[0].bookInfo.title}}</li>
								<li>2. {{rankList1[1].bookInfo.title}}</li>
								<li>3. {{rankList1[2].bookInfo.title}}</li>
							</ol>
						</div>
						<img :src="rankList[1].bookInfo.cover">
					</div>
					<div class="listItem"  @click="todetail">
						<div class="left">
							<span class="title">{{rankList2[0].bookInfo.category}}</span>
							<ol class="item">
								<li>1. {{rankList2[0].bookInfo.title}}</li>
								<li>2. {{rankList2[1].bookInfo.title}}</li>
								<li>3. {{rankList2[2].bookInfo.title}}</li>
							</ol>
						</div>
						<img :src="rankList[2].bookInfo.cover">
					</div>
				
			
		
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	export default{
		data(){
			return{
				rankList:[],
				rankList1:[],
				rankList2:[]
				
			}
		},
		async mounted(){
			let result = await request('/getListXY')
			let result1 = await request('/getListYS')
			let result2 = await request('/getListLZ')
			
			// console.log(result)
			this.rankList = result.books
			this.rankList1 = result1.books
			this.rankList2 = result2.books
			//this.booksList = result.data.recommendationBookList
		},
		methods:{
			todetail(){
				uni.navigateTo({
					url:'/pages/details/index',
					fail(err){
						console.log(err)
					}
				})
			}
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
			width 670upx
			height 300upx
			background #F8F8FA
			border-radius 20rpx
			margin-top 40upx
			justify-content space-between
			
			.left
				margin 40upx 60upx 40upx 20upx
				.title
					font-size 36upx
				.item
					color #878E98
					font-size 30upx
					>li
						margin-top 20upx
				
			img 
				width 188upx
				height 270upx
				border-radius 0 20upx 20upx 0 
				
</style>
