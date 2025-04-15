import React from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, GitHub } from "react-feather";

const contact = () => {
  return (
    <div className="pt-20 bg-primary min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col w-full max-w-7xl">
        <div className="flex justify-center items-center mb-5">
          <h2 className="text-3xl text-white font-bold">Get in Touch</h2>
        </div>
        <div className="flex justify-center items-center mb-2 text-gray-400 text-center">
          <p>
            Feel free to reach out to me for any inquiries or collaborations.
          </p>
        </div>

        <div className="p-6 w-full sm:w-[1/2] px-4 sm:px-6">
          <ContactForm />
        </div>

        <div className="p-6 text-gray-300 flex flex-col sm:flex-row justify-center items-start">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="bg-[#282c34] p-2 rounded flex justify-center items-center">
                <Linkedin className="text-accent w-8 h-8" />
              </div>
              <div className="flex flex-col ml-2">
                <span className="text-sm">LinkedIn</span>
                <p>
                  <a
                    className="text-gray-400 hover:underline"
                    href="https://www.linkedin.com/in/spanch02"
                  >
                    linkedin.com/in/spanch02
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pl-8 pr-8 hidden sm:block">
            <h1 className="text-4xl">|</h1>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="bg-[#282c34] p-2 rounded flex justify-center items-center">
                <Mail className="text-accent w-8 h-8" />
              </div>
              <div className="flex flex-col ml-2">
                <span className="text-sm">Email</span>
                <p>
                  <a
                    href="mailto:shivpanchal1114@gmail.com"
                    className="text-gray-400 hover:underline"
                  >
                    shivpanchal1114@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pl-8 pr-8 hidden sm:block">
            <h1 className="text-4xl">|</h1>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="bg-[#282c34] p-2 rounded flex justify-center items-center">
                <GitHub className="text-accent w-8 h-8" />
              </div>
              <div className="flex flex-col ml-2">
                <span className="text-sm">GitHub</span>
                <p>
                  <a
                    href="https://github.com/devMelloww"
                    className="text-gray-400 hover:underline"
                  >
                    https://github.com/devMelloww
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
