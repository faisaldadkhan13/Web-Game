document.addEventListener('DOMContentLoaded', function () {
    const gameBoard = document.getElementById('game-board');
    const scoreElement = document.getElementById('score-value');
    let score = 0;

    // Function to create a random number between 1 and 4
    function getRandomNumber() {
        return Math.floor(Math.random() * 4) + 1;
    }

    // Function to create a game tile
    function createGameTile() {
        const tile = document.createElement('div');
        tile.classList.add('game-tile');
        tile.textContent = getRandomNumber();
        tile.addEventListener('click', function () {
            if (parseInt(tile.textContent) === score + 1) {
                score++;
                scoreElement.textContent = score;
                gameBoard.removeChild(tile);
                createGameTile();
            }
        });
        return tile;
    }

    // Function to initialize the game board
    function initializeGameBoard() {
        for (let i = 1; i <= 16; i++) {
            const tile = createGameTile();
            gameBoard.appendChild(tile);
        }
    }

    initializeGameBoard();
});
