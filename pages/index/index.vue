<template>
	<view>
		<Searchbar></Searchbar>
		微信读书
		<Category/>
		<hr>
		<Recommend/>
	</view>
</template>

<script>
	import Searchbar from '../../components/searchbar/searchbar.vue'
	import Recommend from '../../components/recommend/recommend.vue'
	import Category from '../../components/category/category.vue'
	export default{
		components:{
			Searchbar,
			Recommend,
			Category
		}

	}
</script>

<style lang="stylus">

</style>
