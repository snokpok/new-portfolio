import React from "react";
import { allBlogPostsMetadata } from "../common/blog";
import BlogPostsList from "../components/BlogPostsList/BlogPostsList";

export default function BlogPostListPage() {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-4xl pb-3 font-semibold">All blogs</h1>
      <hr className="w-10 pb-3" />
      <h2 className="text-lg italic text-gray-300">
        My various thoughts, devlogs, etc...
      </h2>
      <BlogPostsList data={allBlogPostsMetadata} />
    </div>
  );
}
