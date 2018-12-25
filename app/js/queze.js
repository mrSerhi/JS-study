'use strict';

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