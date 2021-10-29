import React from "react";
import { myImagesPaths, projectsList } from "../common/data";
import Experiences from "../components/Experiences/Experiences";
import { InlineLink } from "../components/Miscs/InlineLink";
import PictureClickthroughs from "../components/Miscs/PictureClickthroughs";

function AboutMePage() {
  return (
    <div className="flex flex-col items-center md:px-8">
      <div className="flex flex-col space-y-4 md:flex-row-reverse md:justify-center items-center mt-10 relative">
        <div className="mx-4">
          <PictureClickthroughs
            keyPathDict={myImagesPaths}
            imageStyles="rounded-md"
          />
        </div>
        <div className="w-3/4 sm:w-2/3 lg:w-1/3">
          <div className="text-lg space-y-2">
            <div className="text-3xl font-extrabold">Hello!</div>
            <div>
              I'm Vincent Vu, currently studying Computer Science at the
              University of Southern California. My interest lies in building
              new products and watching them to fruition. I'm building various
              apps in my free time, a few notable ones include{" "}
              <InlineLink href={projectsList.listlive.link} target="_blank">
                Listlive, a web/desktop social productivity to-do list
                application
              </InlineLink>{" "}
              and{" "}
              <InlineLink href={projectsList.koseur.link} target="_blank">
                Koseur, a nightlife application
              </InlineLink>
              that I built while I was still in Vietnam
              {"\n"}
            </div>
            <div>
              I'm also passionate about helping others build out their ideas. I
              currently serve as an engineering lead organizer at HackSC. My
              focus is on maintaining and migrating the various services,
              dashboards and devtools there
            </div>
          </div>
        </div>
      </div>
      <Experiences />
    </div>
  );
}

export default AboutMePage;
