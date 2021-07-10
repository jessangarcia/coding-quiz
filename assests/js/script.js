const questions = [
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
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["1. if i == 5 then", "2. if i = 5 then", "3. if(i == 5)", "4. if i = 5"],
        answer: "3. if(i == 5)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["1. onclick", "2. onchange", "3. onmouseover", "4. onmouseclick"],
        answer: "1. onclick"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
]

var startButton = document.getElementById("start-btn");
var mainPage = document.getElementById("main-page")
var questionContainerEl = document.getElementById("question-container")


let actualQuestion

startButton.addEventListener("click", startGame);
function startGame() {
    console.log("started")
    mainPage.classList.add("hide")
    startButton.classList.add("hide")
    questionContainerEl.classList.remove("hide")

}

function setNextQuestion() {}
function showQuestion() {}

function selectAnswer() {}
