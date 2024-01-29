import React, { useState } from "react";
import useCustomTransition from "./customTransition";

const AboutMePage = () => {
  const [showModal, setShowModal] = useState(false);
  const email = "angarce01@gmail.com";

  const handleEmailIconClick = async () => {
    await navigator.clipboard.writeText(email);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  useCustomTransition(".contactMe", [
    "transition",
    "duration-700",
    "transform",
    "translate-y-10",
  ]);

  return (
    <div className="flex text-white justify-evenly flex-wrap">
      <div className="flex flex-col items-center max-w-screen-lg mt-36 lg:mt-16 contactMe mb-72">
        <h1 className="text-5xl text-secondaryPink -z-10">Contact</h1>
        <div className="p-5 text-2xl flex flex-col text-center leading-10 shadow-lg rounded-lg opacity-90 bg-primaryPurple mt-10 items-center">
          <h2 className="text-5xl text-secondaryPink m-5">Let's Connect!</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/a-a-garcia"
          >
            <i className="fa-brands fa-github text-5xl hover:text-secondaryPink hover:cursor-pointer m-5"></i>
          </a>
          <a onClick={handleEmailIconClick}>
            <i className="fa-solid fa-envelope text-5xl hover:text-secondaryPink hover:cursor-pointer m-5"></i>
          </a>
          {showModal && (
            <div className="m-2 text-lg text-secondaryPink animate-bounce">
              Email copied to clipboard!
            </div>
          )}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anthony-a-g/"
          >
            <i className="fa-brands fa-linkedin text-5xl hover:text-secondaryPink hover:cursor-pointer m-5"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
