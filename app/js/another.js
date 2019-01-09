; {
    'use strict';
    let gena = new Human('Gena', 1965);
    let anna = new Human('Anna', 1989);
    let dinna = new Human('Dinna', 1990);
    let people = [gena, anna, dinna];
    const ages = getUserAge(people);
    let rand = getRandNumber;
    let numbers = fillArrOfNumbers(rand);
    let evenNumbers = parityCheck(numbers, 'Even');
    let oddNumbers = parityCheck(numbers, 'Odd');


    displayResults(evenNumbers, 'Even');
    displayResults(oddNumbers);


    function Human(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    function getUserAge(arr) {
        let ages = [];
        const date = new Date().getFullYear();

        if (Array.isArray(arr)) {
            ages = arr.map(item => date - item.yearOfBirth);
        } else {
            console.error('Not array from arguments');
        }
        return ages;
    }

    function getRandNumber() {
        return Math.floor((Math.random() * 10) + 1); // from 0 to 10
    }

    function fillArrOfNumbers(randFunc) {
        let numbers = [];

        for (let i = 0; i < 10; i++) {
            numbers.push(randFunc());
        }
        return numbers;
    }

    function parityCheck(arr, check) {
        let sortArrEven = [];
        let sortArrOdd = [];

        arr.map(item => {
            if (item % 2 === 0) {
                sortArrEven.push(item);
            } else {
                sortArrOdd.push(item);
            }
        });

        if (check === 'Even') {
            return sortArrEven;
        }

        return sortArrOdd;
    }

    function displayResults(arr, check) {
        console.log(`${check && check.toLowerCase() === 'even' ? 'Even numbers' : 'Odd numbers'} : ${arr}`);
    }





}