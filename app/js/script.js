
/*
 * 5 data types primitives:
 *   string
 *   number
 *   boolean
 *   undefined
 *   null
 */

var firstName = 'Serhii',
    lastName = 'Vashabinaboly',
    age = 28,
    marriage = false;

console.log("User name is " + firstName + " and sername is " + lastName + ". His have " + age + " years old.");

// mutation
firstName = prompt('What is your name?'); //string or if click the cancel, then returns null
age = prompt('What is your age?'); // string
alert('Hello ' + firstName + '.Your age is ' + age + '.');
console.log(typeof firstName, typeof age);

var str = "this man worked on yours job is " + 20 + " years";
console.log(str, typeof str); // number mutation into string, dynamic type changes

// operators
var nikkiAge, kialyAga, nikkiBirfsday = 1996, kialyBirfsday = 1990, currentYear = 2018;
var counter = 0;
nikkiAge = currentYear - nikkiBirfsday;
kialyAga = currentYear - kialyBirfsday;
counter++;
console.log("nikkiAge is " + nikkiAge + ", and kialyAga is " + kialyAga + '.');
console.log('It is a counter = ' + counter);