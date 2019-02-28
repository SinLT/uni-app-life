import request from './request'
const api = {
	getFootprints: () => request.get('/footprints'),
	getFootprintsDetail: (id) => request.get(`/footprints/${id}`),
	getInterestings: () => request.get('/interestings'),
	getInterestingsDetail: (id) => request.get(`/interestings/${id}`)
}

export default api
