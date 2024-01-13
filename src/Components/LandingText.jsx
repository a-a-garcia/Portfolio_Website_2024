const LandingText = () => {
  return (
    <div className="landing-text text-white w-96 ml-40">
      <h1 className="text-8xl">
        Hi! My name is{" "}
        <span className="font-bold text-secondaryPink">Anthony A. Garcia.</span>
      </h1>
      <p className="text-4xl mt-5 leading-normal">
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
