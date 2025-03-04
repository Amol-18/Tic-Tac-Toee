/* Ensure the board and status text don't shift */
.status {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
  font-weight: bold;
  height: 40px; /* Fixed height to prevent layout shift */
}

/* Ensure the board doesn't shift */
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px; /* Fixed width for consistency */
  margin: 0 auto; /* Center the board */
}

/* Ensure cells don't shift */
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 15px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1 / 1; /* Ensure cells are square */
}

/* Confetti canvas positioning */
#confetti {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Ensure it doesn't block clicks */
  z-index: 9999; /* Ensure it appears above everything */
}
