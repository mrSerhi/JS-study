; {
    'use strict';

    const things = new Map();
    const myFunc = () => '🍕';

    things.set('🚗', 'car');
    things.set('🏠', 'house');
    things.set('✈️', 'Airplane');
    things.set(myFunc, 'Key as a function!');
    things.set({}, {
        likedPhas: ['Djino', 'Orolono'],
        child: [{
            name: 'Siuzi',
            age: 10
        }, {
            name: 'Bill',
            age: 20
        }],
        year: 1986,
        jobsPositions: ['Designer', 'developer', 'API technic']
    });

    // console.log(things.size); // 4
    // console.log(things.has('🚗')); //true
    // console.log(things.get(myFunc));

    things.delete('✈️');

    // console.log(things.has('✈️')); // false

    things.set(1, '🏂');
    things.set(2, '🏎');
    things.set(3, '🚣');
    things.set(4, '🤾');

    // scanMap(things);

    // two ways iterable map (map.entries returns array with [key, value])
    function scanMap(map) {
        for (const [key, value] of map) {
            if (typeof key === 'number') {
                console.log(`Key with number ${key} has icon - ${value}`)
            }
        }

        map.forEach((val, key) => {
            if (typeof key === 'string') {
                console.log(`Key ${key} it is - ${val}`);
            }
        });
    }

    const obj = {
        likedPhas: ['Djino', 'Orolono'],
        child: [{
            name: 'Siuzi',
            age: 10
        }, {
            name: 'Bill',
            age: 20
        }],
        year: 1986,
        jobsPositions: ['Designer', 'developer', 'API technic']
    };

    // console.log(Object.keys(obj)) // returns array
    // console.log(Object.keys(obj).length); // obj length


}