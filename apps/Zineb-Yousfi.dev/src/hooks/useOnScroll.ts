import { useEffect, useState } from 'react';

export default function useScroll(threshold = 0) {
  const [isScrolled, setScrolled] = useState<boolean>();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();

    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return isScrolled;
}
