<template>
	<div>
		<div class="indexContainer">
			<Searchbar></Searchbar>
			<scroll-view scroll-y="true" class="scroll-Y" show-scrollbar="true">
				<div class="bookRack" @click="tobook">
					<div class="matter">
						<i class="iconfont iconus"></i>
						<span class="typeUser">游客</span>
						<span class="userInfo">无线卡免费阅读.剩余1天</span>
						<div class="feedBack">反馈</div>
					</div>
					<div class="showBook">
						<image src="../../static/imgs/3.jpg"  class="bookName" ></image>
					</div>
					<div class="bookUp">
						<span class="w-name">书架</span>
						<i class="iconfont iconright"></i>
					</div>
				</div>
				<div class="bookRacklist">
					<image src="../../static/imgs/1.jpg" class="listImg" :class="{activeClass: 0 === navIndex}"></image>
				</div>
				<view class="y_tabbar_container">
				    <Tabbar></Tabbar>
				</view>
			</scroll-view>
	  </div>
	</div>
</template>

<script>
	import Searchbar from '../../components/searchbar/searchbar.vue'
	import Tabbar from '../../components/tabbar/tabbar.vue'
    import Recommend from "../../components/recommend/recommend.vue"
	
	export default{
		components:{
			Searchbar,
			Tabbar,
			Recommend
		},
		data(){
			return{
				navList:[

				],
				navIndex:0,
			  navId:0
			}
		},
		methods:{
			tobook(){
				uni.navigateTo({
					url:"/pages/bookpack/index"
				})
			},
			changeNavIndex(index,navId){
				this.navIndex = index
				this.navId = navId
				console.log("this.navIndex")
			},
		}
	}
</script>

<style lang="stylus">
	.indexContainer
		height calc(100vh - 20upx)
		// display flex
		// justify-content center
		//margin 0 auto
		.scroll-Y
			height calc(100vh - 120upx)
			.bookRack
				width 90%
				height 250upx
				background red
				margin 30upx auto
				background #666666
				border-radius 30upx
				position relative
				.matter
					display flex
					padding-top 40upx
					.iconfont
						font-size 40upx
						color white
						margin-left 35upx
					.typeUser
						color white
						font-size 23upx
						padding 5upx 15upx
						letter-spacing 3upx
					.userInfo
						color #C0C0C0
						font-size 23upx
						padding 5upx 0
						letter-spacing 3upx
					.feedBack
						width 70upx
						height 40upx
						background #888888
						position absolute
						right 0
						font-size 23upx
						color white
						line-height 40upx
						text-align center
						border-radius 50upx 0 0 50upx
				.showBook
					margin-left 35upx
					margin-top  20upx
					.bookName
						width 80upx
						height 115upx
				.bookUp
					position absolute
					left 90%
					top 110upx
					width 10upx
					display flex
					color white
					.w-name
						font-size 25upx
						display block
					.iconfont
						position absolute
						left 30upx
						top 32upx
						color #C0C0C0
			.bookRacklist
				width 90%
				height 250upx
				margin 30upx auto
				.listImg
					width 100%
					height 100%
					border-radius 30upx
</style>
