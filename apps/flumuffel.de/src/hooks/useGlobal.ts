import { useContext } from 'react';

import { GlobalStateContext } from '@/providers/GlobalStateProvider';

function useGlobal() {
  return useContext(GlobalStateContext);
}

export default useGlobal;
