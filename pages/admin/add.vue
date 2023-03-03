<template>
	<view>
		<form class="form" action="">
			<view>
				<button type="primary" size="mini">保存</button>
			</view>
			<view class="form-item">
				<div class="label">标题：</div>
				<input class="input" type="text" placeholder="" v-model="info.name">
			</view>
			<view class="form-item">
				<div class="label">分类：</div>
				<view class="uni-list-cell-db">
					<picker @change="categoryChange" :value="index" :range="categories" :range-key="'name'">
						<view class="uni-input">{{categories[index].name}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item">
				<div class="label">是否推荐：</div>
				<switch class="switch" size="small" checked="info.is_hot" />
			</view>
			<view class="form-item">
				<div class="label">是否新品：</div>
				<switch class="switch" size="small" checked="info.is_new" />
			</view>
			<view class="form-item">
				<div class="label">库存：</div>
				<input class="input" type="text" placeholder="" v-model="info.remain_count">
				
			</view>
			<view class="form-item">
				<div class="label">描述：</div>
				<editor id="editor" class="ql-container" :placeholder="'开始输入...'" @ready="onEditorReady"></editor>
			</view>
		    
		</form>
	</view>
</template>

<script>
	const Category = uniCloud.importObject('Category');
	export default {
		data() {
			return {
				categories: [],
				info: {
					"name": "思蔻甜品88折代下·小程序选款",
					"remain_count": "99",
					"is_on_sale": true,
					"is_new": true,
					"is_hot": true,
					"goods_thumb": "//w-yunting.github.io/images/circle.jpg",
					"category_id": "63e9feffe1a35c8785916496"
				},
				index: 1
			}
		},
		mounted() {
			this.getCategories()
		},
		methods: {
			categoryChange(e) {
				const cates = JSON.parse(JSON.stringify(this.categories));
			   this.info.category_id = cates[e.detail.value];
			   this.index = e.detail.value;
			},
			onEditorReady() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
				// #endif

				// #ifdef APP-PLUS || H5 ||MP-WEIXIN
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
				// #endif
			},
			undo() {
				this.editorCtx.undo()
			},
			getCategories() {
				Category.getList().then(res => {
					console.log(res)
					this.categories = res.data;
				})
			}
		}
	}
</script>

<style>
	.form-item {
		padding: 10px;

	}

	.label {
		margin-bottom: 5px;
		font-size: 14px;
	}

	.input {
		width: 300px;
		border: 1px solid #EEEEEE;
		border-radius: 4px;
	}
	#editor {
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}
    .switch {
		transform: scale(0.7);
	}
</style>
