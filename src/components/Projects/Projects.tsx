import { projectsList } from "../../common/data";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-center text-4xl font-bold mb-4">🚀 Projects</h1>
      <div className="flex w-full flex-wrap justify-center">
        {Object.values(projectsList).map((project) => (
          <ProjectItem project={project} key={project.key} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
