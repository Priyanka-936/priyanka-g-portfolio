import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto mt-40 px-8 scroll-mt-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="space-y-8">

        {/* Project 1 */}
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-yellow-600">
            📂 Smart Railway Gate Automation
          </h3>

          <p className="mt-4 text-gray-700">
            Intelligent railway gate automation using RFID-based train tracking,
            speed estimation and OTP fail-safe locking mechanism.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-gray-100 px-4 py-2 rounded-full">
              RFID
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Arduino
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              IoT
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Embedded Systems
            </span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-yellow-600">
            📂 Traffic Accident Analysis
          </h3>

          <p className="mt-4 text-gray-700">
            Data analytics project to identify accident-prone regions using
            clustering and visualization techniques.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Python
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Pandas
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Matplotlib
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Data Analysis
            </span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-yellow-600">
            📂 AI Study Buddy
          </h3>

          <p className="mt-4 text-gray-700">
            AI-powered learning assistant designed to help students with
            personalized study guidance, topic explanations and academic support.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Python
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              AI
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              NLP
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full">
              Custom Modules
            </span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Projects;