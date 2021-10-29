import React from "react";
import { experiences } from "../../common/data";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <div className="flex flex-col my-8 mx-4">
      <div className="text-4xl font-bold text-center mb-4">💻 Where I have been & am at</div>
      <div className="flex flex-col w-full items-center">
        {experiences.map((exp) => (
          <ExperienceItem experience={exp} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
