import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import { SCPGO_TOKEN } from "./common/env";
import { ThemeStateContext, ThemeState } from "./common/theme.context";
import { UserContext, UserState } from "./common/user.context";
import Footer from "./components/Footer/Footer";
import SpotifyCPWidget from "./components/IntroductionHeader/SpotifyCPWidget";
import Navbar from "./components/Navbar/Navbar";
import AboutMePage from "./pages/AboutMePage";
import BlogPostListPage from "./pages/BlogPostListPage";
import BlogPostPage from "./pages/BlogPostPage";
import HomePage from "./pages/HomePage";

function App(): ReactElement {
  const [theme, setTheme] = React.useState<ThemeState>({ darkMode: true });
  const [user, setUser] = React.useState<UserState>({
    accessToken: SCPGO_TOKEN,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeStateContext.Provider value={{ theme, setTheme }}>
        <div
          className={`min-w-screen min-h-screen font-rubik ${
            theme.darkMode ? "bg-black text-white" : "bg-white text-black"
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
            <Route exact path="/blog">
              <Helmet>
                <title>Blog | Vincent Vu</title>
              </Helmet>
              <Navbar extraElems={<SpotifyCPWidget size="small" />} />
              <div className="py-16">
                <BlogPostListPage />
              </div>
              <Footer />
            </Route>
            <Route exact path="/blog/:id">
              <Helmet>
                <title>Blog | Vincent Vu</title>
              </Helmet>
              <Navbar extraElems={<SpotifyCPWidget size="small" />} />
              <div className="py-16">
                <BlogPostPage />
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
