import useLocalStorageState from 'use-local-storage-state';

const LOCAL_STORAGE_KEY = 'ng-focus-mode';

function useFocusMode() {
  const [focusMode, setFocusMode] = useLocalStorageState(LOCAL_STORAGE_KEY, {
    defaultValue: false,
  });

  return {
    focusMode,
    setFocusMode,
  };
}

export default useFocusMode;
