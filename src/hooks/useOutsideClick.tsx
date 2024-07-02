import { useEffect } from 'react';

const useOutsideClick = (refs: React.RefObject<HTMLElement>[], callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let clickedOutsideAllRefs = true;

      for (let ref of refs) {
        if (ref.current && ref.current.contains(event.target as Node)) {
          clickedOutsideAllRefs = false;
          break;
        }
      }

      if (clickedOutsideAllRefs) callback();
    };

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [refs, callback]);
};

export default useOutsideClick;
