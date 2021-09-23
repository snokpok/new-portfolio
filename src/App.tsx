import React, { ReactElement } from "react";
import "./App.css";
import { ThemeContext, ThemeState } from "./common/theme.context";
import Experiences from "./components/Experiences/Experiences";
import IntroductionHeader from "./components/IntroductionHeader/IntroductionHeader";
import Projects from "./components/Projects/Projects";

function App(): ReactElement {
  const [theme, setTheme] = React.useState<ThemeState>({ darkMode: true });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`min-w-screen min-h-screen ${
          theme.darkMode && "bg-black text-white"
        }`}
      >
        <IntroductionHeader />
        <Projects />
        <Experiences />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
