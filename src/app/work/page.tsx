"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import zoetic from "@/assets/work/ui3.jpg";
import catguardianstnr from "@/assets/work/catguardianstnr.png";
import cobot from "@/assets/work/cobot1.png";
import checkmate from "@/assets/work/checkmate.png";

const slides = [
  {
    title: "1. Full-Stack Web Development (Volunteer)",
    company: "Cat Guardians TNR & Rescue",
    image: catguardianstnr,
    skills: [
      "React",
      "Next.js",
      "AWS",
      "Lambda",
      "SES",
      "WAF",
      "Node.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Material UI",
    ],
    description:
      "Developed a dynamic web application frontend using ReactJS with Vite and TypeScript, achieving a 35% reduction in page load times and improved scalability. Integrated AWS Lambda, SES, and API Gateway for efficient serverless backend operations. Collaborated on AngularJS and ReactJS components, ensuring consistent functionality across platforms. Implemented RESTful APIs, reducing response times by 20%, and refactored the codebase, optimizing performance and memory usage.",
  },
  {
    title: "2. Checkmate - Task Tracker",
    company: "Laguna Veterinary Care",
    image: checkmate,
    skills: ["UI/UX", "Figma", "R&D", "Usability Testing", "patient Engagement Strategy", "Customer Discovery", "Prototyping", "User Interviews" ],
    description: "Led the UI/UX design and research for a patient engagement Minimum Viable Product (MVP), leveraging Figma to develop detailed, interactive prototypes that facilitated efficient product design and production workflows. Conducted over 15 in-depth user interviews during the customer discovery phase, generating critical data-driven insights that directly informed product improvements and usability strategies. Collaborated closely in an intensive Research and Development (R&D) process, contributing to an IP-protected strategy, and designed a comprehensive usability and patient engagement approach that formed the foundation of the MVP.",
  },
  {
    title: "3. UI/UX Design",
    company: "Zoetic Motions",
    image: zoetic,
    skills: ["UI/UX", "Figma", "R&D", "Usability Testing", "patient Engagement Strategy", "Customer Discovery", "Prototyping", "User Interviews" ],
    description: "Led the UI/UX design and research for a patient engagement Minimum Viable Product (MVP), leveraging Figma to develop detailed, interactive prototypes that facilitated efficient product design and production workflows. Conducted over 15 in-depth user interviews during the customer discovery phase, generating critical data-driven insights that directly informed product improvements and usability strategies. Collaborated closely in an intensive Research and Development (R&D) process, contributing to an IP-protected strategy, and designed a comprehensive usability and patient engagement approach that formed the foundation of the MVP.",
  },
  {
    title: "4. Image Tracing Robot (UR3e)",
    company: "N/A",
    image: cobot,
    skills: ["Java", "Python", "TCP/IP", "Docker", "Image Processing", "System Integration", "Real-Time Communication"],
    description: "Designed and implemented a comprehensive system that enables real-time robotic drawing of user-uploaded images. This involved developing a Java application for image upload and subsequent processing in Python to extract precise contours. Established a Java TCP connection to a Docker-based robot simulator, facilitating efficient and accurate communication between systems. Optimized multi-language integration, resulting in a 25% reduction in communication latency. Implemented an end-to-end pipeline from image upload to robot movement, enhancing user experience and demonstrating the system's precise image tracing capabilities.",
  },
];

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  if (isMobile) {
    return (
      <div className="bg-primary text-white pt-20 pb-10 p-5 flex flex-col items-center">
        <h2 className="pt-5 pb-10 text-3xl">Projects</h2>
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <div className="bg-[#222128] w-full max-w-4xl mb-8 p-8 rounded">
              <h2 className="text-2xl font-semibold mb-2 text-accent">
                {slide.title}
              </h2>
              <p className="text-gray-400 text-md mb-4">{slide.company}</p>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1} Image`}
                className="max-w-full h-auto mx-auto mb-4 object-cover"
                width={1200}
                height={500}
              />
              <div className="flex flex-wrap gap-2 mb-2">
                {slide.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="pt-4">Description:</p>
              <p className="text-left text-sm text-gray-400">
                {slide.description}
              </p>
            </div>
            {index < slides.length - 1 && (
              <div className="border-b mb-7 border-gray-600 w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen text-white pt-20 pb-10 flex flex-col items-center relative">
      <h2 className="text-3xl mb-8">Projects</h2>
      <button
        className="absolute left-70 top-1/2 transform -translate-y-1/2 text-5xl text-gray-300 hover:text-white"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <div className="bg-[#222128] w-6/8 max-w-4xl">
        <div className="p-8 mx-4">
          <h2 className="text-accent text-2xl font-semibold mb-2">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-400 text-md mb-4">{slides[currentSlide].company}</p>
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1} Image`}
            className="mx-auto mb-4 object-cover"
            width={1200}
            height={500}
            style={{ height: '300px' }}
          />
          <div className="flex flex-wrap gap-2 mb-2">
            {slides[currentSlide].skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="pt-4">Description:</p>
          <div className="h-[150px] overflow-y-auto">
            <p className="text-left text-sm text-gray-400">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
      <button
        className="absolute right-70 top-1/2 transform -translate-y-1/2 text-5xl text-gray-300 hover:text-white"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Page;
