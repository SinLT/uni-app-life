import Vue from 'vue'
import Vuex from 'vuex'
import api from '../common/api'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		globalData: {
			StatusBar: '',
			CustomBar: ''
		},
		FootPrints: {
			ListData: []
		},
		Interestings: {
			ListData: []
		}
	},
	mutations: {
		FootprintsData(state, data) {
			state.FootPrints.ListData = data
		},
		InterestingsData(state, data) {
			state.Interestings.ListData = data
		}
	},
	actions: {
		async getFootprints({
			state,
			commit
		}) {
			const data = await api.getFootprints()
			commit('FootprintsData', data)
		},
		async getInterestings({
			state,
			commit
		}) {
			const data = await api.getInterestings()
			commit('InterestingsData', data)
		}
	}
})
