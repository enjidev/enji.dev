import { useEffect, useState } from 'react';

export default function useScrollTop() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY);
    };
    onScroll();

    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollPosition;
}
