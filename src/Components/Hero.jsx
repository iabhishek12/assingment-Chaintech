import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoFigma } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-5 px-4 sm:px-8 py-8 sm:py-12 items-center text-center md:text-left">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center md:items-start gap-6">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
          PRODUCT <br /> DESIGNER
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          CRISTIAN MUNOZ
        </h2>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 justify-center md:justify-start text-2xl">
          <FaSquareInstagram />
          <BiLogoFigma />
          <FaLinkedin />
          <FaTwitterSquare />
          <FaTelegram />
        </div>

        {/* Button */}
        <button className=" btn mt-6 border px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">
          Download Curriculum Vitae ⬇
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/src/assets/238b3b2a524f9cface2cd139f974dd7f588178b2.jpg"
          alt="Designer workspace"
          className="rounded-lg shadow-lg max-w-full w-[80%] sm:w-[60%] md:w-[100%] NavImage "
        />
      </div>
    </section>
  );
};

export default Hero;
