import clsx from 'clsx';
import NextLink from 'next/link';

import {
  CalendarIcon,
  ClipboardIcon,
  CodeIcon,
  DocumentIcon,
  HeartIcon,
  QuickAccessIcon,
  SparklesIcon,
} from '@/components/Icons';

import Curious from '@/contents/index/Curious';
import DetailOriented from '@/contents/index/DetailOriented';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import KeyStrengths from '@/contents/index/KeyStrengths';
import WhoIAm from '@/contents/index/WhoIAm';

const strengthCards = [
  {
    title: 'Relentless Learner',
    desc: "Curiosity fuels my never-ending quest for knowledge. I'm always exploring new techniques, tools, and perspectives.",
    icon: SparklesIcon,
    color: 'bg-amber-300 dark:bg-amber-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Team Player · Natural Leader',
    desc: 'Working with others, solving problems, and building strong relationships are how I enjoy working. I quickly earn trust, and I build up those around me so we can all succeed.',
    icon: HeartIcon,
    color: 'bg-amber-400 dark:bg-pink-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Workflow Architect',
    desc: 'I like turning ambiguous workflows into clear systems: intake, planning, implementation, review, and feedback loops that teams can trust.',
    icon: ClipboardIcon,
    color: 'bg-teal-400 dark:bg-teal-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Human-in-the-loop Builder',
    desc: 'I use AI as a practical accelerator while keeping people in control of product judgment, quality gates, and architecture decisions.',
    icon: QuickAccessIcon,
    color: 'bg-violet-400 dark:bg-violet-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Product-Minded Shipper',
    desc: 'I care about the path from idea to useful product: crisp scope, fast feedback, clean tradeoffs, and shipping the version people can actually use.',
    icon: CalendarIcon,
    color: 'bg-sky-400 dark:bg-sky-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Knowledge Systems Thinker',
    desc: 'I connect notes, tasks, docs, context, and team memory into operating systems that make better work easier to repeat.',
    icon: DocumentIcon,
    color: 'bg-fuchsia-400 dark:bg-fuchsia-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Quality Bar Raiser',
    desc: 'I care about the invisible parts of good work: naming, handoffs, edge cases, QA, and the small details that make a product feel trustworthy.',
    icon: CodeIcon,
    color: 'bg-orange-400 dark:bg-orange-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Tasteful Interface Thinker',
    desc: 'I pay close attention to how products feel in use: hierarchy, rhythm, transitions, information density, and the path from first impression to confident action.',
    icon: QuickAccessIcon,
    color: 'bg-rose-400 dark:bg-rose-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Detail Oriented · Clean Code',
    desc: 'Writing well-organized, tested, and maintainable code is a top priority. I choose the hard path now when it makes tomorrow easier.',
    icon: CodeIcon,
    color: 'bg-orange-400 dark:bg-orange-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Operator Energy',
    desc: 'I like being close to the real workflow: spotting friction, tightening the system, and helping people move from stuck to shipped.',
    icon: SparklesIcon,
    color: 'bg-emerald-400 dark:bg-emerald-900',
    layout: 'lg:col-span-2 lg:col-start-3',
  },
];

