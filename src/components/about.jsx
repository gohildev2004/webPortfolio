import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-8 py-24">
      <h2 className="text-8xl font-bold">ABOUT ME</h2>
      <div className="mt-20 ml-30 text-xl ">
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

      <div className="grid grid-cols-3 gap-x-20 ml-30 mt-20 text-3xl font-semibold">
        <div>TECHNOLOGIES</div>
        <div>SKILLS</div>
        <div>LANGUAGES</div>
      </div>
      <div className="grid grid-cols-3 gap-x-20 ml-30 mt-5 text-xl">
        <div>Tailwind css</div>
        <div>Swift</div>
        <div>English</div>
      </div>
      <div className="grid grid-cols-3 gap-x-20 ml-30 mt-2 text-xl">
        <div>React</div>
        <div>Javascript</div>
        <div>Hindi</div>
      </div>
      <div className="grid grid-cols-3 gap-x-20 ml-30 mt-2 text-xl">
        <div>Flutter</div>
        <div>Dart</div>
        <div>Gujarati</div>
      </div>
      <div className="grid grid-cols-3 gap-x-20 ml-30 mt-2 text-xl">
        <div>Firebase</div>
        <div>HTML</div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-x-20 ml-30 mt-2 text-xl">
        <div>Figma</div>
        <div>CSS</div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
