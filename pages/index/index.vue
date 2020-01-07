<template>
	<div class="content" @click="todetail">
		<div class="text">点击</div>
	</div>
</template>

<script>
	export default{
		methods:{
			todetail(){
				console.log('------')
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
.content
	.text
		width 200upx
		height 200upx
		background-color #007AFF
</style>
