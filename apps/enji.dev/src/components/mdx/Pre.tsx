import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

import { ClipboardIcon } from '@/components/shared/Icons';

import { formatLang } from '@/helpers/mdx';

type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  'data-lines'?: string;
  'data-selected'?: string;
  'data-language'?: string;
  'data-filename'?: string;
};

export function Pre({
  children,
  className,
  'data-lines': lines = '',
  'data-selected': selected = '',
  'data-language': language = '',
  'data-filename': filename = '',
  ...props
}: PreProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  const [isCopied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async () => {
    try {
      const content = codeRef.current.textContent || '';
      await navigator.clipboard.writeText(content);

      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <div className={clsx('mdx-code-block')}>
      {filename && (
        <div className={clsx('mdx-code-block__header')}>
          <div className={clsx('mdx-code-block__header-dots')}>
            <div className={clsx('mdx-code-block__header-dot')} />
            <div className={clsx('mdx-code-block__header-dot')} />
            <div className={clsx('mdx-code-block__header-dot')} />
          </div>
          <div className={clsx('mdx-code-block__header-tab')}>
            <div className={clsx('mdx-code-block__header-tab-bl')} />
            <div className={clsx('mdx-code-block__header-tab-br')} />
            {filename}
          </div>
        </div>
      )}
      <div className={clsx('mdx-code-block__content')}>
        <pre className={className} {...props} ref={codeRef}>
          {children}
        </pre>
        <button
          type="button"
          className={clsx('mdx-code-block__copy-button')}
          onClick={copyToClipboard}
        >
          <ClipboardIcon />
          {!isCopied ? 'Copy to Clipboard' : 'Copied!'}
        </button>
      </div>
      {lines !== '1' && (
        <div className={clsx('mdx-code-block__footer')}>
          {selected && (
            <div className={clsx('mdx-code-block__footer-item')}>
              Selected: {selected}
            </div>
          )}
          {language && (
            <div className={clsx('mdx-code-block__footer-item')}>
              {formatLang(language)}
            </div>
          )}
          {lines && (
            <div className={clsx('mdx-code-block__footer-item')}>
              Lines: {lines}
            </div>
          )}
          <div className={clsx('mdx-code-block__footer-item')}>UTF-8</div>
        </div>
      )}
    </div>
  );
}
