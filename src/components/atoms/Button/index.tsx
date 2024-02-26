import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "25px",
        color: "var(--lit-styleguide-text-color, #000)",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "var(--lit-styleguide-primary-color, #000)",
      }}
    >
      Button from vite react Count: {count}
    </button>
  );
};
