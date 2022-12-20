import React from "react";
import { BlogPost } from "../../common/interfaces";
import BlogPostBox from "../BlogPostBox/BlogPostBox";

interface Props {
  data: BlogPost[];
}

function BlogPostsList({ data }: Props) {
  return (
    <div className="flex flex-col items-center py-10 w-4/5 sm:w-full">
      {data.map(({ title, date, assetUrl, idBlurb, draft }, index) => {
        if (draft) return null;
        return (
          <div className="py-2" key={index}>
            <BlogPostBox
              title={title}
              date={date}
              assetUrl={assetUrl}
              idBlurb={idBlurb}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BlogPostsList;
