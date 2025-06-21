import { useState } from "react";

const Connect = () => {
  const socials = [
    { name: "Email", link: "mailto:gohildev2004@gmail.com" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/gohildev" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/dev.go.hill?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
    },
    { name: "GitHub", link: "https://github.com/gohildev2004" },
  ];

  return (
    <section id="contact" className="section my-20">
      <div className="border-b border-b-[#2a2a2a] mb-10 md:mb-20"></div>
      <p className="section_title">LET'S CONNECT!</p>
      <p className="mt-5 md:mt-10 text-lg md:text-2xl mb-10 md:mb-20">
        {" "}
        <u>
          <a>Send me a message</a>
        </u>{" "}
        or{" "}
        <u>
          <a href="https://www.linkedin.com/in/gohildev">connect to LinkedIn</a>
        </u>
        ,and let’s discuss how I can help you.
      </p>

      <div className="border-b border-b-[#2a2a2a]"></div>

      <p className="text-xl md:text-2xl mt-10 md:mt-20">FIND ME @</p>

      <div className="flex flex-wrap mt-5 font-medium gap-5 ">
        {socials.map((social) => {
          return (
            <a
              key={social.name}
              href={social.link}
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-3xl border text-white border-white text-[14px] md:text-[18px] hover:bg-white hover:text-black"
            >
              {social.name}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Connect;
