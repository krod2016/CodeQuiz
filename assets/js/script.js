//question area
var questionAreaEl = document.querySelector("#question-area")
var answerAreaEl = document.querySelector("#question-area")

function renderQuestion() {
  questionAreaEl.textContent = questions[0].question; 

//radio buttons for question and answers
var answerContainer = document.createElement('form');
// answerContainer 
var divEl = document.createElement('div');
divEl.id = "question-area";
divEl.className = "questions";
var headerEl = document.createElement('h2');
headerEl.id = "answer-area";
var button = document.createElement('input')
button.setAttribute ("type", "radio");
button.id = "question1";
var label = document.createElement('label')
label.textContent = questions[0].answers[0].text
label.setAttribute("for","question1")
button.value = questions[0].answers[0].text

var divEl1 = document.createElement('div');
divEl1.id = "question-area";
divEl1.className = "questions";
var headerEl1 = document.createElement('h2');
headerEl1.id = "answer-area";
var button1 = document.createElement('input')
button1.setAttribute ("type", "radio");
button1.id = "question2";
var label1 = document.createElement('label')
label1.textContent = questions[0].answers[1].text
label1.setAttribute("for","answer2")
button1.value = questions[0].answers[1].text 

var divEl2 = document.createElement('div');
divEl2.id = "question-area";
divEl2.className = "questions";
var headerEl2 = document.createElement('h2');
headerEl2.id = "answer-area";
var button2 = document.createElement('input')
button2.setAttribute ("type", "radio");
button2.id = "question3";
var label2 = document.createElement('label')
label2.textContent = questions[0].answers[2].text
label2.setAttribute("for","answer3")
button2.value = questions[0].answers[2].text 

var divEl3 = document.createElement('div');
divEl3.id = "question-area";
divEl3.className = "questions";
var headerEl3 = document.createElement('h2');
headerEl3.id = "answer-area";
var button3 = document.createElement('input')
button3.setAttribute ("type", "radio");
button3.id = "question4";
var label3 = document.createElement('label')
label3.textContent = questions[0].answers[3].text
label3.setAttribute("for","answer4")
button3.value = questions[0].answers[3].text 

headerEl.appendChild(button);
headerEl.appendChild(label);

headerEl1.appendChild(button1);
headerEl1.appendChild(label1);

answerContainer.appendChild(headerEl);
answerContainer.appendChild(headerEl1);

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
var submitBtnEl = document.querySelector("#submit")
submitBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
})

//button
var btn = document.getElementById("begin")
btn.addEventListener("click", timer);

//right and wrong answers
function quiz() {
  var userAnswer = document.getElementById('answer').value;
  if (userAnswer == answer) {
    alert("Correct!");
    score = (score) + 1;
    document.getElementById('score').textContent = score;
  } else {
    alert("Try Again!")
    timer = (timer) - 15;
    document.getElementById('score').textContent = score;
  }
}

//high score
function setStorage(data) {
	localStorage.setItem(storageKey, JSON.stringify(data));
};

function getStorage(){
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
  ledgerEl.innerHTML = html;
};

//button
var btn = document.getElementById("begin")
btn.addEventListener("click", timer);