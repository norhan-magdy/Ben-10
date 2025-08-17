// // celebration
// game-stats
let timeCounter = 0;
let triesCounter = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timeCounter++;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function incrementTries() {
  triesCounter++;
}

const originalFlipBlock = flipBlock;
flipBlock = function (block) {
  if (
    block.classList.contains("is-flipped") ||
    blocksContainer.classList.contains("no-clicking")
  ) {
    return;
  }

  block.classList.add("is-flipped");

  const flippedBlocks = document.querySelectorAll(
    ".is-flipped:not(.has-match)"
  );

  if (flippedBlocks.length === 2) {
    stopclicking();
    incrementTries();
    checkMatchingBlocks(flippedBlocks[0], flippedBlocks[1]);
  }
};

// نبدأ التايمر أول ما أول كارت يتقلب
let gameStarted = false;
blocksContainer.addEventListener(
  "click",
  () => {
    if (!gameStarted) {
      startTimer();
      gameStarted = true;
    }
  },
  { once: true }
);

// Winning
function checkForWin() {
  const matchedCards = document.querySelectorAll(".has-match");
  if (matchedCards.length === gameCards.length) {
    stopTimer();
    showWinMessage();
    startRainEffect();
  }
}

function showWinMessage() {
  const level = getCurrentLevel();
  const bestKey = `bestScore-${level}`;

  const currentScore = { time: timeCounter, tries: triesCounter };

  const oldScore = JSON.parse(localStorage.getItem(bestKey));

  let isNewBest = false;

  if (
    !oldScore ||
    currentScore.time < oldScore.time ||
    (currentScore.time === oldScore.time && currentScore.tries < oldScore.tries)
  ) {
    localStorage.setItem(bestKey, JSON.stringify(currentScore));
    isNewBest = true;
  }

  document.getElementById("win-time").textContent = timeCounter;
  document.getElementById("win-tries").textContent = triesCounter;

  const bestDiv = document.getElementById("best-score");
  bestDiv.innerHTML = oldScore
    ? ` Best Time: ${oldScore.time}s<br>Best Tries: ${oldScore.tries}`
    : "🏆 This is your first score!";

  if (isNewBest) {
    bestDiv.innerHTML += `<br><span style="color: green;">🌟 New Record!</span>`;
  }

  document.getElementById("win-message").classList.remove("hidden");
}

document.getElementById("restart-btn").addEventListener("click", () => {
  location.reload();
});

function startRainEffect() {
  const fallContainer = document.querySelector(".fall");
  setInterval(() => {
    const img = document.createElement("img");
    if (gameCards.length == 16) {
      img.src =
        Math.random() > 0.5
          ? "assets/celebration/sumo-red.png"
          : "assets/celebration/sumo-blue.png";
      img.classList.add("sumo");
      const size = Math.random() * 30 + 30; // random size between 30-60px
      img.style.width = size + "px";
    } else {
      img.src =
        Math.random() > 0.5
          ? "assets/celebration/chili-fries.png"
          : "assets/celebration/mrSmoothyCup.png";
      img.classList.add("food");
      const size = Math.random() * 80 + 30; // random size between 30-60px
      img.style.width = size + "px";
    }

    const left = Math.random() * 100; // left from 0% to 100%
    img.style.left = left + "vw";

    const duration = Math.random() * 3 + 3; // between 3s and 6s
    img.style.animationDuration = duration + "s";

    fallContainer.appendChild(img);

    // remove after falling
    setTimeout(() => {
      img.remove();
    }, duration * 1000);
  }, 100);
}

function getCurrentLevel() {
  const path = window.location.pathname;
  if (path.includes("easy")) return "easy";
  if (path.includes("medium")) return "medium";
  if (path.includes("hard")) return "hard";
  return "unknown";
}
