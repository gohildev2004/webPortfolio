import React from "react";

const About = () => {
  return (
    <section id="about" className="about_section max-md:mt-30">
      <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
        ABOUT ME
      </div>
      <div className="mt-10 md:mt-30 lg:ml-30 md:text-2xl lg:text-xl">
        <p>
          As a Mobile Application Developer and Front-End Web Developer, I
          design, build, test, and maintain application systems across
          platforms, languages, and embedded environments. I specialize in
          creating seamless and visually stunning user experiences by leveraging
          cutting-edge tools like Figma, GitHub, iOS/Android, and web
          technologies including HTML, Tailwind CSS, JavaScript, and React JS.
        </p>
        <p className="mt-4">
          Currently, I am pursuing a Bachelors in Computer Science degree from
          San Francisco State University , where I’m building a strong
          foundation in computer science principles, system architecture, and
          software development. I’m eager to apply my knowledge and skills to
          innovative challenges in mobile and front-end development.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-20 md:grid-cols-3 lg:gap-x-20 lg:ml-30 mt-10 md:mt-30 md:text-2xl lg:text-3xl font-semibold">
        <div>
          <div>TECHNOLOGIES</div>
          <div className="font-medium md:text-[20px] md:gap-y-2 mt-5 lg:text-[20px] flex flex-col lg:gap-y-2 ">
            <div>Tailwind css</div>
            <div>React</div>
            <div>Flutter</div>
            <div>Firebase</div>
            <div>Figma</div>
          </div>
        </div>
        <div>
          <div>SKILLS</div>
          <div className="font-medium md:text-[20px] md:gap-y-2 mt-5 lg:text-[20px] flex flex-col lg:gap-y-2 ">
            <div>Swift</div>
            <div>JavaScript</div>
            <div>Dart</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
        </div>
        <div className="hidden md:block">
          <div>LANGUAGES</div>
          <div className="font-medium md:text-[20px] md:gap-y-2 mt-5 lg:text-[20px] flex flex-col lg:gap-y-2 ">
            <div>English</div>
            <div>Hindi</div>
            <div>Gujarati</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
