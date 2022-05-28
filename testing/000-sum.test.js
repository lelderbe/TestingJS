import { sum } from './000-sum.js';
import { expect } from 'chai';

describe('sum', () => {

	describe('sum()', () => {
		it('should be a function', () => {	// if not TypeScript
			expect(sum).to.be.a('function');
		});

		it('should sum two numbers', () => {
			// arrange (prepare)
			const a = 1;
			const b = 2;
			const expected = 3;

			// act
			const actual = sum(a, b);

			// assert
			expect(actual).to.be.equal(expected);
		});

		it('should sum zero with zero', () => {
			// arrange
			const a = 0;
			const b = 0;
			const expected = 0;

			// act
			const actual = sum(a, b);

			// assert
			expect(actual).to.be.equal(expected);
		});

		it.skip('test something else', () => {

		});
	});

});
