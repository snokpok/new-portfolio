import React from "react";
import ContactMe from "../Miscs/ContactMe";
import Socials from "../Miscs/Socials";

function IntroductionHeader() {
  return (
    <div className="md:flex md:flex-row sm:flex-col py-5">
      <div className="flex flex-col items-center justify-center m-0 md:w-2/3 sm:w-full space-y-3">
        <div className="mx-8 text-7xl font-bold text-center">Vincent Vu</div>
        <div className="text-center text-2xl md:text-xl mx-8">
          Software engineer with a passion for building scalable products 👨‍💻
        </div>
        <Socials />
        <ContactMe />
      </div>
      <div className="flex flex-col py-5 justify-center items-center sm:w-full md:w-1/3">
        <img
          src={`images/me-avatar-char.jpeg`}
          alt="Character"
          className="w-52 h-52 rounded-full"
        />
      </div>
    </div>
  );
}

export default IntroductionHeader;
