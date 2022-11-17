const moduleIIFE = (() => {
	let value;

	return {
		getValue() {
			return value;
		},

		setValue(newValue) {
			if (typeof newValue === 'string') {
				value = newValue;
			}
		}
	};
})();

console.log(moduleIIFE.getValue());
moduleIIFE.setValue('abc');
console.log(moduleIIFE.getValue());
moduleIIFE.setValue(42);
console.log(moduleIIFE.getValue());
