<template>
	<view>
		<image
			src="../../static/LifeBg.jpg"
			mode="widthFix"
			class="png"
			style="width:100%;height:486rpx"
		></image>
		<view class="cu-card article" v-for="(item, index) in Interestings.ListData" :key="index" @click="navigateTo(item)">
			<view class="cu-item shadow">
				<view class="title">{{ item.title }}</view>
				<view class="content">
					<image :src="url+item.preview.url" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">
							{{ item.describe }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
export default {
	components: {},
	computed: {
		...mapState([
			'Interestings'
		])
	},
	data() {
		return {
			url: this.$apiUrl
		}
	},
	onLoad() {},
	methods: {
		...mapActions([
			'getInterestings'
		]),
		async getData() {
			await this.getInterestings()
		},
		navigateTo (item) {
			uni.navigateTo({
				url: '../life/detail?id=' + item.id + '&title=' + item.title
			})
		}
	},
	mounted() {
		this.getData()
	}
};
</script>

<style></style>
