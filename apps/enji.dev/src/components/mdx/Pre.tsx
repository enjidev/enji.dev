import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

import { ClipboardIcon } from '@/components/shared/Icons';

import { formatLang } from '@/helpers/mdx';

export type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  'data-title'?: string;
  'data-lines'?: string;
  'data-selected'?: string;
  'data-language'?: string;
  'data-copy'?: string;
  'data-footer'?: string;
};

export function Pre({
  children,
  className,
  'data-title': title = '',
  'data-lines': lines = '',
  'data-selected': selected = '',
  'data-language': language = '',
  'data-copy': copy = 'true',
  'data-footer': footer = 'true',
  ...props
}: PreProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  const [isCopied, setCopied] = useState<boolean>(false);
  const { language: lang } = formatLang(language, title);

  const copyToClipboard = async () => {
    try {
      const content = codeRef.current.textContent || '';
      await navigator.clipboard.writeText(content);

      if (!isCopied) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <div className={clsx('mdx-code-block')}>
      {copy === 'true' && (
        <button
          type="button"
          className={clsx('mdx-code-block__copy-button')}
          onClick={copyToClipboard}
          title="Copy to Clipboard"
          aria-label="Copy to Clipboard"
        >
          <div
            className={clsx('mdx-code-block__copy-button-message', [
              isCopied ? 'mdx-code-block__copy-button-message-copied' : '',
            ])}
          >
            Copied!
          </div>
          <ClipboardIcon />
        </button>
      )}
      <div className={clsx('mdx-code-block__content')}>
        <pre className={className} {...props} ref={codeRef}>
          {children}
        </pre>
      </div>
      {(lines !== '1' || (lines !== '1' && footer === 'true')) && (
        <div className={clsx('mdx-code-block__footer')}>
          {selected && (
            <div className={clsx('mdx-code-block__footer-item')}>
              Selected: {selected}
            </div>
          )}
          {language && (
            <div className={clsx('mdx-code-block__footer-item')}>{lang}</div>
          )}
          {lines && (
            <div
              className={clsx('mdx-code-block__footer-item hidden', 'sm:flex')}
            >
              Lines: {lines}
            </div>
          )}
          <div className={clsx('mdx-code-block__footer-item')}>UTF-8</div>
        </div>
      )}
    </div>
  );
}
