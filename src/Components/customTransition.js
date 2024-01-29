import { useEffect } from "react";

const useCustomTransition = (selector, classes) => {
  useEffect(() => {
    const element = document.querySelector(selector);
    element.classList.add(...classes);

    return () => {
      element.classList.remove(...classes);
    };
  }, [selector, classes]);
};

export default useCustomTransition;