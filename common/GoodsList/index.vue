<template>
	<view class="goods-list">
		<view class="good-item" v-for="good in list">
			<image class="good-img" :src="good.goods_thumb"></image>
			<view class="good-info">
				{{good.name}}
			</view>
		</view>
	</view>
</template>

<script>
	const GetGoodsList = uniCloud.importObject('GetGoodsList');
	export default {
		props: {
			params: Object
		},
		data() {
			return {
				list: [],
				loading: true
			}

		},
		mounted() {
			this.getList();
		},
		methods: {
			async getList() {
				this.loading = true;
				const params = this.params;
				try {
					const list = await GetGoodsList.getList(params);
					this.list = list.data;
					this.loading = false;
					console.log('list', this.list)
				} catch {
					this.loading = false;

				}
			}
		}
	}
</script>

<style>
	.goods-list {
		width: 100vw;
		height: 100vh;
		padding: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.good-item {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
		width: 48%;
		height: 200px;
		overflow: hidden;
		align-self: center;
	}

	.good-img {
		width: 120px;
		height: 120px;
		object-fit: cover;

	}
	.good-info {
		font-size: 13px;
		color: #666;
	}
</style>
