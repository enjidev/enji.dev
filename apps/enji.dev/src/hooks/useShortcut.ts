import { useEffect } from 'react';

export default function useShortcut(code: string, handler: () => void) {
  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      if (e.code === code) {
        handler();
      }
    };

    document.addEventListener('keydown', handlePress);
    return () => {
      document.removeEventListener('keydown', handlePress);
    };
  }, [code, handler]);
}
