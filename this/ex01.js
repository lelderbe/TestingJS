globalThis.prop = 'prop from globalThis';

const obj = {
    prop: 'prop from obj',

    f1() {
        console.log('f1:', this.prop);
    },

    f2() {
        return function() {
            console.log('f2:', this?.prop);
        }
    },

    f3() {
        return () => {
            console.log('f3', this?.prop);
        }
    },

    f4() {
        function a() {
            console.log('f4', this?.prop);
        }
        a(); // no context
    },

    f5() {
        const a = () => {
            console.log('f5', this?.prop);
        }
        a(); // arrow functions doesn't have context (this), so when call a() no 'this' is putting on it
    },
}

console.log(prop); // window | global | globalThis

obj.f1();   // this === obj
obj.f2()(); // this === undefined || window in non-strict mode
obj.f3()(); // this === undefined || window in non-strict mode
obj.f4();   // this === obj, but inside of f4() this === undefined || window in non-strict mode
obj.f5();   // this === obj
