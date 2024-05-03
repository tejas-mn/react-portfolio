import { useCallback, useState } from "react";

const useOnScreen = ({
  root = null,
  rootMargin = "",
  threshold = 0
} = {}) => {
  const [observer, setOserver] = useState();
  const [isIntersecting, setIntersecting] = useState(false);

  const measureRef = useCallback(
    (node) => {
      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIntersecting(entry.isIntersecting);
          },
          { root, rootMargin, threshold }
        );
        //observer.observe(node);
        observer.observe(document.querySelector('.project-box:last-child'));
        setOserver(observer);
      }
    },
    [root, rootMargin, threshold]
  );

  return { measureRef, isIntersecting, observer };
};

export default useOnScreen;

//https://codesandbox.io/p/sandbox/infinite-scroll-with-intersection-observer-3bps7?file=%2Fsrc%2FApp.js%3A9%2C1-10%2C53