import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { GitHubIcon, ReactIcon } from '@/components/Icons';
import ConnectCauseLandingPageImg from '@/components/images/connect-cause/connect-cause-landing-page.png';
import LandingPageImg from '@/components/images/unstuck/unstuck-landingpage.png';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

function useStickyProgress(top = 80, distance = 120) {
  const ref = useRef<HTMLDivElement>(null);
  const initialDocumentTopRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      if (initialDocumentTopRef.current === null || rect.top > top) {
        initialDocumentTopRef.current = rect.top + window.scrollY;
      }

      const stickyStart = initialDocumentTopRef.current - top;
      const next = Math.min(
        1,
        Math.max(0, (window.scrollY - stickyStart) / distance)
      );

      setProgress((current) =>
        Math.abs(current - next) > 0.01 ? next : current
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [top, distance]);

  return { ref, progress };
}

function ProjectCategory({
  title,
  caption,
  description,
  link = undefined,
  tone,
}: {
  title: string;
  caption: string;
  description: ReactNode;
  link?: {
    title: string;
    href: string;
  };
  tone: 'professional' | 'helixir' | 'personal';
}) {
  const { ref, progress } = useStickyProgress(72, 56);
  const detailOpacity = 1 - progress;
  const compactHeight = 76;
  const expandedHeight = link ? 360 : 240;
  const containerHeight =
    expandedHeight - (expandedHeight - compactHeight) * progress;
  const titleScale = 1 - progress * 0.28;

  return (
    <div
      ref={ref}
      className={clsx(
        'content-wrapper sticky top-16 z-30 mb-4 py-2',
        'md:top-20 md:mb-10'
      )}
    >
      <div
        className={clsx('relative')}
        style={{ height: `${containerHeight}px` }}
      >
        <div
          className={clsx(
            'relative z-10 overflow-hidden rounded-[1.4rem] px-4 shadow-lg backdrop-blur',
            'md:rounded-[2rem] md:px-8 lg:px-10'
          )}
          style={{
            height: `${containerHeight}px`,
            paddingTop: `${20 - progress * 8}px`,
            paddingBottom: `${20 - progress * 8}px`,
            boxShadow: `0 ${18 * detailOpacity}px ${
              36 * detailOpacity
            }px rgba(15, 23, 42, ${0.11 * detailOpacity})`,
          }}
        >
          <div
            aria-hidden="true"
            className={clsx(
              'absolute inset-0 rounded-[1.4rem] border md:rounded-[2rem]',
              tone === 'professional' &&
                'border-sky-200 bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:border-sky-900/60 dark:from-sky-950/50 dark:via-slate-950 dark:to-slate-900',
              tone === 'helixir' &&
                'border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-100 dark:border-amber-900/60 dark:from-amber-950/50 dark:via-slate-950 dark:to-orange-950/40',
              tone === 'personal' &&
                'border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-100 dark:border-violet-900/60 dark:from-violet-950/50 dark:via-slate-950 dark:to-fuchsia-950/40'
            )}
            style={{ opacity: detailOpacity }}
          />
          <div
            aria-hidden="true"
            className={clsx(
              'absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full blur-3xl',
              tone === 'professional' && 'bg-sky-300/40 dark:bg-sky-500/20',
              tone === 'helixir' && 'bg-amber-300/50 dark:bg-amber-500/20',
              tone === 'personal' && 'bg-violet-300/50 dark:bg-violet-500/20'
            )}
            style={{ opacity: detailOpacity }}
          />

          <div
            className={clsx('relative overflow-hidden')}
            style={{
              maxHeight: `${40 * detailOpacity}px`,
              opacity: detailOpacity,
            }}
          >
            <p
              className={clsx(
                'mb-4 text-xs font-black uppercase tracking-[0.28em]',
                'md:text-sm',
                tone === 'professional' && 'text-sky-700 dark:text-sky-300',
                tone === 'helixir' && 'text-amber-700 dark:text-amber-300',
                tone === 'personal' && 'text-violet-700 dark:text-violet-300'
              )}
            >
              {caption}
            </p>
          </div>

          <h2
            className={clsx(
              'relative max-w-4xl origin-left text-3xl font-black leading-none tracking-tight text-slate-800',
              'md:text-5xl lg:text-6xl',
              'dark:text-white'
            )}
            style={{
              marginBottom: `${12 * detailOpacity}px`,
              transform: `scale(${titleScale})`,
            }}
          >
            {title}
          </h2>

          <div
            className={clsx(
              'relative overflow-hidden',
              progress > 0.9 && 'pointer-events-none'
            )}
            style={{
              maxHeight: `${260 * detailOpacity}px`,
              opacity: detailOpacity,
            }}
          >
            <div
              className={clsx(
                'max-w-3xl text-sm leading-6 text-slate-600',
                'md:text-base md:leading-7',
                'dark:text-slate-300'
              )}
            >
              {description}
            </div>
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-hidden={progress > 0.9}
                tabIndex={progress > 0.9 ? -1 : undefined}
                className={clsx(
                  'mt-5 inline-flex max-w-full rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.12em]',
                  tone === 'professional' &&
                    'dark:bg-sky-500/15 bg-sky-100 text-sky-700 dark:text-sky-200',
                  tone === 'helixir' &&
                    'dark:bg-amber-500/15 bg-amber-100 text-amber-700 dark:text-amber-200',
                  tone === 'personal' &&
                    'dark:bg-violet-500/15 bg-violet-100 text-violet-700 dark:text-violet-200'
                )}
              >
                {link.title}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectSection({
  id = undefined,
  title,
  caption,
  description,
  link = undefined,
  tone,
  children,
}: {
  id?: string;
  title: string;
  caption: string;
  description: ReactNode;
  link?: {
    title: string;
    href: string;
  };
  tone: 'professional' | 'helixir' | 'personal';
  children: ReactNode;
}) {
  return (
    <section id={id} className={clsx('relative mt-20 scroll-mt-28')}>
      <div
        aria-hidden="true"
        className={clsx(
          'pointer-events-none absolute left-1/2 top-0 -z-10 h-full min-h-[900px] w-screen -translate-x-1/2 opacity-70 blur-3xl transition-colors',
          tone === 'professional' &&
            'bg-[radial-gradient(circle_at_50%_12%,rgba(14,165,233,0.13),transparent_38%),linear-gradient(180deg,rgba(14,165,233,0.05),transparent_62%)]',
          tone === 'helixir' &&
            'bg-[radial-gradient(circle_at_50%_12%,rgba(245,158,11,0.15),transparent_38%),linear-gradient(180deg,rgba(251,146,60,0.06),transparent_62%)]',
          tone === 'personal' &&
            'bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.14),transparent_38%),linear-gradient(180deg,rgba(217,70,239,0.05),transparent_62%)]'
        )}
      />
      <ProjectCategory
        title={title}
        caption={caption}
        description={description}
        link={link}
        tone={tone}
      />
      {children}
    </section>
  );
}

function ProjectQuickLinks() {
  const links = [
    {
      title: 'Helixir Labs Inc',
      caption: 'AI products & product experiments',
      href: '#helixir-labs',
      tone: 'helixir',
    },
    {
      title: 'Personal Projects',
      caption: 'Independent full-stack applications',
      href: '#personal-projects',
      tone: 'personal',
    },
  ];

  return (
    <div className={clsx('content-wrapper mb-4 mt-10')}>
      <div
        className={clsx(
          'rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur',
          'dark:border-slate-800 dark:bg-slate-950/60'
        )}
      >
        <p
          className={clsx(
            'mb-3 px-2 text-xs font-black uppercase tracking-[0.22em] text-slate-500',
            'dark:text-slate-400'
          )}
        >
          Jump to section
        </p>
        <div className={clsx('grid gap-3', 'md:grid-cols-2')}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                'group relative overflow-hidden rounded-2xl border p-5 transition',
                'hover:-translate-y-0.5 hover:shadow-lg',
                link.tone === 'helixir' &&
                  'border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-100 dark:border-amber-900/60 dark:from-amber-950/50 dark:via-slate-950 dark:to-orange-950/40',
                link.tone === 'personal' &&
                  'border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-100 dark:border-violet-900/60 dark:from-violet-950/50 dark:via-slate-950 dark:to-fuchsia-950/40'
              )}
            >
              <div
                className={clsx(
                  'absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full blur-3xl transition group-hover:scale-125',
                  link.tone === 'helixir' &&
                    'bg-amber-300/50 dark:bg-amber-500/20',
                  link.tone === 'personal' &&
                    'bg-violet-300/50 dark:bg-violet-500/20'
                )}
              />
              <p
                className={clsx(
                  'relative mb-2 text-xs font-black uppercase tracking-[0.18em]',
                  link.tone === 'helixir' &&
                    'text-amber-700 dark:text-amber-300',
                  link.tone === 'personal' &&
                    'text-violet-700 dark:text-violet-300'
                )}
              >
                {link.caption}
              </p>
              <div
                className={clsx(
                  'relative flex items-center justify-between gap-4'
                )}
              >
                <h2
                  className={clsx(
                    'text-2xl font-black text-slate-800',
                    'dark:text-white'
                  )}
                >
                  {link.title}
                </h2>
                <span
                  className={clsx(
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-black transition group-hover:translate-x-1',
                    link.tone === 'helixir' &&
                      'dark:bg-amber-500/15 bg-amber-100 text-amber-700 dark:text-amber-200',
                    link.tone === 'personal' &&
                      'dark:bg-violet-500/15 bg-violet-100 text-violet-700 dark:text-violet-200'
                  )}
                >
                  ↓
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectContent({ children }: { children: ReactNode }) {
  return <div className={clsx('content-wrapper mt-20 pb-20')}>{children}</div>;
}

function ProjectShowcase({
  children,
  title,
  caption,
  description,
  button = null,
  button2 = null,
  button3 = null,
}: {
  children: ReactNode;
  title: string;
  caption: string;
  description: string | ReactNode;
  button?: {
    title: string;
    href: string;
  } | null;
  button2?: {
    title: string;
    href: string;
  } | null;
  button3?: {
    title: string;
    href: string;
  } | null;
}) {
  return (
    <div
      className={clsx(
        'background-grid background-grid--fade-out border-divider-light mt-20 border-t pt-[14px]',
        'dark:border-divider-dark'
      )}
    >
      <SectionTitle
        title={title}
        caption={caption}
        description={description}
        button={button}
        button2={button2}
        button3={button3}
      />
      <ProjectContent>{children}</ProjectContent>
    </div>
  );
}

function HelixirProjectCards() {
  const projects = [
    {
      title: 'DeftTask',
      caption: 'AI-assisted task and knowledge workflows',
      description:
        'A productivity app exploring the overlap between notes, tasks, calendars, and local markdown-first work across Apple platforms.',
      href: '/docs/defttask',
    },
    {
      title: 'Vulturo',
      caption: 'Dice roguelike game prototype',
      description:
        'A Swift game experiment built around deterministic scoring, collectible modifiers, wagers, and run progression systems.',
      href: '/docs/vulturo',
    },
    {
      title: 'Omni-gamer Leaderboard',
      caption: 'Cross-game ranking system',
      description:
        'A backend API for tracking game, category, and overall leaderboards across games using Elo-style scoring.',
      href: '/docs/omni-gamer-leaderboard',
    },
  ];

  return (
    <ProjectContent>
      <div className={clsx('grid gap-4', 'md:grid-cols-3')}>
        {projects.map((project) => (
          <div
            key={project.title}
            className={clsx(
              'rounded-2xl border border-slate-200 bg-white p-6',
              'dark:border-slate-700 dark:bg-slate-900'
            )}
          >
            <p
              className={clsx(
                'mb-2 text-xs font-black uppercase tracking-[0.18em] text-amber-600',
                'dark:text-amber-400'
              )}
            >
              {project.caption}
            </p>
            <h3
              className={clsx(
                'mb-3 text-2xl font-black text-slate-700',
                'dark:text-slate-200'
              )}
            >
              {project.title}
            </h3>
            <p
              className={clsx('text-sm text-slate-600', 'dark:text-slate-400')}
            >
              {project.description}
            </p>
            <a
              href={project.href}
              className={clsx(
                'mt-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-amber-700 transition',
                'hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-md',
                'dark:bg-amber-500/15 dark:text-amber-200 dark:hover:bg-amber-500/25'
              )}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </ProjectContent>
  );
}

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'unstuck' | 'github'>(
    'unstuck'
  );
  const [currentStateCC, setCurrentStateCC] = useState<
    'connect-cause' | 'github'
  >('connect-cause');

  return (
    <>
      <ProjectQuickLinks />

      <ProjectSection
        title="Company & Client Work"
        caption="Production systems and professional engagements"
        description="Selected work from full-time and contract roles, spanning marketplace operations, internal tools, construction management workflows, and business-critical product delivery."
        tone="professional"
      >
        <ProjectShowcase
          title="AWS Marketplace Application"
          caption="Full-stack marketplace, CRM, and account workflows"
          description="Built a full-stack application that connects AWS Marketplace APIs, internal data, vendor / buyer / reseller organizations and users, and CRM workflows. Also shipped internal tools, GitHub and Slack automations, and cold outreach workflows to reduce handoffs."
        >
          <AppWindow
            type="browser"
            browserTabs={[
              {
                icon: <ReactIcon className="h-4 w-4" />,
                title: 'AWS Marketplace operations',
                isActive: true,
              },
            ]}
          >
            <div className={clsx('p-6')}>
              <div
                className={clsx(
                  'rounded-lg border border-slate-200 bg-white p-5',
                  'dark:border-slate-700 dark:bg-slate-900'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>
                  Marketplace data to action
                </h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Connected marketplace records to account structures, CRM
                  context, and internal workflows so teams could act from one
                  reliable view.
                </p>
              </div>
            </div>
          </AppWindow>
        </ProjectShowcase>

        <ProjectShowcase
          title="Collegium Construction Management Platform"
          caption="Real-time collaboration for owners, consultants, and contractors"
          description="Three-sided platform with BIM data ingestion, work packages, bid workflows, and financial reporting. Built with Next.js (App Router), Firestore, TanStack Query, and Autodesk APS."
          button={{
            title: 'Learn More About Collegium',
            href: '/docs/collegium-platform',
          }}
        >
          <div className={clsx('w-full')}>
            <AppWindow
              type="browser"
              browserTabs={[
                {
                  icon: <ReactIcon className="h-4 w-4" />,
                  title: 'Collegium — Construction Management',
                  isActive: true,
                },
              ]}
            >
              <a href="/docs/collegium-platform">
                <Image
                  src="/assets/images/collegium/Screenshot_Arc_2025-12-03_112514AM@2x.png"
                  alt="Collegium platform screenshot"
                  width={3220}
                  height={2014}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="100vw"
                />
              </a>
            </AppWindow>
          </div>
        </ProjectShowcase>
      </ProjectSection>

      <ProjectSection
        id="helixir-labs"
        title="Helixir Labs Inc"
        caption="AI products, software systems, and product experiments"
        description="Product and engineering work under Helixir Labs Inc (my own corporation for development projects), focused on AI-assisted software delivery, workflow automation, productivity systems, and applied software experiments."
        tone="helixir"
        link={{
          title: 'Visit Helixir Labs',
          href: 'https://www.helixirlabs.com/',
        }}
      >
        <ProjectShowcase
          title="AI Software Factory"
          caption="Linear Integrated AI-driven workflow"
          description="A Linear-native code factory concept that turns product context into coordinated planning, build, review, QA, and status workflows—with local workers on developer devices and a server-side sync layer keeping the work aligned."
          button={{
            title: 'Learn More About the AI Software Factory',
            href: '/docs/ai-software-factory',
          }}
        >
          <AppWindow
            type="browser"
            browserTabs={[
              {
                icon: <ReactIcon className="h-4 w-4" />,
                title: 'AI workflow architecture',
                isActive: true,
              },
            ]}
          >
            <div className={clsx('grid gap-4 p-6', 'md:grid-cols-3')}>
              <div
                className={clsx(
                  'rounded-lg bg-slate-100 p-4',
                  'dark:bg-slate-800'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>Planning loops</h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Agentic dedupe, enrichment, planning, design, coding, and
                  review loops across 9 teams.
                </p>
              </div>
              <div
                className={clsx(
                  'rounded-lg bg-slate-100 p-4',
                  'dark:bg-slate-800'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>Team knowledge</h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Prompt and rules frameworks, standardized OAuth/tool access,
                  and isolated VPS agents that run 24/7.
                </p>
              </div>
              <div
                className={clsx(
                  'rounded-lg bg-slate-100 p-4',
                  'dark:bg-slate-800'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>Product support</h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Supported the spin-up of 8 SaaS products while evaluating
                  memory, retrieval, and knowledge approaches.
                </p>
              </div>
            </div>
          </AppWindow>
        </ProjectShowcase>

        <HelixirProjectCards />
      </ProjectSection>

      <ProjectSection
        id="personal-projects"
        title="Personal Projects"
        caption="Independent full-stack applications"
        description="Projects I designed and built to explore product ideas, full-stack architecture, user workflows, and practical problem-solving."
        tone="personal"
      >
        <ProjectShowcase
          title="Unstuck"
          caption="The Critical Thinking Tool For Students"
          description="A full-stack application that empowers high school students to learn, execute and retain critical thinking skills. It’s a platform for students to get experience through real-world projects to gain a greater understanding of their skills, talents, interests, and personality traits."
          button={{
            title: 'Learn More About Unstuck',
            href: '/docs/unstuck',
          }}
          button2={{
            title: 'Github Repo',
            href: 'https://github.com/ariccb/unstuck',
          }}
        >
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}
            >
              <div className={clsx('flex flex-col gap-3')}>
                <SectionButton
                  title="Unstuck"
                  icon={<ReactIcon className={clsx('my-2 h-16 w-16')} />}
                  description="Teaching students how to problem solve - breaking down problems to actionable steps."
                  active={currentState === 'unstuck'}
                  onClick={() => setCurrentState('unstuck')}
                />
                <SectionButton
                  title="Source code on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description=""
                  active={currentState === 'github'}
                  onClick={() => {
                    setCurrentState('github');
                  }}
                />
              </div>
            </div>
            <div className={clsx('w-full', 'lg:w-auto')}>
              <div className={clsx('-mt-[41px]')}>
                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                  {currentState === 'github' && (
                    <a href="https://github.com/ariccb/unstuck">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <GitHubIcon className="h-4 w-4" />,
                            title: 'ariccb/unstuck - GitHub',
                            isActive: currentState === 'github',
                          },
                        ]}
                      >
                        {currentState === 'github' && (
                          <GitHubWireframe
                            author="ariccb"
                            license="MIT"
                            repository="unstuck"
                            description="Platform for students to get experience through real-world projects to gain a greater understanding of their skills/talents/interests/personality traits."
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                  {currentState === 'unstuck' && (
                    <a href="/docs/unstuck">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <ReactIcon className="h-4 w-4" />,
                            title: 'www.unstuck.app - Unstuck',
                            isActive: currentState === 'unstuck',
                          },
                        ]}
                      >
                        {currentState === 'unstuck' && (
                          <Image
                            src={LandingPageImg}
                            // width={500}
                            // height={500}
                            alt="Unstuck Landing Page"
                            placeholder="blur" // Optional blur-up while loading
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ProjectShowcase>
        <ProjectShowcase
          title="Connect Cause"
          caption="Connecting Passion With Purpose"
          description="A full-stack application that connects passionate individuals with volunteering opportunities in the city, matching them up based on values and purpose."
          button={{
            title: 'Learn More About Connect Cause',
            href: '/docs/connect-cause',
          }}
          button2={{
            title: 'Github Repo - Backend',
            href: 'https://github.com/ariccb/connect-cause-backend',
          }}
          button3={{
            title: 'Github Repo - Frontend',
            href: 'https://github.com/ariccb/connect-cause-frontend',
          }}
        >
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}
            >
              <div className={clsx('flex flex-col gap-3')}>
                <SectionButton
                  title="Connect Cause"
                  icon={<ReactIcon className={clsx('my-2 h-16 w-16')} />}
                  description="A platform that connects passionate individuals with volunteering opportunities in the city, matching them up with companies based on values and purpose."
                  active={currentStateCC === 'connect-cause'}
                  onClick={() => setCurrentStateCC('connect-cause')}
                />
                <SectionButton
                  title="Source code on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description=""
                  active={currentStateCC === 'github'}
                  onClick={() => {
                    setCurrentStateCC('github');
                  }}
                />
              </div>
            </div>
            <div className={clsx('w-full', 'lg:w-auto')}>
              <div className={clsx('-mt-[41px]')}>
                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                  {currentStateCC === 'github' && (
                    <a href="https://github.com/ariccb/connect-cause-backend">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <GitHubIcon className="h-4 w-4" />,
                            title: 'ariccb/connect-cause-backend - GitHub',
                            isActive: currentStateCC === 'github',
                          },
                        ]}
                      >
                        {currentStateCC === 'github' && (
                          <GitHubWireframe
                            author="ariccb"
                            license="MIT"
                            repository="connect-cause-backend"
                            description="A platform that connects passionate individuals with volunteering opportunities in the city, matching them up with companies based on values and purpose."
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                  {currentStateCC === 'connect-cause' && (
                    <a href="/docs/connect-cause">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <ReactIcon className="h-4 w-4" />,
                            title: 'www.connect-cause.app - Connect Cause',
                            isActive: currentStateCC === 'connect-cause',
                          },
                        ]}
                      >
                        {currentStateCC === 'connect-cause' && (
                          <Image
                            src={ConnectCauseLandingPageImg}
                            alt="Connect-cause Landing Page"
                            style={{ width: '100%', height: 'auto' }}
                            sizes="100vw"
                            placeholder="blur" // Optional blur-up while loading
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ProjectShowcase>
      </ProjectSection>
    </>
  );
}

export default ProjectsContents;
