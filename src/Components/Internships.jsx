import { motion } from "framer-motion";
function Internships() {
  return (
    <motion.section
  id="internships"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
      <h2 className="text-5xl font-bold text-center mb-16">
        Internships
      </h2>

      <div className="space-y-10">

        {/* Triox */}
        <motion.div
  whileHover={{
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
  }}
  transition={{ duration: 0.3 }}
  className="bg-white rounded-3xl shadow-lg p-8"
>
          <h3 className="text-3xl font-bold text-yellow-600">
            Embedded Systems Intern
          </h3>

          <p className="text-xl mt-2">
            Triox Technology Company
          </p>

          <ul className="mt-6 text-lg leading-8 list-disc pl-6">
            <li>PCB Design and Hardware Integration</li>
            <li>Embedded C Programming</li>
            <li>Debugging and Testing</li>
            <li>Collaborated with engineering teams on embedded solutions</li>
          </ul>
        </motion.div>

        {/* IBM */}
        <motion.div
  whileHover={{
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
  }}
  transition={{ duration: 0.3 }}
  className="bg-white rounded-3xl shadow-lg p-8"
>
          <h3 className="text-3xl font-bold text-yellow-600">
            IBM SkillsBuild
          </h3>

          <p className="text-xl mt-2">
            AI-Powered Study Buddy Project
          </p>

          <ul className="mt-6 text-lg leading-8 list-disc pl-6">
            <li>Developed an AI-powered Study Buddy for students.</li>
            <li>Utilized customized Python processing modules and AI intelligence.</li>
            <li>Handled confidential administrative information with disciplined documentation.</li>
            <li>Ensured proper file governance and system asset management.</li>
          </ul>
        </motion.div>
        {/* Encapsulate IT */}
        <motion.div
  whileHover={{
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
  }}
  transition={{ duration: 0.3 }}
  className="bg-white rounded-3xl shadow-lg p-8"
>
          <h3 className="text-3xl font-bold text-yellow-600">
            Encapsulate IT
          </h3>

          <p className="text-xl mt-2">
            Frontend Development Intern
          </p>

          <ul className="mt-6 text-lg leading-8 list-disc pl-6">
            <li>Designed and engineered a modular responsive web interface.</li>
            <li>Built pages for marketing and electronic gadget detailing.</li>
            <li>Applied UI/UX principles to improve accessibility.</li>
            <li>Integrated frontend scripts for seamless device mapping.</li>
          </ul>
        </motion.div>
      </div>

    </motion.section>
  );
}

export default Internships;