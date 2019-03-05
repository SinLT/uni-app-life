<template>
	<view>
		<image
			:src="BgData"
			mode="widthFix"
			class="png"
			style="width:100%;height:486rpx"
		></image>
		<view
			class="cu-card article"
			v-for="(item, index) in Interestings.ListData"
			:key="index"
			@click="navigateTo(item)"
		>
			<view class="cu-item shadow">
				<view class="title">{{ item.title }}</view>
				<view class="content">
					<image :src="url + item.preview.url" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">{{ item.describe }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import api from '../../common/api';
export default {
	components: {},
	computed: {
		...mapState(['Interestings'])
	},
	data() {
		return {
			url: this.$apiUrl,
			BgData: ''
		};
	},
	onLoad() {},
	methods: {
		...mapActions(['getInterestings']),
		async getData() {
			const BgData = await api.getBgimagesDetail(2);
			this.BgData = this.$apiUrl + BgData.image.url;
			await this.getInterestings();
		},
		navigateTo(item) {
			uni.navigateTo({
				url: '../life/detail?id=' + item.id + '&title=' + item.title
			});
		}
	},
	mounted() {
		this.getData();
		uni.showShareMenu();
	}
};
</script>

<style></style>
