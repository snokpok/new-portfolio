import React, { ReactElement } from "react";
import "./App.css";
import IntroductionHeader from "./components/IntroductionHeader/IntroductionHeader";
import Projects from "./components/Projects/Projects";

function App(): ReactElement {
  return (
    <div className="min-w-screen min-h-screen bg-black text-white">
      <IntroductionHeader />
      <Projects />
    </div>
  );
}

export default App;
