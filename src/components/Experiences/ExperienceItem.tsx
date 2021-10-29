import React from "react";
import { IExperienceItem } from "../../common/interfaces";
import { ThemeStateContext } from "../../common/theme.context";

interface Props {
  experience: IExperienceItem;
}

function ExperienceItem({ experience }: Props) {
  const { theme } = React.useContext(ThemeStateContext);

  return (
    <div className="flex w-72 md:w-96 py-4 space-x-4">
      <div>
        {experience.logo && (
          <a href={experience.link ?? ""} rel="noreferrer" target="_blank">
            <img
              src={experience.logo}
              className="rounded-lg"
              width={90}
              height={90}
              alt={experience.corp + " logo"}
            />
          </a>
        )}
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="font-extrabold text-3xl">{experience.corp}</div>
        <div className="italic">{experience.position}</div>
        {experience.duration && (
          <div
            className={`${theme.darkMode ? "text-gray-300" : "text-gray-500"}`}
          >
            {experience.duration?.from} - {experience.duration?.to}
          </div>
        )}
        <hr />
        <div>{experience.description}</div>
      </div>
    </div>
  );
}

export default ExperienceItem;
