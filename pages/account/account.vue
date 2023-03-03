<template>
	<button @click="add">添加商品</button>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			add(){
				uni.navigateTo({
					url: '/pages/admin/add',
				})
			}
		}
	}
</script>

<style>
</style>