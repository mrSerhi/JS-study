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

// another wey to creation the Objects

// the creating methods like in the prototype .__proto__
var protoCat = {
    calculateAge: function() {
        return (2018 - this.yearOfBorn) * 2;
    }
};

var barsik = Object.create(protoCat); // empty object with .__proto__
barsik.yearOfBorn = 2012;
barsik.name = 'Barsik';
barsik.weight = 4;
barsik.catAge = barsik.calculateAge();

// all properties is read-only. That dosn't changes
var fity = Object.create(protoCat, {
    name: { value: 'Fity' },
    yearOfBorn: { value: 2008 },
    weight: { value: 6 },
    catAge: { value: null }
});
//fity.catAge = fity.calculateAge(); // fity.catAge is read-only!!!
//fity.weight = 2; // read only , not change...
fity.age = fity.calculateAge(); 

//primitives
var first = 10;
var second = first; // 10
first = 20; // 20
// objcts
var objFirst = {
    name: 'Pipo',
    age: 26,
    city: 'Bueno-saires'
}
var objTwo = objFirst; //referens to objFirst
objFirst.age = 30;
objTwo.age = 45; // change the two objects
console.log(objTwo); // this.age = 45
console.log(objFirst); // this.age = 45

// function with primitivs and object
var newVar = 100;
var tratataObject = {
    age: 27,
    country: 'Israel'
};

function change(a, b) {
    a && b ? b.country = 'Ukraine' : null;
    a = a || 30;
    return a / 2;
   
}
change(newVar, tratataObject);
console.log(newVar); // 100
console.log(tratataObject.country); // ukraine
console.log(change()); // 15