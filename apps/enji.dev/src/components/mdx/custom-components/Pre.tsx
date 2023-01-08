import Code from '@/components/mdx/Code';

import { formatLang } from '@/helpers/mdx';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

const parseBoolean = (value: string): boolean => {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return true;
};

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
  'data-title': dataTitle = '',
  'data-lines': dataLines = '',
  'data-selected': dataSelected = '',
  'data-language': dataLanguage = '',
  'data-copy': dataCopy = 'true',
  'data-footer': dataFooter = undefined,
}: PreProps) {
  const title = dataTitle;
  const lines = Number(dataLines);
  const selected = dataSelected;
  const { language } = formatLang(dataLanguage, title);
  const copy = parseBoolean(dataCopy);

  let withFooter = lines > 1;

  if (typeof dataFooter !== 'undefined') {
    withFooter = parseBoolean(dataFooter);
  }

  return (
    <Code
      withFooter={withFooter}
      withCopyButton={copy}
      lines={Number(lines)}
      selected={selected}
      language={language}
    >
      {children}
    </Code>
  );
}
