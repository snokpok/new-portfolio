import React, { useContext } from "react";
import { ThemeStateContext } from "../common/theme.context";
import BlogPostsList from "../components/BlogPostsList/BlogPostsList";
import "../animations.module.css";
import styles from "./BlogPostListPage.module.css";

export default function BlogPostListPage() {
  const {
    theme: { darkMode },
  } = useContext(ThemeStateContext);

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-4xl pb-3 font-semibold">All blogs</h1>
      <hr className="w-10 pb-3" />
      <h2
        className={`text-lg italic ${
          darkMode ? "text-gray-300" : "text-gray-400"
        }`}
      >
        My various thoughts, devlogs, etc...
      </h2>
      <div className={styles.blogPostList}>
        <BlogPostsList />
      </div>
    </div>
  );
}
