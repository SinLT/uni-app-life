<template>
	<view>
		<navigator-top :titleText="title"></navigator-top>
		<view class='detail-list'>
			<view class="detail-item" v-for="(item, index) in data" :key="index">
				<image :src="item.image" mode="widthFix" />
			</view>
		</view>
	</view>
</template>

<script>
	import NavigatorTop from '@/components/navigator.vue'
	export default {
		components: {
			NavigatorTop
		},
		data() {
			return {
				title: '',
				data: [{
					image: 'https://i.pinimg.com/564x/cc/6c/8f/cc6c8f930f80f01dd5b3e024878d1bb0.jpg?b=t'
				}, {
					image: 'https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055_960_720.jpg'
				}, {
					image: 'https://cdn.pixabay.com/photo/2015/07/13/14/40/paris-843229_960_720.jpg'
				}, {
					image: 'https://cdn.pixabay.com/photo/2010/11/26/canyon-203_960_720.jpg'
				}, {
					image: 'https://cdn.pixabay.com/photo/2016/03/09/15/23/grand-canal-1246629_960_720.jpg'
				}, {
					image: 'https://cdn.pixabay.com/photo/2012/07/03/22/55/rio-de-janeiro-51320_960_720.jpg'
				}, {
					image: 'https://cdn.pixabay.com/photo/2018/10/08/17/38/nature-3733115_960_720.jpg'
				}]
			}
		},
		onLoad(option) {
			this.title = option.title
		},
		methods: {

		}
	}
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
