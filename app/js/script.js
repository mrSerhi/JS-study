 ; {
     "use strict";
     const date = new Date('1990, 3, 7');
     let arr = ['Sally', 'Billy', 'Lusi', 'Bodun'];
     let loose = ['Gaybe'];
     let show = showUsers(loose, ['Stas', 'Romeo', 'Djulia']);
     let army = furry();
     // let bill = userMainData('Bill', 'Morun', 25, 'male', false);
     let sum = operation(`2 + 2`);

     // sayHay('Serhii', 'The big dial that what do you do');
     // console.log(show);
     // console.log( army[0]() );
     // console.log( army[4]() );
     // console.log( army[7]() );

     //console.log(`Hello ${bill.userName} ${bill.userSerName}. I see you're ${ bill.mariage ? bill.mariage : 'not mariage' }! You have a ${bill.usrAge} age old.`);
     // console.log(sum)


     function sayHay(name, mess) {
         let message;

         if (name && isNaN(name)) {
             message = name + ' your message has - ' + mess.length + ' characters';
         }
         return message;
     }

     function showUsers(arr, difault) {
         let some = [];
         for (let i = 0; i < arr.length; i++) {
             if (arr.length > 3) {
                 return arr;
             } else {
                 some.push(arr[i]);
                 some = some.concat(difault);
             }
         }
         return some;
     }

     function furry() {
         let shooters = [];

         // for (var i = 0; i < 10; i++) {
         //     var shoot = function() {
         //         // var shoot = i;
         //         return function() {
         //             //console.log(shoot)
         // console.log(i)
         //         };
         //     }(i);
         //     shooters.push(shoot);
         // }

         for (let i = 0; i < 10; i++) {
             let shoot = function () {
                 console.log(i);
             };
             shooters.push(shoot);
         }

         return shooters;
     }

     function userMainData(name, sername, age, gender, mariage) {
         return {
             userName: name,
             userSerName: sername,
             usrAge: age,
             userGender: gender,
             mariage: mariage
         };
     }

     function operation(str) {
         let _splitStr = str.split(' ');
         let _methods = {
             '+': function (a, b) {
                 return a + b;
             }
         };

         if (str.includes('+')) {
             return _methods['+'](+_splitStr[0], +_splitStr[2]);
         }
     }
 }