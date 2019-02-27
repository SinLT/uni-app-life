import request from './request'
const api = {
	getFootprints: () => request.get('/footprints')
}

export default api
