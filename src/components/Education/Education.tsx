import React from "react";

export interface IEducationItem {
  schoolName: string;
  degree: string;
  grade?: {
    label?: string;
    point: number;
  };
}

function Education() {
  const education: IEducationItem[] = [
    {
      schoolName: "University of Southern California",
      degree: "B.S. Computer Science",
    },
  ];

  return (
    <div className="flex flex-col py-8">
      <div className="text-center font-bold text-4xl">🎓 Education</div>
      <div>
        {education.map((e) => (
          <div className="flex flex-col">
            <div>{e.schoolName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
