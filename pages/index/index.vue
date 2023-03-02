<template>
	<view class="content">
		<image class="logo" src="//w-yunting.github.io/images/24h.jpg"></image>
		<div></div>
	</view>
</template>

<script>
const GetGoodsList = uniCloud.importObject('GetGoodsList');

	export default {
		data() {
			return {
				title: 'Hello',
				goodsList:[]
			}
		},
		onLoad() {
			this.getGoodsList();
			this.getSwiper();
		},
		methods: {
           async getGoodsList(){
				try {
					const list = await GetGoodsList.getList();
					this.list = list;
					console.log(list)
				} catch{
					
				}
		   },
		   async getSwiper(){
			   try {
				   const swipers = await GetGoodsList.getSwiper();
				   this.swipers = swipers
				   console.log(swipers)
			   }catch{
				   
			   }
		   }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
