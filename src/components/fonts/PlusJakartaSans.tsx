import { Plus_Jakarta_Sans } from '@next/font/google';

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

const FontPlusJakartaSans = () => (
  <style global jsx>{`
    html {
      font-family: ${font.style.fontFamily}, sans-serif;
    }
  `}</style>
);

export default FontPlusJakartaSans;
