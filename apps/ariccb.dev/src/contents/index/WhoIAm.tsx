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
  tag1: string;
  tag2: string;
  tag3: string;
  tag4: string;
  tag5: string;
  tag6: string;
  tag7: string;
  tag8: string;
  tag9: string;
  tag10: string;
};

const content: Array<Content> = [
  {
    state: 'professional-skills',
    shows: ['professional-skills'],
    title: 'Professional Skills',
    description:
      'Important skills that complement product and engineering teams.',
    tag1: 'workflow mapping',
    tag2: 'teamwork',
    tag3: 'clear communication',
    tag4: 'technical planning',
    tag5: 'system and design thinking',
    tag6: 'problem solving',
    tag7: 'coordinating',
    tag8: 'teaching',
    tag9: 'critical thinking',
    tag10: '',
  },
  {
    state: 'traits',
    shows: ['traits'],
    title: 'Traits',
    description: 'Distinguishing qualities or characteristics.',
    tag1: 'teachable',
    tag2: 'confident',
    tag3: 'self-motivated',
    tag4: 'productive',
    tag5: 'adaptable',
    tag6: 'dependable',
    tag7: 'takes initiative',
    tag8: 'creative',
    tag9: 'team player',
    tag10: '',
  },
  {
    state: 'interests',
    shows: ['interests'],
    title: 'Interests',
    description: 'Things that excite my curiosity or attention.',
    tag1: 'QMK keyboard firmware',
    tag2: 'personal finance',
    tag3: 'family + faith',
    tag4: 'tech + human experience',
    tag5: 'adventure + sports',
    tag6: 'art + design',
    tag7: 'travel + food',
    tag8: 'longboarding',
    tag9: 'audio + music',
    tag10: 'board + bar + video games',
  },
  {
    state: 'values',
    shows: ['values'],
    title: 'Values',
    description: 'What holds the most meaning and importance to me.',
    tag1: 'integrity',
    tag2: 'good work',
    tag3: 'commitment',
    tag4: 'family',
    tag5: 'personal development',
    tag6: 'adventure',
    tag7: 'spirituality',
    tag8: 'financial security',
    tag9: 'positive attitude',
    tag10: 'fun + humour',
  },
];

function WhoIAm() {
  const [currentState, setCurrentState] = useState<Content>(content[0]);

  return (
    <>
      <header className={clsx('mb-8')} data-accent="amber">
        <SectionTitle
          title="Let Me Show You A Little Bit About Me"
          caption="Who I Am + Soft Skills"
          description="Everyone has their own set of skills, outlook on life, and personality. The best work comes from combining technical judgment, communication, curiosity, and follow-through."
        />
      </header>
      <SectionContent>
        {/* move the whole section down in the y direction */}
        <div className={clsx('flex flex-col gap-4 md:flex-row')}>
          <div
            className={clsx(
              'mt-6 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2',
              'md:-mt-8 md:flex md:flex-col',
              'lg:flex'
            )}
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
            className={clsx(
              'relative  flex flex-1 items-center justify-center'
            )}
          >
            {' '}
            {currentState === null ? null : (
              <div className={clsx('flex gap-4', 'md:gap-6', 'lg:top-8')}>
                <div>
                  <TodoItem
                    state={currentState ? currentState.shows : null}
                    title={currentState ? currentState.title : null}
                    tag1={currentState ? currentState.tag1 : null}
                    tag2={currentState ? currentState.tag2 : null}
                    tag3={currentState ? currentState.tag3 : null}
                    tag4={currentState ? currentState.tag4 : null}
                    tag5={currentState ? currentState.tag5 : null}
                    tag6={currentState ? currentState.tag6 : null}
                    tag7={currentState ? currentState.tag7 : null}
                    tag8={currentState ? currentState.tag8 : null}
                    tag9={currentState ? currentState.tag9 : null}
                    tag10={currentState ? currentState.tag10 : null}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default WhoIAm;
