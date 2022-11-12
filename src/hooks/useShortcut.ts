import { useCallback, useEffect } from 'react';

export default function useShortcut(key: string, callback: Function) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      // returns earlier if the pressed key doesn't match as the requested key.
      if (e.key !== key) return;

      // returns if the pressed key comes from an excluded element.
      const eTarget = e.target as HTMLInputElement;
      const tagName = eTarget.nodeName;
      const exclude =
        tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA';
      if (exclude) return;

      // call the callback.
      callback && callback();
    },
    [callback, key]
  );

  useEffect(() => {
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [handler]);
}
