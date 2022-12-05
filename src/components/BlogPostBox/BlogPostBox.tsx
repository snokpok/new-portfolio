import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../../common/interfaces";
import moment from "moment";

export interface BlogPostBoxProps extends BlogPost {}

function BlogPostBox({ date, title, idBlurb }: BlogPostBoxProps) {
  const mmDate = moment(date);
  return (
    <Link to={`/blog/${idBlurb}`}>
      <div className="flex items-center">
        <h4>{mmDate.format("MMMM Do, YYYY")}</h4>
        <span className="mx-5">{"|"}</span>
        <h4>{title}</h4>
      </div>
    </Link>
  );
}

export default BlogPostBox;
