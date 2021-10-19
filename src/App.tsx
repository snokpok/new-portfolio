import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import "./App.css";
import { ThemeStateContext, ThemeState } from "./common/theme.context";
import { UserContext, UserState } from "./common/user.context";
import Navbar from "./components/Navbar/Navbar";
import AboutMePage from "./pages/AboutMePage";
import CallbackRedirectivePage from "./pages/CallbackRedirectivePage";
import HomePage from "./pages/HomePage";

function App(): ReactElement {
  const [theme, setTheme] = React.useState<ThemeState>({ darkMode: true });
  const [user, setUser] = React.useState<UserState>({
    accessToken: null,
    refreshToken: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeStateContext.Provider value={{ theme, setTheme }}>
        <div
          className={`min-w-screen min-h-screen ${
            theme.darkMode && "bg-black text-white"
          }`}
        >
          <Switch>
            <Route path="/callback">
              <CallbackRedirectivePage />
            </Route>
            <Route exact path="/">
              <Helmet>
                <title>Home | Vincent Vu</title>
              </Helmet>
              <Navbar />
              <HomePage />
            </Route>
            <Route exact path="/about">
              <Helmet>
                <title>About me | Vincent Vu</title>
              </Helmet>
              <Navbar />
              <AboutMePage />
            </Route>
          </Switch>
        </div>
      </ThemeStateContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
