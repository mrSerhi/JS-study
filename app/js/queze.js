'use strict';
/*
(function () {
    //constructor
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.scores = null;
    }
    Question.prototype.showAnswers = function () {
        for (var i = 0; i < this.answers.length; i++) {
            console.log('Answer #-' + i + ' - ' + this.answers[i]);
        }
    };
    Question.prototype.checkAnswers = function (answer) {
        if (answer() === this.correctAnswer) {
            console.log('Correct answer!');
            this.scores++;
            console.log('Your current score is - ' + this.scores);
            gameQuest(arr);
        } else if(answer() === 'exit') {
            return false;
        } else {
            answer();
            console.log('Try later');
        }
    };

    var language = new Question('What\'s the best language you to use?', ['javaScript', 'pyton'], '0');
    var myName = new Question('What is my name?', ['serhii', 'andrey', 'pupok', 'samec'], '0');
    var arr = [language, myName];

    function gameQuest(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        if (arr[rand]) {
            console.log(arr[rand].question);
            arr[rand].showAnswers();
            arr[rand].checkAnswers(askTheAnswer);
        }
    }
    gameQuest(arr);

    function askTheAnswer() {
        return prompt('Your answer is: ', '');
    }

    function scores() {
        var score = 0;
    }

}());

*/

// new example for this primer

(function () {
    'use strict';
    // constaructor
    function Question(question, answers, currentAnswer) {
        this.question = question;
        this.answers = answers;
        this.currentAnswer = currentAnswer;
    }
    Question.prototype.showQuestionsInConsole = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + ' - ' + this.answers[i]);
        }
    };
    Question.prototype.checkAnswers = function (answer, callback) {
        var score; // save score from callback fync
        if (answer === this.currentAnswer) {
            console.log('Correct Answer!');
            score = callback(true); //doing increment and save in to score outside
        } else {
            console.log('Not correct answer...Try again');
            score = callback(false); // returns score with not incrementing
        }
        this.showScore(score); // show score in to console. method will be available, because hi's storage in prototype
    };
    Question.prototype.showScore = function(score) {
        console.log('Correct score is - ' + score);
        console.log('------------------------------------------');
    };

    var qOne = new Question('What is the side of moon, do you like?', ['black', 'white'], 0);
    var qTwo = new Question('When celebrate the New Year?', ['in the end of year', 'in the middle of year'], 0);
    var qThree = new Question('What is the serial №1 in the World?', ['Scribe', 'mr.Robot', 'how I fuck your mom'], 0);
    var questions = [qOne, qTwo, qThree];
    var keepScore = score(); // save func with closure. if argument is true when score++ else returns

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    function nextQuestion() {
        var rand = Math.floor(Math.random() * questions.length);

        questions[rand].showQuestionsInConsole();
        var answer = prompt('Your answer is: ', ''); // not convert at this point, becouse than we not to get the string with 'exit'

        if (answer !== 'exit') {
            questions[rand].checkAnswers(+answer, keepScore); // convert answer from string to a number and use callback fn
            nextQuestion(); // re-call fn 
        }
    }
    nextQuestion(); //call
}());