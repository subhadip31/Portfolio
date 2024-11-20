const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a budding frontend web developer, I thrive on creating intuitive
          and visually appealing user interfaces. My journey into web
          development began with a curiosity for how websites work, and it has
          since evolved into a fulfilling career path.
        </p>
        <br />
        <p className="text-xl">
          I'm eager to apply my skills to real-world projects, collaborate with
          talented teams, and contribute to the creation of exceptional digital
          experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
