import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

import { ClipboardIcon } from '@/components/shared/Icons';

import { getLangFromClassName } from '@/helpers/mdx';

type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export function Pre({ children, className, ...props }: PreProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  const language = getLangFromClassName(className);
  const [isCopied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async () => {
    try {
      const content = codeRef.current.textContent || '';
      await navigator.clipboard.writeText(content);

      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <div
      className={clsx(
        'code-block overflow-hidden rounded-xl border border-transparent bg-slate-800 text-slate-400 [color-scheme:dark]',
        'dark:border-slate-800 dark:bg-gray-900'
      )}
    >
      <pre {...props} ref={codeRef}>
        {children}
      </pre>
      <div
        className={clsx(
          'flex items-center justify-end border-t border-t-slate-600 text-xs',
          'dark:border-t-slate-800'
        )}
      >
        {language && (
          <>
            <div className={clsx('flex h-8 items-center px-2')}>{language}</div>
            <div
              className={clsx(
                'h-8 border-l border-slate-600',
                'dark:border-slate-800'
              )}
            />
          </>
        )}
        <button
          type="button"
          className={clsx(
            'flex h-8 items-center gap-1 px-2',
            'hover:bg-slate-700',
            'dark:hover:bg-slate-800'
          )}
          onClick={copyToClipboard}
        >
          <ClipboardIcon className={clsx('h-4 w-4')} />
          {!isCopied ? 'Copy to Clipboard' : 'Copied!'}
        </button>
      </div>
    </div>
  );
}
