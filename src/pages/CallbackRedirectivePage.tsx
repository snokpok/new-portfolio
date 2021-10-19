import React from "react";
import { Redirect, useLocation } from "react-router";
import { originalCallbackURL } from "../common/data";
import { requestToken } from "../common/functions/spotifyFunctions";
import { UserContext } from "../common/user.context";

function CallbackRedirectivePage() {
  let query = new URLSearchParams(useLocation().search);
  const { setUser } = React.useContext(UserContext);
  const [startRedirect, setStartRedirect] = React.useState(false);

  React.useEffect(() => {
    if (!query.get("code")) {
      alert("please accept the permissions");
    } else {
      requestToken(query.get("code") as string, originalCallbackURL).then(
        (res) => {
          const accessToken = res.data["access_token"];
          const refreshToken = res.data["refresh_token"];
          if (accessToken && refreshToken) {
            setUser({
              accessToken,
              refreshToken,
            });
            setStartRedirect(true);
          } else {
            alert(
              "something went wrong with the access token retrieval process"
            );
          }
        }
      );
    }
  }, []);

  return (
    <div>
      <div>Wait a bit...</div>
      {startRedirect && <Redirect to="/" exact />}
    </div>
  );
}

export default CallbackRedirectivePage;
