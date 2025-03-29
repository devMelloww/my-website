// app/page.tsx
"use client" // This directive makes this file a Client Component

import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import myimage from "../assets/myimage/image0.png"; 

export default function Home() {

  return (
    <div className="bg-primary pt-16 sm:pt-20 lg:pt-30 text-white min-h-screen pb-10">
      <div className="pt-15 max-w-7xl mx-auto px-4 sm:px-8 lg:px-30">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#26abff] font-medium tracking-wide"
            >
              <TypeAnimation
              sequence={[
                'Software Engineer', 1000,
                'Full-Stack Developer', 1000,
                'Software Developer', 1000
                
              ]}
              wrapper='span'
              speed={5}
              repeat={Infinity} 
              />
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-[#26abff] block mt-2 sm:mt-3">Shiv Panchal</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              I am a passionate software engineer with expertise in full-stack development.
              I love building innovative solutions and bringing ideas to life through code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start"
            >
              <a  href="/myresume.pdf"
                download
                className="bg-[#26abff] text-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium shadow-lg hover:bg-[#1e97e6] hover:scale-105 transition-all duration-300 flex items-center gap-2 w-fit"
              >
                <span>DOWNLOAD RESUME</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586V3a1 1 0 112 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/devMelloww" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-dashed border-[#26abff] rounded-full p-2 text-[#26abff] hover:border-white hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                >
                  <GitHubIcon sx={{ fontSize: 20 }} />
                </a>

                <a 
                  href="https://linkedin.com/in/spanch02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-dashed border-[#26abff] rounded-full p-2 text-[#26abff] hover:border-white hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                >
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </a>

                <a 
                  href="https://www.instagram.com/ssh1v_p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-dashed border-[#26abff] rounded-full p-2 text-[#26abff] hover:border-white hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[280px] sm:h-[400px] lg:h-[500px] w-full lg:flex-1 order-first lg:order-last"
          >
            <div className="relative flex items-center h-full justify-center">
              <Image 
              width={350}
              height={350}
                src={myimage}
                alt="Shiv Panchal"
                className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[70%] sm:max-w-[75%] lg:max-w-[80%] h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}