import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  const { theme } = React.useContext(ThemeStateContext);
  return (
    <div
      className={`flex h-16 max-w-screen border-b-2 border-gray-700 justify-between items-center px-2 fixed w-screen ${
        theme.darkMode ? "bg-black" : "bg-white"
      } z-50`}
    >
      <div className="flex space-x-6 font-bold text-xl text-center overflow-auto">
        <Link to="/">
          <NavbarLink>Home 🏡</NavbarLink>
        </Link>
        <Link to="/about">
          <NavbarLink>About me 🧑🏻‍💻</NavbarLink>
        </Link>
        <Link to="/blog">
          <NavbarLink>Blog 📖</NavbarLink>
        </Link>
      </div>
      <div className="flex items-center">
        <div>{extraElems}</div>
        <DarkModeWidget />
      </div>
    </div>
  );
}

export default Navbar;
