import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);

    setScrollPosition(scrollPosition);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    listenToScrollEvent();
    return () => {
      document.removeEventListener("scroll", calculateScrollDistance);
    };
  }, []);

  return scrollPosition;
};

export default useScroll;
