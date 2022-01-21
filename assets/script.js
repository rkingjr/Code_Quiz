// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// Create start button in index.html
// Style it in style.css
// Event listener in Js
// Start time in js
// Create questions and answers in js and populate html dynamically
// Questions need to include whether correct or not
// Create event listener for each button
// Go to first question


// WHEN I answer a question
// THEN I am presented with another question
// Create ordered list within html
// Within list


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and my score

const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")
const questions = [
    {
        question: "DOM (document object model) Web APIs do NOT allow to do which of the following?",
        answers: [
            {text: "Creating HTML elements.", correct: false},
            {text: "Changing HTML content and attributes.", correct: false},
            {text: "Timer functions with setTimeout and setInterval.", correct: true},
            {text: " Binding listeners to execute a function upon a certain event. ", correct: false}
        ]
    },
    {
        question: "Browser-based APIs allow the developer to do which of the following?",
        answers: [
            {text: "The console to help us debug and print messages.", correct: true},
            {text: "Set up a styled and laid-out webpage quickly with premade CSS.", correct: false},
            {text: "Carry out tedious tasks like converting time or currency values.", correct: false},
            {text: "Changing HTML content and attributes.", correct: false}
        ]
    },
    {
        question: "Third-party APIs do Not allow you to do which of the following?",
        answers: [
            {text: "Reduce JavaScript code for DOM manipulation.", correct: false},
            {text: "Creating HTML elements.", correct: true},
            {text: "Set up a styled and laid-out webpage quickly with premade CSS. ", correct: false},
            {text: "Carry out tedious tasks like converting time or currency values.", correct: false}
        ]
    },
    {
        question: "Which of the following is Not a strategy for learn about specific APIs?",
        answers: [
            {text: "Read the official documentation and practice with the provided examples.", correct: false},
            {text: "Reverse-engineer finished code to see how something was accomplished.", correct: false},
            {text: "Build something from scratch using the API.", correct: false},
            {text: "Carry out tedious tasks like converting time or currency values.", correct: true}
        ]
    },
    {
        question: "Which API did Randy use for Project 1 in the UT Austin Coding Bootcamp?",
        answers: [
            {text: "Random Famous Quotes API.", correct: false},
            {text: "The Cocktail DB API.", correct: false},
            {text: "TPokeAPI.", correct: true},
            {text: "Shazam API.", correct: false}
        ]
    }
]

let shuffledQuestions, currentQuestionsDB

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionsDB++
    goNextQuestion()
})

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsDB = 0
    questionContainerElement.classList.remove("hide")
    goNextQuestion()
}

function goNextQuestion() {
    resetQuestion()
    showNextQuestion(shuffledQuestions[currentQuestionsDB])
}

function showNextQuestion(question) {
    questionElement.innerText = questions.question
    answerButtonElement.innerText = questions.answer
    questions.answers.array.forEach(answer => {
        const button = document.createElement("button")
        button.innerText =  answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",  chooseAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetQuestion() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function chooseAnswer(e) {
    const chosenButton = e.target
    const correct =  selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsDB + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
