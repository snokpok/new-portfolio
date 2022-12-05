import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { allBlogPostsMetadata } from "../common/blog";
import { BlogPost } from "../common/interfaces";
import { InlineLink } from "../components/Miscs/InlineLink";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { Helmet } from "react-helmet";

function BlogPostPage() {
  const [content, setContent] = useState("");
  const params = useParams();
  const [metaBlog, setMetaBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    const id = (params as any).id;
    const metaBlog = allBlogPostsMetadata.find((item) => item.idBlurb === id);
    // TODO: if can't find blog post then return 404 page.
    if (!metaBlog) return;
    setMetaBlog(metaBlog);
    fetch(metaBlog.assetUrl)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>{`${metaBlog?.title} | Vincent Vu`}</title>
      </Helmet>
      <div className="sm:w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-center">
        <Link to="/blog" className="hover:underline">
          <h2 className="text-xl">←</h2>
        </Link>
        <div className="my-5">
          <h1 className="text-2xl">{metaBlog?.title}</h1>
        </div>
        <hr className="w-1/6 mb-4" />
        <div className="flex flex-col items-center px-16 leading-10">
          <Markdown
            components={{
              h1: ({ node, className, children, ...props }) => (
                <h1 {...props} className="text-xl py-4 font-extrabold">
                  {children}
                </h1>
              ),
              h2: ({ node, className, children, ...props }) => (
                <h2 {...props} className="text-xl py-4 font-extrabold">
                  {children}
                </h2>
              ),
              a: ({ node, className, children, ...props }) => (
                <InlineLink {...props} />
              ),
              code: ({ node, className, inline, children, ...props }) => (
                <code {...props}>{children}</code>
              ),
              p: ({ node, className, children, ...props }) => (
                <p className={`${className} indent-4`} {...props}>
                  {children}
                </p>
              ),
            }}
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
          >
            {content}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
