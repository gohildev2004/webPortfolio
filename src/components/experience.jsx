import { useState } from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      year: 2012,
      company: "Microsoft",
      website: "microsoft.com",
      description:
        "Worked on developing scalable front-end interfaces using HTML, CSS, and JavaScript. Collaborated with backend teams to integrate APIs and improve performance across Microsoft web applications.",
    },
    {
      id: 2,
      title: "Front End Developer",
      year: 2018,
      company: "Apple",
      website: "apple.com",
      description:
        "Designed and implemented pixel-perfect UI components using React and TypeScript. Focused on building responsive and accessible design systems used across Apple’s product pages.",
    },
    {
      id: 3,
      title: "Senior Developer",
      year: 2020,
      company: "Tesla",
      website: "tesla.com",
      description:
        "Led a team of engineers in developing internal dashboard tools. Optimized application load times, mentored junior developers, and drove initiatives around code quality and deployment.",
    },
    {
      id: 4,
      title: "Product Manager",
      year: 2023,
      company: "Twitter",
      website: "twitter.com",
      description:
        "Defined product vision and roadmaps for creator monetization tools. Coordinated cross-functional efforts between engineering, design, and marketing to deliver features on time and at scale.",
    },
  ];

  const [expandId, setExpandId] = useState(null);

  const toggleExpand = (id) => {
    setExpandId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-8 py-24"
    >
      <h2 className="text-8xl font-bold">EXPERIENCE</h2>

      <div className="ml-40 mt-10">
        {experiences.map((experience) => (
          <div className="border-b border-b-[#2a2a2a]">
            <div
              key={experience.id}
              className="grid grid-cols-[auto_4fr_1fr_1fr_auto] items-center py-10 gap-x-4"
            >
              <h2 className="text-[25px] font-light">0{experience.id}.</h2>
              <h1 className="text-4xl">{experience.title}</h1>
              <p className="text-[18px] font-light">{experience.year}</p>
              <p className="text-[18px] font-light">{experience.company}</p>
              <button className="" onClick={() => toggleExpand(experience.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandId === experience.id ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out px-4 ${
                expandId === experience.id ? "max-h-48 py-4" : "max-h-0 py-0"
              }`}
            >
              <p className="text-md pl-9">
                <i>{experience.description}</i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
