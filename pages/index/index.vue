<template>
	<div class="indexContainer">
		微信读书11111
		<Category/>
		<hr>
		<Recommend/>
	</div>
	
</template>

<script>
	
	import Recommend from '../../components/recommend/recommend.vue'
	import Category from '../../components/category/category.vue'
	export default {
		components:{
			Recommend,
			Category
		},
	

	}
</script>

<style>
	
</style>
