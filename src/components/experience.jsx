import { useState } from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Front End Developer",
      year: "2021",
      company: "Vardaam",
      website: "microsoft.com",
      description:
        "Designed and developed across-platform mobile application that have active users within the first month of launch for private company. Utilized state management techniques to create responsive and reactive user interface.\nBuilt strong experience of Flutter development, HTML, Tailwind CSS, React JS",
    },
    {
      id: 2,
      title: "Flutter Developer",
      year: 2022,
      company: "Vardaam",
      website: "apple.com",
      description:
        "As a Flutter Developer, I built cross-platform apps using Dart, creating responsive UIs and integrating Firebase and REST APIs for real-time features. I used state management tools like Provider and Getx, optimized performance, and handled full app lifecycles—from development to deployment. This experience strengthened my skills in mobile architecture, backend integration, and agile workflows.",
    },
    // {
    //   id: 3,
    //   title: "IOS App Developer",
    //   year: 2025,
    //   company: "LiNGUiD",
    //   website: "tesla.com",
    //   description:
    //     "While developing the LiNGUiD app in Swift, I learned how to build a custom video player using AVQueuePlayer and AVPlayerLooper for seamless media playback. I integrated Firestore to retrieve and display real-time caption data, which taught me how to work with asynchronous data streams and overlay dynamic subtitles on video content. This project deepened my understanding of SwiftUI, reactive UI updates, and advanced multimedia handling, while also improving my skills in managing data synchronization, user experience, and clean architectural design.",
    // },
    {
      id: 4,
      title: "Orientation Leader",
      year: 2025,
      company: "SF State",
      website: "twitter.com",
      description:
        "As an Orientation Leader, I developed strong leadership, public speaking, and interpersonal communication skills by guiding new students through their transition to university life. I learned welcoming environments, manage group dynamics, and handle on-the-spot problem-solving with empathy and professionalism. This role strengthened my ability to collaborate with diverse teams, lead with confidence, and represent the university with enthusiasm and integrity.",
    },
  ];

  const [expandId, setExpandId] = useState(null);

  const toggleExpand = (id) => {
    setExpandId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white md:pt-30 max-md:mt-50"
    >
      <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
        EXPERIENCE
      </h2>

      <div className="lg:ml-40 mt-10">
        {experiences.map((experience) => (
          <div key={experience.id} className="border-b border-b-[#2a2a2a]">
            <div
              key={experience.id}
              className="grid grid-cols-3 md:grid-cols-[auto_4fr_1fr_1fr_auto] items-center py-10 gap-x-4"
            >
              <h2 className="text-[25px] hidden md:block font-light">
                0{experience.id}.
              </h2>
              <h1 className="md:text-4xl max-md:col-span-2 max-md:font-semibold">
                {experience.title}{" "}
              </h1>
              <p className="text-[18px] font-light max-md:text-end">
                {experience.year}
              </p>
              <p className="max-md:text-[16px] text-[18px] font-light">
                {experience.company}
              </p>
              <button
                className="hidden md:block"
                onClick={() => toggleExpand(experience.id)}
              >
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
