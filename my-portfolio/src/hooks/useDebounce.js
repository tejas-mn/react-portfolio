import { useEffect, useState } from "react"

export const useDebounce = (fn, delay) => {
    const [time, setTime] = useState(null);
  
    useEffect(() => {
      // Cleanup function to clear timeout on unmount or 
      // whenever `fn` or `delay` changes (cancels out previous timeouts)
      return () => {
        clearTimeout(time);
      };
    }, [fn, delay]);
  
    return (...args) => {
      clearTimeout(time);
      setTime(setTimeout(() => {
        fn(...args);
      }, delay));
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