import { memo, useEffect } from 'react';

interface StructuredDataProps {
  data: string;
}
function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = data;
    document.body.appendChild(script);
  }, [data]);

  return null;
}

export default memo(StructuredData, () => true);
