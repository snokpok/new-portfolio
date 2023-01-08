import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { BlogPostSanity } from "../common/interfaces";
import { InlineLink } from "../components/Miscs/InlineLink";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Helmet } from "react-helmet";
import LeftArrowButton from "../components/LeftArrowButton";
import {
  dateToText,
  getTocFromMDText,
  headingLevelColors,
  snakeCase,
  TOC,
} from "../common/markdown.util";
import { ThemeStateContext } from "../common/theme.context";
import SyntaxHighlighter from "react-syntax-highlighter";
import { getBlogPostSingle } from "../common/blog";

interface TOCProps {
  data: TOC;
}

const TableOfContentBlog = ({ data }: TOCProps) => {
  return (
    <div className="flex flex-col">
      {data.map((item, id) => {
        return (
          <InlineLink
            style={{ paddingLeft: `${(item.level - 1) * 10}px` }}
            href={`#${snakeCase(item.text)}`}
            key={id}
            color={
              headingLevelColors[item.level as keyof typeof headingLevelColors]
            }
          >
            {item.text}
          </InlineLink>
        );
      })}
    </div>
  );
};

function BlogPostPage() {
  const [content, setContent] = useState("");
  const params = useParams();
  const [metaBlog, setMetaBlog] = useState<BlogPostSanity | null>(null);
  const {
    theme: { darkMode },
  } = useContext(ThemeStateContext);

  useEffect(() => {
    const slug = (params as any).id;
    getBlogPostSingle(slug)
      .then((metaBlog) => {
        setMetaBlog(metaBlog);
        setContent(metaBlog?.body ?? "");
      })
      .catch((e) => console.error(e));
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
        <div className="mt-20 max-w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 flex flex-col items-center px-1 sm:px-16">
          <div className="flex flex-col flex-wrap items-center pb-8 space-y-5 w-full">
            <h1 className="text-3xl font-semibold text-center">
              {metaBlog?.title}
            </h1>
            <h2
              className={`text-center text-lg font-light ${
                darkMode ? "text-gray-300" : "text-gray-800"
              } italic`}
            >
              {metaBlog?.publishedAt ? dateToText(metaBlog.publishedAt) : null}
            </h2>
          </div>
          <hr className="w-1/6" />
          <div className="my-5">
            <TableOfContentBlog data={getTocFromMDText(content)} />
          </div>
          <hr className="w-1/6 mb-8" />
          <div className="flex flex-col max-w-full leading-10">
            <Markdown
              components={{
                h1: ({ node, className, children, ...props }) => {
                  const id = snakeCase(children.toString());
                  return (
                    <Link to={`#${id}`} target="_self">
                      <h1
                        {...props}
                        className="pl-3 text-xl sm:text-2xl py-4 font-extrabold font-mono"
                        id={id}
                      >
                        <span className={`text-${headingLevelColors[1]}-500`}>
                          #
                        </span>{" "}
                        {children}
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
                        className="pl-5 text-base sm:text-xl py-4 font-extrabold font-mono"
                        id={id}
                      >
                        <span className={`text-${headingLevelColors[2]}-500`}>
                          ##
                        </span>{" "}
                        {children}
                      </h2>
                    </Link>
                  );
                },
                h3: ({ node, className, children, ...props }) => {
                  const id = snakeCase(children.toString());
                  return (
                    <Link to={`#${id}`} target="_self">
                      <h3
                        {...props}
                        className="pl-5 text-sm sm:text-lg py-4 font-extrabold font-mono"
                        id={id}
                      >
                        <span className={`text-${headingLevelColors[3]}-500`}>
                          ###
                        </span>{" "}
                        {children}
                      </h3>
                    </Link>
                  );
                },
                h4: ({ node, className, children, ...props }) => {
                  const id = snakeCase(children.toString());
                  return (
                    <Link to={`#${id}`} target="_self">
                      <h4
                        {...props}
                        className="pl-5 text-xs sm:text-md py-4 font-extrabold font-mono"
                        id={id}
                      >
                        <span className={`text-${headingLevelColors[4]}-500`}>
                          ####
                        </span>{" "}
                        {children}
                      </h4>
                    </Link>
                  );
                },
                h5: ({ node, className, children, ...props }) => {
                  const id = snakeCase(children.toString());
                  return (
                    <Link to={`#${id}`} target="_self">
                      <h4
                        {...props}
                        className="pl-5 text-xs sm:text-base py-4 font-extrabold font-mono"
                        id={id}
                      >
                        <span className={`text-${headingLevelColors[5]}-500`}>
                          #####
                        </span>{" "}
                        {children}
                      </h4>
                    </Link>
                  );
                },
                a: ({ node, className, children, ...props }) => (
                  <InlineLink {...props} target="_blank">
                    {children}
                  </InlineLink>
                ),
                ul: ({ node, className, children, ...props }) => (
                  <ul {...props} className={`${className} ml-10 list-disc`}>
                    {children}
                  </ul>
                ),
                ol: ({ node, className, children, ...props }) => (
                  <ol {...props} className={`${className} ml-10 list-decimal`}>
                    {children}
                  </ol>
                ),
                li: ({ node, className, children, ...props }) => (
                  <li {...props}>
                    <p className="leading-relaxed">{children}</p>
                  </li>
                ),
                code: ({ node, className, inline, children, ...props }) => {
                  if (inline) {
                    return (
                      <code
                        {...props}
                        className={`text-red-600 ${
                          darkMode ? "bg-gray-800" : "bg-gray-200"
                        } px-1 ml-1`}
                      >
                        {children}
                      </code>
                    );
                  }
                  const match = /language-(\w+)/.exec(className || "");
                  return (
                    match && (
                      <code className="my-8 text-sm overflow-auto">
                        <SyntaxHighlighter language={match[1]} wrapLongLines>
                          {children.toString()}
                        </SyntaxHighlighter>
                      </code>
                    )
                  );
                },
                p: ({ node, className, children, ...props }) => (
                  <p {...props} className="py-2 leading-relaxed indent-1 px-5">
                    {children}
                  </p>
                ),
                blockquote: ({ children }) => (
                  <div className="border-l-2 border-gray-400 my-3 ml-2 sm:ml-4">
                    <p
                      className={`pl-0 sm:pl-0 font-mono italic font-bold ${
                        darkMode ? "text-gray-300" : "text-gray-800"
                      }`}
                    >
                      {children}
                    </p>
                  </div>
                ),
                img: ({ children, ...props }) => {
                  return (
                    <div className="flex justify-center">
                      <img {...props} />
                    </div>
                  );
                },
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
