import Board from "./board";
import { useState } from "react";



const Game = () => {
  const initialHistory = new Array(9).fill(null);
  const [history, setHistory] = useState(initialHistory);
  const [playerO, setPlayerO] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleBoxClick = (index) => {

    if (!history[index] && !winner) {
      const newHistory = [...history];
      newHistory[index] = playerO ? 'O' : 'X';
      setHistory(newHistory);
      setPlayerO(!playerO);

      const winnerSymbol = checkWinner(newHistory);
      if(winnerSymbol) {
        setWinner(winnerSymbol)
      } else if (newHistory.every(square => square !== null)) {
        setIsDraw(true);
      }
    }
       
    }

    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const checkWinner = (history) => {
      for (let pattern of winPattern) {
        let [pos1, pos2, pos3] = pattern;
        if(history[pos1] && history[pos1] === history[pos2] && history[pos1] === history[pos3]) {
          return history[pos1];
        }
      }
      return null; 
    }

    const handleNewGame = () => {
      setHistory(initialHistory);
      setPlayerO(true);
      setWinner(null);
      setIsDraw(false);
    }

  return (
    <main className="main_section"> 
      <h1 className="game_title">Tic-Tac-Toe</h1>
      <div className="winner_wrap">
      {winner && <span className="winner_box">Congratulations The Winner is: {winner}</span>}
      {isDraw && <span className="winner_box">It`s a draw! start new game</span>}
      </div>
      <Board  squares={history} onClick = {handleBoxClick } />
      <button id="reset_btn" type="reset" onClick={handleNewGame}>New Game</button>
    </main>
  );
};

export default Game;