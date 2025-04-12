/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

interface DiffProps {
  children: string;
}

// eslint-disable-next-line react/function-component-definition
const Diff: React.FC<DiffProps> = ({ children }) => {
  const lines = children.split('\n');

  return (
    <div className={clsx('mdx-code')}>
      <div className={clsx('mdx-code__content')}>
        <pre>
          {lines.map((line, index) => {
            if (line.startsWith('+')) {
              return (
                <div key={index} className={clsx('diff-line', 'diff-add')}>
                  <span className={clsx('diff-symbol', 'diff-add')}>+</span>
                  <span className={clsx('diff-text')}>
                    {line.slice(1).trimStart()}
                  </span>
                </div>
              );
            }
            if (line.startsWith('-')) {
              return (
                <div key={index} className={clsx('diff-line', 'diff-remove')}>
                  <span className={clsx('diff-symbol', 'diff-remove')}>-</span>
                  <span className={clsx('diff-text')}>
                    {line.slice(1).trimStart()}
                  </span>
                </div>
              );
            }
            return (
              <div key={index} className={clsx('diff-line')}>
                <span className={clsx('diff-symbol')} />
                <span className={clsx('diff-text')}>{line}</span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};

export default Diff;
