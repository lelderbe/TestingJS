import { Readable, Writable } from 'stream';
import { expect } from 'chai';

import { CaesarCipherEncode } from './002-caesar-stream.js';

const toString = (cb) => {
	let string = '';
	return new Writable({
		write(chunk, encoding, callback) {
			string += chunk.toString();
			return callback();
		},
		final(callback) {
			cb(string);
		}
	})
};

describe('caesar', () => {

	it('should create an instance of CaesarCipherEncode', () => {
		expect(new CaesarCipherEncode()).to.be.instanceOf(CaesarCipherEncode);
	});

	it('should encode stream', (done) => {
		// arrange
		const shift = 1;
		const encoder = new CaesarCipherEncode(shift);
		const expected = 'bcd';
		const source = Readable.from(['abc']);

		// act
		source.pipe(encoder).pipe(toString((actual) => {
			// assert
			expect(actual).to.be.equal(expected);
			done();
		}));
	});

});
