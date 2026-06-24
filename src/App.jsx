import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Internships from "./Components/Internships";
import Certifications from "./Components/Certifications";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import PriyaAI from "./Components/PriyaAI";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="glow1"></div>
<div className="glow2"></div>

<Navbar />

      {/* Hero Section */}
      <motion.div
  className="text-center mt-40"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <motion.h1
    className="text-7xl font-bold text-[#D4AF37]"
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
    Priyanka G
  </motion.h1>

  <TypeAnimation
    sequence={[
      "THINK • BUILD • TRANSFORM",
      2000,
      "Creative Engineer",
      2000,
      "Software Developer",
      2000,
      "ECE Innovator",
      2000,
    ]}
    wrapper="h2"
    speed={50}
    repeat={Infinity}
    className="text-3xl mt-8 font-semibold"
  />

  <motion.p
    className="mt-10 text-xl text-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    Engineering Ideas into Experiences.
  </motion.p>

  <div className="mt-10 flex justify-center gap-6">
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="#projects"
      className="bg-[#D4AF37] text-white px-8 py-4 rounded-full shadow-lg"
    >
      Explore My Work
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="/Priyanka_G_Resume.pdf"
      download
      className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-white duration-300"
    >
      Download Resume
    </motion.a>
  </div>

  {/* Scroll Down Indicator */}
  <motion.div
    className="mt-20 flex justify-center"
    animate={{ y: [0, 10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
    }}
  >
    <a
      href="#about"
      className="text-[#D4AF37] text-5xl"
    >
      ↓
    </a>
  </motion.div>

</motion.div>

      <AboutMe />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Education />
      <Contact />
      <PriyaAI />
      <Footer />
    </>
  );
}

export default App;
