/*
var userName = prompt('What is your name?', 'Serhii');
if (userName === '' || !isNaN(userName) || userName.length < 4) {
    alert('Entered data wrong!');
} else {
    var userAge = +prompt("What is your age?", 28);
    if (isNaN(userAge) || null && undefined || userAge < 18) {
        alert('Goodbye darling, you chooses not a good way...');
        false;
    } else {
        console.log('Okey, you are 18 years old. All right. Welcome ' + userName)
    }
}
*/


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// var randNumber = getRandomArbitrary(1, 40);
var userNumber = +prompt('Write a number, no higher than 20', 20);
var computer = 0;
var winnerPoints = 0;

function game(userNumber) {
    if (!userNumber || isNaN((userNumber)) || userNumber === '' || null && undefined) {
        alert('This is not a number, or doesn\'t have anithing into self... Try again');
    } else if (userNumber > 20) {
        alert('Hey...We have agreed that number will be not bigger than 20!');
    } else {
        computer += getRandomArbitrary(1, 30);
        if (userNumber > computer) {
            winnerPoints += userNumber - computer;
            alert("Congratulations! You win with " + winnerPoints + ' points');
        } else if (userNumber < computer) {
            // winnerPoints+=computer - userNumber;
            // alert("Ohhh no...You lose =( and the computer has more on  " + winnerPoints + ' points');
            alert('Ohhh no...You lose =( and the computer is Win');
        } else {
            alert('It seems you and the computer have equel points');
            console.log('Computer has - ' + computer + ' points');
            console.log('You have - ' + userNumber + ' points');
        }
    }
}

game(userNumber);
