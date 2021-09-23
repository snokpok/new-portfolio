import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function Socials() {
  const links = {
    linkedin: "https://linkedin.com/in/vmvu",
    github: "https://github.com/snokpok",
    instagram: "https://www.instagram.com/_vmvu/",
  };
  return (
    <div className="flex space-x-1 text-6xl md:text-4xl">
      <a href={links.github} target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a href={links.linkedin} target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
      <a href={links.instagram} target="_blank" rel="noreferrer">
        <AiFillInstagram />
      </a>
    </div>
  );
}

export default Socials;
