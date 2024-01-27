import { useEffect } from "react";
import projectTestImg from "../assets/project_test_img.png";
import React, { useState } from "react";

let myProjects = [
  {
    id: 0,
    title: "GameHarmony",
    technologies: ["React", "MongoDB", "Express", "NodeJS"],
    description:
      "A video game recommendation app, garnering recommendations via querying the IGDB API. Full, simple CRUD functionality implemented.",
  },
  {
    id: 1,
    title: "PipeHubb",
    technologies: ["React", "MongoDB", "Express", "NodeJS"],
    description: "TBD",
  },
  {
    id: 2,
    title: "Pup Pathways",
    technologies: ["Flask", "MySQL", "Python", "Google Maps API"],
    description: "TBD",
  },
  {
    id: 3,
    title: "Cantaloupe Music",
    technologies: ["Flask", "MySQL", "Python", "Google Maps API"],
    description: "TBD",
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(myProjects[0]);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <div className="flex text-white justify-evenly flex-wrap ">
      <div className="flex flex-col items-center max-w-screen-lg mt-20 lg:mt-0">
        <h1 className="text-5xl text-secondaryPink -z-10">Projects</h1>
        <div className="p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-16 overflow-y-auto max-h-80">
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
      <div className="flex flex-col max-w-screen-md">
        <div className="p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-20 overflow-y-auto max-h-80">
          <img src={projectTestImg}></img>
          <img src={projectTestImg}></img>
        </div>
        <div className="flex flex-col p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-20 overflow-y-auto max-h-80">
          <div className="flex">
            <h2 className="text-2xl text-secondaryPink p-5">
              {selectedProject.title}
            </h2>
            {selectedProject.technologies.map((technology) => {
              return (
                <div
                  key={technology}
                  className="text-lg bg-secondaryPink flex justify-center items-center rounded-full h-1/2 p-5 mx-2"
                >
                  {technology}
                </div>
              );
            })}
          </div>
          <div>
            <p className="text-xl p-5">{selectedProject.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
