import { useEffect, useState } from 'react';

export default function useScrollSpy() {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  useEffect(() => {
    const scrollSpy = () => {
      const items = document.querySelectorAll<HTMLElement>('[data-ss]');

      let currentActiveSlug = currentSlug;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const slug = item.dataset.ss || null;
        const offsetTop: number = Number(item.dataset.ssMt) + 5 || 0;

        const { top } = item.getBoundingClientRect();

        if (top - offsetTop < 0) {
          currentActiveSlug = slug;
        }
      }

      setCurrentSlug(currentActiveSlug);
    };

    scrollSpy();
    document.addEventListener('scroll', scrollSpy);
    return () => {
      document.removeEventListener('scroll', scrollSpy);
    };
  }, [currentSlug]);

  return currentSlug;
}
