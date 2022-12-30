import React from "react";
import { Link } from "react-router-dom";
import { BlogPostSanity } from "../../common/interfaces";
import { dateToText } from "../../common/markdown.util";

export interface BlogPostBoxProps extends BlogPostSanity {}

function BlogPostBox({ title, slug, publishedAt }: BlogPostBoxProps) {
  return (
    <Link to={`/blog/${slug}`}>
      <div className="flex items-center hover:underline">
        <h4 className="font-normal">{dateToText(publishedAt)}</h4>
        <span className="mx-5">{"|"}</span>
        <h4>{title}</h4>
      </div>
    </Link>
  );
}

export default BlogPostBox;
