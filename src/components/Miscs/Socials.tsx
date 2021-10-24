import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { socialLinks } from "../../common/data";

function Socials() {
  return (
    <div className="flex flex-col items-center text-6xl sm:text-4xl space-y-4">
      <div className="flex space-x-1">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transform transition"
        >
          <AiFillGithub />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transform transition"
        >
          <AiFillLinkedin />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transform transition"
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
}

export default Socials;
