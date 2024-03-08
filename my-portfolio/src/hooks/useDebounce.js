import { useEffect, useRef } from "react"

export const useDebounce = (fn, delay) => {
    const timeoutRef = useRef(null);
  
    useEffect(() => {
      // Cleanup function to clear timeout on unmount or 
      // whenever `fn` or `delay` changes (cancels out previous timeouts)
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }, [fn, delay]);
  
    return (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    };
}

///OLD CODE
// const debouncedSearch = debounce(fetchSearchResults, 500);

// function debounce(fn, t) {
//   let id;
//   return function (...args) {
//     clearTimeout(id);
//     id = setTimeout(() => fn(...args), t);
//   }
// };