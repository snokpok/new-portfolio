import React from "react";
import ExperienceItem, { IExperienceItem } from "./ExperienceItem";

function Experiences() {
  const experiences: IExperienceItem[] = [
    {
      corp: "GEEK Up",
      position: "Software Engineering Intern",
      description: [
        "Worked in an Agile environment to deliver an internal web application to ease HR’s recruitment workflow",
        "Undertaken major responsibility to develop and deliver a major independent module out of 4 others",
        "Conducted interviews with HRs and team members to ensure timely deliveries and efficient code integrations",
      ],
    },
    {
      corp: "Alta Software",
      position: "Artificial Intelligence Intern",
      description: [
        "Debugged source code problems in Docker images for Vietnamese speech recognition",
        "Wrote Linux bash scripts to initiate training, Python scripts for preprocessing and creating manifested data files",
      ],
    },
  ];

  return (
    <div className="flex flex-col mt-8">
      <div className="text-4xl font-bold text-center">
        💻 Places I have worked at
      </div>
      <div className="flex flex-col w-full items-center ">
        {experiences.map((exp) => (
          <ExperienceItem experience={exp} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
