function ex01() {
    console.log('\n------------ Simple function wrapper version ---------------');
    function slow(x) {
        const arr = [1, 2, 3, 4, 5];
        if (x > 0 && x < arr.length) {
            return arr[x];
        }
        return -1;
    }

    function wrapper(f) {
        let cache = new Map();

        return function(x) {
            if (cache.has(x)) {
                console.log('cache hit');
                return cache.get(x);
            }

            console.log('cache missed');
            let result = f(x);

            cache.set(x, result);
            return result;
        }
    }

    slow = wrapper(slow);
    console.log(slow(2));
    console.log(slow(1));
    console.log(slow(2));
    console.log(slow(7));
    console.log(slow(7));
}

// ex01();

function ex02() {
    console.log('\n------------ Object methods wrapper version ---------------');
    // сделаем worker.slow кеширующим
    let worker = {
        someMethod() {
            return 1;
        },

        slow(x) {
            // здесь может быть страшно тяжёлая задача для процессора
            return x * this.someMethod(); // (*)
        }
    };

    // тот же код, что и выше
    function wrapper(f) {
        let cache = new Map();

        return function(x) {
            if (cache.has(x)) {
                console.log('cache hit');
                return cache.get(x);
            }

            console.log('cache missed');
            let result = f.call(this, x);

            cache.set(x, result);
            return result;
        };
    }

    console.log(worker.slow(1)); // оригинальный метод работает
    worker.slow = wrapper(worker.slow); // теперь сделаем его кеширующим
    console.log(worker.slow(2));
    console.log(worker.slow(2));
}

// ex02();

function ex03() {
    console.log('\n------------ Несколько аргументов - f.apply() ---------------');

}

ex03();
