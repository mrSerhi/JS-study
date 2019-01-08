"use strict";

function counter() {
    var count = 1;

    return function () {
        return count++;
    }
}

var count = counter();
count();
count();
count();
count();

var anotherCount = counter();
anotherCount();
anotherCount();
anotherCount();
anotherCount();

// =========================================================

var nameVasia = createString(name, 45);

var userName = 'Vasia';

function createString(name, age) {
    var userName = name;
    var userAge = age;
    var greet = '';

    return function () {
        return greet += 'hello ' + userName + '. You have a ' + userAge + ' age.'
    };
}

// var nameVasia = createString('Vasia', 45);

// console.log(nameVasia());

// ============================================================
howHow(5555); // false, numberHujamber === undefined

var numberHujamber = 5555;

howHow(5555); // true

function howHow(pass) {

    return pass === numberHujamber ? true : false;
}

// ==============================================================

var value = 0;

function fun() {
    // var value; on stage init, variable will be created
    if (1) {
        value = true;
    } else {
        var value = false;
    }

    alert(value);
}

// fun();
// console.log( value ); // global value not change!
// ==============================================================

function test() {

    alert(window); // undefined

    var window = 5;

    alert(window); // 5
}

//   test();

// =============================================================

var twelve = sum(6)(6);

function sum(a) {
    return function (b) {
        return a + b;
    }
}
// ==============================================

var buffer = makeBuffer();
// buffer(0);
// buffer(1);
// buffer(0);

// buffer();
// buffer.clear();
// buffer();


function makeBuffer() {
    var acc = '';

    function buff(val) {
        return arguments.length !== 0 ? acc += ' ' + val : console.log(acc);
    }

    buff.clear = function () {
        acc = '';
    };

    return buff;
}
// =================================================================

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

/*
users.sort(byField('name'));
users.forEach(function (user) {
    console.log(user.name);
});

console.log('------------------');

users.sort(byField('age'));
users.forEach(function (user) {
    console.log(user.name);
});
*/


function byField(field) {

    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

// ========================================================

var arr = [1, 2, 3, 4, 5, 6, 7];

var even = filter(arr, function (a) {
    return a % 2 === 0;
}); // [ 2, 4, 6 ]

var rang = filter(arr, inBetween(3, 6));
var areo = filter(arr, inArray([2, 4, 10]));

function inBetween(a, b) {
    return function (num) {
        return num >= a && num <= b;
    };
}

// function inArray(arr) {
//     return function(num) {
//         return arr.indexOf(num) !== -1;
//     };
// }

function inArray(arr) {
    return function (x) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
                return true;
            }
        }
    }
}

function filter(arr, func) {
    var res = [];

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            res.push(arr[i]);
        }
    }

    return res;
};
// ===========================================================

function makeArmy() {

    var shooters = [];

        for (var i = 0; i < 10; i++) {
             function shooter() { // функция-стрелок
                console.log(i); // выводит свой номер
            }
            shooters.push(shooter);
        }
    return shooters;
}

var army = makeArmy();

army[0]();