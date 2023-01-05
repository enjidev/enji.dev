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
    <div className={clsx('mdx-code-block')}>
      <pre className={className} {...props} ref={codeRef}>
        {children}
      </pre>
      <div className={clsx('mdx-code-block__toolbar')}>
        {language && (
          <>
            <div className={clsx('mdx-code-block__toolbar-item')}>
              {language}
            </div>
            <div className={clsx('mdx-code-block__toolbar-divider')} />
          </>
        )}
        <button
          type="button"
          className={clsx('mdx-code-block__toolbar-button')}
          onClick={copyToClipboard}
        >
          <ClipboardIcon />
          {!isCopied ? 'Copy to Clipboard' : 'Copied!'}
        </button>
      </div>
    </div>
  );
}
