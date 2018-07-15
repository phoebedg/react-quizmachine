import React from "react";

function Button({ handleClick, button }) {
  return (
    <button
      onClick={() => handleClick(button)}
      className="voting-button"
      value={button}
    >
      {button}
    </button>
  );
}

export default Button;
