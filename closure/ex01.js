const a = 'static';

/**
 * Лексическое окружение для функции определяется местом в коде, где функция была создана
 */
function f1() {
    console.log(a);
}

function f2() {
    const a = 'dynamic';

    f1();
}

f2();
