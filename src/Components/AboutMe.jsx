import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.section
      id="aboutMe"
      className="max-w-6xl mx-auto mt-40 px-8"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        AboutMe
      </h2>

      <div className="bg-white rounded-3xl shadow-lg p-10 space-y-10">

        <div>
          <span className="font-bold text-yellow-600">
            Name
          </span>
          <p>Priyanka G</p>
        </div>

        <div>
          <span className="font-bold text-yellow-600">
            Role
          </span>
          <p>Software Developer</p>
        </div>

        <div>
          <span className="font-bold text-yellow-600">
            Mission
          </span>
          <p>
            Building intelligent software and electronics
            solutions that transform ideas into experiences.
          </p>
        </div>

        <div>
          <span className="font-bold text-yellow-600">
            Vision
          </span>
          <p>
            Securing a Software Development role while
            continuously creating impactful technology.
          </p>
        </div>

      </div>
    </motion.section>
  );
}

export default AboutMe;