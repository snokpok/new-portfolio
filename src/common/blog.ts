import { BlogPostSanity } from "./interfaces";
import sanityClient from "@sanity/client";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./env";

const sanity = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
});

export const getBlogPostSingle = async (
  slug: string
): Promise<BlogPostSanity | null> => {
  const items = await sanity.fetch(`
    *[_type == "post" && slug.current == "${slug}"]{
      title,
      body,
      publishedAt,
      author -> {
        name,
        description,
      },
      slug
    }
  `);
  if (items.length === 0) return null;
  const res = items[0];
  return {
    title: res.title,
    body: res.body,
    publishedAt: res.publishedAt,
    author: {
      name: res.author.name,
      description: res.author.description,
    },
    slug: res.slug.current,
  };
};

export const getListBlogs = async (): Promise<BlogPostSanity[]> => {
  const res = await sanity.fetch(`
    *[_type == "post"]{
      title,
      publishedAt,
      author -> {
        name,
      },
      slug
    } | order(publishedAt desc)
  `);
  return res.map((item: any) => ({
    title: item.title,
    publishedAt: item.publishedAt,
    author: {
      name: item.author.name,
      description: item.author.description,
    },
    slug: item.slug.current,
  }));
};
