<template>
	<div id="bookShelf">
		<div class="topBar">
				<button class="userName" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials=“true” v-if="!isLogin" >授权登陆</button>
				<div v-if="isLogin">
					<span>{{userInfo.nickName}}</span>
					<image :src="userInfo.avatarUrl"></image>
				</div>
				
			<div class="bookActive">
					<div class="text">
						<p>无限卡今日到期</p>
						<p class="second">已获得0.4天无限卡奖励 集满1天即可发放至用户</p>
					</div>
			</div>
		</div>
		<div class="bookCard">
			<div class="text_">
				<span>去微信读书app领取43天无限卡</span>
				<span class="right">></span>
			</div>
		</div>
		<div class="book">
			<div class="addBook">
				<div class="add">
					十
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const app = getApp()
	export default{
		
		data(){
			return{
				userInfo:{},
				isLogin:false
			}
		},
		methods:{
			getuserinfo(res){
				// console.log(res)
				this.userInfo = res.mp.detail.userInfo
				// console.log(this.userInfo)
				this.isLogin = true
				this.$bus.$emit("getUser",this.userInfo)
			},
		},
		mounted() {
			if(app.$vm.userInfo.nickName){
				this.isLogin = true
				this.userInfo = app.$vm.userInfo
			}
			
			// uni.getUserInfo({
			// 	success:(res)=> {
			// 		this.userInfo = res.userInfo
			// 		this.isLogin = true
			// 		this.$bus.userInfo = this.userInfo
			// 	},
			// 	fail:()=> {
			// 		console.log('失败')
			// 	}
			// })
		}

	}
</script>

<style lang="stylus">
	#bookShelf
		width: 100%;
		height: 100%;
		.topBar
			width: 90%;
			height: 294upx;
			background-color: #F8F9FB
			margin-left 5%
			border-radius 30upx
			margin-top 40upx
			border 2upx solid #DEE0E2
			>div
				position: relative;
				width: 90%;
				height: 50%;
				margin-left 5%
				image
					position: absolute;
					width: 86upx;
					height: 86upx;
					border-radius 50%
					right 2upx
					top 50%
					transform translateY(-50%)
				span
					position: absolute;
					top 50%
					transform translateY(-50%)
					left 0
			.userName
				height 50%
			
			.bookActive
				position: relative;
				width: 90%;
				height: 50%;
				margin-left 5%
				border-top 1px solid #DEE0E2
				.text
					position: absolute;
					font-size 24upx
					top 50%
					transform translateY(-50%)
					.second
						color gray
		.bookCard
			width: 90%;
			height: 100upx;
			margin-left 5%
			margin-top: 34upx;
			border-radius 70upx
			outline none
			background-color: #5D5F66;
			.text
				border-radius 70upx
				background-color: #5D5F66;
				bottom 1upx
			span
				color white
				font-size 24upx
				margin-right: 50rpx
				padding-top 1upx
				position: relative;
				left: 9px;
				bottom: -8px;
			.right
				color white
				font-size 24upx
				margin-left: 230upx
		.book
			width: 90%;
			margin-left 5%
			padding-top: 70upx;
			.addBook
				width: 188upx;
				height: 272upx;
				border 2upx solid #DEE0E2
				.add
					color #5D5F66
					text-align center
					vertical-align middle
					line-height: 272upx;
</style>