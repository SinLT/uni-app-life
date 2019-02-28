import Vue from 'vue'
import App from './App'
import store from './store'
import { dateUtils } from './common/util'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$apiUrl = dateUtils.apiUrl

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
