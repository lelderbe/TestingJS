import { encode } from './001-caesar.js';
import { expect } from 'chai';

describe('caesar', () => {

	describe('encode', () => {
		it('should be a function', () => {	// if not TypeScript
			expect(encode).to.be.a('function');
		});

		it('should encode uppercase letters', () => {
			// arrange (prepare)
			const shift = 1;
			const input = 'ABC';
			const expected = 'BCD';

			// act
			const actual = encode(shift, input);

			// assert
			expect(actual).to.be.equal(expected);
		});

		it('should encode lowercase letters', () => {
			// arrange
			const shift = 1;
			const input = 'abc';
			const expected = 'bcd';

			// act
			const actual = encode(shift, input);

			// assert
			expect(actual).to.be.equal(expected);
		});

		it.skip('test something else', () => {

		});
	});

});
