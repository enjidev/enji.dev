import clsx from 'clsx';

export type TodoItemState =
  | 'traits'
  | 'professional-skills'
  | 'interests'
  | 'values'
  | '';

interface TodoItemProps {
  state: Array<TodoItemState>;
  title?: string;
  description?: string;
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tag4?: string;
  tag5?: string;
  tag6?: string;
  tag7?: string;
  tag8?: string;
  tag9?: string;
  tag10?: string;
}

const tagDelayClasses = [
  'delay-75',
  'delay-100',
  'delay-150',
  'delay-200',
  'delay-300',
  'delay-[350ms]',
  'delay-[400ms]',
  'delay-[450ms]',
  'delay-[500ms]',
  'delay-[550ms]',
];

function TodoItem({
  state,
  title = '',
  description = '',
  tag1 = '',
  tag2 = '',
  tag3 = '',
  tag4 = '',
  tag5 = '',
  tag6 = '',
  tag7 = '',
  tag8 = '',
  tag9 = '',
  tag10 = '',
}: TodoItemProps) {
  const tags = [
    tag1,
    tag2,
    tag3,
    tag4,
    tag5,
    tag6,
    tag7,
    tag8,
    tag9,
    tag10,
  ].filter((tag) => tag !== '' && !state.includes(''));

  return (
    <div
      className={clsx(
        'shadow-accent-950/5 pointer-events-none w-full select-none overflow-hidden rounded-[1.75rem] border p-5 shadow-2xl',
        'border-accent-200/70 via-accent-50/60 bg-gradient-to-br from-white to-white',
        'dark:border-accent-500/30 dark:via-accent-950/20 dark:from-slate-950 dark:to-slate-900',
        'lg:w-[28rem] lg:p-7'
      )}
      role="presentation"
      key={title}
    >
      <div
        aria-hidden="true"
        className={clsx(
          'from-accent-400 mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r via-orange-300 to-transparent'
        )}
      />
      <div
        className={clsx(
          'text-xl font-black tracking-tight text-slate-800',
          'dark:text-white'
        )}
      >
        {title}
      </div>
      {description && (
        <div
          className={clsx(
            'mt-2 text-sm leading-6 text-slate-600',
            'dark:text-slate-400'
          )}
        >
          {description}
        </div>
      )}
      <div className={clsx('mt-6 flex flex-wrap gap-2.5 text-xs font-black')}>
        {tags.map((tag, index) => (
          <div
            key={tag}
            className={clsx(
              'animate-[tag-pop_560ms_cubic-bezier(.2,.8,.2,1)_both] rounded-full border px-3.5 py-2 uppercase tracking-[0.08em]',
              'border-accent-300/70 bg-accent-100 text-accent-900 shadow-accent-900/5 shadow-sm',
              'dark:border-accent-400/25 dark:bg-accent-500/15 dark:text-amber-100',
              'motion-reduce:animate-none',
              tagDelayClasses[index]
            )}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoItem;
