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