const nextLinks = [
  {
    title: 'My Projects',
    eyebrow: 'see the builds',
    desc: 'Portfolio work, AI systems, client projects, and product experiments.',
    href: '/projects',
    accent: 'from-orange-400 to-amber-300',
  },
  {
    title: 'Skills & Tools',
    eyebrow: 'inspect the stack',
    desc: 'The languages, frameworks, AI workflows, and tools I use to ship.',
    href: '/work/skills-and-tools',
    accent: 'from-sky-400 to-cyan-300',
  },
  {
    title: 'Experience',
    eyebrow: 'trace the path',
    desc: 'Recent roles, systems shipped, and the work behind the resume.',
    href: '/work/experience',
    accent: 'from-violet-400 to-fuchsia-300',
  },
];

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div
        className={clsx(
          'relative overflow-hidden rounded-[2rem] border border-amber-200/60 bg-gradient-to-br from-white via-amber-50/40 to-orange-50 p-3 shadow-sm',
          'dark:border-amber-900/50 dark:from-slate-950 dark:via-slate-950 dark:to-amber-950/20',
          'md:p-4 lg:p-6'
        )}
      >
        <div
          aria-hidden="true"
          className={clsx(
            'absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl',
            'dark:bg-amber-500/10'
          )}
        />
        <div
          aria-hidden="true"
          className={clsx(
            'absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl',
            'dark:bg-violet-500/10'
          )}
        />
        <div
          className={clsx(
            'relative grid grid-cols-1 gap-4',
            'md:grid-cols-2',
            'lg:grid-cols-6 lg:gap-6'
          )}
        >
          {strengthCards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className={clsx(card.layout)}>
                <FeaturedCard
                  icon={
                    <div className={clsx('rounded-full p-3.5', card.color)}>
                      <Icon className={clsx('h-5 w-5 text-white')} />
                    </div>
                  }
                  title={card.title}
                  desc={card.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExploreNextSection() {
  return (
    <section className={clsx('content-wrapper mb-16', 'lg:mb-28')}>
      <div
        className={clsx(
          'relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur',
          'dark:border-slate-800 dark:bg-slate-950/70',
          'md:p-8 lg:p-10'
        )}
      >
        <div
          aria-hidden="true"
          className={clsx(
            'absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(251,146,60,0.18),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_52%_100%,rgba(168,85,247,0.14),transparent_36%)]'
          )}
        />
        <div className={clsx('relative')}>
          <div className={clsx('mx-auto max-w-2xl text-center')}>
            <p
              className={clsx(
                'mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600',
                'dark:text-orange-300'
              )}
            >
              Keep exploring
            </p>
            <h2
              className={clsx(
                'text-3xl font-black tracking-tight text-slate-800',
                'md:text-5xl',
                'dark:text-white'
              )}
            >
              Pick the next trail.
            </h2>
            <p
              className={clsx(
                'mx-auto mb-8 mt-4 max-w-xl text-sm leading-6 text-slate-600',
                'md:mb-10 md:text-base md:leading-7',
                'dark:text-slate-300'
              )}
            >
              If this page gives you the first impression, these paths show the
              work behind it: what I have built, what I build with, and where I
              have put those skills into practice.
            </p>
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 760 120"
            className={clsx(
              'mx-auto my-8 hidden h-24 max-w-4xl overflow-visible text-orange-400',
              'motion-reduce:hidden dark:text-orange-300 md:block'
            )}
          >
            <path
              d="M38 50 C 170 104, 240 8, 377 58 S 592 104, 720 42"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="14 18"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="160;0"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </path>
            <g
              transform="translate(720 42) rotate(-8)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
            >
              <path d="M-13 -13 L13 13" strokeWidth="5">
                <animate
                  attributeName="opacity"
                  values="0.35;1;0.35"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M13 -13 L-13 13" strokeWidth="5">
                <animate
                  attributeName="opacity"
                  values="0.35;1;0.35"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
            <circle cx="38" cy="50" r="7" fill="currentColor">
              <animate
                attributeName="r"
                values="5;9;5"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          <div className={clsx('grid gap-4', 'md:grid-cols-3')}>
            {nextLinks.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                className={clsx(
                  'group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300',
                  'hover:-translate-y-1 hover:shadow-xl',
                  'dark:border-slate-800 dark:bg-slate-900/80'
                )}
              >
                <div
                  aria-hidden="true"
                  className={clsx(
                    'absolute inset-x-0 top-0 h-1 bg-gradient-to-r',
                    item.accent
                  )}
                />
                <p
                  className={clsx(
                    'mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400',
                    'dark:text-slate-500'
                  )}
                >
                  {item.eyebrow}
                </p>
                <h3
                  className={clsx(
                    'text-2xl font-black text-slate-800',
                    'dark:text-white'
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={clsx(
                    'mt-3 text-sm leading-6 text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  {item.desc}
                </p>
                <div
                  className={clsx(
                    'mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-black text-orange-600 transition',
                    'group-hover:translate-x-1 group-hover:bg-orange-100',
                    'dark:bg-slate-800 dark:text-orange-300 dark:group-hover:bg-orange-950/50'
                  )}
                >
                  Go this way
                  <span aria-hidden="true">→</span>
                </div>
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      <br />
      <section className={clsx('mb-10', 'lg:mb-24')}>
        <WhoIAm />
      </section>
      <section className={clsx('mb-6', 'lg:mb-10')}>
        <KeyStrengths />
      </section>
      <section className={clsx('mb-12', 'lg:mb-20')}>
        <DetailOriented />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <Curious />
      </section>
      <ExploreNextSection />
    </>
  );
}

export default IndexContents;
