import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../../common/interfaces";
import moment from "moment";
import { dateToText } from "../../common/markdown.util";

export interface BlogPostBoxProps extends BlogPost {}

function BlogPostBox({ date, title, idBlurb }: BlogPostBoxProps) {
  return (
    <Link to={`/blog/${idBlurb}`}>
      <div className="flex items-center hover:underline">
        <h4 className="font-normal">{dateToText(date)}</h4>
        <span className="mx-5">{"|"}</span>
        <h4>{title}</h4>
      </div>
    </Link>
  );
}

export default BlogPostBox;
