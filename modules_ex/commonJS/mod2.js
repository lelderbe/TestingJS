console.log('[mod2] start');

const mod1 = require('./mod1');

mod1();

module.exports = () => console.log('[mod2] exported function');
