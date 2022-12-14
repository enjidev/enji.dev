import { z } from 'zod';
import { getFrontMatter } from './utils.mjs';

const PageFrontMatter = z.object({
  title: z.string(),
  description: z.string(),
  caption: z.string().optional(),
});

const PostFrontMatter = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  lang: z.enum(['ID', 'EN']),
  tags: z.array(z.string()),
  category: z.string({ description: 'asd' }),
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

    // get source directory
    const filePaths = file.history[0].split('\\');
    const directory = filePaths[filePaths.length - 2];

    if (directory === 'blog') {
      validate(PostFrontMatter, frontMatter);
    } else {
      validate(PageFrontMatter, frontMatter);
    }
  };
};

export default withRestrictedFrontMatter;
