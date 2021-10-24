import React from "react";
import { Redirect } from "react-router";
import { requestToken } from "../common/functions/spotifyFunctions";
import { UserContext } from "../common/user.context";

function CallbackRedirectivePage() {
  const { setUser } = React.useContext(UserContext);
  const [startRedirect, setStartRedirect] = React.useState(false);
  let query = React.useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  const handleQueryParseAuth = React.useCallback(() => {
    if (!query.get("code")) {
      alert("please accept the permissions");
    } else {
      requestToken(query.get("code") as string).then(
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
  }, [query, setUser]);

  React.useEffect(() => {
    handleQueryParseAuth();
  }, [handleQueryParseAuth]);

  return (
    <div>
      <div>Wait a bit...</div>
      {startRedirect && <Redirect to="/" exact />}
    </div>
  );
}

export default CallbackRedirectivePage;
