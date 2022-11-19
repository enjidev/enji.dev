import clsx from 'clsx';
import { useState } from 'react';
import TodoItem from '@/components/Cards/TodoItem';
import HeroTitle from '@/components/HeroTitle';

import type { TodoItemState } from '@/components/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'typography',
    shows: ['typography'],
    title: 'Typography',
    description: 'Selecting the font type, font size, and font weight.',
  },
  {
    state: 'spacing',
    shows: ['typography', 'spacing'],
    title: 'Spacing',
    description: 'Positioning and adding spacing between elements.',
  },
  {
    state: 'colors',
    shows: ['typography', 'spacing', 'colors'],
    title: 'Colors',
    description: 'Choosing a color scheme with sufficient contrast.',
  },
  {
    state: 'effects',
    shows: ['typography', 'spacing', 'colors', 'effects'],
    title: 'Effects',
    description: 'Add effects like borders, shadows, rounded corners, etc.',
  },
];

interface HeroButtonProps {
  title: string;
  desc?: string;
  step?: number;
  active?: boolean;
  onClick?: () => void;
}

const HeroButton = ({
  title,
  desc,
  step,
  active = false,
  onClick = () => {},
}: HeroButtonProps) => {
  return (
    <button
      className={clsx(
        'flex flex-1 items-center rounded-2xl border-2 bg-white p-4 text-left',
        'dark:bg-slate-900',
        active
          ? ['border-primary-400', 'dark:border-primary-400']
          : ['border-divider-light ', 'dark:border-divider-dark']
      )}
      onClick={onClick}
    >
      {step && (
        <div
          className={clsx(
            'w-24 pr-4 text-center text-7xl font-black',
            '',
            active
              ? ['text-primary-600', 'dark:text-primary-400']
              : ['text-slate-400', 'dark:text-slate-600']
          )}
        >
          {step}
        </div>
      )}
      <div>
        <span
          className={clsx(
            'block font-bold ',
            active
              ? ['text-primary-600', 'dark:text-primary-400']
              : ['text-slate-700', 'dark:text-slate-200']
          )}
        >
          {title}
        </span>
        <span
          className={clsx(
            'mt-1 block text-sm text-slate-600',
            'dark:text-slate-400'
          )}
        >
          {desc}
        </span>
      </div>
    </button>
  );
};

const HeroButtonSmall = ({
  title,
  step,
  active = false,
  onClick = () => {},
}: HeroButtonProps) => {
  return (
    <button
      className={clsx('rounded-xl p-2 text-sm', [
        active
          ? ['text-primary-600', 'dark:text-primary-400']
          : ['text-slate-400', 'dark:text-slate-400'],
      ])}
      onClick={onClick}
    >
      <div className={clsx('text-4xl font-black')}>{step}</div>
      <span className={clsx(['text-slate-500', 'dark:text-slate-400'])}>
        {title}
      </span>
    </button>
  );
};
const Hero = () => {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <div className={clsx('mb-8')}>
        <HeroTitle
          title="Eye Catching, Modern & Minimalist Design."
          caption="Clean & Intuitive"
          description="Keep the User Interface clean with a modern touch without
            compromising the User Experience."
        />
      </div>
      <div className={clsx('', 'lg:hidden')}>
        <div className={clsx('content-wrapper mb-4')}>
          <div className={clsx('-mx-2 mb-2 flex gap-4')}>
            {content.map((item, i) => (
              <HeroButtonSmall
                key={item.state}
                title={item.title}
                step={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          {currentState && (
            <div className={clsx('mb-8')}>
              <p
                className={clsx(
                  'py-2 text-sm text-slate-600',
                  'dark:text-slate-400'
                )}
              >
                {currentState.description}
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className={clsx(
          'background-grid background-grid--fade-out mt-20 border-t border-divider-light',
          'dark:border-divider-dark'
        )}
      >
        <div className={clsx('content-wrapper pb-20', '')}>
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
            >
              {content.map((item, i) => (
                <HeroButton
                  key={item.state}
                  title={item.title}
                  desc={item.description}
                  step={i + 1}
                  active={currentState?.state === item.state}
                  onClick={() => setCurrentState(item)}
                />
              ))}
            </div>
            <div
              className={clsx(
                'relative flex flex-1 items-center justify-center'
              )}
            >
              <div
                className={clsx(
                  '-mt-8 flex gap-4',
                  'md:gap-6 lg:top-8 lg:mt-0'
                )}
              >
                <div className={clsx('')}>
                  <TodoItem
                    state={
                      currentState
                        ? currentState.shows
                        : ['typography', 'spacing', 'colors', 'effects']
                    }
                  />
                </div>
                <div className={clsx('hidden', 'sm:block lg:hidden')}>
                  <TodoItem
                    state={
                      currentState
                        ? currentState.shows
                        : ['typography', 'spacing', 'colors', 'effects']
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
