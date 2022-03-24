import React from "react";
import ContactMe from "../Miscs/ContactMe";
import Socials from "../Miscs/Socials";
import SpotifyCPWidget from "./SpotifyCPWidget";

function IntroductionHeader() {
  const headline =
    "Software engineer with a passion for building impactful and scalable products";
  return (
    <div className="md:flex md:flex-row sm:flex-col py-5">
      <div className="flex flex-col items-center justify-center m-0 md:w-2/3 sm:w-full space-y-3">
        <div className="mx-8 text-7xl font-bold text-center">Vincent Vu</div>
        <div className="text-center text-2xl md:text-xl mx-8">{headline}</div>
        <Socials />
        <ContactMe />
        <SpotifyCPWidget />
      </div>
      <div className="flex flex-col py-5 justify-center items-center sm:w-full md:w-1/3">
        <img
          src={`images/nft2.png`}
          alt="Character"
          className="w-52 h-52 rounded-full"
        />
      </div>
    </div>
  );
}

export default IntroductionHeader;
