import Link from 'next/link';
import { DocumentIcon } from '@/components/Icons';

const HeaderCta = () => {
  return (
    <div className="flex gap-2">
      <Link href="/" className="button button--solid button--big min-w-[128px]">
        Contact Me
      </Link>
      <Link href="/" className="button button--ghost button--big px-2">
        <DocumentIcon className="h-5 w-5" />
        RESUME
      </Link>
    </div>
  );
};

export default HeaderCta;
