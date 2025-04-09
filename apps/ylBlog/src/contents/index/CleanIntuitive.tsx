import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

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
    title: '排版',
    description: '选择字体类型、字体大小和字体粗细。',
  },
  {
    state: 'spacing',
    shows: ['typography', 'spacing'],
    title: '间距',
    description: '定位并添加元素之间的间距。',
  },
  {
    state: 'colors',
    shows: ['typography', 'spacing', 'colors'],
    title: '颜色',
    description: '选择具有足够对比度的配色方案。',
  },
  {
    state: 'effects',
    shows: ['typography', 'spacing', 'colors', 'effects'],
    title: '效果',
    description: '添加边框、阴影、圆角等效果。',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="引人注目、现代而简约的设计。"
          caption="简洁直观"
          description="保持用户界面简洁且具有现代感，同时又不影响用户体验。"
        />
      </header>
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
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
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
