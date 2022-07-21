import React from "react";

const Button = ({ styles, color, textColor, children }) => {
  return (
    <button
      className={`px-2 py-1 text-sm font-semibold rounded w-max ${styles} ${color} ${
        textColor ? textColor : "text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
