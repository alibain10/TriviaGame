

//set questions
var myQuestions = [
    {
        question: "Question 1",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "Question 2?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    },
    {
        question: "Question 3?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "Question 4?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }


];

//answer correct or wront

function answerCorrect() {
    correctAnswer++;
    alert("Correct!");
}

function answerWrong() {
    wrong++;
    alert("Incorrect!");
}

//score results

function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();

}

//Counter Timer

var timeLeft = 120;
var downloadTimer;



//Start button to start quiz

var startButton = function () {
    index = 0;
    $('.question').append('<button id="startButton">Start</button>');
    $('#startButton').on('click', function () {
        $(this).hide();
        //countdownTimer.start();
        //loadQuestion(index);
        downloadTimer = setInterval(function () {
            timeLeft--;
            $(".timer").text(timeLeft);
            if (timeLeft <= 0)
                clearInterval(downloadTimer);
        }, 1000);
    });
}
startButton();


//Done button - stops timer
var doneButton = function () {

}

//Displays Questions
function displayQuestions() {
    for (var i = 0; i < myQuestions.length; i++) {
        $(".question").text('');
    }
}
    function possibleAnwsers() {
        for (var i = 0; i < myQuestions.length; i++) {
            $('<input type="radio" name="radio-choice-' + i + '"  value="' + myQuestions[i].answers.a + '"/>');
            $('<input type="radio" name="radio-choice-' + i + '"  value="' + myQuestions[i].answers.b + '"/>');
            $('<input type="radio" name="radio-choice-' + i + '"  value="' + myQuestions[i].answers.c + '"/>');
        }
    }