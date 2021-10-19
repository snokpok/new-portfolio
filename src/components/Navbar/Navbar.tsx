import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RESUME_LINK } from "../../common/data";
import DarkModeWidget from "../Miscs/DarkModeWidget";

const NavbarLink = styled.div`
  font-weight: 800;
`;

const ExternalLink = styled.div`
  font-weight: 800;
  color: cyan;
`;

function Navbar() {
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
      <DarkModeWidget />
    </div>
  );
}

export default Navbar;
