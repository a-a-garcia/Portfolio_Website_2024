import { useEffect } from "react";
import gameharmony1 from "../assets/gameharmony1.png";
import gameharmony2 from "../assets/gameharmony2.png";
import pipehubb_wireframe from "../assets/pipehubb_wireframe.png";
import pup_pathways1 from "../assets/pup_pathways1.png";
import pup_pathways2 from "../assets/pup_pathways2.png";
import cantaloupe_music1 from "../assets/cantaloupe_music1.png";
import cantaloupe_music2 from "../assets/cantaloupe_music2.png";
import React, { useState } from "react";
import useCustomTransition from "./customTransition";

let myProjects = [
  {
    id: 0,
    title: "GameHarmony v1.0",
    technologies: ["React", "MongoDB", "Express", "NodeJS"],
    images: [{gameharmony1}, {gameharmony2}],
    description:
      "A video game recommendation app, garnering recommendations via querying the IGDB API. Full, simple CRUD functionality implemented.",
    githubLink: "https://github.com/a-a-garcia/GameHarmony",
  },
  {
    id: 1,
    title: "PipeHubb (WIP)",
    technologies: ["Next.js", "Prisma", "TailwindCSS", "TypeScript"],
    images: [{pipehubb_wireframe}],
    description:
      "PipeHubb is a sales pipeline application tailored to loan officers and their teams. It allows for the creation of loans and the tracking of their progress through the loan transaction lifecycle.",
    githubLink: "https://github.com/a-a-garcia",
  },
  {
    id: 2,
    title: "Pup Pathways v1.0",
    technologies: ["Flask", "MySQL", "Python", "Google Maps API"],
    images: [{pup_pathways1}, {pup_pathways2}],
    description:
      "Pup Pathways is a web application with the goal of allowing users to track the paths in which they walk their dogs. It utilizes geolocation to allow users to view the paths that they create, as well as other users' created paths.",
    githubLink: "https://github.com/a-a-garcia/Pup_Pathways",
  },
  {
    id: 3,
    title: "Cantaloupe Music v1.0",
    technologies: ["Flask", "MySQL", "Python", "Google Maps API"],
    images: [{cantaloupe_music1}, {cantaloupe_music2}],
    description:
      "Cantaloupe Music is a web application that simulates the experience of a music web player. It currently allows users to upload album files, song files, and play uploaded music. This was a group project with 2 other developers completed as part of the Coding Dojo cirriculum. My role was web designer and front-end engineer.",
    githubLink: "https://github.com/a-a-garcia",
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(myProjects[0]);

  useCustomTransition(".projectsPageList", [
    "transition",
    "duration-500",
    "transform",
    "translate-y-10",
  ]);

  useCustomTransition(".projectsPageImages", [
    "transition",
    "duration-1000",
    "transform",
    "translate-y-10",
  ]);

  useCustomTransition(".projectsPageText", [
    "transition",
    "duration-700",
    "transform",
    "translate-y-10",
  ]);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <div className="flex text-white justify-evenly flex-wrap">
      <div className="flex flex-col items-center max-w-screen-lg mt-36 sm:mt-40 md:mt-60 projectsPageList">
        <h1 className="text-5xl text-secondaryPink -z-10">Projects</h1>
        <div className="p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-10 overflow-y-auto max-h-80">
          {myProjects.map((project, index) => {
            return (
              <p
                className="text-2xl p-10 hover:text-secondaryPink hover:cursor-pointer"
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                ↯ {project.title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col max-w-screen-md items-center">
        <div className="px-5 pb-10 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-20 md:mt-40 overflow-y-auto max-h-96 projectsPageImages w-full">
          {selectedProject.images.map((image, imageIndex) => {
            return (
              <img src={Object.values(image)[0]} className="mt-10" key={imageIndex}></img>
            );
          })}
        </div>
        <div className="flex flex-col p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-20 overflow-y-auto mb-60 projectsPageText w-full">
          <div className="flex flex-col sm:flex-row items-center">
            <h2 className="text-2xl text-secondaryPink p-5">
              {selectedProject.title}
            </h2>
            {selectedProject.technologies.map((technology) => {
              return (
                <div
                  key={technology}
                  className="text-lg bg-secondaryPink flex justify-center items-center rounded-full shadow-lg h-1/3 p-3 sm:mx-2 my-2  cursor-default transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-100"
                >
                  {technology}
                </div>
              );
            })}
          </div>
          <div>
            <p className="text-xl p-5">{selectedProject.description}</p>
            <hr className="m-5"></hr>
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl ml-5 hover:underline hover:text-secondaryPink"
            >
              <i className="fa-brands fa-github"></i> Github Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
