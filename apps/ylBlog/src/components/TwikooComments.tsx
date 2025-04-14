import { useEffect } from 'react';

interface TwikooConfig {
  envId: string;
  el: string;
}

interface Twikoo {
  init: (config: TwikooConfig) => void;
}

function TwikooComments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.min.js';
    script.async = true;

    script.onload = () => {
      const { twikoo } = window as unknown as { twikoo: Twikoo };
      twikoo.init({
        envId: 'https://twikoo-ylblog.vercel.app',
        el: '#tcomment',
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tcomment" />;
}

export default TwikooComments;
