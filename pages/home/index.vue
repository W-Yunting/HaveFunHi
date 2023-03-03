<template>
	<view class="content">
		<view class="search-box">
			<input class="input" type="text" placeholder="请输入关键字" placeholder-class="input-placeholder"><button type="primary" size="mini">搜索</button>
		</view>
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item,index) in swipers" :key="'swiper'+index">
				<image class="swiper-image" :src="item.goods_thumb"></image>
			</swiper-item>
		</swiper>
		<goods-list></goods-list>
	</view>
</template>

<script>
   import GoodsList from '../../common/GoodsList/index.vue';
	const GetGoodsList = uniCloud.importObject('GetGoodsList');

	export default {
		data() {
			return {
				title: 'Hello',
				goodsList: [],
				swipers: [],
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {
			// this.getSwiper();
		},
		methods: {
			async getSwiper() {
				try {
					const swipers = await GetGoodsList.getSwiper();
					this.swipers = swipers.data;
					console.log(swipers)
				} catch {

				}
			}
		},
		components:{
			GoodsList
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex: 1;
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

		.swiper {
			width: 100%;
			height: 300rpx;
		}
		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
		.swiper-list {
			margin-top: 40rpx;
			margin-bottom: 0;
		}
		.uni-common-mt {
			margin-top: 60rpx;
			position: relative;
		}
		.swiper-image {
			width: 100%;
			height: 300rpx;
			object-fit: cover;
		}
		.search-box {
			margin: 10px 0 ;
			display: flex;
			flex-direction: row;
			flex: 1;
			align-content: baseline;
			
		}
		.input {
			width: 500rpx;
			height: 28px;
			margin-right: 10rpx;
			border:1px solid #dcdfe6;
			border-radius: 6px;
		}
		.input-placeholder {
			margin-left: 10px;
			font-size: 12px;
		}
</style>
