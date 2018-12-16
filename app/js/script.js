console.log('Hello functions!');
// getting user age
function getAge(yearWasBorn) {
    var yearNow = (new Date()).getFullYear();
    var age = yearNow - yearWasBorn;
    return age;
}
// getting how many years left to retirements
function retirements(name, age) {
    var retiree = 65 - age;
    if (retiree <= 0) {
        console.log('You\'re already retiree');
    } else {
        console.log(name[0].toUpperCase() + name.substring(1) + ' have ' + retiree + ' years to retirements');
    }
}
var serhii = retirements('serhii', getAge(1954));
var anton = retirements('anton', getAge(1984));
var andriu = retirements('andriu', getAge(1990));
var sara = retirements('sara', getAge(1952));


//console.log(twoNumbers(2, 4)); // is not a function
var twoNumbers = function (num1, num2) {
    return num1 + num2;
};

function someNum(num) {
    var checkOnEvenOdd = function (num) {
        if (num % 2 === 0) {
            console.log('Number is Even - ' + num);
            return true;
        } else {
            console.log('Number is Odd - ' + num);
            return false;
        }
    };
    checkOnEvenOdd(num);
}

someNum(6);


var signUpUserLogin = prompt('What is login?', 'Admin');


function checkLogin(login) {
    if (login !== 'Admin' && login !== 'admin' && login !== null && login !== '' && isNaN(login)) {
        console.log('not correct login');
    } else if (login === null || login === '' || !isNaN(login)) {
        console.log('Click reload and try again');
    } else {
        var loginPass = prompt('What is the password?', '');
        if (loginPass !== 'your mom' && loginPass !== null && loginPass !== '' && isNaN(loginPass)) {
            console.log('not correct password');
        } else if (loginPass === null || loginPass === '' || !isNaN(loginPass)) {
            console.log('Something went wrong...Retry again')
        } else {
            console.log('Hi!Glad to see you Admin =)');
        }
    }
}

function checkLogintwo(login) {
    if (login === 'Admin' || login === 'admin') {
        var pass = prompt('What is the password?', '');
        if (pass === 'asshole') {
            console.log('Hi, Admin!');
        } else if (pass === null || pass === '') {
            console.log('See you soon...');
        } else {
            console.log('Try again!');
        }
    } else if (login === null || login === '') {
        console.log('Goodby or try again');
    } else {
        console.log('Somthing wrong...Error');
    }
}
// checkLogin(signUpUserLogin);
checkLogintwo(signUpUserLogin);