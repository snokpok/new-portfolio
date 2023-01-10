import { projectsList } from "../../common/data";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="flex flex-col w-full">
      <div className="text-center text-4xl font-bold mb-4">🚀 Projects</div>
      <div className="flex w-full flex-wrap justify-center">
        {Object.values(projectsList).map((project) => (
          <ProjectItem project={project} key={project.key} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
