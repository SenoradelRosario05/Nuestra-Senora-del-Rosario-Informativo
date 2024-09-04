


import { useState } from "react";

export const useFlip = () => {
  const [isFlipped, setIsFlipped] = useState<{ [key: number]: boolean }>({});

  const handleFlip = (index: number) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return { isFlipped, handleFlip };
};
