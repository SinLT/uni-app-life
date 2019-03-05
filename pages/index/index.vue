<template>
	<view>
		<view class="index">
			<image
				:src="BgData"
				mode="widthFix"
				class="png"
				style="width:100%;height:486rpx"
			></image>
			<text class="index-text">{{ textData }}</text>
		</view>
		<view class="nav-list">
			<navigator
				hover-class="none"
				:url="'../index/detail?id=' + item.id + '&title=' + item.title"
				:class="'nav-li bg-' + item.color"
				:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
				v-for="(item, index) in FootPrints.ListData"
				:key="index"
			>
				<view class="nav-title">{{ item.title }}</view>
				<view class="nav-name">{{ item.city }}</view>
				<text :class="'icon-' + item.icon"></text>
			</navigator>
		</view>
	</view>
</template>

<script>
const jinrishici = require('../../common/jinrishici.js');
import { mapState, mapActions } from 'vuex';
import api from '../../common/api';
export default {
	data() {
		return {
			textData: '',
			BgData: ''
		};
	},
	computed: {
		...mapState(['FootPrints'])
	},
	onLoad() {},
	methods: {
		...mapActions(['getFootprints']),
		shici() {
			jinrishici.load(result => {
				this.textData = result.data.content;
			});
		},
		async getData() {
			const BgData = await api.getBgimagesDetail(1);
			this.BgData = this.$apiUrl + BgData.image.url;
			await this.getFootprints();
		}
	},
	mounted() {
		this.getData();
		this.shici();
		uni.showShareMenu();
	}
};
</script>

<style lang="less" scoped>
.index {
	position: relative;
	&-text {
		position: absolute;
		right: 90upx;
		top: 140upx;
		writing-mode: vertical-lr;
		height: 340upx;
		color: #79a9ec;
		text-shadow: -1upx -1upx 6upx #79a9ec;
		line-height: 50upx;
		letter-spacing: 15upx;
	}
}
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
