import { JetBrains_Mono } from '@next/font/google';

const font = JetBrains_Mono({
  subsets: ['latin'],
});

const FontJetBrainsMono = () => (
  <style global jsx>{`
    code,
    kbd,
    samp,
    pre {
      font-family: ${font.style.fontFamily}, sans-serif;
    }
  `}</style>
);

export default FontJetBrainsMono;
