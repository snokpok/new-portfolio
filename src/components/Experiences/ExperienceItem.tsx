import React from "react";

export interface IExperienceItem {
  corp: string;
  duration?: {
    from: string;
    to: string;
  };
  position: string;
  description: string[];
}

interface Props {
  experience: IExperienceItem;
}

function ExperienceItem({ experience }: Props) {
  return (
    <div className="flex flex-col border-b w-96 my-4 p-8 items-center">
      <div className="text-center font-extrabold text-3xl font-serif">
        {experience.corp}
      </div>
      <div>..</div>
      <div className="italic">{experience.position}</div>
      <div>..</div>
      <div>
        {experience.description.map((d) => (
          <li>{d}</li>
        ))}
      </div>
    </div>
  );
}

export default ExperienceItem;
