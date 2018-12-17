"use strict";
var userName = prompt('what is your name?', 'Serhii');

function getDataFromUser(name) {
    var person = new Object();
    var dateNow = new Date();

    function getUserName(name) {
        if (name) {
            person.name = name;
            getLastName();
        } else if (name === null) {
            console.log('Goodby User!');
            return false;
        } else {
            console.log('try to enter the data, please');
            return false;
        }
    }

    function getLastName() {
        var userLastName = prompt('What is your last name?', 'Vilis');
        if (userLastName) {
            person.lastName = userLastName;
            getUserAge();
        } else if (userLastName === null) {
            person.lastName = null;
            console.log('Last name not specified!Goodluck');
            return false;
        } else {
            person.lastName = '';
            console.log('Try again and enter your last name, please!');
            return false;
        }
    }

    function getUserAge() {
        var userAge = prompt('What is your age?', 18);
        if (userAge < 18 || userAge === '') {
            console.log('Your age bellow 18 or type something =)')
            return false;
        } else {
            person.age = userAge;
            getMerriageStatus();
            getYearOfBorn();
            userPreferBrandOfCars();
        }
    }

    function userPreferBrandOfCars() {
        var getBrands = prompt('What the prefered brand of cars?', 'audi, BMW, volvo');
        if (getBrands) {
            person.preferBrendOfCar = getBrands.split(',');
        } else if (getBrands === null || getBrands === '') {
            person.preferBrendOfCar = [];
            return false;
        }
    }

    function getMerriageStatus() {
        var userMerriage = confirm('You are in merriage?');
        person.merriage = userMerriage ? userMerriage : false;
    }

    function getYearOfBorn() {
        person.yearOfBorn = dateNow.getFullYear() - person.age;
    }

    getUserName(userName);
    return person;
}
var firstUserName = getDataFromUser(userName);
var secondUserName = getDataFromUser(userName);
console.log(firstUserName);