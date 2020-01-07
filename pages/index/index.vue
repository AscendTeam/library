<template>
	<view>
		<Searchbar></Searchbar>
		微信读书
		<view class="y_tabbar_container">
			<Tabbar></Tabbar>
		</view>
		
		<Category/>
		<hr>
		<Recommend/>
	</view>
</template>

<script>
	import Searchbar from '../../components/searchbar/searchbar.vue'
	import Tabbar from '../../components/tabbar/tabbar.vue'
	
	
	export default{
		components:{
			Searchbar,
			Tabbar,
		}

	}
</script>

<style lang="stylus">

</style>
