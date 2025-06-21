import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-start items-center lg:items-start md:gap-25 lg:flex-row lg:justify-between gap-20 lg:gap-0">
      {/* Left: Text Block */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 gap-x-5">
          <p>SOFTWARE</p>
          <p>DEVELOPER</p>
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl leading-relaxed">
          <p>I'm a Front-End Web Developer & Mobile</p>
          <p>Application Developer based in San Francisco, California</p>
        </div>
      </div>

      {/* Right: Image Block */}
      <div className="text-center lg:text-right mb-10">
        <div className="inline-block overflow-hidden md-h-auto">
          <img
            src="/photo.png" // ✅ Use public folder: place image in /public
            alt="Dev Gohil"
            className="md:w-sm md:h-sm object-cover"
          />
        </div>
        <p className="text-lg sm:text-xl mt-3">Dev Gohil</p>
      </div>

      {/* Scroll Down Icon */}
      <a
        href="#about"
        className="group absolute hidden lg:block bottom-10 animate-bounce p-10 rounded-full border border-white hover:bg-white transition duration-300"
      >
        <img
          src="/downArrow.svg" // ✅ Also use public folder
          alt="Scroll down"
          className="w-6 h-6 invert group-hover:invert-0 transition duration-300"
        />
      </a>
    </section>
  );
};

export default Hero;
