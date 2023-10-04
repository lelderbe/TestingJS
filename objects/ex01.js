function ex01() {
    const obj = new Object();
    for (const prop in obj) {
        console.log(prop);
    }
    console.log('obj:', obj);
}

ex01();

function ex02() {
    function User(name) {
        this.name = name;
        this.valueOf = function () {
            return 1;
        };
        this.toString = function () {
            return `name=${this.name}`;
        };
    }

    const user = new User('Joe');
    console.log('user:', user);
    console.log('user.toString():', user.toString());
    console.log('String(user):', String(user));
    const arr = [user, user];
    console.log(arr);
}

ex02();
