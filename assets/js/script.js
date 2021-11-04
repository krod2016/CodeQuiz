//question area
var questionAreaEl = document.querySelector("#question-area")
var answerAreaEl = document.querySelector("#question-area")

function renderQuestion() {
  questionAreaEl.textContent = questions[0].question; 
  answerAreaEl.textContent = questions[0].answers[0].text
}


//timer
function timer() {
  console.log("click")
  renderQuestion(0)
  var sec = 119;
  var timer = setInterval(function () {
    document.getElementById('TimerDisplay').textContent = '00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

//questions and answers
var questions = [
  {
    question: "What is a console.log used for?",
    answers: [
      { text: "Sends a message to the web console", correct: "false" },
      { text: "Code debugging", correct: "false" },
      { text: "Testing your code", correct: "false" },
      { text: "All of the above", correct: "true" },
    ]
  },
  {
    question: "Which is the correct term meaning, 'a textual data that cannot be changed?'",
    answers: [
      { text: "Null", correct: "false" },
      { text: "Boolean", correct: "false" },
      { text: "String", correct: "true" },
      { text: "BigInt", correct: "false" },
    ]
  },

  {
    question: "What is the Google Chrome function to check for errors?",
    answers: [
      { text: "devTools", correct: "true" },
      { text: "Facebook", correct: "false" },
      { text: "Canvas", correct: "false" },
      { text: "Github", correct: "false" },
    ]
  },

  {
    question: "What is Math.random() used for?",
    answers: [
      { text: "Will give us a decimal number between 0 and a number of our choice", correct: "true" },
      { text: "Will round a number up", correct: "false" },
      { text: "Will give you the square root of a number", correct: "false" },
      { text: "Will round a number down", correct: "false" },
    ]
  },

  {
    question: "What is the correct statement flow for a 'for loop'?",
    answers: [
      { text: "for: condition; expression; increment expression;", correct: "false" },
      { text: "for: inital expression; increment expression; condition, statement", correct: "false" },
      { text: "for condition; initial expression; increment expression; statement", correct: "false" },
      { text: "for initial expression; condition; increment expression, statement", correct: "true" },
    ]
  },
];

//radio buttons for question and answers
var divEl = document.createElement('div');
divEl.id = "question-area";
divEl.className = "questions";
var headerEl = document.createElement('h2');
headerEl.id = "question-area";
var button = document.createElement('input')
button.setAttribute ("type", "radio");

divEl.appendChild(headerEl);
divEl.appendChild(button);

//submit button
var submitBtnEl = document.querySelector("#submit-btn")
submitBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
})

//right and wrong answers
function quiz() {
  var userAnswer = document.getElementById('answer').value;
  if (userAnswer == answer) {
    alert("Correct!");
    score = (score) + 1;
    document.getElementById('score').textContent = score
  } else {
    alert("Try Again!")
    timer = (timer) - 15;
    document.getElementById('score').textContent = score;
  }
}

//high score

//button
var btn = document.getElementById("begin")
btn.addEventListener("click", timer);
