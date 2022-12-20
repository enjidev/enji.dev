import clsx from 'clsx';
import { useState } from 'react';

import TodoItem from '@/components/pages/index/Cards/TodoItem';
import {
  SectionButton,
  SectionButtonSmall,
} from '@/components/shared/SectionButton';
import SectionContent from '@/components/shared/SectionContent';
import SectionTitle from '@/components/shared/SectionTitle';

import type { TodoItemState } from '@/components/pages/index/Cards/TodoItem';

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

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <div className={clsx('mb-8')}>
        <SectionTitle
          title="Eye Catching, Modern & Minimalist Design."
          caption="Clean & Intuitive"
          description="Keep the User Interface clean with a modern touch without
            compromising the User Experience."
        />
      </div>
      <div className={clsx('', 'lg:hidden')}>
        <div className={clsx('content-wrapper mb-4')}>
          <div className={clsx('-mx-2 mb-2 flex gap-2')}>
            {content.map((item, i) => (
              <SectionButtonSmall
                key={item.state}
                title={item.title}
                icon={i + 1}
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
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
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
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
