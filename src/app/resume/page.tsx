"use client";
import React, { useState, useMemo } from "react";
import Card from "@/components/Card";
import SkillCard from "@/components/SkillCard";

import reactLogo from "@/assets/skills/React.png";
import jsLogo from "@/assets/skills/JavaScript.png";
import nextLogo from "@/assets/skills/nextjs2.png";
import awsLogo from "@/assets/skills/AWS.png";
import pythonLogo from "@/assets/skills/Python.png";
import typescriptLogo from "@/assets/skills/TypeScript.png";
import javaLogo from "@/assets/skills/Java.png";
import angularLogo from "@/assets/skills/Angular.png";
import materialuiLogo from "@/assets/skills/Material-UI.png";
import htmlcssLogo from "@/assets/skills/Html-CSS.png";

const ExperienceContent = () => (
  <div>
    <h2 className="text-3xl text-center sm:text-left pt-10 md:pt-0">
      My Experience
    </h2>{" "}
    {/* Added text-center and sm:text-left */}
    <p className="pt-4 pb-4 text-gray-400 text-center sm:text-left">
      {" "}
      {/* Added text-center and sm:text-left */}I thrive on challenges and enjoy
      working collaboratively to build user-friendly applications. My focus is
      on creating clean, efficient, and scalable code.
    </p>
    <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-4 items-center md:items-start justify-center md:justify-start">
      <Card
        startDate="2024"
        endDate="Present"
        title="Full Stack Developer (Volunteer)"
        company="Cat Guardians TNR & Rescue"
      />
      <Card
        startDate="Jul 2023"
        endDate="Aug 2023"
        title="Research and Development Intern"
        company="Zoetic Motions"
      />
    </div>
  </div>
);

const EducationContent = () => (
  <div>
    <h2 className="text-3xl text-center sm:text-left pt-10 md:pt-0">
      My Education
    </h2>{" "}
    {/* Added text-center and sm:text-left */}
    <p className="pt-4 pb-4 text-gray-400 text-center sm:text-left">
      {" "}
      {/* Added text-center and sm:text-left */}
      Dedicated to a rigorous academic curriculum, I excelled in collaborative
      projects and developed a passion for creating robust and scalable
      software.
    </p>
    <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-4 items-center md:items-start justify-center md:justify-start">
      <Card
        startDate="2022"
        endDate="2024"
        title="Bachelor of Science in Software Engineering"
        company="California Polytechnic State University - San Luis Obispo"
      />
    </div>
  </div>
);

