import { useEffect } from "react";

const useCustomTransition = (selector, classes) => {
    useEffect(() => {
      const addClasses = () => {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add(...classes);
          return () => {
            element.classList.remove(...classes);
          };
        }
      };
      const timeoutId = setTimeout(addClasses, 0);
      return () => clearTimeout(timeoutId);
    }, [selector, classes]);
  };

export default useCustomTransition;