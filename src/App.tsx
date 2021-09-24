import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { ThemeContext, ThemeState } from "./common/theme.context";
import Experiences from "./components/Experiences/Experiences";
import IntroductionHeader from "./components/IntroductionHeader/IntroductionHeader";
import Projects from "./components/Projects/Projects";
import { RiMoonClearFill } from "react-icons/ri";

function App(): ReactElement {
  const [theme, setTheme] = React.useState<ThemeState>({ darkMode: true });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Helmet>
        <title>Home | Vincent Vu</title>
      </Helmet>
      <div
        className={`min-w-screen min-h-screen ${
          theme.darkMode && "bg-black text-white"
        }`}
      >
        <div className="flex flex-row-reverse w-full pt-5 px-5">
          <RiMoonClearFill
            className="text-3xl lg:text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setTheme({ darkMode: !theme.darkMode });
            }}
          />
        </div>
        <IntroductionHeader />
        <Projects />
        <Experiences />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
