import { useCallback, useEffect, useState } from 'react';

export default function useScrollSpy(wrapper: string, wrapperOffset = 0) {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const scrollSpy = useCallback(() => {
    const wrapperEl = document.getElementById(wrapper);

    // Return early.
    if (!wrapperEl) return;

    // Get the relevant measurements and positions
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const elementOffsetTop = wrapperEl.offsetTop - wrapperOffset;
    const elementHeight = wrapperEl.offsetHeight;
    const elementTop = wrapperEl.getBoundingClientRect().top - wrapperOffset;

    // Calculate percentage of the element that's been seen
    const distance = scrollTop - elementOffsetTop;
    const progress = Math.round(
      distance / ((elementHeight - viewportHeight) / 100)
    );

    // Restrict the range to between 0 and 100
    const percentage = Math.min(100, Math.max(0, progress));
    setScrollProgress(percentage);

    /**
     * Watch active slug
     */
    const items = document.querySelectorAll<HTMLElement>('[data-ss]');
    let currentActiveSlug = currentSlug;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const slug = item.dataset.ss || null;
      const offsetTop: number = Number(item.dataset.ssMt) + 5 || 0;

      const { top } = item.getBoundingClientRect();
      const fromTop = top - offsetTop;

      if (fromTop < 0) {
        currentActiveSlug = slug;

        continue;
      }

      break;
    }

    if (elementTop > 0) {
      setCurrentSlug(null);
    } else {
      setCurrentSlug(currentActiveSlug);
    }
  }, [currentSlug, wrapper, wrapperOffset]);

  useEffect(() => {
    scrollSpy();

    document.addEventListener('scroll', scrollSpy);
    return () => {
      document.removeEventListener('scroll', scrollSpy);
    };
  });

  return { currentSlug, scrollProgress };
}
