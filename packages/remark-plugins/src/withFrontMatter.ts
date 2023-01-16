import { z } from 'zod';

import { getFrontMatter } from './utils';

const dateRegex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

const BaseFrontMatter = z.object({
  title: z.string().max(110),
  description: z.string().max(120),
  caption: z.string().default(''),
  layout: z.string().default('Post'),
});

const PostFrontMatter = z.object({
  date: z.string().regex(dateRegex, 'Date format MUST be YYYY-MM-DD'),
  lang: z.enum(['id', 'en']),
  tags: z.array(z.string()).min(2).max(5),
  category: z.string(),
});

const ProjectFrontMatter = z.object({
  githubUrl: z.string().url().optional(),
  npmUrl: z.string().url().optional(),
  type: z.enum(['package']).default('package'),
});

const validate = (schema, data) => {
  try {
    return schema.parse(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(JSON.stringify(err.issues, null, 2));
    }

    return null;
  }
};

const withFrontMatter = () => (_tree, file) => {
  const data = getFrontMatter(file.value);

  // skip front matter validation
  if (Object.keys(data).length === 0) return;

  const base = validate(BaseFrontMatter, data);

  let frontMatter;

  switch (base.layout) {
    /**
     * Specific post frontMatter
     */
    case 'Post': {
      const post = validate(PostFrontMatter, data);
      frontMatter = { ...base, ...post };
      break;
    }
    /**
     * Specific project frontMatter
     */
    case 'Project': {
      const project = validate(ProjectFrontMatter, data);
      frontMatter = { ...base, ...project };
      break;
    }
    /**
     * Default frontMatter
     */
    default: {
      frontMatter = base;
      break;
    }
  }

  // eslint-disable-next-line no-param-reassign
  file.data['front-matter'] = frontMatter;
};

export default withFrontMatter;
