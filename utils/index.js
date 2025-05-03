import { plural } from './plural.js';

console.log(1, plural(1, ['стул', 'стула', 'стульев']));
console.log(2, plural(2, ['стул', 'стула', 'стульев']));
console.log(5, plural(5, ['яблоко', 'яблока', 'яблок']));
