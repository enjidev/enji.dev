import { Plus_Jakarta_Sans as PlusJakartaSans } from '@next/font/google';

const font = PlusJakartaSans({
  subsets: ['latin'],
});

function FontPlusJakartaSans() {
  return (
    <style global jsx>{`
      html {
        font-family: ${font.style.fontFamily}, sans-serif;
      }
    `}</style>
  );
}

export default FontPlusJakartaSans;
