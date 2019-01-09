{
    'use strict';

    // ES5

    var userData = ['Bob', 25];
    var nameOfUser = userData[0];
    var ageOfUser = userData[1];
    var obj = {
        userName: 'Gogi',
        userLastName: 'Avanisian',
        year: 1987
    };
    var name = obj.userName;
    var lastName = obj.userLastName;
    var year = obj.year;

    function retyrament(year) {
        var age = new Date().getFullYear() - year;
        var retyramentAge = 65 - age;

        return [age, retyramentAge];
    }

    var retyramentData = retyrament(1990);
    var fullAge = retyramentData[0];
    var retyramentAge = retyramentData[1];

    // console.log(retyramentAge)






    // ES6

    const [userName, age] = ['Serhii', 29];

    const givi = {
        name: 'Givi',
        mariage: true,
        children: {
            daughter: {
                name: 'Dara',
                age: 6
            },
            son: {
                name: 'Bony',
                age: 14
            }
        },
        wife: {
            name: 'Zoshia',
            age: 40
        }
    };

    const {
        name: giviName,
        mariage,
        children,
        wife: giviWife
    } = givi;

    const [userAge, retyreAge] = returnRetyreAge(1970);

    // console.log(userAge, retyreAge)

    function returnRetyreAge(year) {
        let age = new Date().getFullYear() - year;

        return [age, 65 - age];
    }


}