import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import "./App.css";
import { ThemeStateContext, ThemeState } from "./common/theme.context";
import { UserContext, UserState } from "./common/user.context";
import Footer from "./components/Footer/Footer";
import SpotifyCPWidget from "./components/IntroductionHeader/SpotifyCPWidget";
import Navbar from "./components/Navbar/Navbar";
import AboutMePage from "./pages/AboutMePage";
import HomePage from "./pages/HomePage";

const SCPGO_TOKEN = import.meta.env.VITE_SCPGO_TOKEN ?? "";

function App(): ReactElement {
  const [theme, setTheme] = React.useState<ThemeState>({ darkMode: true });
  const [user, setUser] = React.useState<UserState>({
    accessToken: SCPGO_TOKEN,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeStateContext.Provider value={{ theme, setTheme }}>
        <div
          className={`min-w-screen min-h-screen ${theme.darkMode && "bg-black text-white"
            }`}
        >
          <Switch>
            <Route exact path="/">
              <Helmet>
                <title>Home | Vincent Vu</title>
              </Helmet>
              <Navbar />
              <div className="py-20">
                <HomePage />
              </div>
            </Route>
            <Route exact path="/about">
              <Helmet>
                <title>About me | Vincent Vu</title>
              </Helmet>
              <Navbar extraElems={<SpotifyCPWidget size="small" />} />
              <div className="py-16">
                <AboutMePage />
              </div>
              <Footer />
            </Route>
          </Switch>
        </div>
      </ThemeStateContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
