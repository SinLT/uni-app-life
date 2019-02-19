<template>
	<view>
		<image src='../../static/background.png' mode='widthFix' class='png' style='width:100%;height:486rpx'></image>
		<view class='nav-list'>
			<navigator hover-class="none" :url="'../' + item.name + '/' + item.name" :class="'nav-li bg-' + item.color" :style="[{ animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
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
					title: '操作条',
					name: 'bar',
					color: 'purple',
					icon: 'vipcard'
				}, {
					title: '导航栏 ',
					name: 'nav',
					color: 'mauve',
					icon: 'formfill'
				}, {
					title: '列表',
					name: 'list',
					color: 'pink',
					icon: 'list'
				}, {
					title: '卡片',
					name: 'card',
					color: 'brown',
					icon: 'newsfill'
				}, {
					title: '表单',
					name: 'form',
					color: 'red',
					icon: 'formfill'
				}, {
					title: '时间轴',
					name: 'timeline',
					color: 'orange',
					icon: 'timefill'
				}, {
					title: '聊天',
					name: 'chat',
					color: 'green',
					icon: 'messagefill'
				}, {
					title: '轮播',
					name: 'swiper',
					color: 'olive',
					icon: 'album'
				}, {
					title: '模态框',
					name: 'modal',
					color: 'grey',
					icon: 'squarecheckfill'
				}, {
					title: '步骤条',
					name: 'steps',
					color: 'cyan',
					icon: 'roundcheckfill'
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
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
