import React, { useContext } from "react";
import { ThemeStateContext } from "../common/theme.context";

const LeftArrowButton = () => {
  const { theme } = useContext(ThemeStateContext);
  return (
    <button
      className={`px-2 pb-1 ${theme.darkMode ? "text-white" : "text-black"} ${
        theme.darkMode ? "border-white" : "border-black"
      } border-2 rounded-full group hover:${
        theme.darkMode ? "bg-white" : "bg-black"
      } transition-colors ${theme.darkMode ? "bg-black" : "bg-white"}`}
    >
      <h2
        className={`text-xl group-hover:${
          theme.darkMode ? "text-black" : "text-white"
        }`}
      >
        ←
      </h2>
    </button>
  );
};

export default LeftArrowButton;
