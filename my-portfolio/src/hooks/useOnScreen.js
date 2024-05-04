import { useCallback, useState } from "react";

const useOnScreen = ({
  root = document.querySelector('.project-grid'),
  rootMargin = '0px',
  threshold = 0.5
} = {}) => {
  const [observer, setObserver] = useState();
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
        const ele = document.querySelector('.project-box:nth-last-child(1)');
        if (ele) { //to prevent error when modal is clicked while observing bcoz ele will be covered by modal
          observer.observe(ele);
          setObserver(observer);
        }
      }
    },
    [root, rootMargin, threshold]
  );

  return { measureRef, isIntersecting, observer };
};

export default useOnScreen;