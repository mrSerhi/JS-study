"use strict";

/*
 * Question is Constructor with:
 * @param{string} question - this.question for the printed in console
 * @param{array} answers - this.answers for the answers printed in console
 * @param{number} correctAnswer - this.correctAnswer this is the current correct answer on the question
 * @method displayQuestionsAndAnswers - to display questions with answers in the console, return undefined
 * @method checkAnswers - checked received answer from input(prompt) and returns boolean
 * @method sumScore - sum score when the user answering on the questions, return number
 */
function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
Question.prototype.displayQuestionsAndAnswers = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ':' + ' - ' + this.answers[i]);
    }
};
Question.prototype.checkAnswers = function (answer) {
    if (answer === this.correctAnswer) {
        displayAnswersMessage(true);
        return true;
    }
    displayAnswersMessage(false);
    return false;
};
Question.prototype.sumScore = function (bool, fnScore) {
    var score;

    if (bool) {
        score = fnScore(true);
    } else {
        score = fnScore(false);
    }
    return displayScore(score);
};

function getScore() {
    var userScore = 0;
    return function (correct) {
        if (correct) {
            userScore++;
        }
        return userScore;
    };
}

function displayScore(score) {
    if (score) {
        console.log('Current score: ' + score);
        console.log('---------------------------------------------');
    }
}

function displayAnswersMessage(bool) {
    if (bool) {
        console.log('You damn RIGHT!');
    } else {
        console.log('Sorry, but you lose. Try again!');
    }
}

function nextQuestion() {
    var randNumInt = Math.floor(Math.random() * allQuestions.length);
    allQuestions[randNumInt].displayQuestionsAndAnswers();
    var getUserAnswer = prompt('What is your answer?', '');

    if (getUserAnswer !== 'exit') {

        if (allQuestions[randNumInt].checkAnswers(parseInt(getUserAnswer))) {

            allQuestions[randNumInt].sumScore(true, score);
            nextQuestion();
        } else {
            allQuestions[randNumInt].sumScore(false, score);
        }
    } else {
        return;
    }
}

var questionOne = new Question('How much 3 * 3?', [12, 6, 9], 2);
var questionTwo = new Question('What is the capital of USA?', ['Washington', 'New York', 'Montana'], 0);
var questionThree = new Question('What is eating squirrel?', ['nuts', 'meat', 'acorns'], 0);
var allQuestions = [questionOne, questionTwo, questionThree];
var score = getScore();
nextQuestion();
