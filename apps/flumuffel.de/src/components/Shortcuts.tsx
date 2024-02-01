import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

import Toast from '@/components/Toast';

import useFocusMode from '@/hooks/useFocusMode';
import useGlobal from '@/hooks/useGlobal';
import useShortcut from '@/hooks/useShortcut';
import useTheme from '@/hooks/useTheme';

const focusToast = {
  title: 'Focus Modus {STATUS}',
  message:
    'Focus trägt dazu bei, Ablenkungen zu reduzieren, indem schwebende Komponenten wie Navigation und Reaktionen ausgeblendet werden.',
};

function Shortcuts() {
  const toastRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const { isQuickAccessOpen, setQuickAccessOpen } = useGlobal();
  const { focusMode, setFocusMode } = useFocusMode();

  useShortcut('KeyD', () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  });

  useShortcut('KeyQ', () => {
    setQuickAccessOpen(!isQuickAccessOpen);
  });

  useShortcut('KeyF', () => {
    setFocusMode(!focusMode);
  });

  useEffect(() => {
    if (toastRef.current) {
      toast.remove(toastRef.current.id);
    }
    if (focusMode) {
      toastRef.current = toast.custom((t) => (
        <Toast
          title={focusToast.title.replace('{STATUS}', 'an')}
          message={focusToast.message}
          t={t}
        />
      ));
    } else {
      toastRef.current = toast.custom((t) => (
        <Toast
          title={focusToast.title.replace('{STATUS}', 'aus')}
          message={focusToast.message}
          t={t}
        />
      ));
    }
  }, [focusMode]);

  return null;
}

export default Shortcuts;
