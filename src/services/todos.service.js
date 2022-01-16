import httpService from './http.service'
const todosEndepoint = 'todos/'
const todosService = {
	fetch: async () => {
		const { data } = await httpService.get(todosEndepoint, {
			params: {
				_page: 1,
				_limit: 10,
			},
		})
		return data
	},
	post: async (payload) => {
		const { data } = await httpService.post(todosEndepoint, {
			method: 'POST',
			body: payload,
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		return data.body
	},
}
export default todosService
