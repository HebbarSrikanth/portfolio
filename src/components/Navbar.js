// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/#" className="ml-3 text-xl">
            Srikanth Hebbar
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="inline-flex items-center mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className=" inline-flex items-center mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
        <a href="https://github.com/HebbarSrikanth" 
          target='_blank' rel="noopener noreferrer" 
          className="mr-5 hover:text-white inline-flex items-center">
          <IoLogoGithub className="inline-block mx-1"/>Github
        </a>
        <a href="https://linkedin.com/in/srikanthhebbarmp" 
          target='_blank' rel="noopener noreferrer" 
          className="mr-5 hover:text-white inline-flex items-center">
          <IoLogoLinkedin className="inline-block mx-1"/>Linkedin
        </a>
      </div>
    </header>
  );
};

export default Navbar;
