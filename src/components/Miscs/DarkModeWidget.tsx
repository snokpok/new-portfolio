import React from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { ThemeStateContext } from "../../common/theme.context";

function DarkModeWidget() {
  const { theme, setTheme } = React.useContext(ThemeStateContext);

  return (
    <RiMoonClearFill
      className="text-3xl lg:text-2xl cursor-pointer m-2"
      onClick={(e) => {
        e.preventDefault();
        setTheme({ darkMode: !theme.darkMode });
      }}
    />
  );
}

export default DarkModeWidget;
