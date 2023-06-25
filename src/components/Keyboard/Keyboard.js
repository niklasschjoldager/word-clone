import React from "react";
import classNames from "classnames";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ colors }) {
  return (
    <div class="keyboard">
      {ROWS.map((row, index) => {
        return (
          <div key={index} className="keyboard-row">
            {row.map((key) => (
              <div key={key} className={classNames("key", colors[key])}>
                {key}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
