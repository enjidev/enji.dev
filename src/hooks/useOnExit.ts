import { useEffect, useState } from 'react';

export default function useOnExit(selector: string) {
  const [isExit, setIsExit] = useState<boolean>();

  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) return () => {};

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === false) {
          setIsExit(true);
        } else {
          setIsExit(false);
        }
      },
      {
        rootMargin: '0px 0px -100%',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [selector]);

  return isExit;
}
