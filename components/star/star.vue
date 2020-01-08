<template>
	<div class="star" :class="'star-' + size">
		<span class="star-item" :class="sc" v-for="(sc,index) in starClass" :key="index"></span>
	</div>
</template>

<script>
	export default{
		props:['size','score'],
		computed:{
			starClass(){
				const {score} = this
				const arr = []
				let scoreInteger = Math.floor(score/2)
				console.log(scoreInteger)
				for(let i = 0; i < scoreInteger;i++){
					arr.push('on')
				}
				let numStar = scoreInteger*2
				if(score*10 - numStar*10 > 10){
					arr.push("half")
				}
				while(arr.length < 5){
					arr.push("off")
				}
				console.log(arr)
				return arr
			}
		}
	}
</script>
<style lang="stylus">
	.star
		.star-item
			display inline-block
			background-repeat no-repeat
		&.star-48
			width 20upx
			height 20upx
			margin-right 22upx
			&.on
				background-image url('http://localhost:3000//images/star48_on.img')
			&.half
				background-image url('http://localhost:3000//images/star48_half.img')
			&.off
				background-image url('http://localhost:3000//images/start48_off.img')
		&.star-36
			.star-item
				width 15upx
				height 15upx
				margin-right 6upx
				&:last-child
					margin-right 0a
				&.on
					background-image url('http://localhost:3000//images/star36_on.img')
				&.half
					background-image url('http://localhost:3000//images/star36_half.img')
				&.off
					background-image url('http://localhost:3000//images/star36_off.img')
		&.star-24
			.star-item
				width 20upx
				height 20upx
				background-size 100%
				// margin-right 3upx/*  */
				
				&:last-child
					margin-right 0
				&.on
					background-image url("http://localhost:3000/images/star24_on@3x.png")
				&.half
					background-image url('http://localhost:3000/images/star24_half@3x.png')
				&.off
					background-image url('http://localhost:3000/images/star24_off@3x.png')
		
</style>