const SkillsContent = () => {
  const imageList = useMemo(
    () => [
      { name: "React", src: reactLogo },
      { name: "Next.js", src: nextLogo },
      { name: "AWS", src: awsLogo },
      { name: "JavaScript", src: jsLogo },
      { name: "Python", src: pythonLogo },
      { name: "TypeScript", src: typescriptLogo },
      { name: "Java", src: javaLogo },
      { name: "Angular", src: angularLogo },
      { name: "Material UI", src: materialuiLogo },
      { name: "Html/CSS", src: htmlcssLogo },
    ],
    []
  );

  return (
    <div>
      <h2 className="text-3xl text-center sm:text-left pt-10 md:pt-0">
        My Skills
      </h2>
      <p className="pt-4 pb-4 text-gray-400 text-center sm:text-left">
        I am proficient in a range of technologies and possess a strong ability
        to learn new tools quickly, allowing me to adapt to diverse project
        requirements.
      </p>
      {/* Mobile Version */}
      <div className="mt-4 md:hidden grid grid-cols-2 gap-5">
        {imageList.map((item) => (
          <SkillCard
            key={item.name}
            path={item.src.src}
            name={item.name}
            width={100}
            height={100}
          />
        ))}
      </div>
      {/* Desktop Version */}
      <div
        className="hidden md:block mt-4 h-90 overflow-y-auto custom-scrollbar overflow-x-hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          className="grid grid-cols-3 gap-5"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {imageList.map((item) => (
            <SkillCard
              key={item.name}
              path={item.src.src}
              name={item.name}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1C1C22;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4A4A4E;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      `}</style>
    </div>
  );
};

const AboutMeContent = () => (
  <div>
    <h3 className="text-3xl text-center sm:text-left pt-10 md:pt-0">
      About Me
    </h3>{" "}
    {/* Added text-center and sm:text-left */}
    <p className="text-gray-400 text-center sm:text-left mt-10">
      {" "}
      {/* Added text-center and sm:text-left */}
      Hi, I’m <span className="font-bold">Shiv Panchal</span>, a{" "}
      <span className="font-bold">
        recent Software Engineering graduate from Cal Poly
      </span>{" "}
      with a passion for building innovative and scalable solutions. Throughout
      my academic journey, I’ve worked on{" "}
      <span className="font-bold">real-world projects</span> that demonstrate my
      ability to solve complex problems, collaborate effectively, and deliver
      impactful results.
    </p>
    <p className="text-gray-400 text-center sm:text-left mt-5">
      I specialize in <span className="font-bold">full-stack development</span>,
      with hands-on experience in{" "}
      <span className="font-bold">React.js, Angular, TypeScript, and AWS</span>.
      From creating dynamic, user-friendly interfaces to optimizing backend
      operations with serverless architectures, I enjoy tackling technical
      challenges and continuously expanding my skill set.
    </p>
    <p className="text-gray-400 text-center sm:text-left mt-5">
      Beyond coding, I thrive in{" "}
      <span className="font-bold">collaborative, agile environments</span>,
      where I can contribute to meaningful projects and learn from experienced
      engineers. My goal is to build solutions that not only meet technical
      standards but also enhance user experiences and drive business value.
    </p>
    <p className="text-gray-400 text-center sm:text-left mt-5">
      When I’m not coding, you’ll find me exploring{" "}
      <span className="font-bold">new technologies</span>, working on{" "}
      <span className="font-bold">open-source projects</span>, or refining my
      skills through <span className="font-bold">LeetCode challenges</span> and
      technical workshops.
    </p>
  </div>
);

const ResumePage = () => {
  const [activeSection, setActiveSection] = useState("Experience");

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return <ExperienceContent />;
      case "Education":
        return <EducationContent />;
      case "Skills":
        return <SkillsContent />;
      case "About me":
        return <AboutMeContent />;
      default:
        return <ExperienceContent />;
    }
  };

  return (
    <div className="bg-primary pt-16 sm:pt-20 lg:pt-30 text-white min-h-screen pb-20">
      <div className=" mt-3 max-w-7xl mx-auto px-4 sm:px-8 lg:px-30">
        <div className="flex flex-col items-center lg:flex-row items-start gap-8 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-90">
            {/* ... (rest of the buttons and heading) */}
            <h2 className="text-4xl font-primary font-bold text-center lg:text-left pt-10 md:pt-0">
              Why hire me?
            </h2>
            <p className="pt-4 pb-4 flex flex-wrap gap-2 text-gray-400 text-center lg:text-left">
              Passionate Problem Solver with Hands-On Project Experience and a
              Growth Mindset.
            </p>
            <button
              className={`w-full px-4 py-3 cursor-pointer font-bold rounded text-center ${
                activeSection === "Experience"
                  ? "bg-accent text-gray-800"
                  : "bg-tabs"
              }`}
              onClick={() => setActiveSection("Experience")}
            >
              Experience
            </button>
            <button
              className={`w-full px-4 py-3 cursor-pointer font-bold rounded text-center ${
                activeSection === "Education"
                  ? "bg-accent text-gray-800"
                  : "bg-tabs"
              }`}
              onClick={() => setActiveSection("Education")}
            >
              Education
            </button>
            <button
              className={`w-full px-4 py-3 cursor-pointer font-bold rounded text-center ${
                activeSection === "Skills"
                  ? "bg-accent text-gray-800"
                  : "bg-tabs"
              }`}
              onClick={() => setActiveSection("Skills")}
            >
              Skills
            </button>
            <button
              className={`w-full px-4 py-3 cursor-pointer font-bold rounded text-center ${
                activeSection === "About me"
                  ? "bg-accent text-gray-800"
                  : "bg-tabs"
              }`}
              onClick={() => setActiveSection("About me")}
            >
              About me
            </button>
          </div>
          <div className="flex-1 w-full lg:w-auto">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
