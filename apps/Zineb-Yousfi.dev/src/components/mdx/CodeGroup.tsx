/* eslint-disable react/no-array-index-key */
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Children } from 'react';

import { Pre } from '@/components/mdx/custom-components/Pre';

import { formatLang } from '@/helpers/mdx';

import type { PreProps } from '@/components/mdx/custom-components/Pre';
import type { PropsWithChildren, ReactElement } from 'react';

function CodeGroupFile({ children = null }: PropsWithChildren) {
  return (
    <Tab className={clsx('mdx-code-group__file')}>
      {({ selected }) => (
        <div className={clsx('mdx-code-group__file-content')}>
          {selected && (
            <>
              <div className={clsx('mdx-code-group__file-bl')} />
              <div className={clsx('mdx-code-group__file-br')} />
            </>
          )}
          {children}
        </div>
      )}
    </Tab>
  );
}

function CodeGroupTab({ children = null }: PropsWithChildren) {
  return <Tab className={clsx('mdx-code-group__tab')}>{children}</Tab>;
}

interface CodeGroupProps {
  children: ReactElement<PreProps> | ReactElement<PreProps>[];
  variant?: 'tab' | 'files';
}

function CodeGroup({ variant = 'tab', children }: CodeGroupProps) {
  const tab: Array<{
    icon: ReactElement;
    title: string;
    panel: ReactElement<PreProps>;
  }> = [];

  Children.forEach(children, (child) => {
    if (child.type === Pre) {
      const title = child.props['data-title'] || '';
      const language = child.props['data-language'] || '';

      const { icon } = formatLang(language, title);

      tab.push({
        icon,
        title,
        panel: child,
      });
    }
  });

  return (
    <div
      className={clsx('mdx-code-group', [
        variant === 'tab' ? 'mdx-code-group--tab' : 'mdx-code-group--files',
      ])}
    >
      <Tab.Group manual>
        <div className={clsx('mdx-code-group__header-wrapper')}>
          <Tab.List className={clsx('mdx-code-group__header')}>
            {tab.map(({ title, icon }, idx) =>
              variant === 'tab' ? (
                <CodeGroupTab key={idx}>
                  {icon}
                  {title}
                </CodeGroupTab>
              ) : (
                <CodeGroupFile key={idx}>
                  {icon}
                  {title}
                </CodeGroupFile>
              )
            )}
          </Tab.List>
        </div>
        <Tab.Panels className={clsx('mdx-code-group__content')}>
          {tab.map(({ panel }, idx) => (
            <Tab.Panel key={idx}>{panel}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default CodeGroup;
