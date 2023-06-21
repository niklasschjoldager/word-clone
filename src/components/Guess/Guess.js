import React from "react";
import { range } from "../../utils";
import classNames from "classnames";

function Cell({ letter, status }) {
  return <span className={classNames("cell", status)}>{letter}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={value ? value[number].letter : undefined}
          status={value ? value[number].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
