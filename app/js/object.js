'use strict';

var userSerhii = {
    firstName: 'Serhii',
    lastName: 'Vaganadze',
    age: 30,
    merriage: false,
    favoriteBrandsOfCars: ['audi', 'volvo', 'chevrole', 'bilaz'],
    getJob: function() {
        return this.job = prompt('Your job is?', 'Mechanic');
    }
};
userSerhii.getUserYearOfBorn = function() {
    var dateNow = new Date();
    return this.yearOfBorn = dateNow.getFullYear() - this.age;
};
userSerhii.getUserName = function() {
    var name = prompt('What is your name?', 'Serhii');
        if (name) {
            this.firstName = name;
        } else if (name === null) {
            this.firstName = null;
        } else {
            this.firstName = '';
        }
};

console.log(userSerhii);
