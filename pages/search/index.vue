<template>
	<view class="y_search_page">
		<view class="page">
			<view class="y_searchBar">
				<span class="iconfont iconsearch"></span>
				<input class="y_input" type="search" :placeholder="placeholder" placeholder-class="placeholder" confirm-type="search" focus="true" 
				v-model="keyword" @confirm="goSearch" @input="onKeyInput">
				<span class="y_clear-x" v-show="clear" @click="clearKey">X</span>
			</view>
			<view class="y_hotSearch">
				<p class="y_tabTitle">热门搜索</p>
				<view class="y_search_container">
					<div class="y_searchItem" v-for="(item,index) in hotArr" :key="index" @click="searchTab(item)"><span>{{item}}</span></div>
				</view>
			</view>
			<view class="y_historySearch">
				<div class="y_tabTitle_container">
					<p class="y_tabTitle">搜索历史</p>
					<span class="clr_history" @click="clrHistory">清空</span>
				</div>
				<view class="y_search_container">
					<div class="y_searchItem" v-for="(item,index) in historyArr" :key="index" @click="searchTab(item)"><span>{{item}}</span></div>
				</view>
			</view>
		</view>
		<view class="y_searchResult" v-show="isSearch">
			<ul>
				<li class="y_searchLi" v-for="(item, index) in searchResult" :key="index">
					<div class="y_searchItem">
						<image class="item_img" :src="item.cover"></image>
						<div class="y_searchInfo">
							<p class="item_title">{{item.title}}</p>
							<p class="item_author">{{item.author}}</p>
							<p class="item_intro">{{item.intro}}</p>
						</div>
					</div>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import request from "../../utils/request.js"
	export default {
		mounted(){
			this.historyArr = uni.getStorageSync('searchHistory_key') || []
		},
		data() {
			return {
				placeholder: '三体',
				keyword: '',    // 输入框输入的值
				searchResult: [],       // 搜索记录
				hotArr:['三体','余罪','鬼吹灯','人','盗墓笔记'],
				historyArr:[],
				clear:false,
				isSearch:false
			}
		},
		
		methods:{
			onKeyInput: function(event) {
				
				this.keyword = event.target.value
				// historyArr:event.target.value
				if(this.keyword){
					this.clear=true
				}else{
					this.clear = false
					this.isSearch = false
				}
			},
			// 输入搜索
			async goSearch(){
				// console.log('send request', this.keyword);
				if(this.keyword.length === 0){
					this.keyword = this.placeholder;
				}
				let result = await request("/search?title="+this.keyword)
				this.searchResult = result
				// console.log(result)
				this.historyArr.push(this.keyword)
				this.isSearch = true
				// let index = this.data.index
				// let obj = wx.getStorageSync('isCollected')
				// obj=obj?obj:{}
				// obj[index] = isCollected
				// wx.setStorageSync('isCollected', obj)
				
				let arr = uni.getStorageSync('searchHistory_key') || []
				uni.setStorage({
					key: 'searchHistory_key',
					data:this.historyArr,
					success: function () {
							// console.log('success');
					},
				})
				
				// uni.request({
				// 	url:'http://localhost:3000/search?title=' + this.keyword,
				// 	// url:'http://wjy-api.bj-srv-01.rainhan.cn/search?title=' + this.keyword,
				// 	success: (res)=>{
				// 		// console.log('request_succes', res);
				// 		this.searchResult = res.data;
				// 	},
				// 	fail: (err) => {
				// 		console.log(err);
				// 	}
				// })
				
			},
			// 点击搜索
			async searchTab(val){
				this.keyword = val
				this.clear=true
				this.goSearch()
				
			},
			// 清除历史查询记录
			clrHistory(){
				this.historyArr = []
				uni.setStorage({
					key: 'searchHistory_key',
					data:'',
				})
			},
			// 输入框清除X
			clearKey(){
				this.keyword = ''
				this.clear = false
				this.isSearch = false
			}
		
		},
	}
</script>

<style lang="stylus">
.page
	padding 0 40upx
	.y_searchBar
		margin 20upx 0
		position relative
		.iconsearch
			font-size 40upx
			position absolute
			top 18upx
			left 25upx
		.y_clear-x
			font-size 30upx
			position absolute
			top 18upx
			right 30upx
		input
			height 80upx
			padding 0 12%
			// box-sizing border-box
			background #F6F7F9
			border-radius 50upx
		.placeholder
			font-size 32upx
		
			
// 标签样式
.y_tabTitle
	font-size 32rpx
	padding-bottom 20rpx
.y_search_container
	.y_searchItem
		display flex
		flex-direction row
		margin-right 20rpx
		margin-bottom 20rpx
		display inline-block
		border-radius 100rpx
		border 1px solid #F5F6F8
		span
			line-height 32rpx
			font-size 32rpx
			padding 20rpx 30rpx


.y_historySearch
	padding-top 20rpx
	.y_tabTitle_container
		display flex
		flex-direction row
		justify-content space-between
		.clr_history
			color #007AFF
			font-size 32rpx

.y_searchResult
	width 100%
	height 100%
	position absolute
	top 120rpx
	background white
	.y_searchLi
		padding 40rpx 40rpx 0
		overflow hidden
		.y_searchItem
			.item_img
				width 92rpx
				height 132rpx
				padding-right 20rpx
				float left
			.y_searchInfo
				float left
				width 550rpx
				.item_title
					font-size 32rpx
					padding-bottom 10rpx
				.item_author
					font-size 28rpx
					padding-bottom 10rpx
					color #C0C0C0
				.item_intro
					font-size 24rpx
					color #C0C0C0
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					
</style>
