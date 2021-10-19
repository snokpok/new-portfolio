import React from "react";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { socialLinks } from "../../common/data";

function Socials() {
  return (
    <div className="flex flex-col items-center text-6xl md:text-4xl space-y-4">
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
      <a
        href={socialLinks.email}
        target="_blank"
        rel="noreferrer"
        className="border-2 rounded-md hover:scale-110 hover:bg-white hover:text-black transform transition"
      >
        <div className="flex items-center p-4">
          <AiOutlineMail />
          <div className="ml-2 text-lg font-extrabold">Contact me!</div>
        </div>
      </a>
    </div>
  );
}

export default Socials;
