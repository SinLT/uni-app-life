<template>
	<view>
		<navigator-top :titleText="title"></navigator-top>
		<view class='detail-list'>
			<view class="detail-item" v-for="(item, index) in data" :key="index">
				<image :src="item.image" mode="widthFix" @click="previewImage(item.image)" />
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
					image: 'http://pic8.nipic.com/20100717/4778793_140909004754_2.jpg'
				}, {
					image: 'http://www.haopic.me/wp-content/uploads/2014/01/20140123202940934.jpg'
				}, {
					image: 'http://www.sinaimg.cn/dy/slidenews/21_img/2016_50/2248_5469795_643737.jpg'
				}, {
					image: 'http://img5.ph.126.net/Kzpq_si_nRaAplBLswnXxQ==/2843741689724833235.jpg'
				}, {
					image: 'http://pic31.nipic.com/20130703/5019917_104624240136_2.jpg'
				}, {
					image: 'http://www.qqkw.net/uploads/allimg/130628/1_130628111423_4.jpg'
				}, {
					image: 'http://www.qqkw.net/uploads/allimg/130628/1_130628111423_5.jpg'
				}]
			}
		},
		onLoad(option) {
			this.title = option.title
		},
		methods: {
			previewImage(item) {
				let data = []
				data.push(item)
				uni.previewImage({
					urls: data
				})
			}
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
