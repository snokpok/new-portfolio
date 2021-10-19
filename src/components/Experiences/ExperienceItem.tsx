import React from "react";
import { IExperienceItem } from "../../common/interfaces";

interface Props {
  experience: IExperienceItem;
}

function ExperienceItem({ experience }: Props) {
  return (
    <div className="flex w-96 py-4 space-x-4">
      <a href={experience.link ?? ""} rel="noreferrer" target="_blank">
        <div>
          {experience.logo && (
            <img
              src={experience.logo}
              width={90}
              height={90}
              className="rounded-lg"
              alt={experience.corp + " logo"}
            />
          )}
        </div>
      </a>
      <div className="flex flex-col justify-center">
        <div className="font-extrabold text-3xl">{experience.corp}</div>
        <div className="italic">{experience.position}</div>
      </div>
    </div>
  );
}

export default ExperienceItem;
