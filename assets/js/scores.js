var scoresUl = document.getElementById("scoresUl");
var clearBtn = document.getElementById("clearBtn");

var scores = JSON.parse(localStorage.getItem("scores"))

function renderScores() {
    for(let i = 0; i < scores.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${scores[i].initials} - ${scores[i].score}`;
        scoresUl.appendChild(li);
    }
}

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    document.location.reload();
})

renderScores();