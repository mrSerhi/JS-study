'use strict';

function isEmpty(obj) {
    for (var key in obj) {
        return key === undefined; 
    }

    return key === undefined ? true : false;
}

var ell = {};
// ell.name = 'sofi';

function objEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

// console.log( objEmpty(ell) );

var salaries = {
    'Gena': 100,
    'Vasia': 200,
    'Tolia': 300,
    'Natali': 500,
    'oleg': 250,
    'nolan': 520
};

var salar = {};

function sumOfSalaries (obj) {
    var sum = 0;
    for (var key in obj) {

        sum += obj[key];
    }
    return sum;
}

function someBigSal(obj) {
    var max = 0, name;
    
    for (var key in obj) {
        if (max < obj[key]) {
            max = obj[key];
            name = key;
        }
    }
    return {number: max, name: name};
}

// console.log('Sum of salaries is - ' + sumOfSalaries(salar))
console.log( someBigSal(salaries) );

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  var menu = {
      width: 300,
      height: 200,
      title: 'hello world'
  };

  function multy(obj) {
    for( var key in obj) {
        if ( isNumeric(obj[key]) ) {
            obj[key] *= 2;
        }
    }
    // console.log(obj)
  }

multy(menu);

