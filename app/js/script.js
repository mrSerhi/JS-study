"use strict";
var userName = prompt('what is your name?', 'Serhii');

function getDataFromUser(name){
    var person = new Object();
    if (name) {
        person.name = name;
        var userLastName = prompt('What is your last name?', 'Vilis');
        if (userLastName) {
            person.lastName = userLastName;
            var userAge = prompt('What is your age?', 18);
            if (userAge < 18 || userAge === '') {
                console.log('Your age bellow 18 or type something =)')
                return false;
            } else {
                person.age = userAge;
                var userMerriage = confirm('You are in merriage?');
                person.merriage = userMerriage ? userMerriage : false;
            }
        } else if (userLastName === null) {
            person.lastName = null;
            console.log('Last name not specified!Goodluck');
            return false;
        } else {
            person.lastName = '';
            console.log('Try again and enter your last name, please!');
            return false;
        }
    } else if (name === null) {
        console.log('Goodby User!');
        return false;
    } else {
        console.log('try to enter the data, please');
        return false;
    }
     return person;
}
console.log(getDataFromUser(userName));
// getDataFromUser(userName);