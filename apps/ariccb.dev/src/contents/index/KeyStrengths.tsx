import clsx from 'clsx';

function KeyStrengths() {
  return (
    <header className={clsx('content-wrapper mb-6')} data-accent="amber">
      <div
        className={clsx(
          'relative overflow-hidden rounded-[1.75rem] border border-amber-200/70 bg-white/80 px-5 py-6 shadow-sm backdrop-blur',
          'dark:border-amber-900/50 dark:bg-slate-950/70',
          'md:px-8 md:py-7'
        )}
      >
        <div
          aria-hidden="true"
          className={clsx(
            'absolute -right-16 -top-20 h-48 w-48 rounded-full bg-amber-300/25 blur-3xl',
            'dark:bg-amber-500/10'
          )}
        />
        <p
          className={clsx(
            'relative mb-3 text-xs font-black uppercase tracking-[0.28em] text-amber-600',
            'dark:text-amber-300'
          )}
        >
          The operating habits behind the work
        </p>
        <h2
          className={clsx(
            'relative max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-800',
            'md:text-4xl lg:text-5xl',
            'dark:text-white'
          )}
        >
          Key Strengths
        </h2>
        <p
          className={clsx(
            'relative mt-4 max-w-2xl text-sm leading-6 text-slate-600',
            'md:text-base md:leading-7',
            'dark:text-slate-300'
          )}
        >
          A mix of craft, judgment, curiosity, and follow-through that shows up
          across product, engineering, and team workflows.
        </p>
      </div>
    </header>
  );
}

export default KeyStrengths;
