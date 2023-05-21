export const countDownApi = {
	sendEmail() {
		const url = 'https://jsonplaceholder.typicode.com/posts'
		return fetch(url, { method: 'POST' })
	}
}