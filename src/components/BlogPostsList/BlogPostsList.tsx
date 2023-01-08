import { useEffect, useState } from "react";
import { getListBlogs } from "../../common/blog";
import { BlogPostSanity } from "../../common/interfaces";
import BlogPostBox from "../BlogPostBox/BlogPostBox";
import { Text } from "../Typography";

function BlogPostsList() {
  const [blogs, setBlog] = useState<BlogPostSanity[] | null>(null);

  useEffect(() => {
    getListBlogs()
      .then((items) => {
        setBlog(items);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="flex flex-col py-10 w-4/5 sm:w-full">
      {blogs === null && <Text>Loading...</Text>}
      {blogs?.map(({ title, publishedAt, slug, author }, index) => {
        return (
          <div className="py-2" key={index}>
            <BlogPostBox
              title={title}
              publishedAt={publishedAt}
              slug={slug}
              author={author}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BlogPostsList;
