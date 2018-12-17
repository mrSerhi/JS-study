"use strict";
var userNames = ['Djey', 'Dilan', 'Ban', 'Olly', 'Smith'];
var colors = new Array('green', 'black', 'gray', 'orange', 'yellow');
console.log(userNames);
console.log(colors);
// console.log(userNames.length);
// console.log(userNames.length === colors.length);
var userDilan = ['Dilan', 1990, 'teacher', false];
var userBill = [];
userBill[0] = 'Bill';
userBill[1] = 1998;
userBill.push('designer', false);



function checkProf(arr) {
    if (arr.indexOf('teacher') > -1) {
        return true;
    } else {
        return false;
    }
}
function teacherOrNot(bool) {
    console.log(bool ? 'yes, hi is a teacher' : 'no, hi has diff profession');
}
// console.log(checkProf(userDilan) ? 'yes, hi is a teacher' : 'no, hi has diff profession');
teacherOrNot(checkProf(userBill));
teacherOrNot(checkProf(userDilan));

// array methods
// .concat()
var mainColors = ['red', 'green', 'blue'];
var secondColors = ['black', 'orange', 'yellow'];
var colorsTogether = mainColors.concat(secondColors); // returns diff array(copy)
console.log(colorsTogether);
console.log(mainColors); // without changes

// .fill()
var num = [1, 2, 3, 4, 5];
num.fill('element');
console.log(num);

//.filter(callbackfunction)
function bitNum(el) {
    return el > 40 && el < 90;
}
var randNumbers = [24, 44, 145, 1000, 32, 89, 65, 66, 51];
var numForMe = randNumbers.filter(bitNum); // returns the new array
console.log(numForMe);

// .findIndex(callbackfunc)

function findFruit(el) {
    return el === 'orange';
}

var fruits = ['apple', 'orange', 'ananas', 'mathmelow'];
var orange = fruits.findIndex(findFruit); // returns position elm in array
console.log(orange); // position 1

//.forEach(callbackfn)
var names = ['Billy', 'Geyts', 'Lolita', 'Egor', 'Svetlana'];
function profUsersDec(el) {
    switch(el) {
        case 'Billy':
            console.log('Billy is a teacher');
            break;
        case 'Geyts':
            console.log('Geyts is a IT director');
            break;
        case 'Lolita':
            console.log('Lolita is a doctor');
            break;
        case 'Egor':
            console.log('Egor is a bilder');
            break;
        case 'Svetlana':
            console.log('Svetlana is a dancer');
            break;
        default: 
            console.log('Hmmm...Not allowed other professions');
            break;
    }
}
names.forEach(profUsersDec); //Calls a function for each array element

// .includes() return true or false
var brandsOfCar = ['audi', 'BMW', 'volvo', 'Geep', 'Chevrole'];
if (brandsOfCar.includes('volvo')) {
    console.log('Finded car with brand name - Volvo');
} else {
    console.log('Not found car with that brand');
}

// Array.isArray check object if object is array or not
console.log(Array.isArray(brandsOfCar)); // returns true because brandsOfCar is array

//.join all ele-t in array join into string
var countries = ['ukraine', 'bielorus', 'Irac', 'USA', 'German'];
var countyStr = countries.join(', '); // ', ' <- it's separator
var arr = countyStr.split(', '); // spliting string to array
console.log(arr, countyStr);

// .toString() convert all el-ts from array to string with separator(,)
var lol = ['best', 'hero', 'you', 'are', 'not'];
var heroStr = lol.toString();
console.log(heroStr);

// .map(callbackfn)
var elements = [10, 20, 30, 40, 50, 60];
function createHulfElement(el) {
    return el / 2;
}
var hulfElement = elements.map(createHulfElement); // returns new array with elements
console.log(hulfElement);

//.pop() Removes the last element of an array, and returns that element
var coutriesCopy = countries.concat(); // copy array
var lastElement = coutriesCopy.pop(); // deleted element
console.log(coutriesCopy);
console.log(countries);
console.log(lastElement);

//.reduce(callbackfn)  Returns the accumulated result from the last call of the callback function
var floatNums = [10.7, 14.7, 16.6, 20.3, 28.4];
function changeNum(init, current) {
    return init + Math.round(current);
}
var sum = floatNums.reduce(changeNum);
console.log('sum of reduced numbers is - ' + Math.floor(sum));

// .slice(init, to which) return the new array between to separete part
var sele = ['50%', '40%', '30%', '20%', '100%'];
var seleOne = sele.slice(2, -1); // [30%, 20%]
var seleAll = sele.slice(); // same array that sele ['50%', '40%', '30%', '20%', '100%']
var seleThree = sele.slice(0 , -2); // ['50%', '40%', '30%']
console.log(seleThree);

//.sort(callbackfn)
var unSort = ['block', 'apple', 'clever', 'disnaylend', 'globus'];
var intNum = [10, 5, 14, 20, 100, 55, 44, 3];
var sortElem = unSort.sort(function(a, b) {
    return a > b;
});
var sortIntNumbers = intNum.sort(function(a, b) {
    return a > b;
});
console.log(sortIntNumbers);

//.valueOf() returns same value in array from self
var userEnter = prompt('Write some numbers', '20, 30, 40');
function sliceFromUser(data) {
    return data ? data.split(',') : false;
}
var arrFromUser = sliceFromUser(userEnter);
console.log(arrFromUser);

console.log(userEnter.valueOf()); // returns the string 20, 30, 40