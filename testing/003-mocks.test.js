import { expect } from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import { APIClient } from './003-mocks.js'

const getRandomPhotoResponse = () => ({ id: "Dwu85P9SOIk", urls: { raw: "xxx" } });

describe('APIClient', () => {
	describe('getRandomPhoto', () => {
		it('should return random photo data', async () => {
			const clientId = 'clientId'
			const client = new APIClient(clientId, axios)
			const requestMock = sinon.mock(axios)
				.expects('request')
				.once()
				.resolves(getRandomPhotoResponse())

			const actual = await client.getRandomPhoto()

			expect(actual).to.be.a('string');

			requestMock.verify();

			const [options] = requestMock.firstCall.args;
			expect(options).to.have.nested.property('headers.authorization').that.includes(clientId);
		});

		it('should return an error if any', async () => {
			const clientId = 'clientId';
			const error = new Error();
			error.response = {
				status: 401,
			};
			const http = {
				request: sinon.stub().onFirstCall().rejects(error),
			};

			const client = new APIClient(clientId, http);

			let err;
			try {
				await client.getRandomPhoto();
			} catch (e) {
				err = e;
			}

			expect(err).to.have.nested.property('response.status', 401);

			// or:
			// await expect(client.getRandomPhoto()).to.eventually.rejectedWith(error);

		});
	});
});

