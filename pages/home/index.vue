<template>
	<view>
		<view class="UCenter-bg">
			<view class="text-center">
				<image :src="avatar" class="png" mode="widthFix"></image>
				<view class="text-xl margin-top-xl">{{ name }}</view>
			</view>
			<image src="../../static/wave.gif" mode="scaleToFill" class="gif-wave"></image>
		</view>
		<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
			<view class="cu-item arrow">
				<view class="content" @click="CopyLink" data-link="https://github.com/sky429762423/uni-app-life">
					<text class="icon-github text-grey"></text>
					<text class="text-grey">GitHub</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api/index.js';
	export default {
		components: {},
		data() {
			return {
				isShow: false,
				avatar: '../../static/logo.png',
				name: '末'
			};
		},
		async onLoad(option) {

		},
		methods: {
			CopyLink(e) {
				uni.setClipboardData({
					data: e.currentTarget.dataset.link,
					success: res => {
						uni.showToast({
							title: '已复制',
							duration: 1000,
						})
					}
				})
			},
		}
	};
</script>

<style scoped lang="scss">
	.UCenter-bg {
		background-image: url(https://api.taolihuixin.cn/uploads/e92a952881314f998a40a29b50a67af8.webp);
		background-size: cover;
		height: 550rpx;
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-weight: 300;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}
	
	.png{
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.UCenter-bg text {
		opacity: 0.8;
	}

	.UCenter-bg .gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}
</style>
