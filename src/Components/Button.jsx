import React from "react";

const Button = ({ color, children }) => {
  return (
    <button
      className={`px-2 py-1 text-sm font-semibold text-white rounded w-max ${color}`}
    >
      {children}
    </button>
  );
};

export default Button;
