import clsx from 'clsx';

import { CalendarIcon } from '@/components/Icons';

export type TodoItemState = 'spacing' | 'typography' | 'colors' | 'effects';

interface TodoItemProps {
  state: Array<TodoItemState>;
  title?: string;
  description?: string;
  date?: string;
  tag1?: string;
  tag2?: string;
}

function TodoItem({
  state,
  title = 'Create Documentations',
  description = 'It is good to create early documentation for our new library.',
  date = '10:00 AM · Tomorrow',
  tag1 = 'Docs',
  tag2 = 'Support',
}: TodoItemProps) {
  return (
    <div
      className={clsx(
        'pointer-events-none w-full select-none border p-6',
        'lg:w-96',
        state.includes('effects') && ['rounded-xl '],
        state.includes('spacing') && [''],
        state.includes('typography') ? ['text-sm'] : ['font-serif'],
        state.includes('colors')
          ? [
              'border-divider-light bg-white',
              'dark:border-divider-dark dark:bg-slate-900',
            ]
          : ['border-black bg-white', 'dark:border-white dark:bg-[#050914]']
      )}
      role="presentation"
    >
      <div
        className={clsx(
          'flex items-center',
          state.includes('spacing') && ['mb-4 justify-between']
        )}
      >
        <div className={clsx('flex')}>
          <div
            className={clsx(
              'relative flex h-8 w-8 items-center justify-center',
              state.includes('effects') && ['rounded-full'],
              state.includes('spacing') && [''],
              state.includes('typography') && ['font-bold'],
              state.includes('colors')
                ? ['border-white bg-sky-400 text-white']
                : [
                    'border-white bg-[#050914] text-white',
                    'dark:bg-white dark:text-black',
                  ]
            )}
          >
            E
          </div>
        </div>
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('spacing') && ['px-2 py-0.5'],
            state.includes('typography') && ['text-xs font-bold'],
            state.includes('colors')
              ? [
                  'bg-red-100 text-red-800',
                  'dark:bg-red-500/20 dark:text-red-300',
                ]
              : ['bg-[#ff0000] text-white']
          )}
        >
          High
        </div>
      </div>
      <div
        className={clsx(
          state.includes('spacing') && ['mb-1'],
          state.includes('typography') && ['text-lg font-bold'],
          state.includes('colors')
            ? ['text-slate-700', 'dark:text-slate-300']
            : ['text-black', 'dark:text-white']
        )}
      >
        {title}
      </div>
      <div
        className={clsx(
          state.includes('spacing') && ['mb-4'],
          state.includes('typography') && [''],
          state.includes('colors')
            ? ['text-slate-600', 'dark:text-slate-400']
            : ['text-black', 'dark:text-white']
        )}
      >
        {description}
      </div>
      <div
        className={clsx(
          'flex',
          state.includes('spacing') && ['mb-6 gap-2'],
          state.includes('typography') && ['text-xs font-bold'],
          state.includes('colors') && ['']
        )}
      >
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('spacing') && ['px-2 py-0.5'],
            state.includes('typography') && [''],
            state.includes('colors')
              ? [
                  'bg-blue-100 text-blue-700',
                  'dark:bg-blue-500/20 dark:text-blue-300',
                ]
              : ['bg-[#0000ff] text-white']
          )}
        >
          {tag1}
        </div>
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('spacing') && ['px-2 py-0.5'],
            state.includes('typography') && [''],
            state.includes('colors')
              ? [
                  'bg-yellow-100 text-yellow-700',
                  'dark:bg-yellow-500/20 dark:text-yellow-300',
                ]
              : ['bg-[#ffff00] text-black']
          )}
        >
          {tag2}
        </div>
      </div>
      <div
        className={clsx(
          'flex items-center',
          state.includes('spacing') && ['gap-1 '],
          state.includes('typography') && ['text-xs font-medium'],
          state.includes('colors') && ['']
        )}
      >
        <CalendarIcon
          className={clsx(
            'h-4 w-4',
            state.includes('spacing') && ['-mt-1'],
            state.includes('typography') && [''],
            state.includes('colors')
              ? ['text-slate-400', 'dark:text-slate-600']
              : ['h-4 w-4 text-black', 'dark:text-white']
          )}
        />
        <div
          className={clsx(
            state.includes('spacing') && [''],
            state.includes('typography') && [''],
            state.includes('colors')
              ? ['text-slate-600', 'dark:text-slate-400']
              : ['text-black', 'dark:text-white']
          )}
        >
          {date}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
