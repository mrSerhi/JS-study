"use strict";
console.log('Hello Loops!');

var users = ['Ani', 'Bob', 'Tim', 'Robin', 'Djeck'];
var localCopyUsers = users.slice();
for(var i = 0; i < users.length; i++) {
    localCopyUsers[i]+= ' user #' + i;
    console.log(localCopyUsers[i]);
    // console.log(localCopyUsers);
}
console.log(localCopyUsers);

for(var j = users.length -1; j >= 0; j--) {
    console.log(users[j]);
}

var num = [10, 20, 30, 40, 50, 60];
for(var d = 0; d < num.length; d++) {
    if (num[d] === 50) {
        break;
    } else if (num[d] === 20) {
        continue;
    }
    console.log(num[d]);
}

var i = 0;
var arr = []; // 10 - {}
while(i < 10) {
    var object = new Object();
    arr.push(object);
    i++;
}
console.log(arr);

var userYearsOfBorn = [1990, 1975, 2017, 2016, 2018, 1988, 2000, 2004, 1955, 2010, 2012, 2008];
var age = [];
var trueAge = [];
var falseAge = [];
for (var i = 0; i < userYearsOfBorn.length; i++) {
    var dateNow = new Date();
    age.push( dateNow.getFullYear() - userYearsOfBorn[i] );
}
// console.log(trueAge);
for (var j = 0; j < age.length; j++) {
    if (age[j] >= 18) {
        console.log('User №' + j + ' have ' + age[j] + ' age');
        checkUserAge(age[j]);
    } else {
        // continue;
        checkUserAge(age[j]);
    }
}

function checkUserAge(item) {
    return item >= 18 ? trueAge.push(item) : falseAge.push(item);
}

console.log(trueAge);
console.log(falseAge);