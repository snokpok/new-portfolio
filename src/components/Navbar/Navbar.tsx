import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RESUME_LINK } from "../../common/data";
import { ThemeStateContext } from "../../common/theme.context";
import DarkModeWidget from "../Miscs/DarkModeWidget";

const NavbarLink = styled.div`
  font-weight: 800;
`;

type ExternalLinkProps = React.LinkHTMLAttributes<any>;
const ExternalLink = (props: ExternalLinkProps) => {
  const { theme } = React.useContext(ThemeStateContext);

  return (
    <div
      style={{ color: theme.darkMode ? "cyan" : "darkcyan", fontWeight: 800 }}
    >
      {props.children}
    </div>
  );
};

interface Props {
  extraElems?: React.ReactNode;
}
function Navbar({ extraElems }: Props) {
  return (
    <div className="flex max-h-16 max-w-screen border-b-2 justify-between items-center px-2">
      <div className="flex space-x-6 font-bold text-xl text-center">
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
      <div className="flex items-center">
        <div>{extraElems}</div>
        <DarkModeWidget />
      </div>
    </div>
  );
}

export default Navbar;
