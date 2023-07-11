var startBtn = document.getElementById("start-btn");
var introSectionEl = document.getElementById("intro-section");
var initialSectionEl = document.getElementById("initial-section");
var scoreEl = document.getElementById("score");
var questionSectionEl = document.getElementById("question-section");
var titleEl = document.getElementById("title");
var timerEl = document.getElementById("timer");
var choicesEl = document.querySelectorAll(".choices");
var initialsInput = document.getElementById("initial-input");
var saveBtn = document.getElementById("save-btn");
var questionIndex = 0;
var setIntervalId = 0;
var score = 0
var questionsArray = [
  {
    title: "Which one is NOT is a way to declare a variable?",
    choices: ["A. var", "B. const", "C. for", "D. let"],
    answer: "C. for",
  },
  {
    title: "How do we call a function in JavaScript?",
    choices: [
      "A. const functionName()",
      "B. functionName()",
      "C. for(let i = 0; i < length; i++)",
      "D. var()",
    ],
    answer: "B. functionName()",
  },
  {
    title: "How do we create JavaScript file?",
    choices: ["A. name.html", "B. name.css", "C. name.js", "D.php"],
    answer: "C. name.js",
  },
  {
    title: "What is the purpose of JQuery?",
    choices: [
      "A. provide an easy way to use JavaScript on your website to make it more interactive and attractive",
      "B. It a nuisance",
      "C. It makes the code run faster",
      "D . It debugs code for you",
    ],
    answer:
      "A. provide an easy way to use JavaScript on your website to make it more interactive and attractive",
  },
  {
    title: "What does a css file do?",
    choices: [
      "A. Adds functionality",
      "B. Adds styling",
      "C. Console.logs information",
      "D. Adds words to the page",
    ],
    answer: "B. Adds styling",
  },
];
var timeLeft = questionsArray.length * 15;





function startQuiz() {
  introSectionEl.setAttribute("class", "hide");
  questionSectionEl.removeAttribute("class");
  setIntervalId = setInterval(countDown, 1000);
  showQuestions(questionIndex);
}

function countDown() {
  timerEl.textContent = timeLeft--;
  if (timeLeft === 0) {
    clearInterval(setIntervalId);
  }
}

function showQuestions(questionIndex) {
  titleEl.textContent = questionsArray[questionIndex].title;
  choicesEl[0].textContent = questionsArray[questionIndex].choices[0];
  choicesEl[1].textContent = questionsArray[questionIndex].choices[1];
  choicesEl[2].textContent = questionsArray[questionIndex].choices[2];
  choicesEl[3].textContent = questionsArray[questionIndex].choices[3];
  choicesEl[0].addEventListener("click", (checkValue));
  choicesEl[1].addEventListener("click", (checkValue));
  choicesEl[2].addEventListener("click", (checkValue));
  choicesEl[3].addEventListener("click", (checkValue));
}

function checkValue(event) {
  if (event.target.innerHTML === questionsArray[questionIndex].answer) {
    score = score + 20
  } else {
    timeLeft = timeLeft - 10;
  }
  if (questionIndex >= questionsArray.length - 1) {
    endQuiz();
  } else {
    nextQuestion();
  }

}

function nextQuestion() {
  questionIndex++;
  showQuestions(questionIndex);
}

function endQuiz() {
  clearInterval(setIntervalId);
  questionIndex = 0
  questionSectionEl.setAttribute("class", "hide");
  initialSectionEl.removeAttribute("class");
  scoreEl.textContent = score
  saveBtn.addEventListener("click", function() {
    var initials = initialsInput.value;
    localStorage.setItem(initials, score);
  }) 
}


startBtn.addEventListener("click", startQuiz);


