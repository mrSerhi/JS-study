{
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


    console.log(firstDepartment)

    console.log(arr);
    console.log(middle);
    console.log(arrSpread);

    console.log(sumOFNums);
    console.log(es5Sum);

    console.log(maxNumber);
    console.log(maxNumberSpread);

    console.log(copyOfNames === names);

    function sum(a, b, c) {
        return a + b + c;
    }




}