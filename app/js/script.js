"use strict";
var years = [1990, 1980, 1987, 2005, 2010, 1999];

function createArrayWithAge(arr, fn, bool) {
    var age = [];
    for (var i = 0; i < arr.length; i++) {
        age.push(fn(arr[i]));
    }
    if (bool === true) {
        return age.sort(function(a, b) {
            return a > b;
        });
    } else {
        return age;
    }
    
}

function age(item) {
    var date = new Date();
    return date.getFullYear() - item;
}

function fullAge(item) {
    return item >= 18;
}

var userAge = createArrayWithAge(years, age); // [ 28, 38, 31, 13, 8, 19 ]
var userAgeSort = createArrayWithAge(years, age, true); // [ 8, 13, 19, 28, 31, 38 ]
var checkUserWithFullAge = createArrayWithAge(userAge, fullAge);
console.log(userAge);
console.log(userAgeSort);
console.log(checkUserWithFullAge);

//example first class function returns function
var Vegetables = ['melon', 'watermelon', 'avocado', 'cabbage', 'potato', 'strawberry', 'cucumber'];
function defineVegetables(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0; i < arr.length; i++) {
            return function(nameStore) {
                if (nameStore === 'SILPO') {
                    console.log(nameStore + ' has a Vegetables in the assortment: melon, avocado and strawberry');
                } else if (nameStore === 'ATB') {
                    console.log(nameStore + ' has a Vegetables in the assortment: watermelon and cabbage');
                } else {
                    console.log(nameStore + ' has a Vegetables in the assortment: potato and cucumber');
                }
            }
        }
    } else {
        return false;
    }
}
var foodBasket = defineVegetables(Vegetables);
var silpo = foodBasket('SILPO');
var atb = foodBasket('ATB');
var bonus = foodBasket('BONUS');


// IIFE

(function (item) {
    var rand = Math.round(Math.random() * 10);
    console.log(rand >= 4 && rand <= 10);
    console.log(rand - item);
})(3);

// closures

function interviewQuest(prof) {
    var a, b, c;
    a = ' can you explain, what is UX?';
    b = ' What the subject do you teach?';
    c = ' What do you do now?';
    return function(name) {
        if (prof === 'designer') {
            console.log('Hello ' + name + '.' + a);
        } else if (prof === 'teacher') {
            console.log('Hello ' + name + '.' + b);
        } else {
            console.log('Hello. ' + c);
        }
    };
}

function retirementAge(age) {
    var date = new Date();
    function getUserAge(year) {
        var userAge = date.getFullYear() - year;
        console.log('Now is ' + date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay() + '. ' 
         + 'Until retirement left ' + (age - userAge));
    }
    return getUserAge;
}

var designer = interviewQuest('designer');
var teacher = interviewQuest('teacher');
var anotherProffesion = interviewQuest('mechanic');

var marinaDesigner = designer('Marina');
var fedorTeacher = teacher('Fedor');
var uraMechanic = anotherProffesion('Ura');
// --------------------------------------------------------
var retirementGermany = retirementAge(65);
var Gergofflin = retirementGermany(1970);
var Viola = retirementGermany(1990);

var retirementUS = retirementAge(67);
var Tamilla = retirementUS(1970);
var Tippy = retirementUS(1990);

//----------------------------------------------------------
// CALL, APPLY, BIND
var peter = {
    name: 'Peter',
    lastName: 'Grinfild',
    age: 35,
    brands: [],
    getData: function(country, cash) {
        if (country === 'Ukraine') {
            console.log('Hello, my name is ' + this.name + '. I\'m ' + this.age + ' year old. In ' + country + ' cash is - ' + cash)
        } else if (country === 'Russia') {
            console.log('Hello, my name is ' + this.name + '. I\'m ' + this.age + ' year old. In ' + country + ' cash is - ' + cash)
        } else {
            console.log('Hello, my name is ' + this.name + '. I\'m ' + this.age + ' year old. In ' + country + ' cash is - ' + cash)
        }
    },
    checkBrand: function(arr, fn) {
        for (var i = 0; i < arr.length; i++) {
                this.brands.push(fn(arr[i]));
        }
    },
    brand: function(brand) {
        switch(brand) {
            case 'audi':
                return 'audi-2012';
                break;
            case 'bmw' :
                return 'bmw-2015';
                break;
            case 'volvo' :
                return 'volvo-2000';
                break;
            default:
                return 'brand';
                break;
        }
    }
};
// peter.getData('Ukraine', 'Grivna');
var peterBrands = peter.checkBrand(['audi', 'volvo', 'geep'], peter.brand);
console.log(peter);
var lera = {
    name: 'Lera',
    lastName: 'Alieva',
    age: 19,
    brands: []
};
// CALL
peter.getData.call(lera, 'Russia', 'Rubl');
//Bind
var ira, den, lelik, bolik;
ira = { year: 1970 };
den = { year: 1999 };
lelik = { year: 1966 };
bolik = { year: 1990 };
var yearsOfPeople = [ira.year, den.year, lelik.year, bolik.year];

function retire(years, fn) {
    var ageVar = [];
    for (var i = 0; i < years.length; i++) {
        ageVar.push(fn(years[i]));
    }
    return ageVar;
}

function howMuchYears(year) {
    var date = new Date();
    return date.getFullYear() - year;
}

function getFullAge(age) {
    return age >= 18;
}
// in to at the top of the function retire, callback function must have 1 argument, but this is function has 2 arguments.
// for this we must to do at this with .bind method
function getFullAgeWithLimit(limit, age) {
    // return limit <= (2018 - age);
    // return howMuchYears(age) >= limit;
    return age >= limit;
}

var age = retire(yearsOfPeople, howMuchYears);
var getPiopleWithFullAge = retire(age, getFullAge);
var piopleChinise = retire(yearsOfPeople, getFullAgeWithLimit); // [ false, false, false, false ]
var piopleChiniseBind = retire(age, getFullAgeWithLimit.bind(this, 20));
console.log(age);
console.log(getPiopleWithFullAge);
console.log(piopleChiniseBind);