<template>
	<view>
		<navigator-top :titleText="title"></navigator-top>
		<view class="detail-list">
			<view class="detail-item" v-for="(item, index) in data" :key="index">
				<image
					:src="url + item.url"
					mode="widthFix"
					@click="previewImage(url + item.url)"
				/>
			</view>
		</view>
	</view>
</template>

<script>
import NavigatorTop from '@/components/navigator.vue';
import api from '../../common/api/index.js';
export default {
	components: {
		NavigatorTop
	},
	data() {
		return {
			title: '',
			data: [],
			url: this.$apiUrl
		};
	},
	async onLoad(option) {
		this.title = option.title;
		const data = await api.getFootprintsDetail(option.id);
		this.data = data.images;
		uni.showShareMenu();
	},
	methods: {
		previewImage(item) {
			let data = [];
			data.push(item);
			uni.previewImage({
				urls: data
			});
		}
	}
};
</script>

<style scoped lang="scss">
.detail {
	&-list {
		/*定义列数*/
		column-count: 2;
		/*列间距*/
		column-gap: 4px;
	}

	&-item image {
		width: 100%;
	}
}
</style>
