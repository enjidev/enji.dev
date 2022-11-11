import Link from 'next/link';
import { DocumentIcon } from '@/components/Icons';

interface CtaProps {
  availableForHire?: boolean;
}

const Cta = ({ availableForHire = true }: CtaProps) => {
  return (
    <div className="mt-4 flex gap-2 md:mt-8">
      <div className="relative z-20">
        <Link
          href="/"
          className="button button--solid button--big min-w-[128px] animate-fade-left animation-delay-200"
        >
          Contact Me
        </Link>
      </div>
      {availableForHire ? (
        <div className="relative z-10 animate-fade-left animation-delay-300">
          <div className="button button--ghost button--big pointer-events-none relative animate-fade-out-left text-primary-400 animation-delay-[5000ms] dark:text-primary-300">
            <span className="absolute top-2.5 left-2.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75 dark:bg-primary-200"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500 dark:bg-primary-200"></span>
            </span>
            AVAILABLE FOR HIRE
          </div>
          <div className="absolute top-0 left-0">
            <Link
              href="/"
              className="button button--ghost button--big animate-fade-left px-2 animation-delay-[5000ms]"
            >
              <DocumentIcon className="h-5 w-5" />
              RESUME
            </Link>
          </div>
        </div>
      ) : (
        <Link
          href="/"
          className="button button--ghost button--big animate-fade-left px-2 animation-delay-300"
        >
          <DocumentIcon className="h-5 w-5" />
          RESUME
        </Link>
      )}
    </div>
  );
};

export default Cta;
