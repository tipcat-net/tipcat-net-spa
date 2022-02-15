import { useEffect, useRef, useState } from 'react';

export const useComponentUnderCursor = (initialIsVisible) => {
  const [isComponentUnderCursor, setIsComponentUnderCursor] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentUnderCursor(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentUnderCursor, setIsComponentUnderCursor };
};
