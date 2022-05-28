import { Transform } from 'stream';
import { encode } from './001-caesar.js';

export class CaesarCipherEncode extends Transform {
	constructor(shift) {
		super();
		this.shift = shift;
	}

	_transform(chunk, encoding, callback) {
		this.push(encode(this.shift, chunk.toString()));
		callback();
	}

}