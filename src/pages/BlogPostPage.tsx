import React, { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { allBlogPostsMetadata } from "../common/blog";
import { BlogPost } from "../common/interfaces";
import { InlineLink } from "../components/Miscs/InlineLink";
import remarkGfm from "remark-gfm";
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
import SyntaxHighlighter from "react-syntax-highlighter";

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
      <div className="flex flex-col items-center relative max-w-screen">
        <Link to="/blog" className="fixed self-start ml-4 mt-4">
          <LeftArrowButton />
        </Link>
        <div className="mt-20 w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 flex flex-col items-center px-16">
          <div className="flex flex-col flex-wrap items-center pb-8 space-y-5 w-full">
            <h1 className="text-3xl font-semibold text-center">
              {metaBlog?.title}
            </h1>
            <h2
              className={`text-center text-lg font-light ${
                darkMode ? "text-gray-300" : "text-gray-800"
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
          <div className="flex flex-col leading-10">
            <Markdown
              components={{
                h1: ({ node, className, children, ...props }) => {
                  const id = snakeCase(children.toString());
                  return (
                    <Link to={`#${id}`} target="_self">
                      <h1
                        {...props}
                        className="pl-3 text-2xl py-4 font-extrabold font-mono"
                        id={id}
                      >
                        <span className="text-green-500">#</span> {children}
                      </h1>
                    </Link>
                  );
                },
                h2: ({ node, className, children, ...props }) => {
                  const id = snakeCase(children.toString());
                  return (
                    <Link to={`#${id}`} target="_self">
                      <h2
                        {...props}
                        className="pl-5 text-xl py-4 font-extrabold font-mono"
                        id={id}
                      >
                        <span className="text-blue-500">##</span> {children}
                      </h2>
                    </Link>
                  );
                },
                a: ({ node, className, children, ...props }) => (
                  <InlineLink {...props} target="_blank">
                    {children}
                  </InlineLink>
                ),
                code: ({ node, className, inline, children, ...props }) => {
                  if (inline) {
                    return (
                      <code
                        {...props}
                        className="text-red-600 bg-gray-800 px-1 ml-1"
                      >
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="my-8 flex justify-center">
                      <SyntaxHighlighter language="cpp">
                        {children.toString()}
                      </SyntaxHighlighter>
                    </code>
                  );
                },
                p: ({ node, className, children, ...props }) => (
                  <p {...props} className="py-2 leading-8 indent-1 px-5">
                    {children}
                  </p>
                ),
                blockquote: ({ children }) => (
                  <div className="border-l-2 border-gray-400 my-3 ml-1 sm:ml-4">
                    <p className="pl-0 sm:pl-5 leading-8 font-mono italic font-bold text-gray-300">
                      {children}
                    </p>
                  </div>
                ),
              }}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
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
