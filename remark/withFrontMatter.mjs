import { z } from 'zod';
import { getFrontMatter } from './utils.mjs';

const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

const BaseFrontMatter = z.object({
  title: z.string().max(110),
  description: z.string().max(120),
  caption: z.string().optional(),
  layout: z.string().default('Page'),
});

const PostFrontMatter = z.object({
  date: z.string().regex(dateRegex, 'Date format MUST be YYYY-MM-DD'),
  lang: z.enum(['id', 'en']),
  tags: z.array(z.string()).min(2).max(5),
  category: z.string(),
});

const validate = (schema, data) => {
  try {
    return schema.parse(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(JSON.stringify(err.issues, null, 2));
    }
  }
};

const withFrontMatter = () => {
  return (_tree, file) => {
    const data = getFrontMatter(file.value);
    const base = validate(BaseFrontMatter, data);

    let frontMatter;

    switch (base.layout) {
      /**
       * Specific post frontMatter
       */
      case 'Post':
        const post = validate(PostFrontMatter, data);
        frontMatter = { ...base, ...post };
        break;

      /**
       * Default frontMatter
       */
      default:
        frontMatter = base;
        break;
    }

    file.data['front-matter'] = frontMatter;
  };
};

export default withFrontMatter;
