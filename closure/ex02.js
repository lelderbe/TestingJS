const a = 'static';

function f2() {
    const a = 'dynamic';

    function f1() {
        console.log(a);
    }

    f1();
}

f2();
