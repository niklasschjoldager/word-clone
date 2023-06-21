import React from "react";

function Banner({ status, handleRestartGame, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <div className="banner-action">
        <p>Want to play again?</p>
        <button className="button" onClick={() => handleRestartGame()}>
          Play again
        </button>
      </div>
    </div>
  );
}

export default Banner;
