<template>
	<view>
		<navigator-top :titleText="title"></navigator-top>
		<swiper
			class="screen-swiper square-dot"
			indicator-dots="true"
			circular="true"
			autoplay="true"
			interval="5000"
			duration="500"
		>
			<swiper-item v-for="(item, index) in images" :key="index" @click="previewImage">
				<image :src="url + item.url" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="content bg-white radius shadow-blur">
			<text>{{ content }}</text>
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
			images: [],
			url: this.$apiUrl,
			content: ''
		};
	},
	async onLoad(option) {
		this.title = option.title;
		const data = await api.getInterestingsDetail(option.id);
		this.images = data.images;
		this.content = data.content
	},
	methods: {
		previewImage() {
			let data = [];
			this.images.forEach((item, index) => {
				data.push(this.url + item.url);
			});
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
.content{
	padding: 40upx;
	margin: 20upx;
}
</style>
