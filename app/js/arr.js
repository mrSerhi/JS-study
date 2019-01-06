'use strict';

var arr, goods, styles, all, numbers;

arr = ['apple', 'orange', 'banans'];
goods = ['boots', 'chap', 'short', 'bag', 'sweeter'];
styles = ['Djas', 'bluze'];
all = ['test', 2.14, 244, true, 'age', {
    name: 'serhii'
}];
numbers = [10, 4, 3, 2, 6, 8, 5];

arr[arr.length] = 'vodka';
arr.push(24);
var apple = arr.shift();
arr.unshift(apple, 'coconus')
// ---------------------------------
goods[goods.length] = 'computer';
goods.push('coffie', 'coconats');
// ---------------------------------------
var djaz;

styles[styles.length] = 'Rock-n-Roll';
styles[styles.length - 2] = 'Classic';
djaz = styles.shift();
styles.unshift('Rap', 'Reggi');
// ---------------------------------------
var rand, randVal, min, max;

max = goods.length;
rand = Math.floor(Math.random() * max);

randVal = goods[rand];
// console.log(randVal)
// ---------------------------------------
// calc();
function calc() {
    var arr = [];
    var num;
    var sum = 0;

    while (true) {
        num = prompt('Number: ', 2);

        if (isNaN(num) || !num) {
            for (var j = 0; j < arr.length; j++) {
                sum += arr[j];
            }

            break;
        }

        arr.push(+num);
    }
    console.log(arr);
    console.log('Sum is - ' + sum);
}
// ------------------------------------------------
function findValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
// console.log( findValue(all, 244) );
// ------------------------------------------------
// console.log( filterRange(numbers, 2, 4) );

function filterRange(arr, a, b) {
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= a && arr[i] <= b) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}
// ------------------------------------------------
var sortArr = sort(numbers);
var sortAnother = numbers.sort(forSort);

function forSort(a, b) {
    return a - b;
}

function sort(arr) {
    return arr.sort(function (a, b) {
        return a < b ? -1 : 1;
    });
}
// -----------------------------------------------------
var obj = {
    name: 'serhii',
    age: 28,
    gender: 'male'
};
// var keys = Object.keys(obj);
// var objValues = Object.values(obj);
// console.log(getObjData(obj));

function getObjData(obj) {
    var val, prop;

    prop = Object.keys(obj);
    val = Object.values(obj);

    for (let i = 0; i < prop.length; i++) {
        for (let j = i; j < val.length; j++) {
            console.log(prop[i] + ' | ' + val[i])
        }
    }
}
// ------------------------------------------
var line = '#';

// Tringle(line);

function Tringle(line) {
    var ttr = '';

    for (let i = line.length; i <= 7; i++) {

        for (let j = i; j > 0; j--) {

            ttr += line;

        }
        console.log(ttr)
    }
}
// ---------------------------------------------

var Nodes = {
    classes: 'open show'
};

// addClassName(Nodes, 'hide');
// addClassName(Nodes, 'goAhead');
// addClassName(Nodes, 'toggle');
// addClassName(Nodes, 'hide');

function addClassName(obj, className) {

    // for (var key in obj) {
    //     if (key === 'classes') {
    //         if (obj[key].indexOf(className) === -1) {
    //             return obj[key] += ' ' + className;
    //         } else {
    //             console.warn('Class is exist');
    //         }
    //     }
    // }

    // var splitStr = obj.classes.split(' ');

    // for (var i = 0; i < splitStr.length; i++) {
    //     if ( splitStr.indexOf(className) === -1 ) {
    //         splitStr.push(className);
    //         break;
    //     } else {
    //         console.log('class exsist')
    //         break;
    //     }
    // }
    // obj.classes = splitStr.join(' ');

    var objClass = obj.classes ? obj.classes.split(' ') : [];

    for (var i = 0; i < objClass.length; i++) {
        if (objClass[i] === className) return;
    }

    objClass.push(className);

    obj.classes = objClass.join(' ');
}

// ====================================================

var str = 'section-comfort-style';
var strOne = 'block-delete';
var strTwo = 'nav-bar-list';
var strthre = '-webkit-transition';

// console.log(toCamelCase(str));
// console.log(toCamelCase(strOne));
// console.log(toCamelCase(strTwo));
// console.log(toCamelCase(strthre));

function toCamelCase(str) {
    var chank = str.split('-');

    for (let i = 0; i < chank.length; i++) {
        chank[i] = chank[i].charAt(0).toUpperCase() + chank[i].slice(1);
    }

    return chank.join('');
}
// =================================================

var objClass = {
    class: 'hidden open hidden menu menu hidden hidden hidden'
};

removeClass(objClass, 'hidden')

// console.log(objClass.class)

function removeClass(obj, cl) {
    var classArr = obj.class.split(' ');

    function search() {
        for (let i = 0; i < classArr.length; i++) {
            if (classArr[i] === cl) {
                classArr.splice(i, 1);
                search();
                // i--;
            }
        }
    }

    for (let i = 0; i < classArr.length; i++) {
        if (classArr[i] === cl) {
            classArr.splice(i, 1);
            // search();
            i--;
        }
    }

    // search();
    obj.class = classArr.join(' ');
}
// ================================================

var numeric = [5, 3, 8, 1];

// filterRangeInPlace(numeric, 1, 4); // [1, 3]

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (a > item || item > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
// =========================================================

var lolo = [5, 2, 1, -10, 8];

// sortFromEnd(lolo); // [ 8, 5, 2, 1, -10 ]

function sortFromEnd(arr) {

    arr.sort(function (a, b) {
        return b - a;
    });
}
// ======================================================

var nodesNew = ["HTML", "JavaScript", "CSS"];

var sortNodes = sortNode(nodesNew); // [ "CSS", "HTML", "JavaScript" ]

function sortNode(arr) {
    var nodes = arr.slice().sort();

    return nodes;    
}
// ==========================================================

var anSort = [1, 2, 3, 4, 5]; // [ 3, 4, 2, 1, 5 ]

function sortir(a, b) {
    return Math.random() - 0.5;
}

anSort.sort(sortir);
// =======================================================

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(sortObjProp);
// showPropName(people);

function sortObjProp(personA, personB) {
    return personA.age - personB.age;
}

function showPropName(arr) {

    for(let i = 0; i < arr.length; i++) {
        console.log("Name is - " + arr[i].name);
    }
}


