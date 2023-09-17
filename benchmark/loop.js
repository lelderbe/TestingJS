import { benchmark } from './benchmark.js';

function loop() {
    for (let i = 0; i < 1_000_000_000; i++) {
        // noop
    }
}

benchmark(loop);
