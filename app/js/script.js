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

