import React from "react";

const Button = ({ onPress, color, title }) => (
  <button
    type="button"
    style={{
      color: "white",
      backgroundColor: color || "darkblue",
      borderRadius: "10",
      width: "100%"
    }}
    onClick={onPress}
  >
    {title}
  </button>
);

export default Button;
