import uniRequest from 'uni-request'
import { dateUtils } from '../util'

uniRequest.defaults.baseURL = dateUtils.apiUrl

uniRequest.interceptors.request.use((request) => {
	return request
})

uniRequest.interceptors.response.use(
	(response) => {
		return Promise.resolve(response.data)
	},
	(err) => {
		return Promise.resolve()
	}
)

export default uniRequest