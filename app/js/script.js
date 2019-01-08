"use strict";

var valia = {
    name: 'Valia'
};

var kirill = {
    name: 'kirill'
};

valia.hello = sayHi;
kirill.hello = sayHi;

valia.hello();
kirill.hello();

function sayHi() {
    return 'Hello ' + this.name;
}
// ===============================================

var lolo = ['a', 'b'];

// lolo.push(function() {console.log(this)});

// lolo[2](); // context in to array

var userName = 'Huy Sobachiy';

var hey = {
    userName: 'Glod',
    export: function () {
        return this
    },
    lol: this // refer on to global scope (window)
};

hey.lol.userName; // Huy Sobachiy

var babila = {
    name: 'Petia',
    export: function () {
        return {
            value: this
        };
    }
};

var kolia = {
    name: 'Kolia'
};

kolia.export = babila.export;


kolia.export().value.name; // kolia
babila.export().value.name; // petia
// =================================================

var calc = {
    read: function () {
        this.numbers = []
        for (let i = 0; i < 2; i++) {
            var prom = prompt('Number #1', 5);
            this.numbers.push(parseInt(prom));
        }

        return this.numbers;
    },
    sum: function (a, b) {
        return this.numbers.reduce(function (acc, cur) {
            return acc + cur;
        });
    },
    mul: function () {
        return this.numbers.reduce(function (acc, cur) {
            return acc * cur;
        });
    }

};
// calc.read();
// console.log(calc.sum());
// console.log(calc.mul());
// ===================================================

var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        alert(this.step);
    }
};
// ladder.up().up().up().down().showStep();
// ========================================================

function Calculator() {
    this.answers = [];
}

Calculator.prototype.read = function () {
    for (let i = 0; i < 2; i++) {
        var quest = +prompt('Number is', 5);
        this.answers.push(quest);
    }
}

Calculator.prototype.sum = function () {
    return this.answers[0] + this.answers[1];
}

Calculator.prototype.mul = function () {
    return this.answers[0] * this.answers[1];
}

var culc = new Calculator();
// culc.read();
// console.log(culc.sum());
// console.log(culc.mul());
// =================================================

function Acc(num) {
    this.value = num;
    this.read = function () {
        return this.value += parseInt(prompt('Number', 5));
    };
}

var accumo = new Acc(1);
/*
accumo.read();
accumo.read();
console.log(accumo.value);
*/
// =======================================================

function Fun() {

    var methods = {
        "+": function (a, b) {
            return a + b;
        },
        "-": function (a, b) {
            return a - b;
        }
    };

    this.calculate = function (str) {
        var splitStr, numF, numS, operator;

        splitStr = str.split(' ');
        numF = +splitStr[0];
        operator = splitStr[1];
        numS = +splitStr[2];

        return methods[operator](numF, numS);
    };

    this.addMethod = function (name, func) {
        if (!methods.name) {
            methods[name] = func;
        } else {
            console.warn('Method used!');
            return false;
        }
    };
}

var sum = new Fun();
sum.addMethod('**', function (a, b) {
    return Math.pow(a, b);
});
sum.addMethod('/', function (a, b) {
    return a / b;
});
sum.addMethod('/', function (a, b) {
    return a / b;
});
sum.addMethod('+', function (a, b) {
    return a + b;
});

// console.log(sum.calculate('2 + 2'));
// console.log(sum.calculate('2 ** 3'));
// console.log(sum.calculate('21 / 3'));