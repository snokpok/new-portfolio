import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { socialLinks } from "../../common/data";

function ContactMe() {
  return (
    <div className="border-2 rounded-md hover:scale-110 hover:bg-white hover:text-black transform transition">
      <a href={socialLinks.email} target="_blank" rel="noreferrer">
        <div className="flex items-center p-4 text-3xl">
          <AiOutlineMail />
          <div className="ml-2 text-lg font-extrabold">Contact me!</div>
        </div>
      </a>
    </div>
  );
}

export default ContactMe;
