import { experiences, involvements } from "../../common/data";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <div className="flex 2xl:flex-row flex-col my-8 2xl:space-x-24">
      <div>
        <div className="text-4xl font-bold mb-4 text-center md:text-left">
          💻 Work
        </div>
        <div className="flex flex-col max-w-3xl">
          {experiences.map((exp, idx) => (
            <ExperienceItem experience={exp} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <div className="2xl:mt-0 mt-20 text-4xl font-bold mb-4 text-center md:text-left">
          🏫 Involvement
        </div>
        <div className="flex flex-col max-w-3xl">
          {involvements.map((exp, idx) => (
            <ExperienceItem experience={exp} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
