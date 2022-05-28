export function encode(shift, data) {
	const result = [];

	for (let char of data) {
		result.push(String.fromCharCode(char.charCodeAt(0) + shift));
	}

	return result.join('');
}
