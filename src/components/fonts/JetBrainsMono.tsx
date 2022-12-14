import { JetBrains_Mono as JetBrainsMono } from '@next/font/google';

const font = JetBrainsMono({
  subsets: ['latin'],
});

function FontJetBrainsMono() {
  return (
    <style global jsx>{`
      code,
      kbd,
      samp,
      pre {
        font-family: ${font.style.fontFamily}, sans-serif;
      }
    `}</style>
  );
}

export default FontJetBrainsMono;
