"use strict";
console.log('Hello world!');

var jhon = {
    name: 'Jhon',
    lastName: 'Lobonoso',
    yearOfBorn: 1970
};
jhon.dateNow = function() {
    var date = new Date();
    return date.getFullYear();
};
jhon.getAge = function() {
    this.age = this.dateNow() - this.yearOfBorn;
};
jhon.dateNow();
jhon.getAge();
console.log(jhon.age, jhon.dateNow());

var miki = {
    name: 'Mikki',
    lastName: 'Filini',
    yearOfBorn: 1989
};
console.log(miki);

//constructor

var Person = function(name, lastName, age, merriage, brands) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.merriage = merriage;
    this.brands = brands;
};
Person.prototype.getYearOfBorn = function() {
    this.dateNow = new Date();
    this.yearOfBorn = this.dateNow.getFullYear() - this.age;
};
Person.prototype.sortBrandOfCars = function () {
    if (Array.isArray(this.brands)) {
        this.brands.sort(function(a, b) {
            return a > b && a < b;
        });
    } else {
        this.brands = [];
    }
};

var lida = new Person ('Lidia', 'Vilisenko', 38, true, ['audi', 'volvo', 'subaru', 'geep']);
var kirill = new Person ('Kirill', 'Baluev', 29, false, ['aston-martin', 'belaz', 'bmw', 'mercedes', 'VW']);
var vika = new Person ('Viktoria', 'Inischenko', 45, true);
lida.sortBrandOfCars();
lida.getYearOfBorn();
kirill.getYearOfBorn();
kirill.sortBrandOfCars();
vika.sortBrandOfCars();
console.log(lida);
console.log(kirill);
console.log(vika);