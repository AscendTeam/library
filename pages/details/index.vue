<template>
	<!-- 分类详情页面 -->
	<div class="contentDetails">
		<scroll-view class="scrollContainer" scroll-x="true" >
			<view @click="changNavIndex(index)" class="scrllItem" :class="{active:navIndex===index}" v-for="(navItem,index) in navList" :key="index">
			{{navItem}}
			</view>
		</scroll-view>
		<!--(内容区) 每一个列表 -->
		<scroll-view scroll-y="true" class="kkk">
			<div class="strip" v-if="navIndex===0" v-for="(item,index) in indexDatas.books" :key="index" @click="toDetail">
				<div class="car">{{item.searchIdx}}</div>
				<image :src="item.bookInfo.cover" mode=""></image>
				<div class="titleContent">
					<p class="contentHader">{{item.bookInfo.title}}</p>
					<p class="contentText">{{item.bookInfo.author}}</p>
					<div class="titleDeatil">
						{{item.readingCount}}人今日在读
					</div>
				</div>
			</div>
			<cataxy v-if="navIndex%3 == 0"></Cataxy>
			<catays v-if="navIndex%3 == 1"></Catays>
			<Catalz v-if="navIndex%3 >= 2"></Catalz>
		</scroll-view>
	</div>
</template>
<script>
	import request from '../../utils/request.js'
	import Cataxy from '../../components/cata/cataxy.vue'
	import Catays from '../../components/cata/catays.vue'
	import Catalz from '../../components/cata/catalz.vue'
	
	export default{
		components:{
			Cataxy,
			Catays,
			Catalz
		},
			data(){
				return{
					navIndex:0,
					indexDatas:{},
					navId:0,
					navList:[
						'全部',
						'日式推理',
						'欧美探案',
						'本土悬疑',
						'罪案小说',
						'恐怖惊悚',
						'悬疑探险',
						'灵异鬼怪',
						'其他'
						]
			}
		},
		methods:{
			changNavIndex(index,navId){
				this.navIndex=index
				this.navId=navId
			},
			toDetail(){
				uni.navigateTo({
					url:'/pages/books/index'
				})
			}
		},
		async mounted() {
			this.indexDatas=await request('/getListXY')
		}
	}
</script>

<style lang="stylus">
.contentDetails
	.scrollContainer
		white-space wrap
		width 100%
		.scrllItem
			display inline-block//行内块元素
			width 140upx
			height 60upx
			margin-left 40upx
			font-size 28upx
			font-weight bold
			// background-color #007AFF
			&.active
				color #18A7FE
	.kkk
		// height 2222222222upx
		height calc(100vh - 180upx)
		.strip
			display flex
			margin 20upx 20upx
			background-color white
			// border 1px solid #F1F1F1
			border-radius 10upx
			height 280upx
			.car
				font-size 34upx
				width 60upx
				font-weight bold
				text-align center
				line-height 280upx
				margin 0 10upx
			image
				width 180upx
				height 270upx
				margin 5upx 10upx
			.titleContent
				width 300upx
				margin 50upx 10upx
				.contentHader
					font-size 32upx
					margin 20upx 0upx
				.contentText
					font-size 30upx
					margin 20upx 0upx
					color #999999
				.titleDeatil
					font-size 30upx
					color #999999
</style>
