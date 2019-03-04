import request from './request'
const api = {
	getFootprints: () => request.get('/footprints'),
	getFootprintsDetail: (id) => request.get(`/footprints/${id}`),
	getInterestings: () => request.get('/interestings'),
	getInterestingsDetail: (id) => request.get(`/interestings/${id}`),
	getBgimagesDetail: (id) => request.get(`/bgimages/${id}`)
}

export default api
