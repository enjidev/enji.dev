import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  container: {
    backgroundColor: 'white',
    color: '#0f172a',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"Plus Jakarta Sans"',
    fontWeight: 400,
    height: '100%',
    width: '100%',
  },
  title: {
    fontWeight: 800,
  },
};

interface BlogProps {
  title?: string;
  caption?: string;
  description?: string;
}

export const Blog = ({ title, caption, description }: BlogProps) => {
  return (
    <div style={styles.container}>
      <div>{caption}</div>
      <div style={styles.title}>{title}</div>
      <div>{description}</div>
    </div>
  );
};
