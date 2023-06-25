import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [keyboardColors, setKeyboardColors] = React.useState({});

  React.useEffect(() => {
    let guessColors = {};
    for (let i = 0; i < guesses.length; i++) {
      guesses[i].forEach((guess) => {
        if (guess.status === "correct" || guess.status === "incorrect") {
          guessColors[guess.letter] = guess.status;
        } else if (
          guess.status === "misplaced" &&
          guessColors[guess.letter] !== "correct"
        ) {
          guessColors[guess.letter] = guess.status;
        }
      });
    }
    setKeyboardColors(guessColors);
  }, [guesses]);

  const handleRestartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("running");
  };

  const handleSubmitGuess = (tentativeGuess) => {
    const guess = checkGuess(tentativeGuess, answer);

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    const hasWon = tentativeGuess.toUpperCase() === answer;
    const hasLost = nextGuesses.length >= NUM_OF_GUESSES_ALLOWED;

    if (hasWon) {
      setGameStatus("won");
    } else if (hasLost) {
      setGameStatus("lost");
    }

    const colors = {};
    guess.forEach((guess) => {
      if (guess.status === "correct" || guess.status === "incorrect") {
        colors[guess.letter] = guess.status;
        return;
      }

      return null;
    });
    const nextKeyboardColors = { ...keyboardColors, ...colors };
    setKeyboardColors(nextKeyboardColors);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <Keyboard colors={keyboardColors} />
      {gameStatus === "won" && (
        <WonBanner
          handleRestartGame={handleRestartGame}
          numOfGuesses={guesses.length}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner handleRestartGame={handleRestartGame} answer={answer} />
      )}
    </>
  );
}

export default Game;
