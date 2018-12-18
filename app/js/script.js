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
var arr = [];
while(i < 10) {
    var object = new Object();
    arr.push(object);
    i++;
}
console.log(arr);