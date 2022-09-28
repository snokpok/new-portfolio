import { experiences, involvements } from "../../common/data";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <div className="flex flex-col my-8 mx-4">
      <div className="text-4xl font-bold mb-4 text-center md:text-left">
        💻 Work
      </div>
      <div className="flex flex-col max-w-2xl">
        {experiences.map((exp, idx) => (
          <ExperienceItem experience={exp} key={idx} />
        ))}
      </div>
      <div className="mt-20 text-4xl font-bold mb-4 text-center md:text-left">
        🏫 Involvement
      </div>
      <div className="flex flex-col max-w-xl">
        {involvements.map((exp, idx) => (
          <ExperienceItem experience={exp} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
