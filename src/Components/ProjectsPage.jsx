import projectTestImg from "../assets/project_test_img.png";

let myProjects = [
    {
        title: "GameHarmony",
        technologies: ["React", "MongoDB", "Express", "NodeJS"],
        description: "A video game recommendation app, garnering recommendations via querying the IGDB API. Full, simple CRUD functionality implemented."
    },
    {
        title: "PipeHubb",
        technologies: ["React", "MongoDB", "Express", "NodeJS"],
        description: "TBD"
    },
    {
        title: "Pup Pathways",
        technologies: ["Flask", "MySQL", "Python", "Google Maps API"],
        description: "TBD"
    },
    {
        title: "Cantaloupe Music",
        technologies: ["Flask", "MySQL", "Python", "Google Maps API"],
        description: "TBD"
    }
]

const ProjectsPage = () => {
  return (
    <div className="flex text-white justify-evenly">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl text-secondaryPink">Projects</h1>
        <div className="p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-20 overflow-y-auto max-h-80">
            {myProjects.map((project, index) => {
                return <p className="text-4xl p-10 m-4 hover:text-secondaryPink hover:cursor-pointer" key={index}>↯ {project.title}</p>
            })}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-20 overflow-y-auto max-h-80"><img src={projectTestImg}></img>
        <img src={projectTestImg}></img></div>
        <div className="flex flex-col p-5 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-20 overflow-y-auto max-h-80">
          <div className="flex">
            <h2 className="text-4xl text-secondaryPink p-5">Selected Project</h2>
            <div className="text-xl bg-secondaryPink flex justify-center items-center rounded-full h-1/2 p-5 mx-2">
                React
            </div>
            <div className="text-xl bg-secondaryPink flex justify-center items-center rounded-full h-1/2 p-5 mx-2">
                Express
            </div>
            <div className="text-xl bg-secondaryPink flex justify-center items-center rounded-full h-1/2 p-5 mx-2">
                Node.js
            </div>
            <div className="text-xl bg-secondaryPink flex justify-center items-center rounded-full h-1/2 p-5 mx-2">
                MongoDB
            </div>
          </div>
          <div>
            <p className="text-xl p-5">Selected Project project.description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
