import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto mt-40 px-8 scroll-mt-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-yellow-600 mb-4">
            Languages
          </h3>
          <p>Java</p>
          <p>Python</p>
          <p>C</p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-yellow-600 mb-4">
            Web Development
          </h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-yellow-600 mb-4">
            Tools
          </h3>
          <p>Git</p>
          <p>VS Code</p>
          <p>AWS</p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Skills;
