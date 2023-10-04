// No iterator for object
{
    const obj = {};
    console.log('[Symbol.iterator] of {}:', obj[Symbol.iterator]);    
}

// Arrays have iterators
{
    const obj = [];
    console.log('[Symbol.iterator] of []:', obj[Symbol.iterator]);
}

// Custom iterator
{
    const obj = {
        values: [3, 2, 1],

        [Symbol.iterator]() {
            const self = this;
            let index = 0;

            return {
                next() {
                    return {
                        done: index === self.values.length,
                        value: index === self.values.length ? undefined : self.values[index++],
                    };
                }
            };
        }
    };

    console.log('[Symbol.iterator] of custom {}:', obj[Symbol.iterator]);
    const iterator = obj[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    for (const item of obj) {
        console.log(item);
    }
    for (const item of obj) {
        console.log(item);
    }
}

// Custom iterator v2 (class version)
{
    class CustomIterableObj {
        constructor() {
            this.values = [3, 2, 1];
        }

        [Symbol.iterator]() {
            const self = this;
            let index = 0;

            return {
                next() {
                    return {
                        done: index === self.values.length,
                        value: index === self.values.length ? undefined : self.values[index++],
                    };
                }
            };
        }
    }

    const obj = new CustomIterableObj();

    console.log('[Symbol.iterator] of custom {}:', obj[Symbol.iterator]);
    const iterator = obj[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    for (const item of obj) {
        console.log(item);
    }
    for (const item of obj) {
        console.log(item);
    }
}
