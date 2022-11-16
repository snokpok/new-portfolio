import React from "react";
import { technologiesIdAssetMap } from "../../common/technologies";

export interface IProjectItem {
  name: string;
  description: string;
  link?: string;
  linkLabel?: string;
  key: string;
  imgFormat: string;
  technologies?: (keyof (typeof technologiesIdAssetMap))[];
}

interface Props {
  project: IProjectItem;
}

function ProjectItem({ project }: Props) {
  return (
    <div
      key={project.key}
      className="flex flex-col max-w-xl border-2 m-6 w-96 rounded-lg xl:hover:rotate-1 xl:hover:scale-105 transform duration-150"
    >
      <img
        src={`projects/${project.key}.${project.imgFormat}`}
        alt={`Project ${project.key}`}
        className="rounded-t-md"
      />
      <div className="flex flex-col p-7 pt-1 h-full">
        <div className="font-bold font-mono border-b-2 p-2 text-xl xl:text-2xl md:text-3xl">
          {project.name}
        </div>
        <div className="w-full h-4/5 p-2 text-xl xl:text-base md:text-2xl">
          {project.description}
        </div>
        <div className="w-full my-4 flex items-center justify-center flex-wrap">
          {project.technologies?.map(tid => technologiesIdAssetMap[tid]).map((t, i) => (
            <img src={t.assetLogoPathPublic} className="w-16 px-1" alt={t.displayName} id={i.toString()} />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 text-green-500 transition text-2xl md:text-xl"
          >
            {project.linkLabel ?? "Link"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
