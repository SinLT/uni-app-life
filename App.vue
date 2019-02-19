<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		computed: {
			...mapState([
				'globalData'
			])
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: e => {
					this.globalData.StatusBar = e.statusBarHeight;
					this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
				}
			})
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	@import "./common/icon_color.css";
	@import "./common/colorui.css";
</style>
