import React from "react";
import { experiences } from "../../common/data";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <div className="flex flex-col mt-8">
      <div className="text-4xl font-bold text-center mb-4">
        💻 Places I have worked at
      </div>
      <div className="flex flex-col w-full items-center">
        {experiences.map((exp) => (
          <ExperienceItem experience={exp} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
