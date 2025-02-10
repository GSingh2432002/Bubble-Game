var timer = 60;
var score = 0;
var hitRandomNumber = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#score-variable").textContent = score;
}

function getNewHit() {
  hitRandomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hit-variable").textContent = hitRandomNumber;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 360; i++) {
    var randomNumberBubble = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumberBubble}</div>`;
  }

  document.querySelector("#panel-bottom").innerHTML = clutter;
}

function runTimer() {
  const clearOutInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-variable").textContent = timer;
    } else {
      clearInterval(clearOutInterval);
      document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function main() {
  document
    .querySelector("#panel-bottom")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("bubble")) {
        var clickedNumber = Number(details.target.textContent);
        if (hitRandomNumber === clickedNumber) {
          increaseScore();
          makeBubble();
          getNewHit();
        }
      }
    });
}

runTimer();
makeBubble();
getNewHit();
main();
