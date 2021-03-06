//question area
var questionAreaEl = document.querySelector("#question-area")
var answerAreaEl = document.querySelector("#question-area")
var index = 0

function renderQuestion(number) {
  questionAreaEl.textContent = questions[number].question;

  //radio buttons for question and answers
  var answerContainer = document.createElement('form');

  // question 1 Container 
  var divEl = document.createElement('div');
  divEl.id = "question-area";
  divEl.className = "questions";
  var headerEl = document.createElement('p');
  headerEl.id = "answer-area";
  var button = document.createElement('input')
  button.setAttribute("type", "radio");
  button.id = "question1";
  var label = document.createElement('label')
  label.textContent = questions[number].answers[0].text
  label.setAttribute("for", "question1")
  button.value = questions[number].answers[0].text

  var divEl1 = document.createElement('div');
  divEl1.id = "question-area";
  divEl1.className = "questions";
  var headerEl1 = document.createElement('p');
  headerEl1.id = "answer-area";
  var button1 = document.createElement('input')
  button1.setAttribute("type", "radio");
  button1.id = "question2";
  var label1 = document.createElement('label')
  label1.textContent = questions[number].answers[1].text
  label1.setAttribute("for", "answer2")
  button1.value = questions[number].answers[1].text

  var divEl2 = document.createElement('div');
  divEl2.id = "question-area";
  divEl2.className = "questions";
  var headerEl2 = document.createElement('p');
  headerEl2.id = "answer-area";
  var button2 = document.createElement('input')
  button2.setAttribute("type", "radio");
  button2.id = "question3";
  var label2 = document.createElement('label')
  label2.textContent = questions[number].answers[2].text
  label2.setAttribute("for", "answer3")
  button2.value = questions[number].answers[2].text

  var divEl3 = document.createElement('div');
  divEl3.id = "question-area";
  divEl3.className = "questions";
  var headerEl3 = document.createElement('p');
  headerEl3.id = "answer-area";
  var button3 = document.createElement('input')
  button3.setAttribute("type", "radio");
  button3.id = "question4";
  var label3 = document.createElement('label')
  label3.textContent = questions[number].answers[3].text
  label3.setAttribute("for", "answer4")
  button3.value = questions[number].answers[3].text

  headerEl.appendChild(button);
  headerEl.appendChild(label);

  headerEl1.appendChild(button1);
  headerEl1.appendChild(label1);

  headerEl1.appendChild(button2);
  headerEl1.appendChild(label2);

  headerEl1.appendChild(button3);
  headerEl1.appendChild(label3);

  answerContainer.appendChild(headerEl);
  answerContainer.appendChild(headerEl1);
  answerContainer.appendChild(headerEl2);
  answerContainer.appendChild(headerEl3);

  answerAreaEl.appendChild(answerContainer);
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

//submit button
var submitBtnEl = document.getElementById("submit")
submitBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('Add Event Listener')
  quiz()
  if (index < 5) {
    renderQuestion(index)
    index++
  }
});

//right and wrong answers
function quiz() {
    var userAnswer = document.getElementById('answer');
    if (userAnswer == answerAreaEl) {
      alert("Correct!");
      Timer = timer + 1;
      document.getElementById('TimerDisplay').textContent = timer;
    } else {
      alert("Try Again!")
      timer = timer - 15;
      document.getElementById('TimerDisplay').textContent = timer;
    }
  }

//high score
function setStorage(data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

function getStorage() {
  const data = localStorage.getItem(storageKey);
  if (!data) return [];
  return JSON.parse(data);
};

//displays high scores
function displayHighScores() {
  totalScores = getStorage()
  var html = "<h3> High Scores</h3><ol>";
  for (let pair of totalScores) {
    html += `<li>${pair.username}: ${pair.currentScore}</li>`;
  }
  html += "</ol>";
  ledgerEl.textContent = html;
};

//button
var btn = document.getElementById("begin")
btn.addEventListener("click", timer);