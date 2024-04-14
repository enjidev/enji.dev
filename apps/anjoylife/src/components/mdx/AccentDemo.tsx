import clsx from 'clsx';
import { useState } from 'react';

function AccentDemo() {
  const accents = ['violet', 'red', 'blue', 'orange', 'green', 'pink'] as const;

  const [accent, setAccent] = useState<typeof accents[number]>('violet');

  const handleClick = () => {
    const newAccent = accents[accents.indexOf(accent) + 1] || accents[0];

    // change the html data-accent
    document.documentElement.setAttribute('data-accent', newAccent);

    // set new active accent
    setAccent(newAccent);
  };

  const getButtonText = (color: typeof accents[number]): string => {
    switch (color) {
      case 'violet':
        return `This is perfect 👌`;
      case 'red':
        return `I look brave, don't I? 😡`;
      case 'blue':
        return `This is good 🤩`;
      case 'orange':
        return `Are you serious? 👀`;
      case 'green':
        return `Ah green, not bad 😁`;
      case 'pink':
        return `Okay, bring me back to violet! 😭`;
      default:
        return `Change the accent color!`;
    }
  };

  return (
    <div className={clsx('my-12 flex items-center justify-center')}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          [data-accent='red'] {
            --tw-ta-accent-50: 254 242 242;
            --tw-ta-accent-100: 254 226 226;
            --tw-ta-accent-200: 254 202 202;
            --tw-ta-accent-300: 252 165 165;
            --tw-ta-accent-400: 248 113 113;
            --tw-ta-accent-500: 239 68 68;
            --tw-ta-accent-600: 220 38 38;
            --tw-ta-accent-700: 185 28 28;
            --tw-ta-accent-800: 153 27 27;
            --tw-ta-accent-900: 127 29 29;
          }

          [data-accent='orange'] {
            --tw-ta-accent-50: 255 247 237;
            --tw-ta-accent-100: 255 237 213;
            --tw-ta-accent-200: 254 215 170;
            --tw-ta-accent-300: 253 186 116;
            --tw-ta-accent-400: 251 146 60;
            --tw-ta-accent-500: 249 115 22;
            --tw-ta-accent-600: 234 88 12;
            --tw-ta-accent-700: 194 65 12;
            --tw-ta-accent-800: 154 52 18;
            --tw-ta-accent-900: 124 45 18;
          }

          [data-accent='green'] {
            --tw-ta-accent-50: 240 253 244;
            --tw-ta-accent-100: 220 252 231;
            --tw-ta-accent-200: 187 247 208;
            --tw-ta-accent-300: 134 239 172;
            --tw-ta-accent-400: 74 222 128;
            --tw-ta-accent-500: 34 197 94;
            --tw-ta-accent-600: 22 163 74;
            --tw-ta-accent-700: 21 128 61;
            --tw-ta-accent-800: 22 101 52;
            --tw-ta-accent-900: 20 83 45;
          }

          [data-accent='pink'] {
            --tw-ta-accent-50: 253 242 248;
            --tw-ta-accent-100: 252 231 243;
            --tw-ta-accent-200: 251 207 232;
            --tw-ta-accent-300: 249 168 212;
            --tw-ta-accent-400: 244 114 182;
            --tw-ta-accent-500: 236 72 153;
            --tw-ta-accent-600: 219 39 119;
            --tw-ta-accent-700: 190 24 93;
            --tw-ta-accent-800: 157 23 77;
            --tw-ta-accent-900: 131 24 67;
          }
        `}
      </style>
      <button
        type="button"
        className={clsx('button button--solid button--big')}
        onClick={handleClick}
      >
        {getButtonText(accent)}
      </button>
    </div>
  );
}

export default AccentDemo;
