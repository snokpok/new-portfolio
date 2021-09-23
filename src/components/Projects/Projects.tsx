import React from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
  const projectsList = [
    {
      name: "Listlive: Making Productivity Social",
      description:
        "A MVP of a todo-list app where you can share your productivity grinds with others. Built with Next.js + TailwindCSS, with a ReST Python API backend + MongoDB",
      linkLabel: "Repo",
      link: "https://github.com/snokpok/listlive",
      key: "listlive",
      imgFormat: "png",
    },
    {
      name: "Koseur: Nightlife App",
      description:
        "Nightlife app for Vietnamese bars, built with Next.js + Sass",
      linkLabel: "Repo",
      link: "https://github.com/snokpok/koseur-frontend",
      key: "koseur",
      imgFormat: "png",
    },
    {
      name: "TDS Company Ltd. Landing Page",
      description:
        "Renewing a Vietnamese ceramics company's landing page with HTML5 + CSS3",
      link: "http://tdsco-ceramic.com",
      key: "tds",
      imgFormat: "jpg",
    },
    {
      name: "Simple chat app",
      description:
        "Chat app to experiment with Firebase's Firestore and OAuth services. Built with Next.js + ChakraUI",
      link: "https://chat-app.vuvincent.com",
      key: "chat-app",
      imgFormat: "png",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="text-center text-4xl font-bold">🚀 Side Projects</div>
      <div className="flex w-full flex-wrap justify-center">
        {projectsList.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
