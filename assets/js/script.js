// Get the start button element from the HTML document.
var startBtn = document.getElementById("start-btn"); 
// Get the elements from the HTML document by their section identifier.
var introSectionEl = document.getElementById("intro-section");
var initialSectionEl = document.getElementById("initial-section");
var scoreEl = document.getElementById("score");
var questionSectionEl = document.getElementById("question-section");
var titleEl = document.getElementById("title");
var timerEl = document.getElementById("timer");
var choicesEl = document.querySelectorAll(".choices");
var initialsInput = document.getElementById("initial-input");
var saveBtn = document.getElementById("save-btn");
//  Initialize the variables to 0
var questionIndex = 0;
var setIntervalId = 0;
var score = 0
//  Array of questions that have been selected for this code quiz challenge.
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
// formula to display the timer for the questions array
var timeLeft = questionsArray.length * 15;



// This block of code will run when the start button is clicked.

function startQuiz() {
  introSectionEl.setAttribute("class", "hide");
  questionSectionEl.removeAttribute("class");
  // Line 73 - Line 74 Set up a timer that calls the countDown function every 1000 milliseconds (1 second)
  setIntervalId = setInterval(countDown, 1000);
  showQuestions(questionIndex);
}

// This block of code will count down the timer for the questions array and set the interval for the time left and when to reset.
function countDown() {
  timerEl.textContent = timeLeft--;
  if (timeLeft === 0) {
    clearInterval(setIntervalId);
  }
    }

    // Allows the server to define the function to showQuestions that takes a question index as parameter 
    //  This function will show the question section responses and set the add an event listener to the check the answer.
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

// This code checks the value that takes an event parameter and to ensure it matches the correct answer for the current question.
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
// Lines 101-110 are if and else statements that check the values and increment of the score is the answer is correct +20 or incorrect -10. Or if the there are more questions or if the quiz has ended.

function nextQuestion() {
  questionIndex++;
  showQuestions(questionIndex);
}

//  Lines 111-121 declare the function of the ext question and the increment to move to the next question and to declare the score variables.
var scores;

//  Lines 124-126 check if there are scores stored in local storage and if no scores are found (null--like empty) initialize the scores as an empty array. The json means that if scores are found retrieve them from local storage and parse them as JSON.
if(localStorage.getItem("scores") === null) {
  scores = []
} else {
  scores = JSON.parse(localStorage.getItem("scores"));
}

// Lines 131-147 end the quiz if there are no more questions or if the quiz has ended and resets the question index to 0 and display the final score.
function endQuiz() {
  clearInterval(setIntervalId);
  questionIndex = 0
  questionSectionEl.setAttribute("class", "hide");
  initialSectionEl.removeAttribute("class");
  scoreEl.textContent = score
  saveBtn.addEventListener("click", function() {
    var initials = initialsInput.value;
    var obj = {
      initials: initials,
      score: score
    }
    scores.push(obj);
    localStorage.setItem("scores", JSON.stringify(scores));
    document.location.href = "scores.html";
  }) 
}


//  Add a click event listener to the start button to trigger the startQuiz function..
startBtn.addEventListener("click", startQuiz);


