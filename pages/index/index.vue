<template>
	<view>
		<image src='../../static/background.png' mode='widthFix' class='png' style='width:100%;height:486rpx'></image>
		<view class='nav-list'>
			<navigator hover-class="none" :url="'../index/detail?id=' + item.id + '&title=' + item.title" :class="'nav-li bg-' + item.color" :style="[{ animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
			 v-for="(item, index) in elements" :key="index">
				<view class="nav-title">{{item.title}}</view>
				<view class="nav-name">{{item.name}}</view>
				<text :class="'icon-' + item.icon"></text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
					id: 0,
					title: '南山区',
					name: '深圳',
					color: 'purple',
					icon: 'vipcard'
				}, {
					id: 1,
					title: '大松岗 ',
					name: '深圳',
					color: 'mauve',
					icon: 'formfill'
				}, {
					id: 2,
					title: '松湖烟雨',
					name: '松山湖',
					color: 'pink',
					icon: 'list'
				}, {
					id: 3,
					title: '浪漫海岸',
					name: '电白',
					color: 'brown',
					icon: 'newsfill'
				}, {
					id: 4,
					title: '维多利亚',
					name: '香港',
					color: 'red',
					icon: 'formfill'
				}, {
					id: 5,
					title: '威尼斯',
					name: '澳门',
					color: 'orange',
					icon: 'timefill'
				}, {
					id: 6,
					title: '长隆水上乐园',
					name: '广州',
					color: 'green',
					icon: 'messagefill'
				}, {
					id: 7,
					title: '双月湾',
					name: '惠东',
					color: 'olive',
					icon: 'album'
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
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
