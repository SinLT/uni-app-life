<template>
	<view>
		<navigator-top :titleText="title"></navigator-top>
		<view class='nav-list'>
			
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
				title: ''
			}
		},
		onLoad(option) {
			this.title = option.title
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
