import { experiences, involvements } from "../../common/data";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <div className="flex xl:flex-row flex-col my-8 xl:space-x-24 gap-10">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
          💻 Work
        </h1>
        <div className="flex flex-col max-w-xl">
          {experiences.map((exp, idx) => (
            <ExperienceItem experience={exp} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
          🏫 Involvement
        </h1>
        <div className="flex flex-col max-w-xl">
          {involvements.map((exp, idx) => (
            <ExperienceItem experience={exp} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
