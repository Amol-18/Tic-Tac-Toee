* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  transition: background 0.3s, color 0.3s;
  padding: 20px;
}

body.dark-mode {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: #fff;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, color 0.3s;
  width: 100%;
  max-width: 400px;
}

body.dark-mode .container {
  background-color: #2c3e50;
  color: #fff;
}

h1 {
  margin-bottom: 20px;
  color: #333;
  font-size: 2rem;
}

body.dark-mode h1 {
  color: #fff;
}

.theme-toggle {
  margin-bottom: 20px;
}

#themeBtn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}

#themeBtn:hover {
  background-color: #0056b3;
}

.player-names {
  margin-bottom: 20px;
}

.player-names input {
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
  font-size: 0.9rem;
}

#startBtn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 10px;
}

#startBtn:hover {
  background-color: #0056b3;
}

.status {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
  font-weight: bold;
}

body.dark-mode .status {
  color: #fff;
}

.scoreboard {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #555;
}

body.dark-mode .scoreboard {
  color: #fff;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

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

body.dark-mode .cell {
  background-color: #34495e;
  color: #fff;
}

.cell:hover {
  background-color: #e0e0e0;
}

body.dark-mode .cell:hover {
  background-color: #2c3e50;
}

.cell.winner {
  background-color: #4caf50;
  color: white;
  animation: bounce 0.5s ease-in-out;
}

@keyframes bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.reset-btn {
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  width: 100%;
  max-width: 200px;
}

.reset-btn:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.footer {
  margin-top: 20px;
  font-size: 0.8rem;
  color: #777;
}

body.dark-mode .footer {
  color: #fff;
}

/* Mobile-Specific Adjustments */
@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  .status {
    font-size: 1rem;
  }

  .cell {
    font-size: 1.5rem;
  }

  .reset-btn {
    font-size: 0.8rem;
  }

  .footer {
    font-size: 0.7rem;
  }
}
