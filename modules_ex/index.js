// import module from js file
const mod1 = require('./mod1');

// import json object
const cfg = require('./config');

console.log('cfg:', cfg, 'cfg.SIMPLE:', cfg.SIMPLE);

// import module from folder - look for package.json and "main" option, if not - look for index.js
const mod2 = require('./mod2');

// mod2 load cached cfg object and modify it
console.log('cfg:', cfg, 'cfg.SIMPLE:', cfg.SIMPLE);

console.log('this text from index.js');

console.log('mod1:', mod1);
console.log('mod1.x:', mod1.x);

// console.log(module);

