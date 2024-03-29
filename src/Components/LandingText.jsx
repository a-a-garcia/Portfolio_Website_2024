import useCustomTransition from "./customTransition";

const LandingText = () => {
  useCustomTransition(".landing-text",["transition", "duration-500", "transform", "translate-y-20"]);

  return (
    <div className="landing-text text-white w-1/2 ml-10 md:mt-10 mt-28 mb-60">
      <h1 className="text-2xl sm:text-8xl">
        Hi! My name is{" "}
        <span className="font-bold text-secondaryPink">Anthony A. Garcia.</span>
      </h1>
      <p className="text-xl sm:text-4xl mt-5 leading-normal">
        I'm a full-stack/front-end engineer striving to create{" "}
        <span className="text-secondaryPink">
          stylish, resourceful, and efficient
        </span>{" "}
        web applications.
      </p>
    </div>
  );
};

export default LandingText;
