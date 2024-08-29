// useToggleText.ts
import { useState } from 'react';

export const useToggleText = (fullText: string) => {
  const [expandedText, setExpandedText] = useState(false);

  const toggleText = () => {
    setExpandedText(!expandedText);
  };

  const getTextToShow = () => {
    const firstPart = fullText.split('.')[0] + '.';
    return expandedText ? fullText : firstPart;
  };

  return {
    expandedText,
    toggleText,
    getTextToShow,
  };
};
