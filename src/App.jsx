import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
