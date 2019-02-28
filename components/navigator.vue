<template>
	<!--自定义导航栏-->
	<view class="cu-custom" :style="{ height: globalData.CustomBar + 'px' }">
		<view
			class="cu-bar fixed bg-gradual-blue"
			:style="{
				height: globalData.CustomBar + 'px',
				paddingTop: globalData.StatusBar + 'px'
			}"
		>
			<navigator class="action" open-type="navigateBack" delta="1" hover-class="none">
				<text class="icon-back"></text>
				<text class="title">{{ titleText }}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	data() {
		return {};
	},
	props: {
		titleText: {
			type: String,
			default: '导航栏标题'
		}
	},
	computed: {
		...mapState(['globalData'])
	},
	onLoad(option) {},
	onReady() {},
	methods: {},
	components: {}
};
</script>

<style scoped lang="scss">
.icon-back {
	margin-top: 0.1em;
}
.title {
	white-space: nowrap; /*规定段落中的文本不进行换行*/
	overflow: hidden; /*内容会被修剪，并且其余内容是不可见的。*/
	text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
}
</style>
