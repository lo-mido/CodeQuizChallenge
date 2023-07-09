// ... existing code ...

// Initialize variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 60; // Total time in seconds
let timerInterval; // Holds the interval ID for the timer
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const submitBtn = document.getElementById("submit-btn");
const initialsForm = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = `Time: ${timeLeft}s`;
    } else {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000);
}

// Function to check the selected answer
function checkAnswer() {
  const selectedChoice = document.querySelector("input[name='choice']:checked");

  if (selectedChoice) {
    const choiceIndex = parseInt(selectedChoice.value);

    if (choiceIndex === quizData[currentQuestion].correctAnswer) {
      score++;
    } else {
      timeLeft -= 10; // Subtract 10 seconds for incorrect answer
      if (timeLeft < 0) {
        timeLeft = 0;
      }
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
}

// Function to show the quiz results
function showResults() {
  questionEl.style.display = "none";
  choicesEl.style.display = "none";
  scoreEl.textContent = `Your score: ${score}/${quizData.length}`;
  document.getElementById("results-container").style.display = "block";
}

// Event listener for submit button
submitBtn.addEventListener("click", checkAnswer);

// Event listener for initials form submission
initialsForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const initials = initialsInput.value;
  // Handle saving initials and score, e.g., send data to server, store in localStorage, etc.
  console.log("Initials:", initials);
  console.log("Score:", score);
});

// ... existing code ...
