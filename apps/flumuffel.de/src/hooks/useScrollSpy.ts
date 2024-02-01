import { useEffect, useState } from 'react';

export default function useScrollSpy(): {
  currentVisibles: Record<string, boolean>;
  currentSection: string;
} {
  const [currentSection, setCurrentSection] = useState<string>(undefined);
  const [currentVisibles, setCurrentVisibles] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const itemElements = document.querySelectorAll<HTMLElement>('[data-ss]');
    if (!itemElements.length) return () => {};

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const { target, isIntersecting } = entries[0];
      const slug = target.getAttribute('data-ss') as string;

      setCurrentVisibles((prev) => ({
        ...prev,
        [slug]: isIntersecting,
      }));

      if (isIntersecting) {
        setCurrentSection(slug);
      }
    };

    const observers: Array<IntersectionObserver> = [];

    itemElements.forEach((item) => {
      const threshold: number = Number(item.dataset.ssMt) || 0;

      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: `-${threshold}px 0px 0px 0px`,
      });

      observers.push(observer);
      observer.observe(item);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect);
    };
  }, []);

  return {
    currentSection,
    currentVisibles,
  };
}
