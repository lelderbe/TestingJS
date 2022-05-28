export class APIClient {
	constructor(clientId, http) {
		this.http = http;
		this.clientId = clientId;
		this.baseUrl = 'https://api.unsplash.com';
	}

	async getRandomPhoto() {
		const options = {
			method: 'get',
			url: `${this.baseUrl}/photos/random`,
			headers: {
				authorization: `Client-ID ${this.clientId}`
			}
		};
		return this.http.request(options).then(data => data.urls.raw)
	}
}