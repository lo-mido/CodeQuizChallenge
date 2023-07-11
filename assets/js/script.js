var startBtn= document.getElementById("start-btn")
var introSectionEl= document.getElementById("intro-section")
 
var questionSectionEl=document.getElementById("question-section")
var titleEl=document.getElementById('title')
var timerEl=document.getElementById('timer')
var choicesEl = document.querySelectorAll(".choices")
var questionIndex=0
var questionsArray=[
    {
        title:"q 1",
        choices:["c1","c2","c3","c4"],
        answer:"c2" 
    },
    {
        title:"q 2",
        choices:["c1","c2","c3","c4"],
        answer:"c1" 
    },
    {
        title:"q 3",
        choices:["c1","c2","c3","c4"],
        answer:"c4" 
    },
    {
        title:"q 4",
        choices:["c1","c2","c3","c4"],
        answer:"c2" 
    },
    {
        title:"q 5",
        choices:["c1","c2","c3","c4"],
        answer:"c4" 
    }
]

var timeLeft=questionsArray.length* 15

/*
  1. hide intro section
  2. start timer
  3. show questions
  4. data structure to store questions and choices

*/

var setIntervalId=0;

function startQuiz(){
  //  introSectionEl.classList.add("hide")
  introSectionEl.setAttribute("class","hide")
  questionSectionEl.removeAttribute("class")
  setIntervalId=setInterval(countDown,1000)
  showQuestions()
}

function countDown(){
 timerEl.textContent=timeLeft--
 if(timeLeft===0){
    clearInterval(setIntervalId)
 }
}

function showQuestions(){
    titleEl.textContent=questionsArray[questionIndex].title

    choicesEl[0].textContent=questionsArray[questionIndex].choices[0]

    choicesEl[1].textContent=questionsArray[questionIndex].choices[1]

    choicesEl[2].textContent=questionsArray[questionIndex].choices[2]

    choicesEl[3].textContent=questionsArray[questionIndex].choices[3]



}

function nextQuestion(event){
  var currentElement= event.target
  if(currentElement.matches("button")){
    questionIndex++
    showQuestions()
  }
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click",nextQuestion )