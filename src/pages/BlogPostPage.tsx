import React, { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { allBlogPostsMetadata } from "../common/blog";
import { BlogPost } from "../common/interfaces";
import { InlineLink } from "../components/Miscs/InlineLink";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { Helmet } from "react-helmet";
import LeftArrowButton from "../components/LeftArrowButton";
import {
  dateToText,
  getTocFromMDText,
  snakeCase,
  TOC,
} from "../common/markdown.util";
import { ThemeStateContext } from "../common/theme.context";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface TOCProps {
  data: TOC;
}

const TableOfContentBlog = ({ data }: TOCProps) => {
  return (
    <div className="flex flex-col">
      {data.map((item, id) => (
        <InlineLink href={`#${snakeCase(item.text)}`} key={id}>
          {item.text}
        </InlineLink>
      ))}
    </div>
  );
};

function BlogPostPage() {
  const [content, setContent] = useState("");
  const params = useParams();
  const [metaBlog, setMetaBlog] = useState<BlogPost | null>(null);
  const {
    theme: { darkMode },
  } = useContext(ThemeStateContext);

  useEffect(() => {
    const id = (params as any).id;
    const metaBlog = allBlogPostsMetadata.find((item) => item.idBlurb === id);
    if (!metaBlog) return;
    setMetaBlog(metaBlog);

    fetch(metaBlog.assetUrl)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${metaBlog?.title} | Vincent Vu`}</title>
      </Helmet>
      <div className="flex flex-col items-center relative">
        <Link to="/blog" className="fixed self-start ml-4 mt-4">
          <LeftArrowButton />
        </Link>
        <div className="mt-20 sm:w-4/5 lg:w-2/3 xl:w-3/4 2xl:w-2/5 flex flex-col items-center">
          <div className="flex flex-col items-center pb-8 space-y-5">
            <h1 className="text-3xl font-semibold">{metaBlog?.title}</h1>
            <h2
              className={`text-lg font-light ${darkMode ? "text-gray-300" : "text-gray-800"
                } italic`}
            >
              {metaBlog?.date ? dateToText(metaBlog.date) : null}
            </h2>
          </div>
          <hr className="w-1/6" />
          <div className="my-5">
            <TableOfContentBlog data={getTocFromMDText(content)} />
          </div>
          <hr className="w-1/6 mb-8" />
          <div className="flex flex-col items-center px-16 leading-10">
            <Markdown
              components={{
                h1: ({ node, className, children, ...props }) => (
                  <h1
                    {...props}
                    className="text-2xl py-4 font-extrabold font-mono"
                  >
                    {children}
                  </h1>
                ),
                h2: ({ node, className, children, ...props }) => (
                  <Link
                    to={`#${snakeCase(children.toString())}`}
                    target="_self"
                  >
                    <h2
                      {...props}
                      className="text-xl py-4 font-extrabold font-mono"
                      id={snakeCase(children.toString())}
                    >
                      {children}
                    </h2>
                  </Link>
                ),
                a: ({ node, className, children, ...props }) => (
                  <InlineLink {...props} target="_blank">
                    {children}
                  </InlineLink>
                ),
                code: ({ node, className, inline, children, ...props }) => {
                  return <code {...props}>{children}</code>;
                },
                p: ({ node, className, children, ...props }) => (
                  <p {...props} className="py-2 leading-8 font-mono">
                    {children}
                  </p>
                ),
              }}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
            >
              {content}
            </Markdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostPage;
