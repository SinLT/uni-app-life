import uniRequest from 'uni-request'

uniRequest.defaults.baseURL = 'http://localhost:1337'

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