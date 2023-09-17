export function benchmark(func, repeat = 1) {
    for (let i = 0; i < repeat; i++) {
        console.time(func.name);
        func();
        console.timeEnd(func.name);
    }
}

export function benchmark2(func) {
    const start = Date.now();
    func();
    console.log(func.name, Date.now() - start);
}
