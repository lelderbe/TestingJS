import { EventEmitter } from 'events';

const emitter = new EventEmitter();

function testEvent(data, count) {
	console.log('[testEvent] triggered', 'data:', data, 'count:', count);
}

// watch

emitter.on('newListener', (name, f) => console.log('***', 'Listener', name, 'added with function:', f));
emitter.on('removeListener', (name, f) => console.log('***', 'Listener', name, 'removed with function:', f));

// subscribe

emitter.on('test', (data, count) => console.log('[on] test triggered', 'with:', data, 'count:', count));
// addListener (old) === on
emitter.addListener('test', () => console.log('[addListener] test triggered'));
emitter.once('test', (data) => console.log('[once] Hello from once!', data));
emitter.on('test', testEvent);
emitter.prependListener('test', () => console.log('[prependListener] Мне только спросить'));
console.log();

console.log('emitter.getMaxListeners():', emitter.getMaxListeners());
console.log('emitter.listenerCount():', emitter.listenerCount());
console.log();

// handle events

emitter.emit('test', 'some data', 12345);
console.log();
emitter.emit('test', '1xbet', 777);
console.log();

// try to remove arrows
emitter.removeListener('test', () => {});
emitter.removeListener('test', console.log);
emitter.emit('test', 'are u alive?', 42);
console.log();

// remove 'test' with function testEvent
emitter.removeListener('test', testEvent);
emitter.emit('test', 'and now?', 21);
console.log();

// remove all on 'test2' event
emitter.removeAllListeners('test2');
console.log('removeAllListeners(test2)');
emitter.emit('test', 'anyone?????', 110101010);
console.log();

console.log(emitter.listeners('test'));
console.log();

// remove all on any event
emitter.removeAllListeners();
console.log('removeAllListeners()');
emitter.emit('test', 'anyone?????', 110101010);
console.log();

// ---------------------------------------------------------------

class MyEmitter extends EventEmitter {
	constructor() {
		super();
	}
}

const ee = new MyEmitter();

console.log(ee.getMaxListeners());
