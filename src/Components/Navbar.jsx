// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="flex justify-between items-center px-8 py-6 bg-black">
//       <h1 className="text-white font-bold text-xl">⚙ Web</h1>
//       <nav className="hidden md:flex space-x-8 text-sm">
//         <a href="#portfolio" className="hover:text-pink-400">Home</a>
//         <a href="#portfolio" className="hover:text-pink-400">Portfolio</a>
//         <a href="#skills" className="hover:text-pink-400">Skills</a>
//         <a href="#about" className="hover:text-pink-400">About Me</a>
//       </nav>
//       <button className="bg-pink-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600">
//         Contact Me
//       </button>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 sm:px-8 py-4 sm:py-6 bg-black">
      <h1 className="text-white font-bold text-xl">⚙ Web</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-sm">
        <a href="#portfolio" className="hover:text-pink-400">Home</a>
        <a href="#portfolio" className="hover:text-pink-400">Portfolio</a>
        <a href="#skills" className="hover:text-pink-400">Skills</a>
        <a href="#about" className="hover:text-pink-400">About Me</a>
      </nav>

      {/* Contact Button */}
      <button className="hidden sm:block bg-pink-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600">
        Contact Me
      </button>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden flex items-center">
        <button className="text-white text-2xl">&#9776;</button>
      </div>
    </header>
  );
};

export default Navbar;
