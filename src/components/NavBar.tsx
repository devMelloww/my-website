"use client"
import React, { useState, useCallback } from 'react';
import Image from "next/image";
import Link from 'next/link';
import mylogo from '../assets/mylogo/mylogo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Resume", path: "/resume" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [setIsMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12 lg:px-30">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold relative group">
          <div className="absolute -inset-2 bg-[#26abff] opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-all duration-300 ease-in-out"></div>
          <div className="flex hover:scale-105 transition-all duration-300 ease-in-out items-center relative">
            <Image
              src={mylogo}
              alt='logo'
              width={90}
              height={100}
            />
          </div>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.path}
                className="hover:text-[#26abff] transition cursor-pointer"
              >
                {item.label}
              </Link>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#26abff] group-hover:w-full transition-all"></span>
            </li>
          ))}
          <button className="bg-[#26abff] text-black px-5 py-2 rounded-full font-medium shadow-lg hover:bg-[#1e97e6] transition cursor-pointer">
            Hire me
          </button>
        </ul>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none cursor-pointer"
        >
          <div className="w-6 flex flex-col space-y-1.5">
            <span
              className={`w-full h-0.5 bg-white block transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white block transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white block transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu - Slide-in from Right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#1c1c22] shadow-lg z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="focus:outline-none">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="h-full flex flex-col justify-center items-center space-y-6">
          {/* Moved the logo here and added text-center class */}
          <ul className="space-y-4 text-lg font-medium text-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  href={item.path}
                  className="block py-2 hover:text-[#26abff] transition cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-[#26abff] text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-[#1e97e6] transition cursor-pointer">
                Hire me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;