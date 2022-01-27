const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")
const questions = [
    {
        question: "DOM (document object model) Web APIs do NOT allow to do which of the following?",
        answers: [
            { text: "Creating HTML elements.", correct: false },
            { text: "Changing HTML content and attributes.", correct: false },
            { text: "Timer functions with setTimeout and setInterval.", correct: true },
            { text: " Binding listeners to execute a function upon a certain event. ", correct: false }
        ]
    },
    {
        question: "Browser-based APIs allow the developer to do which of the following?",
        answers: [
            { text: "The console to help us debug and print messages.", correct: true },
            { text: "Set up a styled and laid-out webpage quickly with premade CSS.", correct: false },
            { text: "Carry out tedious tasks like converting time or currency values.", correct: false },
            { text: "Changing HTML content and attributes.", correct: false }
        ]
    },
    {
        question: "Third-party APIs do Not allow you to do which of the following?",
        answers: [
            { text: "Reduce JavaScript code for DOM manipulation.", correct: false },
            { text: "Creating HTML elements.", correct: true },
            { text: "Set up a styled and laid-out webpage quickly with premade CSS. ", correct: false },
            { text: "Carry out tedious tasks like converting time or currency values.", correct: false }
        ]
    },
    {
        question: "Which of the following is Not a strategy for learn about specific APIs?",
        answers: [
            { text: "Read the official documentation and practice with the provided examples.", correct: false },
            { text: "Reverse-engineer finished code to see how something was accomplished.", correct: false },
            { text: "Build something from scratch using the API.", correct: false },
            { text: "Carry out tedious tasks like converting time or currency values.", correct: true }
        ]
    },
    {
        question: "Which API did Randy use for Project 1 in the UT Austin Coding Bootcamp?",
        answers: [
            { text: "Random Famous Quotes API.", correct: false },
            { text: "The Cocktail DB API.", correct: false },
            { text: "TPokeAPI.", correct: true },
            { text: "Shazam API.", correct: false }
        ]
    }
]

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
