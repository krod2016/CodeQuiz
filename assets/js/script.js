//question area
var questionAreaEl = document.querySelector("#question-area")

function renderQuestion(questionIndex) {
  var currentQuestion = questions[questionIndex]
  let element = document.createElement("div");
  element.textContent = currentQuestion.question
  questionAreaEl.appendChild(element)

  for (let i = 0; i < questions.length; i++)
  {

  }
}

//timer
function timer() {
  console.log("click")
  renderQuestion(0)
  var sec = 120;
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

//right and wrong answers
function quiz() {
  var userAnswer = document.getElementById('answer').value;
  if (userAnswer == answer) {
    alert("Correct!");
    score = (score) + 1;
    document.getElementById('score').innerHTML = score
  } else {
    alert("Try Again!")
    timer = (timer) - 5;
    document.getElementById('score').innerHTML = score;
  }
}


//high score

//button
var btn = document.getElementById("begin")
btn.addEventListener("click", timer);