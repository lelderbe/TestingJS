function ex00(value) {
    switch (true) {
        case value < 0:
            console.log('value < 0');
            break;
        case value === 0:
            console.log('value is zero');
            break;
        case value > 0 && value < 10:
            console.log('value between 0 and 10');
            break;
        default:
            console.log('value >= 10');
            break;
    }
}

ex00(6);
ex00(-1);
ex00(10);
ex00(0);
