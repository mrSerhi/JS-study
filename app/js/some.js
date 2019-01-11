;{
    'use strict';

    let middle = [3, 4];
    let arr = [1, 2, middle, 5, 6];
    let arrSpread = [1, 2, ...middle, 5, 6];

    middle.push(10, 20);

    let buchalteria = [{
        name: 'Diana',
        age: 23,
        mariage: true
    }, {
        name: 'Dayra',
        age: 45,
        mariage: true
    }, {
        name: 'Djoana',
        age: 34,
        mariage: false
    }];

    let developers = [{
        name: 'Dan',
        age: 35,
        mariage: true,
        experience: 5,
        position: 'Tech-lead'
    }, {
        name: 'Maks',
        age: 32,
        mariage: true,
        experience: 4,
        position: 'senior'
    }, {
        name: 'Bob',
        age: 30,
        mariage: true,
        experience: 2,
        position: 'middle'
    }, {
        name: 'Illan',
        age: 25,
        mariage: false,
        experience: 1.5,
        position: 'junior'
    }];

    let firstDepartment = [...developers, ...buchalteria];

    let nums = [2, 4, 6];
    let sumOFNums = sum(...nums);
    let es5Sum = sum.apply(null, nums);
    let moreNums = [2, 5, 1, 9, 13, 21];
    let maxNumber = Math.max.apply(null, moreNums);
    let maxNumberSpread = Math.max(...moreNums);
    let names = ['Gelbert', 'Siusan', 'Ziaomi'];
    let copyOfNames = [...names];

    /*
        console.log(firstDepartment)

        console.log(arr);
        console.log(middle);
        console.log(arrSpread);

        console.log(sumOFNums);
        console.log(es5Sum);

        console.log(maxNumber);
        console.log(maxNumberSpread);

        console.log(copyOfNames === names); // false
    */



    function sum(a, b, c) {
        return a + b + c;
    }



    // Rest paramaters

    let min = maxNumbers(10, 5, 10, 12, 15);
    let max = minNumbers(6, 2, 4, 8, 10, 1);
    let ages = returnFullAge(1990, 2007, 2015, 2003, 1989);
    let checkAges = checkOnFullAge(21, 1990, 2007, 2015, 2003, 1989);
    /*
    console.log(min);
    console.log(max);
    console.log(ages);
    console.dir(checkAges)
    */
    function maxNumbers(min) {
        let argArr = Array.prototype.slice.call(arguments, 1);
        return argArr.map(el => el >= min);
    }

    function minNumbers(max, ...arg) {
        return arg.map(el => el <= max);
    }

    function returnFullAge(...years) {
        let now = new Date().getFullYear();

        return years.map(el => now - el);
    }

    function checkOnFullAge(fullAge, ...years) {
        let now = new Date().getFullYear();
        let arr = [];
        years.forEach((el, index) => {
            let age = now - el;
            // console.log(`User with ${index + 1} index - ${age >= fullAge ? 'have full age' : 'not has full age'}`);
            return arr.push({
                index: index,
                fullAge: age >= fullAge
            });
        });
        return arr;
    }

    // difault parameters for funtions

    let multyF = mul();
    let multyS = mul(5, 5);

    // console.log(multyF); // 20
    // console.log(multyS); // 25

    function mul(a = 2, b = 10) {
        return a * b;
    }

    function Animal(name, breed, food = [], paws = 4, tail = true, length = null, height = null) {
        this.animalName = name;
        this.bread = breed;
        this.numOfPaws = paws;
        this.favoriteFoor = food;
        this.tail = tail;
        this.animalLength = length;
        this.animalHeight = height;
    }

    Animal.prototype.setAnimalLength = function (length, meter) {
        return this.animalLength = length.toFixed(2) + meter;
    };
    Animal.prototype.setAnimalHeight = function (height, meter) {
        return this.animalHeight = height.toFixed(2) + meter;
    };


    let chufChuf = new Animal('dog', 'Chao-Chao', ['dry food', 'chips']);
    chufChuf.setAnimalLength(123, 'cm');
    chufChuf.setAnimalHeight(45, 'cm');
    let bonia = new Animal('cat', 'Scottish-freestyle', 'all', 4, true, '44cm', '32cm');


}