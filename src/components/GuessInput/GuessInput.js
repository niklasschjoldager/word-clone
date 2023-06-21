import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        minLength="5"
        maxLength="5"
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default GuessInput;
