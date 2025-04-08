/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { formatLang } from '@/helpers/post';

import type { TPageOgImage, TPostOgImage } from '@/types';
import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  container: {
    backgroundImage:
      'url(data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG82fwRKWuqXoKRl7gAAAABJRU5ErkJggg==)',
    backgroundColor: '#ffffff',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1200px 600px',
    backgroundPosition: 'top left',
    color: '#0f172a',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"Plus Jakarta Sans"',
    fontWeight: 400,
    height: '100%',
    justifyContent: 'center',
    paddingBottom: 104,
    paddingLeft: 132,
    paddingRight: 132,
    position: 'relative',
    width: '100%',
  },
  category: {
    color: '#7733ff',
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  categoryWork: {
    color: '#3b82f6',
  },
  title: {
    color: '#334155',
    fontSize: 68,
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: 28,
  },
  tags: {
    display: 'flex',
  },
  tag: {
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#dbeafe',
    color: '#2563eb',
    fontSize: 20,
    fontWeight: 800,
    display: 'flex',
    height: 48,
    marginRight: 16,
    paddingLeft: 16,
    paddingRight: 20,
  },
  tagHash: {
    color: '#60a5fa',
    marginRight: 4,
  },
  author: {
    alignItems: 'center',
    bottom: 64,
    display: 'flex',
    left: 132,
    position: 'absolute',
    right: 132,
  },
  authorAvatar: {
    borderRadius: '100%',
    marginRight: 16,
  },
  divider: {
    color: '#475569',
    marginLeft: 8,
    marginRight: 8,
    fontSize: 24,
  },
  authorName: {
    color: '#334155',
    display: 'flex',
    fontSize: 26,
    fontWeight: 800,
  },
  description: {
    color: '#475569',
    fontSize: 26,
  },
  borderBottom: {
    backgroundColor: '#7733ff',
    bottom: 0,
    height: 12,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  borderBottomWork: {
    backgroundColor: '#3b82f6',
  },
};

type PostOgImageProps = TPostOgImage;

export function PostOgImage({
  category = '',
  title = '',
  tags = [],
  date = '',
  lang,
}: PostOgImageProps) {
  return (
    <div style={styles.container}>
      {category && (
        <>
          <div style={styles.category}>{category}</div>
          <div />
        </>
      )}

      {title && (
        <>
          <div style={styles.title}>{title}</div>
          <div />
        </>
      )}

      {tags && Array.isArray(tags) && tags.length > 0 && (
        <>
          <div style={styles.tags}>
            {tags.slice(0, 3).map((tag) => (
              <div style={styles.tag} key={tag}>
                <div style={styles.tagHash}>#</div>
                <div style={styles.tagTitle}>{tag}</div>
              </div>
            ))}
          </div>
          <div />
        </>
      )}

      <div style={styles.author}>
        <img
          width="48"
          height="48"
          src="https://github.com/enjidev.png?size=48"
          style={styles.authorAvatar}
        />
        <div style={styles.authorName}>@enjidev</div>

        {date && (
          <>
            <div style={styles.divider}>&middot;</div>
            <div style={styles.description}>{date}</div>
          </>
        )}

        {lang && (
          <>
            <div style={styles.divider}>&middot;</div>
            <div style={styles.description}>{formatLang(lang)}</div>
          </>
        )}
      </div>
      <div style={styles.borderBottom} />
    </div>
  );
}

type PageOgImageProps = TPageOgImage;

export function PageOgImage({
  caption = '',
  title = '',
  description = '',
}: PageOgImageProps) {
  return (
    <div style={styles.container}>
      {caption && (
        <>
          <div
            style={
              caption.toLowerCase() === 'work'
                ? { ...styles.category, ...styles.categoryWork }
                : styles.category
            }
          >
            {caption}
          </div>
          <div />
        </>
      )}

      {title && (
        <>
          <div style={styles.title}>{title}</div>
          <div />
        </>
      )}

      {description && (
        <>
          <div style={styles.description}>{description}</div>
          <div />
        </>
      )}

      <div style={styles.author}>
        <img
          width="48"
          height="48"
          src="https://github.com/enjidev.png?size=48"
          style={styles.authorAvatar}
        />
        <div style={styles.authorName}>@enjidev</div>
      </div>
      <div
        style={
          caption.toLowerCase() === 'work'
            ? { ...styles.borderBottom, ...styles.borderBottomWork }
            : styles.borderBottom
        }
      />
    </div>
  );
}
