document.addEventListener("DOMContentLoaded", function() {
  const boardSize = 5;
  const totalLights = boardSize * boardSize;
  const timeLimit = 300;
  let targetLights;
  let moves = 0;
  let timer;
  let startTime;

  const gameBoard = document.querySelector(".game-board");
  const targetLightsDisplay = document.getElementById("target-lights");
  const movesDisplay = document.getElementById("moves");
  const timeDisplay = document.getElementById("time");
  const newGameButton = document.getElementById("new-game");
  const reloadButton = document.getElementById("reload");

  initializeGame();

  newGameButton.addEventListener("click", startNewGame);
  reloadButton.addEventListener("click", reloadGame);

  function initializeGame() {
    resetBoard();
    generateRandomTarget();
    renderBoard();
    resetStats();
    startTimer();
    chaseTheLights();
  }

  function startNewGame() {
    initializeGame();
  }

  function reloadGame() {
    resetStats();
    renderBoard();
    startTimer();
    chaseTheLights();
  }

  function resetStats() {
    moves = 0;
    movesDisplay.textContent = moves;
    clearInterval(timer);
    startTime = new Date();
    updateTime();
  }

  function startTimer() {
    timer = setInterval(updateTime, 1000);
    startTime = new Date();
  }

  function updateTime() {
    const now = new Date();
    const elapsedTime = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeDisplay.textContent = formattedTime;
  }

  function resetBoard() {
    gameBoard.innerHTML = "";
    for (let i = 0; i < totalLights; i++) {
      const light = document.createElement("div");
      light.classList.add("light");
      light.dataset.index = i;
      light.addEventListener("click", toggleLight);
      gameBoard.appendChild(light);
    }
  }

  function generateRandomTarget() {
    targetLights = Math.floor(Math.random() * totalLights) + 1;
    targetLightsDisplay.textContent = targetLights;
  }

  function renderBoard() {
    const lights = document.querySelectorAll(".light");
    lights.forEach(light => {
      light.classList.remove("on");
      light.style.backgroundColor = "black";
    });
  }

  function toggleLight() {
    const index = parseInt(this.dataset.index);
    const row = Math.floor(index / boardSize);
    const col = index % boardSize;
    toggleSingleLight(index);
    toggleSingleLight(index - 1);
    toggleSingleLight(index + 1);
    toggleSingleLight(index - boardSize);
    toggleSingleLight(index + boardSize);
    updateStats();
    checkWin();
  }

  function toggleSingleLight(index) {
    if (index >= 0 && index < totalLights) {
      const light = document.querySelector(`.light[data-index="${index}"]`);
      light.classList.toggle("on");
      light.style.backgroundColor = light.classList.contains("on") ? "yellow" : "black";
    }
  }

  function updateStats() {
    moves++;
    movesDisplay.textContent = moves;
  }

  function checkWin() {
    const onLights = document.querySelectorAll(".light.on").length;
    const now = new Date();
    const elapsedTime = Math.floor((now - startTime) / 1000);
    if (onLights === totalLights) {
      clearInterval(timer);
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime % 60;
      const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      const message = `Congratulations! You won in ${moves} moves and ${formattedTime}!`;
      alert(message);
    } else if (elapsedTime >= timeLimit) {
      clearInterval(timer);
      alert("Time over. Good luck next time!");
    }
  }

  function chaseTheLights() {
    for (let row = 1; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const index = row * boardSize + col;
        if (isLightOn(index - boardSize)) {
          toggleLight.call(document.querySelector(`.light[data-index="${index}"]`));
        }
      }
    }
  }

  function isLightOn(index) {
    if (index >= 0 && index < totalLights) {
      return document.querySelector(`.light[data-index="${index}"]`).classList.contains("on");
    }
    return false;
  }

  // Ajax запит за JSON даними
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        // Обробляємо дані гри
        handleGameData(response);
      } else {
        console.error('Failed to fetch game data');
      }
    }
  };

  xhr.open("GET", "game.json");
  xhr.send();

  function handleGameData(data) {
    // Обробка отриманих даних гри
    console.log(data);
  }
});

