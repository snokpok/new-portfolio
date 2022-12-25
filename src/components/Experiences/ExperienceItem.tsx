import moment from "moment";
import { useContext } from "react";
import { IExperienceItem } from "../../common/interfaces";
import { ThemeStateContext } from "../../common/theme.context";
import { H2, H3, Text } from "../Typography";

interface Props {
  experience: IExperienceItem;
}

function ExperienceItem({ experience }: Props) {
  const {
    theme: { darkMode },
  } = useContext(ThemeStateContext);
  return (
    <div className="flex flex-col py-4 space-x-0 sm:space-x-6 sm:flex-row">
      <div className="my-2 flex flex-col items-center">
        {experience.logo && (
          <a href={experience.link ?? ""} rel="noreferrer" target="_blank">
            <img
              src={experience.logo}
              className="bg-white"
              width={90}
              height={90}
              alt={experience.corp + " logo"}
            />
          </a>
        )}
      </div>
      <div className="flex flex-col justify-center w-full text-center sm:text-left gap-1">
        <H2>{experience.corp}</H2>
        <Text>{experience.position}</Text>
        {experience.duration !== undefined && (
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } text-sm`}
          >
            {moment(experience.duration.from).format("MMM YYYY")} -{" "}
            {experience.duration?.to
              ? moment(experience.duration.to).format("MMM YYYY")
              : "Present"}
          </p>
        )}
        <hr />
        <p>{experience.description}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
