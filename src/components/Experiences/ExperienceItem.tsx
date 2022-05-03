import { IExperienceItem } from "../../common/interfaces";
import moment from 'moment'

interface Props {
  experience: IExperienceItem;
}

function ExperienceItem({ experience }: Props) {
  return (
    <div className="flex flex-col items-center py-4 space-x-4 sm:flex-row">
      <div className="my-2">
        {experience.logo && (
          <a href={experience.link ?? ""} rel="noreferrer" target="_blank">
            <img
              src={experience.logo}
              className="p-1 rounded-lg bg-white"
              width={90}
              height={90}
              alt={experience.corp + " logo"}
            />
          </a>
        )}
      </div>
      <div className="flex flex-col justify-center w-full text-center sm:text-left">
        <div className="font-extrabold text-3xl">{experience.corp}</div>
        <div className="italic">{experience.position}</div>
        {experience.duration && (
          <div>
            {moment(experience.duration.from).format("MMM YYYY")} - {moment(experience.duration?.to).format("MMM YYYY")}
          </div>
        )}
        <hr />
        <div>{experience.description}</div>
      </div>
    </div>
  );
}

export default ExperienceItem;
