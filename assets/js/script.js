// Declare variables
var rootEl = document.getElementById('root');
var startbtnEl = document.getElementById('startbtn');
var timer = document.getElementById('timercontainer');
var gameArea = document.getElementById('gameareacontainer');
var headerEl = document.getElementById('headercontainer');
var questionArea = document.getElementById('questioncontainer');
var answerArea = document.getElementById('answercontainer');
var timeLeft = 30;

// Array of questions and answers
var gameQuestions = [
    'Which file extension does Javascript use?', 
    'Which selector is specific for Id?',
];

var gameAnswers = [
    'A. html',
    'B. css',
    'C. js',
    'D. px',
    'A. getElementByID()',
    'B. querySelector()',
    'C. querySelectorAll()',
    'D. grabElementbyID()',
];

gameArea.style.visibility = 'hidden';

// Create time interval countdown
function timeRemaining() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + ' seconds left.';
        timer.style.fontSize = '36px';

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = 'GAME OVER!'
            console.log('game over');
        }
    }, 1000);
}

// Create a function for start button to start coding quiz
function startCodingQuiz () {

    // Test event listener for start button
    console.log('start button works');

    // Hide header element and display game content.
    headerEl.style.visibility = 'hidden';
    gameArea.style.visibility = 'visible';

    // Create questions and answers then append to parent element
    var questionEl = document.createElement('p');
    questionArea.appendChild(questionEl);
    questionEl.setAttribute('class', 'question');
    questionEl.textContent = gameQuestions.value[0];

    var answerChoiceA = document.createElement('button');
    answerArea.appendChild(answerChoiceA);
    answerChoiceA.setAttribute('class', 'answerbtn');
    answerChoiceA.textContent = gameAnswers.value[0];

    var answerChoiceB = document.createElement('button');
    answerArea.appendChild(answerChoiceB);
    answerChoiceB.setAttribute('class', 'answerbtn');
    answerChoiceB.textContent = gameAnswers.value[1];

    var answerChoiceC = document.createElement('button');
    answerArea.appendChild(answerChoiceC);
    answerChoiceC.setAttribute('class', 'answerbtn');
    answerChoiceC.textContent = gameAnswers.value[2];

    var answerChoiceD = document.createElement('button');
    answerArea.appendChild(answerChoiceD);
    answerChoiceD.setAttribute('class', 'answerbtn');
    answerChoiceD.textContent = gameAnswers.value[3];

        // Conditional for wrong answer, subtract time from countdown

        // Conditional, correct answer add point to score, create message "correct!"

        // Conditional, create message "wrong"

        // Conditional, once an answer choice is selected hide current question and answer, move to next set

        // Conditional, game over when timer is "0", or all questions are answered

        // Conditional, game completed create input field

        // Store input and score to local storage

}

// Add event listener for start button
startbtnEl.addEventListener('click', () => {
    startCodingQuiz();
    timeRemaining();
});

// Add event listener for answer choice

