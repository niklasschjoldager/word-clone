import React from "react";
import classNames from "classnames";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(guesses) {
  const statusObj = {};
  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ guesses }) {
  const statusByLetter = getStatusByLetter(guesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => {
        return (
          <div key={index} className="keyboard-row">
            {row.map((key) => (
              <div key={key} className={classNames("key", statusByLetter[key])}>
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
