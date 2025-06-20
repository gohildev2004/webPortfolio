import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex justify-between items-start">
      <div className="text-start mr-50">
        <div className="text-9xl font-bold mb-10">SOFTWARE DEVELOPER</div>
        <div className="text-3xl leading-relaxed">
          <p>I'm a Front-End Web Developer & Mobile </p>
          <p>Application Developer based in San Francisco, California</p>
        </div>
      </div>

      <div className="text-right">
        <div className="">
          <img
            src="src/assets/photo.png"
            alt="photo"
            className="w-full h-full object-cover z-1"
          />
        </div>
        <p className="text-2xl mt-3 relative right-5">- Dev Gohil</p>
      </div>

      <a
        href="#about"
        className="group absolute bottom-50  animate-bounce p-10 rounded-full border border-white hover:bg-white transition duration-300"
      >
        <img
          src="src/assets/downArrow.svg"
          alt="Scroll down"
          className="w-6 h-6 invert group-hover:invert-0 transition duration-300"
        />
      </a>
    </section>
  );
};

export default Hero;

{
  /* <div
        className="absolute top-[-10rem] right-[-10rem] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, #8B0723 0%, transparent 80%)",
          filter: "blur(10px)",
          opacity: 0.8,
        }}
      ></div> */
}

{
  /* <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hello, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">[Your Name]</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-prose">
          A creative developer crafting elegant solutions with clean code and
          modern design.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="inline-block bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section> */
}
