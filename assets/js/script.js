// Declare variables
var rootEl = document.getElementById('root');
var startbtnEl = document.getElementById('startbtn');
var timer = document.getElementById('timercontainer');
var gameArea = document.getElementById('gameareacontainer');
var headerEl = document.getElementById('headercontainer');
var questionArea = document.getElementById('questioncontainer');
var questionPel = document.getElementById('question');
var answerArea = document.getElementById('answercontainer');
var initialsInput = document.getElementById('inputcontainer');
var wrong = document.getElementById('wronganswer');
var GamerInitials = document.getElementById('initials');
var submitbtn = document.getElementById('submitbtn');
var answerButtons = document.querySelectorAll('answerBTN');

var choice0 = document.getElementById('choice0');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');

var timeLeft = 15;
var score = 0;
console.log(score);


// Set visibility of select elements on the page
wrong.style.visibility = 'hidden';
initialsInput.style.display = 'none';
gameArea.style.visibility = 'hidden';

// Array of questions and answers
var questions = [
    'Which file extension does Javascript use?', ['html', 'css','js', 'px'], 
    'Which selector is specific for Id?', ['getElementByID()', 'querySelector()', 'querySelectorAll()', 'grabElementbyID()'],
    'Where can language makes web apps interactive?', ['HTML', 'CSS', 'JavaScript', 'XML'],
    'If not stored to localStorage, how long does a save value remain?', ['Remains forever', 'Value is not stored', 'Until cookies are cleared', 'Until page or app refresh']
]

// Create time interval countdown
function timeRemaining() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + ' seconds left.';
        timer.style.fontSize = '36px';

        // Condition, when time is 0 clear the game container, show initial inputs
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = 'GAME OVER!';
            console.log('game over');
            gameArea.style.display = 'none';
            initialsInput.style.display = 'block';
        }
    }, 1000);
}

// Create a function coding quiz
function startCodingQuiz () {

    // Test event listener for start button
    console.log('start button works');

    // Hide header element and display game content.
    headerEl.style.visibility = 'hidden';
    gameArea.style.visibility = 'visible';

    showQuestion();
};

function showQuestion () {
    questionPel.textContent = questions[0];
    choice0.textContent = questions[1][0];
    choice1.textContent = questions[1][1];
    choice2.textContent = questions[1][2];
    choice3.textContent = questions[1][3];
    selectionAnswer();
}

function selectionAnswer() {
   choice2.addEventListener('click', () => {
       score++;
       console.log(score);
       showQuestion2();
   });
};

function showQuestion2 () {
    questionArea = '';
    answerArea = '';
    questionPel.textContent = questions[2];
    choice0.textContent = questions[3][0];
    choice1.textContent = questions[3][1];
    choice2.textContent = questions[3][2];
    choice3.textContent = questions[3][3];
    selectionAnswer2();
}

function selectionAnswer2() {
    choice0.addEventListener('click', () => {
        score++;
        console.log(score);
        showQuestion3();
    });
};

function showQuestion3 () {
    questionArea = '';
    answerArea = '';
    questionPel.textContent = questions[4];
    choice0.textContent = questions[5][0];
    choice1.textContent = questions[5][1];
    choice2.textContent = questions[5][2];
    choice3.textContent = questions[5][3];
    selectionAnswer3();
}

function selectionAnswer3() {
    choice3.addEventListener('click', () => {
        score++;
        console.log(score);
        showQuestion4();
    });
};

function showQuestion4 () {
    questionArea = '';
    answerArea = '';
    questionPel.textContent = questions[6];
    choice0.textContent = questions[7][0];
    choice1.textContent = questions[7][1];
    choice2.textContent = questions[7][2];
    choice3.textContent = questions[7][3];
    selectionAnswer4();
}

function selectionAnswer4() {
    choice3.addEventListener('click', () => {
        score++;
        console.log(score);
        gameArea.style.display = 'none';
        window.alert('All done!')
    });
};

function storeInitials () {
    var Scoreboard = {
        Initials: GamerInitials.value,
        RecordScore: score.value,
    }; window.localStorage.setItem('Game Record', JSON.stringify(Scoreboard));
    showScore();
};

function showScore () {
    var Currenttopscore = JSON.parse(localStorage.getItem('Scoreboard'));
    window.alert(Currenttopscore);
}

// Add event listener for start button
startbtnEl.addEventListener('click', () => {
    startCodingQuiz();
    timeRemaining();
});

// Add event listener for submit button
submitbtn.addEventListener('click', storeInitials);




// Below is an array for use if loops are working
// var questions = [
//     {question: 'Which file extension does Javascript use?', 
//     answers: [
//         {text: 'html', correct: false}, 
//         {text: 'css', correct: false}, 
//         {text: 'js', correct: true}, 
//         {text: 'px', correct: false}]}, 
//     {question: 'Which selector is specific for Id?', 
//     answers: [
//         {text: 'getElementByID()', correct: true}, 
//         {text: 'querySelector()', correct: false}, 
//         {text: 'querySelectorAll()', correct: false}, 
//         {text: 'grabElementbyID()', correct: false}]},
//     {question: 'Where can language makes web apps interactive?', 
//     answers: [
//         {text: 'HTML', correct: false}, 
//         {text: 'CSS', correct: false}, 
//         {text: 'JavaScript', correct: true}, 
//         {text: 'XML', correct: false}]},
//     {question: 'If not stored to localStorage, how long does a save value remain?', 
//     answers: [
//         {text: 'Remains forever', correct: false}, 
//         {text: 'Value is not stored', correct: false}, 
//         {text: 'Until cookies are cleared', correct: false}, 
//         {text: 'Until page or app refresh', correct: true}]}
