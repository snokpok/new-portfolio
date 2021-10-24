import React from "react";
import Socials from "../Miscs/Socials";

function Footer() {
  return (
    <div className="flex flex-col w-full items-center p-4 text-xl md:text-6xl">
      <hr className="w-1/3 mb-4" />
      <Socials />
      <div className="text-xl">&copy; 2021 Vincent Vu</div>
    </div>
  );
}

export default Footer;
