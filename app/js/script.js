"use strict";
console.log('Hello world!');
console.log(parseFloat(0.99 + 0.95 + '$').toFixed(2));

function char(str) {
    return str ? str[0].toUpperCase() + str.slice(1) : '';
}
var str = 'Vasia';
var secondStr = char('vasia');
var empty = char();
//console.log(str === secondStr);
//console.log(empty === '');

function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    if (lowerStr.indexOf('viagra', 0) !== -1 || lowerStr.indexOf('xxx', 0) !== -1) {
        return true;
    }
    return false;
}
var spamOne = 'To buy Viagra and watch tv XXxxx';
var xxx = 'watch XXX video';
var good = 'hey you, go with us and nave a fun!'
console.log(checkSpam(good));
// console.log(spamOne.indexOf('viagra'))

var hey = 'Now is time for our teem bealding and cooperation with big boss';
var bobo = 'this is terrible how do you do at this?';
var hoHo = 'How do you feel?';
function truncate(str, maxlength) {
    var diff;

    if (str.length > maxlength) {
        // diff = (maxlength - str.length) - 3;
        return str.slice(0, maxlength - 3) + '...';
    }
    return str;
}
console.log(truncate(hey, 20));
console.log(truncate(hoHo, 20));
console.log(truncate(bobo, 20));