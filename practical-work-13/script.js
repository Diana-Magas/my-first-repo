document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start");
    const scoreDisplay = document.getElementById("Score");
    const timeDisplay = document.getElementById("time");
    const player = document.getElementById("player");
    const gameDiv = document.getElementById("game"); 

    let score = 0;
    let timeLeft = 0;
    let timerInterval;

    startButton.addEventListener("click", function() {
        const difficultySelect = document.getElementById("difficulty");
        const colorSelect = document.getElementById("color");

        const difficulty = difficultySelect.value;
        const color = colorSelect.value;

        if (difficulty === "" || color === "") {
            alert("Please select difficulty and color before starting the game.");
            return;
        }

        score = 0;
        scoreDisplay.textContent = score;

        timeLeft = getTimeForDifficulty(difficulty);
        timeDisplay.textContent = timeLeft;

        player.style.backgroundColor = color;
        player.style.left = Math.random() * (window.innerWidth - 100) + "px";
        player.style.top = Math.random() * (window.innerHeight - 100) + "px";

        gameDiv.style.display = "block"; 
        player.style.display = "block"; 

        startButton.disabled = true;

        document.getElementById("menu").style.display = "none";
        document.querySelector("h1").style.display = "none";

        timerInterval = setInterval(function() {
            timeLeft--;
            timeDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                startButton.disabled = false;
                alert("Game Over! Your score: " + score + "\nCongratulations! Please reload the page to start a new game.");
                gameDiv.style.display = "none"; 
                player.style.display = "none"; 

                document.getElementById("menu").style.display = "block";
                document.querySelector("h1").style.display = "block";
            }
        }, 1000);

        player.addEventListener("click", function() {
            score++;
            scoreDisplay.textContent = score;
            resetPlayerPosition();
        });
    });

    function resetPlayerPosition() {
        player.style.left = Math.random() * (window.innerWidth - 100) + "px";
        player.style.top = Math.random() * (window.innerHeight - 100) + "px";
    }

    function getTimeForDifficulty(difficulty) {
        switch (difficulty) {
            case "Easy peasy lemon squeezy":
                return 15; 
            case "It's in the middle of the road":
                return 10; 
            case "Like finding a needle.":
                return 5;
            default:
                return 15;
        }
    }
});

