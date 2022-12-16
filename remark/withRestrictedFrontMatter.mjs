import { z } from 'zod';
import { getFrontMatter } from './utils.mjs';

const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

const GlobalFrontMatter = z.object({
  title: z.string().max(110),
  description: z.string().max(120),
  caption: z.string().optional(),
  type: z.enum(['post', 'page']),
});

const PageFrontMatter = z.object({
  ...GlobalFrontMatter,
});

const PostFrontMatter = z.object({
  ...GlobalFrontMatter,
  date: z.string().regex(dateRegex, 'Date format MUST be YYYY-MM-DD'),
  lang: z.enum(['id', 'en']),
  tags: z.array(z.string()).min(2).max(5),
  category: z.string(),
});

const validate = (schema, object) => {
  try {
    schema.parse(object);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(JSON.stringify(err.issues, null, 2));
    }
  }
};

const withRestrictedFrontMatter = () => {
  return (_tree, file) => {
    // get front-matter
    const frontMatter = getFrontMatter(file.value);

    // validate global front-matter
    validate(GlobalFrontMatter, frontMatter);

    if (frontMatter.type === 'post') {
      // validate post front-matter
      validate(PostFrontMatter, frontMatter);
    } else {
      // validate page front-matter
      validate(PageFrontMatter, frontMatter);
    }
  };
};

export default withRestrictedFrontMatter;
