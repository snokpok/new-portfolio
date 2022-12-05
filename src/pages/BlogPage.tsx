import { allBlogPostsMetadata } from "../common/blog";
import BlogPostsList from "../components/BlogPostsList/BlogPostsList";

export default function BlogPage() {
  return (
    <div>
      <BlogPostsList data={allBlogPostsMetadata} />
    </div>
  );
}
