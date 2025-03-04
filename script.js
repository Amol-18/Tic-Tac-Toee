const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.status');
const resetBtn = document.querySelector('.reset-btn');
const playerXInput = document.getElementById('playerX');
const playerOInput = document.getElementById('playerO');
const startBtn = document.getElementById('startBtn');
const themeBtn = document.getElementById('themeBtn');
const clickSound = document.getElementById('clickSound');
const winSound = document.getElementById('winSound');
const drawSound = document.getElementById('drawSound');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
let scoreX = 0;
let scoreO = 0;
let playerXName = 'Player X';
let playerOName = 'Player O';

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

// Confetti Animation
const confettiSettings = { target: 'confetti' };
const confetti = new ConfettiGenerator(confettiSettings);

// Theme Toggle
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Start Game
startBtn.addEventListener('click', () => {
  playerXName = playerXInput.value || 'Player X';
  playerOName = playerOInput.value || 'Player O';
  statusText.textContent = `${playerXName}'s Turn`;
  document.querySelector('.player-names').style.display = 'none';
});

// Handle Cell Click
function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (gameState[clickedCellIndex] !== '' || !gameActive) return;

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
  clickSound.play();

  checkForWinner();
}

// Check for Winner
function checkForWinner() {
  let roundWon = false;

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') continue;

    if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      roundWon = true;
      cells[a].classList.add('winner');
      cells[b].classList.add('winner');
      cells[c].classList.add('winner');
      winSound.play();
      confetti.render();
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer === 'X' ? playerXName : playerOName} Wins! 🎉`;
    if (currentPlayer === 'X') scoreX++;
    else scoreO++;
    updateScore();
    gameActive = false;
    return;
  }

  if (!gameState.includes('')) {
    statusText.textContent = "It's a Draw! 🤝";
    drawSound.play();
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `${currentPlayer === 'X' ? playerXName : playerOName}'s Turn`;
}

// Update Score
function updateScore() {
  document.getElementById('scoreX').textContent = scoreX;
  document.getElementById('scoreO').textContent = scoreO;
}

// Reset Game
function resetGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  statusText.textContent = `${playerXName}'s Turn`;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('winner');
  });
  confetti.clear();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
