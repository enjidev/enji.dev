import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { PropsWithChildren } from 'react';

interface PortalProps {
  selector: string;
}

function Portal({ selector, children = null }: PropsWithChildren<PortalProps>) {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    setContainer(document.querySelector(selector));
  }, [selector]);

  return container ? createPortal(children, container) : null;
}

export default memo(Portal);
