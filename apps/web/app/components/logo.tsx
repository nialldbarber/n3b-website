"use client";

import { useState } from "react";

const setColors = ["text-blue-400", "text-red-400", "text-green-400"];

export function Logo(): JSX.Element {
  const [colorIndex, setColorIndex] = useState(0);
  const color = setColors[colorIndex];

  const handleMouseEnter = (): void => {
    const nextIndex = (colorIndex + 1) % setColors.length;
    setColorIndex(nextIndex);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <p className={`${color} text-5xl`}>{`{ ... }`}</p>
    </div>
  );
}
