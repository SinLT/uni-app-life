<script>
import { mapState, mapActions } from 'vuex';
export default {
	computed: {
		...mapState(['globalData'])
	},
	methods: {
		Login() {
			uni.getProvider({
				service: 'oauth',
				success: function(res) {
					console.log(res.provider);
					//支持微信、qq和微博等
					if (~res.provider.indexOf('weixin')) {
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								console.log('-------获取openid(unionid)-----');
								console.log(JSON.stringify(loginRes));
								// 获取用户信息
								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										console.log('-------获取微信用户所有-----');
										console.log(JSON.stringify(infoRes.userInfo));
									}
								});
							}
						});
					}
				}
			});
		}
	},
	onLaunch: function() {
		uni.getSystemInfo({
			success: e => {
				this.globalData.StatusBar = e.statusBarHeight;
				this.globalData.CustomBar =
					e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
			}
		})
	},
	onShow: function() {},
	onHide: function() {}
};
</script>

<style>
/*每个页面公共css */
@import './common/uni.css';
@import './common/icon_color.css';
@import './common/colorui.css';
</style>
