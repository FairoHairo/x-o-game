import { FC, MouseEventHandler, useState } from "react";
export interface SquareProps {
  number: string | null;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Square: FC<SquareProps> = ({ number, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {number}
    </button>
  );
};
