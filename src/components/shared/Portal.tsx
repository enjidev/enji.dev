import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  selector: string;
  children: React.ReactNode;
}

function Portal({ selector, children }: PortalProps) {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    setContainer(document.querySelector(selector));
  }, [selector]);

  return container ? createPortal(children, container) : null;
}

export default memo(Portal);
