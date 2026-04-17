import clsx from 'clsx';
import { QuoteIcon } from '@/components/Icons';

function Quote() {
  return (
    <blockquote
      className={clsx(
        'flex gap-2 pt-2 text-3xl text-slate-500',
        'md:text-4xl lg:pt-0 lg:text-5xl',
        'dark:text-slate-400'
      )}
    >
      <QuoteIcon
        className={clsx(
          '-mt-1 h-10 text-slate-300',
          'md:-mt-3 md:h-16 lg:h-24',
          'dark:text-slate-800'
        )}
      />
      <span className={clsx('flex flex-col')}>
        {/* Hàng 1: If it's not */}
        <span className={clsx('leading-[1.15]')}>
          <em>If</em>{' '} it&apos;s not{' '}
        </span>
        
        {/* Hàng 2: automated, — Chỗ này là điểm nhấn có Highlight và gạch ngang — */}
        <span className={clsx('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}>
          {/* Thanh gạch ngang bên trái */}
          <span className={clsx('mt-1 h-0.5 w-8 rounded-full bg-slate-400', 'lg:h-1 lg:w-24', 'dark:bg-slate-600')} />
          <span>
            {/* Điểm nhấn Highlight - Bọc chữ "automated" */}
            <strong className={clsx('relative font-extrabold text-slate-600', 'dark:text-slate-300')}>
              <span
                className={clsx(
                  'absolute -left-0.5 bottom-0 right-0 top-1 z-[-1] rounded-md bg-slate-100 px-1',
                  'lg:-left-1.5 lg:-right-0.5 lg:bottom-0 lg:top-2',
                  'dark:bg-slate-800' // Giữ nguyên màu nền xám mặc định
                )}
              />
              automated
            </strong>
          </span>
          {/* Thanh gạch ngang bên phải */}
          <span className={clsx('mt-1 h-0.5 w-6 rounded-full bg-slate-400', 'lg:h-1 lg:w-14', 'dark:bg-slate-600')} />
        </span>

        {/* Hàng 3: it's not done. */}
        <span className={clsx('leading-[1.15]')}>
          ,it&apos;s not{' '}
          <strong className={clsx('relative font-extrabold text-slate-600', 'dark:text-slate-300')}>
            done.
          </strong>
        </span>
      </span>
    </blockquote>
  );
}

export default Quote;