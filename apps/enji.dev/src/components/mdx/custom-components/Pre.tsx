import Code from '@/components/mdx/Code';

import { formatLang } from '@/helpers/mdx';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  'data-title'?: string;
  'data-lines'?: string;
  'data-selected'?: string;
  'data-language'?: string;
  'data-copy'?: string;
};

export function Pre({
  children,
  'data-title': title = '',
  'data-lines': lines = '',
  'data-selected': selected = '',
  'data-language': language = '',
  'data-copy': copy = 'true',
}: PreProps) {
  const { language: formattedLanguage } = formatLang(language, title);
  const withFooter = lines !== '1';
  const withCopy = copy === 'true';

  return (
    <Code
      withFooter={withFooter}
      withCopyButton={withCopy}
      lines={Number(lines)}
      selected={selected}
      language={formattedLanguage}
    >
      {children}
    </Code>
  );
}
