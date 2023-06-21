import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  const handleSubmitGuess = (tentativeGuess) => {
    const guess = checkGuess(tentativeGuess, answer);

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    const hasWon = tentativeGuess === answer;
    const hasLost = nextGuesses.length >= NUM_OF_GUESSES_ALLOWED;

    if (hasWon) {
      setGameStatus("won");
    } else if (hasLost) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
