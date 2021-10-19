import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { originalCallbackURL, RESUME_LINK } from "../../common/data";
import { CLIENT_ID } from "../../common/env";
import { UserContext } from "../../common/user.context";
import DarkModeWidget from "../Miscs/DarkModeWidget";

const NavbarLink = styled.div`
  font-weight: 800;
`;

const ExternalLink = styled.div`
  font-weight: 800;
  color: cyan;
`;

function Navbar() {
  const { user } = React.useContext(UserContext);
  const stateNumber = "34fFs29kd09";
  const authorizeSpotifyURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    originalCallbackURL
  )}&scope=user-read-currently-playing&state=${stateNumber}`;

  return (
    <div className="flex max-h-16 max-w-screen border-b-2 justify-between items-center px-2">
      <div className="flex space-x-6 font-bold text-xl">
        <Link to="/">
          <NavbarLink>Home 🏡</NavbarLink>
        </Link>
        <Link to="/about">
          <NavbarLink>About me 🧑🏻‍💻</NavbarLink>
        </Link>
        <a href={RESUME_LINK} target="_blank" rel="noreferrer">
          <ExternalLink>Resume 👈</ExternalLink>
        </a>
      </div>
      {!user?.accessToken && (
        <div>
          <a href={authorizeSpotifyURL}>Authorize</a>
        </div>
      )}
      <DarkModeWidget />
    </div>
  );
}

export default Navbar;
