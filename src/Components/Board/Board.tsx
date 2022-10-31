import { FC, MouseEventHandler, useState } from "react";
import { calculateWinner } from "../helpers";
import { Square } from "../Square/Square";

export interface BoardProps {
  state: Array<any>;
  onClick: any;
}

export const Board: FC<BoardProps> = ({ state, onClick }) => {
  const renderSquare = (i: number) => (
    <Square number={state[i]} onClick={() => onClick(i)} />
  );

  const renderBoardRow = (arr: Array<number>) =>
    arr.map((i) => renderSquare(i));

  return (
    <>
      <div>
        <div className="board-row">{renderBoardRow([1, 2, 3])}</div>
        <div className="board-row">{renderBoardRow([4, 5, 6])}</div>
        <div className="board-row">{renderBoardRow([7, 8, 9])}</div>
      </div>
    </>
  );
};
