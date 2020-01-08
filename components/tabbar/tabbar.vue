<template>
	<view class="y_tabbar_container">
		<div class="y_nav_container">
			<ul>
				<li class="y_detail_item_info" :class="{detail_item_chiose:current===index}" @click="goItem(index)"
				v-for="(navItem,index) in navArr" :key="index">
					{{navItem}}
				</li>
				<!-- <li class="y_detail_item_notice" :class="{detail_item_chiose:current===1}"
					@click="goItem(1)">
					分类
				</li>
				<li class="y_detail_item_suggestion" :class="{detail_item_chiose:current===2}"
					@click="goItem(2)">
					排行
				</li>
				<li class="y_detail_item_suggestion" :class="{detail_item_chiose:current===3}"
					@click="goItem(3)">
					科幻武侠
				</li>
				<li class="y_detail_item_suggestion" :class="{detail_item_chiose:current===4}"
					@click="goItem(4)">
					名著经典
				</li> -->
			</ul>
		</div>

		<swiper class="swiper" :autoplay="false" :duration="duration" :current="current" @change="changeItem">
			<!-- 推荐 -->
			<swiper-item>
				<Recommend></Recommend>
			</swiper-item>
			<!-- 分类 -->
			<swiper-item>
				<Category></Category>
			</swiper-item>
			<!-- 排行 -->
			<swiper-item>
				<Rank></Rank>
			</swiper-item>
			<swiper-item>
				<Youngs></Youngs>
			</swiper-item>
			<swiper-item>
				<Speech></Speech>
			</swiper-item>
<!-- 			<swiper-item v-for="(item,index) in itemArr" :key="index">
				<view class="swiper-item uni-bg-red">{{item}}</view>
			</swiper-item> -->
		</swiper>


	</view>
</template>

<script>
	import Recommend from '../recommend/recommend.vue'
	import Category from '../category/category.vue'
	import Rank from '../rank/rank.vue'
	import Youngs from '../youngs/youngs.vue'
	import Speech from '../speech/speech.vue'
	export default{
		components:{
			Recommend,
			Category,
			Rank,
			Youngs,
			Speech
		},
		data(){
			return{
				choiceIndex:0,
				duration:500,
				navArr:["推荐","分类","排行","科幻武侠","名著经典"],
				// itemArr:["A","B","C","D","E"],
				current:0
			}
		},

		methods: {
			changeItem(event){
				this.current = event.target.current
				// console.log(event)
			},
			goItem(index){
				this.current = index
			}

		}
	}
</script>

<style lang="stylus">
.y_tabbar_container
	height 100%
.y_nav_container
	>ul
		display flex
		>li
			font-size 36upx
			/*font-weight bold*/
			padding 0 20upx
			color #999999
			line-height 1.2em
			display flex
			flex-direction column
			align-items center
			&.detail_item_chiose
				font-weight bold
				color black
.swiper
	height 2500rpx
	swiper-item
		width 100%
		height 100%
</style>
