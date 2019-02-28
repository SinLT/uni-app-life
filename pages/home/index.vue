<template>
	<view>
		<view class="UCenter-bg">
			<button
				open-type="getUserInfo"
				@getuserinfo="wxGetUserInfo"
				withCredentials="true"
			>
				登陆
			</button>
			<view v-if="isShow">
				<image :src="" class="png" mode="widthFix"></image>
				<view class="text-xl">ColorUI组件库</view>
			</view>
			<image
				src="https://image.weilanwl.com/gif/wave.gif"
				mode="scaleToFill"
				class="gif-wave"
			></image>
		</view>
		<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
			<view class="cu-item arrow">
				<view
					class="content"
					bindtap="CopyLink"
					data-link="https://github.com/sky429762423/uni-app-life"
				>
					<text class="icon-github text-grey"></text>
					<text class="text-grey">GitHub</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<button class="cu-btn content" open-type="feedback">
					<text class="icon-writefill text-cyan"></text>
					<text class="text-grey">意见反馈</text>
				</button>
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
			avatar: '',
			name: ''
		};
	},
	async onLoad(option) {

	},
	methods: {
		wxGetUserInfo(res) {
			if (!res.detail.iv) {
				uni.showToast({
					title: '您取消了授权,登录失败',
					icon: 'none'
				});
				return false;
			}
			console.log('-------用户授权，并获取用户基本信息和加密数据------');
			console.log(res.detail);
			this.avatar = res.detail.userInfo.avatarUrl
			this.name = res.detail.userInfo.nickName
			this.isShow = true
		}
	}
};
</script>

<style scoped lang="scss">
.UCenter-bg {
	background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
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

.UCenter-bg text {
	opacity: 0.8;
}

.UCenter-bg image {
	width: 200rpx;
	height: 200rpx;
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
