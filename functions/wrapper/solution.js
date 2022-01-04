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

// ex03();

function ex04() {
	console.log('\n------------ Заимствование метода ---------------');
	function f1() {
		console.log(arguments);
		console.log([].join.call(arguments, '-'));
	}
	f1(1, 2, 3);
}

// ex04();

function ex05() {
	console.log('\n------------ Task: Декоратор-шпион ---------------');
	function spy(f) {
		function wrapper(...args) {
			wrapper.calls.push(args);
			// return f(...args);
			// return f.apply(this, ...args);
			return f.apply(this, arguments);
		}
		wrapper.calls = [];
		return wrapper;
	}

	function work(a, b) {
		console.log(a + b); // произвольная функция или метод
	}

	work = spy(work);

	work(1, 2); // 3
	work(4, 5); // 9

	console.log(work.calls);
	for (let args of work.calls) {
		console.log('call:' + args.join()); // "call:1,2", "call:4,5"
	}
}

// ex05();

function ex06() {
	console.log('\n------------ Task: Задерживающий декоратор ---------------');

	function f(x) {
		console.log(x);
	}

	function delay(f, ms) {
		return function() {
			setTimeout(() => f.apply(this, arguments), ms);
		}
	}

	// создаём обёртки
	let f1000 = delay(f, 1000);
	let f1500 = delay(f, 1500);

	f1000("test"); // показывает "test" после 1000 мс
	f1500("test"); // показывает "test" после 1500 мс
}

ex06();
