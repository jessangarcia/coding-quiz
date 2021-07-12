let questions = [
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        choices:["1. 2names", "2. _first_and_last_name", "3. FirstAndLast", "4. None of the above"],
        answer: "1. 2names"
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choices:["1. <SCRIPT>", "2. <BODY>", "3. <HEAD>", "4. <TITLE>"],
        answer: "1. <SCRIPT>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices:["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        question: "How do you call a function named myFunction?",
        choices:["1. call myFunction()", "2. call function myFunction()", "3. myFunction()", "4. call myFunction"],
        answer: "3. myFunctions()"
    },
    {
        question: "The first index of an array is ____.",
        choices:["1. 0", "2. 1", "3. 8", "4. any"],
        answer: "1. 0"
    },
]

var questionIndex = 0;
var time = questions.length * 15;
var timerId;
//timer variables
var timerEl = document.getElementById("timer");

//main page variables
var startButton = document.getElementById("start-btn");

//question variables
var questionContainerEl = document.getElementById("questionPage");
var quesTitleEl = document.getElementById("questionTitle")
var answerOneEl = document.getElementById("answer0")
var answerTwoEl = document.getElementById("answer1")
var answerThreeEl = document.getElementById("answer2")
var answerFourEl = document.getElementById("answer3")
var answerCheckEl = document.getElementById("check")




function startQuiz() {
    //hiding the main page
    var mainPage = document.getElementById("main-page")
    mainPage.setAttribute("class", "hide");

    //bring in questions
    questionContainerEl.removeAttribute("class");

    //start timer
    timerId = setInterval(timerStart, 1000);

    //show timer
    timerEl.textContent = time;

    //call questions
    showQuiz();

}

function showQuiz() {
    getQuestion();
}

//defining timer for start function(used code from the uofu page for this)
function timerStart() {
    time--;
    timerEl.textContent = time;

    //if timer runs out 
    if (time <= 0) {
        endQuiz();
    }
}

function getQuestion() {
    //get question from array 
    quesTitleEl.textContent = questions[questionIndex].question;
    answerOneEl.textContent = questions[questionIndex].choices[0];
    answerTwoEl.textContent = questions[questionIndex].choices[1];
    answerThreeEl.textContent = questions[questionIndex].choices[2];
    answerFourEl.textContent = questions[questionIndex].choices[3];
}

function answerSelect(answer) {
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {

        if (time < 0) {
            time = 0;
        }

        //show new time
        timer.textContent = time;

        answerCheckEl.textContent = "Correct!"
    } else {
        //remove time
        time -= 15;
        answerCheckEl.textContent = "Wrong!"
    }

    answerCheckEl.setAttribute("class", "check");
    setTimeout(function(){
        answerCheckEl.setAttribute("class", "check hide");
    }, 1000);

    questionIndex++;
    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        getQuestion();
    }
};

function choiceA() { answerSelect(0); }
function choiceB() { answerSelect(1); }
function choiceC() { answerSelect(2); }
function choiceD() { answerSelect(3); }

function endQuiz() {
    //get rid of timer
    clearInterval(timerId);

    var endPageEl = document.getElementById("finalPage");
    endPageEl.removeAttribute("class");

    //show score

    //hide questions 
    questionContainerEl.setAttribute("class", "hide");
}

function timeLeft() {}

function saveScores() {}

function enterScore() {}

//button to start quiz
startButton.onclick = startQuiz;

answerOneEl.addEventListener("click", choiceA);
answerTwoEl.addEventListener("click", choiceB);
answerThreeEl.addEventListener("click", choiceC);
answerFourEl.addEventListener("click", choiceD);
