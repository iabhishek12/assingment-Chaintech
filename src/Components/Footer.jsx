
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 py-12 bg-black text-gray-400">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 relative">
        <img
          src="/src/assets/238b3b2a524f9cface2cd139f974dd7f588178b2.jpg"
          alt="workspace"
          className="w-24 sm:w-32 rounded-lg z-10"
        />

        <p className="text-center md:text-left p-4 bg-purple-400 text-white rounded-2xl max-w-full">
          Thanks for visiting my website! <br /> 
          If you have any questions, you can write me to any of my social networks, I am sure I will answer you.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-center sm:text-left">
        <span>Web</span>
        <div className="flex justify-center sm:justify-end gap-6 mt-2 sm:mt-0">
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#about" className="hover:underline">About Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
