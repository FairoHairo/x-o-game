import { FC, useState } from "react";
import { Board } from "../Board/Board";
import { calculateWinner } from "../helpers";

export const Game: FC<any> = (props) => {
  const [state, setState] = useState<any>([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const onClick = (i: number) => {
    const history = state.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(current.squares) || current.squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setState(history.concat([{ squares }]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  const statusRender = () => {
    const history = state;
    const current = history[history?.length - 1];
    const winner = calculateWinner(current.squares);

    if (winner) return "Winner: " + winner;

    const status = `Next player: ${xIsNext ? "X" : "O"}`;

    return status;
  };

  const history = state;
  const current = history[stepNumber];

  const jumpTo = (m: any) => {
    console.log(m);
    setStepNumber(m);
    setXIsNext(m % 2 === 0);
  };

  const moves = history.map((step: number, move: number) => {
    const desc = move ? `K ходу # ${move}` : "К началу игры";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board state={current.squares} onClick={(i: number) => onClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{statusRender()}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
