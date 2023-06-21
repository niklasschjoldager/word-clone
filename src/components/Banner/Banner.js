import React from "react";

function Banner({ gameStatus, answer, numOfGuesses }) {
  if (gameStatus === "running") return;

  if (gameStatus === "lost")
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses} {numOfGuesses <= 1 ? "guess" : "guesses"}
        </strong>
      </p>
    </div>
  );
}

export default Banner;
