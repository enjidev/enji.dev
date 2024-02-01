import clsx from 'clsx';
import Link from 'next/link';

import {
  ExternalLink,
  FigmaIcon,
  GitHubIcon,
  TwitterIcon,
} from '@/components/Icons';

import dayjs from '@/utils/dayjs';

function LastUpdate() {
  return (
    <a
      href="https://github.com/flumuffel/flumuffel.de"
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('hover:underline')}
    >
      <span>see the recent update on GitHub</span>
    </a>
  );
}

interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'neu' | 'bald';
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === 'bald') {
    return (
      <span className={clsx('footer-link footer-link--soon')}>
        {title}
        <span className={clsx('footer-link__label')}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx('footer-link')}>
        {title}
        {label && <span className={clsx('footer-link__label')}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('footer-link')}
    >
      {title}
      <ExternalLink className={clsx('h-3.5 w-3.5')} />
      {label && <span className={clsx('footer-link__label')}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx('flex-1')}>
      <div
        className={clsx(
          'mb-2 px-2 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {title}
      </div>
      <ul className={clsx('flex flex-col')}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx('max-w-[348px]')}>
      <div
        className={clsx(
          'mb-3 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        Über mich
      </div>
      <p className={clsx('mb-4 font-normal leading-relaxed')}>
        Ich bin Flumuffel, ein <strong>Hobby Entwickler</strong> und <strong>Community Owner</strong>, welcher es liebt,
neue Dinge zu erschaffen, die anderen eine Freude macht.
      </p>
      <ul className={clsx('-ml-2 flex gap-1')}>
        <li>
          <a
            href="https://twitter.com/flumuffel"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="Mein Twitter Profil"
            title="Mein Twitter Profil"
          >
            <TwitterIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/flumuffel"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="Mein GitHub Profil"
            title="Mein GitHub Profil"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse gap-16', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription />
            </div>
            <div
              className={clsx(
                '-mx-2 flex flex-1 flex-col gap-8',
                'sm:flex-row sm:gap-16 lg:mx-0'
              )}
            >
              <div className={clsx('flex', 'sm:gap-16')}>
                {/* <FooterGroup
                  title="Ich"
                  links={[
                    { title: 'Kontaktieren', href: '/ich/kontaktieren' },
                    { title: 'Erfahrungen', href: '/ich/erfahrungen' },
                    {
                      title: 'Services',
                      href: '/ich/services',
                      label: 'bald',
                    },
                    {
                      title: 'Skills and Tools',
                      href: '/ich/skills-and-tools',
                    },
                  ]}
                /> */}
                <FooterGroup
                  title="flumuffel.de"
                  links={[
                    // {
                    //   title: 'Docs',
                    //   href: '/docs',
                    // },
                    {
                      title: 'Projekte',
                      href: '/projekte',
                    },
                    {
                      title: 'Persönlicher Blog',
                      href: '/blog',
                    },
                    {
                      title: 'HHI',
                      href: '/heute-habe-ich',
                      label: 'neu',
                    },
                  ]}
                />
              </div>
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                  title="Andere Seiten"
                  links={[
                    {
                      title: 'PiriFlix',
                      href: 'https://piriflix.flumuffe.de',
                      isInternal: false,
                      label: 'neu',
                    },
                    {
                      title: 'Watch Together',
                      href: 'https://watch.flumuffe.de',
                      isInternal: false,
                      label: 'neu',
                    },
                    // {
                    //   title: 'Credits',
                    //   href: '/credits',
                    // },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, Flumuffel
          </div>
          <div className={clsx('text-slate-500', 'dark:text-slate-400')}>
            {/* <LastUpdate /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
