// import json object
const cfg = require('../config');

cfg.SIMPLE = 'none';

if (module.parent) {
	console.log('text from module 2 - running as a module');
} else {
	console.log('text from module 2 - executed itself');
}
